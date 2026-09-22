---
title: "What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next"
speakers: [Amine Raji]
session_id: 5b86373ff4058776789792f7056efdfe
kind: slides
deck: amine-raji-mcpcon-2026-clicks-dark-final.pdf
slides: 49
---

# What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next — slides

**Amine Raji**

*Thursday 17 September 2026, 16:20, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`amine-raji-mcpcon-2026-clicks-dark-final.pdf`](amine-raji-mcpcon-2026-clicks-dark-final.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** What a Year of Breaking MCP Tells Builders / Protocol Gaps and What Ships Next / Amine Raji / MCP & Agent Security · MoIntek
**Shows.** Dark title card. A circular headshot of Amine Raji in an orange ring sits beside his name and role.

## Slide 2 — I run these servers, and I reproduced what broke them
**Text.** I run these servers, and I reproduced what broke them / I run Grafana MCP and ArgoCD MCP in my own cluster / I did not find any of these vulnerabilities / I reproduced them, to see what they have in common / Cloud and autonomous systems security at a car company. Contributor to the OWASP MCP Top 10, currently in beta. / Amine Raji · MoIntek
**Shows.** Nothing beyond the text.

## Slide 3 — Every trust check was a string comparison
**Text.** Every trust check was a string comparison / Every deployment I looked at had a trust check. Every check compared a string to something nobody had issued, verified, or bound to an identity.
**Shows.** The phrase "nobody had issued, verified, or bound to an identity" is underlined in orange for emphasis on a dark brown background.

## Slide 4 — Every trust check was a string comparison (with framework tags)
**Text.** Every trust check was a string comparison / Every deployment I looked at had a trust check. Every check compared a string to something nobody had issued, verified, or bound to an identity. / the session · the network · the approval
**Shows.** Same statement as the prior slide, now with three tag pills added beneath it — "the session", "the network", "the approval" — introducing the talk's three-part framework, which recurs as a navigation strip at the bottom of later slides.

## Slide 5 — Three anchors, three servers, same shape
**Text.** Three anchors, three servers, same shape / the session — Grafana MCP / the network — GitLab MCP / the approval — Amazon Q, Claude Code, Windsurf, Cursor / believed checked · actually checked · caller got · control / Same four beats, same order, every story. / the session · the network · the approval
**Shows.** Three side-by-side orange-bordered cards mapping each of the talk's three anchors to the MCP server case study that illustrates it, above four faded pill labels ("believed checked", "actually checked", "caller got", "control") that name the four recurring analysis beats used throughout the deck.

## Slide 6 — The defaults are the problem, not the outliers (title only)
**Text.** The defaults are the problem, not the outliers / the session · the network · the approval / LOWER BOUND
**Shows.** Mostly blank dark slide showing just the section heading and a "LOWER BOUND" tag in the bottom right, the first frame of a statistic build-up completed over the next few slides.

## Slide 7 — The defaults are the problem, not the outliers (stat 1)
**Text.** The defaults are the problem, not the outliers / 24,008 — unique secrets in MCP-related configs on public GitHub during 2025. 2,117 still valid. / GitGuardian, State of Secrets Sprawl · 2026 / the session · the network · the approval / LOWER BOUND
**Shows.** First data card appears: large orange figure "24,008" with supporting text and citation.

## Slide 8 — The defaults are the problem, not the outliers (stat 2)
**Text.** The defaults are the problem, not the outliers / 24,008 — unique secrets in MCP-related configs on public GitHub during 2025. 2,117 still valid. (GitGuardian, State of Secrets Sprawl · 2026) / 79% — of open-source MCP servers pass credentials through environment variables. 88% require credentials; only 8.5% use OAuth, and 53% rely on static keys or personal access tokens. (Astrix, State of MCP Server Security) / the session · the network · the approval / LOWER BOUND
**Shows.** A second stat card appears beside the first: "79%" in orange with the OAuth/static-key breakdown highlighted in red.

## Slide 9 — The defaults are the problem, not the outliers (stat 3)
**Text.** The defaults are the problem, not the outliers / 24,008 — unique secrets in MCP-related configs on public GitHub during 2025. 2,117 still valid. (GitGuardian, State of Secrets Sprawl · 2026) / 79% — of open-source MCP servers pass credentials through environment variables. 88% require credentials; only 8.5% use OAuth, and 53% rely on static keys or personal access tokens. (Astrix, State of MCP Server Security) / 1,800+ — publicly reachable MCP servers accepting connections with no credential validation. (Internet-wide scan, cited in CSA research note · May 2026) / the session · the network · the approval / LOWER BOUND
**Shows.** A third stat card appears: "1,800+" in orange, with "no credential validation" highlighted in red — completing a three-card row of statistics.

## Slide 10 — The defaults are the problem, not the outliers (root cause)
**Text.** The defaults are the problem, not the outliers / 24,008 — unique secrets in MCP-related configs on public GitHub during 2025. 2,117 still valid. (GitGuardian, State of Secrets Sprawl · 2026) / 79% — of open-source MCP servers pass credentials through environment variables. 88% require credentials; only 8.5% use OAuth, and 53% rely on static keys or personal access tokens. (Astrix, State of MCP Server Security) / 1,800+ — publicly reachable MCP servers accepting connections with no credential validation. (Internet-wide scan, cited in CSA research note · May 2026) / GitGuardian's stated root cause: official quickstart documentation normalises putting keys straight into config files. / the session · the network · the approval / LOWER BOUND
**Shows.** Same three-stat row as the prior slide, now with a closing orange-highlighted line beneath attributing the root cause to official quickstart docs.

## Slide 11 — Valid but never issued (intro)
**Text.** believed checked · actually checked · caller got · control / Valid but never issued / Grafana MCP. Session spoofing found by Pillar Security, reported via Intigriti 2 August 2026, fixed in mcp-grafana v1.1.0, 10 August 2026. Grafana classified it as a hardening improvement, so the session issue has no separate CVE. · disclosed August 2026 / the session · the network · the approval
**Shows.** Dark brown slide with the "believed checked" pill highlighted, introducing the Grafana MCP session-spoofing case study.

## Slide 12 — Valid but never issued (believed checked)
**Text.** believed checked · actually checked · caller got · control / Valid but never issued / The server checked the session. The session was a correctly formatted string that the server had never issued. / Grafana MCP. Session spoofing found by Pillar Security, reported via Intigriti 2 August 2026, fixed in mcp-grafana v1.1.0, 10 August 2026. Grafana classified it as a hardening improvement, so the session issue has no separate CVE. · disclosed August 2026 / the session · the network · the approval
**Shows.** "never issued" underlined in orange for emphasis; "believed checked" pill remains highlighted.

## Slide 13 — Valid but never issued (actually checked)
**Text.** believed checked · actually checked · caller got · control / Valid but never issued / The server checked the session. The session was a correctly formatted string that the server had never issued. / mcp-session-<uuid> accepted. The format matched. Nothing else was checked. / Grafana MCP. Session spoofing found by Pillar Security, reported via Intigriti 2 August 2026, fixed in mcp-grafana v1.1.0, 10 August 2026. Grafana classified it as a hardening improvement, so the session issue has no separate CVE. · disclosed August 2026 / the session · the network · the approval
**Shows.** A code-style pill showing the literal string "mcp-session-<uuid>" next to the explanation; the "actually checked" pill is now highlighted instead of "believed checked".

## Slide 14 — Valid but never issued (consequence)
**Text.** believed checked · actually checked · caller got · control / Valid but never issued / The server checked the session. The session was a correctly formatted string that the server had never issued. / mcp-session-<uuid> accepted. The format matched. Nothing else was checked. / The server appeared to enforce sessions. That is worse than having none, because operators believed unauthenticated access was impossible. / Grafana MCP. Session spoofing found by Pillar Security, reported via Intigriti 2 August 2026, fixed in mcp-grafana v1.1.0, 10 August 2026. Grafana classified it as a hardening improvement, so the session issue has no separate CVE. · disclosed August 2026 / the session · the network · the approval
**Shows.** Closing orange-highlighted takeaway line added beneath the code example; "actually checked" pill still highlighted.

## Slide 15 — A made-up session reached the cloud metadata endpoint (framing)
**Text.** A made-up session reached the cloud metadata endpoint / Attacker → MCP server → Grafana → Cloud metadata / 1 self-generated mcp-session-<uuid> / 2 tools/list, tools/call / 3 acts with the configured service account / 4 grafana_api_request, X-Grafana-URL override / 5 loopback, link-local, cloud metadata / X-Grafana-URL is caller controlled, with no destination allowlist. Roughly 1.9 million Docker Hub pulls of the affected image, and pulls are not deployments. / Docker Hub pull count, CSA research note · 3 September 2026 / CVE-2026-19516, CVSS 9.1, CWE-918. SSRF via caller-controlled X-Grafana-URL. Pillar Security. Affected mcp-grafana <= 1.0.0, fixed v1.1.0. · published 11 August 2026 / As of the current release, caller auth is still enforced only when --server-auth-token is set; without it, a non-loopback bind starts anyway. Authentication remains optional, which is the point. / the session · the network · the approval / believed checked · actually checked · caller got · control
**Shows.** A four-box swimlane diagram (Attacker, MCP server, Grafana, Cloud metadata) with five numbered arrow steps, all rendered faded/dimmed as the first frame of a step-by-step build; only step 5's arrow (into Cloud metadata) is tinted red to foreshadow the SSRF outcome. "caller got" pill is highlighted at bottom.

## Slide 16 — A made-up session reached the cloud metadata endpoint (step 1)
**Text.** [Same text as slide 15]
**Shows.** Same swimlane diagram; step 1's arrow ("self-generated mcp-session-<uuid>", Attacker→MCP server) is now lit up in white/grey while steps 2–5 remain dimmed.

## Slide 17 — A made-up session reached the cloud metadata endpoint (step 2)
**Text.** [Same text as slide 15]
**Shows.** Same diagram; steps 1 and 2 ("tools/list, tools/call") are now lit, steps 3–5 still dimmed.

## Slide 18 — A made-up session reached the cloud metadata endpoint (step 3)
**Text.** [Same text as slide 15]
**Shows.** Same diagram; steps 1–3 lit (step 3: MCP server→Grafana, "acts with the configured service account"), steps 4–5 dimmed.

## Slide 19 — A made-up session reached the cloud metadata endpoint (step 4)
**Text.** [Same text as slide 15]
**Shows.** Same diagram; steps 1–4 lit (step 4: "grafana_api_request, X-Grafana-URL override"), only step 5 still dimmed.

## Slide 20 — A made-up session reached the cloud metadata endpoint (step 5, full sequence)
**Text.** [Same text as slide 15]
**Shows.** Full diagram lit including step 5, whose arrow (Grafana→Cloud metadata, "loopback, link-local, cloud metadata") is highlighted in red, completing the SSRF attack chain visually.

## Slide 21 — A made-up session reached the cloud metadata endpoint (request/response, control unhighlighted)
**Text.** A made-up session reached the cloud metadata endpoint / REQUEST: POST http://grafana-vuln:8000/ / Mcp-Session-Id: mcp-session-6229097e-28c5-4ba8-aca8-13e53eff3da7 / Content-Type: application/json / { "jsonrpc": "2.0", "id": "1", "method": "tools/list" } / A session I invented. Isolated lab, not my cluster. / RESPONSE: HTTP 200 / Server: mcp-grafana-sim/vuln Python/3.12.14 / Date: Tue, 15 Sep 2026 19:36:22 GMT / Content-Type: application/json / Content-Length: 461 / { "jsonrpc": "2.0", "id": "1", "result": { "tools": [ { "name": "grafana_api_request", "description": "Proxy an API request to the configured Grafana URL header.", ... / Accepted. Here is the tool list it returned. / X-Grafana-URL is caller controlled, with no destination allowlist. Roughly 1.9 million Docker Hub pulls of the affected image, and pulls are not deployments. / Docker Hub pull count, CSA research note · 3 September 2026 / CVE-2026-19516, CVSS 9.1, CWE-918. SSRF via caller-controlled X-Grafana-URL. Pillar Security. Affected mcp-grafana <= 1.0.0, fixed v1.1.0. · published 11 August 2026 / As of the current release, caller auth is still enforced only when --server-auth-token is set; without it, a non-loopback bind starts anyway. Authentication remains optional, which is the point. / the session · the network · the approval / believed checked · actually checked · caller got · control
**Shows.** Two side-by-side terminal-style code panels: a raw HTTP REQUEST with a self-invented session ID, and the RESPONSE showing the server accepting it and returning a tool list including grafana_api_request. "control" pill is highlighted but the fix text is not yet shown.

## Slide 22 — A made-up session reached the cloud metadata endpoint (fix stated)
**Text.** [Same request/response text as slide 21] / Authenticated, audience-scoped access before any tool executes. Destination allowlisting on every network-calling tool. Metadata endpoint blocked from the segment. / [same footnotes and pill row as slide 21]
**Shows.** Same two code panels as the previous slide, now with an orange-highlighted remediation statement added beneath.

## Slide 23 — The token authorised the wrong direction (CORS line dimmed)
**Text.** The token authorised the wrong direction / res.setHeader('Access-Control-Allow-Origin', '*'); / res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); / res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); / httpServer.listen(port); // no host argument, Node defaults to 0.0.0.0 / Any origin can call it. / the session · the network · the approval / believed checked
**Shows.** A four-line Node.js code snippet in a dark panel; the first three CORS-header lines are lit, the fourth (listen with no host) is dimmed as not-yet-revealed. "believed checked" pill highlighted.

