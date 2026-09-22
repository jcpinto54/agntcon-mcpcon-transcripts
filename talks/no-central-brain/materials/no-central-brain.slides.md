---
title: "No Central Brain"
speakers: [Fausto Albers]
session_id: f5511d725b5025f549b7fe6e88af1dff
kind: slides
deck: no-central-brain.pdf
slides: 20
---

# No Central Brain — slides

**Fausto Albers**

*Friday 18 September 2026, 15:00, G102 + G103 — Reliable Agents track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`no-central-brain.pdf`](no-central-brain.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** NO CENTRAL BRAIN / Who decides what is true and where judgment lies in a world where execution is unlimited? / FAUSTO ALBERS / AGNTCON + MCPCON EUROPE / WonderWhy.ai
**Shows.** A black title slide with a small painted Russian matryoshka doll illustration on the left (nested dolls, hinting at layers/recursion), large stacked white "NO CENTRAL / BRAIN" title, and the framing question in white/orange text on the right, with the WonderWhy.ai logo bottom-right.

## Slide 2 — Attention Is All You Need
**Text.** Attention Is All You Need
**Shows.** A dark, teal-glowing 3D network diagram of dozens of interconnected nodes with varying brightness, evoking a neural network / transformer attention map — referencing the famous "Attention Is All You Need" transformer paper title, used here as a visual metaphor rather than with further explanatory text.

## Slide 3 — Execution scales, my attention doesn't
**Text.** MY WORKING DAY / Execution scales. My attention doesn't.
**Shows.** A line chart from 2022 to 2027 with two curves starting at the same point: a blue "Execution" curve rising exponentially upward, and a flat orange "My attention" line staying nearly level — visually demonstrating the growing gap between what agents can produce and what one person can review.

## Slide 4 — What this talk is about
**Text.** NO CENTRAL BRAIN / What this talk is about. / 01 Harness & Loop Engineering / 02 Recursive Self-Improvement / 03 Memory & Learning Policies / Who makes the decisions? What gets attention?
**Shows.** Nothing beyond the text. A numbered three-item agenda list followed by the talk's two guiding questions, highlighted in blue.

## Slide 5 — Fausto Albers
**Text.** THE PATH INTO THIS QUESTION / Fausto Albers / Sociology / Hospitality / Industrial AI / Applied AI Lab · Industrial Digital Twins · Prof. Jurjen Helmus / Amsterdam University of Applied Sciences · AINed consortium
**Shows.** Three icons in a row (a group-of-people icon, a cocktail-glass icon, a capital "I"-beam icon) representing the speaker's career path from Sociology through Hospitality to Industrial AI, connected by horizontal lines, with affiliation details below.

## Slide 6 — Where do you pay attention?
**Text.** Where do you pay attention?
**Shows.** A detailed black-and-white structural engineering drawing (elevation view) of a steel beam or profile with six evenly spaced circular holes along its length, annotated with numerous dimension lines and measurements (e.g. 3916, 3796, 3856, 4×Ø30, 6×Ø250, and various smaller offsets in millimetres) — an example of the kind of technical CAD/construction drawing the speaker's agents work from.

## Slide 7 — Predicted 3D CAD viewer
**Text.** Predicted 3D / Reference 3D / Source PDF / PDF + CAD / Predicted + reference / Evaluation / Predicted CAD GLB 98218bf16b62 / frozen-14 · 9af6e6a9 · predicted / Orbit / Pan / Fit model / Fit selection / Reset / Iso / Front / Back / Left / Right / Top / Bottom / Perspective / Focus here / Help / Expand 3D / Display style Edges / Clip axis Off / Mesh measurements / Isometric · Perspective projection · Orbit / Click a visible surface to select a local inspection point.
**Shows.** A screenshot of a custom internal 3D-model viewer tool with a tab bar (Predicted 3D, Reference 3D, Source PDF, PDF + CAD, Predicted + reference, Evaluation) and a toolbar of view/navigation controls, displaying a 3D-rendered steel beam with six circular holes — the same beam from the 2D drawing on the previous slide, now reconstructed as a 3D CAD model by an agent, shown in isometric perspective on a light grey background.

## Slide 8 — From instructions to systems
**Text.** HOW MY WORK CHANGED / From instructions to systems. / Prompting — What do I ask? / Context — What can it know? / Harness — How can it work? / Loops — What happens next?
**Shows.** A four-step ascending staircase diagram in blue, each step labelled with a stage of the speaker's evolving working method (Prompting, Context, Harness, Loops) and its guiding question, with "Loops" highlighted in orange as the current/most advanced stage.

## Slide 9 — The harness I can change
**Text.** INSIDE CLAUDE CODE OR CODEX / The harness I can change. / Foundation model — Given · weights fixed / Inference / Outer harness — Claude Code · Codex / Your inner harness — Editable / Instructions & rules / Context & memory / Agents & coordination / Skills & functions / Given runtime · sandbox · access / Task → ... → Work
**Shows.** A layered architecture diagram: a "Foundation model" box (fixed weights) connects via "Inference" down into an "Outer harness" box labelled Claude Code · Codex, inside which sits a highlighted orange "Your inner harness" box listing four editable components (instructions & rules, context & memory, agents & coordination, skills & functions); a "Task" circle feeds in on the left and "Work" output flows out on the right.

## Slide 10 — Feedback changes the next action
**Text.** LOOP ENGINEERING IN PRACTICE / Feedback changes the next action. / Goal + limits / Act — One harness run / Verify — Against the goal / Next move — Adapt the action / Feedback + saved state / Stop / escalate — Done · blocked · budget / Cost per accepted change
**Shows.** A three-box control-loop diagram (Act → Verify → Next move) under a "Goal + limits" header, with an orange feedback arrow labelled "Feedback + saved state" looping from "Next move" back to "Act," and a separate downward arrow from "Next move" to a "Stop / escalate" outcome box (done, blocked, or budget exhausted).

## Slide 11 — The builder is editable
**Text.** FROM PRACTICE TO THE NEXT QUESTION / The builder is editable. / Task → Editable harness (Code + instructions) → Application / Evidence changes the builder
**Shows.** A simple three-box left-to-right flow (Task → Editable harness → Application) with an orange feedback arrow labelled "Evidence changes the builder" looping from Application back into the Editable harness box, which is outlined in orange to emphasize it as the mutable component.

## Slide 12 — Try different ways of working
**Text.** VARIATION BEFORE SELECTION / Try different ways of working. / Same model — Weights fixed / Current harness / Experience / Editing agent — Proposes changes / A Instructions / B Order of work / C Tools & checks / Same work — Same checks / Outcomes + cost / Compare with the original
**Shows.** A flow diagram where "Same model" and "Current harness" plus "Experience" feed into an "Editing agent" that proposes changes along three axes (A: Instructions, B: Order of work, C: Tools & checks), all converging on producing the "Same work" output under "Same checks," with outcomes and cost fed back around to be compared against the original harness.

## Slide 13 — Let useful methods branch
**Text.** AN ARCHIVE OF ALTERNATIVES / Let useful methods branch. / H0 Harness → A → A1 / H0 → B → B1 / B → B2 → B2a / B2 → B2b — Chosen for this task / Compare first. Choose for the task. / Database — Executable harnesses + results — Alternatives retained
**Shows.** A branching tree diagram starting from a root node "H0 (Harness)" splitting into three candidate methods A, B, C, with B further splitting into B1 and B2, and B2 splitting again into B2a and B2b; B2b is highlighted orange as "Chosen for this task," while the whole tree is retained in a "Database" of executable harnesses and results rather than discarded.

## Slide 14 — A better way to build
**Text.** AN ILLUSTRATION FROM ENGINEERING PRACTICE / A better way to build. / THE BUILDER'S HARNESS / Harness A — General building method → builds → Pipeline A — Crops work. Meaning is missed. / Feedback → investigate → vary / Harness B — Adds domain guidance → builds → Pipeline B — Catalogue · lookup · check / Retain methods + evidence → A later project / Compare outputs and costs. Reuse or adapt the building method. / DRAWING DETAIL / A mark can carry an instruction.
**Shows.** A two-row comparison: Harness A (a general-purpose builder) produces Pipeline A, which crops the engineering drawing and misses meaning; feedback drives investigation and variation into Harness B, which adds domain-specific guidance and produces Pipeline B, correctly cataloguing, looking up, and checking details. On the right, a cropped detail of the earlier dimensioned drawing shows a small circled symbol annotation, illustrating that "a mark can carry an instruction" the naive pipeline missed.

## Slide 15 — Blade Runner 2049 film still
**Text.** Blade Runner 2049 · The Memory Maker · 2017
**Shows.** A film still from Blade Runner 2049 showing the character Dr. Ana Stelline (the "memory maker") in a white protective suit and headscarf, smiling gently at an off-screen figure in a dark coat — used, in context, as a metaphor for constructed/curated memory feeding into a system's sense of self or history.

## Slide 16 — What comes to mind?
**Text.** HUMAN ATTENTION AND RECALL / What comes to mind? / Same drawing. Different priorities. / Exploring a possibility — What could this mean? / Preparing for release — What could go wrong? / Experience · Goals · Current state / What comes to mind changes what we notice next.
**Shows.** The same cropped engineering-drawing detail shown twice side by side: on the left a small circular symbol is highlighted in orange under the "exploring a possibility" framing; on the right a column of stacked dimension numbers (94, 75, 75, 75) is highlighted in teal under the "preparing for release" framing — illustrating how the same drawing draws different attention depending on the viewer's current goal.

## Slide 17 — No central brain
**Text.** A PROPOSAL: FUNCTIONAL STATES ACROSS THE SYSTEM / No central brain. / TASK GOALS + BUDGET / An unfamiliar detail → Curiosity → Retrieve + explore — Possible insight · more effort / A consequential uncertainty → Concern → Check + challenge — Additional checks · more effort / Time and tokens running low → Urgency → Narrow + prioritize — Less exploration · missed options / Signals interact. Local priorities can differ.
**Shows.** A three-row table mapping triggering conditions to named "functional states" (Curiosity, Concern, Urgency) and the resulting behaviour and trade-off for each, each row connected left-to-right by arrows — the talk's core proposal that attention-like states, not a central controller, should drive agent behaviour.

## Slide 18 — Learn how to improve
**Text.** HOW WE CHOOSE WHAT TO INVESTIGATE AND TRY / Learn how to improve. / Experience → Improvement policy → Candidate harness → Later outcomes / Change harness (from Later outcomes back to Candidate harness) / Change what we investigate and try (from Later outcomes back to Improvement policy)
**Shows.** A four-box left-to-right flow (Experience → Improvement policy → Candidate harness → Later outcomes), with the "Improvement policy" box highlighted in orange, and two feedback arrows returning from "Later outcomes": a short blue one back to "Candidate harness" labelled "Change harness," and a longer orange one back to "Improvement policy" labelled "Change what we investigate and try."

## Slide 19 — Five principles
**Text.** TAKE THESE WITH YOU / Five principles. / 01 Frozen model. Learning system. / 02 Evolve methods. Preserve alternatives. / 03 Select for future value. Count future costs. / 04 Let local consequences drive change. / 05 Learn what deserves attention.
**Shows.** Nothing beyond the text. A numbered five-item closing list of takeaway principles, with the key phrase in each line highlighted in blue, separated by thin horizontal rules.

## Slide 20 — Let's connect
**Text.** LET'S CONNECT / Fausto Albers / wonderwhy.ai / WonderWhy.ai / Connect on LinkedIn / linkedin.com/in/stepintoliquid
**Shows.** A black closing slide with the speaker's name and website in large type on the left, the WonderWhy.ai logo beneath, and a black-and-white QR code on the right captioned "Connect on LinkedIn" with the profile URL below it.
