---
title: "Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments"
speakers: [Ksenia Bobrova]
day: fri
date: 2026-09-18
start: "13:15"
room: G104 + G105
track: Evals & Testing
kind: talk
session_id: 4511e26b5b7d543477af76bfcc8f685d
recording: RAI Amsterdam 10.m4a
contributor: jcpinto54
---

# Testing Agents and Their Tools: Offline Evaluation, Synthetic Tasks, and A/B Experiments

**Ksenia Bobrova** — GitHub

GitHub; Senior ML engineer working on agentic evaluation.

*Friday 18 September 2026, 13:15, G104 + G105 — Evals & Testing track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

Copilot products like Copilot CLI and Copilot SDK. Today I'm going to talk about
my experience running countless evals for our new agentic features and MCP
changes. My clicker doesn't work. Okay. So, testing the code that calls the
model is different from testing the code that doesn't call the model because in
the first case we have non-deterministic results and there are various ways,
correct ways of doing the same tasks. And yeah, so there is no single way,
single right way to be a cat.

So we, apart from evaluating correctness of our new features and of our agents,
we have a lot of other stuff to measure and to define what success is in
particular case. So in this talk I'm going to go through three layers of
evaluation that we run. one is evaluation of our MCP server itself and here we
test exclusively tool selection this is isolated testing of tool selection and
nothing else because as a team developing GitHub MCP we are responsible for
maintaining certain level of quality of MCP server Second type of offline
evaluation that we run is evaluation of our agents on synthetic tasks where we
know the outcome and we can compare the actual outcome of the agent on this task
with the expected one.

And the third one is online evaluation on the real traffic, where we run online
experiments on real users. So starting with tool selection evaluation, here you
can see two real examples from our set of benchmarks for tool selection. And so
basically every benchmark consists of three components, which is a prompt that
we feed to the model expected tool, tool that we expect to be called on this
prompt and expected arguments. So, yeah, basically, for example, if we ask to
count the issues for the certain period, we expect a list issues tool with
certain arguments, and during our benchmark run, we evaluate whether everything
is correct.

So, how does it run? So, it runs through the three stages. The first stage is
fulfillment. And on the fulfillment stage, we basically take the every benchmark
and run it against the model. So basically we'll post the Chrome to the model
and we run it on various models. So we do to evaluate whether our changes
degraded our tool selection performance on any models that we consider
essential. So second stage is evaluation. On this stage, we evaluate metrics per
tool.

These metrics are related to argument matching and various scores related to
arguments. For example, whether arguments were hallucinated or something like
that. And third stage is run on the whole data set. And here we calculate
metrics like precision, recall and accuracy. On this stage, we evaluate tool
selection. And why we calculate all of these metrics because we treat tool
selection as classification. Our benchmarks are basically labeled dataset and
every tool is a class.

So basically every benchmark is classified as a certain tool. And here you can
see the fragment of our summarization report. It shows how like model mixing out
the two tools can influence their precision and recall scores. If you want to
learn more about this, you can read our blog article and it explains our MCP
testing, MCP evaluation in a great detail. So moving on to synthetic tasks. And
here, yeah, again, my cat is nice to demonstrate failed benchmark run by failing
to solve the most complicated part of the puzzle that I gave to her.

And the advantage of synthetic tasks is that we know the outcome. So we know
what we want to get and we can consider it when defining whether our benchmark
past or failed. What is the task basically, synthetic task? We use hardware
format probably you've heard of hardware framework. It's open source so
basically every task is a directory where we have instructions, we have
environment settings and test script that basically is highly customizable as
you will see it on the next slides so how does it run so first our harness
builds the container deploys the container deploys the benchmark to our
benchmarking platform and runs the benchmark when benchmark is running so it's
running the agent is running wrapped in the adapter because when agent is
running it's producing various outputs like logs metrics like interactions with
the model and we are interested in this output but we also interested because
like agents can be different and the format of the output is different so we
basically convert this output to the to the artifacts that we later will be
grading against our criteria to understand like whether benchmark actually
passed and so we have artifacts and we have metrics that we record and based on
both metrics and artifacts we issue the reward so basically whether benchmark
passed or not and even if benchmark has passed we still want to check metrics
out because there can be anomalies and for example we record reliability
metrics, various reliability metrics, and we detect agent loops, we detect empty
results from tools, and this is all very important. And we can also take these
metrics into account and fail the benchmark when some of these metrics not
within our desired range for example so we define successful benchmark by
running basically three groups of checks first is the domestic checks when we
for example check that metrics are within range or certain tool has been called
and so on and so on.

Second is we are testing side effects of the agent run. If we expect the agent
to, for example, create some files in the task and with certain content, we are
checking this, whether basically task was, yeah, was solved correctly by the
agent. And the third one is LLM judge. We are taking, for example, trajectory as
our artifact, basically trajectory is whatever agent did in the run, all the
tool calls, all the reasoning there. and we analyze this trajectory with a land
judge to see whether all our criteria are fulfilled and we issue the reward,
whether it is passed or failed.

So this is it basically with offline evaluation part. When we edit the feature,
we ran our benchmarks and let's say they're fine and we don't see any anomalies,
we are moving on to the online evaluation stage. And probably many of you heard
of A-B testing. So that's exactly what we do on the real traffic. So how it
happens. So basically we split our population. First of all, we define what our
experimentation unit is. The most popular unit is user.

And we also run most of the experiments on the users as experimentation unit. So
we split our experimentation units into two groups, control and treatment.
Treatments basically code with our changes. And we, while running this
experiment, we compute various metrics and form the scorecard. And after we
computed this matrix for treatment and control groups, we calculate data. And
now our goal is to understand whether this data actually caused by our changes
or it's just random.

