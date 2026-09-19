---
name: summarize-talk
description: Write the summary that sits beside a transcript in this repo — talks/<slug>/summary.md, in the archive's fixed structure: the claim in one line, the argument, the talk's own stages of thought, verbatim quotes and takeaways. Use when someone asks for a talk to be summarised, or for summaries to be filled in across the archive.
---

# Summarising a talk

Takes one `talks/<slug>/transcript.md` and produces one
`talks/<slug>/summary.md` beside it, in a fixed structure, at roughly 600 to
850 words — or less, for a short recording.

**Check the budget before you write.** A summary is capped at about 40% of
what the speaker actually said, so a partial recording gets a shorter summary
rather than a padded one. Ask the script:

```bash
python3 .claude/skills/summarize-talk/scripts/write_summary.py \
  --slug <slug> --limits
```

It prints the word range and the number of topic sections that transcript can
support. One recording in this archive is 449 words of speech; the honest
summary of it is 200-odd words with a single topic section, and demanding the
full structure there would buy padding or invention.

The length exists to carry specifics — the argument, the numbers, the worked
example, the speaker's own sentences. It is not there to be filled. A padded
800-word summary is worse than a tight 200-word one, and the per-section
minimums below exist to catch the version of this that is really a table of
contents.

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

As you read, mark two things. **Phrases the speaker repeats** — repetition is
the most reliable signal of what they thought mattered, and it is what tells
you which topics deserve a section. And **sentences worth quoting**, with
enough of the surrounding words that you can find them again.

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
several talks in this archive diverge sharply from theirs — a demo that
failed, a section cut for time, an argument that moved on. **Where the talk
and the abstract disagree, the talk wins.** Summarising the abstract instead
of the transcript is the single easiest way to produce a plausible, useless,
wrong summary.

## Stage 3 — Write the body

The structure is fixed. Sections in this order, and the script enforces it:

```markdown
## In one line

<The sentence you would say if someone asked "so what was it about?".
One sentence, 45 words at the outside.>

## The argument

<~100 words. The speaker's thesis and why they say it matters — enough that a
reader can decide whether to open the transcript.>

## <A stage of the talk's own argument>

<A paragraph or two. What the speaker claimed here and what they offered as
evidence — the benchmark, the number, the story from their own team. Make it
clear how this step serves the thesis above.>

## <The next stage>

<Two to four of these in total.>

## In their words

> <A sentence the speaker actually said, word for word.>

> <Two to four of these. The script checks each against the transcript.>

## Takeaways

- <Three to five. A claim plus what backs it.>

## What the talk leaves open

<Optional, and only what the *speaker* flagged as unresolved — a problem they
said is unsolved, a question from the floor they could not answer. Not your
critique of the talk.>
```

**Choose the topic sections by weight, not by interest.** What did the talk
spend its minutes on? What did the speaker come back to twice? That is a
stage of the argument. A remark you found striking, made once in passing, is
not — it belongs in the takeaways if it belongs anywhere. Name each section
after the thing itself, not "Background" or "Conclusion": someone scanning the
headings should be able to tell this talk from every other talk in the
archive.

**Takeaways are claims, not topic labels.** "Evaluation was a major theme" is
a label and tells a reader nothing. "He argues offline evals stopped
predicting production failures once tool-calling was added, and showed a
12-point gap to make the case" is a takeaway. If a bullet could be true of
twenty other talks, it is not a takeaway.

**Quotes are verbatim or they are not quotes.** Copy them, do not retype them
from memory, and do not tidy the grammar of a person speaking live — a quote
smoothed into cleaner prose is a misquote. The script normalises whitespace
and quote characters, then checks each one appears in the transcript word for
word, and refuses the file if it does not. Put nothing but the speaker's words
inside the blockquote; the whole file is already attributed to them.

Rules for the rest of the body:

- **Only what is in the transcript.** No background on the speaker, no
  references to their other work, no context you happen to know. The speaker
  header in `transcript.md` already carries the background; this file carries
  the talk.
- **Elaborate with specifics, never with words.** A section earns its length
  by adding the detail the takeaways had to leave out — what the benchmark
  measured, why the speaker thought the number mattered, what the
  counter-argument was. If a section is restating its own heading at greater
  length, cut it and make it a three-topic summary instead of a four.
- **Keep the speaker's figures.** The numbers they cited are the most
  compressible evidence in the talk and the first thing a padded summary
  drops.
- **Attribute claims to the speaker.** "Horthy argues that review, not
  authorship, is now the bottleneck" — not "review is now the bottleneck". The
  archive records what was said; it does not endorse it.
- **No praise and no verdict.** "A fascinating, must-watch session" tells a
  reader nothing. Neither does "the speaker made a compelling case."
- Product and company names get checked against the transcript before they go
  in. The script warns about capitalised words that appear in your summary and
  nowhere in the transcript. It skips words at the start of a sentence or
  bullet, where capitalisation is only grammar — so the warnings it does print
  are worth taking seriously, and a name invented at the start of a sentence
  is a blind spot you have to catch yourself.

## Stage 4 — Write the file

Do not hand-write the frontmatter. The script derives it from
`guide/sessions.json` via the transcript's `session_id`, so attribution can
never drift between the two files:

```bash
python3 .claude/skills/summarize-talk/scripts/write_summary.py \
  --slug state-software-factory --body /tmp/summary-body.md
```

`--body -` reads from stdin. The script refuses a body with the fixed sections
missing or out of order, with fewer than two or more than four topic sections,
with a topic section under 60 words or containing bullets, with a one-liner
over 45 words, with fewer than three or more than five takeaways, with fewer
than two or more than four quotes, with a quote that is not in the transcript
word for word, or that lands outside 550–950 words. Those limits are the
format; fix the body rather than the script.

## Stage 5 — Rebuild the index

```bash
python3 .claude/skills/process-recording/scripts/build_index.py
```

The coverage table counts transcripts and summaries separately, so an
un-summarised talk shows as a gap the same way an un-transcribed session does.

## Where this structure comes from

It is the common shape of event recaps and academic summaries, narrowed to one
talk:

- **Claim first.** Journalism's inverted pyramid and the nut graf both put the
  point up front, and guides on summarising a lecture say to state the main
  argument in one or two sentences before anything else. Hence `In one line`
  and `The argument`.
- **Stages of thought.** Academic summarising guides break a source into its
  steps, summarise each, and show how each relates to the main idea — which is
  what the topic sections are.
- **Takeaways as claims with support.** Recap guides single this out as the
  difference between a useful recap and a useless one: not "pricing was a
  major theme" but the claim and the evidence for it.
- **Quotes, two to four, verbatim and attributed.** Recap templates call these
  the most reusable part of a write-up, and warn specifically against
  paraphrases smoothed into a tidier register. In this archive they are also
  checkable, because the source is in the next file.
- **What was left open.** Guides on summarising conferences recommend
  recording unanswered questions and unresolved debates rather than only
  conclusions.
- **Labelled sections over one narrative block.** The structured-abstract
  literature found readers judge labelled, scannable summaries more useful
  than an undifferentiated paragraph.

## Doing the whole archive

Summarise one talk, show it, and get agreement on the shape before running the
other eighteen. The failure mode of a batch is not a bad summary — it is
nineteen summaries with the same subtly wrong emphasis, which is much more
work to unpick than to have written once, carefully, at the start.
