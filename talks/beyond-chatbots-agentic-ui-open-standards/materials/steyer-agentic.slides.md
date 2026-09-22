---
title: "Beyond Chatbots: Agentic UI With Open Standards"
speakers: [Manfred Steyer]
session_id: db32aa8283d37bb218713f49b6353143
kind: slides
deck: steyer-agentic.pdf
slides: 39
---

# Beyond Chatbots: Agentic UI With Open Standards — slides

**Manfred Steyer**

*Friday 18 September 2026, 14:25, G102 + G103 — Human-Agent Collab track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`steyer-agentic.pdf`](steyer-agentic.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** ANGULAR ARCHITECTS / Agentic AI Foundation AGNTCon + MCPCon Europe / Beyond Chatbots: Agentic UI with Open Standards / ANGULARarchitects.io / @Manfred Steyer
**Shows.** A cartoon robot with speech-bubble antennae holds up a smartphone against a blurred night-city bokeh background (top), over a pink-to-purple diagonal title band (bottom) carrying the Angular Architects logo and the AGNTCon + MCPCon Europe badge.

## Slide 2 — Let's imagine a Killer App
**Text.** Let's imagine a "Killer App" …
**Shows.** A photo of a hand holding a paper cut-out light bulb shape in front of a sketched light-bulb drawing, on a pink-to-purple gradient panel — a "big idea" visual with no further diagrammatic content.

## Slide 3 — VisiCalc, 1979
**Text.** VisiCalc, 1979
**Shows.** A full-screen green-on-black screenshot of the VisiCalc spreadsheet (the historic "killer app" for personal computers), showing an itemised invoice (MUCK RAKE, BUZZ CUT, TOE TONER, EYE SNUFF) with quantities, unit prices, a subtotal, 9.75% tax, and a total of 14438.16 highlighted in the TOTAL cell.

## Slide 4 — ChatGPT: "Really, we need to chat now?"
**Text.** "Really, we need to chat now?"
**Shows.** A browser screenshot of chatgpt.com showing an empty ChatGPT conversation ("Ready when you are." placeholder, "Ask anything" input box), used ironically under the caption to question whether chat is really the right interface for every task.

## Slide 5 — To chat or not to chat
**Text.** To chat or not to chat … / … that's the wrong question!
**Shows.** A moody photo of a man in sunglasses and a dark blazer, styled like a "Hamlet with a laptop" (a poster reading "ALL THE WORLD'S A STAGE" and a Shakespeare bust visible behind him), leaning thoughtfully over a laptop — a visual pun on "to be or not to be."

## Slide 6 — High Level View on Agentic AI
**Text.** High Level View on Agentic AI / User Intent / Autonomous Behavior / Goal / Iterative / Tool Access
**Shows.** Three purple chevron-arrow boxes in sequence — "User Intent" → "Autonomous Behavior" → "Goal" — with "User Intent" enclosed in a red dashed rectangle. "Iterative" is labelled above the Autonomous Behavior arrow and "Tool Access" below it, indicating the agent loops through autonomous, tool-using behavior driven by the initial user intent until it reaches the goal.

## Slide 7 — Percentage of delayed flights per day
**Text.** Percentage of delayed flights per day (selected routes) / 2026-04-11 / 2026-04-12 / 2026-04-13 / 2026-04-14 / 2026-11-24 / Reporting / Look at the following flights: Graz-Hamburg, Graz-London, Graz-New York and the corresponding return flights. For each day, give me the percentage of delayed flights out of the total number of flights. Sort by date. / Generate / Example #1 / Example #2
**Shows.** A generated horizontal bar chart titled "Percentage of delayed flights per day (selected routes)" with five date rows (2026-04-11 near 0, 2026-04-12 the longest bar at roughly 17, 2026-04-13 around 15, 2026-04-14 around 9, 2026-11-24 near 0), overlapped by a "Reporting" prompt panel showing the natural-language request that produced it and Generate/Example buttons — illustrating an agent turning a text prompt into a data chart UI.

## Slide 8 — Dynamic travel dashboard prompt
**Text.** Flight42 / BOARDING PASS / Graz → Hamburg / Date 2026-04-11 / Boarding 09:00 / Gate B7 / Seat 14A / Flight FL1 Seat 14A / Flight42 / BOARDING PASS / Hamburg → Graz / Date 2026-04-11 / Boarding 16:15 / Gate B7 / Seat 14A / Flight FL2 Seat 14A / My booked flights / Graz → Hamburg 2026-04-11 — Sunny — 5°C — On time / Hamburg → Graz 2026-04-11 — Partly cloudy — 6°C — On time / Wien → Eisenstadt 2026-04-13 — Thunder / Graz → Paris 2026-04-12 — Thunder / Check in / Rent a car / Compact — VW Polo From 39 EUR/day / Estate — VW Passat Variant From 76 EUR/day / Hotels / Hafenpark 4★ / Hotel Atlantic Kempinski 5★ — from 290 EUR/night / Find a flight / FROM Graz / TO Hamburg / Search / Dynamic Dashboard / Build my personal travel dashboard. Include the following tiles: - A boarding-pass tile (TicketWidget) for my next two upcoming booked flights. - A list of my booked flights with a check-in button per flight. - A flight-search tile defaulting to Graz / Hamburg. - A "Rent a car" tile with a list of possible cars. - A "Book hotel" tile with a list of possible hotels. - List with weather forecast for the destinations of all booked flights. / Generate / Example #1 / Example #2 / Reset / PREVENT CACHING
**Shows.** A generated multi-tile personal travel dashboard mockup (boarding passes, booked-flights list with check-in buttons, flight search, car rental, hotels) produced from the natural-language prompt shown in the overlaid "Dynamic Dashboard" panel — demonstrating an agent assembling an entire personalised UI layout from one instruction, not just a chat reply.

## Slide 9 — Check-in with passport scan
**Text.** Check-in / TICKET ID 123456 / FIRST NAME JANE / LAST NAME DOE / EMAIL ADDRESS me@here.com / PHONE 1234 5678 / We send the ticket to this address / Full Number: +43 1234 56... / PASSPORT NUMBER TC87654321 / ISSUED ON 2024-05-15 / VALID UNTIL 2034-05-15 / I accept the general conditions of carriage / Check-in / Next Flights / Scan ticket/ID / Select Document / passport_jane.png / Fields prefilled – please review. / TEST COUNTRY PASSPORT PASSEPORT / Given Names / Prénoms JANE / Surname / Nom DOE / Passport Number / Numéro de passeport TC87654321 / Issued on / Délivré le 15 MAY 2024 / Valid until / Valable jusqu'au 15 MAY 2034
**Shows.** A check-in form pre-filled from a scanned passport image (a mocked "TEST COUNTRY PASSPORT" for Jane Doe), with a "Select Document" control showing the uploaded file and a note that fields were auto-filled and need review — an example of an agent/tool populating a form UI from a document scan rather than a chat answer.

## Slide 10 — Travel Planner
**Text.** Travel Planner / FROM Graz / TO London / PREFERENCES - Stopover in Paris for dinner, continue the next morning - As much time in London as possible - Business hotel / Generate Travel Plan / Reset / Flights ✓ —— Hotels ✓ / Graz - Paris / Flight-No.: #390 / Date: 12.04.2026 16:40 / Dealy: 10 min / Select / Paris - London / Flight-No.: #6307 / Date: 13.04.2026 09:20 / Dealy: 0 min / Select / London - Graz / Biz Hotel Paris / Paris / ★★★★☆
**Shows.** A generated "Travel Planner" UI: a form capturing free-text preferences (stopover in Paris, maximise London time, business hotel), a progress stepper (Flights done, Hotels next), a list of flight legs with Select buttons matching the requested Paris stopover, and hotel option cards (Biz Hotel Paris, 4 stars) — the agent turning prose preferences into a structured itinerary UI.

## Slide 11 — Travel Planner refinement via chat + tool calls
**Text.** Graz - Paris / Flight-No.: #515 / Date: 11.07.2026 10:20 / Dealy: 0 min / Select / Paris - London / Flight-No.: #8405 / Date: 12.07.2026 10:20 / Dealy: 0 min / Select / London - Graz / Flight-No.: #7912 / Date: 13.07.2026 17:40 / Grand Palace Paris / Paris / ★★★★★ / Biz Hotel London / Do you want to refine your travel plan? / I want to leave Graz earlier und please give me a posh hotel in Paris. / Tool Call: getTravelPlan / Tool Call: searchFlightsTool / Tool Call: findHotelsTool / Tool Call: replaceFlightInPlan / Tool Call: addHotelToPlan / Done — I moved your Graz departure earlier and upgraded Paris to the posh 5-star hotel.
**Shows.** The Travel Planner UI (flight legs and hotel cards, now showing a 5-star "Grand Palace Paris" hotel) beside a chat panel on the right where the user asks in free text to leave Graz earlier and get a posh Paris hotel; the assistant visibly runs a chain of five labelled tool calls (getTravelPlan, searchFlightsTool, findHotelsTool, replaceFlightInPlan, addHotelToPlan) before confirming the changes — showing chat-driven edits to a generative UI, with the tool calls exposed as checked steps.

## Slide 12 — Check-in + AI Assistant panel
**Text.** ANGULAR ARCHITECTS / Home / Booking / Reporting / Next Flights / Luggage / Check-in / About / Check-in / TICKET ID 390 / FIRST NAME / EMAIL ADDRESS me@here.com / PHONE 1234 5678 / Full Number: +43 1234 5678 / I accept the general conditions of carriage / Check-in / Next Flights / AI Assistant / Hi! How can I help you? / Did I book my flight to France? / Tool Call: findBookedFlightsTool / Yes, you have a booked flight to France: / Graz - Paris / Flight-No.: #390 / Date: 12.04.2026 16:40 / Dealy: 10 min / Check in / Your Question …
**Shows.** A full app shell (sidebar navigation: Home, Booking, Reporting, Next Flights, Luggage, Check-in, About) with the Check-in page open behind an "AI Assistant" chat panel. The user asks "Did I book my flight to France?"; the assistant runs a findBookedFlightsTool call and replies with an embedded flight card containing a live "Check in" button. A red dashed arrow points from that in-chat Check-in button up to the ticket ID field on the underlying Check-in form, showing the chat widget can populate/trigger the surrounding page UI directly rather than just describing it in text.

## Slide 13 — LLM / Agent / UI Runtime architecture
**Text.** LLM / Backend / Agent / Tools / HTTP (SSE, Web Sockets, etc.) / UI Runtime / Component / Tools / Frontend
**Shows.** A three-tier box diagram: an "LLM" box at top, connected down to a "Backend" tier containing "Agent" (which also calls "Tools") in the middle, connected via "HTTP (SSE, Web Sockets, etc.)" down to a "Frontend" tier containing "UI Runtime" (which calls its own "Component" and "Tools" boxes) at the bottom — laying out how the agent server and the browser-side UI runtime communicate and each keep their own tool sets.

## Slide 14 — How to communicate with the Agent? (teaser)
**Text.** How to communicate with the Agent? / How to prevent coupling to the server stack and LLM?
**Shows.** A pink-to-purple gradient panel with a thoughtful-looking woman (hand on chin) photographed against a teal background — a rhetorical-question section teaser with no diagram.

## Slide 15 — How to support dynamic UI as an answer? (teaser)
**Text.** How to support dynamic UI as an answer from the Agent?
**Shows.** A pink-to-purple gradient panel with a shrugging man in a mustard sweater against a grey background — a rhetorical-question section teaser with no diagram.

## Slide 16 — How to visualize tools provided by other systems? (teaser)
**Text.** How to visualize tools provided by other systems?
**Shows.** A pink-to-purple gradient panel with a woman sitting cross-legged holding up a cardboard sign with a large question mark, against a yellow background — a rhetorical-question section teaser with no diagram.

## Slide 17 — Agenda
**Text.** Agenda / 1) AG-UI: Agent Communication / 2) A2UI: Dynamic/ Generative UI / 3) MCP Apps: Visual Tools
**Shows.** Nothing beyond the text.

