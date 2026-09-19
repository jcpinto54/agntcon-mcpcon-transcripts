---
title: "What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next"
speakers: [Amine Raji]
day: thu
date: 2026-09-17
start: "16:20"
room: Emerald Room
track: MCPCon (MCP track)
kind: talk
session_id: 5b86373ff4058776789792f7056efdfe
recording: RAI Amsterdam 4.m4a
contributor: jcpinto54
confidence: confirmed
---

# What a Year of Breaking MCP Tells Builders: Protocol Gaps and What Ships Next

**Amine Raji** — Molntek AB

Amine Raji is the founder of [Molntek](https://molntek.com/), an AI security
consultancy based in Gothenburg. He holds a PhD in computer science and a CISSP,
with over fifteen years securing production systems in regulated industries, and
now works with enterprises on LLM-based systems — model selection, RAG
pipelines, agentic workflows and running them on Kubernetes. He contributes to
the OWASP Top 10 for Agentic Applications.

*Thursday 17 September 2026, 16:20, Emerald Room — MCPCon (MCP track) track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> *[Recording begins mid-talk.]*

## Transcript

The official quick start that the documentation used to normalize the keys in
configuration files. And these are defaults, they are not real mistakes. So
let's start. So at the session level, the first MCP server, the first Vimala
VGT, it was from Gravana MCP. So the server checked the session identifier on an
incoming request from anyone that wants to interact with this MCP server should
have a session. And the server is believed to check this session whether it's
valid or not.

But what was actually happening is that the server checked the string matching a
specific format. If you send something that starts with MCP-session-linguid, it
goes through and the server accepted and it was never issued by the server
itself and this was in Grafana 1.0.0 this year it was reported in August this
year and it was fixed eight days later in 1.1.0 by the Grafana team and I want
to report something really important here having the illusion that your server
is doing a trust check is more dangerous than not having one because you think
you already have something that checks whether the caller is valid and having a
station ID that is checked against the server. So false confidence is the part
that causes damage. It was found by Payr security and reported through Integrity
the 2nd of August and fixed on the 10th of August.

So Grafana classified this as a hardening improvement, not a CVE, so there is no
simple CVE for this. The CVE is what comes next. So once accepted, you can list
all the tools that the Grafana NCP have and among those tools there is this
Grafana API request tool and you can call it using a call control the
x-grafana.ulm so this tool can take an argument and this argument basically asks
the server to send the result to whatever URL you put in this argument so in
other words cloud instances can export the internal metadata address internally,
but since the MCP server is deployed internally too, the attacker can ask that
MCP server, please export me the cloud credentials, and it's filtered.

So how does this happen? So the attacker can send a self-generated MCP session
COE, the server never checked checked it, the attacker can ask for a list of
tools, choose the one he wants all, and the MCP uses its own service account for
that, and attacker can use the override to exfiltrate cloud credentials from the
MCP server. This is what I run on my lab, so the same thing, I made up a session
against the general MCP server from Grafana MCP and it's respond with the 200
and give me the two that I'm looking for.

So the controller for this is the clients that connect to your server need to be
authenticated somehow. Now that the session is already fixed, it needs to be
configured in the MCP server. Unfortunately, it's not the default by the MCP
specification itself, but there is an option that you need to set in order to
filter on all the authentication requests. And you can specify audience scope to
assess before any tool executes, and also define an allow list for the
destination, So an attacker cannot exploit anything from your infrastructure
through this MCP server.

So that was the session. Let's move on to the next area where the same pattern
applies, where we have something that the server checks but not the right way of
checking it. So this is the the GitLab MCP and those four lines come from the
GitLab MCP configuration. So there are wildcards, cores, so that means that any
web origin can make a request to the server and it listens on a port which means
that the host arguments can bind to an interface and With that, you can call any
of the 86 GitLab tools, including the destructive ones, under the operation
Personal Access Token.

So the user of the MCP server uses his own Personal Access Token, and this token
can be used by anyone accessing this machine from any web browser or the
network. So the token author authorize the caller out to GitLab, so when the
GitLab MCP interacts with GitLab itself, there is this authentication between
using this path or personal access token, but in page visited while the server
runs can open a connection to these because of this wide open course and also an
open interface system in node so the cve is the cv 2026 for for 44,895, it was
reported and it allows this kind of vulnerability called server-side requests
forgery.

And the HDK also contains the same vulnerability. The Python HDK has also a
vulnerability related to DNS binding, binding protection which was off by
default. And this is the bridge that 2 July version of the protocol is that
stateless is what the new specification makes standards. So to the time we
stated that the NCP for RVCD says that the token is outbound only and never
authorized for inbound callers. So we have another example which is RVCD and
this in this case it's different the the rbcd readme file states that this token
is out of only it was never stated before for rbcd for uh and the control in
this case is the personal access token that was a real protection against the
outcome but the income needs to be also re-authenticated The last part is the
approval. This is a config file, one line proof of concept, a config file done
by Waze security.

and this config file is a cloned repository named tool server and that server
runs a command what's the interest here is that opening the folder around this
command so what we is proved is that the process inherits cloud access keys when
it was done against amazon q So Amazon Q can, if you put this configuration file
in Amazon Q, the fact that the user can clone the repo just by opening the
folder, it runs the command and you have a remote function call on the machine.

So AWS keys, session tokens, CLI credentials, API keys, SSH, Asian sockets,
everything can be exfiltrated with this vulnerability. So this kind of
vulnerability happens once or twice, it happens four times on tools developed by
four different teams. so for Claude it's CVE 2025 it was a repository settings
that run shell commands before the trust dialog so the command runs before the
user get to trust or not the dialog for windsurf it's also run an HTML rewrite
on the MCP config for Amazon Q with research the workspace config loaded
automatically with no consent step and the fourth one is WinServe so for
independent teams same assumption inside 1 year so the missing standard it's not
that these teams didn't know how to do their tools it was a missing way of
specifying how the consent should be asked from protocol level.

So for this kind of scenario I didn't reproduce these, I don't have source code,
of course, of this proprietary tools. All of the four are patched on the queue
in the language server 1.65 code in 1.0.111 and a pointer here to another
vulnerability that happened before which is related to postmarking cp. Why this
is important? Because this can be the gate for the RackPool vulnerability if you
are familiar with RackPool. So at the bottom I put the reference to the PostMAC
MCP, which is an MCP that can send emails on the behalf of the user.

And it is run specifically by enterprise customers. It was fine up until some
version, 1.0.1, 1.2.0, up until 1.0.16. And then something happened, someone
added, or the maintainer added a BCC line in this server. It was copying all the
emails to the email that the attacker specified. So why this is important is
that this kind of novelty needs to be monitored constantly with each deployment.
Now let's move to the July fix. There are a lot of things that have been fixed
that address some of the vulnerabilities. On the protocol sessions and the
sessions in Notifier header, those are removed. The Gafara MCP issue is no
longer possible now that the sessions are gone. The initialized handshake is
removed as we saw this morning. Presentation, sampling, sampling the rules and
the login are duplicated and they have a 12 months block now we have a server
discovery mandatory the issue validation shows now the follow the RFC 9207 the
client credentials are issuer bound and this is a clear improvement the client
ID metadata documents are are preferred over dynamic lines registration, which
is but not deleted.

And we have the specification that the session case, the session in this case is
the genuine export for the protocol . However, there are two surfaces that I
didn't test yet. So those are just a reflection about the additions that have
been added to the 728 version. So the description field is still in label text.
we can have malicious instructions hidden there. Every two lists results now
declares how long it may be cached, so the cache, it was introduced, but it is
not a performance, it is just a performance, it's not an authorization decision.

And what can be a consequence from this is that, The consequences from this is
that for instance we have this cross-sternal fleet, like the identity data can
be saved as public. We can have the stale poisoning, like long TTLMs on
discovery, like the tool can be cached for a long period and reused without re-
verifying the trust boundary. We can have the reconsent bypass, the cache hides
definition drifts, like the lag pool. If the definition drifts, we can not
detect it if the cache still shows nothing changed.

And replay amplification, which caches server per rollback output. On the
handles that names a thing is fine, so the handle that grants access is a
password. So an authorization-bearing handles is credentials in a chatbot. So
for the state, now that we can keep the state between the client and the NCP
server, we need to pay attention to what does it mean, this state ID. Is it
something that only used to say, hi, I am who I am, or is it something that the
server used as an authentication to verify your trust boundary?

If it's so, it can be something that will leak in a chat or a protocol. So, now
it is a recommended poster, not a schema requirement that we have for the
sessions. And as I mentioned, we can still use no sessions at all in the SAP
service. It is not enforced at the protocol level, but there is a specification
enhancement proposal 2567. It is in final state. It was created in March 26. It
recommends OPEC handles to validate against the oath context on every request.

It is recommended poster, not a scheme requirement. For the CVE that was
published in August about the GFAMCP, the recommendation is fixed what was
written 5 months earlier. So in this case the maintainers were ahead of the
security researchers. They were proposing a fix before the vulnerability was
discovered. For the network level, an embedded privacy area on the roadmap
exists for the HTTP native protocol unification and how to name.

The evidence is needed is the official SDK. So the protocol is one-hand SDK
developments live its own lifecycle. For approval, there is still a gap, nobody
owns it. The caller identity has a lot of mechanisms to prove, to make sure that
we are talking to the person which is claiming to be the correct person. But on
the approval, server-side publisher identity has nothing on the road mode as of
now. So this is the gap with the issue number and it is not an option.

I was mentioning that the identity has the DPPOP, workload identity federation,
IDEA, JAG and token exchange, but server-side the publisher identity has nothing
and maybe the previous presentation was a good example how to make sure that our
MCPs are verified and are coming from the correct source. And lastly, the SDK as
of last week. So the Python SDK has still a to-do and an assign for this. Java
SDK has a to-do and assign. Rust SDK, there is an open PR as well as a draft PR
for TypeScript.

As of last week, this CEP2567 fucking issue is in the Java and Python SDK were
still open and unsigned. Before I finish, I have something that I want to say,
but it no longer holds up in 2026. So I was going to tell you that the better
the model, the easier it is to poison. Why? Because there is a study done last
year that proves that. I went back and checked the 2026 data and it does not
hold. So the two studies. What supports this is that NCPTOX, it analyzes 1.3 EU
cases, 336 retools across 45 servers.

So they registered a top success, attack success of 72.8, and the user under 3%.
So their statement is the better the model at following instructions, the better
it is at following malicious instructions. decouple that on those MCP servers by
injecting malicious interactions in the description or in the metadata. But this
year, other studies complicated things. So this does not hold, and my theory is
that we are getting better and better model armesses and guardrails from
frontier models.

So these four studies show that the better the model, the better you get
protected against this poison attack. But, there is always a but. Model choice
is not a control. And if there is something I want you to take from this talk
today, it's this. So, don't rely on the model to protect you against malicious
NCP servers or vulnerabilities that may appear in a NCP server. So, the GIT
injects said that evaluation prompt injection against live agency CI-CD
pipelines found that failure is structural rather than model specific.

So, it is rather something that you need to build a structure around to be
protected against rather than having it handled automatically for you by the
model. So, the FIDR instructor and the TXPortload instructor, and these are the
arguments for protocol and host control. I'm a bit behind, I will move on. So,
three things to take away from this talk today. So, verify the publisher before
you verify the content. If you want to use an NCP server, make sure that you are
downloading the NCP server from the publisher itself.

authenticate inbound separately from downstream so authenticate user of the MCP
server as well as the downstream for the poison and the drift and the rock core
vulnerability make sure that you have a snapshot and you can clean a drift on
that snapshot and this is usually done in the CI CD pipeline if you maintain I
am provision the middle for the results I'm on in the official conference
against a city server that most teams are developing from observability source
control CI to a separate or plane why I publish these results so if you are any
of the internal MCP server and you want to run these tests on your server, come
find me after the talk, I would be happy to share the results with you before
any publishing.

Everything I show today is reproducible and run from the repository and you can
access the GitHub repository where all these applications today are open source.
Thank you very much. Thank you.
