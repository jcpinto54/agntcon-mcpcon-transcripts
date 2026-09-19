---
title: "Why Organizations Need an AI Control Plane for Security and Governance"
speakers: [Sheng Liang]
day: thu
date: 2026-09-17
start: "15:16"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 153562e35e20f47bf2acb1a157ec089a
recording: RAI Amsterdam 2.m4a
contributor: jcpinto54
confidence: confirmed
---

# Why Organizations Need an AI Control Plane for Security and Governance

**Sheng Liang** — Co-Founder & CEO & Obot AI

Co-founder & CEO of Obot.ai. Previously founder/CEO of Rancher Labs and Cloud.com, executive roles at SUSE and Citrix, JVM engineer at Sun Microsystems. PhD in CS from Yale.

*Thursday 17 September 2026, 15:16, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> One of four consecutive Auditorium talks captured in a single recording.

## Transcript

What did you think of the briefest talk? What an audience. Thank you so much for
coming to my talk. And a lot of you probably didn't know, but we, like a small
company, Oval, actually started this year ago, a little bit over a year ago, in
San Francisco. Started this gathering called MCP Death Summit that eventually
became the conference it is today. So very, very proud of what we all do. So
I've got 9 minutes and 20 seconds left.

And we'll launch straight into the topics. I mean, these days, you can't really
get by over the days without hearing an opinion that AI will kill us all one day
or will breach some security. But we know, as technical people, or it all boils
down to agents accessing to data and tools. And a year ago, when this thing got
started, we thought it was relatively straightforward. You know, AI would talk
MCP and MCP would call tools. So to stop that, you know, you're putting an MCP
gateway.

So we kind of all started there. But now you look at the world, it's a lot more
complicated. We're not talking about one agent. We don't even write that agent.
It could be cloud code. It could be enterprise chat GPT. How are you gonna get
that enterprise chat GPT to go through my MCP gateway? That's pretty difficult.
We talk all kinds of protocols now, not just MCP. We, these things run
everywhere. And agents are typically authenticated as human.

And we all know, working for businesses, And we as human get far too much power,
privilege, permissions than we need for our job. And you give that to an agent,
who knows what the agent's going to do. They don't know the consequence. So
that's why organizations have resorted to not just one trick, like a gateway,
but a bag of tricks. So they start with something called curate. Curate is like
a MCP catalog. You limit your users to one agent, and that one agent can use
three MCP servers, everything is good.

Of course, you hand it out to your developers, they're not happy, they want to
download their favorite agent, and they want to call whatever MCP servers they
want to call. And what IT can do is monitor, hook into the agent, filter the
calls, and log everything. So if something goes wrong, we can at least find out
why. You know, this morning, like there's a bunch of talks, and you keep hearing
about this word sandbox. And it's amazing, even in this community, a lot of
people still get confused about sandbox.

Whenever I talk to people about sandbox, people don't realize it's like for
isolation and security. They think it's for QA. So usually the question I get
is, what about for production? Do I still use a sandbox? And sometimes the AI
space moves so fast, we forget where these terms actually came from. But the
cool thing about isolating agents in sandbox is once it's there, you don't
really you kind of, what's the better way to deal with something going wrong
than just throw it in prison, right?

So you don't have to worry about it anymore. You look at exactly what it's
trying to do by looking at the network proxy, and you don't even pass it any
credentials. So this is all great, but you can see it's a spectrum of work,
right? Organizations have to put together, and that's exactly what OVOT as an
organization did. We created open source software, So any organization can
quickly put together what we call an AI control plane.

So the topic of this talk is AI control plane. I hope you go away with, you
know, now there's this new thing. It's not just us doing it. The other day I
just saw a new company got started, and they said they're going to do AI control
plane. And I said, what is that? AI control plane consists of an MCP gateway, an
RM gateway, and a sandbox. So sort of the same kind of stuff we're doing.
basically put this group of technologies together and address that, become this
all far reaching end to end toolbox.

One of the things that AI control plane would do is in addition to the server
side things, it would also install a desktop plugin if it's needed. I remember I
said developers, they don't want any control, But in the age of the world, IT's
like, you've got to at least let us install a piece of desktop plugin, like a
malware scanner, so I can at least know what agents you're running and what MCPs
you're calling, especially the local MCPs you're doing.

And if there's something really bad, maybe we can tell you not to use it. So
this stuff is actually really coming together. reminds me of, you know, that
predated even me, antivirus industry, I'm sure, when it got started, or the
network security, firewall industry, you know, in the early days of the
internet. And pretty exciting. So I still have got four minutes left, and I want
to just talk about one more thing before I head off.

And we're saying, you know, almost like the holy grail of security is isolation,
is sandbox. So this is all great. And traditionally, if you think about
security, like most of us, I'm sure, are developers. As a developer, I really
didn't like security. I was always the guy, you know, disabling antivirus. And
then just the last thing I want is, like, develop in a sandbox. You know, I just
want everything on my desktop, within my easy reach, right?

But recently, as coding assistants took off, my opinion started to change.
Because, you know, first of all, for one thing, with coding assistant, I don't
need to act with it as much, nearly as much as I used to interact with IDE. So
the coding assistant running in a docker container or in a VM, it doesn't bother
me as much. Second, I'm just, like everyone else, I'm so sick of, you know,
approving coding agent requests. I know that the auto mode, the AI mode has made
things a little better.

better but still I'm not I'm not I'm still not totally comfortable that even
having AI approving everything so what I what I think there's a big opportunity
is now we can finally bring the best developer experience by running these
coding agents under sandboxes and and also offering additional degree of
security and that's why we actually might my co-founder Darren Shepherd some of
you may know he created this new open source project for this toolbox it's a
sandbox for coding agents and it's really cool because with this whole box
coding agents now finally have unrestricted rule level access inside the same
making they'll do whatever it wants it can reformat the hard drive if It
wouldn't do the world any damage.

And the other thing, I mean, it's probably a little bit more nuanced. I was
personally not very, never really liked the work tree experience that much, but
in this world, of course, every sandbox essentially has its own gate before, and
then you just tear and pick these things together when you're done. So it's
just, in my opinion, a far better experience. All the access to the outside
world would be through a network proxy, And the way we configure it is like,
really, if it's for unauthenticated access, there's not much an agent can do
other than try to launch a denial of services tab.

So we created a mechanism where the NISCO box manages credentials, and then we
only hand out credentials when it's deemed appropriate. And this turned out to
be far more reliable. It's something that an ALM judge can decide, And I think
it's much better even than some of the AI mode stuff that's going on. So I
encourage you to go and search Disco Box and download it and give us a try. It's
not even released software yet, but we'd love to have the audience of this
conference give it a try and give us some early feedback.

And it's really cool when it works. This is a screenshot of, again, my co-
founder, Darius He's constantly working with dozens or even more sessions. I've
never seen anyone being so productive. And I sometimes get impatient when I wait
for developer sessions to conclude. And these sessions conclude. And here, you
never have to wait. And this is pretty much all I wanted to cover. Please visit
us at our booth, D1. It's right at the front.

and download open source AI control plan, the OBOT thing that I just talked
about, so you can implement whatever security and governance mechanisms you
need. And if you're interested in trying out coding agents running sandboxes,
then give this OBOT a try. Thank you very much.
