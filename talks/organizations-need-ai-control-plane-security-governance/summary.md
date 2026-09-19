---
title: "Why Organizations Need an AI Control Plane for Security and Governance"
speakers: [Sheng Liang]
session_id: 153562e35e20f47bf2acb1a157ec089a
source: transcript.md
confidence: confirmed
kind: summary
---

# Why Organizations Need an AI Control Plane for Security and Governance — summary

**Sheng Liang**

*Thursday 17 September 2026, 15:16, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Sheng Liang argues that a single MCP gateway can no longer govern a company's agents, and that organisations need an AI control plane — curation, gateways, monitoring and sandboxes — which Obot has released as open source.

## The argument

Liang reduces every AI security worry to one problem: agents getting access to data and tools. A year ago, he says, the fix looked simple — the agent speaks MCP, MCP calls tools, so put an MCP gateway in the middle. That has broken down: companies run agents they did not write, over protocols other than MCP, in places IT does not control, and those agents authenticate as humans whose permissions already exceed what the job needs. Governance, he concludes, needs complementary controls rather than one chokepoint.

## Curate, monitor, sandbox

Instead of one trick, Liang says organisations have resorted to a bag of tricks. Curation comes first: an MCP catalog limiting users to one approved agent and three MCP servers. He expects developers to reject that, so the second layer is monitoring — hook into the agent, filter the calls, log everything, so failures can be explained afterwards. The third is the sandbox, which he says people still confuse with a QA tool rather than an isolation and security mechanism. Once an agent is isolated, you watch what it tries through the network proxy and hand it no credentials.

## What goes into an AI control plane

Liang says the category is forming around him — another company had just announced it was building one — and defines it as an MCP gateway, a model gateway and a sandbox in one end-to-end toolbox, which Obot published as open source so any organisation can assemble it quickly. He adds a client-side piece: a desktop plugin, compared to a malware scanner, so IT can see which agents a developer runs and which MCP servers they call, local ones included. He likens it to early antivirus and firewall industries.

## Why he changed his mind about sandboxing developers

Liang says he used to be the developer who disabled antivirus and wanted everything on his desktop, until coding assistants changed his opinion. He interacts with a coding assistant far less than with an IDE, so running it in a docker container or a VM no longer bothers him, and he is tired of approving agent requests without trusting AI to approve everything either. His co-founder Darren Shepherd built Disco Box, a sandbox where a coding agent gets unrestricted root-level access and could reformat the hard drive without doing damage. Outside access goes through a network proxy; the sandbox holds credentials and releases them only when deemed appropriate, which he says a judging model does more reliably than current auto-approve modes.

## In their words

> And we as human get far too much power, privilege, permissions than we need for our job.

> AI control plane consists of an MCP gateway, an RM gateway, and a sandbox.

> I'm so sick of, you know, approving coding agent requests.

## Takeaways

- His case against the lone gateway: the agents are not ones the company wrote — an enterprise chat assistant is hard to route through your MCP gateway — and they run as humans holding excessive privilege.
- He defines the control plane concretely: MCP gateway, model gateway, sandbox, plus a desktop plugin so IT can see local MCP usage.
- He argues sandboxing is now a better developer experience than the worktrees he never much liked, since each sandbox stands on its own.
- He says credentials are released only when a judging model deems it appropriate, which he finds more reliable than blanket auto-approval.

## What the talk leaves open

Liang says Disco Box is not released software yet, and asks the audience to try it and send early feedback.
