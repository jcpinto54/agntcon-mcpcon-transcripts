---
title: "Getting to Stateless MCP: In Production"
speakers: [Shaun Smith]
day: fri
date: 2026-09-18
start: "09:19"
room: Auditorium
track: Keynotes
kind: keynote
session_id: c1f445360eeb9275ef5515e19fc8f313
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=1018s
contributor: jcpinto54
---

# Getting to Stateless MCP: In Production

**Shaun Smith** — MCP and Transport Working Group Maintainer & Hugging Face

Works on Open Source Agents and MCP at Hugging Face; MCP maintainer, Transport Working Group maintainer and community moderator. Author of fast-agent — a coding agent, toolbox and reference platform for MCP.

*Friday 18 September 2026, 09:19, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 0:16:58](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=1018s)), not an attendee's recording.

## Transcript

My name is Shaun. I look after MCP at Hugging Face, and I'm one of the lead
maintainers in the transports working group. Before we had Claude Code, agent
skills, agents.md files, OpenClaw, or any of those things, the way that we would
actually work with MCP servers in the early days was by downloading software
from NPM or GitHub and installing it on our local machine and editing a JSON
file in Claude desktop and starting it and connecting to the MCP server.

And a lot of the assumptions around how MCP was working and designed were framed
around another protocol like LSP, which is a kind of very good way of extending
IDEs and adding functionality to clients. And the kind of relationship that
these things have is a one-to-one relationship between the client and the
server. And although there was a remote transport supplied in that initial
launch version of It wasn't really practical to deploy, particularly not on the
public internet.

So the March release introduced a new transport Streamable HTTP, and that solved
a huge number of problems. It did a very, very good job of simulating that one-
to-one client-to-server communication. The thing that it really did, though, was
help improve user experience. A single URL could be added to your agent tools or
to your cloud configuration, and you get authenticated access to extend and
build all of these tools that you need.

And we launched the Hugging Face MCP server around about the same time that
Transport was launched. And then shortly after, Anthropic added connectors to
the Claude application and the remote transport, and we saw traffic go through
the roof. So, you know, so a great leap forward, but there was still more work
to be done. Working with MCP remotely in production had some additional
challenges, because the assumptions around that one-to-one communication don't
necessarily hold true at scale.

So there were some practical challenges that we needed to overcome. One of the
main things was there was a concept of sessions, but they weren't particularly
well understood as to where they begin and end. And it also caused there to be
shared state between the client and the server. So certain features like
elicitations, where the server wants to prompt the user to answer a question,
needed quite careful orchestration and management if you wanted to work with
them easily.

And they were prone to timeouts. So if you wanted to ask the user whether they
wanted to start an expensive sandbox job, if they didn't answer quickly, you
would often find that the connection would break. And so there was a number of
kind of fragile things that caused some challenges. The other thing that we
found was that if we looked at our traffic in June, for every tool call that we
got, there were 73 other protocol messages.

So MCP was quite a chatty protocol. And the fact is that a lot of those other
messages weren't actually necessary to actually execute the tool call itself. So
having looked at these challenges, the MCP community actually came together. So
very, very strong individual contributors joined the transports working group.
We had very, very good representation also from large companies like Anthropic
and Microsoft. And led by Kurtis Van Gent at Google, we kind of worked all
together to come up with a set of proposals for improving and enhancing the MCP
transports.

And that culminated in the July release this year, the stateless MCP version, as
it's known. The biggest change to the protocol yet, and the first time where
we've actually changed the way that the standard I.O. and HTTP transports work
together. Some big changes. We've removed the lifecycle handshakes and
initialize calls that kind of do that initial pairing of the client and the
server. They're actually not necessary. Repeated calls can be avoided because
we've built caching into the protocol itself now.

So if you've got a fairly static tool list, you don't need to keep going
backwards and forwards, kind of finding out what the latest state is. And we've
changed the design pattern for elicitations so that we don't have this
complicated orchestration between client and server to try and marry things up.
Another challenge that we were finding particularly at scale is because MCP is a
remote procedure call style protocol and a lot of important information is
tucked inside JSON messages, it's not visible to your HTTP infrastructure.

So traditional routing mechanisms can't kind of see what they need to do. As
part of the launch as well, we've added a deprecation policy and roots and
sampling have been marked for deprecation. They still work in the new version of
the protocol, so nothing will break immediately. But if you are using those
features, now is a good time to start planning on how to migrate away from them
and find alternatives, which should be quite straightforward. With this number
of changes, the protocol is quite a big leap to implement. But fortunately, the
SDK maintainers have put a huge amount of work into making sure that migration
to the new version is as simple as possible. So, if we look... So, I think...
How long have we been... Launched now? Seven, eight weeks? So, if we look at the
traffic that we've seen over the last seven or eight weeks, what we've now found
is that over 50% of our tool calls are now based on the new protocol. So I think
that invites a short round of applause to the SDK maintainers who have...

Yeah, seriously, it's... Yeah, if you look at the wire format and the fact that
this migration is possible, it's just absolutely phenomenal what they've been
able to achieve. Okay, so looking a little bit behind the scenes, Anthropic have
changed their Claude product set and almost completed the migration. OpenAI's
products have also started migration. They've not fully cut over yet. There have
been some kind of ups and downs in the traffic. And our own chat product upon
which a product of ours called ML Intern is based also generates a huge amount
of traffic so you can use that to train models and look at data sets and those
kind of things. So, that's good. And the other thing is there's a very long tale
of other clients which have started to begin the migration. A couple of big ones
that we're still waiting for. But, yeah, migration is going well. Now is a very,
very good time, if you haven't already, to start thinking about how to do that
migration.

So deployment tips. What do you actually need to do to work with this? So one of
the first things to note is that there are major SDK version bumps. So if you've
kind of got an ordinary build that you're running, now is a very, very good time
to start thinking, right, I actually need to do this version bump. With the
skills and agents, the migration should be fairly straightforward. As you do
that, when you get the chance, there are features in the protocol that you
should start to think about quite carefully. You don't need to do this all at
once, but certainly if you are able to take advantage of list caching, you you
should start switching that on. And consider, do I actually need to use the
discovery endpoints to look at the server before I actually make that tool list
call? A lot of the philosophy behind the new transport design is to be
optimistic, right? So you make the call and then handle the error gracefully if
it occurs, rather than pessimistic, which is this kind of very tightly coupled
communication. At Hugging Face, we're looking very forward to some of the
opportunities that this opens up as well. So, over time, what we've found is
that as agents and models become a lot more capable, people are doing more and
more advanced things.

And so, obviously, we have access to models and data sets and storage buckets
and research papers and people use the MCP server to access those things. But
one of the other things that we also have is people that want to process large,
huge amounts of data in datasets, multi-gigabyte amounts of data. And what MCP
lets us do is to move that compute and move the access to the storage where it
actually is seamlessly. So rather than if I want to process a very large
dataset, rather than downloading it onto my desktop or laptop and processing it
there or having other things, MCP kind of lets us move that compute and move
that execution to where it's most efficient to be done. And with the new HTTP
routing layer, that gets better still because rather than having MCP proxies and
gateways in front, we can actually make sure that the traffic is moved onto the
right nodes. So we've got a very, very efficient thing. So I can't wait to see
what everyone's going to build. It's a great time to migrate And this is a real
triumph, I think, of the community coming together, working in the open, and
making this kind of change to a protocol really demonstrates how openness and
open source works and how the AAIF has supported that.

So thank you very much, everybody.
