---
title: "How we Reclaimed Significant Engineering Capacity at Salesforce with AI Agents"
speakers: [Axel Uhlig]
day: fri
date: 2026-09-18
start: "10:20"
room: Auditorium
track: Enterprise Adoption
kind: talk
session_id: 6d0f47ae9bfc9b8d8ee9954b27dafa45
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=4922s
contributor: jcpinto54
---

# How we Reclaimed Significant Engineering Capacity at Salesforce with AI Agents

**Axel Uhlig** — Salesforce

Axel Uhlig is a software engineer at [Salesforce](https://www.salesforce.com/), where they work on CI/CD infrastructure and support the Hyper Database team that ships Salesforce's in-house database as part of Tableau and other products. They previously led Bazel build-system migration work at BMW, and have spoken at BazelCon about tooling such as bzlog, which collapses Bazel's Build Event Protocol stream into a compact report that fingerprints the root cause behind duplicate build failures instead of repeating them.

*Friday 18 September 2026, 10:20, Auditorium — Enterprise Adoption track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 1:22:02](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=4922s)), not an attendee's recording.

## Transcript

Hi. My name is Axel. I'm working at Salesforce as a software engineer. And
Salesforce is a large SaaS company, in case you haven't heard. And as every big
SaaS company, we do a lot of ops work in our engineering org. And lately we've
been able to partially automate some of that work, which reduced in additional
resources being freed up for other stuff. And today I want to share with you how
we did the show so you can do the same at your company.

But first, what does ops work? So in engineering, there's this famous dev ops
split. and the dev part, especially the coding part, is getting a lot of
attention right now by companies like OpenAI and Anthropic. But the ops part is
equally as important, and the potential for automation is huge. This is a
typical ops scenario, basically on-call. Ops means a lot of things, and the
definition is very broad, but being on-call is part of it.

So this is how this usually looks like. Imagine you're an engineer and you're
woken up at 3 a.m. in the night because the service you're in charge for is
having an issue somewhere around the globe. And now it's your job to figure out
what is going on and how to fix it. And the longer you take, the more customer
impact there will be. So the time you take for doing this analysis and coming up
with the right mitigation will have direct impact on the business.

Talking impact a bit. So this kind of stuff happens frequently at every big
company. The amount of time that is spent on this is varying a lot, company by
company and team by team. It's really hard to come up with a good number.
Generally, across all of ops work, you can use 30% for a SaaS company as a rough
ballpark. Again, this varies a lot from company to company, But you can estimate
that about 30% of engineering capacity is spent on operational work and being on
call as part of that.

So this is an interesting bucket to look into. And now here's how our agent can
help. It's called HyperAgent for some reasons. And it's basically doing the very
same analysis. So there's an alert by our monitoring system posted to Slack. And
the agent is taking a look at what is going on. and it's taking a couple of
minutes to figure out what it thinks the reason is, and it's posting then this
analysis to Slack. And then once the engineer has time to engage, they can then
together with the agent drill down further and find out what the best mitigation
is.

I'll talk more about like how accurate that is and the impact we're seeing and
so on later. But first, yeah, let's talk about accuracy. Is it any good though?
Because that is an important question to ask. It's so easy to build agents that
just spam your whole company with their output. I bet you have seen them at your
company. So building a good agent is not that easy. And we think we achieved it
with that agent. So we think the accuracy we're getting is sufficiently good
based on two things.

So A, we are regularly serving our users and the feedback we are getting is that
this is providing huge value to them. And the other one is we see the users
proactively use the agent. So it's available in Slack, and they might have
discussion about, I don't know, something that happened in prod, or whether a
feature is having a certain impact. And whenever discussions like that happen,
they often just tag our agent and do things like, hey, can you please double
check this statement in our production logs?

And then the agent will basically post that analysis to that Slack discussion.
And this voluntary proactive use of our agent is for us the biggest proof that
this is actually providing value. So how can you achieve that accuracy? So for
me, there are two key learnings. The first one is it really helps if your agent
brings proof. What I mean by that is the analysis of the agent alone doesn't
mean much if you can't verify the analysis easily.

