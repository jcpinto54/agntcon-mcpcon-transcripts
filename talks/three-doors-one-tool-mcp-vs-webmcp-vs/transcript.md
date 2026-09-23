---
title: "Three Doors to One Tool: MCP vs WebMCP vs CLI"
speakers: [Frédéric Barthelet, Dominic Farolino]
day: fri
date: 2026-09-18
start: "09:29"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 20c12a9f47e6cac34f450f5d9985ae47
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=1678s
contributor: jcpinto54
---

# Three Doors to One Tool: MCP vs WebMCP vs CLI

**Frédéric Barthelet, Dominic Farolino** — CTO & Co-founder & Alpic / Editor of the WebMCP Specification & Software Engineer & Google

CTO & co-founder of Alpic, building the missing infrastructure layer for the agentic internet. Serverless veteran (built Lift and Revant); now full-time on Skybridge, an open-source framework for ChatGPT and MCP Apps.
Software Engineer at Google working on agentic web platform APIs in Chrome; editor of the WebMCP specification.

*Friday 18 September 2026, 09:29, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 0:27:58](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=1678s)), not an attendee's recording.

## Transcript

Hello, everyone. I'm Fred. I'm CTO and co-founder of Alpic, the MCP hosting
company. And my name is Dominic Farolino. I'm a software engineer on the Google
Chrome team and also one of the authors of WebMCP, as Angie mentioned. And we're
going to start with a really simple question. When an agent comes to your
service or your product, can it actually get something done? We spend a lot of
time thinking about how agents can discover our products and our services, but
agentic discovery is only half the battle.

When an agent shows up and the user says, great, book that flight or order that
product for me. The agent needs a way to act. Now, this is the obligatory AI-
generated slide, but I think one of the best parts about it was this little
stressed-out guy that Gemini gave me for free. I didn't even have to prompt for
this. And this is exactly what happens when your agent can find a capability but
can't cleanly interact with it. This is what we're trying to avoid.

So enter the world of agent experience, or AX. AX is all about giving agents not
just the ability to find a capability, but to authenticate on the user's behalf
and to bring the user to the last mile of an important journey. AX is crucial
because, as we've heard throughout this conference, agents are already users. In
August 2025, Vercel reported that AI bot traffic made up more than 20% of all
web traffic. And that might sound like a lot, but as early as June 2026,
Cloudflare reported that for the first time ever, and far faster than predicted,
bot traffic actually overtook human web traffic on the internet, largely driven
by an increase in AI agents.

So all of this is to say that the point is agents are out there, they're trying
to accomplish things, they're looking for capabilities, and the question for any
product team becomes how to expose those capabilities. So, consider a platform
like Alpic, like Fred's company. It helps you run servers, deploy apps, manage
teams of users. Now, imagine trying to do any of those tasks yourself. You could
manually interact with the website, like it's 1995, or we can try and get your
agents to do some of those tasks for you.

So how do we do that? There are three major ways that an agent can perform some
of these tasks on your behalf. An agent can interact with the third-party
services MCP server directly. It can engage with the WebMCP tools on the
service's website. And it can even reuse existing CLI tools that might already
be on your machine and deployed from the service. I'm going to start briefly
with MCP, since we're probably all most familiar with that at a conference like
this.

MCP is sort of the OG capability layer for agents. With MCP, tools either live
locally on your computer or remotely on your server. But in either case, agents
are connecting to the tools headlessly in the background to extend their
capabilities. With MCP, you're primarily engaging with the agent's UI, not
really the third party's UI directly. So your goal is to give the agent just
enough that it needs to go off of to interact with the service on your behalf.

So in this case, we have a demo where Frédéric is using Gemini Spark to tell it
to grab performance insights from an existing app that's deployed on Alpic. Here
you can see it does the handshake with the MCP server, comes down and summarizes
all the performance things that you care about in natural language in the agency
UI. Now you've probably heard about WebMCP. We've been getting a lot of
questions about this at the conference, which is awesome. And WebMCP kind of
inverts this model. It lifts the tool interface from the server onto the web
page itself. So users can continue to interact with the web page directly as
they always would. In Alpic's case, The website gives you the ability to manage
users in an organization and add people and manage the organization with like
admin levels like that.

But if you ever try and throw your agent at a task like that, you notice two
things. The first thing is it works. And the second thing is it's like crazy
slow. It's like really notoriously painful. There's a lot of DOM scraping and
screen shotting and accessibility tool, accessibility tree sniffing. This kind
of stuff makes the agent sad. And this is what WebMCP's goal is to try and fix.
WebMCP is a simple concept. It allows you to hoist some of the existing
implementation capabilities of a website, the existing HTML and JavaScript, into
a programmatic tool layer that you can interact with through your agent.

