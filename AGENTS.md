# AGENTS.md

Working notes for AI agents contributing to this repo. Humans, see
[CONTRIBUTING.md](CONTRIBUTING.md).

## What this repo is

A community transcript archive of **AGNTCon + MCPCon Europe 2026** (RAI
Amsterdam, 17–18 September 2026). Attendees recorded the sessions they went to;
this repo turns those recordings into searchable, permanent text.

It is an archive, not a blog. The value is in faithfully preserving what
speakers actually said.

## Layout

```
README.md          Coverage index — all 93 sessions, marked where a transcript exists
AGENTS.md          This file
CLAUDE.md          Pointer to this file
CONTRIBUTING.md    How humans add a transcript
guide/
  agntcon-mcpcon-guide.html   The original conference guide
  sessions.json               Machine-readable schedule: 93 sessions, speakers, bios, abstracts
talks/
  <slug>/          One directory per talk, named from the talk title
    transcript.md    What the speaker said. Raw.
    summary.md       ~750 words, derived. Optional — many talks have none yet.
recordings/        Raw audio. Gitignored — local only, never committed.
.claude/skills/process-recording/
  SKILL.md         The full recording → transcript pipeline
  scripts/         identify.py, transcribe.sh, transcribe_api.sh,
                   check_loop.sh, write_talk.py, build_index.py
.claude/skills/summarize-talk/
  SKILL.md         How to write the summary that sits beside a transcript
  scripts/         write_summary.py
```

## Rules

**Never commit audio.** `.gitignore` blocks every audio extension. The
speakers own their talks; this repo publishes transcripts only. If you find
yourself adding an exception, stop — that is the one rule that protects the
project's right to exist publicly.

**`guide/sessions.json` is the source of truth** for talk titles, speaker
names, rooms, times and tracks. Never invent or paraphrase any of them. If a
transcript disagrees with the guide about a name, the guide wins for
attribution and the transcript stays as spoken.

**Nothing but the transcript in `transcript.md`.** It is raw text plus a
speaker header. Do not add takeaways, key points or TL;DRs to it, however
tempting — someone searching this archive wants the speaker's words, not an
interpretation of them.

**Summaries live in their own file.** `talks/<slug>/summary.md`, written with
the `summarize-talk` skill and labelled as derived. Separating them is what
makes them safe: a reader always knows which of the two they are reading, and
the transcript stays quotable. Where a summary and a transcript disagree, the
transcript is right, and the summary gets fixed.

**Do not guess an attribution.** Five rooms ran in parallel, so a timestamp
alone rarely identifies a talk. If the transcript content does not settle which
session it was, set `confidence: uncertain` in the frontmatter and say why. A
confidently mislabelled transcript is worse than an unlabelled one.

**Transcribe locally where you can.** `transcribe.sh` runs Whisper on the
contributor's own machine — MLX on Apple Silicon, CTranslate2 elsewhere — and
that remains the default, because the recording belongs to the speaker rather
than to us. Only the Apple Silicon path has actually been exercised; say so
rather than promising the others work, and see the platform note in
`README.md`.

Not every contributor has the hardware, and an archive nobody can contribute
to is not much of an archive, so `transcribe_api.sh` sends the audio to a
hosted `large-v3` instead. Treat it as the fallback it is: suggest the local
path first, and point anyone using the hosted one at the API section of
`README.md`, which covers switching retention off before uploading. Never
reach for it merely because it is faster.

## Adding a transcript

Use the `process-recording` skill — it carries the full pipeline and the
non-obvious traps (container timestamps vs. filesystem dates, split recordings,
duplicate captures across devices):

```
.claude/skills/process-recording/SKILL.md
```

After writing a transcript, regenerate the index:

```bash
python3 .claude/skills/process-recording/scripts/build_index.py
```

## Adding a summary

Use the `summarize-talk` skill. It writes `talks/<slug>/summary.md` beside an
existing transcript, in a fixed structure: the claim in one line, the
argument, a section for each stage of the talk, two to four verbatim quotes
and three to five takeaways — drawn only from what the speaker actually said
and never from the abstract in `sessions.json`:

```
.claude/skills/summarize-talk/SKILL.md
```

The coverage table counts transcripts and summaries separately, so rebuild the
index after writing one.

## Conventions

- Paths: `talks/<slug>/transcript.md`, slug derived from the talk title —
  lowercase, hyphenated, filler words dropped. A summary, where one exists,
  sits beside it as `summary.md`.
- Every transcript carries YAML frontmatter including `session_id`, which links
  it back to `guide/sessions.json` and drives the coverage index.
- Mark gaps in a recording honestly: `*[Recording begins mid-talk]*`.
