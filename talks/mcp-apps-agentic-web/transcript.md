---
title: "MCP Apps and The Agentic Web"
speakers: [Liad Yosef]
day: fri
date: 2026-09-18
start: "13:15"
room: Emerald Room
track: MCPCon (MCP track)
kind: talk
session_id: 0ce2cfec5a226a96deab5d3bf77d33e4
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=17329s
contributor: jcpinto54
---

# MCP Apps and The Agentic Web

**Liad Yosef** — MCP Apps

Liad Yosef is co-founder and CTO of Ora, a research lab for the agentic web, and
a co-creator and maintainer of
[MCP Apps](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/) on
the MCP steering committee, along with MCP-UI, GitMCP and work on WebMCP. He has
two decades of frontend architecture behind him at Shopify, Duda and Monday.com,
where he led agentic commerce work, and is an analog astronaut with the European
Space Agency.

*Friday 18 September 2026, 13:15, Emerald Room — MCPCon (MCP track) track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream ([Day 2 on YouTube, from 4:48:49](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=17329s)), not an attendee's recording.

## Transcript

Hi everyone. How are you? I hope you had a great conference so far. This talk
was named MCP apps and the agentic web. It's called now the agentic web, not
because MCP apps is not important, but because MCP apps are the first thing that
can really usher the agentic web. So this is going to be a little bit of an
overview and a summary of things that you heard so far, but also the vision for
the future. One disclaimer, I built this talk yesterday, so it might be a little
bit outdated in the rate that things are changing around here, and you will see
it throughout the talk.

I'm Liad. I'm the co-creator and maintainer of the MCP apps. I'm also an MCP
maintainer in the MCP committee, and I'm a co-founder of a company called Ora,
which is a research lab for the agentic web. I used to lead agentic commerce at
Shopify, and I'm also an analog astronaut for the European Space Agency, so
you're welcome to ask me about it. I won't talk about it here in the talk. This
is from yesterday. And I'm sure that everyone here feels the same, right?

I mean, OK, we know about MCP apps. We just learned about MCP. We have MCP. We
have API. What do we need to do in order for my product to be agent ready? And
the thing about MCP apps is that it was the last building block on the way to
the agentic web. So MCP apps really paved the way to the agentic web. A little
bit of like a quick primer for MCP apps. MCP apps, as you've seen, and there was
a talk about it in the conference, so I won't dive into it, but it's the idea of
chat or chat with your cloud or every chat interface can display UI interfaces
inside the chat, like here, Excalidraw.

And MCP apps is actually very young. So it started less than a year ago when me
and Ido Salomon, the co-creator of MCP-UI, we were given five minutes on stage
to present the idea of MCP-UI. And the idea of MCP-UI was very simple. It says,
what if we let every app in the world just send its own interface into the chat?
So instead of running this wall of text where we just want to ask something and
the chat or the agent gets the information from different services, but those
services are losing their identity and branding in the process, what if we can
just do this?

Which is what everyone knows today as ChatGPT apps or Claude apps or any other
chat interface. And these are not just for visualization, they're also
interactive. So this is MCP apps. And the thing about MCP apps is that everybody
wins here because the brands, they get the identity and branding. So if Airbnb
is sending its information to ChatGPT or to Claude, it maintains the Airbnb
branding because it's sending chunks of its own UI.

We as the users, we gain the trust and familiarity because I know that this
information came from booking.com or Airbnb, and I know how to interact with
their interface, so I get this last mile of interaction. And the agents also
benefit from that, because they don't need to reinvent all of these things
themselves. They have domain experts that can do it for them, right?
Ticketmaster is a domain expert in how to book seats in a venue, so there's no
reason why our agent will have to generate that.

So it's really a win-win. And at Shopify, this was the main unblock for opening
Shopify to third party agents, because if you look at that experience, that's
not something that Shopify would want, right? Because then Shopify loses its
place in the value chain if it doesn't show anything that Shopify like. But
Shopify is adopting MCP-UI, allow Shopify to maintain its branding and its
identity like we see here. So MCP-UI alongside Anthropic and OpenAI, we set
together and we defined this protocol called MCP apps, which is basically the
protocol of how to send application to the chat.

