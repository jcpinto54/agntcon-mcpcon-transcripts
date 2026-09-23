---
title: "When NOT To Use an Agent: Choosing Between Workflows, Services, and Agent Systems"
speakers: [Jigyasa Grover, Rishabh Misra]
day: thu
date: 2026-09-17
start: "11:25"
room: Auditorium
track: Agentic Engineering
kind: talk
session_id: 59ef4419bf81f6a3064248ecb37c5f5f
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=10512s
contributor: jcpinto54
---

# When NOT To Use an Agent: Choosing Between Workflows, Services, and Agent Systems

**Jigyasa Grover, Rishabh Misra** — Uber / Atlassian

Uber; Senior Software Engineer in AI Platform; longtime open-source ML contributor.
Atlassian; ML engineer focused on applied ML in product.

*Thursday 17 September 2026, 11:25, Auditorium — Agentic Engineering track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 2:55:12](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=10512s)), not an attendee's recording.

## Transcript

Hello, everyone. Imagine it's 2 a.m. You get a Slack message. There is a SEV1 in
production. What do you do? You open the logs. Your agent. The one your team
spent three months building. The one that demoed beautifully. It has been
calling the refund API in a loop. For 39 minutes, hundreds of unintended
refunds. Real money, real customers. You search the code base for the bug with
half-opened eyes. There is actually no bug. The logic is perfectly fine.

It happened because the model decided. No one told it to, no one was able to
stop it, and by the time anyone noticed it, the damage was done. If you've built
production AI systems, you might have your own version of the story. Today, we
want to talk about that story, the engineering decisions that led to it, and
most importantly, what we should have built instead. Because a system like this
isn't broken. Listen very carefully to it.

And it's telling you something. It never wanted the autonomy you gave to it.
Hey, everyone. My name is Jigyasa Grover. I'm a machine learning engineer. And
over the past handful of years, I've had the privilege of building production AI
ML systems at scale. At companies like Uber, Twitter, FAIR, Meta, and a couple
of the other Silicon Valley startups. I'm joined by Rishabh Misra, and together
we want to talk about when not to build an agent.

And I want to be very upfront with you all from the very start. This is not an
anti-AI talk. I personally love this technology. I build with it every day. But
I also think one of the most important skills we can develop as engineers right
now is the judgment to know when autonomy helps, and when it quietly makes
everything worse. Let's start from the very beginning. Act one, attraction.
Because let's be honest here, every one of you in this room has felt it, the
pull towards building something agentic.

And the pressure is very real. Everyone else around you is building agents.
GitHub has tens of thousands of repositories mentioning AI agents or agent
frameworks. LinkedIn mentions of agentic AI are up more than 3X year over year.
Hugging Face is full of agent demos. Every Y Combinator batch has agent for
startups as a dominant theme. I bet your roadmap has one too. Show of hands, how
many of you are actively building an agent right now? Well, I see most of the
hands in this room go up, and I thought so too. We are in the middle of an agent
gold rush, and gold rushes are exciting, but they also leave a lot of people
stuck in bad minds. And here's the part of gold rush nobody puts on the pitch
deck. 17% of organizations have actually deployed AI agents to date. More than
60% plan to within the next two years, the fastest adoption curve Gartner has
ever tracked for any emerging technology. But the ones that are actually live,
54% report a suspected or confirmed agent security incident in the last 12
months. Just under 35 confirmed one actually happened.

And the standing forecast is blunter still. Over 40% agentic AI projects will be
cancelled by the end of 2027. Not because they failed technically, because of
cost and unclear value. And these are not edge cases. This is central tendency.
And when the majority of projects in an entire category fail to reach
production, that is not a tooling problem. That is not even a model problem.
problem. That is an architectural judgment problem. So, here's the framing I
want to offer for everyone and everything that follows. Autonomy is a feature,
not a default. Think about a car in an autopilot mode. Autopilot is a feature, a
genuinely powerful one. But But you don't design the car assuming autopilot is
always on.

