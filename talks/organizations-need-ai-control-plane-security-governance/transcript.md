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
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=22946s
contributor: jcpinto54
---

# Why Organizations Need an AI Control Plane for Security and Governance

**Sheng Liang** — Co-Founder & CEO & Obot AI

Co-founder & CEO of Obot.ai. Previously founder/CEO of Rancher Labs and Cloud.com, executive roles at SUSE and Citrix, JVM engineer at Sun Microsystems. PhD in CS from Yale.

*Thursday 17 September 2026, 15:16, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 6:22:26](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=22946s)), not an attendee's recording.

## Transcript

What an audience. Thank you so much for coming to my talk. And, you know, I
mean, a lot of you probably didn't know, but we, like a small company, Obot,
actually started this a year ago, a little bit over a year ago, in San
Francisco, started this little gathering called MCP Dev Summit that eventually
became with the conference it is today. So that's very, very proud of what we
all achieved. So I've got nine minutes and 20 seconds left and we're gonna
launch straight into the topics.

I mean these days you can't really get by another day without hearing an opinion
that AI will care kill us all one day or we'll breach some security. But we know
as technical people, it all boils down to agents accessing to data and tools.
And a year ago, when this thing got started, we thought it was relatively
straightforward. You know, AI would talk MCP and MCP would call tools. So to
stop that, you know, you're putting an MCP gateway.

So we kind of all started there. But now you look at the world, it's a lot more
complicated. We're not talking about one agent. We don't even write that agent.
It could be Claude Code, it could be enterprise ChatGPT. How are you gonna get
that enterprise ChatGPT to go through my MCP gateway? That's pretty difficult.
We top all kinds of protocols now, not just MCP. These things run everywhere.
And agents are typically authenticated as human.

And we all know working for businesses, I mean, we as human get far too much
power, privilege, permissions than we need for our job. And you give that to an
agent, who knows what the agent is going to do. They don't know the consequence.
So that's why organizations have resorted to not just one trick, like a gateway,
but a bag of tricks. So they start with something called Curate. Curate is like
a MCP catalog. You know, you limit your users to one agent, and that one agent
can use three MCP servers. Everything is good. Of course, you hand it out to
your developers. They're not happy.

they want to download their favorite agent, and they want to call whatever MCP
servers they want to call. And what IT can do is monitor, hooking to the agent,
filter the calls, and log everything. So if something goes wrong, we can at
least find out why. This morning, there's a bunch of talks. I mean, you keep
hearing about this word sandbox, and it's amazing. even in this community, a lot
of people still get confused about sandbox. Whenever I talk to people about
sandbox, people don't realize it's like for isolation and security. They think
it's for QA.

So usually the question I get is, what about for production? Do I still use a
sandbox? And sometimes, you know, the AI space moves so fast, we forget where
these terms actually came from. But the cool thing about isolating agents in
sandbox is once it's there, you know, you don't really, you kind of, what's the
better way to deal with something going wrong than just throw it in prison,
right? So you don't have to worry about it anymore. You look at exactly what
it's trying to do by looking at the network proxy, and you don't even pass it
any credentials. So this is all great.

But you can see it's a spectrum of work like organizations have to put together.
And that's exactly what Obot as an organization we did. We created open source
software so any organization can quickly put together what we call an AI control
plane. So the topic of this talk is AI control plane. I hope you go away with,
you know, now there's this new thing. It's not just us doing it. The other day I
just saw a new company got started and they say they're going to do AI control
plane.

and they say, what is that? The AI control plane consists of an MCP gateway, LLM
gateway, and sandbox. So it's sort of the same kind of stuff we're doing.
Basically put this group of technologies together and address that, become this
off, far-reaching, end-to-end toolbox. Like one of the things that AI control
plane would do is in addition to the server-side things, It would also install a
desktop plug-in if it's needed. I remember I said developers, they don't want
any control.

But in the agent world, IT is like, you've got to at least let us install a
piece of desktop plug-in, like a malware scanner, so I can at least know what
agents you're running and what MCPs you're calling and what local, especially
the local MCPs you're doing. And if there's something really bad, maybe we can
tell you not to use it. So this stuff is actually really coming together. It
reminds me of the predated, even me, antivirus industry, I'm sure, when it got
started, or the network security firewall industry in the early days of
internet, and pretty exciting.

So I still have got four minutes left, and I wanna just talk about one more
thing before I head off. And we're saying, almost like the holy grail of
security is isolation, is sandbox. So this is all great. And but traditionally,
if you think about security, like most of us, I'm sure, are developers. As a
developer, I really didn't like security. I was always the guy disabling
antivirus. And the last thing I want is develop in a sandbox.

I just want everything on my desktop within my easy reach. But recently, as
coding assistants took off, my opinion started to change. Because, first of all,
for one thing, with Coding Assistant, I don't interact with it as much, nearly
as much as I used to interact with IDE. So for Coding Assistant running in a
Docker container or in a VM, it doesn't bother me as much. Second, I'm just,
like everyone else, I'm so sick of approving coding agent requests.

I know that the auto mode, the AI mode, has made things a little better, but
still, I'm still not, totally comfortable that even having AI approving
everything. So what I think there's a big opportunity is now we can finally
bring the best developer experience by running these coding agents under
sandboxes and also offering additional degree of security. And that's why we
actually, my co-founder Darren Shepherd, some of you may know, he created this
new open source project called It's a sandbox for coding agents.

And it's really cool because with Discobox, coding agents now finally have
unrestricted root level access inside the sandbox. It can now do whatever it
wants. It can reformat the hard drive if it wants. It wouldn't do the world any
damage. And the other thing, I mean, it's probably a little bit more nuanced. I
was personally not very, never really liked the worktree experience that much.
But in this world, of course, In this world, of course, every sandbox
essentially has its own Git repo, and then you just cherry pick these things
together when you're done.

So it's just, in my opinion, a far better experience. All the access to the
outside world would be through a network proxy, and the way we configure it is
like, really, if it's for unauthenticated access, there's not much an agent can
do other than trying to launch a denial of services attack. So we created a
mechanism where the Discobox manages credentials, and then we only hand out
credentials when it's deemed appropriate. And this turned out to be far more
reliable.

It's something that an LLM judge can decide, and I think it's much better even
than some of the AI mode stuff that's going on. So I encourage you to go and
search Discobox and download it and give us a try. It's not even released
software yet, but we'd love to have the audience of this conference give it a
try and give us some early feedback. It's really cool when it works. This is a
screenshot of, again, my co-founder Darren's desktop.

He's constantly working with dozens or even more sessions. I've never seen
anyone being so productive. I sometimes get impatient when I wait for developer
sessions to conclude and these coding sessions to conclude. And here you never
have to wait. And this is pretty much all I wanted to cover. Please visit us at
our booth, D1. It's right at the front. And download open source AI control
plane, the Obot thing that I just talked about, so you can implement whatever
security and governance mechanisms you need.

And if you're interested in trying out coding agents running sandboxes, then
give Discobox a try. Thank you very much.
