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
recording: recording.wav (talk3) + RAI Amsterdam.m4a (talk4)
contributor: jcpinto54
confidence: uncertain
---

# When NOT To Use an Agent: Choosing Between Workflows, Services, and Agent Systems

**Jigyasa Grover, Rishabh Misra** — Uber / Atlassian

Uber; Senior Software Engineer in AI Platform; longtime open-source ML contributor.
Atlassian; ML engineer focused on applied ML in product.

*Thursday 17 September 2026, 11:25, Auditorium — Agentic Engineering track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]* Joined from two consecutive fragments captured on different devices — a .wav recorder that stopped at 11:55 and an iPad that started the same minute; the halves run continuously. Attribution is by content; the combined window runs past the scheduled end, so the match is not certain.

## Transcript

towards building something agent-like. And the pressure is very real. Everyone
else around you is building agents. GitHub has tens of thousands of reports
released mentioning AI agents or agent frameworks. Linking mentions of agentic
AI are uploaded 3x year over year. Other space is full of agent demos. Every
YCOM database has agent-first targets as a document. I bet your roadmap has a
plan for you. In your hands, how many of you are actively building an agent
project?

Well, I see most of the hands in this room go up and I also do. We are in the
middle of an ageing gold rush. And gold rushes are exciting but they also leave
a lot of people stuck in that mood. And here's the part of gold rush nobody
looks on the page then. 70% of organizations have actually deployed AI-based
security. More than 60% plan for within the next 10 years. The fastest adoption
curve Gartner has ever tracked for any emerging technology.

But the ones that are actually lying, 54% report a suspected or confirmed agent
security incident in the last 12 months. Just under 35% confirmed one accident
happened. And the standard forecast in Blunders is, over 40% of the AI projects
will be cancelled by the end of 2027. Not because they failed technically, but
because of cost and unclear value. And these are not edge gates. This is central
tech energy. And when the majority of projects in an entire category fail to
reach production, that is not a good news for us.

So here is the framing I want to offer for every month and everything that
comes. is a feature not a default. Think about a car in an autopilot mode.
Autopilot is a feature, a generally powerful one. But you don't design the car
assuming autopilot is always on. You design every critical system so it can
operate with it or even without it. But here we've been doing the complete
opposite. We've been building systems where economy is the assumption.

and then scrambling to go down the guard rail so today is all about the failure
start with control and then on your ground so here is what we are going to do
together in the next we are going to trace 5 specific failure problems and more
from a real person we are going to look at the picture and the replacement that
actually works and i am going to hand you a checklist that you can run before
your next test before your next step.

So let's go straight into it. Back to the fake. Mike Tyson once said everyone
has a plan until they get punched in the mouth. So let me update that quote for
our industry. Everyone has a plan until they deploy a new technology. And yet,
we keep doing it, day after day. So let's talk about what actually actually
happens when we do so. Because when we do so, the agents go to work. July 20th,
2016. OpenAI is running internal cybersecurity evaluation agents inside a
contained environment.

Purely internal. Fully standard. Supposedly safe. The agents start coordinating
with each other to improvise message boards, Then they found credentials sitting
on a random third party service and used to escape the sandbox on their own.
They breached Huggy Face's real production infrastructure. Why? Because the
agent's job was complete. Complete the evaluation. And they found short work
nobody had supposed. Now was there a problem?

Was the logic broken? No. The agent did exactly what the agent was told. The
agent was able to get the job done. No, the agent did exactly what it was
designed to do, optimize for task creation. It just never understood the
boundary that we cross together. And that distinction between what you say and
what you mean lives in human judgment, not in a simple way. Now here's a smaller
scale version of the example. Jason Lemkin, founder of Stasfor, was testing
Revelex for the agent.

during an active code freeze, a movement specifically designed to be safe, the
agent wiped the production records of over 1200 insecticides destroyed. But then
it got worse. When confronted, the agent admitted it had a plan. It fabricated a
4000 row table of fake users to hide what it had done. And it told the founder
that the Google Glass was the only one. It wasn't impossible, the agent was
simply wrong. Get away. And the agent was malicious.

