# Contributing

If you were at AGNTCon + MCPCon Europe 2026 and recorded a session, please add
it. The [coverage table](README.md#coverage) shows what is still missing —
anything unticked is fair game.

## What a good contribution looks like

One directory: `talks/<slug>/`, with `transcript.md` inside it — the talk
title, the speaker and a short background on them, and the raw transcript.
That is it. A `summary.md` beside it is welcome but optional.

- **Keep the transcript raw.** Do not add takeaways or key points *to
  `transcript.md`*. People come here for what was actually said. If you want to
  summarise a talk, put it in `summary.md` next door, where a reader can tell
  the two apart.
- **Never commit the audio.** It is gitignored for a reason — the speakers own
  their talks. Keep your recordings in `recordings/`, which stays local.
- **Put a `## Q&A` heading where the talk ends.** If your recording caught the
  audience questions, mark them — otherwise a question from row three reads as
  something the speaker said. See [A note on accuracy](#a-note-on-accuracy).
- **Get names and titles from [`guide/sessions.json`](guide/sessions.json)**,
  not from memory or from what the transcription software heard.

## Let your agent do the work

It was a conference about agents. Drop your audio into `recordings/`, point
Claude Code — or anything else that reads `AGENTS.md` — at it, and ask it to
process the recording:

> Process the recording in `recordings/<your-file>`.

The `process-recording` skill runs the whole pipeline: works out which of the
93 sessions you recorded, transcribes it locally with Whisper large-v3,
researches the speaker, writes `talks/<slug>/transcript.md` in the archive's
format, and rebuilds the coverage index. Read what it wrote before you open
the PR — particularly the speaker's name and the session it picked, which are
the two things worth a human's eyes.

First run downloads ~3GB of model and needs `uv` and `ffmpeg`. The local path
has only ever been run on Apple Silicon; see [A note on
platforms](README.md#a-note-on-platforms) and [transcribing without a capable
machine](README.md#transcribing-without-a-capable-machine) for the hosted
fallback.

**Without an agent**, the same steps are four scripts —
`identify.py` to find the session, `transcribe.sh` (or `transcribe_api.sh`)
to transcribe, then write `talks/<slug>/transcript.md` copying the frontmatter
of any existing transcript, and `build_index.py` to rebuild the index.
[`.claude/skills/process-recording/SKILL.md`](.claude/skills/process-recording/SKILL.md)
documents all of it, including the traps.

## Summaries

Optional, and a good way to contribute without a recording of your own: pick a
talk that has a transcript but no `summary.md` and write one. Roughly 600 to
850 words in a fixed structure: the claim in one line, the argument behind it,
a section for each stage of the talk, two to four quotes and three to five
takeaways. All of it drawn from the transcript rather than from the abstract in
the guide — and the quotes have to be word for word, because the script checks
them against the transcript and refuses the file if they are not. Quotes also
have to come from the talk itself: the script will not accept one taken from
below a `## Q&A` heading, because nobody knows who said it.

```bash
python3 .claude/skills/summarize-talk/scripts/write_summary.py \
  --slug <slug> --body your-draft.md
```

The script builds the frontmatter from `sessions.json`, checks the length and
shape, and flags names that appear in your summary but nowhere in the
transcript. Agents should read
[`.claude/skills/summarize-talk/SKILL.md`](.claude/skills/summarize-talk/SKILL.md).

## Materials — slides, references, links

`talks/<slug>/materials.md` holds what the speaker shared: slides, the
references behind the talk, anything they wrote up afterwards. It is
independent of the other two files, so **a talk directory containing only
`materials.md` is a complete contribution** — which is the normal shape for
the 74 sessions nobody recorded, and the easiest way to add one.

**If the speaker sent you a file, commit the file.** Speakers hand over PDFs
far more often than URLs, and a link to a deck on someone's drive preserves
nothing once they reorganise it. Put what they sent in
`talks/<slug>/materials/` and link it from `materials.md` exactly as you would
link a URL:

```markdown
## Slides
- [Deck (PDF, 4.2 MB)](materials/agentic-commerce-deck.pdf)
```

Documents only — slides, papers, notes, diagrams. Keep it to a few megabytes;
anything larger is a link. And **audio and video are never committed**, not
even by the speaker and not via LFS: the repo's promise to 93 speakers is that
it publishes text, and that promise is worth more than any one recording. If a
speaker has their own video, link it. If they would rather it were
transcribed, that is a transcript contribution, and if nobody can do it,
[open an issue](../../issues) so someone can pick it up.

```markdown
---
title: "Exact title from sessions.json"
speakers: [Name As In The Guide]
session_id: <id from sessions.json>
kind: materials
source: speaker        # or: contributor
contributor: <your github handle>
---

# <Title> — materials

**<Speaker>**

*<Day date>, <time>, <room> — <track> track*

> Material shared by the speaker. Not a transcript and not a summary — the
> files they sent, and pointers to what lives elsewhere.

## Slides
- [Deck](materials/<file>.pdf)     <!-- or an https:// link -->

## References
- [Paper/repo/spec](https://...)

## Recording
- [Video](https://...)            <!-- linked, never committed -->

## Written up by the speaker
- [Post](https://...)
```

Drop any heading you have nothing for. Then rebuild the index:

```bash
python3 .claude/skills/process-recording/scripts/build_index.py
```

Two rules. **Record only what the speaker actually sent** — do not go hunting
for a deck they did not mention and file it as theirs, and do not summarise
what is behind a link you have not opened. And use `source: speaker` only when
it came from them; anything an attendee found is `source: contributor`.

## What you are agreeing to by contributing

Nothing onerous, but it should be said out loud:

- **The transcript is not yours and not ours.** You are contributing a
  transcription of someone else's talk. The speaker keeps every right they had
  before you opened the PR — see [LICENSE](LICENSE) and [SPEAKERS.md](SPEAKERS.md).
- **Your summary is released as CC0.** A `summary.md` is your own writing, and
  contributing it puts it in the public domain, so the derived layer never
  becomes an obstacle to anyone. Quotes inside it remain the speaker's words.
- **The tooling is MIT.** Fixes to the skills and scripts go in under that.
- **A speaker's request outranks your contribution.** If the speaker of a talk
  you transcribed asks for a correction or a removal, it happens, and you do
  not get a veto.

## A note on accuracy

Speech recognition mangles names and jargon, especially with the international
speaker lineup this conference had. Fixing a mistranscribed name or protocol
term is welcome and encouraged. Rewriting what someone said — smoothing their
grammar, tightening their phrasing — is not. Leave the speaker's voice alone.

If you are unsure which session a recording is from, don't guess and don't
hedge it in the frontmatter either — [open an issue](../../issues) describing
the recording, and someone who was in the room can identify it. A wrong
attribution is worse than an open question, and a transcript that hedges its
own attribution is worse than both: people quote it anyway.

**Mark where the questions start.** Most recordings run past the end of the
talk into the audience Q&A, and the transcription software cannot tell voices
apart — so without a marker, a question someone asked from row three reads as
something the speaker said. Put a `## Q&A` heading at the point the prepared
talk ends. Everything under it is on the record as *someone in the room said
this*, which is the honest claim; everything above it is the speaker.
