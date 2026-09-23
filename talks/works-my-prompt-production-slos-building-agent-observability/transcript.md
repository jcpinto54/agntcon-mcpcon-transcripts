---
title: "From \"Works on My Prompt\" To Production SLOs: Building Agent Observability"
speakers: [Manik Khandelwal]
day: fri
date: 2026-09-18
start: "10:55"
room: Auditorium
track: Agentic Engineering
kind: talk
session_id: a02c01c8ef268dcbe45fb87ef06303be
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=6898s
contributor: jcpinto54
---

# From "Works on My Prompt" To Production SLOs: Building Agent Observability

**Manik Khandelwal** — Microsoft

Manik Khandelwal is a Senior Software Engineer at [Microsoft](https://www.microsoft.com/), working on the Azure Cosmos DB team within the Azure organization. They previously worked as a software engineer at Agoda, Swiggy, and InMobi Advertising, and hold a degree from the Birla Institute of Technology and Science, Pilani.

*Friday 18 September 2026, 10:55, Auditorium — Agentic Engineering track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 1:54:58](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=6898s)), not an attendee's recording.

## Transcript

So let's start. So imagine there are six observers and they enter a dark room.
Each one has to inspect an object in that room and they have specific range. So
one of them says wall, another tree, snake, rope, fan, spear. So definitely we
can't have six answers, so someone is wrong. Any guesses? Let me turn on the
light. So it's an elephant. So the issue was, they just compare. So the local
sensations were real, but they concluded it with the global one.

So they were not able to build the entire elephant out of it. So today, I will
walk you through one such use case which I encountered in real world. So we can
just relate it to six tools which try to achieve something, but end up
interpreting something else. So before we move on, just a brief about me. I'm
Manik Khandelwal, and I do work on distributed systems. where the work is spread
across different services, machines, failure domains, and the correctness
depends on coordination of different nodes, machine.

It's, we can't just rely on one specific local call. So this is like, this is
what pulled me into agent observability. So agent is also kind of a miniature
version of distributed system. We do have a model, we do have data, then policy,
and all of them are tied together by a thread and it can go wrong in n number of
ways. So that is why I care about the gap between what the tool return and and
whether the system achieved the goal or not.

So let's just talk about the problem which I was trying to solve using my agent.
So the problem statement was very, very simple. So like given a deployment, I
just wanted an agent to watch it and tell me when I should really worry. It
shouldn't be a chat bot or something like to which I have to continuously
interact. So yeah, my role in the story was to, sorry, I missed it, but yeah, I
integrated different tools which were needed to achieve the task.

But like what happened was the agent was able to create a report out of it, But
now the issue was the evaluation of the report. And I even didn't want that. I
wanted agent to be autonomous and it should be able to take the decision. So
yeah, my role in the story was the builder deciding how much to trust the
result. So yeah, this is the agent which I created, Mitra. It's a watcher which
just checks the evidences and do tell me whether I need to worry or whether it's
fine.

These were the six observers which we were discussing initially. Deployment,
synthetic test, incidence, failure, latency, and other metrics. All of them were
necessary. Not necessarily, they are important for me to watch that specific
deployment. It was built on MCP toolkit and MCP agent, and OpenTelemetry was
used for monitoring. The demo is actually somewhat simplified. It's a Python-
based workflow with a 15 minute design cadence and it saves the evidences.

And does have deterministic checks too. So, it was a bigger system, but this was
the crux behind it. Like, the agent is going to give a verdict, but it's not
going to interpret healthy or a result okay based on that. There are other
things like synthetics and failures, which also needed to be accounted and which
will ultimately lead to result being healthy. Otherwise, we will say watch.
Watch essentially doesn't mean a failure.

It means that maybe something is missing and you have to maybe retry or take
some action. So yeah, I think it's a deterministic operator which can be
inspected and can be changed deliberately. Healthy is not actually earned. My
bad. Healthy is actually earned here. So this is actually not a deployment
problem. It can be seen in other use cases too. Like if you're building support
and you want to process a refund, it's possible that you get a valid receipt but
end up getting processing a wrong refund due to mismatch in orders.

Or maybe you can generate a research report, but the citation itself is wrong.
So we need something to check these evidences before model taking a decision.
Missing evidences itself is not a problem. We also need to evaluate the parts or
other evidences which we receive are actually correct. As you can see in this
result, we were able to make this result elephant, but it was with respect to a
different environment. So I stopped asking, did the query work or did the tool
return a 200?

Then we started asking, does this evidence actually answer the question or the
query which was asked initially? So definitely, we need a framework to check the
evidence. This can be broadly classified into four categories. Scope, whether
the check was with respect to same evidence or a different one. Freshness, how
old it is. Coverage, whether each and every evidence required for the specific
investigation was present or not, and the outcome, whether the ultimate goal is
achieved or not.