Language models still make mistakes, right? So what our agent is doing, it's not
just posting the analysis to Slack, it's always also posting a Slack canvas that
has all the tool calls of the agent, including the results it got back from
those tools. This way, the user can cross-check the work of the agent without
leaving Slack, without leaving the tool. And this is very powerful, not just for
debugging the agent, but just for knowing basically the steps the agent took to
come to that conclusion and basically just follow the train of thought of the
agent.

The other big one is if you want to have high accuracy, give the agent very
detailed instructions, like a step-by-step guide and have that like one
individual one per kind of alert. This way you get very similar output each time
and this allows you to fine tune your prompts. This is how you can achieve
accuracy. There's more, though. Like when we shipped this, people were happy.
But we noticed that we just built an agent that can do just a lot more.

Good example is our feature that we now offer to our executives for their
customer briefings. So basically, imagine you're an executive. You're about to
go into a customer meeting. And you would like to know how is the experience of
that customer. How many of our features are they using? Which features? Where in
the world is their load happening? What latencies are they seeing? What error
rates? This kind of stuff. And all of this information is in the production logs
of all the services deployed at your company.

It has been there for years. But getting that knowledge out of those logs is a
hard job. And usually executives are missing the time and the skill to do that
themselves. Now with our agent, they can just go to a Slack channel, drop the
name of the customer, and get that customer briefing within minutes. All
grounded in real production data, basically up to date, up to the minute, and
with our vetted prompts and service knowledge.

This is a really nice byproduct just of building an agent that was primarily
designed to do engineering work. So what is the impact? As I said, we survey our
users regularly. And the feedback we got is that from engineers working on on-
call stuff or alert triage, this agent is saving them about 20% of their time.
Which might not sound much, but if you think about it, this means for everyone
working on this kind of work full-time, this is freeing up one out of five
working days for them every week.

And this scales with the number of teams using that agent. I can't give you the
exact number, but this agent by now is used across Salesforce, by many teams at
Salesforce. And the impact we're seeing is good. So how did we build it? This is
the tech stack on a high level. Basically, the agent is composed of two
components. One is a generic Slack app that is doing all the user interaction.
And the other one is our agent backend that is just a hosted agent harness.

like one of those harnesses, pretty common harness. And that harness is hooked
up to all the tools that the agent requires. So internal data lake, GitHub for
the code, PagerDuty, Splunk, you name it. And this way the agent can do its
analysis and once it's done, it's posting the analysis back to the Slack app,
including all of those tool calls that have been logged and the Slack app can
then do the user interaction. This is the tech stack on a high level.

If you want to know more, please feel free to reach out. Because I think this
tech stack will differ from company to company. We all have different data
setups and so on. But what will definitely apply to every one of you is those
five learnings I want to share with you. Those are things, five learnings that
we took away when we built that agent that should be helpful to all of you. The
first one is specialized beats generic. And by that I mean, in our experience,
there's no system prompt that basically works out of the box for all of the
teams at your company.

Basically write a prompt once of how to do DevOps work or on-call triage and
just apply that to all teams at your company and just consider it solved. This
won't fly. An agent like that will have really shitty accuracy and the impact
you will see is rather negative even because it's just confusing people. So
instead what we suggest is if you want to go that way, pick one team and one use
case, and build an agent that nails this use case.

This will take time and a couple of iterations, but once you have that, once you
achieved high accuracy for that single use case and single team, then scale out.
You have then a good agent set up, so you can reuse the tech stack, but you will
always need to provide specialized context for each new use case you're
onboarding. This is how it looks like on a code level for our agent. So
basically new teams that want to join, they can specify which Slack channel the
agent shall operate in, when it shall trigger, for example, only if a certain
user is posting something or if the agent is getting tagged, and their system
prompt, and that will contain the link to their individual knowledge graph.

This is how you can have specialized context. And then all the feature targets,
so basically which tools the agent shall have access to for this specific use
case. And this allows you to basically have good accuracy with specialized
context at scale. The next one is bring proof. So I showed you this before, but
again, it's super crucial. Build an agent like that from the start. Make it show
its way how it came to the analysis. The third one is minimize friction.

And by that is basically use Slack or whatever chat tool your company is using.
for the user interface with the agent. It's so powerful to integrate your agent
into where your humans are collaborating with each other anyway. If the agent
can just join ongoing Slack discussion and they contribute their part of the
story to it, this is the most minimal friction you can get for making it easy to
use your agent. Think back to that executive that wants that customer briefing,
right?

