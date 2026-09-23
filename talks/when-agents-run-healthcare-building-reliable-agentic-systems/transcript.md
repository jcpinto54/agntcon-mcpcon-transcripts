---
title: "When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments"
speakers: [Janosch Woschitz]
day: fri
date: 2026-09-18
start: "13:15"
room: Auditorium
track: Enterprise Adoption
kind: talk
session_id: 7d087d5cd9f8906ff25ef09f52e3bad2
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=15231s
contributor: jcpinto54
---

# When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments

**Janosch Woschitz** — BARMER

Janosch Woschitz is Senior AI Architect at BARMER KI, the AI innovation unit of [BARMER](https://www.barmer.de/), one of Germany's largest statutory health insurers, where they design and build scalable machine-learning and agentic AI systems for core health-insurance processes. They have roughly 15 years of experience spanning software engineering, big data, and data science, including work on autonomous-driving data projects, before moving into generative and agentic AI applied to healthcare.

*Friday 18 September 2026, 13:15, Auditorium — Enterprise Adoption track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 4:13:51](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=15231s)), not an attendee's recording.

## Transcript

Hello everyone. I hope you have an enjoyable AGNTCon experience so far. I have
to say, I'm really humbled to be standing on a stage like this and sharing it
with so many great speakers. But at the same time, I'm really excited to talk
about what we've built at BARMER over the last year. Personally, I haven't seen
many enterprises publicly talking about embedding agents into their core
operational processes, especially not in the sector we as BARMER are operating
in. So in this session, I would like to take you on a journey into the world of
German healthcare and show you how we put agents in the middle of it. But before
we go there, I would like to run a quick show of hands.

So who of you is currently developing agents or agentic systems in some
capacity, in some fashion? Please raise your hand. And who of you is already
deploying these agents or agentic systems to production? All right. And who of
you is deploying these systems to production in highly regulated industries? All
right, a few hands. And definitely more hands deploying to production. So for
all of those who are currently deploying agents already to production, I might
have bad news.

Gartner recently published a study claiming that about 40% of all agents running
in production might need to be decommissioned or demoted within 2027 due to
governance gaps identified running in production. And in this session, I would
like to outline some of the measures and approaches we took at BARMER to ideally
not being part of the 40%. But before we get into the technical details, I would
like to briefly set the context by introducing the German health care system in
general.

So as a very loose approximation, you can think of the German public statutory
health insurance as some kind of universal health care, but with a few German
twists. First of all, not everyone is participating in the system. So there's a
private and a public health insurance, but overall more than 90% of the
population are covered through the public health insurance. Last year, there
were more than 350 billion euros spent for the public healthcare system.

Just to put this in perspective, this is more than the entire revenue of the
global Volkswagen group last year. In contrast to some other European countries,
there is not a single state entity who is running the public healthcare system.
Instead, the state defines a comprehensive legal framework, the so-called
Sozialgesetzbuch, and within that framework there are currently 93 self-governed
insurance entities who are operating within it.

And BARMER is one of them. So BARMER is actually one of the largest public
health insurers in Germany, with more than 8 million insured people. We have
more than 14,000 employees, and we are operating on a nationwide scale with
branch offices throughout Germany. And I'm mentioning this in particular because
this might become relevant later when we look at the physical interaction points
between the agents and the actual world. So how do I fit into the picture?

My name is Janosch Woschitz. I'm an AI architect at BARMER, and I'm part of
BARMER KI. KI stands for Künstliche Intelligenz, which is simply AI in English.
And the BARMER KI is a dedicated AI innovation unit, which reports directly to
the board. And we are around 100 people, and we are quite a diverse mix. So we
are AI engineers, data scientists, architects, but also lawyers, regulatory
experts, and subject matter experts. And we are covering strategic initiatives
related to AI within BARMER.

