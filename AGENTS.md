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
  <slug>.md        One transcript per talk. Flat. Named from the talk title.
recordings/        Raw audio. Gitignored — local only, never committed.
.claude/skills/process-recording/
  SKILL.md         The full recording → transcript pipeline
  scripts/         identify.py, transcribe.sh, build_index.py
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

**No summaries.** Transcripts are raw text plus a speaker header. Do not add
takeaways, key points, or TL;DRs, however tempting. Someone searching this
archive wants the speaker's words, not an interpretation of them.

**Do not guess an attribution.** Five rooms ran in parallel, so a timestamp
alone rarely identifies a talk. If the transcript content does not settle which
session it was, set `confidence: uncertain` in the frontmatter and say why. A
confidently mislabelled transcript is worse than an unlabelled one.

**Transcribe locally.** Audio does not get uploaded to third-party services.

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

## Conventions

- Filenames: `talks/<slug>.md`, slug derived from the talk title — lowercase,
  hyphenated, filler words dropped.
- Every transcript carries YAML frontmatter including `session_id`, which links
  it back to `guide/sessions.json` and drives the coverage index.
- Mark gaps in a recording honestly: `*[Recording begins mid-talk]*`.
