---
title: "Six Months of Proof: Independently-Verifiable Records for Agent Actions Under the EU AI Act"
speakers: [Steven Mih]
day: thu
date: 2026-09-17
start: "15:45"
room: Auditorium
track: Interop & Standards
kind: talk
session_id: adfb289902647c8485080a968335fcc3
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=25106s
contributor: jcpinto54
---

# Six Months of Proof: Independently-Verifiable Records for Agent Actions Under the EU AI Act

**Steven Mih** — Action State Group & Inc.

Co-founder & CEO of Action State Group; serial open-source infrastructure entrepreneur.

*Thursday 17 September 2026, 15:45, Auditorium — Interop & Standards track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 6:58:26](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=25106s)), not an attendee's recording.

## Transcript

Cheers to you all. Great to see you. My name is Steven Mih. I'm with Action
State Group from San Francisco. I'm a serial entrepreneur and have done a number
of startups. This is my latest one, and we'll be talking about six months of
proof. And that is associated with the EU AI Act. And I'd like to ask a question
first that you're going to be getting more and more as we go along, which is,
show of hands, how many have agents in production today?

Keep your hands up, keep your hands up. And how many of you can prove to a
stranger what they said they did? Okay. I was going to say, if you've got your
hand up still, I want to talk to you after the talk and let you show it to me.
This is pretty hard stuff. And it's a big problem that I think most agent
builders, either whether you're building them or you're deploying them, are
dealing with. And that's why I'm talking to you about the Agent Action Capsule,
which is a library that allows you to do many things.

One of the big things is figuring out what an agent did, who said they could do
it, whether it was verified to do that, and also what the agent actually did. So
I wanted to give some context. I think you've seen all the news coming in from
America. It's all over there. I think probably EU already has this too. But the
rogue agents is a big, big deal, right? And even the three Frontier Lab makers
all agree that it's been pretty hard to keep them aligned.

And that just seems to me to be a pattern, which we all have to be aware of. In
some of these cases, they were using things like GPT-5.6 Sol. And with $20 or
$100, you can get that. and so probably some of your coworkers or you are using
those and they're trying to do the right thing for you but sometimes it can get
out of hand i think if we asked how many times the database was rewritten you'd
probably raise your hands on that too but let's look at some of the things that
are out there like what are they saying about themselves trying to help us right
one is we sanitize the fake trajectory. So it was trying to cover its tracks.
And another one was, hey, just be transparent if we're asked. But otherwise,
hey, just keep going. And that one is around the whole idea of, you know, let's
just post where we can talk without being seen, or so they think.

So it's a big issue and I'm just here to talk about, it's not about the kill
switches per se, it's about knowing when it goes off the rails. And if you look
at these dates, some were a week long, some were months for a while. And so that
goes back to if you have a agent that you're putting out there, how will you
know, when will you know that it started to go off the rails? And that's pretty
critical. Now OpenAI is saying that they'll do it within a week or two.

And so that is today's, I'll say, cutting edge. And for everyone else in the
room, if you're not in one of the Frontier Lab makers, then what is that number?
So I'm not here to talk about storing more logs. You can have all the logs, and
the issue wasn't that they were not logging. The issue is that the log is
basically your own diary, but it's on an Etch-A-Sketch board. You can erase it,
you can rewrite it, right? It's not like your engineering books where you can
write it down, put the date, and then you can hand it in when you wanna get your
patent, right?

So these are the issues associated with just your own diary. And when you start
to talk about what is really needed is what I call the signed record. And that's
what turns a log into evidence. And we've made it very easy with an open source
library that you just, it's called capsule-emit, and you just say seal the
payload instead of logging. So wherever you say log a payload, just say seal the
payload. And then everything else becomes available to you.

And this is all based on open source and IETF standards, SCITT, which I'm a part
of the working group, and that's RFC 9942. Now I didn't create SCITT, that has
been going on for about five years and kudos to the team that put that together.
And, but in terms of the profiles that go on top of it, that's where the Agent
Action Capsule sits. And it's meant to be donated, it's meant to be available to
everybody. And so when you have a signed record now, you can then say when your
agent is making a call across an effect boundary, now you can say what it did,
what it saw, what came back, and chain it to the previous one.