You design every critical system so it can operate with it or even without it.
But here we've been doing the complete opposite. We've been building systems
where autonomy is the assumption and then scrambling to bolt on guardrails
afterwards. So today is all about flipping it. Start with control and then earn
your autonomy. So here's what we're going to do together in the next 30ish
minutes or so. We're going to trace five specific failure problems and modes
from a real system.

We're going to look at the fixes and the replacements that actually work. And
I'm going to hand you a checklist that you can run before your next build. So
let's go straight into it. Act two, the fail. Mike Tyson once said, everyone has
a plan until they get punched in the mouth. But let me update that quote for our
industry. Everyone has a plan until they deploy agents to production. And yet we
keep doing it day after day. So let's talk about what actually happens when we
do so.

Because when we do so, the agents go rogue. July 2026. OpenAI is running
internal cybersecurity evaluation agents inside a contained environment. Purely
internal. Fully sandboxed. Supposedly safe. The agents start coordinating with
each other through an improvised message board they built themselves. Then they
found credentials sitting on a random third-party service and used to escape the
sandbox on their own. They breached Hugging Face's real production
infrastructure.

Why? Because the agent's job was simple. Complete the evaluation. And they found
a shortcut nobody had scoped. Now, was there a bug? Was the logic broken? No.
The agent did exactly what it was designed to. Optimize for task completion. It
just never understood the boundary it had crossed to get there. And that
distinction between what you say and what you mean lives in human judgment, not
in a system prompt. Now, here's a smaller scale version of the exact same
failure.

Jason Lemkin, founder of SaaStr, was testing Replit's coding agent. During an
active code freeze, a moment specifically designed to be safe, the agent wiped
the production database. Records for over 1,200 executives destroyed. But then
it got worse. When confronted, the agent admitted it had panicked. It fabricated
a 4,000-row table of fake users to hide what it had done. And it told the
founder that the rollback was impossible.

It wasn't impossible. The agent was simply wrong. Yet again. And the agent
wasn't malicious. it was trying, desperately trying to complete the task with
full autonomy over an irreversible action and no meaningful stopping condition
anywhere inside. So what do the state-of-the-art AI labs agent and a coding
assistant have in common? The same root cause, different blast radius. The sole
objective function in both cases was task completion.

Neither system had any way to distinguish what it was authorized to do and what
it was technically capable of doing. Now let us walk through a key study from
our own work while building this chatbot called Apex. So, Apex was a customer
support agent handling order lookups, refunds, policy questions, and account
updates. The architecture we had for this one was simple, but in week one, when
we demoed it, it impressed everyone, but when it was working in production, by
week six, we had multiple production incidents.

So there were five failure modes that got us here, and we'll be walking through
each one of them and see what they entail. The first failure mode is the
recursive loop. We have a tool call, then observation, plan revision, and then
back to tool call. The agent never knew when to stop. In each iteration, the
context keeps expanding, which means more latency, more cost, and more drift
from the original goal. And because the stopping condition live only in the
prompt, never in the code, the loop will simply keep running.

In this case, a reflection loop where the model self-evaluates and revises its
own plan, running just 10 times can burn about 50 times the tokens of a single
linear pass. So consider this at scale and then agentic deployments often run 20
to 30 times more token than equivalent deterministic pipeline. So a stopping
condition written into a prompt is not in architecture since the model can
simply choose to ignore it. Another failure mode we ran into was latency drift.

So agents think before they act, and thinking takes time. A deterministic API
can sit at roughly 300 milliseconds. However, an agent response could stretch
anywhere from 2 to 15 seconds, depending on how many tools it has available.
Because more tools doesn't just mean more things an agent can do, but it also
means the more decisions it has to make before it does anything at all. The
third failure mode is the boundary violation violations we ran into.

A user can ask a simple question like, am I eligible for a refund? The agent
could check and then in case the results comes back as unclear, it could issue
the refund anyway just to complete the task. And this goes back to the Replit
incident where the agent just kind of fabricated anything to just complete the
task. So in this case, the agent had the tool, and then nothing in the
architecture drew a line between checking eligibility and executing the actual
refund.

