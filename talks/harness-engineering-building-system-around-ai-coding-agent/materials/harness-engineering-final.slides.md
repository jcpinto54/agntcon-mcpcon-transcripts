---
title: "Harness Engineering: Building the System Around Your AI Coding Agent"
speakers: [Ji Darwish]
session_id: 500a575f16f790892fe1e991bd0195c7
kind: slides
deck: harness-engineering-final.pptx
slides: 34
---

# Harness Engineering: Building the System Around Your AI Coding Agent — slides

**Ji Darwish**

*Friday 18 September 2026, 13:15, G106 + G107 — Workshops track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`harness-engineering-final.pptx`](harness-engineering-final.pptx), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Harness engineering / Build the control loop around your coding agent / #AGNTCon #MCPCon 2026
**Shows.** A wide photo of the Xomnia team (dozens of people) posed with arms spread wide, standing in and around a small blue tour boat on an Amsterdam canal, the boat's side painted with the "xomnia" wordmark; brick canal-house facades behind them. The Xomnia "We make AI work" logo appears top-right on the photo. Below the photo, the title sits on a light-lavender panel with a blue rounded shape in the bottom-right corner.

## Slide 2 — Who am I
**Text.** Who am I / Ji Darwish / Data Engineer at Xomnia / Previously Software Engineer / MSc AI from Utrecht University / Interest in responsible AI and alignment research
**Shows.** A circular portrait photo of a smiling man with curly dark hair and a beard, wearing a light blue striped shirt, outdoors with a blurred canal/tree background. Bulleted list of bio facts sits to the left of the photo, separated by a thin vertical rule. Xomnia logo bottom right, slide numbered 2.

## Slide 3 — Schedule for today
**Text.** Schedule for today / Everything gets explained first. Then the room goes quiet and you build. / Motivation — why any of this / Harness — model is not the agent / Guides and sensors — the two axes / The problem — one borrowing rule / The loop — what you will write / Build — the room codes
**Shows.** A horizontal timeline of six filled blue dots connected by a blue line, left to right, each dot labelled above or below alternately with a bold heading and a grey subtitle: Motivation/why any of this, Harness/model is not the agent, Guides and sensors/the two axes, The problem/one borrowing rule, The loop/what you will write, Build/the room codes.

## Slide 4 — Section divider: Why?
**Text.** 01. / Why?
**Shows.** Full-bleed solid blue background with faint thin concentric circle outlines in the top-left and right side. White serif "Why?" heading with a small "01." label above it. Xomnia logo bottom right, slide numbered 4.

## Slide 5 — We already built a calculator
**Text.** We already built a calculator / When you learned to code / You built a calculator. / The world already had better ones. Free ones, already on the phone in your pocket. / Today, in this room / You keep the agent you already use. / We are not replacing your coding agent, and we are not competing with it. / You will build a small ring around it out of parts you can take home, and point those parts at rules only your company can write. / Maintainability — architecture rules that execute instead of sitting in a doc / Cost and token budget — stop before the expensive check, cap the repair attempts / Compliance and review — the evidence a human needs to sign off, recorded once
**Shows.** Two-column comparison under dark and blue pill labels ("When you learned to code" vs "Today, in this room"), with three white cards along the bottom each headed by a blue vertical accent bar, listing the three benefits (maintainability, cost/token budget, compliance and review).

## Slide 6 — Agents have become a standard
**Text.** Agents have become a standard / Stripe — 1,000+ — PRs to production each week — Shipped by internal coding agents. Humans review and approve every one. — stripe.com/sessions/2026/developer-keynote / Google — 75% — of new code is AI-generated — Approved by engineers, up from 50% the previous autumn. — blog.google · Cloud Next 2026 keynote / Uber — 70%+ — of pull requests come from agents — Attributed to local or cloud agents across the engineering org. — uber.com/us/en/blog/efficient-software-factory / Scaling AI at Uber — 7x weekly active users since Feb — 9.4x weekly agent requests since Feb / Reported by the companies themselves, not independently audited. Read them as direction of travel, not as benchmarks you are behind on.
**Shows.** Three white stat cards side by side, each with a coloured pill logo label (Stripe, Google, Uber), a large blue statistic, and a caption with source URL. Below them a black banner "Scaling AI at Uber" with two large highlighted multipliers, 7x in blue and 9.4x in green, each captioned "weekly active users since Feb" and "weekly agent requests since Feb" respectively.