That all goes into append only. And so this is important for what an agent can
do. So everything I'm gonna show you, you can check out yourself. And the idea
that you can check it out offline without even having to install any software is
what SCITT allows you to do. And let's go through a little bit more. Now, many
of you have logs, right? And I'm not here to say that they're bad. Absolutely,
logs are very important. Traces, all really critical.

However, typically it's gonna be used for your own internal operations, right?
When you wake up and you need to find out what went down and figure out what the
root cause. Absolutely, logs are very, very helpful there. Now, if it happened
five, six months ago, it may be a lot harder to figure out what happened. And
also, the log is good for when you're trying to say, hey, this is what I
remember about what happened, because you can look at it, decipher it, and then
give someone a report.

But if you're in a case where now you're talking about money, you're talking
about an agent doing more and more consequential things, then we're saying that
that may not really help you that much because the relying party may not
appreciate that you just gave them a log, because guess what, maybe it was
rewritten. And that's where even if they trust you, you can still say you don't
even have to trust me, and that gives you even a better posture.

And so that is where this is gonna become more and more a thing. And if you just
look at the METR and Redwood Research, they were talking about how they just had
a bunch of logs and there was 1300 transcripts that they had to go through. They
used AI to look at it, about $400,000 worth of credits from OpenAI. And they
still had to put together, it was like doing crime scene investigation, CSI AI.
And they had to say, okay, this is what I think was happening because we had to
piece it all together.

what happened first, second, third, who was talking to who, and they could still
say that 7% of the tool calls were spoofed, and they could not determine for
sure, they couldn't rule out what was really happening on many circumstances.
Not a great position to be in when you're talking about more and more
consequential actions. Okay, so now let's talk about how a seal works. This is
three different roles in this. One is, say, your organization.

You could be using someone's agent or you could be building your own agent. Then
the witness is a independent third party, which is disinterested. And the
relying party could be any one cross organization. Could be an auditor, could be
a GRC team. It could also be just another organization that you have to report
to. And so, first of all, when you use the emitter and it doesn't block
anything. What it does is that it'll say, here's what I saw, and now it's going
across this boundary, and let's see what we get back.

And these are all then, these are statements that are then put into a local
append-only log. So that's a CLL, it's a checkpointed local log. And for some of
you who know Merkle, there's a type of Merkle log, which is a Merkle mountain.
And that is where there's peaks, and those peaks can be shipped out instead of
the whole log itself. And this allows you to then do checkpoints, which are only
300 bytes for any number of statements.

Could be a million statements, could be 10 million statements, 300 bytes. And
that allows you to then know that those receipts happened in that order, okay?
They're checkpointed and there's a receipt back for those statements. Okay, now
in this case, the relying party could verify this offline. There's an open
source verifier that's out there that we provide with vectors, and we also have
a service that you can just send it to, and that'll verify.

But there's nothing to do yet, right? So you're just making capsules, not
blocking anything, and now let's talk about what you gotta do with all this. And
this goes into the second part of using it. So here, now you get an obligation.
So now the company says, "'Hey, we're now operating in the EU, "'so we better
make sure that we maintain our obligations.'" And so they can just simply ask
that question, and with a easy button, you'll get a bundle, which then gets
brought over about that time period, about each agent, and they can then be
provided, and they can be checked with the verifier, okay?

So it's meant to be an easy way to handle any type of obligation, whether it be
the AI Act itself, it could be FCA in the UK, it could be all different types of
obligations that you can then map to this. So what I'm talking about is the
system to do this is not necessarily specific to any one type of obligation, and
you'll see how flexible it is as we go along a little bit further. So hopefully
that makes sense. If there's anything that's tampered with, it would not verify.

And that is, it goes through nine different checks, and that's how it works. So
then you can hand your auditor, again, the offline check, and that is a report.
And if you'd like, you can go ahead and do it yourself and look at this. We're
going to check it out together. And so this can all be easily configured, Again,
open source, and we'll have it pull it up right here. It gives you an idea. This
is using the Tau squared benchmark from Sierra, and that's a pretty common AI
agent benchmark, and they have one for airline agents, so it's like customer
service.

