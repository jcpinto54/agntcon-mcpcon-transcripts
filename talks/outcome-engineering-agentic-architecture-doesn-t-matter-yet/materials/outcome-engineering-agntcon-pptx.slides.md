---
title: "Outcome Engineering: Why Your Agentic Architecture Doesn't Matter (Yet)"
speakers: [Kierra Dotson]
session_id: b3bd2b0999b7bf7a13dc033713015553
kind: slides
deck: outcome-engineering-agntcon-pptx.pdf
slides: 11
---

# Outcome Engineering: Why Your Agentic Architecture Doesn't Matter (Yet) — slides

**Kierra Dotson**

*Friday 18 September 2026, 10:55, G104 + G105 — Enterprise Adoption track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`outcome-engineering-agntcon-pptx.pdf`](outcome-engineering-agntcon-pptx.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** AGNTCON Amsterdam / 2026 / Outcome Engineering / Why Your Agentic Architecture Doesn't Matter(Yet) / Prepared by Kierra Dotson
**Shows.** A dark textured slide with large serif title text; "AGNTCON Amsterdam" top-left and "2026" top-right as small header labels, and "Prepared by / Kierra Dotson" in monospace type bottom-left.

## Slide 2 — As technology keeps advancing, the bottleneck keeps moving
**Text.** As technology keeps advancing, the bottleneck keeps moving. / 2022–23 Generate — Gen AI / ChatGPT — Can it produce something useful? / 2023–24 Ground — RAG + enterprise context — Can it know enough to be useful? / 2024–25 Act — Agents + tools — Can it take action reliably? / 2025–26 Coordinate — Agentic systems — Can it operate across a real workflow? / 2026+ Deploy — Forward Deployed Engineering — Can we get it out of the demo and into the business? / ??? / Every step added capability. Every step also added more to integrate, test, secure, observe and own.
**Shows.** A horizontal timeline with six circular nodes connected by a line, five labelled with year ranges and capability names (Generate, Ground, Act, Coordinate, Deploy) each with a one-line question underneath, and a final unlabeled node marked "???" highlighted with a glowing circle, representing an open, not-yet-named next stage.

## Slide 3 — The Agent Graveyard
**Text.** The Agent Graveyard / Where "good" agents go when they never become important enough to keep. / GREAT DEMO — Looks impressive / SHIPPED — Never adopted / PRODUCTION — No meaningful shift / TECHNICALLY SOUND — Still optional / AUTOMATED — Wrong bottleneck / 40%+ of agentic AI projects are forecast to be canceled by the end of 2027. / Built from capability • Detached from workflow • No meaningful business shift • No strategic anchor
**Shows.** A moody, foggy graveyard photo at dusk with five weathered tombstones in a row, each engraved with a project outcome label (Great Demo, Shipped, Production, Technically Sound, Automated) and a short cause of "death" beneath it, over a dark lakeside/forest landscape with a distant church spire.

## Slide 4 — Getting an AI system to production is only half the job
**Text.** Getting an AI system to production is only half the job. / PRODUCTION — Can we run this reliably? — Technical Viability — Integration • evals • security • observability • cost • failure handling / BUSINESS VALUE — Does it change something that matters? — Business Consequence — Capability • workflow • decision quality • revenue • margin • risk • capacity / Production proves viability. Value proves consequence.
**Shows.** Two bordered boxes connected by an arrow: left ("Production") lists technical viability concerns, right ("Business Value") lists business consequence concerns, framing production readiness and business value as two separate, sequential proofs.

## Slide 5 — The Build-Forward Default
**Text.** The Build-Forward Default / A request comes in. We start solutioning. / ASK — Request / use case / MODEL — Model + framework / TOOLS — Tools + context / ORCH — Orchestration / ARCH — Architecture / VALUE — Value? / The tech stack becomes more apparent....but what about the business case?
**Shows.** A horizontal chain of six circular nodes (ASK → MODEL → TOOLS → ORCH → ARCH → VALUE) connected by arrows, each labelled with a short caption beneath, illustrating the default engineering-led sequence where technical decisions are made well before business value is even questioned (the final node is literally "Value?").

## Slide 6 — Outcome Engineering (reversed chain)
**Text.** Outcome Engineering / Start with the business result. Engineer backward from there. / Business result — What must move? / Capability — What must we become better at? / Workflow — Where does it happen? / Decision — What should happen differently? / Context — What must the system know? / Architecture — What stack earns its place? / By the time you choose a stack, you should already know what the stack is there to change for the business.
**Shows.** A horizontal chain of six light-bordered boxes (Business result → Capability → Workflow → Decision → Context → Architecture) connected by short connector lines, each with a guiding question beneath, presenting the same six-step spine as slide 5 but reordered to start from business result and end at architecture — the inverse of the build-forward default.

## Slide 7 — Where strategy becomes architecture
**Text.** Where strategy becomes architecture / The missing work is turning business priorities into systems worth building. / Business says — increase revenue / reduce risk / improve margin / protect renewals / Engineering still has to answer — which workflow? / where is the bottleneck? / which decision changes? / what context is required? / what autonomy is safe? / what does success look like? / Only then do we architect — tools / permissions / integrations / human handoff / evals / monitoring / When teams skip this strategy layer, the architecture gets clearer than the objective.
**Shows.** Three connected boxes in sequence (Business says → Engineering still has to answer → Only then do we architect), each a bulleted list, showing the intermediate translation questions that must be answered between a business goal and an architecture decision.

## Slide 8 — Where engineer value moves
**Text.** Where engineer value moves / As the stack gets easier to access, value moves upstream. / Reusable stack — Models, Frameworks, Tools, Protocols, Infrastructure — easier to access / Differentiated judgment — problem framing, domain context, workflow understanding, adoption, decision design, measurable business impact — harder to copy / Durable advantage lives above the reusable stack.
**Shows.** Two bordered boxes connected by an arrow: left ("Reusable stack") lists commoditized technical layers marked "easier to access," right ("Differentiated judgment") lists judgment-based skills marked "harder to copy," arguing that engineer value is shifting from stack-building toward judgment.

## Slide 9 — If engineers don't write the code anymore, who are they?
**Text.** Santiago ✓ @svpino · 9/3/26 — A buttload of developers are going through a tough time right now. Their identity has always been tied to their ability to write code, so now they feel threatened by this new era where *anyone* can write code. If they don't write code anymore, who are they? I'm very pragmatic, and yet I've struggled with this too, so I totally understand how tough it must be for others. You'll hear from these people everywhere. They are the ones fighting with everything they've got against AI-generated code. But they must understand this is an uphill battle. Manually writing code is destined to disappear. There's no going back. / If engineers don't write the code anymore, who are they? / Code is getting cheaper. Judgment is getting more valuable. / Your value increasingly follows the quality of your judgment and the importance of the problems you solve. / The job is not protecting the mechanism. It is protecting the outcome.
**Shows.** A screenshotted X/Twitter post from Santiago (@svpino) about developer identity threatened by AI-generated code, quoted in full on the left, paired on the right with the speaker's own restated headline and thesis ("Code is getting cheaper. Judgment is getting more valuable.") plus a bolded closing line.

## Slide 10 — The Outcome Engineer's Checklist
**Text.** The Outcome Engineer's Checklist / Questions to ask before you start architecting the solution. / ✅ What outcome needs to move? / ✅ Where is the actual bottleneck? / ✅ What part of the workflow controls tha[t outcome]? / ✅ What has to get better for the business [...] / ✅ What proprietary context does the syste[m need] / ✅ Will this become harder to replace over [time]? / If shutting the system off would not make something important worse, it probably has not earned its place ye[t].
**Shows.** A light-background checklist slide with six checkbox items in two columns; the right-hand column and the closing callout box are cut off at the slide's right edge in this rendering, truncating several lines mid-word.

## Slide 11 — Don't architect the agent. Architect the advantage.
**Text.** Don't architect the agent. / Architect the advantage. / Build systems so embedded in how the business wins that turning them off becomes a risk. / Kierra Dotson — Executive AI Advisor to Enterprise Leaders | Turning AI Investment Into Enterprise Power,... / AGNTCon Amsterdam 2026 / Outcome Engineering
**Shows.** A closing slide with the two-line thesis statement in large serif type on the left, and on the right a business-card-style graphic with the speaker's headshot photo, name, title/tagline, and a QR code beneath it linking to her profile.