## Slide 7 — Delivery is scaling faster than control
**Text.** the gap this workshop sits in / Delivery is scaling faster than control / Uber's own numbers, and Gartner's forecast. / Happening now / 3,600 — agent skills built across the software development life cycle at Uber, running more than 30,000 skill executions a day. / Predicted by 2027 / 40% — of enterprises will reduce or remove autonomous AI agents, due to governance gaps identified only after production incidents occur. / Gartner's point is not that governance is missing. It is that not every agent needs the same controls. An agent that only suggests code can operate with light oversight. An agent that can change or deploy software needs stronger permissions, checks, and approval gates. / Uber, Running a Software Factory Efficiently at Uber Scale. Gartner press release, 26 May 2026: a forecast, not a measurement of your organisation. The claim worth keeping is the ordering, capability first and governance later.
**Shows.** Two-column layout under black "Happening now" and red "Predicted by 2027" pill labels, each with a large statistic (3,600 in blue, 40% in red) and explanatory text. A bordered callout box below quotes the Gartner interpretation in full.

## Slide 8 — Section divider: Harness
**Text.** 02. / Harness
**Shows.** Same full-bleed blue divider design as slide 4, with white serif "Harness" heading and "02." label. Xomnia logo bottom right, slide numbered 8.

## Slide 9 — Agent = Model + Harness
**Text.** Model is not the agent / Agent = Model + Harness
**Shows.** Blue divider-style slide with a small grey eyebrow line "Model is not the agent" above the large white serif equation "Agent = Model + Harness". Xomnia logo bottom right, slide numbered 9.

## Slide 10 — Same models, different harnesses
**Text.** Same models, different harnesses / Roughly the same frontier models underneath. The difference you feel is harness. / In your terminal — Claude Code / Codex CLI / Gemini CLI / In your editor — Cursor / Windsurf / Copilot agent mode / Every one of them calls the same handful of frontier models. Swap the harness and the model does not change.
**Shows.** Two white cards listing terminal-based vs editor-based coding agents. To the right, a cluster of product logos/icons for Claude, Cursor, Windsurf, GitHub Copilot (rainbow swirl), an arrow-in-square icon, and the "opencode" wordmark, illustrating the range of harnesses built on similar underlying models.

## Slide 11 — Why does it matter?
**Text.** Why does it matter? / Resolution rate: the share of task attempts the agent completes successfully. / 57.8% — through Terminus 2 / 52.1% — through Claude Code / Same model both times: Claude Opus 4.5. The only thing that changed is the harness around it. / Model | Harness | Resolution rate / GPT-5.2 | Codex CLI | 62.9% / Claude Opus 4.5 | Terminus 2 | 57.8% / Gemini 3 Pro | Terminus 2 | 56.9% / GPT-5.2 | Terminus 2 | 54.0% / Claude Opus 4.5 | Claude Code | 52.1% / Claude Opus 4.5 | OpenHands | 51.9% / Merrill et al., Terminal-Bench, arXiv 2601.11868, appendix A6. One benchmark, one model, one reported setup. Not a general ranking of harnesses, and not a cost comparison in euros or tokens.
**Shows.** Two large headline percentages (57.8% blue, 52.1% grey) compared side by side, with a bordered callout on the right noting both are the same model, Claude Opus 4.5, through different harnesses. Below, a table of six model/harness/resolution-rate rows; the two Claude Opus 4.5 rows and their harness names are highlighted in blue to draw the eye to the comparison.

## Slide 12 — Section divider: Inner and outer harness
**Text.** 03. / Inner and outer harness
**Shows.** Same full-bleed blue divider design, white serif two-line heading "Inner and outer harness" with "03." label. Xomnia logo bottom right, slide numbered 12.