And what's important is that you see how you can pin the model that's being
used, and also pin what are the obligations that you're working against. And so
in this case, we have Article 5, 1A, no manipulative or deceptive techniques.
Another one, 50A, these are current ones. They told me that they are dealing
with AI. And then, and there is a rule that if it's obvious, then it's all right
not to say so. And then this is one that's coming up.

It's not right now. It's, as you know, the high-risk ones are coming in December
next year, and we just show how you could apply this also now as a shadow test.
But if you then get into the methodology, which is based off of auditing
techniques as well as AI research, you would want to have a judge just like METR
did with that $400,000 of spend, not doing it after you have 1,300 transcripts,
but do it every day. And it would check against, let's just take this one.

Now the Tau squared data set is not this big, so the ones that say sealed are
the ones that have that. And if we look at this, these are an example of the
conversation, right? And so, hey, they're trying to change a flight and the
assistant is trying to help. It has the tool calls, it has what they're saying,
and then the disposition of this is obligations. So this one says it was judged.
This one was recomputed, it was judged, and they met, this one was absent.

And this allows you to easily, for just a regular auditor, to go through and
check. Any spot check is usually what will happen. But hey, you're thinking
probably, what about this LLM-as-judge stuff, right? Of course, if you could
have a human look at every single transcript and every single tool call they
made, which in one turn you could have 90 tool calls, that'd be great, but we
don't have time for that. But what the research does is you have a human check
on a blind ratio basis, and so you can capsule those two.

And doing those weekly, you can get an idea where it meets. So everything that
was given to the agent, to have a human do that and do that test. And so that's
the methodology there and it gives you then overall where you are. So when
you're logging it, now it turns into evidence and then it turns into a report
just like that. Okay, so let's go back. Now I'll go through a little bit more
about the AI Act itself. There are a couple different roles there.

One is the provider, that's where you're building your own in-house or you're
making agents as a vendor. The deployer is the one that may be purchasing from a
vendor or you could be both. Then there's other smaller kind of roles or
different roles I'll say is more narrow. The ones that are a public body like
the UK government got hacked a few times that I didn't show there, but that's
the case. And then also the AI frontier model makers So I'll be talking about
those first two mainly.

And you may have seen that there is already obligations that we all have if
we're going to be operating in the EU, which are in place. And coming up in a
couple more months, these are two new bans, primarily for the frontier makers.
And then next year is when all this starts to become for high-risk applications,
high-risk consequences that comes into play. And so these can now be mapped
easily where we kind of showed this. Okay, you have a policy document, and then
the GRC team can describe what that is in regular semantic terms.

And then against your capsule ledger, you can then, in this case, look at the
ordering, and it can be recomputed. And in this next case, it's judged. and
that's where you have a non-deterministic and you have deterministic approaches
for that. So the more that you can make deterministic, the better. If you have
your own guardrails, that can be dropped in. It composes with that. It composes
with your identity and composes with any authorization.

All this does is provide the what did it do. So who was it, who authorized, what
checks were made, All that goes into that record as well by a joint digest, and
that stays on disk and never goes to the new witness, just the checkpoints. And
so as you go into next year, we're talking about more obligations, and some of
these are pretty tricky. I think we covered it. Is there a case where the agent
was doing what you asked it to do?

That's a pretty hard one. But if you have the effect boundary and you can see
what it was authorized to do, that gives you that ability. This is an
interesting one, this one, is that it's unbroken. Well, that's a continuity one.
And so that is then what the chain helps you with. These are just examples
because as you go through these acts, these are pretty long. And I'm not saying
that the AI Act has all about agents. but the ones that are about agents are
usually the trickiest ones to have.

And that is why I'm talking with you today. Okay, now getting a little bit about
how it works, just to cover it. The daily side is the approach that is best off
instead of having an agent look at a massive set of logs over the last month.
There is research saying that if it's intended to file a report for an auditor,
it knows that that's the case. And so by doing it daily is the way it can be
done. All this can be configured. Again, it's not about the specifics of this.