We released it January, and it's got huge adoption. Like every, every, every
chat interface today supports MCP apps. Yeah, almost. Almost every chat. ChatGPT
recommends MCP apps as the way to build ChatGPT apps. Obviously, Goose, Claude,
and Gemini is going to support it soon. And the thing about MCP apps is that
it's changed the way that we think of the web, right? Because if this is the
experience that I get when I'm just trying to accomplish a task, yeah, just a
second.

Yeah, sorry. So if this is the experience that I get, then I actually solved the
last mile of interaction. I actually solved the problem of how I can interact
with the chat. And that brings us to the real agentic web. Because if I want to
plan an anniversary, instead of staring at 20 tabs at my browser, trying to
understand how to interact with those different interfaces, because Amazon has a
different way of how I should convey my intent to it.

And booking has a different way. And every app has a different way. So instead
of me learning those interfaces, which I don't need, like 99% of them I don't
need, I just break them into atoms and I let my assistant compose these atoms
for me, right? So my assistant can say, hey, I see that you have an important
date coming and instead of pulling the data from Google Calendar, it shows me
Google Calendar. And then instead of pulling the card from Amazon, it shows me
Amazon.

And then my experience becomes like this and I don't need to leave the
assistant. And that's important. It's not just a form factor change. That's an
interaction change. I don't need to leave my assistant because most of the
things that I was using the interface for are being done behind the scenes. I
don't need to understand all of these interfaces. And application no longer
control the user journey, right? Because they just they're just in charge of the
last mile of interaction.

So you would say, Can I just spin up an agent for every app? Will I have an
Amazon agent and a Shopify agent and an Etsy agent and I'll just browse to those
agents and then you get this. No one wants to use 20 agents, right? Everybody
wants to use their own personal assistant. No one wants to stare at 20 tabs with
20. What do you want to do today? Right? And it's all over Twitter. What about
browser agents like we heard? These are good, but these are just a faster horses
solution, right?

Because this is just trying to retrofit an ecosystem that we perfected for 20
years for humans to agents. And these are discussions that you heard in this
conference today, because on one hand, everybody's saying that computer is
really slow, right? And everyone is like, ah, now my agent needs to screenshot
and click and everything. On the other hand, Jev that was released a few days
ago can do flight booking in seven seconds. This is like a real demo.

It was just published yesterday. Seven seconds. No WebMCP, nothing. Just Jev and
the DOM. So do we really need this glue between the agent and the humans? Now
WebMCP is a good bridge. And I'm all for WebMCP. It's good for co-browsing. It's
good for those cases. When I'm browsing something and I'm asking my agent, can
you help me with it? When I look at the Salesforce dashboard, do I really want
my agent to try to figure out what's going on here?

Even with WebMCP tools? I don't think so. So we have to remember that we need to
understand what the agents need and not how to adjust what we want them to use.
So maybe human websites are not the ideal interface because if you think about
it, what's a website? What's a web app? a human to convey my intent to the
business. If I come to booking.com, booking doesn't know if I want to book a
hotel, file a complaint, log into my account, it doesn't know.

I need to use the interface in order to convey this intent. Now, if I have an
agent, if I have an assistant and I convey my intent to that agent, does that
agent need to actually do those things in the website just to convey the intent
to Airbnb? Why not this? I mean, isn't this better? I know it's obvious, But we
need to think of how the agentic web will look in two years and not how do we
want it to look right now. So as assistants are becoming the OS, like the
operating system, and if you ask, it's surprising, but the adoption with the
older generation and the younger generation is there.

My mother uses ChatGPT for everything. If she could book a doctor's appointment
using ChatGPT, she won't go to that clinic's website. And my nine-year-old goes
to ChatGPT before they go to Chrome, right? So the adoption is there. We might
have websites and browsers lose their position as the main entry point to the
web. We'll have personal assistants becoming the main entry point to the web.
And we need to think of what it means. So I know it sounds like that. It's not
like, yeah. And we live through changes. We live through websites going from
desktop to mobile. So desktop didn't go away. And now it's agents.

