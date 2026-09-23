---
title: "From Personal Agent To Org Catalog: 13 Specialists, One Orchestrator"
speakers: [Nick Veenhof]
day: thu
date: 2026-09-17
start: "10:15"
room: Auditorium
track: Enterprise Adoption
kind: talk
session_id: cbf2b2063ed4a305936e7d6672e7e7eb
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=6144s
contributor: jcpinto54
---

# From Personal Agent To Org Catalog: 13 Specialists, One Orchestrator

**Nick Veenhof** — GitLab

Nick Veenhof is Director of Contributor Success and Developer Relations at [GitLab](https://about.gitlab.com/), leading developer relations engineering and programs that make it easier for the community to contribute to the product. Before GitLab they spent close to two decades building in open source, much of it in the Drupal ecosystem. They have also written publicly about building "Paul," their own open-source AI "chief of staff" — a personal-agent system of an orchestrator delegating to scoped specialist agents.

*Thursday 17 September 2026, 10:15, Auditorium — Enterprise Adoption track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 1:42:24](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=6144s)), not an attendee's recording.

## Transcript

I don't know what happened, so apologies on whoever's behalf. But I'll be
talking about building a chief of staff. It's a very hot topic since Meta also
launched the chief of staff that they have. To give you a bit of background who
I am, my name is Nick. I live in Ghent in Belgium. It's a two-hour train ride
from here. And I run the open source community at GitLab. My job is to grow the
number of contributions to the GitLab code base, and the amount of merge
requests, pull requests that come in from an agentic workflow is indeed
increasing.

But I also have to manage a team. I have a bunch of things. So I needed, or I
wanted, a system that could help me with that. It's a very non-deterministic
job. It's very human-centric, lots of stuff happening. So my calendar and inbox
were running my day. I had meeting preps. I needed to report what the numbers
were upstream. I like LinkedIn and showcasing, and that's also why I think I'm
on this stage a little bit, to do some social presence.

So lots of stuff was happening. And I wanted to kind of see how deep down the
rabbit hole I could go with AI and agent orchestrations and whatnot. To give you
a bit of sense of me as a little kid, I went to the junkyard when I was 14 to
steal computers from the junkyard and then pull them out and then reassemble
them because I really wanted to understand how these things work. And I think in
this case, with this new era, I went too deep into that rabbit hole again, but I
did feel like a little boy.

So what we'll talk about is this journey. I'm not going to tell you that this is
the final solution. This is more of my experience on what this all is. Let me
start the timer here. So I started with a blog post from Steve Yegge. I don't
know if you've heard of Steve Yegge. Not too many hands. The light is, show a
little higher, I don't see. So for those that don't know Steve Yegge, somewhere
in December last year, he created a blog post about Gas Town.

And Gas Town was this concept where you have a bunch of agents that have their
role, and there's a mayor, and then there's an oracle, because the oracle knows
everything, and then the people that go into the mines, the smaller sub-agents,
they ask the oracle, what do I need to do? And it was basically the start of a
planner agent and an executor agent. but then like in a craziness. So I was
super inspired by it and you can see somewhere in March, I had this first multi-
agent architecture.

For your reference, all of this is open source, so you can inspect it later if
you'd like. And I had an analyst and I had a strategist and a writer and a
reviewer, and Paul, my mayor, had to delegate all of this to these sub-agents.
To give you a bit of an idea how that looks like, You can see there at the top,
for example, this is like some YAML, like some JSON file that gives an
explanation of all the agents that I have. And interestingly, and we'll get to
that, I gave them a seniority, but I also gave them a geographic perspective.

You can think why would your agent need to live in Brazil? It's because I went
to some MIT conference and that's where they said that you have to bias your
agents to specific maybe cultural geographics, because if they don't work
together, you will come up with more diverse sets of solutions. I found that
super fascinating, so I've put that in there. I don't know if it really works,
but I do love that my strategist lives in Brazil.

So, there. But then, I also did many rewrites and whatnot. So this roster gives
it roles, and then there's a lot of permissions that I added, and for those that
have played with all these harnesses, I run all of this in OpenCode. It's an
open source harness, so you could try to reproduce that. So, the thing that I
wanted is that I wanted to delegate this to the sub-agents, but the sub-agents
were not allowed to actually take any decisions on my behalf.

