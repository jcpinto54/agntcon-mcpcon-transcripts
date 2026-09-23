---
title: "What *IS* an Agent's Identity?"
speakers: [Christian Posta]
day: thu
date: 2026-09-17
start: "13:10"
room: Auditorium
track: Enterprise Adoption
kind: talk
session_id: c1be08166f7bd5326366168c39e58fe7
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=15799s
contributor: jcpinto54
---

# What *IS* an Agent's Identity?

**Christian Posta** — Solo.io

Field CTO at Solo.io; service-mesh/Istio pioneer and former chief architect at Red Hat.

*Thursday 17 September 2026, 13:10, Auditorium — Enterprise Adoption track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 4:23:19](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=15799s)), not an attendee's recording.

## Transcript

All right. Oh, that's loud. Can you all hear me? Is that a little bit loud? I'll
try to talk quieter. All right, well, thank you for coming. I'm going to talk
about agent identity today. I'm kind of curious by show of hand, how many people
are running agents today in production, either on your laptop or in server
environment, but actually running it for, you're trying to accomplish real
stuff. Okay, how many of you that raised your hand, How many have an agent
identity mechanism that you're using today to be able to track and attribute?

Okay. All right. Well, that's what we're going to talk about today. My name is
Christian Posta. I'm the global field CTO at Solo.io. And we work on security
and networking for agentic infrastructure. Some projects, open source projects
that you might be familiar with, things like agentgateway and LLM and MCP proxy,
things like kagent, which is agentic runtime for Kubernetes. And then more
recently, we announced Agent Desktop, which is a governance and security
solution for running agents on your laptop, on your workstation.

on your workstation. So I work on those open source projects. I like to share
what I learn and what I work on with our customers at Solo. So check out the
Solo blog, check out my blog. All right, one of the first few things, few
questions that come up when I'm working with customers about agent identity is,
well, do we have mechanisms in place today that we can just reuse? We know that
when we build AI agents that they are driven by natural language.

The AI model interprets that language, the prompt, and forms a plan and a set of
steps that it will take to achieve a goal, solve a task. Sometimes we kind of
expect what it's going to do, and other times we don't expect what it's going to
do. It might try to work around, do things that, like, so for example, in the
OpenAI and Hugging Face exploits that have been in the news now, the goal was to
solve this cybersecurity challenge.

The model decided it was going to try to change or influence the score to make
it look like it solved it without actually doing it. So, this unexpected
behavior or just the regular behaviors in an enterprise, we need to understand
what is it doing, what actions did it take, what authorizations did it have in
place to allow that. And if things go off the rails, then we need to be able to
revoke the actor or the agent in this case.

And so agent identity forms the foundation for how we are able to define what an
agent can do in authorization, to attribute the actions to the agent, to look
back and see who's accountable, who started this agent, who approved this
action, and then, like I said, to revoke it. So the first question I usually get
is, well, can I just use the user's identity? OIDC, some identity assertion, the
user's logged in to the system and to the agent and to the app.

Can we just use that? And when you're first starting and you're first adopting
agents, you're on your laptop, you're working with Claude Desktop or Codex or
something, and you're instructing it to do, you know, X, Y, Z, and it's going
off and figuring out how to do it and returning back and it's a tight loop and
it's using your credential under the covers, that's probably fine. You're using
it as a natural language automation tool. But you're effectively doing it. The
rest of the system sees you doing it. And that's probably okay. But as you start
to get into a little bit more advanced use cases where maybe you have multiple
agents And those agents are working on different aspects of a task.

Maybe they're setting up for a demo. Maybe they're investigating a deployment.
You realize you don't want the agent to have your full authority. You want to
kind of scope that down and maybe delegate part of your authority for the agent
to work. But you don't want to give it everything. So, in that case, you're
starting to see the tension where it's like you want to scope this down a little
bit. And so maybe it's not you. Maybe it's the agent itself that's doing this.

But then if we look at even more use cases, and so beyond the direct authority,
beyond the delegated task, we have use cases where the agents are going to run
autonomously. Maybe someone in the org commissioned the agent, but they're not
sitting there with it, so maybe that agent should use its own authority. We have
use cases where the agent's performing something, maybe autonomously, but it's
digging into something for a user or a customer, but it's using its own
authority.

It's not using the user's authority to do that. And then lastly, you may have
use cases where the agent is proceeding and taking actions and then runs into an
action where it can't proceed unless it has a human approval. Some user has to
jump in or multiple users jump in and say, yes, I approve this. So who's the
user? What is the identity that you use that's the user here? It really, user
doesn't map very well to an agent's identity.

Now, like I said, it could be used as part of the context, it could be used to
delegate authority, but by itself is not a good approximation for agent
identity. What about workload identity? This question definitely comes up a lot.
Agents are code. The LLM and the model is driving its behavior and the actions
that it takes, but it does, it's an execution, it runs somewhere. For those, I'm
just kind of curious by show of hands, who's running in Kubernetes?

