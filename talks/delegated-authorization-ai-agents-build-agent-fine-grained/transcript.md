---
title: "Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions"
speakers: [Sohan Maheshwar]
day: thu
date: 2026-09-17
start: "12:00"
room: Auditorium
track: Reliable Agents
kind: talk
session_id: bd3e4922efb433a48dbf756124ad7a8f
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=12174s
contributor: jcpinto54
---

# Delegated Authorization for AI Agents: How to Build an Agent with Fine-Grained Permissions

**Sohan Maheshwar** — AuthZed

Developer advocate focused on authorization; formerly at AWS, Twilio and Stripe; now at AuthZed (SpiceDB).

*Thursday 17 September 2026, 12:00, Auditorium — Reliable Agents track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 3:22:54](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=12174s)), not an attendee's recording.

## Transcript

Okay, cool. Yeah. Check. Check. One, two. Amsterdam, how are we doing? Good.
Yeah. Sounds good. My name is Sohan Maheshwar. I'm based right here in
Amsterdam, so it's a special honor for me to share some of my, what I've been
working on with you. I'm going to talk about the problem of authorization for AI
agents and look at modern techniques on how to do this. I work in a startup
called AuthZed, and this might date me a little bit, but I've actually been
working in the space of AI for close to 10 years.

I spent some time in the Amazon Alexa team. So for me, it's so impressive to see
how much we have evolved in the last 10 years in this space. I'm also an AAIF
ambassador. so you will see some products of the AAIF that I'll be using in my
demo. Now, this audience looks fairly young, but I'll be interested to know how
many of you remember this website from about 15 years ago. And it is Thursday,
so I thought of a throwback Thursday.

A few of y'all, cool, maybe the same age as me. So for the younger people in the
audience, this was a social networking site by Google. Of course, we don't use
it right now. It was called Google+, or colloquially, it was called Google
Circles. And the idea was, instead of everyone being able to see all your posts,
you could put people into circles, like university friends or colleagues, and
share things just with them. While the site doesn't exist right now, the story
goes that Google changed their internal authorization system based on this.

And this is relevant because we see the effects of this to this very day. Who
here does not have a Google account? Nobody. And if you raise your hands, you
would be lying. And I'm sure all of us have seen this at some point of time.
When you click on a link and you say you need access, this uses the same
authorization system from the Google Plus thing that I showed you. And we can
trace the lineage of this particular piece of technology all the way to
something that we use probably on a day-to-day basis, which is ChatGPT.

So in ChatGPT, there's an option to connect applications like Dropbox and
Microsoft OneDrive, which uses the same piece of technology that Google uses in
their backend for their authorization. So in today's talk, I will be telling you
how that system works, how it's different from what we are probably used to
seeing, and I'll show you a live demo of how that will go. Now, this is
important because if you open the news at any point of time, you will always see
some story about data breaches or security breaches, which seems to be getting
worse with AI and AI agents.

And I work in the space, so I'm a little biased, but the data says the same
thing as well. If you've heard of OWASP, and I'm sure many of you have, It
stands for Open Worldwide App Security Project. It's an industry body that looks
at security risks to web apps, and they come up with a list once every four
years that all of us in the industry wait for. And the last two lists have been
topped by broken access control. And not to alarm you, but there's an incredible
stat there which says 100% of the apps tested have broken access control issues.

So what are we even doing? And this problem is compounded with AI and agents
because of something that I like to call ambient context. Imagine you have N
number of users, you have M number of agents, and O number of actions. Earlier,
it was just users and some actions, but that number has exploded now because of
ambient context. And this context is evolving constantly. You have different
relationships, states, and entities, and these can't be expressed in traditional
methods like, say, an access token or even a coarse-grained technique like role-
based access control.

So I will tell you some modern ways in which you can do this. A very quick
primer on the world of authorization. In our industry, when we say auth, it
could mean authentication and authorization, and they're two different things.
Authentication is identity, who you are. Authorization is permissions. Once we
know who you are, what can you access? In the past, we have used things like
access control lists. Imagine one long list of all the people who can edit a
document, and another long list of all the people who can write to that same
document.

