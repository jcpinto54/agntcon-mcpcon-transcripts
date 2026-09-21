---
title: "State of the Software Factory"
speakers: [Dexter Horthy]
session_id: e6f2202aa16c70c2798e835e9a1c7b66
source: transcript.md
kind: summary
---

# State of the Software Factory — summary

**Dexter Horthy**

*Friday 18 September 2026, 09:41, Auditorium — Keynotes track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

A ten-minute keynote arguing that agents have moved the bottleneck from
writing code to reviewing it, and that teams tempted to stop reviewing
entirely are betting on a capability models do not yet have.

## The argument

Horthy's thesis is that unattended, models will not improve or maintain
codebase quality over time. They got markedly better through 2026 at solving
problems, he says, but not at architecture, and the reason is structural
rather than temporary: maintainability has no fast signal to train against.
If that holds, the factory that automates enough of the pipeline that nobody
needs to read the code is not a destination the industry is approaching, and
the work worth doing is making review cheap rather than making it optional.

## Where the bottleneck went

He sets the "software factory" up as something that long predates AI, dating
the term to 1968, the same year the industry coined "software engineering".
The 2022 version already looks familiar: a team, a tracker, someone builds
it, tests run, a human reviews it, it ships, users complain, it goes back on
the queue. The agentic version changes exactly one box. The agent builds
instead of the person, which moves building from hours or days down to
minutes, while review still takes hours or days. Teams then bolt agentic code
review and regression testing onto the second half, which catches the small
stuff but leaves review as the constraint — and sets up the conclusion he
spends the rest of the talk arguing against.

## Why the quality problem is structural

The case against unattended agents is made with data rather than vibes. Since
January, when teams picked up Opus 4.5 and decided the output was good enough,
review quality has fallen: PRs going in unreviewed, incidents per PR up, bugs
per developer up. Asked from the stage whether that is a skill issue, he
points at the numbers instead. The structural reason he gives is that
reinforcement learning needs an oracle, and maintainability does not have a
fast one, so training rewards getting tests to pass over building something
that survives the next feature. His evidence is a benchmark from a University
of Wisconsin lab that discloses a problem in pieces and makes the model keep
extending its own code, much closer to how teams actually work: the best model
available at launch scored 14.8%, against the near-saturated scores quoted
elsewhere as proof that coding is solved.

## The practices, and the stack under them

Planning comes first — twenty or thirty minutes up front to save hours at
review — with an explicit warning against overdoing it. He frames the choice
as expected pain: a two-sentence prompt leaves perhaps a 50% chance of rework,
a five-hour spec perhaps 10%, writing it by hand none, and the right point on
that curve shifts with the task. The rest are about back pressure: make agents
report visually instead of in walls of prose, give them a browser and curl so
they can test what they built, lint against catalogued agent anti-patterns,
route user feedback into the factory so the 3am page arrives with a candidate
fix attached, and hand models feature flags so they can ship three versions of
a UI and let users settle it. Underneath sits a stack he splits into compute,
dev environment, harness and control plane, each of which a team can buy or
build.

## In their words

> unattended, models will not improve or maintain your codebase quality over time

> we don't find out that the code was ugly until two months later when someone again is paged at three in the morning

> planning is about eliminating expected pain

## Takeaways

- Agents collapsed the time to build but not the time to review, so review,
  not authorship, is now the constraint — which is why he thinks bolting
  agentic review onto the back half only catches the small stuff.
- He argues the quality gap will not close on its own, because
  maintainability has no fast oracle and so cannot be trained against the way
  test-passing can.
- The benchmark he leans on gives the best available model 14.8% when the
  problem is revealed in pieces rather than stated up front — his answer to
  scores that suggest coding is solved.
- Plan for twenty to thirty minutes rather than five hours, and spend the
  remaining effort giving agents ways to get feedback without a human in the
  loop.

## What the talk leaves open

He names one gap explicitly: the training data for the thing he wants does not
exist, and he describes people online asking for reinforcement-learning tasks
about abstraction and centralisation because current models still cannot do
it. He also does not get to the end of his own list, reaching nine of a
promised twelve practices before running out of his ten minutes.
