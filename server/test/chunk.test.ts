import assert from 'node:assert/strict';
import { test } from 'node:test';

import { chunkMaterials, chunkSlides, chunkSummary, chunkTranscript, cleanAbstract, splitFrontmatter, WINDOW_MAX, WINDOW_TARGET } from '../src/chunk.ts';

const TRANSCRIPT = `---
title: "A Talk"
speakers: [Some One]
session_id: abc123
---

# A Talk

**Some One** — Somewhere

*Thursday 17 September 2026, 10:00, Room — Track*

> Transcribed with Whisper.

## Transcript

First paragraph of the talk. It has two sentences.

*[Recording resumes]*

Second paragraph, still the speaker.

## Q&A

Someone asked a question. The answer followed.
`;

test('splitFrontmatter returns the keys and where the body starts', () => {
  const { fm, body, bodyLine } = splitFrontmatter(TRANSCRIPT);
  assert.equal(fm.session_id, 'abc123');
  assert.equal(fm.title, 'A Talk');
  assert.equal(bodyLine, 6);
  assert.ok(body.startsWith('\n# A Talk'));
  assert.deepEqual(splitFrontmatter('no frontmatter').fm, {});
});

test('chunkTranscript keeps the header apart, flags Q&A, and records line numbers', () => {
  const { header, chunks } = chunkTranscript(TRANSCRIPT);
  assert.ok(header.startsWith('# A Talk'));
  assert.ok(header.includes('Transcribed with Whisper'));
  assert.equal(chunks.length, 2, 'the two speaker paragraphs merge into one window, the Q&A stands alone');
  assert.equal(chunks[0].loc, 'Transcript');
  assert.equal(chunks[0].qa, undefined);
  assert.ok(chunks[0].text.includes('*[Recording resumes]*'), 'inline markers stay in the record');
  assert.equal(chunks[0].line, 17, 'first body line, 1-based, counting the frontmatter');
  assert.equal(chunks[1].loc, 'Q&A');
  assert.equal(chunks[1].qa, true);
  assert.equal(chunks[1].text, 'Someone asked a question. The answer followed.');
});

test('chunkTranscript windows paragraphs to the target and splits over-long ones on sentences', () => {
  const para = (n: number) => `Paragraph ${n}. ` + 'word '.repeat(60).trim() + '.';
  const md = '## Transcript\n\n' + Array.from({ length: 12 }, (_, i) => para(i)).join('\n\n');
  const { chunks } = chunkTranscript(md);
  assert.ok(chunks.length > 1);
  for (const c of chunks) assert.ok(c.text.length <= WINDOW_TARGET, `window of ${c.text.length} chars`);
  assert.equal(chunks.map((c) => c.text).join('\n\n'), md.slice('## Transcript\n\n'.length), 'windows are lossless');

  const long = '## Transcript\n\n' + Array.from({ length: 40 }, (_, i) => `Sentence number ${i} is here and it is fairly long to make the point.`).join(' ');
  const split = chunkTranscript(long);
  assert.ok(split.chunks.length > 1, 'a single huge paragraph is split');
  for (const c of split.chunks) assert.ok(c.text.length <= WINDOW_MAX);
  assert.equal(split.chunks.map((c) => c.text).join(' '), long.slice('## Transcript\n\n'.length), 'sentence split is lossless');
});

test('chunkSummary yields one chunk per section, heading included', () => {
  const md = `---
title: "A Talk"
---

# A Talk — summary

> A summary, not a transcript.

## In one line

The claim.

## The argument

Two paragraphs.

Of argument.
`;
  const { header, chunks } = chunkSummary(md);
  assert.ok(header.includes('A summary, not a transcript'));
  assert.deepEqual(
    chunks.map((c) => c.loc),
    ['In one line', 'The argument']
  );
  assert.equal(chunks[1].text, '## The argument\n\nTwo paragraphs.\n\nOf argument.');
  assert.equal(chunks[0].line, 9);
});

test('chunkSlides yields one chunk per slide', () => {
  const md = `---
kind: slides
---

# Deck — slides

## Slide 1 — Title
**Text.** Hello
**Shows.** A title card.

## Slide 2 — SEP 2575: Stateless MCP
**Text.** Each request carries its context.
**Shows.** A diagram.
`;
  const { chunks } = chunkSlides(md);
  assert.equal(chunks.length, 2);
  assert.equal(chunks[1].loc, 'Slide 2 — SEP 2575: Stateless MCP');
  assert.ok(chunks[1].text.startsWith('## Slide 2'));
  assert.ok(chunks[1].text.includes('Each request carries its context.'));
});

test('chunkMaterials is a single chunk of the body', () => {
  const { chunks } = chunkMaterials('---\nkind: materials\n---\n\n# X — materials\n\n## Slides\n\n- [Deck](materials/deck.pdf) — 21 slides.\n');
  assert.equal(chunks.length, 1);
  assert.equal(chunks[0].loc, 'Materials');
  assert.ok(chunks[0].text.includes('21 slides'));
  assert.deepEqual(chunkMaterials('---\nkind: materials\n---\n').chunks, []);
});

test('cleanAbstract strips tags and decodes entities', () => {
  assert.equal(cleanAbstract('A &amp; B&nbsp;C <b>bold</b><br>next &#39;q&#x27;'), "A & B C bold\nnext 'q'");
});
