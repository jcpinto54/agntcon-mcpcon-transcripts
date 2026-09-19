---
name: summarize-talk
description: Write the summary that sits beside a transcript in this repo — talks/<slug>/summary.md, an opening, a section on each of the talk's main topics, and key points, drawn only from what the speaker actually said. Use when someone asks for a talk to be summarised, or for summaries to be filled in across the archive.
---

# Summarising a talk

Takes one `talks/<slug>/transcript.md` and produces one
`talks/<slug>/summary.md` beside it. Roughly 500 to 700 words: a short opening
on what the talk was about, then a section on each of the two to four topics
the talk actually spent its time on, then the key points as a skimmable tail.

The length is there to carry the specifics — the argument, the numbers, the
worked example. It is not there to be filled. A padded 600-word summary is
worse than a tight 200-word one, and the per-section minimum below exists to
catch the version of this that is really a table of contents.

## The rule this lives under

The transcript stays raw. That is the whole premise of the archive — someone
searching it wants the speaker's words, not an interpretation of them. A
summary is a **separate file**, clearly derived and clearly labelled, so a
reader always knows which one they are reading.

Never merge a summary into a transcript, never add takeaways to
`transcript.md`, and never edit a transcript to make it agree with a summary.
If the summary and the transcript disagree, the transcript is right.

## Stage 1 — Read the whole transcript

All of it, not the first third. Speakers routinely back-load: the thesis
arrives after the demo, and the sentence the talk was actually built around is
often two minutes from the end. A summary written from the opening is a
summary of the speaker's throat-clearing.

Check the frontmatter before you start:

- `confidence: uncertain` or `unidentified` — the summary inherits that. Do
  not write a confident paragraph about what a speaker argued when the archive
  is not certain whose talk it is. The script copies the field across; say it
  in the prose too.
- A transcript marked `*[Recording begins mid-talk]*` or `*[Recording ends
  here]*` is a fragment. Summarise what was captured, and say in one line that
  the recording is partial. Do not fill the gap from the abstract.

## Stage 2 — Read the abstract, then set it aside

`guide/sessions.json` has a `desc` for most sessions. It is useful for getting
jargon and product names right, and for telling you what the speaker *meant*
to cover.

It is not evidence of what they said. Abstracts are written months ahead, and
several talks in this archive diverge sharply from theirs — a demo that failed,
a section cut for time, an argument that moved on. **Where the talk and the
abstract disagree, the talk wins.** Summarising the abstract instead of the
transcript is the single easiest way to produce a plausible, useless, wrong
summary.

## Stage 3 — Write the body

```markdown
## What it was about

<One paragraph, ~90 words. What the speaker argued and why, in their terms.>

## <A topic the talk actually dwelt on>

<A paragraph or two. The argument as the speaker made it, with the evidence
they gave for it — the benchmark, the number, the story from their own team.>

## <Another such topic>

<Two to four of these in total.>

## Key points

- <A claim the speaker actually made.>
- <Three to six of these. Specific beats general.>
```

**Choose the topic sections by weight, not by interest.** What did the talk
spend its minutes on? What did the speaker come back to twice? That is a
topic. A remark you found striking, made once in passing, is not — it goes in
the key points if it goes anywhere. Name each section after the thing itself,
not "Background" or "Conclusion": a reader scanning the headings should be
able to tell this talk from every other talk in the archive.

Rules for the body:

- **Only what is in the transcript.** No background on the speaker, no
  references to their other work, no context you happen to know. The speaker
  header in `transcript.md` already carries the background; this file carries
  the talk.
- **Elaborate with specifics, never with words.** A topic section earns its
  length by adding the detail the key points had to leave out — what the
  benchmark measured, why the speaker thought the number mattered, what the
  counter-argument was. If a section is restating its own heading in longer
  form, cut it and make the talk a three-topic summary instead of a four.
- **Attribute claims to the speaker.** "Horthy argues that review, not
  authorship, is now the bottleneck" — not "review is now the bottleneck". The
  archive records what was said; it does not endorse it.
- **Specific beats general.** "Ran 12,000 synthetic tasks and found tool
  descriptions mattered more than model choice" is a key point. "Discussed
  evaluation strategies" is a table of contents entry.
- **At most one short quote**, copied verbatim from the transcript. If you
  cannot find it by searching the transcript for the exact string, it is not a
  quote.
- **No praise and no verdict.** "A fascinating, must-watch session" tells a
  reader nothing. Neither does "the speaker made a compelling case."
- Numbers, product names and company names get checked against the transcript
  before they go in. The script warns about capitalised words that appear in
  your summary and nowhere in the transcript. It skips words at the start of a
  sentence or bullet, where capitalisation is only grammar — so the warnings it
  does print are worth taking seriously, and a name invented at the start of a
  sentence is a blind spot you have to catch yourself.

## Stage 4 — Write the file

Do not hand-write the frontmatter. The script derives it from
`guide/sessions.json` via the transcript's `session_id`, so attribution can
never drift between the two files:

```bash
python3 .claude/skills/summarize-talk/scripts/write_summary.py \
  --slug state-software-factory --body /tmp/summary-body.md
```

`--body -` reads from stdin. The script refuses a body whose opening or
closing section is missing or out of order, that has fewer than two or more
than four topic sections, that has a topic section under 60 words or with
bullets in it, that has fewer than three or more than six key points, or that
lands outside 400–750 words. It warns on proper nouns that do not appear in
the transcript. Those limits are the format; fix the body rather than the
script.

## Stage 5 — Rebuild the index

```bash
python3 .claude/skills/process-recording/scripts/build_index.py
```

The coverage table counts transcripts and summaries separately, so an
un-summarised talk shows as a gap the same way an un-transcribed session does.

## Doing the whole archive

Summarise one talk, show it, and get agreement on the shape before running the
other eighteen. The failure mode of a batch is not a bad summary — it is
nineteen summaries with the same subtly wrong emphasis, which is much more work
to unpick than to have written once, carefully, at the start.
