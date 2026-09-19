# AGNTCon + MCPCon Europe 2026 — Transcripts

A community transcript archive of **AGNTCon + MCPCon Europe 2026**, held at RAI
Amsterdam on 17–18 September 2026.

Attendees recorded the sessions they went to. This repo turns those recordings
into searchable, permanent text — so a talk you missed, or half-remember, is
something you can actually read and quote.

Five rooms ran in parallel across two days, so **nobody saw more than a fifth of
it.** That is the gap this archive exists to close, and why contributions
matter: every transcript someone adds is a session the rest of us could not
attend.

## What's here

- **[`talks/`](talks/)** — one directory per session, named by slug. Inside,
  `transcript.md` carries the talk title, the speaker with background on who
  they are, and the raw transcript. Where someone has written one, `summary.md`
  sits beside it.
- **[`guide/sessions.json`](guide/sessions.json)** — the full schedule as
  machine-readable data: all 93 sessions with rooms, times, abstracts, speakers
  and bios.
- **[`.claude/skills/process-recording/`](.claude/skills/process-recording/)** —
  the pipeline that turns a recording into a transcript, as a reusable skill.
- **[`.claude/skills/summarize-talk/`](.claude/skills/summarize-talk/)** — the
  companion skill for writing the summary beside a transcript.

**Transcripts only — no audio.** Recordings stay on the machines of the people
who made them. The speakers own their talks; this archive publishes their words
as text, nothing more.

**The transcript is never summarised in place.** `transcript.md` is what the
speaker said, not someone else's interpretation of it. Summaries are real, but
they live in their own file — `summary.md`, next to the transcript, labelled as
derived — so you always know which one you are reading. Where the two disagree,
the transcript is right.

## Contributing

Were you there? Add the talks you recorded — see
**[CONTRIBUTING.md](CONTRIBUTING.md)**. The coverage table below shows exactly
which sessions are still missing.

## A note on platforms

**This repo was built and run on macOS, on Apple Silicon, and that is the only
place the tooling has actually been exercised.** Every transcript in the
archive was produced there.

The scripts are written to work on Linux and Windows too — a CTranslate2
backend instead of MLX, a modification-time fallback where Spotlight is not
available — but those paths have been written, not tested.

**So if something breaks on your machine, it is a bug here and not a mistake
on your part — please fix it and open a PR.** Portability fixes are as
valuable a contribution as a transcript, and rather more reusable: every one
of them makes the archive open to someone who could not add to it before. Say
in the PR what platform you were on, so the note above can shrink over time.

If you would rather not debug someone else's shell script, the hosted API path
in the next section sidesteps most of what is likely to go wrong. On Windows,
WSL is the path of least resistance.

## Transcribing without a capable machine

Transcribing locally is the default, and `transcribe.sh` will do it on most
machines — MLX on Apple Silicon, CTranslate2 on anything else, CPU or CUDA.
But it wants a 3GB model and real compute, and on a modest laptop a 30-minute
talk takes about as long as the talk did.

If that rules you out, there is a hosted fallback. It is genuinely a second
choice: it means uploading a recording of someone else's talk to a company
neither you nor they chose. Prefer local where you can.

**Use Groq.** It serves the same `whisper-large-v3` this archive requires —
not a turbo or distilled variant, which mangle exactly the accented names and
protocol jargon the transcripts exist to preserve. At the time of writing it
costs about **$0.11 per hour of audio**, so roughly 5 cents for a 25-minute
talk, and there is a free tier. It does not train on what you send.

