---
title: "Agents Can Pay. Can They Prove It?"
speakers: [Diego Zuluaga]
day: fri
date: 2026-09-18
start: "11:30"
room: G104 + G105
track: Agentic Commerce
kind: talk
session_id: d64f761d0ed3fdcf9533ec5c55aa6aab
recording: RAI Amsterdam 9.m4a
contributor: jcpinto54
confidence: confirmed
---

# Agents Can Pay. Can They Prove It?

**Diego Zuluaga** — Open Mobile Hub

Diego Zuluaga is Director of Technical Solution Architecture and Ecosystem at
Futurewei Technologies, Huawei's US research subsidiary, and created the
[Open Mobile Hub](https://openmobilehub.org/) SDK, which bridges Android GMS and
non-GMS devices. He previously spent several years at Google leading developer
advocacy for Android, and works on agent payment rails that let agents discover
and pay per request for APIs.

*Friday 18 September 2026, 11:30, G104 + G105 — Agentic Commerce track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

Standards open source, we're part of a subsidiary of Huawei, so we have
deployments and a large scale of technology, of course. And this is one of those
projects that we want to present to you, right? And I work with the Linux
Foundation as well, AIF ambassador, and work with the Open Wallet Foundation.
that is actually a project, some projects that are kind of like in Europe they
are taking off about digital identity. So I'm going to bring a few of those
projects as well.

So this is kind of like the major challenge right now for agents honestly,
right? We can do incredible things with agents, but when it comes to actually
doing something consequential, fall short because we still don't trust that
layer yet. Right? And the problem is that the technology doesn't exist. No.
We've been solving these problems for decades. But when it comes down to prove
human identity to agents and to give them permission to act on our behalf,
that's when they fall short.

Right? And when I'm talking about digital identity, I'm not talking about only
proving your age, proving you're a real member, but we're also talking about
payments and proving prescriptions, proving or providing other types of digital
identity to your agents so they can act on your behalf. But this problem has
been solved for quite some time. It's just that we haven't enabled agents with
these technologies. So just to kind of like level the ground a little bit,
digital identity is kind of like an overloaded term, but it's very well defined
actually in Europe.

In Geneva two weeks ago at the Global Digital Collaboration, I was impressed
honestly by seeing kind of like the adoption that digital credentials are
happening in Europe. The US is way behind, but Europe is more advanced on this.
And I see this with the adoption of mobile driving license for age verification
and even for payments as well. I see some initiatives in some countries adopting
payments with these credentials. So the definition is that it has to be issuer
signed.

So there is an entity that is actually validating and giving it to you like an
organization like the government or some sort of private organization or public
organization. The second one is that it's device bound. So a digital credential,
sometimes we implement it as a software credential, but deep down what we want
to prove with digital credentials is that it's unique, right? how do you prove
that in software it's very difficult because you can replicate digital
credentials millions of times. So how do you prove that it's unique?

And that's this is the toughest part of digital credentials. And the last part
is selective disclosure, right? You don't want to keep more information than you
need to, right? If you are proving your age you just want to tell hey I'm older
than 21 that's it I can I can get alcohol or I can do anything that allows me if
that's my age right so this is coming fast in the Netherlands definitely there
is the Givi an open source a wallet that is coming and there are 20 members 27
member states that by the end of this year should be implementing digital
credentials, right?

Whether that happens or not is probably going to be extended, but at the end of
the year, these countries should have a digital wallet in their pockets for all
their population, right? So that's happening very fast. And to give you a little
bit of more context, the triangle of trust is what enables all this to happen.
So you need an issuer at the top. The issuer is a government or agency that
issues these credentials. You got a holder, which is typically a wallet, like
probably Google wallet, Apple wallet, but any app that can store that credential
on your device.

And then you have a verifier. the party that trusts that credential when a
holder shares that credential. Right? And in the middle, this is kind of like
the meeting on the block, right? Agents became part of the picture, and now
we're talking about how can we enable this layer with this identity. Right?
right? So one of the projects that was donated by Google that we are proud to be
part of and contributed to this project is MultiPass. This project has been
donated to Linux Foundation, Open Wallet Foundation, and it's kind of like the
engine or some components of this are part of Google Wallet. But the main
benefit of this is that it's cross-platform. You can run it on Android, iOS, and
more platforms to come.

And the goal is to enable with a framework to developers to build credentials
based on the standards. But these standards have been already defined. It's the
ISO, MDoc, SDJOT. This probably sounds like a lot of jargon if you guys are not
familiar with this. But these are the standards that enable interoperability
across all these countries. So this is the main challenge when we're talking
about 27 states, member states that need to talk with different credentials,
different apps, but what holds the fabric together is the standards, right? So I
think there is some beauty in that and there is also standards for presenting
the startups for storing those credentials, right? So right now we talking about
billions. This is nothing like an experiment. This is on a daily basis these
credentials are being used by billions of users, billions of devices, and we're
talking about many of these type of these documents and it's going to expand
even more so. Now the challenge right now is that most of the experiments that
I've seen in the community developer community has been experimenting is that
most of the experiments happen with a toy apps mainly kind of like people
experimenting with web apps creating their own agents but we don't see these
deployed in the wild actually using clots, GPT, Gemini, or any other major
hardness, agent hardness.

But this is available right now via MCP, right? So the standards that hold this
together already exist and the new protocols that enable agent-in-commerce on
settlement are actually emerging and this is what it makes possible right now.
now. So now we're I'm talking about MCB of course, Universal Commerce Protocol,
Agent Commerce Protocol, AP2, Digital Payments Credentials and X4024 stable
coins and crypto right? But again the benefit of this is that now the standards
for on-device storing these credentials already exist for the major platforms.
Now the challenge is why don't we see these more in the wild? I think there is
this is a multidisciplinary challenge that requires folks from with experience
on the agentic side, on the digital credentials space as well and and then we
need frameworks that help to accelerate this.

So we believe that frameworks like credit agent, which are actually in their
infancy, can enable developers to start building these experiences and bringing
these experiences to the enterprise or to consumers. So I'm gonna give you like
a few demos of these with actual agents. So the first one is Plot. So in this
case, let me just amplify this a little bit. In this case, we have with Cloud,
I'm using an MCP app to retrieve the shopping cart, which is an MCP app that I
can serve via MCP connector in Cloud.

In this case, I'm able to display the shopping, the product picker. An MCP app,
if you're already familiar, it's pretty much a web app that you can serve inside
an agent, right? It's a web app that you can serve. And in this case, I'm able
to do the checkout and I'm using from the browser, handing all this to the
browser to be able to verify my identity because I'm including a bottle of
whiskey and I'm able, I'm pulling my credentials from my wallet. In this case,
I'm pulling, I'm using multi bus and I'm selecting the driver's license that I
have stored on my device. So in this case, I'm picking Erica's, the credential
and I'm able to do biometric the credential and I'm able to do biometric
verification like face ID and fingerprint and I'm able to verify my age the next
step is verifying membership so I'm able to with my photo ID I'm able to verify
with my loyalty ID I'm able that I'm part of that club and I'm getting a
discount for the amount of what I'm paying. Again this requires a biometric
verification, a PACE ID and the last is the payment. So in this case I'm using
cross device verification, cross device but because I have a wallet store on my
device I'm able to keep the digital payment credential to store on my device and
I'm able to make the payment. Alright, so now that I have shared all my
credentials I should be able to proceed and complete my order and that should be
reflected in the agent and the agent should be able to ship these products.
Alright, so very simple nothing fancy in terms of what we are using here except
that we are leveraging the ePell credentials, we are leveraging the actual
secure element on device to provide that credential which is something that is
not very common. Most of the workflows that we see implementing this implement
probably Stripe link or other type of payments but leveraging your digital
credentials it's something that is happening very fast and in another aspect and
in charge of PT is the similar experience I'm not going to showcase this but the
next one is goose goose is slightly different with goose we did it because we
are starting the experience from the desktop right in the desktop goose cancer
and CP apps which is pretty cool if you haven't tried definitely I encourage you
to try it you're able to serve the checkout but in this case the checkout
workflow happens from my laptop and I'm verifying my age but in this case I'm
using the digital credential API on my browser and using final PXP which is a
proximity exchange protocol to transfer my proof from my device via Bluetooth to
the browser. So this is a very cool because right now I no longer need to have
my credentials stored on my desktop. I'm leveraging the same credentials that I
have on my device. So I'm able to do the same thing, the same ceremony for
verifying my age, verifying my membership, and verifying the payment. Right? So
this This is the same ceremony that you saw before.

Now all of these experiences are based on MCP apps. These experience with Open
UN from WorkSwarm is pretty cool too because now we are instead of leveraging
the MCP app, which is the standard way to display the app, I'm using A2UI. So in
this case, the generation of the UI happens on the fly and it's done by the
hardware, the agent hardware. In this case, this is the first agent that I see
that is supporting for any consumer the A2 UI.

I know that Gemini is coming up, but I believe it's behind of an enterprise
product, so it's very difficult to test it. If you try it right now, you have to
try it on Spark and it will display a word of text. So it's not as user-friendly
as a work swap. So in this case, I'm going through the same thing. It's
displaying the product catalog. I'm able to add the product to the shopping
cart. And after that, I'm able to actually do the same checkout that I did with
the others.

I'm not going to go through the entire ceremony, but the benefit of this is that
We are using the same MCP server across all these agent harnesses, and we don't
have to rewrite any part of our app. All right. Now, this is human present,
right? So far what I've been showing you is human present. And the part that is
more tricky is human not present. How do you give authority to an agent to
implement these flows in an autonomous manner, right?

The thing is for now what we implemented is human presence and the architecture
is pretty much You have a surface agent Google Gemini, ChagiPT, OpenUN, all
these agent harnesses used as a connector and And in the cloud host you have an
MCPS storefront that is completely swappable and you have an agent gateway that
allows access to this credential. And on the client side is where you have the
browser, you have the wallet which can be a physical wallet like an app that you
store on your device or it can be a web wallet as well. The two components of a
credit agent is a gate and a storefront.

As I mentioned the storefront is only provided for developers so they can
actually integrate this faster but any storefront can be implemented. The credit
agent doesn't tie it up or require that it has to be the credit agent it only
needs to mount the store app on top of the gate and the gate does the rest of
the work implementing setting up a credential is pretty straightforward in this
case we are leveraging the free credentials for the pro that i showed you before
we have age over 21 we have member chip discounted of 10 and the payment in usd
right so in if you need to add more credentials on top of credit agent, you can
add, like for instance, professional licenses, gardener, electrician, you can
add more custom licenses without having to create your new document types. In
this case, we leverage DACO, which is the standard to define what type of
credentials you need to access on your device. So if you have an electrician
type of credential, you you will need a document type that is for electrician or
for a gardener you will have another document type for it and then you just need
to plug that in into your requirements of your gate. Now as I mentioned before
the gate the the flow that we have implemented so far is human present which is
pretty much the the user guides the flow hand by hand, similar to what we do
shopping nowadays.

The next one is that we are tackling and I see a lot in the financial industry
is human presence at the purchase. So for instance if you are planning to let's
say buy and sell stocks right, if you talk to club or or any harness agent you
can say hey sell these stocks and buy with this the cash, buy these other stocks
you don't want to be doing that operation by hand you can actually tell the
agent do everything for you and only come back to you at the moment of it is
more critical right when you need to approve the operation right so this is
human present at purchase and the toughest one is definitely human not present
that's the one that most almost everybody is apprehensive because we still don't
trust agents right and this is the part that we are actually implementing as
part of credit agent widgets so actually instead of getting that wall of text
that agents return when you are dealing with when you're interacting with our
agent you get a nice widget that you are to visualize and understand what the
agent is asking for.

So the AP2 chains that we implement the agent payment protocol right now it's we
have implemented the payment intent. The payment intent is when you confirm that
or the agent confirms that hey I'm ready to make the purchase so actually go
ahead and pay for these items but the ones that AP2 brings you to the agents
it's an intent, the intent and the card as well right those type of of intent
the cart intent the first one is the one that you sign up so you for instance
you say hey I want to pay a $200 for this pair of shoes by this Friday and this
is the brand and this is the size this is something that you sign and it's kind
of like a power of attorney that you can give to your agent you're giving to an
agent like a power of attorney that you are willing to pay this amount for this
product right with this this is not that you are making the purchase right now
but this is kind of like a signed contract that you are allowing the agent to
purchase for this the second part is with this agent can act autonomously and go
to these merchants and say hey I I have someone who is interested in purchasing
this product do you have this product I can deal with you perhaps in for 150 in
the merchants signs that contract and that's the card mandate right so the card
mandate is what tells the agent yes I have the product and I'm willing to sell
this product for this amount right and last is the payment Monday once the agent
finds a merchant that can supply this product they are able to provide a payment
Monday based on that power of a attorney that tells the merchant I got and I
have this payment and you can cash and settle this payment mandate.

So the thing is that the three mandates need to match and this is how APT is
implemented. This is in the making. This is a component that we are implementing
in credit agent. It's coming soon and it's going to be part of a multi-pass, the
SDK that I mentioned before along with credit agent. Now one of the challenges
that we experienced with a Clutch, a GPT and other agent harnesses is that we're
still you saw that handoff right that you have to go from the agent to the
browser and from the browser to the agent right. Right now this is very
challenging it's less than ideal and I mean if there is anyone from anthropic or
charge EPT definitely this is worth looking into because implementing this flow
in a more seamless manner without having to go from having this handle will make
the user experience much better right so these are an area that we are working
with the agent harnesses to try to encourage a very user experience the The
capabilities already exist.

You saw that the widget is able to be displayed, but the challenge is that right
now it is blocked because of security reasons, of course. It is in an iframe, in
a sandbox iframe that needs to be enabled to do this kind of access to the DC
API. Now, in terms of the roadmap, is something that we are implementing 728 and
728 we are bringing a implementing a Marty are instead of calling the the status
of the of the order we are now using a Marty are and then we are going to
implement more the human not present flows as part of credit agent and we are
also incorporating a more pluggable capability so incorporating ACP UCP right
now we implemented the storefront as we have our own implementation but we want
to be compliant with ACP and UCP and in terms of X402 we want to bring actually
more providers like coinbase and other providers with that right now you can
test it yourself. This is the URL, these are the slides, these are this is the
repo. Being able to try it out is just as easy as adding a connector into your
agent and ask for hey I want to ask to sell to buy whiskey and then your age it
fires and you can test it on your own digital credential wallet right if you
have a wallet from uh that implements these standards should be able to use it
so please please try it break it i'll be around if you if you have an
opportunity to try it out i'll be happy and thank you so much with that
