---
title: "From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry"
speakers: [Jordan Augé]
day: thu
date: 2026-09-17
start: "12:00"
room: G102 + G103
track: Open Source
kind: talk
session_id: 83f37169e46203cae13266651a163234
recording: Baccas.m4a
contributor: jcpinto54
---

# From Opaque To Observable: Tracing Multi-Agent OpenClaw Workflows With OpenTelemetry

**Jordan Augé** — Cisco Systems

Jordan Augé is a research software engineer and tech lead at Outshift by Cisco,
working across networking, security and agentic AI, with a focus on making agent
systems observable and interpretable. He chairs the Accuracy and Reliability
working group of the Agentic AI Foundation and holds a PhD in networking from
Télécom ParisTech.

*Thursday 17 September 2026, 12:00, G102 + G103 — Open Source track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> The talk ends at the `## Q&A` heading; everything below it is audience
> questions and the speaker's answers.
> *[Recording begins mid-talk.]*

## Transcript

used or shipped to the user. Finally, you have some diagnostics. So those are
typically five days you get to the end of the session that gives you some
insight about the cost of the LLM calls, the queue evolution, signals about
sessions being stuck. So the plugin is putting on this different type of
information, trying to collect IDs, reconstruct what is missing to provide a
full unified view. So from the distributed event-based system, what you get is a
consistent trace, which is fully respecting observability of generic
conventions, and that captures the full journey of the request as you get the
signal from a user for an event to the answer.

So this plugin and set of features will detail a few. So for example, one is the
session lifecycle tracking. So we have an autonomous system on OpenCLO, and
typically the sessions can be very long, and you get some session IDs in OpenCLO
that mostly work for identifying the context, providing some identity. It can be
the user on the chat that requested an operation. And if you know OpenTelemetry,
it doesn't fit well with the infinite sessions.

You don't want to send information when the spam completes. So you have some
session management to do to be able to periodically dump the content of your
session or when the session gets inactive. So we have some heuristics to track
the end of the session or at least to churn the session from time to time in
order to reflect telemetry in the observability solution that you choose.
Delegation topology, so this is really about how your multi-agent system
behaves, what are the chain of calls and sequence of agents that are called.

You can identify multiple calls with the same agents, calling new agents.
Gateway diagnostics, so this is interesting because the gateway in OpenCLO is
where you get the interface with the external world, whether you are contacting
other agents, whether you are calling tools or LLMs. It's a queue system that
tries to reconstruct the non-determinism of the external system, and it's a good
proxy to understand maybe the behavior of the infrastructure.

If you tend to get some unresponsive service, you will see the queue building
up, and so you can extract from the different information that you have in the
gateway what connects agents together but also what's the impact of the
infrastructure and when you try to diagnose issues it's very important because
the same issue could be linked to different reasons maybe it's uh an
hallucination on the tool called that failed maybe it's because the tool wasn't
available at the time and the solutions you want to take are different so
annotating the information with those Those diagnostics help a lot when you try
to understand the cause of errors and fix them.

The last feature I will highlight is the in-plugin cache. So if you were sending
everything you monitor at line rate, you would get some scalability issues. You
would pollute the server. So we experienced that with initial versions when we
moved to NemoClaw, which is really designed for high-throughput and enterprise
environments. So the public was updated to really focus on caching a lot of
information, aggregating data and sending spans so that you can scale your
solution to very demanding workloads.

I will come quickly on that at the end. Session so as I mentioned, so OpenCLU
has the session key. It's a runtime key that's located and used throughout all
the interactions that you get. how you find your working memory. But the session
in OpenCLOS as I mentioned is very long lasting. So we derive new session IDs
that we use for observability that are children of this session. So you will get
a lot of sessions in observability that corresponds to one unifying OpenCLOS
session. So the way this is done is by having some heuristic as This is done by
having some heuristic as I mentioned.

So we have some timeouts that detects inactivity on the session when the queue
is not progressing, when there is handling information from the user. This is
not ideal for sure, but we believe that having no signal is worse than having
signals that work most of the time. So in the different tests that we did, this
was quite good indication of the activity. So requests that are like long living
are typically without that and cut into meaningful sessions of activity.

So in terms of semantic conventions, of course, not everything we monitor is
managed in a semantic convention of GenAI. So the approach there was to reuse
what was available and to extend when you miss the semantic conventions. So in
the Linux foundation, we have this agency project, which as an Observe SDK open
source contribution, which is a framework to observe system and it propose
extensions to the semantic convention. So this is what we used.

