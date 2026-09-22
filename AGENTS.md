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
    transcript.md    What the speaker said. Raw. Audience questions, where the
                     recording caught them, sit below a `## Q&A` heading.
    summary.md       ~750 words, derived. Optional — many talks have none yet.
    materials.md     What the speaker shared: slides, references, links to
                     their own video.
                     Independent of the other two — a directory holding only
                     this file is a valid entry for a session nobody recorded.
    materials/       The slide deck itself, plus its extracted text. Decks are
                     stored with Git LFS; the .txt beside each one is ordinary
                     text and is what you should read. Never audio or video.
recordings/        Raw audio. Gitignored — local only, never committed.
.claude/skills/process-recording/
  SKILL.md         The full recording → transcript pipeline
  scripts/         identify.py, transcribe.sh, transcribe_api.sh,
                   check_loop.sh, write_talk.py, build_index.py
.claude/skills/summarize-talk/
  SKILL.md         How to write the summary that sits beside a transcript
  scripts/         write_summary.py
server/            The archive as a service: a stateless MCP server and a
                   plain HTTP API over a prebuilt search index, for agents
                   that do not have the repo. See server/README.md.
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
interpretation of them. The `## Q&A` heading is the one structural mark that
belongs: it is not an interpretation of the talk, it is the line past which
the words stop being the speaker's.

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

**Material from a speaker goes in `materials.md`, and only what they sent.**
A speaker may share slides, references, a link to their own recording or a
writeup for any of the 93 sessions, including the 74 with no transcript.
Record what they gave
and nothing else: do not search for a deck they did not mention, do not add a
link you found yourself and file it as theirs, and do not summarise what is
behind a link you have not opened. Set `source: speaker` only when the speaker
actually sent it — `source: contributor` covers anything an attendee dug up. A
`talks/<slug>/` holding only `materials.md` is a complete, valid entry, so
never create an empty or placeholder `transcript.md` beside one.

**A file a speaker sent is material too.** Speakers send PDFs, not only URLs,
and a link to a deck that moves or expires preserves nothing. Commit what they
sent to `talks/<slug>/materials/` and link it from `materials.md` the same way
you would link a URL. Documents only — slides, papers, notes, diagrams — and
only with the speaker's go-ahead, recorded in the `source:` field. Audio and
video are still never committed, whoever offers them and however they are
stored; link those or ask for a transcript. Anything past a few megabytes is a
link, not a commit.

**Do not guess an attribution, and do not hedge one.** Five rooms ran in
parallel, so a timestamp alone rarely identifies a talk. If the content does
not settle which session it was, do not add the transcript — open an issue
describing the recording so someone who was in the room can identify it. A
transcript that hedges its own attribution is worse than one that waits:
everything downstream quotes it anyway, and nobody reads the caveat.

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

**Say what is not here.** Most of the conference is missing — the coverage
table in [README.md](README.md) has the count, and attendees only transcribed
the rooms they happened to sit in. So never answer "nobody talked about X"
when what you mean is "no transcript here covers X". Say the second thing, and
when the answer turns on something being absent, say how much of the
conference the archive actually holds.

**An abstract is not a transcript.** `guide/sessions.json` carries a `desc` for
all 93 sessions, including the 74 with no recording. It is what a speaker said
they would say, months earlier. Never quote, paraphrase or attribute it as
something said on stage, and never use it to fill a gap in a recording. If the
only thing the archive has on a session is its abstract, say so in those words.

**Read the headers before you attribute.** Inline markers like `*[Recording
begins mid-talk]*` mean a fragment: what is missing is missing, and the
speaker may well have said the opposite earlier. For speaker names and titles,
`guide/sessions.json` wins over the transcript body, which is raw
speech-to-text and mangles names.

**Below `## Q&A`, you do not know who is talking.** A transcript that reaches
that heading has stopped being one speaker and become a room, and Whisper
labels nobody — the question, the answer and the person two rows back all
arrive as the same undifferentiated text. Never quote from below it as the
speaker. Attribute it as what it is: *an audience member asked…*, *in the Q&A
the speaker said…*. This is the easiest way to make the archive say something
false about a named person, and the likeliest, because the Q&A is where the
interesting concessions are.

**Summaries to find, transcripts to quote.** The whole archive is a few hundred
kilobytes — reading is cheap, guessing is not. Skim `talks/*/summary.md` to
find which talks bear on a question, then open the `transcript.md` for the
speaker's actual words. Quote verbatim and cite the talk slug and speaker
(`talks/no-central-brain/transcript.md` — Fausto Albers); the transcripts
exist to be quotable. Where a summary and a transcript disagree, the
transcript is right.

**Without the repo, use the server.** An agent that cannot open these files
can reach the same text through the MCP server in `server/` — `search_archive`
for passages with a `file:line` citation, `read_talk` for a whole transcript,
summary or deck, `list_sessions` for the coverage — and every answer carries
the same rules: the coverage up front, the kind of text each passage is, and
the Q&A caveat. `server/README.md` has the endpoint and how to connect.

## Keeping the search index current

The server's index is generated from `talks/` and `guide/sessions.json` and
is not committed. After adding or changing a transcript, summary, deck
description or materials file, rebuild it:

```bash
cd server && npm run build
```

`npm run dev`, `npm test` and `npm run deploy` do this themselves, so the
hosted search picks up new content on the next deploy. The relevance tests in
`server/test/search.test.ts` name a few talks that exist today; a talk removed
at a speaker's request needs its line there removed too.

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
- Where the recording runs past the talk, `## Q&A` marks the point it stops
  being the speaker. `write_summary.py` refuses quotes taken from below it.
