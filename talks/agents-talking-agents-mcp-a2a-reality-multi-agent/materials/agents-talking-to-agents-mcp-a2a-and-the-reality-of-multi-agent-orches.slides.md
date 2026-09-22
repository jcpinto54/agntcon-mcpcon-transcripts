---
title: "Agents Talking To Agents: MCP, A2A, and the Reality of Multi-Agent Orchestration in Production"
speakers: [Willem Berroubache]
session_id: 07026965f649ece584f3dbb80cfc8cc9
kind: slides
deck: agents-talking-to-agents-mcp-a2a-and-the-reality-of-multi-agent-orches.pdf
slides: 17
---

# Agents Talking To Agents: MCP, A2A, and the Reality of Multi-Agent Orchestration in Production — slides

**Willem Berroubache**

*Friday 18 September 2026, 13:50, G102 + G103 — Multi-Agent track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agents-talking-to-agents-mcp-a2a-and-the-reality-of-multi-agent-orches.pdf`](agents-talking-to-agents-mcp-a2a-and-the-reality-of-multi-agent-orches.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built. / Agents Talking To Agents / MCP, A2A, and the Reality of Multi-Agent Orchestration in Production / Willem BERROUBACHE
**Shows.** A dark navy title card with the AGNTCon + MCPCon Europe logo top-left, the talk title in a white box, the speaker's name in a pink banner beneath it, and a decorative abstract "circuit board" line-and-dot graphic in purple/pink/blue along the bottom edge.

## Slide 2 — Why I'm Talking About This
**Text.** Why I'm Talking About This / Willem Berroubache Security Architect @ Orange / AI & Agentic Security — Building AI-driven security workflows and multi-agent systems for real operational environments. / AI Orchestration in Production — Designing agent orchestration, tool use, decision flows and automation around security use cases. / Security at Network Scale — Applying AI to 5G Core, fixed and home networks, Telco Cloud and Cloud-Native environments. / Where the agentic stack is being built. / orange / AAIF AMBASSADOR
**Shows.** A headshot photo of Willem Berroubache next to the Orange company logo and an "AAIF Ambassador" badge (a cartoon detective-style mascot in a shield), alongside three credential bullets each with its own emoji icon (brain, keys/masks, shield) establishing his background in AI security, orchestration, and telecom-scale networks.

## Slide 3 — The Obvious Architecture
**Text.** The Obvious Architecture / Central Orchestrator — owns workflow state and delegates work / A2A / Security Signals — events · alerts / 1. DETECT Detection Agent — triages signals / 2. INVESTIGATE Investigation Agent — builds context / 3. RESPOND Response Agent — drives remediation / MCP → Elastic Observability — logs & correlation / MCP → Kubernetes Clusters — state & workloads / MCP → MITRE / Threat Context — techniques & history / proposed action / Reviewer Agent — policy-as-code verdict / Share informations to teams / Human Approval — required before action / Approval / Deny / Escalate / Observability & Audit Trail — A2A traces · MCP calls · decisions · approvals
**Shows.** A security-operations pipeline diagram: Security Signals feed into a Detection Agent, which hands off via A2A to an Investigation Agent, then a Response Agent (each step labelled 1. Detect, 2. Investigate, 3. Respond), all reporting up to a Central Orchestrator that owns workflow state; each specialist agent also calls out over MCP to its own backend (Elastic Observability, Kubernetes Clusters, MITRE/Threat Context); the Response Agent's proposed action passes to a Reviewer Agent (policy-as-code verdict) and then to Human Approval (approve/deny/escalate) before looping back to the orchestrator; everything logs into a shared Observability & Audit Trail at the bottom — presented as the architecture that looks obvious on a whiteboard.

## Slide 4 — Multi-Agent Architecture: What We Assume
**Text.** Multi-Agent Architecture: What We Assume / Context — The next agent has the full picture. / Ownership — Delegating the task transfers responsibility. / Authority — Delegation limits what the agent can do. / Retry — A retry repeats one failed operation. / Causality — Green protocol calls mean workflow success.
**Shows.** Five icons in a row (a head with a document/checklist, a hand holding keys, a scales-of-justice/authority icon, red circular retry arrows, a monitor showing a triangle of checked nodes A/B/C) each labelled with one assumption, connected along a green rightward arrow — listing the five comfortable assumptions teams make about multi-agent systems before they hit production.

## Slide 5 — Multi-Agent Architecture: What Actually Breaks
**Text.** Multi-Agent Architecture: What Actually Breaks / Context — The critical constraint is missing, stale, or distorted. / Ownership — Execution moves. Validation and closure have no explicit owner. / Authority — Permissions may exceed the task scope. / Retry — The outcome is unknown. The next attempt may duplicate or diverge. / Causality — Each step succeeds locally. The final outcome is wrong and unexplained.
**Shows.** The same five icons and labels as slide 4, but now each sits above an explosion/burst icon on a red arrow instead of the green one, and the captions underneath describe how each assumption actually fails in production — a direct point-by-point rebuttal of the previous slide.

## Slide 6 — Pattern 1: A2A Delegation, MCP Execution
**Text.** Pattern 1: A2A Delegation, MCP Execution / Orchestration & Control Plane — Agent Registry (Agent Cards, skills, endpoints) · Durable Task Ledger (State, deadlines, idempotency keys) · Policy & Identity (Task scopes, credentials, approvals) · Observability (Trace IDs, events, audit trail) · Feedback & Evaluation (Human review, task quality, retrieval quality) / User / Upstream Service — Goal and input data → Orchestrator: Coordinator Agent — Decomposes the goal, Selects a specialist, Builds the task envelope, Applies retry policy / A2A Task — Goal + constraints, Selected context / agent discovery / A2A Trust + Context Boundary (1) / Specialist Agent Runtime (1 of N) — A2A Task Handler (Validate request, emit status, produce artifact), Context Builder (Task input, constraints, retrieved evidence), LLM / Planner (Specialist instructions and reasoning), RAG Client (Retrieve evidence when needed), MCP Client (Discover and invoke capabilities), Working State (Checkpoints to durable task ledger) / Status + Artifact / Evidence Boundary (2) / Retrieval Pipeline: RAG Service (Query rewrite, Hybrid search, Rerank and filter, Citations and provenance) ↔ Curated Knowledge: Source Systems (Vector and keyword indexes, Document store, Policies and runbooks, Domain data) / Side-Effect Boundary (3) / Capability Provider: MCP Server(s) (Capability discovery, Input schema validation, Tool and resource access, Structured results) → Operational Systems: Real-World State (APIs and services, Databases, Network control planes, Tickets and notifications) / End-to-End Trace + Audit Bus (4) / Boundary 1: Preserve context / Boundary 2: Isolate evidence / Boundary 3: Control mutations / Boundary 4: Verify outcomes
**Shows.** A dense full-architecture diagram: a top "Orchestration & Control Plane" band (Agent Registry, Durable Task Ledger, Policy & Identity, Observability, Feedback & Evaluation) oversees a Coordinator Agent, which hands an A2A Task across trust boundary 1 into a "Specialist Agent Runtime" box containing an A2A Task Handler, Context Builder, LLM/Planner, RAG Client, MCP Client and Working State; the specialist reads evidence through boundary 2 (RAG Service → curated Source Systems) and writes/executes through boundary 3 (MCP Server(s) → real-world Operational Systems); an end-to-end trace/audit bus (boundary 4) runs beneath everything — this is the reference architecture the rest of the talk's "boundaries" build on.

## Slide 7 — Boundary 1: Context Transfer
**Text.** Boundary 1: Context Transfer / A2A HANDOFF: TYPED TASK CONTRACT / Coordinator — Builds the task contract / Typed Task Envelope — Goal + acceptance criteria; Constraints: scope, deadline, safety limits; References: evidence URIs, prior artifacts; Control: task ID, trace ID, idempotency key; Authority reference, never a shared credential / Specialist — Validates before reasoning / INCOMPLETE → Request input / EXPIRED → Reject the task / KNOWN TASK ID → Resume or return artifact / Validate the contract before the receiving agent reasons or acts.
**Shows.** A left-to-right diagram of a Coordinator passing a "Typed Task Envelope" (goal, constraints, references, control IDs, an authority reference rather than a raw credential) to a Specialist that validates it before acting; three labelled outcome branches below (Incomplete, Expired, Known Task ID) show the specialist's three possible validation responses.

## Slide 8 — Boundary 1: Context, Cache, and Durable State
**Text.** Boundary 1: Context, Cache, and Durable State / WHY BOUNDARY 1 NEEDS A LEDGER / Prompt Context — Instructions and evidence assembled for the current run — ONE MODEL RUN / KV Cache — Cached attention state for shared prefixes — SERVING RUNTIME / Durable State — Task status, artifacts, policy decisions, and observed outcomes — WORKFLOW LIFETIME / Caching saves compute. The ledger preserves ownership, recovery state, and audit evidence. / The ledger carries the workflow across model runs.
**Shows.** Three coloured horizontal bands (purple, blue, orange) each pairing a state concept (Prompt Context, KV Cache, Durable State) with its description and its lifetime scope (one model run, serving runtime, workflow lifetime) — distinguishing transient LLM-serving state from the durable ledger state that must survive across calls.

## Slide 9 — Operational Foundation: Reproducible Agent Runs
**Text.** Operational Foundation: Reproducible Agent Runs / VERSION THE INPUTS, RECORD THE EFFECTS / Model + Inference Config / System Prompt + Task Template / Task Input + Evidence IDs / Tool Schemas + Policy Version / Run Manifest — task_id · trace_id, input hashes + version set, tool calls + artifact references, approvals + observed outcome / Safe Replay — 1 Rebuild recorded inputs, 2 Compare decisions + outcome, 3 Revalidate before mutation / Token sequences may vary even when the execution contract is preserved. / Reliable replay preserves the conditions and revalidates every side effect.
**Shows.** A diagram where four versioned input categories feed into a central "Run Manifest" record (capturing IDs, input hashes, tool calls, approvals and outcome), which then supports a three-step "Safe Replay" process (rebuild inputs, compare decisions/outcome, revalidate before mutation) — explaining how to make agent runs reproducible enough to debug and replay safely.

## Slide 10 — Pattern 2: Task-Scoped Authority
**Text.** Pattern 2: Task-Scoped Authority / BOUNDARIES 2 + 3: READ EVIDENCE, CONTROL SIDE EFFECTS / Specialist — One task scope / Evidence Lane (2) — RAG Client (retrieve) → RAG Service (rank + cite) → Curated Sources (read only) / Execution Lane (3) — MCP Client (named call) → Policy Gate (scope + approval) → Mutating Server (task token + key) → Real State (reconcile) / Task scope comes from the handoff. Policy enforces it at the MCP boundary.
**Shows.** A Specialist box feeding into two parallel lanes: a blue read-only "Evidence Lane" (RAG Client → RAG Service → Curated Sources, marked read only) and an orange "Execution Lane" for side effects (MCP Client → Policy Gate → Mutating Server → Real State), each tagged with its boundary number (2 and 3) — separating read access from write access so each can be governed differently.

## Slide 11 — Boundaries 2 & 3: Concurrent Agents, One Resource
**Text.** Boundaries 2 & 3: Concurrent Agents, One Resource / TOOL CONFLICTS SURFACE UNDER REAL LOAD / Agent A — reads version 42 / Agent B — reads version 42 / MCP Mutation Gate — resource version or ETag, idempotency key, lease or lock when needed, policy + accepted task scope / Commit v43 — one write accepted / Conflict — reread, retry, or escalate / Reconciliation reads the resource after the write and records the observed state. / Authority answers who may act. Concurrency control decides which write commits.
**Shows.** A diagram where two agents (A and B) both read the same resource version 42 and both attempt to write through a central "MCP Mutation Gate" (checking resource version/ETag, idempotency key, locks, and policy scope); the gate routes exactly one write to "Commit v43" (accepted) while the other is routed to "Conflict" (reread, retry, or escalate) — showing how optimistic concurrency control resolves simultaneous writes from multiple agents to one resource.

## Slide 12 — Boundary 4: Outcome Verification
**Text.** Boundary 4: Outcome Verification / CAUSALITY: PROTOCOL STATUS + OBSERVED STATE / MCP Result — status + output → Audit Link — task + trace IDs → Telemetry — independent state → Compare — intended vs observed → Decide — close or compensate / FAILURE MODE — A successful call can target the wrong resource or produce no operational effect. / task_id · trace_id · artifact_id · resource_id · observed_state / Close the task only after telemetry and orchestrator confirm the intended state.
**Shows.** A five-step left-to-right chain (MCP Result → Audit Link → Telemetry → Compare → Decide) showing how a protocol-level success status gets cross-checked against independently observed system state before a task is considered truly complete; a red callout warns that a call can report success while targeting the wrong resource or having no real effect, and a row of correlating ID fields (task_id, trace_id, artifact_id, resource_id, observed_state) ties the verification together.

## Slide 13 — Pattern 3: Recoverable A2A Handoffs
**Text.** Pattern 3: Recoverable A2A Handoffs / BOUNDARIES 1 + 4: RECOVERY AFTER A PARTIAL FAILURE / Checkpoint — Store a typed artifact after each completed step / Interruption — Agent or worker stops before the task completes / Durable Handoff Artifact — task ID + trace ID, completed step + next action, evidence + policy references, observed side effects, idempotency key + signature / Recovery Decision — Resume a known task. Compensate a partial effect. Escalate ambiguous state. / Verified checkpoints let the next actor resume, compensate, or escalate.
**Shows.** A diagram where both a "Checkpoint" event (after each completed step) and an "Interruption" event (agent/worker stopping mid-task) feed into a "Durable Handoff Artifact" (bundling task/trace IDs, completed step, next action, evidence, side effects and an idempotency key/signature), which then informs a "Recovery Decision" (resume, compensate, or escalate) — tying boundaries 1 and 4 together to make failed handoffs recoverable rather than silently lost.

## Slide 14 — Three Production Patterns, Four Failure Boundaries
**Text.** Three Production Patterns, Four Failure Boundaries / APPLY THESE AT THE SYSTEM BOUNDARIES / 1 Separate Roles — Agent + capability boundaries — A2A delegates work. MCP exposes bounded capabilities. / 2 Scoped Authority — Boundaries 2 + 3 — Separate retrieval from mutation. Issue authority per task. / 3 Recoverable Handoffs — Boundaries 1 + 4 — Checkpoint artifacts. Resume, compensate, or escalate.
**Shows.** A three-card recap slide, each numbered card (1, 2, 3) summarising one of the patterns from the preceding sections — Separate Roles, Scoped Authority, Recoverable Handoffs — with the failure boundaries each one addresses, against the deck's dark navy background with the decorative circuit-line graphic along the bottom.

## Slide 15 — What We Would Change Today
**Text.** What We Would Change Today / PRODUCTION RETROSPECTIVE / 01 Orchestrated State — A durable workflow engine owns transitions; LLMs reason inside bounded specialist nodes. / 02 Task-Scoped Execution — Policy issues short-lived authority. The MCP server verifies scope before mutation. / 03 Governed Feedback — Verified outcomes drive evaluation; humans review ambiguity and high-impact change. / Approval everywhere creates reviewer fatigue and weaker oversight. Risk tiers direct human attention to critical edge cases.
**Shows.** A three-item numbered retrospective list (01 Orchestrated State, 02 Task-Scoped Execution, 03 Governed Feedback) each with an explanatory line, closing with a callout that blanket human-approval requirements backfire through reviewer fatigue and that risk-tiered review targets attention better — the speaker's hindsight recommendations.

## Slide 16 — The end!
**Text.** The end ! / THANK YOU KINDLY / Scan to connect on LinkedIn / I regularly share technical deep dives, real-world experiments, and lessons learned.
**Shows.** A closing slide with a reaction-meme-style photo captioned "THANK YOU KINDLY" (a man in a cowboy hat and sunglasses) beside a QR code for connecting on LinkedIn.

## Slide 17 — Closing logo
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built.
**Shows.** A plain dark navy closing slide repeating the conference logo and tagline from the title slide, with the same decorative abstract circuit-line graphic across the bottom; no other content.
