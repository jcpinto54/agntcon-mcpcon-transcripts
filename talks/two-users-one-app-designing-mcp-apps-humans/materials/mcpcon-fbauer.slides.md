---
title: "Two Users, One App: Designing MCP Apps for Humans and Agents"
speakers: [Florian Bauer]
session_id: b7271a5f69a1eb58a9f232320c9e5cbb
kind: slides
deck: mcpcon-fbauer.pdf
slides: 11
---

# Two Users, One App: Designing MCP Apps for Humans and Agents — slides

**Florian Bauer**

*Thursday 17 September 2026, 13:10, Emerald Room — MCPCon (MCP track) track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`mcpcon-fbauer.pdf`](mcpcon-fbauer.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** Two Users, One App / Designing MCP Apps for Humans and Agents. / OpenAI
**Shows.** White title card with the OpenAI logo top-right and a photorealistic 3D-rendered Parisian-style apartment building (with a few lit windows) set against a blue gradient banner, used as a visual metaphor for "one structure, multiple occupants/users."

## Slide 2 — Two new target groups in web development
**Text.** Two new target groups in web development / MCP Apps / Computer Use / Browser Use / WebMCP / OpenAI / Confidential and proprietary.
**Shows.** Two wireframe mockups side by side: the left shows an "MCP Apps" layout with a sidebar, a large cyan content block, and an input bar with a send button (chat-app style); the right shows a "Computer Use / Browser Use / WebMCP" layout with a search/address bar, a large content panel, three smaller cards below it, and a cursor icon clicking into the layout — contrasting the MCP Apps interaction model with the browser-automation/agent-driven model.

## Slide 3 — 01 User Experience: MCP Apps
**Text.** 01 User Experience / MCP Apps / OpenAI / Confidential and proprietary. / 3
**Shows.** The same MCP Apps wireframe from the prior slide (sidebar, cyan content block, input bar) reproduced full-size on a white card over a blue gradient background, as a section-opening visual for the "User Experience" segment of the talk.

## Slide 4 — Resource URI Template routes to both User and Agents
**Text.** Resource URI Template / User / Agents / OpenAI / Confidential and proprietary.
**Shows.** A diagram showing a "Resource URI Template" box at top connected downward into the MCP Apps wireframe's cyan content block, which in turn connects via a leftward arrow to a bracket that splits out to two labeled boxes on the right, "User" and "Agents" — illustrating that the same resource/template renders content consumed by both a human user and an agent.

## Slide 5 — Section divider: Demo
**Text.** Demo / OpenAI / Confidential and proprietary.
**Shows.** Plain white slide with only the word "Demo" as a section header; no other content.

## Slide 6 — Frontend State needs Adaptability from multiple places
**Text.** Frontend State needs Adaptability from multiple places / User → Agents → UI / User can interact with the frontend like a web application / Agent can be instructed to change something that should be reflected in the UI / OpenAI / Confidential and proprietary.
**Shows.** Three horizontally arranged gradient-blue cards (User, Agents, UI) connected by rightward arrows, with a looping arrow beneath running from "UI" back around to "User", indicating a circular feedback flow where both the user and the agent can drive changes that must be reflected back into the same UI state.

## Slide 7 — 1. Shared commands
**Text.** 1. Shared commands / async function select(id, expectedRevision) { commitSelection(id, expectedRevision); render(state); await app.updateModelContext({ structuredContent: structuredClone(state) }); } / const onUserSelect = id => select(id, state.revision); / const onAgentSelect = ({ id, revision }) => select(id, revision); / Use the same state management functions. / OpenAI / Confidential and proprietary.
**Shows.** A code panel defining a shared async `select` function plus two event handlers (onUserSelect, onAgentSelect) that both call it, demonstrating the pattern of routing both user-driven and agent-driven UI changes through one shared command function.

## Slide 8 — 2. Revision checks
**Text.** 2. Revision checks / function commitSelection(id, expectedRevision) { if (state.revision !== expectedRevision) { throw new Error("Selection changed"); } if (state.selection === id) return; state.selection = id; state.revision++; } / commitSelection("garden", 7); await app.updateModelContext({ structuredContent: structuredClone(state) }); / The revision guard runs before the write. / OpenAI / Confidential and proprietary.
**Shows.** A code panel defining a `commitSelection` function that throws if the expected revision number doesn't match the current state revision before applying a write, with a short explanatory note beside it that this optimistic-concurrency guard runs before any state mutation — preventing the user and an agent from silently overwriting each other's changes.

## Slide 9 — 3. Separate draft state
**Text.** 3. Separate draft state / state.draft = { id: crypto.randomUUID(), selection: "garden", base: state.revision }; await app.updateModelContext({ structuredContent: structuredClone(state) }); / async function accept(id) { const draft = state.draft; if (!draft || draft.id !== id) throw Error("Draft changed"); commitSelection(draft.selection, draft.base); state.draft = null; await app.updateModelContext({ structuredContent: structuredClone(state) }); } / The draft stays separate until the user accepts it. / OpenAI / Confidential and proprietary.
**Shows.** A code panel showing a `state.draft` object created with its own id and base revision, plus an `accept` function that validates the draft is still current before committing it, with a note explaining that proposed changes (e.g. from an agent) are held in a separate draft slot until the user explicitly accepts them.

## Slide 10 — Resources
**Text.** Resources / OpenAI Resources — MCP server and UI quickstart / Add UI — Manage state / Open AI Apps SDK examples / MCP Spec — MCP Apps quickstart / MCP Apps patterns / OpenAI / Confidential and proprietary.
**Shows.** A plain white slide listing five underlined hyperlink-style resource titles grouped under two headings ("OpenAI Resources" and "MCP Spec"), pointing to external documentation and example repos for building MCP Apps.

## Slide 11 — Thank you
**Text.** Thank you / Florian Bauer / Member of Technical Staff / Plugin Developer Ecosystem / OpenAI
**Shows.** Plain white closing slide with the speaker's name and title in the lower left and the OpenAI knot logo in the lower right.
