---
title: "Agent-Smith: Never Send a Human To Do a Machine\u2019s Job"
speakers: [Glenn ten Cate, Jorge Carvalho]
day: fri
date: 2026-09-18
start: "14:25"
room: Auditorium
track: Reliable Agents
kind: talk
session_id: 02d6108bab3c8392031b60f69a5548b1
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=19430s
contributor: jcpinto54
---

# Agent-Smith: Never Send a Human To Do a Machine’s Job

**Glenn ten Cate, Jorge Carvalho** — The Linux Foundation / Nedap

Glenn ten Cate is a Senior Cyber Security Instructor at [The Linux Foundation](https://www.linuxfoundation.org/), with a security career that has included roles at Schuberg Philis, Zerocopter, and ING, plus mentoring for Google Summer of Code. He co-created the OWASP Security Knowledge Framework with his brother Riccardo ten Cate and has served on OWASP's Global Board of Directors.

Jorge Carvalho is a Security Software Engineer and Security Champion at [Nedap](https://www.nedap.com/), working on application security, LLM security, and AI pentesting.

*Friday 18 September 2026, 14:25, Auditorium — Reliable Agents track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 5:23:50](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=19430s)), not an attendee's recording.

## Transcript

All right. Hello, everyone. Thank you very much for joining our talk. Today,
we're going to talk about one of our favorite things about hacking, AI, and
Agent Smith and the Matrix. So I hope you guys are ready for it. My name is
Glenn ten Cate. I'm now doing cybersecurity for more than 20 years, working at
the Linux Foundation as a sub-measure-matter expert. Wow, that was hard. Really
loving doing cybersecurity, and today we're going to present our journey in
building an AI-agentic pen testing tool, and also the lessons learned from an AI
point of view.

I think for everyone who is going to take on a journey like this as well, we'll
probably be very happy that the things we discovered can be very useful for you
as well. So that's me. Hi, guys. My name is Jorge Carvalho. I work for Nedap,
and I'm an AppSec engineer. As you can see, we really like the matrix. Yeah, all
right. So just a disclaimer, the stuff that we're going to show you is quite
amazing, if I say so myself. But you also should really use it with care.

We build an AI agentic pen testing tool, which really surpasses my skills. And
again, I am hacking for more than 20 years already. So saying something like
this by myself already emphasize why you should use it only responsible. So
today, we're not only talking about and showing the lessons learned, but another
cool stuff you can take home from this talk is actually having your own agentic
pen testing capability within your company to test your applications but also
your AI applications and we will talk about that in a bit more. So we are going
to load the guns and get ready. So like I said why we actually started with this
whole journey it is also because in the field of my cybersecurity we have a lack
of skilled people. There are currently 3 million open vacancies for
cybersecurity. Scaling doesn't work that well. It takes a lot of time also to
train and get the expertise.

And it's also sort of a way of living, right? Now, looking at the whole stacks
of software and the complexity and all that good jazz, it's even getting more
and more harder for good cybersecurity professionals to grasp everything, right?
So we needed something that was useful, good, even better, scalable. And yeah,
we're in the dawn at AI, right? So why not using AI? So I want to introduce to
you guys Agent-Smith. Me, me, me, and me too.

So Agent-Smith does scale, right? And like I said, it's even more awesome than
all my years of experience of hacking, different areas of hacking, because we
all have all different skill sets in that as well. But yeah, it really surpasses
that in many, many ways. So that's something we built. Also, when we're going to
talk about the lessons learned, it's good to just show very quickly, Jorge will
talk about it, just give you a highlight, what is it? And then we go a bit into
the deep dive on what we encountered and the challenges we had when when we were
building this AI agentic pen testing tool.

Yeah, here we have a sneak peek of Agent-Smith, how it works in some of his
capabilities. So we'll start with the terminal where everything runs. We run
Agent-Smith and you can see here that you can see already that he found work
sock debugger being protected and he already tried to find a way to bypass and
hack this. at the same time giving us a dashboard with live findings. So we're
going a bit to the dashboard. Here we can see the skills that we have, 35 plus
skills specialized in hacking.

We have reconnaissance, web exploitation, AI rate teaming and much more. So here
we can see which skill Agent-Smith is picking based on the context on the app.
So we'll always choose the best path for to find a vulnerability. And also it
can change the skills that we're gonna talk a bit later as well. Yeah, next
we'll talk a bit, going back again to the dashboard, to the terminal. We can see
that is trying to hack the pin protection with file read primitive compute.

So going back again to the dashboard, we have some logs where we can see the
Agent-Smith doing some tool calling, register test users, and much more. You can
see that he's launching SSF RF probes to check the vulnerability, and we have
the full HTTP history to be audible. Here we can see coverage. We make sure that
every API route, HTTP probe, every endpoint it's here, so it's easier to
validate that Agent-Smith will not miss any critical path in our target.

