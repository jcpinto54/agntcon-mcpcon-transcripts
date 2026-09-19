---
title: "Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments"
speakers: [Ksenia Bobrova]
session_id: 4511e26b5b7d543477af76bfcc8f685d
source: transcript.md
confidence: confirmed
kind: summary
---

# Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments — summary

**Ksenia Bobrova**

*Friday 18 September 2026, 13:15, G104 + G105 — Evals & Testing track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Bobrova walks through three layers of evaluation her team runs on GitHub's MCP server and its agents — isolated tool-selection benchmarks, synthetic tasks graded on artifacts and metrics, and experiments on real traffic — and the statistical traps in the last one.

## The argument

Bobrova's starting point is that testing code which calls a model differs from testing code that does not: results are non-deterministic and there is more than one correct way to do a task. Unit tests, she says, cover fragments of the agentic loop and no more, so her team layers evaluation instead — tool selection in isolation, whole agents on synthetic tasks, then experiments on real traffic. Offline benchmarks come first because a rollback does not undo damage that costs users money. The recording begins mid-talk.

## Tool selection treated as a classification problem

Because her team develops GitHub MCP and is responsible for the server's quality, the first layer tests tool selection and nothing else. Each benchmark is a prompt, the tool expected to be called and the expected arguments: ask to count issues for a certain period and a list issues tool with certain arguments should come back. A run has three stages — fulfillment, where every benchmark goes to several models, showing whether a change degraded selection on any model the team considers essential; evaluation, with per-tool metrics on argument matching and on hallucinated arguments; and a pass over the whole data set for precision, recall and accuracy. Those metrics follow from the framing, she explains: the benchmarks are a labelled dataset and every tool a class, and their summarization report shows how a model mixing up two tools influences both tools' precision and recall.

## Synthetic tasks, artifacts and the reward

The second layer runs whole agents on tasks whose outcome is known, so actual and expected results can be compared. Tasks use an open-source framework — its name comes through this transcription as "hardware" — where each is a directory of instructions, environment settings and a customisable test script. The harness deploys a container to their benchmarking platform and runs the agent inside an adapter, because different agents emit logs and model interactions in different formats that must become gradeable artifacts. Artifacts and metrics together issue the reward — but a pass is not the end of it, she says: reliability metrics detect agent loops and empty results from tools, and a benchmark can fail on metrics outside the desired range. Success takes three groups of checks: metric and tool-call assertions, side effects such as files created with the expected content, and an LLM judge reading the trajectory — every tool call and all the reasoning.

## A-B testing on real traffic, and results that mislead

The third layer is A-B testing on real traffic, run on Microsoft's experimentation platform. The user is the most popular unit and theirs for most experiments, split into control and treatment; rollout starts with a segment, usually GitHub and Microsoft staff, at 10% before ramping to 50%. Metrics are built from raw events such as tokens recorded on every model interaction, aggregated per user into a metric like average tool definition token count per user, then aggregated statistically into one value per arm — the same data yielding an average and a P99. Deltas alone mean nothing, so they compute p-values against the standard 5% threshold, 4% in her example.

Most of her time here goes to misleading results. Her own tool search experiment showed a significant increase in expensive uncached tokens; the cause was an implementation error, a broken tool prefix cache, caught before real users and rolled back. Metrics the change could not have touched may move as a type one error. An absent movement may be type two: tool search is vendor specific, so testing per model can leave the signal from that model's few users diluted by the unaffected majority. Triggered analysis filters the data but leaves a much smaller set, so she reads both scorecards.

## In their words

> testing the code that calls the model is different from testing the code that doesn't call the model because in the first case we have non-deterministic results and there are various ways, correct ways of doing the same tasks

> we treat tool selection as classification. Our benchmarks are basically labeled dataset and every tool is a class

> this segment will be our staff, GitHub and Microsoft staff, so that our employees get all the raw experimentation so they suffer instead of real users

> if you have p-value of 5% and you have scorecard with 100 metrics, you can expect five of them to be false positives

## Takeaways

- Bobrova says her team treats tool selection as classification: prompt, expected tool and expected arguments form a labelled dataset yielding precision, recall and accuracy, in which one tool confused for another shows up in both tools' scores.
- She treats a passing benchmark as insufficient: her harness records reliability metrics that detect agent loops and empty tool results, and fails runs whose metrics sit outside range.
- Her tool search experiment moved uncached tokens the wrong way because she had broken the tool prefix cache; it never reached real users, and she offers it as why an unexpected result is valuable and why an implementation error is the first suspect.
- Both significant and absent movements invite suspicion, she says: a hundred metrics at a 5% threshold should produce five false positives, and signal dilution can hide a real effect.

## What the talk leaves open

Bobrova leaves triggered analysis as a trade-off: filtering to the affected model restores sensitivity but shrinks the data, so she may need a bigger population or a longer run, and reading only the filtered scorecard can exclude valuable information. She also notes the experimentation platform behind this is not available to the public, and the session ended without questions.
