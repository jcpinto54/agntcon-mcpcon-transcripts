---
title: "MCP Borrowed LSP's Design. It Skipped LSP's Lesson"
speakers: [Gorkem Ercan]
session_id: 8b497744cd3b147b8c047713bf1d904c
kind: slides
deck: mcp-packaging.pdf
slides: 11
---

# MCP Borrowed LSP's Design. It Skipped LSP's Lesson — slides

**Gorkem Ercan**

*Thursday 17 September 2026, 15:45, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`mcp-packaging.pdf`](mcp-packaging.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** jozu / MCP Borrowed LSP's Design / But Skipped LSP's Lesson / Gorkem Ercan / CTO, Jozu
**Shows.** A dark green title slide with a dotted-grid texture background, the Jozu shield logo top right, the talk title in large teal bold text, a grey subtitle underneath, and the speaker's name and title in white below.

## Slide 2 — What this talk will cover
**Text.** What this talk will cover / How LSP ended up with fragmented packaging and trust / Where MCP packaging stands today / Which trust layers are still missing / How OCI-based packaging closes the gap without changing MCP
**Shows.** Nothing beyond the text; a four-item agenda list, each item marked with a small teal square bullet and separated by thin horizontal rules.

## Slide 3 — MCP inherited LSP's shape
**Text.** MCP inherited LSP's shape / Handshake, Capability negotiation, JSON-RPC / LSP: Editor, Language Server / MCP: AI Client, MCP Server / LSP sequence: initialize: capabilities → result: server capabilities → textDocument/didOpen: textDocument → textDocument/definition: textDocument, position → result: uri, range → publishDiagnostics: diagnostics / MCP sequence: initialize: capabilities → result: server capabilities → tools/list → result: tools, input schemas → tools/call: name, arguments → result: content
**Shows.** Two side-by-side sequence diagrams comparing LSP (Editor ↔ Language Server) and MCP (AI Client ↔ MCP Server), each showing near-identical message flows — an initialize/capabilities handshake followed by a request/response pair — with dashed lifelines and labelled arrows, visually demonstrating that MCP's protocol shape directly mirrors LSP's.

## Slide 4 — What LSP never defined
**Text.** What LSP never defined / It standardized the conversation: M editors × N languages became M + N. / Packaging or verification / A trust boundary: a local subprocess, running with your privileges / Authentication or authorization: remote was someone else's problem / A distribution channel: Marketplace, Open VSX, mason, npm, distros, none won
**Shows.** Nothing beyond the text; four bulleted gaps in LSP's original design, each separated by a thin horizontal rule under an introductory line about LSP's M×N-to-M+N simplification.

## Slide 5 — The matrix returns
**Text.** The matrix returns / LSP's promise: write the server once, every editor can use it. / The protocol delivered that. One implementation, many clients. / Distribution did not. The same server is packaged again per ecosystem. / VS Code extension, mason recipe, npm package, distro package, brew formula / Signing arrived later, one channel at a time / One binary, N packagings, N update paths, N trust decisions
**Shows.** Nothing beyond the text; a five-point bulleted list describing how LSP solved the protocol-compatibility matrix but let the packaging/distribution matrix re-emerge across multiple channels.

## Slide 6 — MCP repeats it, with a bigger threat model
**Text.** MCP repeats it, with a bigger threat model / Same shape as LSP. Not the same stakes. / LSP server: arbitrary code, but scoped to reading your source / MCP server: arbitrary code holding credentials, data, shells, and browsers / Agents load servers dynamically and compose many of them at once / Inputs are untrusted: tool descriptions and tool output steer the agent / A bad package is not just buggy, it is an execution path
**Shows.** Nothing beyond the text; five bullet points contrasting LSP's limited blast radius against MCP's much larger one (credentials, data, shells, browsers), building the security argument of the talk.

## Slide 7 — Today's packaging options fall short
**Text.** Today's packaging options fall short / Official registry: metadata and discovery, trust delegated to npm and PyPI / MCPB/DXT: familiar bundle shape, but repeats the extension packaging model / Vendor provenance exists, but is trapped inside vendor-specific workflows
**Shows.** Nothing beyond the text; three bullet points, each critiquing a current MCP packaging/distribution approach.

## Slide 8 — Demo: We already know how to solve this
**Text.** Demo: We already know how to solve this / Package with KitOps. Verify with cosign. The two share no tooling. / 1. Bundle the server as an MCPB / 2. Package the bundle as an OCI artifact / 3. Sign it, and attest what source and build produced it / 4. Verify before the agent loads it
**Shows.** Nothing beyond the text; a numbered four-step demo outline showing the proposed packaging-and-verification pipeline (MCPB → OCI artifact → sign/attest → verify before load), introduced by a line noting KitOps and cosign currently share no common tooling.

## Slide 9 — What OCI buys you immediately
**Text.** What OCI buys you immediately / Registry neutrality / Existing signing and attestation tooling / Policy engines that already work in production / Familiar operational patterns for promotion and verification
**Shows.** Nothing beyond the text; a four-item bulleted list of benefits gained by adopting OCI-based packaging for MCP servers.

## Slide 10 — Takeaways
**Text.** Takeaways / Packaging is part of the security model / Vendor-specific signing does not create open trust / Provenance must be portable and verifiable before execution / MCP can reuse existing cloud-native supply chain tooling instead of rebuilding it
**Shows.** Nothing beyond the text; four closing takeaway bullets summarising the talk's argument.

## Slide 11 — Thank you
**Text.** Thank you / Gorkem Ercan / gorkem@jozu.com / jozu.com · kitops.org
**Shows.** A closing slide on a dark-to-green gradient background with "Thank you" in large teal bold text, the speaker's name and underlined email link beneath it, and two project URLs (jozu.com, kitops.org) in bold teal at the bottom.