Here we have the word model where you can see a mental map, connecting all the
nodes. You can see the O, off path cookies, sensitive nodes as well. This is
really good for Agent-Smith because it will help to build complex multi-step
attack vectors and find really, really complicated vulnerabilities. Here, we can
go check the findings. The works are debugger console exposed. We can see a
description about the finding. You can see the evidence.

It will reproduce everything that it found. Proof of concept as well. Explain
business risk. It will be easier to validate and explore the vulnerability. And
that's it for a sneak peek of the Agent-Smith. Yes, so like I said, we really
built an amazing project, if I say so. And like I said, what I really love about
it, it's fully open source. You know, like I said, we really wanted to have
something that's scalable, especially nowadays when technologies and software is
releasing so quickly and we see the lack of actually the knowledge within
organizations to properly do something.

What is the response to it? Of course, you can buy a fancy nice box and a
machine somewhere. But, you know, I rather want to have something I know I can
own. I can change, I can customize to the need that I need to have within my
organization. So, yeah, that's why we have now Agent-Smith. The other thing that
I wanted to say is when we were experimenting with this, we had a couple of
challenges as well. And it was quite of a rabbit hole to go into because you can
imagine running these scans.

And then later on, you will see we're not only using frontier models like Claude
and so on, but also local models. takes quite some time to fine-tune, test, and
verify, like, hey, what worked, what didn't, what is an issue? Is it just a
glitch in the matrix, right? Or is it something really structurally that's being
an issue here? So let me dive into that as well. Let's go into the rabbit hole.
Yeah, when we started this project, we saw that the majority of the AI security
agents that were over there were basically wrappers around fixed payloads, so
they have a few hundreds of payloads to exploit, and we decided that we don't
want to be like that.

We want to invert it, we want the model to be the operator, not the script, so
the model itself will create specific payload for the target, with the context
of the target as well, so no more fixed payload, No more running tools manually,
no more stopping at first time success. And if you run the scan, it should be
same every time, so deterministic. With Smith, again, it will generate fully
specific payload for your target. It will have 35 plus skills that will help
enrich the main skill.

So if you're doing a white box assessment and you have access to the source code
of course, that will also enrich all, not all, Agent-Smith. And it will keep
searching and searching and searching until you say to stop. So two runs,
different attack paths. So skills, again, we have more than 35 skills. The main
one is Pen Tester. and if it finds an injection point, it will call WebExploit.
Again, if you have source code, you can run code base.

If it finds an LLM call, it will run AI red teaming, and this will ensure that
Agent-Smith will always take the best path to find that vulnerability, to find
that attack path. So the agents decide what to run. next based on what it's just
found. Yeah, maybe to add here as well that you know why this is so exciting
from a pentester point of view. Normally when we had pentest tools and all the
automated type of tooling out there, they lacked like context, right? They
lacked like business logic, specific business vulnerabilities, but also in terms
of AI, We have the AI red teaming.

So meaning that we tested a ton, really a ton of AI guardrail systems. I can
tell you we were crying in a corner because this skill really blew through all
of them. We actually made labs of them as lessons learned for other developers,
like not how to do it because it's pointless. It even resulted in us building
our own guardrail proxy as an open source project that actually does work. But
yeah, I mean, all this amazing stuff is here to use.

And like he's saying, it's 35 plus skills that are being chained as well. And
just when we were building this, that whole chaining concept and mythos and
going step by step deeper and deeper, that was like, wow, amazing. Well,
actually, when we were building this, it did exactly the same with the big
model, not the mythos, of course, but also with our smaller models that we will
highlight in a bit. So, it's really simple to run Agent-Smith.

You just call up the skill, choose the target, and then you can choose the
depth. So, we can run a passive scan, standard scan, and thorough scan. Thorough
will actually exploit your application. Agent-Smith is available for Codex and
OpenCode, so we can choose whatever you like. We also have 50 plus tools that
traditional pen testers have been using for the past years. So we'll fire the
tools when the Smith needs them and they will run isolated in a disposable
container.

So at the end of the scan, everything is gone, no RCN point left running. Yes,
so now we talked a little bit about how amazing Agent-Smith is, but let's go
also through the trials, right? Because we had some quite weird stuff and look,
we're not AI specialists. I guess not a lot of people are, right? But we thought
it would be nice to actually share our experience so far and what were the
hurdles. So for example, at the beginning we had a machine that was constantly
lying to us, saying like hey, the list and the matrix overview with all the
endpoints and all the different parameters that the security tooling did
discover by spidering, by brute forcing, directory fuzzing, all that good jazz.

