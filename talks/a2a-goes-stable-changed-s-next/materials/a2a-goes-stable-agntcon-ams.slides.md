---
title: "A2A Goes Stable: What Changed, Why, and What's Next"
speakers: [Sam Betts, Kuba Herczyński]
session_id: c705cc6b88f10076b19b6b29c22b4471
kind: slides
deck: a2a-goes-stable-agntcon-ams.pptx
slides: 20
---

# A2A Goes Stable: What Changed, Why, and What's Next — slides

**Sam Betts, Kuba Herczyński**

*Thursday 17 September 2026, 12:35, G102 + G103 — Interop & Standards track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`a2a-goes-stable-agntcon-ams.pptx`](a2a-goes-stable-agntcon-ams.pptx), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** AGNTCON + MCPCON EUROPE 2026 · AMSTERDAM · 17 SEPTEMBER / v1.0 / A2A Goes Stable / What changed, why, and what's next / Sam Betts / Engineering Technical Lead · Cisco Systems / Kuba Herczyński / Staff Software Engineer · Google / Both A2A Protocol maintainers · #AGNTCon #MCPCon
**Shows.** Dark navy title slide. A blue "v1.0" badge top right. Bottom right, a small diagram: two bordered boxes labelled "Agent" connected by a double-headed cyan arrow labelled "A2A", illustrating the protocol's agent-to-agent connection. Faint "Cisco Confidential" watermark bottom right corner.

## Slide 2 — Two core maintainers
**Text.** WHO'S TALKING / Two core maintainers / Sam Betts / Engineering Technical Lead · Cisco Systems / Contributor to the A2A specification and SDKs. Works on AGNTCY. Fourteen years building cloud-native platforms, security and AI systems. / Kuba Herczyński / Staff Software Engineer · Google / Contributor to the A2A specification and its adoption. Authored the v0.3 to v1.0 backward-compatibility design. / A2A is a hosted project of the Agentic AI Foundation — the foundation running this conference. / 150+ partner organisations. TSC: AWS · Cisco · Google · IBM Research · Microsoft · Salesforce · SAP · ServiceNow / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 2 · Cisco Confidential
**Shows.** Two light-grey bio cards side by side for each speaker. Below, a full-width dark banner stating A2A's governance under the Agentic AI Foundation and listing its steering committee members.

## Slide 3 — A2A in 60 seconds
**Text.** PRIMER / A2A in 60 seconds / Agent A — reasoning + orchestration — via MCP — Tools | Data | Context / A2A — 1 · discover the Agent Card / 2 · delegate a Task / 3 · stream · poll · webhook / Agent B — reasoning + orchestration — via MCP — Tools | Data | Context / MCP is inside an agent. A2A is between agents. / Most production systems run both. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 3 · Cisco Confidential
**Shows.** Two boxes labelled "Agent A" and "Agent B", each containing an inner shaded box "reasoning + orchestration" and, below a "via MCP" label, three small boxes for Tools/Data/Context. A green double-headed arrow labelled "A2A" connects the two agent boxes, with a numbered 3-step protocol flow (discover the Agent Card → delegate a Task → stream/poll/webhook) printed between them. A dark banner beneath states the MCP-vs-A2A distinction.

## Slide 4 — Why not MCP to agent?
**Text.** THE OBVIOUS QUESTION / Why not MCP to agent? / Agent A — reasoning + orchestration — via MCP — Tools | Data | Context / MCP — The agent becomes a tool, if you treat it like a tool. / Agent B — reasoning + orchestration — via MCP — Tools | Data | Context / Agents adapt, plan and solve problems. Tools reply. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 4 · Cisco Confidential
**Shows.** Same two-agent box layout as slide 3, but now the connecting arrow between Agent A and Agent B is dark red and labelled "MCP" instead of green/"A2A", with text underneath explaining that using MCP between agents reduces one agent to a tool of the other. Dark banner below reinforces the agents-vs-tools distinction.

