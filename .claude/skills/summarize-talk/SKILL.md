---
name: summarize-talk
description: Run the pipeline that fills in the summaries beside the transcripts in this archive — find the talks with no summary.md, batch them, fan out talk-summarizer agents, verify. Use when someone asks for a talk to be summarised, or for summaries to be filled in across the archive.
---

# Summarising the talks

Every transcript in this archive can carry a `summary.md` beside it: the claim
in one line, the argument, the talk's own stages of thought, verbatim quotes
and takeaways. Writing nineteen of them by hand is a day's work; writing them
in parallel is an hour.

**How to write a summary lives in the
[`talk-summarizer`](../../agents/talk-summarizer.md) agent definition**, not
here — the structure, the quote rules, the Q&A rule, what to do with the
session abstract. This file is how to run the job.

## What this pipeline can and cannot touch

A summary is written from a transcript or it is not written.

Coverage is lopsided: 60 of the 93 sessions now have a directory under
`talks/`, but only 19 of them hold a `transcript.md`. The other 41 are
**slides only** — a deck, its `.slides.md` description, a `materials.md`, and
no record of what the speaker actually said. This skill cannot do anything
with those, and must not be pointed at them. A summary written from a deck
would read exactly like one written from the talk, sit in the same filename,
and quietly assert things nobody said; the deck's `.slides.md` is already the
text layer for those sessions, and it is honest about being one.

`batch_talks.py` enforces this — a directory with no transcript is never
listed — and prints the live count each time it runs, so trust it over the
numbers above.

## The pipeline

```bash
# 1. List the talks that have a transcript and no summary yet, split into
#    per-agent batches balanced by transcript length.
python3 .claude/skills/summarize-talk/scripts/batch_talks.py --agents 5
```

2. **Fan out.** One `talk-summarizer` agent per batch, all launched in a single
   message so they run in parallel, each given only its manifest path:

   > Summarise the talks in `.transcribe-cache/summaries/batches/batch3.json`.

   **Name the model on every call**, like this:

   ```
   Agent(subagent_type: "talk-summarizer", model: "opus",
         prompt: "Summarise the talks in .transcribe-cache/summaries/batches/batch3.json")
   ```

   The definition declares `model: opus`, and the documented resolution order
   is per-call model, then the definition's, then `CLAUDE_CODE_SUBAGENT_MODEL`,
   then the main conversation's. But the second step is currently broken --
   frontmatter `model:` is ignored and a subagent silently inherits the
   parent's model (anthropics/claude-code#44385). This job has the opposite
   economics of the slide work: a handful of summaries, each one a careful
   read of a long transcript, where the cost of misreading what a speaker
   argued is a confidently wrong file that outlives the mistake and is harder
   to spot than a missing one. Do not leave the model to the definition, and
   do not let a cheap orchestrator quietly hand its own model to nineteen
   summarisers.

3. **Verify and resume.** Re-run `batch_talks.py`; it lists only talks with no
   `summary.md` yet, so a clean run prints `nothing left to summarise`.
   Anything still listed failed — the script refused the draft, or the agent
   stopped partway — and re-running the fan-out picks up exactly those.

4. **Rebuild the index.**

   ```bash
   python3 .claude/skills/process-recording/scripts/build_index.py
   ```

   The coverage table counts transcripts and summaries separately, so an
   un-summarised talk shows as a gap the same way an un-transcribed session
   does.

## Do one first

Summarise a single talk, show it, and get agreement on the shape before
fanning out across the rest. The failure mode of a batch is not one bad
summary — it is nineteen with the same subtly wrong emphasis, which is much
more work to unpick than to have written one carefully at the start. Hand one
agent one slug for that; the manifest is a convenience, not a requirement.

## Where the output goes

`talks/<slug>/summary.md`, beside the transcript. Derived, labelled as such in
its own header, and outranked by the transcript wherever the two disagree.

Drafts go to `.transcribe-cache/summaries/`, which is gitignored. They are
working material — the summary that matters is the one `write_summary.py`
wrote.

## Notes

- `write_summary.py --slug <slug> --limits` prints the word range and number
  of topic sections a given transcript allows. The summary is capped at about
  40% of what was actually said, so a fragmentary recording gets a short
  summary rather than a padded one, and the agents are told to ask before they
  write.
- The checks in `write_summary.py` are the point of the pipeline. A summary
  that quotes a sentence the speaker never said, or puts an audience member's
  question in a named person's mouth, reads as authoritative and is not — so
  the script refuses a draft with a quote that is not in the talk word for
  word, a quote taken from below the `## Q&A` heading, or a body outside the
  fixed structure. When it refuses, the draft is wrong; the limits are the
  format, not an obstacle to it.
- `write_summary.py` derives the frontmatter from `guide/sessions.json` via
  the transcript's `session_id`, so nobody retypes a title or a speaker name
  and the two files in a talk directory cannot drift apart on attribution.
- The agents write drafts with the `Write` tool, or with a Bash heredoc where
  the checkout guard refuses it. If one reports stalling on that, it is the
  guard, not the task.
