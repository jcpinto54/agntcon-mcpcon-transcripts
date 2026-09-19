---
title: "We Built an Agent, We Shipped a Compiler. Here's Why"
speakers: [Joel Verezhak]
day: thu
date: 2026-09-17
start: "16:55"
room: G104 + G105
track: Agentic Engineering
kind: talk
session_id: a163cdaa47c9dbb24c6a3615aea9a1a7
recording: RAI Amsterdam 5.m4a
contributor: jcpinto54
confidence: confirmed
---

# We Built an Agent, We Shipped a Compiler. Here's Why

**Joel Verezhak** — Grafana Labs

Grafana Labs; frontend/platform engineer.

*Thursday 17 September 2026, 16:55, G104 + G105 — Agentic Engineering track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.

## Transcript

I'm from Grafana Labs. I'm an observability architect at Grafana Labs. Does
anyone know what observability architects do at Grafana Labs? Awesome. So I'm
not a software engineer. I'm actually in GTM, I go to marketing. So we talk
about anything. But that's important, actually, for this talk. So go easy on me.
All right, so I actually submitted this back in April. It's now September. It's
about six months. Which I think, in 2026 terms, is just an age, right?

So a few things have happened since then. So yeah, I'm gonna type it. So I said
we built an agent. What we actually built was kind of a skill for an agent. Like
we started with poor code and we just went from there. But this is kind of the
story of that skill. When I say we shipped a compiler, what I mean is I tried to
take that skill, and try to make it kind of deterministic and programmatic. A
better word would probably be engine. So I tried to build an engine, like a
work-flow engine.

But actually what we have shipped today is a different skill. So this is kind of
that story. It's sort of the story of conference-driven development. You submit
the ending. Back in April I was really deep in the engine part. And I was hoping
to kind of stand here and sort of proudly present this beautiful engine that I
built. Actually, it's not going to be like that, but it's going to be the story,
it's going to be some learnings.

Hopefully there's some kind of useful things. It's the story of how I got kind
of very absorbed in building this and learning what was worth. This is me, this
is my family. So I'm Joel, I started out as a physicist, moved into IT about 10
years ago. I very rapidly moved out of banking IT. I live in Switzerland, so
banking IT was natural. But then I sort of fell in love with cloud native
Kubernetes, and I ended up running observability platforms.

These are my three kids. This is us playing in the park. Kids are very
important, actually, for the story, especially the small one here, because she
was born back in February, and I had some parental leave. So the parental leave
kind of framed my discoveries and playing with the . So I had a real job to do.
Like, I'm going to describe what that job is. a lot of curiosity, and suddenly
kind of with AI and a genetic workflow as a way to build things, which I
probably shouldn't be building, but I can now, so why not explore it?

And the combination was very enjoyable, so it gave me a lot of opportunities to
discover what I didn't understand. So, Grafana Labs. So we made open source
observability tooling, and we also have a managed platform that helps teams and
customers understand their software, investigate problems, keep it running
reliably. I'm an OA, observability architect. We're effectively technical
customer success. So we work with customers after the sale and we're kind of the
long-term partners.

So that means that we have to understand really well what our teams and what our
customers are trying to achieve, right? So we want to help them to make good
technical choices, get as much value out of the platform as they can, and we
need to work with them as their needs change. So sometimes it's like an
architectural consultation sometimes it's just like a training or enablement to
use a future partner and the relationship is really important right so we don't
just deliver something we come back we get feedback and we see if we kind of
moving the needle in the right direction and to do that we have to agree on the
direction otherwise it's really easy to kind of show up to sinks and solve
problems and you know feel like you're very busy but actually it's not very
valuable anymore so there's these kind of three questions which we use in
Grafana to frame most of what we do why do anything why Rafaela or why do it
this way and why now why does it matter in a customer conversation that sounds
like what do you need to improve how can we help you get there and what makes it
important now why can't we just leave it for a year you know doing stuff is
difficult so a success plan is the way that we record the answers that we agree
on the customer has to tell us what they want to achieve how we'll know it's
working how we're going to measure that the sort of the success plan is being
achieved and when it matters and it gives us something to return to as the
relationship develops the framework is kind of a living document right which I
really like because it means just because we've generated it it doesn't mean
that we never look at it again we constantly referring back to it we build it
new requirements come in it's something which is constantly evolving and it's
really a back and forth conversation with the customer The problem that we had
is that we needed plans for every account that we run.

