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
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=2392s
contributor: jcpinto54
---

# State of the Software Factory

**Dexter Horthy** — CEO and Co-Founder & HumanLayer

CEO & co-founder of HumanLayer, an agentic IDE and collaboration platform for solving hard problems in complex codebases. Coined the term 'context engineering' (April 2025); keynoted two AI Engineer conferences; his no-hype talks on agentic coding have 1M+ YouTube views. Built lunar exploration tooling for NASA researchers in high school, 10+ years in Kubernetes/infra.

*Friday 18 September 2026, 09:41, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 0:39:52](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=2392s)), not an attendee's recording.

## Transcript

Hi, everybody. Good morning. It's funny. This talk was going to have a much
longer title, but then I found out it was 10 minutes and not 25. So yes, state
of the software factory. What's going on? What's happening? Raise your hand if
you're writing 100% of your code with AI. Okay, good. Some of you got the memo.
The rest of you, you know, you'll get there. Leave your hand up if you're trying
pretty hard to read all of that code.

Maybe not every single line, but you're trying. Okay, good. All right, my least
favorite part. Angie did a good job. I yap about coding agents on YouTube a lot.
I think we have over like a million views, probably 1.5 now. I'll post a link at
the end. You don't have to screenshot this. I'll put it up for longer later. But
we have a list of everything we've ever written or said about coding agents and
agentic AI and 12-factor agents and context engineering and all that stuff.

I am the CEO and co-founder of a company called HumanLayer. We build a multi-
agent coding, sorry. We build a multiplayer coding agent workspace. And our goal
is to help everyone be awesome at agentic coding and make it accessible to
everybody. We are building building blocks for software factory builders. And
we're really focused on an area that I think is underserved, is hard problems
and complex code bases. You have hundreds of engineers, you have hundreds of
repos, a lot of out of the box coding systems.

You have to do a lot of stuff to actually get them working in that environment.
And I think anyone can really build, it's not trivial, but you can build a
ticket to PR or a Slack message to PR pipeline for the small stuff. Our focus is
really like, how do we as engineers and teams collaborate meaningfully on the
big stuff? Because we're all trying to get this AI coding thing working. And
there's a ton of hype and noise and FOMO on the internet that we have to cut
through.

There was this whole loops thing last summer of just build loops, don't even
prompt anymore. At the same time, there was a report that came out in May that
since January when we all picked up Opus 4.5 and decided this stuff was good
enough, code review quality is way down. A lot of PR is just skipping review,
longer comments, more comments. Incidents per PR is way up. Bugs per developer
is way up. A lot of people will say, do you think this is a skill issue?

Raise your hand if you think that's a skill issue. Okay, we got a couple. Nice.
I say the data says otherwise, that data and more data. I wanna do, we talk
about Software Factory a lot, I wanna do like a quick little history here. Cause
Software Factory is not an AI thing. This has been around since 1968, the same
year that we invented the word software engineering. I'm gonna zoom to 2022 just
to show you that most of what you see about software factories and AI is
actually kind of like the same thing we've been doing as engineers for decades.

So your standard circa 2022 Software Factory, You've got a team, you've got some
engineers, you've probably got some product managers, you have GMs or a CEO or
someone who's kind of like driving the vision, and you come up with stuff to
build and you put it in a tracker, whether that's Linear or JIRA or Beads or
whatever it is, and then someone pulls things off the list and they go build the
thing. And they maybe do some automated testing and unit tests and integration
testing, they might pull it up in a browser or poke it with curl or whatever the
manual testing steps are, make a pull request.

And then we run this battery of checks, you know, the top of the line software
factory was doing, hundreds of CI checks and security scans and all of this.
Maybe a human pulls it down and tests it. Probably a human reviews the code
before it goes in. If anything is wrong, we loop it back to the builder. If it's
ready to go, we send it to prod. We have some fancy rollouts and feature flags
and canary systems to like safely get it out to all our users, at which point
they use it and they do what users love to do.

They file feature requests, they complain, they tell us what's broken, and then
that goes back to the team, back onto the queue. At a certain point we decide,
you know what would be great? What if we had a monitoring system that could wake
up our engineers at three in the morning when something breaks? The getting
woken up part sucks if you're the person, but technically it is nice to be able
to fix your site because it's down at three in the morning.

But this is our software factory. And then we get to the agentic software
factory. Not much changes here. We take this thing we had before, and then we do
this hype cycle on it, and everyone has one, and yes, yeah, no, you did. Who has
a little ticket to PR agent in their company that they're super proud of. Nope,
you should get one, they're cool. Everyone has one, you're falling behind. No.
Okay, so you take this thing, the person building the thing becomes, agent
builds the thing.

So instead of a human going and doing the code, the agent does the thing. And
this part now takes minutes or hours, but this part over here still takes hours
or days. And so we bring in more agentic stuff. We have agentic code review,
agentic regression testing, And that makes the review part faster. You catch all
the small stuff, but it may still be the bottleneck. Which brings us to this
funny idea called the Lights-Off Software Factory, where we just say, you know
what?