## Slide 18 — About Me
**Text.** About Me / Manfred Steyer, ANGULARarchitects.io / (Remote) Angular Workshops and Consulting / Google Developer Expert for Angular / Blog, Books, and Talks about Angular
**Shows.** Four logos/badges in a row: the cover of "Angular Architectures for Enterprise-Applications," a "Google Developers Experts — Angular GDE 2019" hexagon badge, the Angular wordmark/shield logo, and the Austrian and European Union flags, summarising the speaker's credentials.

## Slide 19 — How to communicate with the Agent? (teaser, repeated)
**Text.** How to communicate with the Agent? / How to prevent coupling to the server stack and LLM?
**Shows.** Identical layout and imagery to slide 14 — the same thoughtful-woman teaser panel, re-shown here as the section is about to be answered.

## Slide 20 — AG-UI for Agent Communication (divider)
**Text.** AG-UI for Agent Communication
**Shows.** A section-divider slide: pink-to-purple gradient panel on the left with the title, next to a photo of a server-room data-centre aisle with glowing blue light trails, signalling the move into the AG-UI technical section.

## Slide 21 — AG-UI Protocol docs and npm package
**Text.** AG-UI Protocol / Get Started / AG-UI Overview / The Agent-User Interac[tion...] / AG-UI is an open, lightweight, event-base[d protocol that helps] connect to user-facing applications. / @ag-ui/core - npm / docs.ag-ui.com/introduction / npmjs.com/package/@ag-ui/core / Readme / Code (Beta) / 1 Dependency / 126 Dependents / 74 Versions / @ag-ui/core / TypeScript definitions & runtime schemas for the Agent-User Interaction (AG-UI) Protocol. / @ag-ui/core delivers the strongly-typed building blocks that every other AG-UI package is built on: message & state models, run inputs and the full set of streaming event types. / Installation / npm install @ag-ui/core / pnpm add @ag-ui/core / yarn add @ag-ui/core / Install / npm i @ag-ui/core / Repository / github.com/ag-ui-protocol/ag-ui / Homepage / github.com/ag-ui-protocol/ag-ui#readme / 2026-08-26 to 2026-09-01 / 1,985,006
**Shows.** Two overlapping browser screenshots: the AG-UI Protocol documentation site (docs.ag-ui.com) describing AG-UI as an open, lightweight, event-based protocol connecting agents to user-facing apps, and the npmjs.com page for the @ag-ui/core package showing install commands, its GitHub repository, 126 dependents, 74 versions, and a weekly download count of 1,985,006 with an upward-trending sparkline — evidence of the protocol's install footprint.