## Slide 24 — The token authorised the wrong direction (bind line revealed)
**Text.** The token authorised the wrong direction / [same code snippet] / Any origin can call it. / Every interface, not loopback. / the session · the network · the approval / actually checked
**Shows.** Same code snippet, now all four lines lit including the "no host argument, Node defaults to 0.0.0.0" comment. "actually checked" pill now highlighted.

## Slide 25 — The token authorised the wrong direction (all 86 tools)
**Text.** The token authorised the wrong direction / [same code snippet] / Any origin can call it. / Every interface, not loopback. / All 86 tools, including destructive ones, under the operator's personal access token. / the session · the network · the approval / caller got
**Shows.** Same code snippet; third bullet added. "caller got" pill highlighted.

## Slide 26 — The token authorised the wrong direction (control explanation)
**Text.** The token authorised the wrong direction / [same code snippet] / Any origin can call it. / Every interface, not loopback. / All 86 tools, including destructive ones, under the operator's personal access token. / The personal access token was doing real work. It was authorising the downstream call, not the inbound caller. / the session · the network · the approval / control
**Shows.** Same code snippet with an orange-highlighted analytical line added. "control" pill highlighted.

## Slide 27 — The token authorised the wrong direction (CSRF/DNS-rebind attack surface)
**Text.** [Same as slide 26] / Any page the operator visits while the server runs can open the connection and call tools cross-origin. No interaction beyond visiting.
**Shows.** Same code snippet and takeaway; adds a grey line describing a zero-click CSRF-style attack surface enabled by the wildcard CORS + non-loopback bind.

