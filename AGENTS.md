# AGENTS.md

Working notes for AI agents working on this repo — both adding to the archive
and answering questions out of it. Humans, see
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

**A speaker's request wins.** [SPEAKERS.md](SPEAKERS.md) promises every
speaker a correction or a removal on request, without a reason and without
being argued with. If you are acting on such a request, act on it — do not
weigh it against the archive's completeness, do not ask the speaker to
reconsider, and do not leave the talk in the coverage table. Remove the
`talks/<slug>/` directory, rerun `build_index.py`, and say in the commit that
it was removed at the speaker's request without restating their reasons.

**Do not guess an attribution.** Five rooms ran in parallel, so a timestamp
alone rarely identifies a talk. If the transcript content does not settle which
session it was, set `confidence: uncertain` in the frontmatter and say why. A
confidently mislabelled transcript is worse than an unlabelled one.

**Transcribe locally where you can.** The recording belongs to the speaker,
not to us. `transcribe.sh` uses MLX on Apple Silicon and CTranslate2 elsewhere,
though only the Apple Silicon path has actually been run — say so rather than
promising the rest works.

`transcribe_api.sh` uploads to a hosted `large-v3` for contributors without the
hardware. It is the fallback: suggest local first, point people at the API
section of `README.md` for the retention setting, and never reach for it just
because it is faster.

## Answering questions from the archive

Most agents that open this repo are not adding a transcript — they are being
asked what someone said at the conference. That is a different job from
contributing, and it has its own ways of going wrong.

**Say what is not here.** The archive holds a fraction of the conference — 19
of the 93 sessions at the time of writing; the coverage table in
[README.md](README.md) has the current count. Attendees transcribed the rooms
they happened to sit in, so a topic missing from `talks/` was very likely
discussed in a room nobody recorded. Never answer "nobody talked about X" when
what you mean is "no transcript here covers X" — say the second thing.

**An abstract is not a transcript.** `guide/sessions.json` carries a `desc` for
all 93 sessions, including the 74 with no recording. It is what a speaker said
they would say, months earlier. Never quote, paraphrase or attribute it as
something said on stage, and never use it to fill a gap in a recording. If the
only thing the archive has on a session is its abstract, say so in those words.

**Read the frontmatter before you attribute.** `confidence: uncertain` or
`unidentified` means the archive is not sure which session the recording is —
pass that uncertainty on rather than quietly resolving it. Inline markers like
`*[Recording begins mid-talk]*` mean a fragment: what is missing is missing,
and the speaker may well have said the opposite earlier. For speaker names and
titles, `guide/sessions.json` wins over the transcript body, which is raw
speech-to-text and mangles names.

**Summaries to find, transcripts to quote.** The whole archive is a few hundred
kilobytes — reading is cheap, guessing is not. Skim `talks/*/summary.md` to
find which talks bear on a question, then open the `transcript.md` for the
speaker's actual words. Quote verbatim and cite the talk slug and speaker
(`talks/no-central-brain/transcript.md` — Fausto Albers); the transcripts
exist to be quotable. Where a summary and a transcript disagree, the
transcript is right.

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