## Slide 22 — Supported Integrations
**Text.** Supported Integrations / LangGraph / CrewAI / Microsoft Agent Framework / Google ADK / AWS Strands Agents / AWS Bedrock AgentCore / Mastra / Spring AI / Pydantic AI / Agno / LlamaIndex / AG2 / AWS Bedrock Agents / OpenAI Agent SDK / Cloudflare Agents
**Shows.** Nothing beyond the text (a two-column bullet list of agent frameworks AG-UI integrates with).

## Slide 23 — SDKs
**Text.** SDKs / TypeScript / Python / Kotlin / Golang / Dart / Langflow / Java / Rust / .NET / Nim / Flowise
**Shows.** Nothing beyond the text (a two-column bullet list of languages/platforms with AG-UI SDKs).

## Slide 24 — Demo (divider)
**Text.** DEMO
**Shows.** A plain pink-to-purple gradient divider slide with a large translucent Angular shield-and-compass watermark graphic on the right and the word "DEMO" on the left; no other content.

## Slide 25 — How to support dynamic UI as an answer? (teaser, repeated)
**Text.** How to support dynamic UI as an answer from the Agent?
**Shows.** Identical layout and imagery to slide 15 — the same shrugging-man teaser panel, re-shown here as the section is about to be answered.

## Slide 26 — Dynamic travel dashboard prompt (repeated)
**Text.** Flight42 / BOARDING PASS / Graz → Hamburg / Date 2026-04-11 / Boarding 09:00 / Gate B7 / Seat 14A / Flight FL1 Seat 14A / Flight42 / BOARDING PASS / Hamburg → Graz / Date 2026-04-11 / Boarding 16:15 / Gate B7 / Seat 14A / Flight FL2 Seat 14A / My booked flights / Graz → Hamburg 2026-04-11 — Sunny — 5°C — On time / Hamburg → Graz 2026-04-11 — Partly cloudy — 6°C — On time / Wien → Eisenstadt 2026-04-13 — Thunder / Graz → Paris 2026-04-12 — Thunder / Check in / Rent a car / Compact — VW Polo From 39 EUR/day / Estate — VW Passat Variant From 76 EUR/day / Hotels / Hafenpark 4★ / Hotel Atlantic Kempinski 5★ — from 290 EUR/night / Find a flight / FROM Graz / TO Hamburg / Search / Dynamic Dashboard / Build my personal travel dashboard. Include the following tiles: - A boarding-pass tile (TicketWidget) for my next two upcoming booked flights. - A list of my booked flights with a check-in button per flight. - A flight-search tile defaulting to Graz / Hamburg. - A "Rent a car" tile with a list of possible cars. - A "Book hotel" tile with a list of possible hotels. - List with weather forecast for the destinations of all booked flights. / Generate / Example #1 / Example #2 / Reset / PREVENT CACHING
**Shows.** The same generated multi-tile personal travel dashboard mockup as slide 8, re-shown here to introduce how such a dynamic layout is actually generated (A2UI), with the same overlaid prompt panel.