I'm tired of reviewing code. There's too much, I'm burned out. All the senior
engineers hate it. What if we just didn't review the code anymore? What if we
just let it go in? And theoretically, if you invest into all this other stuff,
you could probably get close to a place where this would actually work. There's
some challenges though. I think my core thesis here, and I'll share some data on
this, but unattended, models will not improve or maintain your codebase quality
over time.

Anyone ever seen slop in a pull request that someone tried to merge, someone
tried to get back? Yeah, a lot of slop. Models got really, really good in 2026
at solving problems and doing interesting things. I don't think they got very
good at improving codebase quality. You could tell them to go improve it, but
then you have to know what to tell them to do, and that means you have to
understand the code base, which means it's not unattended, you're paying
attention.

There's at least one good benchmark that proves this, but you probably have this
vibe, and if you go catch this talk from June, I gave sort of a intuition-based
explanation of how we do RL and how the benchmarks are shaped that might
incentivize sort of cheating, just trying to get the test to pass without really
rewarding good architecture, because the cost of bad architecture is measured in
months and years, and to do reinforcement learning, you need an oracle, you need
a verifier, you need something to say is this code maintainable or not. And
maintainability has no fast oracle. There's no way to know. We don't find out
that the code was ugly until two months later when someone, again, is paged at 3
in the morning trying to figure out how this made it into the code base. Which
brings me to a really cool benchmark called SlopCodeBench, published out of a
lab in the University of Wisconsin in the U.S. And they basically, instead of
telling the model the whole problem to solve up front, it gives the model the
challenges, it discloses parts of the challenge in bits and makes it write the
code and then do another feature and then do another feature, which maps much
more closely to how everyone in this room builds software. You don't design the
whole thing up front, ship it and never touch it again. You're constantly
iterating and evolving and adding things. When they launched this, GPT 5.5 was
the best model on the market. It got a 14.8%. So when you see Terminal-Bench
scores and everyone's getting 95% of this coding is solved.

There is a small lab in the U.S. came up with a, at a university, came up with a
benchmark that is very much unsaturated. There's a post I can share that is a
bunch of data. You can go check it out. The labs actually admitted this.
Anthropic did a post-mortem. They're like, yeah, we had a security issue because
we had a bunch of messy code that accumulated over time, to which the benchmark
creator, of course, pointed out that there was a benchmark that would prove that
models create sloppy code over time.

And even Astra and Fable, you know, we, I remember in the Opus 4 days, or maybe
even Sonnet 3.5, you would write the code and it would be a little sloppy and
you would say, you know what, the code is slop, but that will be GPT-7's
problem. Folks, we're at GPT-6 and I don't think we've gotten that much better
at this. I think there's a lot of reports that like they're getting better at
random things like video game slop and computer use and like Blender demos or
whatever, but that the coding workflows, there's like, people are online begging
like, please, someone produce RL tasks about abstraction and centralization
because these models still can't do it. Does anyone remember this guy? Steve,
what is Steve famous for? Gas Town, which apparently is only good for building
other Gas Towns. But not only did he build Gas Town, he went around the Internet
telling people for a year that if you're still trying to read the code, you are
going to fall behind. You're not going to make it. And here he is last week.
Yeah, if you don't pay attention to the models, they're going to write slop
code. They're going to build something so complex that they themselves can't
debug it. So even Steve has come around.

And here's the numbers, by the way, on Astra and Sol X High. Astra is 1.5
percentage points higher than GPT 5.5. So we are getting better at writing
maintainable code or being able to maintain the code we wrote, but not as fast
as some people would have you believe. So if unattended model code gets worse
over time, then for now we should probably read the code, which leads us to what
I like to call, well, they told me I couldn't call it this, but 12 factor
factories.

I will come up with a better title than that. But we have 12-ish great practices
for software factories. Number one is plan before you build. 20 minutes, 30
minutes up front can save you hours during review. So we take our software
factory. This is a team, this is a thing teams figured out before AI, is if it
takes hours or days to build something, and if it takes hours or days to review
something, then we better get together as a team and talk about it before we
start building, and talk about the architecture, and do some kind of sprint
planning or refinement or whatever it is, talk to people on the team and figure
it out in the hopes, in the hopes that we can carve off some time at review time
reduce the chance we have to rework all this stuff.

Don't over plan, though. You can easily put too much time planning. I think of
this as like if you YOLO a two-sentence prompt, there's probably a 50% chance
you're going to be doing more prompting later. You're going to have to rework
some stuff. If you handwrite a detailed spec for five hours, maybe there's only
a 10% chance that you have to do a little bit of polish at the end. Or you can
go write all the code by hand for 20 hours and then there's a 0% chance, well,
This is 0% chance you have to rework it because of something the agent did.

