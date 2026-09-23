---
title: "Gating High-Risk Agentic Actions at the Relying Party With Exogenous (Out-of-Band) Inputs"
speakers: [Andrew Bud]
day: fri
date: 2026-09-18
start: "15:00"
room: Auditorium
track: Reliable Agents
kind: talk
session_id: f2b8e059699ca51e4395c0f27a521a5c
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=21536s
contributor: jcpinto54
---

# Gating High-Risk Agentic Actions at the Relying Party With Exogenous (Out-of-Band) Inputs

**Andrew Bud** — iProov

Andrew Bud CBE is the founder and CEO of [iProov](https://www.iproov.com/), a London-based biometric face-verification company he founded in 2011, whose technology is used by organisations including the US Department of Homeland Security, the UK Home Office, and the NHS to confirm a genuine human is present online. Trained as an engineer and a Fellow of the Royal Academy of Engineering, he previously founded mBlox, a large mobile messaging and payments provider, after early-career work in nuclear fusion research and the mobile communications industry; he was made CBE in 2020 for services to export.

*Friday 18 September 2026, 15:00, Auditorium — Reliable Agents track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 5:58:56](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=21536s)), not an attendee's recording.

## Transcript

Well, good afternoon, ladies and gentlemen, and thank you for coming to one of
the most interesting sessions of this whole conference. I'm afraid you're going
to have to forgive me for staying behind this podium most of the time because I
want to make sure that I render with great precision the substance of today's
presentation. I'm Andrew Bud. I'm founder and CEO of iProov, a 200-person
company based in London. We are the world's leading provider of proof of human
presence, biometric liveness, and of security platforms for cyber, agentic, and
identity solutions worldwide, which make use of these capabilities.

To give you a sense of scale, we verify about one and a half million people
every day. Now, what I'm about to present is the work of our research team
who've been focused on agentic AI for considerably more than a year now. We've
invested in this because even the smartest agents will never have faces. So the
core of the challenge that we're addressing is the well-known difference between
identity authentication and task authorization viewed from the perspective not
of the agent but of the relying party.

And just to be clear, when I say relying party, a relying party is a provider of
services or data which the agent is trying to access. Now the industry has spent
most of the year thinking and discussing about how agents may carry identities
and how permissions might rest with these identities. And it's pretty widely
acknowledged that agents' freedom of action must be even more tightly bounded to
a task by mandates and guardrails. We've heard a lot at this conference about
ways to accomplish that. And it's also broadly understood that at some point a
human must be in the loop.

But frankly, the challenges for a relying party, rather than an IAM or other
centralized control, the challenge for the relying party of inserting a human
into the loop, we think until now have been neglected. And we think that
decentralizing control to the relying party's surface may be unavoidable in some
architectures and have important benefits from a scalability and security
standpoint in others. And therefore, HAPS is an experimental specification for
relying parties to enforce their own rules at the action boundary by verifying
evidence that a nominated human being approved a specific action.

And we believe that is an important new contribution. Now, a protagonist of this
challenge is the famous confused deputy. Now, this occurs when a legitimate
agent with a legitimate identity and a legitimate authorization to use a tool,
put bluntly, goes rogue and tries to do something unintended, perhaps even
damaging. It can do this due to an excess of zeal, too much commitment to its
objective. And we've seen recent examples of exactly that, of course.

Or it can do so because it's been tampered with by the injection of a malign
prompt. Either way, the RP, the relying party, is faced with a legitimate,
legitimately authorised agent trying to do something not just unorthodox, but
beyond the will of its owner. and that owner will ultimately be held
accountable. Let me be very clear here. With HAPS, we are addressing a problem
that has not yet been fully resolved. There is an enormous amount of activity
going on here at the AAIF, of which iProov was an early member, in OpenID, in
FIDO and elsewhere.

And each of the current standards initiatives addresses some part of the
challenge. Now, I won't torture you by reading you this slide. I'm sure many of
you have been reading for many years all by yourselves, and you will be familiar
with much of it. But I will say that they provide models and protocols for
describing the actions the agent seeks to undertake at the RP. They define
protocols and structures for requesting additional information or authorization.

They provide ways of defining policies and of the mandates for matching against
them. HAPS builds on all of this by defining what must happen when a human has
to enter the loop. And that's what we're proposing with HAPS. Let's get into its
substance. Rule one of HAPS, the control must sit outside the agent. Let's
assume that the agent is part of some framework, that it's created and is
managed within that framework, whether it's Microsoft Agent Framework, Gemini
Enterprise Agent Platform, or something else.

