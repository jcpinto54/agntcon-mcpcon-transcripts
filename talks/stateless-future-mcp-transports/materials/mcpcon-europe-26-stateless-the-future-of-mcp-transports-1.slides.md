---
title: "Stateless: The Future of MCP Transports"
speakers: [Kurtis Van Gent, Shaun Smith]
session_id: b49c7410bc17e60971fd9f784a4c358b
kind: slides
deck: mcpcon-europe-26-stateless-the-future-of-mcp-transports-1.pdf
slides: 21
---

# Stateless: The Future of MCP Transports — slides

**Kurtis Van Gent, Shaun Smith**

*Thursday 17 September 2026, 10:50, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`mcpcon-europe-26-stateless-the-future-of-mcp-transports-1.pdf`](mcpcon-europe-26-stateless-the-future-of-mcp-transports-1.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** Stateless: the Future of MCP Transports / MCPcon Europe / Sept 17 2026 / Shaun Smith, Hugging Face / Kurtis Van Gent, Google
**Shows.** A plain white title card with blue and green horizontal accent bars at top and bottom, a red underline beneath the title, and a decorative abstract graphic of a blue-outlined rectangle overlapping a yellow dashed rectangle inside a large pale circle on the right; no diagram content.

## Slide 2 — Speakers
**Text.** Shaun Smith / Hugging Face / Open Source/MCP & Agents / MCP Maintainer / Transport WG Lead / Kurtis Van Gent / Senior Staff Software Engineer / Google Cloud Databases / MCP Core Maintainer / Transport WG Lead / Proprietary + Confidential / Google Cloud
**Shows.** Two circular headshot photos side by side (Shaun Smith wearing headphones; Kurtis Van Gent outdoors at dusk), each captioned with name, employer/role, and MCP working-group credentials; Google Cloud logo bottom-right.

## Slide 3 — Section: MCP @ Scale
**Text.** 00 / MCP @ Scale / Google Cloud / Proprietary & Confidential / 3
**Shows.** A plain green section-divider slide with a large "00" numeral top-left and the section title centered; no diagram.

## Slide 4 — MCP on Google Cloud
**Text.** MCP on Google Cloud / kvg / Fully managed — No infrastructure to provision. Google handles hosting, scaling, and security. / Agent-first design — Built specifically for the reasoning patterns of modern LLMs. / Common governance for enterprise data — Managed service providing observability and governance required for enterprises. / Simplified discovery of data sources — Easily browse and access data sources through Gemini CLI and IDEs. / Data protection — Model Armor provides secure access management and identity control. / Google Cloud
**Shows.** An illustration of a glowing white "MCP" cube with five coloured cables branching out to labelled service icons — AlloyDB (blue), Spanner (red), Cloud SQL (yellow), Bigtable (green), Firestore (orange) — visualising MCP as a single managed connector fanning out to Google Cloud's database services, paired with five benefit bullets each with its own icon.

## Slide 5 — MCP Toolbox for Databases
**Text.** MCP Toolbox for Databases / kvg / Open Source & Extensible — 16k+ Stars on GitHub, +175 contributors; 40+ different databases / Highly Customizable — Pre-built tools for common operations; Custom tools for specific, narrow access for production-grade applications. / Scalable and Secure — Secure connection management & credential handling; Built-in connection pooling and OpenTelemetry support / And Many More! / Google Cloud
**Shows.** A diagram showing two client types (Agents for Applications; Agents for Developer Assistance) feeding into a central "MCP Toolbox for Databases" hub, which fans out via dotted connector lines to a grid of database/service logos (AlloyDB, BigQuery, Cloud SQL, Dataplex, Firestore, MySQL, Postgres, SQLite, Valkey, Apache Cassandra, CockroachDB, MongoDB, Neo4j, Oracle, "And Many More!") — illustrating the toolbox's broad, extensible database coverage.

## Slide 6 — MCP Adoption Dashboard
**Text.** MCP Adoption Dashboard / https://huggingface.co/datasets/evalstate/mcp-clients / OpenCode 0.01% 2026-07-28 — Tasks, Elicitation, Elicit (URL), Skills (MCP), MCP Apps / Claude.ai 89.96% 2026-07-28 — Tasks, Elicitation, Elicit (URL), Skills (MCP), MCP Apps (highlighted green) / Codex CLI 0.00% 2026-07-28 — Elicitation, Elicit (URL) (highlighted orange) / Codex Web 18.25% 2026-07-28 — Tasks, Elicitation, Elicit (URL), Skills (MCP), MCP Apps (highlighted green) / HF / TRANSMISSION / MCP CLIENT DATA / Open Dataset of Clients and Capabilities! / Google Cloud
**Shows.** Four small dashboard cards, one per MCP client (OpenCode, Claude.ai, Codex CLI, Codex Web), each showing a time-series adoption-percentage chart from 13 Jul to 10 Sept and a capability checklist (Tasks, Elicitation, Elicit (URL), Skills (MCP), MCP Apps) with the client's supported capabilities highlighted; Claude.ai shows the highest adoption at 89.96% with MCP Apps support, while Codex CLI shows 0.00% adoption but supports Elicitation/Elicit(URL). A QR code linking to the Hugging Face dataset sits on the right.

## Slide 7 — Section: 2026-07-28 highlights
**Text.** 01 / 2026-07-28 highlights / Proprietary + Confidential / Google Cloud
**Shows.** A plain blue section-divider slide with a large "01" numeral top-left and the section title centered; no diagram.

## Slide 8 — SEP 2575: Stateless MCP
**Text.** 2026-07-28 HIGHLIGHTS · SEP-2575 / SEP 2575: Stateless MCP / initialize handshake (crossed out) / Req #1 [v2026] caps: {session:false} auth: bearer_token / Req #2 [v2026] caps: {tools:true} auth: bearer_token / Req #3 [v2026] caps: {prompts:true} auth: bearer_token / Load Balancer — Stateless Router / Independent Routing / Server Replica A / Server Replica B / Server Replica C / "Each request carries the protocol context needed to understand it." / Scale horizontally — Any server instance can handle any incoming request seamlessly. / Reduce coupling — Server failures don't drop user sessions or break active workflows. / Simplify logic — Eliminate complex state synchronization across backend nodes. / Google Cloud / Proprietary & Confidential
**Shows.** A diagram of a Client sending three independent, self-describing requests (each carrying its own capabilities and bearer token, with the old "initialize handshake" step struck through) through a "Load Balancer — Stateless Router" to three interchangeable Server Replicas (A, B, C) via independent routing arrows — illustrating that because each request is self-contained, any replica can serve any request without shared session state.

## Slide 9 — SEP-2567: Sessionless MCP via Explicit State Handles
**Text.** 2026-07-28 highlights · SEP-2567 / SEP-2567: Sessionless MCP via Explicit State Handles / Each tool call must make its context explicit. / Mcp-Session-Id — removed (crossed out) / 1. Initialize Basket — create_basket() returns basket_id: B42 / 2. Add Items — add_item(basket_id: B42, item: "SKU-99") / 3. Checkout — checkout(basket_id: B42) / Explicitly passed / Server-Side State Record: B42 — Application state, addressed by handle — Handle: B42, Created: 2026-07-28T12:04:11Z, Items: ["SKU-99"], Status: ACTIVE / The server does not infer context from earlier calls. Pass the inputs and state references each call needs. / Google Cloud / Proprietary & Confidential
**Shows.** A three-step flow (Initialize Basket → Add Items → Checkout) where each step explicitly passes the basket_id handle "B42" (shown with dashed "Explicitly passed" arrows) into and out of a central "Server-Side State Record: B42" box holding the actual application state — contrasting with the removed Mcp-Session-Id header, since state is now addressed by an explicit handle rather than an implicit session.

## Slide 10 — MRTR - Stateless Elicitations
**Text.** MRTR - Stateless Elicitations / ROUND TRIP 1: INITIAL CALL - NO SERVER STATE / 1. Tool Call — Client initiates request to Server to execute tool. Client → Server / 2. input_required — Server requires user input; returns requestState token. + STATE Token / CALL ENDS · Connection Closed — No pending call on Server. Client retains state handle locally until user responds. / ROUND TRIP 2: SUBMIT ELICITATION RESULT AND CONTEXT / 3. User Elicitation — 3a. "Confirm action?" 3b. User grants "Approved" Client ↔ User / 4. Resubmission Call — Client sends NEW call with inputResponses + original state handle. Explicit State Handle / 5. Complete Result — Server completes request and returns final result to Client. Workflow Complete / Google Cloud / Proprietary & Confidential
**Shows.** A two-round-trip sequence diagram: round trip 1 shows the Client calling a tool, the Server responding with an "input_required" status plus a state token, and the connection closing entirely with no pending server-side call; round trip 2 shows the user providing the elicitation response to the Client, the Client submitting a brand-new call carrying the response plus the original state handle, and the Server completing and returning the final result — demonstrating that elicitation needs no held-open connection or server memory between rounds.

## Slide 11 — SEP-2243: HTTP Standardization (before)
**Text.** SEP-2243: HTTP Standardization / Region A / Region B / Global Endpoint / Client / Every hop that needs to route must parse request / MCP Over HTTP / POST /mcp/ HTTP/1.1 Host: mcp-server.example / { "jsonrpc": "2.0", "method": "tools/call", "params": { "name": "spanner.execute_sql", "arguments": { "project": "senseai-prod", "region": "us-west1", "instance": "finance-db-01", "query": "SELECT *..." } } } / Google Cloud / Proprietary & Confidential
**Shows.** Left: a routing diagram where a Client's requests pass through a "Global Endpoint" before reaching Region A or Region B, with a note that every routing hop must parse the request to know where to send it. Right: an HTTP POST request example where the routing-relevant method and tool name are buried inside the JSON-RPC body (highlighted in red), meaning any router must parse the full JSON body just to route the request — the problem this SEP addresses.

## Slide 12 — SEP-2243: HTTP Standardization (after)
**Text.** SEP-2243: HTTP Standardization / Region A / Region B / Global Endpoint / Client / Every hop that needs to route must parse request / MCP Over HTTP / POST /mcp/ HTTP/1.1 Host: mcp-server.example MCP-Name: spanner.execute_sql MCP-Method: tools/call / { "jsonrpc": "2.0", "method": "tools/call", "params": { "name": "spanner.execute_sql", "arguments": { "project": "senseai-prod", "region": "us-west1", "instance": "finance-db-01", "query": "SELECT *..." } } } / Google Cloud / Proprietary & Confidential
**Shows.** The same routing diagram as slide 11, but the HTTP request now carries the same routing-relevant fields duplicated as standard headers — MCP-Name: spanner.execute_sql and MCP-Method: tools/call (highlighted in green) — so routers and load balancers can route on headers alone without parsing the JSON-RPC body.

## Slide 13 — SEP-2243: HTTP Standardization (tool schema + headers)
**Text.** SEP-2243: HTTP Standardization / Tool Definition (Schema) — { "name": "hf.run_in_sandbox", "inputSchema": { "properties": { "command": { "type": "string" }, "sandbox_id": { "type": "string", "x-mcp-header": "Sandbox-Id" } } } } / HTTP Request Headers POST /mcp/ — Host: mcp-server.example, MCP-Name: hf.run_in_sandbox, MCP-Method: tools/call, X-MCP-Param-Sandbox-Id: sbx-292, X-MCP-Param-Region: us-west1, X-MCP-Param-Instance: finance-db-01 / JSON-RPC Payload (Body) — { "jsonrpc": "2.0", "method": "tools/call", "params": { "name": "hf.run_in_sandbox", "arguments": { "Sandbox-Id": "sbx-292", "region": "us-west1", "instance": "finance-db-01", "cmd": "ls -al" } } } / Google Cloud / Proprietary & Confidential
**Shows.** A worked example showing a tool's JSON schema marking one input field ("sandbox_id") with an "x-mcp-header": "Sandbox-Id" annotation; the resulting HTTP request then carries that value both as a header (X-MCP-Param-Sandbox-Id: sbx-292, highlighted) and inside the JSON-RPC body's arguments (Sandbox-Id: sbx-292, highlighted) — showing how a tool schema can opt individual parameters into header-level visibility for routing.

## Slide 14 — Section: 2026-12-15 Roadmap
**Text.** 02 / 2027-3-31 ? / 2026-12-15 Roadmap / Google Cloud
**Shows.** A plain red section-divider slide with a large "02" numeral top-left, the section title "2026-12-15 Roadmap," and a hand-drawn-style yellow sticky note overlapping it reading "2027-3-31 ?" — suggesting uncertainty about whether this roadmap timeline will hold.

## Slide 15 — Tool/Primitive Versioning
**Text.** Tool/Primitive Versioning / Problem — Stale Tool Cache: A deployment can change a tool while clients still cache its old definition. HTTP Cache Incompatibility: JSON-RPC POST lists don't fit ordinary HTTP cache revalidation. / Solution — Per-tool digests: Execute against the expected definition—or reject before execution and require a refresh. Optional GET lists + ETags: Reuse cached lists; return 304 Not Modified when unchanged. / Opt-in proposals. Existing POST methods remain. Private lists stay private.
**Shows.** A red "Problem" card and a green "Solution" card side by side, mapping each stated problem (stale tool cache, HTTP cache incompatibility) to its proposed fix (per-tool digests, optional GET lists with ETag/304 support), with a note beneath that both proposals are opt-in and backward compatible.

## Slide 16 — HTTP over STDIO
**Text.** 2026-12-15 ROADMAP · PRIORITY · PROPOSED — HTTP OVER STDIO / HTTP over STDIO / kvg / MCP Operations / Shared HTTP Transport Model — Request / Response Semantics, Transport Metadata in Headers, Shared SDK Transport Logic / Use HTTP messages for local subprocess communication too (conceptual metadata placement shown). / Network Connection → Remote Server https://remote.api/mcp / stdin / stdout Pipes → CLIENT MACHINE BOUNDARY → Local Subprocess / Fewer transport rules — Eliminates separate protocol specification branches for IPC versus remote connections. / Less duplicated metadata — Reuses standard HTTP headers and status codes instead of wrapping in custom schemas. / Less duplicated implementation — Single SDK core handles serialization, parsing, and context across all connections. / Google Cloud / Proprietary & Confidential
**Shows.** A layered diagram where "MCP Operations" flows down into a shared "HTTP Transport Model" box, which then splits into two carrier mechanisms: a Network Connection reaching a Remote Server over HTTPS, and stdin/stdout Pipes reaching a Local Subprocess within the client machine boundary — proposing that the same HTTP message format be reused for local subprocess IPC, not just remote network calls, to eliminate a separate STDIO protocol branch.

## Slide 17 — Pluggable Transports
**Text.** 2026-12-15 ROADMAP · PRIORITY · PROPOSED — HTTP OVER STDIO / Pluggable Transports / "Change the transport, not the application." / MCP Application — API Interface → Replaceable Transport Slot → stdio (Standard Interop), Streamable HTTP (Standard Interop), gRPC (Optional), AMQP / Custom (Optional) / Decoupled Architecture — Application logic remains unchanged across local IPC and remote network boundaries. / Zero Runtime Leakage — Swap out transport implementations without updating client handler code. / Extensible Bindings — Add custom RPC or IPC transports by satisfying the common transport interface. / Google Cloud / Proprietary & Confidential
**Shows.** A diagram of an "MCP Application" box feeding into a dashed "Replaceable Transport Slot," which can connect to any of four interchangeable transport implementations (stdio and Streamable HTTP marked "Standard Interop"; gRPC and AMQP/Custom marked "Optional") — illustrating a pluggable-transport architecture where the application stays the same regardless of which transport is plugged in.

## Slide 18 — Best Effort: Error Standardization and Capability awareness
**Text.** 2026-12-15 ROADMAP · BEST EFFORT / Best Effort / Error Standardization — EXISTING ERROR EXAMPLE: MissingRequiredClientCapability, JSON-RPC: -32021, HTTP: 400 Bad Request, Missing capability: elicitation. PROPOSED ERROR STANDARDIZATION (Proposed): Error names, JSON-RPC codes, HTTP mappings, Retry guidance. Give clients a predictable way to respond. Server-side call-time validation exists today. / Capability awareness — CACHED CATALOG CARD: confirm_booking, Requires elicitation (Proposed). Catalog entry remains valid and cached. Availability is dynamically re-evaluated based on active client capability state. CLIENT CAPABILITY STATE CHANGE: Elicitation available ↔ Elicitation unavailable. MODEL TOOL EXCLUSION: confirm_booking (struck through) — Excluded from model tools. Detect incompatibility before the model plans. Keep original catalog intact for later reuse. / Google Cloud / Proprietary & Confidential
**Shows.** Two cards: "Error Standardization" shows a concrete existing error (MissingRequiredClientCapability, JSON-RPC -32021 / HTTP 400) alongside a proposed standardized structure (error names, JSON-RPC codes, HTTP mappings, retry guidance); "Capability awareness" shows a cached tool catalog entry ("confirm_booking") whose elicitation-dependent availability toggles live with client capability state, and gets excluded from the model's tool list (shown struck through) when elicitation becomes unavailable, without discarding the cached catalog entry itself.

## Slide 19 — Best Effort: Streaming Tool Results and Content Language Negotiation
**Text.** Best Effort / Streaming Tool Results — Deliver partial results for UX/Observability, Steering and Efficiency / TOOL RESULT STREAM Partial result 1/4 2.6s / ORDERED CONTENT CHUNK / Content Language Negotiation — Internationalization (i18n) — Allow the Client to supply language preferences to update Human Facing Titles. Capability: Dynamic Locale & Title Translation / Google Cloud / Proprietary & Confidential
**Shows.** Left card: a mock streaming-progress UI showing "Partial result 1/4" at 2.6s with an ordered-content-chunk progress bar, illustrating incremental delivery of tool results. Right card: describes a proposed capability letting clients pass a language preference so the server can return human-facing titles translated/localized dynamically.

## Slide 20 — Help shape the future of MCP transports
**Text.** Help shape the future of MCP transports / Join the MCP Transports Working Group. / I WANT YOU FOR MCP MODEL CONTEXT PROTOCOL / JOIN THE NETWORK OF BUILDERS AND USERS · CONNECT LARGE LANGUAGE MODELS · STANDARDIZE TOOL INTEGRATION · SHARE KNOWLEDGE & BEST PRACTICES · IMPROVE THE AI ECOSYSTEM / Scan to get involved / github.com/modelcontextprotocol/transports-wg
**Shows.** A "Wanted"/Uncle-Sam-style AI-generated recruitment poster (a pointing Uncle Sam figure in an MCP-branded top hat) captioned as a call to join the MCP Transports Working Group, beside a QR code linking to the working group's GitHub repository (github.com/modelcontextprotocol/transports-wg).

## Slide 21 — Closing visual
**Text.** Proprietary + Confidential / Google Cloud
**Shows.** A dark closing slide with a stylised abstract graphic of concentric dark-red rings around a navy-blue circular centre and a small white curved mark to its left, resembling a stylised eye or closing iris/portal; no other text beyond the standard confidentiality notice and Google Cloud logo.