You might still have to fix stuff. This is why we had code review before. And I
think of this in terms of expected pain, right? How likely will you have to
change something and how painful is that change? I'm not arguing with my coding
agent in the middle of building. Sorry, in the middle of planning about what
color the button is going to be because I know I can go change that later.
That's not going to be hard. As you're going to find your way up and down this
curve depending on the task and depending on the code base and depending on the
problem you're trying to solve. But planning is about eliminating expected pain.
You should align visually. We published a skill called Show Me. There's a bunch
of examples of, like, this is built into HumanLayer, but you can go get the open
source as well. Find ways to let the model give you information in a way that
doesn't make you have to read, like, walls and walls of, like, agentic
paragraphs and prose. Talk about how you're going to break down your stack PRs
and what order you're going to make the changes in. This is open source. You can
go get it today. It's probably up to like 20K installs at this point.

Help agents test their work. This one's easy. Give them a browser, let them run
the app, let them use curl, let them record videos, whatever it is, like give
them back pressure. If you are, anyone here writing in TypeScript? Yeah, okay,
cool. Go get this repo right now. This is Dillon Mulroy. There's about 100 anti-
slop rules. He literally just like went through and cataloged every anti-pattern
that agents put in the TypeScript code base and built Oxlint rules for them.

There's also a bunch of stuff in the SlopCodeBench paper that you can steal. You
should feed user feedback into the factory. Instead of reading support tickets
and then turning them into JIRA tickets, you should just read the support ticket
and the PR that the agent made for you. For incidents, when you get paged at
three in the morning, like have the pager alert come with the PR the agent
thinks will fix it. Even if you can only merge 50% of those, that's a huge
difference in your throughput and you wake up, you merge the PR, you go back to
bed.

Let models experiment. Give them feature flagging tooling so that they can
experiment and say, hey, here's three versions of this feature. Models, of
course, are not good at UI. I mean, they can make beautiful UIs, but they can't
really see them in the way that you and I see them. But if you wanna test UIs,
give three UIs to all of your users and figure out which one people can figure
out. This is how you give people back, your models back pressure for UI.

I think loops are basically a combination of forward pressure and back pressure.
This idea of loops was a little mystical. I think if you detangle it into like,
how do you kick off new work? What triggers cause new work to happen? And then
how do you give the agent feedback while it's working so it can hill climb an
outcome without having to go to a human? That's like the core of loops, I think,
is how do you get more stuff to start, whether it's schedules or automations or
webhooks.

And then you should compound over time. I think it's only nine, it's not even
close to 12. But anyways, compound over time, learn from past sessions, go read
what your engineer, go analyze the sessions of your team, figure out what
they're struggling with, figure out how to get that into your skills or your
memory or whatever it is. I think this has some interesting implications for
tooling. I think the new software forge. Does anyone remember the days when we
used to send Git patches around on email lists?

I think Linus still does this to build the Linux kernel, but almost everybody
now uses GitHub. And so we have a centralized. The protocol is decentralized,
but we have a centralized place to do this. And now there's other parts of the
SDLC that I think are first class. So you have session traces. You have
architecture docs. The AI native version of this Git mailing list thing is like
I'm talking to my agent, and I copy something out and I paste it into Slack or
Teams. My teammate reads it. They paste it into their agent.

They get an answer. They paste it back to me. I paste that into my agent.
Hopefully, we only have to do one round of that. But this is the idea of like we
need a place where sessions and plans and prompts and all this stuff kind of
lives in a centralized sort of system of record. This is kind of my vision. I
think this ends up, I'm going to have to speed up a little bit, but I know, I
know it's already really fast. We'll, like I said, I'll link a bunch of
resources. We go deeper on this. There's an hour long deep dive on this slide.
Angie says take my time.

So you have the compute layer which you can buy or build. Where, you know, you
can oh, we have some spare pods in our Kubernetes cluster. And we're just going
to run agents there. Or you can go buy Daytona or whatever it is. You have your
dev environment. How do you get your language set up, your runtime, your preview
environments. Do I need to connect to internal services in our VPC in order to
even run a dev environment so an agent can test its work.

You have, of course, the harness which you can buy or build. There's a ton of
options here. And then there's a control plane where you're like, how do I
dispatch work? How do I collaborate on sessions and plans? Each of these layers
you can buy or build. HumanLayer, we're kind of working very closely in this
control plane. We also have a custom harness that we really like. We're going to
open source it in the next couple weeks.

Basically HumanLayer is a shared collaborative workspace. I can see everything
my team is working on. I can jump into a teammate session. I can invite people
to co-prompt my session, not even in the cloud. Like, it can be running on my
laptop, and I can pull somebody into my Claude Code session. It's got sort of a
Google Docs Notion-shaped artifact collaboration built into the session view.
And then every agent running anywhere, as it's writing code, the diffs are
streaming to the cloud.

So we can do code review without waiting for pull requests. And it's been
architected like this. We've been doing this for a year, basically, mostly in
secret, so that we can do these really interesting building block stuff, this
cool architecture. Again, come find me in the hallway, we can go deeper on this.
Come say hi, I'm Dex. There is a list, humanlayer.dev slash resources for
everything that's kind of chronological and broken into eras of like, hey, we
learned a new thing and we kind of like revised our thinking on some stuff.

So thank you, if you want to meet this week, shoot me an email, go check out the
resources. Thank you all so much for your energy.
