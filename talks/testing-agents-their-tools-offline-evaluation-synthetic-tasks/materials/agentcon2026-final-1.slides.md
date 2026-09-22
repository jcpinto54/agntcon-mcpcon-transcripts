---
title: "Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments"
speakers: [Ksenia Bobrova]
session_id: 4511e26b5b7d543477af76bfcc8f685d
kind: slides
deck: agentcon2026-final-1.pdf
slides: 23
---

# Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments — slides

**Ksenia Bobrova**

*Friday 18 September 2026, 13:15, G104 + G105 — Evals & Testing track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agentcon2026-final-1.pdf`](agentcon2026-final-1.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Testing Agents and their Tools: / Offline Evaluation, Synthetic Tasks and A/B experiments / KSENIA BOBROVA / Senior Software Engineer / GitHub
**Shows.** A dark title slide with a vertical column of four rounded icon tiles on the left (a GitHub Octocat logo, a plain green square, a blue robot-head icon, and a plain pink/lavender gradient square), a green vertical divider line, the talk title in large white text, and a speaker card at the bottom with a headshot photo, name, role and company.

## Slide 2 — Same task, different approaches
**Text.** Same task – different approaches / Which one is "correct"?
**Shows.** Two photos of ragdoll-style cats caught mid-air in different falling/twisting poses, illustrating that two different approaches (agent behaviors) to the same task can look very different, raising the question of which is "correct."

## Slide 3 — Three layers of evaluation
**Text.** Three layers of evaluation / 1 MCP server evaluation — Measuring tool-selection performance across models. — isolated · deterministic / 2 Agent evaluation on synthetic tasks — Assign a task and compare the outcome to the expected one. — controlled · reproducible / 3 Online experimentation — Running A/B tests on real users, in production. — real traffic
**Shows.** Three numbered cards in a horizontal row, each with an icon (tuning fork, checkmark-box, balance scale), a colored left border (blue, purple, green) and a tag describing its evaluation style, connected by chevron arrows showing progression from offline/isolated testing to live production experiments.

## Slide 4 — Curated dataset for tool selection
**Text.** GITHUB MCP SERVER OFFLINE EVALUATION / Curated dataset for tool selection / EACH BENCHMARK ITEM CONTAINS: 1 Input — a request in natural language / 2 Expected tools — tools we expect to be called / 3 Expected arguments — arguments passed to each tool / Counting issues in a time period — INPUT: How many issues were created in github/github-mcp-server during April 2025? — EXPECTED TOOL: list_issues — EXPECTED ARGUMENTS: owner: github / repo: github-mcp-server / since: 2025-04-01T00:00:00Z / Merging a pull request — INPUT: Merge PR 123 in github/docs using squash merge with title "Update installation guide" — EXPECTED TOOL: merge_pull_request — EXPECTED ARGUMENTS: owner: github / repo: docs / pullNumber: 123 / merge_method: squash / commit_title: Update installation guide
**Shows.** A header summary bar defining the three parts of each benchmark item, followed by two example benchmark cards side by side, each showing a natural-language input request, the single expected tool name in a green-outlined box, and a code block of expected arguments as key-value pairs.

## Slide 5 — Pipeline stages
**Text.** GITHUB MCP SERVER OFFLINE EVALUATION / Pipeline stages / 1 Fulfillment — Run each benchmark across multiple models, recording which tools were called. — RECORDS: Invoked tools + the arguments supplied on every run. / 2 Evaluation — Process the raw outputs to compute metrics and scores. — METRICS · PER TOOL: Argument-match scores that grade tool-call correctness. / 3 Summarization — Aggregate dataset-level stats into the final evaluation report. — METRICS · WHOLE DATASET: Precision · Recall / Accuracy · F1-score
**Shows.** Three numbered pipeline-stage cards connected by chevron arrows (Fulfillment → Evaluation → Summarization), each with a description and a highlighted sub-box naming what it records or computes, tracing raw benchmark runs through to aggregate accuracy metrics.

## Slide 6 — Tool selection as classification?
**Text.** GITHUB MCP SERVER OFFLINE EVALUATION / Tool selection as... classification? / Reading the list_issues vs search_issues confusion / Benchmark set: 20 single-tool benchmarks — 10 expect search_issues — 10 expect list_issues — The model mislabels 3 search → list / Confusion matrix — Rows = expected tool · Columns = tool the model actually called / [table] search_issues | list_issues // search_issues row: 7 | 3 // list_issues row: 0 | 10 / These 3 are the whole story: they lower search_issues recall and list_issues precision. / Precision (list_issues): Of all list_issues calls, how many were correct? 10 / (10 + 3) = 0.77 / Recall (search_issues): Of all expected search_issues, how many were found? 7 / 10 = 0.70 / Accuracy (whole dataset): Share of inputs that produced the expected tool call. (7 + 10) / 20 = 0.85
**Shows.** A worked example reframing tool-selection evaluation as a binary classification problem: a 2x2 confusion matrix (green cells for correct calls, orange for the 3 misclassifications) sits beside three metric cards (Precision, Recall, Accuracy) each showing its formula and computed value, colour-coded blue/purple/green to match the matrix.

## Slide 7 — Learn more about GitHub MCP evals
**Text.** GITHUB MCP SERVER OFFLINE EVALUATION / Learn more about GitHub MCP evals / https://gh.io/AA13jm01
**Shows.** A large QR code with the GitHub Octocat logo in its center, on a black background, linking to further documentation on the MCP server evaluation work just described.

## Slide 8 — Run agent on synthetic tasks
**Text.** AGENT OFFLINE EVALUATION / Run agent on synthetic tasks / Controlled, repeatable challenges we build to measure the agent. / Oops...✕
**Shows.** Three photos of ragdoll cats interacting with a puzzle-feeder toy (a board with sliding covers over treats) in different states of success, with an "Oops..." label and red X next to the rightmost cat, whose puzzle board is shown knocked over/failed — a visual metaphor for agents given synthetic tasks, some succeeding and some failing.

## Slide 9 — Tasks in harbor format
**Text.** AGENT OFFLINE EVALUATION / Tasks in harbor format / harbor-task/ — instruction.md, task.toml, environment/ (Dockerfile, ...), solution/ (solve.sh, ...), tests/ (test.sh, ...) / instruction.md: The task, written in natural language, that the agent must complete. / task.toml: Task config & metadata — setup, timeouts, and scoring weights. / environment/: The Dockerfile and files that build the sandbox the task runs in. / solution/: Reference "oracle" solution. solve.sh produces the correct result. / tests/: test.sh verifies the agent's work and decides pass / fail.
**Shows.** A file-tree mockup of a "harbor-task/" directory (styled as a code editor window) on the left, paired on the right with a colour-coded legend explaining the purpose of each file/folder (instruction.md, task.toml, environment/, solution/, tests/) that make up a synthetic-task definition.

## Slide 10 — Run, capture, evaluate
**Text.** AGENT OFFLINE EVALUATION / Run, capture, evaluate / 1 Harness — Builds the container, deploys, and launches the agent inside it. — BUILD: Container built from the task definition. — DEPLOY: Launch the agent inside the container. / 2 Agent adapter — Runs the agent and transforms its raw output into artifacts. — TRANSFORMS: Raw events & logs → structured artifacts. / ARTIFACTS: changes.patch (what the agent changed, the diff) / trajectory (tool calls + reasoning + results) / metrics (tokens · latency · cost · tool stats) / 3 Grader — Scores the run from the artifacts — several axes. — Tool invocation ← trajectory: Right tools, right args & order — Correctness ← patch + traj.: LLM grader judges the outcome — → reward + metrics
**Shows.** A three-stage pipeline diagram (Harness → Agent adapter → Grader) with a middle column of three artifact boxes (changes.patch, trajectory, metrics) that the adapter produces and dotted arrows feeding into the Grader's two scoring sub-boxes (Tool invocation, Correctness), which combine into a final reward + metrics output.

## Slide 11 — Metrics
**Text.** AGENT OFFLINE EVALUATION / Metrics / Correctness — Did the agent actually solve the task — judged by checks and LLM graders. / Tool use — Which tools it chose and how often — and how often those calls succeeded. / Cost & tokens — How much it consumed — tokens and spend, including savings from caching. / Speed — How quickly it responded — total time, time to first token, per-step latency. / Code changes — Size and shape of the edits — lines and files touched, plus over-deletion flags. / Reliability — Signs of trouble — loops, empty results, errors, and wasted effort.
**Shows.** A 2x3 grid of six metric cards, each with a coloured left border and icon (checkmark, terminal, database, lightning bolt, pencil, warning triangle), covering correctness, tool use, cost, speed, code-change size, and reliability as the axes measured for each agent run.

## Slide 12 — Defining a successful run
**Text.** AGENT OFFLINE EVALUATION / Defining a successful run / Deterministic — Rule-based · exact · no LLM: tool called with right args / forbidden tool NOT used / ends on a clean stop / metric within range / Custom script — Task-specific program: run the test suite / meet a pass threshold / verify build output / LLM grading — Judges score criteria: completeness / factual accuracy / useful structure / → multi-judge consensus / All three must pass — Fail-closed — any layer fails → reward 0 → reward
**Shows.** Three parallel columns (Deterministic, Custom script, LLM grading) each listing check types, all feeding down via arrows into a single "All three must pass" box marked fail-closed, meaning any layer failing zeroes out the reward.

## Slide 13 — Agent online evaluation
**Text.** Agent online evaluation / A/B test — a controlled experiment: The scientific way to prove causality: the change in metrics is caused by the treatment, not by chance. / Users (split randomly) > Control · existing (default) / Treatment · default + change > Compare metrics (control vs treatment) > Decide what to ship (only if it truly helps) / What we expect: a positive effect — or simply no negative effect (a guardrail), depending on the experiment's design. / The two hypotheses — Treatment − Control = Δ — e.g. 12.4% − 11.9% = +0.5% — Alternative hypothesis: the change caused the difference / Null hypothesis: the difference is just random chance
**Shows.** A flow diagram of the A/B testing process (random split → control/treatment arms → compare metrics → ship decision), followed by a formula card showing treatment-minus-control delta with a worked example, and two labelled hypothesis boxes (alternative vs null) connected by arrows from the delta.

## Slide 14 — Microsoft Experimentation Platform
**Text.** AGENT ONLINE EVALUATION / Microsoft Experimentation Platform / https://gh.io/AA13hgua
**Shows.** A large green-and-white QR code with the GitHub Octocat logo in its center on a black background, linking to more information on the experimentation platform.

## Slide 15 — Experiment rollout
**Text.** AGENT ONLINE EVALUATION / Experiment rollout / HOW THE ROLLOUT WORKS: All users → ↓ pick a segment — choose who qualifies → Eligible segment: eligible / not eligible — skipped → Split & ramp: start · 10% treatment > ramp · 50% treatment — Treatment (experimental) / Control (default) / HOW IT LOOKS IN CODE: FEATURE FLAG featureEnabled — VALUE True → CODE PATH if (featureEnabled == true) { runWithFeature() } → ASSIGNMENT Treatment — VALUE False → if (featureEnabled == false) { runDefault() } → Control
**Shows.** A two-part diagram: top shows a funnel from "all users" through eligibility filtering to a ramping split bar (10% treatment ramping to 50% treatment); bottom shows a code table mapping a boolean feature flag value to a code branch and its resulting treatment/control assignment.

## Slide 16 — Computing online metrics
**Text.** AGENT ONLINE EVALUATION / Computing online metrics / 1 Raw signal data (one row per event) / 2 Aggregation per unit (one row per user) / 3 Statistical aggregation (one result per arm) / METRIC 1 Average tool-definition token count per user — USER EVENT VALUE: U1 100, U1 200, U2 300, U2 500 (ToolDefinitionsTokenCount on each event) → AVG within each user: U1 → 150, U2 → 400 (each user contributes one average) → AVG across users in arm: Treatment = 275 (avg(150, 400)) / METRIC 2 99th percentile of tool-call failures per user — USER FAILED?: U1 0,1,0 / U2 1,1,0 / U3 0,0,0 / U4 1×8 (eight failed calls) → SUM failure flags within user: U1 → 1, U2 → 2, U3 → 0, U4 → 8 (each user contributes one failure count) → P99 across users in arm: Treatment ≈ 8 (P99 of {0,1,2,8}) (99% of users are at or below this)
**Shows.** Two worked numeric examples walking raw per-event data through per-user aggregation to a final per-arm statistic, each shown as a three-step left-to-right pipeline with actual sample numbers at each stage (one for an average metric, one for a P99 metric).

## Slide 17 — P-values
**Text.** AGENT ONLINE EVALUATION / P-values / What a p-value signifies — If the treatment truly did nothing, how unlikely is the difference we saw? — Assume the null: the treatment had no effect. / Then the split didn't matter — reshuffle users. / Simulate many random splits → a spread of deltas. / p = how often a reshuffle is as extreme as ours. / Small p → rare by chance → likely a real effect. — p ≈ 0.047 (red-tail area ÷ total area) / DELTAS FROM RANDOM RE-SPLITS: as extreme as our result — histogram of Δ (Treatment − Control) from -0.6 to 0.6, −0.32 our observed delta 0.32 / In practice: we don't actually reshuffle — we use a z-test to get the same p-value, faster.
**Shows.** A bullet explanation of permutation-test logic beside a purple bell-shaped histogram of simulated deltas from random re-splits, with red tail bars beyond ±0.32 marking outcomes as extreme as the observed result, illustrating how the p-value (≈0.047) is the proportion of the distribution in those red tails.

## Slide 18 — Are we just wasting time on experiments?
**Text.** Are we just wasting time on experiments? / We could be shipping features...
**Shows.** Nothing beyond the text — a plain dark slide posing a rhetorical objection to running experiments, as a transition into addressing pitfalls.

## Slide 19 — Unexpected results
**Text.** AGENT ONLINE EVALUATION / Unexpected results / The symptoms (what surprised us): Wrong direction — expected tokens ↓ — but got tokens ↑ / Collateral movement — seemingly unrelated metrics shifted / No movement — no significant change at all / The suspects (what could cause them): Implementation error — a bug in the change itself / Type I — false positive — 100 metrics × p 0.05 ≈ 5 by chance / Type II — false negative — a true effect stays hidden — small effect · high variance · signal dilution / Before trusting a surprise, ask what could have caused it →
**Shows.** Two paired cards: "The symptoms" lists three types of surprising experiment results with icons, "The suspects" lists three possible causes (implementation bug, Type I false positive, Type II false negative) with icons, linked by the framing that surprises need a root-cause check before being trusted.

## Slide 20 — Sub-cohorts and signal dilution
**Text.** AGENT ONLINE EVALUATION / Sub-cohorts and signal dilution / We're adding a tool search support Model A. / We're interested in a sub-cohort using Model A. / It is a small subset of the assigned population. / Problem: signal dilution by the unaffected majority using other models => decreased sensitivity.
**Shows.** A large circle labelled "ASSIGNED POPULATION" containing a small green inner circle labelled "Model A" (a small sub-cohort) surrounded by a much larger "other models" region labelled "the unaffected majority," with a callout arrow from "+ tool search → Model A" pointing at the small sub-cohort, illustrating how a small affected group gets diluted by measuring the whole population.

## Slide 21 — Triggered analysis
**Text.** AGENT ONLINE EVALUATION / Trigerred analysis [sic] / Triggered analysis gets rid of signal dilution by filtering out signals from unaffected users, however / 1. Smaller sample size decreases statistical power of the experiment => we need to expand the audience. / 2. We may accidentally exclude eligible data points
**Shows.** Two overlapping circles labelled CONTROL and TREATMENT, each containing a small green "Model A interactions" sub-circle with the rest of each circle marked "other models"; dashed arrows from a shared "Model A interactions" label point into both sub-circles, illustrating that triggered analysis narrows each arm down to just the affected sub-cohort, trading off sample size and completeness.

## Slide 22 — Takeaways
**Text.** Takeaways / MCP server — LAYER 1: Does it pick the right tools? / Synthetic tasks — LAYER 2: Does it do the job — before prod? / Online — LAYER 3: Does it help real users? / You can't unit-test agents — measure them statistically. / Isolate the testable parts of the agent loop. / Pass/fail hides a lot — watch tokens, tools, loops, and cost. / Be skeptical of significant movements — they can be false positives (Type I). / No movement isn't proof — could be your design, dilution, or a bug (Type II).
**Shows.** Three summary cards recapping the deck's three evaluation layers (MCP server, Synthetic tasks, Online) each with its core question, followed by five checked takeaway bullets summarizing key cautions from the talk.

## Slide 23 — Thank you
**Text.** Thank you
**Shows.** A closing slide with the white GitHub Octocat logo beside "Thank you" in large white text, on a purple background with a halftone dot-gradient pattern radiating outward.