And the web isn't going away. The only difference is that there are things that
went away when we when we did the mobile revolution, social went from desktop to
mobile and stayed there. No one is opening Instagram on their desktop, right?
And a lot of those things are gonna move now from the web to agent and stay
there. Now, we will have websites, just not as prominent as today. And a year
ago, I had this like friendly debate with the CPO of Sentry.

He was saying, yeah, I'm willing to take that bet. In 25 years, there will still
be websites. So I took this bet, that was a year ago. And a month ago, he said,
OK, so Sentry is now aiming only for agents, only headless, no websites, just
aiming for agents. And we see it across the board, right? Salesforce, that's a
very brave move by Salesforce side, because Salesforce main differentiator is
the interface that it uses to relay thousands of lines of data to the human eye.

And if I'm taking it away, then what's Salesforce differentiator? Like, what did
they say? But they went headless as well, because they understand This is the
way that people are going to interact with them. Cloudflare just said that bot
traffic surpassed human traffic way faster than we thought. DoorDash released a
CLI. I mean, if you think about DoorDash, the ultimate consumer app released a
CLI. And witnessing here how if we solve the last mile of interaction, we're
solving the agentic web.

So personal assistants like OpenClaw and Instinct and those kind of things, you
don't really need UI. because you just interact with them, and most of the
things are happening behind the scenes. Then we have this aggregated UI or
generated UI that assistants are able to generate on the fly. And only then we
have the branded UI which solves this last mile. Ticketmaster can send me just
the seat map for me to click because that's something that's gonna be hard for
my agent to communicate to me.

And in MCP apps, we're working very closely in order to be this home for every
agentic UI method. So we're working closely with Google on generative UI methods
and those kind of things. There's this notion of headless browsers that browse
mostly headlessly and only show you UI. This is Monogram. And there was one
released two days ago where you don't really see the browser. It just browsers,
and it just shows you the last amount of interaction.

And I think things are going to go in that direction. The rise of personal
assistants like Muse and Instinct and the Grok Bot, that symbol is the shift
because if you think about it, OpenClaw, like open our eyes, okay, an autonomous
assistant or a proactive assistant can do X, but it wasn't very friendly, it was
hard to install. My mother couldn't use OpenClaw. And now we see this shift of
these assistants being more consumer ready And once we hit mass adoption, that
will mean a change for consumer apps as well.

So if you put it on a spectrum, when we had coding agents that are now
prominent, everyone using coding agents, it changed the way DevTools are exposed
to their clients, right? Because DevTools like, I don't know, Supabase, MongoDB,
Sentry, either my agent is using them and then their business is going like
that, or it's not and then it's going like that, right? So right now, DevTools
feel the effect of coding agents or assistants being their customer.

Apps like Claude, ChatGPT, and Gemini, they mark this change for the B2B SaaS
and productivity because people are starting to use Salesforce via their Claudes
or via their ChatGPT, right? So they see it now. When personal consumer
assistance will hit mass adoption, that will be a significant change for 10
times more companies. The Walmart and the targets of the world, they have to
think, okay, what's my offering to agents? Because people are not browsing
Walmart anymore.

They're asking instinct, can you buy something for me? They don't really care if
it's from Walmart or from someone. So I call it like the nearly headless web,
where most of the actions are happening headlessly behind the scene, and you
just see this last mile of interaction. And this is something that's starting to
be very common. It's not a controversial thought anymore, but we're still
waiting for the ecosystem to catch up. And we can see that people are saying, if
your product or your website doesn't provide me a way to interact using my
agent, then I won't go to it.

And we see agents choosing those products in favor of other products. So the new
user experience is actually AX, which is the agentic experience. What's the
experience that I give to an agent? And the user agent experience, which is how
the human, because there's always a human I in the end, right? How the human on
the other end experiences the agent experiencing my product, right? So this is
very important. So if you remember the tweet from the beginning, now my product
has to be exposed to all of these different layers.

I still need the website, which is becoming less and less important, but I still
need a human website, and that human website can be visited by a human or by a
browser agent, and I need an MCP endpoint that can be visited by the human agent
or by my own agent that the human is using. I need to be agent ready on all
those fronts. And like Dominic and Frédéric said earlier, discovery is just one
part, right? Because just for an agent to discover me, that's the first step,
but it still needs to understand what I'm doing, how to authenticate to me, how
to pay me, and eventually how to relay all these things back to the user.