Not very scalable. We have also used role-based access control, something that
you're probably familiar with. You have this in your company where you're tagged
to a role like software engineer, and all software engineers can check in code.
And we also have something called attribute-based access control, where you
break down a decision into attributes like email ID, IP address, namespace, and
so on. So when Google were rebuilding their authorization system, they realized
that these systems did not work for their scale.

We're talking hundreds of millions of users across the world. So they
popularized this concept called relationship-based access control, or ReBAC. And
we know this because in 2019, not too long ago, they published a white paper
detailing exactly how this system worked. And this white paper is called Google
Zanzibar, which confusingly is also the name of their internal authorization
system. I would suggest reading this paper, and even in 2019, it could do, they
claimed 10 million client queries per second, and I'm so sure that number has
increased since then.

They popularized ReBAC, which essentially is the idea of access control based on
relationships. So for example, you have a person, and the person has access to a
folder. So there's a relationship between the person and the folder. In that
folder exists some documents. So there's a relationship between the folder and
the documents. And hence, there is a relationship between the user and the
document. So what kind of things can relationships exist with?

In the Zanzibar paper, one has to be a user. So if you have a Google ID, you're
in the backend system. And you can have a relationship with any object. It could
be a folder, a document, a YouTube video, a Mac, any of that stuff. And a
relationship could be something like a member of a group or an editor of a
document. So you have these users. You have these objects. You have the
relationships between them. How do you tell a system or a computer that this
relationship exists?

The paper describes something called a relation tuple, which is a format to tell
a system that a relationship exists. So start on the right. And it goes, user 3
is the owner of document 1, 2, 3. So at any point, if you've ever created a
Google Doc, something like this has been written in the system. Once these
relationships are written, what do we do here? So how does Google check for
permissions when you click on that link? The idea is to break down a permission
check into a graph reachability problem.

So for example, going back to our Google Docs example, say you have a document.
And you have two people, Fred and Kim, who can read this document. And you have
Jill, who can write to this document. You can express this as nodes in a graph.
Notice that little tiny arrow between reader and writer, which expresses that
all people who can write to this document can also read this document. This
format is very flexible because, say, the requirements change and Google now
wants to add an organization to Google Docs, it's just another node in the
graph.

So at the bottom, you'll see org, Acme Inc., and admin. And notice the little
tiny dotted arrow between writer and admin, which indicates all admins can write
to this document. And we already know all writers can read this document. So how
does this work? So say Jill clicks on a link to some document. That's a
permission check for Jill to read a document. The idea is if you can go from
some document to Jill via the reader node, that means Jill has permissions to
read the document.

So take a look for yourself and tell me, can Jill read the document or Jill
cannot? What do you think? Yes, I see a few of you are nodding, and the answer
is yes. You can go from some document to reader to writer to Jill. So,
unidirectionally, you can go from one to the other, and hence, Jill has
permissions. Take a look at the graph again and tell me if Fred has writer
permissions on some document. The answer is no, because there's no
unidirectional way to go from some document to Fred.

So, the next time you see an access denied page when you click on a Google link,
this is what's happening behind the scenes. How is this relevant to AI and what
we're talking about today? The thing is, this was built for the type of apps
Google has. So think of Google Docs and YouTube, et cetera, where you have very
low latency requirements, high throughput number of authorization checks, and at
a global scale, which turns out are the requirements of authorization in the
world of AI and AI agents.

In fact, the thing it solves is the ambient context that I spoke about earlier.
When you have a large number of users and roles and actions, this relationship-
based access control using Zanzibar works really well. So this paper was
released in 2019, made waves in the space of IAM, identity access and
management. And at the same time, there were a bunch of open source tools built
as implementations of Zanzibar. In my demo today, I'm going to use one of them
called SpiceDB.

This is the one I work on. And SpiceDB is an open source implementation of
Zanzibar. It has contributions by companies like Netflix, Reddit, IBM, Google,
GitHub, etc. Of course, in the world of tech, only one metric really matters to
us, which is GitHub stars. I'm joking, but not really. And it has about 7,000
GitHub stars right now. The other thing I will use in this demo to show you
fine-grained delegated authorization is Goose, which is an AAIF project.