And when you have hundreds of OAs and each of them has, you know, tens of
accounts, this is really a lot of success plans to generate. And it takes a long
time to prepare a success plan. You have to look at a lot of data. So you have
to put in sort of, you know, commercials, of course, but you also have to put in
meeting notes, a lot of different text sources, unstructured data. It's really
kind of a great problem for an LLM to dig into.

So yeah, I was in my first bout of parental leave in February, and I was getting
very frustrated and not working, because I'm kind of like that. It drives my
wife crazy. So yeah, I was thinking a lot about how I can automate my work
first. And I think February was an interesting time, especially on the non-R&D
side, because basically when I came back from that parental leave, the core code
and skills were everywhere. It wasn't something that just engineers were working
on.

like marketing had a plug-in for cloud code and it was everywhere. So people
were really starting to adopt this and I think that's really the time that kind
of agentic workflows moved out of just like the chat GPT web interface to yeah,
we can actually build something and publish it and we're not software engineers.
So this, you know, I was very motivated to say, okay, I'm gonna tackle this
problem. I'm gonna build this skill, right?

It's a set of instructions that an AI system can use, domain knowledge. I
thought it would be super straightforward. Yeah, so this is where we got to. It
started small, like just a skill, right? Read the account, gather the data,
draft a plan, show it. Sounds really easy. Then of course you go through this
whole kind of iteration, right? You spot something wrong, you add an
instruction, you add a reference document, it starts to blow up, okay?

And by April, the skill had grown to a huge document, 500 lines. It's quite
tempting to keep on doing this, right? You always kind of explain yourself and
you sort of convince yourself, ah, you know, the next time it's going to get it,
right? I just need this one. But you can't do that with these systems, right?
They're not deterministic. They are probabilistic. So they'll always find a way
to kind of convince themselves that in this run, that bit you said doesn't apply
because of this, right?

They can do this. So every time I tighten the instructions, the results got
worse. And this is kind of known, right? You overload the context, the agent has
too much to focus on, so it's not powerful enough, it's not possible to do too
much in one session. And of course, it was an education, because I've been
treating these sentences as kind of guarantees. But the models can produce these
super convincing plans, and actually if you just take a cursory we glance at it,
it's all kind of nonsense. So it started me thinking about which parts I can put
into software, right? Which parts I can make deterministic, and which parts I
really needed the model to actually make use of the language capabilities,
right? All I really needed it for was to synthesize the plant and make it sound
good. The important thing was the data. So that was the next iteration, right?
So I kind of grew into this monstrous monster skill, we had Python scripts and
they had instruction.

So it was basically breaking the work up into steps, read the sources, organize
the evidence, draft the plan, which you can get. The same as we tried to do in
prose, but with kind of a data contract. So each of these scripts had a data
contract which redefined when you pull data from Slack, it looks like this. When
you pull data from BigQuery, it looks like this. And it started to help. We even
added a judge at the end. And the judge was just a very simple kind of rubric
which said, hey, success plan has to have three to seven business outcomes, all
of them have to be metrics, the metrics have to be related to the outcome, yada,
yada, yada.

And it started to feel reassuring. You could point to the past and say like,
hey, this does this, this does this, and you can expect what was being passed to
them. But by the end of April, like this skill had become just monstrous. Like
it was 42 files, it was 14,000 lines, I think, mainly comments probably. And I
was basically learning that AI made it super easy to keep building, but you
shouldn't at some point. So anyways, the thing was the data contracts, they
actually made it much higher quality, measurably.

