---
title: "Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions"
speakers: [Sohan Maheshwar]
session_id: bd3e4922efb433a48dbf756124ad7a8f
kind: slides
deck: agntcon-eu-delegated-authz-for-agents.pdf
slides: 36
---

# Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions — slides

**Sohan Maheshwar**

*Thursday 17 September 2026, 12:00, Auditorium — Reliable Agents track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agntcon-eu-delegated-authz-for-agents.pdf`](agntcon-eu-delegated-authz-for-agents.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** Delegated Authorization for AI Agents / Build an Agent with Fine-Grained Permissions / Sohan Maheshwar / @AuthZed / AAIF Ambassador
**Shows.** A near-black title slide with a small colourful swirl logo top left and a thin horizontal rule; speaker name and affiliation set in orange/grey underneath the title.

## Slide 2 — Throwback Thursday #tbt
**Text.** Throwback Thursday #tbt / Circles / You share different things with different people. So sharing the right stuff with the right people shouldn't be a hassle. Circles makes it easy to put your friends from Saturday night in one circle, your parents in another, and your boss in a circle by himself - just like real life. / Lisa Stieman / Steve Rura / Anthony Cafaro / Emily Stiebel / Sam Stiebel / Natalie Hammel / Sara Rowghani / Alex Chen / click and drag people into circles / Ski Crew 0 / San Diego peeps 0 / Nana & Grandpa 0
**Shows.** A screenshot of Google+'s old "Circles" onboarding modal, showing eight contact photo cards above three empty circular drop targets (Ski Crew, San Diego peeps, Nana & Grandpa), with a hand-drawn arrow and note "click and drag people into circles" pointing at the drag gesture — nostalgic example of early relationship-based sharing UI.

## Slide 3 — Access Control in Google Products
**Text.** Access Control in Google Products / Google Sheets / You need access / Request access, or switch to an account with access. / Learn more / Viewer / Commenter / Editor / Message (optional) / Request access
**Shows.** A screenshot of the modern Google Sheets "You need access" permission-request dialog, with radio buttons for Viewer/Commenter/Editor (Editor selected), an optional message box, a blue "Request access" button, and an illustration of a person stepping out of a green document icon.

## Slide 4 — Access Control in ChatGPT Apps
**Text.** Access Control in ChatGPT Apps / ChatGPT / New chat / Search chats / Library / Apps / Codex / More / Projects / New project / Apps — Chat with your favorite apps in ChatGPT / reference / Box (Legacy) — Search and reference your documents / Gmail — Find and reference emails from your inbox / Google Contacts — Reference saved contact details / Outlook Email — Search and reference your Outlook email / Notion (Legacy) — Search and reference your Notion pages / Mobbin — Find UI & UX design references
**Shows.** A screenshot of the ChatGPT desktop app's "Apps" settings panel, dark-themed, listing six connectable third-party apps (Box, Gmail, Google Contacts, Outlook Email, Notion, Mobbin) each with an icon and short description, illustrating per-app data-access grants.

## Slide 5 — OWASP Top Ten Web Apps Security Risks
**Text.** OWASP Top Ten Web Apps Security Risks / #1 Broken Access Control (2021 and 2025) / 100% of apps tested had broken access control issues / OWASP Top 10:2025 RC1 / A01:2025 Broken Access Control / Background. Maintaining its position at #1 in the Top Ten, 100% of the applications tested were found to have some form of broken access control. Notable CWEs included are CWE-200: Exposure of Sensitive Information to an Unauthorized Actor, CWE-201: Exposure of Sensitive Information Through Sent Data, CWE-918 Server-Side Request Forgery (SSRF), and CWE-352: Cross-Site Request Forgery (CSRF). This category has the highest number of occurrences in the contributed data, and second highest number of related CVEs. / Score table. CWEs Mapped 40, Max Incidence Rate 20.15%, Avg Incidence Rate 3.74%, Max Coverage 100.00%, Avg Coverage 42.93%, Avg Weighted Exploit 7.04, Avg Weighted Impact 3.84, Total Occurrences 1,839,701 / owasp.org/Top10/2025/
**Shows.** Bullet points on the left highlighting "100% of apps" in orange; on the right, a screenshot of the OWASP Top 10:2025 website open to the "A01:2025 Broken Access Control" page with its background text and score table, overlaid with a diagonal red "RELEASE CANDIDATE" watermark.

## Slide 6 — Ambient Context
**Text.** Ambient Context / N users x M agents x O actions / Evolving graph of relationships, states, and entities (users, agents, resources) / Not fully contained in tokens (JWTs), ACLs, or request payloads. / Too complex for coarse-grained techniques such as RBAC
**Shows.** An outline icon bottom-right depicting a network of connected nodes next to a clock face, symbolising an evolving, time-sensitive graph of relationships that ambient context must capture.

## Slide 7 — Primer on Authorization
**Text.** Primer on Authorization
**Shows.** A plain section-divider slide: the title in large white text on a dark background with a subtle warm gradient glow in the lower right corner; no other content.

## Slide 8 — Access Control Types
**Text.** Access Control Types / Access Control Lists / Role-Based Access Control / Attribute-Based Access Control
**Shows.** A bulleted list of three access-control paradigms beside a simple line-icon pairing of a luggage tag and a key, on a plain dark background.

## Slide 9 — Google Zanzibar
**Text.** Google Zanzibar / Globally distributed authorization system / >10 million client queries per second / From the developer's perspective - it's an API / ReBAC / Zanzibar: Google's Consistent, Global Authorization System — Highlights and commentary on notable portions of the paper by AuthZed / Introduction to Zanzibar / Zanzibar: Google's Consistent, Global Authorization System — Ruoming Pang, Ramón Cáceres, Mike Burrows, Zhifeng Chen, Pratik Dave, Nathan Germer, Alexander Golynski, Kevin Graney, Nina Kang, Lea Kissner, Jeffrey L. Korn, Abhishek Parmar, Christina D. Richards, Mengzhi Wang — Google, LLC; Humu, Inc.; Carbon, Inc. / Abstract: Determining whether online users are authorized to access digital objects is central to preserving privacy. This paper presents the design, implementation, and deployment of Zanzibar, a global system for storing and evaluating access control lists. Zanzibar provides a uniform data model and configuration language for expressing a wide range of access control policies from hundreds of client services at Google, including Calendar, Cloud, Drive, Maps, Photos, and YouTube. Its authorization decisions respect causal ordering of user actions and thus provide external consistency amid changes to access control lists and object contents. Zanzibar scales to trillions of access control lists and millions of authorization requests per second to support services used by billions of people. It has maintained 95th-percentile latency of less than 10 milliseconds and availability of greater than 99.999% over 3 years of production use. / www.zanzibar.tech
**Shows.** A screenshot of the annotated Zanzibar paper hosted at zanzibar.tech, shown as a browser window with the original paper text on the left and AuthZed's inline commentary callouts on the right explaining terms like "Zanzibar spec."

## Slide 10 — Relationship Based Access Control
**Text.** Relationship Based Access Control / person: Gru —viewer→ folder: evilPlans —contains→ document: stealTheMoon
**Shows.** Three connected circles in a hand-drawn diagram style: "person: Gru" links to "folder: evilPlans" via a "viewer" arrow, which links to "document: stealTheMoon" via a "contains" arrow, illustrating how access transits through a relationship chain (a Despicable Me reference).

## Slide 11 — User / Object
**Text.** User — Represents a natural person or service account — userid: 10957135 / Object — Represents a non-user entity — Unique identifier prefixed with an object type — folder: evilPlans — doc: secret-doc-id
**Shows.** Two side-by-side definitions: "User" illustrated with a person emoji and an example userid, and "Object" illustrated with a briefcase icon (folder: evilPlans) and a document icon (doc: secret-doc-id).

## Slide 12 — Relation
**Text.** Relation / The way one object can be related to another object or user / Examples: member of a group / editor of a document / uploader of a video
**Shows.** Nothing beyond the text.

## Slide 13 — Relation Tuple
**Text.** Relation Tuple / Datum which expresses a single relationship / document:123#owner@user:3 / User 3 is an owner of a document with identifier 123
**Shows.** A large centred code-style tuple (document:123#owner@user:3) with a downward arrow to its plain-English translation, colour-coding the object type, id, relation and subject.

## Slide 14 — What are we really doing here?
**Text.** What are we really doing here?
**Shows.** Nothing beyond the text; a single centred line on an otherwise empty dark slide.

## Slide 15 — Build a Graph of course!
**Text.** Build a Graph of course! / somedocument → Reader → Fred, Kim / somedocument → Writer → Jill / Reader ⇢ Writer (dashed)
**Shows.** A hand-drawn node diagram: "somedocument" points to two diamond nodes "Reader" and "Writer"; Reader points on to user boxes Fred and Kim, Writer points on to user box Jill, and a dashed arrow runs from Reader down to Writer showing that writer access implies reader access.

## Slide 16 — Build a Graph of course! (expanded)
**Text.** Build a Graph of course! / somedocument → Reader → Fred, Kim / somedocument → Writer → Jill / Reader ⇢ Writer (dashed) / somedocument → Org → ACME Inc. → Admin → Niv / Writer ⇢ Admin (dashed)
**Shows.** The same hand-drawn diagram as the previous slide, extended with a new branch: "somedocument" also points to an "Org" node, which points to "ACME Inc.", which points to an "Admin" node, which points to user box "Niv"; a new dashed arrow runs from Writer to Admin, building out the full permission graph.

## Slide 17 — Check graph traversal example
**Text.** Check graph traversal example / check("document:somedocument", "reader", jill)
**Shows.** The same full node graph as the prior slide (somedocument branching to Reader/Fred/Kim, Writer/Jill, and Org/ACME Inc./Admin/Niv) shown in grey/white with no path highlighted yet, above a code-style check() call asking whether Jill has reader access to somedocument.

## Slide 18 — Check graph traversal example (path highlighted)
**Text.** Check graph traversal example / check("document:somedocument", "reader", jill)
**Shows.** The same graph as the previous slide, now with a green highlighted path traced from "somedocument" through "Writer" (via the dashed writer→reader implication) to "Jill," visually proving the check() call resolves true because Jill is a writer and writers inherit reader access.

## Slide 19 — Where do Zanzibar-like systems shine?
**Text.** Where do Zanzibar-like systems shine? / Low-latency / High-throughput authorization checks / Hierarchical permission models / Ambient Context access control
**Shows.** A bulleted list (the last item, "Ambient Context," highlighted in orange) beside a rounded-square icon of a key labelled "Zanzibar."

## Slide 20 — SpiceDB
**Text.** SpiceDB / Open source implementation of Zanzibar / Widespread project adoption / Contributors from Fortune 500 companies / github.com/authzed/spicedb / 7K stars & counting! / Adobe / Red Hat / Gitpod / Netflix / IBM / reddit / Google / GitHub
**Shows.** A grid of eight company logos (Adobe, Red Hat, Gitpod, Netflix, IBM, Reddit, Google, GitHub) arranged right of the text, illustrating organisations associated with SpiceDB adoption.

## Slide 21 — Goose by AAIF
**Text.** Goose by AAIF / General-purpose AI agent that runs on your machine / Connect to 70+ extensions / Any LLM, including your subscriptions / goose
**Shows.** The Goose project's white goose-head logo and wordmark large on the right side of the slide.

## Slide 22 — A DevOps Agent
**Text.** A DevOps Agent / Delegated Authorization / Has access to two environments: staging / production / Time-bound grants / Hierarchical contingencies / goose x SpiceDB — ReBAC / RBAC — RELATIONSHIP-BASED · CASCADE ON / DELEGATOR user:alice → DELEGATES → AGENT agent:goose_alice → GRANTS / staging 59:41 / Approve prod · 10m / Revoke staging / Revoke prod / Reset / Demo reset — staging delegated for 60 min, versions restored / Deploy checkout to production / deploy(checkout, production) / NEEDS APPROVAL / deploy checkout -> production / agent:goose_alice lacks 'deploy'; delegator user:alice holds it — human approval required
**Shows.** A screenshot of a demo dashboard for a "goose x SpiceDB" DevOps agent: a top panel shows the delegator (user:alice) granting the agent (agent:goose_alice) a staging grant with a countdown timer and action buttons (Approve prod, Revoke staging, Revoke prod, Reset); a lower chat-style panel shows the agent attempting to deploy to production and being blocked with a "NEEDS APPROVAL" tag because only the human delegator currently holds that permission.

## Slide 23 — 1. Delegated Authorization
**Text.** 1. Delegated Authorization / Agent goose_alice acts on behalf of user:alice / Permission is checked for every action / agent:goose_alice —delegator→ user:alice / user:alice —direct_deployer→ environment:production / user:alice —direct_deployer→ environment:staging / agent:goose_alice —agent_deployer→ environment:staging / user:alice —direct_deployer→ environment:production (arrow from environment:production up through user:alice) / ✗ With RBAC / tokens: copying a human's roles onto the agent drifts and over-grants
**Shows.** A relationship diagram with "agent:goose_alice" at top linked by a "delegator" edge down to "user:alice," which in turn links via "direct_deployer" and "agent_deployer" edges down to two environment nodes ("environment:production" and "environment:staging"), showing the agent's access chained through, not copied from, the human's identity.

## Slide 24 — a. Schema
**Text.** a. Schema / Defines: Types of objects found / How those objects relate to one another / Permissions that can be computed off of those relations. / definition user {} / definition agent { relation delegator: user } / definition environment { relation direct_deployer: user  relation agent_deployer: agent  permission deploy = direct_deployer + agent_deployer }
**Shows.** The same relationship diagram from the previous slide on the left, paired on the right with a code editor panel showing the SpiceDB schema definitions (user, agent, environment) that produce it, including the "deploy" permission computed as the union of direct_deployer and agent_deployer.

## Slide 25 — b. Relationships
**Text.** environment:staging#direct_deployer@user:alice / b. Relationships / Relationships bind together a Subject and a Resource via a Relation. / A functioning Permissions System is the combination of Schema and Relationships / user:alice —direct_deployer→ environment:staging
**Shows.** A large code-style relationship tuple at the top, with a simple two-node diagram below it (environment:staging pointing up to user:alice via a "direct_deployer" edge) illustrating exactly what that tuple means.

## Slide 26 — c. Permission Checks
**Text.** c. Permission Checks / SpiceDB is called for all permission decisions / Three-way decision / HUMAN OPERATOR Alice —DELEGATES→ DEVOPS AGENT acts for Alice —PERMISSION CHECK→ SPICEDB (AUTHORIZATION LAYER) → ALLOWED (the agent has this permission) / NEEDS APPROVAL (only its human has this permission) / BLOCKED (no one has this permission)
**Shows.** A flow diagram: a human operator "Alice" delegates to a "DevOps agent" box, which sends a permission check into a central "SpiceDB" authorization bar, which fans out to three possible outcome cards on the right (green check "ALLOWED", amber pause "NEEDS APPROVAL", red cross "BLOCKED"), each with a one-line explanation.

## Slide 27 — 2. Time-Bound Access
**Text.** 2. Time-Bound Access / "Give prod access for the duration of the incident" / goose x SpiceDB — ReBAC / RBAC — RELATIONSHIP-BASED · CASCADE ON / DELEGATOR user:alice → DELEGATES → AGENT agent:goose_alice → GRANTS / production 09:48 / staging 59:47 / Approve prod · 10m / Revoke staging / Revoke prod / Reset / Demo reset — staging delegated for 60 min, versions restored / alice approved production for 10 min / Deploy checkout to production / deploy(checkout, production) / ALLOWED / deploy checkout -> production (now v3) / agent:goose_alice holds delegated 'deploy' on environment:production / ✗ With RBAC/tokens: tokens lag; a cron leaves a window where a dead grant still works
**Shows.** The same demo dashboard style as slide 22, now showing both a staging grant and a newly time-boxed production grant with countdown timers (09:48 and 59:47), circled in orange; the chat panel below shows the deploy-to-production action now succeeding ("ALLOWED") because the time-bound grant is active.

## Slide 28 — Expiring Relationships
**Text.** Expiring Relationships / Grant a user access to a resource for a limited time / The relationship is not deleted immediately: It is subject to garbage collection / use expiration / definition user {} / definition environment { relation direct_deployer: user  relation agent_deployer: agent with expiration  ... }
**Shows.** A code editor panel showing the SpiceDB schema syntax for declaring a relation with an expiration modifier (agent_deployer: agent with expiration).

## Slide 29 — Add it to the relationship
**Text.** Add it to the relationship / from authz import expiry_from_now / rel("environment", "staging", "agent_deployer", "agent", AGENT_ID, expires_at=expiry_from_now(window_minutes)),
**Shows.** A code editor panel with a short Python snippet showing how a relationship is written with an explicit expires_at timestamp computed via an expiry_from_now helper.

## Slide 30 — 3. Hierarchies
**Text.** 3. Hierarchies / "The agent can deploy to prod only while it can also deploy to staging" / Model real-world hierarchies, nested groups and dependencies. / Contingent evaluation ≠ cascading delete. / user:alice —delegator→ agent:goose_alice / user:alice —direct_deployer→ environment:production / user:alice —approver→ environment:production / user:alice —direct_deployer→ environment:staging / ✗ With RBAC/tokens: no role can depend on another - you drop into app code
**Shows.** A relationship diagram with "user:alice" at top connected down to "agent:goose_alice," "environment:production" (via direct_deployer and approver edges) and "environment:staging" (via direct_deployer), laying out the nodes before the hierarchy-gating edge is introduced in the next slide.

## Slide 31 — 3. Hierarchies (gated_by highlighted)
**Text.** 3. Hierarchies / "The agent can deploy to prod only while it can also deploy to staging" / Model real-world hierarchies, nested groups and dependencies. / Contingent evaluation ≠ cascading delete. / user:alice —delegator→ agent:goose_alice / user:alice —direct_deployer→ environment:production / user:alice —approver→ environment:production / user:alice —direct_deployer→ environment:staging / environment:production —gated_by→ environment:staging / ✗ With RBAC/tokens: no role can depend on another - you drop into app code
**Shows.** The same relationship diagram as the previous slide, now with an added orange arrow pointing down into a new "gated_by" edge running from environment:production to environment:staging, visually introducing the dependency that gates production deploy rights on staging deploy rights.

## Slide 32 — Schema Operators
**Text.** Schema Operators / + Union / & Intersection / - Exclusion / -> Arrow / definition environment { relation direct_deployer: user  relation agent_deployer: agent with expiration  ...  relation gated_by: environment  permission agent_deploy = agent_deployer & gated_by->agent_deployer  permission deploy = direct_deployer + agent_deploy  ... }
**Shows.** A code editor panel with the SpiceDB schema implementing the gating logic, an orange arrow pointing at the "relation gated_by: environment" line to call it out; the four schema operators (union, intersection, exclusion, arrow) are listed as a legend on the left.

## Slide 33 — Many users, agents, environments
**Text.** Many users, agents, environments / Schema remains unchanged / Just add new relationships / No role explosion / user:alice —delegates→ agent:goose_alice —deploy→ environment:staging / user:alice — agent:github_alice —→ environment:production
**Shows.** A force-directed graph visualisation: a small cluster of labelled nodes (user:alice, agent:github_alice, agent:goose_alice, environment:staging, environment:production) sits in the middle of a much larger radial starburst of hundreds of faint unlabelled dots and lines, illustrating that the same simple schema scales to many users, agents and environments without new role definitions.

## Slide 34 — Recap
**Text.** Recap / Pattern | How ReBAC does it | Where Roles & Tokens break / Delegated Authorization | Agent holds its own grant, bounded to its human via delegator | Copy the human's roles onto the agent — a snapshot that drifts and over-grants / Expiring Grants | agent_deployer: agent with expiration — server-side, self-cleaning | Tokens live till they expire; a cron leaves a window where a dead grant still works / Instant revocation | Delete one relationship — the next check is a live lookup | Minted tokens stay valid; RBAC means cleanup in N places, hoping you got them all / Hierarchical contingencies | agent_deploy = agent_deployer & gated_by→agent_deployer | No role can depend on holding another role — you drop into app code
**Shows.** A three-column, four-row summary table with a grey header row (Pattern / How ReBAC does it / Where Roles & Tokens break) recapping the four patterns covered in the talk (Delegated Authorization, Expiring Grants, Instant revocation, Hierarchical contingencies).

## Slide 35 — More Reading
**Text.** More Reading / goose docs — goose-docs.ai / Read the Zanzibar paper — zanzibar.tech / Working Demo Link — github.com/sohanmaheshwar/goose-spicedb-delegation
**Shows.** Nothing beyond the text; a simple three-item bulleted resource list on a dark background.

## Slide 36 — Thank You
**Text.** Thank You! / Sohan Maheshwar / @AuthZed / AAIF Ambassador / Sohan Maheshwar — AAIF Ambassador | Experienced DevRel professional
**Shows.** A closing slide with "Thank You!" large on the left and speaker name/handle beneath; on the right, a beige digital business-card graphic with the speaker's photo, name, title, and a QR code for a contact/profile link.
