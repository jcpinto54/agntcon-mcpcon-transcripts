---
title: "MCP and the Era of Connectivity"
speakers: [David Soria Parra]
day: thu
date: 2026-09-17
start: "09:18"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 37aeff733c2487b258d861719dcf8f21
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=1917s
contributor: jcpinto54
---

# MCP and the Era of Connectivity

**David Soria Parra** — Co-creator of MCP & Anthropic

Member of Technical Staff at Anthropic and co-creator of the Model Context Protocol. Former PHP core developer (shipped PHP 5.4/5.5), contributor to Git and Mercurial, then engineering leader at Meta in London (static analysis, simulation-based testing). Joined Anthropic in 2024.

*Thursday 17 September 2026, 09:18, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 0:31:57](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=1917s)), not an attendee's recording.

## Transcript

Good morning, everyone. I'm looking into this room, actually, I think one of my
very first conferences ever was like 20 years ago in one of these rooms. It's
quite cool to be back here, but this time around on the keynote stage. I want to
talk to you about what I think is one of the most important developments at the
moment in the industry. And that is that I think we're entering an era where
connectivity and connecting systems together is becoming the single most
important part or thing to do in agentic system.

Some of you might have seen a graph like this. This is an overview of how good
models have become over the years in doing long horizon tasks. So how often do
you have to interject a model, correct it to get a task done. And it's usually
measured in how many hours or weeks of human labor a model can do autonomously.
One of the interesting bits that I think it's easy to forget, particularly these
days, is how far we have come and how fast this improvement in this space is.

If you think about a year ago, or maybe even two years ago, two years ago when
MCP was, when we just started to create MCP, tool calling was barely a thing. It
barely worked. Models had to be constantly corrected. You basically got like one
or two turns and then you had to like really correct the model again. A year
later, I think we're still remembering the time where you have to go every now
and then and say the model, okay, don't do this.

You're going the wrong way. Go over there. This is how you should do it. But I
think it's quickly become to the point where nowadays we can run really multi,
like really long, complicated tasks that would maybe take us days to do
ourselves quite autonomously with the model. And the interesting part in all of
this is that as the models are getting increasingly better to autonomously do
tasks, this has not really stopped to, this improvement has not really stopped.

And so we're seeing quite a linear improvement here that I think will continue
for a long time. And the interesting part with that is that I think this has
fundamentally changed about the way we are building agents and agentic system.
That coding agents were the first agents that we were writing on using in
production effectively is not a surprise because if you think about it, coding
is one of these, or programming is one of these things where you can use
automated testing, compiler output to steer back the model on the right path.

And so you have a lot of the autonomous steering principles put into coding. But
with the increasing capabilities of the models, we are entering an era where
this is no longer necessary. And with that, we are changing what we are working
on and the kind of agents we can build away from coding agents towards more
general knowledge agents, like doing the job of general knowledge workers. And
we're seeing agents to start making incredible advances in scientific
discoveries, mathematics, and other pieces, which I'm sure you have followed
over the last few months.

And part of that means that I think, while the model capabilities are important,
one thing that becomes increasingly important is in this kind of agentic
scenarios, like science, general knowledge work, like helping with accounting,
with, I don't know, financial advisory, whatever that might be, one thing that
is increasingly important is connectivity as part of this. Because while we as
software engineers maybe require compiler output that can be done easily on a
CLI, an average knowledge worker or a scientist really needs connectivity to
external systems like Google Drive or a scientific database.

And for those, connectivity become increasingly important to the point that I
think giving the models effectively hands into the world is the single most
important thing we need to think about at the moment. And we see that the
industry is following this by an increased amount of usage of connectivity
patterns in the industry. Claude has just reached over a billion MCP tool calls
in its lifetime, which is quite an interesting number and a number that is
increasing day to day at a faster and faster pace.

Similarly, we're seeing over 500 million downloads of our tier one SDKs up from
like, I don't even know what the number was a year ago, significantly lower.
We're seeing a similar pattern in other companies in the industry. Vercel posted
recently that they have a 6x increase of MCP traffic over the last three months.
Resend has a 10x increase. Some of our competitors have posted quite publicly
about their increase in MCP usage.

