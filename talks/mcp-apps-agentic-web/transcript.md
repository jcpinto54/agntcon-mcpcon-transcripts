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
recording: RAI Amsterdam 11.m4a
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
> The recording's own timestamp reads Friday 19:17, after the programme had
> ended, and is not reliable: this is the only file in the batch whose internal
> timestamp matches when it was copied off the device, and its place in the
> recorder's numbering falls between the 13:15 and 14:25 captures. Speaker and
> subject are unambiguous from the recording; the time and room above are the
> guide's.

## Transcript

I'm the co-creator and maintainer of the MCP apps. I'm also an MCP maintainer in
the MCP committee, and I'm co-founder of a company called Hora, which is a
research lab for the agentic web. I used to lead agentic commerce at Shopify,
and I'm also an analog astronaut for the European Space Agency, so you're
welcome to ask me about it. I won't talk about it here in the talk. This is from
yesterday. And I'm sure that everyone here feels the same, right?

I mean, okay, we know about MCP apps. We just turned a book for MCP. We have
MCP. We have API. What do we need to do in order for my product to be agent-
ready? And the thing about MCP apps is that it was the last building block on
the way to the agentic web. So MCP apps paved the way to the Atlantic Web. A
little bit of like a quick primer for MCP apps. MCP apps, as you've seen, and
there was talk about it in the conference, I won't dive into it, but it's the
idea of chat or chat key or code or every chat interface can display UI
interfaces inside the chat.

I hear it's colorful. And MCP apps is actually very young. So it started less
than a year ago when me and Hidal Salomon, the co-creator of MCPUI, we were
given five minutes on stage to present the idea of MCPUI. And the idea of MCPUI
was very simple. It says, what if we let every app in the world just send its
own interface into the chat? So instead of running this wall of text where we
just want to ask something And the chat or the agent gets the information from
different services, but those services are losing their identity and branding in
the process.

What if we can just do this, right? Which is what everyone knows today as church
of pt apps or cloud apps or any other chat interface. And these are not just for
visualization, they are also interactive. So this is an MCP apps. And the thing
about MCP apps is that everybody wins here because the brands, they get their
identity and branding. So if Airbnb is sending its information to GIGPT or to
Cloud, it maintains the Airbnb branding because it's sending chunks of its own
UI.

We as the users, we can get to our own familiarity because I know that this
information came from Booking.com or Airbnb and I know how to interact with
their interface, so I get this less-model interaction. And the agents are also
going to pay for that because they don't need to reinvent all these things
themselves. They have domain experts that can do it for them. Master is the main
expert in how to book seats in a venue. So there's no reason why our agent would
have to generate that.

So it's really a win-win. And at Shopify, this was the main unblock for opening
Shopify to third party agents. Because if you look at that experience, that's
not something that Shopify would want. Because then Shopify loses its place in
the value chain if it doesn't show anything that Shopify liked. But Shopify's
adopting MCPY allowed Shopify to maintain its branding and its identity, like we
see here. So MCP UI alongside Entropic and OpenAI, we set together and we
defined this protocol called MCP apps, which is basically the protocol of how to
send application to the chat.

We released it January and it's got huge adoption. Like every, every, every chat
interface today supports MCP apps. Yeah, almost, almost every day. ChatGPT
recommends MCP apps as the way to build GIGPT apps, obviously, who's, Claude and
Gemini's been supported soon. And the thing about MCP apps is that it changed
the way that we think of the web, right? Because if this is the experience that
I get, when I'm just trying to accomplish a task, yeah, just a second.

Yeah, so if this is the experience that I get, then I actually solved the last
model of interaction. I actually solved the problem of how I can interact with
the chat. And that brings us to the real agentic web. Because if I'm going to
plan an anniversary, instead of staring at 20 tabs at my browser trying to
understand how to interact with those different interfaces because Amazon has a
different way of how I should convey my intent to it and booking has a different
way every app has a different way so instead of me learning those interfaces
which I don't need like 99% of them I don't need I just break them into atoms
and I let my assistant compose these atoms for me right so my assistant can say
hey I see that you have an important date coming and instead of pulling the data
from Google Calendar, it shows me Google Calendar.

