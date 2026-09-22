---
title: "Most MCP Servers are Empty"
speakers: [David Golverdingen]
session_id: 306d9853ef4ecdc37894424a9b86ca9c
kind: slides
deck: most-mcp-servers-are-empty-golverdingen-mcpcon-europe-2026.pdf
slides: 19
---

# Most MCP Servers are Empty — slides

**David Golverdingen**

*Friday 18 September 2026, 15:35, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`most-mcp-servers-are-empty-golverdingen-mcpcon-europe-2026.pdf`](most-mcp-servers-are-empty-golverdingen-mcpcon-europe-2026.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Most MCP servers are empty / Seven months of production MCP at a 350-person company / David Golverdingen · Senior Engineer & MCP Architect, Warmtebouw / MCPCon Europe · 18 September 2026 / WARMTEBOUW.
**Shows.** A plain dark navy title slide with white and grey text, and the "WARMTEBOUW." wordmark logo in the bottom-right corner.

## Slide 2 — Someone who has never opened our ERP
**Text.** Someone who has never opened our ERP is going to ask it about some data. / What is going to tell the agent what it means? / February 2026
**Shows.** Nothing beyond the text — a plain dark slide with the key question underlined in green, and a date stamp bottom-left.

## Slide 3 — Transport, Auth, Meaning
**Text.** ✓ Transport — solved for everyone / ✓ Auth — solved for everyone / ? Meaning — different at every company, every tool, every field
**Shows.** A three-item vertical list with green checkmarks beside "Transport" and "Auth" and an orange question mark beside "Meaning" (shown in orange), visually marking the first two as solved problems and the third as the open one the talk addresses.

## Slide 4 — "Does this building have an energy label?"
**Text.** "Does this building have an energy label?" / /mcpMinimal · thin — description: no note on null — response: energielabel: null / /mcp · rich — description: INTERPRETATION: null = not registered — response: energielabel: null / could mean ? — no label / not registered / not applicable / not loaded yet / means — not registered / MODEL GUESS: "This building has no energy label." / GROUNDED: "None is registered for this address." / Same null. Nothing in the response says which.
**Shows.** A side-by-side comparison of two MCP tool responses to the same query, both returning `energielabel: null`. The left ("thin" server) has no explanation of what null means, leading the model to guess (shown in a red-outlined box with an incorrect confident answer); the right ("rich" server) documents that null means "not registered," leading to a correctly grounded answer (green-outlined box).

## Slide 5 — Where did the meaning go?
**Text.** Where did the meaning go? / Backend — business rules · derived values · normalisation → Frontend — labels · warnings · validation · visualisation / Systems of record — unchanged / Tools → Agent → ? — business rules · derived values [struck through] · normalisation · labels · warnings [struck through] · validation · visualisation [struck through] / The API could be dumb because the application was smart.
**Shows.** A diagram with "Systems of record" and "User" as unchanged endpoints on either side; in the old flow, "Backend" (business rules, derived values, normalisation) feeds "Frontend" (labels, warnings, validation, visualisation) via an arrow. Below, a new "Tools → Agent" path is shown with a red question mark and the same meaning-carrying items struck through in orange, showing that when tools replaced the frontend, that layer of meaning was silently dropped.

## Slide 6 — The agent isn't empty. The server is.
**Text.** The agent isn't empty. The server is. / "It works" may simply mean the model guessed correctly.
**Shows.** Nothing beyond the text — a plain dark slide with the thesis statement in large bold white/orange text, followed by a caution below a horizontal rule.

## Slide 7 — Why it works for you, and not for them
**Text.** Why it works for you, and not for them / low AI · fluency / × weaker model, no thinking / × thin server, no meaning — the only one you own / × imperfect data / → confidently wrong / pilots call this the error chain / Break one link and the odds drop.
**Shows.** A horizontal chain of four boxes multiplied together (low AI fluency × weaker model/no thinking × thin server/no meaning [highlighted green as "the only one you own"] × imperfect data) pointing via an arrow to the outcome "confidently wrong," illustrating an aviation-style "error chain" of compounding failure causes.

## Slide 8 — Warmtebouw stats with Thialf photo
**Text.** WARMTEBOUW. / 12 custom MCP servers in production, mostly non-developers / 97 tools we wrote the descriptions for / 8 MCP Apps that render the answers / ERP · BIM · Estimating · Building automation · Energy · External registers · IT / 350-person Dutch mechanical building services contractor. Five developers. / Thialf, Heerenveen
**Shows.** A photo of the interior of the Thialf speed-skating arena in Heerenveen (with the Olympic rings visible on the ice) on the left, paired on the right with three large statistics (12, 97, 8) and their captions, a row of domain-tag pills (ERP, BIM, Estimating, Building automation, Energy, External registers, IT), and a one-line company description.

## Slide 9 — We scaled capabilities, not agents
**Text.** We scaled capabilities, not agents / the person with the question — questions do not respect the org chart / ↓ the question ↑ the answer / one general-purpose model — no agent per domain / ↓↑ + meaning / MCP capabilities — access · meaning · bounded authority / ↓↑ / systems of record — ERP · BIM · estimating · building automation · energy · registers · unchanged / If the interface is empty, an agent on top of it is a guess with a job title.
**Shows.** A vertical stack of four boxes connected by up/down arrows: "the person with the question" at top, down to "one general-purpose model," down to a green-highlighted "MCP capabilities" box (labelled access · meaning · bounded authority, annotated "+meaning"), down to "systems of record" at the bottom — depicting a single shared model layer sitting atop many domain systems via a meaning-carrying MCP layer, rather than one agent per domain.

## Slide 10 — Who discovers the meaning?
**Text.** Who discovers the meaning? / THIN: L1 API wrapper — nobody. The agent reconstructs the domain itself / L2 Descriptive tool — the author, briefly / RICH DOMAIN: L3 Domain-aware — human in the lead / L4 Self-teaching — the agent, from the real data / THEN: PUTTING BACK THE REST OF WHAT THE APPLICATION DID / L5 Interactive — how it is shown · MCP Apps / L6 Safe write — how it is changed · guarded mutation / Level 4 is not more work than level 3. It's less, and better grounded.
**Shows.** A six-level maturity ladder (L1–L6) grouped into "thin" (L1–L2) and "rich domain" (L3–L6) tiers, each row naming who is responsible for discovering/encoding meaning at that level, with a green vertical bar marking the "rich domain" tier and a horizontal divider before L5/L6 marking a second phase ("putting back the rest of what the application did").

## Slide 11 — Introspective Context Engineering for MCP
**Text.** Introspective Context Engineering for MCP / SCAFFOLD — ship something thin, straight from the API docs / Examine — interrogate your own deployed tool, in a fresh context / Flag — every finding carries a confidence level / Validate — the agent settles what it can against the data / Encode — into the channel the model actually reads, then redeploy / Iterate — back to Examine. In production, telemetry picks the next gap / 3 to 4 times / after the loop: Validate — the expert. Only what the agent could not settle, then one more pass / HARDEN — tests, a findings log, once the loop stabilises / The spec gives you the shape. The data gives you the meaning.
**Shows.** A labelled process diagram: a "SCAFFOLD" starting step, then a five-step loop (Examine → Flag → Validate → Encode → Iterate) marked as repeating 3 to 4 times, followed by a final human "Validate (the expert)" step after the loop, and a "HARDEN" step at the bottom — the named methodology for building up tool documentation iteratively.

## Slide 12 — Every tool, same eight blocks
**Text.** Every tool, same eight blocks / before the call — WHEN TO USE · WHEN NOT TO USE · RELATED TOOLS / calling it — QUERY STRATEGY · RETURNS / after the answer — INTERPRETATION · ALERTS / and one more — FEEDBACK / a fixed template we grew into, not a design we started with / Three of those groups are needed at three different moments.
**Shows.** A four-row table grouping eight documentation fields into three timing phases (before the call, calling it, after the answer) plus a standalone "feedback" field, with a caption noting the template emerged organically rather than being designed upfront.

## Slide 13 — How do I know it's right?
**Text.** How do I know it's right? / Expert validation — the AI interviews the expert on what it flagged ~10% of the metadata / Full review — the expert reads the finished text, end to end / Field validation — the people whose data it is / You review. You don't author.
**Shows.** A three-row list of validation methods (Expert validation, Full review, Field validation) each with a short description, closing with a bolded principle that experts review the agent's output rather than write it themselves.

## Slide 14 — Every call carries what it was trying to find out
**Text.** Every call carries what it was trying to find out / "fault reports on the air handling unit, to judge whether the failures recur" / "whether a quote was raised after the inspection for the defective boiler" / "counting the subscription lines before fetching the full records" / "searching on description, because the project number returned no match" / "checking whether the create committed, before retrying, to avoid a duplicate" / "redacted (special-category server)" / one field: queryIntent / A log of calls becomes a log of questions.
**Shows.** Six quoted example intents (real logged reasons for tool calls, one greyed out as redacted for a special-category server) illustrating the contents of a single logged field called queryIntent, which captures why each call was made.

## Slide 15 — I built get_ticket to return a ticket
**Text.** I built get_ticket to return a ticket / read the whole ticket, at work-start ~23% / one section · one field · acceptance criteria ~26% / status & progress ~19% / verify a previous write ~16% / duplicate / scope triage ~11% / queryIntent, measured / They only asked for the whole thing because the whole thing was all I offered.
**Shows.** A five-row table breaking down logged queryIntent values into categories with their observed percentage share of calls to a single tool, showing that most calls were narrower requests than the tool's designed "return everything" behavior — evidence used to justify redesigning the tool.

## Slide 16 — Selective retrieval, Summaries, Alerts, Derived values, The write reports back
**Text.** Selective retrieval — one ticket, read twice, 24 seconds apart: 4 KB vs 265 KB. 67× cheaper, same information. / Summaries — the server computes them, instead of shipping rows for the model to add up. / Alerts — fire only when the condition applies. Conditional meaning, at zero catalog cost. / Derived values — the meaning arrives as a value, not as a warning. / The write reports back — 16% of calls were verifying a previous write. Now the write says what it did, and the call is gone. / Not prompt tuning. Interface engineering.
**Shows.** A five-item bulleted list (no visible slide heading in this screenshot) of concrete redesign techniques applied to the get_ticket tool, each with a orange bullet and a one-line rationale including a specific measured result (4 KB vs 265 KB, 67× cheaper; 16% of calls eliminated).

## Slide 17 — Not ideal. But it arrives.
**Text.** Not ideal. But it arrives. / BOUND TO THE TOOL | REACHES THE MODEL / description + input schema | ✓ | before the call / the response payload | ✓ | after the call / the output schema | ✓ | not as model context / server instructions | ✗ server-wide | client-dependent / a skill · a resource | ✗ nothing ties it | only if something fetches it / Bound is not the same as delivered. Today I have to choose where to lose.
**Shows.** A five-row comparison table checking whether each MCP mechanism (description+schema, response payload, output schema, server instructions, skill/resource) is bound to the tool and whether it reliably reaches the model, with green checks and red/orange X's showing gaps — especially that server instructions and skills/resources aren't guaranteed to reach the model even when "bound."

## Slide 18 — One string. Three moments.
**Text.** One string. Three moments. / WHY / WHY NOT to use this — before selection / HOW to call it, what matters — after selection / WHAT the result means — after the response / If the agent must know something before it can safely use a tool, should discovering that knowledge be optional? / binding fixes the staleness · automatic activation fixes the delivery
**Shows.** A three-row table mapping three types of tool-documentation content to the three moments in the tool-call lifecycle when each becomes relevant (before selection, after selection, after the response), followed by a rhetorical closing question and a two-part answer about binding and automatic activation.

## Slide 19 — Most MCP servers are empty of meaning (closing card)
**Text.** Most MCP servers are empty of meaning. / "What is going to tell the agent what it means?" / The interface has to. / An extracted demo repo, showing part of this: a skill that runs the loop on your server / the practitioner paper / example code / a thin and a rich MCP server on the same public API / these slides, as a PDF / davidgolverdingen.nl / linkedin.com/in/davidgolverdingen / github.com/DaveGold/mcp-metadata-demo
**Shows.** A closing slide restating the talk's thesis in orange/yellow at top, followed by a bulleted list of resources in the linked demo repo and the speaker's personal site and LinkedIn URL, paired with a large QR code on the right linking to the GitHub repo (github.com/DaveGold/mcp-metadata-demo).