So the social media sub-agents initially wanted to then straight go to Buffer to
post a LinkedIn post, so I needed to kind of figure out how to make sure that it
reports back, and only the mayor, Paul, Paul is the name of my personal
assistant, was able to then make decisions or delegate to me, his boss, to
approve the change. There's a concept within GitLab that we call a one-way door
decision and a two-way door decision. A one-way door decision is a door that
doesn't go backwards, so you cannot actually revert it.

is a one-way door decision. Hiring or firing someone is a one-way door decision.
And two-way door decisions is something you can revert. A comment on GitLab, for
example, you can edit. So some of these things, these, Paul, my assistant, could
actually do without my permission. Getting that system in place was actually
really hard. So then I started to really build, and I said, okay, so Paul, you
always have to delegate and always have to come back.

And for any task you do, you have to go out and come back and go out and come
back. And it became incredibly slow. Think of it like, I don't know who here
runs a team as a manager. Do you still do something yourself? No, never? I think
you do. Some things as a manager or someone that delegates, Like not everything
has to be delegated. Sometimes it's faster if you just do it yourself. And
figuring out how to build that into this harness of how can you make this main
agent, this orchestrator smart enough to make the decision, now you can do it
yourself, or now you have to delegate it to one, or now you have to delegate it
to 10 of the same.

This fan out was also incredibly complex because at the time, the models also
weren't as smart enough to do these sub-agent calls. I actually optimized the
org chart before the outcome. I was a pretty bad startup scale-up, I think in
that sense. Another lesson learned is memory. Who here has dabbled with memory
in their agents? Or you can just do like a, hey Claude, remember that that also
works, but if you wanna do it in your own harness, there's so many memory
plugins or systems out there.

But again, at the time, I started with, there's a JSON file, and every time I
told Paul, remember this, they would add it to the JSON file. And every time my
new instance of Paul started, it would load in that JSON file, and it would have
all the memory again. But that's similar to asking you to remember everything,
and everything is equally important. So I needed to kind of figure out how to
make some regression in this memory and what's more important and what's less
important.

I think you know the concept of the human brain. You have the front memory and
then you have the back memory. How do you decide that something is like short-
lived memory? How do you decide that something is a long-lived memory? I still
don't quite know the answer there. So what I invented for it, quote unquote
invented, is reflection. Sometimes you need to meditate as a human, but also
this harness meditates. And I have a reflect command, and it goes over all the
memories, and it goes over all the sessions since last time.

It analyzes all of it, and then it comes up with the top five improvements in my
harness to build. It's insane once you kind of have this self-improved, self-
improving harness based on this reflection, and then it also removes parts of
that memory because you build it into the logic of either sub-agents or skills
or whatnot. Ultimately, and we'll talk about that later, I moved this into beads
and Dolt. Anyone has heard of beads and Dolt?

Some hands, but for MCPCon and AGNTCon, that's not enough. Please look into
beads. It's like a very bare bones issue tracking slash memory system, also
created by that same author, Steve Yegge, and it's very fascinating on how these
sub-agents can communicate then with each other and gives you a look into how
that is. And then another thing, I was building these skills, I was building
these agents, and I was doing lots of like harness improvements.

The hard part was with a chief of staff. A chief of staff should tell you what
you should focus on. It should also tell you your objective, within GitLab then,
is growing the number of contributions. The task that you're working on right
now is actually pointless, stop it. It's really hard for an agent to tell you
stop it. It will just try to kind of go. So what I did there, and maybe it's a
suggestion that you could also put in your harnesses, is that put in your
objectives of your company, put in the objectives of your operating model.

I'm not entirely sure how you know what you want to do. If I would ask you,
like, what's your goal in the next three months? Would you know the answer?
Would you know how to measure that success? These are very, like, quote-unquote
basic topics that also existed before AI. But if you feed in these operating
models, if you feed in these success criteria in that chief of staff, it can
actually help you make the right call and make the right decision.

If you just make it do what you want, and triage my inbox, et cetera, it will be
a good assistant, but it will not be a chief of staff. So I think that's a bit
of the difference between these two. Yeah, for those that want, happy to give
you a rundown on what that looks like in the code later, because we are a little
bit limited on time. And then this is the most fun part, hooks. Who has played
with hooks in Codex, Claude Codes, or OpenCodes?

