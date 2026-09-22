/**
 * Splitting each kind of archive file into chunks small enough to return
 * from a search, and lossless enough to rebuild the file from.
 *
 * Every chunker returns the header (everything above the body: speaker line,
 * bio, recording notes) separately from the chunks, and `search.ts` joins
 * them back together for `read_talk`. So the index holds one copy of the
 * text, not two.
 */

export interface RawChunk {
  loc: string;
  /** 1-based line in the file where the chunk begins. */
  line: number;
  text: string;
  qa?: boolean;
  /**
   * True when this chunk continues a paragraph the previous chunk started —
   * a paragraph longer than WINDOW_MAX split on a sentence boundary. Rejoin
   * with a space, not a paragraph break. (Whitespace at that one point is
   * the only thing the split does not preserve exactly.)
   */
  cont?: boolean;
}

export interface ChunkedDoc {
  header: string;
  chunks: RawChunk[];
}

export interface Frontmatter {
  [key: string]: string;
}

/** Transcript windows aim for this many characters and never merge past it. */
export const WINDOW_TARGET = 1000;
/** A single paragraph longer than this is split on sentence boundaries. */
export const WINDOW_MAX = 1600;

/**
 * Split off the YAML frontmatter. Values are kept as raw strings; the only
 * ones the builder needs are session_id, deck and slides.
 */
export function splitFrontmatter(md: string): { fm: Frontmatter; body: string; bodyLine: number } {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(md);
  if (!m) return { fm: {}, body: md, bodyLine: 1 };
  const fm: Frontmatter = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, '$1');
  }
  // Lines occupied by the frontmatter, including both fences.
  const fmLines = m[0].split('\n').length - 1;
  return { fm, body: md.slice(m[0].length), bodyLine: fmLines + 1 };
}

interface Para {
  text: string;
  line: number;
  qa: boolean;
  cont?: boolean;
}

/** Break one over-long paragraph into sentence groups of at most `max` characters. */
function splitLong(p: Para, max: number): Para[] {
  if (p.text.length <= max) return [p];
  const sentences = p.text.split(/(?<=[.!?])\s+/);
  const out: Para[] = [];
  let buf = '';
  for (const s of sentences) {
    if (buf && buf.length + 1 + s.length > max) {
      out.push({ text: buf, line: p.line, qa: p.qa, cont: out.length > 0 });
      buf = s;
    } else {
      buf = buf ? buf + ' ' + s : s;
    }
  }
  if (buf) out.push({ text: buf, line: p.line, qa: p.qa, cont: out.length > 0 });
  return out;
}

/** Merge consecutive paragraphs into windows of about `target` characters. */
function windows(paras: Para[], target: number, max: number): Para[] {
  const out: Para[] = [];
  let buf: Para | null = null;
  for (const p of paras.flatMap((x) => splitLong(x, max))) {
    if (buf && buf.qa === p.qa && buf.text.length + 2 + p.text.length <= target) {
      buf.text += (p.cont ? ' ' : '\n\n') + p.text;
    } else {
      if (buf) out.push(buf);
      buf = { ...p };
    }
  }
  if (buf) out.push(buf);
  return out;
}

/**
 * transcript.md: the header runs up to `## Transcript`; the body below is
 * paragraphs, with `## Q&A` marking where the speaker stops being the only
 * voice. Other headings are dropped; everything else — including inline
 * markers like *[Recording resumes]* — is kept, because it is part of the
 * record.
 */
export function chunkTranscript(md: string): ChunkedDoc {
  const { body, bodyLine } = splitFrontmatter(md);
  const lines = body.split('\n');
  let start = lines.findIndex((l) => /^## Transcript\s*$/.test(l));
  let header = '';
  if (start === -1) start = 0;
  else {
    header = lines.slice(0, start).join('\n').trim();
    start += 1;
  }
  const paras: Para[] = [];
  let cur: string[] = [];
  let curLine = 0;
  let qa = false;
  const flush = () => {
    if (cur.length) paras.push({ text: cur.join('\n'), line: curLine, qa });
    cur = [];
  };
  for (let i = start; i < lines.length; i++) {
    const l = lines[i];
    if (/^## Q&A\s*$/.test(l)) {
      flush();
      qa = true;
      continue;
    }
    if (/^#{1,6} /.test(l) || !l.trim()) {
      flush();
      continue;
    }
    if (!cur.length) curLine = bodyLine + i;
    cur.push(l);
  }
  flush();
  return {
    header,
    chunks: windows(paras, WINDOW_TARGET, WINDOW_MAX).map((p) => ({
      loc: p.qa ? 'Q&A' : 'Transcript',
      line: p.line,
      text: p.text,
      ...(p.qa ? { qa: true } : {}),
      ...(p.cont ? { cont: true } : {}),
    })),
  };
}

/** Sections introduced by `## ` headings, each kept whole. Used for summaries and slide decks. */
function chunkSections(md: string, headingRe: RegExp): ChunkedDoc {
  const { body, bodyLine } = splitFrontmatter(md);
  const lines = body.split('\n');
  const first = lines.findIndex((l) => headingRe.test(l));
  if (first === -1) return { header: body.trim(), chunks: [] };
  const header = lines.slice(0, first).join('\n').trim();
  const chunks: RawChunk[] = [];
  let loc = '';
  let line = 0;
  let buf: string[] = [];
  const flush = () => {
    const text = buf.join('\n').trim();
    if (text) chunks.push({ loc, line, text });
    buf = [];
  };
  for (let i = first; i < lines.length; i++) {
    const l = lines[i];
    if (headingRe.test(l)) {
      flush();
      loc = l.replace(/^#+\s*/, '').trim();
      line = bodyLine + i;
    }
    buf.push(l);
  }
  flush();
  return { header, chunks };
}

/** summary.md: one chunk per `## ` section ("In one line", "The argument", ...). */
export function chunkSummary(md: string): ChunkedDoc {
  return chunkSections(md, /^## /);
}

/** *.slides.md: one chunk per `## Slide N — Title` section. */
export function chunkSlides(md: string): ChunkedDoc {
  return chunkSections(md, /^## Slide \d+/);
}

/** materials.md: a single chunk — it is short, and its value is the deck description and the links. */
export function chunkMaterials(md: string): ChunkedDoc {
  const { body, bodyLine } = splitFrontmatter(md);
  const text = body.trim();
  return { header: '', chunks: text ? [{ loc: 'Materials', line: bodyLine, text }] : [] };
}

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

/** The guide's abstracts carry HTML entities and the odd tag. */
export function cleanAbstract(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, code: string) => {
      if (code[0] === '#') {
        const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
        return Number.isFinite(n) ? String.fromCodePoint(n) : m;
      }
      return ENTITIES[code.toLowerCase()] ?? m;
    })
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
