# Contributing

If you were at AGNTCon + MCPCon Europe 2026 and recorded a session, please add
it. The [coverage table](README.md#coverage) shows what is still missing —
anything unticked is fair game.

## What a good contribution looks like

One file: `talks/<slug>.md`, containing the talk title, the speaker and a short
background on them, and the raw transcript. That is it.

- **Raw transcript, no summary.** Do not add takeaways or key points. People
  come here for what was actually said.
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

   Runs Whisper large-v3 on your machine. The first run downloads ~3GB of model
   weights; after that it is cached. Needs `uv` and `ffmpeg`.

3. **Write `talks/<slug>.md`** following the format of any existing transcript.
   Copy the frontmatter fields, including `session_id` from `sessions.json` —
   the index is built from it.

4. **Rebuild the index and open a PR.**

   ```bash
   python3 .claude/skills/process-recording/scripts/build_index.py
   ```

## A note on accuracy

Speech recognition mangles names and jargon, especially with the international
speaker lineup this conference had. Fixing a mistranscribed name or protocol
term is welcome and encouraged. Rewriting what someone said — smoothing their
grammar, tightening their phrasing — is not. Leave the speaker's voice alone.

If you are unsure which session a recording is from, say so in the frontmatter
with `confidence: uncertain` rather than guessing. A wrong attribution is worse
than an open question.
