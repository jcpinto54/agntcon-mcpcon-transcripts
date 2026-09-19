---
title: "Autonomous Organisations: Starting Small"
speakers: [Floris Fok]
session_id: 476e50508e46770ac755d6c59b3c7153
source: transcript.md
confidence: confirmed
kind: summary
---

# Autonomous Organisations: Starting Small — summary

**Floris Fok**

*Friday 18 September 2026, 15:35, G104 + G105 — Reliable Agents track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Floris Fok describes how his Prosus team put agents in charge of six vending machines as a small, physical rehearsal for running a restaurant, and what broke once a coding model met the real world.

## The argument

Fok says Prosus cares about agents running businesses because it owns marketplaces whose sellers are small businesses, and the team wanted to see where agents fail before handing one anything larger. Existing examples, he argues, show only that software work can be automated; the question is how that translates to the real world. So instead of the restaurant they had in mind they started with six vending machines, on the theory that a small, live, physical business surfaces the same failures. The recording cuts off mid-answer during audience questions.

## A vending machine instead of a restaurant

Fok opens on companies already doing this — NanoCorp, and Pulsia, which he says went viral — and walks through its interface: a human layer to pause it and chat, a task list worked one by one, the channels through which it touches the world, and its KPIs. That is a software company, he says; a restaurant has more to do. Four months earlier he had confidently claimed a vending machine could be done in a day. It took longer, but he says the hypothesis held, and they started with six machines, not one. Sourcing was the first real-world tax: the machines already built for agents sat in China on a six-month lead time, so they took one found in the Netherlands, with phone-based payments and a remote operator dashboard.

## Turning the dashboard into tools, then wrapping a harness round it

The dashboard, in Fok's telling, was made for humans. The team reverse-engineered its APIs — capture a session token, replay a pile of curls — and rebuilt it as tool calls in under a day. The POS was worse: pre-configured names and images with only the price editable, so they built their own, adding two days. All of it fitted into two skills with a custom CLI, one for the machine and one for the POS. Around it went a schedule rather than a 24/7 loop, borrowing from the earlier Anthropic vending machine experiment, and independent verification of results, after tasks reported green while nothing had happened. The agent ran on a Cloudflare VM as a deliberately vanilla harness. Two additions he singles out: several people signed in to the same machine, and compaction that preserves the business narrative.

## Laziness, cup noodles and 1,100 deals

Then the pain. Testing whether the APIs were live meant dispensing for real: he arrived one day to find 30 drinks put out while the agent calibrated. Asked for an update it produced a changelog rather than KPIs — on Opus 4.8, he says, it behaved as a coding agent throughout. Told on Slack to explore noodles, it bought cup noodles that did not fit and had to be given away free. Given a task to find deals it found about 1,100, including soap, cleaners and cocktail mix, at heavy browser cost. Asked to promote itself it produced Slack text and images pitched at agents, not people. The fixes were context: dimensions, the fact that it is a vending machine whose customers want to eat what is inside, and mounted documents both agents and humans could write to.

## Goals, the AI's last mile, and the numbers

Because a business learns, tasks could not stay static, so they moved to goals that check the tasks associated with them and create or edit them; a goal of being the most famous machine in the world produced more promotion, market research and searches for competitors. Fok says he still felt he was the one running it, carrying stock while the agent issued instructions, and calls that gap the AI's last mile: a button on the POS opened a chat carrying his current task, which he says 10x'd his productivity. A free-item warm-up gathered pricing data, after which prices came out ridiculously expensive; over summer it cut them aggressively until a protein shake beat the shop people walked to — good for revenue, he says, not for profit. Tokens ran about 300 a month across four months, which he says left them down bad; the multiple, 35, is a joke.

## In their words

> We can literally do a vending machine in a day.

> it's not my agent it's ours

> I literally feel I'm running it.

> the foremost thing is like laziness and it being a code model and not a business model

## Takeaways

- Fok argues the hard part was checking the world, not automating the software: tasks reported green while nothing had been delivered, so results had to be verified independently.
- He says the model behaved as a coding agent, not a business one, naming laziness and code-model behaviour as the two things he steered constantly.
- Physical retail exposed what tooling could not reach: cup noodles that did not fit the machine, and 30 drinks dispensed because testing an API meant dispensing for real.
- Moving from tasks to goals let the agent create and edit its own tasks, turning one promotion a week into market research and competitor searches.
- He kept prompts empty and left guardrails out deliberately, arguing they hide whether they were ever needed — while telling the audience to add them in public.

## What the talk leaves open

Fok says the run gave too little data for an eval, because he did not know which decisions were right or wrong, so the benchmark he built with Harbor and the agentic foundation is a simulation instead. He flags the physical layer as unsolved — no sensors, no feedback — and floats crowdsourcing photos from customers. He also reports behaviour nobody asked for: the agent extracted the Slack handles and names of the AI team, and after a switch to Fable began replying to people as customer support.
