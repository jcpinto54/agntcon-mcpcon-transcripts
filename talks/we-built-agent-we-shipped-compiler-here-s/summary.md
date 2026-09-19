---
title: "We Built an Agent, We Shipped a Compiler. Here's Why"
speakers: [Joel Verezhak]
session_id: a163cdaa47c9dbb24c6a3615aea9a1a7
source: transcript.md
confidence: confirmed
kind: summary
---

# We Built an Agent, We Shipped a Compiler. Here's Why — summary

**Joel Verezhak**

*Thursday 17 September 2026, 16:55, G104 + G105 — Agentic Engineering track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Verezhak traces how his automation for Grafana Labs customer success plans grew from a 500-line skill to a 42-file build and a Go engine, and why the version his team runs today is 54 lines.

## The argument

Verezhak is an observability architect in go-to-market, not a software engineer, and says his instinct at every failure was more structure: more instructions, then Python scripts with data contracts, then a Go workflow engine. He argues each round traded one problem for another: tightening the prose overloaded the context and degraded results, while the software that followed bought quality at the price of a build colleagues struggled to contribute to and a side project that became a full-time job. What worked, he says, was a short skill that tells the agent to be curious and hides the output template until late. He calls it conference-driven development: the talk he submitted in April is not the one he gave.

## Why success plans were worth automating

A success plan records what a customer wants to achieve, how they will know it is working and why it matters now; he stresses it is a living document the relationship keeps returning to. The problem is volume: hundreds of observability architects, each with tens of accounts, and every plan means reading commercials, meeting notes and other unstructured text — a great problem, he says, for a model to dig into. He started during parental leave in February, when agent tooling and skills had spread past engineering — even marketing had a plug-in.

## The skill that grew to 42 files

By April the skill was a 500-line document. He describes the trap: you spot something wrong, add an instruction, add a reference document, and convince yourself the next run will get it. The opposite happened, he says: these systems are probabilistic, not deterministic, and will find a reason a rule does not apply in this run. So he asked which parts could be made deterministic in software, concluding the model was needed only to synthesise the plan and make it read well. The next iteration was scripted steps with data contracts defining what data from Slack or BigQuery looks like, plus a judge applying a rubric: three to seven business outcomes, all of them metrics. The contracts raised quality measurably, he reports, while the build swelled to 42 files and some 14,000 lines.

## The leaked customer data and the Go engine

An architect reported a plan that discussed the wrong company and mixed one customer's metrics into another's. It happened in development and nothing reached a customer, but Verezhak calls it a different kind of wrong from an awkward sentence, and the trigger for the next stage: making it impossible for the agent to query another customer's data. The engine was a Go application reusing the same pipeline and data contracts in a classical evaluator-critic workflow, which let him force grounding — not "the customer wants to reduce MTTR" but show me the call, Slack message or email where they said it. Pilot quality was incredible, he says, but it ran about four times longer, because a strict critic sent the whole cycle back over one problem and it returned with three. They shipped it, and then he had an application in production to keep useful as models moved through Opus 4.6, 4.7 and 4.8.

## Fifty-four lines, curiosity and progressive disclosure

The version they kept came from taking a knife to the kind of skill an agent will generate for you, cutting it to about 50 lines. Two changes carried it, he says. The first told the agent to treat the account playfully and explore until it has convinced itself it understands the account context, letting it decide when to stop. The second was progressive disclosure: withholding the target data model until that point, because the agent would otherwise slot the first thing it found into the plan — in his example, an offhand remark on a call that reducing MTTR would be great, when only one person cared and the account really wanted lower total cost of ownership. The shipped skill is 54 lines with one query, which he credits with no further leakage across customers.

## In their words

> So every time I tighten the instructions, the results got worse.

> And I was basically learning that AI made it super easy to keep building, but you shouldn't at some point.

> I didn't have to write rules, I let the agent decide.

> So if you build something which has kind of a high barrier to entry for the team, then adoption is going to lag.

## Takeaways

- He argues more instruction made the output worse, not better: the skill reached 500 lines by April and each tightening degraded results, because a probabilistic model will explain why a rule does not apply this run.
- He credits the data contracts with the first real quality gain — defined shapes for data from Slack and BigQuery, plus a rubric-based judge — even as the build reached 42 files and roughly 14,000 lines.
- The Go engine bought grounded evidence at about four times the runtime, then cost him maintainability: he says it was easy to use but hard for colleagues outside Go to change, and every model upgrade needed re-checking.
- He attributes the final quality jump to two short instructions: explore until you believe you understand the account, and do not read the plan template until then — which he says stopped the agent slotting the first thing it found ahead of what the account actually cares about.

## What the talk leaves open

Two things he leaves unresolved: variation between runs, which he says neither the engine nor the skill eliminated, manageable only because an architect reviews each plan, and leakage protection that is guidance rather than a strict guardrail. He closes with "Let's see where we are in six months from now."