And then instead of pulling the card from Amazon, it shows me Amazon. And then
my experience becomes like this, and I don't need to leave the assistant. And
that's important. It's not just a form factor change. That's an interaction
change. I don't need to leave my assistant. Because most of the things that I
was using the interface for are being done behind the scenes. I don't need to
understand all these interfaces. And application, no one will control the user
journey, right, because they're just in charge of the last mile of interaction.

So you would say, can I just spin up an agent for every app? Will I have an
Amazon agent, and a Shopify agent, and an Etsy agent, and I'll just browse
through those agents, and then you get this. No one wants to use 20 agents,
right? Everybody wants to use their own personal system. No one wants to stare
at 20 tabs with 20 what do you want to do today, right? And it's all over
Twitter. What about browser agents like we heard? These are good, but these are
just a faster horses solution, right?

Because this is just trying to retrofit an ecosystem that we perfected for 20
years for humans to agents. And these are discussions that we heard in this
conference today. Because on one hand, everybody's saying the computer is really
slow, right? And everyone is like, ah, now my agent needs a screenshot and click
and everything. On the other hand, Jeff, that was released a few days ago, can
do flight booking in seven seconds. This is like a real demo.

It was just published yesterday. Seven seconds. No LCP, nothing. Just Jeff and
the DOM. So do we really need this glue between the agent and the humans? Now,
WebACP is a good bridge. and I'm all for WebMCP. It's good for co-browsing. It's
good for those cases. When I'm browsing something and I'm asking my agent, can
you help me with it? When I look at the Salesforce dashboard, do I really want
my agent to try to figure out what's going on here, even with WebMCP tools?

I don't think so, right? So we have to remember that we need to understand what
the agents need and not how to adjust what we want them to use. So maybe human
websites are not the ideal interface because if you think about it, what's a
website, what's a web app? That's a way for me as a human to convey my intent to
the business. If I come to booking.com, Booking doesn't know if I want to book a
hotel, file a complaint, log into my account.

It doesn't know. I need to use the interface in order to convey this intent.
Now, if I have an agent, if I have an assistant and I convey my intent to that
agent, does that agent need to actually do those things in the website just to
convey the intent to Airbnb? Why not? Yes. I mean, isn't this better? And I know
it's obvious, but we need to think of how the agent equivalent in two years and
not how we want it to look right now.

So, as assistants are becoming the OS, like the operating system, and if you
ask, it's surprising, but the adoption with the older generation and the younger
generation is there. My mother uses ChugGPT for everything. If you could book a
doctor's appointment using ChugGPT, she won't go to that clinic's website. and
my nine years old goes to chatGPT before they go to Chrome, right? So the
adoption is there. We might have websites and browsers lose their position as
the main entry point to the web.

We'll have personal assistants becoming the main entry point to the web. And we
need to think of what it means. So I know it sounds like that. It's not like,
yeah. We live through changes. We live through websites going from desktop to
mobile so desktop didn't go away. and now it's agents and the web isn't going
away. The only difference is that there are things that went away when we did
the mobile revolution. Social went from desktop to mobile and stayed there.

No one is opening Instagram on their desktop, right? And a lot of those things
are gonna move now from the web to agent and stay there. Now, we will have
websites, just not as prominent as today. And a year ago, I had this friendly
debate with the CBO of Sentry. He was saying, yeah, I'm willing to take that
bet. In 25 years, there will still be websites. So I took this bet. That was a
year ago. And a month ago, he said, OK, so Sentry is now aiming only for agents,
only hades.