It's about having a system that can work with whichever obligations you have and
the way you want to have it. The weekly is, again, these are all capsuled. The
judgments are capsuled. And at the end of the month, you can roll it up. It
could be end of the quarter. It could be in between, right? And that's where
those are then countersigned, and then you can prove it. And so the other thing
I'll say is that what we found is people say, oh, well, obligations, yes, we
need obligations, but we have AI agents, and we want to make sure they're
working right and that they're doing the jobs to be done.

You may have heard that there was a time where people wanted to charge based on
the actual work that they were doing. That was really hard for a lot of
companies to figure out. And my belief is that you can do this with this same
system. And if the obligation is in, now let's talk about where the outcome is
delivered. And this is something that our folks that we heard, they're like,
well, I have my logs, but this is now so granular and I can see what they did,
and I can now rate it against different axes.

It could really help me from a product perspective or even from a business model
perspective. And so let's go ahead and take a real quick look at that. And this
is, again, now we're talking about the AI airline agent, and this could be the
invoice and it's using the Tau squared data set as well and it has three
different axes. You can choose whatever axes you want. Some people want to have
requirement ones and they'll say, okay, we will make sure that your employees
will learn more about what security is for themselves so they're more secure
posture overall.

Now that one is hard to price on but it's still a good one where you're trying
to get a renewal and not getting churn. And so these then become, again, plugged
into that same approach. Again, you can then look at what they are. If you have
to have multiple met, then you can do it that way. And you can then see, okay,
let's see what happened to this one here. It was flagged, and this one, it
refunded the wrong amount. And all the crypto side is hidden there for you, but
then it would scream if it's saying, no, someone changed that.

That was changed, and then you can dig into why. Okay. So just an example. than
if we talk about the, let's see, current slide. Anything that is tampered with
would then turn into red boxes, and there it goes. $42 here across your
embeddings gets chopped up, and then it's $4,200, or just off by a digit. Well,
that can matter, and it would say so when you verify. It doesn't mean your
capsules are tamper-proof. It just means that they're tamper-evident and covers
you in that way.

Now, I've been doing this for about a year and a half, looking at all the ways
that you need to check if your agent is doing anything funny or a human for that
matter. We work with another project called Mesh LLM, which is share your
inference with a stranger's machine. And they have to say what their machine
they have, What GPUs they have, what model are they running? And that's kind of
like their own log. So you can cover these first nine check marks.

Did they say that what they signed was different? Did they change it out? Did
they only record part of what happened? But the 10th one is the part where now
you have the other side sharing that evidence with you. And that then unlocks
the 10th check, which is then saying, did someone not record this when they're
giving it to you? You can't log something that was never logged, right? But in
this case, you're able to when you have the cross-party site.

Pretty excited about that, and I think that is what will really unlock things
overall. So just for, ensure that we're all clear on this, It doesn't mean that
what it said was correct. If you lied and put it in, then it's still a lie,
right? I'm not saying you, but if it hallucinated or made a mistake. But you can
say that that happened at that time, and what they said happened was there. It
doesn't establish that the judge was right or that it behaved well, those kinds
of things.

But that's what your own evals are for, and so on and so forth. Okay. Okay,
yeah, a perfectly witnessed false thing is still false. Okay, now we're just
coming back around, right? No per-action timestamps. And now if OpenAI had this
or your own organization had this, you'd have every record with a checkpoint,
with the receipt, and you know what the bounds are. The evidence is collected a
week late. Now the checkpoint is doing that automatically, and it's only 300
bytes.

Very little compared to any other types of inference. Spoof tool calls, those
are also sealed. Do we get everything? For that two-party exchange, you'll see
the missing records. And for the incident reading evidence, you have those
integrity checks, the deterministic checks, and then you can also do the judge
as well. So we think that the evidence is the key part. It's not necessary about
trust. Trust is very contextual. That depends on the evidence and the history.

And that's where you wanna make sure that that history and point in time is
tamper evident. So that's my whole talk. We have QR codes that you can try it
out. This is for the whole world to use and we'd love to get your feedback. We
do have IETF drafts that are on the Datatracker. We have a number of libraries
that have the capsule emitter as well as the checkpointed local log comes with
the Merkle Mountain. And then we have services that you can use for free,
witnessing, as well as verifying offline.

Thank you all very much.
