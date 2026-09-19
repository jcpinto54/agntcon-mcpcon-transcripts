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
- **Get names and titles from [`guide/sessions.json`](guide/sessions.json)**,
  not from memory or from what the transcription software heard.

## The easy way

If you use Claude Code (or any agent that reads `AGENTS.md`), drop your audio
into `recordings/` and ask it to process the recording. The
`process-recording` skill does the whole pipeline: works out which of the 93
sessions you recorded, transcribes it locally, researches the speaker, and
writes the file in the right format.

## The manual way

1. **Work out which talk it is.**

   ```bash
   python3 .claude/skills/process-recording/scripts/identify.py recordings/<your-file>
   ```

   This reads the recording's true timestamp and lists the sessions that were
   running at the time. With five parallel rooms it usually narrows things to
   three or four candidates rather than one — the transcript itself settles which.

2. **Transcribe it locally.**

   ```bash
   .claude/skills/process-recording/scripts/transcribe.sh recordings/<your-file>
   ```

   Runs Whisper large-v3 on your machine. First run downloads ~3GB. Needs
   `uv` and `ffmpeg`. Only tested on macOS — see
   [A note on platforms](README.md#a-note-on-platforms).

   Can't run it? Use the hosted fallback:

   ```bash
   GROQ_API_KEY=... .claude/skills/process-recording/scripts/transcribe_api.sh recordings/<your-file>
   ```

   [Transcribing without a capable machine](README.md#transcribing-without-a-capable-machine)
   covers the key and the retention setting. Prefer local when you can — the
   recording is the speaker's, not ours.

3. **Write `talks/<slug>/transcript.md`** following the format of any existing
   transcript. Copy the frontmatter fields, including `session_id` from
   `sessions.json` — the index is built from it.

4. **Rebuild the index and open a PR.**

   ```bash
   python3 .claude/skills/process-recording/scripts/build_index.py
   ```

## Summaries

Optional, and a good way to contribute without a recording of your own: pick a
talk that has a transcript but no `summary.md` and write one. Roughly 600 to
850 words in a fixed structure: the claim in one line, the argument behind it,
a section for each stage of the talk, two to four quotes and three to five
takeaways. All of it drawn from the transcript rather than from the abstract in
the guide — and the quotes have to be word for word, because the script checks
them against the transcript and refuses the file if they are not.

```bash
python3 .claude/skills/summarize-talk/scripts/write_summary.py \
  --slug <slug> --body your-draft.md
```

The script builds the frontmatter from `sessions.json`, checks the length and
shape, and flags names that appear in your summary but nowhere in the
transcript. Agents should read
[`.claude/skills/summarize-talk/SKILL.md`](.claude/skills/summarize-talk/SKILL.md).

## A note on accuracy

Speech recognition mangles names and jargon, especially with the international
speaker lineup this conference had. Fixing a mistranscribed name or protocol
term is welcome and encouraged. Rewriting what someone said — smoothing their
grammar, tightening their phrasing — is not. Leave the speaker's voice alone.

If you are unsure which session a recording is from, say so in the frontmatter
with `confidence: uncertain` rather than guessing. A wrong attribution is worse
than an open question.
