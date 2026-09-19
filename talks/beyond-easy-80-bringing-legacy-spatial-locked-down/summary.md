---
title: "Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP"
speakers: [Sanae Mendoza]
session_id: b64de80d15aa7d2c3aa1d7a3b7bec8d5
source: transcript.md
confidence: confirmed
kind: summary
---

# Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP — summary

**Sanae Mendoza**

*Thursday 17 September 2026, 10:50, G104 + G105 — MCPCon (MCP track) track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Mendoza argues that MCP integrations mostly wrap the systems that were already easy to reach, and that the legacy, spatial and locked-down data behind the hard 20% only becomes safely callable when a tested FME workflow, not the model, does the reaching.

## The argument

The recording begins mid-talk, so the opening minutes are missing. Mendoza's case is that MCP settles how a client discovers and invokes a capability but not what happens once the request arrives: the call may run under the wrong identity, reach too much data, or reveal too much. Most integrations start with the easy 80% — systems with clean APIs, predictable objects and established authentication — which she calls a sensible place to start, and also the fast food of data. The valuable context, she argues, sits in systems that are hard to replace, and reaching it means putting a deterministic data workflow between the model and the source, so the model gets a capability rather than access.

## The hard 20%, and four ways data is hard

Her examples of hard data are a utility network model, a building's BIM files and a manufacturer's production data — things deeply embedded in an organisation's operations, often with, as she puts it, one guy named Steve you have to go through to do anything. The inconvenience of a legacy database does not make it any less important, she argues; usually the harder a system is to replace, the more business context it actually carries. Hard has four dimensions in her framing, and an obscure file format is only the first: a model is useless if it cannot move out of the building it lives in, a database function is unsafe if the agent inherits too much authority, and some answers require an entire workflow rather than a local query. She sets this against 32 years of Safe Software working the same problem, beginning with spatial data in Canada's forestry industry, with MCP as the latest arrival at a stable problem.

## Exposing the workflow instead of the raw system

The layer she offers is FME: workflows built and tested visually in FME Form, then run, managed and published in FME Flow, with MCP sitting at the edge of the platform. Because the logic is visible block by block, she argues it can be inspected, tested and reused before any AI application, and any tested workflow can then be published as an MCP tool that manages its own credentials, processing and validation. She separates two layers: the connection layer controls who reaches a tool, while the execution layer controls what data it can touch and what side effects it can produce. Three deployment patterns are on offer — cloud-to-cloud, fully on-premises, or a controlled hybrid where the cloud AI receives curated context without direct access to the raw data — and what she means by any data, any AI is that where it runs, which sources it connects to, which governance rules apply and which AI is used can all change without redesigning the architecture.

## The demo: from 1275 Robson Street to the 1200 block

The worked example is crime data, where neighbourhood patterns create the value and exact addresses and personal details create the risk. Removing names is not enough, Mendoza says, because an exact map point can still identify someone, so a preparatory workspace replaces each address with a point at the block centre. Three purpose-built tools sit on the MCP server — search near a street, explore a neighbourhood, and create and deliver a report — each accepting only the inputs that task needs, with unwanted fields filtered where the data enters the workspace so they never reach the workflow or the log files. In Co-Pilot she asks for thefts within 500 meters of Seymour Street, then for a broader view of the West End, which returns 97 incidents summarised by crime type and is checked against a map preview built into the workspace with a webhook before anything is shared. A final request compiles a PDF report and delivers it to a Microsoft Teams channel, with the model receiving only confirmation that the job completed.

## In their words

> MCP standardizes how clients discover and invoke capabilities, but the standard interface does not govern what happens after the request arrives.

> The mistake is assuming that the easiest data to connect to is also going to be the most valuable.

> The model's location does not have to be the data's location.

> the model chooses what it wants to accomplish while FME controls how the result is actually produced

## Takeaways

- Mendoza calls the easy 80% — systems that already had clean APIs, predictable objects and established authentication — a sensible place to start but maybe not the most valuable long term, because the systems hardest to replace are the ones carrying the business context.
- She treats file format as only the first layer of what makes data hard; data that cannot leave its building, a database an agent could act on with too much authority, and questions needing a whole workflow are the other three.
- Her privacy rule is enforced in the data path rather than in the prompt: addresses collapse to block centres and unwanted fields are dropped at the source, so precise locations never enter the workflow that Co-Pilot can call.
- Her boundary claim for the demo is that only a request went out and a deliberately reduced result came back, while credentials, private records, exact locations and the workflow logic itself stayed inside FME.

## What the talk leaves open

Asked from the floor whether there is an MCP server that helps create the flows in the first place, rather than only exposing existing ones, Mendoza said not currently. The platform has AI-assisted workflow design, she said, but actually generating those workflows is something they have in mind for the future and is not here yet.
