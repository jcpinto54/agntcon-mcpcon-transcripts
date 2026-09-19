---
title: "The Browser Isn't Dead Yet"
speakers: [Rachel-Lee Nabors]
session_id: 62fd1975975b275115e7552ba6d5c26f
source: transcript.md
confidence: confirmed
kind: summary
---

# The Browser Isn't Dead Yet — summary

**Rachel-Lee Nabors**

*Thursday 17 September 2026, 15:28, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Nabors argues the browser is not dead but being rebuilt into a surface for agents, and that site owners whose users use agents should start exposing their sites to them, in order: WebMCP, an MCP server, MCP apps, then A2UI.

## The argument

A year ago, Nabors says, she was telling audiences the browser had already died and just hadn't stopped moving yet; her update is that it is mutating rather than expiring. AI answers are depressing traffic to websites, over half of web traffic is already non-human, and browsers and agents are merging from both ends. With a court treating an agent acting at your direction as the user, she argues the browser is becoming an advocate, and that the time to build for that is now.

## The clicks the summaries take away

Nabors puts numbers on the drain. A 2025 study, she says, found AI summaries in search results cut click-through rates by 50%, and a 2026 follow-up put it at 58%; inside an agent's summary only about 1% of links are ever clicked, and she says shopping, advertising and content creation are being hit now. Bots are already more than half of web traffic, mostly scrapers gathering training data. Her date comes from mobile: nine years from the iPhone for mobile traffic to exceed desktop, which three years on from GPT puts agent traffic past human browsing around 2032.

## Browsers with agents inside, agents with browsers inside

The response she traces runs in four steps: extensions dropping Claude or ChatGPT into a browser; browsers with agents built in, Gemini inside Chrome and Copilot inside Edge; agents that swallowed a browser, as when Atlas was absorbed into ChatGPT as its web view; and what she calls agentic browsers, Dia and Strawberry, where the window is just the agent's GUI. The law decides how far this runs, she says: Amazon took Perplexity to court under the Computer Fraud and Abuse Act over a browser automating shopping on its service, and the 2025 injunction was overturned on appeal a month before the talk, on the reasoning that when you direct an agent, the agent is you.

## WebMCP, MCP apps and A2UI

WebMCP, she explains, turns every HTML page into a miniature tool server, inspired by the MCP spec without conforming to it. On her own cartooning site, ChatGPT's browser calls the tools the page exposes to find a comic featuring a character and navigate to it, faster, she says, than screenshotting or scraping the DOM and round-tripping a big model. An MCP server, which she says she registered by typing one address, exposes her comics as tools in Claude and can host MCP apps: single-file HTML, CSS and JavaScript in an iframe that reuse a site's design system, hers a comic reader inside the chat. A2UI, a JSON format, inverts that, sending data and letting the agent compose the interface.

## What she tells the room to adopt, and in what order

The prior question, she says, is whether your users use agents and whether it helps you to serve them that way. Her order is WebMCP first, a low lift dropped onto existing forms, then an MCP server, about a year before traction appears, then MCP apps as an R&D bet, then investigating A2UI. She also casts it as staffing: front-end for WebMCP, API and backend for the server, the design system team for MCP apps and A2UI.

## In their words

> Last year I gave this talk in a couple of places saying the browser has already died, it just hasn't stopped moving yet.

> That means agent traffic for people using agents will eclipse human browsing around 2032. So the clock is ticking.

> many site owners want to control user attention and monetize it and agents break that equation and upset that profit model

## Takeaways

- Nabors dates the crossover by analogy with mobile: nine years from the iPhone to pass desktop, so agent traffic past human browsing around 2032.
- She backs the pressure on the open web with a 50% click-through drop where AI summaries appear, 58% a year later, and about 1% of links in an agent's summary ever clicked.
- She reads the appeals court's reversal of Amazon's injunction against Perplexity as the precedent to watch: when you direct an agent, the agent is you.
- She ranks the technologies by effort: WebMCP cheap enough to adopt now, an MCP server worth a year's patience, MCP apps an R&D bet and A2UI worth investigating.

## What the talk leaves open

Nabors says discovery for MCP apps and servers is not good right now, which is why she files MCP apps as R&D and hangs their value on whether an MCP app store takes off inside something like ChatGPT. She also leaves open whether agents act as extensions of their users or as advocates, and who is liable.