## Slide 13 — Inner loop, outer loop
**Text.** Inner loop, outer loop / User harness — Feedforward and feedback controls put in place by the user of the coding agent for their particular system / Harness built by the builders of the coding agent, e.g. system prompt, code search tools, orchestration, ... / Model / Coding agent or SDK — E.g. Claude Code / https://martinfowler.com/articles/harness-engineering.html
**Shows.** A quarter-circle nested "onion" diagram (screenshot from a Martin Fowler article) with three concentric bands, labelled by dashed leader lines: outer dark-teal band "User harness", middle purple band "Harness built by the builders of the coding agent", inner grey band "Model". A brace beneath the teal+purple bands labels them together as "Coding agent or SDK, e.g. Claude Code".

## Slide 14 — The inner loop, conceptually
**Text.** what the inner loop actually does / The inner loop, conceptually / while (true) { response = model.respond(context, tools); if (response.isFinalAnswer()) { return response; } results = tools.execute(response.toolCalls()); context.add(response, results); } / Three things this already tells you / The model only chooses. — Every effect comes from a tool the harness allowed. / Context is assembled, not given. — What the model sees is a harness decision. / Nothing here decides when to stop. — Stopping is not a model property. It is a rule someone wrote. / This is the agent you already use. Today it is the part we do not write. / Everything from here on is the ring we draw around it.
**Shows.** A code block (pseudocode, generic C-like/JS syntax) in a white card on the left showing the agent's core while-loop. On the right, three short numbered insights in blue headings with grey explanatory lines beneath each.

## Slide 15 — Meme: Just loops, always has been
**Text.** Just loops / Always has been
**Shows.** The "Always Has Been" astronaut meme: one astronaut floats in space pointing at Earth (labelled "Just loops"), while a second astronaut behind him aims a handgun at his head, with "Always has been" captioned top right. Bottom-left "imgflip.com" watermark. No slide branding, purely a meme image reinforcing that agent loops are nothing new.

## Slide 16 — When it acts, and how it decides
**Text.** When it acts, and how it decides / Guide — acts before generation / Sensor — feedback after generation / Computational — Deterministic Execution / A rule the machine applies before or during generation. It raises the chance of a good result on the first attempt, and needs no judgement at the moment it is applied. / A check that runs after the attempt and returns its own verdict. Reliable, repeatable, and cheap enough to run on every attempt. Nobody has to be consulted to get the answer. / Inferential — non-deterministic / Guidance a person had to agree on first. Someone decided what correct means, and is accountable for it. / A judgement about the result that no rule captures. Useful, and capable of being wrong in both directions. / Guides and sensors, computational and inferential: the terms and the axes are Böckeler's, Harness engineering for coding agent users, martinfowler.com.
**Shows.** A 2×2 grid: rows "Computational / Deterministic Execution" and "Inferential / non-deterministic"; columns "Guide / acts before generation" and "Sensor / feedback after generation". Each of the four cells contains explanatory prose, alternating shaded (light blue) and white backgrounds in a checkerboard pattern.

## Slide 17 — The same axes, with today's artifacts
**Text.** The same axes, with today's artifacts / Guide — acts before generation / Sensor — feeds back after generation / Computational — executes an explicit rule — A project bootstrap script, A CLI that generates approved structures, A codemod such as an OpenRewrite recipe, Language-server support / COMPILE, LINT, BUSINESS_BEHAVIOR, ARCHITECTURE_BOUNDARY, FULL_TEST_SUITE. Each one executes and returns its own named finding. / Inferential — needs interpretation — agents.md, our LAB 1 injects approved-policy.md into the build prompt. / LLM as a judge — It can raise a concern no import rule sees, and it can reject correct code.
**Shows.** Same 2×2 grid layout as slide 16, now filled with concrete tooling examples instead of abstract definitions: computational/guide cell lists bootstrap scripts and codemods; computational/sensor cell lists the named check constants (COMPILE, LINT, etc.); inferential/guide cell references agents.md and approved-policy.md; inferential/sensor cell describes LLM-as-judge.

