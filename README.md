# AGNTCon + MCPCon Europe 2026 — Transcripts

[![M8ven Score](https://m8ven.ai/badge/mcp/jcpinto54/agntcon-mcpcon-transcripts)](https://m8ven.ai/mcp/jcpinto54/agntcon-mcpcon-transcripts)

A community transcript archive of **AGNTCon + MCPCon Europe 2026**, held at RAI
Amsterdam on 17–18 September 2026.

Attendees recorded the sessions they went to, and the Agentic AI Foundation
livestreamed the Auditorium. This repo turns those recordings into searchable,
permanent text — so a talk you missed, or half-remember, is
something you can actually read and quote.

Five rooms ran in parallel across two days, so **nobody saw more than a fifth of
it.** That is the gap this archive exists to close, and why contributions
matter: every transcript someone adds is a session the rest of us could not
attend.

## What's here

- **[`talks/`](talks/)** — one directory per session, named by slug. Inside,
  `transcript.md` carries the talk title, the speaker with background on who
  they are, and the raw transcript. Where someone has written one, `summary.md`
  sits beside it, and `materials.md` holds what the speaker shared — slides,
  references, video. The three are independent: a session with no recording
  can still have materials.
- **[`guide/sessions.json`](guide/sessions.json)** — the full schedule as
  machine-readable data: all 93 sessions with rooms, times, abstracts, speakers
  and bios.
- **[`.claude/skills/process-recording/`](.claude/skills/process-recording/)** —
  the pipeline that turns a recording into a transcript, as a reusable skill.
- **[`.claude/skills/summarize-talk/`](.claude/skills/summarize-talk/)** — the
  companion skill for writing the summary beside a transcript.
- **[`server/`](server/)** — the archive as a service: a stateless MCP server
  and a plain HTTP API over a search index built from everything above, so an
  agent without the repo can ask what was said. Live at
  [agntcon-mcpcon-archive.joaocastropintoz.workers.dev](https://agntcon-mcpcon-archive.joaocastropintoz.workers.dev)
  (MCP endpoint: `/mcp`); [`server/README.md`](server/README.md) has the
  details.

**Transcripts only — no audio.** Recordings stay on the machines of the people
who made them. The speakers own their talks; this archive publishes their words
as text, nothing more. Speakers: [SPEAKERS.md](SPEAKERS.md) is addressed to
you, and a removal request is honoured without argument.

**The transcript is never summarised in place.** `transcript.md` is what the
speaker said, not someone else's interpretation of it. Summaries are real, but
they live in their own file — `summary.md`, next to the transcript, labelled as
derived — so you always know which one you are reading. Where the two disagree,
the transcript is right.

## Contributing

Were you there? Add the talks you recorded — see
**[CONTRIBUTING.md](CONTRIBUTING.md)**. The coverage table below shows exactly
which sessions are still missing.

## For speakers

**[SPEAKERS.md](SPEAKERS.md)** is addressed to you, including if nobody
recorded your session — true of 51 of the 93. It covers adding slides,
references or a recording of your own, and how to get something corrected or
taken down.

## Rights and licence

The speakers own their talks, so this archive does not claim to license their
words to anyone — it only states that it adds no restrictions of its own, and
asks that you attribute the speaker rather than this repo. Summaries are CC0,
the tooling is MIT, and the conference programme belongs to the organisers.
The full position is in **[LICENSE](LICENSE)**.

## A note on platforms

**Only tested on macOS (Apple Silicon).** The scripts have Linux and Windows
paths, but nobody has run them. If something breaks, that's a bug here — fix
it and open a PR, saying which platform you were on. On Windows, use WSL.

## Transcribing without a capable machine

`transcribe.sh` needs a 3GB model and real compute. If that rules you out, use
Groq — same `whisper-large-v3` the archive requires, ~$0.11 per hour of audio
(about 5 cents a talk), free tier available, and it doesn't train on what you
send. Prefer local when you can: this uploads someone else's talk.

1. At [console.groq.com](https://console.groq.com/), **Settings → Data
   Controls → Zero Data Retention**. Do this first — the default keeps audio
   30 days.
2. **API Keys → Create API Key.** Shown once.
3. `export GROQ_API_KEY="gsk_..."` — never commit it.
4. Run it:

   ```bash
   .claude/skills/process-recording/scripts/transcribe_api.sh recordings/<your-file>
   ```

Same output format as the local path, so everything downstream is unchanged.
The text is not identical though — on a test talk the two agreed about 90%
word for word, and the hosted one flipped one sentence's meaning and dropped a
"No." that made a sarcastic aside read as sincere. Fine for filling a gap in
the archive; prefer the local transcript where both exist.

Any OpenAI-compatible endpoint works instead via `WHISPER_API_URL`,
`WHISPER_API_MODEL` and `WHISPER_API_KEY` — check it serves **large-v3**, not
a smaller variant, and check what it retains. OpenAI's is ~3x the price and
its zero-retention needs a sales conversation.

One caveat: hosted APIs don't expose `condition-on-previous-text`, so
repetition loops are likelier. The loop check still catches them.

## Known gaps in this batch

- **Two attributions were filed `uncertain` and have since been confirmed.**
  Both were identified by content rather than by a clean timestamp match; where
  a recording's own timestamp disagrees with the guide, the file says so.
- **One recording captured no usable speech** (18 minutes of a muffled mic) and
  is deliberately not filed.
- Several recordings start after the speaker began; those transcripts are
  marked *[Recording begins mid-talk]*.

## Coverage

<!-- COVERAGE:START -->

### Thursday 17 September  (24/52 transcribed, 11 summarised, 29 with materials)

| | Time | Room | Talk | Speakers | Summary | Materials |
|---|---|---|---|---|---|---|
| [x](talks/welcome-thursday/transcript.md) | 09:00 | Auditorium | [Welcome](talks/welcome-thursday/transcript.md) | Angie Jones |   |   |
| [x](talks/building-internet-agents-open/transcript.md) | 09:07 | Auditorium | [Building the Internet of Agents in the Open](talks/building-internet-agents-open/transcript.md) | Mazin Gilbert |   |   |
| [x](talks/mcp-era-connectivity/transcript.md) | 09:18 | Auditorium | [MCP and the Era of Connectivity](talks/mcp-era-connectivity/transcript.md) | David Soria Parra |   |   |
| [x](talks/reactive-agents-agent-doesn-t-need-be-always/transcript.md) | 09:29 | Auditorium | [Reactive Agents: Your Agent Doesn't Need to Be Always On](talks/reactive-agents-agent-doesn-t-need-be-always/transcript.md) | Clare Liguori |   |   |
| [x](talks/agents-as-actors-harnessing-power-agentic-infrastructure/transcript.md) | 09:40 | Auditorium | [Agents as Actors: Harnessing the Power of Agentic Infrastructure](talks/agents-as-actors-harnessing-power-agentic-infrastructure/transcript.md) | Idit Levine, Keith Babo |   |   |
| [x](talks/personal-agent-org-catalog-13-specialists-one-orchestrator/transcript.md) | 10:15 | Auditorium | [From Personal Agent To Org Catalog: 13 Specialists, One Orchestrator](talks/personal-agent-org-catalog-13-specialists-one-orchestrator/transcript.md) | Nick Veenhof |   |   |
|   | 10:15 | Emerald Room | What Does It Take To Ship a New MCP Spec | Den Delimarsky |   |   |
|   | 10:15 | G102 + G103 | The Modern AI Stack: Agents, MCP and Skills | Adewale Abati |   |   |
|   | 10:15 | G104 + G105 | Securing the Agentic Universe, One Layer at a Time | Jake Moghtader |   |   |
|   | 10:15 | G106 + G107 | [Total Recall: Agent Memory and Harness Engineering](talks/total-recall-agent-memory-harness-engineering/materials.md) | Ignacio Martinez |   | [x](talks/total-recall-agent-memory-harness-engineering/materials.md) |
| [x](talks/orchestra-agents-i-learned-running-multi-agent-system/transcript.md) | 10:50 | Auditorium | [An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers](talks/orchestra-agents-i-learned-running-multi-agent-system/transcript.md) | Muhammad Ahsan Ayaz |   | [x](talks/orchestra-agents-i-learned-running-multi-agent-system/materials.md) |
|   | 10:50 | Emerald Room | [Stateless: The Future of MCP Transports](talks/stateless-future-mcp-transports/materials.md) | Kurtis Van Gent, Shaun Smith |   | [x](talks/stateless-future-mcp-transports/materials.md) |
|   | 10:50 | G102 + G103 | [Legal Implications Under EU Law When Deploying AI Agents](talks/legal-implications-under-eu-law-when-deploying-ai/materials.md) | Mirela Takacs |   | [x](talks/legal-implications-under-eu-law-when-deploying-ai/materials.md) |
| [x](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/transcript.md) | 10:50 | G104 + G105 | [Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/transcript.md) | Sanae Mendoza | [x](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/summary.md) | [x](talks/beyond-easy-80-bringing-legacy-spatial-locked-down/materials.md) |
| [x](talks/when-not-use-agent-choosing-between-workflows-services/transcript.md) | 11:25 | Auditorium | [When NOT To Use an Agent: Choosing Between Workflows, Services, and Agent Systems](talks/when-not-use-agent-choosing-between-workflows-services/transcript.md) | Jigyasa Grover, Rishabh Misra | [x](talks/when-not-use-agent-choosing-between-workflows-services/summary.md) |   |
|   | 11:25 | Emerald Room | Call Now, Fetch Later: Durable MCP Tasks on an Event Log | Jeremy Frenay |   |   |
|   | 11:25 | G102 + G103 | [CHAP, an Open Protocol for Auditable Human-Agent Collaboration](talks/chap-open-protocol-auditable-human-agent-collaboration/materials.md) | Dr Arsalan Shahid |   | [x](talks/chap-open-protocol-auditable-human-agent-collaboration/materials.md) |
|   | 11:25 | G104 + G105 | Agents, Infrastructure, and the Future of AI-native Applications | Kevin Cochrane |   |   |
| [x](talks/delegated-authorization-ai-agents-build-agent-fine-grained/transcript.md) | 12:00 | Auditorium | [Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions](talks/delegated-authorization-ai-agents-build-agent-fine-grained/transcript.md) | Sohan Maheshwar |   | [x](talks/delegated-authorization-ai-agents-build-agent-fine-grained/materials.md) |
|   | 12:00 | Emerald Room | MCP Conformance Testing V1.0, Testing the 2026-07-28 Spec in SDK's and Online | Paul Carleton, Felix Weinberger |   |   |
| [x](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/transcript.md) | 12:00 | G102 + G103 | [From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/transcript.md) | Jordan Augé | [x](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/summary.md) | [x](talks/opaque-observable-tracing-multi-agent-openclaw-workflows-opentelemetry/materials.md) |
|   | 12:00 | G104 + G105 | [Building a Sovereign AI Governance Stack with Open Source](talks/building-sovereign-ai-governance-stack-open-source/materials.md) | Roman Swoszowski |   | [x](talks/building-sovereign-ai-governance-stack-open-source/materials.md) |
|   | 12:00 | G106 + G107 | [The Buzz-Word Is Collaboration](talks/buzz-word-collaboration/materials.md) | Morgan Martin, Tyler Longwell, Wes Billman, Bradley Axen |   | [x](talks/buzz-word-collaboration/materials.md) |
| [x](talks/we-built-ai-agents-fix-security-findings-production/transcript.md) | 12:35 | Auditorium | [We Built AI Agents To Fix Security Findings in Production — Here's What Developers Actually Merged](talks/we-built-ai-agents-fix-security-findings-production/transcript.md) | Amine Boudraa, Ruchita Kshirsagar, Nihit Gupta, Gianfranco Romani |   | [x](talks/we-built-ai-agents-fix-security-findings-production/materials.md) |
|   | 12:35 | Emerald Room | MCP Doesn't Have a Context Problem | Sam Morrow |   |   |
|   | 12:35 | G102 + G103 | [A2A Goes Stable: What Changed, Why, and What's Next](talks/a2a-goes-stable-changed-s-next/materials.md) | Sam Betts, Kuba Herczyński |   | [x](talks/a2a-goes-stable-changed-s-next/materials.md) |
|   | 12:35 | G104 + G105 | Breaking the Governance Bottleneck: Why Scaling Control Gets Agents to Production | Dr. Rania Khalaf |   |   |
| [x](talks/agent-s-identity/transcript.md) | 13:10 | Auditorium | [What *IS* an Agent's Identity?](talks/agent-s-identity/transcript.md) | Christian Posta |   |   |
|   | 13:10 | Emerald Room | [Two Users, One App: Designing MCP Apps for Humans and Agents](talks/two-users-one-app-designing-mcp-apps-humans/materials.md) | Florian Bauer |   | [x](talks/two-users-one-app-designing-mcp-apps-humans/materials.md) |
|   | 13:10 | G102 + G103 | [Exploring WebMCP: What Happens When AI Agents Start Using Websites?](talks/exploring-webmcp-happens-when-ai-agents-start-using/materials.md) | Sylwia Laskowska |   | [x](talks/exploring-webmcp-happens-when-ai-agents-start-using/materials.md) |
|   | 13:10 | G104 + G105 | [Your Agents Need a Router: One Integration for Every Model and Tool](talks/agents-need-router-one-integration-every-model-tool/materials.md) | Ignasi Barrera |   | [x](talks/agents-need-router-one-integration-every-model-tool/materials.md) |
| [x](talks/welcome-back/transcript.md) | 14:45 | Auditorium | [Welcome Back](talks/welcome-back/transcript.md) | Angie Jones |   |   |
| [x](talks/new-way-build-software-github-evolving-human-agent/transcript.md) | 14:52 | Auditorium | [A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future](talks/new-way-build-software-github-evolving-human-agent/transcript.md) | Marlene Mhangami | [x](talks/new-way-build-software-github-evolving-human-agent/summary.md) |   |
| [x](talks/inside-ai-agents-offloading-human-tasks/transcript.md) | 15:04 | Auditorium | [Inside AI Agents — Offloading Human Tasks](talks/inside-ai-agents-offloading-human-tasks/transcript.md) | Maarten Grootendorst | [x](talks/inside-ai-agents-offloading-human-tasks/summary.md) |   |
| [x](talks/organizations-need-ai-control-plane-security-governance/transcript.md) | 15:16 | Auditorium | [Why Organizations Need an AI Control Plane for Security and Governance](talks/organizations-need-ai-control-plane-security-governance/transcript.md) | Sheng Liang | [x](talks/organizations-need-ai-control-plane-security-governance/summary.md) |   |
| [x](talks/browser-isn-t-dead-yet/transcript.md) | 15:28 | Auditorium | [The Browser Isn't Dead Yet](talks/browser-isn-t-dead-yet/transcript.md) | Rachel-Lee Nabors | [x](talks/browser-isn-t-dead-yet/summary.md) | [x](talks/browser-isn-t-dead-yet/materials.md) |
| [x](talks/six-months-proof-independently-verifiable-records-agent-actions/transcript.md) | 15:45 | Auditorium | [Six Months of Proof: Independently-Verifiable Records for Agent Actions Under the EU AI Act](talks/six-months-proof-independently-verifiable-records-agent-actions/transcript.md) | Steven Mih |   | [x](talks/six-months-proof-independently-verifiable-records-agent-actions/materials.md) |
|   | 15:45 | Emerald Room | [MCP Borrowed LSP's Design. It Skipped LSP's Lesson](talks/mcp-borrowed-lsp-s-design-skipped-lsp-s/materials.md) | Gorkem Ercan |   | [x](talks/mcp-borrowed-lsp-s-design-skipped-lsp-s/materials.md) |
|   | 15:45 | G102 + G103 | [Sandboxing My AI Agent, One Layer at a Time](talks/sandboxing-my-ai-agent-one-layer-time/materials.md) | Juan A. Osorio |   | [x](talks/sandboxing-my-ai-agent-one-layer-time/materials.md) |
| [x](talks/smart-legal-agreements-agentic-economy-using-accord-project/transcript.md) | 15:45 | G104 + G105 | [Smart Legal Agreements for the Agentic Economy Using Accord Project](talks/smart-legal-agreements-agentic-economy-using-accord-project/transcript.md) | Niall Roche | [x](talks/smart-legal-agreements-agentic-economy-using-accord-project/summary.md) |   |
|   | 15:45 | G106 + G107 | Scaling Agents: From AI Experimentation to an Engineering Operating Model | Marat Kenzhebulatov |   |   |
| [x](talks/90-days-agentic-engineering/transcript.md) | 16:20 | Auditorium | [90 Days To Agentic Engineering](talks/90-days-agentic-engineering/transcript.md) | Thomas Schöne |   | [x](talks/90-days-agentic-engineering/materials.md) |
| [x](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/transcript.md) | 16:20 | Emerald Room | [What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/transcript.md) | Amine Raji | [x](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/summary.md) | [x](talks/year-breaking-mcp-tells-builders-protocol-gaps-ships/materials.md) |
|   | 16:20 | G102 + G103 | [What Networking Got Right That Agentic AI Risks Getting Wrong: The Case for an Agent Control Plane](talks/networking-got-right-agentic-ai-risks-getting-wrong/materials.md) | Parisa Foroughi |   | [x](talks/networking-got-right-agentic-ai-risks-getting-wrong/materials.md) |
|   | 16:20 | G104 + G105 | [Agentic AI for Enterprise Mainframes: From Dead Code Elimination To Business Knowledge](talks/agentic-ai-enterprise-mainframes-dead-code-elimination-business/materials.md) | Thamarai Selvi Ravi Kumar |   | [x](talks/agentic-ai-enterprise-mainframes-dead-code-elimination-business/materials.md) |
|   | 16:20 | G106 + G107 | Governing AI Agent Actions: MCP and Beyond | Shannon Williams, Chris Urwin |   |   |
|   | 16:55 | Emerald Room | [Distributed Mess: A Production Guide To Multi-Agent Failures](talks/distributed-mess-production-guide-multi-agent-failures/materials.md) | Huong Vu |   | [x](talks/distributed-mess-production-guide-multi-agent-failures/materials.md) |
|   | 16:55 | G102 + G103 | [Skills Need SemVer Too](talks/skills-need-semver-too/materials.md) | Pedro Rodrigues |   | [x](talks/skills-need-semver-too/materials.md) |
| [x](talks/we-built-agent-we-shipped-compiler-here-s/transcript.md) | 16:55 | G104 + G105 | [We Built an Agent, We Shipped a Compiler. Here's Why](talks/we-built-agent-we-shipped-compiler-here-s/transcript.md) | Joel Verezhak | [x](talks/we-built-agent-we-shipped-compiler-here-s/summary.md) | [x](talks/we-built-agent-we-shipped-compiler-here-s/materials.md) |
| [x](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/transcript.md) | 17:30 | Emerald Room | [Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/transcript.md) | Michal Orzechowski | [x](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/summary.md) | [x](talks/verify-abstain-amplify-field-guide-confidently-wrong-agents/materials.md) |
|   | 17:30 | G102 + G103 | [MAS-Lab: An Open Framework for Spec-Driven, Interoperable Multi-Agent Systems](talks/mas-lab-open-framework-spec-driven-interoperable-multi/materials.md) | Jordan Augé |   | [x](talks/mas-lab-open-framework-spec-driven-interoperable-multi/materials.md) |
|   | 17:30 | G104 + G105 | [The Unix Philosophy for AI Agents: Filesystems as the Context Primitive](talks/unix-philosophy-ai-agents-filesystems-as-context-primitive/materials.md) | Cannis Chan, Daniel Temesgen |   | [x](talks/unix-philosophy-ai-agents-filesystems-as-context-primitive/materials.md) |

### Friday 18 September  (18/41 transcribed, 8 summarised, 22 with materials)

| | Time | Room | Talk | Speakers | Summary | Materials |
|---|---|---|---|---|---|---|
| [x](talks/welcome-friday/transcript.md) | 09:00 | Auditorium | [Welcome](talks/welcome-friday/transcript.md) | Angie Jones |   |   |
| [x](talks/catch-them-early/transcript.md) | 09:07 | Auditorium | [Catch Them Early](talks/catch-them-early/transcript.md) | Manik Surtani |   |   |
| [x](talks/getting-stateless-mcp-production/transcript.md) | 09:19 | Auditorium | [Getting to Stateless MCP: In Production](talks/getting-stateless-mcp-production/transcript.md) | Shaun Smith |   |   |
| [x](talks/three-doors-one-tool-mcp-vs-webmcp-vs/transcript.md) | 09:29 | Auditorium | [Three Doors to One Tool: MCP vs WebMCP vs CLI](talks/three-doors-one-tool-mcp-vs-webmcp-vs/transcript.md) | Frédéric Barthelet, Dominic Farolino |   |   |
| [x](talks/state-software-factory/transcript.md) | 09:41 | Auditorium | [State of the Software Factory](talks/state-software-factory/transcript.md) | Dexter Horthy | [x](talks/state-software-factory/summary.md) |   |
| [x](talks/we-reclaimed-significant-engineering-capacity-salesforce-ai-agents/transcript.md) | 10:20 | Auditorium | [How we Reclaimed Significant Engineering Capacity at Salesforce with AI Agents](talks/we-reclaimed-significant-engineering-capacity-salesforce-ai-agents/transcript.md) | Axel Uhlig |   |   |
|   | 10:20 | Emerald Room | [Potential Issues for Cross-domain Multi-hop API Calls and Their Solution Proposal](talks/potential-issues-cross-domain-multi-hop-api-calls/materials.md) | Takashi Norimatsu |   | [x](talks/potential-issues-cross-domain-multi-hop-api-calls/materials.md) |
| [x](talks/pull-requests-dead-long-live-peer-review/transcript.md) | 10:20 | G102 + G103 | [Pull Requests Are Dead, Long Live Peer Review](talks/pull-requests-dead-long-live-peer-review/transcript.md) | Dylan Ratcliffe | [x](talks/pull-requests-dead-long-live-peer-review/summary.md) |   |
|   | 10:20 | G104 + G105 | Self-Healing Agents Need Observability | Marcelo Trylesinski |   |   |
|   | 10:20 | G106 + G107 | [Keep Infrastructure Out of Your AI Agents: The Agent Gateway Pattern](talks/keep-infrastructure-out-ai-agents-agent-gateway-pattern/materials.md) | Lin Sun |   | [x](talks/keep-infrastructure-out-ai-agents-agent-gateway-pattern/materials.md) |
| [x](talks/works-my-prompt-production-slos-building-agent-observability/transcript.md) | 10:55 | Auditorium | [From "Works on My Prompt" To Production SLOs: Building Agent Observability](talks/works-my-prompt-production-slos-building-agent-observability/transcript.md) | Manik Khandelwal |   |   |
|   | 10:55 | Emerald Room | [ID-JAG: Solving OAuth Sprawl for Enterprise AI Agents](talks/id-jag-solving-oauth-sprawl-enterprise-ai-agents/materials.md) | Joey Orlando, Aaron Parecki, Paul Carleton |   | [x](talks/id-jag-solving-oauth-sprawl-enterprise-ai-agents/materials.md) |
|   | 10:55 | G102 + G103 | From MCP Playground To Org-Wide Infrastructure: Lessons From Building Booking.com's Agent Foundry | Anushka Bhandari |   |   |
|   | 10:55 | G104 + G105 | [Outcome Engineering: Why Your Agentic Architecture Doesn't Matter (Yet)](talks/outcome-engineering-agentic-architecture-doesn-t-matter-yet/materials.md) | Kierra Dotson |   | [x](talks/outcome-engineering-agentic-architecture-doesn-t-matter-yet/materials.md) |
| [x](talks/governance-can-run-checkable-properties-production-agents/transcript.md) | 11:30 | Auditorium | [Governance You Can Run: Checkable Properties for Production Agents](talks/governance-can-run-checkable-properties-production-agents/transcript.md) | Seshu Tolety |   | [x](talks/governance-can-run-checkable-properties-production-agents/materials.md) |
|   | 11:30 | Emerald Room | [Economies of Scale for MCP and Agents: Why You Need an Identity Broker](talks/economies-scale-mcp-agents-need-identity-broker/materials.md) | Magnus Jungsbluth, Jan Brennenstuhl |   | [x](talks/economies-scale-mcp-agents-need-identity-broker/materials.md) |
|   | 11:30 | G102 + G103 | [I Was the Bottleneck, Not the Agent](talks/i-was-bottleneck-not-agent/materials.md) | Vincent Ysmal |   | [x](talks/i-was-bottleneck-not-agent/materials.md) |
| [x](talks/agents-can-pay-can-they-prove/transcript.md) | 11:30 | G104 + G105 | [Agents Can Pay. Can They Prove It?](talks/agents-can-pay-can-they-prove/transcript.md) | Diego Zuluaga | [x](talks/agents-can-pay-can-they-prove/summary.md) | [x](talks/agents-can-pay-can-they-prove/materials.md) |
| [x](talks/when-agents-run-healthcare-building-reliable-agentic-systems/transcript.md) | 13:15 | Auditorium | [When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments](talks/when-agents-run-healthcare-building-reliable-agentic-systems/transcript.md) | Janosch Woschitz |   | [x](talks/when-agents-run-healthcare-building-reliable-agentic-systems/materials.md) |
| [x](talks/mcp-apps-agentic-web/transcript.md) | 13:15 | Emerald Room | [MCP Apps and The Agentic Web](talks/mcp-apps-agentic-web/transcript.md) | Liad Yosef | [x](talks/mcp-apps-agentic-web/summary.md) |   |
|   | 13:15 | G102 + G103 | Governed Agent Autonomy: Building a Control Plane for Agentic Systems | Nnenna Ndukwe |   |   |
| [x](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/transcript.md) | 13:15 | G104 + G105 | [Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/transcript.md) | Ksenia Bobrova | [x](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/summary.md) | [x](talks/testing-agents-their-tools-offline-evaluation-synthetic-tasks/materials.md) |
|   | 13:15 | G106 + G107 | [Harness Engineering: Building the System Around Your AI Coding Agent](talks/harness-engineering-building-system-around-ai-coding-agent/materials.md) | Ji Darwish |   | [x](talks/harness-engineering-building-system-around-ai-coding-agent/materials.md) |
|   | 13:50 | Auditorium | Stateless Agents, Stateful Worlds: Designing for Interruption | Arul Kumaran |   |   |
|   | 13:50 | Emerald Room | [From API Catalogs To Agent Catalogs: Solving MCP Server Discovery With Open Resource Discovery](talks/api-catalogs-agent-catalogs-solving-mcp-server-discovery/materials.md) | Vyshnavi Gadamsetti, Sebastian Wennemers |   | [x](talks/api-catalogs-agent-catalogs-solving-mcp-server-discovery/materials.md) |
|   | 13:50 | G102 + G103 | [Agents Talking To Agents: MCP, A2A, and the Reality of Multi-Agent Orchestration in Production](talks/agents-talking-agents-mcp-a2a-reality-multi-agent/materials.md) | Willem Berroubache |   | [x](talks/agents-talking-agents-mcp-a2a-reality-multi-agent/materials.md) |
|   | 13:50 | G104 + G105 | [Shipping a Production App in 10 Days: A Real Measurement of AI-Assisted Development](talks/shipping-production-app-10-days-real-measurement-ai/materials.md) | Julien Dubois |   | [x](talks/shipping-production-app-10-days-real-measurement-ai/materials.md) |
| [x](talks/agent-smith-never-send-human-do-machine-s/transcript.md) | 14:25 | Auditorium | [Agent-Smith: Never Send a Human To Do a Machine’s Job](talks/agent-smith-never-send-human-do-machine-s/transcript.md) | Glenn ten Cate, Jorge Carvalho |   | [x](talks/agent-smith-never-send-human-do-machine-s/materials.md) |
|   | 14:25 | Emerald Room | Spotify’s Bet on MCP and Investment in Open Source | Reinoud Kruithof, Yannick Epstein |   |   |
|   | 14:25 | G102 + G103 | [Beyond Chatbots: Agentic UI With Open Standards](talks/beyond-chatbots-agentic-ui-open-standards/materials.md) | Manfred Steyer |   | [x](talks/beyond-chatbots-agentic-ui-open-standards/materials.md) |
| [x](talks/vibes-data-evaluating-agents-real-work/transcript.md) | 14:25 | G104 + G105 | [From Vibes To Data: Evaluating Agents on Your Real Work](talks/vibes-data-evaluating-agents-real-work/transcript.md) | Ville Hellman | [x](talks/vibes-data-evaluating-agents-real-work/summary.md) | [x](talks/vibes-data-evaluating-agents-real-work/materials.md) |
| [x](talks/gating-high-risk-agentic-actions-relying-party-exogenous/transcript.md) | 15:00 | Auditorium | [Gating High-Risk Agentic Actions at the Relying Party With Exogenous (Out-of-Band) Inputs](talks/gating-high-risk-agentic-actions-relying-party-exogenous/transcript.md) | Andrew Bud |   |   |
|   | 15:00 | Emerald Room | Attribution by Design: Skills, MCP, and Where Provenance Gets Built In | Ola Hungerford |   |   |
| [x](talks/no-central-brain/transcript.md) | 15:00 | G102 + G103 | [No Central Brain](talks/no-central-brain/transcript.md) | Fausto Albers | [x](talks/no-central-brain/summary.md) | [x](talks/no-central-brain/materials.md) |
|   | 15:00 | G104 + G105 | [Giving Your Agentic Coding AI a Security Brain](talks/giving-agentic-coding-ai-security-brain/materials.md) | Liran Tal |   | [x](talks/giving-agentic-coding-ai-security-brain/materials.md) |
|   | 15:00 | G106 + G107 | Evaluating Agents at Scale: From 50 Examples to a Production Flywheel | Bauke Brenninkmeijer |   |   |
|   | 15:35 | Emerald Room | [Most MCP Servers are Empty](talks/most-mcp-servers-empty/materials.md) | David Golverdingen |   | [x](talks/most-mcp-servers-empty/materials.md) |
|   | 15:35 | G102 + G103 | [Infrastructure Red Teaming With Abliterated Models: What Actually Stops Agent Attacks](talks/infrastructure-red-teaming-abliterated-models-actually-stops-agent/materials.md) | Roy Belio |   | [x](talks/infrastructure-red-teaming-abliterated-models-actually-stops-agent/materials.md) |
| [x](talks/autonomous-organisations-starting-small/transcript.md) | 15:35 | G104 + G105 | [Autonomous Organisations: Starting Small](talks/autonomous-organisations-starting-small/transcript.md) | Floris Fok | [x](talks/autonomous-organisations-starting-small/summary.md) |   |
|   | 15:35 | G106 + G107 | [From Advisory to Autonomous: A Staged Model for Agent Adoption](talks/advisory-autonomous-staged-model-agent-adoption/materials.md) | Milos Mandic |   | [x](talks/advisory-autonomous-staged-model-agent-adoption/materials.md) |
|   | 16:10 | Auditorium | MCP Challenges & Opportunities | Sam Morrow, Angie Jones, Shaun Smith, Shub Argha |   |   |

<!-- COVERAGE:END -->
