---
title: "Pull Requests Are Dead, Long Live Peer Review"
speakers: [Dylan Ratcliffe]
session_id: 3cc6e8d9193ef68045614f9ebd1d5233
source: transcript.md
confidence: confirmed
kind: summary
---

# Pull Requests Are Dead, Long Live Peer Review — summary

**Dylan Ratcliffe**

*Friday 18 September 2026, 10:20, G102 + G103 — Human-Agent Collab track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Ratcliffe describes how his company stopped reviewing pull requests and moved peer review onto the implementation plan written before any agent starts coding, and what three weeks of measurement showed.

## The argument

Ratcliffe argues that peer review was never only about catching bugs: it carried compliance, junior training and shared understanding of the system, and that collapses when the pull request comes from a bot that answers every comment the same way, right or wrong. What made review valuable, he says, was a human caring about every line, so review has to move to the artefact a human still cares about — the plan. He frames the choice as which loop you sit in: at the top making the interesting decisions, or at the bottom signing off on code you never read.

## AI is not your peer

Overmind, he says, simulates infrastructure changes using AI, and this year killed the ritual of code review outright. The team had leaned on review for catching bugs, for SOC 2 and ISO 27001 compliance, for training juniors and above all for shared tribal knowledge. Those all rested, he argues, on disagreement being productive: either the author learned something, or the reviewer learned about a constraint they had not known existed. Against a bot that reads comments and addresses them, he says, you get the same response to anything you put on that pull request, whether you are absolutely right or absolutely wrong. His own instinct now, he admits, is to tell whoever comments on a pull request he raised that they are the first to have read that code, so they should fix it.

## The week two non-engineers outproduced six

His team began the year about 80% engineers, taking detailed specifications and producing high-quality code — with AI, not before it. Having already done the research and the high-level shape himself, he found it faster to hand that to an agent than to an engineer in another time zone. The result was a week in which he and his product manager beat everyone else in the company combined on lines of code, pull requests, tickets closed and story points. He says he seriously considered replacing half his engineers with product managers, and warns the room that others are. Instead he flew the team to France and pushed engineers left: product now hands over a one-page document, and the engineer must produce a demo within 24 hours without being allowed to ask a single question.

## An until loop instead of a do-while loop

Most agentic software factories, he says, are a do-while loop: the agent picks up a ticket, decides the approach, makes the trade-offs, writes the code and tests, then raises a pull request for a human to reverse-engineer. Overmind inverted it: humans research with agents, make the trade-offs and write an implementation plan of about a page and a half, the plan is peer-reviewed before the loop begins, and a coding agent runs until a second agent judges the code to match it. Deviations get acknowledged by a human, and only the exceptions go back to whoever reviewed the plan. It runs on an in-house tool over MCP, with plans in a Postgres database and no user interface at all.

## Three weeks measured, and the price of rejecting

They rebuilt in a week, then measured three weeks against the previous three: issues completed tripled, commits tripled, and lead time from ticket pickup to production fell from 3.2 days to 1.3 days. He insists this is not recovered review time — they were never spending 90% of the day on review — but context switching: four and a half hours of real work used to live in someone's head for 40 hours while a pull request waited a day and a half for a comment. Rejection also got cheaper, which he treats as the more interesting result: the team is 2.8 times more likely to reject a plan than it ever was a pull request, everyone reviews plans now including product, and 8% of plans are abandoned outright.

## In their words

> Almost all of the code that is shipped to production today within our company is not read by a human, and that includes the author.

> The first lesson is that AI is not your peer. You cannot peer review the work of an agent.

> I'm a little bit worried about AI stealing my job, but I'm more worried about AI stealing my job, where I still get paid, but this is what my job looks like.

> The big differentiator is still how you choose to make it.

## Takeaways

- He argues the value of review came from a human caring about every line, and that only the page-and-a-half plan now gets that care — so review moved there, off the diff.
- His headline numbers are three weeks against the previous three: issues and commits tripled, lead time 3.2 days down to 1.3, which he attributes to context switching rather than to time spent reviewing.
- He measured that a rejected plan adds 40 minutes to lead time against 16 hours for one comment on a pull request, and says that is why rejections went up 2.8 times.
- He claims compliance survives because an approved plan is a pre-approved change and a checker agent gates the loop, with hand-sampling showing it right 99% or more of the time.
- He rejects Paul Graham's line that when anyone can make anything the differentiator is what you choose to make: two laptops with identical specs, he says, differ in hundreds of "how" decisions.

## What the talk leaves open

The audit testing his compliance claim was still running when he spoke. In the Q&A he added limits: a big feature may need 20 or 30 plans, agents stop following a plan reliably beyond a page and a half, and on slop, that part of it is letting go.
