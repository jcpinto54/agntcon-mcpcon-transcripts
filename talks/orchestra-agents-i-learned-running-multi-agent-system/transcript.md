---
title: "An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers"
speakers: [Muhammad Ahsan Ayaz]
day: thu
date: 2026-09-17
start: "10:50"
room: Auditorium
track: Multi-Agent
kind: talk
session_id: 80826fbc5cc99019699571a6395ab758
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=8348s
contributor: jcpinto54
---

# An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers

**Muhammad Ahsan Ayaz** — Scania

Engineering lead at Scania; Google Developer Expert (Angular/Web Tech) and author.

*Thursday 17 September 2026, 10:50, Auditorium — Multi-Agent track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 2:19:08](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=8348s)), not an attendee's recording.

## Transcript

So, hello. My name is Ahsan, and I've been running a community of about 5,000
developers and something in production for those 5,000 developers for the past
year. And in the next 25 minutes, I'm going to talk about the architecture of
what that looks like for the agents and some failures, some learnings. So,
hopefully, you can also try with your agents and see if you if you can find the
same patterns. So by then you will know what patterns actually survived and
which ones I needed to hotfix at 8 p.m.

Great. I'm gonna give you some seconds to just scan it, so if you can take out
your phones and scan this, all the links, including the trails of errors that I
found, the tests that I wrote as regression tests, the architecture, the slides,
and if you want to follow me on any of the socials, all of the links will be
here. You will also be able to give direct feedback on the talk as well. And I'm
gonna show that at the end of the talk as well, so if you have not been able to
do so, so far, you're gonna get another chance.

So I want you to look at this really closely. This is a question done from a
community member via our Discord bot. So I have a Discord community of five, I
think 5,700 people now. And they asked, is there any good repository for Google
Antigravity CLI? And it said, dev.to temporarily unavailable. As you can see,
they probably were not as happy. So we have 5,000 developers who are trying to
interact with an agent for onboarding, for finding mentors, or finding projects
to collaborate on, for finding GitHub repositories to contribute on as a first-
time contributor, and 16 agents that can help them.

but one break statement that essentially failed, and we'll come back to that in
just a bit. So quick raise of hands, who here uses AI agents in production? I
would say half of you, okay. Who here has agents that talk to other agents in
production? Okay, that number has dropped drastically, good. And who here found
a bug from a user's message? I'm still trying to find one person. I see some
hands. Good. So, you know what I usually try to do when I'm spending time with
AI?

I try to see my agents in production, be in awe of them, try to see the
debugging logs and whatnot. But then I also try to spend my time being more
creative, for example. And by the way, this is not AI generated at all. This is
years of practice, as you can see. And then we have a prompt. I said, generate a
super realistic image of a programmer using this drawing, keep the weird pose as
much as realistically possible. This is what I got.

But as you can see, I'm not happy. I'm a developer, I want things very precise.
So I was like, no, no, no, no. Combine these two things because this has to be
real. So this is what I got. And this is the only place where you can see me
like this. But then version two was this. There's a sound that was supposed to
be played here. I think many of you know from the reels, it's like, but it's not
being played here. So a quick introduction of myself.

I'm Muhammad Ahsan. I'm originally from Pakistan, but I live in Sweden. And I am
a software architect working at one of the biggest companies which builds trucks
and vehicles called Scania. And I am a 4x author. I've written four books,
primarily on Angular, but also on web development. I have projects in
production, which have been installed more than 40 million times, especially
open source projects. And I also run this community that I talked about right
now.

I'm being followed by 200,000 people across different platforms. But I focus a
lot on the community, which has about 6,000 people, which we have weekly meetups
with. So what is the problem when we talk about facilitating a community, a
group of people who you want to benefit with AI where you are not really
present. For example, there are many questions that come up, and I saw that the
maximum questions I got in a day was about 40 questions.