No website, just aiming for the agents. And we see it across the board, right?
That's a very great move by Salesforce because Salesforce's main differentiator
is the interface that it uses to relay thousands of lines of data to the human
eye. And if I'm taking it away, then what's Salesforce differentiator? Like what
is it? What did they say? They went through this as well because they understand
this is the way that people are going to interact with it.

Cloudflare just said that, yeah, bot traffic surpassed human traffic way faster
than we thought. DoorDash released a CLI. I mean, think about DoorDash, like the
ultimate consumer app, released a CLI. And we're witnessing here how if we solve
the last mile of interaction, we're solving the agentic web. So personal
assistants like OpenCore and Instict and those kind of things, you don't really
need UI because you just interact with them.

And most of the things are happening behind the scenes. Then we have this
aggregated UI or generated UI that assistants are able to generate on the fly.
And only then we have the branded UI which solves this last mile. Ticketmaster
can send me just the sit map for me to click, because that's something that's
going to be hard for my agent to communicate with. And in MCP apps, we're
working very closely on it to be this home for every agent UI method.

So we're working closely with Google on generating UI methods and those kinds of
things. There's this notion of headless browsers that browse mostly headlessly
and only show you UI. This is a monogram and there was one released like two
days ago where you don't really see the browser. It just browses and it just
shows you the last minute interaction. And I think things are going to go in
that direction. The rise of personal assistants like Muse and Instinct and the
Rockbot, that symbol is the shift because if you think about it, OpenClaw, open
our eyes, okay, an autonomous system can do X, but it wasn't very friendly, it
was hard to install, my mother couldn't use OpenClaw.

And now we see this shift of this system being more consumer-ready, and once we
get mass adoption, that will mean a change for consumer apps as well. So if you
put it on the spectrum, when we had coding agents that are now prominent, using
coding agents, it changed the way DevTools are exposed to their clients, right?
Because DevTools like, I don't know, Superbase, MongoDB, Sentry, either your
agent, either my agent is using them and then their business is going like that,
or it's not and then it's going like that, right?

So right now, DevTools feel the effect of coding agents or assistants being
their customer. apps like Cloud, Chez Gpt, and Gemini, they marked this change
for the B2B SaaS productivity because people are starting to use Salesforce via
their Clouds or via their Chez Gpt, right? So they see it now. When personal
consumer assistance will hit mass adoption, that will be a significant change
for 10 times more companies, the Walmart and the Target of the world.

they have to think, okay, what's my offering to agents? Because people are not
browsing Walmart anymore, they're asking Instinct, can you buy something from
me? And they don't really care if it's from Walmart or from someone. So I call
it like the nearly headless web, where most of the actions are happening
headlessly behind the scene and you just see this last mile of interaction. And
this is something that's starting to be very common.

It's not a controversial thought anymore, but we're still waiting for the
ecosystem to catch up. And we can see that people are saying, if your product or
your website doesn't provide me a way to interact using my agent, then I won't
go to it. And we see agents choosing those products in favor of other products.
So the new user experience is actually AX, which is the agent experience. What's
the experience that I give to an agent and the user agent experience, which is
how the human on the other, because there's always a human eye, how the human on
the other end experiences the agent experiencing my product.

Right? So this is, this is very important. So, um, if you remember the tweet
from, from, from the, from the beginning, now my product has to be exposed to
all these different layers. I still need a website which is becoming less and
less important. I still need a human website, and that human website can be
visited by a human or by a browser agent. And I need an MCP endpoint that can be
visited by the human agent or by my own agent that the human is using.

I need to be edit ready in all those fronts. And like Dominic and Frederic said
earlier, discovery is just one part, right? Because just for an agent to
discover me, that's the first step. but still need to understand what I'm doing,
how to authenticate to me, how to pay me, and eventually how to relay all these
things back to the user. So it's a funny anecdote. When we built Aura, we asked
Cloud Code, what's the best analytics service for Aura, for ProSource?

