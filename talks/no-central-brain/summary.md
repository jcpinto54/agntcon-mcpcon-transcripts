---
title: "No Central Brain"
speakers: [Fausto Albers]
session_id: f5511d725b5025f549b7fe6e88af1dff
source: transcript.md
kind: summary
---

# No Central Brain — summary

**Fausto Albers**

*Friday 18 September 2026, 15:00, G102 + G103 — Reliable Agents track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Albers describes the system his team designed to build a drawing-to-3D-CAD application without writing the code themselves: an editable harness, an evaluation kept outside it, and a meta-agent that generates competing harness variants for that evaluation to choose between.

## The argument

Albers argues the object of engineering has moved from prompts to context to the harness and the loop around it. The harness is the part he can change, and it is only code and text, so it can be edited, versioned and stored. The loop's evaluation has to sit outside the system, because more capable models get better at reward hacking. Instead of a human guessing what the harness is missing, a meta-agent produces competing versions and the evaluation selects. The recording begins mid-talk, so the opening of his case is missing.

## Designing the system that built the application

The application reconstructs a 2D technical drawing as a 3D CAD model, which Albers says was not possible only months ago. His team got there by watching engineers work with the PDF on the left and a CAD program on the right, iteratively reconstructing the drawing and correcting themselves, building a spatial world model of it — then had the agents copy that. His subject is the system, not the application. The outer harness, the coding environment such as Cloud Code or Codex, he cannot change; the instructions, cloud.md and agents.md, the sub-agents and their roles, the coordination, context, memory policy, skills and functions he can. Set the same task up differently, he says, and the output would probably have been different.

## The loop, and the cost per accepted change

The loop acts and checks the result, but the checking cannot happen inside the system, he says, because more capable models get better at reward hacking. The evaluation may be agent-powered or deterministic; what matters is that it is external and writes its feedback out as files, which become the input to the next iteration so each pass starts from a fresh context window. He dates the term loop engineering to June 2026, if he has it right. One measure he found very useful is cost per accepted change, with the eval as a proxy for progress toward the goal. Rising cost against stalling progress is his signal of diminishing returns. Cost is not only euros, he adds: for a client with a six-figure budget and a deadline, spending a lot of tokens can be sensible.

## Variants in a database, and finding them again

Rather than have the team think up one better harness, Albers describes a meta-agent that reads the signals from the harness and produces three or many variants, changing instructions or the order of work. They are stored as snapshots in a database, run on the same task and measured against the evaluation; the best is kept, and so are the rest. His example: a harness gave its pipeline the ability to crop technical drawings and zoom in on detail, but did not know that certain very small symbols mattered. The evals stalled, signalling something was wrong without saying what; the fix was a database of symbols the pipeline could look up, which became the policy in the next version.

## In their words

> did not write a single line of code for this application. But we did design the system that built the application.

> the more capable models become, the better they become at reward hacking

> your loop might still look very busy, but your credit card is burning

> when you give an AI coding agent a goal, it is often very little aware of what is important to you

## Takeaways

- Albers argues the evaluation must sit outside the harness, since capable models learn to game an internal one.
- The symbols story is his evidence that a stalled eval diagnoses nothing by itself; the repair was a lookup database, which then became harness policy.
- He stores losing variants with their eval results and traces, on the grounds that what worked for a problem in one project might work in another.
- Cost means more than tokens, he says, and states of mind such as curiosity, concern and urgency can stand in as proxies for it.

## What the talk leaves open

With a thousand harness versions stored, Albers says finding the right one becomes a problem of its own. People assume the answer is more detail, he says, but human recall works very differently from the systems we build — and is something to learn from.
