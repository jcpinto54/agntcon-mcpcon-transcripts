---
title: "State of the Software Factory"
speakers: [Dexter Horthy]
session_id: e6f2202aa16c70c2798e835e9a1c7b66
source: transcript.md
confidence: confirmed
kind: summary
---

# State of the Software Factory — summary

**Dexter Horthy**

*Friday 18 September 2026, 09:41, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## What it was about

A ten-minute keynote arguing against the temptation to stop reviewing code
altogether once enough of the pipeline is automated. Horthy's thesis is that
unattended, models will not improve or maintain codebase quality over time:
they got markedly better through 2026 at solving problems, but not at
architecture, and there is no fast oracle for maintainability to train them
against. If that holds, reading the code is still the job, and the practices
worth having are the ones that make review cheaper rather than optional.

## Key points

- Since January, when teams picked up Opus 4.5, he says review quality has
  fallen — PRs skipping review, incidents per PR up, bugs per developer up.
  Asked from the stage whether that is a skill issue, he answers that "the data
  says otherwise".
- Agents moved building from hours or days down to minutes, while review still
  takes hours or days. Authorship stopped being the bottleneck; review became
  one.
- He points to a benchmark from a University of Wisconsin lab that discloses a
  problem in parts rather than up front, forcing the model to iterate the way
  real teams do. The best model on the market when it launched scored 14.8%.
- Maintainability has no fast oracle, so it cannot be trained against: nobody
  finds out the code was bad until someone is paged months later.
- His counter-practices: plan for twenty or thirty minutes before building but
  not five hours, give agents ways to test their own work, lint against known
  agent anti-patterns, and attach a candidate PR to the 3am page.