And it recommended Postcode. And we said, no, we want Mixpanel. Because we know
Mixpanel for 10 years, we know how to work with them. And Cloud Code insisted on
Postcode. It said, it has a better recipe and a better API, and I can work with
it for easy. So we don't have brand loyalty, we went with Postal, but think
about Mixpanel. They invested a decade in building their UX and developer
experience, and we just left them, just because CodeCode prefers Postal.

So a genetic experience is really important. It's not just nice thing to have.
That's your user experience right now. And Hermes, if it needs to use your
product, and it needs to spin up a browser as a fallback to use your product, it
will remember that. it will write that and it will be less inclined to use the
product next time. So at Aura, like I said, we were like a research lab for the
Agent-Ready web. So we started researching and we started with writing those
benchmarks of what it means to be Agent-Ready.

By the way, it's free, you can access Aura.ai and just run whatever you want.
And we have this mapping of the ecosystem. We started mapping the ecosystem, but
then we noticed something very interesting. We noticed that the thing that we
think are not exactly the thing that the agents need, because we found out that
50% of the ecosystem, of like the tens of thousands of sites that we scanned,
50% of them publish elements of TXT.

But when we ran the agents, and we ran like thousands of agentic runs, agents
didn't look for elements of TXT. They went straight to the docs and to the
homepage. They only looked for elements of TXT if the docs told them to look for
elements of TXT. At that point, it can be instructions of TXT or something like
that, right? And then we understood it doesn't make a lot of sense for us to try
to guess what the agents need, and then build it, and then just expect they'd
use it, right?

And you see a lot of protocols and best practices surfacing around this thinking
that we, as humans, we know what agents need. And then we run into things like,
okay, we think agents will need tools on the website, but then the models become
so good that using the website might be more efficient than using the tools. So
instead of just following with all those protocols, we just need to observe the
agents. So we run like tens of thousands of runs on websites and we just observe
what's coming back and we're punching it.

So we have this product called Journey, which is again free and free to use. You
can run any website with any intent, with any harness, and you can just see the
actual agent journey trying to fulfill this intent, like in real time, trying to
fulfill this intent on the website. website and that helps us understand how can
I make my product better for every harness that's coming because right now we
have to accommodate 15 agents, in a year it's going to be thousands because
everyone's going to have their own customizable harness. So what does it mean
for something to be educated? And this journey is different between harnesses.

So you can see here, I think it's like Haiku and Eve and . Same intent, same
website, different journeys. Some reach to the end very quickly. Some got
confused. So this is very important. And we can map this journey for every
business goal. So if I want agents to be able to sign up for my service, we can
show you the journey for that. And again, you can run it yourself. So we're
publishing a lot of our findings. We found out that the agent experience has a
big effect on AEO and GEO.

And you can see here that the difference between two products, that's real data.
One is fitted for agent, one is not. So agents are less likely to choose that
product in the first place. And we have a lot of partnerships and we're working
with the entire ecosystem just to understand how to adjust the web to be agent
ready. We recently released a partnership with Vercel on EaseAgentic and we
released the AX package. We can just run npx ax on any URL and just see the
agent journey on that URL and get the full audit.

WebMCP, obviously, we have the audit for WebMCP. And the thing is, the
interesting part is that it's not auditing the website if it exposes WebMCP
tools. Again, what we're interested at is can an agent actually use that website
with those MCP tools? So you can just put, we have this tool, you can just put a
website, you can put an intent, and you can choose the harnesses, and you can
choose with WebCP, without WebCP, and we answer the question, can an agent
fulfill that task on the website?

And sometimes the results are surprising. Sometimes it's WebCP, bits, vanilla,
and vice versa. So you can see it here. You can see again in Aura, you can see
all the research that we did, for example, how AX improves the AO. And if we're
talking about AO, then the next big milestone to unlock the identity code is
discovery, because how can I as an agent discover the tools that we need to use?
Right now, if I'm using ChugGPT, every tool needs to register itself in ChugGPT,
and I as the user have to say, yeah, I want to use booking.conf, right?