It's not much, but it's still plenty. And it's a combination of things like, how
do I start with Angular? Are there any recent articles worth reading on Angular?
And is there anyone in the community who can actually mentor me? Now, there are
three different questions, and there is only one of me. So I wanted to create a
bot that essentially could be me and when you're thinking about working with
agents You know what could go wrong?

One of the things that we try to do with our agents is exactly this we want an
agent that can do multiple things We configure constraints or rules markdown
files. We constrain agent skills We you know give it a lot of MCP tools. We give
it agent skills tools functions, whatever you want to call them But that is not
really efficient because there's one single thing that is orchestrating and also
actually doing all of the job. So one giant prompt, let's say if it's helping
someone with onboarding, mentorship, content, roadmaps, it really does it badly.

So the fix is not what we used to think it is, which is ask better questions or
have a better prompt. That's not the way to go. The mental model has now changed
to be something like an orchestra. For example, if you think about a musical
orchestra, you will never see an orchestrator playing a violin. You will never
see, you know, the violinist improvising or instructing the people who are
running a tempo. So everybody has their jobs, and that is exactly what they
should be doing.

So in my case, we have one bot and 16 agents. And when I was actually submitting
the call for papers for this talk, there were actually 12, but they increased.
least. So right now I have 16 agents out of which three are purely workflow
agents. They never talk to a large language model at all. So apparently it seems
like counting agents is a bit harder than running them because I had to keep
updating my slides when it was 12 and then 13 and now they are 16. So this is
the whole tree as you see right now. On the top you see this community assistant
which is the root agent and it has six child agents or subagents, as you may
call them. Out of them, two of them are sequential agents, which are purely
workflow. They don't really talk to a model. And the orchestrator's job is
essentially to decide which one to pick in which case. What is the community
member asking and how to efficiently respond to them. And there's one model
everywhere. I did try to be clever by using, let's say, OpenAI model, Claude
model, Gemini, and have a mixture of them, the complexity was not worth the
value, to be honest.

And I think sometimes the boring choices are essentially the feature. So I went
with just Gemini 2.5 Flash. And this is the root agent in one single code. I
want you to be focusing on this thing called subagents, which has the arrays of
all the subagents that this root agent uses. Because this is the line that
matters. Every agent, when you're working with Google's agent development kit,
its description is not merely a comment, it's description is the contract. It is
the API contract that tells Google ADK what the agent does, what does it accept
as inputs, and also what is it supposed to give as output, be it a response or
be it an error. One of the things that we usually try to do when we are working
with agents is we give too much to the root agent or the conductor, so to say.
So when we talk about the orchestrator, the orchestrator is not supposed to have
tools on its own in majority of the cases. You could have exceptions, but the
rule of the thumb is you would never have tools on the orchestrator. You would
have subagents that would have tools because it's a large language model that
the root agent uses to decide which agent to transfer its task to. But if it
also has tools, sometimes it just uses the tools and gives back the response. So
it's very important to not overload your root agent and keep it as thin as
possible. Now, when do we use large language models versus a workflow tool or
workflow agent, so to say? This is when you don't really trust the large
language model anymore. For example, if I have a new member in the community who
wants to see which GitHub projects he or she can contribute to, how would we
know what projects to give to the person if we don't know their skill set, if we
don't know what their interests are, and if we don't know what kind of
programming languages do they work with. So it has to go through a couple of
steps. And if you see the array, the welcome agent is the last one that
executes. And it depends on everything that comes before it.

The user's skill level, the user's goals. And then it welcomes the user with the
recommendations that they can go with. When we talk about running things in
parallel, which I'm calling the fan out right here, you would usually imagine
that we are trying to do things that are not dependent on each other. So, we are
not really wasting any sort of time. So, we are running agents in parallel, and
each agent writes in its own key, so to say. In Google When you're working even
with sequential agent, every agent, once it finishes something, it can sort of
expose or it can spit out something called a state via a state key.

