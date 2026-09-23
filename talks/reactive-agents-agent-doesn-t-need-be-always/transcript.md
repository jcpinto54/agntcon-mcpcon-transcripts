---
title: "Reactive Agents: Your Agent Doesn't Need to Be Always On"
speakers: [Clare Liguori]
day: thu
date: 2026-09-17
start: "09:29"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 6e6f2a0798fa2937b99241a3a1e22960
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=2749s
contributor: jcpinto54
---

# Reactive Agents: Your Agent Doesn't Need to Be Always On

**Clare Liguori** — MCP Core Maintainer & Senior Principal Engineer & AWS

Senior Principal Engineer at AWS working on Kiro and the Strands Agents SDK; core maintainer of the MCP specification. 12+ years at Amazon (AWS Proton, ECS, Code Suite, CDK, Backstage); BS in CS from UT Austin.

*Thursday 17 September 2026, 09:29, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 0:45:49](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=2749s)), not an attendee's recording.

## Transcript

Good morning. I'm Clare Liguori. I work at AWS on the Kiro coding assistant, and
I also work on MCP. Today I want to talk about what agents spend most of their
time doing, which which is actually nothing at all. This diagram probably looks
pretty familiar. This is a very common agent that you would build today. This is
what most agents look like today. The agent waits for input, maybe from a user,
maybe from some other system, and then the agent then calls the model, calls
tools requested by the model, gets the result, passes it back to the model, does
that in a big loop until the model returns a final result.

And that core agent loop is the part that we talk about most of the time when we
talk about agents. And that's the part that we build. We choose the model, we
choose the prompt, we build tools, we connect MCP servers into our agents. But
the part that I want to draw your attention to today is the parts that say wait.
Because that is actually what agents spend most of their time doing, waiting. So
agents spend most of their lives waiting today.

They call a tool call, maybe it responds fairly quickly, but they're waiting for
the result. Some tools might take a long time to complete, like 15 minutes to
provision a database cluster. They might wait for a long time for input. A human
might not reply the next turn of the conversation for another week or a alert
that it's waiting for to get kicked off might not come in for an entire month.
Most agent frameworks hold a process open through all of this waiting.

So a machine that's running that agent could have to stay up for weeks or months
when it only has a few minutes of real work to do. I confess, I do this too. I
have a Mac mini at home that's running an agent, and it's waiting right now for
me to text it on Signal. It maybe does less than a few minutes of work per day,
but that Mac mini is on all the time, and that agent is running all the time,
because it's constantly waiting for me to text it on Signal.

It's constantly waiting for text messages to come in. Here's that same loop, but
with one change to make it a reactive agent. Every place the agent used to wait,
I changed it to hibernate. And a reactive agent is just that. It's a running
process only while it actually has real work to do. And the rest of the time, it
hibernates. The hibernated agent is just data. It could be a row in a database.
It could be a file on disk that has the conversation history until something
outside of that agent resumes the process.

And it loads in all of that data that's on disk or in a database. Idle time for
reactive agents costs nothing because there's nothing running. There's no
process, there's no compute. They scale to zero. I define reactive agents using
three properties of the agent. One is the agent can suspend and resume when
idle. The second is work can continue while that agent hibernates. And third is
an external event can wake up that agent, can resume it.

To give you an idea of what reactive agents actually look like, I'm giving you a
peek into an experimental project at Amazon called Infinity. So, Infinity runs
an agent as a series of short execution slices. Each slice resumes and suspends
the agent. Each slice loads the agent's conversation state from history. That
could be, again, a file or from a database. It runs one model completion,
dispatches the tool calls as async requests, persists that state, that
conversation history, and then yields.

So, between slices, nothing for that particular agent is running. In Infinity,
again, that agent is just pure data. Between turns, it's just that conversation
history. So, it has no stack in memory and it has no open connection to
anything. With this experiment in Infinity, we were able to pack 75,000 Infinity
agents into the the memory of a Raspberry Pi. And we deployed those same agents
as a serverless system in AWS Lambda, so we could scale out those agents pretty
much infinitely without having to pay for any idle time.

I will confess this reactive agents pattern is not common today. Most of our
agents are always on, but I expect that to change quickly as some of these
experiments like Infinity start to evolve into production systems because I
don't think any of us want to pay for idle time. I personally don't really want
the Mac mini running in my house all the time. And that brings me to MCP. What
can MCP do to enable this pattern of reactive agents?

