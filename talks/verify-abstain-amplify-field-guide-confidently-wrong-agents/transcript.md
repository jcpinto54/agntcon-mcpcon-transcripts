---
title: "Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents"
speakers: [Michal Orzechowski]
day: thu
date: 2026-09-17
start: "17:30"
room: Emerald Room
track: Reliable Agents
kind: talk
session_id: 43b5f61a55a17e1550497bb821025b04
recording: RAI Amsterdam 6.m4a
contributor: jcpinto54
---

# Verify, Abstain, or Amplify: A Field Guide To Confidently-Wrong Agents

**Michal Orzechowski** — Sano – Centre for Computational Personalised Medicine

Michał Orzechowski is a researcher at
[Sano — Centre for Computational Personalised Medicine](https://sano.science/)
in Kraków, established with the Academic Computer Centre Cyfronet AGH. He works
on agentic systems for scientific research — organising multimodal data into
knowledge graphs and using agents as orchestrators with grounded, traceable
hypotheses — as part of a Sano team accepted into Anthropic's AI for Science
Program. His career ran through testing, programming, DevOps and DevSecOps
before moving toward agentic AI architecture, a path he describes in this talk.

*Thursday 17 September 2026, 17:30, Emerald Room — Reliable Agents track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> The talk ends at the `## Q&A` heading; everything below it is audience
> questions and the speaker's answers.

## Transcript

Hi, I'm a researcher in distributed computing and I've been evolving from a
career as a tester, programmer, DevOps, DevSecOps, Data Detect and now this year
heading towards Agenda AI and Architect. And I would like to tell you about the
journey of this year and how the agentic AI allowed me, and I assume all of you,
the ability to achieve far more, but sometimes with bigger cost than before. So
I noticed this year that, well, the bottleneck has moved, that we can do more.

We can realize the project that we have kept on the shelf. the shelf. The
harness that at the beginning required us to click approval all the time
actually evolved. We added a lot of variables that AutoCAD fears came and it all
became much much less demanding from us. However keeping up with all this
evolution of AgendaGate and a political system, at least for me it felt like a
second job. So basically managing a fleet of agents and evolving my own
understanding of the field.

And the better the better hard as I had, the better agentic structures, the more
load bearing decisions were coming on my desk. And then started to feel tired,
much more than clicking yes all the time. And the question is, how can you get
agents to bring you fewer decisions without losing quality? Because after all,
you want to control what's being built. So the simplest thing that you can start
to do is actually to start on the code layer.

We apply all the standards, software engineering best practices, however they
all work only if we assume that we have some oracle that we are able to verify.
Verification has been a big topic this year and we wanted to have the agentic
look as autonomous as it can be and as correct as it can be. So with Oracle, the
problem is that they are only as good as we designed them, and they check only
the specific parts of the code, of the project, that we actually designed them
to do.

And the problem begins when we have no record. And the judgment, when we don't
have it, is unfortunately the domain bug. Inside my own domain, I can quickly
spot that the agent actually is doing something wrong. Interrupted, fixed what
it was doing. However, because we are all able now to realize more ambitious
projects, usually, at least in my case, different projects are coming my way. A
genetic dichotomy finds a discovery. I don't know much about proteins.

Microproharmonia system for a composer. I don't have any hearing. Trading. I
tried to do a trading system. I'm not a trader and I had no one to help me.
Agent, just this month, I was approached to actually help with the CERN project
to do some physics simulation. And just this week, a research team approached me
to do the system connecting genotype with milk data. I don't know enough about
milk. I will not be able to judge my agents what they are doing.

And I'm on the mercy of maybe some people who could help me. Or I will have to
invest a lot of time actually better myself in those fields. So let us go
through a few examples that I noticed while working with this year. Most of them
will be quite simple, but they will have different categories. So those are
quite obvious. We have an agent that actually succeeded in making a pull
request. However, it cheated us because it edited the tests, and the tests were
the Oracle.

Then we have the data replication example. When we scheduled some data
management system data to be replicated, the API said yes, data is there.
However, there was eventual inconsistency in the system and data actually was
not replicated and something behind it broke. And the agent reports the success,
although it shouldn't. Then, in case of this dark protein discovery project, we
build an oracle, an ontology-based oracle. And it tried to reason, to validate a
hypothesis.

In the first case, the result found that something contradicts what we already
hold and correctly decrypts. In the second one, because it was the oracle that
we built, it was quite complicated, actually the oracle was malfunctioning. And
the only thing that saved us was having double double checks, agentic checks of
the oracle, actually how was it working, because actually it was dropping some
of the axioms that were necessary for a proper evaluation. And the question is
when and how can you assess if your condition that you are actually actually
testing again, can be verified and if not, what else can you do with it?

So there are some simple criteria. It has to be nameable, readable, be able to
fail, yes. It would be the best if the oracle is out of agent reach, so it
cannot actually edit the answer. it should result in time because we don't want
to wait too long for the checks and be affordable money-wise and time-wise. And
the question is, when we optimize it, how can we actually achieve the
correctness and don't need to actually read the whole project and what the agent
is producing.

So those are just some of the examples of the best practices that actually do
most of the work. Nothing new. The main part is protected. We do testing, the CI
pipelines, the interns, et cetera. We use hooks. we separate review, the agent
who works never merges, etc. And everything of course stays on the record
because we are using full request and issues and we use them as message boards
for the agents. Actually we have the whole provenance of everything that was
done.

Then there is the question when we actually have to interrupt the agent. I had
to do, I was realizing the product, because the agent actually didn't ask me was
it doing something wrong. The first instance is actually a popular failure. The
agent thinks that the test or some build, the time it will take is fine. It
takes hours. But it doesn't take into consideration that it will actually have
to iterate it multiple times to get it right.

So we need to stop it because otherwise we will be waiting for a week and burn
quite a lot of resources. The second case is what type of knowledge is in the
model. When I'm working with Kubernetes, quite often when I ask it to deploy
some applications, it uses the version that it remembers. If I don't tell it to
fetch the newest ones, it won't. here I wanted to use a new RBCD feature which
the agent didn't know existed in the new version so I needed to interrupt it
because it didn't come to me to actually ask me what I would like to do.

But in some of the projects it actually asked me but with the questions I had no
idea how to answer. In the biology project, I put the question I couldn't even
parse. Those are irritable bowel syndrome, inflammatory bowel disease. And in
second case, he was presenting me with the financial analysis and I was not a
good orator for it. So basically, I hit the wall. I couldn't proceed. And those
are the cases where actually it would be the best to ask someone.

If you are working with people to route this question, if the agent came to you
and asked you this question, and forward it to them. So, here are the criteria.
If the cheque does come from someone else, we want the agent to abstain from
proceeding, because we don't have any oracle, and round the question to the
person. If it cannot be resolved in a given time, also, we can round. If it
cannot be affordable every time, as in the check is expensive, maybe we also
have to route it to a similar source, maybe a person.

And nowadays, the default behavior is the agent asks the question and it stops.
And then I have to be on my phone during a walk, looking for the area of
control, and make tickets to actually work further. And this is not the desired
behavior, because we would like the agent not only to know who to ask about the
things it doesn't know, but actually to to look the question and continue with
the work that can proceed without it and the fact that the experts are the
bottom leg because uh on the next slide we will see the we will be looking for
experts has been known since uh since 1990. so what what we want what one uh
instead And everything that we want basically has been built already and
practiced.

We want the agents to actually write down the questions somewhere. Not the first
writing, the ticket agent is formulating the text. We want something outside the
agent to decide when to ask. We can rely on the model to know when it doesn't
know, but this is risky. In the perfect situation, we have the oracles actually
guide the agent to the point where it admits that it doesn't know and has to
route the question to the external source.

Then it goes to the person who can actually answer it. if the process is
asynchronous, the work actually doesn't stop. However, it all touches only the
problems that the person at the end can answer. If the person at the end makes a
mistake and the whole work becomes false, that's a problem. So in this case of
this question that I don't even have an idea how to parse, how could we do it
with the tools that we have now? The popular tools to actually indicate who owns
what in the code is the code owner's file.

We could do it, however, it's not helpful to one of the computers. In
Kubernetes, we can actually add applications to indicate who is the owner of
what resource. but it's a little bit fine-grained. There could be a service with
the experts who are on call, on schedule, where we could actually delegate our
answers and someone, always, will be there to answer, but it will not be a
specific person. So if none of those three first options actually work, where
can we go?

So we need to write down who can answer what. to map the domain responsibilities
of the project we are working in and feed it to the agent. Then, according to my
experience with Vizier, it improves the frequency when the agent actually asks
you questions and writes them down enormously. So in practice, as I said, the
agent gets gets one place but it can actually write the questions down. At the
beginning of the project when it starts it can be a funnel. Let's say you are
working on a research project, there is a team and you really in those beginning
phases of the project need to sit down with the people who actually have the
domain knowledge and can guide your project in the right direction before you
commits to the technical solutions that will turn out to be wrong in the long
run.

So, at the beginning it can be a file, ideally at the end it will be some issue
routed automatically to a person. So, every question gets a type and a person.
We try to write, and this is And this is the tricky part, the question in the
words, in the style, in the formality of the person who actually will receive
the question. I would not like my professor in university or my boss to get
exactly the same kind of email that I sent to my colleagues.

That would be unfortunate. So the work only depends on the answer it waits.
every technical is continuous and we grow the channel. At the beginning as I
said it's a social thing so we try to sit with people we try to approach people
who are not using agent AI yet because as I see there is a huge difference in
skills in using agent AI among my co-workers And then when we have open transit
of communications, by actually sitting with them face to face, we can get to the
point when they will have their own agents with their specific domain knowledge
of the project, and actually routing to them will be as simple as asking the
agent for help with their context.

And now, where did the question actually come from? So each time I stop the
agent, I have to interrupt the work of the agent this year, the agent should
have asked, but it didn't. So maybe if I thought hard enough, I could have told
the agent in advance that it should use the specific versions of application on
Kubernetes. That it should use hydration in RBCD. But I didn't, because actually
I'm usually quite curious what the agent will propose me.

I try to ask open questions and then specify a little bit later. However,
sometimes, exactly, I can only decide when I see the answer. If I'm doing a
PowerCoin presentation, no matter how I specify it, something will be wrong with
it and we have to iterate. So the first part can stream over time, we can move
it upstream, however the second part never goes away. And here are two examples.
When collaborating with the composer, we started in the agentic system to
generate the particular music pieces, particular tones.

And apart from that I don't have a good hearing, I have no idea to judge the
style of the professional. So, and the style of the professional and the taste
can change in time as well. So the only way is actually approaching on a copy,
ask the agent, make the agent aware that it has to delegate the answer and we
need to approach the expert. Then, when writing papers, the way that the
frontier models are writing text evolves significantly during this year.

And I must say that while reading Cloud Code, and having models output over the
year, I started to become good with their language. and when they start
generating me text using their language, I'm okay with it. But other people are
not. And when I send such and such work somewhere, it is not as appreciated
because it's a different style that the particular experts are used to. And the
only people that can actually judge me are the people who are not using Azure
NMS so much.

Another problem. And their test, their pace can also evolve in time. So the
question is when we actually know that we have to classify this problem as
unreadable. It's a business in this case, it should only be nameable and
readable and nothing else because we we want to send it, and we will be able to
specify it. And now, the abstain and out-of-file in this presentation are a
little bit similar. The difference is in timing, in semantics.

In the phase of abstain, we are asking the expert, and the expert knows the
answer. If we approach the other researcher from a similar field, it will most
probably give the same answer. The problem is that the model doesn't know. In
terms of Amplify, we go and we reach for the taste. We go for something that's
actually time-dependent. Knowledge also is, but the taste can be much more
personal-dependent. And in case of Amplify, if Yerimo evos, we have said no.

Is the design good enough? No. some feedback, but then we have to iterate more.
The work doesn't continue, there were loops on it. And so if we get all those
answers from the people with taste and scientific preferences, we could actually
try to write it up front to enhance our specialization. When I was writing
scientific papers, First, I was trying to make skills that will actually reflect
the pace and the style of the colleagues I'm working on.

However, not all can be done that way because, as I said, the pace and the
answers can be time sensitive. It can change. And so in that particular case,
the yes to amplify, we can treat it as a gate. We ask people always, do they
actually feel like this should be sent to the paper, like this system looks
right to them. This web page is readable for them, and if the color scheme is
actually is appealing for them. And whenever we say yes too many times, actually
you can try to encode it as a preference, encode it in the specification.

However, not all can be. And then we always need to ask experts. So in practice,
how the amplifier works, first, again, we ask a person. If the answer is
something average, then it is the wrong application. It should be . Then we
round it to the person. And if possible, we try to feed the agent with the
previous work of this particular person who will be asking. Because if we
deliver them the output that is better aligned with them, we will save them some
work.

So, before they dash, this is my case of actually working with Good Capital.
show them the earlier work because after months of actually working with us and
with our agentic approach their style might have changed not for the better. And
now back to capacity. The whole talk that I I had here was about how to classify
the, how to work with the information that agents want from us. And I found
during this year that actually delegating, delegating to the agent AI to run
multiple agent projects, made me no longer sleep and my time were no longer the
limiting factors actually my cognitive ability started to be and my ability to
judge to actually the questions and the decisions that the agents want me to do
if I can answer them correctly.

And it's important to out-source it a little bit. We want to map the people that
we can around those questions too. However, asking the human every time usually
produces the wrong effect effect that we actually want to achieve. And now the
question is how actually, how many decisions we want to stop on what layers? And
this is a question because as said, the game is a series of very interesting
decisions. So if we actually stop most of the decisions which are load-bearing,
at the level of verification, at the level of outsourcing those decisions to
other people, we stop also to be the authors, and it stops to be fun, basically.

And if we have too many of them, we risk to actually always say yes. If we have
too many big, heavy decisions, then we start having the capacity to cope with
them. And the last slide, my advice is to you, what actually helped me the most
during this year, and I didn't realize it, as a child I wanted my parents to buy
me the fast reading course. And it was useful, but not as useful as now in the
agent diagram, because I can actually read the prompts, read the output quite
quicker, and judge it with less effort.

Also, most of what agents are producing, we should not use it. That's my
opinion. I only want to read the load-bearing decisions, and if some game, some
check is actually failing, then I go and die. And because I was driving this
year a lot of projects from different domains that made me take too many
decisions a day, the only actual solution is to have a little bit of self-care
and to outload it. To rest, go to the gym and reset your Jasmine papyrus.

Okay, that's it. Thank you.

## Q&A

Thank you for the presentation. You mentioned . Yes. But you are relying on
important classification of questions like this. Who is it? Is it another
model with human? What is the ? Oracle in the case of verification is a
deterministic piece of something, ontology in the case of the genomic project
here, or a test suite in terms of your code base that you can quickly verify
against, quickly if you want to work it here.

Is it doable? Well, depending on the domain, yeah. For example, in the case of
this genomic project, the best oracle would be a web lab. Basically someone goes
there, does the experiment, and comes back with the answer. But this is not the
type of thing that the agent would accept. So it's very domestic in terms of
coding agents. When you actually implement enough good practices in terms of
engineering, DevOps, coding injection fibers, etc., you are doing both of the
work.

Thank you. Yes. Yes, sir. Well, first a comment and two questions. Yes. I think
a good talk, you need an entitlement. Yes, I agree. Judgment is all you need.
Ah, I mean the . Yeah. No, judgment and . Yeah, yeah. Judgment is all you need,
but the historical pun is always good. I'm kind of curious, how large are your
computational ontologies in terms of edges and nodes? And second question, are
you using behind the page ontologies just for falsification?

How are they? I don't know because this is on the science team domain. This is
actually the magic because I'm referring them to tickets, mentions via the
github. And the people actually are getting them on the emails and some of them
are answering by hand. And some of them are putting paste in the other agents.
And some of them have their own object development system and we have to get
them over here. So I can only tell you that it weighs about 200 gigabytes,
because this is the number I see as a computer scientist.

How large is it? I don't know actually. And are you using the ontologies only
for falsification? For the project, if I'm not incorrect, because this is
exactly the point of me and the research team, the collection. It tries to find
the function that connects the protein with the disease. So they're using it to
find this connection, maybe only to falsify it. However, there is a lot of
functions that are lacking. So the idea is to actually discover those functions,
and the dark protein.

Yeah? Research. Yes. Maybe. Sorry. There's a noise. All right. So my question to
you is whether you have packaged some of this knowledge into a skill. Because
I've actually run into this issue recently that is you're working, you're trying
to translate the requirements of teams that are experts on a domain you are not.
And it's really hard for you as a software engineer to understand what is
important, right? It's this judgment thing.

So when I see that these workflow, these flow diagrams, the decision paths, it
is actually maybe something useful for the agent to help you guide yourself
through it. Sorry. Yes, you're right. I was trying to make some excuses
throughout this year, but the models changed. And then they require you to
invest more time into fixing your skill to the particular model. So this is the
question, where do you want to put your effort? And is the word actually common
enough that you will get your effort back?

So in those research projects, this is the constant interaction with different
researchers because the project is moving forward. So if the question gets
asked, it usually doesn't come back again. And I don't, actually, I wouldn't
have enough domain knowledge to actually design those skills. That's the
problem, yeah? Because there are physicists, there are biologists, there are
people from the music industry. No, but what I mean is...

Sorry, sorry. Just taking from here, I think. Yeah, yeah. So, but how do you
resolve disagreements between your domain experts? So your re-addressal rule,
right? Yeah. So whenever domain expert accepts something that is, so that
becomes a fact, right? Yes. But the same particular query can go to another
domain expert and he can disagree. So how do you resolve this kind of situation?
I mean, for the agent to actually, to encourage the agent to stop or to create
an issue to a person, person, yeah, and to admit that it doesn't know the
biology enough, I usually supply it with the map, who owns what. So for example,
there is an organization that has multiple repositories, yeah, there is the
ontology project, and the particular researcher is the owner. And she gets all
those answers. And I don't need to think which person from the research team is
getting because they told me yeah that does that if there are multiple people
that's kind of difficult yeah yeah unfortunately for our case we have to think
that why i mean i work in sap pioneer a little what sap pioneer sap pioneer so
we have sap consultant who are our domain expert so and we do the same thing
that we ask them what is correct what is incorrect and there are hundreds and
thousands of them so that means maybe you need to do an expert to yes because
the experts are not equal to each other yeah in that case yeah so if you know
the owner but he's like uh i i i work a cold person like maybe he's the one that
knows and can judge but he's not the one you reach out first do you like create
like your tree and like try to work I try not to because if I feed the model at
some point of the work with wrong answer, it's a lot of token wasted and a lot
of my time wasted.

I know the graph, like you don't want to reach out to the CEO every time, but if
he says reach out to me for this, then you do. Yeah, and this graph's ontology
at the beginning was computing one week and then because of some algorithms that
I saw on KubeCon from KubeCon and the agentic AI, there was a worker that was
doing a little bit of the ,, sending stuff on HTC, building it, using resources.
And then I actually allowed the biology person, and I'm told that biologically
people told me that they are not very good at computer science programming in
general.

So giving them ability to actually iterate quicker and quicker, and creating
those golden facts, those standards that have verification on every step, the
agent tries to break something in a very important procedure, one of the checks
will alert. How do you decide to wait for an answer or proceed with an
assumption? So, different of course. I have my own multi-agent framework. When I
started doing it at the beginning of the year because there were no
alternatives, actually at the beginning of the session the agent already having
some context populated was checking all of its issues on GitHub and then because
of the agents had their own identities so on GitHub you can have the application
and if you assign the application to the agent then actually you can mention
each other and around the world DevOps agent code agent science agent biology
research here and that way it knows that those issues are there so even if it
tries to forget it it will get depopulated it's of course an open question is is
it that if i'm crushing the context a little bit but the work is progressing and
because those issues are being resolved the sub-agents are being run the the
main the main agent all the main agents depending on the the DevOps code, etc.
are actually orchestrating the Sonnet or other smaller models to do the small
work.

Yeah? Sorry. Can you maybe explain shortly, imagine an example of what the
Verify, Abstain and Amplify steps are? Sure. The idea was to present the
audience with when they should go to the verification and when not. To be able
to classify what they have and in that way you don't have to waste your time on
the things that should be automated. So if you have a deterministic way for an
agent to discover that you're doing something wrong, as in you have a rival,
this is the verification.

If you have the person who can ask, because you don't know, and the model might
not encode the knowledge, then you see the answer on your screen, or maybe on a
picture of your shoe, you go with your laptop to the person and ask. Or maybe
you just have a more elaborate explanation, but basically you reach out, yeah?
And usually the answer should be the same, because it's based on... I mean,
knowledge evolves, but it's much more stable.

So you verify the answer of the agent by going to somebody. It's an external
arrival. But it's more costly, because you need to bother your colleagues. And
then with Amplify, it's about the model who actually is not really doing what
you want. So it's writing me a paper, and I don't like this style. I mean, I
like this style because I'm biased, because I saw too much of a cloud output
already this year. and I go to my colleague, she didn't, and she tells me, this
is not the way we write papers at Michael, yeah?

Go, take the agents and other older papers, pre-agent the area, and fix the
style, and then we actually argue during the themes, we have a transcript, and
we try to pivot the style of the model to actually fit our paper. I try to build
skills, but we need to maintain them. it's possible why do you call it amplify
because it's it's similar to the to the abstain but with abstain you go if you
get the deterministic answer always and and and here then it's about taste that
can change depending on the iteration so you you show the personal design he or
she doesn't like it you go back and iterate go back iterate because it depends
on the personal and the judgment is being created in the moment of proceeding.

When the agent reaches out to someone else, to another expert, what is your
strategy against just presenting that person with an enormous amount of slop?
slope basically because this presentation was a little bit about interacting
with via your agent if you interact to the wrong person you might have personal
consequences so first you map the responsibilities of the product etc to people
but then you also inject your agent with little depending on how how much this
is the series the person sometimes you don't map it at all the answers come to
you and you route the manual yes because you don't want anyone you know maybe
the agent can know that your CEO responsible and it shouldn't even know the
minute yeah however what one of the cases of the collaborating I knew that in
CERN a lot of systems are written by...

I would have said... Exactly! Are written by a small amount of people and
maintained indefinitely. So I knew that the guy was a senior researcher and he
is the owner of the code. So I pointed as a code holder, I said to the agent, he
is the god here, he is the expert. Everything you produce should be in his style
because he doesn't like agentic AI. and we want to maximize the probability of
him accepting our pull request, yeah?

So, like this, and it's very personal, basically, it's risky, yeah? Would you
agree with the strange statement that decision, if its decision should be routed
to the P person, and what kind of person should it be, is a philosophical
decision, philosophical question? I mean, in terms of... It's not that
philosophical I would say because you have the finite amount of resources,
people, yeah? Yeah. So you... So what skills is this... you just define it as I
wrote, my notes, smart router which use root question for verification for
judgment to different people.

What is skill set of this org? If I may join in discussion... If it would be a
person... Yes, yeah, go on. If I may join in discussion because to me that's
really proper project management. project management exactly I was unfortunate
to this week had to project management certifications it was held and and
exactly this is about defining the scope of the project the people who are
involved and then actually you have the finance side of the people and maybe
those are not the best people for the job as one of the one of the you said that
they have the SAP consultants and those are not the best sub consultants because
the the difference in knowledge even on the same table is huge but you have your
resources so another question I first time almost first time in my career so two
years that ontologists are actually put to use yes yes I what I want to make a
fact is it's indeed the case I mean I'm amazed because years 15 years ago when I
was doing my PhD ontologists were a hot thing yeah yeah they were they were
everywhere no I mean yeah company called ontology works ok yeah so first time I
see this ontology indeed used it's like people who have nothing better to do
honestly they only do ontology groups and then just fires the thing is in
practice it's quite hard to sell to a business if they have to build an ontology
to build data no but nowadays it will be important for the agenda ecosystem
Alenteer uses ontologies.

What? Alenteer uses ontologies. Okay, they should. Are they keeping using
ontologies now with AI? Sorry? This appearance of LLM, they start, they do it a
lot before contemplate AI. Are they still using ontologies? It's interesting.
How would you, because there was a discussion with Neil for JLT, How would you
use an ontology to verify... how would you want to use it? We primarily use it
for falsification. For classification? Falsification.

So, exactly, you have a code, the code is modified, the test didn't pass, it's
the same answer but on the semantic level, yeah? So what kind of ontology help
you to define, I just ask, help you to define if this question should be
answered, to agent or should be rooted to human expert? So in case of ontology,
because there are different agentic system that we built, so mostly this
discussion was that you have the cloud code open, you see everything and you
want to get less input in your case.

However in the agentic systems that actually are workflows, the agents are
headless, and you are sometimes employing multiple models, judge, the limit of
the judge here, to actually do the same work and then compare, then you inject
this ontology as an oracle, via MCP tools or something, and then, this is, and
you write it into the prompt, a little bit, yeah? I mean, a task for the agent
to actually do something and verify it with the ontology.

So the routing to this is part of the task. yeah but what kind of ontology is it
domain specific yeah yeah what kind of what kind of trees ontology is about is
it complicated non-complicated matters or questionable non-questionable things
or this is the case of abstain i should route it to my colleague this question
yeah exactly but from what i remember they are they are having the proteins yeah
there there is a gap between the most advanced domain specific computational
tractable ontologies or the biosciences I have I did the two patent project of
automating epidemiological research in many cases is for farmers so I think
there are also these higher level formal ontologies which can help you or help
LLMs keep from making ridiculous mistakes yeah so you ask actually if I get it
right you ask agents to verify their result with ontology and it's smart enough
to do so.

Yes, but the next step will be to actually try to discover this, those
connections. As I understand that there is a protein, yeah? There is a disease,
yeah? And they don't have this function yet. So I was going to ask you, so the
research group that used an ontology in order to falsify some of the results
that the LLMs were creating, and I guess we would call them inductive results,
did they publish? Not yet. They haven't? Not yet. It's a work in progress.
That's why not all of it was on the site.

Have they published at least the architecture for the system? This system? Yeah.
It's not public, however, to be completely honest, this kind of work is nothing
that novel. there is a paper already from the last year which does something
similar doing this stuff that would the trick the trick in practice as I've seen
it it's it's it's the lexical matching between the LLM output and then the nodes
in the ontology so this actually is an engineering task it's more than an
engineering task but I like your optimism yeah I mean what are you speaking what
is ordered something I can believe it is still I said skeptical person my nature
I can believe that anthology helps a lot for a little to judge if it's have
after makes sense is it the case or is deterministic code which will take answer
and the origin decide it's hard for me to believe in the domestic what how do
you get an entirely deterministic anthologies are by their...

Anthology is, but who is using it? Somebody has to decide the... No, no, no, no.
A priori, somebody has to make a decision. Yeah, yeah, I mean, there is a task,
a specific agentic task that you put to the model, and the task requires
explicit to use the ontology, and this ontology is exposed to the harness as
tools via the NCP server. And my hope is that this lexical matching here is done
in the layer between the... The project at Princeton, I think it's WordNet, that
was the whole idea back in the day.

Let me know the product. No, it's elderly. I think it's completely abandoned.
But in the early days. WordNet? No, WordNet, I think, is still active. Is it
still active? But part of your funding came from folks in the computational
ontology world who were getting a lot of DoD money. What was the name? WordNet.
WordNet, OK. Yeah. Because it's the lecture. WordNet is almost the same. So for
a less experienced person, ontology is this way of declaring facts about the
domain in a graph way, right?

Facts about the domain. Imagine all of philosophy goes down to two different
domains, epistemic knowledge and ontological knowledge. Epistemic knowledge is
what's contingent. It's like your headache, your beliefs about things. And
ontological information or knowledge would be non-contingent. Statements like
the rule of excluded middle or hopefully how math itself works. I'll define it
as attempt to or way to apply the relational algebra to give structure to the
knowledge.

It's some knowledge, I think. It's a way of modeling what's real, basically.
What's true. It's not just what's real, but it's what's true. Like, your
opinions are real. Ah, yes. And then there is a cost of building, because now
people are doing LLM, VKIS, RACs, et cetera. But there is a context of it, with
all of it. And ontology, you define, and agent doesn't touch it. No, the agents
don't touch it. And in fact, there is a specialized area within logic
programming to create retractable ontology.

Yeah, so that relies. So that relies totally on human experts creating,
translating that, no? Because you cannot, if you let an LLM do it, like it's
useless, right? LLMs can make contributions in theory to an ontology, like we
just had a significant advance in . Navier-Stokes. Which one of the millennial?
Navier-Stokes equation. Yeah, see, exactly. So like that's, once that's
verified, I mean, you can think of that as a contribution.

What's right, you're saying what's in ontology is what's true, because if I look
in practice how we build these things, we build a simple flat model of the world
and we just load the data in the form of that ontology. That's how I've built
them in the past. I'm curious to know how you look at it. As I understand those
people, they're more or less the same, yeah? They have a big database, yeah, of
diseases and of proteins, yeah?

largest online systems in the world, like there's a company in Sunnyvale,
Objectivity, is a privately held object-oriented database company, and their
systems were loaded with ontologies and used largely in the ontologies
community. I'm curious if using a rug to put a relevant part of ontology to the
context, would it give a similar result? maybe you're tired just curious so I
mean you wouldn't first you need to have ontology yeah but with the rack yes so
I haven't used racks yet because they were the hype of beginning of this year
and then it stopped yes yeah there was inevitable like the contacts were just
getting so yeah yeah so so for me it is the question which tool I use as a
record because the data information is the same yeah yeah so with what we see so
you can summarize it what we see as a matter of fact surprising one that
knowledge basis they were mostly useless for software became very useful for
agents definitely I mean everything hallucinates everything I mean so like
Palantir, they're pretty clear about the way, forget about your feelings about
the company, and I have a relationship to the company, but they're very
outspoken about how they use ontologies to put guardrails around LLMs, because
LLMs can make wildly ridiculous conclusions. They can say the sun is blue, up is
down, when we all know that these things are not true.

And have they published about that? How they use it? No, I don't think so.
They've just published that they do this. Which makes a lot, a lot of sense. .
Yeah. But if I may ask, I would build an ontology and have an LM use it for
something, for example, for biology. LLMs can't use it. You need an
intermediary. Yeah, yes, I understand. Yeah. As a big party told, every
knowledge inside a LLM is a vague recollection. And all this even hard knowledge
you have to put into context this or other way.

Yeah. you are populating the context, you don't want to populate too much of the
context, so actually querying the ontology is quite efficient. Yeah. But I would
do that if I really have a complex problem, like you have a complex physical
problem or biology problem and you really want to check specific answers, that's
when I would build something else. But usually you don't want to have a complex
problem, because you, for example, with the ontology build problem that I wanted
to last for an hour, not for a week, the agent did one task, send it to HPC
build, and it tried to verify it, build it, and check the checksum on it, etc.,
and everything failed, and it's the idea of decomposition, input everything.

So here also, decomposing the rezoning via separate agents is the solution,
yeah? So you have the smaller prompts, you can even do triage between different
models, yeah? Then you come back to composable software, I guess? Yes, yes, yes.
And they make it simple. It's all the distributed systems. Can I get your email
address? Of course. Thank you. I will be happy to get connected. Does that
actually have anything on it? Because when I click your name on the schedule,
there's like nothing.

Oh, really? Not findable on LinkedIn. One way or the other. Thank you for
telling me.
