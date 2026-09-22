---
title: "From Vibes To Data: Evaluating Agents on Your Real Work"
speakers: [Ville Hellman]
session_id: 5afb0b4976e22b92d7979a974d8ffbb6
kind: slides
deck: aaif-adeep-v2.pdf
slides: 17
---

# From Vibes To Data: Evaluating Agents on Your Real Work — slides

**Ville Hellman**

*Friday 18 September 2026, 14:25, G104 + G105 — Evals & Testing track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`aaif-adeep-v2.pdf`](aaif-adeep-v2.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** From Vibes to Data / Evaluating Agents on Your Real Work / GOOD VIBES / Ville - Staff Engineer at Datadog SDLC & AI DevX
**Shows.** A light lavender title slide with "Vibes" in red and "Data" in blue for emphasis; below the title, a round "GOOD VIBES" badge with a thumbs-up icon sits to the left of an arrow pointing to a small declining/varied bar chart on the right, visually summarising the talk's premise of moving from subjective vibes to measured data; a pill-shaped speaker credit sits at the bottom.

## Slide 2 — rm **/{AGENTS,CLAUDE}.md
**Text.** $ rm **/{AGENTS,CLAUDE}.md / *one monorepo…YMMV…NFA…DYOR
**Shows.** A black terminal-style box with a green monospace shell command deleting all AGENTS.md and CLAUDE.md files recursively; below it, a GIF-style still of a Simpsons character (Snake Jailbird) firing a flamethrower, humorously reacting to the destructive command; a small disclaimer caption ("one monorepo...YMMV...NFA...DYOR") sits bottom right.

## Slide 3 — Agent Performance / Token Cost
**Text.** Agent Performance 📈 / Token Cost 📉 / *one monorepo…YMMV…NFA…DYOR
**Shows.** A "Futurama Fry" squinting-suspiciously meme image on the left, paired with two lines of text on the right each followed by a small trend-chart icon — a rising red chart next to "Agent Performance" and a falling blue chart next to "Token Cost" — implying skepticism about claims that performance rises while cost falls.

## Slide 4 — "We don't know how to make coding agents better inside Datadog"
**Text.** "We don't know how to make coding agents better inside Datadog"
**Shows.** Three icons across the top connected by arrows: a brain/clipboard/document icon (representing planning or task specs), a faceted diamond/gem icon (representing a model or process), and an orange Space-Invader-style robot icon (representing an agent) — followed below by an illustrated pile of coding-agent-related objects (terminal windows, puzzle pieces, gears, a ruler, document icons) heaped together, visually representing the chaos of many disconnected agent tools, under the quoted admission.

## Slide 5 — Public benchmarks answer something else
**Text.** Public benchmarks answer something else / Swebench / Terminal Bench / Deep Swe / % Resolved (y-axis) by Model (x-axis): Claude 4.5 Opus (high reasoning) 76.8% / Gemini 3 Flash (high reasoning) 75.8% / MiniMax M2.5 (high reasoning) 75.8% / Claude Opus 4.6 75.6% / GLM-5 (high reasoning) 72.8% / GPT-5-2 (high reasoning) 72.8% / Claude 4.5 Sonnet (high reasoning) 71.4% / Kimi K2.5 (high reasoning) 70.8% / DeepSeek V3.2 (high reasoning) 70.0% / Claude 4.5 Haiku (high reasoning) 66.6%
**Shows.** A bar chart comparing ten models' percent-resolved scores on a public coding benchmark, ranging from 76.8% (Claude 4.5 Opus, high reasoning) down to 66.6% (Claude 4.5 Haiku, high reasoning), with three named public benchmark suites (Swebench, Terminal Bench, Deep Swe) listed as text to the left, a black terminal-icon circle below them, and a llama mascot working on a laptop illustrated top right — setting up the point that these standard benchmarks measure something other than a company's own real work.

## Slide 6 — "How well do agents do at Datadog right now?"
**Text.** "How well do agents do at Datadog right now?" / "How do the models compare?" / "How much does the harness matter?" / "How efficient is this agent vs that one?" / "Which MCP/Plugin/CLI works best here?" / "Does the new skill improve the performance?" / "What difference does the steering docs make?" / THE RIDDLER
**Shows.** A large image of the comic-book supervillain the Riddler, covered in question marks, beside a stack of unanswered rhetorical questions about internal agent evaluation — using the character as a visual pun for "riddles" the team can't yet answer.

## Slide 7 — ADEEP - Agentic Datadog Engineering Evaluation Platform
**Text.** ADEEP - Agentic Datadog Engineering Evaluation Platform / Task / Environment / Agent / stdout / diff / trajectory / Scoring / Score
**Shows.** A flowchart: a "Task" box feeds into an "Agent" box that sits inside a dashed "Environment" boundary; the agent's outputs (stdout, diff, trajectory) feed down into a "Scoring" diamond, which produces a final "Score" box; an armadillo mascot logo (Datadog's mascot) holding a framed chart sits to the right, branding the platform.

## Slide 8 — Real work needs a realistic environment
**Text.** Real work needs a realistic environment / Should be realistic / Access to source code / Similar config to what engineers have / Clean environment
**Shows.** A bulleted list of four environment requirements beside a stylised digital-city / data-stream visual (glowing blue vertical columns of code/text receding into the distance) suggesting a realistic, code-rich engineering environment; the image extends past the right edge of the slide.

## Slide 9 — Tool + Model = Agent
**Text.** Tool + Model = Agent / Tool is the harness such as Claude Code, goose, OpenCode, pi / Model is the LLM like Opus 5, GPT 5.6 Luna, GLM 5.2, Devstral-24B / LLM + FOR LOOP / IS THIS AN... AGENT?
**Shows.** An anime reaction meme (a character gesturing questioningly at a butterfly) captioned "LLM + FOR LOOP" / "IS THIS AN... AGENT?", poking fun at how loosely the term "agent" gets used, illustrating the slide's definitional breakdown of tool (harness) versus model (LLM).

