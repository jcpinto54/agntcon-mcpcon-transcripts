---
title: "From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry"
speakers: [Jordan Augé]
session_id: 83f37169e46203cae13266651a163234
source: transcript.md
confidence: confirmed
kind: summary
---

# From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry — summary

**Jordan Augé**

*Thursday 17 September 2026, 12:00, G102 + G103 — Open Source track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Augé walks through an open-source OpenTelemetry plugin that reassembles OpenClaw's scattered multi-agent events into one consistent trace, so operators can find the root cause of failures that never surface as errors.

## The argument

The recording begins mid-talk, so the opening framing is missing. Augé's case is that a multi-agent run is a distributed, event-based system whose signals arrive scattered and incomplete: the plugin collects IDs and reconstructs what is missing until it produces a consistent trace following a request from the user's message to the answer. He argues the payoff is diagnosis — telling a hallucinated tool call apart from a tool that was unavailable — and that because the output is standard OpenTelemetry, it drops into whatever backend a team runs.

## Sessions that never end

OpenClaw's session key is a long-lived runtime identity — the handle on working memory, which he says can identify the user who asked for an operation in chat — and, as Augé puts it, OpenTelemetry "doesn't fit well with the infinite sessions". Spans ship when they complete, so a very long session emits nothing until it ends. The plugin therefore derives observability session IDs as children of the OpenClaw one, so one OpenClaw session appears as many downstream, and cuts them with heuristics: timeouts on inactivity, a stalled queue, a wait on user input. He is explicit that this is approximate, and says their tests cut long-running requests into meaningful units of activity.

## Extending the conventions, and six groups of metrics

Not everything the plugin watches has a GenAI semantic convention, so Augé says they reused what existed and extended it using the Observe SDK from the Linux Foundation's agency project. The extensions encode what is specific to multi-agent systems: fork-join semantics when an agent spawns or contacts several others in parallel, and handoff and spawn signals whose identifiers preserve the lineage of delegated context. On top sit six groups of metrics — tool activity and model cost; gateway queue depth and how long a session sits stuck waiting; memory read, write and hit rates; context assembly, including whether prompt size grows unbounded; and lifecycle and delegation behaviour, such as whether an agent tries new tools or cycles on the same one. He says the data surfaces semantic problems as well as operational ones: memory retrieved across scattered subjects, or drift in its use.

## The gateway, and what high throughput forced

The gateway is where OpenClaw meets the outside world — other agents, tools, models. It is a queue system, so an unresponsive service shows up as a queue building up, making the gateway a proxy for infrastructure behaviour as well as a map of which agents call which; he says annotating the telemetry with those diagnostics helps a lot in finding the cause of an error. Scale then forced a change: sending everything at line rate polluted the server, which moving to NemoClaw — built for high-throughput enterprise workloads — exposed, so the plugin now caches and aggregates before emitting spans. He also flags a limit — the reconstruction assumes a single gateway, and several would need extra sharing of IDs.

## An SRE triage demo, in Splunk and Grafana

The worked example is an SRE triage application: a lead agent spawns three specialists on demand — telemetry, database, backend — while two top-level agents in separate OpenClaw sessions handle verification (checking a specialist was consulted and gave evidence) and reporting. Augé drives it from Discord with a latency-spike incident. Because the output is ordinary OpenTelemetry, the session renders as a waterfall in Splunk, each agent's turns and delegations nested under their parent, and the metrics feed a Grafana dashboard for baselining behaviour. He also describes wiring in two guardrail layers — NVIDIA's sandboxing extension and a Cisco guardrail inspecting every model and tool call — and logging their decisions alongside, so it becomes visible when a guardrail stopped a branch and OpenClaw backtracked.

## In their words

> This is not ideal for sure, but we believe that having no signal is worse than having signals that work most of the time.

> the same issue could be linked to different reasons maybe it's uh an hallucination on the tool called that failed maybe it's because the tool wasn't available at the time

> we have been observing a ton of failures that are really silent to typical observability. You can get them with LLM as a Judge metrics, but then you don't know what's the root cause.

## Takeaways

- Augé says OpenTelemetry's span model does not fit sessions that never end, and answers it by cutting sessions on inactivity and queue progress, on the grounds that an imperfect signal beats none.
- He frames the metrics as alerting material, not only forensics: with thousands of sessions, an operator first needs something to raise an issue.
- The gateway's queue doubles as infrastructure telemetry, letting an unavailable service be told apart from a hallucinated tool call — a distinction he says changes the fix.
- High-throughput deployment on NemoClaw is what produced the in-plugin cache; Augé says caching and aggregating before spans go out is what lets the plugin scale to very demanding workloads.

## What the talk leaves open

Augé says the hardest failures are silent ones — an agent approving without evidence, or believing another agent used a tool it never called — which LLM as a Judge can spot but not locate the cause of, at a cost that pushes them onto local or small models. Asked where alerting is going, he says the metrics they compute carry signals of these issues but are not sufficient, and names correlating behaviours, not only divergence from a baseline, and semantic analysis using embeddings as work still to do. He also notes that telemetry ships on span completion, so reacting in real time would need the event-based shipping they are still discussing; applying this beyond OpenClaw is only planned.
