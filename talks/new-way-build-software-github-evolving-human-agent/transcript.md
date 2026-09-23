---
title: "A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future"
speakers: [Marlene Mhangami]
day: thu
date: 2026-09-17
start: "14:52"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 4c6e214e5b3874b7b3c16e12295d160f
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=21677s
contributor: jcpinto54
---

# A New Way To Build Software: How GitHub Is Evolving For a Human, Agent Future

**Marlene Mhangami** — Senior Developer Advocate & Microsoft

Senior Developer Advocate at Microsoft/GitHub for Python and AI. Co-chair of the ACM practitioner board, former PSF vice-chair, founded PyCon Africa.

*Thursday 17 September 2026, 14:52, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 6:01:17](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=21677s)), not an attendee's recording.

## Transcript

Hi, everyone. Good afternoon. Like Angie said, my name is Marlene, and I
currently work as a senior developer advocate on the GitHub developer experience
team. The title of my talk today is a new way to build software, how GitHub is
evolving for a human agent future. So just to get us started today, I wanted to
share these numbers on the screen from last year's GitHub State of the Octoverse
report. And this report is where we share data about how developers are using
GitHub.

And so you can see on the screen is that what we saw was that more code was
added to GitHub in 2025 than ever before. Actually in that year, almost a
billion commits were pushed to the platform. So this was a lot of code and this
was our most active year at GitHub ever. Now this year, in 2026, this trend has
been accelerating. And as you can see in the middle there, those are the number
of commits that have been pushed to GitHub every month.

So in August, we saw about 2.9 billion commits just committed in the month of
August, which is more commits, about three times as much as the number of
commits that were pushed to GitHub all through 2025. So we see the number of
code added to the platform is growing every day. you can also see the same trend
going up for the number of repos created and the number of PRs. So we know that
this code, it's a lot of code that's being pushed to the platform, and from our
data, we know that a significant amount of this code has been co-authored by AI
agents.

So we're seeing an increase in the amount of AI generated code on GitHub. So,
another place where we are seeing an upward trajectory in usage at GitHub is
through automations with GitHub Actions. Through GitHub Actions, there were
about 115 million GitHub Actions runs this past month in August. This is four
times the amount of GitHub Action runs that were done in January. And so we are
also seeing a huge amount of growth in terms of automations on the platform.

And this is just showing us that developers are not just typing out code by
hand, but they're actually relying more on automated checks on GitHub or giving
their AI agents permission to run code autonomously on their behalf and letting
those agents run workflows for them. So if I was to just summarize the changes
that we've seen in the last year, I would say these two things are the big
things is that we're seeing more code being pushed to the platform.

We're seeing more automation happening. So developers kind of giving over a lot
of their workflows to automated checks and AI agent workflows. And this number
that's on the screen there, 17.8 million, that's the number of co-authored PRs
that were made in March by AI agents, where we can actually track and see this
was a commit that was an agent signed off on it. And so we know that this number
has increased significantly in August and in September, and I'm hoping that by
the end of the year we would be able to publish those numbers officially in the
GitHub State of the Octoverse report. So these are big changes that are
happening in software, we're seeing it concretely happen on our platform GitHub.
And how is this change affecting developers? I think one of the best ways we can
see this at GitHub is by taking a look at issues. And I would say there's a
really big tension among developers. On one hand, you have developers that are
on this side that want the platform to be more agentic. They're asking for more
support, more protocols. They're asking for more agentic features. I think it's
actually funny, one of the highest liked issues right now is on Anthropic's repo
and it's an issue asking for them to support AGENTS.md. So if they're Anthropic
people, please answer this issue. We also see a number of different people
asking for more support and more granularity in in terms of OAuth support and
security, to be able to control what access different agents have.

