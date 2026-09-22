# The archive as a service

A search over this archive that any agent can call: a **stateless MCP
server** plus the same three operations as a plain **HTTP API**, built to run
for free on Cloudflare Workers. It exists so that someone in claude.ai, Claude
Code, ChatGPT or their own agent can ask what was said at AGNTCon + MCPCon
Europe 2026 without cloning the repo.

It is live at **https://agntcon-mcpcon-archive.joaocastropintoz.workers.dev**:

```
curl "https://agntcon-mcpcon-archive.joaocastropintoz.workers.dev/api/search?q=stateless+mcp"
claude mcp add --transport http agntcon-archive https://agntcon-mcpcon-archive.joaocastropintoz.workers.dev/mcp
```

Everything also runs locally with `npm run dev`.

## What it does

Three tools, the same over MCP and HTTP:

| Tool | HTTP | What it returns |
|---|---|---|
| `search_archive(query, limit?, kinds?, day?, track?, talk?, per_talk?)` | `GET /api/search?q=` | Ranked passages, each with talk, speaker, kind of source, a `file:line` citation and a caveat about what kind of text it is. At most a few per talk. Every answer opens with the archive's coverage. |
| `read_talk(talk, part?, offset?, max_chars?)` | `GET /api/talks/{talk}/{part}` | A whole document in windows: `transcript`, `summary`, `slides`, `materials`, or `session` (the guide entry: speakers with bios, time, room, abstract, and what the archive holds). |
| `list_sessions(day?, track?, speaker?, title?, has?)` | `GET /api/sessions` | All 93 sessions with what exists for each — the coverage table as data. |

Plus `GET /api/coverage`, `GET /llms.txt`, and a landing page at `/` with
connection instructions.

The MCP server also carries the archive's reading rules as its
`instructions` (say what is not here; an abstract is not a transcript; quote
the transcript, not the summary; below `## Q&A` nobody is attributed), so a
client that shows instructions to its model gets them for free.

## Why stateless, and what the talks said

Two sessions in this archive cover the ground. Kurtis Van Gent and Shaun
Smith's deck, *Stateless: The Future of MCP Transports*
([`talks/stateless-future-mcp-transports/`](../talks/stateless-future-mcp-transports/materials.md)),
walks through the 2026-07-28 revision of the spec: SEP-2575 removes the
`initialize` handshake so "each request carries the protocol context needed
to understand it" and any replica behind a load balancer can serve any
request; SEP-2567 removes `Mcp-Session-Id` in favour of explicit state
handles passed as ordinary tool arguments; elicitation becomes two
independent round trips. Amine Raji's talk, *What a Year of Breaking MCP
Tells Builders*
([`talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/`](../talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/transcript.md)),
gives the security case: a session check that only matched a string is what
July's removal of sessions retires.

This server takes that at face value:

- **No state anywhere.** `createMcpHandler` from the v2 TypeScript SDK builds
  a fresh `McpServer` per request from a factory and keeps nothing between
  requests. The index is read-only and built at deploy time. Any isolate in
  any region can answer any request; there is nothing to synchronise and
  nothing a crash can lose.
- **Both protocol generations.** The endpoint serves 2026-07-28 clients
  natively (`server/discover`, the `_meta` envelope, `Mcp-Method` headers)
  and answers 2025-era clients — which is what most connectors still are —
  through the SDK's stateless fallback: `initialize` is answered, no session
  id is ever issued, and a bare `tools/call` with no handshake works too.
  The end-to-end test checks all of that on the wire.
- **State that would be needed is a handle.** Reading a long transcript is
  the one multi-step interaction, and it uses an explicit `offset` the client
  passes back — SEP-2567's pattern — not a cursor the server remembers.

## How retrieval works

The index is built ahead of time by `scripts/build_index.ts` from `talks/`
and `guide/sessions.json`; the Worker parses it once at start-up and each
request only walks postings, which keeps a search well inside the free plan's
10 ms of CPU.