Just to give you a small example of coverage, let's say the incident count is
unknown. That doesn't mean that there are no incidents. So we just have to watch
it again, and maybe make the tool calls or take some action. So I was not very
much sure of the Internet, but I made a browser experiment for you to see it. So
we have three states, Attention, Watch, and Healthy, which is being emitted by
this Mitra. Very simply, for known breaches, it says Attention.

For wrong scope, missing or stale data it says watch and then yeah if everything
is passing and we do have usable evidence to it says healthy. So this was one of
the observation which we had of the run and yeah, this is our toy policy for for
current run. So as you can see the the incident is unavailable here. So I think,
yeah, maybe do you guys want to predict what would be the verdict of Mitra here?
Okay. Let me reveal the decision.

So it's watch. So since the incidents were unavailable, like we have to, like it
can't really take a decision. Let me walk you through another synthetic use
case, which I have put here. Let's go with the wrong environment. So again, you
can see the target environment is different, and the verdict in this case is
going to be watch again. For let's say fresh failures, I do count it as
something known. So in this case, we know that since the synthetic tests which
were done for that specific deployment has went down, so you can directly say it
needs my attention, the user attention.

And yeah, there's one more thing with respect to retries. So bounded retries are
not always helpful. we need to actually check whether the tool calls, so the
traces which you are getting is actually moving. So here I have an illustration
of a repeated evidence. Let's see what it does. So yeah, in the very first call
it returns select, in the next call again, and in the next call too. So we don't
see any movement. So it's better to stop here rather than exhausting your
limits.

These are just the numbers which work for me. But if you're building a system,
you can play with these numbers. Then let me show you transient failures. So the
very first call didn't return unavailable. The next one returned an evidence,
and then we tried the next one which returned the complete evidence. So we can
finish it here and then there was a progress in traces also. So if there was
let's say another leg or maybe the trunk was returned, we could have moved on to
six readrace.

So I think I have explained the policy. Now, I think the traditional telemetry
was around the status being okay. Now, I think the agent observability is more
about getting an outcome and tracing it back whether the evidences justify it or
not. For this very example which I'm showing here, so agent was able to, we just
added some prompt to it, that was a very simple case, I want to watch this
deployment. So it called on the tools, health check was okay, tests were okay,
but the incident count was unavailable.

So the prediction was watched, and if someone wants to see it, like why it was
set to S-Watch, then definitely it is needed to be instrumented. All the things
related to it like what all tool calls were made, what was the scope, timestamp,
decisions, budget consume, everything is needed to be added in there. Just one
thing, we just kept the observable actions, not the entire chain of thoughts or
raw secrets to make it compact. Then yeah, judges to improve the decision.

So I'm not a very big fan of judges, so since they are very expensive. In this
case, I have attended some of the talks yesterday, and they were using SLMs, but
in this case, they were not really useful. You need a mid-size model or maybe a
reasoning one. So what we did was, we just figured out the high-impacting
incidents, and then segregated from the normal ones. Only for those, we run a
judge evaluator. Then apart from that for the normal ones, we did a batch audit.

So around four to five percent were taken out and then put it to human
calibration. So that's how we did. Yes, I forgot to mention it. So for the
normal ones, let's say the evidence itself is missing. So passing it on to a
judge won't help. They can reach onto a conclusion, but this could have been
detected by the deterministic checks itself in the very beginning. So the
consensus wouldn't have made sense. So we did run it, and these are some of the
numbers which we observed.

It's still work in progress. we're still improving it, my entire team is working
on it. So earlier with just the tool integrations in the agent, there were
around 300 unsafe all-clears, and then later it brought it down to zero. These
are not the production numbers, these are the observed TIS, and some more
numbers associated with it. So I think if someone asked me how if I want to
build the system again. So I would say I wanted autonomy, but it should be based
on the evidences.

So at each and every step, there should be a log which will be opened by the
right set of evidences. So for version one, you can just start with the
observation, just collecting up the facts and metrics associated with it. When
you have sufficient metrics, then you can maybe jump on to recommendations. I
think many people do it. They just create MCP server or maybe a short version of
it, integrate it with their CLI and then take the decision.

Then if you have sufficient evidences, then you go on an entire autonomous
decision system. Yes. This is something which I learned the hard way. Let's say
some of the use case, if you observe a failure, so don't just add it to your
eval and then move on. We also need the other part of it. If there was a red
flag, also add a test for the green flag too. So that will ensure your complete
correctness. So yeah, I think I would conclude here.

So coming back to the initial question which we had, was the elephant invisible?
The answer is no. How can we correct it? We can feed it with the right set of
evidences. We can bound the journey and verify the outcome backwards. It's
really important to, if there is any surprising run, preserve it, label it, and
pass it on to your judges. Thank you.