1. **Turn retention off first.** Sign in at
   [console.groq.com](https://console.groq.com/), open **Settings → Data
   Controls**, and enable **Zero Data Retention**. By default audio is kept up
   to 30 days for abuse monitoring; with ZDR on, nothing is retained once the
   request completes. Do this before you upload anything.
2. **Create a key.** In the same console, **API Keys → Create API Key**. Copy
   it — it is shown once.
3. **Keep it out of the repository.** Export it in your shell, or put it in a
   file that is already ignored. It must never be committed:

   ```bash
   export GROQ_API_KEY="gsk_..."
   ```

4. **Transcribe.**

   ```bash
   .claude/skills/process-recording/scripts/transcribe_api.sh recordings/<your-file>
   ```

   The script downmixes to 16kHz mono before uploading — all Whisper listens
   to anyway — so a long talk stays under the size cap, and it writes exactly
   the same `.txt` the local path does. Everything after this step is
   identical.

Other providers work if you prefer one: point `WHISPER_API_URL` and
`WHISPER_API_MODEL` at any OpenAI-compatible transcription endpoint and set
`WHISPER_API_KEY`. Check two things before you do — that it serves
**large-v3** rather than a smaller variant, and what it retains. OpenAI's
Whisper endpoint works and is about 3x the price, but its zero-retention
option needs an arrangement with their sales team rather than a toggle you
can reach yourself.

One caveat: the hosted APIs do not expose `condition-on-previous-text`, the
flag that stops Whisper locking into a repetition loop. The loop check still
runs, and the transcript writer still refuses a looped result — so it fails
loudly rather than silently — but expect to hit it more often than locally.

## Known gaps in this batch

- **Two attributions are marked `confidence: uncertain`** in their frontmatter,
  with the reason stated in the file. Both are identified by content rather
  than by a clean timestamp match.
- **One recording captured no usable speech** (18 minutes of a muffled mic) and
  is deliberately not filed.
- Several recordings start after the speaker began; those transcripts are
  marked *[Recording begins mid-talk]*.

## Coverage

<!-- COVERAGE:START -->

### Thursday 17 September  (11/52 transcribed, 11 summarised)

| | Time | Room | Talk | Speakers | Summary |
|---|---|---|---|---|---|
|   | 09:00 | Auditorium | Welcome | Angie Jones |   |
|   | 09:07 | Auditorium | Building the Internet of Agents in the Open | Mazin Gilbert |   |
|   | 09:18 | Auditorium | MCP and the Era of Connectivity | David Soria Parra |   |
|   | 09:29 | Auditorium | Reactive Agents: Your Agent Doesn't Need to Be Always On | Clare Liguori |   |
|   | 09:40 | Auditorium | Agents as Actors: Harnessing the Power of Agentic Infrastructure | Idit Levine, Keith Babo |   |
|   | 10:15 | Auditorium | From Personal Agent To Org Catalog: 13 Specialists, One Orchestrator | Nick Veenhof |   |
|   | 10:15 | Emerald Room | What Does It Take To Ship a New MCP Spec | Den Delimarsky |   |
|   | 10:15 | G102 + G103 | The Modern AI Stack: Agents, MCP and Skills | Adewale Abati |   |
|   | 10:15 | G104 + G105 | Securing the Agentic Universe, One Layer at a Time | Jake Moghtader |   |
|   | 10:15 | G106 + G107 | Total Recall: Agent Memory and Harness Engineering | Ignacio Martinez |   |
|   | 10:50 | Auditorium | An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers | Muhammad Ahsan Ayaz |   |
|   | 10:50 | Emerald Room | Stateless: The Future of MCP Transports | Kurtis Van Gent, Shaun Smith |   |
|   | 10:50 | G102 + G103 | Legal Implications Under EU Law When Deploying AI Agents | Mirela Takacs |   |
| [x](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/transcript.md) | 10:50 | G104 + G105 | [Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/transcript.md) | Sanae Mendoza | [x](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/summary.md) |
| [x](talks/when-not-use-agent-choosing-between-workflows-services/transcript.md) | 11:25 | Auditorium | [When NOT To Use an Agent: Choosing Between Workflows, Services, and Agent Systems](talks/when-not-use-agent-choosing-between-workflows-services/transcript.md) | Jigyasa Grover, Rishabh Misra | [x](talks/when-not-use-agent-choosing-between-workflows-services/summary.md) |
|   | 11:25 | Emerald Room | Call Now, Fetch Later: Durable MCP Tasks on an Event Log | Jeremy Frenay |   |
|   | 11:25 | G102 + G103 | CHAP, an Open Protocol for Auditable Human-Agent Collaboration | Dr Arsalan Shahid |   |
|   | 11:25 | G104 + G105 | Agents, Infrastructure, and the Future of AI-native Applications | Kevin Cochrane |   |
|   | 12:00 | Auditorium | Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions | Sohan Maheshwar |   |
|   | 12:00 | Emerald Room | MCP Conformance Testing V1.0, Testing the 2026-07-28 Spec in SDK's and Online | Paul Carleton, Felix Weinberger |   |
| [x](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/transcript.md) | 12:00 | G102 + G103 | [From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/transcript.md) | Jordan Augé | [x](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/summary.md) |
|   | 12:00 | G104 + G105 | Building a Sovereign AI Governance Stack with Open Source | Roman Swoszowski |   |
|   | 12:00 | G106 + G107 | The Buzz-Word Is Collaboration | Morgan Martin, Tyler Longwell, Wes Billman, Bradley Axen |   |
|   | 12:35 | Auditorium | We Built AI Agents To Fix Security Findings in Production — Here's What Developers Actually Merged | Amine Boudraa, Ruchita Kshirsagar, Nihit Gupta, Gianfranco Romani |   |
|   | 12:35 | Emerald Room | MCP Doesn't Have a Context Problem | Sam Morrow |   |
|   | 12:35 | G102 + G103 | A2A Goes Stable: What Changed, Why, and What's Next | Sam Betts, Kuba Herczyński |   |
|   | 12:35 | G104 + G105 | Breaking the Governance Bottleneck: Why Scaling Control Gets Agents to Production | Dr. Rania Khalaf |   |
|   | 13:10 | Auditorium | What *IS* an Agent's Identity? | Christian Posta |   |
|   | 13:10 | Emerald Room | Two Users, One App: Designing MCP Apps for Humans and Agents | Florian Bauer |   |
|   | 13:10 | G102 + G103 | Exploring WebMCP: What Happens When AI Agents Start Using Websites? | Sylwia Laskowska |   |
|   | 13:10 | G104 + G105 | Your Agents Need a Router: One Integration for Every Model and Tool | Ignasi Barrera |   |
|   | 14:45 | Auditorium | Welcome Back | Angie Jones |   |
| [x](talks/new-way-build-software-github-evolving-human-agent/transcript.md) | 14:52 | Auditorium | [A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future](talks/new-way-build-software-github-evolving-human-agent/transcript.md) | Marlene Mhangami | [x](talks/new-way-build-software-github-evolving-human-agent/summary.md) |
| [x](talks/inside-ai-agents-offloading-human-tasks/transcript.md) | 15:04 | Auditorium | [Inside AI Agents — Offloading Human Tasks](talks/inside-ai-agents-offloading-human-tasks/transcript.md) | Maarten Grootendorst | [x](talks/inside-ai-agents-offloading-human-tasks/summary.md) |
| [x](talks/organizations-need-ai-control-plane-security-governance/transcript.md) | 15:16 | Auditorium | [Why Organizations Need an AI Control Plane for Security and Governance](talks/organizations-need-ai-control-plane-security-governance/transcript.md) | Sheng Liang | [x](talks/organizations-need-ai-control-plane-security-governance/summary.md) |
| [x](talks/browser-isn-t-dead-yet/transcript.md) | 15:28 | Auditorium | [The Browser Isn't Dead Yet](talks/browser-isn-t-dead-yet/transcript.md) | Rachel-Lee Nabors | [x](talks/browser-isn-t-dead-yet/summary.md) |
|   | 15:45 | Auditorium | Six Months of Proof: Independently-Verifiable Records for Agent Actions Under the EU AI Act | Steven Mih |   |
|   | 15:45 | Emerald Room | MCP Borrowed LSP's Design. It Skipped LSP's Lesson | Gorkem Ercan |   |
|   | 15:45 | G102 + G103 | Sandboxing My AI Agent, One Layer at a Time | Juan A. Osorio |   |
| [x](talks/smart-legal-agreements-agentic-economy-using-accord-project/transcript.md) | 15:45 | G104 + G105 | [Smart Legal Agreements for the Agentic Economy Using Accord Project](talks/smart-legal-agreements-agentic-economy-using-accord-project/transcript.md) | Niall Roche | [x](talks/smart-legal-agreements-agentic-economy-using-accord-project/summary.md) |
|   | 15:45 | G106 + G107 | Scaling Agents: From AI Experimentation to an Engineering Operating Model | Marat Kenzhebulatov |   |
|   | 16:20 | Auditorium | 90 Days To Agentic Engineering | Thomas Schöne |   |
| [x](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/transcript.md) | 16:20 | Emerald Room | [What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/transcript.md) | Amine Raji | [x](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/summary.md) |
|   | 16:20 | G102 + G103 | What Networking Got Right That Agentic AI Risks Getting Wrong: The Case for an Agent Control Plane | Parisa Foroughi |   |
|   | 16:20 | G104 + G105 | Agentic AI for Enterprise Mainframes: From Dead Code Elimination To Business Knowledge | Thamarai Selvi Ravi Kumar |   |
|   | 16:20 | G106 + G107 | Governing AI Agent Actions: MCP and Beyond | Shannon Williams, Chris Urwin |   |
|   | 16:55 | Emerald Room | Distributed Mess: A Production Guide To Multi-Agent Failures | Huong Vu |   |
|   | 16:55 | G102 + G103 | Skills Need SemVer Too | Pedro Rodrigues |   |
| [x](talks/we-built-agent-we-shipped-compiler-here-s/transcript.md) | 16:55 | G104 + G105 | [We Built an Agent, We Shipped a Compiler. Here's Why](talks/we-built-agent-we-shipped-compiler-here-s/transcript.md) | Joel Verezhak | [x](talks/we-built-agent-we-shipped-compiler-here-s/summary.md) |
| [x](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/transcript.md) | 17:30 | Emerald Room | [Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/transcript.md) | Michal Orzechowski | [x](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/summary.md) |
|   | 17:30 | G102 + G103 | MAS-Lab: An Open Framework for Spec-Driven, Interoperable Multi-Agent Systems | Jordan Augé |   |
|   | 17:30 | G104 + G105 | The Unix Philosophy for AI Agents: Filesystems as the Context Primitive | Cannis Chan, Daniel Temesgen |   |

### Friday 18 September  (8/41 transcribed, 8 summarised)

| | Time | Room | Talk | Speakers | Summary |
|---|---|---|---|---|---|
|   | 09:00 | Auditorium | Welcome | Angie Jones |   |
|   | 09:07 | Auditorium | Catch Them Early | Manik Surtani |   |
|   | 09:19 | Auditorium | Getting to Stateless MCP: In Production | Shaun Smith |   |
|   | 09:29 | Auditorium | Three Doors to One Tool: MCP vs WebMCP vs CLI | Frédéric Barthelet, Dominic Farolino |   |
| [x](talks/state-software-factory/transcript.md) | 09:41 | Auditorium | [State of the Software Factory](talks/state-software-factory/transcript.md) | Dexter Horthy | [x](talks/state-software-factory/summary.md) |
|   | 10:20 | Auditorium | How we Reclaimed Significant Engineering Capacity at Salesforce with AI Agents | Axel Uhlig |   |
|   | 10:20 | Emerald Room | Potential Issues for Cross-domain Multi-hop API Calls and Their Solution Proposal | Takashi Norimatsu |   |
| [x](talks/pull-requests-dead-long-live-peer-review/transcript.md) | 10:20 | G102 + G103 | [Pull Requests Are Dead, Long Live Peer Review](talks/pull-requests-dead-long-live-peer-review/transcript.md) | Dylan Ratcliffe | [x](talks/pull-requests-dead-long-live-peer-review/summary.md) |
|   | 10:20 | G104 + G105 | Self-Healing Agents Need Observability | Marcelo Trylesinski |   |
|   | 10:20 | G106 + G107 | Keep Infrastructure Out of Your AI Agents: The Agent Gateway Pattern | Lin Sun |   |
|   | 10:55 | Auditorium | From "Works on My Prompt" To Production SLOs: Building Agent Observability | Manik Khandelwal |   |
|   | 10:55 | Emerald Room | ID-JAG: Solving OAuth Sprawl for Enterprise AI Agents | Joey Orlando, Aaron Parecki, Paul Carleton |   |
|   | 10:55 | G102 + G103 | From MCP Playground To Org-Wide Infrastructure: Lessons From Building Booking.com's Agent Foundry | Anushka Bhandari |   |
|   | 10:55 | G104 + G105 | Outcome Engineering: Why Your Agentic Architecture Doesn't Matter (Yet) | Kierra Dotson |   |
|   | 11:30 | Auditorium | Governance You Can Run: Checkable Properties for Production Agents | Seshu Tolety |   |
|   | 11:30 | Emerald Room | Economies of Scale for MCP and Agents: Why You Need an Identity Broker | Magnus Jungsbluth, Jan Brennenstuhl |   |
|   | 11:30 | G102 + G103 | I Was the Bottleneck, Not the Agent | Vincent Ysmal |   |
| [x](talks/agents-can-pay-can-they-prove/transcript.md) | 11:30 | G104 + G105 | [Agents Can Pay. Can They Prove It?](talks/agents-can-pay-can-they-prove/transcript.md) | Diego Zuluaga | [x](talks/agents-can-pay-can-they-prove/summary.md) |
|   | 13:15 | Auditorium | When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments | Janosch Woschitz |   |
| [x](talks/mcp-apps-agentic-web/transcript.md) | 13:15 | Emerald Room | [MCP Apps and The Agentic Web](talks/mcp-apps-agentic-web/transcript.md) | Liad Yosef | [x](talks/mcp-apps-agentic-web/summary.md) |
|   | 13:15 | G102 + G103 | Governed Agent Autonomy: Building a Control Plane for Agentic Systems | Nnenna Ndukwe |   |
| [x](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/transcript.md) | 13:15 | G104 + G105 | [Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/transcript.md) | Ksenia Bobrova | [x](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/summary.md) |
|   | 13:15 | G106 + G107 | Harness Engineering: Building the System Around Your AI Coding Agent | Ji Darwish |   |
|   | 13:50 | Auditorium | Stateless Agents, Stateful Worlds: Designing for Interruption | Arul Kumaran |   |
|   | 13:50 | Emerald Room | From API Catalogs To Agent Catalogs: Solving MCP Server Discovery With Open Resource Discovery | Vyshnavi Gadamsetti, Sebastian Wennemers |   |
|   | 13:50 | G102 + G103 | Agents Talking To Agents: MCP, A2A, and the Reality of Multi-Agent Orchestration in Production | Willem Berroubache |   |
|   | 13:50 | G104 + G105 | Shipping a Production App in 10 Days: A Real Measurement of AI-Assisted Development | Julien Dubois |   |
|   | 14:25 | Auditorium | Agent-Smith: Never Send a Human To Do a Machine’s Job | Glenn ten Cate, Jorge Carvalho |   |
|   | 14:25 | Emerald Room | Spotify’s Bet on MCP and Investment in Open Source | Reinoud Kruithof, Yannick Epstein |   |
|   | 14:25 | G102 + G103 | Beyond Chatbots: Agentic UI With Open Standards | Manfred Steyer |   |
| [x](talks/vibes-data-evaluating-agents-real-work/transcript.md) | 14:25 | G104 + G105 | [From Vibes To Data: Evaluating Agents on Your Real Work](talks/vibes-data-evaluating-agents-real-work/transcript.md) | Ville Hellman | [x](talks/vibes-data-evaluating-agents-real-work/summary.md) |
|   | 15:00 | Auditorium | Gating High-Risk Agentic Actions at the Relying Party With Exogenous (Out-of-Band) Inputs | Andrew Bud |   |
|   | 15:00 | Emerald Room | Attribution by Design: Skills, MCP, and Where Provenance Gets Built In | Ola Hungerford |   |
| [x](talks/no-central-brain/transcript.md) | 15:00 | G102 + G103 | [No Central Brain](talks/no-central-brain/transcript.md) | Fausto Albers | [x](talks/no-central-brain/summary.md) |
|   | 15:00 | G104 + G105 | Giving Your Agentic Coding AI a Security Brain | Liran Tal |   |
|   | 15:00 | G106 + G107 | Evaluating Agents at Scale: From 50 Examples to a Production Flywheel | Bauke Brenninkmeijer |   |
|   | 15:35 | Emerald Room | Most MCP Servers are Empty | David Golverdingen |   |
|   | 15:35 | G102 + G103 | Infrastructure Red Teaming With Abliterated Models: What Actually Stops Agent Attacks | Roy Belio |   |
| [x](talks/autonomous-organisations-starting-small/transcript.md) | 15:35 | G104 + G105 | [Autonomous Organisations: Starting Small](talks/autonomous-organisations-starting-small/transcript.md) | Floris Fok | [x](talks/autonomous-organisations-starting-small/summary.md) |
|   | 15:35 | G106 + G107 | From Advisory to Autonomous: A Staged Model for Agent Adoption | Milos Mandic |   |
|   | 16:10 | Auditorium | MCP Challenges & Opportunities | Sam Morrow, Angie Jones, Shaun Smith, Shub Argha |   |

<!-- COVERAGE:END -->
