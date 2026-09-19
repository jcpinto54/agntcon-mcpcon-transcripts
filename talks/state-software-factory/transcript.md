---
title: "State of the Software Factory"
speakers: [Dexter Horthy]
day: fri
date: 2026-09-18
start: "09:41"
room: Auditorium
track: Keynotes
kind: keynote
session_id: e6f2202aa16c70c2798e835e9a1c7b66
recording: RAI Amsterdam 7.m4a
contributor: jcpinto54
confidence: confirmed
---

# State of the Software Factory

**Dexter Horthy** — CEO and Co-Founder & HumanLayer

CEO & co-founder of HumanLayer, an agentic IDE and collaboration platform for solving hard problems in complex codebases. Coined the term 'context engineering' (April 2025); keynoted two AI Engineer conferences; his no-hype talks on agentic coding have 1M+ YouTube views. Built lunar exploration tooling for NASA researchers in high school, 10+ years in Kubernetes/infra.

*Friday 18 September 2026, 09:41, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.

## Transcript

Hi everybody. Morning. It's funny, this is actually, this talk was going to have
a much longer title, but then I found out it was 10 minutes and not 25. So, yes,
state of the software factory. What's going on? What's happening? Raise your
hand if you're writing 100% of your code with AI. Okay, good. So, we've got the
memo, the rest of you, you know, you'll get there. Leave your hand up if you're
trying pretty hard to read all of that code.

Maybe not every single line, but you're trying. Okay, good. Alright, my least
favorite part. Angie did a good job. I yap about coding agents on YouTube a lot.
I think we have over like a million views, probably 1.5 now. I'll post a link at
the end. You don't have to screenshot this. I'll put it up for longer later. but
we have a list of everything we've ever written or said about coding agents and
agentic AI and 12 factor agents and context engineering and all that stuff.

I am the CEO and co-founder of a company called Human Layer. We build a multi-
agent coding, sorry. We build a multi-player coding agent workspace. And our
goal is to help everyone be awesome at agentic coding and make it accessible to
everybody. We are building building blocks for software factory builders. and
we're really focused on an area that I think is underserved, is hard problems
and complex code bases. You have hundreds of engineers, you have hundreds of
repos, a lot of out of the box coding systems, you have to do a lot of stuff to
actually get them working in that environment. And I think anyone can really
build, it's not trivial, but you can build a ticket to PR or Slack message to PR
pipeline for all this small stuff. Our focus is really how we as engineers and
teams collaborate meaningfully on the big stuff. Because we're all trying to get
this AI coding thing working.

And there's a ton of hype and noise and FOMO on the internet that we have to cut
through. There was this whole news thing last summer of like, just fill loops,
don't even prompt anymore. At the same time, there was a report that came out in
May that, you know, since January, when we all picked up Opus 4.5 and decided
this stuff was good enough, code review quality is way down. A lot of PRs just
skip and review. Longer comments, more comments.

Incidents per PR is way up. Bugs per developer is way up. A lot of people will
say, oops, doing this is a skill issue. Raise your hand if you think that's a
skill issue. Okay, we've got a couple. I say the data says otherwise that data
and more data. We talk about Software Factory a lot. I'm going to do a quick
little history here. Because Software Factory is not an AI thing. This has been
around since 1968. the same year that we invented the word software engineering.

I'm gonna zoom to 2022 just to show you that most of what you see about software
factories and AI is actually kind of like the same thing we've been doing as
engineers for decades. So your standard circa 2022 software factory, you've got
a team, you've got some engineers, you've probably got some product managers,
you have GMs or a CEO or someone who's kind of like driving the vision, and you
come up with stuff to build and you put it in a tracker, whether that's linear
or JIRA or whatever it is.

And then someone pulls things off the list and they go build the thing. And they
maybe do some automated testing and unit tests and integration testing. They
might pull it up in a browser or poke it with curl or whatever the manual
testing steps are. Maybe pull requests. And then we run this battery of checks.
The top of the line software factory was doing hundreds of CI checks and
security scans and all this. Maybe a human pulls it down and tests it.

Probably a human reviews the code before it goes in. If anything is wrong, we
look it back to the builder. it's ready to go, we send it to prod, we have some
fancy rollouts and feature flags and canary systems to like safely get it out to
all our users. At which point they use it and they do what users love to do.
They file feature requests, they complain, they tell us what's broken and then
that goes back to the team, back onto the queue. At a certain point we decide,
you know what would be great? What would be a monitoring system that could wake
up our engineers at 3 in the morning when something breaks? Getting woken up
part sucks to be the person, but technically it is nice to be able to fix your
site because it's down to the brain of the person. But this is our software
factory. And then we get to the agentic software factory. Not much changes here.
We take this thing we had before and then we do this hype cycle on it and
everyone has one. And yes, yeah, I know. Who has a little ticket to PR agent in
their company that they're super proud of? You should get one. They're cool.
Everyone has one. You're falling behind.

No. Okay, so you take this thing, the person building the thing becomes, agent
builds the thing. So instead of a human going and doing the code, the agent does
the thing. And this part now takes minutes or hours. But this part over here
still takes hours or days. And so we bring in more agentic stuff. We have
agentic code review, agentic regression testing. And that makes the review part
faster. You catch all the small stuff. it may still be in the bottleneck.

