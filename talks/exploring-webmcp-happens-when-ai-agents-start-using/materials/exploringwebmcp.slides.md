---
title: "Exploring WebMCP: What Happens When AI Agents Start Using Websites?"
speakers: [Sylwia Laskowska]
session_id: 6cf70cb5ef0b682423a7ce434964a160
kind: slides
deck: exploringwebmcp.pdf
slides: 15
---

# Exploring WebMCP: What Happens When AI Agents Start Using Websites? — slides

**Sylwia Laskowska**

*Thursday 17 September 2026, 13:10, G102 + G103 — Interop & Standards track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`exploringwebmcp.pdf`](exploringwebmcp.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** Exploring WebMCP / What happens when AI agents start using websites? / SYLWIA LASKOWSKA / Agentic AI Foundation / AGNTCon + MCPCon Europe
**Shows.** Dark teal title card with a diagonal lighter-teal stripe on the right, the speaker's name in the lower left, and the Agentic AI Foundation / AGNTCon + MCPCon Europe logo lockup.

## Slide 2 — Speaker bio
**Text.** HELLO, I'M / Sylwia Laskowska / Senior Software Engineer / 10+ years in web development / Atos · European Commission / Frontend, performance & agentic AI / AWS Community Builder / linkedin.com/in/sylwia-laskowska-5a8467131 / dev.to/sylwia-lask / Atos / 02
**Shows.** Split layout with the speaker's photo on a dark teal panel at left and her bio details on a cream panel at right, with the Atos logo top-right.

## Slide 3 — The web keeps adapting to changing needs
**Text.** The web keeps adapting to changing needs / 1 RESPONSIVE — devices / 2 ACCESSIBLE — people / 3 AGENT-READY — AI agents? / HTML 4.01 → mobile → accessibility → ?
**Shows.** Three horizontal cards connected by right-pointing arrows (Responsive, Accessible, Agent-ready), the first two in light green and the third in dark teal to mark it as the open/current question, above a one-line evolution timeline.

## Slide 4 — Today, agents have to guess
**Text.** Today, agents have to guess / DOM / accessibility tree / screenshot → What should I click? / The interface has semantics for humans — not an explicit contract for agents.
**Shows.** Dark teal slide with three pill boxes (DOM, accessibility tree, screenshot) feeding via an arrow into a highlighted box reading "What should I click?", illustrating that agents today must infer intent from human-facing interfaces rather than a defined API.

## Slide 5 — WebMCP gives agents an explicit contract
**Text.** WebMCP gives agents an explicit contract / WebMCP — Experimental browser API / Works in an open webpage / Websites expose structured tools / Agents discover and call them / Less UI guessing
**Shows.** Cream slide with the "WebMCP" name at left and four bullet points at right, each marked with a small vertical colored bar (teal for the first three, orange for the emphasized fourth point "Less UI guessing").

## Slide 6 — Is WebMCP ready? Not yet.
**Text.** Is WebMCP ready? Not yet. / EXPERIMENTAL / Chrome Origin Trial / Testing behind a flag / API still evolving / June → September / demo works / breaking changes / Early adopters explore and rewrite.
**Shows.** Dark teal slide with an "Experimental" label and bullet list on the left, and a bordered card on the right showing a June-to-September arrow where "demo works" (June) contrasts with "breaking changes" (September, in orange), illustrating the API's instability.

## Slide 7 — Two ways to expose tools
**Text.** Two ways to expose tools / DECLARATIVE — HTML attributes — Form-based interactions / or / IMPERATIVE — JavaScript — Custom logic
**Shows.** Cream slide with two side-by-side cards (light green "Declarative/HTML attributes" and dark teal "Imperative/JavaScript"), separated by an orange "or", presenting the two ways WebMCP lets a page expose tools.

## Slide 8 — Declarative WebMCP lives in the form
**Text.** Declarative WebMCP lives in the form / <form toolautosubmit toolname="createSupportTicket" tooldescription="Create a support ticket"> <input name="issue" ...> </form> / Name. Purpose. Parameters. / toolautosubmit controls who submits the form.
**Shows.** Dark teal code panel showing an HTML form snippet with WebMCP-specific attributes (toolautosubmit, toolname, tooldescription), annotated at right with what each concept maps to and a note on the toolautosubmit attribute's role.

## Slide 9 — Imperative WebMCP exposes application logic
**Text.** Imperative WebMCP exposes application logic / await document.modelContext.registerTool({ name: "something", description: "...", inputSchema: { ... }, annotations: { readOnlyHint: false, consequentialHint: true, untrustedContentHint: false }, execute: async (args) => { ... } }); / name / description / input schema / execute / Custom logic
**Shows.** Dark teal code panel showing a JavaScript document.modelContext.registerTool() call with annotation hints, annotated at right with labels for each field; "execute" is highlighted in orange and paired with a "Custom logic" pill, emphasizing that this is where arbitrary application code runs.

## Slide 10 — So I built an AI CEO simulator
**Text.** So I built an AI CEO simulator / Try it yourself → github.com/sylwia-lask/ai-ceo-webMCP / AI CEO Simulator / LinkedIn Thought Leadership Mode · WebMCP tools exposed · Reset / COMPANY METRICS — Cash $10.0M (Available balance) / Monthly Revenue $575K/mo (ARR: $6.9M) / Developers 12 (12 headcount) / Employee Happiness 57% / Technical Debt 70% (2 active issues) / Production Incidents 2 / Hype Level 90% / BOARD DECISIONS — GROWTH: Adopt AI, Pivot to Agents / RISK: Rewrite in Rust / ACTIVITY LOG — Pivot to Agents: "Pivoted to agents. Investors are thrilled. No one can explain what changed." Hype +35, Revenue +$25K... / Adopt AI: "Adopted AI. Engineers now..." Hype +25, Revenue +$50K, Tech Debt +10, Happiness -5 / Typical startup management now available as tools.
**Shows.** Screenshot of a satirical "AI CEO Simulator" web dashboard with company metric cards (cash, revenue, headcount, happiness, tech debt, incidents, hype), a board-decisions panel with clickable buttons like "Adopt AI" and "Pivot to Agents", and an activity log recording the comedic consequences of each decision — used as a demo app instrumented with WebMCP tools, captioned "Typical startup management now available as tools."

## Slide 11 — One prompt can fire half the company
**Text.** One prompt can fire half the company / ONE PROMPT → PLAN → MULTIPLE CALLS → CONSEQUENCES / One sentence → several tool calls → unpredictable outcome
**Shows.** Dark teal slide with a four-stage horizontal arrow chain (One Prompt → Plan → Multiple Calls → Consequences), the final arrow and word in orange to flag risk, illustrating how a single natural-language instruction can cascade into many unreviewed tool calls in the demo simulator.

## Slide 12 — We just changed the trust model
**Text.** We just changed the trust model / HUMAN UI — user chooses an explicit action / vs. / AGENT-MEDIATED — intent → interpret → plan → select tool(s) → execute
**Shows.** Cream slide with two contrasted boxes: a light green "Human UI" box with a single short statement, versus a dark teal "Agent-mediated" box listing a five-step vertical chain (intent, interpret, plan, select tool(s), execute) with "execute" highlighted in orange as the risky final step.

## Slide 13 — Don't give your agent a loaded gun
**Text.** Don't give your agent a loaded gun / MINIMUM CAPABILITY — Narrow tools. Narrow permissions. / VALIDATE EVERYTHING — Agent output is untrusted input. / CONFIRM CONSEQUENCES — Keep humans in the loop. / ENFORCE AUTHORIZATION — Agent ≠ extra privileges. / Capabilities don't replace permissions.
**Shows.** Dark teal slide with four labeled principles each marked by a colored vertical bar (teal for the first three, orange for the fourth "Enforce Authorization"), followed by a bordered callout box with the closing maxim "Capabilities don't replace permissions."

## Slide 14 — Is this the future of frontend?
**Text.** Is this the future of frontend? / WEB FOR HUMANS → WEB FOR HUMANS + AGENTS / Maybe not the final destination. But possibly a bridge.
**Shows.** Cream slide with "Web for humans" in plain text on the left, an arrow pointing to a dark teal highlighted box reading "Web for humans + agents" on the right, and a two-line closing caveat below in teal.

## Slide 15 — Closing: Stop making agents guess
**Text.** STOP making agents guess. / Build the web for its next kind of client.
**Shows.** Dark teal closing slide matching the title slide's style (diagonal lighter-teal stripe on the right), with a large QR code presumably linking to the speaker's materials or the demo repo, and no other text beyond the closing statement.
