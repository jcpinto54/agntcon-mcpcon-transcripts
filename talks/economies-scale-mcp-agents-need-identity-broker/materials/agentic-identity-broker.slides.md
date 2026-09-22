---
title: "Economies of Scale for MCP and Agents: Why You Need an Identity Broker"
speakers: [Magnus Jungsbluth, Jan Brennenstuhl]
session_id: 2b03f52f8aba6b86adbc4b03f16628b2
kind: slides
deck: agentic-identity-broker.pdf
slides: 27
---

# Economies of Scale for MCP and Agents: Why You Need an Identity Broker — slides

**Magnus Jungsbluth, Jan Brennenstuhl**

*Friday 18 September 2026, 11:30, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agentic-identity-broker.pdf`](agentic-identity-broker.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** zalando / Economies of Scale for MCP and Agents / Why You Need an Identity Broker / Magnus Jungsbluth · Jan Brennenstuhl · Zalando SE / AGNTCon + MCPCon Europe 2026 · Amsterdam
**Shows.** A festival-campsite photograph (colourful tents, flags, a woman in a satin dress in the foreground) with the Zalando wordmark top-left and the talk title and speaker credits overlaid in white in the lower-left corner — a lifestyle-brand title card rather than a diagram.

## Slide 2 — Connecting a tool is only the start
**Text.** Connecting a tool is only the start.
**Shows.** A plain black slide with the statement in large white type and a small orange playback-style triangle icon top-right (a recurring corner mark on this deck's black divider slides); no diagram.

## Slide 3 — Identity work repeats across integrations
**Text.** Identity work repeats across integrations / MCP integration A — Discover authorization, Validate token audience, Handle scopes and errors / MCP integration B — Discover authorization, Validate token audience, Handle scopes and errors / MCP integration C — Discover authorization, Validate token audience, Handle scopes and errors / Repeated integration work / Resource servers can use a separate authorization server. / The problem is repeated implementation, not OAuth itself.
**Shows.** Three identical grey cards labelled "MCP integration A/B/C," each listing the same three identity sub-tasks, visually demonstrating that every integration re-implements the same authorization discovery, token-audience validation, and scope/error handling.

## Slide 4 — We learned this while scaling microservices
**Text.** We learned this while scaling microservices / Before — Controls in each service. Authentication, transport security, retries, and rate limits. Product engineering teams repeated the work. Implementations drifted. / After — Controls in the platform. Gateways and identity services provided common controls. Product engineering teams focused on domain logic.
**Shows.** A two-column "Before / After" comparison card, tagged with black "Before" and "After" pills, drawing an explicit parallel between the microservices-era move from per-service controls to shared gateway/identity infrastructure and the argument the talk is about to make for agents.

## Slide 5 — Product teams should not rebuild a platform
**Text.** Product teams should not rebuild a platform / Agent A — Runtime, Session state, Tool routing, Registration / Agent B — Runtime, Session state, Tool routing, Registration / Agent C — Runtime, Session state, Tool routing, Registration / Shared concerns, rebuilt by each team / The same product engineering effort can repeat across agent projects.
**Shows.** Three identical grey cards labelled "Agent A/B/C," each listing the same four infrastructure concerns (runtime, session state, tool routing, registration), mirroring slide 3's pattern to show the same duplication problem recurring at the agent level.

## Slide 6 — Shift down the shared work
**Text.** Shift down the shared work / Product team A — Agent behavior, Domain tools / Product team B — Agent behavior, Domain tools / Product team C — Agent behavior, Domain tools / Product ownership / Shared platform / Agent Runtime — Run agents / MCP Gateways — Reach tools / Authn & Authz — Delegated access / LLM Gateway — Consume LLMs / Observability — Trace actions / Shift down: move common implementation into the platform.
**Shows.** A layered diagram: three product-team cards (each owning only Agent behavior and Domain tools) sit above a horizontal divider line labelled "Product ownership," below which a single "Shared platform" band lists five common services (Agent Runtime, MCP Gateways, Authn & Authz, LLM Gateway, Observability) that teams no longer need to rebuild individually.

## Slide 7 — Reuse changes the cost of the next integration
**Text.** Reuse changes the cost of the next integration / Economies of scale / The platform needs an initial investment + maintenance. / Each new agent then reuses security properties + infrastructure. / Tool providers publish via the platform. / The benefit is less repeated engineering and fleet management. / Cumulative engineering effort / Higher / Lower / First adoption ··· Wider adoption / Engineering teams adopting / Repeated implementations / Shared platform / Conceptual model: fixed investment + lower effort per adoption. / Illustrative model, not measured cost data. Integration and operating work remain.
**Shows.** A line chart plotting cumulative engineering effort against number of engineering teams adopting: a dark "Repeated implementations" line rises steeply and linearly, while an orange "Shared platform" line starts higher (reflecting up-front investment) but flattens out with a much shallower slope, crossing under the repeated-implementation line partway through — illustrating that the platform approach costs more up front but scales far cheaper per additional team.

## Slide 8 — Central infrastructure. Local autonomy.
**Text.** Central infrastructure. Local autonomy in business decisions.
**Shows.** A plain black divider slide with the statement in large white type and the small orange corner triangle icon; no diagram.

## Slide 9 — A shared platform connects the pieces
**Text.** A shared platform connects the pieces / Application registry / Product engineering teams — Register Agents + MCP / Agent platform / Platform abstractions — Kubernetes CRDs / kagent — Deployed agents / agentgateway — MCP gateway / UI — Browser + Google Chat / Identity — Consent + delegation / Third-party MCP servers / Local agents / Agent users / A reusable control plane unifies registration, runtime, routing, and delegated access.
**Shows.** A box-and-arrow architecture diagram: Product engineering teams register Agents + MCP into an "Agent platform" boundary containing Platform abstractions (Kubernetes CRDs), which feeds "kagent" (deployed agents) and connects to "agentgateway" (MCP gateway), a "UI" component (Browser + Google Chat), and an "Identity" component (consent + delegation); the platform in turn talks out to an Application registry, Third-party MCP servers, Local agents, and Agent users — showing how one shared control plane ties registration, runtime, routing, UI and identity together.

## Slide 10 — An agent is not a person or a fixed script
**Text.** An agent is not a person or a fixed script / Memory + model — Inform decisions, not authority / Human — delegates intent —Trigger→ Agent — has its own identity —Tool call→ Tool — performs the action / Attribute the action to both the user and the agent / Autonomy does not remove the need for attribution.
**Shows.** A flow diagram: "Memory + model" feeds down into "Agent," which sits between "Human" (delegates intent, connected by a "Trigger" arrow) and "Tool" (connected by a "Tool call" arrow that performs the action) — establishing that the agent has its own identity distinct from both the human and the memory/model that informs it, so actions must be attributed to both user and agent.

## Slide 11 — A robot account is a tempting shortcut
**Text.** A robot account is a tempting shortcut / Persistent credentials / Agent — holds credentials / Credential A → MCP server A / Credential B → MCP server B / Credential C → Provider API / A separate account does not solve delegated access.
**Shows.** A diagram showing a single "Agent" box holding three separate persistent credentials (A, B, C), each wired directly to a different downstream system (MCP server A, MCP server B, Provider API) — illustrating the anti-pattern of giving an agent its own long-lived static credentials per integration instead of delegated, revocable access.

## Slide 12 — Shared credentials pool users' permissions
**Text.** Shared credentials pool users' permissions / Anti-pattern: pooled authority / User A, User B, User C → Shared agent — Pooled credentials, Combined permissions → Google, Jira, MCP server / Not scoped to the current user / The current user should not gain the combined permissions of other users.
**Shows.** A diagram with three "User A/B/C" boxes all feeding into one "Shared agent" box (labelled Pooled credentials, Combined permissions), which then fans out to Google, Jira, and MCP server — flagging this as an anti-pattern because any single current user effectively gains the union of every user's permissions.

## Slide 13 — Identify the agent. Delegate the user's access.
**Text.** Identify the agent. Delegate the user's access. / User — permissions / Agent — allowed capabilities / Effective access — ∩ Only where both permit / Tool call — within both boundaries / Keep user identity and agent identity in the authorization context. / User permission AND agent permission. A live delegation is also required.
**Shows.** A diagram where "User permissions" and "Agent allowed capabilities" both feed into an "Effective access" box marked with an intersection (∩) symbol and the label "Only where both permit," which then authorizes the "Tool call" — visually defining effective access as the intersection, not union, of user and agent permissions.

## Slide 14 — Delegation is a graph, not one credential
**Text.** Delegation is a graph, not one credential / User — delegates intent / Agent A — identified principal —Grant A→ GitHub — target + scope / Agent B — identified principal —Grant B→ MCP server — target + scope / User + agent + target + scope / User + agent + target + scope. Keep every delegation attributable.
**Shows.** A branching diagram: one "User" delegates intent out to two separately identified agent principals (Agent A, Agent B), each with its own labelled grant (Grant A, Grant B) to a specific target with its own scope (GitHub; MCP server) — showing delegation as a many-branched graph of user+agent+target+scope tuples rather than a single shared credential.

## Slide 15 — Agentic Identity Broker (section divider)
**Text.** Agentic Identity Broker / A shared service for delegated access and to capture user consent. / Built and used in the Zalando Agent Platform. / Open source for agents and MCP integrations.
**Shows.** A two-tone divider slide: a grey panel on the left carries the section title in large type, and white space on the right carries the three descriptive lines — marking the start of the talk's main proposed solution.

## Slide 16 — Keep the IdP. Add delegated access.
**Text.** Keep the IdP. Add delegated access. / Identity Provider — Who is the user? Keep the existing login system. A trusted proxy authenticates the user and forwards that identity to the broker. / Identity Broker — What is delegated? Resolve the user, agent, service, and live grant. Manage provider sessions, consent, and scoped access centrally.
**Shows.** A two-card side-by-side comparison, tagged "Identity Provider" and "Identity Broker," clarifying the division of responsibility: the existing IdP keeps answering "who is the user," while a new broker layer answers "what is delegated," sitting alongside rather than replacing the IdP.

## Slide 17 — Consent Screen
**Text.** Consent Screen / Claude Code — Claude Code is an AI pair programmer that helps you write code faster and with less work. It can understand your code, suggest improvements, and even write code for you. It can also help you with debugging and testing your code. / Grant Validity — Today: September 16, 2026 / Grant expires on a specific date / This grant will remain active indefinitely until manually revoked. / Agent Permissions — Review the permissions this agent is requesting. Required permissions are always granted. Toggle optional permissions on or off based on your preference. / Workspace & Collaboration Tools (Optional) — The agent can read email, chat, shared files via Google Workspace. New files on Google Drive can be created and existing files cannot be overwritten. The agent can also use the Ziri knowledge retrieval. Services: Google Services (required) / Data Access (Optional) — Access to the data platform for reading data. Modifications in your name always prompt for an additional approval. Services: Databricks / Revoke All Access / Approve & Delegate / Users choose the agent permissions and lifetime of a delegated grant.
**Shows.** A screenshot mockup of an end-user consent screen for the agent "Claude Code," showing an identity card, grant-expiry controls, and two toggleable optional permission groups (Workspace & Collaboration Tools, enabled; Data Access, disabled) each listing the underlying services, with "Revoke All Access" and "Approve & Delegate" buttons at the bottom.

## Slide 18 — Consent becomes a bounded grant
**Text.** Consent becomes a bounded grant / Choose the agent — Know who is asking. Show validated agent metadata. Identify the product and operator behind the request. / Choose capabilities — Understand the requested access. Use a permission set in business language, not an unexplained provider scope string. / Approve the grant — Scope and duration. Record the user, agent, and permissions. Apply an expiry where appropriate. Keep revocation available. / Consent management remains available outside the initial login/consent flow. Users can review and revoke grants.
**Shows.** A three-step chevron process bar ("Choose the agent" → "Choose capabilities" → "Approve the grant," the last one highlighted in black as current), each paired with a headline and explanation — walking through how the consent screen from slide 17 turns into a scoped, time-bounded grant.

## Slide 19 — The agent never receives a provider token
**Text.** The agent never receives a provider token / Agent — User-agent identity / Gateway — Trusted token exchange / Broker — Consent + vault / Target — MCP server / API / 1 Tool request — User-agent token / 2 RFC 8693 token exchange — subject_token + resource, Signed client_assertion / 3 Verify gateway + live grant — Upstream JWKS · No grant → deny / 4 Retrieve provider token — Matching service · Decrypt from vault / 5 Provider access token — Returned only to the gateway / 6 Replace Authorization and forward the request — Provider token for the trusted target audience / RFC 8693. A missing or revoked grant denies the exchange.
**Shows.** A six-step numbered sequence diagram across four lanes (Agent, Gateway, Broker, Target): the agent sends a tool request with its own user-agent token to the Gateway (1); the Gateway performs an RFC 8693 token exchange with the Broker using a signed client assertion (2); the Broker verifies the gateway and checks for a live grant, denying if absent (3), retrieves and decrypts the provider token from its vault (4), and returns it only to the Gateway, never to the Agent (5); the Gateway then swaps the Authorization header and forwards the request to the Target with the provider token (6) — proving the agent itself never holds a provider credential.

## Slide 20 — The full broker architecture
**Text.** The full broker architecture / 01 Login + delegation / Existing identity / User — Accountable principal / Prompt / Chat — Delegation interface / User-agent token / Agent — No provider credential / Existing IdP — Authenticates the user / Trusted proxy — Principal in header / Shared identity broker / Consent + grants — Permission sets, Review, expire, revoke / OAuth endpoints — Authorize + token, Proxy / ES256 / hybrid / Third-party OAuth clients / Token vault — Encrypted sessions / Tool approvals — Per-call approvals / Registration: CIMD + Kubernetes operator / Authorize + token · PKCE / 02 Every target call / User-agent token / Trusted agentgateway — Triggers Token Exchange + Tool Authorization / Live grant → vault token / Provider token / MCP server / API — Trusted target audience / Provider authorization / Google / GitHub / OAuth 2.0 consent, Access + refresh tokens / Extension point XAA — Cross-app access / Provider credentials stay between vault, trusted gateway and target.
**Shows.** The full end-to-end architecture combining slides 16–19: a "01 Login + delegation" stage where the User authenticates through the Existing IdP/trusted proxy and delegates via Chat down to the Agent (which holds only a user-agent token, no provider credential); a central orange "Shared identity broker" box containing five sub-components (Consent + grants, OAuth endpoints, Third-party OAuth clients, Token vault, Tool approvals); a "02 Every target call" stage where the Agent's user-agent token reaches a "Trusted agentgateway" that triggers the token exchange with the broker and forwards a provider token to the MCP server/API target; and on the right, the broker's OAuth relationships with provider authorization systems (Google, GitHub) and an "Extension point XAA" for cross-app access.

## Slide 21 — Beyond the token exchange: Authorization
**Text.** Beyond the token exchange: Authorization / Exchange permitted — Broker grant + policy, User, agent and target / Tool call permitted — OPA policy, Tool and arguments / AND / Call proceeds — Only if both allow / Policy: allow, deny or challenge + risk indication / Available today: allow or deny. Both checks must pass.
**Shows.** A logic diagram: two independent checks — "Exchange permitted" (based on broker grant + policy) and "Tool call permitted" (based on OPA policy evaluating the specific tool and arguments) — both feed into an "AND" gate, which must pass both before the "Call proceeds," showing authorization as a second, tool-call-level check layered on top of the token exchange.

## Slide 22 — Beyond consent: central tool approvals
**Text.** Beyond consent: central tool approvals / Tool approvals (In Progress) — Apply OPA policies to tool invocations. MCP elicitation with the approval URL. Resume only after approval in the broker. / Strong affirmation (Roadmap) — Use CIBA backchannel authorization. Bind an authenticator approval to the exact high-risk transaction. / Intent-based access (Outlook) — Carry the user's intended task as policy input. Evaluate tool calls for actions outside that intent.
**Shows.** Three status-tagged cards ("In Progress," "Roadmap," "Outlook") laying out a maturity path for tool-level authorization: current OPA-policy-driven tool approvals with MCP elicitation, a near-term CIBA-backed strong-affirmation step for high-risk transactions, and a longer-term vision of evaluating tool calls against the user's originally stated intent.

## Slide 23 — Audit Trails vs User Transparency
**Text.** Audit Trails vs User Transparency / Monitor for central risk (Central) — More traditional security focused monitoring with the twist that sessions tie individual logs. / Build Trust (User Facing) — What users ask for is to see what agents did on their behalf beyond their chat sessions. Audit logs must be also available per agent-user pair and in user friendly language.
**Shows.** A two-card comparison, tagged "Central" and "User Facing," contrasting a security team's session-tied audit monitoring with an end user's need to see, in plain language, what an agent did on their behalf per agent-user pair.

## Slide 24 — Core of the Zalando Agent Platform
**Text.** Core of the Zalando Agent Platform / kagent (Runtime) — Kubernetes-native agent execution and session control. / agentgateway (Gateway) — Shared MCP and model routing. ExtProc connects request enforcement to the identity broker. / Agentic Identity Broker (Identity) — Delegation, provider sessions, token exchange, and consent. Reused by each integrated agent and tool.
**Shows.** Three tagged cards ("Runtime," "Gateway," "Identity") naming the three concrete open-source components that make up Zalando's Agent Platform — kagent, agentgateway, and the Agentic Identity Broker — each with a one-line description of its role.

## Slide 25 — Delegate access. Apply Authorization.
**Text.** Delegate access. Apply Authorization.
**Shows.** A plain black divider slide with the statement in large white type and the small orange corner triangle icon; no diagram.

## Slide 26 — Agentic Identity Broker (closing)
**Text.** Agentic Identity Broker / Delegated access for agents and MCP. / Keep your identity provider and existing IAM investment. Extract authentication & authorization concerns from agents and MCP Servers. / Magnus Jungsbluth · Jan Brennenstuhl / Zalando SE / Read the documentation, explore the implementation, and contribute: / agenticidentitybroker.dev
**Shows.** A closing slide summarising the pitch and giving the project's speakers, employer, and website (agenticidentitybroker.dev) as a bordered button-style link; no diagram.

## Slide 27 — Appendix: the original architecture
**Text.** Appendix: the original architecture / okta / Transactional Verification (CIBA) / Client Management / Issue Agentic Access Token / Google — OAuth2 Delegated Authorization / GitHub — OAuth2 Delegated Authorization / API — {x} MCP Server / Agentic Identity Broker — Third-party OAuth2 clients, Token Vault / Token Exchange RFC 8693 / Agent Gateway — ExtProc / OAuth 2 authorize + token endpoints — fetch person bound access token / OAuth 2 CIBA — Transaction Approval / OAuth 2 Dynamic Client Registration — auth: public / Spec compliant MCP / A2A Protocol — auth: agent OBO token / Transaction Confirmation / Consent Screen + Delegate Permissions / User → Chat —agent token→ Agent —agent token→ (Agent Gateway) / Historical design reference. Current registration uses CIMD instead of DCR. CIBA remains outlook.
**Shows.** A detailed original system diagram with Okta, Google and GitHub logos at top feeding OAuth2 delegated-authorization and CIBA/client-management/agentic-access-token connections into a dashed-line boundary containing "Agentic Identity Broker" (Third-party OAuth2 clients, Token Vault) and "Agent Gateway" (ExtProc), which connects via RFC 8693 Token Exchange out to a spec-compliant MCP/A2A "API" target; below, icons for User, a Chat bubble, and a robot Agent show the token flow (User → Chat → Agent, agent token passed through to the Agent Gateway) and a mail icon for transaction confirmation — captioned as a historical design reference superseded by CIMD-based registration.