## Slide 18 — Inner loop, outer loop (boundary)
**Text.** the boundary this workshop draws / Inner loop, outer loop / Outer harness: the code you write today / Inner harness: the coding agent — reads and edits Java source code / Has access to tools / reports success or failure, nothing more / The outer loop owns four things / Policy — the approved rule, sent before the agent acts / Independent checks — named sensors run after each attempt, outside the agent's reach / Repair budget — how many attempts a failure is worth, and what stops the loop / Acceptance — what evidence, on which source version, permits a yes / Enforced, not promised
**Shows.** A large bordered blue-outlined card. Inside, a shaded sub-box labelled "Inner harness: the coding agent" lists its three limited responsibilities (read/edit Java, access tools, report success/failure only). To its right, "The outer loop owns four things" lists Policy, Independent checks, Repair budget, Acceptance with one-line definitions — establishing the workshop's scope as the outer loop only.

## Slide 19 — Section divider: The problem you will work on
**Text.** 04. / The problem you will work on
**Shows.** Same full-bleed blue divider design, white serif two-line heading. Xomnia logo bottom right, slide numbered 19.

## Slide 20 — The Bookshelf
**Text.** the codebase you will work in / The Bookshelf / One physical copy of each book. Nine classes. Small on purpose. / bookshelf/ / approved-policy.md / src/main/java/workshop/bookshelf/ / domain/ / Book, Member, Loan / BorrowOutcome / service/ / BorrowService / storage/ / InMemoryBookshelf / src/test/java/workshop/bookshelf/ / BorrowServiceTest / ArchitectureTest / BorrowPolicyTest / At work the business rule is pricing, permissions, time zones or idempotency. The size of the example is not the point.
**Shows.** A file-tree code block listing the workshop's Java project structure (domain, service, storage packages and their classes; test package with three test classes). Three short blue vertical bars run down the right edge of the card as a decorative accent. No slide number visible in the bottom-right corner (logo only), unlike surrounding slides.

## Slide 21 — Who holds the copy? (state 1)
**Text.** one physical copy, two members / Who holds the copy? / 1 — Alice borrows book 1 — active borrower: Alice / 2 — Bob requests book 1 — Bob's result: ? / active borrower: ? / 3 — Alice returns book 1 — active borrower: nobody / 4 — Bob borrows book 1 — Bob's result: ? / active borrower: ?
**Shows.** Four sequential cards connected left-to-right by small arrows, numbered 1–4, alternating white/blue backgrounds, walking through a lending scenario. Steps 2 and 4 show unresolved question marks ("?") for Bob's result and the active borrower, posing the puzzle the deck will resolve on the next slide.

## Slide 22 — Who holds the copy? (resolved)
**Text.** one physical copy, two members / Who holds the copy? / 1 — Alice borrows book 1 — active borrower: Alice / 2 — Bob requests book 1 — Bob's result: BOOK_UNAVAILABLE / active borrower: Alice / 3 — Alice returns book 1 — active borrower: nobody / 4 — Bob borrows book 1 — Bob's result: BORROWED / active borrower: Bob
**Shows.** Same four-card layout as slide 21, now with the answers filled in bold: Bob's request while Alice still holds the book fails (BOOK_UNAVAILABLE, active borrower stays Alice); after Alice returns it, Bob successfully borrows it (BORROWED, active borrower becomes Bob).