So it's a funny anecdote. When we built Ora, we asked Claude Code what's the
best analytics service for Ora for ourselves, and it recommended PostHog. And we
said, no, we want Mixpanel because we know Mixpanel for 10 years, we know how to
work with them. And Claude Code insisted on PostHog. It said it has better MCP
and better API, and I can work with it more easily. So we don't have brand
loyalty. We went with PostHog. But think about Mixpanel. They invested a decade
in building their UX and developer experience, and we just left them just
because Claude Code prefers PostHog.

So agentic experience is really important. It's not just nice thing to have.
That's your user experience right now. And Hermes, if it needs to use your
product and it needs to spin up a browser as a fallback to use your product, it
will remember that. It will write that, and it will be less inclined to use your
product next time. So at Ora, like I said, we were like a research lab for the
agentic web. So we started researching.

And we started with writing those benchmarks of what it means to be agent-ready.
By the way, it's free. You can access Ora.ai and just run whatever you want. And
we have this mapping of the ecosystem. We started mapping the ecosystem. But
then we noticed something very interesting. We noticed that the thing that we
think are not exactly the thing that the agents need. Because we found out that
50% of the ecosystem, of the tens of thousands sites that we scanned, 50% of
them publish llms.txt.

But when we ran the agents, and we ran thousands of agentic runs, agents didn't
look for llms.txt. They went straight to the docs and to the home page. They
only look for llms.txt if the docs told them to look for llms.txt. At that
point, it can be instructions.txt or something like that, right? And then we
understood it doesn't make a lot of sense for us to try to guess what the agents
need and then build it and then just expect they'll use it, right?

And you see a lot of protocols and best practices surfacing around this thinking
that we, as humans, we know what agents need. And then we run into things like,
okay, we think agents will need tools on the website. But then the models become
so good that using the website might be more efficient than using the tools. So
instead of just following with all of those protocols, we just need to observe
the agents. So we run like tens of thousands of runs on websites and we just
observe what's coming back and republishing it.

So we have this product called Journey, which is again free and free to use. You
can run any any website with any intent, with any harness, and you can just see
the actual agent journey trying to fulfill this intent, like in real time,
trying to fulfill this intent on the website. And that helps us understand how
can I make my product better for every harness that's coming? Because right now
we have to, I don't know, accommodate 15 agents, in a year it's gonna be
thousands.

Because everyone's gonna have their own customizable harness. So what does it
mean for something to be agent ready? And these journeys differ between
harnesses. So you can see here, I think it's like Haiku and Eve and ChatGPT,
same intent, same website, different journeys. Some reach to the end very
quickly. Some got confused. So this is very important. And we can map this
journey for every business goal. So if I want agents to be able to sign up for
my service, we can show you the journey for that.

And again, you can run it yourself. So we're publishing a lot of our findings.
We found out that agentic experience has big effect on AEO and GEO. And you can
see here that the difference between two products, that's real data. One is
fitted for agent, one is not. So agents are less likely to choose that product
in the first place. And we have a lot of partnerships and we're working with the
entire ecosystem just to understand how to adjust the web to be agent ready.

We recently released a partnership with Vercel on Is Agentic and we released the
AX package. We can just run npx ax on any URL and just see the agentic journey
on that URL and you get the full audit. WebMCP, obviously, we have the audit for
WebMCP. And the thing is, the interesting part is that it's not auditing the
website if it exposes WebMCP tools. Again, what we're interested at is can an
agent actually use that website with those MCP tools?

So you can just put, we have this tool, you can just put a website, you can put
an intent, and you can choose the harnesses, and you can choose with WebMCP,
without WebMCP. And we answer the question, can an agent fulfill that task on
the website? And sometimes the results are surprising. Sometimes it's WebMCP
beats vanilla and vice versa. So you can see it here. You can see, again, in
Ora, you can see all the research that we did, for example, how AX improves the
AEO.

