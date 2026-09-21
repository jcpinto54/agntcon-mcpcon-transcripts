---
title: "Pull Requests Are Dead, Long Live Peer Review"
speakers: [Dylan Ratcliffe]
day: fri
date: 2026-09-18
start: "10:20"
room: G102 + G103
track: Human-Agent Collab
kind: talk
session_id: 3cc6e8d9193ef68045614f9ebd1d5233
recording: RAI Amsterdam 8.m4a
contributor: jcpinto54
---

# Pull Requests Are Dead, Long Live Peer Review

**Dylan Ratcliffe** — Overmind

Dylan Ratcliffe is the founder and CEO of [Overmind](https://overmind.tech/),
which builds predictive change intelligence for cloud infrastructure —
simulating a Terraform change against live production to show its blast radius
before it ships. He started the company after a bad deployment at a financial
services firm convinced him dependency discovery had to be automatic. Overmind
raised a $6M seed round led by Renegade Partners in September 2025.

*Friday 18 September 2026, 10:20, G102 + G103 — Human-Agent Collab track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> The talk ends at the `## Q&A` heading; everything below it is audience
> questions and the speaker's answers.

## Transcript

Okay, so I'm going to give another 20, 30 seconds for people to get seated.
There's two more seats right up the far corner, not the best view, but if you
want to sit down, and there's a couple more over there, and then I'm going to
get started. Okay, so hello everyone. My name is Dylan Ratcliffe. I'm the
founder and CEO of a company called Overmind. We simulate changes to large-scale
back-end infrastructure using AI. And this year, we completely killed the ritual
of code review.

Almost all of the code that is shipped to production today within our company is
not read by a human, and that includes the author. Now, I knew we had to do this
because code review was getting more and more and more painful and we were, I'm
going to get into exactly what was wrong with it. But I was really worried when
we were going through this process that we would kill team cohesion and tribal
knowledge and understanding and compliance because we relied on code review for
a hell of a lot more than just catching bugs like I'm sure a lot of your
companies do as well.

So I'm going to talk you through how we got to where we're at today and the
lessons that we learned along the way. The first lesson is that AI is not your
peer. You cannot peer review the work of an agent. It is missing a bunch of
really important things that make a peer valuable. So, like probably most of
you, we relied on peer review, i.e. code review, for many things at once. We
used it for catching bugs. We used it for SOC 2 and ISO 27001 compliance.

We used it for training junior engineers. We used it especially for building a
shared tribal knowledge and understanding of how our system actually worked. But
trying to peer review code that is written by AI is terrible. And it made us
realize what made peer review valuable in the first place. so the fact that
there was a human who cared about every line in a pull request means that if you
disagreed on something you were guaranteed that you would get some kind of a
good outcome either the author would learn something new because you've pointed
out that there's a bug here or that there's a better way to do it and they would
get better as an engineer and the product would get better and users would have
a better experience or you would point something out and they would push back
and say no this is the best way to do it because there was some constraint that
you didn't know existed and so you would learn and the product well it wouldn't
get better because it was already written that way but you would gain a better
understanding of the product and the constraints and the customers or whatever
it is so no matter what happened something positive was going to happen if you
interacted with a pull request doing a code review now if you interact with a
pull request especially if that pull request was raised by a bot and it's the
sort of bot that looks at the comments and then addresses them, this is the
response you get to anything you put on that pull request, regardless of whether
you are absolutely right or absolutely wrong.

The second lesson that we learned is that if you think your job is taking
detailed specifications and converting them into high quality code, you are out
of a job. this has been true since January and Opus 4.5, that I spoke about that
this morning. It is excellent at doing that. And so if you think that that's all
your job is, unfortunately, you're out of a job. I think that probably most of
us would agree that our job is more than that.

We deal with ambiguity. We come up, look at interesting constraints and trade-
offs and things like that. but your job is going to need to shift left. So our
team was at the beginning of this year, about 80% engineers. And they did
exactly that. They took detailed specifications and produced high quality code
because that's what they were given. We had a product organization, which was me
and a product manager. And we would come up with the ideas.

We do the research. We'd work out the shape, like the high level architecture,
what it was going to look like, what we were going to build. Then we have a
meeting and hand it over to engineers and they would ask us a bunch of questions
about the constraints and should we do this or should we do that? And then
engineers would plan out how it's going to get built and it would get built. And
this was with AI. This is not before AI.

They would use AI to write the code. The problem is that I am a passable
engineer. And once I have done all of the work of coming up with the idea, doing
all the research, coming up with a high-level architecture, it's easier and
faster for me to hand that to an AI agent than it is to hand it to a human and
have that human ask me a bunch of questions. And that human is in a different
time zone because I live in San Francisco and a bunch of my engineers are in
Europe where the AI never sleeps.

and so it's easier for me once I've done all of this work all the way up to
working out what the shape of it's going to be to hand it straight over and that
led to a week where me and my product manager produced more work by every metric
lines of code pull requests tickets closed story points than every single other
person in our company combined now it's only six people but two people did the
work of six full-time engineers and neither of us are engineers and that is not
good Because I know I have a good engineering team.

So it should not be possible for me and a product manager to outperform them. So
clearly something is wrong and it's not the engineering team because I know
they're smart. So we needed to change our processes. To be honest, the balance,
and I know that this is not going to make me terribly popular in this room, but
it's important that you know that this is how people are thinking. The balance
between the amount of work that happened on the left-hand side of this top row
and the right-hand side of this top row had shifted to such a degree that I
seriously considered firing half of my engineers and replacing them with product
managers because it is about 50-50.

Like it looks like 50-50 on this thing, but it's actually about an equal amount
of work if you split it the place that you were splitting it. It takes about as
long to come up with the product specs as it does to build the final thing. And
if you have one product manager and 15 engineers, is this is a problem. Now, we
didn't do that, thankfully. I didn't really want to do that, but I seriously
considered it, and you should know that people are seriously considering doing
that.

I don't think it's the right way to do it. But what I did instead was I told
everyone to get on a plane, and we met in France, and we were going to sort this
out. We have a week to sort this out, or I'm going to do the product manager
thing, but I don't want to do the product manager thing, so we're going to sort
it out. So, but thankfully, the contents of the first two lessons, AI is not
your peer. And if you think your job is taking detailed specs and producing high
quality code, then you're out of a job.

Those two lessons taught us what we needed to know to fix this. Rather than
taking detailed specifications and producing high quality code, the engineers
need to be taking ambiguous specifications and producing high quality code and
good user experiences. We need to shift the work that the engineers were doing.
we needed to this is what we did we needed to shift that left by quite a long
way so rather than giving having a big meeting where we talk about exactly what
we're build going to build and how we're going to build it we generally hand
over when i say we i mean product generally hand over a one page document and
then we have a rule that the engineer that we hand it over to must produce a
demo within 24 hours and they are not allowed to ask a single question within
those 24 hours now There's going to be a lot of ambiguity there because it's a
one-page document, but it's up to the engineer to resolve that ambiguity and Do
their own research and guess is this going to need to work on mobile?

Let's research do people use mobile for this sort of an application? It's the
engineers are reasonably good at that and what we found was that by forcing
people to not ask questions It forced them to resolve those ambiguities
themselves and most the time they were right you are probably mostly engineers
you probably have the right instinct for what to make like what those decisions
should be and you don't need to go to you don't need to go back to product and
have product make all those decisions for you so this works quite well and
engineers basically made the right decisions and and that like dealing with
ambiguity has always been what humans were good at anyway. However, we can't
expect the engineering team to deal with all of this new ambiguity while also
caring about every single line in the pull request, every single line of code.
So the detail of what the code should actually look like at a line by line level
needs to be taken over by the agents because it's just too broad of a remit for
one person to keep in their heads. And so this meant that we had to do something
that we'd never done before, which was look into all of this loop engineering
and stuff like that.

The next lesson we learned was that not all loops are created equal. So we did a
bunch of research on how are people building these agentic software factories
and dark factories and stuff like that, and it turns out that they mostly are a
do-while loop. If you look at the loop on the left, basically all of them look
mostly like this the agent picks up a ticket and the agent decides an approach
and it makes a bunch of trade-offs and it writes some code and it writes some
tests and maybe it records a video demo and does a whole bunch of stuff and then
right at the end it raises a pull request and there is a human assigned to that
pull request and the human's job is to now reverse engineer all of the decisions
that that agent made from code and try and work out why did make those
decisions? What were the other trade-offs? Were there any better ideas?

And this is just a terrible way to work. I do not want to not be in the room
where all the interesting decisions are getting made, but then have to sign my
name to the result of those things. I'm a little bit worried about AI stealing
my job, but I'm more worried about AI stealing my job, where I still get paid,
but this is what my job looks like. Where I just have to sign off on code, where
I didn't get to make any of the interesting engineering decisions.

That's not the job that I want to do. So the loop that we decided we wanted it
to look like was rather than a do-while loop, we wanted it to be like an until
loop where we use agents to research the code base and help us to understand, do
we already have practices for this, stuff like that. But the humans decide the
approach, the humans make the trade-offs, they make the interesting engineering
decisions and they write an implementation plan.

then that implementation plan gets handed over to the agent and then it loops
and basically the agent writes code and when it thinks it's done it goes to
another agent which looks at the code looks at the plan checks if there's any
differences and if there is any differences kicks it back to the agent and says
no you haven't successfully implemented the plan try again so it keeps going and
keeps going. So when we started working like this, it became really obvious
where peer review should go. So in the do-while loop, the peer review quote-
unquote, because AI is not really your peer, anyway the review happens right at
the end. In an until loop, it's pretty obvious that the peer review should
happen before the loop even starts. You should peer review the plan before the
agent even begins working on it because the thing that made peer review good
before was that a human cared about every single line in that pull request if i
commented on something the author would look at it and go oh yeah okay i see
what you mean there now what happens is i raise a pull request and someone
comments on it and i look at their comment and go i didn't even read that code
i'm like if anything you're the first one to have read it you should fix it, not
me, which obviously makes me a terrible teammate. But I think that's the reality
of what is happening. And so, whereas with a plan, it's a one and a half page
sort of text document where we talk about the trade-offs and what we decided and
why. If someone comments on that, I care about it. I will disagree with them. I
will push back. I'll be like, no, I want to do it this way because in the
future, what if this happens? We might want to standardize on this sort of an
architecture. I care about every line in that plan and it's the human caring
about every line that made that back and forth useful and allowed us to develop
a shared understanding to bring juniors up to speed, all that sort of stuff.
Also, you can still remain compliant while doing this. I mean, we're currently
getting audited, so I'm going to find out at the end of the audit, but I
strongly believe that you can remain compliant while doing this because most
places already have the idea of a pre-approved change where you have a change
that is well defined and well understood and as long as you do exactly that then
it's it can be approved in advance this is just a pre-approved change you know
exactly what's going to happen the loop cannot possibly exit until the agent has
done exactly what you said in the plan the plan has been approved by someone
therefore as long as the implementation matches the plan you don't need to
review it again and we don't so the agent writes the code another agent checks
we do sampling of the checks so we check like a small percentage to make sure
it's not getting it wrong and but as long as they match it just goes straight to
product sometimes to be fair sometimes there are differences so the agent will
push back and say no this is not matching the plan but it's not supposed to
match the plan because actually I've come up with a better idea or there's some
good reason I can't do that that gets put into a difference which then gets
acknowledged by the human all of this we just built an internal tool that runs
over MCP. So we come up with plans inside of Claude Code or whatever harness we
use, we send them to them via MCP, the other person pulls it down via MCP, they
leave their review via MCP, there's no user interface at all, it's all just MCP
back and forth. The next thing we learned is that human attention is precious.
We made these changes in a single week and then we went back and then worked for
three weeks and measured it against the previous three weeks to see what the
difference was. The difference was huge.

These were our results. So we tripled the number of issues completed, we tripled
the number of commits, and we reduced our lead time from 3.2 days to 1.3 days.
From ticket being picked up by someone to deploy to prod. Now we didn't do this
because we were spending this much time on code review. It's not like we
spending 90% of our day on code review. This is a pretty obscene improvement.
It's not because we're spending that much time on code review. It's because we
were wasting our attention juggling too many balls at once and we were spending
huge amounts of time on context switching. Somebody, we would raise a pull
request and a day and a half later get a comment and I'd look at that comment
and go I've written 15,000 lines of code since I did that and I don't remember
what I was even trying to do at that point. It's easier for me to abandon it and
start again than it is to context switch into the mode of understanding what
you're talking about and it was super wasteful.

And when you look at the timeline of what the work looks like it goes to show
why it's so wasteful. So in the old way of doing things where we write the code
and then review it at the end, it might take you say three hours to write the
code, 15 minutes to open the pull request, a day and a half for someone to
review it because we're remote and we're all busy, And then CodeView takes an
hour, you go back and forth, and then it gets merged.

But you have to think about it the whole time. You can't afford to forget what
you were doing. Because if somebody comments on your pull request, you can't
really say, well, why don't you just fix it? Because you're the only one who
understands it, because I forgot. And it's not really a valid answer. So you
have to keep this in your head the entire time. So for something that you spend
four and a half hours or so working on, it needs to live in your head for 40
hours.

in the sort of until loop way of working you write the plan which is faster than
writing the code because it's a one and a half page document you get a review
which is faster because it's easier and people are more willing to do it and the
review goes quicker because the plan is a one and a half page document it's a
lot easier to review than three thousand lines of golang and so once that's done
once you have your approval on the plan you can just forget about that you just
commit that to memory this is now how the system works we now have this caching
layer or whatever it was that you were implementing you just commit that to
memory and then you forget about it it's not written yet the code's not written
it's not in prod but it might as well be because there's no other way for it to
exit the loop it's not going to get implemented some other way because you've
committed to the plan. It's going to loop through until it matches the plan and
then it's going to get pushed to prod. So the two of you, the author and the
reviewer, both have an accurate understanding of what the system does. It's just
like a little bit in the future, but three hours from now it will be correct and
you don't have to think about it anymore. So it only takes a couple of hours of
your attention. The next lesson is it's a hell a lot easier to reject a recipe
than a fully finished meal and what i mean by that is like it's if you're
looking at what to cook if me and my wife are standing in the kitchen deciding
what to cook i can very easily say i really don't feel like salad but if we've
just made a salad i cannot get away with saying i really don't feel like salad
um and it takes a sort of gordon ramsey dickhead energy to take something that
someone has lovingly cooked and tell them to go and make it again but that's
what you're doing when you're reviewing a pull request it's hard it's
emotionally difficult and that's why it's usually only the most senior engineers
who do it because they have the sort of you know organizational uh inertia to be
able to tell someone no go and cook it again this is terrible. Now what that
means, the fact that it's easier to reject something before you've built it than
after, makes a big difference to how this process works. The biggest most
interesting number here is the 2.8. We are now 2.8 times more likely to reject a
plan than we ever were to reject a pull request. And that rejection comes from
everyone. So everybody writes and reviews plans on the team now, including
product, where previously it was only senior engineers who did peer review.

The reason we're more likely to reject it is because it's way quicker. I
measured it adds 40 minutes to the total lead time if a plan gets rejected. It
adds 16 hours to the total lead time if a pull request gets rejected. And I
don't mean like closed. I mean just any comment, even one comment adds 16 hours
to the lead time. and so because it's so much easier to give feedback we give a
lot more of it this this was one of my biggest worries was that okay we're gonna
write these plans and people are gonna review them but people are just gonna get
their agents to write the plans and they're not gonna read the plans and then
when they review them they'll get their agents to review the plans and they're
not really gonna look at the agent output and it's just gonna be agents talking
to agents is gonna be terrible it just didn't happen that way and I was worried
about it but I think that these numbers prove out that it didn't happen and that
way people really do care about the plans that they're producing and they do
care about reviewing it.

And because the plans are simpler than code, it's easier for other people to
review. And so I'm much less worried about how do we bring juniors up into
software engineering now? Because a junior can look at a plan and go, I don't
understand much of that. And then just have a conversation with their agent
until they do understand it. and if there's stuff they still don't understand
they can submit a rejection and that my product manager that's how he works when
he's asked to look at engineering plans he will just keep getting the agent to
explain it until he understands it and if there's something left that he doesn't
understand he'll push back and be like i really don't see why we're doing this
and 80% of the time he's correct it's not a good read it's not a good idea oh
yes the other thing is that eight percent of the time we totally abandon plans
we we plan it and then we just never do it which seems like a bad number but i
think it's excellent the fact that we can look at the what of what we're going
to build and think that's a good idea and then get to the how of how we're going
to build it and go this is not a good idea and drop it at that point is awesome
because previously it's like wow product said we have to build it and it's in
the backlog and it's in the sprint so we have to build it being able to drop it
at this point is really really good This is the sixth lesson. This is a quote
from Paul Graham who's pretty well respected, but I disagree with in this
instance. Paul's quote is, when anyone can make anything, the big differentiator
is what you choose to make.

I do not agree. The big differentiator is still how you choose to make it.
There's this idea that what doesn't matter, sorry, how doesn't matter anymore,
and then it's all about what. And that's just not true. If we look at these two
laptops, they both answer the same what question. What are we going to build? A
laptop. If you was doing spec driven laptop design, these would both fit the
same spec. They literally have the same specs, but they couldn't be more
different as a product. And the reason they're different is not because of the
what question, but for the hundreds of how are we going to build a laptop
questions that came along the way. And And that's what makes good products that
perform well and scale well and are easy to debug.

It is the hundreds of interesting how questions in how are we going to build
this, which we can't abandon. We can't just let agents make all of those
decisions. People will try to sell you products that do that. People are
probably going to do that today to you and reject them. Do not put yourself in a
position where you are in a loop, where you're at the bottom of the loop and the
agent is doing all of the interesting decision making, making all of the
interesting how decisions. The how decisions are still super, super important.
And you can still make those how decisions without having to read every single
line of code. So I'm going to summarize here. I strongly believe that the job of
engineering is going to change for everyone.

it's certainly changed a lot for us and you will be reviewing plans rather than
pull requests and the how questions that you are answering will be a layer back
of abstraction from what they were before you're not going to care how we
organize the files or how we name the functions but you will care how the data
flows through and how authentication works and how it handles failures and
things like that. There's still going to be really interesting problems that
still require engineering.

They still benefit from a team and they can be more fun than ever before. But
only if you select the right loop. One where you are at the top and you are
making the interesting decisions and the agents are just executing on your
decisions, not where you are signing off on God knows what an agent produced.
and that's all from me we have published the plugin that we use internally at
until.dev to do this and my linkedin is here on the left hand side on the right
hand side which i'm covering with my head a little bit um is a manifesto that we
wrote if you want to hear more from from us on this topic there's an email sign
up down the bottom but thank you everyone for coming I'm going to stick around
in here.

## Q&A

If anyone has any questions, please come up and say hello until we get kicked
out, and then I'll be out. Yeah. Thank you. Hot coffee? I want some hot
coffee. Hot coffee. Coffee. Excuse me. Coffee. Thomas, can you press the stop
button? Can you press it down for this? Yes, later. When you're there. What do
you want? It's in the right position. Yes, exactly. The stage is on the left.
Normally we put the switch here. It's outside.

Yeah. It's so, so... For you to drink on the sauce. Are you in this car? Yes.
Okay. Sorry, guys. We're going to prep to the next speaker. Can you evacuate the
premises? I can. Yeah, can you? Yeah, I'm going to be... I'm going to go
straight on the hallway. Okay. And I'd love to switch with them. Yeah. Give me
one second. Thank you very much. No, that's good. Okay. So, I'm going to go
straight on the hallway. Okay. And I'd love to switch with them.

Yeah. Give me one second. Okay. I was a bit startled by some things you said.
So, until then loop, right? This loop, isn't it built on the assumption that...
Isn't it built on the assumption that you can specify all the requirements
beforehand? But there are some problems that this is not possible. from a
fundamental point of view, right? That's why people moved away from waterfall
methodology, you know, like, that you think surface while development is
ongoing.

Yep. So, my argument to that is like, let's imagine you have an application
that's been in production for five years, it's got thousands of users, and you
wanna start using the until way of working. And there's like a bug, let's say,
there's a bug where if someone clicks the buy button they get charged twice, but
they get sent one product per second. In that scenario, if you were to write an
implementation plan for that, you don't have to have a fully exhaustive view of
everything the product does.

You just have to know, all right, here is the behavior we have today, and here
is the behavior we want. You're going to use your agent to research like, A,
what's causing it, but B, what are the possible ways to fix it? Do we introduce
some transactions? Do we look at debouncing the query in the first place?
There's probably a bunch of different ways to solve it. And your plan would look
at, basically it would read, here's the problem.

Here are the three different ways to solve it. We're going to solve it this way
because of these reasons. There's going to be some sort of trade-off. And then
here's the reason why, and here's how we're going to test it. We're going to do
this and this and this. And you list all the tests that you want to do. And then
that would be your plan. You don't need to know anything about how the rest of
the application behaves. You just need to care about what change you want to
make at that time and how you're going to get it there.

And the important part of what goes in the plan is, like, not everything goes in
the plan. You don't put the name of the functions in the plan. You don't put the
name of the variables. And everything that doesn't go in the plan is an implicit
agreement between you and the reviewer that the agent will come up with
something to fill between those lines, and you both agree that you will accept
whatever it comes up with as long as everything else is satisfied.

But, it doesn't. Like, doesn't it apply on the assumption also that the problems
are not complex enough? Because some problems are just too complex for the
agents to have all the context, right? Like, a lot of moving parts, a lot of
applications. Yes, and so in that scenario, we would break it down into, like,
we certainly wouldn't do one plan, like, big complex features and stuff like
that, we break into many plans, And we do that with traditional project
planning, like, right, how are we going to build this big complex feature?

We break it into phases. What's the minimum viable thing? And a single feature
might be 20 or 30 plans for that exact reason. Otherwise, it gets unwieldy.
Also, at a certain size, the agent gets really bad at following the plan. So you
do need to keep them at a size where the agent can reliably implement it without
going out on a tangent. And so then it's your job to work out what's the best
way to break it up, which is Engineering you're already doing you're already
doing that today Yes, and so the the intelligence of the model you're using is
usually what determines how big and complicated the plans can be.

If you're using dumb models, we use pretty dumb models to do our work. Like we
use Grok 4.6, one of the latest Grok here, or Composer mostly, because it's
cheap and fast. Which means that we can't have a massive complicated plan,
because it's not that smart. You're better off using, like we use Sol to write
plans, and then cheap models to implement them. It forces us to keep the plans
reasonably small, But we find that because we need to understand those plans at
a pretty deep level, you can't afford to have a one and a half page plan that
describes a really complicated system.

There's not enough detail. You do need, not just the agent is the limitation,
but the human needs to understand it. And so the human is the limitation there
as well. So the plans are always about a page and a half, because once you get
beyond that, the agents start not following them. But it'll be many, many, many
plans to implement a single feature. You sometimes split the plans when it's
more complicated, but then when you review the plan, do you have a situation
when there are so many relations between them and you need to actually review
all of them to make sure that it makes sense?

That does start to get complicated. Usually we will do project planning at the
beginning, which is like we decide architecture, we decide all that sort of
stuff at a high level first before we get into implementation planning. and then
once we know the architecture and stuff like that, then we'll start to move off
like right around what's the smallest thing we can do on the implementation
plan. So you start with the big picture and then go down to the end of the
piece.

And that big picture stuff is like teams working with a whiteboard sort of work
rather than individuals on an implementation plan. The implementation plan stuff
is purely like individuals doing individual engineering trade-offs. We still do
all the whiteboard. Can we cover the second question I asked at the very
beginning? How do you address no deterring mechanism when you have the plan
which is perfect and then LLM might hallucinate both implementation and test
which are green and then distribute to production?

So we do it by the sort of everything that is in the plan you have certainty
that that's going to be true and that certainty comes from checking the checks.
So basically, it implements the code, there is a check that makes sure that it's
done the right thing, we sample a random sample. Which check? Who will implement
the check? Where it comes from? So the check is literally just like a cheap 5.6
solve prompt that says, here is the plan, here is the pull request, make sure
that this pull request is the right one.

Different agent doing the meeting. Yeah, with no prior content. Did you have a
chance or this is when it will hallucinate, like say plan is correct and
implement is good? very low incidence of that. That's the reason that we
manually check this one percentage is to see what the incidence of that is
because like and it's really low like 99% or more it's absolutely correct. You
also have a lot of bugs as if before you move to this approach you change your
loop versus before maybe before you were building less features and also less
bugs now you ship faster sometimes you catch those hallucinations but maybe it's
not all the new cash at the moment and hence you have maybe more volume for the
user.

We found that it's not really changed. I think there's been a few things that
we've shifted like maybe shifted a bit too quickly but then by the same token I
find that I engineer higher quality solutions because I don't like... If you
give me code, I just go straight into the code. And I'm like, I'm going to write
this. And I know how to write it. And I take the library of shit I know how to
do. And I'm like, I can do this and this and this.

And combine it together and produce a working solution. But by writing the
implementation plan, it forces me to be like, what are the ways of doing this?
The agent will be like, you should use event sourcing. I don't know what that
is. Better learn it. And so I'm forced to think about it more. I engineer. I do
better engineering anyway. And so I think that that offsets potentially more
bugs that go through because I think about it more because I don't go straight
into like, bam, I'm going to write some stuff with the stuff that I know how to
use.

I take the time to step back. I'll have a quick question. You said that the
implementation plans themselves are relatively small because you break it down,
and then each implementation plan has a PR. Yeah, one-to-one. Can you tell us
roughly how big the PRs are in terms of lines of code? Not always. Just roughly,
is it like a hundred lines, is it a thousand lines, is it ten thousand lines? It
might be between a thousand and three thousand.

How many of that is tests? A lot. More than half? I haven't actually checked.
It's probably half. Maybe a touch more. our experience as well. If it's like
10,000 flights, would you say let's go back and redo the plans? Usually you
wouldn't get a clean path. Usually if I could raise the 10,000 line PR, there'd
be like 10 differences from the plans. And it'd go back and then the 8, and then
the 9. And the plan was complex. Exactly, and then we could just take forever.

But you would say that the optimal granularity of a plan would roughly reflect
in like roughly thousand dollars yeah depending on the complexity yeah but what
if ai the agent decided no it wants to modify something the plan will be in
relation and then because we said about such a scenario but then do you go back
to the plan someone review this or you just implement this so what happens when
the agent decides it wants to change something all the human crew because
sometimes we ship it off to a background agent and you just get a pr later but
sometimes you sit there and babysit the agent sometimes if it's something really
complicated you do kind of want to babysit it And especially in that situation,
you might halfway through come up with a better idea for something.

And so there will be a difference in the plan. The bot that we built, what it
does is it puts comments on the PR, or like findings as a GitHub check, and
those findings have an ID. And then if you put a comment and include that ID,
that's you acknowledging the findings. And so basically it'll be like there's
three findings, three differences between the plan and the implementation.
acknowledge all three because you're like, I came up with a better idea while I
was doing it, here's why it's better.

Or like the plan actually suggested something which was just really stupid in
hindsight and we're just not gonna do that. And then only once they're all
acknowledged, it then brings the original person who peer reviewed the plan back
to say, this pull request implements the whole plan with these exceptions and
here is why. Your job is to review just the exceptions. So you don't read all
the code, you just look at the exceptions and read those.

What's the... You said that you throw out the deposit. Really good, right? You
don't restart the deposit. I mean, they go in a database, but we have not
thought of a use for them. The logic being, because the plan is not declarative,
because it's an imperative description of like, do this, then do this, then do a
migration or whatever, half the plan at least is like all the state that we're
trying to get rid of, and I think it's just kind of... like if we were to commit
them to Git, for example, I think it would just pollute the agent, because the
agent would read one read one and then think that that's the way it's supposed
to be and then I think it'll make things better. But then do you have any kind
of documentation about the implementation itself?

We do also maintain like proper declarative documentation like ADRs, like
architecture design records and stuff like that which usually get done at the
planning stage one level before where we like decide the architecture and we'll
document that then we do architectural design decision records and stuff usually
at the plan so then you start with the planning for the implementation yeah
usually like documentation stuff sometimes we will up we do have a bot at the
end of every uh implementation that just checks to see if docs need updating as
a result of that so you store these plans as a issue in github as a code or we
put in a postgres database and then we have an MCP server so you go like do I
have any plans to review and then it hits the database and it's like yep you
have three plans to review okay review the first one it pulls the client into
context and then you read it right so you don't really find you don't review
this in github or something no we I never ever want to leave cursor I don't want
to if my laptop just had cursor and no operating system I would be a happy man I
don't have one you actually have some kind that you want to change the version
control or something yeah because you could have used git for it i could have
used git for it and to be fair we might move it to git but definitely not as
files that live in the repo because the the thing that we like most is that
because the plan gets pulled in to your editor and but also the agent reads it
it's really easy to look at a plan and go don't we already have a way to do this
wasn't there a thing like six months ago where we decided there was like a
standardized way for us to do this and this isn't that and you can ask like that
vague of a question to the agent of course it'll go and read a million lines of
code and be like yes you actually do have a standard way to do this and then
I'll reject the client and be like hey guys we have a standard way to do this so
you are using kind of your own custom solution right not like this speckit or
this AIDIC or...

speckit is the closest to what we use but we built it all in-house it actually
makes sense for like larger pros I wouldn't have you can have some kind of drag
on this you know in vector database to actually search for all of this knowledge
you could yeah we might do that eventually i'm a bit worried that it's all stale
and that it's not very useful but we kept it we keep it for audit purposes
because like we need to be able to prove who approved what and who approved the
deviations if there were any and all that sort of stuff that's basically why we
keep it what's your uh like how much slop you find in all this process. My
experience with doing this is that even the code that is generated, like even if
I have a very well very spec plan, when I give it to an agent to code it, even
if it's a smart agent, the probability of seeing a code that it's just...

Yeah, sometimes I still see a lot of flop, especially when it's the net scale,
right? When you do a plan after a plan after a plan after a plan and you review
it at the end of 10 iterations. The solution is not to look at the coins. I
mean, that's kind of the answer. Just close your eyes. It's like, if you don't
look at it, you never notice. But the more serious answer is splitting the plans
into like one single base help, but often I'll look at something that I consider
to be slop and I'll be like, oh, I need to do it like that.

We already have a thing that does basically that way and you just modify the
thing, whatever. But then I think, oh, why didn't I write that in? If that was
important to me, that I do it that way, I should have written it in the plan.
And if I had written it in the plan, I would have done it that way because the
checker would have checked and it would have made sure. And so I have to think
to myself, like, is it really that important to me?

Like, I'll look at it and go, ugh. But I didn't put it in the plan and like
maybe next time I should put it in the plan but I don't put it in the plan next
time because I just don't care that much and it's like a part of it is kind of
letting go. But if you don't, over time it will come home and you just start to,
you know, it's going to become more and more difficult. Do you see how you're
going to be free and whatever the hell?

A little, yeah. One of the things that so we do have like very stringent Linting
is all like we turn every Linda rule
