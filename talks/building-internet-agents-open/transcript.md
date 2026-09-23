---
title: "Building the Internet of Agents in the Open"
speakers: [Mazin Gilbert]
day: thu
date: 2026-09-17
start: "09:07"
room: Auditorium
track: Keynotes
kind: keynote
session_id: a96f94632eec478290d3c91a583611b2
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=1210s
contributor: jcpinto54
---

# Building the Internet of Agents in the Open

**Mazin Gilbert** — Executive Director of Agentic AI Foundation

Executive Director of the Agentic AI Foundation (Linux Foundation). IEEE Fellow, Wharton MBA, PhD in AI. Ex-Google Director of Engineering (Distributed Cloud AI/ML), ex-AT&T VP of Network Analytics and Automation. Co-founded ONAP, Akraino, Acumos; 260+ US patents, 100+ papers.

*Thursday 17 September 2026, 09:07, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 0:20:10](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=1210s)), not an attendee's recording.

## Transcript

Thank you, thank you, thank you. Amazing. Hello and welcome. Hello, Amsterdam.
So good to be here. We're so thrilled to be here. Our first AGNTCon, MCPCon in
Europe. So we're very excited about that. I want to talk to you today about two
things. One, how we got to here as a foundation and two, what are we doing as a
foundation working in the open with you to really build that internet of agents?
I want to take you a step back of how agentic AI got to where it is today.

I think most of you may be familiar with this. In the 70s and 80s, a lot of the
AI technology were really mostly focused on rule-based systems, very sort of
hard systems that you would ride by rules and they will do very specific tasks.
They break very easily. As we went to the 90s, we started building a lot of
neural nets and Boltzmann machines. These are statistical systems, data-driven.
You build them for, you have to have a lot of supervised data.

You build them for one task, and they can just barely do that one particular
task. The big aha where we are today is in 2017 when the transformers really
came up, and that really opened up a new field. And what it really opened up is
going from specific machine learning models to generalized AI, close to a
generalized AI. These are systems that are trained on unsupervised data, huge
amount of unsupervised data, and they basically embed a lot of new technology
that we didn't dream before in the past.

That's what's really happened over the past eight to ten years. What's happened
in the past two years is we've gone now from models to the agentic systems. I
want to tell you a little about the agentic systems. In the foundation, we look
at the agentic stack as a five-layered cake. Starting with the hardware, the
TPUs, the MPUs, you have the infrastructure layer, which is what CNCF basically
focuses on. And then you have your intelligence. This is your model, your
serving, your training, your quantization, your, you know, all of that kind of
stuff that you basically do with the model.

We're focusing on that fourth layer, which is the agentic platform. And that's a
really, really important layer. layer. That layer includes all the protocols,
the interfaces, it includes the harnesses, it includes basically the
reliability, the agent identity, the authorization. It's a very, very important
layer. If we don't get this layer right, then the whole systems, the whole
application stack above that will be pretty much fragmented. The cost of
deploying these applications will skyrocket. So how do we do that? Open standard
and open source.

And we really believe in open standard based on large adoption. And there are
three reasons for that. One is systematic risk. These agents are making key
decisions and real transactions. And no one company should own that or dictate
that. The second thing is interoperability. These agents are not made up of one
protocol. They're made up of many different protocols. And all of these
protocols need to interwork with each other to really ensure that we build up
that internet of agent vision.

And the third one is trust. Having the software in the open, as most of you
know, as most of you have been part of open source for decades, having the
software in the open, being able to contribute to the software, identify
vulnerability, do the testing, is how you really establish trust. This is not
new. We've done this before, and that's what led to the internet as we know it
today. Three things had to come in place. The first thing that you needed, the
open protocols.

You needed the TCP/IP, you needed the HTTPS, you needed these protocols to be
available and to be interoperable. The second thing you needed is a stateless
infrastructure. That was key to enable scaling of the Internet today without
permission. And the third one, you need a governance home that would allow these
protocols to nurture without any vendor lock-in. That's sort of what we are
doing here with the Internet of Agents. We're starting to work as a foundation
on a number of protocols.

