---
title: "Agents as Actors: Harnessing the Power of Agentic Infrastructure"
speakers: [Idit Levine, Keith Babo]
day: thu
date: 2026-09-17
start: "09:40"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 42346c9d2353d44346a5dacda2c32abb
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=3585s
contributor: jcpinto54
---

# Agents as Actors: Harnessing the Power of Agentic Infrastructure

**Idit Levine, Keith Babo** — Founder & CEO / Chief Product Officer & Solo.io

Founder & CEO of Solo.io, simplifying agentic AI and cloud-native tech. Background in distributed systems and cloud infrastructure.
Chief Product Officer at Solo.io, leading product strategy for cloud-native and agentic infrastructure. Previously product/engineering leadership at Red Hat, Sun Microsystems and Intel.

*Thursday 17 September 2026, 09:40, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 0:59:45](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=3585s)), not an attendee's recording.

## Transcript

All right, good morning, everyone. Open source is core to our mission at
Solo.io. Everything that Idit and I talk about today, everything that we do at
company is based on open source and open communities. And the reason for this is
obvious. It's as Angie put it earlier, like we get to participate in these large
and vibrant communities like this agentic AI community and see the good, the
bad, and the ugly and work with the community on how to solve those challenges.

And one persistent challenge we see across every company, every organization and
user that we work with is that we have AI development teams moving as fast as
they possibly can, picking up whatever tool they can to prove value in agentic
AI. And at the same time, as soon as that proof of value is live in a pilot or
POC, they want to get that deployed in production to multiple agentic runtimes.
Now the issue here is this is kind of the good, the bad, and the ugly all
wrapped up inside of one, right? It's good that they're moving so fast. It's bad
because we can't actually get these things into production because the ugly is
we lack the governance that we have for our existing types of applications and
workloads. We lack that for the unique aspects of these agentic workloads. So to
explore this, Idit and I will go through a few examples of this production gap
as we call it, and we'll start with agentic runtimes. And the great news about
agentic runtimes is that they all have first-class representations of things
like agents and tools and skills and plugins?

Well, not exactly everyone, right? Kubernetes doesn't have that. When Agents
started two years ago, we were very bullish about running Agents and Kubernetes.
I think we did a great job as a community. This is where we're running the rest
of our application. And even for sovereignty, probably we need to run something
on-prem, and Kubernetes is the right thing to do this. But I also identified
that there is two problems. The first one is that when I'm running agent, I
don't want to talk about pod and deployment or Kubernetes Gateway API.

I want to talk about agent and tool and skills and plugins and policies. That
should be my API. And the second thing is everything related to Kubernetes is
basically power is running a stateless application. And there's nothing
stateless about agent. This is why we created an open source project called
kagent. It's an incubation project in the CNCF and it's a crazy community there.
So it's a really good one to watch. But here's the thing, right?

AI is moving in fast speed, right? When we started this 18 months ago or a year
and a half ago, basically the agent that people was running was the stateless
machine, state machine agent. So agent like for instance. Then, fall over that,
people move to agent framework, right? Like ADK. And if you're looking at what's
happening right now, everybody's running harness. So let's double click one
second on harness and see why it's so special.

So agent harness is basically an empty shell. There's nothing there, right?
Basically, it's getting its functionality based off the plugins for skills and
tools. But what's more interesting there is actually the file system. And I
wanted to explain that. When we used before ADK or LangChain, we needed to keep
our state in a database. That's not the case with harness. Everything they need,
it's actually in the local file system.

The file system becomes the most important thing. Okay, that's great, but also
those skills is not only read by those harness, it's also write by harness. And
we as a software developer know that this is a totally different ball game in
terms of security and complexity. So how do we put out the onus protecting it?
The prompt end user for permission. This is great but there's two problem with
this. Number one, 80% of the user just going to say yes, yes, yes, even though
they didn't even wrote the prompt. And the second thing, since when we, the
platform engineering team and the security and the CISO, delegating security to
the end user. That doesn't make any sense, right? So we need to take stuff back
to our own end and how we're going to do this the first thing we will do we'll
put that harness inside a sandbox so now he has his own file system and is even
if he's compromised you know is the only one that will get compromised the
second thing is networking we need to make sure that every traffic a ingress and
definitely ingress is important but here even egress is more important right you
don't want agent to go to the internet which we could have kind of like trick
until now must be done.

And we need to make sure that every traffic is going to an authority point like
agentgateway. Okay, cool. So now when we understand this one, how do we run it
in Kubernetes? So Google, Solo, Microsoft, and NVIDIA joined forces together and
worked on a project called Agent Substrate. What is Agent Substrate? So that is
very, very simple. We basically take in the pod and leveraging. There is two
basic concepts in Agent Substrate.

