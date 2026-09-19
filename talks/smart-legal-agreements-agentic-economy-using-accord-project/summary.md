---
title: "Smart Legal Agreements for the Agentic Economy Using Accord Project"
speakers: [Niall Roche]
session_id: 66dee63adbe497d36fcfe33e5f9c2847
source: transcript.md
confidence: confirmed
kind: summary
---

# Smart Legal Agreements for the Agentic Economy Using Accord Project — summary

**Niall Roche**

*Thursday 17 September 2026, 15:45, G104 + G105 — Interop & Standards track*

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.

## In one line

Roche argues that the agentic payment standards now appearing settle payments without recording what the payment was for, and shows how the Accord Project turns a signed legal agreement into the data and the evidence trail behind an agent's payment.

## The argument

The recording begins mid-talk, but the thesis recurs. Every agentic payment standard Roche has surveyed — AP2 first among them, with "probably a new one every week" since — is good at settling and verifying payments, and silent on what the payment was for. The missing pieces, he says, are proof of terms and proof of consent: did the agent show it knew what it was getting into, did it ask a human for approval, did it sign. Accord's job is to hold that evidence trail and make the contract text the source of the price, the obligations and the disputes.

## The legal layer the payment standards skip

Roche tracks these standards across the traditional-finance AI world and the blockchain world, where he thinks things move faster: agents with wallets, spend limits, identity and reputation scores built from two agents rating each other after a transaction. A reputation score, he argues, needs an evidence trail underneath — "did the agent deliver, maybe delivered 80% of what it was supposed to deliver" — and he expects many disputes, costly in the real world and lucrative for lawyers. He contrasts a deterministic on-chain smart contract, where a buggy clause executes anyway; here, he says, most agreements need not run on-chain, and a dispute outcome becomes a new contract state the parties press play from.

## LCP as the storefront, Accord as the engine

The entry point is the Legal Context Protocol, recent enough that Roche asks who in the room has heard of it, and tied, he says, to a partnership with the American Arbitration Association. LCP is, in his description, a simple JSON file telling a visiting agent where the terms and conditions are and giving their hash; it does not yet define what the terms look like. That gap is where he places Accord, which represents the terms themselves and offers variants — licence the content for one access, for ten accesses, for a month, with or without AI training rights — to a consumer that may be human or agent. The agent signs on your behalf, a hash is generated, and what it agreed to is cryptographically pinned.

## Everything comes from the contract text

The demo Roche spends most time on uses x402: the HTTP payment-required status he says sat unused in the headers from Tim Berners-Lee until Coinbase revived it, generic enough to settle by bank account, by Stripe or on-chain. His team added an extension layer tying payment to agreement — the obligation ID travels inside the x402 extension, and the wallet memo records which obligation was paid without revealing what the contract was for. The price is not a row in a database: a discount negotiated into the signed contract is what gets charged. The contract carries logic too, his example being a late-delivery penalty computed from how late delivery was, the value of the goods, a cap and force majeure. In the Alice and Bob demo, Alice picks a licence variant, signs with a blockchain wallet, pays, and the server answers how many of her ten downloads remain or whether her time is up.

## MCP, agent-to-agent, and the AI-first tooling

The same contract is reachable, Roche says, through a web interface, REST APIs, a CLI, an MCP interface built as soon as MCP appeared, and an agent-to-agent path, experimental but running as of that day, in which two agents contract through Accord in the middle. He is explicit about scope: there is a bank of clauses and data models, but you bring your own agreement; the project is not trying to draft it. Around it he lists skills on GitHub, a VS Code plug-in for syntax checking, a playground with an AI assistant you plug your own model into, a UCL student's benchmark on how models create and execute these agreements, and a Google Summer of Code project finished the week before in which an LLM executes clauses from the contract's current state instead of hand-written code.

## In their words

> They're all very good at settling payments and verifying that that happened, but not necessarily what the payment was for.

> So really, LCP is just the discovery mechanism. Think of it like the storefront, Accord is the engine.

> Well this is like treating your contract like an API. The data comes from the contract.

> It doesn't make sense for your agent to do everything, and it might not have the skills to do it.

## Takeaways

- Roche's complaint is that agentic payment standards prove a payment happened but not what it was for; what he wants recorded instead is proof of terms and proof of consent, including whether the agent asked a human before signing.
- He splits the stack: LCP is discovery, where an agent finds the terms and their hash; Accord executes afterwards, gathering signatures, trigger history and obligations as the single source of truth for evidence.
- Treating the contract as the data source is the practical claim: the price charged over x402, the late penalty and its cap come from the signed text, not the API backend's database.
- Asked why microtransactions matter, he answers with specialism — an agent has a limited context window and a budget, so paying an expert agent, or a human, can beat burning your own tokens.

## What the talk leaves open

Roche flags pieces as unfinished: LCP's dispute work is "still very early days", the agent-to-agent interface and the mapping of a legal agreement into a recent Mastercard standard's JSON are experimental, and the LLM clause executor is "a little bit prone to hallucinations", which he thinks needs pairing with tested code the model can call.