Some of them are fairly mature, like MCP, and some of them are still early in
their maturity. These protocols are really geared towards becoming
interoperable. We're starting to work on stateless infrastructure, the registry,
the gateways, the protocols. And to do that, we need a neutral governance to
ensure that all of those are really built in the open, and no one company
dictates basically the development. And that's why we exist.

The Agentic AI Foundation, our mission is to be that neutral home. Neutral home
where the open agentic stack is built. I think many of you have been part of
Linux Foundation for a while. And you know very well that this is the home for
Kubernetes, the home for Linux, for PyTorch, Node.js and others. We've borrowed
a lot of those learnings, the governance, the operating principles, the
governing board, the TCs and how working groups work, and we brought them into
the agentic AI foundation.

Our focus is everything above the model, all the way to the applications. That
includes the protocols, that includes the tools, and that includes the harness.
Whether the harness is just the controls, or it's the orchestration, or it's the
sandbox, or it's the reliability, or the observability, or the authorization,
it's basically all of the above. That's what we are focusing on today. And we
have a number of protocols that most of you are basically using today, and a
number of problems we are working on as part of the working groups that I will
just touch base in a minute. Six projects in the foundation. We are being very
opinionated and very careful in what projects we bring to the foundation. We
have over 45 projects already being submitted to the foundation through our
front door. But we've been very careful what project we bring in. The next few
projects redefine the DNA of this foundation. Last month we announced A2A. This
is the agent-to-agent communication. Last week we announced Agent Router. And
Agent Router is your model router that basically manages traffic for models and
for quotas and policy enforcement, et cetera. We are very excited about these
six projects. Each of these projects really stand on its own and have very
strong backing from a large number of companies. We have seven working groups
and you'll hear from Manik tomorrow, our CTO, about other working groups. These
working groups are run by, led by members, but they're open to everyone, open to
the public. These working groups are really subject matter experts from
companies who compete during daytime, but they're really coming together to
really build that, standardize that open interface, that open protocol, really
addressing problems Problems like what are the right protocols from an agent
discovery to agent payment debate and fraud?

They're discussing problems like how do you define agent identity and
authorization and fraud and things like that. So there's a lot of interesting.
If you haven't attended one of these working groups, I strongly suggest you
attend those. It's an eye-opening. You'll learn a lot. Again, it's open to
everybody. So who attends those working groups? Members and non-members. I'm
excited today that we are already have exceeded 270 members. We're so privileged
and blessed to have all these members part of the foundation. We don't take that
lightly. We're signing up one new member a day and that is it's not the number
that really matters here is the diversity of these members. They come from very
different geographical locations. We have 15 sectors that are represented in
here. And I'm also excited to announce two gold members that joined us last
week. The first one is the Royal Bank of Canada. Excited to have the Royal Bank
of Canada. We have now 28 financial services companies as part of the foundation
to give you an idea how important that is. The second thing is that we are
excited to announce the Gates Foundation is also a gold associate member. We're
partnering with the Gates Foundation to really develop the agentic AI ecosystem
in less developed countries. I want to just give you an idea of what our members
are telling us. This is a survey that I will share with all members next week
and I think it's really telling and it's really important. 81% of our members
are saying they are in production today for or agentic AI.

This number was like less than half of that back in April when we had our MCP
Dev Summit. 51% they're saying they're only in production, but they're in
production at scale. We're starting to see companies, 60% are starting to test
multi-agent communication. 78% of our members are building on open source.
Again, that's incredible. So what you're seeing in here is that companies are
building on open source, they're no longer just doing pilots and experiments in
agentic AI, they're going to production.

And half of our members are going to scale, production at scale. I think this is
absolutely remarkable. So I wanna leave you with this. Please don't be an
observer, get engaged. There are so many opportunities you can get engaged as a
foundation, whether you are a member or not a member. You can get engaged in
working groups, You can propose working groups. You can get engaged in
contributing code to projects. You can get engaged in being part of the
different committees that we will be, there are several committees that we've
announced in the past and new committees that we're gonna be announcing in the
future.

I tell folks that 90% of our story has not been written yet. It's gonna be
written by you. So please join us, enjoy the conference. Thank you for listening
and I look forward to meeting you. Thank you.