And originally, we're coming from a background of data platforms and predictive
ML. But for quite a while now, we are also working on conversational systems and
interaction-based agents. We launched several internal assistants. And also,
since the start of the year, we publicly launched the so-called BARMER Chat,
which is available through our website. It's a chat-based agent, and every
visitor of the site can interact with it.

So you can check it out also on your own. And I'm mentioning all of this because
I just wanted to highlight that we didn't start working on agentic workflows
directly from scratch, but instead we went through different phases, gained
operational experience, and this helped us to shape the technical landscape we
are operating in today. But why are we even considering bringing agents into our
core processes? So in Germany, we are facing currently the impact of demographic
shift, and this creates pressures from two sides.

On one hand, we have an aging population, and this means greater healthcare
needs, more claims, more admin work. On the other hand, we have a shrinking
workforce. You can see this here on the age distribution on the right. So a
significant share of our experienced colleagues will retire over the coming
years. And we are continuously hiring and training, but we simply cannot replace
the people who are retiring within the same pace.

So roughly a year ago, BARMER decided that one strategic response to the problem
outlined here is to use agents to automate core workflows. And that led to the
project AAA, Agenten automatisieren Arbeitsabläufe, or simply in English, Agents
Automate Workflows. And by introducing agents to our core processes, we are
confronted with a new set of engineering challenges. As we add probabilistic
reasoning, we are exposed to a new risk profile.

We have still a very strong need for control and accountability as our process
handles sensitive data and operates under strict legal requirements. So the
autonomy must work. It also must work without destabilizing our core operational
systems. These are the lifeline of the public health care system, so the agents
should have limited impact to those. So the primary challenge wasn't making the
agents capable enough, but instead making their autonomy governable.

And this is not only due to technical reasons, but also a lot driven by
regulation. As a European organization, obviously the typical culprits apply, so
GDPR, EU AI Act, but we have more national and sector-specific regulations. And
the prominent one is the aforementioned SGB. So the SGB provides regulatory
guardrails for health and social data. And this regulation or these regulations
of the SGB, they can get very technical. They can require specific technical
certifications, define infrastructure requirements, or specify how and when we
need to pseudonymize.

Sometimes the regulatory requirements can pull into different directions. We
have, for example, cases where specific paragraphs in the SGB are not neatly
aligned with requirements coming from the EU AI Act. Our lawyers are actively
discussing this with the regulators, but in the meantime, we need to identify
some technical ways to satisfy these requirements. And for us, all these
regulatory demands are an extremely critical input for our system architecture
and our system design.

And this brings us to the how, so how we design the system. And I would like to
start with a very high-level architecture. And in our case, it all starts with
the work item, which is a normalized digital representation of a business case.
And it can be created through various channels, various events. Oftentimes, it
will be created by people interacting with us, either through an app, sending us
an email, or bringing a stack of papers into our branch offices.

And so eventually they all end up as a work item and work items are usually
assigned to business units worked on by humans. We picked deliberately exactly
the same interface to start our agentic workflows. So when an agentic workflow
identifies that a work item should be worked on, it locks this work item and
starts processing the business case. Our workflows can have deterministic steps,
but also obviously agents. And this brings us to one of our core architectural
principles.

We try in production to keep as much deterministic as possible. So we introduce
agents only where the reasoning adds value, where it's a necessity. And we use
them, for example, for use cases like document understanding, natural language
interpretation, semantic matching, or handling of biggest cases. Our agents have
a bounded scope. So they are invoked from deterministic pathways and they work
on a specific goal and then they hand the control back to the workflow. This
allows us to evaluate the individual agents in isolation.

So you can think of them as building blocks and then we can compose more complex
constructs out of it, which we evaluate again end to end. So of course, we can
have multiple agents in our workflow and also more complex logic like cycles or
logical branching. And in the end, when the business case has been worked on, we
can have three outcomes. One is that the case has been technically successfully
processed in a way that basically the business outcome doesn't need any
immediate human intervention. So it has been worked on completely autonomously.

