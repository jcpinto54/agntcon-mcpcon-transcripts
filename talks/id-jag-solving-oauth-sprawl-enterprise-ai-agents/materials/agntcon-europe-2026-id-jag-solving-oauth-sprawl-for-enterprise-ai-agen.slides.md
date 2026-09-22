---
title: "ID-JAG: Solving OAuth Sprawl for Enterprise AI Agents"
speakers: [Joey Orlando, Aaron Parecki, Paul Carleton]
session_id: 844a5bec76e451edb714493aba75801f
kind: slides
deck: agntcon-europe-2026-id-jag-solving-oauth-sprawl-for-enterprise-ai-agen.pdf
slides: 14
---

# ID-JAG: Solving OAuth Sprawl for Enterprise AI Agents — slides

**Joey Orlando, Aaron Parecki, Paul Carleton**

*Friday 18 September 2026, 10:55, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agntcon-europe-2026-id-jag-solving-oauth-sprawl-for-enterprise-ai-agen.pdf`](agntcon-europe-2026-id-jag-solving-oauth-sprawl-for-enterprise-ai-agen.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — ID-JAG: Connecting agents to work apps
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built. / ID-JAG: Connecting agents to work apps / Joey Orlando — Archestra / Aaron Parecki — Okta / Paul Carleton — Anthropic
**Shows.** Title slide on a dark navy background with the AGNTCon + MCPCon Europe logo at top left and the session tagline beneath it; the talk title sits in a white banner box, with a pink strip below listing the three speakers and their companies. Decorative abstract circuit/pipe-style line art in blue, purple and pink runs along the bottom of the slide (a recurring design element across the deck).

## Slide 2 — Bikeshed gets an AI agent
**Text.** Bikeshed gets an AI agent / 1,000 employees, Amsterdam / ~20 internal systems — mail, calendar, CRM, wiki, tickets / This year: an AI agent for everyone / Agents need access to the apps each task uses / Where the agentic stack is being built.
**Shows.** An illustration of one employee (with laptop and a small robot icon representing their AI agent) on the left, connected by a dense tangle of crisscrossing red, teal and black arrows to a grid of 16 icon tiles on the right labelled "internal systems," each marked with a checkmark — visualising how a single employee's agent must reach many different internal apps.

## Slide 3 — First, connect Salesforce
**Text.** First, connect Salesforce / Ask for an order summary. Stop to connect Salesforce. / Approve access, return to chat, resume the task. / The user wanted a summary. Now they're setting up an integration. / Screenshot text: Archestra.AI — Pull last week's bike shed orders from Salesforce and draft the weekly ops summary for the Amsterdam team. / Sure — connecting to Salesforce to pull last week's orders first. / Authentication Required: No credentials found for "Salesforce". Set up your credentials to use this tool. [Set up credentials] / OAuth Authorization — Salesforce — We'll redirect you to Salesforce to authorize access, then bring you back once connected. / Visibility: Personal — Only you can use this connection. Admins can still assign it. / [Cancel] [Continue to Authorization...] / Where the agentic stack is being built.
**Shows.** A screenshot of an "Archestra.AI" chat interface: the user's request for a weekly ops summary is interrupted by an authentication-required prompt and an OAuth authorization modal for Salesforce, with a "Continue to Authorization" button — illustrating the friction of a chat task turning into an ad hoc integration setup.

## Slide 4 — [Stack of repeated OAuth authorization prompts]
**Text.** OAuth Authorization — GitHub — We'll redirect you to GitHub to authorize access, then bring you back once connected. / OAuth Authorization — Slack — We'll redirect you to Slack to authorize access, then bring you back once connected. / OAuth Authorization — Notion — We'll redirect you to Notion to authorize access, then bring you back once connected. / OAuth Authorization — Jira — We'll redirect you to Jira to authorize access, then bring you back once connected. / OAuth Authorization — Google Drive — We'll redirect you to Google Drive to authorize access, then bring you back once connected. / Visibility: Personal — Only you can use this connection. Admins can still assign it. / [Cancel] [Continue to Authorization...] / Where the agentic stack is being built.
**Shows.** Five near-identical OAuth authorization modal screenshots (GitHub, Slack, Notion, Jira, Google Drive) fanned out and overlapping like a stack of cards, visually dramatising the repetitive per-app consent sprawl a user faces as they connect more tools to their agent — no other text on the slide besides the modals and the AGNTCon+MCPCon logo.

## Slide 5 — Auth is part of shipping an MCP server
**Text.** Auth is part of shipping an MCP server / OAuth (crossed out) Authorization / "Democracy (crossed out) is the worst form of Government (crossed out) except for all those other forms that have been tried from time to time" / Winston Churchill, probably / Where the agentic stack is being built.
**Shows.** A hand-drawn-style meme slide: the classic Churchill democracy quote is edited with "Democracy" struck through and replaced with "OAuth," and "Government" struck through and replaced with "Authorization," joking that OAuth is the worst way to do authorization except for every other approach tried so far.

## Slide 6 — What the IdP misses
**Text.** What the IdP misses / SSO records the sign-in, not every downstream grant / App permissions and tokens live in separate systems / Disabling a work account doesn't automatically revoke every token / Where the agentic stack is being built.
**Shows.** Nothing beyond the text and the deck's standard decorative pipe-line art at the bottom.

## Slide 7 — How ID-JAG works
**Text.** How ID-JAG works / Identity Assertion JWT Authorization Grant — an IETF OAuth draft / The IdP approves the client acting for the user / The app's authorization server decides what access to grant / Allowed connections can proceed without another consent screen / Where the agentic stack is being built.
**Shows.** Nothing beyond the text and the deck's standard decorative pipe-line art at the bottom.

## Slide 8 — Getting an access token
**Text.** Getting an access token / AI Agent → get ID-JAG ① → Identity Provider / AI Agent → get access token ② → Auth Server / AI Agent → call tools ③ → MCP Server / Where the agentic stack is being built.
**Shows.** A three-step flow diagram: a central "AI Agent" box with three teal curved arrows branching out to three labelled targets in sequence — (1) "get ID-JAG" to the Identity Provider (shield icon), (2) "get access token" to the Auth Server (key icon), (3) "call tools" to the MCP Server (server icon) — depicting the token-acquisition sequence underlying the protocol.

## Slide 9 — Bikeshed with ID-JAG
**Text.** Bikeshed with ID-JAG / Before / After / Where the agentic stack is being built.
**Shows.** A before/after comparison illustration: "Before" shows one central person icon connected to eight surrounding person icons via a dense tangle of overlapping pink curved lines (representing chaotic, ad hoc per-app authorization); "After" shows the same person icon connected instead to a single teal shield icon at the centre, which then fans out cleanly to the same eight person icons via straight teal arrows — visualising ID-JAG consolidating scattered authorizations through one trusted intermediary.

## Slide 10 — ID-JAG works in practice
**Text.** ID-JAG works in practice / Customize — Skills · Connectors · Plugins — Yours · Discover — [Search] [Add] / All · Connected · Not connected / Connector | Type | Authorization | Status / Asana | Web | Managed | ✓ / Figma | Web | Managed | ✓ / Linear | Web | Managed | ✓ / Where the agentic stack is being built.
**Shows.** A rising red line-chart/arrow graphic at left (suggesting growth or adoption trending up) beside an angled screenshot of a product's "Customize → Connectors" settings screen listing Asana, Figma and Linear as connected, web-type, centrally "Managed" authorization connectors with green checkmarks — evidence of the protocol being used in a real admin UI.

## Slide 11 — Okay: but what do I have to do?
**Text.** Okay: but what do I have to do? / Adjust your /token endpoint / Map IdP sub jects to internal principals / (maybe) handle tenancy / Test, test, test / Where the agentic stack is being built.
**Shows.** Nothing beyond the text and the deck's standard decorative pipe-line art at the bottom.

## Slide 12 — What about agents on their own?
**Text.** What about agents on their own? / - Check out Workload Authorization Grant (WAG) / - tl;dr: ID-JAG but take out the human / Where the agentic stack is being built.
**Shows.** Nothing beyond the text and the deck's standard decorative pipe-line art at the bottom.

## Slide 13 — Try it with your own apps
**Text.** Try it with your own apps / ID-JAG draft / WAG draft / MCP auth guidance / #auth-ig Discord channel / Where the agentic stack is being built.
**Shows.** Four QR codes arranged in a 2×2 grid, each captioned with its destination (the ID-JAG draft spec, the WAG draft spec, MCP auth guidance documentation, and the #auth-ig Discord channel) for audience follow-up.

## Slide 14 — Q&A
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Q&A
**Shows.** Closing slide with the AGNTCon + MCPCon Europe logo at top left, large white "Q&A" text over the deck's recurring dark-navy background with decorative coloured circuit/pipe line art.