Who deploys workloads into Kubernetes? Okay, about half. And so for those
environments, workload identity is a first-class concept. Can you just use that
as an approximation for the agent identity? And just like with the user use
case, when you're starting off and you're deploying agents into Kubernetes, into
Kubernetes, and actually we did this in the kagent project, it's probably fine
to use workload identity as the mapping to agent identity. You can get
attribution, you can get accountability if you do some stuff behind the scenes
for bookkeeping stuff, you can get delegation. There's a great paper out there,
it's called AIMS now, it was K-L-R-C in the OAuth community that shows how to
combine SPIFFE and OAuth into these things.

So workload identity can be a good starting point. But as you start to get into
more complex use cases or scenarios, you find that those individual instances of
an agent might slightly be different. You might want to authorize them
differently. Maybe they're the supply chain agent, and maybe they're handling
different parts the manufacturing, the finance side, and IT side. Maybe these
are slightly different agents, and we want to authorize and attribute them
differently.

So then when you start going down this path, you start seeing this tension, then
maybe workload identity as we know it in, for example, Kubernetes is maybe not
fine-grained enough to account for agent identity. Another scenario that we see
is in agent frameworks where you have multiple agents that may want to run in a
single workload. All right? So in that case, workload identity is not granular
enough. Or in projects where you might be multiplexing multiple actors or
multiple agents into a workload and then suspending the actor and moving it out.

And then maybe later when it resumes, it resumes into a different workload. So,
again, workload identity as we know it in something like Kubernetes with service
accounts and things like that might not be the best fit. That doesn't mean
SPIFFE is not, and we'll come back to that. So then what should it be? So if we
look at the, you know, the user is not a perfect fit, workload identity may or
may not be a perfect fit. So this starts to feel like another layer on top of
workload or combined with user.

And so the way that I've been describing it and talking about it is you have the
agent that you register in an authority or a registry somewhere where you define
kind of the outer policy for what this type of agent is allowed to do, sort of
the outer bounds of what it's allowed to do, who commissioned it, when, and who
can access it, and so on. But then at runtime, when this agent's actually
instantiated and doing something, I refer to that as an instance or an actor.

And that's the thing that we can authorize at runtime. We can evaluate policy.
We can bind grants. And so basically, identity is the anchor for binding policy
and grants and the mission of an agent or the task context. We can bind that to
a principal, and then at runtime, we can authorize this. Now at runtime, how an
agent presents its identity, we want that to be cryptographically asserted or
verifiable. We don't want an agent to come up and say, yeah, I'm the supply
chain agent, but you know what, you know, I have access to the logs.

I saw the budget agent just call me. It would be better if this call that I do
looks like the budget agent did it, so I'm just going to log it as the budget
agent. We don't want that. So we do want these calls to be cryptographically
bound to the agent's identity. All right. Now, this is a little bit abstract so
far, but let's jump into some concreteness. I'm going to take a look at a few
different implementations of agent identity.

The first that I'm going to start off with is a relatively new project called
Agent Substrate. Agent Substrate is a project that Google kind of announced, but
we at Solo, we've been very involved in because it is an optimization for
running agents on top of Kubernetes so that you can run orders of magnitudes
more agents and more actors than you have, for example, pods. In the Agent
Substrate world, we call that actors and workers. Why you might want to do that
is because an agent, you know, it comes in, it does a bunch of stuff, and and
then it becomes very quiet.

And then it might come up again and be very bursty and then again become quiet.
So if you just pack this one-to-one agent into a pod, the pod ends up sitting
there wasting resources. So what we want to be able to do is schedule and
snapshot out and schedule and snapshot out as it makes sense. In the Agent
Substrate project, there's this notion of an actor template, which kind of maps
to this class idea, And then the actor itself, the actually instantiated actor.

And the actor's identity is presented as a SPIFFE ID. So the actor, when it gets
scheduled into a worker, it has this SPIFFE ID. Actually, if we take a look at
the next slide, it gets scheduled into the worker. It has a SPIFFE ID. If it
gets snapshotted and scheduled out of the worker, and then later gets
rescheduled back into another worker, a different worker, it maintains that same
identity. And that's an important aspect of this, you know, how do we get
attribution?

Well, over time, as this thing is doing things, we need to be able to say, yeah,
it's this specific actor that's doing it. In Substrate, the way that works is
the actors run in a sandbox, a micro VM or a gVisor, and when the actor makes a
call out, the worker is able to automatically inject the credentials that
represent that specific actor. Right now in Substrate, that's a certificate, so
it's mTLS. We'll also be doing JWTs. So it's important that the actor can't make
up its own identity or substitute it in something different.

It's bound by the run time. The next implementation that we'll look at is
AgentCore. I'm kind of curious how many are running in AWS Bedrock AgentCore.
One? Oh, I would have expected more. All right. All right, well, so in
AgentCore, there is a concept of agent identity. And the way that that's handled
is there's the runtime identity for the agent and that all sessions inherit. In
AgentCore, when you have multiple sessions that are identified by a session ID,
those actually do run in separate micro VMs.

