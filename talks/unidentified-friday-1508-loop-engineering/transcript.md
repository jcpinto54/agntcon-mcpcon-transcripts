---
title: "Unidentified talk — Friday 15:08 (harness and loop engineering)"
speakers: []
day: fri
date: 2026-09-18
start: "15:08"
room: unknown
track: unknown
kind: talk
session_id:
recording: RAI Amsterdam 13.m4a
contributor: jcpinto54
confidence: unidentified
---

# Unidentified talk — Friday 15:08

**Speaker unknown**

This recording has not been matched to a session. Its timestamp places it in
the Friday 15:00–15:25 block, but none of the five talks scheduled then is a
clear fit, and the speaker never introduces themselves on the recording. The
content is about harness and loop engineering: designing the system around a
coding agent (instructions, sub-agents, memory policy, skills), wrapping it in
an automated act-and-check loop, keeping evaluation *outside* that loop so the
agent cannot reward-hack it, and watching cost per accepted change as the
signal for diminishing returns. The worked example is an application that
converts 2D engineering drawings into 3D CAD models.

**If you were at this session and recognise it, please open a PR correcting the
attribution.** It is filed unidentified rather than guessed, because a wrong
attribution is worse than an open question.

*Friday 18 September 2026, approximately 15:08 — room unknown*

> Transcribed with Whisper large-v3. No name corrections could be applied,
> since the speaker is unknown.
> *[Recording begins mid-talk.]*

## Transcript

All the way to 3D CAD. And one really funny thing was when we were building this
application, we were kind of stuck at some point because this is an area, it
wasn't possible yet. I mean, this is how fast things are going in the world of
AI at the moment. It wasn't possible to construct a 2D drawing to a 3D CAD model
only months ago. So we're interviewing engineers and we saw that they actually
had this PDF on the left and a 3D CAD program on the right.

And they were iteratively reconstructing the drawing, making mistakes,
correcting themselves, essentially building this spatial world model of this
drawing. So this is exactly what we let the AI agents do. And it works. And here
you see an example where it still costs some money, but currently we're training
an open source model in the Dutch supercluster, and it will be possible for
almost zero. Now, I'm not here to talk about my application, but although I'm a
little proud of it that we managed to do it, so I'm happy to show it, but I'm
here to talk about the system that we designed that built the application.

Because me and my team, and you must have heard this phrase before in the last
couple of days, did not write a single line of code for this application. But we
did design the system that built the application. Sorry, I have a little cold. I
am still human after all. So we came from this in a few years time, right? All
the way from like from prompt engineering to context engineering. And now it's
all about designing the harness and executing the loop.

But what do we mean when we say harness? Doesn't it can mean different things.
But in this particular example, it's the harness that I can change. And there's
a few things I can't change. In this case, the foundational and the outer
harness, like the coding environment, say, Cloud Code or Codex or whatnot. But
the part inside that I can change is just code, is just text. The instructions,
cloud.md, agents.md, the sub-agents, their particular roles, the way they
coordinate, the context, and I think that is very important, the memory policy.

There is no learning without memory. And skills, functions, you know, it's a lot
of knobs. It's a lot of things that we can adjust and quite frankly we can
design the system but in reality we're already letting AI agents build these
harnesses as well. So the point here is that giving a task and it matters how
this whole system is set up. If the system would have been set up differently
then your output would have probably been different too.

Then the loop around it, because we're trying to automate that as well, right?
We have an automatic cycle. It's a system that acts, it checks the results, and
it does that not internally, because that would be a very bad idea, because the
more capable models become, the better they become at reward hacking. So you
have to make sure that if you design a loop around the harness that your
evaluation, your evo, is something that is outside of the system.

It can be an agent powered evaluation mechanism but it can be deterministic too.
The point is that it will provide feedback to your harness and it does it in
such a way that it saves files to your machine and those files become the input
to the next iteration of the loop. So it can start with a fresh context window.
Now, and one very important thing or one learning. I mean, this is all very
recent. I think the term loop engineering was coined in 20, well in 2026 in
June, if I'm right.

