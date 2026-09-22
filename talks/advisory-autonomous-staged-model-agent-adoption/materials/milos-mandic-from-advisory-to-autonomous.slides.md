---
title: "From Advisory to Autonomous: A Staged Model for Agent Adoption"
speakers: [Milos Mandic]
session_id: 22ac6e1508fb4cbe2c66b4d0c27bdc87
kind: slides
deck: milos-mandic-from-advisory-to-autonomous.pdf
slides: 14
---

# From Advisory to Autonomous: A Staged Model for Agent Adoption — slides

**Milos Mandic**

*Friday 18 September 2026, 15:35, G106 + G107 — Human-Agent Collab track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`milos-mandic-from-advisory-to-autonomous.pdf`](milos-mandic-from-advisory-to-autonomous.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** AGNTCON + MCPCON EUROPE · AMSTERDAM · 18 SEPTEMBER 2026 / FROM ADVISORY TO AUTONOMOUS / A staged model for agent adoption, and what happens when you skip a stage / Milos Mandic | Forward Deployed Engineer | fdehub.org / FDE Hub
**Shows.** A dark title card with a triple-chevron ">>" logo top-left in orange, the conference/date line above the bold white two-line title, a grey subtitle below an orange underline, and a footer bar with the speaker's name/role/site on the left and the "FDE Hub" wordmark on the right.

## Slide 2 — The setup
**Text.** THE SETUP / A wholesaler. Sales order processing. A story from my time at Lleverage. / Orders arrive by email, in every format a customer can invent. PDFs, spreadsheets, photos of handwritten notes. A team of four reads them, checks them, and keys them into the ERP. All day. / Communicative customer. Access to the mailbox and the ERP in days, not weeks. Eval set of 100+ real orders. Passed. / Working agent in three weeks. Into production. Everyone happy.
**Shows.** A light card with an orange left border holding the case-study narrative, split by a thin divider into a "problem" paragraph and a "setup/result" paragraph, with the final sentence bolded in orange as a positive-sounding cliffhanger.

## Slide 3 — Three weeks to build, three months before trusted
**Text.** WHAT HAPPENED NEXT / Three weeks to build. Three months before anyone trusted it. / The operators found the wrong orders. Everything got checked by hand after that.
**Shows.** A dark statement slide: the first line in white, the much larger second line in orange, with a grey explanatory sentence beneath — the talk's central twist, that a fast build did not translate into fast trust.

## Slide 4 — Why the gap exists
**Text.** WHY THE GAP EXISTS / 01 Probabilistic software — It does what it thinks you meant. People feel that. / 02 Years of intuition — They want to see it survive the edge cases first. / 03 Fear of replacement — No upside for the person inside the loop. / 04 The 100% illusion — "We don't make mistakes." One AI error proves the point.
**Shows.** Four equal-width white cards, each topped with an orange rule and numbered 01–04, laying out four human/organizational reasons adoption stalls even after a working build.

## Slide 5 — The agent doesn't say "not sure"
**Text.** THE UNKNOWN UNKNOWNS / The agent doesn't say "not sure". It says "done" and proceeds. / 100% — on an eval set of 100+ real orders / ~200 — orders a day in production. The evals cannot cover every case that walks in. / 0 — ways to know which ones fell outside the evals without a human reading the original / Checks after the fact catch some of it: totals, dates, known customers. They cannot check completeness. Seven line items extracted. Were there eight? Only the original knows, and only a human is reading it.
**Shows.** A dark slide with the second headline sentence in large orange text, followed by three big statistic call-outs (100%, ~200, 0) in dark boxes, each with a short caption — illustrating how a perfect eval score hides the real-world completeness problem described in the paragraph beneath.

## Slide 6 — The cost of a mistake sets the bar
**Text.** THE COST OF A MISTAKE SETS THE BAR / FINANCE — A wrong invoice: thousands of euros — Tolerance for error is effectively zero. Every edge case matters. Every field gets verified. Full autonomy needs a mountain of evidence. / WHOLESALE — A wrong delivery address: tens of euros — Bad, but recoverable. The threshold for acceptable risk is higher, so the stages can move faster. / cost per error × error rate × volume = the evidence you need before each step / Ask in week one. The answer sets the pace of everything after it.
**Shows.** Two white cards contrasting Finance and Wholesale error costs, followed by a dark formula bar spelling out "cost per error × error rate × volume = the evidence you need before each step" in monospace text, with the equation's result highlighted in orange.

## Slide 7 — The four stages
**Text.** THE FOUR STAGES / STAGE 01 Advisory — The agent observes, analyses, suggests. Humans do all the work. A second opinion they can ignore. Sales orders: the agent reads the email and proposes the order. The operator keys it in themselves. — Goal: exposure / STAGE 02 Semi-autonomous — The agent drafts. A human approves before anything happens. Sales orders: the agent creates the order in draft. The operator reviews, edits, releases. — Where most projects spend longest / STAGE 03 Enhanced autonomy — The agent executes routine cases. Humans own exceptions and edge cases. Sales orders: clean orders booked automatically. Anything unusual queued for a human. — The agent has earned the routine / STAGE 04 Full autonomy — The agent runs end to end. Humans monitor and intervene rarely. Sales orders: every order booked. A dashboard watched. Rules owned by a named person. — Earned, not given / Every transition needs evidence and buy-in. From the operators, not just the sponsor.
**Shows.** Four equal white cards, each topped with an orange rule and labelled Stage 01–04, describing the general behaviour and the concrete sales-order example at each autonomy stage, followed by a dark closing bar emphasizing that operator buy-in (not just sponsor approval) is required at each transition.

## Slide 8 — In the model's terms
**Text.** IN THE MODEL'S TERMS / We shipped at stage three. The operators had never seen stages one and two. / 01 Skipped stages one, two and four. / 02 Stepped back to stage two. Not to zero. / 03 Closed the loop: released orders compared with proposals, continuously. / You get one chance, maybe two.
**Shows.** A dark slide retelling the opening case study in terms of the four-stage model just introduced: the first line in white, the consequence line in large orange text, followed by three numbered remediation steps and a terse closing warning in monospace grey text.

## Slide 9 — The gates
**Text.** THE GATES / STAGE | THE AGENT MAY | THE HUMAN DOES | MOVE ON WHEN / 01 Advisory | Read the mailbox. Propose the order. No writes. | Keys the order in. Compares it with the proposal. | Operators agree with the proposal on more than 90% of a 100-order batch. The feedback loop is live and answered daily. / 02 Semi-autonomous | Create the order in draft. | Reviews, edits, releases. | Edit rate below 5% over four weeks. Zero leadership-visible failures. Eval set expanded with every production edge case found. / 03 Enhanced | Book clean orders. Queue the rest. | Works the exception queue. Spot-checks the clean ones. | Exception rate stable. Queue cleared within SLA. Spot-check accuracy holds above the cost-of-error threshold. Escalation path exercised, not just documented. / 04 Full | Book every order. | Watches the dashboard. Owns the rules. | Monitoring in place. A named operator owns changes to the agent's rules. Drift caught by the system before an operator notices it. / Thresholds scale with your cost of error. Finance moves slower than wholesale, on purpose.
**Shows.** A four-row table (one row per stage) with columns for what the agent may do, what the human does, and the measurable criteria for advancing to the next stage — turning the four stages from slide 7 into concrete, checkable exit gates.

## Slide 10 — Autonomy is a permission set
**Text.** WHERE THE PROTOCOL FITS / Autonomy is a permission set. Not a model setting. / STAGE — which tools are in the agent's set. Reads only, then a draft write, then a booked write. / GATE — what sits on the write call. A human release, then deterministic checks with a human queue, then monitoring. / PROTOCOL — MCP, APIs, or a mix. The integration layer gives the agent doors. The trust ladder decides which ones it may walk through, and when.
**Shows.** A dark slide with the second sentence in large orange text, followed by three labelled paragraphs (Stage, Gate, Protocol) explaining how tool access, write-approval gating, and the integration protocol (MCP/APIs) map onto the staged trust model.

## Slide 11 — Every deployment since
**Text.** EVERY DEPLOYMENT SINCE / 01 Stages are the plan, not the recovery / 02 Operators in from the first call / 03 Reaction to every action / The build didn't get faster. The road to trust got shorter.
**Shows.** Three white cards with orange top rules, numbered 01–03, stating short lessons applied to later deployments, followed by a dark closing bar with the pull-quote's second half highlighted in orange.

## Slide 12 — Live is not the end
**Text.** LIVE IS NOT THE END / The business keeps moving after the build. / The agent keeps acting on the version that existed the day it shipped. / Changes to what the agent believes go through the same gate as what it does. / proposed rule / evidence / diff / confirmation / Rules change. Context changes. Someone has to own what the agent knows and decide what is still true.
**Shows.** A light slide contrasting a headline/subhead on the left with a white card on the right (orange left border) explaining that belief updates need the same gating as action updates, listing a four-step change process (proposed rule, evidence, diff, confirmation) in monospace text, closed by a dark bar stating who must own it.

## Slide 13 — The trust gap isn't a bug
**Text.** The trust gap isn't a bug. It makes you earn the right to remove the human from the loop. / Instead of assuming it.
**Shows.** A dark closing-statement slide with the triple-chevron logo top-left, a large two-part headline (first line white, second line orange), and a short grey closing clause — reframing the whole talk's obstacle as a feature.

## Slide 14 — Closing
**Text.** Three weeks to build. Three months to trust. Plan for both. / The essays behind this talk: fdehub.org / Milos Mandic | Forward Deployed Engineer | fdehub.org | linkedin.com/in/mandicm / FDE Hub
**Shows.** A dark closing card matching the title slide's style: the triple-chevron logo top-left, a large three-line takeaway statement (final line "Plan for both." in orange), a pointer to further essays, and a footer bar with the speaker's contact details and the FDE Hub wordmark.