## Slide 10 — The Eval Task
**Text.** The Eval Task / "Create a new service for the examples domain. It should be an HTTP API with a single endpoint that returns the requested number of fibonacci numbers. For example, a GET request with argument 5 should return the first 5 fibonacci numbers: 1, 1, 2, 3, 5."
**Shows.** A yellow sticky-note-style speech card containing the example eval task prompt verbatim, flanked by two simple line-drawn robot mascots on either side, illustrating what an actual eval task prompt looks like.

## Slide 11 — Eval anatomy & scoring
**Text.** Eval anatomy & scoring / 002-basic-service / - 0021-http-service / - config.json / - judge.md.tpl / - prompt.md / Final score = (deterministic score * weight) + (llm judge score * weight) / 724
**Shows.** A file-tree listing of an eval's directory structure (config, judge template, prompt) on the left, with the scoring formula beneath it; on the right, a Futurama-style robot judge character behind a courtroom bench holding a paper showing the number "724" on an LED display, humorously depicting the LLM-judge component of scoring.

## Slide 12 — Nightly Baseline
**Text.** Nightly Baseline / Average score and cost by model / Each dot is a model aggregated over the selected environments, evals, and date range. / Below median cost, above median score / Best cost/score tradeoffs (Pareto frontier) / Average total score (y-axis, 0–100%) vs Avg cost per eval in USD (x-axis, $0.00–$1.60+) / Points along the Pareto frontier (roughly 65–75% score): gpt-5.6-luna (~$0.05, ~65%), GLM-5.3-Flash (~$0.08, ~68%), GLM-5.2 (~$0.08, ~68%), gpt-5.6-terra (~$0.40, ~66%), GLM-5.3 (~$0.47, ~68%), claude-sonnet-5 (~$0.62, ~69%) / Off the frontier, higher cost: gpt-5.6-sol (~$0.93, ~71%), Kimi-K3 (~$0.93, ~66%), gpt-5.5 (~$1.00, ~71%), gemini-3.5-flash (~$1.15, ~64%), claude-opus-5 (~$1.72, ~80%) / SUCH AMAZE / MUCH WOW
**Shows.** A scatter plot of average score versus average cost per eval for around eleven models, with a shaded green region marking "below median cost, above median score" and a dashed green line tracing the Pareto frontier of best cost/score tradeoffs from gpt-5.6-luna up to claude-opus-5 (the highest-scoring, highest-cost model); a "Doge" meme ("SUCH AMAZE / MUCH WOW") sits in the top-right corner reacting to the chart.

## Slide 13 — Experiments
**Text.** Experiments / Caveman & RTK both increased token use by ~15%, Headroom worked (~25% improvement) / Deleting all claude.md & agents.md files for our frontend monorepo improved agent performance / A tested model router increases average cost & reduces scores / Changing default model from Opus to Sonnet for Claude Code & Skills saved us ~$650k/month
**Shows.** A "Mr. Krabs as scientist" meme image (SpongeBob's Mr. Krabs peering through a microscope in a lab coat) beside four bullet points reporting the outcomes of internal experiments, including a large dollar-cost-savings figure from a default-model change.

## Slide 14 — What's been hard/tricky
**Text.** What's been hard/tricky / Test the task/workflow not the solution / Surprising results (sonnet outperforms opus) / Interpreting the results can be hard / Eval contamination & cheating
**Shows.** Two stacked meme panels on the right: the "two buttons" meme (a sweating hand hovering over two red buttons) above a panel of the same person now visibly sweating and wiping his brow, illustrating the difficulty/anxiety of the listed challenges (via the "Jake Clark Tumblr" comic).

## Slide 15 — Context is an optimisation problem
**Text.** Context is an optimisation problem / Trading higher intelligence & more tokens to compensate for missing context / Lazy context strategy is additive, it should be an optimisation problem / Agent performance varies across repositories so you'll need your own benchmarks unless your software looks like open-source projects / Relatively small suite works well & the scores are remarkably stable / Balance is key.
**Shows.** A meme photo of a man balancing on one foot in a small rowboat with arms out, captioned "Balance is key," playing on the slide's theme of context being a balancing/optimisation problem rather than something to just add to.

## Slide 16 — Organisational Learning Loop
**Text.** Organisational Learning Loop / #trajectories → (agent trajectories) → ADEEP x Trajectories → (new evals) → ADEEP → (run data) → ADEEP API → (run data) → ADEEP Insights → (insight analysis) → Rudder → (context improvement) → Agent Environment(s) → (context) → agents → (agent trajectories) → #trajectories
**Shows.** A closed-loop flowchart of coloured boxes (pink #trajectories, yellow ADEEP x Trajectories, green ADEEP and ADEEP API, blue ADEEP Insights and Rudder, purple Agent Environment(s) and agents) connected by labelled arrows, showing how agent trajectories feed evaluation, which feeds insight analysis, which feeds context improvements back into the agents' environment, closing the organisational learning loop; a wide-eyed cartoon face peeks in from the bottom-left corner.

## Slide 17 — Closing: That's All, Folks!
**Text.** @efexen / villehellman / THAT'S ALL, FOLKS!
**Shows.** A Looney-Tunes-style closing card with concentric red/orange rings, an illustrated caricature of the speaker (curly hair, glasses, flat cap, waving) in the centre, and his X/Twitter handle (@efexen) and LinkedIn handle (villehellman) displayed as logo badges in the top corners.