And if we're talking about AEO, then the next big milestone to unlock the
agentic web is discovery, because how can I as an agent discover the tools that
I need to use? Right now, if I'm using ChatGPT, every tool needs to register
itself in ChatGPT. And I as the user have to say, yeah, I want to use
booking.com, right? And Claude is similar. But if I'm Instinct or Grok Bot or
Muse, how do I know which tools are better for me? And if you think about it,
every revolution has had its own discovery layer, right?

When we went to web, we had search, mobile app stores, social, we had feeds.
That's going to be the discovery layer for the agentic web. So web search is a
good option, but it's not very flexible. And also, web search is very fitted to
how us humans consume the web, right? Because if I search for something, I get a
domain. I get like a ranking of a domain. But maybe as an agent, I don't need my
agentic resources grouped by domains.

Maybe Booking's MCP server is better than Airbnb's MCP server, but Airbnb's
GraphQL endpoint is better than Booking, then it doesn't make a lot of sense
that I will ask Google which one is better and I'll get either Booking or either
Airbnb. By the way, Mixpanel, from the example that I gave you, is ranked higher
in Google than PostHog and still Claude Code preferred PostHog. So web search,
it's a good short-term solution. Might not be the solution.

registries per agents like ChatGPT and Claude. Again, these are as booking.com,
I need to register myself in each of them, which is not ideal. A central
registry is not an option because we don't want to reinvent this centrality of
search. So we have some emerging standards around it, which I really recommend
you to check out. ai-catalog.json, that's a really cool standard backed by the
big companies saying when an agent comes to a domain, if an agent comes to
Airbnb.com, there's a standardized way for the agent to know which agentic
resources this domain exposes. So, ai-catalog.json is just a catalog of an MCP
server, OpenAPI server, GraphQL, A2A, everything. So, as an agent, I have this
clarity that at least I don't need to look for the docs to understand what's the
URL of the MCP server.

Agentic resources discovery is built on top of AI catalog because ai-
catalog.json still rely on web search. I still, as an agent, I still need to get
to that domain. So ARD is a standard of how to build a registry. So the agent
just need to get to that registry, and it can be custom registry, and then the
registry tells it where to look for, right? So if you think about Stripe release
to Stripe directory, so the agent can come to Stripe directory, say I need an
email service or a text to voice service, and Stripe is ranking all the services
that it knows and return the service for it.

We have this implementation of Ora Directory if you want to play with this
notion. So we scan 70,000 domains, so we have all the agentic resources of them,
so we know how to automatically create the AI catalog JSON for each of them,
right? that includes all the agentic entry point for all of them. So if you as
an agent come to Ora Directory and ask, I need like an image generation service,
then we know how to return to you the best service that has the best AX because
we rent you.

So check it out if you want. And of course it's fully ARD compliant. And it's a
reference implementation for ARD. Check it out. Okay. Some other things that
we're doing, we're researching how being accessible to agents is actually being
accessible to humans, right? If you think about it, like an agent visiting your
website, very similar to a visually impaired human visiting your website. So how
we can lift both of them together.

And again, if you think about it, the shift from web to personal assistant,
that's amazing for accessibility. Because now I can have all the content in the
way that I want it and not in the way that booking.com or Airbnb thought that I
would need it. And you may ask yourself with all of those protocols, maybe the
future is just like one agent entry point, like slash ask or something like
that. Why do we need all of this? And that's an open question.

And we don't really know. It depends on inference costs and it depends on the
rate of adoption. But that's a good question. And we have to remember that all
of these are just steps in the way for a real agentic web. And again, browser
use is like watching paint dry. That's not the experience that we want. So let's
stop just to check what agents actually need and not try to retrofit our
ecosystem to what was perfected for humans. In MCP apps, we're working on
advancing this future and we're working on things like how agents can interact
with MCP apps, which is what MCP is like. And I invite all of you to get
involved in MCP apps and building the future of the agentic web and the agentic
UI. And I'll end with that. The agent will be the default interface for your
personal and professional life. That's from 1.27 a.m.

tonight, right? So yeah, this is where things are going. This is how late I
stayed. Yeah, so MCP apps, the last piece for the agentic web, and agents are
starting to roam those horse paths that we paved for humans. So let's make sure
that the web is fully prepared. Yeah, and that's it. Catch me afterwards. Yeah.