And this, several different issues are coming up around these topics. And then
also, people are asking for more functionality in the GitHub CLI, because agents
tend to use the CLI quite a lot. On the other hand, we're also seeing, because
GitHub is, historically has been a platform for open source developers, we see
these developers struggling. So this volume of agents and PRs is going up, and
different projects are handling it in different ways.

tldraw, at the beginning of the year, they're a startup that's based in London.
They completely closed, they're automatically closing any external PR
contributions on the repo. There's some other projects that have completely
blocked any LLM committed commits. And then we're also seeing some projects also
asking for AI disclosures as well. So you can see there's a lot of tension
between these two groups of people. And at GitHub, we've been sort of trying to
figure out how to evolve to meet these changes.

So what does this look like for us? This is a very short talk. I don't have a
lot of time. So I actually can't share all of the things that we've been doing
to evolve. I'll share about one example in each of these categories. GitHub is
trying to work on some new ways to work with issues, pull requests, and also
increasing the amount of maintainer controls available for open source
maintainers. So what does this look like? One of the things with issues that I'm
very excited about for people who are interested in running automated workflows,
this might seem like a very small change, but it's very helpful, and I'll show
an example.

So we just published in the GitHub CLI an attach flag. And this attach flag
allows anyone using the GitHub CLI to be able to attach media or videos to an
issue when they're using the CLI. And this was actually a very asked for
feature. And one of the reasons is because of automated workflow. So for
example, on this screen, I like to take a skill. So I'll have this monitor and
bug fixing skill that I've created in the GitHub Copilot app.

And what happens when I run this automation, I choose how often it runs. And
then I ask the AI agent to use Playwright to look at a website. The agent will
deploy the website, open up the website with Playwright, and just monitor the
pages to see if there are any errors. When it notices an error, the agent is
gonna take a screenshot of the error and then use that screenshot to upload it.
It's going to use the GitHub CLI attach flag to upload it to the issue.

And this is just one way that agents can show proof of work. So we're trying to
make it easier for developers who are using agents in their AI workflows to be
able to review any of the issues that they come across. And so this is one way
with the GitHub attach flag in the CLI. Another thing is stacked PRs. Stacked
PRs was one of our biggest launches this year. It was probably the most popular
launch we have had at GitHub. And if you've missed what stack PRs are, this is
basically just a way for you to using the CLI.

There's also a skill for stack PRs and an MCP server. And what you can do is
have your agent go ahead and create a stack of PRs. So you're not just getting
this one big pull request. You get smaller PRs that stack one on top of each
other. And you can easily review each of those PRs as they build on top of each
other. The demo that you can see on the screen was me starting with a very
simple blog and adding features to that blog using the stacked PR.

So this is available today, and you can use it right away. So another thing that
I mentioned earlier is also maintainer controls. We are giving maintainers the
ability to limit who has access to commit to create PRs or to create issues. And
so they can restrict that in settings if you're a maintainer there. We also have
launched in public preview agent automation controls as well, where an agent
doesn't have the access maybe to directly apply changes but can make suggestions
and then go in a queue.

We also have given more agent granular labels that the agent can use to let you
know when it's created a PR and it has high confidence or maybe low confidence
in its solution. And a final thing as well for maintainers is that we have
triage exceptions where you can give people in your org or things like that
ability to be able to triage issues even when your controls are high. So a final
thing I have a couple of seconds left to note as well is that GitHub is
available across multiple agentic surfaces.

So we have a GitHub MCP. This is probably one of the most popular MCP servers
out there. If you were here earlier, Sam Morrow gave a talk, and please watch
that later on, and he talked about some of the improvements we are doing to the
GitHub MCP server. automations. You can use natural language to schedule out
automated actions to run. And also, we now have native Slack and Teams
integration, so you can use a GitHub agent directly in Slack and Teams. So if
you want to check those out, please go ahead and do that.

Those are the links to my slides. I will mention that GitHub Universe is
happening this year in San Francisco. If you can't make it, there's a virtual
version, and we will be announcing some exciting new things there. All right,
thank you so much.
