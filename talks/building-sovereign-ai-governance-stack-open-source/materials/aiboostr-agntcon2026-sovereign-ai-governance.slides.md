---
title: "Building a Sovereign AI Governance Stack with Open Source"
speakers: [Roman Swoszowski]
session_id: 9de888c443acf63122c93d738006c74a
kind: slides
deck: aiboostr-agntcon2026-sovereign-ai-governance.pdf
slides: 23
---

# Building a Sovereign AI Governance Stack with Open Source — slides

**Roman Swoszowski**

*Thursday 17 September 2026, 12:00, G104 + G105 — Enterprise Adoption track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`aiboostr-agntcon2026-sovereign-ai-governance.pdf`](aiboostr-agntcon2026-sovereign-ai-governance.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Aiboostr / Building a sovereign AI governance stack with open source. / Roman Swoszowski / VP Product Development · Grape Up / grape up / Breaking the linear
**Shows.** A dark teal-to-green gradient title slide with the Aiboostr logo top right, the talk title in large white text, speaker credentials beside a green vertical rule, and the Grape Up logo and tagline "Breaking the linear" bottom left.

## Slide 2 — How many AI systems are you running right now?
**Text.** Aiboostr / How many AI systems are you running right now? / grape up / Breaking the linear
**Shows.** Nothing beyond the text; a plain off-white slide with the question in large dark type, a rhetorical opener with no diagram.

## Slide 3 — 4 · 11 · 40+
**Text.** Aiboostr / 4 | 11 | 40+ / grape up / Breaking the linear
**Shows.** Three large numbers (4, 11, 40+, the last in green) separated by thin vertical dividers on an otherwise blank slide, presumably counting up from a small number of systems to a sprawling total as the talk's opening provocation.

## Slide 4 — 4 · 11 · 40+ with tool logos
**Text.** Aiboostr / 4 | 11 | 40+ / grape up / Breaking the linear
**Shows.** The same three numbers as the previous slide, now revealed against a faint grey background scattered with dozens of recognisable AI/SaaS tool logos (Adobe, OpenAI's swirl, Notion, Anthropic's asterisk, a whale/Docker-like icon, and others), illustrating the sprawl of AI tools an organisation ends up running.

## Slide 5 — Who is calling which model, with what data?
**Text.** Aiboostr / Who is calling which model, with what data? / Are the guardrails the same everywhere? / What does each new integration open up? / What does this cost, and who pays? / grape up / Breaking the linear
**Shows.** Nothing beyond the text; four rhetorical governance questions stacked in a list, separated by thin horizontal rules, framing the problem space for the rest of the talk.

## Slide 6 — app–model vs. agent tree
**Text.** Aiboostr / app — model / agent — models / tools (MCP) — CRM / subagent A — models / tools (MCP) — files / subagent B — tools (MCP) — email / payments / grape up / Breaking the linear
**Shows.** Two diagrams side by side, separated by a vertical green rule: on the left, a simple "app—model" box pair; on the right, a much larger tree rooted at "agent" branching into models, tools (MCP, linked to a CRM box), and two subagents (A and B), each of which further branches into its own models/tools nodes (files; email and payments) — visually contrasting the simplicity of a plain app call with the sprawling dependency tree of an agentic system.

## Slide 7 — "Maybe we should tell them it's AI?"
**Text.** "Maybe we should tell them it's AI?" / grape up / Breaking the linear
**Shows.** A black-and-white illustrated cartoon of a gallery opening: two women in business attire whisper conspiratorially in the foreground while a crowd of well-dressed gallery-goers admire a framed crude stick-figure child's drawing hung on the wall as though it were fine art — a joke about hype and uncritical admiration applied to AI output.

## Slide 8 — Inventory · Access · Evidence
**Text.** Aiboostr / Inventory · Access · Evidence / grape up / Breaking the linear
**Shows.** Nothing beyond the text; a three-word framework stated on a dark teal-green gradient background, serving as a section-divider naming the pillars of the governance stack to come.

## Slide 9 — AI Governance Architecture: app–model
**Text.** Aiboostr / AI GOVERNANCE ARCHITECTURE / app — model / grape up / Breaking the linear
**Shows.** The architecture build-up begins with just two connected boxes, "app" and "model," on an otherwise empty canvas — the starting point before governance layers are added one by one in the following slides.

## Slide 10 — Layer 1 · Gateway
**Text.** Aiboostr / LAYER 1 · GATEWAY / Who is calling which model? / app — gateway (identity · routing · limits) — model / grape up / Breaking the linear
**Shows.** The app–model diagram now has a highlighted green "gateway" box inserted between them, labelled with its three responsibilities (identity, routing, limits), showing the first governance layer added to the architecture.

## Slide 11 — Layer 2 · Registry
**Text.** Aiboostr / LAYER 2 · REGISTRY / What do we actually have? / registry (models · agents · MCP servers) — connects down to — gateway (identity · routing · limits) / app — gateway — model / grape up / Breaking the linear
**Shows.** The architecture diagram grows a second highlighted green box, "registry" (models · agents · MCP servers), sitting above and feeding into the gateway box, which still sits between app and model.

## Slide 12 — Layer 3 · Access
**Text.** Aiboostr / LAYER 3 · ACCESS / Who is allowed to use what? (and how do they get it) / registry (models · agents · MCP servers) / access (entitlements · self-service · delegation) — both feed gateway (identity · routing · limits) / app — gateway — model / grape up / Breaking the linear
**Shows.** The diagram now shows two boxes side by side above the gateway — "registry" (white, established) and a newly highlighted green "access" box (entitlements · self-service · delegation) — both connected down into the gateway.

## Slide 13 — Layer 4 · Observability
**Text.** Aiboostr / LAYER 4 · OBSERVABILITY / What happened in that conversation? (and can you show it in a year) / registry / access — feed gateway / gateway — connects down to — observability (model calls · tool calls · tokens) / app — gateway — model / grape up / Breaking the linear
**Shows.** The diagram adds a fourth box, a highlighted green "observability" node (model calls · tool calls · tokens), positioned below the gateway, completing a cross shape of registry/access above and observability below the central gateway between app and model.

## Slide 14 — Layer 5 · Guardrails
**Text.** Aiboostr / LAYER 5 · GUARDRAILS / Are the rules the same everywhere? / registry / access — feed gateway / gateway — connects down to — guardrails (detector · enforcement · definition) and observability (model calls · tool calls · tokens) / app — gateway — model / grape up / Breaking the linear
**Shows.** The diagram gains a fifth, highlighted green "guardrails" box (detector · enforcement · definition) sitting beside observability below the gateway, completing a five-box cross (registry and access above, guardrails and observability below, gateway in the centre) between app and model.

## Slide 15 — AI Governance Architecture, complete
**Text.** Aiboostr / AI GOVERNANCE ARCHITECTURE / registry (models · agents · MCP servers) / access (entitlements · self-service · delegation) / gateway (identity · routing · limits) / guardrails (detector · enforcement · definition) / observability (model calls · tool calls · tokens) / app — gateway — model / grape up / Breaking the linear
**Shows.** The full five-layer architecture diagram from the previous build-up, now shown with all five layer boxes (registry, access, gateway, guardrails, observability) highlighted in green simultaneously, presenting the completed reference architecture around the app–model connection.

## Slide 16 — Open-source options per layer
**Text.** Aiboostr / AI GOVERNANCE ARCHITECTURE / Gateway — LiteLLM · Kong AI Gateway · Envoy AI Gateway · Apache APISIX · Bifrost · IBM ContextForge · ToolHive · Docker MCP Gateway · MCPJungle · MCPX / Registry — MLflow · OpenMetadata · official MCP Registry · Kubeflow Hub / Access — Keycloak · Zitadel · Ory · OPA · Cerbos · OpenBao · MCP EMA / Observability — Langfuse · Arize Phoenix · Comet Opik · OpenLLMetry · OpenLIT · Laminar · SigNoz / Guardrails — NeMo Guardrails · Guardrails AI · Presidio · Llama Guard · ShieldGemma · Granite Guardian / grape up / Breaking the linear
**Shows.** A five-row table mapping each of the five architecture layers (Gateway, Registry, Access, Observability, Guardrails) to a list of concrete open-source project names that can implement it, separated by green horizontal rules.

## Slide 17 — How to assemble?
**Text.** Aiboostr / How to assemble? / grape up / Breaking the linear
**Shows.** A detailed technical exploded-view illustration of a laptop, drawn like an assembly diagram, with the screen, keyboard deck, cooling fan, motherboard, battery, and base plate all separated and connected by dashed alignment lines and labelled screw points — a visual metaphor for assembling many discrete open-source components into one working system.

## Slide 18 — The rate of change is itself changing
**Text.** Aiboostr / The rate of change is itself changing. / grape up / Breaking the linear
**Shows.** A dense dendrogram/tree-diagram graphic of many branching horizontal lines fanning out and multiplying rapidly from left to right across most of the slide, visually representing accelerating branching complexity/change in the ecosystem.

## Slide 19 — Word grid: automate, draft, triage...
**Text.** Aiboostr / automate · draft · triage · answer · forecast · summarise · reconcile · route · review · onboard · translate · schedule / govern / grape up / Breaking the linear
**Shows.** A loose word-cloud-style grid of everyday business-process verbs in varying font sizes, with a green rule underneath separating them from a single word, "govern," set apart below — implying governance is the word that ties together and sits beneath all these automated actions.

## Slide 20 — Control: the data path / the exit path
**Text.** Aiboostr / Control / the data path / the exit path / grape up / Breaking the linear
**Shows.** A simple tree diagram: "Control" at the top branches into two labelled children, "the data path" and "the exit path," on a dark teal-green gradient background.

## Slide 21 — Full reference architecture diagram
**Text.** Aiboostr / 01 Access & UI — End-user interfaces: LibreChat (Conversational UI for humans) · Aiboostr Console (Self-service model access) · OpenAI-compatible API (Work and coding assistants) · OpenWork / OpenCode (Work and coding assistants) / 02 AI Gateway — Routing & brokering: LiteLLM (AI Gateway) — Unified access to models, agents and MCP tools · APISIX (API Gateway) — Routing / Load balancing / Ingress / 03 AI Orchestration & Governance — Discovery · Compliance · Control: Aiboostr Console — Model Access Management, Model Registry, Agent Registry, MCP Registry, AI Inventory; Guardrails AI — Policy & safety enforcement; MCP Orchestration — Tool servers & routing / 04 Model Serving — Private inference: KServe (Model serving on K8s) · vLLM (High-throughput LLM runtime) · Private model registry (Predictive & private LLMs) · Public model registry (Hugging Face) / 05 Models — Self-hosted & public: Private LLMs (self-hosted) — Mistral, Gemma, Llama, DeepSeek, Qwen; Public LLMs (external) — Anthropic, OpenAI, Google, Cohere, Bedrock / 06 Observability & Operations — Keycloak (Auth & SSO) · Langfuse (Tracing, evals & model observability) · Grafana (Dashboards & Visualization) · Prometheus (Metrics, logs & alerting) / grape up / Breaking the linear
**Shows.** A complete boxed reference-architecture diagram with six numbered horizontal bands stacked on the left (01 Access & UI through 05 Models) plus a sixth vertical band "06 Observability & Operations" running down the right side, each band populated with named product/tool boxes and icons (LibreChat, Aiboostr Console, LiteLLM, APISIX, KServe, vLLM, model provider logos, Keycloak, Langfuse, Grafana, Prometheus) — a fully worked example of the layered architecture from earlier slides instantiated with real open-source and vendor components.

## Slide 22 — Three takeaways
**Text.** Aiboostr / 1 gateway and registry first / 2 registered ≠ controlled / 3 design for sovereignty / grape up / Breaking the linear
**Shows.** Nothing beyond the text; three numbered takeaway lines in green numerals separated by thin horizontal rules, a plain closing-argument slide.

## Slide 23 — Closing: aiboostr.com
**Text.** Aiboostr / aiboostr.com / grape up / Breaking the linear
**Shows.** A closing slide on the same dark teal-to-green gradient as the title slide, with the URL "aiboostr.com" centred in large white text and the Aiboostr and Grape Up logos in their usual corners; no other imagery.