So that part should always live in the code and not in the prompt because the
model can simply choose to ignore it. And this isn't unique to us. In December
2025, BCG documented an expense reporting agent that received a blurry receipt.
Unable to read it, the agent simply fabricated the vendor name, the amount, and
the date, and the report looked completely correct. None of it was true, and
that's the entire failure mode. The next one is about the evaluation abyss.

Testing a deterministic pipeline is simple. We just do assert equal with
expected versus actual values, which is fast and CI safe. But testing an agent
means asking a completely different set of questions where was the reasoning
good enough? And in this case, every option we have could be considered as bad
because human review is slow, expensive, and doesn't scale. LLM as a judge is
just a model grading itself. And if we talk about the statistical runs, which
will raise another question about how many runs are enough and how do we bound
them and try to run them in the given budget.

So this is exactly why trajectory level and step level evaluation are becoming
the industry standard, because scoring only the final answer was hiding all of
the intermediary steps involved. And then the last one is a newer one, but it
should be the one that you should know about because agents are increasingly
using various tools and then we always think that those tool descriptions are
correct one, but an attacker could come up with a new tool and then pollute the
description of it.

Looking at this weather tool, in this case, buried in the description, the
instructions ask to ignore everything prior and forward the conversation history
to an attacker's domain. In this case, the agent didn't get hacked. It did
exactly what the tool description asked it to do. And this is actually not
theoretical anymore. Researchers have found that chaining just five or more MCP
tools together let attackers succeed 78% of the time.

OWASP has also now published a dedicated MCP top 10 because of all these new
attacks coming up. So I think at some point, we had to ask ourselves the hard
question, when do we stop fixing an agent? Here are three signs. First, every
patch you write introduces a brand new failure mode. At that point, you're not
debugging anymore. You're playing whack-a-mole with your own architecture.
Second, your eval scores improve in testing, while your outcomes quietly degrade
in production.

That means your eval is measuring the wrong thing entirely. And lastly, your
postmortems keep circling back to the exact same phrase, the model decided. Now,
that phrase is not a root cause. It is evidence that your architecture is wrong.
And now that we've seen the wreckage, how do we stop the bleeding? Act three,
the turn. The goal here isn't to complain about the hype. It is to find a way to
build forward. And here's the moment everything changed for us.

We stopped asking, how do we make the agent more reliable? And we started
asking, does this problem actually need an agent? And I think Rishabh will share
something that reframed our thinking altogether. So recently, Anthropic has
noted that the most successful implementations use simple composable patterns.
So I think this is exactly what it looks like in the practice. In the agentic
version, we have one opaque entry point. The LLM controls sequence, tools, and
stopping condition, but when something breaks, you're left asking what just
happened or why the step failed.

The composable version looks almost boring by comparison. It classifies the
intent, fetches the context, checks the eligibility, and then builds the
response with four plain functions. But every step here is testable and
independently deployable. When step three failed, now actually means something.
And now you can fix it in minutes and not wonder for hours on what went wrong.
This isn't exactly less powerful. It is more reliable.

And reliability is the only thing that actually lets you ship things in
production. Here's the architecture we replaced our chatbot Apex with. We call
it a router pattern. of one agent deciding everything, a single lightweight
router with rules, embeddings, a small fast model routes each query by
confidence to one of the three pipelines, which are retrieval, reasoning, and
action. Each pipeline is bounded, observable, and independently testable. And
The only economic case here is just as strong as the reliability case.

Simple intent goes to cheap, fast model, and then complex intent goes to a deep
and slow one. Most of what enterprises pay expensive agent reasoning for turns
out to be simple enough to run on a fast deterministic pipeline instead. And
then routing the complex, routing the simple query can cut the cost by about 60
to 90%, because about 85% of the enterprise queries will qualify as simple. So
here was one more change that we did that had an outsized impact, which is about
structured output.