And but one thing that I found very useful is the cost per accepted change,
right? So there is one iteration of the loop and there is an EVAL, which is
essentially a proxy of your progress towards your intended goal. And that will
cost something. If that cost is rising and your progress is stalling, then
you're hitting a point of diminishing returns and your loop might still look
very busy, but your credit card is burning and it's not what you want, right?

So, when that happens, our team and I, we just go, what is wrong, what is this
harness maybe missing, because again, this harness is just code and text. And
also, we can start thinking about what costs are, because, you know, its cost
can be monetary, right? It's just euros. if my client has a six-figure budget
and time is an issue then cost might be expressed differently right then it can
then it can be sensible to spend a lot of tokens on it so i'll come back to this
later um so what we tried uh what we started experimenting with and we're
getting some very we got some very cool results, I think it's rather exciting,
is instead of us thinking about what could be different in this harness and then
try one new version of this harness, what if we have another system, a meta-
agent, so to say.

It can be one agent, it can be a more complex system that interprets all the
signals that are getting produced by your coding harness. and this agent creates
not one new version of the harness but three or and many versions of the harness
in one example the a we can change the instructions we can change the order of
work or we add to or remove it to arbitrary the point is we can let it do the
same work and we compare it to the original harness so then we have an outcome
we have a cost and the cost can be interpreted in you know whatever is important
to you at that moment let me make that more clear so we have the original
harness then we have three new versions and we store them in a database see them
as snapshots of your coding harness right your coding environment and we let
them do the same task we measure against the evaluation mechanism and then at
some point we see that a certain version produces the best result in the sense
that we find important.

We store this harness and we store all the variations too, because they might
come in handy at another point. Let's say that we're now doing another project
and we have all these harnesses with the evaluation results and all the traces,
etc. Now you could imagine that what worked for a problem in one project could
work for a problem in another project. Then becomes the problem, let me put one
concrete example here. So this actually happened in the project. We had one
harness and it created pipeline say version A, right? And it had the ability, it
gave it the ability to crop, to make crops of the technical drawings to zoom in
on certain details. But what it didn't know is that there that there were
certain symbols, very small symbols, which is actually very important, but this
was knowledge not in the harness at that time.

So the evos came back and it stalled at one point. And when that happens, that
gives you a signal, but it doesn't tell you what is wrong or what could be
improved. So we explored many, many different ways and we came on this database
of symbols. So now the harness knew that it could give our pipeline a way to
loop things up. And this then became the policy in the next one. But then if we
have something that works and we have a thousand things, a thousand versions in
this database, then we have a problem in the next situation.

How do we find it? do we consider something that is important and yeah how do we
how do we find it they all think it's about more detail but that's not how
memory works you recall with a phoenix anything real should be a mess i can show
you So our memory, our system of recall works very different than the systems
that we build right nowadays. But we can learn from it. And for example here, we
have the exact same situation and the one agent, whether it be a human agent or
an AI agent, the one agent looks at it and it knows that, you know, its
understanding of costs, right, is that money isn't a problem but there's very
little time or money isn't a problem and there's quite enough time.

So you can, the system can be, the agent can be curious, right. is an expensive
thing learning is expensive and but it can reap great rewards and the other is
in a situation where it knows that there is a diff it has a different sense of
cost maybe the project needs to be delivered and there's no room for exploration
anymore just things needs to be checked So, in the same situation there can be
emotions, right? In a human situation I can have a curiosity and at the same
time I can have some concern about things.

I can also feel some urgency to deliver a project. And I'm saying this because I
think that not that we should give an AI or think that an AI has emotions, but
these states of mind can be considered a proxy for what we consider to be cost.
And I think nowadays it's still when you give an AI coding agent a goal, it is
often very little aware of what is important to you. It just tries to complete
the goal against some evil. think that this is something worth paying more
attention to. So when in your project you gain experience and you have a policy
to improve and create variants and select the best ones, then we can change the
harness and get better results next time so a few things to take from this talk
from our experience of building and let you some methods outlift the task and
think deeply about what calls mean because it's just a lot more than tokens and
yeah that's competing perspective shape the next move and yeah learn and one
last one i think you know things are changing so fast so always happy to hear
what you guys are working on if you want to connect with me you can do it like
so and um yeah for now thank you for your scarce resources of time and attention
hope it was worth it Thank you.
