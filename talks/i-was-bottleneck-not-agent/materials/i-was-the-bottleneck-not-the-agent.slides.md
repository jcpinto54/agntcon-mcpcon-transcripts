---
title: "I Was the Bottleneck, Not the Agent"
speakers: [Vincent Ysmal]
session_id: 5c333228cfbd2e521cd8abc590ec1651
kind: slides
deck: i-was-the-bottleneck-not-the-agent.pdf
slides: 49
---

# I Was the Bottleneck, Not the Agent — slides

**Vincent Ysmal**

*Friday 18 September 2026, 11:30, G102 + G103 — Agentic Engineering track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`i-was-the-bottleneck-not-the-agent.pdf`](i-was-the-bottleneck-not-the-agent.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** DATADOG / I Was the Bottleneck, Not the Agent / Vincent YSMAL · Senior Software Engineer, Datadog
**Shows.** Dark navy background with a faint decorative "circuit board" line-art pattern of interconnected coloured pipes (purple, blue, pink) running along the bottom, and the Datadog logo top-left.

## Slide 2 — Agent-1 queue, step 1
**Text.** the agent's done: code · test · PR / my done: read · deploy · click · feedback / agent-1 | code | test | PR | done | me | read | dep... / Agent-1 says done. I pick it up and start reading.
**Shows.** A Gantt-style timeline. A legend maps blue/purple blocks to "the agent's done" stages (code, test, PR) and pink/red blocks to "my done" stages (read, deploy, click, feedback). One row for agent-1 shows its blue blocks finished ("done") and a red "me" marker beginning, with a vertical red line marking the current time position partway through "read".

## Slide 3 — Agent-2 overtakes
**Text.** the agent's done: code · test · PR / my done: read · deploy · click · feedback / agent-1 | code | test | PR | done | me | read | deploy | click | feedback / agent-2 | code | test | PR | done | me | read | ... / Agent-2 starts, overtakes me, and is done. I'm still on agent-1.
**Shows.** Same Gantt chart, now with a second row (agent-2) added below agent-1. Agent-1's full row (code→test→PR→done→me→read→deploy→click→feedback) is complete. Agent-2 has caught up and is also past "done" onto "me" and "read". The vertical time marker now sits further right, at the end of agent-1's row, showing agent-2 finished its coding work faster than the narrator could review agent-1's.

## Slide 4 — Agents 3 and 4 land
**Text.** the agent's done: code · test · PR / my done: read · deploy · click · feedback / agent-1 | code | test | PR | done | me | read | deploy | click | feedback / agent-2 | code | test | PR | done | me | read | deploy | click | feedback / agent-3 | code | test | PR | done | me | read... / agent-4 | code | test | PR | done | me | ... / Agents 3 and 4 land while I'm on agent-2.
**Shows.** The Gantt chart now has four staggered rows (agent-1 through agent-4), each starting later and stacking diagonally down-right. Agent-1 and agent-2 rows are fully complete through "feedback"; agent-3 is on "read"; agent-4 has just reached "me" with a dotted box. The vertical time marker sits at the right edge of agent-2's completed row, showing the backlog of unreviewed agent output growing.

## Slide 5 — All eight agents done
**Text.** the agent's done: code · test · PR / my done: read · deploy · click · feedback / agent-1 through agent-8, each row: code | test | PR | done | me | ... / agent-4's "me" step shows "waiting" in place of the pink blocks / All eight are done. I've finished two reviews. The rest is queue.
**Shows.** The full Gantt chart with eight stacked rows (agent-1 to agent-8), each diagonally offset. Agent-1 and agent-2 rows are fully complete (through feedback). Agent-3 is mid-review. Agent-4's row shows a "waiting" placeholder spanning where review steps should be. Agents 5–8 have only reached "done" with a "me" marker just starting, all still queued. The vertical time marker sits at the far right, past agent-4's row, visually showing eight parallel agents finishing code faster than one person can review.

## Slide 6 — "Oh. I have created a problem."
**Text.** Oh. I have created a problem.
**Shows.** Full-bleed dark slide with the decorative circuit/pipe line art; no diagram, just the statement as a punchline after the preceding queue visualization.

## Slide 7 — Eight fast coworkers, one slow department
**Text.** Eight very fast coworkers. / One extremely slow QA department. / Me.
**Shows.** Same decorative circuit-pipe background; "Me." is rendered large in pink/red beneath the two grey lines, positioning the speaker as the bottleneck.

## Slide 8 — The honest math
**Text.** The honest math / 80% Parallelized across eight agents / 20% Still mine, eight times over
**Shows.** Two large stat callouts side by side: "80%" in white with caption "Parallelized across eight agents," and "20%" in pink with caption "Still mine, eight times over," illustrating that the small manual-review share becomes the true bottleneck when multiplied by eight parallel agents.

## Slide 9 — A reasonable "done"
**Text.** A reasonable "done" / Implementation → Tests → Pull request → DONE / Until you're running eight of them.
**Shows.** A horizontal flow of four boxes (Implementation, Tests, Pull request, each with a green checkmark, then a solid dark "DONE" box) connected by arrows, representing the agent's definition of done.

## Slide 10 — And then, the part nobody wrote down
**Text.** And then, the part nobody wrote down / Implementation → Tests → Pull request → DONE / ME → understand, deploy, exercise, inspect, decide / The work didn't disappear. It moved to the left of "done."
**Shows.** The same four-box flow from the previous slide, now greyed out, with a new pink "ME" box below and to the left, branching via an arrow up into "understand," followed by four more pink boxes (deploy, exercise, inspect, decide) representing the additional manual work the agent's "done" doesn't cover.

## Slide 11 — Agents didn't invent this
**Text.** Agents didn't invent this / Eng: Done. / QA: Where can I test it? / Eng: Well, it works on my machine. / PM: Is that available for customers? / Every job I've had. Four definitions of done, none of them written down.
**Shows.** A four-line dialogue transcript with role labels (Eng, QA, Eng, PM) in different colours, laid out like a chat log, illustrating that ambiguous "done" predates AI agents.

## Slide 12 — The agent wasn't failing its definition of done
**Text.** The agent wasn't failing its definition of done. I had failed to define the one I actually needed.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background; statement stands alone as the section's thesis.

## Slide 13 — THE TASK: feature flag
**Text.** THE TASK / Add a feature flag to hide the export button.
**Shows.** Nothing beyond the text.

## Slide 14 — What came back
**Text.** What came back / Code ✓ / Tests ✓ / Pull request ✓
**Shows.** Three dark cards in a row, each with a green checkmark and a label (Code, Tests, Pull request), showing the agent's deliverables for the feature-flag task.

## Slide 15 — Done?
**Text.** Code ✓ | Tests ✓ | Pull request ✓ / Done?
**Shows.** The three checked items from the previous slide now shown small and greyed at top, with a large "Done?" headline below, the question mark in pink, casting doubt on the agent's claim of completion.

## Slide 16 — Flag on, then refresh
**Text.** Flag on, then refresh / service:web-store / REFRESH / service:web-store Export / ✓ Button hidden / ✕ Button is back / ✓ Tests: still green
**Shows.** A before/after UI mock: left panel shows a search box for "service:web-store" with the export button hidden (checked "Button hidden"); a refresh icon in the middle; right panel (outlined in pink, indicating a problem) shows the same search box but now with a blue "Export" button visible again, marked with a red X "Button is back." Below, "Tests: still green" is checked, showing the automated tests missed the regression.

## Slide 17 — Two definitions of done
**Text.** Two definitions of done / THE AGENT'S DONE: Implementation, Tests, Pull request, DONE / MY ACTUALLY-DONE: Understand, Deploy, Exercise the workflow, Inspect the evidence, Decide
**Shows.** Two side-by-side cards contrasting a short checklist ("the agent's done," ending in a dark "DONE" button) against a longer pink-bordered list ("my actually-done") with five steps, visually sizing up how much more work the human definition includes.

## Slide 18 — Move it left
**Text.** Move it left / Implementation | Tests | Deploy | Exercise | Inspect | Pull request | DONE / The work didn't disappear. It moved to the left of "done." / My review → The agent's entry requirement
**Shows.** A horizontal pipeline box with seven steps in sequence (Implementation, Tests, then three pink-highlighted steps Deploy/Exercise/Inspect, then Pull request, then dark DONE), showing the previously-invisible verification steps inserted before "done." Below, an arrow shows "My review" becoming "The agent's entry requirement," meaning verification moves upstream into the agent's own workflow.

## Slide 19 — What I ask for (build 1, empty)
**Text.** What I ask for / WHAT I USED TO WRITE: Add a feature flag to hide the export button. / WHAT I WRITE NOW: (empty)
**Shows.** Two side-by-side boxes; the left ("what I used to write") is filled in with the original task prompt; the right ("what I write now") is outlined but empty, set up to be filled progressively on subsequent slides.

## Slide 20 — What I ask for (build 2)
**Text.** What I ask for / WHAT I USED TO WRITE: Add a feature flag to hide the export button. / WHAT I WRITE NOW: The button is hidden when the flag is on.
**Shows.** Same two-box layout as the previous slide; the right box now shows its first line of the new, more explicit prompt.

## Slide 21 — What I ask for (build 3)
**Text.** What I ask for / WHAT I USED TO WRITE: Add a feature flag to hide the export button. / WHAT I WRITE NOW: The button is hidden when the flag is on. / It stays hidden after a refresh. (in pink)
**Shows.** Same two-box layout; the right box now has two lines, the second highlighted in pink as the newly added, previously-missing requirement (persistence across refresh).

## Slide 22 — What I ask for (build 4, final)
**Text.** What I ask for / WHAT I USED TO WRITE: Add a feature flag to hide the export button. / WHAT I WRITE NOW: The button is hidden when the flag is on. / It stays hidden after a refresh. / When the flag is off, nothing else changes.
**Shows.** Same two-box layout, now with three lines in the right box: the base behaviour, the persistence requirement (in pink), and a new control-case requirement about the flag being off, completing the more explicit task description.

## Slide 23 — "Done" is the claims you need proven
**Text.** "Done" is the claims you need proven, not the plan you'd have followed.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background; a short purple rule sits above the quote.

## Slide 24 — What I'd tell a new joiner
**Text.** What I'd tell a new joiner / WEEK ONE, FIRST PR: "Did you test it?" / "Here's how you deploy it." / "The logs live here." / WHAT I GAVE THE AGENT: A task. / No definition of done. / And the expectation that it already knew the rest. / Nobody expects a new joiner to be omniscient. I expected it of the agent.
**Shows.** Two side-by-side cards: a blue-bordered "week one, first PR" card with three onboarding quotes a manager would say to a human new hire, and a pink-bordered "what I gave the agent" card with three terse bullets showing the agent got none of that context.

## Slide 25 — The closed loop
**Text.** The closed loop / Act — Get the change into a testable environment. → Observe — Exercise the real workflow in a browser. → Compare — Behavior against the claim. / ↵ and back to Act
**Shows.** Three connected boxes in a horizontal flow (Act → Observe → Compare) with a looping return arrow labelled "and back to Act" beneath the first box, depicting an iterative verification loop.

## Slide 26 — First, a deployment skill
**Text.** First, a deployment skill / Current change → Isolated environment → live URL / One capability, invoked whenever a task needs live validation.
**Shows.** A three-box horizontal flow (Current change → Isolated environment, highlighted blue → live URL, highlighted pink/outlined, shown in monospace font) representing a deployment tool the agent can call.

## Slide 27 — Is the right thing actually running?
**Text.** Is the right thing actually running? / ✓ Source state identified / ✓ Build completed / ✓ Artifacts synchronized / ✓ Service restarted / ✓ Health check passed / A deployment command is an action. / A verified deployment is a fact.
**Shows.** A white checklist card with five green-checked deployment steps on the left; on the right, two short lines contrast "a deployment command is an action" (grey) against "a verified deployment is a fact" (bold dark red), emphasizing verification over assumption.

## Slide 28 — Observe
**Text.** Observe / Act → Observe (Flag on · load the page · refresh) → Compare / The workflow a person would actually use, run by the agent, not by me.
**Shows.** The three-box Act/Observe/Compare flow repeated from slide 25, with "Observe" now highlighted and expanded to show its sub-steps: "Flag on · load the page · refresh."

## Slide 29 — Also test the case I didn't ask about
**Text.** Also test the case I didn't ask about / EXPECTED CASE: Flag on → the button is gone / CONTROL CASE: Flag off → the button is still there / Without the control case, deleting the button passes every test.
**Shows.** Two side-by-side cards contrasting the "expected case" (flag on hides the button) with a pink-bordered "control case" (flag off leaves the button), illustrating why a negative/control test is needed to catch a trivial wrong fix (deleting the button entirely).

## Slide 30 — The claim fails
**Text.** The claim fails / ✕ It stays hidden after a refresh / [mock UI: empty search bar, Export button] / Button reappears on reload / Same bug as before. / Found inside the loop, not in my browser.
**Shows.** A pink-outlined card showing a red X against the claim "it stays hidden after a refresh," with a small UI mockup showing the Export button present, captioned "Button reappears on reload." To the right, text notes this is the same regression as before, but now caught automatically by the agent's own verification loop instead of by the human in their browser.

## Slide 31 — Compare against independent evidence
**Text.** Compare against independent evidence / Compare → flag.export_hidden read=false / source=default (no persisted value) / trace 4f2c · page_load / Logs and traces, not the agent's own account of what it wrote.
**Shows.** A "Compare" box with an arrow pointing to a monospace log/trace readout showing the flag read as false, sourced from default with no persisted value, and a trace ID — representing external system evidence used to check the agent's claim rather than trusting its self-report.

## Slide 32 — One signal is never enough
**Text.** One signal is never enough / USER SURFACE: Live URL, Visible behavior, Screenshot / RUNNING SYSTEM: Logs, Traces, Database state / AGENT SESSION: Recorded session, Tool calls, Tool results / A tool call shows the model asked. A tool result shows it ran.
**Shows.** Three side-by-side cards (User surface in pink, Running system in blue, Agent session in indigo), each listing three evidence types, showing multiple independent sources of proof are combined rather than relying on any single one.

## Slide 33 — Fix, redeploy, rerun the same scenario
**Text.** Fix, redeploy, rerun the same scenario / Fix the cause → Redeploy → Rerun the failing scenario → ✓ Proven / The same scenario that broke, not a new, easier one.
**Shows.** A four-box horizontal flow (Fix the cause, Redeploy, Rerun the failing scenario highlighted blue, and a green "✓ Proven" box) depicting the remediation loop after a failed claim, with emphasis that the exact same failing scenario must be rerun.

## Slide 34 — Two ways out of the loop
**Text.** Two ways out of the loop / ✓ Proven — Here is the evidence. / ⚠ Blocked — Here is exactly what is stopping me. / ~~Quietly tested something easier~~
**Shows.** Two cards: a green "Proven" card and an amber/orange "Blocked" card, presented as the only two legitimate exits from the verification loop. Below, a third option, "Quietly tested something easier," is struck through in pink, marked as unacceptable.

## Slide 35 — Prove the behavior, or tell me what's stopping you
**Text.** Prove the behavior, or tell me what's stopping you. Those are the only two doors.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background and a short purple rule above the quote.

## Slide 36 — The PR as a diary
**Text.** The PR as a diary / Refactored the flag provider to read from the shared config loader. Added a `useExportFlag` hook and wired it through the toolbar container. Updated the export button component to accept a visibility prop. Renamed `exportEnabled` to `exportVisible` for consistency with the other flags. Also touched the config loader to memoize reads, since the provider was re-reading on every render. Added unit tests for the hook and snapshot tests for the toolbar. Updated three fixtures that referenced the old prop name. Removed a dead branch in the legacy toolbar that no longer compiles under the new prop type. Left the mobile toolbar alone for now — it uses a separate component tree and did not need changes. Rebased on main twice to pick up the config loader changes from #4412. / Everything it did. Nothing about whether it works.
**Shows.** A single white card containing the full paragraph of PR description text transcribed above, styled as a diary-like narrative of implementation steps, contrasted against the caption below noting it documents activity, not verification.

## Slide 37 — The PR as a decision packet
**Text.** The PR as a decision packet / CLAIM: The export button is hidden when the flag is on, and stays hidden after a refresh. / EVIDENCE: Live link at commit a3f19c2 / Scoped logs: flag read on reload / Recording of the workflow / RISK: Touches the shared config loader. Other flags read from it. / UNKNOWN: Couldn't verify on mobile. No device in the test environment.
**Shows.** A 2x2 grid of cards — Claim (purple heading), Evidence (purple heading, with link/log/recording icons), Risk (orange heading), and Unknown (amber-highlighted card) — reframing the PR as a structured decision document instead of a narrative diary.

## Slide 38 — What I answer instead
**Text.** What I answer instead / 01 Do I believe the claim? / 02 Does the evidence support it? / 03 Do I accept the risk? / 04 Do I understand what's unknown?
**Shows.** A numbered list (01–04) of four review questions the speaker now asks of every PR, replacing "did you test it."

## Slide 39 — I made "done" more expensive for the agent
**Text.** I made "done" more expensive for the agent. / And cheaper for me.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background; the second line is highlighted in pink as the payoff statement.

## Slide 40 — But I still find myself babysitting
**Text.** But I still find myself babysitting.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background; a single transitional line into the next section.

## Slide 41 — Filed against my system, not the agent
**Text.** Filed against my system, not the agent / BUG: I checked the same thing by hand, again / Component: My system, not the agent / Steps to reproduce: Hand a task to an agent. Wait. Ask the same follow-up question I asked last time. / Expected: The environment already knows to check this. / Severity: Recurring, once per agent, per task
**Shows.** A mock bug-tracker ticket card with a red "BUG" tag and title, formatted with standard fields (Component, Steps to reproduce, Expected, Severity), framing the manual-babysitting problem as a bug in the speaker's own system rather than the agent's fault.

## Slide 42 — Improve the environment, not the conversation
**Text.** Improve the environment, not the conversation / Unclear expectation → Instruction / Repeated workflow → Skill / Fragile manual operation → Tool / Recurring failure → Regression test / The environment remembers, so I don't have to.
**Shows.** A four-row mapping table with arrows showing each recurring problem type on the left converted into a permanent environment fixture on the right (instruction, skill, tool, regression test).

## Slide 43 — Where an instruction lives
**Text.** Where an instruction lives / AGENTS.md — read at the start of every session / # Definition of done / - Deployed to an isolated environment, commit verified live / - Behavior exercised in a browser: expected case and control case / - Evidence attached: live link, scoped logs, recording / - Anything unproven listed explicitly / # Skills: deploy · browser · evidence / I describe the behaviors to validate. The repository provides the operating instructions.
**Shows.** A code-style card showing the contents of an `AGENTS.md` file with a "Definition of done" checklist (four bullet points) and a "Skills" line listing deploy, browser, evidence — the standing instructions read automatically at the start of every agent session.

## Slide 44 — Prompting each step isn't autonomy
**Text.** Prompting each step isn't autonomy / IN THE CONVERSATION: > please deploy this / > now check it's ready / > now look at the logs / > now run it again / IN THE ENVIRONMENT: Standing instructions / Verification skill / Deploy + health tool / Regression tests / The loop is the default. I don't prompt it. / A very expensive command line.
**Shows.** Two side-by-side cards contrasting a manual chat transcript of step-by-step commands (left, in monospace, grey) against a list of persistent environment capabilities (right, highlighted blue) that make the verification loop automatic rather than manually triggered.

## Slide 45 — Eight-agent queue, revisited
**Text.** the agent's done: code · test · PR / my done: read · deploy · click · feedback / agent-1 through agent-8 rows, each: code | test | PR | done | me | read | deploy | click | feedback / agent-4's row shows "waiting" in place of review steps
**Shows.** The same eight-row staggered Gantt chart from slide 5 is shown again in full width, without a caption line beneath it, re-displaying the original backlog visualization as a callback before the closing reframe.

## Slide 46 — My role moved
**Text.** My role moved / Decide what to build → The loop runs: deploy, exercise, inspect, prove → Judge the evidence
**Shows.** A three-box horizontal flow with the first and third boxes ("Decide what to build," "Judge the evidence") outlined in solid pink and the middle box ("The loop runs: deploy, exercise, inspect, prove") shown dashed/greyed-out, indicating that step is now automated and no longer part of the speaker's active role.

## Slide 47 — I stopped finishing the agent's work
**Text.** I stopped finishing the agent's work, and started deciding whether I believed it.
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background and a short purple rule above the closing statement.

## Slide 48 — Can I turn this babysitting into tooling?
**Text.** Can I turn this babysitting into tooling?
**Shows.** Full-bleed dark slide with the decorative circuit-pipe background; a forward-looking closing question.

## Slide 49 — Feedback / closing card
**Text.** FEEDBACK / Scan to rate this talk / Goes to me and the event organizers. / sfeedback.com/Jv5gnu / I Was the Bottleneck, Not the Agent / Vincent YSMAL, Datadog
**Shows.** A QR code in a white box (captioned "I Was the Bottleneck, Not the Agent" underneath it) on the right, with feedback instructions and the talk title/speaker credit on the left, over the same decorative circuit-pipe background used throughout the deck.
