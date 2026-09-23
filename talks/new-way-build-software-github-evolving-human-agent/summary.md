---
title: "A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future"
speakers: [Marlene Mhangami]
session_id: 4c6e214e5b3874b7b3c16e12295d160f
source: transcript.md
kind: summary
---

# A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future — summary

**Marlene Mhangami**

*Thursday 17 September 2026, 14:52, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Mhangami uses GitHub's own data to show agent-driven code and automation surging, describes the split between developers wanting a more agentic platform and maintainers swamped by agent PRs, and walks through how GitHub is responding.

## The argument

Mhangami argues the change in software is visible concretely on GitHub: more code pushed than ever, a significant share co-authored by agents, and more work handed to automation. She reads its effect through GitHub issues, where one group asks for more agentic features while open source maintainers struggle with the volume of agent PRs. Short of time, she gave one example each of how GitHub is evolving for issues, pull requests and maintainer controls.

## Octoverse numbers: more code, more automation

She opened with State of the Octoverse data. 2025 was GitHub's most active year, with almost a billion commits; in August 2026 alone about 2.9 billion were pushed, which she put at about three times all of 2025, with repos and PRs rising on the same curve. GitHub Actions ran about 115 million times in August, four times January. Her summary of the year was two things: more code, and more automation. She cited 17.8 million agent co-authored PRs in March, counted where an agent signed off on the commit.

## Two camps in GitHub's issues

One side wants the platform more agentic: more support and protocols, finer-grained OAuth and security controls over what each agent can access, and more from the GitHub CLI, because agents use it heavily. Her example was one of the highest-liked issues right now, on Anthropic's repo, asking for AGENTS.md support. On the other side, open source projects are struggling with the volume of agent PRs: at the start of the year tldraw, a London startup, began automatically closing all external PRs; other projects block LLM commits outright or ask for AI disclosures.

## Proof of work: the CLI attach flag and stacked PRs

A new attach flag in the GitHub CLI lets anyone attach media or videos to an issue, much requested because of automated workflows. She showed a monitor and bug-fixing skill she built in the GitHub Copilot app: on a schedule she sets, the agent deploys a site, watches its pages with Playwright, screenshots any error and uploads it to an issue with the flag, which she called "one way that agents can show proof of work". Stacked PRs, probably GitHub's most popular launch, let an agent split work into small PRs built one on another, through the CLI, a skill or an MCP server; her demo added features to a simple blog.

## Maintainer controls for agent traffic

Maintainers can now restrict in settings who may create PRs or issues. Agent automation controls, in public preview, let an agent that cannot apply changes directly make suggestions that go into a queue. Agents get more granular labels to flag high or low confidence in a PR, and triage exceptions let chosen people, such as members of the org, triage issues even when controls are high. She closed on GitHub's other agentic surfaces: the GitHub MCP server, natural-language automations, and native Slack and Teams integration.

## In their words

> developers are not just typing out code by hand, but they're actually relying more on automated checks on GitHub or giving their AI agents permission to run code autonomously on their behalf

> So you can see there's a lot of tension between these two groups of people.

> So you're not just getting this one big pull request. You get smaller PRs that stack one on top of each other.

## Takeaways

- Mhangami puts agent-era volume in GitHub's own figures: about 2.9 billion commits in August 2026, roughly three times all of 2025, and 17.8 million agent co-authored PRs in March.
- She frames GitHub's users as split, with an AGENTS.md request among the highest-liked issues on one side and projects like tldraw auto-closing external PRs on the other.
- Her answer to reviewing agent work is evidence and smaller units: error screenshots attached to issues through the CLI attach flag, and stacked PRs in place of one big pull request.
- For maintainers, GitHub's response is configurable control: who can open PRs and issues, queued agent suggestions, confidence labels and triage exceptions.