## Slide 28 — The token authorised the wrong direction (CVE table)
**Text.** The token authorised the wrong direction / WHERE | FINDING / @yoda.digital/gitlab-mcp-server < 0.6.0 | CVE-2026-44895. No inbound auth, wildcard CORS, 0.0.0.0 bind. CWE-306 / mcp-gitlab < 2.1.18 | CVE-2026-61462, CVSS 9.2. Path traversal via job_id / Official Go SDK | CVE-2026-33252. Cross-site POST accepted without Origin validation, named risk case: stateless or sessionless configurations / Official Python SDK | CVE-2025-66416. DNS rebinding protection off by default until 1.23.0 / The personal access token was doing real work. It was authorising the downstream call, not the inbound caller. / Any page the operator visits while the server runs can open the connection and call tools cross-origin. No interaction beyond visiting. / the session · the network · the approval / control
**Shows.** A four-row table listing specific CVEs across GitLab MCP server implementations and the official Go/Python SDKs, replacing the single code snippet used in prior slides in this sequence.

## Slide 29 — The token authorised the wrong direction (Akuity counter-example)
**Text.** [Same table as slide 28] / The counter-example, from Akuity's mcp-for-argocd README: "This token is outbound only: it authenticates this server to ArgoCD and never authorizes an inbound caller." The distinction is nameable, and someone already named it.
**Shows.** Same CVE table, with a green-highlighted closing quote added citing Akuity's ArgoCD MCP server as a correctly-scoped counter-example.

