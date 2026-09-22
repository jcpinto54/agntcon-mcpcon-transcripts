/**
 * The shape of the prebuilt index (server/data/index.json).
 *
 * The index is the archive, chunked and inverted, plus the conference
 * schedule. `scripts/build_index.ts` writes it; `search.ts` reads it. Nothing
 * in here assumes today's size — every list grows as talks are added and the
 * build is rerun.
 */

/** What kind of text a chunk comes from. Order here is also the trust order. */
export type Kind = 'transcript' | 'summary' | 'slides' | 'materials' | 'abstract';

export const KINDS: readonly Kind[] = ['transcript', 'summary', 'slides', 'materials', 'abstract'];

export interface Speaker {
  name: string;
  /** Company or role line from the guide, e.g. "Google Cloud". */
  org: string;
  bio: string;
}

/** One of the 93 sessions in guide/sessions.json, plus what the archive holds for it. */
export interface Session {
  id: string;
  /** The talks/<slug>/ directory, or null when nobody has added anything yet. */
  slug: string | null;
  title: string;
  speakers: Speaker[];
  day: 'thu' | 'fri';
  /** ISO date, derived from the day. */
  date: string;
  start: string;
  end: string;
  room: string;
  track: string;
  /** talk | keynote | workshop | panel | sponsored */
  kind: string;
  /** The abstract from the guide — what the speaker planned to say, never what was said. */
  desc: string;
  /** Which kinds of archive text exist for this session ('abstract' is never listed; every session has one). */
  has: Kind[];
}

/** One file in the archive (or one abstract), split into a contiguous run of chunks. */
export interface Doc {
  id: number;
  slug: string | null;
  session: string;
  kind: Kind;
  /** Repo-relative path, for citations. */
  path: string;
  title: string;
  speakers: string[];
  /** The deck file name, for kind === 'slides'. */
  deck?: string;
  /** Everything above the chunked body: speaker header, recording notes. Kept so the file can be rebuilt. */
  header: string;
  /** Index of this doc's first chunk in ArchiveIndex.chunks; its chunks are contiguous. */
  firstChunk: number;
  nChunks: number;
  /** Characters of text across the chunks. */
  chars: number;
}

export interface Chunk {
  id: number;
  doc: number;
  /** Where in the file: "Slide 8 — SEP 2575: Stateless MCP", "The argument", "Transcript", "Q&A". */
  loc: string;
  /** 1-based line in the file where the chunk starts. */
  line: number;
  text: string;
  /** True below a transcript's `## Q&A` heading, where speaker and audience are not distinguished. */
  qa?: boolean;
  /** True when this chunk continues the previous chunk's paragraph; rejoin with a space. */
  cont?: boolean;
}

export interface Coverage {
  sessions: number;
  transcripts: number;
  summaries: number;
  materials: number;
  decks: number;
  slides: number;
  /** Sessions with at least one of transcript, summary or materials. */
  covered: number;
}

export interface ArchiveIndex {
  version: 1;
  builtAt: string;
  /** Short git commit of the content the index was built from, when available. */
  commit: string | null;
  coverage: Coverage;
  sessions: Session[];
  docs: Doc[];
  chunks: Chunk[];
  /** Token count per chunk, parallel to `chunks`. */
  chunkLen: number[];
  avgChunkLen: number;
  /** term -> [chunkId, tf, chunkId, tf, ...] */
  postings: Record<string, number[]>;
  /** term -> [docId, ...] over each doc's title, speakers, track and room. */
  docPostings: Record<string, number[]>;
}