Let's look at that first property of reactive agents. Let's break it down
property by property. The agent can suspend and resume when idle. In MCP that
means no long-lived streams between the client and the server. A long-lived
stream means that that agent process has to be up all the time, maintaining that
streaming connection. The agent can't hibernate however little it's doing
because that process has to keep that connection alive.

David talked a little bit about, You just mentioned MRTR, but in previous MCP
spec versions, certain features of MCP like elicitation. Elicitation is where
the server can actually send a request to the client in response to a tool call
asking for more information, more input. With elicitation, that required a
persistent SSE stream in between the client and the server so the server could
always push back a request for more input like elicitation.

But the latest MCP spec introduced multi-round trip requests where a feature
like elicitation can now be orchestrated over multiple HTTP requests. The server
says, I need more input in response to a tool call request. That request ends,
and then a later request from the client to the server can say, I wanna make
this tool call, here's the input you previously asked for. So no more long-lived
streams between the client and the HTTP server so that agent can actually
hibernate in between tool calls.

If a human replies next week as the agent is waiting for more information,
that's fine because it can be suspended the whole time. So even with things like
elicitation, if it then requires the agent to ask the user to give that input,
that's okay. It can still hibernate during that time. Next slide. There we go.
It's hibernated, somebody said. Let's look at property number two of reactive
agents. Work continues while the agent hibernates.

So in MCP, this means the client needs to be able to make async requests,
especially for long running work. I mentioned earlier the 15 minute database
provisioning. That would be a very long time to hold a tool call request open to
an MCP server until it finished. The agent needs to be able to start something
like a database provisioning and then get out of the way and suspend until that
work is done. The MCP tasks extension, lets a server tell the client, this tool
call is gonna take a while.

This task is gonna take a while. That could be, like I said, a database
provisioning, or it could be a CI build or anything else that's gonna take more
than a few seconds and you don't wanna hold that connection open for that tool
call. So instead of holding the tool call request open for that entire time, the
server hands back a task ID. And the client can then periodically check on it,
check on that task with that task ID until it's done.

And in between, the agent can hibernate. It can hibernate for five seconds, wake
up, check on the task, and then go back to sleep again. It can, it doesn't need
to hold open a connection for a long time, it doesn't need to run for a long
time, it can go and hibernate. Let's now look at that final property of reactive
agents. An external event can wake the agent. In MCP, this means that the server
needs to be able to push events to the client in order to wake it up. In the MCP
triggers and events working group, we're designing a way for MCP clients to
subscribe to a server's event with three delivery options. So the first two, the
server could deliver events via client polling.

The client says, do you have any events for me? Do you have any events for me?
Or pushing over a stream. Again, that long-lived SSE connection between the
client and the server. Both of those work for many agents, but neither is
optimal for a reactive agent that wants to spend most of its time hibernating.
Polling means that the agent has to periodically wake up and check. And
streaming means it can't sleep ever. It has to maintain that persistent
connection.

So for reactive agents, you need a third delivery option, webhooks. The client
hands the server a webhook URL and the server posts events to it. So the agent
can hibernate and simply wait for a webhook to wake it up. This is especially
useful for what I call serverful agents, maybe not your agent that's running on
your laptop, your coding assistant, but for anything where you have an agentic
system that you could wake up an agent with a queue or a message broker or even
directly with the webhook URL endpoint.

So not all of these pieces that I've talked about are in place quite yet, but
I'm excited that MCP is continuing to evolve to enable this type of agent
pattern, reactive agents. And I do have three asks for you today. One is to
adopt the latest spec that came out on 7/28. Think about which of your clients
need to be upgraded to the latest SDKs, which of your servers need to be
upgraded to the latest SDKs. And second, think about how to use the tasks
extension in your clients and your servers.

Where do you have the possibility of long running tasks that could be enabled by
MCP tasks extension? Where in your clients and your servers could you implement
that? And third is provide feedback to the triggers and events working group on
the current design we wanna hear from you if these are going to work for your
agentic systems. So let's keep the conversation going. Come visit the AWS booth
D3 in the solutions showcase. I will be there after the keynote for a while in a
meet the expert hour.

And we have demos going on in the booth and I have been told we have deliveries
of Stroopwafels as well. Thanks.
