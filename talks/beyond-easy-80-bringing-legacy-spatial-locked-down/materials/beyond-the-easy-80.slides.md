---
title: "Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP"
speakers: [Sanae Mendoza]
session_id: b64de80d15aa7d2c3aa1d7a3b7bec8d5
kind: slides
deck: beyond-the-easy-80.pdf
slides: 28
---

# Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP — slides

**Sanae Mendoza**

*Thursday 17 September 2026, 10:50, G104 + G105 — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`beyond-the-easy-80.pdf`](beyond-the-easy-80.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Beyond the Easy 80%
**Text.** FME by Safe Software / Beyond the Easy 80% / Sanae Mendoza, Safe Software
**Shows.** Title card on a black rounded panel over an off-white background; the FME by Safe Software logo top-right (orange and cyan dots), title and speaker name bottom-left, a white circular arrow button bottom-right.

## Slide 2 — MCP standardized tool discovery
**Text.** MCP standardized tool discovery and invocation. It did not solve governed execution.
**Shows.** Black slide with the statement in large white/orange text (the second sentence in orange for emphasis), three small white dots below the text, and a thin multicolour (blue/cyan/orange) vertical stripe down the right edge.

## Slide 3 — What happens when… (four questions)
**Text.** What happens when… / The answer spans 12 systems? / The BIM model cannot leave the building? / No parser exists for the format? / Useful data must remain private?
**Shows.** Four white speech-bubble callouts scattered on a black background, each posing a rhetorical "hard case" question; a red/green scrambled-signal graphic bleeds off the right edge of one bubble.

## Slide 4 — The Easy 80%
**Text.** The Easy 80% / Slack Messages / GitHub Repos / Google Docs / Most MCP integrations begin where integration is easiest
**Shows.** Black slide with large white headline; three logo+label pairs (Slack, GitHub, Google Docs icons) illustrating typical easy-to-integrate sources, and an orange takeaway line below. The Google Docs icon is partly obscured by a red/green scrambled-signal graphic.

## Slide 5 — The Hard 20%
**Text.** FME by Safe Software / The Hard 20% / Legacy Databases — Running since 1985. No API. No plans to change. / Geospatial & GIS — Spatial formats AI never even parsed. / CAD & BIM — Engineering files with decades of decisions buried inside. / Real-Time Data — IoT feeds, SCADA, feeds that never stop long enough to export. / On-Prem Systems — Behind the firewall, and staying there. / Proprietary Formats — 500+ data types. No standard interface, no shortcuts. / Multi-System Workflows — One result. 12 systems to produce it. / Regulatory D[...] — Can't be [...] be ex[...]
**Shows.** Black slide with eight outlined cards in a 4x2 grid, each naming a category of "hard" data problem with a one-line description; the bottom-right "Regulatory D..." card is partly covered by a photo of a person (a "confused"-meme pose, hands on head) obscuring some of its text.

## Slide 6 — "Hard" is not just a format problem
**Text.** "Hard" is not just a format problem / Representation — Binary, spatial, 3D, streaming / Locality — Cannot or should not move / Computation — Requires a workflow, not a lookup / Authority — Identity, credentials, policy, side effects
**Shows.** Black slide with four cream-coloured cards in a row, each with a small icon (filled circle, outline square, bar-chart, shield) above a bold label and description, breaking down what makes data integration hard beyond file format.

## Slide 7 — 32 years solving the hard data problem
**Text.** Safe Software / 32 years solving the hard data problem. / 1993 — Founded - spatial data integration / 2000s — CAD, BIM, 100+ formats supported / 2010s — Cloud, IoT, enterprise systems, real-time data pipelines / 2020s — Orchestration, automation at enterprise scale / 2025- — MCP - exposing all of it to AI
**Shows.** Light slide with a large orange "32" numeral beside the headline on the left, and a vertical timeline of five outlined boxes on the right (1993 through 2025-, the last box highlighted cyan) tracing Safe Software's company history up to MCP; a small Canadian maple-leaf icon top-right.

## Slide 8 — FME is a no-code platform
**Text.** FME is a no-code platform for building data workflows. / Read — 500+ formats and systems / Validate — Geometry, attributes, schemas, file structure / Combine — Join across a dozen systems in a single run / Protect — Strip attributes, generalize geometry, control what leaves
**Shows.** Light slide with a screenshot of the FME Workbench desktop application on the left, showing a visual data-flow canvas with connected transformer boxes (StatisticsCalculator, GeometryFilter, AttributeValidator, etc.) reading data and producing an HTML report; on the right, four labelled capabilities (Read, Validate, Combine, Protect) with short descriptions.

## Slide 9 — FME Enterprise Integration Platform
**Text.** FME Enterprise Integration Platform / FME Form — Data movement and transformations workflows are built here. / FME Flow — Brings life to FME Form workflows / FME Flow Hosted — Safe Software SaaS Version of FME Flow / FME Realize — Experience data in real world context, in real time. / fme.safe.com/platform
**Shows.** Light slide showing three product screenshots side by side on laptop/tablet frames: FME Form (a workflow-building desktop app with a map preview), FME Flow (a web automation canvas with orange process blocks), and FME Realize (an AR/tablet view of a street scene with coloured utility overlays and a hydrant asset tag), each labelled with an icon and short description.

## Slide 10 — MCP Is the Exposure Point, Not the Foundation
**Text.** MCP Is the Exposure Point, Not the Foundation. / FME does this today / FME exposes this (MCP) / Consumers built on top (not FME's to build) / AI decisioning & autonomous outcomes — driven by whichever consumer sits here / Ontology (Customer or 3rd-party model) / LLM (Any model, any vendor) / Application / Agent (Copilot, agent, workflow) / FME exposes context as MCP tools/resources today / MCP — FME Flow / Context Engineering — Deep Data knowledge for increased understanding / Orchestration — Automate and coordinate disparate systems / Enterprise Integration — Connect all data: CSV, JSON, databases, APIs, GIS, CAD/BIM, SCADA, legacy formats, realtime / Customer Data / AI Stack
**Shows.** Black slide with a layered pyramid diagram. Three consumer boxes (Ontology, LLM, Application/Agent) sit at top, fed by arrows from a black "MCP / FME Flow" bar. Below that, a widening orange-shaded pyramid stacks three FME-owned layers — Context Engineering, Orchestration, Enterprise Integration — from narrow at top to wide at base, resting on a "Customer Data / AI Stack" bar; a legend distinguishes what FME builds (solid/black dots) versus what consumers build on top (outline dot), positioning MCP as the thin exposure layer atop FME's existing integration stack.

## Slide 11 — FME: All Data. Any AI.
**Text.** FME · All Data. Any AI. / All Data Velocities — Batch (ETL, Reverse ETL, …), Event (BPA, RPA, …), Stream / All Data Locations — Any Cloud, On-premises, Hybrid, Edge, Containers, Embedded, Mixed / All Data Types — Unstructured, Structured, Spatial, APIs, Web Apps, … / Any AI Technology — OpenAI, Amazon Bedrock, Google Gemini, Ollama, Deepseek, Composite
**Shows.** Light slide with four overlapping ring icons (orange plus three black) around a central "FME" badge, beside the large "All Data. Any AI." wordmark; below, four colour-coded bullet columns (orange, cyan, green, blue dots) list the velocities, locations, types and AI vendors FME supports.

## Slide 12 — Turn an FME workflow into an MCP tool
**Text.** Safe Software / Turn an FME workflow into an MCP tool. / FME Workflow — Your data logic or tool built here. / FME Flow's MCP Server — Publish it. Identify as an MCP Tool. That is it. / Any MCP Client — Claude, OpenAI, Gemini, Co-Pilot, your agents, any MCP Client / Build once. Use it from any MCP Client.
**Shows.** Light slide with a three-box left-to-right flow (FME Workflow → FME Flow's MCP Server → Any MCP Client) connected by orange circular arrow icons, each box outlined in a different colour (orange, cyan, green), showing the simple publish path from workflow to MCP-consumable tool.

## Slide 13 — The contract can be remote
**Text.** The contract can be remote. Execution stays with the data. / ① Cloud + Cloud — CLOUD: Your Data (cloud sources) → FME + MCP → Cloud AI (Claude · GPT-4) / ② Fully On-Premises — BEHIND FIREWALL: Your Data (on-premises) → FME + MCP → Local AI (Gemma 4 + Goose) / ③ Controlled Hybrid — YOUR NETWORK: Your Data (on-premises) → FME + MCP → curated context only → Cloud AI (no raw data access)
**Shows.** Light slide with three parallel vertical flow diagrams side by side, each showing Your Data → FME+MCP (orange bar) → an AI destination box, labelled Cloud+Cloud, Fully On-Premises (outlined in a red dashed "behind firewall" boundary), and Controlled Hybrid (dashed "your network" boundary with "curated context only" annotation before reaching Cloud AI), illustrating three deployment topologies that all keep execution local to the data.

## Slide 14 — Control who connects
**Text.** Control who connects—and what the tool can do. / Connection layer — Who is the client? Which MCP server can it reach? OAuth 2.0 + SAML mapping / Execution layer — Which identity executes? Which systems and records can the tool touch? Which side effects are permitted? / credentials / data scope / side effects
**Shows.** Light slide with an outer bordered box split into two areas: a plain "Connection layer" panel on the left listing client/auth questions, and a black "Execution layer" panel on the right listing authorization questions with three small labelled pill tags (credentials, data scope, side effects) beneath.

## Slide 15 — What happens when… (repeat)
**Text.** What happens when… / The answer spans 12 systems? / The BIM model cannot leave the building? / No parser exists for the format? / Useful data must remain private?
**Shows.** Same four-speech-bubble layout as slide 3 (identical black background, bubble positions and red/green scrambled graphic, all bubbles white), repeated here as a transition back into the "hard 20%" questions before diving into a worked example.

## Slide 16 — What happens when… (private data highlighted)
**Text.** What happens when… / The answer spans 12 systems? / The BIM model cannot leave the building? / No parser exists for the format? / Useful data must remain private?
**Shows.** Same four-speech-bubble layout again, but this time the "Useful data must remain private?" bubble is filled solid green instead of white, visually singling it out as the question the next section will answer.

## Slide 17 — Protecting Privacy While Preserving Location Intelligence
**Text.** Protecting Privacy While Preserving Location Intelligence / Source risk — Exact addresses, Names and other identifying information, Individual incident locations / Required output — Personal information removed, Exact locations generalized, Geographic patterns preserved for analysis
**Shows.** Dark slide split into a text panel (source risk and required output bullet lists) on the left and, on the right, two stacked street-grid maps connected by a downward orange arrow: the top map shows exact addresses and names pinned to specific crime incidents (theft, vandalism, assault with named residents), the bottom map shows the same incidents generalized to block-level labels ("100 Block Elm Ave" etc.) with names removed, illustrating the anonymization transformation.

## Slide 18 — FME workflow diagram (crime data pipeline)
**Text.** Neighbourhood boundaries / Street network / Crime records / normalize → validate → overlay → policy rules / FME by Safe Software / Updated geospatial / Notifications / Document PDF
**Shows.** Light slide with a circular flow diagram: three input sources on the left (a neighbourhood-boundary map thumbnail, a street-network map thumbnail, a crime-records table screenshot) feed into a large oval labelled with the FME processing steps (normalize → validate → overlay → policy rules) and an "FME Workflow" watermark plus FME logo at its base; arrows exit the oval to three outputs on the right (an updated-geospatial map pin icon, a notification bell icon, and a document/PDF icon).

## Slide 19 — Expose the workflow — not the system
**Text.** Expose the workflow — not the system. / Direct System Access — run_sql(query), read_file(path), call_api(url, body) [shown struck through] / Purpose-Built Workflows — Find Crimes: Street, Incident Type, Distance / Neighborhood Crimes: Neighborhood / Create Report: Neighborhood, Teams Channel
**Shows.** Light slide contrasting two approaches: on the left, three generic low-level function calls (run_sql, read_file, call_api) each shown with strikethrough text to mark them as rejected; on the right, three black cards listing purpose-built named tools (Find Crimes, Neighborhood Crimes, Create Report) with their specific parameters, as the recommended alternative.

## Slide 20 — Demo
**Text.** Demo
**Shows.** Black slide with a single large glowing orange circle centred, containing the word "Demo" in bold black text, with a soft orange glow beneath it; small orange/cyan dot logo mark in the bottom-right corner.

## Slide 21 — FME Flow MCP Servers admin screenshot
**Text.** FME Flow / MCP Servers / Crime Data 1.0.0 / Crime-Data / Tools / Server Details / Find Crimes — findCrimes — "Search for reported crimes on a given street by street name. Optionally accepts a buffer distance (in meters) to also return crimes within that radius of the street. Results are anonymized to the block level rather than exact addresses." / Create Report — createReport — Creates a pdf report of crimes for a neighbor... / Neighbourhood Cri... — neighbourhoodC... — This tool pulls in the crimes for each neighbo... / Draft Tool — Draft-tool — This tool is not ready yet. No workspace assigned. / Repository: MCP Tools
**Shows.** Screenshot of the FME Flow web admin console's "MCP Servers" page for a server named "Crime Data," showing a left navigation sidebar (Run Workspace, Automations, Notifications, Streams, Data Virtualization, MCP Servers highlighted, Flow Apps, etc.), a middle list of published/unpublished tools (Create Report, Find Crimes selected, Neighbourhood Crimes, and an unpublished Draft Tool), and a right-hand detail panel editing the "Find Crimes" tool's name, title, and description text, plus job-settings repository field — demonstrating how an FME workflow is published and documented as an MCP tool.

## Slide 22 — What actually crossed the boundary?
**Text.** What actually crossed the boundary? / Stayed inside the execution plane — Source credentials, System topology, Private source records, Exact and intermediate geometries, Workflow implementation / Crossed the MCP interface — Narrow request parameters, Bounded result, Generalized or aggregated data, Approved resource link, Minimal job outcome
**Shows.** Light slide with two side-by-side panels: a black "Stayed inside the execution plane" list (sensitive internals that never left FME) and a white "Crossed the MCP interface" list (only narrow, bounded, generalized outputs), summarising the demo's data-boundary outcome.

## Slide 23 — Three rules for the hard 20%
**Text.** Three rules for the hard 20% / 1 Expose workflows—not raw systems. / 2 Keep authority and execution close to the data. / 3 Make schemas, outputs, versions, and failures part of the contract. / Beyond the Easy 80% · MCPCon Europe 2026
**Shows.** Nothing beyond the text; a light slide with three large orange numerals (1, 2, 3) each paired with a bold rule statement, separated by thin horizontal rules, and a small session/event citation bottom-right.

## Slide 24 — The Power of Choice
**Text.** The Power of Choice / And this is what you just watched. You chose what AI could see. / Deploy Anywhere — On-premises, any cloud, hybrid, edge and more. Your infrastructure. Your rules. / Any Data Source — 1000s of formats. Systems built before APIs existed. If it holds data, FME reads it. / Full Governance — Sensitive data never leaves your perimeter. Compliance is architecture, not paperwork. / Any AI Model — OpenAI today, something else tomorrow. Your data layer does not care who wins. / Data Exposed to AI — Choose the data AI sees. Pick the rows. Pick the columns. Obfuscate anything else.
**Shows.** Dark slide with five cyan-outlined cards in a row, each with a small circular icon (network, dots, shield/headset, sparkle, grid) above a bold cyan heading and descriptive text, summarising the platform's flexibility across deployment, data sources, governance, AI models and data exposure control.

## Slide 25 — FME Has Unrivaled Deployment
**Text.** FME Has Unrivaled Deployment / Global hyperscalers · European-native providers · Because data sovereignty matters / AWS / Azure / Google Cloud / IBM Cloud / Oracle Cloud / OVHcloud (France) / Open Telekom Cloud – T-Systems (Germany) / IONOS Cloud (Germany) / Hetzner Cloud (Germany) / Scaleway (France) / STACKIT (Germany) / Exoscale (Switzerland) / UpCloud (Finland) / Cleura (Sweden) / CloudFerro (Poland) / Any Cloud... / (orange dot) = European-native cloud provider
**Shows.** Dark slide with a grid of 16 cloud-provider logo cards: a top row of global hyperscalers (AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud) and two further rows of European-native cloud providers each marked with a small orange dot and labelled by country (France, Germany, Switzerland, Finland, Sweden, Poland), plus a generic "Any Cloud..." card, emphasising broad and sovereignty-conscious deployment options.

## Slide 26 — FME: All Data. Any AI. (booth invite)
**Text.** FME · All Data. Any AI. / Come visit us at our booth, P3! / Safe Software
**Shows.** Light slide with the same four-ring FME logo mark as slide 11 beside the "All Data. Any AI." wordmark, a Canadian maple-leaf icon top-left, and a booth-visit invitation ("Come visit us at our booth, P3!") beneath.

## Slide 27 — Thank You
**Text.** Thank You / Sanae Mendoza / Customer Solutions Specialist, Safe Software / sanae.mendoza@safe.com
**Shows.** Solid orange closing card with large black "Thank You" headline, speaker name, title and email address in black text, Safe Software logo top-right.

## Slide 28 — Blank
**Text.** (none)
**Shows.** A blank white slide with no visible text or imagery.
