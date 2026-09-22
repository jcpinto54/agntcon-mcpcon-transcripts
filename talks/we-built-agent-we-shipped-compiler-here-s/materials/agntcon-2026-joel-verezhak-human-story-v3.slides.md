---
title: "We Built an Agent, We Shipped a Compiler. Here's Why"
speakers: [Joel Verezhak]
session_id: a163cdaa47c9dbb24c6a3615aea9a1a7
kind: slides
deck: agntcon-2026-joel-verezhak-human-story-v3.pdf
slides: 12
---

# We Built an Agent, We Shipped a Compiler. Here's Why — slides

**Joel Verezhak**

*Thursday 17 September 2026, 16:55, G104 + G105 — Agentic Engineering track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agntcon-2026-joel-verezhak-human-story-v3.pdf`](agntcon-2026-joel-verezhak-human-story-v3.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Agentic AI Foundation / AGNTCon + MCPCon Europe / Where the agentic stack is being built. / Grafana Labs / We Built an Agent, We Shipped a Compiler. Here's Why. / Joel Verezhak | Observability Architect, Grafana Labs
**Shows.** A dark navy title slide with the AGNTCon + MCPCon Europe logo top-left and the Grafana Labs logo (orange/yellow swirl icon) top-right, large white title text, and a decorative row of coloured circuit-board-style lines and dots along the bottom edge — this footer decoration and conference branding recur on every slide of the deck.

## Slide 2 — Hi, I'm Joel
**Text.** Hi, I'm Joel. / Physics. IT. Observability. / Dad of three. / Where the agentic stack is being built.
**Shows.** A personal photo of the speaker (bearded man) taking a selfie outdoors with his wife and three young children, smiling, set against a blue sky with clouds — establishing the speaker's background and personal life alongside his career path (Physics → IT → Observability).

## Slide 3 — What we're here to help with
**Text.** What we're here to help with / Grafana Labs — Understand systems. Keep them reliable. / Observability Architects — Long-term technical partners / Customer outcomes — Progress that matters to them / Where the agentic stack is being built.
**Shows.** A three-step left-to-right flow diagram with icons: a monitor showing a line-chart (Grafana Labs), connected by an arrow to two overlapping person icons (Observability Architects), connected by an arrow to a rising bar chart (Customer outcomes) — illustrating how Grafana Labs' work flows through its architects to produce customer results.

## Slide 4 — What does success look like?
**Text.** What does success look like? / Why anything? — What needs to improve? / Why Grafana? — How can we help? / Why now? — Why does it matter now? / A shared plan / Where the agentic stack is being built.
**Shows.** Three question-and-subquestion columns (Why anything?, Why Grafana?, Why now?) each underlined, with bracket lines converging downward into a single highlighted box labelled "A shared plan" — framing the three questions the team's agent-built customer success plans need to answer.

## Slide 5 — I'll just add another rule
**Text.** I'll just add another rule. / Illustrative instruction document / 500 / lines of instructions / Same account. Ten attempts. / Six got the customer's stated target wrong. / 1 BIG SKILL (current) · 2 STRUCTURE · 3 ENGINE · 4 SMALL SKILL / Where the agentic stack is being built.
**Shows.** A stack of overlapping document icons with several lines highlighted in red/pink, symbolising an ever-growing monolithic instruction file, beside a large "500" stat with the caption "lines of instructions"; below, a stark test result stating that of ten attempts on the same account, six got the customer's stated target wrong. A four-step progress tracker at the bottom (Big Skill · Structure · Engine · Small Skill) shows "BIG SKILL" as the current stage — this tracker recurs on the following slides.

## Slide 6 — Let's give it some structure
**Text.** Let's give it some structure. / Python scripts. Agreed data. A judge. / Read → Organise → Draft → Check / It felt like gaining control. / 1 BIG SKILL · 2 STRUCTURE (current) · 3 ENGINE · 4 SMALL SKILL / Where the agentic stack is being built.
**Shows.** A four-box horizontal pipeline (Read, Organise, Draft, Check — the last box highlighted pink) connected by arrows, representing the team's move from one giant instruction file to a structured pipeline with Python scripts, agreed data formats, and a checking/judging step.

## Slide 7 — The wrong customer
**Text.** The wrong customer. / A few test accounts → hundreds of accounts. / Customer A / Customer B / Customer C / Draft for customer A / Internal draft. No customer received it. / 1 BIG SKILL · 2 STRUCTURE (current) · 3 ENGINE · 4 SMALL SKILL / Where the agentic stack is being built.
**Shows.** A diagram showing three labelled customer boxes (A, B, C) with coloured lines all converging into a single arrow feeding into one "Draft for customer A" box that lists all three colour-coded customers — illustrating a bug where, at scale, drafts for different customers got mixed into one output. A caption clarifies this was caught as an internal draft before reaching any customer.

## Slide 8 — Now it has a critic
**Text.** Now it has a critic. / The success plan engine / Draft → Critique → Revise (loops back to Draft and Critique) → Architect reviews / 1 BIG SKILL · 2 STRUCTURE · 3 ENGINE (current) · 4 SMALL SKILL / Where the agentic stack is being built.
**Shows.** A cyclical flow diagram: "Draft" arrows into "Critique" (highlighted pink), both "Draft" and "Critique" receive arrows back from a "Revise" box below them, and "Critique" also arrows forward to a person icon labelled "Architect reviews" — depicting an iterative draft/critique/revise loop before final human review.

## Slide 9 — Then we had to run it
**Text.** Then we had to run it. / Collaboration — Easy to run. Harder to contribute. / Providers — New provider. New module. More to maintain. / Claude API — Temperature: 0 — Incompatible with extended thinking. / I'm an OA. I have customers to look after. / 1 BIG SKILL · 2 STRUCTURE · 3 ENGINE (current) · 4 SMALL SKILL / Where the agentic stack is being built.
**Shows.** Three grey cards listing operational pain points of running the engine day-to-day: contribution friction, the maintenance cost of adding new model providers, and a specific Claude API incompatibility (temperature: 0 conflicting with extended thinking, marked with a red X and strikethrough), followed by a large personal statement emphasising the speaker's role as an Observability Architect (OA) with real customers depending on this.

## Slide 10 — Understand the customer first
**Text.** Understand the customer first. / BEFORE — Plan template → Find things to fill it / The first facts weren't always the important ones. / AFTER — Be curious. → Understand. → Open template. Write the plan. / Progressive disclosure: the template comes later. / 1 BIG SKILL · 2 STRUCTURE · 3 ENGINE · 4 SMALL SKILL (current) / Where the agentic stack is being built.
**Shows.** Two contrasted two/three-step flows: "BEFORE" shows a pink "Plan template" box arrowing to "Find things to fill it," which produced weak results; "AFTER" shows three blue boxes (Be curious → Understand → Open template, write the plan) reordering the process so the template is filled in only after genuine understanding — the "progressive disclosure" principle.

## Slide 11 — Back to a skill
**Text.** Back to a skill. / 54 / lines / One query. Human review. / Get the identity. Keep it. / Account A → Query → A's draft / New provider? Switch harness. / 1 BIG SKILL · 2 STRUCTURE · 3 ENGINE · 4 SMALL SKILL (current) / Where the agentic stack is being built.
**Shows.** A large "54" stat labelled "lines," contrasted against the earlier 500-line monolith, with the caption "One query. Human review."; beside it, a highlighted box titled "Get the identity. Keep it." shows a three-box flow (Account A → Query → A's draft) fixing the earlier customer-mixing bug, plus a note that swapping model providers now just means switching the harness rather than rewriting the skill.

## Slide 12 — Closing: stay curious
**Text.** Stay curious. Bring your team with you. / Where the agentic stack is being built.
**Shows.** A dark navy closing slide with large white text and a decorative diagram on the right: three small person icons (blue, pink, purple) connected by lines to a central document/list icon, echoing the deck's recurring team/collaboration visual motif, above the same coloured circuit-line decoration along the bottom edge used throughout the deck.
