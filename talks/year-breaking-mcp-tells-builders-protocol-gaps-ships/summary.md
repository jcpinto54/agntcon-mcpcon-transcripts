---
title: "What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next"
speakers: [Amine Raji]
session_id: 5b86373ff4058776789792f7056efdfe
source: transcript.md
kind: summary
---

# What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next — summary

**Amine Raji**

*Thursday 17 September 2026, 16:20, Emerald Room — MCPCon (MCP track) track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Raji walks through a year of MCP vulnerabilities — a session check that only matched a string, a wide-open GitLab server, four consent failures — and argues defence has to be structural, because model choice is not a control.

## The argument

Raji's case is that a year of breaking MCP servers turned up the same few failures: a server doing something that looks like a trust check but is not, a token that authorizes the outbound call treated as authorization for inbound callers, and a consent step the protocol never specified. He argues the July revision closed part of this, that publisher identity is still unowned, and that the model will not compensate. The recording begins mid-talk, so his opening minutes are not captured.

## Checks that only look like checks

Grafana MCP 1.0.0 validated sessions by string matching: anything in the expected session format was accepted, including identifiers the server had never issued. Raji says the illusion is the damaging part: the operator believes callers are checked when they are not. Reported on 2 August, it was fixed eight days later in 1.1.0 and classified by Grafana as a hardening improvement, not a CVE. The CVE is what the accepted session opens up: list the tools, call the API request tool, and override the argument saying where the result goes. The server sits inside the network on its own service account, so Raji says an attacker can have it export cloud credentials; in his lab a made-up session returned 200. The pattern recurs in the GitLab MCP server, where a wildcard origin setting and a host binding let any web origin or network neighbour drive 86 GitLab tools, destructive ones included, under the operator's personal access token — logged as server-side request forgery. That token authorizes the call out to GitLab, not the callers coming in.

## Consent nobody had specified

The approval cases start from a one-line configuration file that clones a repository named as a tool server and runs a command when the folder is opened, so the process inherits the developer's credentials. Against Amazon Q, Raji says that means cloud access keys, session tokens, CLI credentials, API keys and SSH sockets. The same assumption appeared four times in a year across four independent teams — a Claude repository setting that ran shell commands before the trust dialog, a rewrite on the MCP config in Windsurf, a workspace config loaded with no consent step. He did not reproduce these, having no source for proprietary tools; all four are patched. His reading is that the teams were not incompetent; the protocol had no way to say how consent should be requested. He pairs it with a server that sends mail for the user, fine until a maintainer added a line copying every email to an attacker's address.

## What July closed, and what nobody owns

Raji credits the July revision with removing sessions and the session header, which retires the Grafana issue, dropping the initialize handshake, making server discovery mandatory, aligning issuer validation with RFC 9207, binding client credentials to the issuer, and preferring client ID metadata documents over dynamic registration. Two surfaces he has not tested: the description field is still free text, where malicious instructions can hide, and tool list results now declare how long they may be cached — a performance decision, he stresses, not an authorization one. Caching, he argues, invites stale poisoning and a reconsent bypass, where the cache hides a definition drift so a rug pull goes unnoticed. Specification enhancement proposal 2567, created in March and now final, recommends revalidating handles on every request, which he calls recommended posture, not a schema requirement.

## Model choice is not a control

Raji ends by retracting something: he had planned to say that the better the model, the easier it is to poison, on the strength of a study that poisoned the descriptions and metadata of 336 tools across 45 servers and reported an attack success figure of 72.8. Checking 2026 data, he says it no longer holds: later studies show stronger models better protected, which he attributes to better harnesses and guardrails from frontier models. The conclusion survives inverted — do not rely on the model to protect you from a vulnerable MCP server — backed by prompt injection evaluation against live agentic CI-CD pipelines.

## In their words

> having the illusion that your server is doing a trust check is more dangerous than not having one

> it was a missing way of specifying how the consent should be asked from protocol level

> verify the publisher before you verify the content

> Model choice is not a control.

## Takeaways

- He argues a broken trust check is worse than none: the Grafana server accepted any correctly formatted session identifier, and that false confidence let an attacker redirect a tool's output to exfiltrate cloud credentials.
- He treats inbound and downstream authentication as separate problems: a GitLab server's wildcard origin setting put 86 tools within reach of any web page, under a token that only authorized the outbound call.
- He blames the protocol rather than the vendors for the consent failures: four independent teams shipped the same assumption within a year, and fixes landed one product at a time.
- He retracts last year's headline finding but keeps its conclusion, citing prompt injection evaluation that found failure structural rather than model specific.
- His closing instructions: verify the publisher before the content, authenticate inbound separately from downstream, and keep a snapshot, usually in the CI pipeline, so drift can be caught.

## What the talk leaves open

He names approval as the gap nobody owns: caller identity has workload identity federation and token exchange, while server-side publisher identity has nothing on the roadmap. He says proposal 2567 was still open and unassigned in the Python and Java SDK last week.