## Slide 27 — A2UI: Dynamic UI (divider)
**Text.** A2UI: Dynamic UI
**Shows.** A section-divider slide: pink-to-purple gradient panel with the title, next to a photo of a sculptor's hands shaping a classical plaster bust in a studio — a visual metaphor for shaping/generating a UI.

## Slide 28 — A2UI protocol site
**Text.** A2UI / a2ui.org / A2UI / A Protocol for Agent-Driven Interfaces / A2UI enables AI agents to generate rich, interactive user interfaces that render natively across web, mobile, and desktop—without executing arbitrary code.
**Shows.** A browser screenshot of the a2ui.org homepage with a small robot logo, describing A2UI as a protocol letting agents generate rich, interactive, natively-rendered UIs across web, mobile and desktop without executing arbitrary code.

## Slide 29 — Example (A2UI JSON schema)
**Text.** Example / { "id": "root", "children": ["headline", "name", "..."] } / { "id": "headline", "component": "Text", "variant": "h2" "text": "Passenger", } / { "id": "name", "component": "Text", "variant": "body" "text": { "path": "/passenger/name" } }
**Shows.** Three JSON code blocks illustrating the A2UI component-tree format: a root node listing child component IDs, a static "Text" component with variant "h2" and literal text "Passenger," and a second "Text" component whose value is bound dynamically via a JSON path ("/passenger/name") instead of a literal string.

