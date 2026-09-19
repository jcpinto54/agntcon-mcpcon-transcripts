---
title: "Agents Can Pay. Can They Prove It?"
speakers: [Diego Zuluaga]
session_id: d64f761d0ed3fdcf9533ec5c55aa6aab
source: transcript.md
confidence: confirmed
kind: summary
---

# Agents Can Pay. Can They Prove It? — summary

**Diego Zuluaga**

*Friday 18 September 2026, 11:30, G104 + G105 — Agentic Commerce track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Zuluaga argues that the identity layer agents are missing already exists in production wallets, and demos an agent checkout that proves age, membership and payment from credentials held on the shopper's own phone.

## The argument

The recording begins mid-talk. Zuluaga's claim is that what stops agents doing anything consequential is not capability but trust: credential technology has been solved for decades and is used daily by billions of devices, yet nobody has handed it to agents. He says MCP and the emerging commerce protocols now close that gap, and he spends the talk running one credential ceremony — prove your age, prove your membership, pay — inside three agent harnesses off a single MCP server, before turning to the case where the human is not there at all.

## What a digital credential has to be

Zuluaga's definition has three parts. A credential is issuer signed, so a government or another organisation vouches for it; device bound — the toughest part, he says, since software credentials can be replicated millions of times and the point is to prove uniqueness; and it supports selective disclosure, so proving you are over 21 discloses nothing else. Around that sits what he calls the triangle of trust: an issuer, a holder — typically a wallet app on the device — and a verifier; agents, he says, have just become part of that picture.

He puts numbers to the adoption. At the Global Digital Collaboration in Geneva two weeks earlier he was struck by how far Europe has moved ahead of the US, with mobile driving licences used for age verification and even payments; 27 member states are due to have wallets in their populations' pockets by the end of the year, a deadline he expects to slip. Interoperability across them rests on standards — he names ISO, MDoc and SDJOT — and the credentials are in daily use by billions of users and devices, which he stresses is not an experiment. The framework he points developers at is MultiPass, donated by Google to the Linux Foundation and Open Wallet Foundation, cross-platform across Android and iOS.

## The same ceremony in three agent harnesses

The first demo serves an MCP app — a web app rendered inside the agent — as a product picker. A bottle of whiskey in the cart triggers a checkout that hands off to the browser: he pulls a driver's license from his wallet, confirms with biometric verification such as face ID or fingerprint, proves he is over 21, then a loyalty membership that earns a discount, then a digital payment credential held on the device. What is unusual, he says, is that it leans on the device's secure element rather than a Stripe link-style integration.

The second demo starts in goose on the desktop: the checkout runs on the laptop while the proof travels from the phone over Bluetooth via a proximity exchange protocol, so no credential need live on the desktop. The third replaces the MCP app with A2UI, where the harness generates the interface on the fly — the first consumer agent he has seen support it, Gemini's version being behind an enterprise product. The payoff he draws from all three: the same MCP server serves every harness unchanged.

## From human present to no human at all

Everything demoed, Zuluaga notes, is human present: the user guides the flow by hand. He describes a middle tier he sees demand for in finance — human present at purchase, where an agent restructures a stock position and returns only for the critical approval — then the case almost everybody is apprehensive about. For that he is implementing the AP2 mandate chain: an intent mandate you sign up front, which he likens to a power of attorney ("$200 for this pair of shoes by this Friday", with brand and size); a cart mandate in which a merchant signs that it has the product at a price; and a payment mandate the merchant can settle. All three have to match. So far only the payment intent is implemented, in a framework he calls credit agent: a gate plus a swappable storefront, with DACO document types letting developers add credentials such as an electrician's licence.

## In their words

> We can do incredible things with agents, but when it comes to actually doing something consequential, fall short because we still don't trust that layer yet.

> But this problem has been solved for quite some time. It's just that we haven't enabled agents with these technologies.

> We are using the same MCP server across all these agent harnesses, and we don't have to rewrite any part of our app.

> the toughest one is definitely human not present that's the one that most almost everybody is apprehensive because we still don't trust agents

## Takeaways

- Zuluaga's diagnosis is enablement, not technology: issuer-signed, device-bound credentials are used daily by billions of devices, and what is missing is agents that can request them.
- He treats harness-independence as the practical result of the demos — one MCP server drove an in-agent MCP app, a desktop flow in goose and an A2UI interface with no rewriting.
- He argues autonomy needs a signed chain: AP2's intent, cart and payment mandates must match before an agent buys unwatched.
- He says developer experiments are stuck in toy web apps rather than the major harnesses, and calls the problem multidisciplinary: agentic experience, digital credentials and frameworks to accelerate both.

## What the talk leaves open

Zuluaga flags the agent-to-browser-and-back handoff as the weak point of every demo: the capability exists, but the widget is blocked for security reasons inside a sandboxed iframe that would need permission to reach the DC API, and he asks anyone from anthropic or the GPT side to make it seamless. Human-not-present flows, ACP and UCP conformance, and more x402 providers such as coinbase remain roadmap items.