And the next agent picks it up and then it emits its own output and the next
agent does it or picks it up and then so on and so forth. When it comes to the
parallel agents, it's the same concept. But in this particular case, the states
are not dependent on each other. When we talk about using things in parallel, we
would be looking at some sort of pattern like this. For example, if someone
comes and asks about a topic, let's say they are asking about, you know, MCP
tools or they are asking about Google Antigravity, there are different things
that could happen at the same moment.

It could be a GitHub research to find the relevant repositories. It could be an
article search on the Dev.to website. Or it could also be Stack Overflow search
as well to find relevant sort of threads from there. And when we're running
these in parallel, you can see that the slowest one right now here is the Stack
Overflow, which essentially gives us 5.2 seconds. So the cost of your parallel
agents is not the sum of all of them.

It is essentially the slowest of all of them. And the interesting part here is
even though I was feeling really happy, like, okay, this is just five seconds,
we are doing so much, and it's really speeding up the process, that was not the
case because essentially at the end it was taking actually 17 seconds. So about
five seconds to do these three things in parallel but then we had some sort of
synthesizer which would synthesize the output from all of those three outputs
and then give the user the response which was actually taking about 10 seconds
or 11 seconds to be precise. So the user is just waiting for 17 seconds even
though we optimized this. So you do need more sort of layers on performance or
optimization, which could be a caching layer based on search queries, which
could be semantic caching, which is bound directly to the large language model,
and there can be multiple use cases for that as well.

Now, one of the things that you would also see in our agents that we are using
is the tools. And when do we usually try to use the tools? Because you would
expect a large language model, for example, to try to find the things, but it
would only do it from its training data. But when we talk about tools in, let's
say, Google Agent Development Kit, we have them as simple Python functions. They
have a fixed output or a predictable output and then also a predictable input as
well.

And when you give this agent to the Google ADK, it essentially knows the
contract. Whether it's an error that you want to spit out, it knows what is the
shape of that error. So there's never a chance of, let's say, something that's
not really predictable. And one of the rules when you're especially running
agents in sequence or parallel is that if especially in parallel, if you are
running multiple agents and one of them fails, so let's say there's a dead
branch, it should never kill the process.

And that is exactly what happened in the initial log that I showed you. Someone
was asking about an Angular repository, and it said, no, I don't work with
dev.to or I can't fetch data from there, which doesn't really make sense. So I
talked about a lot of things related to the agent itself, but obviously this is
a conference which also talks about MCP. So how many MCPs am I using in my
production agent suite, so to say? And the answer is zero.

And I'm glad I just submitted the PDF last night, so none of the organizers saw
this. So the reason why I'm doing this is because all the infrastructure, all
the calls, all the different branches of my agent never go out of the boundary
of my own domain. I don't have to call an external server at all. So that is why
I'm using the functions because I own them. I have the whole process. I own both
ends of every single call. If I wanted to add an MCP right there, that means
that I'm adding the server right there, I'm adding the transport layer, and I'm
also adding the handling of the errors, et cetera, et cetera, which can lead to
more complexity, and it's not really worth it.

So I don't have any MCP server lifecycle, et cetera. And all the functions that
I have that I've managed to do just with tools, because MCP essentially is sort
of a tool itself, so all the tools that I have are predicted inputs and outputs,
so I don't really have to go outside of the wall. But to be fair, this is not a
talk which is against MCP servers of course, you would be using MCP tools when
there's any tool that crosses, let's say, the boundary or the organization that
you have.

For example, let's say if you end up building a tool which looks at the mentors
from my community, I could expose an MCP sort of endpoint for that and you can
work with MCP servers to contact or to connect with mine. So that is a
legitimate use case. Similarly, if you have any sort of clients that you don't
really control, then you can also do this. So my whole, I would not call it
product, but the setup that I have has the Discord bot, which is integrated with
the Discord community that I own.