VMs, but those by themselves don't have their own unique identity. So in the
AgentCore world, you have the abstract runtime, and then under the covers when
it's actually working, you see either the AWS execution ARN or what they call
their workload identity, but there isn't a specific actor or lower, more fine-
grained actor principal. Now, because of that, they kind of leave up to you how
to handle things like sessions. Sessions are not bound to users.

A session that's running Alice's workloads, Bob can also get into that session
as well. Those session IDs are not cryptographically bound. So revoking sessions
becomes your problem. You have to figure that out in your agent code. Separating
out sessions or attributing specific actions by sessions or agents is kind of on
you to do. The third one that we'll look at is Microsoft Entra Agent ID. And
Entra Agent ID actually maps pretty closely to the model that I defined, where
you have an abstraction of what the agent is, definition of what part of the
organization might own it, maybe some common or shared permissions across all
the agents, and that's what Entra calls a blueprint.

And from that blueprint, you can derive very specific agent instances. And those
are, all of this is an extension of their service principal mechanism. So these
are service principals that can hold grants. They are, you know, the actor level
or instance level identity. Now, if we look at all three of these against the,
you know, the initial, you know, authorization, attribution, accountability, and
revocation, we can see they kind of get there.

A lot of them get there. There's some holes or gaps where it's on you to fill in
some of the areas. But for the most part, these agent identity implementations
are relatively going down the right path. Now, those implementations and those
definitions of identity work well when it's within a single domain of ownership
or management. Like if you're in Kubernetes and running on Agent Substrate or
kagent, which uses substrate, you have a runtime registry.

And in that system, we know that a particular actor is running on this worker.
So the runtime makes sure that the worker presents this actor's certificate. And
that's all bound because it's all running within that system. Same thing with
AgentCore. If you're going to build around that, there's a registry, there's a
mapping. It's a very similar concept. In Entra, if you're running managed in
Entra 365 and so on, they take care of all that.

Otherwise, you're expected to do that in your own platform if you build on Entra
Agent ID. You're supposed to manage the blueprints, manage the agent identity
tokens. Now, what happens if you get into, and this is why agents exist, right?
Is to be able to dynamically discover what they need to do. Maybe dynamically
discover MCP or APIs. Maybe querying a registry to find other agents. what
happens if you start to get outside of that boundary?

And so that's where a new draft called AAuth, Agent Auth, comes into the
picture. It is built specifically for this more dynamic discovery and
verification that should happen at runtime without going and establishing the
bindings up front. And, AAuth and Agent Auth is built specifically first and
foremost on a concept of agent identity that ties the principal to a specific
key so that when the agent is making calls, you can provably show that it is
bound to that specific identity.

Now, Agent Auth is, like I said, it's built for this more dynamic world where
you can discover. But discovering and proving and showing identity is not
enough, right? Because you need to be able to figure out when I'm making a call
to a resource, what scopes do I need? What authorization requests should I be
making? And so Agent Auth also allows the client or the agent to dynamically
discover what it is that it needs, and then they'll get those approvals, either
from a human or from a policy engine or another AI-driven system.

AAuth has those concepts built into the architecture. The last thing that I'll
point out is the concept of a mission and whether a mission is complete or has
ended. AAuth makes that a first class citizen. So all of this stuff, starting
from the agent identity to discovering what scopes it needs to getting and
interacting and getting approval from a human to, you know, whether or not a
particular action is within a mission is all taken into account by AAuth.

And those, it all starts, you can't build all that stuff without having that
agent identity. I, let's see, I don't know, I've got three minutes, let's see.
All right, I'm going to show you, see if I can pull off here a quick demo. So,
we're going to look at Agent Substrate. What I'm going to show you here is,
hopefully you can see this okay. In my Kubernetes cluster here, I have one
single worker shows up as a pod. And what I'm going to do is, I'm going to
invoke five different agents.

And what Substrate's going to do is schedule them into the worker, run their
whatever, and then schedule them out and go to the next one and the next one.
We're going to see five different agents respond or execute, do something, but
it's not going to be across five different workloads. We're going to see five
different identities through the one single worker here. So if we go here and
run this, I'll walk you through what the demo is actually doing.

You can see it is running through my Kubernetes cluster. The first thing is we
identified that we have the one worker running here. We spin up five different
actors, and they start off not running, so they're in the suspended state. Then
we drive traffic through them, calling each five differently. And in the logs,
what we can see is each one of these got called, got an HTTP 200. They're all
running on the same one worker. but then down here in the agentgateway logs, so
like you saw in the diagram earlier, the traffic goes through.

We attach the credential and the identity, goes through agentgateway, and then
agentgateway applies policy, but we can see that each one of these actors has a
different name and a different identity. Under the covers, it is all SPIFFE. All
right, so that's my time. I guess I got a minute. Are there any questions? And
I'll be around here. I'll be at the Solo booth afterward. If there's any
questions, I can take them now. Otherwise, I can chat afterward.

Oops, let's go back to... Here, I'll leave up my contact information, links to
the Solo blog and my blog. We've got a lot more content, a lot more stuff that
now builds on top of agent identity, things like authority and things like
delegation and policy enforcement, all that stuff. But come find me afterward.