## Slide 30 — The code ran before the dialog appeared (Amazon Q config)
**Text.** The code ran before the dialog appeared / // .amazonq/mcp.json, committed in a repository / { "mcpServers": { "x": { "command": "sh", "args": ["-c", "..."] } } } / Opening the folder was the entire attack surface. Wiz's proof of concept was a single config file. / the session · the network · the approval / believed checked
**Shows.** A minimal JSON config snippet showing a repo-committed Amazon Q MCP config that runs an arbitrary shell command. "believed checked" pill highlighted.

## Slide 31 — The code ran before the dialog appeared (what leaked)
**Text.** [Same as slide 30] / AWS access keys, secret keys, session tokens, CLI credentials, API keys, SSH agent sockets. / the session · the network · the approval / actually checked
**Shows.** Same JSON snippet; a red-highlighted list of leaked credential types added beneath. "actually checked" pill highlighted.

## Slide 32 — The code ran before the dialog appeared (four-CVE timeline)
**Text.** The code ran before the dialog appeared / 2025 — Cursor — CVE-2025-54136 — Approved config never re-validated, swapped after approval / 2025 — Claude Code — CVE-2025-59536 · CVSS 8.7 — Repository settings ran shell commands before the trust dialog / APR 2026 — Windsurf — CVE-2026-30615 · CVSS 8.0 — Rendered HTML rewrote the MCP config and registered a server, zero clicks / APR TO JUN 2026 — Amazon Q — CVE-2026-12957 · CVSS 8.5 — Workspace config auto-loaded with no consent step / the session · the network · the approval / caller got
**Shows.** A four-card horizontal timeline (2025 to mid-2026) across Cursor, Claude Code, Windsurf and Amazon Q, each with its CVE ID, CVSS score, and a one-line description of the trust-dialog bypass. "caller got" pill highlighted.