People were saying, yeah, this looks cool, compared to the first one. So we
started ramping it up, and we had a few ambitions to run this across hundreds of
accounts as a first trial wave. The more we used it, the more kind of surprises
started to appear and one of them really changed the direction of the project.
The wrong customer, right? The wrong customer data started to appear. One of the
OA's basically reported, hey, I've got this plan and it talks about this guy,
but I know for sure that they are actually over here.

And we've also mixed up this metric with this and this business and it was just
a leakage of customer data, right, in the same success plan. The agent had
basically gone off on a rabbit hole and mixed in, you know, got confused and
mixed in with different data from different customers. It's very different kind
of wrong from like an awkward sentence, right? So that's sort of something which
is absolutely no-go, especially for customer clients.

Of course, it happened during development. I should probably say that. So
nothing got to the customer in the end. But it gave me a hint about what I
wanted to stop, right? I had got to this point with this huge bloated skill. It
was really the trigger for the next stage, which was the engine, right? I wanted
to say, okay, I absolutely want to lock this down. I need an actual guardrail,
which is more than an agent convincing himself or following a rule.

I need to make it impossible for the agent to actually query data which doesn't
belong to their customer. That was the main lesson I got from this, that you
have to establish the customer's identity. With these important things, you need
strong guardrails. Hold on to that because it comes back at the end. So then
came the success plan engine. Now the success plan engine was just a Go
application. Go is one language I'm mildly familiar with, mainly from working
with open source observability software.

Most of it's written in Go. So yeah, it was very natural. I also know you can
have structs in Go. Data models in Go is very, very powerful. Go is very well
suited to this. And we basically took that pipeline and the data contracts from
the skill, put them into Go, and we sort of built this workflow around it. So,
okay, so this is like an evaluator critic workflow. It's very classical. So we
have like a draft of the plan, evaluated checks against psychic evidence.

And this was also something that we could do now, right? We can actually make
sure that the items in the success plan are grounded. We can say to the
generator, don't just tell me that the customer wants to reduce MTTR, show me
the call or the Slack message or the email where they said that, right? so you
can force this grounding. And the critic's job was to make sure that all of the
evidence that was passed in was proper. And the first pilot, I mean, it was, in
terms of quality, it was incredible.

It was much, much better than what we had with the basic skill. The problem was
it took about four times longer to run. So it kind of makes sense, right?
Because the critic was very, very strict. and if it found any problems, it would
basically say, yeah, go through the whole thing again. And of course, I could
have spent time to improve this. But what would often happen is you'd send it
back in for one problem, send it through the whole cycle again, and it'd come
back with three problems.

So yeah, this is why the runtime kind of blew up. And we shipped this, right,
because the quality was very good. People wanted it, and we actually shipped it,
so people started to run it on their accounts. It was very exciting to see this
start to actually get into production, right? It was starting to become useful.
But then that was the problem. I just put an application into production. And so
I had to like keep it useful. And this was kind of the next education that was
happening.

It's like this thing was very easy to run. The collaboration was difficult
because, you know, not everyone was a software engineer. Not everyone was
accustomed to running with Go. of course they can point their coding engines at
it, but the level of skills was different. So it was very easy to use, but it
was not easy to contribute, it was not easy to change. Another thing was, you
know, if I wanted to try a different model on a whim, that was very difficult
because you had to write a whole new module for it, you had to understand the
API, you had to understand the different technical aspects of that API.

And I think also just in the time that I was developing this or working on this,
we went through like Opus 4.6, 4.7, 4.8, and every time you had to check again
if the model was correct, if you wanted to even upgrade the model at all. I was
also kind of still fixed on this determinism dial. Like I had this idea that
there was a perfect success plan for every customer. There was some theoretical
mapping from the customer with all of the data to the perfect success plan, like
a mathematical function. And I was trying to find that with this tool. And I was
trying to think, okay, how can I control this determinism? But of course, it's
something which you're kind of fighting against, right? So if you try games like
lowering the temperature of the model, in some cases, that's not possible,
because you need reasoning. So it was really a journey. I enjoyed building this
thing. But the truth was that it was becoming a full-time job to run this one
small piece of the whole observability architect job great project for like a
software engineer or even team but i'm an oa right i've got customers to look
after and the whole reason i started was to give us more time with the customers
i really felt like this like this was during my second bout of parental leave
and sometimes you have these projects that just don't leave you alone and i just
wanted to keep on working on this thing and it was it was I was deep in the
rabbit hole right so while I've been building all this like the models have been
improving and I figured you know what let's just try a skill again but this time
I you know I done a bit more reading I've done some more education I've done
some courses and two things actually made a huge difference here so I basically
took the skill which you know, if you just ask Claude or someone to do it. If
you ask an agent to generate a skill, it's super close. I basically took a knife
to that skill, cut away everything.