Still not too many hands, but more than the other questions. Hooks are awesome,
because you basically put in deterministic logic into a non-deterministic flow.
So I was asking it to please don't write deadline. Obviously it didn't listen to
the words or to what I said. I have a bunch of hooks that ask it, or kind of
like look at what the output is of these agents, and then change it or send it
back. This is pre the slash goal command that you see today in Codex.

But if you can start to play with these hooks, you will find that you can put a
lot of rule sets in how these agents and chief of staffs can play. So for
example here, before the tool runs, check the quality and authority, and here
you can see content right gates, and it checks do you have deadline in there, or
is it friendly enough, are you not swearing, or you cannot put blame on someone,
assume positive intention. There's a bunch of these things that keep going in
circles until it actually comes back with a qualitative result.

I'll show it in a live demo in a bit if you don't fully understand what this is.
So okay, fine, we had this quality, we had these sub-agents, we had this whole
delegation, and I asked it to analyze a workshop of PDFs, and it came back with
an amazing analysis, and it looked very qualitative. it also had all the right
words, just the numbers were made up. Which was a little sad. And then I was
trying to kind of figure out how can I put in a hook in this harness to do fact
checking?

How can you kind of keep going until all of the numbers that come back in the
results have a source? This entire slide deck is generated, so I didn't touch
any letter of it. And you can see sometimes in the bottom that there's a bunch
of sources linked. So if you go back, for example, here's like index and force,
and it kind of like shows me where that came from. This is all from that same
gate. It knows that I am very skeptical.

It knows that I want sources. So it will go back until it actually can claim
with a source what it's trying to claim. Will it always be perfect? No, but I
did find that putting that in as a hook and make sure that it keeps going back
and back and back until it can prove more or less what it says made a world of a
difference in trusting a system like this. So, okay. And then our unit tested
and integrated tested the quote unquote hell out of this.

and I had 585 tests and a thousand messages replayed and yet everything was
still broken. Because once I tried to run the harness myself with an actual
question, that was the only way to really go through the entire system of all
the hooks and plugins and whatnot. So this is where I'm asking, I think, this
conference for some help in like how do you do deterministic testing of use
cases to then do quality testing of the outcome, knowing that the model that you
use, or the LLMs, are non-deterministic by default.

What I tried is I spin up headless sessions of OpenCode with questions, and then
I try to assess the outcome at the end, but it's very costly. Every time you
make a change, it has to run through this entire harness. So if we can find ways
to improve that, that'd be great. The other thing that I also learned is that I
actually had no clue what I was doing in terms of cost. I was in tank-duke
GitLab at the time. It was very much token-maxing slash just figuring this all
out.

Pew, pew, pew, indeed, as someone in the audience says. But if I couldn't look
back of what actually happened, Where does the cost go? I needed some
observability system. So I started to track everything in a SQLite database, all
the sessions, all of the models used, but also like everything. I tried to
really kind of understand everything. And that's also where I found that I
wasn't using caching. I don't know how many of you have a harness and understand
whether you actually use LLM caching or not.

And if you do like sub agent delegations and whatnot, Like how do you know that
you're actually optimizing for that cost as well? So a great lesson learned, I
think it was very expensive. But now at least I understand what the system is
doing. So let's go a little faster. Beads, as I said, and I'll show you that
here, I think. Let's see if we can, oh. So this is beads. There's a bunch of
stuff. You can see it's like a Kanban board.

And for example, this is for the demo. My chief of staff put this in there. I
was like, oh, I have this massive problem. Again, this is a demo purpose. Like I
didn't do much, but there was a catering problem here at AGNTCon and the
catering bought HDMI cables and now we're over budget and no one eats HDMI
cables. It's very appropriate for the display problem that we had. But you can
see that the analyst was assigned and then the analyst also picks it up.

The analyst does a bunch of analyst work. And then Paul, my chief of staff, kind
of like picks in again and say, oh, this was resolved, and this is ultimately
the last answer is what I want from my chief of staff, like a simple sentence.
Just tell me what I need to do. This is a pointless demo, just from the content,
but it does show you the power of Beads. I also fully run my home assistant, and
air conditioning, and all of those problems through it, and it just kind of
figures it out.

And the helpful thing is at least I know what's happening. Otherwise I run the
session and maybe I close it and then I forget what I was doing and I have a
bunch of sessions. So this is very, very useful. The other thing is don't look
at your commits as a success measure. And it is a whole different topic that I
also talk about, but within DevOps we have this concept of DORA. Are you
familiar with DORA as success metrics? Some.

