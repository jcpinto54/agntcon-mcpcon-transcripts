/**
 * Relevance and behaviour of the search over the real index. `npm test`
 * rebuilds the index first, so these run against the archive as it is.
 * Expectations are on talks that exist today; a talk removed at a speaker's
 * request would need its line here removed too.
 */

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { Archive } from '../src/search.ts';
import { listSessions, readTalk, searchArchive, ToolError } from '../src/tools.ts';
import type { ArchiveIndex } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const index = JSON.parse(readFileSync(resolve(HERE, '..', 'data', 'index.json'), 'utf8')) as ArchiveIndex;
const archive = new Archive(index);

function slugsOf(query: string, opts = {}) {
  return archive.search(query, opts).map((h) => h.session.slug ?? h.session.id);
}

test('the index is consistent', () => {
  assert.equal(index.version, 1);
  assert.equal(index.sessions.length, index.coverage.sessions);
  assert.equal(index.chunkLen.length, index.chunks.length);
  let next = 0;
  for (const d of index.docs) {
    assert.equal(d.firstChunk, next, `doc ${d.path} chunks are contiguous`);
    next += d.nChunks;
    for (const c of archive.chunksOf(d)) assert.equal(c.doc, d.id);
  }
  assert.equal(next, index.chunks.length);
  for (const s of index.sessions) if (s.slug) assert.equal(archive.session(s.slug), s);
});

test('stateless MCP finds the transports deck first and the security talk near it', () => {
  const slugs = slugsOf('stateless MCP transports');
  assert.equal(slugs[0], 'stateless-future-mcp-transports');
  assert.ok(slugs.includes('year-breaking-mcp-tells-builders-protocol-gaps-ships'), slugs.join(', '));
});

test('a precise protocol term finds the slide that defines it, in a talk nobody transcribed', () => {
  const [top] = archive.search('SEP-2567 explicit state handles');
  assert.equal(top.session.slug, 'stateless-future-mcp-transports');
  assert.equal(top.doc.kind, 'slides');
  assert.match(top.chunk.loc, /^Slide 9/);
  // Nothing to promote it to, so the slide stands as the passage.
  assert.ok(!top.session.has.includes('transcript'));
  assert.equal(top.via, undefined);
});

test('a phrase from a transcript comes back from the transcript, not the summary that quotes it', () => {
  // The summary quotes the same sentence and, being denser, outscores the
  // transcript. The summary finds the talk; the passage returned is the
  // speech it was written from.
  const hits = archive.search('more capable models get better at reward hacking');
  assert.equal(hits[0].session.slug, 'no-central-brain');
  assert.equal(hits[0].doc.kind, 'transcript');
  assert.match(hits[0].chunk.text, /reward hacking/);
});

test('every passage from a talk that has a transcript is a transcript passage', () => {
  // The one exception is a talk whose transcript matched nothing at all: the
  // derived text is then the only evidence there is, so it stands, labelled.
  for (const q of ['reward hacking', 'agent memory', 'evals', 'pull request review', 'observability tracing', 'legacy migration', 'confidently wrong']) {
    for (const h of archive.search(q, { limit: 12 })) {
      if (h.doc.kind === 'transcript') continue;
      if (!h.session.has.includes('transcript')) continue;
      const own = archive.search(q, { talk: h.session.slug!, kinds: ['transcript'], limit: 1 });
      assert.equal(own.length, 0, `${q}: ${h.session.slug} returned a ${h.doc.kind} although its transcript matches`);
    }
  }
});

test('a promoted passage says what found it, and nothing is returned twice', () => {
  const hits = archive.search('reward hacking', { limit: 12 });
  const promoted = hits.find((h) => h.via);
  assert.ok(promoted, 'some hit was promoted from derived text');
  assert.equal(promoted!.doc.kind, 'transcript');
  assert.notEqual(promoted!.via!.kind, 'transcript');
  assert.ok(promoted!.via!.path.endsWith('.md'), promoted!.via!.path);
  const ids = hits.map((h) => h.chunk.id);
  assert.equal(new Set(ids).size, ids.length, 'no chunk appears twice');
  for (const h of archive.search('agent', { limit: 30 })) if (h.via) assert.equal(h.doc.kind, 'transcript');
});

test('asking for one kind still returns that kind', () => {
  const summaries = archive.search('reward hacking', { kinds: ['summary'] });
  assert.ok(summaries.length > 0);
  for (const h of summaries) {
    assert.equal(h.doc.kind, 'summary');
    assert.equal(h.via, undefined);
  }
  const slides = archive.search('agent memory', { kinds: ['slides'] });
  assert.ok(slides.length > 0);
  for (const h of slides) assert.equal(h.doc.kind, 'slides');
});

test('a speaker name finds their talk even where the body never says it', () => {
  assert.equal(slugsOf('Fausto Albers')[0], 'no-central-brain');
  assert.equal(slugsOf('Amine Raji')[0], 'year-breaking-mcp-tells-builders-protocol-gaps-ships');
});

test('kinds, day, track and talk filters apply', () => {
  for (const h of archive.search('agents', { kinds: ['transcript'] })) assert.equal(h.doc.kind, 'transcript');
  for (const h of archive.search('agents', { day: 'fri' })) assert.equal(h.session.day, 'fri');
  for (const h of archive.search('agents', { track: 'keynote' })) assert.match(h.session.track, /Keynotes/);
  for (const h of archive.search('agents', { talk: 'no-central-brain' })) assert.equal(h.session.slug, 'no-central-brain');
  assert.deepEqual(archive.search('agents', { talk: 'no-such-talk' }), []);
});

