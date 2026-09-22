#!/usr/bin/env node
/**
 * Build server/data/index.json from the archive.
 *
 * Walks talks/<slug>/ for transcript.md, summary.md, materials.md and
 * materials/*.slides.md, reads every session from guide/sessions.json, chunks
 * it all, and writes one inverted index. Rerun it whenever content changes —
 * `npm run dev`, `npm test` and `npm run deploy` do so automatically.
 *
 *   node scripts/build_index.ts
 *
 * Nothing here is specific to today's archive: a new talk directory, a new
 * deck, or a summary added beside an old transcript is picked up on the next
 * run. Anything odd (a file with no session_id, a session_id the guide does
 * not know) is reported on stderr and skipped rather than failing the build,
 * so one bad file never takes the search down.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chunkMaterials, chunkSlides, chunkSummary, chunkTranscript, cleanAbstract, splitFrontmatter } from '../src/chunk.ts';
import type { ChunkedDoc } from '../src/chunk.ts';
import { tokenize, uniqueTerms } from '../src/text.ts';
import type { ArchiveIndex, Chunk, Doc, Kind, Session, Speaker } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const OUT = resolve(HERE, '..', 'data', 'index.json');
const OUT_TS = resolve(HERE, '..', 'data', 'index.ts');

/** The conference ran on these two days; the guide only says "thu" / "fri". */
const DAY_DATE: Record<string, string> = { thu: '2026-09-17', fri: '2026-09-18' };

interface GuideSpeaker {
  n: string;
  c?: string;
  bio?: string;
}
interface GuideSession {
  id: string;
  day: 'thu' | 'fri';
  start: string;
  end: string;
  title: string;
  kind: string;
  track: string;
  room: string;
  desc: string;
  speakers: GuideSpeaker[];
}

function warn(msg: string): void {
  process.stderr.write(`build_index: ${msg}\n`);
}