- **Chunks follow the files' own structure.** Transcripts are windowed by
  paragraph to about 1,000 characters, with everything below `## Q&A`
  flagged. Summaries are one chunk per section. Decks are one chunk per
  slide. Every session's abstract is a chunk. `materials.md` is one chunk.
  The split is lossless, so `read_talk` rebuilds a file from its chunks.
- **Ranking is BM25** over chunk text, plus a smaller BM25 over each
  document's title, speakers and track (so a speaker's name finds their talk
  even when the transcript never says it), a verbatim-phrase bonus, and a
  weight per kind of source in the archive's trust order: transcript 1.0,
  summary 0.9, slides 0.75, abstract 0.6, materials 0.5. Very short chunks
  (title cards) are scaled down. Results are capped per talk.
- **Keywords, not embeddings, on purpose.** The vocabulary is precise
  (SEP-2575, ID-JAG, elicitation, harness, speaker names), which is where
  keyword search is strongest; embeddings would add a key and a bill and
  cut against free hosting. If real queries turn out to be conceptual
  paraphrases that share no words with the talks, that is the signal to add
  a semantic layer — `search.ts` is the one place to do it.

Check relevance without starting anything:

```
node scripts/query.ts "stateless mcp transports"
node scripts/query.ts --kinds transcript --limit 5 "reward hacking"
node scripts/query.ts --read no-central-brain --part summary
node scripts/query.ts --sessions --has transcript --day fri
```

## Running it

Node 22.18 or later (it runs the TypeScript directly; there is no compile
step outside the Worker bundle).

```
cd server
npm install
npm run dev          # builds the index, serves http://localhost:8787
npm test             # builds the index, runs the unit and relevance tests
npm run test:e2e     # starts wrangler dev on a spare port, drives it with a real MCP client
npm run typecheck    # wrangler types + tsc for the Worker and for the scripts
```

`ARCHIVE_URL=https://… npm run test:e2e` runs the same end-to-end checks
against a deployed server.

## Adding content

Nothing in the server knows today's talks. Add a transcript, summary, deck
description or a whole new `talks/<slug>/` directory as the archive's
`AGENTS.md` describes, then:

```
cd server && npm run build
```

`npm run dev`, `npm test` and `npm run deploy` run the build themselves. The
index (`data/index.json` and the `data/index.ts` the Worker bundles) is
generated and not committed. A file with no `session_id`, or one the guide
does not know, is reported and skipped rather than failing the build.

Today the index is 2.9 MB for 60 sessions with anything at all; at full
coverage of all 93 it would be a few times that, against a 64 MiB Worker
limit and a 1 s start-up budget — the same code, the same commands.

## Deploying (free)

Cloudflare Workers' free plan gives 100,000 requests a day, 10 ms of CPU per
request and static hosting, which is more than an archive search needs. The
Worker has no bindings and no secrets.

```
cd server
npx wrangler login            # once
npm run deploy                # builds the index, then wrangler deploy
```

`wrangler.jsonc` pins the Cloudflare account the archive deploys to; to
deploy your own copy, change `account_id` (or set `CLOUDFLARE_ACCOUNT_ID`).
The result is `https://agntcon-mcpcon-archive.<subdomain>.workers.dev`; a
custom domain is a `routes` entry away. Redeploy whenever content changes —
that is the whole release process, and a GitHub Action running
`npm run deploy` on pushes to `main` would make it automatic.

## Layout

```
server/
  src/
    worker.ts        Cloudflare entry: parses the index once, routes /mcp and /api/*
    mcp.ts           The McpServer factory: three tools, the archive's rules as instructions
    api.ts           The HTTP mirror and the landing page
    tools.ts         search / read / list as plain functions (shared by mcp.ts and api.ts)
    search.ts        Archive: BM25 over the prebuilt index, filters, per-talk cap
    chunk.ts         How each kind of file is split, losslessly
    text.ts          Tokeniser and light stemmer, shared by build and query
    types.ts         The index format
  scripts/
    build_index.ts   talks/ + guide/sessions.json -> data/index.json (+ data/index.ts)
    query.ts         Search the index from the command line
  test/              Unit and relevance tests (node --test), e2e/ against a live server
  data/              Generated; gitignored
  wrangler.jsonc     Worker config: no bindings, logs on
```