I have full control of it. I have the platform where I have all the mentors. I
control all of it as well. So I don't really need an MCP server or to expose it.
It's just added complexity. And also, when it comes to the orchestration, it is
essentially just the skeleton. It doesn't matter if you are using MCP or not.
MCP is just, let's say, a standard connector between bodies. And sometimes you
need it, sometimes you don't. So I think it's just fine.

Now when we talk about callbacks, and there is something that's really
interesting that I found out when I was working on all these agents. I found
people actually entering their confidential data or their personal data, which
is the PII, into the Discord bot, giving their emails, asking them to send an
email to a mentor directly and sending their name and email there as well. So I
ended up adding a few tools or callbacks, which the ADK has many.

You have before model callback, after model callback, before agent callback,
after agent callback, et cetera, et cetera. So I've implemented a couple of
them. One is the PII sanitizer. So whenever there's a message that comes from
the user before going to the model, essentially, or any traces, it essentially
redacts that. Then also, there are a lot of people who are just searching about
content related to Angular, MCPs, Python.

So I'm also using a tool cache, which essentially is there. So we don't have to
process everything again and again. Then I kept it really simple when it comes
to debugging and the telemetry of it. So it's just the Google Cloud logs, and
I'm just spitting out output, std out, and there's zero infrastructure. I don't
have to use Mixpanel, et cetera. I can just go there. And finally, this is the
one I want to spend a bit more time on, the date injection.

Because it has the best story, so to say. So May 2026 is I asked it to give me
some recommendations about Angular, right? And the top pick that it gave me was
an article or a newsletter that I published on my blog on 2020. So this is a bit
weird. Because we know that models are trained on a data, so they don't have any
idea of what does it look like when it comes to what is the current date. And
most of the times when we think about how would we approach it, the immediate
thing that comes to our mind is let's try to use a tool.

But I think the tool is not the right instrument here. And the reason for that
is that when you're adding a tool, you're adding essentially a whole round trip
in which you have to see the response, you have to see... Where am I? Give me
one second. Yes. Aha, here. So, you have to see the response as well. And what I
ended up with was just a simple fix, which was 10 tokens. So what I was saying
is that you don't always have to have a tool that you want to provide to your
agent.

If there is something that is deterministic and it's a fact, for example, a date
is not an abstract thing. It's a factual data that you can get. You always pass
it to the instructions instead of having a tool. So what I ended up doing was
just having a before model callback. So before I'm calling the model, I'm just
appending this string right here, the bottom three lines, where I'm giving it
the current date. But I'm also instructing it that if the user wants a
particular date range when they're quitting something, you use this.

So you always use the fresh data. But if there comes a date or if there's no
date mentioned, then obviously you go with the recent one, which is right now,
which is today. And the verification block was when Antigravity CLI 2.0 was
being released, I just ran the test just, I think, two days after. And then when
I was searching about the blocks related to it or the repositories related to
it, it was only giving me the ones that were more recent or the demos which had
the most recent commits as well.

Now, the deployment thing, and it's a fun story as well. I started with running
this on Google Cloud, and I went with these configuration, these flags. So my
Discord bot right now, or my agent, which is using the Discord bot, it's
essentially not what Cloud Run is built best for. So Cloud Run is built for
request-driven services, right? And the Discord bot is just the opposite. So one
long-lived outbound web socket, which has zero inbound HTTPS, so everything is
communicating with web sockets in there.

So I have to have a minimum one instance or the bot hangs. If I have more than
one maximum instances, then Google Cloud would try to fork memory between them.
And then the killer, which is not even a deploy flag, which is the default Cloud
Run policy is to throttle CPU between when your system is idle. And all of my
bots work essentially in that moment when the system is idle, because that is
what the platform considers idle, and that is where most of the processing
happen.

So without that flag, the event loops essentially runs really in slow motion. So
each line here cost me between 20 minutes and I would say half a day. And the
reason why this was really bad is that as soon as I turned up those flag, and
especially the third flag, if you look at this, I said no CPU throttling. So I
want the CPU to be available and no throttling whatsoever. But as soon as you do
it, Google Cloud does something. It essentially converts that into what we call
an instance-based billing.

