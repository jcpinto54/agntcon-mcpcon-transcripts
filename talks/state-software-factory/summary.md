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

A ten-minute keynote arguing against a mistake the industry is close to
making: automating enough of the pipeline that nobody reads the code any
more. Horthy's thesis is that unattended, models will not improve or maintain
codebase quality over time — they got markedly better through 2026 at solving
problems, but not at architecture, and there is no fast signal for
maintainability to train them against. If that holds, reading the code is
still the job, and the work is making review cheap rather than optional.

## Where the bottleneck went

He sets the "software factory" up as something that long predates AI, dating
the term to 1968, the same year the industry coined "software engineering".
The 2022 version already looks familiar: a team, a tracker, someone builds
it, tests run, a human reviews it, it ships, users complain, it goes back on
the queue. The agentic version changes exactly one box. The agent builds
instead of the person, which moves building from hours or days down to
minutes, while review still takes hours or days. Teams then bolt agentic code
review and regression testing onto the second half, which catches the small
stuff but leaves review as the constraint. The tempting conclusion, and the
one he argues against, is to stop reviewing at all.

## Why unattended agents degrade a codebase

The case is made with data rather than vibes. Since January, when teams
picked up Opus 4.5 and decided the output was good enough, review quality has
fallen: PRs going in unreviewed, incidents per PR up, bugs per developer up.
Asked from the stage whether that is a skill issue, he answers that "the data
says otherwise". The structural reason he gives is that reinforcement
learning needs an oracle, and maintainability has no fast one — nobody finds
out the architecture was wrong until someone is paged months later, so the
signal rewards getting tests to pass over building something that survives
the next feature. He points to a benchmark from a University of Wisconsin lab
that discloses a problem in pieces and makes the model keep extending its own
code, much closer to how teams actually work, on which the best model
available at launch scored 14.8%.

## Twelve-ish practices, of which he reaches nine

Planning comes first: twenty or thirty minutes up front to save hours at
review, with an explicit warning against overdoing it. He frames the choice
as expected pain — a two-sentence prompt leaves perhaps a 50% chance of
rework, a five-hour spec perhaps 10%, writing it by hand none — and says the
right point on that curve shifts with the task, so he will not argue with an
agent mid-plan about a button colour he can trivially change later. The rest
are about back pressure: make agents report visually instead of in walls of
prose, give them a browser and curl so they can test what they built, lint
against catalogued agent anti-patterns, route user feedback into the factory
so the 3am page arrives with a candidate fix attached, and hand models
feature flags so they can ship three versions of a UI and let users settle
which one works.

## The stack underneath

He closes on tooling, splitting it into compute, dev environment, harness and
control plane, each of which a team can buy or build. His own company works
on the control plane: a shared workspace where sessions, plans and prompts
live, where diffs stream to the cloud as agents write them so review need not
wait on a pull request, and where a colleague can be pulled into a session
running on your laptop. The problem he is aiming at is what he calls the
modern equivalent of mailing Git patches around — copying text out of your
agent into Slack, into a teammate's agent, and back again.

## Key points

- Unattended, models will not improve or maintain codebase quality over time.
- Agents collapsed the time to build but not the time to review, so review,
  not authorship, is now the constraint.
- Maintainability has no fast oracle, which is why he thinks training has not
  fixed this and will not soon.
- Plan for twenty to thirty minutes, not five hours, and spend the rest of
  the effort giving agents ways to get feedback without a human.