Some of you all might be familiar with what Goose is. It's a general-purpose AI
agent that runs on your system. You can connect it to 70-plus extensions using
MCP, so things like GitHub and Google Drive and so on. And you can use it for
sub-agent development and connect it to your own LLM. So what we're going to
build and what I'll show you is a simple DevOps agent. Any people who work in
the DevOps space here? I'm assuming a few of you are, yes, of course.

And this is a simple agent that acts on behalf of a user. so delegated
authorization. This agent has access to two environments, staging and prod. A
couple of cool things that this agent can do, it can get a time-bound grant, so
access prod for 10 minutes. And there are hierarchical contingencies, which
means if you lose access to one, you lose access to the other. I'll show you how
this is built with ReBAC and SpiceDB, and also why it is so difficult to do it
with, say, role-based access control.

Let's talk about delegated authorization first. We have an agent called Goose
Alice that acts on behalf of user Alice. The interesting thing here is there is
a permission check for every action it takes. Typically with role-based access
control or tokens, there is a tendency to overprivilege something. And if the
state of your system changes, all roles that you have in your system become
stale. But with ReBAC, you're making a check for every action possible.

I'll quickly show you how this works. Now, I'm going to make a quick prayer to
the demo gods. It is conference Wi-Fi. And remember, if the demo doesn't work,
it's the Wi-Fi's fault. So this is my agent. It's called Goose SpiceDB. I have a
chat interface, but I also have a couple of buttons here. And you can see the
user, Alice, has delegated to agent Goose. So I will say deploy checkout to
staging, which is allowed. It's a staging server.

I will try deploying this checkout to production. It says, sorry, needs human
approval. And I will tear down production, which is an action that is blocked.
So these actually happen against live permission checks in a container that's
running here. You can see all these check permission calls in SpiceDB. So how
does this work? We go back to that slide where I spoke about users and objects
and the relationships in between them. In any Zanzibar system, you build
something called a schema, which is you look at the different objects in your
system and see how they relate to one another.

In our system right here, we have three objects. We have an agent, we have a
user, and we have an environment. And there are certain relationships in between
them. So you just codify that in the schema. If you look at line 1, 3, and 7,
we're defining the different objects. If you look at line 4, we're defining a
relationship relationship between an agent and a user. If you look at line 8 and
9, we're defining a relationship between users, agents, and environments.

And then in line 10, there's a permission associated with relationships, a very
different way of thinking of access control. Once you have schema, you
essentially create relationships. And relationships are what bind a subject and
a resource. And essentially, a functioning permission system is a combination of
schema and relationship. So say Alice gets access to the staging environment.
You just write a new relationship. Say Alice loses access to the staging
environment.

You delete this relationship. And say an agent gets access to the prod server.
Again, it's just about writing a new relationship. Once you have schema and
relationships, you can just add a permission check that looks something like
this. We have a DevOps agent, Alice, who acts on behalf of Alice, and every
action goes through, in this case, SpiceDB to check for authorization. And the
result could be one of three things, as you saw.

An action could be allowed. So deploying to staging, that's good, you're
allowed. Or it could need approval from a human in the loop. So in this case,
deploying to prod needs approval of the human. And there are some actions like
deleting prod, which are blocked for everyone. So that is how you would think of
a delegated authorization. Now, what if you want to add a time-bound grant to an
agent to access a certain resource. For example, what if you wanted to give an
agent access to prod only for the duration of an incident?

And again, this is a pattern that is difficult to implement with role-based
access control or tokens. In the case of a token, you pass a token along and
that's it, you can't revoke it meaningfully. And with role-based access control,
You can run a cron job to clean it up. But in the time that it takes to run that
cron job, a role might still be valid when it's not supposed to. So with
relationships, you can actually avoid those situations.

So let's see how that looks. So for instance, I can click, let me just reset
that. When I say deploy checkout to production, it needs approval. So I can
approve production for 10 minutes. So look at the number here, which says
staging has, the agent has access to staging for 60 minutes and production for
only 10 minutes. And at the end of 10 minutes, this agent loses access to prod.
And 10 minutes is an arbitrary number that I've just defined.