So now it's not really a cold start, so to say. So you're renting a full virtual
CPU around the clock, and it essentially costed me about $47 a month for one
community bot, right? And funny enough, the free tiers on Google Cloud covers
roughly 50 hours of that. So you can't even lower the CPU because the fractional
vCPU essentially requires throttling by default, so it has to be on. So two
weeks ago, I moved my bot. It has the same Docker image, it has the same
configuration, but the only thing that has changed is that now I'm running this
on the E2 micro VM, which has 50 hours, it's always free.

And it essentially costs, if the traffic goes up, to me, it costed not more than
$3 to $4 per month. So it's a huge reduction from the $47, so to say. So let's
talk about what we discussed so far. The agentic suite that we have has a bunch
of things. It has the orchestration, it has sanitization of PII information, it
also has caching for requests or queries, it also has an instrumental, sorry, it
also has a deployment that is now optimized as well.

And now I'm thinking, okay, what could go wrong? until I essentially found one
thing that went wrong. So this is, again, the issue that we started talking
about. Any good repos for Google's Antigravity CLI, and then it says dev.to
temporarily unavailable. So the log from the beginning, and now you know the
whole architecture and the system behind it, right? The query routed, and it
went to the fan out, where you have the GitHub researcher, the dev.to, the Stack
Overflow, right?

You know how the pipeline works, and you also sort of have an idea of how much
time it takes. It doesn't take more than five seconds or 5.2 seconds. What
happens is that the user got an answer from one of the branches, and none of the
other work is highlighted here. Now, let's try to unwrap it. This is what the
code looks like. And this is the Discord bot's event loop. And this runs in
production or ran in production, to be precise.

So it streams different events, it grabs the final response, and then it stops.
So every tutorial, I would assume when you see it on YouTube, they basically
write the same loop. And I'm pretty sure some of you have seen this as well. Now
the docstring that I did not read in the Antigravity official documentation is
that when you have multiple agents that are running at the same time, not just
the main orchestration gives you a final response. Every single branch gives you
a final response, and there's a sort of function that you can call to check its
final response on each one of them. And if not all of them have responded, then
you don't know that they all have finished. And that was the problem. We started
by talking that if there is an error on any of those, it should not kill the
whole process. But in this particular situation, what essentially happened is
that the first one actually did not fail with error, but actually sort of won,
and it responded. But it responded with something that is incorrect. And in
reality, what happened is that when the query was sent, that please get me an
Angular repository or something, it went to dev.to. There was a 404, and it
responded immediately. The response from the GitHub agent never went to
synthesizer. And since the first one or the fastest one won and sort of bubbled
up to the root, the root responded with whatever it got. And that is essentially
what was the issue. So my graceful degradation essentially sprinted past the
healthy branches and, yeah, became the user-facing reply.

So what happens when we look at the Discord loop? So it is going through all of
those, and then as soon as the first one is winning and sending a response back,
there's a break statement. So it breaks from there, which breaks the generator
exit, and then it breaks the whole asyncio task group for the Google ADK, which
means that it just responds back, and that is exactly what we don't want. So how
long has this been out there in production?

This was not a fresh one. It has been there for, I would say, a year. Even maybe
some months, you can say. So those beautiful parallel numbers that we saw, they
were real. And the synthesis still takes the time. But the user, in reality,
just gets whatever comes back faster. Sometimes if the GitHub researcher
responds back faster, then they get the right response. Sometimes if the dev.to
fails, or if any other thing fails, then they also get the response as well. So
it depends on which one wins faster. And the fix was really, you know, really
fast.

Especially because the message or the diagnosis of this error was from a user.
So the user essentially pointed this on Discord that I'm trying to search this
and I'm getting this response. I went to the logs and those straight logs with
zero infrastructure on Google Cloud, I could actually see the trace of all of
them. And then I could look at the code. I could understand from the
documentation as well that, okay, this is what's happening. And Instead of just
first one saying this is the final response, I have to wait for all of them.

