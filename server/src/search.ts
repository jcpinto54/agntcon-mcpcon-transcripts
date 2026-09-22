/**
 * Querying the prebuilt index. Pure: no I/O, no runtime assumptions, so the
 * same code runs in the Worker, in Node tests, and anywhere else.
 *
 * Ranking is BM25 over chunk text, plus a smaller BM25 over each document's
 * title, speakers and track, then a weight per kind of source so a
 * transcript outranks a summary outranks a slide description outranks an
 * abstract — the archive's own trust order. Weights alone are not enough, so
 * the final pass promotes a derived hit to its talk's transcript passage: the
 * summaries and slides find a talk, the transcript is what gets quoted.
 * Results are capped per talk so one long deck cannot fill the page.
 */

import type { ArchiveIndex, Chunk, Doc, Kind, Session } from './types.ts';
import { uniqueTerms } from './text.ts';

const K1 = 1.2;
const B = 0.75;
/** How much a match on title/speaker/track counts, relative to a body match. */
const META_WEIGHT = 0.8;
/** Multiplier when the query appears verbatim in the chunk. */
const PHRASE_BONUS = 1.3;
/**
 * Chunks shorter than this fraction of the average are scaled down in
 * proportion. BM25's length normalisation favours short text, and the
 * shortest chunks here are title cards and closing slides that repeat the
 * talk title and say nothing else — a match on them is not worth showing
 * ahead of a slide with content.
 */
const SHORT_FRACTION = 0.5;

/** The archive's trust order, as ranking weights. */
export const KIND_WEIGHT: Record<Kind, number> = {
  transcript: 1.0,
  summary: 0.9,
  slides: 0.75,
  abstract: 0.6,
  materials: 0.5,
};
/** Q&A text is the room, not the speaker — still worth finding, slightly less worth ranking. */
const QA_WEIGHT = 0.9;

export interface SearchOptions {
  /** Maximum results (default 8). */
  limit?: number;
  /** Restrict to these kinds of source. */
  kinds?: Kind[];
  day?: 'thu' | 'fri';
  /** Case-insensitive substring of the track name. */
  track?: string;
  /** Restrict to one talk, by slug or session id. */
  talk?: string;
  /** Maximum results from any one session (default 3). */
  perTalk?: number;
}

export interface Hit {
  chunk: Chunk;
  doc: Doc;
  session: Session;
  score: number;
  /**
   * Set when a derived passage matched and the talk's transcript was returned
   * in its place: what matched, so the citation stays honest.
   */
  via?: { kind: Kind; loc: string; path: string; line: number };
}

export interface SessionFilter {
  day?: 'thu' | 'fri';
  track?: string;
  speaker?: string;
  /** Only sessions the archive holds this kind of text for; 'any' = at least one of them. */
  has?: Kind | 'any';
  /** Case-insensitive substring of the title. */
  title?: string;
}

export class Archive {
  readonly index: ArchiveIndex;
  private readonly sessionById = new Map<string, Session>();
  private readonly sessionBySlug = new Map<string, Session>();
  private readonly docsBySession = new Map<string, Doc[]>();

  constructor(index: ArchiveIndex) {
    this.index = index;
    for (const s of index.sessions) {
      this.sessionById.set(s.id, s);
      if (s.slug) this.sessionBySlug.set(s.slug, s);
    }
    for (const d of index.docs) {
      const list = this.docsBySession.get(d.session);
      if (list) list.push(d);
      else this.docsBySession.set(d.session, [d]);
    }
  }

  get coverage() {
    return this.index.coverage;
  }

  /** Find a session by slug, full session id, or an unambiguous id prefix (case-insensitive). */
  session(key: string): Session | undefined {
    const k = key.trim().toLowerCase();
    if (!k) return undefined;
    const bySlug = this.sessionBySlug.get(k);
    if (bySlug) return bySlug;
    const byId = this.sessionById.get(k);
    if (byId) return byId;
    if (k.length >= 6) {
      const matches = this.index.sessions.filter((s) => s.id.startsWith(k));
      if (matches.length === 1) return matches[0];
    }
    return undefined;
  }

  sessions(filter: SessionFilter = {}): Session[] {
    const track = filter.track?.toLowerCase();
    const speaker = filter.speaker?.toLowerCase();
    const title = filter.title?.toLowerCase();
    return this.index.sessions.filter((s) => {
      if (filter.day && s.day !== filter.day) return false;
      if (track && !s.track.toLowerCase().includes(track)) return false;
      if (speaker && !s.speakers.some((p) => p.name.toLowerCase().includes(speaker))) return false;
      if (title && !s.title.toLowerCase().includes(title)) return false;
      if (filter.has === 'any' && s.has.length === 0) return false;
      if (filter.has && filter.has !== 'any' && !s.has.includes(filter.has)) return false;
      return true;
    });
  }

  /** The archive's documents for a session, in trust order. */
  docs(session: Session): Doc[] {
    return this.docsBySession.get(session.id) ?? [];
  }

  chunksOf(doc: Doc): Chunk[] {
    return this.index.chunks.slice(doc.firstChunk, doc.firstChunk + doc.nChunks);
  }

  /**
   * Rebuild the readable text of a document from its header and chunks:
   * paragraph breaks between chunks, a space where a chunk continues a split
   * paragraph, and the two transcript headings put back where they were.
   */
  documentText(doc: Doc): string {
    let out = doc.header ? doc.header + '\n\n' : '';
    if (doc.kind === 'transcript') out += '## Transcript\n\n';
    let inQa = false;
    let first = true;
    for (const c of this.chunksOf(doc)) {
      if (c.qa && !inQa) {
        out += (first ? '' : '\n\n') + '## Q&A\n\n';
        inQa = true;
        first = true;
      }
      out += (first ? '' : c.cont ? ' ' : '\n\n') + c.text;
      first = false;
    }
    return out;
  }

