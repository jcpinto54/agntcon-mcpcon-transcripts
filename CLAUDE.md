# CLAUDE.md

See **[AGENTS.md](AGENTS.md)** — the full working notes for agents live there,
so there is only one copy to keep current.

Quick orientation:

- This is a transcript archive of AGNTCon + MCPCon Europe 2026. Transcripts
  only — **audio is gitignored and never committed**.
- `guide/sessions.json` is the source of truth for titles, speakers and times.
- One directory per talk: `talks/<slug>/transcript.md`, plus an optional
  `summary.md` beside it. **The transcript itself stays raw — no takeaways, no
  key points, no TL;DR inside `transcript.md`.**
- To turn a recording into a transcript, use the `process-recording` skill in
  `.claude/skills/process-recording/`.
- To write the summary beside a transcript, use the `summarize-talk` skill in
  `.claude/skills/summarize-talk/`.
