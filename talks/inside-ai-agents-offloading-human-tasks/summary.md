---
title: "Inside AI Agents — Offloading Human Tasks"
speakers: [Maarten Grootendorst]
session_id: 9863191944bad057ff0377ffbf2051ca
source: transcript.md
kind: summary
---

# Inside AI Agents — Offloading Human Tasks — summary

**Maarten Grootendorst**

*Thursday 17 September 2026, 15:04, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Grootendorst traces one pattern through recent model development: the reasoning, tool calling and planning that agent builders once hand-wrote as prompts are now trained into the models themselves.

## The argument

He says AI has moved from LLMs that chat to LLMs that take actions, and that the offloading of human tasks visible in how people use agents is equally visible in how models are built. Using the figure he and his co-author use to define an agent — a reasoning LLM augmented with memory, with tools, and with planning — he takes each component and finds the same move: what an earlier model such as Gemma 3 needed as an elaborate prompt, a newer generation does natively, because it was trained to.

## Reasoning, from a prompt you write to reasoning tokens

With a previous generation, he says, you wrote the reasoning prompt yourself — "let's think step by step", or few-shot examples — and it worked, because those models followed instructions well. His complaint is a boundary problem: reasoning came back mixed with answering, and "where does the reasoning end and the answering actually start." Newer models move it inside, with specific reasoning tokens and specific answering tokens. Prompting became trained behaviour.

## Tool calling, from your output format to the model's

Tool calling is, in his framing, what lets an agent interact with the world at all. On Gemma 3 it meant writing a prompt that fixed the output format — "XML like so-and-so or JSON like so-and-so" — evaluating what came back, and abusing the usual role to give the tool's output back to the model. Newer models are trained to call tools in specific ways, so the behaviour generalises rather than depending on your prompt.

## The ReAct loop, and the parsing it used to need

Autonomy he treats through ReAct — reason and act — the formula describing a single step of an agent, still used, he notes, in agentic harnesses. Building it on an older model stacked both earlier problems: a reasoning prompt, a tool-calling prompt, evaluation that the two held together, an instruction to run the sequence in a loop, and manual parsing to pull the reasoning and the action out of the output. He has done it himself, he says.

## In their words

> And you see a very clear narrative of offloading human tasks in how we use AI today.

> Gemma 4 can do reasoning, it can do action, and tool calling, so you sprinkle a little bit of ReAct data during training, and what do you have? An agent.

> A next frontier won't just be about agents but perhaps about swarms, perhaps about harnesses, guardrails, evaluations and many of those things we're still doing by hand.

## Takeaways

- Across one generation of models, he argues, prompted capabilities became trained ones: reasoning, tool calls and the ReAct loop now arrive as model behaviour, and native tool calling, he says, generalises well.
- Hand-built tool calling cost him a format prompt, evaluation of the output and an abuse of the usual role to return results — three jobs he says native tool calling removes.
- He extends the pattern forwards: a next frontier may be swarms, harnesses, guardrails and evaluations, many of which, he says, are still done by hand and could be trained in instead.

## What the talk leaves open

He presents the trend as unfinished, saying agents are still being pushed past what they were trained for, and closing that he thinks this era of agentic AI is only starting.