Many of these have policy rules and controls on their own agents. But in many
cases, the agent may be seeking rights on a relying party, which is not part of
such a managed estate, which is external to it. Of course, the relying party
could decide to trust the controls of the agent framework. but in general that
is hope, not security. The RP cannot trust the agent, and therefore control must
sit outside the agent and its effective control structures.

Rule two of HAPS, the action must be held by the RP until approval which the RP
considers satisfactory is received. The system must fail safe. It must never be
bullied or enticed into making a fatal mistake. Slide six. So my second point,
canonical and out of band. The RP must have clear, auditable, and stable
enforcement rules. And the decision to request human authorization must
originate in those rules. They must not arise from anywhere or anything that
this agent or any other external agent could influence.

The RP enforcement gate must have integrity totally outside the agent's control
and within the RP's trusted computing boundary. So assessment of an agent
mandate must be firewalled, and any negotiations between the agent and the
enforcement gate over what is or is not approved without authorization must be
canonical and deterministic. Otherwise, we risk smooth-talking agents conning
the enforcement gate to let it through just this once.

Of huge importance is the requirement that the approval interaction must take
place entirely outside the agent's effective control. We can immediately see
what will happen if this is not respected. The agent will mount a man-in-the-
middle attack on the authorisation process. We must assume that agents will
subvert any process they can, and if they have any effective control over the
authorization process, it becomes quite worthless.

That's not to say that the authorization communications must always be out of
band. if the authorization consists of a signed transaction-linked certificate,
well, that, of course, can be passed to the relying party through the agent
because the agent can't exert any effective control over that signed
authorization content. And finally, it is, of course, essential that the
approver is presented with information about what is being asked for and
performs an explicit act of approval.

The need for informed consent here is vital. just as it is throughout the
payments industry. And there are many parallels with payments. It's essential
that the approver can see the description of the proposed action without any
risk of agent concealment or tampering. And it's important that the explicit
consent is tied to that specific action. Both of these underpin the payment
industry. Both of these will underpin the agentic industry.

Now, HAPS isn't technology bound, and it doesn't require any specific
authentication proof. It's the relying party's policy that determines the level
of assurance required, and it's the relying party's policy that can demand a
factor that the agent cannot spoof. In practice, there are actually precious few
factors that a determined agent cannot attempt to subvert. Physically secure
hardware-based tokens like device-bound passkeys are one solution.

And liveness-assured off-device biometric verification is another hardware-
independent means because, as I said at the outset, even the smartest agent will
never have a genuine face. What's important is that the RP must have the means
to demand an agent-resistant proof and to require the evidence to support the
claim of proof. That evidence may either be delivered within the authorization
or be already confirmed by support in an existing trust framework.

But trust us assurances from the agent framework are clearly not going to
suffice. As I said earlier, just as in the payments industry, it's essential
that the proof of human consent is cryptographically bound to the action that
was approved. So, once the action is held by the RP, passed securely to a human
for informed consent, and then approved, the outcome must be a cryptographically
verifiable record of approval created by the independent approval process and
legible and trustable by the RP.

That requires an interoperability standard, and HAPS begins to specify one. It
enables the relying party to verify the evidence of approval against its own
policy. And crucially, it also provides an audit trail underwritten by the human
approval process, the human approval mechanism, which will support audit and
subsequent dispute resolution. Now, I just want to be clear here. There are
actually two ways that an agent can be authorized to undertake an action at a
relying party.

In one model, the agent is issued with a mandate which the relying party gateway
can examine, compare with its policy, and determine that it's fine to proceed
with. It's also quite likely that along with the mandate, the agent will be
presenting the RP explicitly or implicitly with evidence of its identity and
that of its owner. After all, what an agent is permitted to do will often be
bound to who owns it. That identity information may well include proofs of
identity backed by proofs of genuine human presence.

In fact, personally, I'm absolutely convinced of that. But that's not what HAPS
addresses now. The current version of HAPS solely addresses the just-in-time
approval requested and given after an agent presents itself and its mandate, if
it has one, to the RP, and the RP has decided to block it pending an action-
specific authorization. HAPS today defines how that action-specific
authorization must be procured and secured. And that's what we're presenting for
the first time here today.

Now, at this point, I'd like to give you a demonstration of how HAPS works in
practice. This demo is running on a proprietary commercial solution, which
itself is not being open sourced, but it does serve to illustrate how developers
might build their own implementation of HAPS. And for clarity, the demo is using
a chat line interface rather than an agent. Obviously, a headless agent would be
pretty much impossible to demo visibly here in a comprehensible way, but this
interaction model is very similar, even if it is delivered through this
different channel.