they might have time to type in that quick prompt into the Slack chat box. They
definitely will lack the time to set up local skills and local tools and keep
them up to date to get the same report. They will just not do it. So if you
basically use the chat tool of choice of your company as user interface, this
will help you a lot. The next one is operate in public. And by that I mean a lot
of agents are built in a way that the chat is happening between one agent and
one human, and only those two are having access to that chat history, basically
like a DM style of interaction.

We would suggest instead that from the ground, from the startup, you basically
build the agent in a way that it's interacting in Slack channels. Those can be
private or public, but this way, multiple people can join that discussion. Think
back to that on-call scenario. So you might have that on call, the agent did the
analysis, the engineer is engaging, and maybe during the analysis, they see that
another service is impacted. So now they reach out to some engineer from that
other service, and they are joining the discussion as well.

But given that all of this previous discussion happened in a Slack channel, all
of this is available to the new joining engineer. And they can then basically
just participate in that discussion and jointly prompt our agent to find out
what's going on. And this is a very powerful way of basically enabling this
human to agent to human interaction. Security wise, this is a bit tricky, right?
Because basically everyone interacting with the agent needs to have the same
access profile that the agent has as well.

This is, I guess, also why a lot of agents are not built that way. So this will
make it more tricky, but the outcome will be better. The last one is hosted
versus local. And by that I mean don't use local skill files and a local harness
on your laptop for things like that. Don't get me wrong, there are a lot of use
cases where a local harness on your laptop is the perfect choice, especially if
it's your individual work or your personal style of working.

If you're trying to gain efficiency there, use local tools. This is like the
best choice. But whenever you're automating team processes that you want to be
done the same way all the time with consistent accuracy levels, we think a
hosted solution is better. It's similar like we do continuous integration builds
on CI worker farms, instead of relying on local machines and developers
verifying their outputs locally. Hosted will just give you guaranteed, a
guarantee that it's done the same way.

Another good example is AI code review. I guess a lot of us are doing this right
now at our company. You can use local skill files for that, but if you want to
ensure that every pull request is reviewed with the same model, with the same
prompt, with the same tools and so on, pick a hosted solution. So that's it or
is it? Because there's one more thing I need to share with you to be honest, and
that is if you build such an agent, People will like it.

People will use it a lot, and you will see that it's freeing up some resources.
But the minute you ship it, stuff like that will happen, and that is people will
have all sorts of ideas. Like, for example, now that we made triaging alerts
easier, can we just lower the alert threshold and basically be alerted for minor
issues as well? Those were undetected before, but if we now handle them as well,
this will improve the customer experience.

And they're right. This is a good idea. So let's do it. And stuff like this will
happen all the time. And what you will end up with is, you might have initially
freed up some engineering time and were maybe hoping to put that to the coding
part of things, but alternatively you could also invest that in even more and
even better ops work. And this is basically the discussion that will then
happen. In economic research, this is called rebound effect.

It's a very well understood phenomenon for decades. You might have heard of the
Jevons paradox, which is a special form of the rebound effect. On a high level,
this basically means whenever you're making a good cheaper, demand will
increase. This is very well understood. And the amount of which the demand will
increase depends on how elastic the demand is. An elastic demand, what is that?
So a good example is human hunger. So you might be able to sell a human one
hamburger or two, or if they're really hungry, three.

But at some point, they won't buy any more hamburgers from you because they're
full. They don't want to eat anymore, right? So nevertheless, how much you
decrease the price of the hamburger, they won't buy any more. Basically, your
demand ran into some sort of natural limit. And this would be called inelastic
demand. Knowledge work, though, for knowledge work, it's really hard to come up
with natural limits. If you say that you can improve the customer experience in
some way that is cheap, fast, and accurate enough, people will, like why would
you say no, right?

So basically, just be prepared, that's why I'm telling you this, that every
efficiency that you're gaining with the agent will very likely be used up to
provide better experience to the customer, which is perfect, it's like this is
what you want, right? but you won't have idle engineers around. This will
basically just result in them making them more efficient at getting even more
done. So just to basically level your, or set your expectations at what you will
see as a result of building such an agent.

So now that's it. Let's connect if you want to. Also I did build that agent on
my own. Kevin and Michael were of great help. Please feel free to connect with
them as well. And yeah, thank you.