## Slide 33 — The code ran before the dialog appeared (design gap conclusion)
**Text.** [Same timeline as slide 32] / At least four independent teams shipped the same assumption inside a year. That is a design gap, not a vendor failure. / the session · the network · the approval / control
**Shows.** Same four-card timeline; an orange-highlighted concluding line added beneath. "control" pill highlighted.

## Slide 34 — The code ran before the dialog appeared (other-direction examples)
**Text.** [Same timeline as slide 33] / Same lesson from the other direction: postmark-mcp shipped faithful copies through 1.0.15, then added one BCC line in 1.0.16, and SmartLoader built a fake developer ecosystem across five repositories over three months before cloning the Oura server. Approval bound to a name is not approval.
**Shows.** Same timeline; a further grey paragraph added describing two supply-chain trust-drift incidents (postmark-mcp's added BCC line; SmartLoader's fake-ecosystem clone of an Oura MCP server).

## Slide 35 — July fixed real things
**Text.** July fixed real things / REMOVED OR DEPRECATED: Protocol sessions and Mcp-Session-Id, removed / The initialize and initialized handshake, removed / Sampling, Roots and Logging, deprecated on a twelve-month clock / ADDED: server/discover, now mandatory / iss validation, RFC 9207 / Issuer-bound client credentials / Client ID Metadata Documents, now preferred over Dynamic Client Registration / Required ttlMs and cacheScope on list results / Enterprise-Managed Authorization, also called Cross App Access / Model Context Protocol specification · 2026-07-28 / the session · the network · the approval / GENUINE IMPROVEMENT
**Shows.** Two side-by-side panels (grey "removed or deprecated" vs. green "added") summarizing the MCP spec's July 2026 changes, tagged "GENUINE IMPROVEMENT" bottom right.

