---
title: "We Built AI Agents To Fix Security Findings in Production \u2014 Here's What Developers Actually Merged"
speakers: [Amine Boudraa, Ruchita Kshirsagar, Nihit Gupta, Gianfranco Romani]
day: thu
date: 2026-09-17
start: "12:35"
room: Auditorium
track: Enterprise Adoption
kind: talk
session_id: 2747326638cb2d4adbf1773fffdfbfe1
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=13903s
contributor: jcpinto54
---

# We Built AI Agents To Fix Security Findings in Production — Here's What Developers Actually Merged

**Amine Boudraa, Ruchita Kshirsagar, Nihit Gupta, Gianfranco Romani** — Thomson Reuters

Amine Boudraa is a senior product security engineer at [Thomson Reuters](https://www.thomsonreuters.com/), based in Switzerland, where they focus on embedding security into engineering workflows and have helped build out the company's product and application security teams. They were one of four Thomson Reuters engineers behind a project putting AI agents to work fixing security findings directly in production code.

Ruchita Kshirsagar is a senior application security engineer at [Thomson Reuters](https://www.thomsonreuters.com/) in Toronto, where they work on DevSecOps practices and application security testing — SAST, DAST and SCA — across the company's products. They previously worked as a senior consultant at CGI on application security for CIBC, and hold a CISSP certification.

Nihit Gupta is a product security engineer at [Thomson Reuters](https://www.thomsonreuters.com/) in Toronto, working on SAST/SCA remediation, secure-SDLC architecture and cloud security. Before Thomson Reuters they worked as a software engineer at the healthcare software company Md.Ai and built AI-powered data tooling at Promotehour.

Gianfranco Romani is a senior machine learning engineer at [Thomson Reuters](https://www.thomsonreuters.com/) in Zurich, where they build AI agents for cybersecurity and work on evaluation and security frameworks for LLMs and agent deployments, including research published through Thomson Reuters' AI Labs. They hold a master's degree in computer science from Sapienza Università di Roma and previously worked at Translated on prompting and parameter-efficient fine-tuning techniques for adaptive machine translation.

*Thursday 17 September 2026, 12:35, Auditorium — Enterprise Adoption track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 3:51:43](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=13903s)), not an attendee's recording.

## Transcript

I think we're good to get started. Hello, everyone. Welcome to this
presentation. So we called it, We Built AI Agents to Fix Security Findings in
Production. And it's going to be around our journey to, as a large scale
organization, help our engineering teams get rid of security findings with the
load that they get because of AI with new vulnerabilities being discovered. So
let's start with the presentation. I'm Amine, and I'm here with Gianfranco.

And we're both part of the product security team at Thomson Reuters. So
basically our job is to help our engineers making sure that they can ship fast
while still mastering the risk, the security risk that new capability is
bringing. So today we're gonna try to look at how to fill the gap between
vulnerability discovery and remediation. So I want to start with the fact that
vulnerability discovery always outpaced remediation. It's not something new.

It's not because of AI. You know, when you are a security researcher and you are
finding a vulnerability, it gets published. And suddenly any organization that
are using, for example, that library that gets vulnerable needs to fix it. And
as an organization, when you need to fix a vulnerability, you need to find every
places, you know, where you use potentially that library. And by nature, it's a
different exercise. Did you wanna fix something?

You need to make it fit. You need to make sure that you are not introducing any
regression, right? When AI got part of the software development life cycle of
our developers and starting shipping more and more code, mechanically, they had
to review more code and the exposure just went up, you have more code to review,
so mechanically the gap augmented. And nowadays you even have security
researchers that are powered by AI. They are able to find way more
vulnerabilities than they could before, and as you see, the curve just
accelerated dramatically, and we didn't see any solution that helped
remediation, keeping up with AI vulnerability discovery.

And this is backed by public data. If you look at the NIST numbers from 2020 to
2025, they've seen a surge of 263% in the vulnerability being reported. And
right now, if you look at the number in 2026, we're already way above what was
found in 2025. NIST is forecasting like 60K vulnerability being published by the
end of the year, And 2026 will be the first year where we pass the 50K
vulnerabilities being reported, which is a first in the vulnerability disclosure
history.

So the topic of the call today is to try to share what did we do to try to fill
that gap, the gap between a vulnerability discovery and remediation. So the
question that you might have is, okay, so AI is helping at discovering new
vulnerability, but shouldn't it always also be helping like fixing stuff? The
answer is yes, but when the fix is cheap. And when I say cheap, I mean cheap in
context. I don't wanna say that a cheap vulnerability is not like a big thing.

Some serious vulnerability can be really easy to fix. But if you look at the
diagram, the more you go to the right and the more you need, you know, your AI
assistant to understand more context about the application when the fix gets
complicated, the fixes are less and less reliable, and they need
specializations. They need more tools to be able to understand more stuff around
the application, and produce better fixes. So let's say now you have an AI
system that is equipped to produce valid fixes, like whatever the application it
is working with, can you perform remediation at an enterprise level?

So the answer is no. You need more than that. You need to have an orchestration
system that allows you to, you know, raise that scale, those new capabilities.
And your system needs to answer two questions. First, is the change, you know,
the fix that you're creating even worth reviewing for someone? So are you fixing
what you wanted to fix? But on top of that, are you adding a regression in the
code? Are you breaking something?

Is the diff reviewable? You know, so only fixing the vulnerability according to
our experience is not enough. And you have that, you have the first piece. The
second piece is are you giving the ability for your developers to actually
follow the lifecycle of the fix from the moment it's created to the moment it's
merged, you know, it's accepted, because this is the only moment where the
vulnerability gets remediated. And our approach to that is with two agents.

So two specialized agents, one for SAST. So SAST stands for Static Application
Security Testing. So this is the code that you or your agent are writing. And
then SCA. So SCA stands for Software Composition Analysis. So it's a different
exercise. You are pulling libraries in your application. Your libraries are
pulling other libraries in your application. Some might be vulnerable. How do
you make sure that you can upgrade safely a library, a framework, a runtime,
without breaking anything in your system?

So with those two specialized agents, we also bring one orchestration system
that Gianfranco is going to detail after that, to allow your developers to
leverage those capabilities in a coordinated way, allowing them to follow the
lifecycle of the fixes from the moment they are created to the moment they are
accepted and merged. So we start with SAST, and maybe 30 seconds to explain how
are these scanner working. So SAST scanners are performing what they call taint
analysis.

So they are basically taking your application, looking at all of the user input,
the untrusted user input that might enter your application and that might flow
within your application. So the first part is a source and the place where they
might reach a dangerous operation. This is called the sink. So security scanners
usually reports vulnerability in the code with the sink. So when you use a
general purpose AI assistant, the output that it's gonna get is basically a list
of sinks.

And naturally, the agent is going to try to fix stuff at the sink level. So
imagine you have a ton of vulnerabilities. Basically, the agent is just going to
try to fix every vulnerability where the line is reported, which is valid
because, as you see in the blue nodes, all of these are valid fixes to drop like
a sanitization, for example, but it's not optimized. The specialization that we
bring here is through an MCP. As you can see here, we are computing before even
the agent starts working.

The set of candidate fixes, all of the fixing locations, we run them by impact,
right? And we give that to the agent as a primary driver for all of the
decisions that are going to happen after. So the AI system, instead of getting
like 100 possible fixing locations, it's going to get a computed list of fixing
location ranked by impact. Why do we do that? First, because it's more
optimized. And second, with that, your agent is going to be able to think about
smaller problems. You know, it's not going to be thinking about, okay, do I need
to drop a fix here, here, here? But, okay, how do I fix that regression that I
detected in the build. We measured that, you know, on multiple reports and on
multiple vulnerability classes. On average, we see like three times less the
amount of LLM calls that it would have taken to fix a vulnerability class in a
repo. Now, think about multiple modules, multiple applications. You know, you
will get good value out of that. So, that was SAST.

Now, what about SCA? So as you see here, SCA, it's more or less bumping a
version. It can be a library, as in this example, it can also be a framework, it
can also be like a runtime version, for example. And the tricky thing here is
that you have a ton of ways to do that. So if you ask your agent to fix libnet
4.1.2, it can be doing it by a patch bump. You can also upgrade the framework,
that might also bump the library. And all of these are multiple decisions that
will shape the rest of the run.

So same as we did for SAST, we will try to compute the minimum set of libraries
that needs to be upgraded so the agent works in the smallest scope. And by the
way, the more you go to the right, the more problems you might have because when
you modernize the system, when you do a major upgrade, a ton of stuff can go
wrong. Sometimes you need to rewrite the API codes specific libraries. You can
break something in the build, in your set of tests, in your deployment, in the
running application. So, this is a tricky exercise. So, we compute the minimum
list of libraries that are needed to fix the finding pool. And then we give that
as an input to the agent. When you have that, we also use OpenRewrite.
OpenRewrite will be the upgrade engine of this exercise. OpenRewrite is an open
source tool, by the away. And you can see it as a library of recipes to perform
upgrade. So, let's say you want to upgrade to Java 21. OpenRewrite is going to
be able to tell you, hey, you want to upgrade to Java 21? Here's the list of
upgrades that you will need to do to keep all of the components compatible.
Okay? And this is great because this is, again, you know, deterministic
operations.

Stuff that the agent won't need to think about. And, again, the context will be
used to be able to fix built errors, to loop, to fix tests, and so on and so
forth. So, same for SAST. We did it and we measured it. So, typically on a
Spring Boot upgrade from 2.6.7 to 3.x, we see 40K input token to 500. So this is
huge. And it's way because when you do an upgrade, there is a ton of file that
needs to be ingested, a ton of manifest file.

The agent needs to understand some specific place in the code that needs to be
rewritten. When you use deterministic tools like OpenRewrite, you save a lot of
context and the quality of the run just gets better that way. So this was for
the specialization. Now Gianfranco is going to show you a bit more about the
system. Thank you, Amine. So it's great to have these special agents that are
really specific and solving specific cases, specific problems, right?

But as we said before, we need to scale, especially for big organizations like
ours with almost 10,000 developers, thousands of repositories, acquisitions,
different conventions. It can be a mess. You really need to scale in that sense.
And after that, you need to merge the PRs to actually reduce the gap and reduce
the backlog, right? So my part of the presentation will focus on this, so on the
common part between the two agents that type scaling and merging PRs.

So the system, we'll start from the system. Both agents are running on the cloud
and there in this environment we'll have the managed agent runtime. So whatever
like all the things that Amine has showed you, so the skills, the tools, MCPs
and the agents per se are running there. They are ephemeral so after each run
the VM will be destroyed so they are really related to one specific run but on
top of that to scale we'll need queues simply for to handle like a lot of calls
and runs of the of the agents a storage system for to store where a PR is open
when it's closed when it's merged etc. etc. A model that is always available, so
we're using Bedrock for example, that's necessary because you have 10,000
developers across the globe that can open and run the agents whenever they need.
GitHub App which is was our solution to handle the work on the pull request and
keep it alive. That's really important, it's a small spoiler on what I'm going
to show you later, But these events are collected and used to rerun the agents,
apply changes, and so on and so forth.

And finally, observability. It might seem trivial, but it led to a lot of
improvements on the system, defining where it was failing, and why a PR was not
merged, it was closed instead, and also to improve the performance of the
agents, of course. But apart from the system, what is really important is the
process. So we had an idea, almost like a philosophy, let's say, on how we
wanted to reach the moment of merging a PR instead of closing it.

And everything, probably you understood it by now, is going around the PR. So
the PR is considered as an alive object. It is there and it is created in the
runtime of the agent before. But then that's not it. Like it is there, somebody
has to review it, it might go stale and you need to do operations on top of it,
like based on human reviews or other issues. And so you have to go back thanks
to GitHub App to run the agents and work on the PRs continuously until it is
merged.

So now we'll go through all the process chronologically. I'll start from, of
course, what's happening before we open the PR. So somebody is triggering the
agents and they will start planning. To do the plan, they will have to discover,
to study the repository. So what build system is used, the language, the test,
the conventions. As I was saying before, especially in our case, we had a lot of
acquisitions with companies that are using completely different conventions.

And you cannot always bring them to use yours. you need you want to to fit to
what they are using you uh because we want to cover all the vulnerabilities
across the the organization um so the agent will study that the build the test
convention etc and it will run it because we want to build a baseline we want to
have to work on repositories that are already working that are not broken
already if it is the case we just stop the run and it doesn't make sense for the
agent to to try to fix stuff that are already bro or improve stuff that's
already broken. Once we have all this information, we'll use the MCP tools, the
knowledge of the two agents, and the optimizers in a particular way, to come up
with the final plan, so the plan of action, which will happen in the next phase.
So until now the agents had touched no code, they were not modifying anything,
they were just studying. Now the agent will run on an isolated copy of the
repository, so not directly on the code base, and we'll start applying the
changes to solve the issues.

The important part of this phase are the checks. So we define several checks
that have to be passed before opening the PR. Here I'm reporting two, which I
think they're quite a good example for this talk. Simply, we want to solve
vulnerabilities to reduce the backlog. So first of all, we don't want to the
agents to introduce new issues because it doesn't make sense and we want to
reduce the findings Otherwise the goal is not is not reached If all the checks
are passed then we are opening a pull request if the check are not passing the
agents are running again of course, we have some constraints in terms of Budget
time and runs because otherwise the post will go crazy But if the gates are
passing after a certain amount of time, a budget, etc., then nothing is pushed
and everything is reverted to the original.

Let's assume a nice scenario. We have a pull request. Everything goes well. We
reach to the state in which the agent is actually writing the pull request that
the humans are going to review. In the first few versions of the agent, we
noticed a lot of PRs that were closed. They were not merged for some reason and
it took a while to understand what was wrong. While going through the logs,
observability, etc, etc, we realized that something that the teams were missing
were the adaptation of the pull request to their convention. So to come back to
the previous topic, it is important for certain teams to have a specific way of
structuring the PR. So there are branch conventions, or naming, certain teams
want to link the tickets to the PR so they can track the remediation process.

All these things can be enforced by the developers so they can pass this
description, these requirements to the agents and they will be followed. Apart
from that, having a structured PR with a summary of what was done, a summary of
what was not done, that was also really important. The files that were touched
or changed, a table with a summary of the remediation and a guidance for the
review for the agents, it's really important and it will improve the trust that
the user, the developer has with the agents. Once we have all this, some people
might say, okay, we have a PR, we are done. But that's not the case. We'll know
that a PR might go stale. And the goal, again, is to merge PR to reduce the
backlog. That's the only way we can reduce the backlog. And if we don't, so if
the PR is closed, all the findings will go back to the backlog and nothing is
improved, right? So the next few slides will show how we approach these issues.
We have several mechanisms on there. And the first one is the revision process.
So once you have a PR, that again is something that is alive, the agents can
interact with the agent, the developers can interact with the agents like they
were interacting with the colleagues. So they can add comments, ask the agents
to run modification, modify something, and the agents will do that. So they will
go back, modify what was asked, and then importantly, they will rerun all the
verification and checks that we are imposing on the process. If everything is
green, okay we have a new commit, the humans can keep reviewing the PR and we'll
go to the next step. So imagine you're on holiday, you go back after a while,
your colleague has opened a PR two weeks ago, the PR maybe went stale in the
meantime because the base branch has moved and so on and so forth. We noticed
that if the PR was opened by an agent, if it was read so not ready to be
mergeable, the developer was going to close it like 100% of the time. So we want
to keep it ready for to be merged. So that was also that's really important. So
the agent will autonomously check, improve the PR and make it ready for the
review. On the side of this, it's important to keep in mind that there are
certain actions that are not okay. So we don't want agents to do whatever they
wanted. It's important to have boundaries, not just for humans, but also for
agents apparently. And so we are enforcing these constraints in code. So we took
in most cases so that we don't give, you know, if you pass in a prompt, it's
easier that the agent will go around them. In this way, we can enforce good
behavior.

Finally, it's important, again, the observability. I'm stressing this a lot, but
to have an eye and insights of what is happening in our pull request, so the
comments, what was common when the PR is closed why it is closed etc etc helped
us to to define the process and improve it over time so the the PR structure for
example came out of this exercise and of course also what is happening during
the run of the agent as you all know it's it's important like for the continuous
improvement of the system a final reason for which this is important It's that
this way we can show you some results.

And Amine actually will take the stage to close the talk. Thank you. So the
first one was a bit funny because Gianfranco is coming from an IAML background
and I'm coming from pure security background. And when I wanted to put it, he
told me no way. Everyone is going to think about it. It's obvious. But for
people like me that ended up with these new capabilities and being asked to ramp
up and quickly deliver, it wasn't obvious to me.

Like whatever, if you're doing security, or not security, but if you have a job,
like use your subject matter expertise to look at phases within your run that
are repeatable and try to, you know, put some deterministic steps such as the
optimization, you know, the use as open source tools like OpenRewrite, because
it will benefit a lot your runs and you will get just more quality. So whenever
you see something that is repeatable, try to look for an open source tool that
can, you know, spur the agent for performing the action to save context.

And if there is no open source tool, try, I mean, to build something. The second
one is around the fact that, as Gianfranco was saying, a valid pull request is
not enough. It is not a condition for a change to be accepted. When you raise a
pull request from an agent, this is by default an untrusted change. So you need
to give flexibility to your developers to interact with the diff and to make it
their own, if I can say it this way.

And this way you will get more chances to get merged because from the moment
that you open a diff to the moment the merge is performed, the longer the time
passed, the lower are your chances for your change to be accepted. And the last
one, so a bit linked to the first one, If you can define yourself the
strategies, and not let the agent decide of the strategy, typically what version
do I need to target to fix my security vulnerabilities?

If you can give that set of decisions and define a boundary for your agent, your
agent is going to have less decisions to take, and again, the run is going to be
better. Here are numbers that we got on the last two weeks. So 242 PR were
raised, 84 got merged, 29 got closed for many reasons. So we're still working on
knowing our developers, essentially, and the development practices to make it
fit in their release cycles. And yeah, this is a hard exercise.

So we had the chance to speak today, but the team built this. And yeah, if you
folks are watching us, thank you for working on that solution. I really love to
bring this at a level where you can speak about it. And I want to close with the
fact that no solution in the open source world is solving that problem now. At
least we didn't find it. So we are open sourcing everything. So the algorithm
that find the minimum set of fixes, the Codeflow solver is available today.

It's a script. You can run it. The MCP and the stack, you know, both of the
agent, the specialized agent and the observability stack and so on that was
showing. Bookmark this link. We are also open sourcing it. The code should be
pushed today or tomorrow. So hopefully this week you will have like a first
public request ready. And yeah, feel free to ask us question after the talk.
Yeah, happy to discuss, but yeah, thank you.