The second outcome is that the case was technically successfully processed, but
with a business outcome which mandates human review. This could be, for example,
a case where you file a reimbursement. The agentic workflow identifies that the
reimbursement cannot be granted, so it has to be denied. But in that case, the
human needs to look over the case. This is mostly driven by regulatory
constraints. And last but not least, we also have cases where we run into non-
recoverable errors or when exit conditions met, these cases are also handed over
to humans.

And spanning over all of this, we have our observability layer and our runtime
guard. And as observability is extremely critical for us, I would like to go one
level deeper. And here we have basically the same workflow again. And every step
in this workflow propagates information into the observability layer. So this
can be either information about the steps themselves, component version, input,
output, logs, business metrics. And the agents additionally have also agentic
traces which they propagate in our observability layer.

And this includes typical information, context, model interactions, tool usage,
tokens consumed. We can correlate all this information also our observability
layer. And the observability layer is also extended by our runtime guard. So the
runtime guard is quite recent addition to our system architecture, and probably
would be a topic for a dedicated talk, but I will keep it very high level for
today. So the runtime guard has a purpose of continuously checking if the
running operations or the running processes are within expectations.

If not, it can intervene. So either directly per step level gating, so this
means cases were not expecting to conforming to the expectations will be handed
over to humans or through aggregate monitoring. So cases are flagged for later
review. Of course, also data is an extremely important topic for us. And here we
established a unified data integration layer, which we call the data bridge. So
all reads and writes are funneled through our controlled integration boundary.

All the reads and writes are fully asynchronous because this is mostly due to
the fact that we have certain systems which have very, very relaxed latency
guarantees. So in some cases, response takes hours. some cases, extreme cases,
even days. And this is one of the reasons why we also didn't use MCP as a
primary protocol for the data bridge, because when we designed it, the support
for long-running durable operations was just not mature enough in the MCP
protocol.

But this is changing now with the recent release of the new protocol, the
specification version, which contains a stateless approach, and tasks have been
promoted to now also stable extension. So this looks very promising. So we are
closely looking at the development and also how the ecosystem is further
expanding. So also all the data interactions are propagated back into our
observability layer. And based on the captured data, we generate two important
artifacts.

One is the workflow protocol, which you can think of as an end-to-end execution
trajectory, which contains all the detailed technical information and allows us
to reconstruct a case in all the necessary details and all the steps. Then we
have also a business protocol. This is based on the same technical underlying
information, but it caters to different audience or business users. So it mostly
contains information about how and why the decisions have been taken by their
agentic workflows.

Now I would skip to or jump to another important topic for us, which is document
understanding. BARMER already has established input management processes, but
still we need very detailed information and extractors from complex and
heterogeneous documents. For example, you can think of a situation where
somebody comes with a box of papers, brings them to a branch office, and one of
our employees puts all these documents on a scanner, and this generates one
single PDF.

And here we are leveraging visual language models, VLMs. And as a first step, we
split and classify the documents. So basically we're using here a schema-guided
approach where we provide the expected document types we are looking for and the
page ranges or the wish to get the page ranges out of it to the VLM. And then we
get mapped document types to page ranges. And these will be then processed by
the next step, which is the actual structured extraction.

And here again, per document type, we have specific schemas which define what
kind of information we are looking for. In the end, we're getting then out the
structured information, which will be then processed by the downstream steps. To
make this a little bit more tangible, I would like to walk through an actual
example. So here, it starts again with a raw input, one PDF with multiple
documents. This is actually a fairly normal example.

we have extreme cases where we can have more than 500 pages in one single PDF.
So as a first step, we split and classify. So mapping the document types to the
page ranges. And also what happens is that pages which are belonging logically
together, they are clustered. You can see this here, for example, with the
receipt on page 5 and 6 and the receipt on page 7 and 8. As a next step, we
extract the structured information based on the document type.

