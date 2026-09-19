---
title: "Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP"
speakers: [Sanae Mendoza]
day: thu
date: 2026-09-17
start: "10:50"
room: G104 + G105
track: MCPCon (MCP track)
kind: sponsored
session_id: b64de80d15aa7d2c3aa1d7a3b7bec8d5
recording: recording.wav (talk2)
contributor: jcpinto54
confidence: confirmed
---

# Beyond the Easy 80%: Bringing Legacy, Spatial, and Locked-Down Data to MCP

**Sanae Mendoza** — Safe Software

Sanae Mendoza works at [Safe Software](https://fme.safe.com/), the Canadian
company behind FME, a no-code platform for building repeatable data workflows
across more than 500 systems and formats. Safe Software has worked on moving
data out of hard-to-reach systems for over three decades, beginning with
spatial data in Canada's forestry industry — the lineage behind this talk's
argument about the data MCP servers still cannot reach.

*Thursday 17 September 2026, 10:50, G104 + G105 — MCPCon (MCP track) track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

The question itself may be centered on now that the data and systems behind
those processes are still there. So that's the process that I'll focus on today
during my talk. And then at the end, we'll have a few minutes for questions. So
MCP standardizes how clients discover and invoke capabilities, but the standard
interface does not govern what happens after the request arrives. It may run
with the wrong identity, access too much data, or reveal too much. So MCP
defines how that capability is invoked, but we still need to govern our effects.

The four cases on this slide show why enterprise data cannot always be handled
directly or headed directly to the model itself. Some answers may be assembled
across many sources, others the data may have to move out of the environment
that it's in and some results have to be transformed before they leave. In each
case the data workflow, not the model itself, has to do part of the work if not
all of the work. Most MCP integrations begin with this easy 80% systems that
already have clean APIs, predictive objects, and established authentication.

And this is a really sensible place to start. There's a lot of great information
here, but it's kind of like the fast food data. It's really easy to get, but
maybe not the most valuable long term. The mistake is assuming that the easiest
data to connect to is also going to be the most valuable. The hard 20% is often
where the real value lives. This could be so many things, but a network, utility
network model, a building's BIM files, the manufacturer's production data, these
are often really difficult to connect to because they're deeply embedded in an
organization's operations.

And many businesses will have one guy named Steve that you have to go to in
order to do anything in those systems. But it's a mistake to think that they're
irrelevant or something of the past. Often times there's some legacy database or
many . That inconvenience does not make it any less important. Usually the
harder a system to replace, the more business context it actually does. When
people hear hard data, they're often thinking in obscure file format, but
format's going to be the first layer.

Parse bin model is useless if it can't move out of the building that it lives
in. Database functions on the state if the agent inherits too much authority.
And some answers require an entire workflow, not just a local query, something
like a secure query. These four dimensions here represent hard. I think there's
probably many more of these, but these are the ones that will sort of guide the
rest of the talk. Safe Software has worked on this cost problem for decades, now
32 years.

We began with spatial data in Canada's forestry industry and now expanded
globally as the data landscape itself has evolved. The technologies on this
timeline have changed a lot, but the problem remains that valuable data is
trapped behind technical and operational barriers. And that barrier today is
between what AI clients can request and what enterprise systems can safely
deliver. And MCP is just the newest front door to this stable problem.

And just for anyone new to FME, it's a no-code platform for building repeatable
workflows across more than 500 systems and formats. This is FME Workbench. Here
is the visual operating environment in FME Form. Each block there that you can
see kind of connected to the next performs an operation, and the connections
show how the data is moving throughout the workspace. And you can see, you can
explore the data, look at all the features, look at the metadata behind it, all
from the GUI.

Because all this logic is visible, it can be inspected and tested and reused
before an AI application. Because once that workflow is built, the rest of the
FME platform brings it into operation. But the simplest level FME form is where
your team will build and test all of your data workflow logic. Then FME Flow is
where you run, manage, and publish those workflows. And we also have a mobile
application for visualizing data in the real world, AR data, and things like
that.

NCP sits at the edge of the platform, so exposing FME capabilities to AI. The
NCP can carry all of the contents, but FME assembles it by connecting systems,
coordinating the work, the organization the context and what remains behind the
boundary whereas AI receives a useful capability without taking responsibility
for all of the systems underneath it, all of the rules and authentication,
permissions, things like that that separation is what preserves choice in the
end, on one side, I can make a work across data velocities locations and types
and then on the other the same government capabilities can be exposed to
whatever AI technology fits the organization and that's kind of what we mean by
all data and AI and neither side of the equation needs to be rebuilt when the
other changes because they're in plug and play as your organization workflows
evolve.

And any tested FME workflow can be published as an MCP tool. The workflow itself
manages the credentials and the processing and the validation. And the MCP
client receives the real purposeful capabilities with clear inputs and output
that you can kind of stand behind. And this diagram just shows three different
deployment patterns here that are optional cloud-to-cloud, fully on-premises or
a controlled hybrid. In each case, FMA is executing the data only the request
and the permitted result across the boundary. In a hybrid pattern, for example,
the cloud AI receives the curated context without direct access to the raw data
itself. The model's location does not have to be the data's location.

Where execution happens is just one direction under whose identity and what
authority is another. The connection layer controls who reaches the tool,
whereas the execution layer controls what the data it can touch and what side
effects it can then produce. So we can keep those two layers. So I'll make this
concrete with one of these opening questions that we have. What happens when
your data must remain private? And the real design challenge here is to identify
which parts create risk and which parts create value in this work.

So in my example, the neighborhood crime patterns will create value. Exact
addresses and personal data will create risk. The distinction gives us something
sort of concrete to enforce when we're building this workflow. So the demo will
start with a specific privacy rule, and in this case, Ruby names is not enough,
just because the exact map point can still identify someone in a dataset. So an
address like 1275 Robson Street will become 1200 block of Robson Street.

That preserves sort of neighborhood level patterns and still make that data
useful while still protecting individual people and locations. And that privacy
rule has to be enforced in the data path itself. So here in neighborhood
boundaries, the street network and the crime records enter one side of the
workflow. And I sort of whisk those off rather quickly, but that data still
needs to be read accurately and then normalized and validated, overlaid, and
pass through all of these policy rules and each of those steps can be quite
involved and require a lot of domain specific information that you probably want
to have an expert in front of and keep those workflows deterministic as well
without any sort of variance from a path there.

And that pattern path is what FMA provides. Only once it goes through those that
the data becomes sort of updated geospatial information, notifications, and
reports, and outputs that the client can look for. And every output you can
trust inherits the same production. We're going to define the boundary through
what we actually explore with the tool. So instead of broad system access, MCQ
receives three purpose-built tools that accept only the inputs required for each
of the tasks.

the model chooses what it wants to accomplish while FME controls how the result
is actually produced. So, I'm going to begin in FME flow where I set up an NCP
server. Each tool on the server is backed by a workspace built in FME, backed by
a workspace built in the data processing. I have three tools, one for searching
your street, one for exploring your neighborhood, and one for creating and
delivering a report. Before we use these in Co-Pilot, we'll take a look at the
FME workspaces underneath.

And this is actually a workspace that we're starting in that creates the trusted
data that all three of these tools are going to use. It replaces the exact
address with a point at the block center, and these tools can still reveal very
useful patterns for the block itself, where they have incidents without sending
the precise location to co-pilot, which may expose a home, a victim, or a
business or something like that in the context.

Next, we have our first MCP tool workspace that answers a focus question, what
types of crimes have occurred near a particular street. The inputs are a street
name, an incident, and a buffer distance. And FME will use these to run the same
spatial analysis each time, which you can see in the picture here. And the
source data itself actually contains more information than we'd even like to
carry through the log files. So where the data actually enters the workplace, we
can filter that out right at the source to make sure that the data that we don't
want to share never even enters the workflow to begin with.

And that gives us kind of control over what the tool is allowed to share and
what could ever be closed in the first place. And the second workspace here
represents the second tool. It answers sort of the broader question, what crimes
are occurring in a particular neighborhood When co-pilot asks about a
neighborhood, FME combines that protected crime data with an official boundary
from the local government and provides a spatial analysis.

Finally, a third tool creates a report, and we're using all of our report
generating tools here with the data that we'd like to include in the final
product. FME saves that report and then creates a download link that goes to the
team's channel in this case. So all of these tools, we finished, we established
the workflows, and then we published the FME flow where we have these tools
listed on the MCP server. Once they are live, we can then expose them in
CoPilot.

Now in CoPilot, we can start by asking for thefts within 500 meters of Seymour
Street in this case. And the co-pilot will be able to find those tools exposed
by our MCP server and run those processes in the chat. So here we're invoking
our first tool here, or second tool, sorry, with our buffer distance and the
input here. And we're receiving a summary of the results. The spatial search we
have for matching incidents here and we can track the results and the spatial
processing that we.

Next, we're going to use the neighborhood tool. To get a broader view of crime
in the West end. At this time, it's going to find the boundary and keep all of
the incidents inside of that boundary and return a summary by crime type. You
can see that's pretty quick to invoke the tool. And we have our result here, 97
incidents. It's very useful to have a summary, but it's difficult to sort of
understand geographic patterns and text alone. So we actually built a visual
preview in the workspace itself with a webhook. And we can see all of our
filtered incidents here, all the information you want to expose in a map that
you could.

And we can validate all of our results before creating something that we want to
share with our team or end user. So everything looks good. And here we can ask
everybody then to create a report for this West End and send it to sort of our
stakeholders channel in Microsoft Teams. This tool will use the neighborhood and
channel names from our chat that we've already established to run the report
work flow that we saw earlier. And it's creating our report with our last
workspace that we looked at compiling a PDF.

And we will deliver that directly to the team. And we can see that here. Co-
pilot doesn't need to see the document itself. It only needs confirmation that
the job completed successfully. Most of the heavy lifting, not all the heavy
lifting was done by FME. You can see our final report. This includes our
selected area as well as all of our crime information. And FME, you know, will
run this same process the same way each time using new boundaries and produce
updated reports.

So from a single conversation, you can see that we can search that data, inspect
the results on a map, and deliver a finished report to the people who made it,
all while keeping those precise locations and sensitive information. So what
actually crossed the boundary, Co-Pilot sent the request and received sort of a
deliberately reduced result. Other credentials, private records, exact
locations, and workflow logic all stayed within FME.

That's just the boundary that we designed, and it's what the demo kind of just
demonstrated. So we want to expose the workflow instead of the raw system
itself. We want to keep authority and execution close to the data. We want to
treat outputs, versions, and failures as part of our contracts. And if you do
these three things, you can get a capability that can be tested and governed and
relied upon in terms of data versioning. And FME is just that layer that keeps
those choices independent of one another, where it runs, what sources it
connects to, which governance rules apply, which AI is used, and what context is
exposed, can all change without redesigning the whole architecture.

For many organizations, deployment is a huge part of governance, and FAA can be
deployed in any of these environments shown here, as well as on-prem, Docker,
Kubernetes, wherever you might want to deploy the platform, and keep that
processing close to your data and using your own rules and governance. So
whatever residency and determined operational requirements you have, I usually
we can accommodate that with the deployment. So that brings us back to any data,
any AI, work with the data that you have, where it needs to stay, choose the AI
you fit, we're all about flexibility.

So please do come to our booth, bring us your data challenges, we'll be happy to
chat through them and see if we can come up with a solution. Thank you very
much. Thanks for coming. As the final talk, I'll leave you and answer any
questions for the talk. Yeah, I'm glad you're here. Hello. Thanks a lot for the
talk. Very interesting. I'm curious whether you have, so the MCP servers that
you talked about, they are very useful for people with the flow already in
place.

But do you have any solution, any MCP server to help create the flows in the
first place? Great. Sorry, the? The flows that process the data. So this program
that you were showing, that you configured the blocks and the? . Yes. I see. I
see. I see. I see. No, not currently. we do have AI-assisted workflow design in
the platform, so you can shop with an AI assistant to help develop those
workflows. Of course, all the resources, but not quite yet in terms of actually
generating those workflows.

That's definitely something we have in mind for the future, but it's not here
yet. It will be soon, and that will definitely provide a great starting point
for new users as well as trying new workflows and new things. So it's a great
idea, and we're hoping soon. Thank you. Thank you. Any other questions?
