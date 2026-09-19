---
title: "Smart Legal Agreements for the Agentic Economy Using Accord Project"
speakers: [Niall Roche]
day: thu
date: 2026-09-17
start: "15:45"
room: G104 + G105
track: Interop & Standards
kind: talk
session_id: 66dee63adbe497d36fcfe33e5f9c2847
recording: RAI Amsterdam 3.m4a
contributor: jcpinto54
confidence: confirmed
---

# Smart Legal Agreements for the Agentic Economy Using Accord Project

**Niall Roche** — The Building Blocks

Niall Roche co-founded the venture studio
[The Building Blocks](https://www.thebuildingblocks.com/) and is a maintainer
and Technical Steering Committee member of the
[Accord Project](https://accordproject.org/), the open-source initiative for
smart legal contracts. He is a CTO-in-residence at UCL School of Management,
with more than twenty years across telecoms, mobile and web systems, IoT and
distributed ledgers, and helped deliver HM Land Registry's first transfer of
land ownership recorded on a blockchain.

*Thursday 17 September 2026, 15:45, G104 + G105 — Interop & Standards track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

So we're trying to bridge that legal layer gap. So we've been looking across all
the various different agentic payment standards, as I mentioned, there's
probably a new one every week, but there's many as we can keep up with. AP2
being the main one that's first along the way and forward to both in the sort of
trad-fi AI world and very much, as I mentioned, quite active in the blockchain
space as well, where really things are moving a little bit faster. We start to
see standards developing the blockchain world and agents having access to
wallets carrying air transactions at the moment having spend limits and having
identity and reputation as well so quite a number of vendors then below doing
high AI agent identity but in the blockchain world as a whole other set of
standards that are out there and they're building up reputation scores so think
of it like two agents rating each other after transaction and you need an
evidence trail for that we're trying to build that evidence trail to show what
happened, did the agent deliver, maybe delivered 80% of what it was supposed to
deliver, do we have that evidence trail, and that's what we're building in the
court.

And somewhere along the line, each of these various different agentic payment
standards don't really consider the legal agreement. They're all very good at
settling payments and verifying that that happened, but not necessarily what the
payment was for. So the proof of terms and proof of consent is the key thing
that we're building. Did the agent demonstrate that they knew what they were
getting into? Maybe they asked the human for approval. What's that order trail?
Did they sign the agreement?

And then what happened after the agreement was signed? And obviously that leads
into other things like disputes as well. Can you build an evidence trail for
disputes? We definitely see there will be a lot of disputes in the future. There
are some analogies of the real world. Disputes are very costly. Lawyers make a
lot of money out of that. But there's a lot to be done in that space. Again, the
on-chain world is leaking there. There's actually quite a few things happening
in that space.

So the first step, has anybody heard of LCP, Legal Context Protocol? It's
relatively recent, I wasn't sure if you've heard of it. Implementing it at all?
I hit, with Logout there, I have a contact over there on the BI business cases,
we implement some reports over there and we hit these difficulties because we
want to ultimately replace five people over there and we had to get involved.
Awesome. Yeah, that's why I take this course, because I was curious.

Okay. Thank you. Well, LCP is the first attempt at this, really. It's the
American Arbitration Society, our partner. And what it's trying to say is, if an
agent is visiting a website, basically, where do you find the terms? It doesn't
define what the terms look like. They said that they're going to work on that.
But it's really just like a very simple JSON file that says, you can find the
terms and conditions here, and here's the hash of that.

So in a core project, that fits us perfectly well, because we can represent what
those terms and conditions look like. And there could be variations of the terms
and conditions. The example I'll show a little bit later is basically a
licensing agreement. Do you want to license content for one access, for ten
accesses, for a month? Do you want to do AI training on it? Do you not want to
do AI training on it? We can have variations of those terms and conditions
depending on what the consumer wants.

And the consumer could be a human or an agent. So LCP is the kind of entry point
for an agent. Where do I find terms and conditions? You can use a core project
for representing those terms and conditions and then mapping the signing of the
agreement for the agent signs on your behalf. And the hash is generated and it
can be cryptographically mapped to what the agent actually agreed to. So LCP is
that entry level, a court then takes over to actually execute the contract after
that.

So really, LCP is just the discovery mechanism. Think of it like the storefront,
Accord is the engine. That's the way we basically map it. Disputes, that's what
LCP is very much involved in with their partnership with the American
Arbitration Association. Still very early days on that, I don't know if you've
had any agentic disputes yet. It's the Wild West on that. But again, Accord is
trying to gather all of that data where it hits the legal agreement.

So you don't just have a piece of text, you have an evidence trail for what
happened along the way with that agreement. And let's just say, realistically,
in the blockchain world, this doesn't happen, where it just executes
deterministically, the smart contract code will execute the way it executes. If
there's a problem, if there's a bug, we've all seen what happens. And there's no
real way to fix that very easily. With this, it doesn't have to execute on-
chain.

In fact, most of these things don't execute on-chain. You don't want a public
agreement visible on a public blockchain. But the output of the dispute could
mean a new state, and then you basically press play from there. So you've had
some dispute, it's been agreed what the outcome is, now continue on with the
contract. So it's more realistic, it's more like the real world actually
executes in this space. So one of the demos I'll show here is X402.

Maybe show of hands as to who knows what X402 is. Thought it might be a few
more. X402 has been around in the HTTP headers right since the early days, Tim
Berners-Lee putting it together, just never used. Coinbase, that have been
needing this initiative, putting it together just using existing HTTP
infrastructure. Payment required ultimately. You request a payment resource, the
server says no, you've got to pay for this and it gives some details on how you
pay for something. So then the next request back to the server indicates some
proof that you have paid and then the server will go off and double check that
you actually did pay ultimately. It's quite generic about how that payment
happens. It doesn't matter if it happens via bank account, via Stripe, or if
it's some sort of long chain payment.

Obviously coming from Coinbase, they were sort of thinking, well, maybe you
should use our network for that. They've launched their base cryptocurrency.
It's a bit like Ethereum. It runs on Ethereum. It's very, very, very cheap. So
you can have micro transactions, fractions of a penny, which is really what you
need for the agentic economy. Very small amounts of payments. So what we built
on top of this is an extension layer where you can actually show the agreements
that was entered into and where the payments that you make over x42 matches the
legal agreement. So nobody's really done that and that ties in with the
attestations as to this payment was for this agreement, here's the proof that
the agent entered into the agreement, here's the cryptographic signature that
they would have signed either using something like DuckySign for example or
HelloSign or one of those sort of platforms or using a blockchain wallet. So
anything that uses a decentralized identity. So you might have seen some talks
earlier about that being the future for identity for both humans and agents.

So we don't really care what identifies us, as long as there's proof that the
agent approved the payment and there's some cryptographic trail, then that's our
proof that we associate with the payment. So the key thing here is that all of
this originates from the contract text. So the price that you might charge for
an item, regardless of what it is via X402, My example I have here is just a
simple report, but it could be anything.

Anything that's served via HTTP. It could be a video. It could be whatever you
want really. But the terms and conditions are normally very separate from the
API backend. In the database somewhere there's a price. Well this is like
treating your contract like an API. The data comes from the contract. So if
you've been some negotiation backwards and forwards and you've negotiated a
price difference, price difference especially for you and that's embedded in the
contract that you sign then that's the price that you'll pay so think of the
contract like a data like database in that sense it's more than just a database
because you actually have some logic you can run a calculation one of the
classic examples we use is figuring out what the late penalty might be if you
fail to deliver something and depends on how late it was the value of the goods
maybe it's capped at a certain amount and maybe he considers force majeure
something like like worldwide global conflicts or major storms, things like
this.

We had a smart legal contract built by a law firm before many years ago to pay
out on a solar contract if it was cloudy more than four days in a row or
something, and they could get an insurance payout. These things do exist, and
that's exactly the type of use case that we're looking at, definitely around
insurance. But everything comes from the contract text. And then there's a life
cycle from the agreement as well. Things are drafted, signed, completed.

maybe disputed and then every contract has a life cycle and eventually finishes
and then you might renew the contract etc but it really we're trying to build
that single source of truth for evidence within the accord project so after the
contract is signed and we see who signed it all the parties need to agree then
we have the execution logs the various trigger history trigger is basically
calling one of these contract clauses and both parties would sign the input for
that as well. And then we can get obligations back from that. And that's the key
part of the project.

What does the contract say you have to do? And what does an obligation look
like? And how do you act on that obligation? So it could be in the blockchain
world, transferring an NFT to somebody or moving crypto assets. Or one of the
projects we're working on is actually around digital wills, moving your private
key over to another party your next something bad happened to you. It's under a
project called DREC, and we're involved in as well, building an open source
library for this.

So it can initiate many different actions. But typically it's party A owes party
B a certain amount of fiat money or crypto money, and it needs to be paid by
this particular time. So we don't care what the rails are for this, we just
generate the obligations. Again, off-chain or on-chain, the payment can settle
in the standard way using Explorer 2, this thing called a facilitator. We're not
replacing the facilitator. And again, we work with the various different
protocols that are there. I'll move on quickly, just in the interest of time.
We're not trying to do that. So the example I might have time to show quickly is
this Alice and Bob example, where Alice is coming along and buying a report.
Before they buy the report, they choose what type of rights they want. So
effectively, it's like buying a license agreement. And then they sign using
blockchain wallet, and then they pay for the transaction as well. So it's a two-
step process. Agree to the terms and conditions, that generates an obligation,
and then when you want to retrieve the content, if the X402 message back, and
then you pay for the content, unless you pay for it, you won't get it. And then
in this case, let's say Alice is buying it for 10 uses, then we can track the
number of accesses as well. So think of it like the back end for this is really
not trying to maintain this logic itself in its own database.

It's calling our server. It can be called via a command line, or we have an open
source reference implementation that can be called by many different simple
arrest methods. It's not that complicated. And if you figure out what's the
current state for this user for this report, it's like, oh, there's eight
downloads left. Or maybe they're allowed to access it for another three days.
Or, no, they've used their 10, or time's up. you need to go and tell them again
they need to pay. So we demonstrate all of that. I've got a link to the videos.
But all of that comes from the legal agreement itself. It comes from the
contract text. So the lawyers just see this. That's what the user sees in the
terms and conditions once they choose one of these. So once they accept an
agreement, they just see the one variant of this that they're agreeing to.
They're not agreeing to all of those at the same time. So we offer the four
different options in this case. And then once they choose one, there's a payment
obligation that's available. We've defined some extensions, again, for the core
X4 to protocol that says, well, we could extend this and just put in our
obligation ID inside there. And then that gives us a little bit more clarity,
especially for paying in the blockchain world, where we've agreed something.

There's a hash for that. We have an obligation that we use for how much Alice
put the double call. And when Alice uses the pay call, without going through
this entire sequence diagram, then we can start to see when it's signed in the
wallet, we see the memo, which is like a little bit of a note that goes on the
blockchain that says, this transaction was for this particular obligation. So we
have that thread going the whole way through. But it's not revealing anything
more than just the obligation it doesn't say what the contract was for there's
not really leaking any information that's not public we do see the payments
immense between Alice and Bob but that's the nature of the public blockchain I
also work quite a bit in the private blockchain world and zero knowledge proof
based blockchains networks like midnight for example we're able to do this
without the public seeing anything except that the blockchain event happens not
who Alice is not who Bob is and not how much they to create each other. But to
keep it simple, we've implemented it on EVM, on SWE, and on Hedera.

To move back from the blockchain world, back to most of this audience, we have
many different agentic protocols that we support via the same workflow. So the
same contract that you saw there, we have a web interface for that, we've got
REST APIs, we've got an MCP interface, that I did two years ago, so we can have
Claude or whatever your flavour of choice is, talking to the contracting and
generating the contracts if you want that's not really what we do we're not
trying to to be your lawyer you bring the contracts to us in a certain format
but we're not helping you to draft the text of the agreement we do have a bank
of clauses and data models that you can use but we're not the ones that are
trying to do you know replace the lawyers at that level but you bring your own
agreement or assemble it from what we have and then your agents can interact
with MCP or with a to a as well so we haven't as I said the a to a stuff is
experimental it's running as of today but we've been working on it for quite a
while we're just trying to get the balance right on that so various different
agents can go and create these things I won't go through all of the details of
the next bit because there's so many variants of the various different agentic
payment standards that are out there but we're trying in this case it's the
MasterCard one but it's quite recent. So recent Mastercard aren't implementing
it themselves unless they have in the last two weeks.

But we're trying to map these constraints of the contract. There's this thing
called the variable intent. So we can actually map your legal agreement into the
JSON format for you as well. Which is experimental, but that's where we want to
get to. So how do we turn legal agreements into verifiable intents? Then once we
have it on a practical level, we've got a whole range of AI-first tools within
the project. So MCP, as I mentioned, we did that as soon as MCP came out.

Other systems apart from just in your IDE, again I'm a co-founder of Diplo, we
integrated the two of these systems together so you could manage your contract
workflows and people manually signing off on something, maybe it's an inspection
on a building site was one of examples we were looking at when an engineer
actually has to sign off on something and then they can say that was fine and
then that triggers the payment release so all kinds of anything that speaks mcp
or a to a can interact with this we have a set of skills on github so that will
experiment sorry that will accelerate your development with our different types
of projects so we've made it as easy as possible to use our cli tools or again
our a2a or mcp built into our authoring tool which you can show some of you if
you're interested it's just available playground at a core project org we've got
a little AI assistant in here as well these are what our contracts look like so
we've got code at the top we've got the templates in the middle you can see it's
a bit like a list statement inside there and then we've got the data that goes
into that agreement so it's a bit daunting at first but we have our AI assistant
here that will help you to create certain types of contracts. This is just plug
in your own model. We have another project that I've been supervising a student
at UCL to create a benchmark to figure out how different AI models perform on
creating these types of agreements and also executing and generating the code as
well. So very very much AI first. Got a nice little plug-in for VS Code so it'll
do syntax checking and various other things for our data models. We have a whole
range of demos that I probably won't have time to get through today. This is a
very recent one. We had a GSOC project at Google Summer of Code, contributed a
few of them actually. This one only finished up last week. But it's a bit
experimental, and it's trying to get an LLM. Instead of having to write the code
for the various different clauses, we get an LLM to look at the contract and try
and execute based on the current state. So highly experimental, a little bit
prone to hallucinations etc but I think a combination of again well-defined
tools and pieces of code that the LLM can actually call as a working known and
tested piece of code plus its own reasoning is a good balance between that so we
have the LLM executor we've got this web purchase the Alice and Bob example that
I mentioned shows X4 or 2 and then we've got the ancient side of that as well so
there's a video here for it it's a bit more boring it's just a lot of me and a
console But it shows you how an agent can go and make payments using X4 as well
Just as we can kind of visually see here. It's the same demo basically This was
the P2A demo which I have running here locally Time to go through The idea here
is that if an agent wants to interact with another Agent and agree a contract
they can also speak to another agent which manages the contract stack. So you
have a situation where two agents contract with each other using the core
project as the agent in the middle to draft contracts and to actually execute
those contracts and then release payments for each other. Like I said, we've
plugged it into Deepflow. We can have a more visual workflow version of this. So
we have humans and agents working together and signing off on various different
contract flows, defining different contracts, release of milestones and
payments, disputing things etc. And then we've got quite a bit, it's emerging on
the website, the documentation that we're building inside ECHORGE to try and
improve our support for various different agency payment standards that are
coming along.

So too much to talk about here really but that's the whole point is to build our
a piece of code that can be accessed by agents. So that's basically it. I wanted
to keep it short. There's a coffee break coming up and I'm told not to take
questions here. But happy to move outside. I don't think there's a talk directly
after this though. It probably will be in about 10 minutes. So maybe we can take
your questions. I'm told not to do the viewer.

I think we have 10 minutes, so we should be OK. OK. So you mentioned that
microtransactions will be very useful in the age of agentic. Yeah. And I don't
understand why exactly. Now, I would like to hear your vision about this and
specifically about the ultimate use cases for it. What are the things that
agents are going to buy for a fraction of a penny? Well, not every agent is an
expert in every space. So if you have an agent that uses a particular LLM or
tool that can do a better job than a generic agent, then it's got a specialty.

And think of just the context window for an agent and the amount of things an
agent can do. It doesn't make sense for your agent to do everything, and it
might not have the skills to do it. So there are skills marketplaces out there,
many of them. You can find an agent who is the best at doing this particular
task. So it's worthwhile. Think of the tokens that you would burn if yourself
were an agent. You might have a budget. And you realize, well, it's going to be
cheaper for me from whatever your allocation is.

to go and ask an expert agent who does this particularly well and pay them
rather than burn my own tokens or maybe ask multiple agents get their opinion
back and then decide yourself what the best thing to do is so i think it's just
about specialism just as it is with humans it's just the amount that agents will
pay will probably be far less than in the human world at the moment and it And
it could be asking a human. We have seen this where agents paste job
applications for humans to answer, and they get paid.

So yeah, I think that's because we're talking about so many transactions. It's
hard to keep up to date with the projections for the size of the agent economy,
but I think when you overtake the traditional economy within a number of years,
there'd be so many agents performing so many tasks, because the price for each
of those tasks is going to be very small in many cases. Plus, as models get
better, the marginal cost will come down because it'll be easier for other
agents to do the same job for cheaper.

So we'll see the cost take home and come down considerably. Especially when you
factor in local models as well. Doing my agent-to-agent demo was running locally
on Quent, so there's no token cost. There's compute cost. But you don't need
We're the greatest frontier models to do simple things, or the fine-tuned model
if there's a particular task. That's what you're paying for in the specialism.
Sorry, there's a question behind you, and then I don't have to take any more
questions outside.

Okay. Thank you. One thing I did mention was the core project is also an
instrumentation and sister project as well. So we're trying to work on that. And
if anybody's interested in finding out a little bit more, I'm happy to take as
many questions as possible. Just that's all. So thank you. Thank you. Thanks a
lot for the answer. So what you mean is that the main use case would be
specialism? I think so. It's just economies of scale in the sense that if you
want to differentiate yourself as an agent, you need to be able to do something
faster, better, cheaper than an alternative.

So either you have access to data that another agent doesn't have, or you've got
access to to compute or tokens that another agent doesn't have. Cost will only
get you so far, but I think it's custom agents that will be trained on very
specific sets of data. This is where many companies believe they'll still have
the advantage because they have all of the data. So it could be commercial
service from another company who do it in the SaaS world.

Instead of a REST API, they've got an agent-to-agent interface. They will still
go and do whatever specialized task that they will do that your agent would not
be able to do or not be able to do as well or as fast or as cheap. So you'll
have an economy, sure. I guess that it's these cases that it's a network. Right?
That's what that was. in the traditional which is a helping issue of the of the
of the of the of the of the of the of the of the of the of the It's like a black
box.

I didn't show it in the demo there, but you can see all your target positions.
What's the logic? That's just over HTTP. To see the agreement. To see the
agreement should be outside the agreement. That's the whole point. Otherwise the
case may be proved. Yeah, so in my demos there I used the blockchain wallet. The
whole design, that takes care of the cryptographic. I didn't put it on there,
but yeah, the demo is a hash of the agreement to the user's wallet.

So everything is just like signing a new blockchain.
