---
title: "90 Days To Agentic Engineering"
speakers: [Thomas Schöne]
session_id: 570eef4043281bc527c2f99d51311ddf
kind: slides
deck: 90-days-to-agentic-engineering.pdf
slides: 42
---

# 90 Days To Agentic Engineering — slides

**Thomas Schöne**

*Thursday 17 September 2026, 16:20, Auditorium — Agentic Engineering track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`90-days-to-agentic-engineering.pdf`](90-days-to-agentic-engineering.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — 90 Days to Agentic Engineering
**Text.** PROJECT LIONS / 90 Days to / Agentic Engineering / From AI skepticism to productive, controlled agentic workflows / Thomas Schöne / Lead AI Architect / AGNTCon + MCPCon Europe 2026
**Shows.** Title card, light grey background with diagonal orange and grey stripes. An orange lion-head logo top-left beside "PROJECT LIONS". Large black/orange title text, speaker name and role beneath an orange rule.

## Slide 2 — My Turning Point
**Text.** MOTIVATION / 02 / My Turning Point / MY IMPLEMENTATION / Several / hours / AGENT IMPLEMENTATION / < 30 / minutes / The same ticket. / The agent had no knowledge of my solution. / Very beginning of agents. No MCP, skills or anything like that.
**Shows.** Two-column comparison: "My implementation" took "Several hours" vs. "Agent implementation" took "< 30 minutes" for the same ticket, large numerals in black and orange respectively, separated by a vertical divider.

## Slide 3 — Motivation quote (dark)
**Text.** MOTIVATION / 03 / "I spent five minutes looking at these AIs and immediately realized they were nonsense." / A visitor at an energy industry conference / Five minutes became the wrong test.
**Shows.** Dark slide with a large orange quotation mark, the quote in bold white text, attribution below in grey, and a highlighted orange takeaway line at the bottom.

## Slide 4 — Who Masters a Tool in Five Minutes?
**Text.** MOTIVATION / 04 / Who Masters a Tool in Five Minutes? / Excel / Photoshop / SAP / Jira / Git / IDE / Docker / Kubernetes / AutoCAD / Blender / Professional tools have to be learned. AI is no different.
**Shows.** Ten white circular badges in two rows of five, each labelled with a professional tool name (Excel, Photoshop, SAP, Jira, Git, IDE, Docker, Kubernetes, AutoCAD, Blender), making the visual point that no one masters any of these tools in five minutes either.

## Slide 5 — Firefox: The Bug That Waited 20 Years
**Text.** MOTIVATION / 05 / Firefox: The Bug That Waited 20 Years / 20 YEARS / A latent XSLT use-after-free bug / Human expertise — Defined the target, threat model and verification. / Agentic pipeline — Searched, tested and filtered at scale. / Reproducible proof — Produced a testcase—not just a plausible claim. / Mozilla fixed it in 2026 as part of an AI-assisted hardening pipeline.
**Shows.** Large orange "20" numeral beside "YEARS" and the bug description. Below a horizontal rule, three white cards with coloured left-edge accents (black, orange, green) titled Human expertise, Agentic pipeline, Reproducible proof, laying out how human-defined scope plus an agentic search pipeline produced a reproducible security testcase.

## Slide 6 — Key insight (dark)
**Text.** MOTIVATION / 06 / KEY INSIGHT / With clear direction and verification, they turn expert methods into faster, scalable work.
**Shows.** Dark slide, small orange "KEY INSIGHT" label over an orange underline, large bold white statement filling the middle of the slide.

## Slide 7 — The Team Behind the Journey
**Text.** JOURNEY / 07 / The Team Behind the Journey / 4 / PEOPLE / Product owner + developers / Almost no prior AI experience / Occasional experiments with ChatGPT
**Shows.** Large orange "4" numeral labelled "PEOPLE" on the left; on the right, three lines describing the team's composition and their limited prior AI experience.

## Slide 8 — Starting Point: Day 1
**Text.** JOURNEY / 08 / Starting Point: Day 1 / Experience on one side. Uncertainty across the team. / "AI hallucinates." / "I could do it faster myself." / "How do I know the code is correct?" / "What may the AI see or change?"
**Shows.** Four white cards, each with an orange bullet dot, containing a quoted objection or concern raised by team members at the outset, arranged in a 2x2 grid.

## Slide 9 — Goal for Day 90
**Text.** JOURNEY / 09 / Goal for Day 90 / Not this: / More tools / Maximum autonomy / Replacing people / Instead: / Repeatable workflows / Visible verification / Sensible boundaries / Measurable value / Autonomy is earned trust.
**Shows.** Two-column list, "Not this" (red heading) versus "Instead" (green heading), separated by a vertical rule, with a black banner at bottom highlighting the takeaway "Autonomy is earned trust."

## Slide 10 — Journey
**Text.** THE JOURNEY / 10 / Journey / How do we turn one developer's breakthrough into a workflow the whole team can trust? / DAY 1 — Skepticism / DAY 30 — Safe experiments / DAY 60 — Shared patterns / DAY 90 — Productive workflows / Scale trust before you scale autonomy.
**Shows.** A horizontal timeline with four circular milestones connected by a grey line, labelled Day 1, Day 30, Day 60, Day 90; the first three circles are outlined orange (empty), the last is filled solid orange, showing progression from Skepticism to Productive workflows.

## Slide 11 — Make Failure Cheap
**Text.** DAYS 1–30 / 11 / Make Failure Cheap / 1 Small tasks / 2 Visible results / 3 Human approval / Early wins must be easy to verify—and cheap to reverse.
**Shows.** Three numbered cards in a row (1, 2, 3), the first two white, the third ("Human approval") filled solid orange to emphasise it as the key final step.

## Slide 12 — How Do We Stay in Control?
**Text.** CONTROL / 12 / How Do We Stay in Control? / 01 How do I get AI to do what I actually want? / 02 How do I reliably verify what it has done? / Direction and verification—not magic.
**Shows.** Two white cards side by side, numbered 01 and 02 with orange and black left-edge accents respectively, posing the two central control questions; orange takeaway line below.

## Slide 13 — UserPref: Requirements and Context
**Text.** CONTROL / 13 / UserPref: Requirements and Context / A small backend that keeps frontend preferences consistent across devices. / TICKET / What to store / Selected language / Widget configuration / PROJECT WIKI / Project architecture / Context for implementation / With the relevant context, implementation became straightforward.
**Shows.** Two-column list contrasting what came from the ticket (requirements: what to store, selected language, widget configuration) versus what came from the project wiki (architecture, implementation context), illustrating a real example task ("UserPref").

## Slide 14 — Trust Started Inside the IDE
**Text.** CONTROL / 14 / Trust Started Inside the IDE / Same IDE / Visible diff / Existing tests / Developer control / Adoption accelerated when AI stopped being a separate destination.
**Shows.** A left-to-right flow of four white/orange boxes connected by arrows: Same IDE → Visible diff → Existing tests → Developer control (highlighted orange), with a black banner below stating the adoption insight.

## Slide 15 — The Prototype Was Too Convincing
**Text.** CONTROL / 15 / The Prototype Was Too Convincing / What I meant — "A two-minute prototype." / What the customer saw — "The requirement is already implemented." / If it looks finished, people assume it is finished.
**Shows.** Two white cards side by side contrasting the presenter's intent versus the customer's misinterpretation of a quick prototype, with an orange takeaway line below.

## Slide 16 — When an Agent Is Convincingly Wrong
**Text.** CONTROL / 16 / When an Agent Is Convincingly Wrong / Plausible is not the same as correct. / Agent — "Task completed." / ≠ / Reality — Tests, diff and requirements decide. / Trust comes from making failures reliably visible.
**Shows.** Bold orange headline stating plausibility isn't correctness; two cards ("Agent" says task completed vs. "Reality" — tests/diff/requirements decide) separated by a "≠" symbol; black banner takeaway at bottom.

## Slide 17 — Vibe Code to Learn. Engineer to Ship.
**Text.** CONTROL / 17 / Vibe Code to Learn. Engineer to Ship. / DISCOVERY / Explore idea → Vibe-coded UI → Concrete feedback / DELIVERY / Agreed direction → AGENTS.md + Skills → Tests + Review → Production / The prototype answers what to build—not how production should be built.
**Shows.** Two horizontal flow diagrams with arrows: a Discovery row (Explore idea → Vibe-coded UI [highlighted orange] → Concrete feedback) and a Delivery row (Agreed direction → AGENTS.md + Skills → Tests + Review → Production [highlighted orange]), showing discovery and delivery as separate, differently-governed tracks.

## Slide 18 — What could we safely delegate? (dark)
**Text.** DELEGATION / 18 / We had a way to check the work. / What could we safely delegate? / With clear boundaries and human review.
**Shows.** Dark section-transition slide with a bold orange question as the visual focus, white supporting lines above and below.

## Slide 19 — A chatbot answers.
**Text.** DELEGATION / 19 / A chatbot answers. / An agent works toward an outcome.
**Shows.** Nothing beyond the text; two short statements separated by a horizontal rule, the second in bold orange for contrast.

## Slide 20 — What Is an Agent?
**Text.** DELEGATION / 20 / What Is an Agent? / A model that directs its own process and tool use to achieve a goal. / Plan → Act → Observe → Adjust → Repeat / The loop matters more than a single answer.
**Shows.** A black definition banner above a horizontal loop diagram of five circles connected by orange arrows: Plan, Act, Observe, Adjust, and Repeat (the last filled solid orange, looping back conceptually to Plan).

## Slide 21 — The Question Behind the Objection
**Text.** REPEATABILITY / 21 / The Question Behind the Objection / "By the time I've explained it to the AI, I could have done it myself." / WHAT IS ACTUALLY MISSING? / 01 Does the agent have the context it needs? / 02 Is the goal specific enough? / 03 Have we defined what "done" means?
**Shows.** A large orange question-mark icon beside the quoted objection in bold; below a rule, a numbered list of three diagnostic questions.

## Slide 22 — You Are Not Explaining It for the Agent
**Text.** REPEATABILITY / 22 / You Are Not Explaining It for the Agent / CONTEXT IS SHARED INFRASTRUCTURE / It already has to exist for everyone who joins the work. / Tickets — What needs to change. / Wikis — How the system works. / Decisions — Why it works that way. / If missing context can be misread, fix the documentation process. / The agent exposes the gap. It did not create it.
**Shows.** Three white cards with coloured left-edge accents (orange, black, green) labelled Tickets, Wikis, Decisions, each with a one-line description; a black banner beneath states the fix, and an orange line below reframes the agent as revealing rather than causing the documentation gap.

## Slide 23 — How Do We Repeat What Works?
**Text.** DAYS 31–60 / 23 / How Do We Repeat What Works? / If it worked twice, we stopped treating it as a personal trick. / Instructions → AGENTS.md → Skills → Templates → Tests / Repeatability turns a demo into engineering practice.
**Shows.** A left-to-right flow of five white/orange boxes connected by orange arrows: Instructions, AGENTS.md, Skills, Templates, Tests (highlighted orange as the endpoint), illustrating the progression from ad hoc instruction to formal test-backed practice.

## Slide 24 — What Is a Skill?
**Text.** REPEATABILITY / 24 / What Is a Skill? / A reusable package that teaches an agent how to perform a specific task. / Instructions + Resources + Scripts / The agent loads the right skill when the task needs it.
**Shows.** A black definition banner above three boxes (Instructions highlighted orange, Resources, Scripts) joined by plus signs, showing the three components that make up a "skill".

## Slide 25 — Skills Need a Trust Boundary
**Text.** REPEATABILITY / 25 / Skills Need a Trust Boundary / RISKS / Hidden instructions / Unsafe scripts / Excessive permissions / Data leakage / Unmaintained code / APPROVAL PATH / Need → Propose → Review → Internal repo → Approved use / Only skills from the internal repository may be used.
**Shows.** A grid of five pill-shaped risk labels under "Risks", and below it a five-step approval-path flow diagram (Need → Propose → Review → Internal repo → Approved use, last step highlighted orange) connected by green arrows, with a black banner enforcing the internal-repo-only rule.

## Slide 26 — What Is MCP?
**Text.** MCP / 26 / What Is MCP? / MCP / Model Context Protocol / An open standard that lets AI applications use tools and data from other systems. / Examples: read a wiki page or update a Jira ticket.
**Shows.** Nothing beyond the text; large orange "MCP" wordmark above its expansion and definition, with two concrete usage examples.

## Slide 27 — How Can the Agent Use Our Systems?
**Text.** MCP / 27 / How Can the Agent Use Our Systems? / EXAMPLE TASK / Implement the ticket and update the project wiki. / MCP connects AI applications to external systems. / Agentic application → MCP → Tools · Data · Workflows (one governed interface) / The skill describes the procedure. MCP connects the systems.
**Shows.** A black banner statement above a three-box flow diagram with orange arrows: Agentic application (orange) → MCP → Tools/Data/Workflows box labelled "one governed interface," illustrating MCP as the single governed connector between the agent and external systems.

## Slide 28 — Documentation Joined the Development Loop
**Text.** MCP / 28 / Documentation Joined the Development Loop / BEFORE / Build → Finish → Maybe document later / WITH AN AGENT / Build → Verify → Document / The documentation update stays connected to the ticket.
**Shows.** Two horizontal three-step flows stacked for comparison: the grey "Before" flow ending in "Maybe document later," and the "With an agent" flow ending in "Document" (highlighted orange), showing documentation moving from an afterthought to a required loop step.

## Slide 29 — My Agent Also Does Timesheets
**Text.** MCP / 29 / My Agent Also Does Timesheets / ME — 09:00–11:30 — Project One. / AI — Logged 2h 30m in Jira. / ME — 11:30–14:00 — Project Two. / A USEFUL BONUS / No forms. No timers. No Friday afternoon archaeology.
**Shows.** A mock chat/message thread on the left showing the user reporting time blocks and an orange "AI" bubble confirming it logged 2h30m in Jira between them; on the right, a bold statement of the benefit (no manual timesheet forms).

## Slide 30 — How Does the Agent Find Internal Knowledge?
**Text.** RAG / 30 / How Does the Agent Find Internal Knowledge? / Retrieval-Augmented Generation gives a model relevant external knowledge at runtime. / Question → Retrieve knowledge → Add context → Answer / Which project decisions matter for this ticket?
**Shows.** A black definition banner above a four-box flow diagram connected by orange arrows: Question → Retrieve knowledge (highlighted orange) → Add context → Answer.

## Slide 31 — A Typical RAG Flow
**Text.** RAG / 31 / A Typical RAG Flow / PREPARE KNOWLEDGE / Sources → Clean + split → Embed + index / ANSWER / Question → Retrieve → Filter → Add context → Generate / The model is not retrained. The prompt receives better evidence.
**Shows.** Two horizontal flow diagrams stacked: a "Prepare knowledge" row (Sources → Clean + split → Embed + index, last box orange) and an "Answer" row (Question → Retrieve → Filter → Add context → Generate, last box orange), connected by orange and green arrows respectively, representing the offline indexing versus runtime query stages of RAG.

## Slide 32 — RAG Is Dead.
**Text.** RAG / 32 / RAG IS DEAD. / Or is naïve "retrieve five chunks and hope" RAG dying? / The need for internal context is growing—not shrinking.
**Shows.** Nothing beyond the text; large bold orange headline "RAG IS DEAD." underlined, followed by a rhetorical reframing question and a grey takeaway line.

## Slide 33 — We Introduced RAG - Not a RAG Platform
**Text.** RAG / 33 / We Introduced RAG - Not a RAG Platform / WE DID NOT BUILD A SEPARATE PLATFORM / Ingestion → Chunking → Embeddings → Dedicated vector index / WE INTRODUCED / Retrieval-augmented workflows / Flagship model + agent + governed wiki access / RAG is the pattern. We did not need to own every layer.
**Shows.** A crossed-out-style red heading and flow (Ingestion → Chunking → Embeddings → Dedicated vector index) representing the platform they chose not to build, above a black box describing what they introduced instead: "Retrieval-augmented workflows" built from flagship model + agent + governed wiki access.

## Slide 34 — RAG Retrieves. MCP Connects. The Agent Acts.
**Text.** KNOWLEDGE + TOOLS / 34 / RAG Retrieves. MCP Connects. The Agent Acts. / RAG — What internal evidence do we need? / MCP — Where can we find it—and what can we do? / Agent — Do we have enough context to continue? / The ticket brings knowledge, tools and verification into one workflow.
**Shows.** Three white cards with coloured left-edge accents (orange, black, green) labelled RAG, MCP, Agent, each posing the guiding question that component answers, summarising how the three pieces combine around a single ticket.

## Slide 35 — Scale Trust, Not Just Usage
**Text.** DAYS 61–90 / 35 / Scale Trust, Not Just Usage / More users were not enough. / We needed shared guardrails. / Trusted skills — Approved, versioned and owned. / Controlled tools — Scoped access through MCP. / Reviews — Diffs, tests and human approval. / Ownership — Someone maintains the system.
**Shows.** Four white cards with orange/black/green/orange left-edge accents in a row, labelled Trusted skills, Controlled tools, Reviews, Ownership, each with a short description of the guardrail.

## Slide 36 — Give Autonomy a Risk Budget
**Text.** GOVERNANCE / 36 / Give Autonomy a Risk Budget / ROLLBACK / IMPACT → / More freedom — Low impact · Easy rollback / More approval — High impact · Hard rollback
**Shows.** A 2D quadrant-style chart with axes labelled "Rollback" (vertical) and "Impact →" (horizontal). A green box "More freedom" sits at low impact/easy rollback (bottom-left area), and a red box "More approval" sits at high impact/hard rollback (upper-right area), illustrating a risk-based policy for how much autonomy to grant an agent.

## Slide 37 — Stop, Rework, or Standardize
**Text.** DECISIONS / 37 / Stop, Rework, or Standardize / STOP — No reliable value. / REWORK — Valuable, but unsafe or inconsistent. / STANDARDIZE — Repeatable and verifiable. / Not every experiment deserves to become infrastructure.
**Shows.** Three white cards with red, orange and green left-edge accents labelled Stop, Rework, Standardize, each with a short criterion, framing a triage decision for agentic experiments.

## Slide 38 — Three Assumptions We Got Wrong
**Text.** LEARNINGS / 38 / Three Assumptions We Got Wrong / 01 · A better prompt is enough — Reliability came from the surrounding system. / 02 · A convincing prototype explains itself — It needs an explicit label and expectation setting. / 03 · Repetitive code is safest to generate freely — Repetition benefits most from constraints and validation.
**Shows.** Three stacked white cards with orange/black/green left-edge accents, each pairing a wrong assumption (bold) with the corrected learning (grey) below it.

## Slide 39 — Measure Outcomes, Not AI Activity
**Text.** MEASUREMENT / 39 / Measure Outcomes, Not AI Activity / Time saved / Rework avoided / Adoption / Workflow completion / More prompts are not a business outcome.
**Shows.** Four white/orange circular badges in a row labelled Time saved, Rework avoided, Adoption, Workflow completion (the last filled solid orange), presented as the metrics that matter instead of raw AI usage volume.

## Slide 40 — What I Would Do Differently
**Text.** REFLECTION / 40 / What I Would Do Differently / Integrate into the IDE earlier. / Label prototypes more clearly. / Create the trusted-skill path sooner.
**Shows.** A vertical stepped list of three black/orange circular markers connected by a thin vertical line, each paired with one retrospective lesson; the marker icons are small and not clearly legible beyond the bottom one being solid orange.

## Slide 41 — Close: The real question
**Text.** CLOSE / 41 / After five minutes, AI can look like nonsense. / The real question is whether we can learn to direct it—and verify what it does. / Good agents take work off our hands. / Good engineering teams remain in control.
**Shows.** Dark slide with the closing argument in white and bold orange text, the Project Lions lion-head logo reproduced large in the bottom-right corner.

## Slide 42 — Questions?
**Text.** CLOSE / 42 / THANK YOU FOR YOUR ATTENTION / Questions? / Thomas Schöne · Lead AI Architect
**Shows.** Dark closing card matching the title slide's palette, large orange "Questions?" headline under an orange rule, speaker name/role below, and the Project Lions lion-head logo in the bottom-right corner.