## Slide 5 — Why v1.0 — and why now
**Text.** THE CASE FOR v1.0 / Why v1.0 — and why now / 01 Governance — A Linux Foundation project with an eight-company steering committee. Not one vendor's spec. / 02 Reach — Six official SDKs shipped: Python, Go, Java, JavaScript, .NET and Rust. / 03 Design intent — A hardening release, not a reinvention. Core ideas intact, rough edges removed. / v0.3 was something to experiment with. v1.0 is something to commit to. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 5 · Cisco Confidential
**Shows.** Three bordered cards numbered 01–03 in a row, each with a bold heading and a short paragraph. Below, a highlighted blue-tinted callout bar with a left accent stripe contrasting v0.3 and v1.0's purpose.

## Slide 6 — What "stable" actually means
**Text.** DEFINITIONS / What "stable" actually means / 01 One normative source of truth — a2a.proto is now the universal definition of the protocol, not a gRPC-specific file. / 02 Explicit compatibility rules — A defined versioning strategy, with the protocol version declared per interface. / 03 Bindings that must agree — JSON-RPC, HTTP+JSON and gRPC are formally specified with equivalence guarantees. / Stable ≠ finished. Stable means you can plan around it. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 6 · Cisco Confidential
**Shows.** Three stacked shaded rows, each numbered 01–03 in large pale-blue digits, with a bold heading and one-line explanation. A bold centred statement below closes the slide.

## Slide 7 — Section divider: Act II, What v1.0 delivers
**Text.** ACT II / What v1.0 delivers / Signed Agent Cards · Web-aligned architecture · Multi-tenancy · Modern security
**Shows.** Full-bleed dark navy section-divider slide with a short cyan rule above the "ACT II" eyebrow label, large white heading, and a list of the four upcoming topics beneath a cyan underline bar. Faint "Cisco Confidential" watermark bottom right.

## Slide 8 — Four things v1.0 puts on the table
**Text.** ENTERPRISE CAPABILITIES / Four things v1.0 puts on the table / Signed Agent Cards — Cryptographic verification of identity and metadata — trust established before interaction. / Multi-tenancy — A single endpoint can securely host many agents. / Heterogeneous environments — Multi-protocol bindings and version negotiation. No lock-in to one stack. / Improved security posture — Modern auth flows in, legacy patterns out. / Highlighted: the two we will look at in detail. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 8 · Cisco Confidential
**Shows.** A 2×2 grid of four cards. "Signed Agent Cards" and "Heterogeneous environments" (left column) are highlighted with a blue left accent bar and light-blue fill, signalling they are the two topics explored in depth later; "Multi-tenancy" and "Improved security posture" (right column) are shown in plain grey cards.

## Slide 9 — Deep dive: Signed Agent Cards
**Text.** DEEP DIVE 01 / Signed Agent Cards / In v0.3, an Agent Card was effectively trust-on-first-use. / STEP 1 Fetch the card — Client retrieves the Agent Card from .well-known or from a registry. / STEP 2 Verify the signature — A JWS signature (RFC 7515) over the RFC 8785 canonical form of the card. / STEP 3 Then interact — Credentials and tasks flow only after identity is proven. / Closes at the discovery layer — lookalike cards in registries · stale cards with swapped auth · compromised discovery paths / Verify before you send credentials, before you send a task — before you send anything. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 9 · Cisco Confidential
**Shows.** Three sequential step cards connected by arrows (Fetch the card → Verify the signature → Then interact), the third one highlighted in blue. Below, a red-tinted warning callout with a red left accent bar lists the specific attack vectors this design closes.

## Slide 10 — Deep dive: Web-aligned architecture
**Text.** DEEP DIVE 02 / Web-aligned architecture / WIRE — JSON + HTTP · JSON-RPC · gRPC / DELIVERY — polling · streaming · webhooks / STYLE — stateless · layered · HTTP semantics / "An A2A interaction can begin with a single HTTP request." — A2A v1.0 announcement / Your existing load balancers, API gateways, WAFs and tracing already work. You do not need an agent mesh. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 10 · Cisco Confidential
**Shows.** Left, a shaded reference card listing Wire/Delivery/Style properties as a three-row table. Right, a dark navy quote card with a large pull-quote from the v1.0 announcement, attributed at the bottom. A green-tinted callout beneath both spans the width of the slide.