  search(query: string, opts: SearchOptions = {}): Hit[] {
    const idx = this.index;
    const terms = uniqueTerms(query);
    if (terms.length === 0) return [];
    const limit = Math.max(1, Math.min(opts.limit ?? 8, 50));
    const perTalk = Math.max(1, opts.perTalk ?? 3);
    const kinds = opts.kinds && opts.kinds.length ? new Set(opts.kinds) : null;
    const track = opts.track?.toLowerCase();
    const onlySession = opts.talk ? this.session(opts.talk) : undefined;
    if (opts.talk && !onlySession) return [];

    // BM25 over chunk bodies.
    const N = idx.chunks.length;
    const body = new Map<number, number>();
    for (const t of terms) {
      const p = idx.postings[t];
      if (!p) continue;
      const df = p.length / 2;
      const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
      for (let i = 0; i < p.length; i += 2) {
        const id = p[i];
        const tf = p[i + 1];
        const len = idx.chunkLen[id];
        const s = (idf * (tf * (K1 + 1))) / (tf + K1 * (1 - B + (B * len) / idx.avgChunkLen));
        body.set(id, (body.get(id) ?? 0) + s);
      }
    }

    // A smaller BM25 over title / speakers / track, per document.
    const meta = new Map<number, number>();
    const D = idx.docs.length;
    for (const t of terms) {
      const p = idx.docPostings[t];
      if (!p) continue;
      const idf = Math.log(1 + (D - p.length + 0.5) / (p.length + 0.5));
      for (const docId of p) meta.set(docId, (meta.get(docId) ?? 0) + idf);
    }
    // A document whose title or speaker matched is a candidate even when no chunk did.
    for (const docId of meta.keys()) {
      const d = idx.docs[docId];
      if (d.nChunks > 0 && !body.has(d.firstChunk)) body.set(d.firstChunk, 0);
    }

    const phrase = terms.length >= 2 ? query.trim().toLowerCase().replace(/\s+/g, ' ') : null;
    const scored: Hit[] = [];
    for (const [chunkId, bodyScore] of body) {
      const chunk = idx.chunks[chunkId];
      const doc = idx.docs[chunk.doc];
      if (kinds && !kinds.has(doc.kind)) continue;
      const session = this.sessionById.get(doc.session);
      if (!session) continue;
      if (onlySession && session.id !== onlySession.id) continue;
      if (opts.day && session.day !== opts.day) continue;
      if (track && !session.track.toLowerCase().includes(track)) continue;
      let score = bodyScore + META_WEIGHT * (meta.get(doc.id) ?? 0);
      if (score <= 0) continue;
      score *= KIND_WEIGHT[doc.kind];
      if (chunk.qa) score *= QA_WEIGHT;
      score *= Math.min(1, idx.chunkLen[chunkId] / (SHORT_FRACTION * idx.avgChunkLen));
      scored.push({ chunk, doc, session, score });
    }
    scored.sort((a, b) => b.score - a.score);

    // The verbatim-phrase bonus is only worth computing near the top.
    if (phrase) {
      const head = scored.slice(0, Math.min(scored.length, 100));
      for (const h of head) {
        if (h.chunk.text.toLowerCase().replace(/\s+/g, ' ').includes(phrase)) h.score *= PHRASE_BONUS;
      }
      head.sort((a, b) => b.score - a.score);
      scored.splice(0, head.length, ...head);
    }

    // Transcript-first. Summaries, slide descriptions and abstracts are short
    // and keyword-dense, so they routinely outscore the speech they were
    // derived from. They still earn their place in the index — they find the
    // talk — but what comes back is the speaker's own words: a derived hit for
    // a talk whose transcript also matched is replaced by that transcript
    // passage, and once a talk's matching transcript passages run out its
    // remaining derived hits are dropped rather than padded in.
    //
    // Two cases keep a derived passage, both honest: a talk with no transcript
    // in the archive, and a talk whose transcript matched nothing — there is no
    // raw passage to quote, and hiding the match would be worse than labelling
    // it. `kinds` is applied before this, so a caller who asks only for
    // summaries still gets summaries.
    const transcripts = new Map<string, Hit[]>();
    for (const h of scored) {
      if (h.doc.kind !== 'transcript') continue;
      const list = transcripts.get(h.session.id);
      if (list) list.push(h);
      else transcripts.set(h.session.id, [h]);
    }

    const out: Hit[] = [];
    const perSession = new Map<string, number>();
    const taken = new Set<number>();
    const cursor = new Map<string, number>();
    for (const h of scored) {
      if (taken.has(h.chunk.id)) continue;
      const n = perSession.get(h.session.id) ?? 0;
      if (n >= perTalk) continue;
      let hit = h;
      if (h.doc.kind !== 'transcript') {
        const list = transcripts.get(h.session.id);
        if (list) {
          let i = cursor.get(h.session.id) ?? 0;
          while (i < list.length && taken.has(list[i].chunk.id)) i++;
          cursor.set(h.session.id, i);
          if (i >= list.length) continue;
          // `scored` is sorted and anything better was already taken or capped,
          // so the transcript passage scores no higher than the hit it replaces
          // — keeping the finder's score leaves the ranking order untouched.
          hit = { ...list[i], score: h.score, via: { kind: h.doc.kind, loc: h.chunk.loc, path: h.doc.path, line: h.chunk.line } };
        }
      }
      taken.add(hit.chunk.id);
      perSession.set(h.session.id, n + 1);
      out.push(hit);
      if (out.length >= limit) break;
    }
    return out;
  }
}
