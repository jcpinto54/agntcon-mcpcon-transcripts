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
recording: RAI Amsterdam 2.m4a
contributor: jcpinto54
confidence: confirmed
---

# Inside AI Agents — Offloading Human Tasks

**Maarten Grootendorst** — Creator of BERTopic & KeyBERT & PolyFuzz & Member of Technical Staff - Google DeepMind

Member of Technical Staff at Google DeepMind. Creator of BERTopic, KeyBERT and PolyFuzz (millions of downloads), co-author of the bestseller 'Hands-On Large Language Models'. Master's degrees in organizational psychology, clinical psychology and data science.

*Thursday 17 September 2026, 15:04, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> One of four consecutive Auditorium talks captured in a single recording.

## Transcript

Thank you so much, Martha. Okay. You all noticed how good the models are being
especially for agentic work? Yes? That is not a coincidence. Our next keynote
speaker, Martin Rothenbush, who is a member of the technical staff at Google
DeepMind, DeepMind is going to share how the transition into the agentic AI
space is actually reflected in the development of LLMs. This should be good.
Please join me in welcoming Martin to the stage.

Thank you so much for this wonderful introduction. Today I would like to talk
about a central goal of AI, which is to upload human talks. In the last couple
of years we have seen this growth of AI change drastically from LLMs that chat
to LLMs that actually take actions. We went from LLMs to agents and from words
to actions and it has been a very interesting experience seeing that myself.
During writing, mostly, a couple of years ago I wrote a book called Hansel and
Large Language Models.

When we talked about AI, it really was about LLMs that chat. And our recently
released book called Illustrated Guide to AI Agents with my amazing co-author
Jay. When we talk about AI, it's not so much about LLMs that chat, it's about
LLMs that pay actions. It's about agents. And you see a very clear narrative of
offloading human tasks in how we use AI today. But this narrative can also be
seen from the lens of model development.

In just one generation of models, you see that we went from other lens that
focus on chat-like capabilities to models that focus way more on agent behavior.
And I want to showcase this to you in the following couple of minutes on how
this model development showcases this narrative of offloading human tasks. To do
so, I'm going to use this figure. It's a figure Jay and I really like to use to
showcase what an agent truly is about.

Bring it down to the most fundamental components. reasoning LLM augmented with
memory, with tools, and with planning. So let's start with one of them,
reasoning. If we were to do that with a previous generation of models, we would
have to create this prompt, a reasoning prompt. And we all know it well, right?
Let's think step by step or show future reasoning. And it would do this quite
well. Previous generations of models are very strong at instruction following
capabilities but you know there's reasoning now mixed with answering and where
does the reasoning end and the answering actually start. With newer generations
of models what we try to do is we try to put that into the actual model,
specific reasoning tokens, specific answering tokens. That's great and all but
what I really would like to focus on is this transition that we did from
prompting to actual trained behavior and it's this sense of offloading human
tasks that you can actually see in mobile development and not just from a
reasoning perspective right there's fool calling one of the most important
components of what is attentionless otherwise it can't really interact with the
world right now if we were to do that with let's say Gemma 3 again we would have
to create this prompt. Use XML like so-and-so or JSON like so-and-so and it
would output the tool call. It requires evaluation and it requires a little bit
of abusing of the usual role to give back the output of the tool call.

But it works. And now with a newer generation of models that's being done
natively. It's trained to do this through calling in very specific ways, so it
generalizes well. But again, it's not just about that. It's that we again
offloaded human tasks, who went from prompting to trained behavior. And this
narrative, surprise, surprise, you can see also with what we like to call
planning or autonomy. When we want to make an agent truly autonomous, we kind of
run it in a four-group, right?

And this formula that we typically use is called REACT. We all know it quite
well. Reason and Act. A framework that we use even in energetic harnesses these
days. That basically explains how a single step of an agent looks like. It says,
okay, we need to first start with reasoning. Before we actually do something, we
need to think about what we're doing. Makes sense. And we saw you can do that
with something. The same applies to tool calling. So when you have done your
reasoning, you follow along with the tool call.

And then again there's an observation, an output of it. And then finally, if we
wanted to do this in a model like Gemba 3, we would have to create this very
extensive React prompt. We saw it before, right? With reasoning you have to
create a prompt, whether it's future of learning, or let's think step by step,
or something entirely different. and that's then just step one. And then we also
had to do the same thing for tool calling and validate them all together.

You need enough evaluation to make sure this makes sense. And now you have that
and you can tell the model, okay, I want to make sure it now runs in a loop, so
every time you need to do this, the sequence of actions to make sure it actually
gets to me and behavior. But the way that's being outputted requires a lot of
manual parsing. You have to explain, okay, there's the word reasoning, so we can
extract the reasoning next from it.

And the same thing applies to actions. Yes, this works. I've done it myself.
It's a very interesting experiment to see what you can actually get out of these
models without being very specifically trained to do so. But, as the narrative
goes, now that's being done negatively. We saw it before, right? You can work in
reasoning, you can do action and tool calling, so you sprinkle a little bit of
React data during training. What do you have? An agent.

But it's not just so much about that model, but more of again this narrative
that we're trying to showcase. We're offloading human tasks even in model
development. And the reason why I want to focus on this so much, stress this so
much, is that you see this happening more and more. and more. We're not talking
just about agents, we're also talking about agentic harnesses. What will change
with future models? What will change with their behavior? What are we trying to
extract from those models now that we can train them for new generations?

And it's this narrative of trying to offload human tasks with reasoning, with
tool calling, planning that eventually gives us this agentic entity. But it's
not that we're done here, right? We're still trying to make them better than
they actually are or at least what they've been trained for specifically. And
this ongoing trend is something you'll see more and more often. It's not just
about making sure that our lives become easier with agents, but in all different
assets of this AI world.

And so with these kinds of changes you can see a massive growth in agentic
abduction but also in the way we approach these entities. A next frontier won't
just be about agents but perhaps about swarms, perhaps about harnesses,
guardrails, evaluations and many of those things we're still doing by hand. So
imagine what would happen if we focus more and more on this evolution of models
and trying to extract more capabilities of them by training them.

And so in the last couple of years this field has changed drastically. A couple
of years ago I talked about AI as if they were LLMs that would just chat. And
now we're talking about LLMs that take actions and go even beyond that. they're
proactive, they can help us do research, they can help us discover new
technologies and new insights. And despite all of that, I still very much think
that we are just starting this era of agentic AI. Thank you very much.