And we encoded all the information that is specific to multi-agent systems, like
the forked joint semantics, when you have an agent spawning multiple agents or
contacting multiple agents. This will present the parallelism that you might
observe. You have signals for the handoff and spawns when you delegate context
to a different agent, when you create one agent. This allows you to maintain the
full lineage and you have identifiers to understand that.

And we also base some coordination scores. So the different metrics are
transported to give you some signals about how much activity there is, what's
the pressure on tool calls, what's the cost of token assembly at a given time.
These metrics, so they are numerous because we think that when you operate the
systems with thousands of sessions, what interests you is to have the full
information, debug issues, but you first need to raise issues.

So we want really this to provide signals to the operator that something is
going bad or differently with your system. So we have six groups of metrics. We
have a symbol at the core that gives you what's typically observed, like the
tool activity, the element's age cost. We have metrics about the gateway, it's
for example the depth of the different queues as you stack up work, how long a
session is stuck waiting for data. We have memory events, so you can see the
rate of reading, writing, hits in memory, and the time it takes to use it.

Context assembly, which is quite in general. Like what's the size of the prompt
you typically assemble? Are you having prompts that over time unbounded? Does it
take significant amount of time to build your prompts? And these are data that's
really worth observing over time as it gives you some information about the
evolution of your system. And you can correlate failures with that. Then we
lifecycle the delegation. So this is a bit of semantic behavior.

For example, you want to know if your agent is observing new data, does it try
new tools or cycles for doing the same thing over time? Overall, this data
allows you to identify both some operational issues with the classical failures,
but also some semantic issues, like whether the agent is retrieving memory that
seems scattered about different subject, whether you are facing deviation or
drift in the usage of memory, et cetera.

It provides end-to-end system visibility, so you know from the full system, you
have consistent metrics about the evolution of the system, and you can get some
insight about what is the bottleneck that can be the root cause of your issues.
Finally, the context is key to reconstruct what went wrong because you can know
what exactly is the source of information. If you go back the chain, you can
know that something that was causing an error was coming from memory and you can
find an investigation of everything that went wrong in the past.

To conclude, I will give you a few examples of the usage we did in Cisco of this
solution. So for the demo, we took a very simple use case, which is a SRE triage
application, where you have issues coming from the system, and the lead agent is
able to ask the three specialist agents information about telemetry observed
from the service, the database system that can have tools to understand the
structure of the database, and finally, a backend agent.

Those are sub-agents found on demand by the lead agent, And in addition, you
have two top-level agents, so different sessions in OpenCLO that can communicate
together, one verifier agent, which is supposed to check everything is
consistent before communicating back to the user, like did you consult a
specialist, do they have evidence for tools, and communication that asks the
report. So we show a very normal session, so we use Discord to contact OpenCLO,
and I will give you two examples with a commercial solution in Splunk and in
Grafana because everything is fully open source and can be used.

So this is the example of interaction we have with the system so we can ask a
question about incidents like we have a latency spike observed. So we accelerate
a bit but basically the agent will consult the different experts. They will come
with solution at some point. The solution is understood, this is approved and
the message is returned to the user. So for this session, because it's standard
observability, you can inject it into the typical solution.

So SPLUG is one example, but anything that accepts standard open telemetry will
be able to show you data. So you can see the full typical water flow session
where you see all the different turns by all the different agents and you see
the different delegations because they are children of the parents and you can
easily inspect the full session with the different attributes and the content of
messages that were exchanged and because it's fully open telemetry based we can
also ingest it into a typical click house database and have a dashboard with
grafana and in that case we show the different metrics we collect over time so
those are the ones that can be used to build analysis on top and try to
understand what are the typical behavior of applications establish baseline and
get signals of what is worth looking at correlation between metrics etc so two
things we did is to support two extensions nemo flow which is something proposed
by nvidia which is basically sandboxing the open environment and proposing a lot
of guardrails.

This was interesting because it's typically high throughput workloads deployed
in cloud environments, and this was a good stress test for the plugin, so that's
what raised the need for the inline caching. And the second one is a solution
developed in Cisco, which is another guardrail solution that inspects all LLM
and tool calls and tries to program safe words for bad behavior. And because
this solution is focused on the guardrails, it's a ship observability.

So this work was the opportunity also to log all the decision. And you can cross
all this information in your observability and note, for example, that it's
because of guardrails that some branch ceased functioning and that OpenCrew
backtracked and decided to recover the front solution. So that's it for the
overview. So this is something you can try. It's a regular plugin, so you can
deploy it in your OpenCLU instance, whether it's OpenCLU or different flavors,
it should be compatible.