## Slide 23 — A green suite that asserts nothing
**Text.** run this before you write anything / A green suite that asserts nothing / bookshelf/.../service/BorrowService.java / public BorrowOutcome borrow(long bookId, long memberId) { if (!shelf.hasBook(bookId)) return BOOK_NOT_FOUND; if (!shelf.hasMember(memberId)) return MEMBER_NOT_FOUND; // the agreed second-borrow rule is not checked here shelf.record(new Loan(bookId, memberId)); return BORROWED; } / bookshelf/src/test/java/.../BorrowPolicyTest.java / @Test void aSecondMemberCannotBorrowAnAlreadyLoanedBook() { var service = new BorrowService(shelf()); service.borrow(1, 10); // no assertion follows } / ./mvnw -pl bookshelf test — PASS / and Bob can still replace Alice as the active borrower.
**Shows.** Two Java code panels side by side: the BorrowService.borrow method (with a code comment flagging that the "second-borrow" rule is not enforced) and a JUnit test whose body calls the service but contains no assertion. Below, a dark terminal-style bar shows the Maven test command with a green "PASS" pill beside it, illustrating that the suite is misleadingly green because the test never checks anything.

## Slide 24 — BDD Gherkin feature example
**Text.** Feature: Login / As a user / I want to be able to log in to the application / So that I can access my account information / Scenario: Successful login / Given I am on the login page / When I enter my username and password / And I click the login button / Then I should be taken to the dashboard page / https://testomat.io/blog/mastering-bdd-tips-tricks-and-best-practices-for-setting-up-a-testing-framework/
**Shows.** A screenshot of a Gherkin/BDD feature file on a colourful gradient background (pink-to-purple-to-navy), syntax-highlighted with green keywords (Feature, Scenario, Given/When/Then) and orange labels, illustrating standard BDD scenario syntax as an aside/reference example, not tied to the Bookshelf codebase.

## Slide 25 — TDD & BDD Venn diagram
**Text.** TDD & BDD / TDD vs. BDD / TDD — Code focus / Technical tests / Developer-driven / Unit validation / Red–green cycle / BDD — Behavior focus / Collaborative scenarios / Cross-functional / Shared understanding / Natural language / Quality assurance / Test automation / Defect prevention / Early feedback / https://www.ramotion.com/blog/tdd-vs-bdd/
**Shows.** A screenshot of a purple two-circle Venn diagram (sourced from ramotion.com, watermarked with an "R" logo bottom right) comparing Test-Driven Development and Behavior-Driven Development, with distinct traits in each circle and four shared traits (quality assurance, test automation, defect prevention, early feedback) in the overlapping lens.

## Slide 26 — Section divider: The loop you will build
**Text.** 05. / The loop you will build
**Shows.** Same full-bleed blue divider design, white serif two-line heading. Xomnia logo bottom right, slide numbered 27 (note: slide displays "27" though it is the 26th slide in the deck).

## Slide 27 — Looping is not reliability
**Text.** Looping is not reliability / %82 — correct after one revision / %67,3 — correct after two / %84,7 — ever correct at some point / Stale evidence is the mechanism — Verification traces from an earlier version harmed 34 of 135 initially correct attempts. With current traces: 4 of 135. / What you already built, for this reason — One repair at most (for now). Acceptance judged on the final source attempt. Never reuse a PASS from before a repair. / A repair budget is not stinginess. It is the control that stops a loop thrashing away a correct answer. / Gao, Yang and Yang, Looping Is Not Reliability, arXiv 2607.24604.
**Shows.** Three headline statistics in cards — "%82" (blue), "%67,3" (red), "%84,7" (black/grey) — each with a caption. The percent-sign-before-number and comma-decimal formatting (e.g. "%82", "%67,3") looks like a locale/font artifact from the PowerPoint-to-PDF conversion rather than an intentional style, though the numeric values themselves are legible. Below, two cards explain the mechanism (stale verification traces corrupting revisions) and the workshop's resulting rule (one repair maximum, judged on the final attempt, no reuse of a pre-repair PASS).

## Slide 28 — Three decisions, three labs
**Text.** Three decisions, three labs / Each lab is one decision you make and can defend. / LAB 1 — the guide, then the sequence — The approved rule reaches the agent, and the checks run in an order you chose. / LAB 2 — bound the repair, and make it useful — One repair at most, carrying every failing finding in a single prompt. / LAB 3 — decide acceptance on the final attempt — A PASS from before the repair does not count toward the answer.
**Shows.** Three solid-blue circles arranged left to right, labelled "LAB 1", "LAB 2", "LAB 3" with a short phrase inside each, and a one-sentence explanation printed beneath each circle.

## Slide 29 — The sequence you wire (Lab 1)
**Text.** LAB 1 | the order you choose / The sequence you wire / build with approved policy / COMPILE — prerequisite: a FAIL skips everything below / LINT / BUSINESS_BEHAVIOR / ARCHITECTURE_BOUNDARY — independent findings, collected for one repair prompt / FULL_TEST_SUITE — only if all three focused checks PASS / one repair for current application FAIL findings, or stop / repeat the entire sequence on the repaired source / accept the exact final PASS set, or report UNRESOLVED / Two rules that are not negotiable / An ordinary FAIL must not hide another independent finding. / An ERROR stops the sequence. It is not a result to repair against. / ./harness.sh check / PASS COMPILE / PASS LINT / FAIL BUSINESS_BEHAVIOR / PASS ARCHITECTURE_BOUNDARY / SKIPPED FULL_TEST_SUITE
**Shows.** A vertical flowchart of stacked bars (blue for start/end steps, white for intermediate steps) showing the ordered pipeline: build → COMPILE → three parallel checks (LINT, BUSINESS_BEHAVIOR, ARCHITECTURE_BOUNDARY) → FULL_TEST_SUITE (conditional) → one repair → re-run → accept/report. To the right, a rules callout and a terminal-style output panel showing a sample run where BUSINESS_BEHAVIOR fails and FULL_TEST_SUITE is skipped as a result, colour-coded green/red/grey for PASS/FAIL/SKIPPED.

## Slide 30 — Acceptance is decided on the final attempt
**Text.** Acceptance is decided on the final attempt / Attempt 1 — BUSINESS_BEHAVIOR: FAIL / ARCHITECTURE_BOUNDARY: PASS / FULL_TEST_SUITE: SKIPPED / Attempt 2, after one repair — BUSINESS_BEHAVIOR: PASS / ARCHITECTURE_BOUNDARY: FAIL / FULL_TEST_SUITE: SKIPPED / Verdict: UNRESOLVED / Two green labels exist. They belong to two different versions of the source, and neither version passes everything that was required. Accumulating green across attempts is the single easiest way to build a loop that accepts broken work.
**Shows.** Two white cards side by side showing colour-coded pill results (green PASS, red FAIL, grey SKIPPED) for the same three checks across two attempts — the checks that pass flip between attempts (BUSINESS_BEHAVIOR fails then passes; ARCHITECTURE_BOUNDARY passes then fails) so no single attempt is fully green. A dark blue banner below states the verdict "UNRESOLVED", illustrating why per-check pass accumulation across attempts is invalid.

## Slide 31 — The outer harness is getting attention
**Text.** Where to look further / The outer harness is getting attention / No single tool has settled the whole design. The same pieces keep appearing separately. / Instructions — Claude code, codex... — repository-local guidance that reaches the agent first / Deterministic hooks — Claude Code, GitHub Copilot... — commands at lifecycle events: format, test, scan, block / Checks and repair — Dagger, Aider, Qodo Cover — run checks after edits, feed failures back, cap iterations / External verification — Harbor — Evaluate agent's result with task-defined verifiers outside the agent loop / Guarded delivery — GitHub Agentic Workflows — sandboxed jobs, read-only defaults, timeouts, approval gates / Many pieces exist. Deciding which properties matter, which sensors establish them, what justifies another attempt, and who may accept the result is still yours.
**Shows.** A five-row table (alternating white/light-blue shading) mapping harness-engineering concepts to real tools and a short description: Instructions, Deterministic hooks, Checks and repair, External verification, Guarded delivery. A bordered closing callout below reiterates that the human still owns the key design decisions.

## Slide 32 — Section divider: Over to you
**Text.** 06. / Over to you
**Shows.** Same full-bleed blue divider design, white serif heading "Over to you", label "06.". Xomnia logo bottom right, slide numbered 33 (deck's internal slide count is one ahead of the sequential position here, consistent with the offset seen since slide 26/27).

## Slide 33 — Contact
**Text.** Contact / Thank you for participating in this workshop / Data Engineer / Ji Darwish / ji.darwish@xomnia.com / github.com/JiDarwish/outer-harness-workshop / Xomnia B.V. / Amsterdam / xomnia.com
**Shows.** A large QR code top right for a link (presumably the GitHub repo or contact page). Bottom left, the same circular portrait of Ji Darwish as slide 2, with his title, name, and email beside it, and the GitHub repo URL in a bordered box below. Social icons (LinkedIn, Instagram, YouTube) bottom right area. Blue rounded "Contact" tab top left. Slide numbered 34.

## Slide 34 — Closing brand card
**Text.** xomnia / We make AI work / visit us at: / xomnia.com
**Shows.** Dark navy full-bleed closing slide with the large white "xomnia" wordmark, whose "o" is filled with a small collage of team photos (people posing together indoors). Tagline "We make AI work" beneath in a rounded sans-serif font, and "visit us at: xomnia.com" centred near the bottom. Faint thin circular line decorations in the top-right and bottom-left corners.