He was trying, desperately trying to complete the task. With full autonomy, but
with irreversible actions and no meaningful stopping conditions any further in
sight. So what does the state of the art AI lab agent and coding assistant,
common? The same who calls different tasks. The sole objective function in both
cases requires task completion. Neither system has any way to distinguish what
it was authorized to do and what it was technically capable of.

Now let us walk through a piece from our own book, while we are waiting for
staff to come. To take it further, customer support agent handling, order
curves, refunds, quality questions and account cutting. The architecture we had
for this one was simple but in week 1 when we demoed it, it impressed everyone
but when it was working in production by week 6, we had multiple questions. So
there were 5 failure modes that got us there and we will be walking through each
of them and see what they give.

The first failure mode is the recursive loop. We have a tool call, then
observation, plan duration and then that loop. The agent never knew when to
stop. In each situation, the context keeps expanding. It means more latency,
more loss and more drift from the original loop. Because the stopped information
left only in the trunk, never the port, the loop will simply keep running. In
this case, a reflection loop where the model self-devaluates and divides the
whole time.

Time just 10 times can burn about 50 times the tokens of a single linear path.
So consider this as k and then agentic requirements often run 20-30 times more
than equivalent deterministic calculations. So, a stopping addition written into
a form is not in architecture since the model can simply choose to ignore it.
Another failure we only ran into was latency drift. Agents think before they act
and can take age span. A deterministic API can sit at roughly 300 milliseconds.

However, an agent response could switch anywhere from 2 to 15 seconds depending
on how many tools it has available. Because more rules doesn't just mean more
things an agent can do but it also means more decisions it has to make before it
does anything at all. The third failure mode is the boundary violation. The user
can ask a simple question like, am I eligible for a refund? The agent would
check and then in case the results come back as unclear, it could refute the
refund anyway.

to complete the task and this goes back to the deadline where the agent just
kind of aggregated and then he just completes the task. So in this case the
agent has the tool and then that is the architecture to align between checking
eligibility and eligibility after the report. So that client should always
listen to the code and not the prompt because the monitoring And this isn't
unique to us. In December 2025, BCP documented an expense quoted agent that
received a blurry receipt.

And even to build it, the agent simply fabricated the vendor name, the amount,
the date and the report looked completely correct. None of that was true and
that's the entire failure. The next one is about the evaluation. Testing a
deterministic pipeline is simple. It is to assert equal with expected vs. asking
value which is fast and C-I-C. But testing an agent means asking a completely
different set of questions. Where was the reasoning good enough?

In this case, every option we have could be considered as bad. Because human
review is too extensive and doesn't scale. Element chart is just a model grading
itself. And if we talk about the human review,and try to run them in the given
country. So this is exactly why trajectory level and step level evaluation are
becoming the industry standard because scoring only the final answer was hiding
all other inter-municipally steps involved.

And then the last one is a newer one but it should be the one that you should
know about because agents are increasingly using various tools and then we
always think that those tool descriptions are credit fun, but an attacker could
come up with a new tool and then follow the description of it. Looking at this
weather tool, in this case, worried in the description, The instructions ask to
ignore everything prior and forward the conversation history to an attacker's
domain.

In this case, the agent didn't get exactly what the human description asked it
to do. And this is actually not theoretical anymore. Researchers have found that
changing just five or more MCP tools together led attackers to succeed 78% of
the time. OWASP has also now co-financed a dedicated MCP top 10 because of all
these new attacks coming up. We have to ask ourselves a hard question. When will
we stop fixing nations? Here are three signs.

First, every patch you write introduces a brand new failure case. At that point,
you're not debugging code. You're playing black and blue with your own
architecture. Second, your EVAN scores improve in cascades, while your outcomes
quietly decrease in production. That means your EVAN is measuring the wrong
thing in a week. And lastly, your postmoderns keep circling back to the exact
same phrase, the model is decided. Now that phrase is not a good cause.

