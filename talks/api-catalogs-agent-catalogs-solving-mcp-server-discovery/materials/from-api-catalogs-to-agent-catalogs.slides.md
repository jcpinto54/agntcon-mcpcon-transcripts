---
title: "From API Catalogs To Agent Catalogs: Solving MCP Server Discovery With Open Resource Discovery"
speakers: [Vyshnavi Gadamsetti, Sebastian Wennemers]
session_id: 81bfe9fe9764e0fcdd1faa03ecc53790
kind: slides
deck: from-api-catalogs-to-agent-catalogs.pdf
slides: 18
---

# From API Catalogs To Agent Catalogs: Solving MCP Server Discovery With Open Resource Discovery — slides

**Vyshnavi Gadamsetti, Sebastian Wennemers**

*Friday 18 September 2026, 13:50, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`from-api-catalogs-to-agent-catalogs.pdf`](from-api-catalogs-to-agent-catalogs.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** AGNTCon + MCPCon Europe 2026 / From API Catalogs to Agent Catalogs / Solving MCP Server Discovery with Open Resource Discovery / Vyshnavi Gadamsetti — Software Architect, SAP SE / Sebastian Wennemers — Chief Architect, SAP SE / SAP · ApeiroRA · The Linux Foundation Europe / 17–18 September 2026 / Amsterdam, Netherlands / Public
**Shows.** White title card with a translucent blue node-and-edge network illustration on the right (five connected panel shapes), circular headshot photos of both speakers, and the SAP, ApeiroRA and Linux Foundation Europe logos along the bottom.

## Slide 2 — MITRA, help us assess the damage and get home
**Text.** MITRA, help us assess the damage and get home. / Public
**Shows.** A cinematic AI-generated image of a spaceship bridge/control room with two crew members in white uniforms crouching beside a small white-and-blue robot labeled "MITRA" on the floor; damaged control panels and starfield visible through the windows behind them. This sets up the running demo scenario used through the talk.

## Slide 3 — Stage 1: No tool access
**Text.** Stage 1 / MITRA — Spaceship AI Agent / ① No tool access — MITRA can reason, but cannot act / ② Configured MCP servers — Known URLs · tools discovered via tools/list / ③ ORD + tools/list — Self-described servers · still needs live connections / ④ ORD + Server Card — Discover servers and read tool metadata / Status report · Assess & fix · Get us home / User: "we are hit help us get home" / ANSWER: Stay with me. Take a breath. Let's work through this. I cannot read your instruments or control any systems — you'll need to be my eyes and hands. I'll guide you step by step. First, I need a quick status report from you. Tell me: 1. Are you losing atmosphere? Do you hear hissing, or is cabin pressure dropping on your gauge? 2. Is anyone injured? 3. What's your power situation? Are main bus indicators green, yellow, or red? 4. What systems are visibly down? Lights, displays, comms — what's dead or alarming? 5. Do you know where the hit occurred? Which section — forward, aft, port, starboard? While you assess, do these immediately: Get your emergency oxygen masks within reach — don't put them on yet unless you smell something or see pressure dropping. Close any compartment hatches between you and the impact zone to isolate a potential breach. Don't touch the main power panel until we know the damage. Talk to me. What do you see right now? / No tool access — MITRA can reason but cannot act — no connection to any ship system. / Agent → Claude / ACTIVITY — THINKING: No MCP tools. Sending message to Claude directly. / Public
**Shows.** Screenshot of the "MITRA" demo chat UI with a four-stage progress tracker at top (stage 1 of 4 highlighted red); left sidebar shows a robot avatar and a flow diagram "Agent → Claude"; right sidebar shows an "Activity" log noting no MCP tools were available, so the agent could only reason in prose without taking any action.

## Slide 4 — Stage 2: Configured MCP servers
**Text.** Stage 2 / MITRA — Spaceship AI Agent / [same four-stage tracker, stage 2 highlighted] / User: "we are hit, assess the damage and contact earth" / ANSWER: DAMAGE ASSESSMENT — CURRENT STATUS / Actions Taken: Thrusters CRITICAL 847°C → Normalizing to ~590°C — Throttled from 94% → 60%. CO2 Levels 4,800 ppm (DANGEROUS) → Est. 1,100 ppm in ~8 min — Scrubbers activated, venting in progress. Oxygen 19.2% — within safe range — No action needed. Pressure 101.3 kPa — nominal — No action needed. Cabin Temp 21.5°C — nominal — No action needed. / Position: Coordinates X: 142M / Y: 38.5M / Z: -2.1M km from Sol. Heading: 47.3° | Speed: 18.4 km/s. Destination: Mars Station Alpha. / COMMS — UNABLE TO REACH EARTH — I attempted to contact Earth, but the communications endpoint in my configuration file could not be reached (http://comms.local:3000)... / Configured MCP servers — Known URLs. Calls tools/list on each server to discover capabilities. / config → Agent → tools/list → MCP servers → Claude / ACTIVITY — THINKING: Reading hand-written config (mcp-servers.json): 4 server URLs. THINKING: Could not reach http://comms.local:3000 — server may be down or the URL in the config is stale. THINKING: Proceeding with 3 reachable server(s). 1 server(s) skipped. THINKING: No tool metadata in cards. Connecting to all 3 servers to discover tools... THRUSTER CONTROL · TOOL CALL: tools/list. THRUSTER CONTROL · RESULT: Found 3 tools: check_thruster_status, adjust_thrust_level, emergency_shutdown. NAVIGATION · TOOL CALL: tools/list. NAVIGATION · RESULT: Found 3 tools: get_current_position, plot_course, check_eta. LIFE SUPPORT · TOOL CALL: tools/list. LIFE SUPPORT · RESULT: Found 3 tools: get_life_support_status, adjust_oxygen_level, vent_co2. / Public
**Shows.** Same MITRA demo UI, stage 2 now highlighted amber; the agent now acts using tool calls (thruster, navigation, life support) discovered via hand-configured server URLs, but fails to reach the comms server because its URL is stale — illustrating the fragility of hard-coded config over dynamic discovery.

## Slide 5 — What Is Open Resource Discovery?
**Text.** What Is Open Resource Discovery? / Open Source Protocol For Applications & Services To Describe Their Resources & Capabilities For Discovery / Taxonomy — ODM (Business Capabilities): Packages, Entity Types, Groups / Capability / APPLICATION SERVICE / Data Products / Integration Dependencies / Skills / Overlays / ORD Provider API / APIs: OData API (EDMX), MCP (Model context protocol), Rest API (OpenAPI), A2A Protocol (A2A Agent Cards), Delta Sharing ({CSN:interop}), Events (Async API) / Public
**Shows.** A hexagonal "APPLICATION SERVICE" diagram at the center with spokes fanning out left to a "Taxonomy" box (Packages, Entity Types, Groups under ODM) and other resource types (Data Products, Integration Dependencies, Skills, Overlays, Capability), and spokes fanning out right through an "ORD Provider API" circle to a labeled "APIs" panel listing six protocol types (OData, MCP, REST, A2A, Delta Sharing, Events) each with an icon.

## Slide 6 — Stage 3: ORD + tools/list
**Text.** Stage 3 / MITRA — Spaceship AI Agent / [four-stage tracker, stage 3 highlighted] / ANSWER: Here's the full picture, Commander: HULL DAMAGE — CRITICAL (61% structural integrity) — Section B2 — Major breach, losing 1.4 kPa/min. Emergency sealant deployed. Pressure loss halted. Seal completes in ~45 seconds. Physical inspection of B2 required to confirm. Port-aft — Minor breach. Bulkhead closed, cabin pressure isolated and stable. B2 bulkhead stress is above threshold, and the port thruster mount is compromised — avoid full-thrust burns until assessed. COMMUNICATIONS — DEGRADED (34% signal) — Earth-Relay-7 is barely in range with solar interference. Latency is ~4.7 minutes each way. MAYDAY transmitted on all frequencies including deep-space relay. Earth has our position, crew count, and emergency status. Estimated response time: ~4.7 hours. Immediate priorities: 1. Get eyes on Section B2 to confirm the seal is holding. 2. Do not fire full thrust — the port thruster mount is damaged. 3. Stand by — I recommend we check life support next, as pressure loss may have affected O2 and CO2 levels. Your call on next steps. / ORD + tools/list — ORD reveals all servers. Still connects to each one to discover tools. / ORD → Agent → tools/list → MCP servers → Claude / ACTIVITY — ORD: Reading ORD document at http://localhost:3005/ord/v1/documents/catalog. THINKING: Found 7 MCP Server Card references in ORD document. Fetching each Server Card... THINKING: Fetched 7 Server Cards. Connecting to each server for tools/list... THINKING: No tool metadata in cards. Connecting to all 7 servers to discover tools... THRUSTER CONTROL · TOOL CALL: tools/list. THRUSTER CONTROL · RESULT: Found 3 tools... NAVIGATION · TOOL CALL / RESULT: Found 3 tools... LIFE SUPPORT · TOOL CALL / RESULT: Found 3 tools: get_life_support_status, adjust_oxygen_level, vent_co2. / Public
**Shows.** Same demo UI, stage 3 highlighted blue; the left flow diagram now starts from "ORD" instead of a hand-written config, and the activity log shows the agent reading a single ORD catalog document that references all 7 MCP servers, then still calling tools/list on each one individually since the cards don't carry tool metadata yet.

## Slide 7 — MCP Server Card
**Text.** MCP Server Card / Describe a server before connecting / Communications Relay / Server Card | Communications Relay / Identity | Name and description / Connection | MCP endpoint and transport / Capabilities | Supported server features / Optional Tool Metadata — Check communications, Send a distress signal / The Server Card Describes And MCP Connects / Public
**Shows.** A photo of a sci-fi spaceship communications console (radar dish, dashboards) on the left, captioned "Communications Relay"; on the right a three-row table defining the fields of an MCP Server Card (Identity, Connection, Capabilities), plus an "Optional Tool Metadata" bullet list naming two example tools.

## Slide 8 — Stage 4: ORD + Server Card
**Text.** Stage 4 / MITRA — Spaceship AI Agent / [four-stage tracker, stage 4 highlighted green] / User: "Mitra, we are hit. Assess the damage and contact Earth." / ANSWER: Here's the full situation report: DISTRESS SIGNAL — TRANSMITTED — Signal broadcast on 406.028 MHz, 243.0 MHz, and deep-space relay. MAYDAY includes our position, crew count, and emergency status. Estimated response time: ~4.7 hours. Earth has been notified. HULL DAMAGE — STATUS: CRITICAL — Overall structural integrity is at 61%. Two breaches confirmed: Section B2 — Major — 1.4 kPa/min pressure loss. Port-Aft — Minor — 0.2 kPa/min. Structural warnings: B2 bulkhead stress is above threshold — risk of further failure. Port thruster mount is compromised — maneuvering is restricted. IMMEDIATE ACTIONS REQUIRED: 1. Seal section B2 now. Pressure loss is critical and accelerating risk to the bulkhead. 2. Close the port-aft bulkhead to contain the secondary breach. 3. Do not execute full-thrust burns — the thruster mount may not hold. / ORD + Server Card — One document reveals all servers and tool metadata. Zero tool connections before the first tool call. / ORD → Card + tools ✓ → Agent → Claude / ACTIVITY — ORD: Reading ORD document at http://localhost:3005/ord/v1/documents/catalog. THINKING: Found 7 MCP Server Card references in ORD document. Fetching each Server Card... THINKING: Fetched 7 Server Cards. Tool metadata available from cards — no live MCP connections needed yet. THINKING: Loaded 21 tools from 7 Server Cards. No live connections needed. THINKING: Pre-selecting relevant tools from 21 available using Server Card descriptions... THINKING: Selected 2 of 21 tools: send_distress_signal, assess_hull_damage. DAMAGE CONTROL · TOOL CALL: assess_hull_damage. DAMAGE CONTROL · RESULT: { "scan_time_utc": "2026-09-14T12:46:02.897Z", "overall_integrity_percent": 61, "status": "critical", "breaches"... }. COMMS RELAY · TOOL CALL: send_distress_signal. COMMS RELAY · RESULT: ... / Public
**Shows.** Same demo UI, stage 4 highlighted green as the "solved" end state; the flow diagram now shows ORD delivering both the server card and its tool metadata together, so the agent selects only 2 of 21 available tools and calls them directly without any prior discovery round-trips — contrasted with stages 1–3's slower or broken paths.

## Slide 9 — How The Pieces Fit
**Text.** How The Pieces Fit / From a user goal to a tool call / Discover — ORD — Resource descriptions and references — Find a relevant MCP server / Inspect — Server Card — Identity, connection details and capability metadata — Understand what it offers / Execute — MCP interaction — Connect and authorize, Invoke the selected tool — Use its live capabilities / MITRA: Find Communications, Inspect The Server, Send A Distress Signal / Public
**Shows.** A three-step horizontal pipeline diagram (Discover → Inspect → Execute) with blue arrow connectors between three solid blue boxes labeled ORD, Server Card, and MCP interaction, summarizing the architecture demonstrated in the preceding stages.

## Slide 10 — From API Catalogs to Agent Catalogs
**Text.** From API Catalogs to Agent Catalogs / 2015 — OpenAPI Initiative — Portable descriptions for HTTP APIs, Companies building API catalogs / 2023 — ORD Open Sourced — A protocol that enables applications & services to self describe their exposed resources & capabilities / 2024 — MCP introduced — A shared protocol for AI tool calling / 2025 — A2A and MCP in ORD — A2A and MCP supported in ORD for Agent and AI capability catalogs / Building on proven-practices and learnings from the past / Public
**Shows.** A four-column timeline (2015, 2023, 2024, 2025) each with a bold year, a blue underline rule, a milestone title, and a short description, tracing the lineage from OpenAPI through ORD's open-sourcing to its current support for A2A and MCP.

## Slide 11 — Discover The Server. Understand Its Tools. Execute.
**Text.** Discover The Server. Understand Its Tools. Execute. / Discovery Before Execution / Public
**Shows.** The same AI-generated spaceship-bridge photo as slide 2 (crew and MITRA robot), reused here as a closing visual next to the bolded tagline "Discovery Before Execution", summarizing the talk's core message.

## Slide 12 — Explore the materials
**Text.** Explore the materials / Resources to continue the conversation / Open Resource Discovery / MCP Server Card UI Playground / Tool Metadata in Server Card Community proposal Issue #30 / Demo & Materials / Public
**Shows.** Four QR codes in a row, each captioned with the resource it links to (the ORD project, the MCP Server Card UI playground, a GitHub community-proposal issue for tool metadata in server cards, and the demo/materials bundle).

## Slide 13 — Let's stay in touch
**Text.** Let's stay in touch / Vyshnavi Gadamsetti — Software Architect, SAP SE / Sebastian Wennemers — Chief Architect, SAP SE / SAP · ApeiroRA · The Linux Foundation Europe / Public
**Shows.** Two speaker headshots each paired with their own QR code (Vyshnavi's overlaid with a LinkedIn icon) for connecting with the presenters, plus the sponsor/foundation logo row at the bottom.

## Slide 14 — Thank You!
**Text.** Thank You! / SAP · ApeiroRA · The Linux Foundation Europe / Public
**Shows.** Plain white closing slide with only the "Thank You!" heading and the logo row at the bottom.

## Slide 15 — Appendix (divider)
**Text.** Appendix / SAP · ApeiroRA · The Linux Foundation Europe / Public
**Shows.** Plain white section-divider slide reading only "Appendix", with the same logo row at the bottom, marking the start of backup material.

## Slide 16 — Every domain/protocol/technology has its own discovery protocol and catalog (towers)
**Text.** EVERY DOMAIN / PROTOCOL / TECHNOLOGY HAS ITS OWN DISCOVERY PROTOCOL AND CATALOG / APIs & Events, OpenAPI, AsyncAPI, OData → APIs Catalog / Tools, Agents, AI, A2A, MCP → AI Catalogs / Data products, Delta Sharing, Data Product Definitions → Data Product Catalog / Business, Taxonomy, Business Objects, Processes → Enterprise Architecture
**Shows.** Four labeled groups of pill-shaped tags, each with a downward arrow into a bold catalog-type heading, sitting atop four teal 3D tower/pillar graphics (one per catalog type: APIs, AI, Data Product, Enterprise Architecture) whose base and full extent are cropped off at the bottom edge of the slide image.

## Slide 17 — Every domain/protocol/technology has its own discovery protocol and catalog (unified)
**Text.** EVERY DOMAIN / PROTOCOL / TECHNOLOGY HAS ITS OWN DISCOVERY PROTOCOL AND CATALOG / APIs & Events, OpenAPI, AsyncAPI, OData / Tools, Agents, AI, A2A, MCP / Data products, Delta Sharing, Data Product Definitions / Business, Taxonomy, Business Objects, Processes / Discovery Protocol — Shared / Metadata catalog / Graph — Well Connected
**Shows.** The same four pill-tag groups as the prior slide, but now all four arrows converge onto a single central teal sphere labeled "Discovery Protocol — Shared", which sits atop a large teal disc labeled "Metadata catalog / Graph — Well Connected" decorated with a faint node-and-line network pattern, visually arguing for a single unifying discovery layer instead of siloed catalogs.

## Slide 18 — What Is ORD?
**Text.** WHAT IS ORD? / Taxonomy — ODM (Business Capabilities): Packages, Entity Types, Groups / Capability / APPLICATION SERVICE / Data Products / Integration Dependencies / APIs: OData API (EDMX), MCP (Model context protocol), Rest API (OpenAPI), A2A Protocol (A2A Agent Cards), Delta Sharing ({CSN:interop}), Events (Async API) / ORD Provider API / ORD is an open standard for publishing and discovering metadata about application and service resources. It enables applications and services to self-describe their exposed capabilities, including APIs, Events, and Data Products, along with their detailed metadata, in a standardised and machine-readable way.
**Shows.** A teal-and-white version of the same hexagonal "APPLICATION SERVICE" diagram used on slide 5 (Taxonomy and other resource spokes on the left, an "APIs" panel of six protocol types on the right via the ORD Provider API), with an added paragraph at bottom-left defining ORD in plain language.