Now, for this to be secure, the approval provider must authenticate the RP's
challenge and bind the approval to that action. Just opening a link outside the
chat is not sufficient by itself. As you can see, the request is to create a new
entry in Salesforce. This sounds really innocuous. Interesting. This is one of
those things that happens, isn't it? So, of course, what happens is that the
demo jams at this particular point. Oh, Thank you. Right. Sorry about this. So
as you can see, the request is to create a new entry in Salesforce. This sounds
really innocuous, but in many environments it's a very dangerous and potentially
destructive thing to do. If it's an unconsented contact, they might get
illegally spammed, or the creation of a fictitious contact might provide a way
to exfiltrate data or lead to some privileged customer-facing access. The agent
might have invented JoDo at Globex for any number of nefarious reasons. So the
enterprise needs to protect itself independently of the agent framework. So as
we can see, whilst the AI has the tool to access Salesforce, the RP control
point for Salesforce blocks and holds the request in compliance with HAPS. It
requires the AI to undertake an action alerting the user, in this case with an
in-chat message, that authorization is required, and in this demo it provides an
off-agent, off-chat link to do so.

Now in this case, the approval is going to be secured by taking the user to an
iProov controlled authorization panel, which discloses the nature of the
request. Once the user has had a chance to review the request, they click to
start the authorization authentication, which used iProov's patented Flashmark
technology that uses the device screen to illuminate the user's face with that
unpredictable sequence of colors. And while the video was being streamed to
iProov servers, the reflections of the illumination from their face and its
interactions with the context and environment were being analyzed to confirm
that this was indeed a live skin-covered human face-shaped object presented
right now.

Once approved, the user was returned to the AI chat, an artifact of which here
was that the user had to confirm successful approval. At that point, as you saw,
Claude tried again, and because the RP gateway conditions were then satisfied,
it was successful in its request. So to summarize the new HAPS workflow
specification, the agent attempts to execute an action at an RP service point,
which blocks and holds the action, while issuing a HAPS challenge coding the
action intent.

That HAPS challenge is sent out of band or in a tunnel to the presence provider,
in this case iProov, who displays the signing view to the user completely out of
reach of the agent. The human approves the action and authenticates their
genuine human presence according to the coded requirements of the RP. Consequent
upon this authorization and authentication step, the presence provider issues
its consent credential, which is passed back to the relying party, and the RP
inspects and verifies that credential, acts upon it to permit execution of the
specific approved action, subject, obviously, to its policy.

The heart of this workflow is the request for the credential and its response,
And HAPS proposes an open specification for this contract. As I said earlier,
there is an enormous amount of activity happening in this space. And one of the
most relevant has been the issuance by a group of companies of a draft
specification called x401. As an engineer old enough to have been involved with
the X.400 electronic messaging standard in the 1990s, I do wonder why they gave
it that name, but let's not be distracted by that.

x401 is a very useful specification covering many of the interactions that I've
described here. Essentially, it specifies how the agent, RP gateways, and other
entities will communicate exchanging constructs like service requests,
credential demands, and proof responses. But there is an important gap that we
don't believe is covered by x401 or any other existing agent identity delegation
and credential protocol. A relying party defined protocol for obtaining
independently mediated, action-bound evidence of just-in-time human approval
from the human approval and presence provider. As we've seen, the human approval
and presence provider is a crucial third party in this relationship, and HAPS
defines the semantics and security requirements to bring it fully into the total
interaction.

So we believe that these two specifications are absolutely complementary. We
think they support each other and we think it's natural for solutions to combine
them. So to conclude, today I presented to you HAPS, an experimental open
specification for binding evidence of fresh human approval to a specific action
that an agent is asking a relying party to perform, perhaps gives the relying
party a way to define the approval and a way to define the presence assurance it
requires, to hold the action until those requirements are met, and to verify a
cryptographically bound consent credential issued by an approval provider that
it trusts.

The resulting evidence is action-specific, auditable, and cryptographically
verifiable. Its strength depends on the integrity of the relying party
enforcement point, on the strength and integrity of the approval experience, on
the strength and integrity of the human presence factor, its provider and its
keys, and the relying party's trust policy. HAPS does not replace identity,
delegation, or agent authorization protocols. It addresses a narrower problem.

What should happen when the relying party decides that this particular action
requires fresh human approval? We're releasing HAPS as an experimental open
specification, and we're inviting implementations, adversarial review, and
contributions so that together we can determine whether this can become a
robust, interoperable foundation for human approval in an agentic world in which
even the smartest agents, even the next but one generation of agentic AI will
never have a face.

Thank you very much.