## Slide 11 — Multi-tenancy and modern security
**Text.** ENTERPRISE, BRIEFLY / Multi-tenancy and modern security / Multi-tenancy — Route by URL sub-path, auth credentials, or an opaque tenant field in the Agent Card. / one A2A endpoint → agent-a, agent-b, agent-c / Improved security posture — ✓ Device Code flow (RFC 8628) / ✓ pkce_required on Auth Code (RFC 7636) / ✗ Implicit and Password flows removed / Aligned with the OAuth 2.0 Security BCP. / Enterprise-ready ≠ enterprise-heavy. Same protocol, better defaults. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 11 · Cisco Confidential
**Shows.** Left card: a blue bar labelled "one A2A endpoint" with three downward/outward arrows fanning to three boxes labelled agent-a, agent-b, agent-c, illustrating single-endpoint multi-tenant routing. Right card: a checklist with green checkmarks for adopted auth flows (Device Code, PKCE-required) and a red X for removed legacy flows (Implicit, Password).

## Slide 12 — Section divider: Act III, Migration & extensibility
**Text.** ACT III / Migration & extensibility / Breaking changes · backward compatibility by design · extensions and bindings
**Shows.** Same full-bleed dark navy section-divider design as slide 7, cyan "ACT III" eyebrow, white heading, and three-topic subtitle list beneath the cyan underline bar.

## Slide 13 — Yes — v0.3 → v1.0 breaks the wire
**Text.** THE HONEST SLIDE / Yes — v0.3 → v1.0 breaks the wire / IMPACT | WHAT CHANGED | WHY / CRITICAL | TextPart / FilePart / DataPart → one unified Part | Member presence replaces the kind discriminator / HIGH | Enum values → SCREAMING_SNAKE_CASE | ProtoJSON compliance: completed → TASK_STATE_COMPLETED / HIGH | Stream events lose kind and final | Wrapper members statusUpdate / artifactUpdate instead / HIGH | Agent Card collapses into supportedInterfaces[] | One interface list; protocolVersion moves inside each / HIGH | Errors now use google.rpc.Status | Replaces RFC 9457; ErrorInfo carries reason and domain / Ordered by the impact rating in the spec's own migration guide. → / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 13 · Cisco Confidential
**Shows.** A five-row impact table with colour-coded severity badges (one red-bordered "CRITICAL", four amber-bordered "HIGH") in the left column, paired with the specific wire-format change and its rationale in the other two columns. Orange accent bar top-left signals this is a "warning"-toned slide.

## Slide 14 — Compatibility, baked into the Agent Card
**Text.** DESIGN DECISION 01 / Compatibility, baked into the Agent Card / The Agent Card is public — it lives in .well-known files, registries and emails between teams. You cannot ship two versions of it. / PROTOBUF DEFINITION — v1.0 fields only — Clean. No legacy debt carried into the type definitions. / JSON WIRE FORMAT — v1.0 + v0.3 fields — Legacy field names preserved. SDKs translate on marshal and unmarshal. / A v0.3 client can still parse a v1.0 server's card — and the reverse. / Clean core. Compatibility at the edges. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 14 · Cisco Confidential
**Shows.** Two side-by-side cards contrasting the protobuf definition (v1.0-only fields, grey card) against the JSON wire format (v1.0 + v0.3 fields, highlighted blue card). A dark closing banner states the design principle "Clean core. Compatibility at the edges."

## Slide 15 — Per-interface versioning
**Text.** DESIGN DECISION 02 / Per-interface versioning / v0.3: the protocol version was a property of the whole Agent Card. One agent, one version. / v1.0: protocol_versions moved into each interface. / One agent — agent.example.com → https://agent.example.com/v03 [JSON-RPC, v0.3] / https://agent.example.com/v1 [JSON-RPC, v1.0] / grpc://agent.example.com:443 [gRPC, v1.0] / Version negotiation becomes part of transport negotiation. / Separate routes for your LB / Separate metrics in tracing / Opt into back-compat per transport / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 15 · Cisco Confidential
**Shows.** A black box labelled "One agent / agent.example.com" with three arrows fanning out to three rows, each showing a distinct URL/transport (JSON-RPC v03 path, JSON-RPC v1 path, gRPC endpoint) paired with a version badge (v0.3 outlined in amber, v1.0 filled blue) — illustrating that one agent can expose multiple interfaces at different protocol versions simultaneously. Three light-blue tags below list practical operational implications.

