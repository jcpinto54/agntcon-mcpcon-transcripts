---
title: "MCP Apps and The Agentic Web"
speakers: [Liad Yosef]
session_id: 0ce2cfec5a226a96deab5d3bf77d33e4
source: transcript.md
kind: summary
---

# MCP Apps and The Agentic Web — summary

**Liad Yosef**

*Friday 18 September 2026, 13:15, Emerald Room — MCPCon (MCP track) track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Liad Yosef argues that MCP apps are the last building block of an agentic web in which assistants displace the browser as the main entry point and a product's interface shrinks to the last mile a human must see.

## The argument

Yosef's claim is that the hard problem was never automation but interaction: once a service can send its own interactive UI into a chat, the assistant composes whole journeys out of branded fragments and the user never leaves it. That, he says, unlocks the nearly headless web and leaves every product with a new surface above its website — agent experience.

## MCP apps and the last mile of interaction

Yosef dates MCP apps to less than a year ago, when he and the co-creator of MCP UI had five minutes on stage to pitch it: let every app send its own interface into the chat instead of a wall of text. He says the protocol was defined together with Anthropic and OpenAI, released in January, and now supported by close to every chat interface, with ChatGPT recommending it and Claude and Gemini following.

Each party gains, he says. Brands keep their identity rather than losing it in the handoff; users get an interface they already know; agents avoid reinventing interactions domain experts already own, such as picking a seat at a venue. Shopify is his worked example: this was the unblock for opening Shopify to third-party agents, which otherwise loses its place in the value chain.

## Faster horses, and assistants as the entry point

Retrofitting the human web for agents is, Yosef argues, a faster-horses answer. Everyone calls computer use slow, he says, yet a demo published days earlier booked a flight in seven seconds off the DOM alone — so he asks whether the glue between agent and human is needed at all. He grants WebMCP is a good bridge for co-browsing, but asks whether an agent should parse a Salesforce dashboard. A website exists so a human can convey intent to a business; if the user has conveyed that intent to an assistant, the website is redundant. He also rejects one agent per app — nobody wants twenty agents any more than twenty tabs.

As evidence the shift is under way he cites Sentry now aiming only at agents, a year after its CBO bet him websites would still exist in 25 years; Cloudflare reporting bot traffic passing human traffic faster than expected; DoorDash shipping a CLI; and assistant adoption by his mother and his nine-year-old. Coding agents already reshaped how DevTools reach customers, he says; chat assistants are doing it to B2B SaaS; consumer assistants will do it to ten times more companies.

## Observing agents instead of guessing what they need

Ora's research began with benchmarks for what agent-ready means, then turned up a result that undercut it. Half the tens of thousands of sites scanned published the agent-facing text file everyone recommends, but across thousands of agentic runs agents went to the docs and homepage, looking for it only when the docs said to. He generalises: tools bolted onto a website may lose to models good enough to use the site as it is.

His alternative is observation. Journey runs an agent live against any site, intent and harness, showing where models diverge on the same task; Ora announced a partnership with Vercel and released an AX audit package, plus a WebMCP audit that asks whether an agent can finish the task, not whether tools exist. He reports agent experience affecting AEO and GEO, and tells of Claude Code insisting on an analytics tool over one his team had known for ten years.

## Discovery as the next milestone

Discovery is what Yosef names as still missing: registering each tool with each assistant does not scale, a central registry recreates the centrality of search, and web search returns domains when an agent may want one company's MCP server and another's GraphQL. He points to AI Catalog.json as a standard way for an agent arriving at a domain to learn what agentic resources it exposes, and to ARD as the registry layer above it, citing Stripe's directory. Ora scanned 70,000 domains and runs a reference directory.

## In their words

> So I call it like the nearly headless web, where most of the actions are happening headlessly behind the scene and you just see this last mile of interaction.

> it doesn't make a lot of sense for us to try to guess what the agents need and then build it and then just expect they'll use it

> They invested a decade in building their UX and developer experience, and we just left them

> So the new user experience is actually AX, which is the agentic experience.

## Takeaways

- He argues branded UI in the chat unblocked opening Shopify to third-party agents, which otherwise drops out of the value chain.
- He calls browser agents a faster-horses answer and questions the glue between agent and human, citing a demo that booked a flight in seven seconds off the DOM.
- His evidence for the shift is commercial: Sentry aiming only at agents, Cloudflare's bot traffic crossover, DoorDash's CLI.
- He says half the sites Ora scanned publish the recommended agent text file, yet agents ignored it unless the docs pointed there — his case for observing agent runs rather than guessing.
- He backs AI Catalog.json plus ARD over per-assistant registration or a central registry, with 70,000 domains scanned.

## What the talk leaves open

Yosef says the ecosystem has not caught up, and that he does not know which layers survive — perhaps it collapses to a single endpoint per site — depending on inference cost and the rate of adoption. Discovery, he adds, is only the first step: authentication and payment follow.