You can do this with a feature of SpiceDB and Zanzibar systems called expiring
relationships, which essentially gives you a relationship that exists for a
certain period of time. And the cool thing is this grant will expire on its own.
So you don't have to run an API call or a service to end this. If you look at
line number one, that's how you would add the expiration keyword in your schema.
And if you look at line number eight, you're just creating a relationship with
an expiry date.

Do this only for your agents though. And when you're writing any new
relationship, I should go closer to my laptop, when you're writing any new
relationship, you just add the window in the number of minutes, as you see in
line number four, as to when that relationship expires. So this is how time-
bound grants work. One of the coolest features of relationship-based access
control, in my opinion, is how you can add hierarchical contingencies to your
permissions.

So say you want this complex idea of an agent can deploy to prod only when it
has access to also deploy to staging. Now this makes sense if you think about
it. If an agent can't deploy to staging but only can deploy to prod, you might
be in trouble. You don't want to release bugs in your production environment.
And this is very difficult or impossible to express in role-based access control
or in tokens. How would you essentially do that is by writing a bunch of if
statements in your code, which tightly couples your code with your authorization
decisions, which isn't generally a good idea.

So if you look at this diagram, you have user Alice on top, who has a relation
to an agent, who also has a relation to the prod and staging environments. But
there is no relation between the two environments itself. So in a ReBAC system,
it's all about just adding another relationship between the two contingencies
that you want. So in this case, I'm adding a relationship that says production
is gated by staging, which means if someone loses access to staging, you also
lose access to prod.

And again, this can be done just via schema and relationships. Schema is
powerful because you can add mathematical operators such as union or
intersection and exclusion or an arrow. If you see line number five, we have
added a new relationship called gated by. And in line number six, you actually
see the arrow operator, which says inherit and go through this particular
relation. Let's see it in action, and let's see how that works.

So I'm just going to reset this here. So right now, we have permission to deploy
to staging. I'm going to approve prod, and I have permission to deploy to prod
as well. So the agent can deploy to both. I'm going to revoke staging, and we
will see that the agent also loses access to prod with just the delete of one
relationship. So you can see production is suspended. So when I try deploying to
staging, no access. But when I try deploying to prod, also no access.

And this isn't a cascading delete, but it's just a contingency. I have a toggle
over here, which toggles it to role-based access control. and we'll see if the
same thing actually works. It simulates role-based access control. So I can
deploy to staging, and I can deploy to prod. So we're good. I'm going to revoke
staging, and now the agent can't deploy to staging, but it still can deploy to
production. And this is the problem with traditional methods of authorization
like RBAC.

you have to make another call to also revoke prod, and now it will be blocked.
Whereas with relationship-based access control, you can have a contingency
between one and the other. Of course, I showed you a simple demo of one user and
one agent, but the idea basically is you can scale this to hundreds, thousands,
or even millions of users, agents, and environments. If a system like this works
at the scale of Google, it should work for the scale of our apps as well.

And the cool thing is your schema actually remains completely unchanged. The
schema you saw here will remain the same. For every user, agent, or environment,
you would just add new relationships. So say user Sohan gets access to prod, I
would just write a new relationship. or I get access to a bunch of agents.
Again, just new relationships. In fact, I will show you a small script that I
wrote that does exactly that. This is my terminal, and I've written a small
script that basically creates 500 agents and gives access to just three of them,
to prod, and the others have access to staging.

And I'm going to seed this right now. And you can see 500 agents have been
created with three accessing prod. And again, this is all live. You can see all
these permission checks running in SpiceDB in a container. I can run a who
command to tell me who has access to what. And it says, yes, three agents can
deploy to prod. And all of this was just one lookup call that traversed that
graph that I showed you earlier. on. Just to recap everything, we spoke about
delegated authorization and how with roles it's hard to express. We spoke about
expiring grants. I showed you instant revocation as well as hierarchical
contingencies. For more reading, check out Goose. Also read the Zanzibar paper.
It's a fun read on the train ride back home. And this working demo link is on my
GitHub. Also, all of these slides are available on the Sched page on AGNTCon, so
feel free to grab it from there. I hope you learned something new today. That
was my intention.

You can connect with me on LinkedIn or connect with me outside today or
tomorrow. And I thank you for your time. Enjoy the rest of the conference.