So for example, for a claims form, we extract the request type, the relevant
dates or applicant information. The result will be structured machine readable
data, which the downstream steps then handle. From there, the agentic workflow
processes the business case, and this might include further deterministic steps
or further agentic reasoning. In the end, the case will be processed, and here
you see the result in the form of the business protocol.

These are some examples. Usually they're several pages long. I'm just showing
here the header which focuses on the business outcome. And here we have three
outcomes mapping again to what I've shown you before. So we have cases which
have been successfully processed, technically successfully and with a business
outcome which doesn't need any human intervention. We have a case where an exit
condition has been met, handed over to humans. And we have cases which have been
processed technically successfully but the business outcome requires again human
review and then we have also the workflow protocol and i found it quite
challenging to visualize as the execution trajectories can become extremely
large of course we have tools to visualize the trajectories but i wanted to show
the information density in the workflow protocol and in this example, this is
again a fairly regular example, we have 80,000 lines of JSON. Of course, the
size of the protocol does not matter, but it matters that we have all the
technical evidence so that we can reconstruct the case. So here, I would like to
conclude the walkthrough and shift to some other topics. I won't be able to
cover all of this today, but I still wanted to mention it because if you're
working in a similar direction, it might be relevant to you. So far, we looked
primarily at the runtime architecture. And now I would like to shift and show
you how we move from development to production. And one important aspect in this
regard is release engineering. And here, I would like to emphasize the
importance for us on offline evals and golden data sets. They serve as an
extremely critical pre-deployment quality gate.

And they also allow us to identify regressions. For example, when we are moving
from one model version to the next, or rather model generation. Then we have
also the topic of documentation. And this is driven a lot by regulatory demands.
So we have very extensive documentation needs. And it's not only about creating
the documentation in the first place, but also keep it up to date as the system
and the architecture is evolving.

Another topic is how we're using AI also outside of the agentic workflows. We're
using it heavily, so we are heavily invested in AI-assisted tooling for
development. So we're using it throughout the entire software development
lifecycle. But we are not only using it for the development process itself, but
also to maintain and create the documentation I just mentioned. Before, I
mentioned that we focus on deterministic pathways in production.

But in development, we also choose a different approach. Here, oftentimes, we
use more dynamic, more prompt-based approaches for quick prototyping and
exploration. And on the way to production, we harden those out into
deterministic pathways. This provides us with both, we have the flexibility
during development, but in production, we have then more control. There's much
more behind of each of these topics, but I won't be able to go deeper for now.

But if you would like to know more, I'm happy to discuss with you afterwards.
For now, I would like to close with a few lessons we learned while we
implemented our first use cases in production. The first one is probably not a
surprise because I mentioned it already several times. We use autonomy very
selectively. So we keep as much as deterministic as possible because this
explicit behavior is for us easier to test and explain and also to control.

The second lesson for us was that we consider production agents as a general
systems problem. So the reliability comes from the overall system, not just one
component. And from our point of view, it extends even beyond the harness. So
whenever we see reoccurring needs, we promote them into shared capabilities,
which allows us to harden them once and enforce standardized behavior across all
use cases. Last but not least, regulation is extremely important for us.

So we incorporated regulatory requirements already very early on in our systems
design. And whenever possible, we went a step further and translated these
regulatory requirements into technical system properties, which can be tested
and verified. And this allows us to run automated checks to verify compliance
for specific regulatory requirements. So this summarizes our most important
takeaways, but I would like to leave you with one final thought.

We are operating in an extremely dynamic environment. New frontier models have
or are expanding capabilities and standards like MCP are continuously evolving.
So we are operating in a field with lots of momentum. On one hand, this provides
a lot of room for opportunity and innovation. On the other hand, I think we have
the responsibility to keep the systems safe and controllable. And there's
definitely some tension between those two.

So finding the right balance, I think this is something we can all learn from
each other. So I'm very much looking forward also to hear your stories. And
hopefully at some point I will be able to share more of ours. Thank you very
much.
