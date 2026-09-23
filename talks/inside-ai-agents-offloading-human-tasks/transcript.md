---
title: "Inside AI Agents \u2014 Offloading Human Tasks"
speakers: [Maarten Grootendorst]
day: thu
date: 2026-09-17
start: "15:04"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 9863191944bad057ff0377ffbf2051ca
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=22379s
contributor: jcpinto54
---

# Inside AI Agents — Offloading Human Tasks

**Maarten Grootendorst** — Creator of BERTopic & KeyBERT & PolyFuzz & Member of Technical Staff - Google DeepMind

Member of Technical Staff at Google DeepMind. Creator of BERTopic, KeyBERT and PolyFuzz (millions of downloads), co-author of the bestseller 'Hands-On Large Language Models'. Master's degrees in organizational psychology, clinical psychology and data science.

*Thursday 17 September 2026, 15:04, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 6:12:59](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=22379s)), not an attendee's recording.

## Transcript

Thank you so much for this wonderful introduction. Today I would like to talk
about a central goal of AI agents, which is to offload human tasks. Now in the
last couple of years we have seen this world of AI change drastically from LLMs
that chat to LLMs that actually take actions. We went from LLMs to agents and
from words to actions. And it has been a very interesting experience seeing that
myself. During writing, mostly, a couple of years ago, I wrote a book called
Hands-On Large Language Models.

And when we talked about AI, it really was about LLMs that chat. And I recently
released a book called An Illustrated Guide to AI Agents with my amazing co-
author, Jay. And when we talk about AI, it's not so much about LLMs that chat.
It's about LLMs that take actions. It's about agents. And you see a very clear
narrative of offloading human tasks in how we use AI today. But this narrative
can also be seen from the lens of model development.

In just one generation of models, you see that we went from LLMs that focus on
chat-like capabilities to models that focus way more on agent behavior. And I
want to showcase this to you in the following couple of minutes on how this
model development showcases this narrative of offloading human tasks. To do so,
I'm going to use this figure. It's a figure Jay and I really like to use to
showcase what an agent truly is about. Bring it down to the most fundamental
components.

There's the reasoning LLM, augmented with memory, with tools, and with planning.
So let's start with one of them, reasoning. If we were to do that with a
previous generation of models, we would have to create this prompt, a reasoning
prompt. And we all know it well, right? think step by step or show few-shot
reasoning. And it would do this quite well. Previous generations of models are
very strong at instruction-following capabilities. But, you know, there's
reasoning now mixed with answering. And where does the reasoning end and the
answering actually start?

With newer generations of models, what we try to do is we try to put that into
the actual specific reasoning tokens, specific answering tokens. That's great
and all, but what I really would like to focus on is this transition that we
did, from prompting to actual trained behavior. And it's this sense of
offloading human tasks that you can actually see in model development. And not
just from a reasoning perspective, right? There's tool calling.

One of the most important components of what is an agent, because otherwise it
can't really interact with the world, right? Now if we were to do that with,
let's say, Gemma 3, again we would have to create this prompt. Use XML like so
and so, or JSON like so and so, and it would output the tool call. It requires
evaluation, it requires a little bit of abusing of the user role to give back
the output of the tool call, but it works.

And now with the newer generation of models, that's being done natively. It's
trained to do this tool calling in a very specific way, so it generalizes well.
But again, it's not just about that. It's that we again offloaded human tasks.
We went from prompting to trained behavior. And this narrative, surprise,
surprise, you can see also with what we like to call planning or autonomy. When
we want to make an agent truly autonomous, we kind of run it in a for loop,
right?

And this for loop that we typically use is called ReAct. We all know it quite
well, reason and act, a framework that we use even in agentic harnesses these
days that basically explain how a single step of an agent looks like. It says,
okay, we need to first start with reasoning. Before we actually do something, we
need to think about what we're doing. Makes sense. And we saw you can do that
with prompting. The same applies to tool calling. So, when you have done your
reasoning, you follow along with a tool call. And then again, there's an
observation, an output of it. And now finally, if we wanted to do this in a
model like Gemma 3, we would have to create this very extensive ReAct prompt.

We saw it before, right? With reasoning, you have to create a prompt, whether
it's few-shot learning or let's think step by step or something entirely
different. And that's then just step one. And then we also had to do the same
thing for tool calling and validate them all together, do enough evaluation to
make sure this makes sense. And now you have that and you can tell the model,
okay, I want to make sure it now runs in a loop. So every time you need to do
this, the sequence of actions to make sure it actually gets to the end behavior.
But the way that's being output it requires a lot of manual parsing. You have to
explain, okay, there's the word reasoning, so we can extract the reasoning next
from it. And the same thing applies to actions. Yes, this works. I've done it
myself. It's a very interesting experiment to see what you can actually get out
of these models without being very specifically trained to to do so.

But as the narrative goes, now that's being done natively. We saw it before,
right? Gemma 4 can do reasoning, it can do action, and tool calling, so you
sprinkle a little bit of ReAct data during training, and what do you have? An
agent. But it's not just so much about that model, but more of, again, this
narrative that we're trying to showcase. We're offloading human tasks, even in
model development. And the reason why I want to focus on this so much, stress
this so much, is that you see this happening more and more.

We're not talking just about agents. We're also talking about agentic harnesses.
What will change with future models? What will change with their behavior? What
are we trying to extract from those models now that we can train them for new
generations? And it's this narrative of trying to offload human tasks with
reasoning, with tool calling, with planning that eventually gives us this
agentic entity. But it's not that we're done here, right? We're still trying to
make them better than they actually are, or at least what they've been trained
for specifically. And this ongoing trend is something you will see more and more
often. It's not just about making sure that our lives become easier with agents,
but in all different assets of this AI world. And so with these kinds of
changes, you can see a massive growth in agentic adoption, but also in the way
we approach these entities. A next frontier won't just be about agents, but
perhaps about swarms, perhaps about harnesses, guardrails, evaluations.

And many of those things we're still doing by hand. So imagine what would happen
if we focus more and more on this evolution of models and trying to extract more
capabilities of them by training them. And so in the last couple of years, this
field has changed drastically. A couple of years ago, I talked about AI as if
there were LLMs that would just chat. And now we're talking about LLMs that take
actions and go even beyond that.

They're proactive. They can help us do research. They can help us discover new
technologies and new insights. And despite all of that, I still very much think
that we are just starting this era of agentic AI. Thank you very much.