Which brings us to this funny idea called the Lightsoft software factory, where
we just think, you know what? I'm tired of reviewing code. There's too much, I'm
burned out, all the senior engineers hate it. What if we just didn't review the
code anymore? What if we just let it go anyway? And theoretically, if you invest
into all this other stuff, you could probably get close to a place where this
would actually work. There's some challenges though.

I think my core thesis here, and I'll share some data on this, but unattended,
models will not improve or maintain your codebase quality over time. Anyone ever
seen slop at a pull request that someone tried to merge, someone tried to get
back? Yeah. A lot of slop. Models got really, really good at 2026. At solving
problems and doing interesting things. I don't think they got very good at
improving codebase quality. You can tell them to go and improve it, but then you
have to know what to tell them to do, and that means you have to understand the
codebase, which means it's not unattended, you're paying attention.

There's at least one good benchmark that proves this. But you probably have this
vibe, and if you go catch this talk from June, I gave sort of an intuition-based
explanation of how we do RL and how the benchmarks are shaped that might
incentivize cheating. Just trying to get the test to pass without really
rewarding good architecture. Because the cost of bad architecture is measured in
months and years. To do reinforcement learning, you need an oracle. You need a
verifier. You need something to say, is this code maintainable or not?

And maintainability has no fast oracle. There's no way to know, we don't find
out that the code was ugly until two months later when someone again is paged at
three in the morning trying to figure out how this made it into the code base.
Which brings me to a really cool benchmark called Slot's Code Bench, published
out of a lab in the University of Wisconsin in the US. And they basically,
instead of telling the model the whole problem to solve up front, it gives the
model the challenges, it discloses parts of the challenge in bits and makes it
write the code and then do another feature and then do another feature.

Which maps much more closely to how everyone in this room builds software. You
don't design the whole thing up front, ship it and then never touch it again.
You're constantly iterating and evolving and adding things. When they launched
this GPT 5.5 was the best model on the market, it got a 14.8%. So when you see
terminal bench scores and everyone's getting 95% and they say coding is solved,
there is a small lab in the US came up with a, at a university, came up with a
benchmark that is very much unsaturated.

There's a post-second share that is a bunch of data, you can go check it out.
The labs actually admitted this. Anthropic did a post-mortem, they were like,
yeah, we had a security issue, because we had a bunch of messy code that
accumulated over time. It was the benchmark creator, of course, who pointed out
that there was a benchmark that would prove that models create sloppy code over
time. And even Asher and Fable, you know, we, I remember in the oldest four
days, or maybe even Sonnet 3.5, you write the code, it would be a little sloppy,
and you would say, you know what, the code is slop, but that would be GPT-7's
problem.

Folks, we're in GPT-6, and I don't think we've gotten that much better at this.
I think there's a lot of reports that they're getting better at random things
like video game slop and computer use and blender demos or whatever, but that
the coding workflows, people are online begging, Please, someone produce RL
tasks about abstraction and centralization, because these models still can't do
it. Do you remember this guy? What is Steve famous for?

Gastown, which apparently is only good for building other Gastowns. What only
did he build Gastown? He went around the internet telling people for a year that
if you're still trying to read the code, you are going to fall behind. You're
not going to make it. And here he is at last week. Yeah, if you don't pay
attention to the models, they're going to write slop code. They're going to
build something so complex that they themselves can't debug it. So even Steve's
come around.

And here's the numbers, by the way, on Astra and Sol-X High. Astra is 1.5
percentage points higher than GPD 5.5. So we are getting better at writing
maintainable code or being able to maintain the code we wrote, but not as fast
as some people would have you believe. So if unattended model code gets worse
over time, then for now we should probably read the code. Which leads us to what
I like to call, well they told me I couldn't call them this, 12 factor
factories. I will come up with a better title than that.

We'll give 12-ish great practices for software factories. Number one is plan
before you build. 20 minutes, 30 minutes up front can save you hours during
review. So if we take our software factory, this is a thing teams figured out
before AI. is if it takes hours or days to build something, and if it takes
hours or days to review something, then we better get together as a team and
talk about it before we start building and talk about the architecture and do
some kind of strength planning or refinement or whatever it is, talk to people
on the team and figure it out in the hopes, in the hopes that we can carve off
some time at review time to reduce the chance we have to rework all this stuff.

Don't over-plan, though. you can easily put too much time in planning. I think
of this as like, if you YOLO two sentence prompt, there's probably a 50% chance
you're gonna be doing more prompting later, you're gonna have to rework some
stuff. If you hand write a detailed spec for five hours, maybe there's only a
10% chance that you have to do, just do a little bit of polish at the end. Or
you can go write all the code by hand for 20 hours, and then there's a 0%
chance, well, there's a 0% chance you have to rework it because of something the
agent did.

