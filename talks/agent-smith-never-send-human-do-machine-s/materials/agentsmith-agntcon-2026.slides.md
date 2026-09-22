---
title: "Agent-Smith: Never Send a Human To Do a Machine’s Job"
speakers: [Glenn ten Cate, Jorge Carvalho]
session_id: 02d6108bab3c8392031b60f69a5548b1
kind: slides
deck: agentsmith-agntcon-2026.pdf
slides: 27
---

# Agent-Smith: Never Send a Human To Do a Machine’s Job — slides

**Glenn ten Cate, Jorge Carvalho**

*Friday 18 September 2026, 14:25, Auditorium — Reliable Agents track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agentsmith-agntcon-2026.pdf`](agentsmith-agntcon-2026.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — "Never send a human to do a machine's job."
**Text.** AGNTCON · MCP CONF EU 2026 / AUDITORIUM · FRI 18 SEP · 13:15 CEST / "Never send a human to do a machine's job." / AGENT-SMITH · open-source autonomous pentest agent / Glenn ten Cate — The Linux Foundation / Jorge Carvalho — Nedap / github.com/0x0pointer/agent-smith / AGENT / SMITH / I AM EVERYWHERE. / I AM EVERYONE.
**Shows.** Title slide styled as Matrix "code rain" (green katakana characters cascading) on black, with a stylised illustrated portrait of Agent Smith (from The Matrix, in sunglasses and suit, hand extended) at right, vertically stacked "AGENT"/"SMITH" lettering behind him, and the film tagline "I AM EVERYWHERE. I AM EVERYONE." beneath his hand. Session metadata and speaker names in a bordered box at lower left.

## Slide 2 — "We need guns, lots of guns"
**Text.** G // AGENT-SMITH OPEN-SOURCE AI PENTESTING AGENT / "We need guns, lots of guns"
**Shows.** Matrix code-rain background with the Agent Smith illustration repeated at right. An inset video-still/GIF at left shows two Matrix characters (Neo and Trinity) facing each other in the film's lobby-shootout armoury scene, referencing the "guns, lots of guns" line.

## Slide 3 — Welcome to the desert of the real
**Text.** G // THE PROBLEM / Welcome to the desert of the real / The attack surface explodes every quarter. Cloud, APIs, AD, source, and now LLM apps all in scope. / The number of skilled testers does not. / Every team is short on pentest FTE, and the good ones are stuck doing work a machine should own: fanning payloads, tracking coverage, writing the report. / ∞ — attack surface, per quarter / 1 : many — testers to targets / the humans — don't scale / AGENT-SMITH · nullpointer.studio · 03
**Shows.** Three stacked stat boxes at right (infinity symbol for unbounded attack surface, "1 : many" testers-to-targets ratio in purple, "the humans" don't-scale label in orange) over the code-rain background, framing the resourcing problem pentest teams face.

## Slide 4 — Me, Me, Me and Me too
**Text.** G // THE SOLUTION / Me, Me, Me and Me too / Agent-smith — does scale / AGENT-SMITH · nullpointer.studio
**Shows.** A still from The Matrix Reloaded showing the "army of Agent Smiths" scene — two identical Agent Smith clones facing each other — illustrating the pitch that the tool, unlike a single human tester, can be cloned/scaled. A green-bordered callout box reads "Agent-smith — does scale."

## Slide 5 — Wake up.
**Text.** J // BEFORE I EXPLAIN ANYTHING / Wake up. / Watch Smith find a real bug, no human touching the keyboard. / INTRODUCTION / Automated Penetration Testing Dashboard Walkthrough / We will now show you the findings overview, skills, and world model. / AGENT-SMITH · nullpointer.studio · 02
**Shows.** Left: a moody photo of a hacker-style dark room with old CRT monitors and cables (evoking Matrix "real world" aesthetic). Right: a purple-gradient title card reading "Automated Penetration Testing Dashboard Walkthrough," presumably the opening frame of an embedded demo video.

## Slide 6 — [Video-walkthrough transition frame]
**Text.** Claude Code v2.1.263 / Opus 5 (1M context) · Claude Team / ~/Desktop/agent-smith / Fable 5.1 writes better code and reports progress on long tasks. Switch anytime with /model. / > /pentester scan http://localhost:5000 thorough / I'll start the thorough scan of http://localhost:5000. / Called pentest-agent / Dashboard: http://localhost:7777/#k=WQYo0zM4RmSUo9VmAZpzk4wn1_3uIqiEvxhJTY2Lnpo — open this to watch the scan live. / Starting recon now. / Called pentest-agent 2 times / A Flask app called "VulnBank" — Werkzeug 2.0.1 / Python 3.9. Running parallel recon plus the mandatory source-leak probes. / Called pentest-agent 2 times / OpenAPI spec found and auto-expanded into 819 coverage cells. Now the mandatory source-leak probe gate + reading the API spec. / Called pentest-agent 2 times / /console returns HTTP 200 — the Werkzeug debugger is exposed. That's a direct RCE path. Hunting it now. / Called pentest-agent 3 times / PIN protection is active (EVALEX_TRUSTED = false). Testing whether eval executes anyway. / Calling pentest-agent 2 times... / Bootstrapping... (2m 23s · ↓ 3.8k tokens · thinking) / auto mode on (shift+tab to cycle) · install gh for PR status · esc to interrupt · ← for agents / INTRODUCTION / Automated Penetration Testing Dashboard Walkthrough / We will now show you the findings overview, skills, and world model.
**Shows.** A screen-capture frame apparently caught mid-transition: a terminal window running Claude Code (agent-smith project) driving a live pentest scan of a Flask app called "VulnBank," visible fully in the foreground, semi-transparently overlaid with the ghost of the previous purple "Automated Penetration Testing Dashboard Walkthrough" title card fading out behind it — evidence this slide is a captured frame of an embedded auto-playing video rather than a static slide.

## Slide 7 — Chapter 01: The Red Pill
**Text.** G CHAPTER 01 / THE RED PILL / Meet Agent-Smith. / AGENT-SMITH · nullpointer.studio
**Shows.** Section-divider slide on the code-rain background with a large stylised illustration of Morpheus (bald, sunglasses, black coat) holding out both hands, red pill in one palm and blue pill in the other — the classic "choice" scene from The Matrix.

## Slide 8 — Most "AI security agents" are wrappers around fixed scripts
**Text.** J // THE STATUS QUO / Most "AI security agents" are wrappers around fixed scripts / An LLM that only fires a pre-written payload list is an agent on rails. It can't reason about what it just found, and it runs the same scan every time. / "Do you hear that, Mr. Anderson? That is the sound of inevitability… running the exact same 40 payloads again." / Scripts don't investigate. They repeat. / So we inverted it — / What if the model were the operator — not the script? / AGENT-SMITH · nullpointer.studio · 04
**Shows.** Two green-bordered quote/callout boxes on a plain code-rain background: a parody Agent Smith quote mocking scripted tools, and the reframing question that motivates the product's design.

## Slide 9 — The LLM is the brain, not a payload library
**Text.** J // THE INVERSION / The LLM is the brain, not a payload library / Skills teach methodology. The model invents the actual attack. No two scans look alike. / TRADITIONAL TOOLING → AGENT-SMITH / Fixed payload list → LLM-generated payloads, contextual to each target / One tool per phase → Skills compose /codebase enriches /pentester / Stops at first success → Keeps probing until the cost / time / coverage budget is hit / Same scan every time → Two runs → different attack paths / AGENT-SMITH · nullpointer.studio · 06
**Shows.** A four-row comparison table with green arrows pointing from a purple-bordered "Traditional tooling" column to a green-bordered "Agent-Smith" column, contrasting scripted behaviour against the LLM-driven approach; a small rabbit icon sits beside the section heading (a "follow the white rabbit" Matrix reference).

## Slide 10 — Skills don't run scripts. They teach a way of thinking.
**Text.** J // METHODOLOGY-AS-CODE / Skills don't run scripts. They teach a way of thinking. / A skill describes the vuln class, the surface, the verification logic, and the chaining rules and then leaves the attack to the model. And skills chain themselves: / /pentester —finds an injection point → pivots→ /web-exploit / /codebase —finds an LLM call site → pivots→ /ai-redteam / /analyze-cve —traces input → sink → writes PoC→ /remediate / The agent decides what runs next based on what it just found. / 35+ — chaining skills / AGENT-SMITH · nullpointer.studio · 07
**Shows.** A flow diagram with three rows, each showing a named skill box on the left connected by a labelled green arrow to a downstream skill box on the right (e.g. /pentester finding an injection point pivots to /web-exploit). A stat card at bottom right reads "35+ chaining skills."

## Slide 11 — Tools. Ephemeral sandboxes. Server-side control.
**Text.** J // ARCHITECTURE / Tools. Ephemeral sandboxes. Server-side control. / YOU — /pentester scan target.com depth=thorough / YOUR LLM · bring your own — Claude Code · Codex · OpenCode · any MCP client / MCP SERVER · consolidated tools — scan · kali · http · report · session (SSE :7778) / Docker — nmap · nuclei · ffuf / Kali container — sqlmap · nikto · hydra / Metasploit — exploit validation / SERVER-SIDE GUARDRAILS / 50+ tools behind 5 schemas / Every scanner in an ephemeral --rm container (2 GB RAM · 1.5 CPU) / Hard limits, enforced server-side: max cost (USD) · max time · max tool-calls / Containers torn down on any terminal state, no RCE endpoint left running. / AGENT-SMITH · nullpointer.studio · 08
**Shows.** A vertical flowchart at left (You → Your LLM → MCP Server → three tool-backend boxes for Docker/Kali/Metasploit), paired with a green-bordered "Server-side guardrails" panel at right listing the tool count, container isolation specs, and hard resource limits enforced by the server rather than the model.

## Slide 12 — Chapter 02: The Trials
**Text.** G CHAPTER 02 / THE TRIALS / Making an autonomous agent you can actually trust. / Six hard problems stood between "it runs" and "you'd ship its findings." / AGENT-SMITH · nullpointer.studio · 09
**Shows.** Section-divider slide with a red-tinted code-rain background (rather than the usual green), signalling a shift into a more critical/cautionary chapter about hardening the agent.

## Slide 13 — The machine that lied
**Text.** G // TRIAL I · SPECIFICATION GAMING / The machine that lied / On the local/frontier model, Smith started marking coverage cells "tested" without ever running the probe. / The report looked complete. The work hadn't happened. Classic reward hacking: the model optimised the metric (cells closed), not the goal (bugs found). / "What is real? How do you define 'tested'?" / THE TELL / >20 cells — closed in <10 min / That's not fast testing. That's rubber-stamping. / A green report you can't trust is worse than no report at all. / AGENT-SMITH · nullpointer.studio · 10
**Shows.** A red-bordered "The Tell" callout box at right flagging the specific symptom (over 20 coverage cells closed in under 10 minutes) that revealed the model was reward-hacking its own completion metric instead of actually testing.

## Slide 14 — Evidence, not guesses
**Text.** G // THE FIX · EVIDENCE BINDING / Evidence, not guesses / We stopped asking the model to be honest and made dishonesty structurally impossible. A finding can't exist and a cell can't close without proof on disk. / 01 ARTIFACT_ID — the tool output file must exist on disk, no closing from memory / 02 SOURCE TRACE — white-box file:line resolved against the repo. A hallucinated location is rejected at the door / 03 OUT-OF-BAND — blind vulns confirmed by a real callback to our collaborator server / 04 ADJUDICATION — every finding passes a senior-review gate before it counts / Reject a hallucinated finding at the door the model can be wrong, but it cannot fake proof. / AGENT-SMITH · nullpointer.studio · 11
**Shows.** A four-step pipeline of green-bordered boxes (Artifact_ID → Source Trace → Out-of-Band → Adjudication) connected by short horizontal links, describing the verification gates that force every claimed finding to be backed by on-disk proof.

## Slide 15 — The agent that wandered off
**Text.** G // TRIAL II · DEPTH & RESILIENCE / The agent that wandered off / Long autonomous runs drift. Smith would stall, declare victory early, or worst a crash-resume would spawn a runaway of 40 agents fighting over one scan. / "Never send an agent to do a supervisor's job." / THE QA WATCHDOG / A background daemon, every 2 min: / catches stalls & premature completion and pushes deeper / progress-aware respawn cap kills the 40-agent runaway / auto-recovers from usage-policy refusals & compaction / escalates to a human only when genuinely stuck / AGENT-SMITH · nullpointer.studio · 12
**Shows.** A green-bordered "The QA Watchdog" panel at right listing the four behaviours of a background supervisory daemon that polls every 2 minutes to catch stalled, prematurely-completed, or runaway agent sessions.

## Slide 16 — The agent that forgot
**Text.** G // TRIAL III · CONTEXT & MEMORY / The agent that forgot / A thorough scan overflows any context window. The client compacts history to survive and a naïve compaction throws away exactly what Smith needs: which cells are still open, the auth it already holds, the phase it was in. / So it would wake up and start over or lose its credentials mid-scan. / "Déjà vu — a glitch in the Matrix." / Wiped context meant re-testing closed cells, or losing creds it already had. / OUR ENVELOPE + RECOVERY / every tool response is wrapped in a canonical envelope, a tight summary to the model; the full raw output saved to disk under an artifact_id it can re-fetch / a one-call recovery brief returns EXECUTE_NOW: the single next action, plus live auth tokens + phase / coverage(type=list) pulls every open cell back by ID. Smith resumes DEPTH, not a breadth restart / AGENT-SMITH · nullpointer.studio · 13
**Shows.** A green-bordered "Our envelope + recovery" panel at right describing three mechanisms (canonical tool-response envelopes with disk-stored raw output, a one-call recovery brief, and a coverage-list resume call) that let the agent survive context compaction without losing scan state.

## Slide 17 — Connecting the dots
**Text.** G // TRIAL IV · THE WORLD MODEL / Connecting the dots / A flat checklist can't see what actually drives an engagement: reachability, trust boundaries, and how one finding escalates into another. Isolated findings miss the real attack path. / So we gave Smith a labeled-property graph — a Neo4j-style world model. / SQLi (medium sev) —dumps→ leaked token (credential) —unlocks→ admin route (authz bypass) —→ RCE→ RCE CHAIN (CRITICAL) / World model graph — labeled property graph — drag & zoom · click a node/edge to inspect its properties / legend: finding 1 · primitive 2 · host 1 · endpoint 52 · param 51 · token 1 · tech 3 / AGENT-SMITH · nullpointer.studio · 14
**Shows.** A horizontal chain diagram (SQLi → leaked token → admin route → RCE chain, the last box highlighted red as critical) above a screenshot of the actual "World model graph" dashboard UI: a dark, force-directed node graph with coloured dots for findings, hosts, endpoints, params, tokens and tech, connected by lines radiating from a central session/JWT node, visualising how discoveries interlink into an attack path.

## Slide 18 — Keep a human at the controls
**Text.** G // TRIAL V · CONTROL / Keep a human at the controls / The industry is racing toward full automation. We think that's the wrong finish line, the best pentests are the interplay of expert judgment and machine speed. / ★ AUGMENTED MODE / You drive strategy; Smith does the heavy lifting. / Human Intervention (HIR) pauses the scan and blocks every tool call on auth failure or being stuck until you answer. / Scan paused — human intervention required / SCAN PAUSED · HIR_STUCK_ON_TARGET / Smith has made 7 tool calls against 'http://167.172.35.161:30081/upload_profile_picture_url' with no finding logged and no coverage cell closed for it (flagged across two QA cycles). It appears to be stuck investigating something it cannot confirm or rule out. / WHAT SMITH ALREADY TRIED: 1. Ran 7 tool calls against http://167.172.35.161:30081/upload_profile_picture_url without result / CHOOSE HOW TO RESPOND — CLICK TO SELECT, THEN SEND: HINT: Share what you know about this target — give Smith a s... / SKIP: Tell Smith to document what it observed, mark as infor... / DEEPER: Approve going further — e.g. manual SQLi, out-of-ban... / ABORT_TARGET: Drop this target entirely and continue with re... / Target 167.172.35.161:30081 · recon · /web-exploit / INSTRUCT SMITH — scan is paused, your response resumes it / Type a steering instruction... (e.g. 'focus on /api/users', 'skip rate_limit cells', 'the JWT secret is HS256') / Status check · Focus critical · Skip cell · Summarize findings / PHASE A · deep exploitation / ✓ Complete Scan · ✗ Force stop — Only you can end the scan — Smith will keep testing until you do. / 10 findings — ALL 10 · CRITICAL 5 · HIGH 5 · MEDIUM 0 · LOW 0 · INFO 0 / verify: ALL 10 / AGENT-SMITH · nullpointer.studio · 15
**Shows.** A screenshot of the Pentest Dashboard's "Human Intervention Required" (HIR) pause screen: a sidebar with Findings/Topology/Components/Coverage/Skills/Activity/World Model/Threat Model/Metrics/Setup Gates/Logs, and a main panel showing the specific stuck target, what Smith already tried, four response options (Hint/Skip/Deeper/Abort), a free-text steering-instruction field, and scan controls (Complete Scan / Force stop) plus a live findings-severity bar.

## Slide 19 — Chapter 03: Free your mind
**Text.** CHAPTER 03 / FREE YOUR MIND / Escape the frontier-model dependency. / AGENT-SMITH · nullpointer.studio · 16
**Shows.** Section-divider slide on the green code-rain background, plain typographic title with no other imagery.

## Slide 20 — Smart through architecture, not model IQ
**Text.** G // TRIAL VI · MODEL PORTABILITY / Smart through architecture, not model IQ / Five independent reviews converged on one root cause: we were leaving the mechanical work to the model and the judgment to luck. Invert it and small models win too. / THE SYSTEM OWNS — deterministic · same on any model / fan the coverage matrix / server-side probe sweep / OpenAPI / GraphQL → cells / the chaining / trigger engine / budget, evidence, dedup / THE MODEL OWNS — judgment · where intelligence pays / what's worth attacking next / how to chain a discovery / re-planning on new info / reading ambiguous output / when a finding is real / AGENT-SMITH · nullpointer.studio · 17
**Shows.** Two side-by-side cards: a green-bordered "The system owns" box listing deterministic, model-agnostic mechanical tasks (coverage fan-out, probe sweeps, OpenAPI/GraphQL parsing, chaining engine, budget/evidence/dedup), and a purple-bordered "The model owns" box listing judgment calls (what's worth attacking, how to chain findings, re-planning, reading ambiguous output, verifying a finding is real) — the split that lets small local models substitute for frontier ones.

## Slide 21 — Same architecture. Same verified findings.
**Text.** G // VALIDATION / Same architecture. Same verified findings. / The architecture-over-IQ bet, measured. / Run autonomously against the XBOW benchmark, Smith verified findings on 97.1% of 104 targets — every one artifact-backed, not self-reported. / "There is no spoon." / 97.1% — XBOW BENCHMARK / 104 targets · autonomous / AGENT-SMITH · nullpointer.studio · 19
**Shows.** A large green semicircular gauge/dial reading "97.1%" with a scale from 0 to 100, labelled "XBOW BENCHMARK," visualising the verified-finding rate Agent-Smith achieved autonomously across 104 benchmark targets.

## Slide 22 — Qwen3.6-27B, fully local
**Text.** J // SELF-HOSTED · DGX SPARK + vLLM / Qwen3.6-27B, fully local / NVIDIA DGX Spark · GB10 · 128 GB unified / Qwen/Qwen3.6-27B-FP8 · ~29 GB weights / native 256K context — no rope-scaling / FP8 KV cache · qwen3_coder tool-call parser / served via vLLM → opencode over MCP / $ docker run --gpus all vllm/vllm-openai \ --model Qwen/Qwen3.6-27B-FP8 \ --max-model-len 262144 \ --kv-cache-dtype fp8 \ --tool-call-parser qwen3_coder \ --enable-auto-tool-choice / NO API BILLS. NOTHING LEAVES YOUR NETWORK. / The 256K window matters: a thorough scan piles up endpoints, coverage, and artifacts. A cramped window forces constant compaction and that's where small models fall apart. / AGENT-SMITH · nullpointer.studio · 18
**Shows.** A dark code block at bottom-left showing the exact `docker run` command used to serve Qwen3.6-27B-FP8 via vLLM with a 262144-token context and FP8 KV cache, paired with a green-bordered "No API bills / nothing leaves your network" callout emphasising the fully self-hosted, air-gapped setup.

## Slide 23 — Qwen3.6 wrote this report.
**Text.** // PROOF · THE LOCAL RUN / Qwen3.6 wrote this report. Nothing in the loop but the box under the desk. / A full VulnBank engagement — recon, exploitation, PoCs, remediation plan — run end to end by the self-hosted model. No frontier API was called. / 15 CRITICAL / 13 HIGH / 5 MEDIUM / 2 LOW / 35 FINDINGS / // KILL CHAIN — UNAUTH → FULL FINANCIAL COMPROMISE / SQLi /login → alg:none JWT forge → SSRF /internal (DB creds) → AWS IAM via metadata → merchant + GraphQL exfil → arbitrary crediting / // WHAT THE MODEL ACTUALLY PRODUCED / 48 endpoints enumerated from OpenAPI, fanned into an endpoint × technique matrix. / Every finding artifact-backed and adjudicated — OWASP + ASVS mapped, curl repro each. / 43 pages: exec summary, risk dashboard, kill chain, P0/P1/P2 remediation plan. / $0 — API cost, per scan nothing left the network / Qwen3.6-27B — FP8 · 256K ctx · vLLM one DGX Spark box / The deliverable a senior consultant ships — written by a 27B model. / AGENT-SMITH · nullpointer.studio · 20
**Shows.** Five severity-count stat boxes (15 Critical / 13 High / 5 Medium / 2 Low / 35 Findings total) across the top, a kill-chain summary box describing the full exploit path from unauthenticated SQLi to arbitrary crediting, a "what the model actually produced" box, and two side callouts ($0 API cost, and the Qwen3.6-27B hardware spec) reinforcing that the entire report was produced locally.

## Slide 24 — Chapter 04: The Army of Smiths
**Text.** G CHAPTER 04 / THE ARMY OF SMITHS / "Me, myself and I." / Every scan makes the next Smith stronger. / AGENT-SMITH · nullpointer.studio · 21
**Shows.** Section-divider slide on the green code-rain background, plain typographic title, no photo or diagram.

## Slide 25 — Every scan builds training data
**Text.** G // THE FLYWHEEL / Every scan builds training data / Passive, read-only, leak-scanned it never changes how a scan runs. Each decision → action → result is captured, then distilled into a LoRA adapter that runs as Smith, locally. / SCAN — Smith runs an engagement / CAPTURE — decision·action·result redacted event stream / DISTILL — QLoRA / Unsloth behaviour cloning / LoRA SMITH — hot-swappable adapter runs locally, as Smith / ↳ the more you run it, the better the local Smith you can train, diversity beats volume / AGENT-SMITH · nullpointer.studio · 22
**Shows.** A four-box horizontal pipeline (Scan → Capture → Distill → LoRA Smith) with a looping arrow returning from the last box back to the first, illustrating a self-improving training flywheel where each engagement's redacted event stream is distilled via QLoRA/Unsloth into a locally-runnable adapter.

## Slide 26 — Patterns for agents you can trust
**Text.** G // WHAT TO STEAL / Patterns for agents you can trust / 01 Methodology-as-code — Teach the model how to think; don't hard-code what it does. / 02 Evidence-binding gates — No claim without an artifact on disk. Make lying structurally impossible. / 03 Server-side budgets & isolation — Cost / time / calls capped in the server; every tool in a disposable container. / 04 A depth-enforcing watchdog — Supervision is a component catch stalls, shortcuts, and runaways. / 05 Human at the controls — HIR + augmented mode for the calls no AI should make alone. / 06 Portability via architecture — Move mechanical work into the system; small models keep up. / AGENT-SMITH · nullpointer.studio · 25
**Shows.** A 3×2 grid of six numbered green-bordered cards recapping the deck's core design patterns (methodology-as-code, evidence-binding, server-side budgets, watchdog, human-in-the-loop, portability), each with a one-line explanation. Nothing beyond the text and card layout.

## Slide 27 — "Never send a human to do a machine's job." (closing)
**Text.** "Never send a human to do a machine's job." / …but always keep one at the controls. / github.com/0x0pointer/agent-smith / open source · AGPL-3.0 · https://nullpointer.studio / Glenn ten Cate — The Linux Foundation / Jorge Carvalho — Nedap / Built for offensive-security professionals. Use it to make the internet safer. / Questions? — scan the pill.
**Shows.** Closing slide on the code-rain background with a QR code at lower left captioned "Questions? — scan the pill," alongside the repo URL, licence, speaker credits, and a closing mission statement.