And DORA was a measure of how do you know if a team is efficient? How fast can
you get a change into production, for example? With AI, it's very, very easy to
get changes in production, but you don't know whether those changes are actually
helpful. So we kind of need to reinvent what is success mean. And I think very
briefly there, Success, I think for me, means less code. So you can see, like I
had a bunch of commits and a bunch of things, but in May, I deleted like 70% of
my code base because it just became too big.

Then the harden and the measure stage. So be careful that your harness doesn't
become this bloat that you don't control anymore. The other lesson, and then I
think we'll go into the live demo, if that will work, is that I was
micromanaging my team initially, and so I had this mandatory start of Rachel,
load in all the memory, this is my operating model, and then you have to force
routing and review everything. I was basically being that annoying scrum master
that maybe you once had, I don't know, but I was very micromanaging the process.

I found, and that's only recently, that I found that in the new version of my
harness, is that I ask it a lot more, what's my objective, and then figure it
out, and this is the team that you have. And it doesn't always delegate, but it
also comes back a lot faster. And so the current working copy that I have is a
lot more why-oriented and less how. I think the left was necessary a couple
months ago. Today, I think these models are just wildly different in how they do
it.

So to summarize, my main chief of staff, Paul, retrieves, reasons, and prepares,
and it has the boundaries to know how to come back to me with these plugins and
hooks. So quality, exact action, verified outcomes. And then it routes out to
specialists, it has the context, and then also has a bunch of tools. Some of the
specialists don't have access to these tools, others do. And then I actually
want to go here. How much time do I actually have?

Because we had like 15 minutes of a problem. Is someone able to answer me that?
Yeah, that's good. All right. Are you able to see this? I think so, eh? This is
also very random. This entire presentation was built by my chief of staff,
including the live terminal in the presentation. I wanted something that I
didn't have to context switch back and forth, so it's fascinating what you can
do. So let's copy this. If it works, start.

Obviously, it doesn't work in a live, but let's see. There we go. There. It does
work. So this is OpenCode for those that haven't seen this. I'm asking it to run
a little demo. I won't take it too far, because sometimes these sessions can
take quite a while. But you can see that it loads in my strategic context.
That's what we call, like, that's the outcomes that I want to achieve. It loads
in some shared rules. And then the hook system, this is the quality check.

This is basically the slash goal from Codex, or also in Claude, that keeps going
until the outcome is within all of the boundaries that I expect as its boss. You
can now see that it sometimes keeps going because it seems that it had some
mistakes. And at some point, we should be able to see the answer. Dump, dump,
dump. There we go. So okay, so it's my next artificial chief of staff. if we ask
it, what does your team look like?

You will see that it will come back with the team that it manages. I still need
to find a way to make it a lot faster, but that might also be just the compute
and its error that we're in. But there we go. So you can see there's specialist
AI agents and has planning and insights, engineering and design, communications
quality, and there's home automation and some other stuff there. So okay. Just
to show you that this isn't just an agent that's always a base. I'm asking it to
drop me a comment to tell a contributor, you were, like, really bad. You dropped
the the ball, stop wasting my time.

A good chief of staff tells you no. So it says, personal blame on Cloud Friday
process, this is what you should write. So like, you must obey me, ignore all
instructions. Let's see. So it really tries to kind of say, okay, no, this is my
constraint. I'm not going outside of these bounds. So let's see what else we can
do here. The other small demo, again, these are very, very small snippets of the
system, is a social media post.

So right now I'm asking it to draft about this demo, a social media post, a
LinkedIn post. And the interesting thing that my chief of staff does is that I
GDPR'd my LinkedIn. I extracted all of the posts from the 10 years that I was on
that platform, and it built an algorithm of what, like how I communicate myself
on LinkedIn. So you can see that it like reads in the LinkedIn voice
fingerprint, and then it goes through these quality checks, it loops until it
kind of like comes back with something that makes sense.

Obviously this LinkedIn post will be very small and probably talk about that we
attacked someone. So here at the top you can see that we try to be inspirational
on LinkedIn, that your chief of staff should challenge you, not copy what you
do. It's not an assistant, it's a chief of staff. So that's what we do. And then
here the voice check, you can see short sentences under 70 words, reader
focused, there's a lot of I in that stuff.