We tested with two of them. We're interested in your feedback about what can go
wrong, especially if it's about multi-agent systems where you have collaboration
failures, for example, lack of coordination between agents. helpful for you to
debug this kind of silent failures that are not errors in observability and this
is just a starting point so we work with openclaw so the way we did it was to
propagate and reconstruct the typical w3c context package that we circulate in
the control so it's a proof that you can get some high throughput even brain
system but still get interesting information about about observability.

So the plan is to apply this to other frameworks. Like today, people are using a
lot of frameworks like Cloud, which are opaque, but still provide hooks that you
can hook. Of course, open source, like HOOZE. And what's really interesting is
when you have a standard solution, you can monitor groups of agents from
different frameworks and get understanding of how they behave, because this is
where we'll have different models, different harness working together that will
cause a lot of friction in the interactions.

Thank you. So if you have questions.

## Q&A

Yes. Thank you. I would see plugging existing solution on that. Definitely,
yes. So the question is about when you have a series of distributed agents
from different users, whether this work extends. That could be a goal. So what
we focused on is when you have one specific task which involves several
agents. we started with OpenCore because when we did that, that was the one
solution that emerged.

Definitely, I think the biggest challenge is when it's multiple agents
collaborating because we have been observing a ton of failures that are really
silent to typical observability. You can get them with LLM as a Judge metrics,
but then you don't know what's the root cause. So the idea was to have signals
to trigger this LLM as a Judge, and then signals to find what's the component,
and then you can dig in the logs to get it. So that should partially answer the
question.

One thing I didn't mention is that this work is limited when you have one single
gateway, because we use that a lot as the central point which ships all
communications. So if you were having different open-clue gateways, you would
need additional connection, sharing of IDs to reconstruct it. Yes? I'm curious,
where do you see alerting fitting into this new paradigm, in your opinion?
Alerting around, like you said, silent failures.

Where do you see alerting going in the next couple of years? So that's a very
good question. So the question is about where do we see alerting going. So as we
grow, so in Cisco we have a lot of agentic workloads Splunk is actually a good
place to see what's happening. From the studies we did, there are a lot of these
silent failures, so it's not something you see of a tool error. It's really
something you discover because an agent decided to approve, but it did not have
a fact.

Or the agent believed that one of our agents had access to a tool and should
have used it, but actually did not. And unless they share a lot in shared
memories, you can get those decisions. So we see alerting first today, everyone
is being an element judge. So you can find signals of these issues in common
metrics we compute, but that's not sufficient. So I think there is a critical
need to understand more what are those figures and find better signals.

So that was one idea there is to try to do correlation about different behaviors
to see not only the divergence to a baseline, but also what is correlated to
some failure we observe. And that can be reactive for sure. Second thing is
really to improve because LM as a judge is costly. So, if we have been doing so
far, we're using either local models or cheap small language models. But I think
there is a lot of work to do on semantic analysis and using embedding or things
like this to understand more what happened.

Yes. So there are two answers. So this is something we are actively working on
in the team. And clearly, we see some interesting marks in the signals that we
monitor that reveal some type of failures. Because different types of failure,
whether they occur within an agent, during the exchange, or as a wall emerging
from the system, they have different signatures somehow. Today, it's a bit
costly to detect. And one thing we noticed is that if you want to not only
detect them and post-telene and debug, but if you want to react to them, and we
have ways to fix them, maybe, just by introspection, just exposing the
observability to the LM to iterate, you can do already a lot.

And what was lacking is the real-time information. So Hotel is really sending
things when we have the end-expanse. So we have tried to improve the speed of
collection, but that's not sufficient, so we tried to work with the group to
think of shipping information in events and integrating that into platforms with
early signals to detect and maybe fix those issues. So we have to close the
session on this one, but I invite you to... I'll be around for questions.

And you can also contact Pavan for more in-depth solutions. Thank you. it's like
the biggest trench did you see the shadow build that was pushed yesterday show
the video yesterday somebody it's a joke push the shadow It wasn't a Ferrari
that the mayor would go with. You need to see this. He said it to me. Except
some would never know. Well, you can open a PR, you'll know. This is it. I don't
know. Sorry, I didn't know what you were going to say.

I think it's a doll. The one about the M.C.B. Spikes. Because the guy is so
cool. Yeah. Cool. Come on. I'm gonna open it up to show you.