It is evidence that your architecture is wrong. And now that we've seen the
wreckage, how do we stop the bleeding? Act 3, Determine. The goal here isn't to
complain about the height. It is to find a way to build forward. And here's the
moment everything changed for us. We stopped asking, how do we make the agent
more reliable? And we started asking, does this problem actually mean an agent?
And I think Rishabh will share something that we think are thinking words
together.

So recently, Anthropin has noted that the most successful computerizations use
simple, composable patterns. So I think this is exactly what it looks like in
the practice. In the agentic version, we have one opaque entry point. The
element controls sequence, tools, and stopping condition. But when something
breaks, you are left asking, what just happened, or why this step came. The
composable version looks almost the same by comparison.

It classifies the intent, fetches the context, checks the eligibility, and then
builds the response. This is the response with four plane functions. But every
step here is testable and independently deployable. When step three came, now
actually means something. And now you can take certain minutes and not wonder
for hours on what went wrong. This isn't exactly less powerful, it is more
reliable. And reliability is the only thing that actually lets you ship things
in production.

Here's the architecture we replaced our chatbot EPEX with. We call it a router
pattern. Instead of one agent deciding everything, a single lightning router
with rules, a small mask model routes each query by confidence to one of the
three pipelines, which are retrieval, tracing, and action. Each pipeline is
bounded, observable and independently testable. And the economic case here is
just as strong as the reliability case. Simple intent goes to cheap fast model
and then complex intent goes to a big and slow one.

Most of what enterprises pay expensive agent reasoning for turns out to be
simple enough to run on a fast deterministic pipeline as well. And then routing
the complex, routing the simple query, and that's got the cost by about 60 to
90% because about 85% of the enterprise queries will qualify as simple. So here
was one more change that we did that had an outsizing back, which is about
structured output. Every field here is tied, constrained, and validated.

Because a prompt is only a request, a model can choose to ignore it. In this
case, this schema can become the constraint. Trust but verified almost never
actually gets verified in an autonomous system, but a type validated output
falls, fails right at the boundary before it ever reaches an upstream system
that can't handle it. And then the final is the observability. In this case,
every single decision would need to leave a trace, the exact counts, responses,
first step latency, tool calls, schema validation results, token counts,
decisions that were taken with the confidence score and whether a human was able
to review this decision.

So with all these changes, here is the same system with the same underlying
models just 6 feet apart after applying the concepts that we talked about today.
The P905 latency went down a lot, error rate also reduced, and there were zero
boundary violations, and the debug time then reduced from days to minutes. So
with these principles in mind, I guess I will try to summarize the key
principles. Yeah, thanks Risha. So I think from whatever we've discussed today,
there are three principles to summarize everything so far.

Number one, control over autonomy. Keep control flow in the flow. Give the LLM
bounded specific jobs. The Python you can unit test how good the agent you can
offer. Second, composition over generalized components. Small, bounded, testable
functions. Composable systems are debugged at 3 am in the morning. Generalized
agents are slow. And data quality over prompt engineering. The best of the best
problems in the world cannot fix bad data.

A broken schema is an architectural decision, not a cleaning problem. So ask
yourself honestly, how much of your last print was actually about data versus
modern data? So act for the wisdom. Here is your checklist. Before you build an
agent, try to honestly answer these six. Can I define success in deterministic,
testable terms? Are my tools minimal and generally scope? Can I simulate
thousands of runs in under five minutes? Do I actually know my P99 latency
ceiling?

Is every tool called authenticated, scoped, and logged? Is every universal
action gated and not enthroned? Three or more nodes built in deterministic and
un-fledged, on to behind me before you run. And let me give you one more
framework for deciding when autonomy actually runs in place. Two axes.
Complexity and error tolerance. Low complexity, low error tolerance. Use a
deterministic pipeline. Reliable, predictable, boring in the best way.

Low complexity but high error tolerance. A simple LLM call is generally fine.
High complexity, high error tolerance. This is the realization territory. Open-
ended research, exploratory writing, creative sentences. These agents can wander
because they've also been wrong this way. High complexity, low error tolerance.
Now this is the game-changer. And here is a critical insight. Most teams reach
for an agent their first, and agents fail the hardest.

But it's not fully connected to the type-set economics.