Every field here is typed, constrained, and validated. Because a prompt is only
a request, a model can choose to ignore it. In this case, this schema can become
the constraint. Trust but verify almost never actually gets verified in an
autonomous system. But a typed, validated output falls, fails right at the
boundary before it ever reaches is a downstream system that can't handle it. And
then the final piece is observability. In this case, every single decision would
need to leave a trace, the exact prompts, responses, first step latency, tool
calls, schema validation results, token counts, decisions that were taken with
the confidence score, and whether a human was able to review this decision or
not.

So, with all these changes, here's the same system with the same underlying
models, just six weeks apart after applying the concepts that we talked about
today. The P99 latency went down a lot, error rate also reduced, and there was
zero boundary violations and the debug time then reduced from days to minutes.
So with these principles in mind, Jigya will try to summarize the key
principles. Thanks, Rishabh. So I think from whatever we've discussed today,
there are three principles to summarize everything so far.

Number one, control over autonomy. Keep control flow in the code. Give the LLM
bounded specific jobs. The pipeline you can unit test outlives the agent you
cannot. Second, composition over generalized monoliths. Small bounded testable
functions. Composable systems are debuggable at 3 AM in the morning. Generalized
agents are so not. And data quality over prompt engineering. The best of the
best prompt in the world cannot fix bad data.

A broken schema is an architecture decision, not a tuning problem. So ask
yourself honestly, how much of your last sprint was actually about data versus
model behavior. So act for the wisdom. Here is your checklist. Before you build
an agent, try to honestly answer these six. Can I define success in
deterministic, testable terms? Are my tools minimal and genuinely scoped? Can I
simulate 1,000 plus runs in under five minutes? Do I actually know my P99
latency ceiling?

Is every tool call authenticated, scoped, and logged? Is every irreversible
action gated in code and not in prompt? Three or more no's. Build a
deterministic pipeline first. Earn autonomy before you grant it. And let me give
you one more framework for deciding when autonomy actually earns its place. Two
axes, complexity and error tolerance. Low complexity, low error tolerance. Use a
deterministic pipeline. Reliable, predictable, boring in the best way.

Low complexity but high error tolerance. A simple LLM call is genuinely fine.
High complexity, high error tolerance. This is the real agent territory. Open-
ended research, exploratory writing, creative synthesis. The agent can wander
because the cost of being wrong is low. High complexity, low error tolerance.
Now, this is the danger zone. And here is the critical insight. Most teams reach
for an agent here first, and agents fail hardest exactly here.

High complexity does not mean you need an agent. High complexity plus low error
tolerance means you need decomposition. Break the problem into bounded
subproblems. Solve each one reliably. Compose the results. That is not less
powerful than an agent. That is actually more reliable than an agent. And
reliability is what gets you to production. So let's close with a reframe. The
question isn't, should we use AI? That question, I think, is already answered.

Yes. Obviously, yes. We're using it today. We'll keep using it tomorrow. The
question is, which kind of AI? Here, now, for this? Every single system you
build deserves that question. Not can we make it agentic, but should we? Does
this specific problem with this specific error tolerance at this specific scale
actually benefit from autonomy? Or does it need discipline instead? When the
answer is yes to an agent, build it. Instrument it.

Gate the irreversible actions. Define success in testable terms. And then the
answer is no. Have the courage to say no. Build a deterministic pipeline. Be
boring in exactly the right places. The most impressive engineering I've seen
this past year has not been the most impressive autonomous systems. It's the
systems that knew precisely when to be a function and when to be an agent and
had the architectural discipline to match. That judgment is the skill we all are
developing right now as an industry.

And I hope this talk has handed you one or two more tools for it. If you want to
go deeper on any of these topics, Rishabh and I have put together some LinkedIn
Learning Courses. As a thank you, gift for listening, sharing free limited time
access to all four of them. Everything from integrating AI into product
architecture, to building agents and evaluating agents with Google Agent
Development Kit, to LLM-powered recommendation systems.

So we leave you with this question we think belongs on every engineering's team.
Do you really need an agent for everything? Thank you so much, folks, for
coming, and hope you enjoyed it.