You might still have to fix some, that's why we had code review before. I think
this is in terms of expected pain, right? How likely will you have to change
something and how painful is that change? I'm not arguing with my coding agent
in the middle of building, sorry, in the middle of planning about what color the
button's gonna be because I know I can go change everything. That's not gonna be
hard. As you gotta find your way up and down this curve depending on the task
and depending on the code base and depending on the problem you're trying to
solve.

But planning is about eliminating expected pain. You should align visually. We
published this book called Show Me. There's a bunch of examples of like, this is
built in the human layer, but you can go get the open source as well. Find ways
to let them all give you information in a way that doesn't make you have to read
like walls and walls of like agentic paragraphs and prose. Talk about how you're
gonna break down your stack PRs and what word you're gonna make the changes in.

This is open source, you can go get it today. It's probably up to like 20K
installs at this point. Help agents test their work. This one's easy, give them
a browser, let them run the app, let them use curl, let them record videos,
whatever it is, like give them back pressure. If you are, anyone here writing in
TypeScript? Yeah? Okay, cool. Go get this repo right now. This is Dylan Mulroy.
It's about a hundred anti-slop rules. He literally just went through and
cataloged every anti-pattern that agents put in the TypeScript codebase and
built Oxalane rules for them.

There's also a bunch of stuff in the slop code bench paper that you can steal.
You should feed user feedback into the factory. Instead of reading support
tickets and then turning them into Jira tickets, you should just read the
support ticket PR that the agent made for you. For instance, when you get paged
at 3 in the morning, have the pager alert come with the PR the agent thinks will
fix it. Even if you can only merge 50% of those, that's a huge difference in
your throughput and you wake up, you merge the PR, you go back to bed. Let
models experiment. Give them feature flagging tooling so that they can
experiment and say, hey, here's three versions of this feature. Models, of
course, are not good at UI.

I mean, they can make beautiful UIs, but they can't really see them in the way
that you and I see them. If you want to test UIs, give three UIs to all of your
users and figure out which one people can figure out. This is how you give
people back, your model's back pressure for UI. I think loops are basically a
combination of forward pressure and back pressure. This idea of loops was a
little mystical. I think if you detangle it into how you kick off new work, what
triggers cause new work to happen, and then how you give the agent feedback
while it's working so it can heal a climate outcome without having to go to a
human, that's the core of loops, I think.

How do you get more stuff to start, whether it's schedules or automations or
webhooks? And then you should compound over time. It's only nine, it's not even
close to twelve. But anyways, compound over time, learn from past sessions, go
read what your engineer, go analyze the sessions of your team, figure out what
they're struggling with, figure out how to get that into your skills or your
memory or whatever it is. I think this does some interesting implications for
tooling. I think the new software for...

Does anyone remember the days when we used to send Git patches around on email
lists? I think Linus still does this to build the Linux kernel, but almost
everybody now uses GitHub. And so we have a centralized, and protocol is
decentralized, but we have a centralized place to do this. And now there's other
parts of the SDLC that I think are first class. So you have session tracers, you
have architecture docs, the AI native version of this Git mailing list thing is
like I'm talking to my agent and I copy something out and I paste it into Slack
with Teams. My teammate reads it, they paste it into their agent, they get an
answer, So they paste it back to me.

I paste that into my agent. Hopefully we only have to do one round of that. But
this is the idea of like, we need a place where sessions and plans and prompts
and all this stuff kind of lives in a centralized sort of system of record. This
is kind of my vision. I think this ends up, I'm gonna have to speed up a little
bit, but I know it's already really fast. Well, like I said, I'll leave a bunch
of resources, go deeper on this in some, there's like an hour long deep dive on
just this slide.

And she says take my time. So you have the compute layer which you can buy or
build where you can, oh we have some sphere pods in our Kubernetes cluster and
we're just going to run it there or you can go buy a Daytona or E2B or whatever
it is. Give your dev environment how you get your language set up, your run
time, your preview environments. Do I need to connect to internal services in
our VPC in order to even run a dev environment so an agent can test its work.
You have of course the harness which you can buy or build.

There's a ton of options here. And then there's a control plane. How do I
dispatch work? How do I collaborate on sessions and plans? Each of these layers
you can buy or build. Human Layer we're kind of working very closely in this
control plane. We also have a custom artist that we really like. We're going to
open source it in the next couple weeks. Basically Human Layer is a shared
collaborative workspace. I can see everything the team is working on. I can jump
into a team made session. I can invite people to co-prompt my session. Not even
in the cloud.

It can be running on my laptop and I can pull somebody into my Cloud Code
session. It's got sort of a Google Docs notion shaped artifact collaboration
built into the session view. And then every agent running anywhere as it's
writing code, the diffs are streaming to the cloud. So we can do code review
without waiting for a request. And it's been architected like this. We've been
building this for a year basically, mostly in secret.

So that we can do this really interesting building block stuff, this cool
architecture. I'm in the hallway, I'll go deeper on this. Come say hi, I'm Dex.
There is a list, humanlayer.dex.com slash resources for everything that's kind
of chronological and broken into eras of like, hey, we learned a new thing, and
we kind of like revised our thinking on some stuff. So thank you, if you want to
meet this week, shoot me an email. Go check out the resources.

Thank you all so much for your energy.