You get a list of what is your scope of the application and your endpoints. And
then of course we told Smith, like, hey, make sure you do all of them, all the
parameters, all the endpoints. So what happened? The machine started lying. I
literally saw in the debugging and the locking, like, panic modes. Like, the
models literally saying, like, I'm panicking, oh, so much work to do. I imagine
the thing pulling out its hair, right?

And then because of this panic, this pressure, it started to just sweep a lot of
these matrix the endpoints with all the parameters like, oh yeah, test it, not
applicable, yada yada, right? So that was quite interesting actually. So there
we really changed the whole model in the sense of the Agent-Smith, the
framework, to really be like an evidence-based approach and where we also
limited what the model could set and flag and what was actually arranged by the
framework itself.

Because when we first implemented it, we had not a clear boundary of what the
model could flag and set, and then again, it uses the tool calls to still fake
it till you make it, which was not what we wanted. So evidence-based. We also
had a lot of times in the beginning that the agent kept wandering off, so like
spinning multiple and hanging in a certain area and not moving forward and just
endlessly trying on a dead endpoint that was really chewed out, like no
vulnerabilities in there anymore.

It kept going and going. So for this, we actually invented what we call like a
self-steering Q&A, quality and assurance. So it's a deterministic list of, yeah,
sort of checks and nudges where we inject that into the running model and say
like, hey, we see these type of tool calls, we see these type of outputs.
shouldn't you move on to this or chain it with something? Or I don't see any
tool calls. Where are the tool calls? Because you're doing ABC.

So this is actually, yeah, the sort of list, the QA agent that steers again the
model in the right path, so to say, yeah. So that was a good one. Yes, the other
thing, and this was quite an annoying one as well, and this happened also on the
big models actually, as you can imagine, a pen test can run quite for a long
time. If you have a lot of endpoints, it can easily take like three days for
like Agent-Smith to really run on everything.

And again, we want that, right? It is basically what we're trying to do is
bending the spoon at trying to let a non-deterministic thing work like a
deterministic thing, right? We want the full coverage. We don't want it to sweep
or pass things as yes, done and then there could be a major vulnerability in,
right? So we really wanted to do everything. But when you run it for such a long
time and you have huge outputs and tool calls and chaining and all that jazz,
yeah, then you have an issue because it missed things. You run the tool, you get
amazing results, you run it again and suddenly you get false negatives. Some
findings are not there. And you're like, what? What is that? Maybe the model
that is creative or no. What we found out, it's just a context window
compression issue. Because what happens if you're in a full kill chain or a
vulnerability being exploited by Agent-Smith and one of the skills, if that
compacting window hits on the wrong time, everything is gone. Yeah, it becomes
very stupid and then it's like, oh yeah, I did something in this area and this
vulnerability, but all the things that tried, what worked, what not, the leads,
they're all poof, gone, right? So here what we did was really compacting and
really measuring the amount of context that we had left, issue a compacting from
our own, so we were fully in control when that would happen, and then we also
used what we call an envelope system.

So we were building our own sort of mini summary for each of the lead finding
endpoint and parameters. Now later it became also very useful for the other
stuff that we're going to discuss. But yeah, this was basically how we prevented
it from forgetting things and making sure that when we ran the tool over and
over, at least the same amount of vulnerabilities came out and the same amount
of coverage was achieved, right? So this was quite an annoying one.

And especially when we moved to smaller models, all these little tweaks and
things and lessons learned would really benefit because now we were able to also
run it and achieve good results on smaller. Now also, like I said, the whole
mythos with the kill chaining and, you know, like connecting multiple
vulnerabilities to really have what we call like a kill chain, like a proper
path, We actually achieved this by also visualizing the data and connecting it
and presenting it a different way in the model, to the model, by using, for
example, the labeled property graph that also, for example, Neo4j uses, right?

So here, and you saw it also a little bit in the demo, you can really see how
things connected, how bridges can be made, and new full attack chains can be
identified as a sort of threat modeling, and then later being executed by the
model. We also have the model itself keeping the human in the loop, but also
when it sees weird stuff or is like, hey, I'm not sure, should I touch this? Or
I'm getting a lot of authentication issues.

Can you check? Maybe the account is not good anymore. So you have also the agent
itself propagating the hard blockers, questions, whatnot. So it will not decide
to do anything dangerous or problematic on its own. It's just escalating that to
a human, a human in the loop, like we call. So, yeah, now we're getting at the
good part, I would say, freeing your mind. Because, like I mentioned, through
the architectural decisions that we made, the coverage matrix, the context
window, the compacting, the evidence-based matrix approach that we took and all
that good jazz, it turns out it's actually going to be awesome, yeah, to also
use this type of capability then on smaller models.