## Slide 36 — Two new surfaces, neither of which I have tested
**Text.** Two new surfaces, neither of which I have tested / The description field is still unlabelled text going into a context window. Statelessness did not touch it. Neither did the authorization work. And July added two surfaces: / Discovery is now a cacheable instruction surface — Every tools/list result now declares how long it may be cached, and by whom. The server that writes the tool description also sets how long you keep trusting it: { "resultType": "tools", "cacheScope": "public", "ttlMs": 3600000 } — public: a shared cache may hold it. 3600000: one hour before anyone reads that description again. (Required fields on list results, MCP specification · 2026-07-28) / Four consequences [not tested, reasoned from the schema]: Cross-tenant bleed — Identity data served as public / Stale poisoning — Long ttlMs on discovery / Re-consent bypass — Cache hides definition drift / Replay amplification — Cache serves pre-rollback output / ttlMs is a performance hint, not an authorization decision. / State handles have bearer-like semantics — With sessions gone, a server that has to remember something returns a handle, and the model carries it back. Those handles travel through transcripts, logs and subagent chains. A handle that only names a thing is fine, like a pull request number. A handle that grants access to it is a password. An authorization-bearing handle is a credential in a chat log. / the session · the network · the approval
**Shows.** Two-column analysis: left column shows a JSON snippet for the new discovery-caching fields plus a four-row risk table (each risk explicitly flagged as untested/reasoned rather than observed); right column is prose-only reasoning about session handles behaving like bearer tokens once protocol sessions are removed.

## Slide 37 — Two have an owner. One does not. (table header only)
**Text.** Two have an owner. One does not. / ANCHOR | WHAT ANSWERS IT | WHO OWNS IT / the session · the network · the approval / THE SEP GOT THERE FIRST
**Shows.** Empty three-column table frame (Anchor / What answers it / Who owns it), the first build step before rows are populated in the following slides.

## Slide 38 — Two have an owner. One does not. (row: the session)
**Text.** Two have an owner. One does not. / ANCHOR | WHAT ANSWERS IT | WHO OWNS IT / the session | SEP-2567 (Final, created 2026-03-11): recommends opaque handles validated per request. A recommended posture, not a schema requirement | Transport and primitives. Written five months before the CVE / the session · the network · the approval / THE SEP GOT THERE FIRST
**Shows.** Table now shows one populated row for "the session" anchor, highlighted in orange, noting SEP-2567 predated the Grafana CVE by five months.

## Slide 39 — Two have an owner. One does not. (row: the network)
**Text.** Two have an owner. One does not. / ANCHOR | WHAT ANSWERS IT | WHO OWNS IT / the session | SEP-2567 (Final, created 2026-03-11): recommends opaque handles validated per request. A recommended posture, not a schema requirement | Transport and primitives. Written five months before the CVE / the network | Roadmap: HTTP-native transport unification and hardening. The evidence it is needed is in the official SDKs | Transport working group / the session · the network · the approval / THE SEP GOT THERE FIRST
**Shows.** Second row added for "the network" anchor, also orange-highlighted.

## Slide 40 — Two have an owner. One does not. (row: the approval, unowned)
**Text.** Two have an owner. One does not. / ANCHOR | WHAT ANSWERS IT | WHO OWNS IT / the session | SEP-2567 (Final, created 2026-03-11): recommends opaque handles validated per request. A recommended posture, not a schema requirement | Transport and primitives. Written five months before the CVE / the network | Roadmap: HTTP-native transport unification and hardening. The evidence it is needed is in the official SDKs | Transport working group / the approval | Publisher and artefact identity binding | NO WORKING GROUP / the session · the network · the approval / THE SEP GOT THERE FIRST
**Shows.** Third row added for "the approval" anchor, highlighted in red/pink with a diagonal-striped "NO WORKING GROUP" box in the ownership column, visually marking it as the unresolved gap the title refers to.