That way you and your agent can interact with the same exact service but through
a capability layer that's designed for both of those users. This next demo is
pretty quick. ChatGPT recently announced support for WebMCP. And because it's a
Chromium-based browser, you can actually go into dev tools on the Alpic site and
see all the WebMCP tools that Alpic offers. But this also means you can go back
to ChatGPT and ask it to do commands, like Fred is adding me to a team on his
site.

ChatGPT knows that you maybe use this site directly and that it has WebMCP
tools, and it can go out into the UI and do that action directly really, really
fast with the help of WebMCP tools instead of invoking that expensive inference
loop. Finally, we have our old friend, the command line. If you live in a
technical environment with command line tools already installed, they integrate
seamlessly with your agent. Like MCP, you're communicating directly with the
agent's UI, not the third party's UI.

Like WebMCP, you're reusing an existing interface that might have already
existed before the agent came along. So in this next demo, we have Frédéric
talking to Claude Code and telling it about an app that we've been developing
and asking it to deploy it. And in this case, Claude Code knows either
organically or through a skill that you use and have the Alpic CLI already
installed and authenticated, and it converts your demand into Alpic CLI commands
and then spits out the rich text back to you in the terminal environment.

Fred? Thanks. Not all agents behave the same. Harness configuration and VM
capabilities varies greatly from one agent to the other. Each door, WebMCP, MCP,
CLI, leverage a specific capability, enables deeper UI integrations, or improves
the ability of an overall task. WebMCP leverages the browser. The tool is
executed in the context of the page using the VM browser or your own via a
dedicated extension. CLI leverage the host shell.

The tool is executed in a subprocess on the VM. MCP leverage a local, but most
of the time a remote server, with dedicated connection. The tool is executed in
a context outside the agent. Which capabilities the agent has partially dictates
the door it would prefer to use. But it's not the only determining factor. Some
operations benefits from providing visual feedback back to the user. One of
WebMCP's strengths is exposing tools while the human still sees a familiar
website.

The agent often does not need to restate tool outcomes, and the page itself is
already sufficient feedback. On the other hand, most humans are very
uncomfortable staring at the terminal and reading CLI standard output. MCP,
quite similarly, output is not intended for human eyes. But the app extension
closes that gap and brings back some UI into the agent's surface when you need
it. Access control is another important determining factor.

The doors really diverge here. WebMCP usually inherits whatever credentials are
already given to the user on a specific origin. CLI 2 has no standard auth story
here. You can be using config files, environment variables, key chains. Both
WebMCP and CLI Auth are implementation defined. MCP is the only one with a
standardized authorization path, OAuth 2.1. It enables things to be hosted in
the Auth platform and features like cross-app access.

Distribution also varies from one door to the other. WebMCP inherits the web. If
Google, Bing, or Yahoo can find your page, an agent with a WebMCP-enabled
browser can use it. CLI writes package manager, whether it's APT, NPM, Brew,
PyPI, someone has to install your CLI on the VM to be able to use it. MCP has a
dedicated registry, but most hosts use a specific marketplace with varying level
of proactive injection and discovery. Beyond marketplaces, builders can also
fall back to paste your own MCP URL to extend your agent.

Composability is another great thing. All doors use structured contract
interfaces, but composition greatly varies from one door to another. Is your
tool best used in combination with others should weigh in your decision to
prefer one door. CLI is unfairly good at composition. Unix was built for pipes.
Models are very good at writing very dense one-liner that chains shell together
in one single shell call. MCP and WebMCP still compose just differently, the
harness, sequences, structure, tool call.

We gained back some of that composability in MCP using code mode on the client
side. Those are not three religions. They are three transports to the same
tools. The door you choose is first and foremost an agent experience decision
based on which harnesses are most susceptible to user product surface. Based on
which capabilities they have, based on preferred distribution method, based on
existing enterprise integration or the need for user feedback.

To get you started, just a quick tip. I gave a talk last year in this conference
on MCP server design. Don't map your API endpoints to MCP tool. Always leverage
features in polymorphic tools for accommodating varying user flow. Always
leverage error message for model self-correctness. So put explicit error message
and remove meaningless value to spare context. Now WebMCP is still experimental,
but it's coming soon. And so some colleagues of mine at Google have put together
some great documentation in this QR code here about how to get started and how
to use WebMCP, how to transform your existing site into WebMCP tools, and how to
use a lot of the security annotations to help drive the model's harness in a way
to use your tools in a way that's safe.

And designing CLI is quite contentious to what we've been doing for most years,
but it's good to provide non-interactive ways to interact for agent. Don't use
current working directory override. Always use name parameter, explicit ones,
and wait for command to finishes for the agents to be able to resume this work.
I hope we got you hyped up and ready to open more doors on your product
surfaces. We thank you very much for your attentions.

There are socials if you want to connect, and we'd be happy to stay around at
the end And if you want to talk more. Thank you very much.