The first one is the worker. or more important, worker pool, because you're
creating a worker pool. And that's basically equivalent to a pod. And then when
you want to run an agent, what Agent Substrate doing is first putting it inside
a sandbox, creating a sandbox in that worker, attaching the file system and make
sure that it's right to the right harness because the file system will be
changed between different harness, and basically attach the harness.

This is what we're calling an actor, right? This is great, but here's the thing.
If you're looking at your machine, probably, you know, there's tons of agent
session and honestly not a lot is actually active. So the question is that it's
really wasteful for us to take an active pair of port, right? It's not doing it,
right? So what are we going to do? Once Agent Substrate is actually identified
that this agent is a idle, what it's going to do, it's going to checkpoint the
storage, the file system the memory to some storage, it could be S3 or something
else, and then delete the actors.

And then this worker can be used by other actors. And then once Agent Substrate
understand that they need to basically the agent becoming active again, it's
going to restore the storage, create the sandbox, attach the actor, boom, it's
running, we're talking about millisecond. We have now two problems that we need
to still do so. Number one is identity. Because in Kubernetes, is when you're
talking about identity you're talking usually about pod right which is basically
the worker but now we just destroy that because we basically running multiply
actors in the same in the same worker so we can't actually use that so Agent
Substrate came with its own identity and the second one as we talked about it
always the network the network becoming such an important piece and that's what
we're doing there we basically build a small piece of software that will run
inside that worker and we'll make sure to capture all the traffic and always
send it to agentgateway.

And when it's getting the traffic, it's verifying that it gets from
agentgateway. So that's basically what Agent Substrate is doing. But notice,
Agent Substrate is talking about actor and worker. What he's not talking about
is agent and tools and plugins and policy, and that's where kagent is coming. We
basically re-based kagent on top of Agent Substrate to leverage that as a
sandbox kind of like orchestration. And what agent gateway in much page and is
adding is first of all the high-level API, but more important a storage
management On behalf of memory management UX and so on and so on So as I said
kagent is an open source project in the CNCF. There's a huge community We love
you to join and help us build it There's a couple other gaps here beyond just
running harnesses and shared infrastructure wherever you're gonna run those
harnesses or agents in general You need governance over the traffic that those
harnesses are going to generate, and this is where we created the open source
agentgateway project.

agentgateway is based on a premise that agentic protocols are fundamentally
different than classic L7 protocols, that you need to reason about from first
principles, LLM, inference, MCP, and A2A traffic holistically as a new layer in
the stack, which we call the context layer. The real judgment or success, I'll
say, of a technology or a project is whether it's keeping pace with the market.
We all know this market is moving crazy fast, but there's two dimensions of this
when we start talking about gateways in this space.

One is, how are they doing in terms of implementing features for each one of
these agentic protocols? Even more importantly, how is it combining them for
these holistic use cases around end-to-end agent trajectory or on behalf of
identity and policy or token optimization and cost management. All of these are
available in agentgateway in the community. And it is not just Solo doing this.
This is a community effort with users, contributors, and organizations all
partnering with us to push the envelope in this community as part of the AAIF to
make agentgateway the best gateway.

The last thing we want to mention in passing is that Idit did a great job of
describing how harnesses are going to move from the desktops to shared
infrastructure, but they're never going to completely leave the desktop. That's
always going to be the case and that's not going to happen overnight, which
means that these desktop agents right now are integrating with production
systems and production data. Our governance has to reach all the way out to that
desktop.

And if it's going to be production, you have to answer some fundamental
questions. Each one of these harnesses or desktops, which harnesses are
installed, what tools and skills are in those harnesses? identity is being used
in that harness? Spoiler alert, long live API key with global permissions and
access basically, right? Exactly what you don't want. How do I actually control
configuration policy for these harnesses? And then finally, if I have an
incident, how am I actually going back and observing and auditing what happened
with that harness and what data interacted with? You have to be able to answer
all of these questions on the desktop. And this is exactly why we open sourced
the agentdesktop open source project this this past month in September. And it
operates in two modes.

One is in a local mode as a developer. I can install agentdesktop, get a local
daemon and UI to see exactly what harnesses are on my machine, configure them
centrally, and embed an agentgateway instance that will serve that ingress and
egress traffic proxy and policy that Idit was describing for shared
infrastructure, but all on your desktop. It also supports the ability to bring
all of that out to a centralized fleet controller, so you can have a centralized
control plane for all of the desktops in your organization, and have global
policy and configuration from that single pane of glass.

All open source and available in the community now. Yeah, so that's it. I mean,
there is way more to talk about, but we don't have time. Everything that we're
doing is in the open source, as we say, we would love if you would join the
community, and come talk to us in the booth. There's loves and cool stuff. And
swag. Swag. Thank you.
