---
title: "From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry"
speakers: [Jordan Augé]
session_id: 83f37169e46203cae13266651a163234
kind: slides
deck: agntcon-sept17-session.pdf
slides: 22
---

# From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry — slides

**Jordan Augé**

*Thursday 17 September 2026, 12:00, G102 + G103 — Open Source track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agntcon-sept17-session.pdf`](agntcon-sept17-session.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** From Opaque to Observable: Tracing Multi-Agent Openclaw Workflows with OTel / Insight Module for Agentic Systems / Pavan Sudheendra / Technical Leader, Cisco Systems / AGNTCon, Europe / 17-09-2026
**Shows.** Black title card with the Outshift by Cisco logo top-left and a large grey sunburst/starburst graphic on the right, on a subtle dot-grid background.

## Slide 2 — Pavan Sudheendra
**Text.** Pavan Sudheendra / Technical Leader, Outshift by Cisco. / I lead technical efforts on distributed systems and emerging multi-agent architectures. / How I ended up here — Active contributor to the LF ecosystem, including AGNTCY.org initiatives, and contributes to OTel GenAI standardization efforts. Chair of the AAIF Observability & Traceability WG / https://github.com/outshift-open/insight-module-for-agentic-systems / Apache-2.0 / Scan for the repo
**Shows.** Black bio slide with a QR code (blue-bordered box) linking to the project's GitHub repo, captioned "Scan for the repo".

## Slide 3 — What's the current situation
**Text.** What's the current situation / Problem — OpenClaw's built-in observability mainly covers local runtime diagnostics (agent logs, tool calls, session state, basic traces) and is not designed for cross-agent, multi-instance, or lifecycle-level analysis. / Status — OpenClaw now ships a built-in OpenTelemetry exporter (diagnostics-otel) that emits basic traces, logs and metrics out of the box: e.g. llm/tool calls, cost, duration, gateway logs. / Gaps — Openclaw metric names do not map to Otel GenAI semantic conventions: lack of Otel semantic convention compliant telemetry. OpenClaw's built-in telemetry is good for platform health and message processing, but thin for "agent forensics" — agent-to-agent interaction, sub-agent trees, memory changes, and end-to-end correlation across workflows. Control-flow and governance events are fragmented across hooks, logs, and diagnostics
**Shows.** Black slide with a large dashed rounded-rectangle border (blue-to-pink gradient) framing a three-row Problem / Status / Gaps breakdown, colored blue, orange, and pink respectively.

## Slide 4 — Four blind spots exists today
**Text.** Four blind spots exists today / Context assembly & sharing — Sources: prompts, agent soul, memory, tool output / Selection: what was included, cut or truncated / Boundaries: what passes down to sub-agents / Routing & delegation — Why this agent and not another? / Why was Fermor skipped but Bourdain called? / Task type, confidence, urgency — or randomness? / Delegation errors fail silently / Memory lifecycle — Why a memory was written, and by whom / When it is retrieved / How strongly it shaped a decision / Stale, tentative, or authoritative? / Decision checkpoints — Not private reasoning — decision points / Alternative paths considered, high level / Confidence levels / Why a validation step was skipped
**Shows.** Black slide with a 2x2 grid of four cards, each with a colored square icon (cyan, orange, pink, green) and its own bullet list, naming the four categories of missing visibility this project addresses.

## Slide 5 — Section divider: Insight Module for Agentic Systems
**Text.** Insight Module for Agentic Systems / © 2026 AGNTCon, Europe
**Shows.** Full-bleed orange-to-magenta gradient section-divider slide with faint wave line art and outlined circle decorations; only the section title is on it.

## Slide 6 — A new plugin
**Text.** A new plugin / Today OpenClaw built-in diagnostic plugin provides basic observability support but it is found lacking in terms of comprehensive visibility and detailed diagnostics across multiple dimensions. Our plugin complements it by providing the following missing functionalities: / 1 Connected request lifecycle — Inbound message → agent turn → tool calls → outbound response as one trace, instead of separate root spans. / 2 Workflow session semantics — A session boundary that spans multiple turns and multiple agents, with explicit start and end spans. / 3 Delegation topology — Spawn and handoff span links, fork/join annotation, and child-session lineage across runtime session keys. / 4 Derived coordination metrics — Parallelisation, repetition, novelty and memory-fragmentation scores computed from the trace itself.
**Shows.** Black slide with four numbered cards (pink 1, orange 2, blue 3, green 4) laid out in a 2x2 grid, each describing one capability the new OpenClaw observability plugin adds.

## Slide 7 — How it works
**Text.** How it works / It combines three telemetry paths: / Typed OpenClaw lifecycle hooks for request, agent, sub-agent, tool, and outbound message flow. / Event-stream hooks for control-plane events such as session reset and gateway startup. / OpenClaw diagnostics events for accurate model usage, cost, queue, webhook, and stuck-session signals. / It captures the full request journey from inbound message to agent turn, tool calls, model usage, and outbound response. / It also adds token, cost, latency, session, and gateway health visibility. / [Diagram labels] OpenClaw: Channel, Runtime (pi-ai), Agentic loop (LLM call, Tool call, LLM call), hook names: message_received, message_sent/sending, llm_input, before_agent_start, before_model_resolve, before_prompt_build, before_tool_call, before_agent_reply, after_tool_call, tool_persist_result, llm_output / OpenClaw Deep Observability: Execution trace (Session_start Span, agent_turn Span, llm_call, tool_call, llm_call, agent_turn) → Metrics → OTel collector
**Shows.** Left text column plus a right-side architecture diagram showing OpenClaw's internal hook points (Channel, Runtime, Agentic loop with LLM/Tool calls and named lifecycle hooks) feeding via arrows into an "OpenClaw Deep Observability" panel that assembles an execution trace (nested spans: Session_start, agent_turn, llm_call, tool_call) and metrics, which flow down into an OTel collector box.

## Slide 8 — Observability Features
**Text.** Observability Features / Session lifecycle tracking with session start and idle-based end / Tracing delegation topology / detecting collaboration failure modes / Gateway diagnostics for queue, webhook, stuck session, and tool-loop signals / Auto-instrumentation support via OpenLLMetry / In-plugin cache / Derived metrics support. / Exposing system-level coordination health
**Shows.** Nothing beyond the text — a plain black bulleted list.

## Slide 9 — Enriching the notion of "session"
**Text.** Enriching the notion of "session" / Core identifiers — openclaw.session.key: Runtime key — correlation across events, turns and tools. session.id: Plugin-generated UUID — the lifecycle boundary. / Lifecycle — Start: first activity on a runtime key — inbound request, agent start or LLM input. End: explicit reset, a 5-minute idle timeout checked every 30s, or graceful flush on shutdown. / Design philosophy: a best-effort boundary — session.id is a heuristic wrapper. It is not tied to a single request span — it persists across turns until an end condition fires. A boundary that is usually right beats no boundary at all.
**Shows.** Black slide with two side-by-side bordered cards (cyan "Core identifiers", orange "Lifecycle") above a wide pink-bordered "Design philosophy" card spanning the full width.

## Slide 10 — Where the GenAI conventions stop
**Text.** Where the GenAI conventions stop / We ship on the Agntcy Observe schema, built on OTel. The GenAI semantic conventions do not yet cover agent handoff and delegation – among other things, so we align on what exists and propose the rest. / Aligning with semconv — gen_ai.operation.name=invoke_workflow on request spans / gen_ai.workflow.name on workflow spans / gen_ai.provider.name replaces gen_ai.system / current cache-token field names: OTel payload fields on workflow, agent, LLM and tool spans when captureContent=true / Not covered yet — our proposal — Fork / join semantics / Handoff and spawn span links / Child-session lineage / Derived coordination scores — These live under ioa_observe.* behind the emitIoaObserveAttributes flag (default true) until the conventions catch up.
**Shows.** Black slide with two side-by-side bordered cards (cyan "Aligning with semconv" listing actual OTel GenAI attribute names, pink "Not covered yet — our proposal" listing the gaps the project's own ioa_observe.* namespace fills).

## Slide 11 — Section divider: Metrics and Monitoring
**Text.** Metrics and Monitoring / © 2026 AGNTCon, Europe
**Shows.** Same orange-to-magenta gradient section-divider template as slide 5, with only the section title text.

## Slide 12 — ~46 metrics
**Text.** ~46 metrics / Core 12 — Request flow, tool activity, LLM usage, cost — openclaw.llm.tokens.total, openclaw.cost.usd / Gateway diagnostics 14 — Queue health, webhooks, session health — openclaw.queue.depth, openclaw.session.stuck_age_ms / Memory events 8 — Read, write and edit operations — openclaw.memory.search_hit, openclaw.memory.write_duration / Context assembly 8 — Context composition and propagation — openclaw.context.prompt_size, openclaw.context.preparation_duration / Memory lifecycle 1 — Fragmentation across searches — openclaw.memory.search_fragmentation / Routing & delegation 3 — Coordination quality scores — openclaw.session.parallelisation_score, openclaw.agent.novelty_score
**Shows.** Black slide with a 2x3 grid of six cards, each titled with a metric category, a count badge (12, 14, 8, 8, 1, 3), a short description, and one or two example metric names in monospace.

## Slide 13 — What monitoring enables
**Text.** What monitoring enables / End-to-end system visibility - unified view across agent execution, infrastructure, and control into a single observable execution trace. / Root-cause diagnosis of failures - identification of bottlenecks (queueing, latency, tool errors, stuck sessions, retries) / Separation of semantic vs operational issues - differentiate whether failures arise from agent reasoning/routing (e.g., tool loops, poor context) or from external constraints (e.g., queue delays, webhook failures, policy limits). / Evaluation of context/memory use and reconstruction of information flow - provide insight into how memory is accessed/updated/impacts execution. Reveal how context is assembled and propagated, helping detect over/under-sharing and context composition.
**Shows.** Nothing beyond the text — a plain black bulleted list with bold lead-in phrases in pink.

## Slide 14 — Section divider: Demo
**Text.** Demo / © 2026 AGNTCon, Europe
**Shows.** Same orange-to-magenta gradient section-divider template as slides 5 and 11, with only the word "Demo".

## Slide 15 — Sample MAS
**Text.** Sample MAS / SRE Lead — Supervisor – decomposes tasks, routes work, decides actions / Telemetry Analyst — Queries MELT and summarizes evidence. / Backend Eng — Reasons about services, proposes rollback/fix. / DB specialist — Diagnoses DB symptoms, proposes DB mitigations. / Comms agent — Drafts stakeholder/customer updates. / Verifier/Auditor — Checks correctness, constraints, termination criteria. / [Diagram] SRE Triage Multi-Agentic System (MAS) — User raises an incident on the emulated SaaS product → MAIN AGENTS: SRE Lead Agent (Leader/Coordinator) — leader and coordinator of the MAS, orchestrates the actions of other agents, investigates the incident and proposes a remediation plan, only this agent can call sub-agents, proposes the remediation plan to the Verifier Agent for approval ↔ Verifier Agent — verifies that the remediation plan proposed by the SRE Lead Agent is sound, approves or requests changes to the plan ↔ Comms Agent — handles communication with the user, drafts incident updates, can be delegated by the SRE Lead Agent / SRE Lead Agent is the only one that can call sub-agents → SUB-AGENTS (called by SRE Lead Agent): Telemetry Agent — responsible for checking the telemetry coming from the different services deployed / DB Agent — responsible for checking that the databases are healthy / Backend Agent — responsible for checking that everything is fine with respect to the backend / LEGEND: solid arrow = Calls/Delegates, dashed arrow = Information/Communication, solid box = Main Agents (top-level MAS agents), dashed box = Sub-Agents (called by SRE Lead Agent only) / OUTCOME: SRE Lead Agent investigates incident → Proposes remediation plan → Verifier Agent approves plan → Comms Agent shares updates with user
**Shows.** Left column lists six agent roles each with a small robot icon and description; right side shows a full architecture diagram of the demo's "SRE Triage Multi-Agentic System" with three main agents (SRE Lead, Verifier, Comms) and three sub-agents (Telemetry, DB, Backend) called only by the SRE Lead agent, plus a legend and an outcome flow strip at the bottom.

## Slide 16 — Demo scenario 0 – Normal behavior
**Text.** Demo scenario 0 – Normal behavior / We show a normal SRE Triage session and user interaction via Discord / rovides a trace waterfall for a given session / A glimpse at the monitoring dashboard (Splunk for internal integration, Grafana equivalent for OSS)
**Shows.** Nothing beyond the text — a plain black bulleted list (note: second bullet appears truncated/typo'd as "rovides" in the source deck, likely missing a leading "P").

## Slide 17 — Demo screenshot: Discord SRE-Claw session
**Text.** [Discord screenshot] SRE-Claw · général channel / Giulio Grassi: @SRE lead who are you? / SRE lead [APP]: I am the SRE lead for this workspace, acting as an incident triage orchestrator. My primary role is to receive incident reports, delegate investigation to specialist sub-agents (telemetry, backend, and db), and then synthesize their findings into a coherent root-cause analysis and a safe, verified remediation plan. I operate exclusively through a remote API and do not have direct access to the local filesystem or machine. My goal is to restore service quickly, control risk, and ensure all actions are based on clear evidence. / Giulio Grassi: @SRE lead which agents can you interact with? / SRE lead [APP]: I can interact with several specialist and coordination agents to manage incidents: Sub-agents for Investigation: @telemetry — I delegate to this agent to get quantified evidence like latency, error rates, and resource utilization. @backend — Engaged for issues related to application logic, deployments, or runtime configurations. @db — Focused on the database layer, investigating slow queries, lock contention, or connection pool problems. Agents for Coordination: @verifier — Before any remediation is applied, I am required to send the plan to this agent for approval to ensure it's safe. @comms — After a fix is verified, I contact this agent to prepare communication for stakeholders. I use sessions_spawn to create new investigation tasks for my sub-agents and sessions_send to coordinate with the verifier and comms agents.
**Shows.** Full-bleed screenshot of a Discord server named "SRE-Claw" showing a live conversation where a user (Giulio Grassi) questions the "SRE lead" bot agent, which explains its role and lists the sub-agents and coordination agents it can call, alongside the tool names (sessions_spawn, sessions_send) it uses to communicate with them. Watermark text "Discord-normal01" is overlaid vertically on the left.

## Slide 18 — Demo screenshot: Splunk APM Trace Analyzer
**Text.** [Splunk Observability Cloud screenshot] APM › Trace Analyzer / -15m · Environment: unknown · Transaction: All · Services · Add filters / Trace & error count · Duration (ms) · Sample Ratio 1:1 · Errors only · Call graphs only · View Trace ID / [Bar chart of trace/error counts over time, 10:55 AM–11:09 AM] Total traces (blue) / Traces with errors / Not searched / Traces · Group Metrics · Group traces by / 11 traces matched — Trace ID 05a4e0d1bc4a31927f9, Mon May 11 2026 11:06:29 AM CEST, Duration 2.0m, Initiating Operation openclaw-gateway: openclaw.request, Services openclaw-gateway (57) / Trace ID 9f309b8f81321916e4f, Mon May 11 2026 11:06:15 AM CEST, Duration 29.06s, Initiating Operation openclaw-gateway: session.start, Services openclaw-gateway (6)
**Shows.** Full-bleed screenshot of Splunk Observability Cloud's APM Trace Analyzer showing a time-series bar chart of trace counts and a table of matched traces for the openclaw-gateway service, demonstrating the plugin's OTel data landing in a real APM backend. Watermark text "Obs-normal01" is overlaid vertically on the left.

## Slide 19 — Demo screenshot: OpenClaw Metrics dashboard (Grafana)
**Text.** [Grafana screenshot] Dashboards › OpenClaw Metrics dashboard / groupby gen_ai.agent.id · Last 45 minutes / Tool calls (chart: exec, memory_search, read, sessions_list, sessions_send, sessions_spawn) / Tool calls Error — No data / Tool call duration (chart, same series) / Memory Read events (chart: comms) / Memory Write events — No data / Memory Edit events — No data / Memory Search Hit (chart: comms) / Search Search Miss — No data / Search events (chart: comms) / Session Parallelisation and Efficiency Score (chart) / Session Repetition Score (chart)
**Shows.** Full-bleed screenshot of a Grafana dashboard titled "OpenClaw Metrics dashboard" showing a grid of small time-series panels (tool calls, tool errors, memory read/write/edit events, search hits/misses, session parallelisation and repetition scores) grouped by gen_ai.agent.id, several panels showing "No data". Watermark text "Obs-normal01" is overlaid vertically on the left; macOS menu bar and dock are visible framing the browser window.

## Slide 20 — Support for NemoClaw and DefenseClaw
**Text.** Support for NemoClaw and DefenseClaw / Consistent Architecture: The OpenClaw plugin is natively compatible with NemoClaw and DefenseClaw. / Shared Instrumentation — We can leverage the same OTLP-based telemetry pipeline across all platforms. / Platform-Specific Benefits: NemoClaw: Enhanced visibility into high-throughput agent workflows and resource utilization. DefenseClaw: Audit-ready tracing for security-sensitive tool calls and decision-making logic. / [Trace view screenshot] Trace view · Date: 3 days ago @Apr 13 2026 11:32:11 AM America/Los_Angeles · Trace ID: 2d481e... / Tokens: 1064148 (In: 1057550 | Out: 6598) · Tool calls: 2 · LLM calls: 1 · Model names: u... / Agent flow — main 30.7s / Add filters · Search... · 4/4 Spans Loaded / openclaw-gateway: invoke_agent main [invoke_agent] 30.7s / openclaw-gateway: chat unknown [chat] 30.7s / openclaw-gateway: execute_tool exec [execute_tool] / openclaw-gateway: execute_tool exec [execute_tool] / Tags: gen_ai.agent.id main / gen_ai.conversation.id agent:main:main / gen_ai.operation.name chat / gen_ai.provider.name nvidia / gen_ai.request.model unknown / gen_ai.response.model nvidia/nemotron-3-super-120b-a12b / gen_ai.usage.input_tokens 528775 / gen_ai.usage.output_tokens 3299 / gen_ai.usage.total_tokens 532074 / [Splunk screenshot] DefenseClaw Governance — Guardrail... — Overrides, Filter, Time -1h, Chart resolution, Event overlay / Guardrail Evaluations by Action / Block Rate by Tool / Alert Rate by Tool / Inspections by Tool / Inspections by Severity / Blocked Inspections by Tool / Audit Events by Action
**Shows.** Left text column describing platform portability; right side shows two stacked screenshots — a trace-view UI with a span waterfall and gen_ai.* tag panel for an Nvidia Nemotron model call, and a Splunk "DefenseClaw Governance" dashboard with seven small panels tracking guardrail evaluations, block/alert rates, and audit events by tool.

## Slide 21 — Call to Action
**Text.** Call to Action / github.com/outshift-open/insight-module-for-agentic-systems / Issues and PRs welcome. / Try it — Point it at your own OpenClaw deployment. / Tell us what broke — Especially session boundaries under long pauses. / Help with extensions — To harnesses or other types of MAS / Pavan Sudheendra · outshift.com · @outshiftbycisco
**Shows.** Black closing slide with a highlighted cyan-bordered repo-link box and three supporting cards (Try it, Tell us what broke, Help with extensions), with the Outshift by Cisco logo and speaker contact info at the bottom.

## Slide 22 — Closing card: Outshift by Cisco
**Text.** outshift.com / @outshiftbycisco
**Shows.** Plain black closing/end card with the Outshift by Cisco logo centered, and website and social handle links at the bottom.
