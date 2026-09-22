---
title: "Sandboxing My AI Agent, One Layer at a Time"
speakers: [Juan A. Osorio]
session_id: fafe8a807af18ab835c8d7ba5ea212f8
kind: slides
deck: presentation-sandboxing-my-ai-agent-20260918-132809-0000.pdf
slides: 18
---

# Sandboxing My AI Agent, One Layer at a Time — slides

**Juan A. Osorio**

*Thursday 17 September 2026, 15:45, G102 + G103 — Open Source track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`presentation-sandboxing-my-ai-agent-20260918-132809-0000.pdf`](presentation-sandboxing-my-ai-agent-20260918-132809-0000.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Sandboxing my AI Agents, One Layer at a Time
**Text.** Sandboxing my AI Agents, One Layer at a Time / Juan Antonio "Ozz" Osorio / typing here and there @ STACKLOK
**Shows.** Title card on a black background: the title rendered twice — once as large white heavy-metal/black-metal style illegible gothic lettering as a decorative logo, and again underneath in plain readable serif type — with speaker name and the Stacklok logo (mountain/triangle icon) below.

## Slide 2 — Juan Antonio "Ozz" Osorio
**Text.** Juan Antonio "Ozz" Osorio / Mexican living in Finland / Background: security for OpenStack, Kubernetes, bare metal / "AI tooling should be secure by default, not secure by suffering"
**Shows.** Speaker bio slide on black background with bullet-style bio lines on the left, and on the right a stylised illustrated portrait of a bearded man in a wide-brimmed black hat holding up a young child against a bright blue sky with trees.

## Slide 3 — How it started…
**Text.** How it started… / What is this AI thing?
**Shows.** Black slide with the title and subtitle on the left; on the right, a large 3D-style dizzy/confused emoji with swirl eyes and a wavy mouth.

## Slide 4 — Look at this MCP thing…
**Text.** Look at this MCP thing… / Enter ToolHive
**Shows.** Black slide with title text on the left; on the right, a cartoon beaver mascot wearing goggles, holding a wrench, with small insect-like wings — the ToolHive mascot.

## Slide 5 — I was the bottleneck
**Text.** I was the bottleneck / One ~~careful~~ paranoid human / Read the plan. Check the command. Decide whether to continue. / Do you want to proceed? > 1. Yes / 2. Yes, allow reading from MyAwesomeProject/ during this session / 3. No / Esc to cancel · Tab to add additional instructions
**Shows.** Black slide with the title (the word "careful" struck through and replaced by "paranoid") and a subtitle describing manual review, alongside a terminal-style screenshot of an agent CLI permission prompt asking the human to approve, scope, or deny a proposed action.

## Slide 6 — But models got better…
**Text.** But models got better… / I'm just approving all the time now…
**Shows.** Black slide with title and subtitle text on the left; on the right, a stylised orange/red starburst or asterisk-shaped graphic, purely decorative.

## Slide 7 — So… I moved the whole agent
**Text.** So… I moved the whole agent / Enter Brood Box / Contain the whole process / Hardware-isolated microVM / Copy-on-write workspace / Constrained connectivity (egress and credentials) / --dangerously-skip-permissions
**Shows.** Black slide listing the "Brood Box" sandbox's three design properties as bullets, with a large monospace rendering of the CLI flag "--dangerously-skip-permissions" displayed prominently on the right as the thing being made safe to use.

## Slide 8 — The box kept getting thicker
**Text.** The box kept getting thicker / More autonomy. More controls. / Host / MicrVM - Libkrun / Guest kernel / Linux Userspace (Wolfi) / Seccomp / Agent / DNS-aware egress firewall / ToolHive (lib) / COW + file filtering FS layer / Interwebs / MCP(s) / Filesystem
**Shows.** Nested-box architecture diagram showing layered isolation on a "Host": a MicroVM (Libkrun) containing a guest kernel, containing a Linux userspace (Wolfi) layer, containing a Seccomp-filtered layer, containing the Agent at the centre. Three labelled connectors run from the Agent out to a DNS-aware egress firewall (reaching an "Interwebs" cloud icon and "MCP(s)"), a ToolHive library component, and a copy-on-write plus file-filtering filesystem layer (reaching "Filesystem").

## Slide 9 — What about scale?
**Text.** What about scale? / What about the cloud? / Are we just lifting and shifting?…
**Shows.** Black slide with the questions as text on the left; on the right, the Simpsons "Old Man Yells at Cloud" newspaper meme image (Abraham Simpson shaking his fist at a cloud in a framed photo held by a hand), used humorously to raise the objection that this per-machine isolation approach may not scale to the cloud.

## Slide 10 — Is the agent really a black box?
**Text.** Is the agent really a black box? / What is a coding agent anyway? / Let's open it up! / Identity & Access Management / Context Management & Enhancements / Permissions & Guardrails / HiL & Steering / Agent Loop / Execution & Persistence / State & Memory / Tool Execution
**Shows.** A hub-and-spoke diagram with "Agent Loop" as the central green node, connected by plain lines to seven surrounding component nodes: Identity & Access Management (highlighted in a different colour), Context Management & Enhancements, Permissions & Guardrails, HiL & Steering, Execution & Persistence, State & Memory, and Tool Execution — breaking the "black box" agent into its constituent subsystems.

## Slide 11 — The loop becomes infrastructure
**Text.** The loop becomes infrastructure / The loop needs explicit contracts / Identity + authorization — Who is acting, and what are they allowed to do? / Approvals + resume — How does work pause and safely continue? / File access + command execution — What is the agent able to see and run? / Persistence + events — What survives restart and can be replayed?
**Shows.** Nothing beyond the text; a black slide listing four contract areas the agent loop must define, each as a bolded heading with a clarifying question beneath it, arranged in a 2x2 grid.

## Slide 12 — Exploding the harness
**Text.** Exploding the harness / I want to open the box… But which box?
**Shows.** Black slide with title and subtitle on the left; on the right, a large photorealistic image of a fiery orange/white explosion burst, purely decorative, marking the transition to discussing the agent harness itself.

## Slide 13 — Mecatl
**Text.** Mecatl / An Open & Cloud Native Agent Harness / Workers are disposable — Durable sessions, pending approvals, replayable event history. / Delegation cannot widen authority — Subagents and teams stay within the capabilities their parent can grant. / Execution is explicit — Workspace and shell only when needed. Tools and services without either. / The same engine, your infra — Embed in Golang or serve or APIs. Bring your own providers, stores and clients.
**Shows.** Black slide introducing "Mecatl," an open cloud-native agent harness, with four labelled design-principle pairs (heading plus description) in a 2x2 grid; on the right, an illustrated mascot of a small dog-like creature (a Mexican hairless/chihuahua style animal) wearing a decorative rope collar with beads and charms, matching the project's Mecatl (Nahuatl-inspired) naming theme.

## Slide 14 — But how is this more secure?
**Text.** But how is this more secure? / Each component has a different boundary / Identity & Access Management / Context Management & Enhancements / Permissions & Guardrails / HiL & Steering / Agent Loop / Execution & Persistence / State & Memory / Tool Execution
**Shows.** The same hub-and-spoke "Agent Loop" diagram as slide 10, but now each connecting line to a component carries a small padlock icon, indicating that every link between the agent loop and its subsystems is its own enforced security boundary.

## Slide 15 — Why is the loop special?
**Text.** Why is the loop special? / Divide and conquer / Agent Loop Pod / Service / Context Management & Enhancements / Identity & Access Management / Permissions & Guardrails / Execution & Persistence / Tool Execution / State & Memory / HiL & Steering
**Shows.** A left-to-right diagram with "Agent Loop Pod / Service" as a single node on the left, crossed by a vertical red boundary line, then fanning out via padlock-marked connectors to seven separate component nodes on the right — illustrating that the agent loop itself is isolated as its own pod/service, separated by a hard boundary from every other component it talks to.

## Slide 16 — …But… What about the MicroVMs?
**Text.** …But… What about the MicroVMs?
**Shows.** Black slide with the question as large title text on the left; on the right, a glossy blue 3D worried/anxious emoji face, purely decorative.

## Slide 17 — Separation of concerns leads to security
**Text.** Separation of concerns leads to security / A smaller profile is a more safer one
**Shows.** Black slide with title and subtitle text on the left; on the right, an illustrated pair of magenta-handled scissors mid-cut, purely decorative, symbolising cutting down/reducing the attack surface.

## Slide 18 — Resources
**Text.** Resources / STACKLOK / ToolHive @ GitHub / Brood Box @ GitHub / Mecatl @ GitHub
**Shows.** Closing slide on black background with four QR codes arranged in a 2x2 grid, each labelled with the resource it links to (Stacklok, ToolHive on GitHub, Brood Box on GitHub, Mecatl on GitHub) for audience follow-up.
