/**
 * The three operations the archive exposes — search, read, list — as plain
 * functions returning both a text rendering for a model to read and a JSON
 * object for code. `mcp.ts` wraps them as MCP tools and `api.ts` as HTTP
 * endpoints, so the two surfaces can never drift apart.
 *
 * Both reading operations default to the transcript: the raw speech is what
 * the archive is for, and everything else here is derived from it.
 */

import type { Archive } from './search.ts';
import type { Coverage, Kind, Session } from './types.ts';

/** A caller error: bad talk key, no such part. Surfaces as an MCP tool error / HTTP 404. */
export class ToolError extends Error {
  readonly status: number;
  constructor(message: string, status = 404) {
    super(message);
    this.status = status;
  }
}

export interface ToolResult {
  text: string;
  data: Record<string, unknown>;
}

export const KIND_NOTE: Record<Kind, string> = {
  transcript: "the speaker's own words, raw speech-to-text (names may be mangled; the guide's spelling wins)",
  summary: 'derived from the transcript — use it to find, quote the transcript',
  slides: "a slide described in words — derived, not the speaker's words",
  materials: 'what the speaker shared',
  abstract: 'the abstract from the conference guide — what the speaker planned months earlier, never what was said on stage',
};

export const QA_NOTE =
  'Q&A — the room, not the speaker: attribute as "an audience member asked" or "in the Q&A", never as the speaker';

const DAY_NAME: Record<string, string> = { thu: 'Thursday', fri: 'Friday' };

export function coverageNote(c: Coverage): string {
  return (
    `Archive coverage: ${c.transcripts} of ${c.sessions} sessions have a transcript (${c.summaries} also summarised); ` +
    `${c.decks} have a slide deck (${c.slides} slides described); ${c.covered} sessions have anything at all. ` +
    `Most of the conference was never recorded, so a topic missing here was very likely discussed in a room nobody ` +
    `transcribed — say "no transcript here covers it", not "nobody talked about it".`
  );
}

/** How a session is addressed in tool calls: its slug when it has a directory, else its id. */
export function talkKey(s: Session): string {
  return s.slug ?? s.id;
}

function speakerNames(s: Session): string {
  return s.speakers.map((p) => p.name).join(', ') || '(no speaker listed)';
}

function when(s: Session): string {
  return `${DAY_NAME[s.day] ?? s.day} ${s.date}, ${s.start}–${s.end}, ${s.room}`;
}

function holdings(s: Session): string {
  return s.has.length ? s.has.join(', ') : 'nothing yet — only the abstract';
}

// ---------------------------------------------------------------------------

export interface SearchArgs {
  query: string;
  limit?: number;
  kinds?: Kind[];
  day?: 'thu' | 'fri';
  track?: string;
  talk?: string;
  per_talk?: number;
}

export function searchArchive(archive: Archive, args: SearchArgs): ToolResult {
  const query = args.query.trim();
  if (!query) throw new ToolError('query is empty', 400);
  const hits = archive.search(query, {
    limit: args.limit,
    kinds: args.kinds,
    day: args.day,
    track: args.track,
    talk: args.talk,
    perTalk: args.per_talk,
  });
  const c = archive.coverage;
  const results = hits.map((h, i) => ({
    rank: i + 1,
    talk: talkKey(h.session),
    session_id: h.session.id,
    title: h.session.title,
    speakers: h.doc.speakers,
    kind: h.doc.kind,
    location: h.chunk.loc,
    path: h.doc.path,
    line: h.chunk.line,
    qa: Boolean(h.chunk.qa),
    score: Math.round(h.score * 1000) / 1000,
    text: h.chunk.text,
    // Present only when the query matched derived text and the talk's own
    // transcript was returned instead.
    ...(h.via ? { found_via: { kind: h.via.kind, location: h.via.loc, path: h.via.path, line: h.via.line } } : {}),
  }));

  const lines: string[] = [coverageNote(c), ''];
  if (hits.length === 0) {
    lines.push(
      `No passage in the archive matches "${query}".`,
      'Try fewer or different terms (names, protocol terms and product names match best), or list_sessions to see which sessions the archive holds text for.'
    );
  } else {
    lines.push(`${hits.length} passage${hits.length === 1 ? '' : 's'} for "${query}":`, '');
    for (const r of results) {
      const note = r.qa ? QA_NOTE : KIND_NOTE[r.kind];
      const via = r.found_via ? ` · found via the ${r.found_via.kind} (${r.found_via.location})` : '';
      lines.push(
        `### ${r.rank}. ${r.title} — ${r.speakers.join(', ')}`,
        `${r.kind} · ${r.location} · \`${r.path}:${r.line}\` · talk: ${r.talk}${via}`,
        `(${note})`,
        '',
        r.text,
        ''
      );
    }
    lines.push(
      'Passages come from the transcript wherever the archive has one; a summary, slide or abstract passage means that talk was never transcribed, or its transcript does not mention this.',
      'To read more of a talk, call read_talk with its talk key — part="transcript" by default, also slides, materials or session — or read_summary for the derived summary.'
    );
  }
  return { text: lines.join('\n'), data: { query, coverage: c, results } };
}

// ---------------------------------------------------------------------------

export type Part = 'transcript' | 'summary' | 'slides' | 'materials' | 'session';

export interface ReadArgs {
  talk: string;
  part?: Part;
  offset?: number;
  max_chars?: number;
  /** The tool the caller used, so the "continues:" hint names it. Default read_talk. */
  as?: 'read_talk' | 'read_summary';
}