And so you're seeing these connectivity patterns becoming more and more
important in the industry. And as part of this, we then, of course, as we're
seeing more and more people use MCP in the world and use connectivity patterns
around MCP, are starting to go and have to adapt to the usage pattern, all of
you come up, and change the protocol with it. And so if you look back in 2024,
just after the launch, everything was pretty simple.

We had standard I/O servers and keep things mostly quite simple. We added 2025,
we added remotes, We added authorization. The end of last year, we saw really
the beginning of MCP application, but then most importantly, just two months
ago, we had probably one of the most important MCP releases ever, the
2026-07-28, which is a very complicated way to say we introduced statelessness,
which I think helps a lot of the hyperscalers, people that run MCP at scale, to
really be way more efficient and scale MCP servers quite simply up.

And again, the stateless core is one of the key pieces that I'm sure you hear a
lot about this conference, that it has, it's effectively HTTP with a few little
additions that are required in the agentic systems or in the agentic
environments. There's a specific pattern called MRTR that you will hear about.
But all of this is just to say that we are adapting MCP more and more towards
the general use case of highly scalable connectivity patterns for agentic
communication.

That is, yeah, mostly leaned on the patterns we have learned over the last
years. But then beyond that, I think MCP today is in a pretty reasonable spot.
You can get tool calls done at a good scale. You have a bunch of other abilities
like elicitations and resources. But there's still a lot of things that I think
we're seeing slowly coming up that now we as an MCP project and an MCP community
are going to focus on over the next years.

And there's three main things that over the next one year we are focusing on and
which I want to quickly guide you through what our roadmap has in stake
effectively. The number one thing is agentic messaging. One of the pieces that
we're seeing increasingly is that people not just wanna call tools, but they
wanna call effectively full-on agents from an MCP client like Claude.ai. And so
one thing that we wanna do is we have this concept called MCP tasks, which is an
experimental extension to the protocol that we will see a lot of adoption,
hopefully over the next two or three months in the major platforms that allow
for agentic messaging primitives.

And so we really want to push for this type of agentic messaging in MCP and make
it the default protocol for connecting clients to agents. Similarly, we need an
additional set of rich semantics that we want to give to you. And one of the
most important and most exciting things or I'm most excited about, is providing
skills over MCP. So skills are these like text files, the markdown files. We
want to combine them as MCP server and serve them directly, allowing you to give
additional instructions for how to use your MCP server or build complicated MCP
skills delivery systems via MCP.

And I think that has a lot of potential that also I think there will be some
talks around this topic on this conference. So listen to that. I think it's one
of the most exciting things and one of the things that enable MCP server authors
the most. And last but not least, you cannot talk about agents without
authorization identity. It's one of the most important topics. It can be quite
boring, but I think it's quite important. And so there's a lot of work that
we're going to do to improve MCP's authorization identity story over the next
year.

And as I'm running out of time, I just quickly want to jump on two things that I
think are important for conferences like this and what I think not just we as
the MCP community can do but also people like you can do in this ecosystem. And
the number one thing that I think we all should do always to really build an
amazing ecosystem to build to help the world move towards a more and more
increasing agentic environment system is building amazing servers, building
amazing clients, building amazing infrastructure for MCP servers or for MCP and
these kind of connectivity parts in general. And that means building clients
that are supporting all the different features, elicitation, tasks, MCP apps,
but also building servers that using these rich semantics to provide not just
simple tools but like provide users with amazing MCP servers and there's a big
difference between using a mediocre MCP server and a good MCP server. Second I
think tell us in environments like this, conferences like this where we all come
together in person it's a great moment to exchange what makes, what are things
that are difficult for you, what are things that you would love to see and
exchange some of the unique perspective that you might have from your work with
people like us who built these protocols.

And so just tell me, what are your production problem? Where do we get things
wrong? What are the things you would love to see changed? And last but not
least, MCP is an open community. And I'm a person who's been in open source for
over 20 years, and I truly mean this. So there's a Discord server, that are
working in interest groups that are open to everyone. So if you have an
interesting topic that you wanna bring up, if you have a thing that you wanna
drive in the community, the protocol is not just two people, three people making
all the changes.

It's people like you all that come, join the community and help steer the
direction of what is effectively the default standard for agentic connectivity.
With that, I hope you have an amazing conference and you can talk to me after
the stage, on the hallway. I'm super excited for the next two days and what's,
everything's at stake. So thank you so much.
