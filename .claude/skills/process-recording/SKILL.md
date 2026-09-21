---
name: process-recording
description: Turn a raw conference recording into a finished transcript in this repo — identify which talk it is from its timestamp and content, transcribe it locally with Whisper large-v3, research the speaker, and write talks/<slug>/transcript.md. Use when someone adds an audio file to recordings/ and wants it turned into a transcript.
---

# Processing a recording

Takes one audio file and produces one `talks/<slug>/transcript.md`. The hard
part is not the transcription — it is knowing *which* of the 93 sessions you
are listening to. Work through the stages in order.

## Before you start

- `guide/sessions.json` is the schedule: 93 sessions, both days, with rooms,
  times, abstracts, speakers and their bios. It is the source of truth for
  titles and speaker names — do not invent either.
- Audio lives in `recordings/` and is **gitignored**. It never gets committed.
  The transcript is the artifact; the speakers own the recording.

## Stage 1 — Narrow by timestamp

```bash
python3 .claude/skills/process-recording/scripts/identify.py recordings/<file>
```

This prints the recording's true wall-clock window and every session that was
running during it.

Two traps this script already handles, which you must not "fix" by hand:

- **Use the container timestamp, never the filesystem date.** Most recorder
  apps store the real recording start inside the file — Apple Voice Memos in
  an `.m4a`, and most Android recorders and field recorders do the same. A
  batch export rewrites every file's mtime to the moment of export, which will
  collapse an entire day of talks onto a single bogus timestamp and produce
  confident nonsense. The script warns when it had to fall back to filesystem
  dates (`.wav` and raw PCM formats carry no container timestamp); treat those
  slots as unconfirmed. In this
  archive's `.wav` files the filesystem date turned out to be when the
  recording *stopped*, not when it started — the opposite of the container
  timestamps — so a `.wav` slot is only meaningful once you subtract its
  duration, and even then confirm from the text.
- **Long blocks rank high for free.** A 95-minute workshop overlaps every
  25-minute talk inside its span, so it tops the overlap ranking for almost
  every recording. That is arithmetic, not evidence. The script flags these.

Five rooms ran in parallel, so Stage 1 almost never yields a single answer. It
gives you a shortlist of 3–6. The exception is keynotes, which are single-track
— those are settled here.

## Stage 2 — Transcribe

```bash
.claude/skills/process-recording/scripts/transcribe.sh recordings/<file>
```

Runs Whisper `large-v3` locally, picking a backend automatically: MLX on Apple
Silicon, CTranslate2 everywhere else (CPU, or CUDA with `WHISPER_DEVICE=cuda`).
Override with `WHISPER_BACKEND=mlx|ct2`. First run downloads ~3GB. Roughly 16x
realtime on Apple Silicon, closer to 1x on CPU.

Keep `large-v3` rather than a distilled or turbo variant: the speaker list is
heavily international, and the smaller models mangle exactly the accented
names and protocol jargon this repo exists to preserve.

**If the machine cannot run Whisper at all**, there is a hosted fallback —
second choice, not a peer, because it uploads the speaker's recording:

```bash
GROQ_API_KEY=... .claude/skills/process-recording/scripts/transcribe_api.sh recordings/<file>
```

Point people at the API section of `README.md` first; it covers the key and
switching retention off. Same output format, but not the same text: on a test
talk the hosted and local transcripts agreed ~90% word for word, and the
hosted one flipped a sentence's meaning and dropped a "No." that turned a
sarcastic aside sincere. Treat it as a way to fill a gap, not as equivalent —
and never quote from it in a summary without re-checking the words.

The APIs also do not expose `condition-on-previous-text`, so repetition loops
are likelier; the loop check and `write_talk.py` still catch them.

**Always check the output for a repetition loop before using it.** The script
prints a segment count and a unique-segment count and warns when they diverge.
Whisper can lock into repeating one sentence for the rest of a recording; the
first run of this pipeline produced 1382 segments of which only 261 were
unique, the same line 1080 times, and burned 18x the runtime doing it. The
`--condition-on-previous-text False` flag in the script is what prevents it.
If you see the warning, do not commit that transcript.

If you already know which talk it is, prime the decoder with the names:

```bash
PROMPT="Floris Fok, Prosus. Autonomous Organisations: Starting Small." \
  .claude/skills/process-recording/scripts/transcribe.sh recordings/<file>
```

Before transcribing, check for these two situations:

- **Split recordings.** If one file ends within a minute or two of another
  starting, they are one talk that got interrupted. Concatenate the audio
  first (`ffmpeg -f concat`) and transcribe once, so the transcript reads
  continuously.
- **Recordings that span several talks.** The Auditorium ran short
  back-to-back slots, and a recording left running covers several of them. If
  a recording is much longer than any single candidate session, expect
  multiple talks inside it: find the speaker changes and write one file per
  talk rather than forcing it into a single transcript.