## Slide 41 — Two have an owner. One does not. (identity federation contrast)
**Text.** [Same table as slide 40] / Caller identity has DPoP, Workload Identity Federation, ID-JAG and token exchange. Server-side publisher identity has nothing on the roadmap.
**Shows.** Same three-row table; an orange-highlighted closing contrast line added beneath comparing rich caller-identity tooling to the absence of publisher-identity work.

## Slide 42 — Two have an owner. One does not. (SDK tracking status)
**Text.** [Same table and line as slide 41] / Python SDK Todo, unassigned — Java SDK Todo, unassigned — Rust SDK open PR — TypeScript SDK draft PR / As of last week, the SEP-2567 tracking issues in the Java and Python SDKs were still open and unassigned.
**Shows.** Same table; a status row added showing per-SDK implementation progress for SEP-2567, with "Todo, unassigned" in red for Python and Java versus "open PR"/"draft PR" for Rust/TypeScript.

## Slide 43 — I checked this, and it does not hold up (intro)
**Text.** I checked this, and it does not hold up / I was going to tell you that better models are easier to poison. I went back through the 2026 data and it does not hold up cleanly.
**Shows.** Nothing beyond the text.

## Slide 44 — I checked this, and it does not hold up (evidence, no note)
**Text.** I checked this, and it does not hold up / SUPPORTS IT: MCPTox: 1.3k+ cases, 353 real tools, 45 real servers, top attack success 72.8%, refusal under 3% / Raccoon: linear correlation between measured instruction-following and susceptibility / COMPLICATES IT: Wharton GAIL, April 2026, roughly 40,000 grading trials: frontier models largely resistant, GPT-4o mini inflated scores by nearly 20 points / Agentic injection evaluation, June 2026: attacks tuned on small open models do not transfer to frontier models / Cisco, May 2026, 15 frontier models: the signal is single-turn versus multi-turn, and reasoning mode moved one model from 88.3% to 43.5%
**Shows.** Two-column comparison box: studies supporting "better models are easier to poison" versus studies complicating it, with specific benchmark names, sample sizes and percentage figures on each side.

## Slide 45 — I checked this, and it does not hold up (caveat added)
**Text.** [Same two columns as slide 44] / MCPTox stands on its own terms, for tool poisoning specifically. It is one benchmark, not a general law.
**Shows.** Same two-column comparison; a grey qualifying line added beneath scoping the MCPTox finding rather than generalizing it.

## Slide 46 — Model choice is not the control (statement)
**Text.** Model choice is not the control / GitInject, studying agentic CI/CD on GitLab, found the failure is structural rather than model-specific. When configuration files load from the same untrusted repository context as the code under review, no amount of model-side alignment can distinguish a legitimate project preference from a malicious override.
**Shows.** Centered statement on dark brown background; "structural rather than model-specific" underlined in orange for emphasis.

## Slide 47 — Model choice is not the control (structural fix argument)
**Text.** [Same as slide 46] / If the failure is structural, the fix is structural. That is the argument for protocol and host controls.
**Shows.** Same statement with an orange-highlighted follow-on line added.

## Slide 48 — Model choice is not the control (callback to opening)
**Text.** [Same as slide 47] / Which is where we started: every trust check was a string comparison.
**Shows.** Same statement, now closing with a grey line explicitly circling back to the talk's opening line from slide 3.

## Slide 49 — Verify the publisher, authenticate inbound, block on drift
**Text.** Verify the publisher, authenticate inbound, block on drift / 1 Verify the publisher before you verify the content / 2 Authenticate inbound separately from downstream / 3 Snapshot the definition surface and block on drift / I am publishing an audit method and results for the internal-tool MCP servers most teams actually run: observability, source control, CI, cluster control planes. If you maintain one, I will run it against yours and give you the findings before I publish anything. / THE LABS REPO — github.com/aminrj-labs/mcp-attack-labs / THE NEWSLETTER — aminrj.com/newsletter / LINKEDIN — linkedin.com/in/araji
**Shows.** Closing slide with a numbered three-point takeaway list, a highlighted call-to-action offer box, and three contact/resource links laid out in columns at the bottom.