export const READ_DEFAULT_CHARS = 12000;

/** The call that reads the next window, named after the tool the caller used. */
function resume(as: ReadArgs['as'], key: string, part: Part, offset: number): string {
  return as === 'read_summary'
    ? `read_summary(talk="${key}", offset=${offset})`
    : `read_talk(talk="${key}", part="${part}", offset=${offset})`;
}

function sessionSheet(archive: Archive, s: Session): string {
  const lines = [`# ${s.title}`, ''];
  for (const p of s.speakers) {
    lines.push(`**${p.name}**${p.org ? ` — ${p.org}` : ''}${p.bio ? `: ${p.bio}` : ''}`);
  }
  if (!s.speakers.length) lines.push('(no speaker listed in the guide)');
  lines.push('', `When: ${when(s)} · ${s.track} · ${s.kind}`, `Session id: ${s.id}`);
  lines.push(`Archive holds: ${holdings(s)}${s.slug ? ` (talk: ${s.slug})` : ''}`);
  const docs = archive.docs(s).filter((d) => d.kind !== 'abstract');
  for (const d of docs) lines.push(`- ${d.kind}: \`${d.path}\`${d.deck ? ` (${d.deck})` : ''}`);
  lines.push('', `## Abstract`, `(${KIND_NOTE.abstract})`, '', s.desc || '(the guide has no abstract for this session)');
  return lines.join('\n');
}

export function readTalk(archive: Archive, args: ReadArgs): ToolResult {
  const session = archive.session(args.talk);
  if (!session) {
    throw new ToolError(`No session matches "${args.talk}". Use list_sessions or search_archive to find a talk key (slug or session id).`);
  }
  const part: Part = args.part ?? 'transcript';
  const key = talkKey(session);

  if (part === 'session') {
    const text = sessionSheet(archive, session);
    return {
      text,
      data: { talk: key, session_id: session.id, part, title: session.title, speakers: session.speakers, when: when(session), track: session.track, kind: session.kind, has: session.has, abstract: session.desc, text },
    };
  }

  const docs = archive.docs(session).filter((d) => d.kind === part);
  if (docs.length === 0) {
    throw new ToolError(
      `The archive has no ${part} for "${session.title}". It holds: ${holdings(session)}. ` +
        `Use part="session" for the guide entry (speakers, abstract, what is here).`
    );
  }
  const full =
    docs.length === 1
      ? archive.documentText(docs[0])
      : docs.map((d) => `# Deck: ${d.deck ?? d.path}\n\n${archive.documentText(d)}`).join('\n\n---\n\n');

  const offset = Math.max(0, Math.min(args.offset ?? 0, full.length));
  const maxChars = Math.max(500, Math.min(args.max_chars ?? READ_DEFAULT_CHARS, 60000));
  let end = Math.min(full.length, offset + maxChars);
  if (end < full.length) {
    // Prefer to break at a paragraph or line end, if one is in the second half of the window.
    const cut = Math.max(full.lastIndexOf('\n\n', end), full.lastIndexOf('\n', end));
    if (cut > offset + maxChars / 2) end = cut;
  }
  const slice = full.slice(offset, end);
  const next = end < full.length ? end : null;
  const paths = docs.map((d) => d.path).join(', ');
  const header = [
    `# ${session.title} — ${speakerNames(session)}`,
    `${part} · \`${paths}\` · characters ${offset}–${end} of ${full.length}` +
      (next !== null ? ` · continues: ${resume(args.as, key, part, next)}` : ' · end of document'),
    `(${KIND_NOTE[part]}${part === 'transcript' ? '; below a "## Q&A" heading, ' + QA_NOTE : ''})`,
    '',
  ];
  return {
    text: header.join('\n') + slice,
    data: { talk: key, session_id: session.id, part, paths: docs.map((d) => d.path), offset, end, next_offset: next, total_chars: full.length, text: slice },
  };
}

// ---------------------------------------------------------------------------

export interface ListArgs {
  day?: 'thu' | 'fri';
  track?: string;
  speaker?: string;
  has?: Kind | 'any';
  title?: string;
}

export function listSessions(archive: Archive, args: ListArgs = {}): ToolResult {
  const sessions = archive.sessions(args);
  const filters = Object.entries(args)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `${k}=${String(v)}`);
  const lines = [
    coverageNote(archive.coverage),
    '',
    `${sessions.length} session${sessions.length === 1 ? '' : 's'}${filters.length ? ` matching ${filters.join(', ')}` : ''}:`,
  ];
  let day = '';
  for (const s of sessions) {
    if (s.day !== day) {
      day = s.day;
      lines.push('', `## ${DAY_NAME[s.day] ?? s.day} ${s.date}`);
    }
    lines.push(
      `- ${s.start} · ${s.room} · **${s.title}** — ${speakerNames(s)} · ${s.track} · ${s.kind} · has: ${holdings(s)} · talk: ${talkKey(s)}`
    );
  }
  return {
    text: lines.join('\n'),
    data: {
      coverage: archive.coverage,
      sessions: sessions.map((s) => ({
        talk: talkKey(s),
        session_id: s.id,
        title: s.title,
        speakers: s.speakers.map((p) => p.name),
        day: s.day,
        date: s.date,
        start: s.start,
        end: s.end,
        room: s.room,
        track: s.track,
        kind: s.kind,
        has: s.has,
      })),
    },
  };
}
