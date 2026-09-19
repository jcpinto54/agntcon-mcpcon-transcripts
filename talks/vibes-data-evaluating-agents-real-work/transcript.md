---
title: "From Vibes To Data: Evaluating Agents on Your Real Work"
speakers: [Ville Hellman]
day: fri
date: 2026-09-18
start: "14:25"
room: G104 + G105
track: Evals & Testing
kind: talk
session_id: 5afb0b4976e22b92d7979a974d8ffbb6
recording: RAI Amsterdam 12.m4a
contributor: jcpinto54
confidence: confirmed
---

# From Vibes To Data: Evaluating Agents on Your Real Work

**Ville Hellman** — Datadog

Ville Hellman is a staff software engineer at [Datadog](https://www.datadoghq.com/),
based in the UK, working on how agents are measured rather than merely
demonstrated — the question this talk frames as "how well do agents actually do
at Datadog right now?"

*Friday 18 September 2026, 14:25, G104 + G105 — Evals & Testing track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

And this talk isn't about why I think we should supply a digital implementation,
but more about why we feel comfortable doing that. So, let me give you a little
bit of a back story. At the beginning of 2025, maybe late 2024, we started
testing out all these new ways of working in life. We started copy-pasting host
lists from that GPT, and then we had a little command line cursor, which has the
report page panel designed. In that spring of that year, we had Cloud Code come
out and we spent a lot of our time advocating AI literacy.

Because we saw that the way we were working was really changing and what we
wanted to make sure that everyone was going to be working there. And
fortunately, we were pretty successful with all of that. So by September of the
time, a year ago, we had a ton of teams that started creating MCP servers. They
were writing skills, maybe they wrote commands back then. We introduced a cloud
marketplace that all of a sudden was full of plugins.

And we started seeing more and more of these steering documents appearing in our
repos. And this is also at the same time as we saw a lot of the cloud move from
using ads like this, like the autocomplete, to actually using agents for their
work. So then in late 2025, we started the model for this problem that we had,
that we don't know how to make coding agents better inside of Take the Dog. And
we know that the labs are spending billions, if not trillions, on making models
better as software engineers.

And we tend to track that with benchmark, like SweetBens, Terminal Friends, and
later something like FeedSweet. The problem is that at a slightly bigger company
like Take the Dog, that actually only accounts for some of the work. And that's
because we have a whole host of opinions about how things should be done. So we
have plenty of internal frameworks, we have platforms, we have preferred
libraries, and none of that is in the training data.

It can't be internal to us. And unfortunately some of that stuff is also
unevenly adopted inside our repository, so just looking around in the repository
for a good example might not actually get you the right answer. So we really
started to care about the work being done in a certain way, or the data-dog way
in this case. Because it was really kind of pointless that if you have these
agents that are really great at producing this brilliant pull request, that's
just worse.

But it doesn't fit with any of our systems. So then all of our engineers are
spending all of their time in changing that to be something that we would expect
to have. And as we were going through the initial question, we realized that
there's actually probably a more important question as well, which is how well
do agents do at Datadog right now? And once we started thinking about that, we
realized there's a whole lot of questions that we don't actually have some
answers to.

We have some, again, rights and anecdata on this, but we have no real confidence
in enabling some of these. Like, how do the models compare? Which MCP works best
here? Does the new skill actually improve the performance? And so on and so
forth. And we had everyone who was super busy making all of these changes and
trying things out, but they had actually no way of knowing whether they were
making things better or worse. And they were coming to us at AIFx, and it was
really hard for us to make good recommendations into those things as to what
they should be doing from there.

So we started to build out the system. We call it a deep or agentic data
engineering evaluation platform. By the way, if you're building an internal
platform, give it a easy name that's easy to drop in an AI meeting. It does
amazing things for the marketing. They started calling us deep armadillos for
some reason internally. It's kind of fun. But the basics of the platform, you
can see, are quite simple. And I'll go through some of them.

So from the beginning, we chose to use an environment that tried to resemble
what an engineer might actually have access to, or what a useful background
might have, potentially. And why we don't run on folks' laptops, like a lot of
engineers, when the work happens, we have something internally called
WorkSpaces. It's essentially cloud-provisioned instances that our engineers can
get into or connect to. And so we decided to use workspaces for these
environments that we run the evals in so that they reflect as realistic of an
environment as an engineer would have.

We then call in source code from one of our monorepositories or monorepi, as we
call it. Bit weird. And then we configure the rest of the environment kind of
like you would an engineer's working environment. So we set up things like
manager proxies and so on and so forth. And then finally, one of the important
things we do as well for our environment is we make sure that they are always
clean. So every agent starts from a clean environment.

So you don't get the pollution in the emails themselves. And from the beginning,
we knew that we wanted to test different combinations of things. So from the
beginning, we decided to split the definition of an agent for us to be a tool,
probably called HANES nowadays, and the model. So a tool would be something like
a code code, open code pipe, and the model would be something like an over-
suitable and so on and so forth. And the tool, or the HANES itself, would be
exposed to a very basic interface, so it knows how to install itself in the
environment, and then it knows how then it knows how to accept these tasks.
Fortunately, we have some friends at the Datadog APM group, and they have an
open source project called trajectory. And as part of that, they have a common
trajectory specification. So we're just leaning on to it. And it allows us to
very easily introduce these new tools into the in the friend workers,
essentially, it allows us to be part of this, going into this common format that
we can impart to people.

So what are the tasks or the evals themselves look like? So this is one of the
first evals that we actually introduced. And we wanted the evals to be
reflective of the kind of things that we would want folks to be doing. So for
example, create a simple human service. It's not a very long description. And so
this is stupidly simple, kind of on purpose, in that this is how we want our
engineers to be actually able to prompt the agent. We don't mention what
language they should use, we don't mention what framework they should use, or
any more detail really. And the reason is that for those sort of things, there's
actually already met information in that prompt that there is a correct answer
already in our kind of accepted best practices and documentation of the company.
And so we want the agent to be making the right decision for our engineers
rather than our engineers having to know every single point that the company or
the company that comes out.

We want them to be really simple to say, we're in the service and the agent
knows what should be done. Okay, so what does an eval look like? We use a very
simple path-based and then minimally we have the prompt like we saw in the
previous stage, that's something like prompt.mp. We have a configuration file,
contains a bunch of metadata, pre-environment, set up scripts, and that sort of
things. And then we have this judge template.

And when we run an agent, what we do is we capture the text output from the
agent, we produce a gif-diff, essentially all the changes we've made in the
workspace that it's in, that it's in, and then we capture all the logic for the
outputs, including tool calls, terms, and everything else. And then we make all
of these available to the scoring so that the teams who are designing these two
valves, they can choose what to underscore.

And we ended up using a goal scoring system where we have either deterministic
checks, so you can write the check against any part of the output. So for
example, you could be a single check library. Does the produce patch contain a
Go import with a certain library, for example. We also include an LLM as a judge
so that we can get more of a qualitative score of the solution. And that often
means that we'll be reading the judge not only what we care about, but also live
links to our best practices documentation so that it can then read the practice
documentation, it can look at the implementation and tell us, okay, how closely
does this actually follow the best practices. And the nice thing about doing it
like this is that we don't just get a pass or fail for something, we get a nice
score, we get an idea of how well the agent did at a specific task. And that
could be because, let's say, it was creating a new service and it chose the
right framework and it put it in the right placing the repo correctly set up all
the build tooling.

Let's say that one of the endpoints exposed didn't have the expected prefix that
we expect for internal APIs to have. That shouldn't score zero. It might score a
0.8 or 0.9. The team who owns the service creation can then decide how important
that is. So we have a whole bunch of evals then. OK, what do we do then? So from
very early on, we introduced a nightly sweep run and essentially it's just a
list of agents i think we run 10 to 12 agent tool combinations right now every
night and we run the entire and suite of emails we have against it it gives us
lovely charts like this that allows us to make decisions about what is the best
score cost trade-off for any human model i was trying to get a new one with the
gbdc it's astra it would be way out there and not on the burrito line, it's very
expensive and there's a bit of saturation.

What it also gives us is it gives us an idea of how the agents are performing or
evolving over time or how our environment is evolving for them all the time. So
we can start then and represent like hey are we making our environment more or
less hospitable for agents. And finally it acts as a really good baseline to
compare against. So if anyone else is running experiments on our platform, we
have a whole bunch of lightly runs that we can then establish things like
standard deviation metrics from, so that when they run their experiment and on
this non-deterministic system, they can tell us hey, I made a change to the
environment or I made a change to this skill, our scores on this month is more
of a deviation that we get from running these sort of things.

So token of experiments, so us at AI Development Experience and one or two other
teams at Azure, we've been running a whole lot of experiments and here's some of
the fun things that came out of them. Some months ago we tested tools like
Capeman and RTK, so they're both tools that are aimed at that are producing
token use from PoonPo. Rather, they might be better now. But this was a couple
of months ago. And we found out that actually both of them ended up increasing
the amount of tokens that were being used with this kind of .

We also tried Headroom recently, which is in a similar space. And it turns out
it actually saved about 25% of tokens that we were . And as we started rolling
that out to our engineers, what's great is that the real world performance
metrics that we were seeing were actually matching what we were seeing from our
platform as well. So that was great validation there. As I mentioned earlier,
the people who runs our front-end, they ran an experiment. They needed all of
the floor DMP and all the steering files and all the performance went up and
just went down. They are now reintroducing all of those files, but this time
they are actually measuring the distance rather than just dumping things into
the context.

We tested a third party model problem solution from a company. They were very
specifically on the code code harness and picking the right code model to use.
And it turned out it increased the cost and reduced the scores and really rolled
it out. And, uh, and by some of the, uh, data from, uh, uh, uh, what we recently
did is we switched the default model in code and the default model for all of
the skills in our marketplace, um, from and that ended up saving, uh, $650,000,
uh, a month.

We published a blog post about that and some of the other of the same that we've
done, and that's in there, technical request. And what we've been able to do is
use a platform like a to test out all of these theories before and . And that
really helps. So OK, it hasn't been all sunshine and rainbows, unfortunately. So
one of the things that we struggled with from early on was trying to communicate
to the teams how the eval should be written.

because the problem you have is that the team who owns the solution, they will
want to write evals to test their solution. So for example, our service creation
platform is called Rapid, so when we went to the Rapid team, we said, hey, would
you be interested in writing some evals? So they were like, oh yeah, cool, we'll
wrote one. And it said, using Rapid, create this new service. And we
specifically didn't want that. We wanted the tasks to be tasks for workflow
specific, not quite clear specific solution.

And the reason we wanted that is it makes the task much longer lived because
they're not trying to do a single solution. And it allows us to test alternative
solutions. If we had another internal competing product it would be impossible
for us to tell, okay, don't swap in this in and out. Actually, maybe. Some of
the folks were a little bit surprised by some of the results that we can see. So
quite often we saw Sonnet outperforming Opus and not just on fair cost but
overall score.

And that wasn't surprising to us but that was surprising to a lot of people who
have seen the public benchmarks, Opus is so much smarter than Sonnet. The thing
is that the complexity of the tasks that we're doing is relatively low and what
we're actually testing is we're testing the quality of the context that we're
giving to the agent. So most of the time, there's a point where the partners are
smart. But most of the time, the the the double model can be just as well. And
then interpreting results from the eval can be quite difficult. And that's
because the instinct is when an eval performs poorly, the instinct is to come
and change it so that it works better. That's not what we want to see. Instead,
we should be figuring out what is the environment that we're in. And similarly,
if an eval has a huge amount of variance as part of its scoring, it doesn't
necessarily make it a bad eval, but it could simply be that there is no context
available for the agent, so it's guessing as the right solution.

And it might just be that we only need a small nudge in the context, and that
sets them on a correct path. Now, there's of course bad evals as well, but it
might not be entirely obvious when you see a low-scoring or a rapidly-scoring
eval, whether it's a bad eval or something like that. And we didn't quite take
enough care at the beginning when we started this project in hiding some fast-
growing criteria. We have those in one of our monorecos.

And it wasn't broken for a while. In the last couple of months, especially some
model and harness combinations, they have gotten really good at cheating. So
they essentially go and find the scoring criteria and they just score really
well, unsurprisingly. And even when we then make commits to get rid of them,
some of them are traversing data history, reverting those commits, reading the
scoring criteria. So that was kind of tricky to get some of them out.

So if you are making these, just keep them super separate from the beginning,
and ideally make the repo not readable. OK, so what have we been learning from
all of this? So context is, in my opinion, really an optimization problem. And
you can try using smarter models, more for missing or poor context. But that
kind of works only after a certain point. And it depends on whether that's a
cost that you think . And the thing here is that for a lot of engineering tasks,
I would say the models are actually fine.

Your context is probably not. And it's very easy for the context strategy to
become simply additive, where everyone just gives every more, more, more, more.
And the first problem you will run into is that it's kind of a problem where
there's a token tax that's involved in every task. Eventually, it starts leading
to poor performance as well, because the context starts getting stale, and it
starts becoming contradictory. And treating context as an optimization problem
is that way you scroll up and the amount of talking to them is where you can
find the right patterns on them.

So what are some of the other things that we learned? Unless your work looks
like an open source project, and I'm pretty sure it does, but if it doesn't, I
think you need to invest in your own details because the public in and the
public benchmarks can't tell you how well the agents are going to do for you.
And one of the interesting things is that we actually started seeing a lot of
value from just a very small number of evals. So we had a handful of evals and
we started seeing some signal over there and sharing it internally with some
teams and they really appreciated that.

We've now grown to a couple hundred evals in total and we think it's actually a
bit much. So we now have strategies that we're going to start cutting it back
down. and you definitely don't need a whole set of thousands of these. So being
able to establish a small eval set is pretty good. And one of the things that
really, really surprised me is that considering we're dealing with one
deterministic system running, kind of more running fast here, the scores tend to
be remarkably stable considering .

OK, so where are we going in the future? What's happening next? So what we're
putting together is an organizational learning loop. And we have these project-
based projectories, as I mentioned earlier, from our APM side. And what we're
doing there is we are analyzing the real agent projectories that come from agent
laptops and from workplaces. And we're finding common tasks and workflows in
those projectories. and then what we can see, through some grouping and
analysis, we can see does our existing eval suite actually cut them or not, and
if not, that makes a good new candidate eval.

And those are the human intents of the race, where you might not see these
things that people do not want to be in it. But essentially what this allows us
to do is that it makes sure that the eval suite that we're running is reflective
of the real work that's taking place. We have another project called EDIT
Insights, and this is where we take the trajectory specifically from EDIT itself
to understand where the agent is going wrong.

So we are able to analyze the trajectory to understand did it hallucinate
something, did it find a bad example, a bad pattern to follow, for example. And
this gives us hints for the teams where they can help the agents to be better.
And when we are making these little content changes with these themes, we're not
chasing one or two percent small increases. What we're usually looking for are
small nudges that we can do that make a huge difference to the agent.

And especially at the beginning, they're usually quite plentiful. Finally, we
have this version called runner. And it's where we are taking these deep
insights and other run data. And we are generating candidate context edits to
see if we are able to improve the eval score without changing the eval itself.
So we are trying to discover the optimal little context injection points. And
what this allows us to do is this neat loop where our evals are then reflective
of the work that's being done at the company.

And we are automatically making improvements to the context to make that work
easier for agents. And so it's just a nice look at the architecture. And that's
it. That's it. I think that's it. Bye. I have a question.