test('results are capped per talk and by limit', () => {
  const hits = archive.search('agent', { limit: 20, perTalk: 2 });
  assert.ok(hits.length <= 20);
  const per = new Map<string, number>();
  for (const h of hits) per.set(h.session.id, (per.get(h.session.id) ?? 0) + 1);
  for (const n of per.values()) assert.ok(n <= 2);
  assert.equal(archive.search('agent', { limit: 3 }).length, 3);
});

test('Q&A passages carry the flag and abstracts exist for sessions nobody recorded', () => {
  const qa = index.chunks.filter((c) => c.qa);
  assert.ok(qa.length > 0);
  for (const c of qa) assert.equal(index.docs[c.doc].kind, 'transcript');
  const unrecorded = index.sessions.find((s) => s.has.length === 0 && s.desc);
  assert.ok(unrecorded, 'some session has only an abstract');
  const hit = archive.search(unrecorded!.title, { kinds: ['abstract'] })[0];
  assert.equal(hit.session.id, unrecorded!.id);
});

test('nonsense and empty queries return nothing rather than throwing', () => {
  assert.deepEqual(archive.search('xqzvvqx plorf'), []);
  assert.deepEqual(archive.search('   '), []);
  assert.deepEqual(archive.search('the of and'), []);
});

test('documentText rebuilds a transcript with its header and the Q&A heading', () => {
  const qaChunk = index.chunks.find((c) => c.qa)!;
  const doc = index.docs[qaChunk.doc];
  const text = archive.documentText(doc);
  assert.ok(text.startsWith('# '));
  assert.ok(text.includes('\n\n## Transcript\n\n'));
  const headings = text.split('\n').filter((l) => l.trim() === '## Q&A');
  assert.equal(headings.length, 1, 'exactly one Q&A heading line (the header may mention it in prose)');
  assert.ok(text.indexOf('\n## Q&A\n') < text.indexOf(qaChunk.text), 'the heading precedes the Q&A text');
  const original = readFileSync(resolve(HERE, '..', '..', doc.path), 'utf8');
  // Every paragraph of the original body is in the rebuilt text, word for
  // word. Whitespace is collapsed on both sides: a paragraph longer than the
  // window is split on a sentence boundary and rejoined with a space, which
  // may have been a hard line wrap in the file.
  const flat = (s: string) => s.replace(/\s+/g, ' ').trim();
  const rebuilt = flat(text);
  const body = original.split('## Transcript')[1];
  for (const para of body.split(/\n\s*\n/).map(flat).filter((p) => p && !p.startsWith('#'))) {
    assert.ok(rebuilt.includes(para), `missing paragraph: ${para.slice(0, 60)}`);
  }
  // No paragraph break was invented inside a split paragraph.
  const longest = body.split(/\n\s*\n/).map(flat).sort((a, b) => b.length - a.length)[0];
  assert.ok(rebuilt.includes(longest), 'the longest paragraph survives in one piece');
});

test('the tool layer renders search, read and list with coverage and caveats', () => {
  const search = searchArchive(archive, { query: 'stateless mcp', limit: 3 });
  assert.match(search.text, /^Archive coverage: \d+ of 93 sessions have a transcript/);
  assert.match(search.text, /### 1\. Stateless: The Future of MCP Transports — Kurtis Van Gent, Shaun Smith/);
  assert.match(search.text, /derived, not the speaker's words/);
  assert.equal((search.data.results as unknown[]).length, 3);

  const none = searchArchive(archive, { query: 'xqzvvqx' });
  assert.match(none.text, /No passage in the archive matches/);

  const read = readTalk(archive, { talk: 'no-central-brain', part: 'transcript', max_chars: 2000 });
  assert.match(read.text, /^# No Central Brain — Fausto Albers/);
  assert.match(read.text, /continues: read_talk\(talk="no-central-brain", part="transcript", offset=\d+\)/);
  assert.equal(typeof read.data.next_offset, 'number');
  const rest = readTalk(archive, { talk: 'no-central-brain', offset: read.data.next_offset as number, max_chars: 60000 });
  assert.equal(rest.data.next_offset, null);
  assert.equal((read.data.text as string).length + (rest.data.text as string).length, read.data.total_chars);

  const sheet = readTalk(archive, { talk: 'stateless-future-mcp-transports', part: 'session' });
  assert.match(sheet.text, /Kurtis Van Gent/);
  assert.match(sheet.text, /what the speaker planned months earlier/);
  assert.match(sheet.text, /Archive holds: .*slides/);

  assert.throws(() => readTalk(archive, { talk: 'stateless-future-mcp-transports', part: 'transcript' }), ToolError);
  assert.throws(() => readTalk(archive, { talk: 'nope' }), ToolError);

  const byId = readTalk(archive, { talk: index.sessions[0].id, part: 'session' });
  assert.equal(byId.data.session_id, index.sessions[0].id);

  const list = listSessions(archive, { has: 'transcript' });
  assert.equal((list.data.sessions as unknown[]).length, index.coverage.transcripts);
  assert.match(list.text, /## Thursday 2026-09-17/);
  const all = listSessions(archive);
  assert.equal((all.data.sessions as unknown[]).length, 93);
});
