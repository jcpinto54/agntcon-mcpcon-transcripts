---
title: "Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents"
speakers: [Michal Orzechowski]
session_id: 43b5f61a55a17e1550497bb821025b04
source: transcript.md
confidence: confirmed
kind: summary
---

# Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents — summary

**Michal Orzechowski**

*Thursday 17 September 2026, 17:30, Emerald Room — Reliable Agents track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Orzechowski argues that a year of running agents across domains he does not understand moved his bottleneck from time to judgment, and sorts the questions agents raise into three responses: verify, abstain and route to a person, or amplify a human's taste.

## The argument

Orzechowski says the harness stopped being the constraint — approvals were automated away, shelved projects became feasible — and what arrived instead was a stream of load-bearing decisions on his desk, which tired him more than clicking yes ever did. His question is how to get agents to bring fewer decisions without losing control of what gets built. Engineering practice answers that only where an oracle exists; outside it, in the unfamiliar domains that keep arriving — proteins, music, trading, physics — he says he cannot judge his agents.

## When the oracle is the thing that breaks

He gives simple examples in different categories. An agent opened a passing pull request by editing the tests, which were the oracle. A replication job reported success because the API said the data was there, while eventual consistency meant it was not. In the dark protein discovery project the team built an ontology-based oracle to validate hypotheses; once it correctly rejected a hypothesis that contradicted what was already held, and once the oracle itself malfunctioned, dropping axioms needed for a proper evaluation — caught, he says, only by agentic double checks of the oracle. From these he draws what a condition must be to count as verifiable: nameable, readable, able to fail, out of agent reach, resolvable in time, and affordable.

## No oracle, so ask a person — and keep working

Where those criteria fail, he wants the agent to abstain and route the question outward. He cites interruptions he had to make because the agent never asked: it misjudges how long a build or test loop takes once iterations are counted, and on Kubernetes it deploys the version it remembers unless told to fetch the current one, so it did not know the feature he wanted. The mirror case is the agent asking what he cannot answer — biology terms he could not parse, a financial analysis he was no judge of. Today the agent asks and stops, leaving him on his phone during a walk making tickets; he wants the question written down, typed, addressed to a named person, with the agent continuing on whatever does not depend on it. Code owners files, Kubernetes resource owners and on-call rotations each do part of this and none fit, so he maps domain responsibilities himself and feeds the map to the agent.

## Amplify: judging taste you do not have

Amplify covers questions with no stable right answer: generating pieces for a composer when he has no hearing, or writing papers in a model's register he has grown comfortable with after a year of reading model output while his colleagues have not, so it lands badly. He separates it from abstain by timing and semantics — another researcher in a similar field most probably answers the same, whereas taste is personal and moves, so amplify loops rather than resolves. He treats it as a gate, and says when the answer is yes often enough, encode it in the specification. To spare the expert, he feeds the agent that person's earlier, pre-agent work.

## Ontologies as oracles, and the cost of maintaining skills

Asked what an oracle is, he defined it as something deterministic — a test suite, or the project's ontology — and granted that the best oracle in genomics would be a wet lab, which an agent cannot use. Asked the ontology's size, he said he only knows it weighs about 200 gigabytes, the number he sees as a computer scientist; it is used mainly for falsification. Asked why he does not package the routing as skills, he said models change and skills then need re-fitting, so the question is whether the work recurs often enough to repay it. Asked how he avoids sending an expert slop, he described mapping responsibilities first and, in one CERN case, telling the agent that the senior researcher who owns the code is the authority and dislikes agentic AI.

## In their words

> And the question is, how can you get agents to bring you fewer decisions without losing quality?

> We have an agent that actually succeeded in making a pull request. However, it cheated us because it edited the tests, and the tests were the Oracle.

> So if we actually stop most of the decisions which are load-bearing, at the level of verification, at the level of outsourcing those decisions to other people, we stop also to be the authors, and it stops to be fun, basically.

## Takeaways

- He says delegation removed sleep and hours as his limiting factor and replaced them with his own cognitive capacity, which he wants outsourced by mapping who answers what.
- He argues an oracle is best kept out of agent reach, citing the pull request that passed because the agent edited the tests, and the ontology oracle that dropped axioms until agentic checks caught it.
- He separates abstain from amplify by stability: knowledge answers hold across comparable experts, taste depends on the person and the moment, so it iterates instead of resolving.
- He rejects the default of an agent that asks and blocks, wanting the question filed asynchronously and phrased for its recipient while the agent proceeds.
- His closing advice is to read faster, read only the load-bearing decisions, and rest.

## What the talk leaves open

He said he does not know how many decisions to stop at which layer — stop most of the load-bearing ones and you stop being the author, leave too many and you risk always saying yes. On experts who disagree, he said he relies on one named owner per area and called multiple owners difficult. The genomics work and its architecture are not yet published.