I took it down to about 50 lines, core instructions of what was important. And
one of my first instructions was just be curious about the account, like sort of
treat it playfully. You're exploring here. Go and explore. You have access to
these tools. Explore. That actually, you know, explore, and I think the exact
sentence is, I explore until you have a good understanding, or you've convinced
yourself you have a good understanding of the account context. And this, you
know, this was actually very effective in allowing the agent room to decide when
to stop with the exploration. I didn't have to write rules, I let the agent
decide. The second thing was keeping the plan template out of sight until later.
So this is the idea of progressive disclosure. Previously what we've been doing
we've been basically saying this is a data contract for a success plan go and
fill it in and the agent would kind of eagerly slot in items once it found it so
it goes and reads a call the customer mentions offhand oh yeah reducing MTTR
would be great and it grabs it and slots it in first place and it doesn't really
sort of have the full picture have the full context of the account maybe MTTR
was just one guy who cared about it but the customer really cares about lower
TCI lower total cost of ownership. So we changed the way that the agent ran and
we kind of said okay only read the data the target data model after you've
convinced yourself that you have good understanding of the account. This is a
very simple instruction every agent was able to follow it but it dramatically
improved the quality of the skill, sorry the quality of the success plans that
we got from the skill. So yeah this is progressive disclosure right introduce
the structure when it's useful introduce the reference when it's useful as clean
as possible until you need to actually populate these two changes became very
central to the skill that we actually kept so in the end yeah like I say it was
54 lines there was one sequel query and this sequel query was also very very
important because that was the sequel query which said this is how you make sure
that you don't leak data about other customers. So it was kind of like a trade-
off. I know it's not a guardrail, it's not something strict, but it's a very
simple instruction that to this day I think we've had no more instances of data
leakage across customer. And just to reassure you, we're not just pushing this
out into the customer's inbox, right? It goes through a human and OA that
actually checks. But it did significantly. So it was important to make the
instructions is extremely .

So the agent still has autonomy. There's a concrete query and there's clear
guidance, but there's not like a hard boundary that makes it impossible. There's
not inconsistencies which can arise and then the agent has to choose what it
wants to do in a given moment. And of course the observability architect is
still checking the evidence at the end, so the success plan, checking it for
signs of quality before it actually goes to a customer.

Of course, we still get variation between runs. We haven't achieved identical
results with the engine either. So for this work, the variation was manageable
with human review. Typically, the most important context that we got was not
from the data sources, it was actually the OA saying, hey, actually, this is
really good for the customer. And yeah, we actually now fully rolled this out in
our team. So colleagues are already using the skill in their own accounts, 54
lines, a lot of learning behind them.

And yeah, it's actually moved to something which is very, very valuable. I guess
if I had to say one thing to kind of, or two things to take home. First thing is
to stay curious yourself, but also let your agent be curious. This was really a
huge unlock for the quality of the skill that we built. And I say I started this
knowing very little, I still don't know enough. Built things, broke things, over
complicated things, had fun. So yeah, so this was really my key takeaway is
like, that the agents be curious for this kind of exploration topics. Another
thing which is really important is to bring the team with you. So if you build
something which has kind of a high barrier to entry for the team, then adoption
is going to lag. And then basically build yourself a very fancy tool that no one
else can use. So yeah, this is kind of what I learned.

Let's see where we are in six months from now. Thank you very Thank you very
much. And if you have any questions, we can meet outside.