## Slide 16 — All four combinations work
**Text.** THE PAYOFF / All four combinations work / v0.3 SERVER | v1.0 SERVER / v0.3 client — ✓ Native | ✓ Legacy interface + card back-compat / v1.0 client — ✓ Card back-compat | ✓ Native / Progressive migration. No flag day. No frozen ecosystem. / MEASURED, NOT ASSERTED — SCAN FOR THE LIVE DASHBOARD / Every night the ITK tests 8 SDK/version pairs — v1.0 and v0.3, all three bindings. / The v0.3 cells above use each SDK's compatibility layer: opt-in in JS, not yet in Rust. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 16 · Cisco Confidential
**Shows.** A 2×2 compatibility matrix (rows: v0.3 client / v1.0 client; columns: v0.3 server / v1.0 server), all four cells shown with a green checkmark and a short label (Native, Legacy interface + card back-compat, Card back-compat, Native). A dark banner below states the migration philosophy. A green-tinted footer callout includes a QR code linking to a live nightly interoperability test dashboard.

## Slide 17 — A stable core, not a frozen ecosystem
**Text.** ROOM TO GROW / A stable core, not a frozen ecosystem / Custom protocol bindings — Replace the default transport while preserving A2A semantics. / Extensions — Add capabilities on top of the core. Advertised on the Agent Card, so clients can negotiate. / A2A core — Stable. Governed. Protected by semver. / Both extension points have governance, so the ecosystem does not fragment. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 17 · Cisco Confidential
**Shows.** Three stacked full-width rows in a layered stack: a light-green "Custom protocol bindings" row, a light-blue "Extensions" row, and a black "A2A core" row at the base — visually presenting extensibility layers built on top of a stable, governed core, each with a coloured left accent bar.

## Slide 18 — What the community is building now
**Text.** ROADMAP / What the community is building now / NEXT PROTOCOL VERSION / v1.1 — bidirectional streaming, later this year / Backward compatible within v1.x — the semver promise, in practice. / 01 SDK parity — All six SDKs support v1.0. Four have cut stable releases; .NET and Rust are pre-stable. / 02 Validation tooling — Inspector, the TCK, the ITK — and a new official A2A CLI. / 03 Community-led development — Standard processes for contributing to the spec, SDKs and tooling. / Full roadmap: a2a-protocol.org/latest/roadmap / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 18 · Cisco Confidential
**Shows.** A highlighted blue callout box at top announcing v1.1 and its scope, followed by three bordered cards numbered 01–03 covering SDK parity, validation tooling, and community process. A shaded footer bar gives the roadmap URL.

## Slide 19 — Try it. Then help shape it.
**Text.** TWO THINGS TO DO / Try it. Then help shape it. / 01 Try v1.0 today — a2a-protocol.org — NEW · official A2A CLI — Pick your SDK, or start with the CLI. On v0.3? Migration is progressive, not a rewrite. / 02 Join the working group — github.com/a2aproject — Concrete asks right now: bidirectional streaming for v1.1, .NET and Rust SDK parity, custom protocol bindings. / If you're building an agent — not just a long-running tool — expose it over A2A. / A2A Protocol v1.0 · AGNTCon + MCPCon Europe 2026 · 19 · Cisco Confidential
**Shows.** Two large calls-to-action side by side: a blue card ("Try v1.0 today") with a "NEW" badge for the official A2A CLI and a QR code linking to a2a-protocol.org; a dark card ("Join the working group") with a QR code linking to the GitHub project and a list of concrete open contribution asks.

## Slide 20 — Thank you / Questions?
**Text.** Thank you / Questions? / Sam Betts · Cisco Systems · github.com/tehsmash / Kuba Herczyński · Google · github.com/herczyn / a2a-protocol.org · github.com/a2aproject / A2A Protocol is a Linux Foundation project. TSC: AWS · Cisco · Google · IBM Research · Microsoft · Salesforce · SAP · ServiceNow / a2a-protocol.org
**Shows.** Full-bleed dark navy closing slide with large white "Thank you" heading and cyan "Questions?" subheading, speaker names/handles beneath a horizontal rule, and a QR code top right linking to a2a-protocol.org. Faint "Cisco Confidential" watermark bottom right, matching the deck's title and section-divider styling.