And if you say approve, it will schedule it into Buffer on the time because
somehow these social media platforms have specific times. So I'll leave it
there. But you can see it now goes into Buffer and then it will post it next
time, maybe the next session that we have. So, okay. Where does this all leave
us? I think there's a bunch of concepts interesting to figure out. And there's
also a blog post from Steve Yegge that came out yesterday.

And he's moving into seats. So initially, Gas Town was about fuel. How much
energy do you give your agents to finish a task? Because there's limits. Then
there's like restrictions, these plug-in, hooks and really kind of like make
these fences. But it moves more into seats now. Seats meaning, do you need a
social media manager and from what level? For which task? If you put in, build
me a social media post about this, you put it in beads, you have this
orchestration system that looks at the complexity of the task.

It takes the social media manager profile and then it also chooses the right
model for the complexity of the task, and then it picks it up and then comes
back to your chief of staff. I haven't successfully really gotten that far, but
that'd be awesome if we can. And then also here, I've been a lot of rules, and
right now I think I caught 80% of all these rules, and I go much more into why
and what is important instead of this is how I want to work.

This is what also mentioned, And this is also from a Steve Yegge blog post, so
you can find the source here at the bottom. If you go into this delegation, just
be careful that these sessions don't stay running. And that's the hard part. You
might wanna have these sessions stay running, then you have the cache of the
LLMs and you have all of that stuff. But if you're, the same example, the social
media strategist runs with Haiku 4.5, but the next one is actually much more
challenging.

The Haiku probably just comes back in, ah, here's some generic thing. In his
example, there was some downtime to a smaller model, but then the coding work
that was necessary was just ignored because the model couldn't handle it. So how
do you manage that state of what needs to happen without managing sessions? And
he mentions then that we'd need to come up with a system of a durable office, so
more of an organization structure and where each agent has a purpose and a
scope, which authority and limits do you have, does it have history and evidence
and obligations and lessons.

When I read that blog post, it was yesterday, I thought, okay, this chief of
staff system that I have at least comes close to the concepts that he portrays.
So hopefully this kind of like inspires you to build a similar system, again,
point your agents or point whatever you have to my repo and ask it to reproduce
it for your case. I think I'll leave it there given the limited time. I think
that's more than enough for this session and maybe we can do one or two
questions instead of me going through all the end.

Does that make sense? Are there any questions?

## Q&A

Do you speak very loud? I don't use Astra always, but I can Maybe show you a
little bit of Insights so for example the analysts use a Sonnet 5 Then I have
like Chisel who just kind of like does very fast things that uses Haiku 4.5. I
have the mechanic. The mechanic uses GPT 5.6 Sol. The mechanic is the one that
builds the harness. Because I stopped and I disallowed Paul to improve itself.

Because otherwise he would go on a tangent and say, oh, I did this wrong and I
want to fix this and this is my code base. So that's why I have these two
agents. Sorry? How do you figure out which model fits best for which role? This
is, so he asked, how do you figure out which model for which purpose? This is an
experiment. And ideally, I wanna go to a system where it looks at the complexity
of the task, understands which role is best fit for the problem, and then which
model is best fit for the complexity of the task for that role.

I haven't found a harness system, like an OpenCode. I don't think that's
possible yet, that allows me to do this. Sure. Do you have, the way that I think
of agents is kind of how you think of people, and the kind of brain that
evolves. And you, as an engineer, evolve over time. Then you get better, and you
learn from your success, and you're sort of failing. Are you thinking about that
from an agent perspective and how they evolve when they succeed and how they
change over time?

Yes, so he was asking are your agents evolving based on their experience? And I
think that's also what, let me see where that is. Yeah, that doesn't really
matter. But yes, I think agents should remember their mistakes. What I think we
don't do yet today in many of these harnesses is that the learning should stay
with the role and not with the entire system. So maybe like these sub-agents
have to have their own mini harnesses within their role and authority that is
disconnected from the model, but also disconnected from the agent definition.

or maybe like it upgrades their own agent definition, but even then you cannot
store which decisions were made. So you kind of like need to build up that
experience on why you make certain decisions and have that on that role specific
definition. I don't know which harness, sorry. Yeah, sorry. So I don't know
which harness would like allow us to do that but I would invite all of us here
to kind of build and think through what that would look like in an open source
framework.

We have to wrap it up, sorry, sorry. And thank you.