So that's actually what we also did. And just before we did that, just to give
you a highlight, there is something called XBOW Benchmark that is like the
benchmark platform for security tools, which has logical vulnerabilities, AI and
all that, and normal injections, misconfigurations, et cetera. And months and
months ago, when we were just starting this project, we already achieved a
97-something percentage score in finding everything with a cost of like $220.

I believe all the details are also in our repos. If you really want to deep dive
into that, be my guest. But yeah, this really proved at the time that the
architecture, the skills, the model as the operator, all the lessons learned
that I just discussed package in that Agent-Smith framework, we really were on
to something. So as a security engineer, we always think the worst. And the
worst scenarios, one of the worst scenarios is that these AI companies stop
providing these frontier models.

And we cannot really go back to the traditional way of pentesting anymore. So we
decided to implement a local model into Smith. So running Smith on a local model
means no API builds, Nothing leaves your network. And for the best model that we
think that it fits the myth, it's Qwen3.6, 27 billion parameters. And actually,
it worked great. We're quite happy with the results. So we did some benchmarking
on a application that has 40ish vulnerabilities, maybe 42.

And we actually, with a local model, fully local setup, we actually got 35 out
of 42, which is pretty good. We're quite happy with that. So zero API costs,
everything stays on your network and skills still change themselves.
Vulnerabilities still change themselves as well. We built the full report with
the executive summary, risk dashboard, proof of concepts, Everything the same as
a frontier model should do. There is some cons.

It takes much time because it's a slower model, but at the end, again, quite
happy with the 35 results. Yep, now, and the next thing we just implemented a
while ago is actually what we call the army of Smiths. Like, because we built
Agent-Smith in a way that we have so much data in the right format already to
make sure that it actually works correctly. It's only a small step actually to
make it in a way that we now have training data where we can actually make small
LoRA adapters for these smaller models, right, to attach to them and to make
them even more knowledgeable, usable in the tools and all the stuff that we're
doing.

So here, the idea is more using what's already there, presenting and structuring
it in a way that it can become training data. So the more you will scan using
Agent-Smith, your network, your engagement, your applications, the more training
data you will get. And that can be used then to create LoRA adapters that we can
then attach to these little models like the Qwen, right? To be better at certain
tool output or where they're lacking.

So that's also pretty cool. Now, because time is running out, I also wanted to
demo very quickly here the example of how the dashboard looks like, because the
other one was a bit grainy. But as you can see here, we have the dashboard on
top. That is also interesting maybe to tell here is then the human in the loop.
Sometimes you get messages from the agent itself that you need to act on. Then
it will stop. What we also did to panic, preventing panicking, that we have
different stages, phase A, B, C. Phase A, we just tell the model, hey, man, do
whatever you want.

Here's the scope. And actually, when you don't put pressure on it, saying like,
hey, you need to scan all the endpoints, then it will actually just do them most
of the time. I'm saying most of the time. So that is phase A. Phase B is
actually now you need to scan all the endpoints, right? And then you see that it
sometimes skips things. So by formatting them in different phases, we also solve
that problem. And here I also wanted to highlight, for example, this
vulnerability.

So this is what we call a proper kill chain vulnerability, where we took over
the Kubernetes server count token, and how did we do that? By first doing an SQL
injection. So let me scroll a little bit down. Here's the whole proof concept to
redo it. So first we found from an external, unauthenticated calls to an API
endpoint that there was an SQL injection. In the database was the capability to
do file reading. Through that file reading, we could pivot on the server and
then find the Kubernetes SA token.

And from that, we could then pivot further into the whole network, right? And
then attack all the other underlying systems behind that. Now, I mean, look
guys, this is like, how amazing that you can do this from your little computer
at home on a DGX Spark, right? this type of capabilities. And how does it do it?
Well, like we said before, right? Using this model graph where it can actually
make all those relationship connections and I have this type of vulnerability
here, it connects with that, I can leverage like this.

And from this view, you get these type of kill chains. You can see them here.
Here are more even proposed kill chains based on the vulnerabilities it has so
far. But of course, if there are more vulnerabilities being found, the more kill
chain possibilities are also here, right? So that is a little bit what we wanted
to show you guys here. A, that we have an amazing open source project called
Agent-Smith, which we use for doing penetration testing.

You can use Claude. ChatGPT, no, they don't allow it. But Claude, other models,
yes, you can use. It goes quite quickly then. And the other one is, for example,
using a local model. We did also try quite some other models. They don't all
behave that well, but at least this one, the Qwen3.6 worked really perfect. Same
type of behavior like we would see in a frontier model, a bigger model. So yeah,
that were the lessons learned, amazing open source project.

So thank you very much for your attention and we're very glad to be here.