- **Duplicate recordings.** The same talk may have been captured on two devices
  at once. Overlapping windows with near identical durations *suggest*
  duplicates — but confirm it from the text before discarding anything. Two
  files here looked simultaneous and turned out to be *consecutive halves* of
  one talk: a `.wav` recorder stopped at 11:55 and an iPad started at the same
  minute, and the second picks up the sentence the first was in the middle of.
  Compare vocabulary and check whether one continues the other, rather than
  trusting the clocks.

- **Recordings with no usable speech.** A recording can be entirely silence —
  a mic in a bag. Whisper fills the silence with a handful of "you" and
  "Thank you" segments. `write_talk.py` refuses anything under 200 words for
  this reason. Report it as unusable; do not file it.

## Stage 3 — Identify the talk for real

Read the first minute or two of the transcript against the Stage 1 shortlist.
The MC's introduction usually names the speaker and the title outright. Failing
that, match the substance of the talk against each candidate's `desc` abstract
in `sessions.json`.

**Read the whole abstract, not a truncated one.** One talk here was filed as
unidentified because the candidate list had been printed with abstracts cut to
260 characters, and the sentence that matched the recording word for word sat
just past the cutoff. The distinguishing detail is often in the last line,
where a speaker says what they will actually argue.

If a human who attended the session tells you what a recording is, that is
strong evidence — but still check it against the abstract and record what
corroborated it, so the file carries the reasoning rather than just the claim.

Commit to a session id, or do not add the transcript. If the recording does
not settle which session it is, the answer is not to file it with a caveat —
it is to stop and open an issue describing the recording, so someone who was
in the room can identify it. A wrongly attributed transcript is worse than an
unattributed one, and a transcript hedged in its own frontmatter is worse than
both: everything downstream quotes it anyway. The conference also has a public
schedule at <https://agntconmcpconeu26.sched.com/> which is a useful second
source when the guide alone leaves it ambiguous.

Watch for speakers who appear twice: at least one gave two separate talks, so
a name alone does not identify a session.

Some recordings will not match any session: hallway conversations, side
meetups, anything in the evening. Those are fine to keep, but file them
honestly rather than forcing them onto the schedule.

## Stage 4 — Research the speaker

Start with the bio already in `sessions.json` — most speakers have one, with
their employer in `creds`. Then search the web to add substance: current role,
what they are known for, notable projects, prior work. Two or three sentences
of genuine background, not a rewritten job title.

Stick to professional, publicly-stated facts. If research turns up nothing
beyond the guide, use what the guide has and move on.

## Stage 5 — Write the transcript

Write `talks/<slug>/transcript.md`, where the slug derives from the talk
title: lowercase, hyphenated, no filler words. One directory per talk —
`write_talk.py` creates it. A `summary.md` may join it later; that is the
`summarize-talk` skill's job, not this one's.

```markdown
---
title: State of the Software Factory
speakers: [Dexter Horthy]
day: fri
date: 2026-09-18
start: "09:41"
room: Auditorium
track: Keynotes
kind: keynote
session_id: <id from sessions.json>
recording: RAI Amsterdam 7.m4a
contributor: <github handle>
---

# State of the Software Factory

**Dexter Horthy** — <employer, from `creds`>

<Two or three sentences of background on the speaker.>

*Friday 18 September 2026, 09:41, Auditorium — Keynotes track*

## Transcript

<The raw transcript.>

## Q&A

<Audience questions and the speaker's answers, if the recording caught any.>
```

Rules for the transcript body:

- **No summary in this file.** `transcript.md` stores what was said, not an
  interpretation of it. Summaries are a separate file written by a separate
  skill; do not pre-empt one here.
- **Cut the Q&A off under its own heading.** Most recordings run past the end
  of the talk into audience questions, and Whisper labels nobody — so once the
  questions start, a sentence in this file is as likely to be an attendee's as
  the speaker's. Find where the prepared talk ends (usually a "thank you", a
  handover to the moderator, or the first question) and put `## Q&A` there.
  Everything below it is on the record as *someone in the room said this*, not
  as the speaker. Where a turn is unmistakable, mark it `**Q:**` / `**A:**`;
  where it is not, leave the run of text alone — the heading is the part that
  matters, and a wrong `**A:**` is worse than none. Drop the heading entirely
  if the recording stops before any questions.
- Keep it raw, but break it into paragraphs at natural pauses — a 25-minute
  wall of unbroken text is unreadable and unsearchable.
- Do not silently correct the speaker. Do fix Whisper's obvious mishearings of
  technical terms and proper nouns, using `sessions.json` to get names right.
  Assume every name is wrong until checked — large-v3 rendered "Floris Fok, a
  staff engineer at Prosus" as "Forrest Fock, a staff engineer at Proces". Note
  the correction policy in the transcript so readers know what was touched.
- If the recording is partial, say so plainly at the point it cuts:
  `*[Recording begins mid-talk]*` or `*[Recording ends here]*`.

## Stage 6 — Update the index

Add the talk to the coverage table in `README.md` so the gap list stays
accurate:

```bash
python3 .claude/skills/process-recording/scripts/build_index.py
```

Then commit — transcript only; the audio stays local.