function gitCommit(): string | null {
  try {
    return execFileSync('git', ['-C', ROOT, 'rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).trim() || null;
  } catch {
    return null;
  }
}

function main(): void {
  const guide = JSON.parse(readFileSync(join(ROOT, 'guide', 'sessions.json'), 'utf8')) as { sessions: GuideSession[] };

  const sessions: Session[] = guide.sessions.map((s) => ({
    id: s.id,
    slug: null,
    title: s.title,
    speakers: s.speakers.map(
      (p): Speaker => ({ name: p.n, org: p.c ?? '', bio: p.bio ?? '' })
    ),
    day: s.day,
    date: DAY_DATE[s.day] ?? '',
    start: s.start,
    end: s.end,
    room: s.room,
    track: s.track,
    kind: s.kind,
    desc: cleanAbstract(s.desc ?? ''),
    has: [],
  }));
  const byId = new Map(sessions.map((s) => [s.id, s]));

  const docs: Doc[] = [];
  const chunks: Chunk[] = [];
  let decks = 0;
  let slides = 0;

  const addDoc = (session: Session, kind: Kind, path: string, chunked: ChunkedDoc, deck?: string): void => {
    if (chunked.chunks.length === 0 && !chunked.header) {
      warn(`${path}: nothing to index`);
      return;
    }
    const doc: Doc = {
      id: docs.length,
      slug: session.slug,
      session: session.id,
      kind,
      path,
      title: session.title,
      speakers: session.speakers.map((p) => p.name),
      ...(deck ? { deck } : {}),
      header: chunked.header,
      firstChunk: chunks.length,
      nChunks: chunked.chunks.length,
      chars: chunked.chunks.reduce((n, c) => n + c.text.length, 0),
    };
    docs.push(doc);
    for (const c of chunked.chunks) {
      chunks.push({
        id: chunks.length,
        doc: doc.id,
        loc: c.loc,
        line: c.line,
        text: c.text,
        ...(c.qa ? { qa: true } : {}),
        ...(c.cont ? { cont: true } : {}),
      });
    }
    if (kind !== 'abstract' && !session.has.includes(kind)) session.has.push(kind);
  };

  // A talk directory belongs to the session its files name in `session_id`.
  const talksDir = join(ROOT, 'talks');
  const talkFiles: Array<{ session: Session; kind: Kind; path: string; text: string; deck?: string }> = [];
  for (const slug of readdirSync(talksDir).sort()) {
    const dir = join(talksDir, slug);
    if (!statSync(dir).isDirectory()) continue;
    const files: Array<{ file: string; kind: Kind }> = [
      { file: 'transcript.md', kind: 'transcript' },
      { file: 'summary.md', kind: 'summary' },
      { file: 'materials.md', kind: 'materials' },
    ];
    const materialsDir = join(dir, 'materials');
    if (existsSync(materialsDir)) {
      for (const f of readdirSync(materialsDir).sort()) {
        if (f.endsWith('.slides.md')) files.push({ file: join('materials', f), kind: 'slides' });
      }
    }
    let session: Session | undefined;
    for (const { file, kind } of files) {
      const path = join(dir, file);
      if (!existsSync(path)) continue;
      const text = readFileSync(path, 'utf8');
      const { fm } = splitFrontmatter(text);
      const rel = relative(ROOT, path);
      if (!fm.session_id) {
        warn(`${rel}: no session_id in frontmatter, skipped`);
        continue;
      }
      const s = byId.get(fm.session_id);
      if (!s) {
        warn(`${rel}: session_id ${fm.session_id} is not in guide/sessions.json, skipped`);
        continue;
      }
      if (session && session.id !== s.id) {
        warn(`${rel}: session_id differs from the other files in talks/${slug}/, skipped`);
        continue;
      }
      session = s;
      if (s.slug && s.slug !== slug) warn(`session "${s.title}" appears in two directories: ${s.slug} and ${slug}`);
      s.slug ??= slug;
      talkFiles.push({ session: s, kind, path: rel, text, deck: fm.deck });
    }
  }

  // Docs in trust order per session: transcript, summary, slides, materials — then every abstract.
  const order: Record<Kind, number> = { transcript: 0, summary: 1, slides: 2, materials: 3, abstract: 4 };
  talkFiles.sort((a, b) => a.session.title.localeCompare(b.session.title) || order[a.kind] - order[b.kind] || a.path.localeCompare(b.path));
  for (const f of talkFiles) {
    switch (f.kind) {
      case 'transcript':
        addDoc(f.session, 'transcript', f.path, chunkTranscript(f.text));
        break;
      case 'summary':
        addDoc(f.session, 'summary', f.path, chunkSummary(f.text));
        break;
      case 'materials':
        addDoc(f.session, 'materials', f.path, chunkMaterials(f.text));
        break;
      case 'slides': {
        const chunked = chunkSlides(f.text);
        decks += 1;
        slides += chunked.chunks.length;
        addDoc(f.session, 'slides', f.path, chunked, f.deck);
        break;
      }
    }
  }
  for (const s of sessions) {
    if (!s.desc) continue;
    addDoc(s, 'abstract', 'guide/sessions.json', {
      header: '',
      chunks: [{ loc: 'Abstract', line: 1, text: `${s.title}\n\n${s.desc}` }],
    });
  }

  // Invert.
  const postings = new Map<string, number[]>();
  const chunkLen: number[] = [];
  for (const c of chunks) {
    const toks = tokenize(c.text);
    chunkLen.push(toks.length);
    const tf = new Map<string, number>();
    for (const t of toks) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const [t, n] of tf) {
      let list = postings.get(t);
      if (!list) postings.set(t, (list = []));
      list.push(c.id, n);
    }
  }
  const docPostings = new Map<string, number[]>();
  for (const d of docs) {
    const s = byId.get(d.session)!;
    for (const t of uniqueTerms(`${d.title} ${d.speakers.join(' ')} ${s.track} ${s.room}`)) {
      let list = docPostings.get(t);
      if (!list) docPostings.set(t, (list = []));
      list.push(d.id);
    }
  }
  const avgChunkLen = chunkLen.length ? chunkLen.reduce((a, b) => a + b, 0) / chunkLen.length : 1;

  const count = (kind: Kind) => docs.filter((d) => d.kind === kind).length;
  const index: ArchiveIndex = {
    version: 1,
    builtAt: new Date().toISOString(),
    commit: gitCommit(),
    coverage: {
      sessions: sessions.length,
      transcripts: count('transcript'),
      summaries: count('summary'),
      materials: count('materials'),
      decks,
      slides,
      covered: sessions.filter((s) => s.has.length > 0).length,
    },
    sessions,
    docs,
    chunks,
    chunkLen,
    avgChunkLen,
    postings: Object.fromEntries(postings),
    docPostings: Object.fromEntries(docPostings),
  };

  mkdirSync(dirname(OUT), { recursive: true });
  const json = JSON.stringify(index);
  writeFileSync(OUT, json);
  // The Worker imports the same bytes as a string module and JSON.parses them
  // once at start-up: faster than evaluating a multi-megabyte object literal,
  // and it needs no bundler rule or ambient type declaration.
  writeFileSync(
    OUT_TS,
    `// Generated by scripts/build_index.ts — do not edit; rerun \`npm run build\`.\n` +
      `export const INDEX_JSON: string = ${JSON.stringify(json)};\n`
  );
  const c = index.coverage;
  process.stdout.write(
    `build_index: ${c.sessions} sessions, ${c.transcripts} transcripts, ${c.summaries} summaries, ` +
      `${c.materials} materials, ${c.decks} decks (${c.slides} slides); ` +
      `${docs.length} docs, ${chunks.length} chunks, ${postings.size} terms; ` +
      `${(json.length / 1024 / 1024).toFixed(2)} MB -> ${relative(process.cwd(), OUT)}\n`
  );
}

main();