and code is similar but if I'm instinct or rock or muse how do I know which
tools are better for me and if you think about it every revolution has had its
own discovery layer right when we went to web we had search mobile app stores
social we had feed what's going to be the discovery layer for for the agent of
web so web search is uh is a good option but it's not very flexible and also So
WebSource is very fitted to how us humans consume the web, right?

Because if I search for something, I get a domain. I get like a ranking of a
domain. But maybe as an agent, I don't need my agentic resources grouped by
domains. Maybe Booking's MCP server is better than Airbnb's MCP server, but
Airbnb's GraphQL is better than Booking, then it doesn't make a lot of sense
that I will ask Google which one is better, and I'll get either Booking or
either Airbnb. Mixpanel from the example that I gave you is ranked higher in
Google than Postable.

It's still called preferred Postable. So web search, it's a good short-term
solution. Might not be the solution. Custom registries like per-agents like
Chachapiki and Cloud. Again, these are as bookings, I need to register myself in
each of them, which is not ideal. A central registry is not an option because we
don't want to reinvent this centrality of search. So we have some emerging
standards around it which I really recommend you to check out.

AI Catalog.json, that's a really cool standard backed by the big companies,
saying when an agent comes to a domain, if an agent comes to airbnb.com, there's
a standardized way for the agent to know which agentic resources this domain
exposes. exposes. So AI Catalog.json is just a catalogue of an MCP server, of an
API server, GraphQL, A2A, whatever, everything. So as an agent I have this
clarity that at least I don't need to look for the docs to understand what's the
URL of the MCP server. Agentic resources discovery is built on top of AI Catalog
because AI Catalog.json still relies on web search. I still, as an agent, still
need to get to back domain. So ARD is a standard of how to build a registry so
the agent just needs to get to that registry and it can be custom registry and
then the registry tells it where to look for right so if if you think about uh
stripe release describe directory so the agent can come to strive directly say i
need an email service or a text to voice service and stripe is ranking all the
services that it knows and return the service for it we have this uh
implementation of Oracle Directory, if you want to play with this notion.

So we scan 70,000 domains. So we have all the agentic resources of them. So we
know how to automatically create the iCatalog JSON for each of them. That
includes all the agentic entry point for all of them. So if you as an agent come
to Oracle Directory and ask, I need an image generation service, then we know
how to return to you the best service that has the best 80s because we rent. So
check it out if you want. Yeah, and of course it's fully ARD compliant.

And it's a reference implementation for ARD. Check it out. Okay, some other
things that we're doing. We're researching how being accessible to agents is
actually being accessible to humans. Think about it, like an agent visiting your
website personal to visually impaired human, with this kind of website. So how
we can lift both of them together. And again, if you think about it, the shift
from web to personal assistant, that's amazing for accessibility.

Because now I can have all the content in the way that I want it, and not in the
way that Booking.com or Airbnb thought that I would need it. And you can mask
yourself with all of those protocols. Maybe the future is just like one page of
temporary points, like slash ask or something like that. Why do we need all of
this? And that's an open question. And we don't really know. It depends on
inference cost, and it depends on the rate of adoption.

But that's a good question. And we have to remember that all these are just
steps in the way for a real agent to work. And again, browsing is like watching
paint dry. That's not the experience that we want. So let's stop just to check
what agents actually need and not try to retrofit our ecosystem to what was
perfected for humans. In MCP apps, we're working on advancing this future and
we're working on things like how agents can interact with MCP apps, which is
what MCP is like.

And I invite all of you to get involved in MCP apps and building the future of
the agentic web and the agentic UI. And I'll end with that. The agent will be
the default interface for your personal and professional life. That's from 1.27
AM tonight. So yeah, this is where things are going. This is how late I stayed.
So MCP apps, the last piece for the agentic web. And agents are starting to roam
those horsepacks that we paid for humans.

So let's make sure that the web is fully prepared. Yeah, and that's it. Get me
out of the woods. Thank you.