And then once I have all of them done, then I would respond back. So this is the
clean trace after the whole debugging. So you can see at the top that near zero,
or near one millisecond, we have all the three researchers just going in
parallel. So we have the GitHub researcher, the dev.to, and the Stack Overflow.
You can see that the dev.to still failed the fastest. You can see 1.3 seconds,
it just failed. and then the Stack Overflow ran, GitHub Researcher ran, but you
can also see that now the community assistant responds after everything happens.

So this is the whole flow which now works, takes its time, but doesn't really
respond faster to the user with invalid information. So when I fixed this
particular issue, I did not really write a regression test for this, and that is
sort of the confession that I'm gonna make because I did it just last night when
I was rehearsing the talk as well. So the fix is right now there. You can also
see the test file from the QR code that I shared with you as well.

And there's also one issue that I have not fixed. So if you see right here in
this particular image, whenever I ask something like, can you find the Code with
Ahsan GitHub repository? It essentially, the root agent uses transfer to agent
to transfer to the right sub-agent in this particular case. And here we have the
fan out. So we have three parallel agents running. The first one says, I can't
help you find GitHub repository as I can only search for articles on dev.to.

The second one says, I can only search Stack Overflow for answered questions, no
GitHub repository. And the third one, which is actually the search GitHub
repository, gives me exactly what is needed. It gives me the GitHub repository
that I'm asking it to find. And when you look at the other end, this is what the
user sees on Discord. When someone asks the same question on Discord, it
essentially synthesizes all of that, but then gives the response which is
actually correct to the user.

And none of those branches which are giving the failure or the wrong response
show up there. Now, why do we see this right here and not on Discord? Because
the ADK web debugging tool is really generous. It essentially still waits for
all of them and then shows you as the developer what would happen in all these
branches, but the user might only see the final output in that case. Now, what
is the issue right here? The issue is still that in this situation, the last one
will win.

So previously we had an issue where the first one would be responded with. Now
we have a sort of this guessing game where I'm expecting all the false branches
to say I can't do this. But the right branch actually takes it time and then it
responds back. And the reason why this is happening is that because they are all
running in parallel. So this is a fix that is still, or this is an issue that
still exists in production. I have not shipped a fix for this.

And I would love to know from you folks, what do you think would be the right
approach here? So just to rephrase, right now, the default logic is all the
false branches, for example, if someone is asking for a GitHub repository, the
Stack Overflow will say, I cannot do this. The dev.to would say, I will not do
this, and they will immediately exit. but the GitHub researcher would take its
time and respond back. So the outcome is the slowest one gives the response
back.

I would love to know what you think would fix this issue, and if you have faced
the same issue, I would love to know how you have solved this. So this is a
patterns cheat sheet. This is sort of, I would say, the moat of my talk. So if
you want to take a screenshot, you can definitely do that. If you have already
scanned the QR code, you already have the link, so you can always go there and
see. So just to summarize, what we've discussed is that when you want the large
language model to have an orchestrator, it should be a thin orchestrator.

It should just delegate to the sub-agent. When you want to work with sequential
agents, every agent is emitting an output that the next one takes. So it's
really important that all the keys are present and the next one is working with
those keys. When we talk about the parallel agents, then the total execution
time of those parallel agents would be the slowest of all of them, not the sum
of all of them. And then when we talked about MCP, We said, if you really need
that, then use it.

Not just because it's a fancy word, but if something is recorded or required
from an outside domain, then you would use it. And also, the E2 Micro on Cloud
Run is free. So if you have agents that you just want to run within, let's say,
$5, I think that's a really, really good bargain right there. So with that said,
I'm going to show this once more to you. If you want to share your feedback
after the talk, I would love that. And also, if you can find me outside to have
a chat, I would love to discuss as well.

And thank you for having me.