## Slide 30 — Renderer
**Text.** Renderer / React / Lit (Web Components) / Angular / Flutter / Dart / Android / SwiftUI, iOS
**Shows.** Nothing beyond the text (a bullet list of client frameworks/platforms that can render an A2UI component tree).

## Slide 31 — Demo (divider)
**Text.** DEMO
**Shows.** Same plain divider design as slide 24 (pink-to-purple gradient, translucent Angular shield watermark, "DEMO" label); no other content.

## Slide 32 — How to use tools provided by other systems? (teaser)
**Text.** How to use tools provided by other systems?
**Shows.** A pink-to-purple gradient panel with a woman sitting cross-legged holding a cardboard question-mark sign against a yellow background — visually similar to slide 16's teaser but with different wording ("use" rather than "visualize"), introducing the MCP Apps section.

## Slide 33 — MCP Apps (divider)
**Text.** MCP Apps
**Shows.** A section-divider slide: pink-to-purple gradient panel with the title, next to a close-up photo of hands organising a blue toolbox full of hand tools (wrenches, drill bits, pliers) — a visual metaphor for a toolbox of visual tools.

## Slide 34 — MCP Apps capabilities
**Text.** MCP Apps / Visualize Tools incl. Results / Provides Client Code / Sandbox / Host Context: Theme, Size, … / Messaging w/ Widget
**Shows.** Five pink boxes arranged in a 3-then-2 grid, each naming one MCP Apps capability: visualizing tools including their results, the server providing client-side code, running that code in a sandbox, the host passing context such as theme and size, and two-way messaging with the resulting widget.

## Slide 35 — Demo (divider)
**Text.** DEMO
**Shows.** Same plain divider design as slides 24 and 31 (pink-to-purple gradient, translucent Angular shield watermark, "DEMO" label); no other content.

## Slide 36 — Agentic UI with Angular (book ad)
**Text.** Agentic UI with Angular / Architectures with Open Standards / 220+ pages, PDF, EPUB / Regular Free Updates! / agentic-angular.com
**Shows.** A promotional slide for Manfred Steyer's book "Agentic UI with Angular — Architecting Agentic AI with Open Standards," shown as both a tablet-displayed e-book cover and a physical paperback cover (red/blue interlocking-diamond artwork), against a pink-to-purple gradient with a large translucent Angular shield watermark.

## Slide 37 — Conclusion
**Text.** Conclusion / Agentic AI/UI / • Intent / • Autonomy / • Tools / Standards / • AG-UI / • A2UI / • MCP Apps / Tactics / • JSON Schema / • Processing Messages (Text, Widgets, Tools)
**Shows.** Three purple-headed summary cards side by side — "Agentic AI/UI" (Intent, Autonomy, Tools), "Standards" (AG-UI, A2UI, MCP Apps), and "Tactics" (JSON Schema, Processing Messages) — recapping the talk's three main topics and their key concepts.

## Slide 38 — Let's build the next Killer App
**Text.** Let's build the next "Killer App" …
**Shows.** The same VisiCalc, 1979 green-on-black spreadsheet screenshot as slide 3, reused here as a closing callback, now captioned with a call to action to build the next killer app using the standards just presented.

## Slide 39 — Contact (Manfred Steyer)
**Text.** Manfred Steyer / [LinkedIn, Twitter, Facebook] Manfred Steyer / [web] ANGULARarchitects.io / Slides, Examples, Book / Remote Company Workshops and Consulting / http://angulararchitects.io
**Shows.** A closing contact slide with social-icon glyphs (Bluesky, Facebook, X, LinkedIn) pointing to "@Manfred Steyer," an arrow from the web link down to the label "Slides, Examples, Book," and on the right the "Angular Architectures for Enterprise-Applications" book cover with a link to angulararchitects.io for workshops and consulting.
