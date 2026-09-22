---
title: "Agentic AI for Enterprise Mainframes: From Dead Code Elimination To Business Knowledge"
speakers: [Thamarai Selvi Ravi Kumar]
session_id: 230aa54bc7e263963b314433a6a9c116
kind: slides
deck: thamarai-agntconmcpcon-deck.pdf
slides: 14
---

# Agentic AI for Enterprise Mainframes: From Dead Code Elimination To Business Knowledge — slides

**Thamarai Selvi Ravi Kumar**

*Thursday 17 September 2026, 16:20, G104 + G105 — Reliable Agents track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`thamarai-agntconmcpcon-deck.pdf`](thamarai-agntconmcpcon-deck.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Agentic AI for Enterprise Mainframes
**Text.** Agentic AI for Enterprise Mainframes: From Dead Code Elimination to Business Knowledge / Thamarai Selvi Ravi Kumar / Mainframe Engineer · Legal & General
**Shows.** Title card with white background and a green wave/curve graphic across the lower half; the Legal & General (L&G) umbrella logo top-right; speaker name and role in white text on the green band at the bottom.

## Slide 2 — One Step at a Time
**Text.** MY JOURNEY / One Step at a Time / 01 COBOL developer — Years of mainframe experience / 02 Curiosity about AI — "Could AI help me?" / 03 Learn Python — One new language / 04 Connect to APIs — SonarQube REST API / 05 Learn MCP — Model Context Protocol / 06 Build AI agents — Dead Code → Change → Lineage / 07 Evaluate output — 10 evaluators · 3 layers / 08 AI-enhanced developer — Mainframe expertise, amplified / THREE AGENTS BUILT ALONG THE WAY: Dead Code Agent — Remove unused code safely / Code Change Agent — Generate approved changes / Lineage Agent — Trace COBOL → DB2 lineage
**Shows.** An eight-step numbered timeline in two rows of four, each numbered circle (01–08, alternating blue and green) connected by a horizontal line and paired with a short milestone label, tracing the speaker's personal path from COBOL developer to AI-enhanced developer. A light-blue callout box beneath lists the three agents built along the way with a one-line description each.

## Slide 3 — Mainframe CI/CD
**Text.** DEVELOPMENT ENVIRONMENT / Mainframe CI/CD / From Mainframe to Cloud and Back — the delivery infrastructure our agents operate within / SOURCE OF TRUTH — KEPT ALIGNED VIA GIT–MAINFRAME SYNC / Mainframe — Source Control (SCM) ⇄ Git–Mainframe Sync ⇄ GitHub — Version Control / DELIVERY FLOW / IDE — Code Change → GitHub — Commit & CI/CD → Cloud Build — Build & Test → Mainframe — QA → Prod
**Shows.** Architecture diagram in two rows. Top row shows two boxes (Mainframe/SCM and GitHub/Version Control) linked bidirectionally by a "Git–Mainframe Sync" label, representing the source-of-truth relationship. Bottom row is a four-box left-to-right delivery pipeline (IDE → GitHub → Cloud Build → Mainframe) connected by arrows, showing how a code change flows from developer IDE through commit, build/test, to QA and production on the mainframe.

## Slide 4 — Understanding Legacy Applications
**Text.** THE PROBLEM / Understanding Legacy Applications / Dead code is more than clutter — it has concrete consequences / Slows Innovation — Developers must sift through irrelevant logic before making any change / Hides Business Logic — Real business rules become buried under layers of unused code / Misleads AI Tools — AI tools misinterpret the system when they process dead code as active logic / The Insight: "We had code that appeared to be unused, but removing code from a large mainframe application requires confidence."
**Shows.** Three red-outlined cards in a row, each with an emoji icon (snail, magnifying glass, robot) illustrating a consequence of dead code (slows innovation, hides business logic, misleads AI tools), followed by a green "The Insight" callout box with a quoted takeaway.

## Slide 5 — Dead Code Agent
**Text.** AGENT #1 / Dead Code Agent / An agent-based pipeline: from static analysis findings to safe code remediation / Static Analysis — SonarQube, Unreachable Code → MCP Tool Layer — Normalises findings via MCP servers → Analysis Agents — Dead Code, Unused SQL → Approval Gate — Human reviews → Code Change Agent — Executes safely / MCP in Simple Terms: "MCP became a bridge that allowed the AI agent to use tools and information from the dev environment — like a universal adapter."
**Shows.** A five-stage left-to-right pipeline diagram with icons (microscope, wrench, robot, raised hand, pencil) connected by arrows: Static Analysis → MCP Tool Layer → Analysis Agents → Approval Gate → Code Change Agent, each box captioned with its role. A green callout box beneath explains MCP in plain language as a "universal adapter."

## Slide 6 — The AI Did Not Get a Production Keyboard
**Text.** AGENT #2 — CODE CHANGE AGENT / The AI Did Not Get a Production Keyboard / AI recommends. Humans approve. AI executes. Humans verify. / 1 Dead Code Analysis Complete / 2 AI Recommendation Generated / 3 Human Reviews Recommendation / APPROVAL GATE — Human Decision / 4 Code Change Agent Executes / 5 Human Reviews Final Change / Before — Manual Process: Developer manually searches for dead code · Individual knowledge decides what's safe · Traceability evidence assembled manually across tools / After — AI + Human Control: AI analyses all modules systematically · HUMAN approves each recommendation · AI generates change with full traceability · HUMAN reviews the final modification
**Shows.** A five-step numbered process list on the left (culminating in an explicit human "Approval Gate" before execution), paired on the right with two stacked comparison boxes: a red "Before — Manual Process" box listing the old manual workflow's weaknesses, and a green "After — AI + Human Control" box listing the new workflow's human checkpoints around AI actions.

## Slide 7 — Dead Code Agent Cleans 14+ Years of Technical Debt
**Text.** DEAD CODE AGENT — DEEP DIVE / Dead Code Agent Cleans 14+ Years of Technical Debt / 3,097 lines · 7 production-critical files · 4 COBOL modules · 3 SQL copybooks · zero production incidents / 01 — Scan: SonarQube unreachable-code scan, PERFORM reference scan, SQL execution analysis, Comment-prefix validation / 02 — Analyse: 576 commented-code lines, 1,290 unreachable lines, 1,230 unused SQL lines, 18 orphaned SQL paragraphs, Confirm no references / 03 — Verify & Remediate: Human approval gate, Automated safe removal, Backup & rollback ready. Proof: Zero calls · zero executions · 4 clean batch jobs / 3,097 Lines removed / 7 Files remediated / 4 COBOL modules / 3 SQL copybooks / 0 Prod incidents / 100% Confirmed inactive
**Shows.** A three-stage pipeline (Scan → Analyse → Verify & Remediate) shown as three colour-coded boxes (grey, blue, green) connected by arrows, each listing its specific sub-steps and findings; below, a row of six large result numerals (3,097 / 7 / 4 / 3 / 0 / 100%) each labelled with what was measured, summarising the scale and safety of the cleanup.

## Slide 8 — Lineage Agent
**Text.** AGENT #3 / Lineage Agent / Turning legacy mainframe artefacts into traceable data lineage / "Where does this business data come from?" / "Which COBOL program updates this table?" / "Which DB2 table contains this information?" / "What business rule causes this value to change?" / Technical Artefacts — Programs, copybooks, feeds, DB2 tables ↓ AI-Assisted Extraction — Dependencies, data flows, transformations ↓ Context Files (Markdown) — Data lineage, traceability, field mappings ↓ Knowledge Space — AI Query Assistants · Natural language Q&A
**Shows.** Left side lists four representative questions the Lineage Agent answers, each marked with a red question-mark icon. Right side shows a vertical four-stage pipeline (Technical Artefacts → AI-Assisted Extraction → Context Files (Markdown) → Knowledge Space) connected by downward arrows, tracing how raw COBOL/DB2 artefacts become queryable business knowledge.

## Slide 9 — From Code to Conversations
**Text.** LINEAGE IN ACTION / From Code to Conversations / AI helps developers understand the COBOL application without manually searching across 13+ modules / Before — Navigate source code manually across 13+ modules · Specialists inspect program logic, dependencies · Knowledge stays local — depends on individuals · Impact analysis requires deep investigation · Searching COBOL, copybooks, SQL, tracing programs / After — Ask in natural language — get grounded answers · Stakeholders query AI assistants for behaviour · Knowledge becomes reusable across teams · Context files make discovery repeatable at scale · Field-level mappings deliver traceable data lineage / End-to-End Traceability: Input Context → Code Logic → Transformation → Output Context — every field traceable from DB2 source to JSON output
**Shows.** Two side-by-side comparison boxes (red "Before" and green "After") listing the manual-search workflow versus the AI-assisted natural-language workflow for understanding the COBOL application; a green banner beneath states the end-to-end traceability chain from DB2 source to JSON output.

## Slide 10 — AI Agent Traces Legacy COBOL → Modern Data Lineage
**Text.** LINEAGE AGENT — DEEP DIVE / AI Agent Traces Legacy COBOL → Modern Data Lineage / 134 fields · 33 DB2 tables · static COBOL analysis · verified against live DB2 and 27 QA records / 01 — Evidence: COBOL (13+ modules), Live DB2 (33 tables), QA JSON (27 records), MCP tool servers (×3) / 02 — Trace (~5 min): 1. Locate output field 2. Identify source module 3. Trace COBOL → DB2 4. Verify with live query 5. Compare with QA JSON / 03 — Triple Verification: COBOL path confirmed, Live DB2 query matched, QA JSON matched. Outputs: SQL · lineage evidence · field index / 134 Fields verified / 33 DB2 tables / 27 QA records / 0/27 QA mismatches / 10/10 Validated eval set / ~5 min Per trace
**Shows.** A three-stage pipeline (Evidence → Trace → Triple Verification) shown as colour-coded boxes with their sub-steps, followed by a row of six result metrics (134 / 33 / 27 / 0/27 / 10/10 / ~5 min) each labelled, quantifying the lineage agent's accuracy and speed.

## Slide 11 — Building an Agent Is Half the Job
**Text.** EVALUATION / Building an Agent Is Half the Job / "Knowing whether you can trust its output is the other half." / AI Agent → Phoenix + OTEL → 10 Evaluators → Score & Track → Human Approval / Human-governed loop: review traces → approve prompt/evaluator changes → re-run / EVALUATORS: CODE STRATEGY (5) — accuracy · completeness · hallucination · CVT · SQL / TRAJECTORY (2) — response completeness · branching awareness / DB2 OUTCOME (3) — column · CVT · rule live verification / PROMPT JOURNEY (same validation set): Baseline 5/10 / + Efficiency rules 7/10 / Over-simplified prompt 4/10 / + Hard constraints & output spec 10/10
**Shows.** A five-stage evaluation pipeline (AI Agent → Phoenix + OTEL → 10 Evaluators → Score & Track → Human Approval) with icons, plus a note on the human-governed feedback loop. Below, a green "Evaluators" box breaks down the 10 evaluators into three categories with weights (Code Strategy 5, Trajectory 2, DB2 Outcome 3), and a red "Prompt Journey" box shows a table of four prompt iterations scored against the same validation set, rising from 5/10 to 10/10 after adding hard constraints.

## Slide 12 — MCP: Connecting AI to the Tools
**Text.** ARCHITECTURE / MCP: Connecting AI to the Tools / The assistant calls governed MCP servers that expose approved tools and data / AI Assistant (Kiro IDE) / MCP Servers + Approved Tools / Dead Code Agent — SonarQube · Unreachable Code / Code Change Agent — COBOL · Programs · Copybooks / Lineage Agent — DB2 · CVT (Code-Value Tables) · SQL / COBOL DRIFT DETECTION — Lineage Stays Current: Prod Sync → GitHub Action → Drift Check (SHA-256) → Alert Report → Re-Trace
**Shows.** A layered architecture diagram: "AI Assistant (Kiro IDE)" at top connects down to a blue "MCP Servers + Approved Tools" bar, which in turn connects to three grey boxes below representing the three agents (Dead Code Agent, Code Change Agent, Lineage Agent) each with their associated data sources. A bottom row shows a five-step drift-detection pipeline (Prod Sync → GitHub Action → Drift Check (SHA-256) → Alert Report → Re-Trace) connected by arrows, ensuring lineage documentation stays current as COBOL changes.

## Slide 13 — What I Learned
**Text.** LESSONS / What I Learned / Start With What You Know — "Start with a problem you already understand." / Build Once, Reuse Many — Prompts and output structures designed to scale. / Treat Complexity as Value — Legacy logic reframed as knowledge to preserve. / Measure Everything — "If you can't measure the output, you can't trust it." / AI Amplifies Expertise — "The AI didn't replace me. It made my expertise more valuable." / The Mainframe Contains Decades of Business Knowledge: AI makes that knowledge easier to access, understand, and maintain.
**Shows.** Five grey cards in a row, each with an emoji icon (target, recycling symbol, gem, bar chart, handshake) above a bolded lesson title and a short quote or description; a green banner beneath states the overarching takeaway about mainframes containing decades of business knowledge.

## Slide 14 — Don't Leave the Mainframe. Bring AI to It.
**Text.** Don't Leave the Mainframe. / Bring AI to It. / "The best time to start was yesterday. The second best time is now." / Start with a problem you understand. / Learn one language. Try one API. / Build one tool, then one agent. / Evaluate every output. Keep learning. / Your mainframe experience isn't obsolete. / AI makes it more valuable. / KIRO · PYTHON · MCP · ARIZE PHOENIX · OPENTELEMETRY · SONARQUBE · GITHUB ACTIONS · DB2 · COBOL
**Shows.** Closing slide, white background, centred black headline ("Don't Leave the Mainframe.") with a green sub-headline ("Bring AI to It."), an italic motivational quote, a grey rounded box with a call-to-action checklist, and a small footer row of the tool/technology names used throughout the talk. The L&G umbrella logo appears top-right.
