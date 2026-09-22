---
title: "MAS-Lab: An Open Framework for Spec-Driven, Interoperable Multi-Agent Systems"
speakers: [Jordan Augé]
session_id: ac4428f4ab50e36d489c0b57995466cb
kind: slides
deck: 20260917-mas-lab-agntcon-2026-ams.pdf
slides: 29
---

# MAS-Lab: An Open Framework for Spec-Driven, Interoperable Multi-Agent Systems — slides

**Jordan Augé**

*Thursday 17 September 2026, 17:30, G102 + G103 — Multi-Agent track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`20260917-mas-lab-agntcon-2026-ams.pdf`](20260917-mas-lab-agntcon-2026-ams.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built. / MAS-Lab: / An Open Framework for Spec-Driven & Interoperable Multi-Agent Systems / Jordan Augé (Cisco Systems)
**Shows.** Dark navy title card with the Agentic AI Foundation / AGNTCon+MCPCon Europe logo top-left, the talk title in a white box, and the speaker's name in a pink banner beneath it. A decorative network/circuit-board graphic of connected coloured dots runs along the bottom of the slide.

## Slide 2 — Who am I?
**Text.** Who am I ? / Tech lead, Outshift @ Cisco since 2014 / Mixed academic & Industrial background / Traffic engineering ; QoS modeling / Internet measurements & testbeds (PlanetLab team) / Information Centric Networking / Cloud Security & AI/ML / Agentic AI / Outshift @ Cisco (https://outshift.cisco.com/) / Quantum Networking & Agentic AI / Internet of Agents (AGNTCY: https://agntcy.org/) / Internet of Cognition (more at the end of the talk) / Chair of Accuracy and Reliability WG @ AAIF / Where the agentic stack is being built.
**Shows.** A bio slide with a bulleted career history on the left, and on the right a stack of logos for Cisco, Outshift by Cisco, past research affiliations (Telecom, Orange, University of Cambridge, UPMC, LINCS, SystemX), the AGNTCY project, "Observe & Eval project" with Splunk, and the Agentic AI Foundation.

## Slide 3 — Outline
**Text.** Outline / Motivations: testing and verifying agentic systems / MAS-Lab introduction: specs, runtime, labs, demo / Objective : Accuracy & Reliability for MultiAgent Systems / Example: Investigating Cognitive failures / Where the agentic stack is being built.
**Shows.** A simple four-bullet agenda list; the key terms in each bullet (Motivations, MAS-Lab, Accuracy & Reliability, Cognitive failures) are highlighted in red/orange to preview the talk's four sections.

## Slide 4 — Motivation
**Text.** Motivation / Multi-Agent System + Network Digital Twin for network reliability / Replay real incidents on a replica of production networks / joint work with swisscom / DEVELOPMENT: Rapid iterations to design, Versioning and benchmarking, Test new solutions / DEPLOYMENT: Our stack: llamaindex, MCP, A2A, [Kubernetes icon], OpenTelemetry / Logic & deployment mixed in code, Lack of specs, Breaking changes in frameworks / RESEARCH & LARGE-SCALE EVALUATION: Hard to control, scale & parallelize, Test logic only / J. Augé, S.Betts, G.Carofiglio, G. Grassi, M. Gysi, JK d'Souza - Aether: Network Validation Using Agentic AI and Digital Twin – ArXiv preprint - https://arxiv.org/abs/2604.18233 / G.Carofiglio, JK d'Souza, M. Gysi, O. Mabadeje - Driving autonomous network operations - How Swisscom and Outshift by Cisco are redefining network reliability with AI agents – Whitepaper, 2025 / Where the agentic stack is being built.
**Shows.** Three columns (Development, Deployment, Research & Large-Scale Evaluation) describing pain points building an MCP/A2A/llamaindex-based multi-agent network-reliability system with Swisscom; icons for MCP, A2A, Kubernetes and OpenTelemetry mark the deployment stack. On the right, a thumbnail of the "Aether" arXiv paper's first page. Two citations are listed at the bottom with links.

## Slide 5 — MAS-Lab overview
**Text.** MAS-Lab overview / MAS-Lab is a declarative agentic framework for composition, validation, experimentation and pre-production testing of agentic applications. / SPECS: Declares all system entities—agents, tools, models, and coordination edges in versioned YAML specifications. Grounding for observability. / RUNTIME: A modular & safe runtime allowing implementation of specs (logic, control, infra) through plugins, on top of a stable API interface (contracts), with observability and governance as first-class citizens. / LAB: Allow system behaviour study and validation under controlled variations (explore design space, swap infrastructure, inject faults, replay traces) / Where the agentic stack is being built.
**Shows.** Three colour-coded label blocks (yellow SPECS, blue RUNTIME, green LAB) each paired with an explanatory paragraph — the three pillars of the MAS-Lab framework being introduced.

## Slide 6 — Agentic apps environment (base diagram)
**Text.** Agentic apps environment / User / Agent / MAS (runtime logic) / Admin / Management Policies HITL / Infrastructure Access & Protocols / LLM (eg. openAI) / Tools (eg. MCP) / Network (eg. A2A) / Where the agentic stack is being built.
**Shows.** A box diagram: a "User" box double-arrows into a dashed "Agent / MAS (runtime logic)" box (shown with small connected purple squares representing agents); below, an "Admin" box connects to "Management Policies HITL," which in turn connects both up to the Agent/MAS box and sideways to an "Infrastructure Access & Protocols" bar spanning three boxes — LLM (e.g. openAI), Tools (e.g. MCP), Network (e.g. A2A).

## Slide 7 — Agentic apps environment (with dataset and lab benchmarks)
**Text.** Agentic apps environment / Dataset (Input, HITL, memory seeds, tool fixtures) + Ground Truth / User / Agent / MAS (runtime logic) / Admin / Management Policies HITL / Infrastructure Access & Protocols / LLM (eg. openAI) / Tools (eg. MCP) / Network (eg. A2A) / LAB BENCHMARKS / Vary 1 parameter / Perform N runs / Evaluation / … / Where the agentic stack is being built.
**Shows.** The same diagram as slide 6, now with a "Dataset (Input, HITL, memory seeds, tool fixtures) + Ground Truth" bar feeding both the User and Agent/MAS boxes from above, and a new olive-green "LAB BENCHMARKS" panel on the right (vary 1 parameter, perform N runs, evaluation) that also feeds the Admin box and the infrastructure bar — showing how the lab wraps the whole environment to run controlled experiments.

## Slide 8 — Agentic apps environment (LAB internals highlighted)
**Text.** Agentic apps environment / LAB / LOGIC SPECS | Overlays / RUNTIME | Execution | Telemetry / CONTROL SPECS | Overlays / INFRA SPECS | Overlays / Where the agentic stack is being built.
**Shows.** The same overall diagram now dimmed/faded except for a highlighted green "LAB" region in the middle: a yellow "LOGIC SPECS" bar (with an "Overlays" tag) sits above a blue "RUNTIME" bar (with "Execution" and red "Telemetry" tags), which connects down to two more yellow bars, "CONTROL SPECS" and "INFRA SPECS" (each also tagged "Overlays") — zooming into the internal spec/runtime structure inside the Agent/MAS box.

## Slide 9 — MAS-Lab workflows
**Text.** MAS-Lab workflows / Agentic app design space = the logic / MAS intent × Agent artefacts × MAS Agency & Communication / Control & Governance: Control plugins / Deployment & protocols: Deployment flavour / Resources & environment: Infra. details / Model | Tools | Skills / Memory | Design pattern / Context manager / Agency | Topology / Observability; security policies; data access, etc. / Local (single process, local bus) / Production (MCP, A2A, etc.) / APIs, Secrets / Where the agentic stack is being built.
**Shows.** A left-to-right chain of six dashed boxes multiplied together (×): MAS intent, Agent artefacts, MAS Agency & Communication (forming "the logic"), then Control plugins, Deployment flavour, and Infra. details. Icons mark each box (a speech bubble, a square, connected squares, a shield, stacked bars, a key). Below the "Agent artefacts" and "MAS Agency" boxes, smaller pill labels list their sub-components (Model, Tools, Skills, Memory, Design pattern, Context manager, Agency, Topology); below Control plugins, a list of governance concerns; below Deployment flavour, two options, Local and Production.

## Slide 10 — Demo (specs)
**Text.** DEMO / MAS-Lab specs / Agent & MAS creation / Telemetry & plots / Labs benchmarks / MAS-Lab tutorials / https://outshift-open.github.io/mas-lab/tutorials/ / Where the agentic stack is being built.
**Shows.** A section-divider slide (matches the title slide's dark background and dot/circuit graphic) listing four demo topics, with a QR code and link to the MAS-Lab tutorials site in a white callout box bottom-right.

## Slide 11 — Runtime architecture (plugins vs kernel)
**Text.** Runtime architecture / PLUGINS: React DP, CoT, MCP, … / COMPOSITION OF ISOLATED PLUGINS / Contrats / Protocols (local, gRPC) / similar idea to MCP & A2A bound to runtime by specs / OS / KERNEL / AGENT LOGIC / CONTROL / etc. / Internal state (context, status, etc.) / COUPLED MEALY MACHINES / → proven behaviour (TLA+) / → natural MAS extension with Petri Nets / Where the agentic stack is being built.
**Shows.** Two side-by-side diagrams: on the left, a dashed "PLUGINS" box stacking interchangeable modules (React DP, CoT, MCP, …), labelled "composition of isolated plugins"; on the right, an "OS / KERNEL" box containing looping-circle state-machine icons for "AGENT LOGIC" and "CONTROL" feeding an "Internal state" bar, labelled "coupled Mealy machines" with a note that behaviour is proven via TLA+ and naturally extends to multi-agent systems via Petri nets. A double-headed red arrow in the middle labelled "Contrats / Protocols (local, gRPC)" connects the two, compared to MCP & A2A.

## Slide 12 — Runtime architecture (verifiable runtime & MAS)
**Text.** Runtime architecture / Verifiable runtime & MAS / Plugins get (restricted) access to resources through contracts / Enforced governance & observability / Safety & proven behaviour: concurrency; deadlock- & loop-free, … / Extensible state machine (policies, etc.) / python → rust : memory safety / Where the agentic stack is being built.
**Shows.** The prior slide's diagram is faded into the background while a new light-blue "Verifiable runtime & MAS" panel is highlighted on the right, listing the runtime's safety and governance guarantees, including a planned migration from Python to Rust for memory safety.

## Slide 13 — Runtime architecture (verifiable plugins)
**Text.** Runtime architecture / Verifiable plugins / Tested in isolation / Invariants / Unit and functional tests / Gated access to runtime resources / Verifiable runtime & MAS (dimmed) / Where the agentic stack is being built.
**Shows.** A new pale-green "Verifiable plugins" panel is highlighted on the left (tested in isolation, invariants, unit/functional tests, gated access to runtime resources), while the earlier diagram and the "Verifiable runtime & MAS" panel from slide 12 are dimmed in the background.

## Slide 14 — Runtime architecture (verifiable specs)
**Text.** Runtime architecture / Verifiable plugins (dimmed) / Verifiable specs / Spec can be validated before execution / Anchoring for observability / Basis for enforcement / Verifiable runtime & MAS (dimmed) / Where the agentic stack is being built.
**Shows.** Three side-by-side panels now visible together: dimmed "Verifiable plugins" (left) and dimmed "Verifiable runtime & MAS" (right) bracket a newly highlighted orange "Verifiable specs" panel in the centre, listing that specs can be validated before execution, anchor observability, and form the basis for enforcement — completing the three-panel build-up across slides 12–14.

## Slide 15 — Labs: designing experiments (base flow)
**Text.** Labs: designing experiments / MAS → Application / Overlay(s) → Scenario / Dataset(s) → Test / Run / Baseline application(s) configuration / Variations through overlays (logic / control / infrastructure) / Iterate over dataset (user prompt, test fixtures, memory seeds, …) / Repeat N times (statistical confidence) / Where the agentic stack is being built.
**Shows.** A vertical flow of dark-blue boxes (MAS, Overlay(s), Dataset(s)) each dashed-arrowing into a lighter blue box (Application, Scenario, Test) that chain downward into a final "Run" box; each stage is annotated on the right with what it configures. To the right, four dotted rectangles containing coloured dots/arrows represent example variation and run sequences (a single teal dot, a two-dot purple sequence, single dots, and a three-dot purple sequence).

## Slide 16 — Labs: designing experiments (N=3 runs, telemetry)
**Text.** Labs: designing experiments / N=3 runs / PRE / POST markers on Application, Scenario, Test, Run
**Shows.** The same flow diagram as slide 15, now dimmed, with "PRE"/"POST" coloured tick markers added alongside each stage and a looping arrow back from Run to the top, annotated "N=3 runs" — indicating the experiment executes pre/post hooks around each stage and repeats the whole run three times.

## Slide 17 — Labs: designing experiments (telemetry collection)
**Text.** Labs: designing experiments / otel collector deployment / provisio[n] / data annotation & aggregation / plot / telemetry collection, evaluation
**Shows.** The flow diagram is fully dimmed in the background while the four dotted-rectangle run traces on the right (from slide 15) are highlighted, connected by a diagonal purple line labelled "data annotation & aggregation" running up to an "otel collector deployment / provision" label at top and down to "telemetry collection, evaluation" at bottom, with "plot" marking where the aggregated data becomes a chart.

## Slide 18 — Brownfield experiments
**Text.** Brownfield experiments / The Native Architecture / MAS-Lab ships out-of-the-box powered entirely by its own native runtime for optimal performance. / Example: Building a greenfield agent application directly designed for the native execution engine. / Bridging External Frameworks / Integrate existing apps (brownfield projects) by writing custom adapters or wrapping third-party frameworks. / Example: Wrapping an existing LangGraph app to inject external LLM/MCP proxies and collect OpenTelemetry. / Managing Trade-offs & Migration / Accept limitations on native flexibility and telemetry control in exchange for interoperability. / Example: Use these wrappers temporarily to prove functional equivalence, establish a baseline, and guide your migration to a native MAS-Lab setup. / Where the agentic stack is being built.
**Shows.** Three stacked text sections describing how MAS-Lab handles pre-existing ("brownfield") agent frameworks versus native greenfield apps. A small thumbnail in the top right reproduces the LOGIC SPECS/RUNTIME/CONTROL SPECS/INFRA SPECS "LAB" diagram from slide 8 as a visual anchor.

## Slide 19 — Demo (labs benchmarks)
**Text.** DEMO / Labs benchmarks / MAS-Lab tutorials / https://outshift-open.github.io/mas-lab/tutorials/ / Where the agentic stack is being built.
**Shows.** A second, shorter demo-divider slide matching slide 10's style, this time flagging only "Labs benchmarks," with the same QR code and tutorial link box.

## Slide 20 — Section divider: reliability / cognitive failures
**Text.** Reliability across the experiment lifecycle / Handling cognitive failures / Where the agentic stack is being built.
**Shows.** A plain section-divider slide, dark background with the circuit/dot graphic along the bottom, introducing the talk's next major topic.

## Slide 21 — Application lifecycle (research/plugin dev/test)
**Text.** Application lifecycle / RESEARCH → Ship contribution as plugins & compose them transparently, Reproducible experiment artefacts; benchmarks (specs = agent identity) / PLUGIN DEV → Invariants; unit & functional tests; interoperability ? / AGENT or MAS DESIGN → Versionable specs / TEST → Lightweight / systematic testing / PROD (greyed out) / OPS (greyed out) / Where the agentic stack is being built.
**Shows.** A staircase of blue chevron arrows labelled RESEARCH, PLUGIN DEV, AGENT or MAS DESIGN, TEST, with greyed-out PROD and OPS chevrons further down-right not yet reached, each annotated with what that lifecycle stage guarantees.

## Slide 22 — Application lifecycle (prod/ops)
**Text.** Application lifecycle / (earlier stages dimmed) / Decoupling between logic, infrastructure & control with guarantees / Dev can plan for governance, governance cannot change logic / Same runtime across lifecycle / PROD / Deep observability (all state machine events) / For accountability, debugging, and analysis / OPS / Where the agentic stack is being built.
**Shows.** The same staircase diagram, with RESEARCH/PLUGIN DEV/AGENT-MAS DESIGN/TEST now dimmed and the final two chevrons, PROD (blue) and OPS (orange), now highlighted and annotated — completing the lifecycle from research through to production operations on the same runtime.

## Slide 23 — Cognitive failures
**Text.** Cognitive failures / Typical failures show up in logs / Repeated steps; loops / Handoff or network error / Tool call error; wrong parameter / Cognitive failures are silent: no error, plausible action… … but wrong reasons / Lack of verification / Convergence issues / Ungrounded claims / DESIGN: System prompt, Collaboration pattern, Model, … / INFRASTRUCTURE: Tool availability / ENVIRONMENT: User prompt / → Dataset: Examples of cognitive failures / → Frequency x Impact: Quantitative numbers / → Methodology & Tool: Test your app ! / Paper (under submission) / Blog: Silent Failures, Loud Consequences: Cognitive Challenges in Multi-Agent Systems (paper under submission) / https://outshift.cisco.com/blog/ai-ml/cognitive-challenges-in-multi-agent-systems / Where the agentic stack is being built.
**Shows.** Left side lists three "loud" failure types with icons (looping arrow for repeated steps, an X between two boxes for handoff/network error, a dotted X for tool call error). Right side lists three "silent" cognitive failure types (magnifying glass for lack of verification, mismatched boxes for convergence issues, exclamation mark for ungrounded claims). Below, three dashed boxes (Design, Infrastructure, Environment) multiplied together feed three blue output boxes (Dataset, Frequency x Impact, Methodology & Tool) with arrows, mapping causes to measurable outputs.

## Slide 24 — Cognitive failures (prevalence callout)
**Text.** Cognitive failures / High prevalence of cognitive failures ! / common test applications / popular agentic apps (eg. ChatDev) / even for moderator-based patterns (not only distributed) / Paper (under submission) / Blog: Silent Failures, Loud Consequences: Cognitive Challenges in Multi-Agent Systems (paper under submission) / https://outshift.cisco.com/blog/ai-ml/cognitive-challenges-in-multi-agent-systems / Where the agentic stack is being built.
**Shows.** The same slide as 23, now with a large pink callout box overlaid on top of the earlier diagram, stating that cognitive failures are highly prevalent — found in common test applications, popular agentic apps like ChatDev, and even moderator-based (not just distributed) collaboration patterns.

## Slide 25 — Cognitive failures taxonomy
**Text.** Cognitive failures taxonomy / TAXONOMY MATRIX / Extends the MAST taxonomy / WHAT BROKE: Memory & facts | Teamwork | Certainty / WHERE IT APPEARS: Whole MAS | Collaboration | One agent / Different symtoms & root causes -> targeted remediation / (Deep) Observability & Semantic Analysis → DETECT → CLASSIFY → MITIGATE / Where the agentic stack is being built.
**Shows.** A 3×3 matrix (left) plotting "what broke" (Memory & facts, Teamwork, Certainty) against "where it appears" (Whole MAS, Collaboration, One agent), each cell populated with coloured dots representing distinct failure modes — extending the existing MAST taxonomy. On the right, a four-step vertical pipeline of coloured bars: (Deep) Observability & Semantic Analysis → Detect → Classify → Mitigate.

## Slide 26 — Paper results & next steps
**Text.** Paper results & next steps / Agentic developer (specs & logic): Agent & MAS design space exploration / Vary design pattern & topology / Analysis pipeline with evaluation (Agntcy MCE) / Design tradeoffs (metrics vs overhead) / Researcher (lab, plugins & telemetry): Extensions and reproducible research / Memory benchmark: Wrap OSS implementation, Insert through overlay, Leverage native observability for performance analysis / Enterprise operator (control & governance): Lifecycle control : From dev to production / DEV → OBSERV. (OpenTelemetry export) → GOV. (MODEL BUDGET) → GOV. (TOOL CALL GUARDRAILS) → GOV (RELIABILITY, re-attempt circuit breaker) → PROD / Where the agentic stack is being built.
**Shows.** Three dashed panels, one per persona (Agentic developer, Researcher, Enterprise operator), each with a bullet list and a supporting chart thumbnail (a scatter plot of answer perplexity vs session latency for the developer panel; grouped bar charts for the researcher's memory benchmark panel). Below, a six-stage chevron pipeline (DEV → OBSERV. → GOV. MODEL BUDGET → GOV. TOOL CALL GUARDRAILS → GOV. RELIABILITY → PROD) shows the enterprise operator's lifecycle-control roadmap.

## Slide 27 — MAS-Lab (repo / roadmap)
**Text.** MAS-Lab / MAS-Lab / https://github.com/outshift-open/mas-lab / A specification-driven foundation for building multi-agent systems that are testable, reproducible, observable, and governable from design to production. / License Apache 2.0 / python 3.11+ / v0.1 / Initial release / Agent runtime ; logic specs.; control plugins; labs/benchmark / https://arxiv.org/abs/2606.30546 / v0.2 / (end Sept'26) / AgentSkills.io; MCP; A2A; Otel; … / Collaboration patterns / Where the agentic stack is being built.
**Shows.** A mock GitHub repository card (name, description, Apache 2.0 / Python 3.11+ badges) followed by a two-row release roadmap: v0.1 "Initial release" with its arXiv paper link, and v0.2 planned for end of September 2026 adding AgentSkills.io, MCP, A2A, OpenTelemetry integrations and collaboration patterns.

## Slide 28 — Call to action
**Text.** Call to action / MAS-Lab – Code, doc, blog, labs & tutorials / We welcome feedback and collaborations to shape evolution of the tool, libraries and use cases. We want to make it a useful for the community. / https://github.com/outshift-open/mas-lab / Blog : Silent Failures, Loud Consequences: Cognitive Challenges in Multi-Agent Systems / https://outshift.cisco.com/blog/ai-ml/cognitive-challenges-in-multi-agent-systems / We'll have a hands on workshop soon ! / Silent Failures, loud consequences: hands-on diagnosis & remediation in Multi-Agent Systems with MAS-Lab & OXP / Virtual event – Oct 27th, 2026 - Shift.forward() - You can register ! / Agentic AI Foundation / Help progress the work on Accuracy and Reliability, join us ! / Contribute to the Accuracy and Reliability WG Survey / Where the agentic stack is being built.
**Shows.** A closing slide with three calls to action (repo, blog, upcoming virtual workshop on Oct 27, 2026 via "Shift.forward()"), each paired with its own QR code on the right, plus an Agentic AI Foundation logo and an invitation to join its Accuracy and Reliability working group survey.

## Slide 29 — Closing / sponsor card
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built.
**Shows.** A plain closing card repeating the conference logo and tagline over the same dark circuit/dot-pattern background used on the title slide, with no additional speaker or contact information.