Because even if you randomly split users into two groups, you will probably get
some data. doesn't mean that it means anything so before proceeding I'd like to
say that we run our experiments on Microsoft experimentation platform which is
unfortunately not available for general public but yeah I hope I was hoping it
was available but unfortunately not but Microsoft research has a lot of articles
and blog posts on the approach of how a V testing is approached at Microsoft and
about internals of this experimentation platform so yeah awesome stuff if you're
interested you can read more about it. So yeah after we came up with our
experiment and what we want to test we make some code changes like for example
when we were running experiment for tool search so we were running assigning
some users to use tool search and control group was not using tool search and
all the tools were preloaded.

So after you made these changes, basically implemented your feature, you start
rolling this out. So first, we start, we can run on the whole population, but
normally we start with a certain segment. And most likely, this segment will be
our staff, GitHub and Microsoft staff, so that our employees get all the raw
experimentation so they suffer instead of real users. And also, our thought
users are power users, and we get a lot of useful feedback about our changes,
even without experimentation.

So we pick the segment and we start rolling out. We start normally with 10% and
then we are ramping up to 50% and each stage runs for some time, gathering the
data that we need to compute our scorecards, which consist of metrics. And
online metric, basically computation of online metric, it goes through three
stages. Like first stage, we get our raw data. So for example, we have a metric
average tool definition token count per user.

And we start with raw events, which is for example, for example in this case
will be interaction with the model and we record to the fission tokens on every
interaction and on the second stage as we aggregate our experimentation unit in
this case for user and we also can choose different aggregation methods on this
stage in this case we chose ever So basically you end up with as many rows at
this stage as many experimentation units you have.

So users in this case. And third stage is statistical aggregation. After this
stage we got two lines. And one line for treatment arm and another line for
control arm. So you get two values. In this example, like first metric is
average, really standard, and the second one is P99. So we can calculate, use
different statistical aggregations for the same data basically, and issue
different metrics. So after we got these two values, and we can calculate data,
but by itself it's useless because we don't know whether our changes cause this.

That's why we calculate p-values and we take like pretty standard for almost
every experiment pretty standard threshold which is 5% which means so So
basically when you reshuffle your population many times randomly and you got
some deltas and you can see what is the likelihood of getting this delta for any
random split. And in our case, for example, it's 4%, which is unlikely. That's
why we assume that our changes cause this delta.

And we look only at significant metric movements. So we look only at metric
movements that fall into this p-value threshold. At this point, many people
think like, why you can't just ship the stuff because we have like a lot of
stuff to ship and it's like, you leave only once, like why do you need all of
this? Yeah, but actually online experiments are saving a lot of time and a lot
of pain also. And especially when you get unexpected results on your experiment,
which is very valuable because if you get expected results, there's no fun in
that.

And what you can get. get your metrics moved the wrong direction you expected to
save some tokens but actually you didn't and the situation got worse this
actually happened to me when I was running to search experiment and we got a
significant increase on uncashed tokens and as you know uncashed tokens are very
expensive this is not the result I expected to get so of course the first thing
you need to assume is implementation error and yes it was an implementation
error so basically I broke the tool prefix cache and thankfully it wasn't rolled
out to real users so we rolled it back and fixed it Another thing that you can
see is collateral movement of the metrics that shouldn't have been moved at all
by your changes.

Of course, you need to assume that there is an implementation error, but let's
say you excluded it and there's no implementation error. it can be also type one
statistical error, which means metrics show significant movement, but this is
false positive. So if you see, if you have p-value of 5% and you have scorecard
with 100 metrics, you can expect five of them to be false positives. So it's not
necessary something like you did wrong or something, so it can happen.

And the third one is no movement, although you expected the movement. Of course,
yeah, your change might not have effect on real users, this is also possible,
but it also can be type two, false negative. You failed to see the movement,
Although there is an effect, it can happen due to many reasons. You, for
example, get not enough data yet. But there are also things like signal
dilution. For example, we were running, when we were running tool search
experiments, so the tool search is vendor specific, So the tool search that we
were testing was vendor specific.

So OpenAI and Code, they have their own tool search. So we were testing them
separately. And of course, we were interested in only in data that is related to
a certain model. But let's say in the segment that we are testing, There are
very few users of this model and of course our signal gets diluted by unaffected
majority of users that use other models and this can affect our sensitivity of
our experiment. So there is a solution to that which is called triggered
analysis.

So basically you filter your data. Instead of calculating on the whole
population, you calculate on, you filter out the data that is related to the
model. And of course you end up with much smaller set of data, which can also
affect your sensitivity. And there might be not enough of data. So you need to
extend your population or you need to run the experiment for a longer time to
see the result. There is also a problem that you can exclude valuable
information.

So it's important to look at both scorecards, basically at the trigger scorecard
with filter data and scorecard that is calculated on the whole population, not
to miss anything. So that's basically it for our online evaluation and for this
talk as well. So basically the main thing that we learned running these
experiments is that, yeah, you need to use statistics and to measure your agent
performance because like you have the unit test fragments of our agentic loop,
but not everything can be unit tested.

And you need to run offline benchmarks before it hits production, and only after
that you run, you measure effect on real users with online experiments, because
even though you can roll it back, the damage can be significant, especially if
it's like cost users, money. And beyond pass and fail for benchmarks, you need
to check other stuff like metrics because you might miss some anomalies. And
also if you have some significant improvements in your online experiment, you
should always consider that it can be statistical error because everything is
built on the probability here and there's no need to waste time if you are
completely sure that your changes didn't cause any damage.

As well as if you don't see any movement, it can be also statistical error and
you need to probably reshuffle your users or like extend your population and
apply different ways to mitigate that. Yes, so thank you. Hopefully it was some
of this. Sorry, I cannot take questions.
