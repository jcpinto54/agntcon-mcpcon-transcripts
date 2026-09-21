---
title: "Autonomous Organisations: Starting Small"
speakers: [Floris Fok]
day: fri
date: 2026-09-18
start: "15:35"
room: G104 + G105
track: Reliable Agents
kind: talk
session_id: 476e50508e46770ac755d6c59b3c7153
recording: RAI Amsterdam 14.m4a + RAI Amsterdam 15.m4a
contributor: jcpinto54
---

# Autonomous Organisations: Starting Small

**Floris Fok** — Prosus

Floris Fok is a machine learning engineer at Prosus working on generative AI,
with a background in NLP. He is a credited co-author on the
[ClimateGPT paper](https://arxiv.org/abs/2401.09646), and worked on Toqan,
Prosus' internal AI assistant platform used across its portfolio companies
including iFood, Just Eat Takeaway.com and OLX. The vending machine experiment
described in this talk runs publicly as
[Prosus Nacks](https://www.prosusnacks.com/) — machines in Amsterdam where
agents handle pricing, stock and promotion.

*Friday 18 September 2026, 15:35, G104 + G105 — Reliable Agents track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> The talk ends at the `## Q&A` heading; everything below it is audience
> questions and the speaker's answers.
> Joined from two fragments that split mid-talk. The recording starts about five minutes before the scheduled slot, which the speaker remarks on in his opening line.

## Transcript

I can maybe use those five extra minutes to tell a bit more, you know, I like
telling stories. But yeah, hi everyone, I'm Floris Fok, I'm a staff engineer at
Prosus. And we did a fun experiment to learn a lot, because that's always
important to test a little to build fast. And you're probably thinking, you
know, why would Prosus run a vending machine? And I'm not going to tell a lot
about my history or process history because that's all on the internet.

But I do want to explain why do we care about running a business with AI. It's
because we own marketplaces around the world. And a lot of the people on the
seller side on those marketplaces, these are small businesses. And we're
thinking constantly, like, how can we help these small businesses, you know, run
more smoothly, run more profitable and of course help them with AI. So we
thought let's put that to the test. Let's think about agents running businesses,
see where they fail, see where the shortcomings are and yeah I'm going to share
a bit about how we did that experiment and what we learned from it. So I hope
you have a pleasant time. So let's start with kind of what the current ecosystem
kind of looks like. So we have a bunch of companies that actually already did
this before, you know, I'm not gonna claim I'm the first one to invent AI
running a company. There are a lot of companies, you know, you have the co-
founder, the website is amazing, I would definitely recommend visiting that
website, it's a through UI pleasure. And we have NanoCorp which grew incredibly
hard to an incredible ARR.

and we have Pulsia which a lot of people maybe know the most because they went
quite a viral because they run a lot of businesses but these all run software
companies and I think everyone kind of understand that you could automate a
website you could automate you know sending some emails but the question is how
does that translate if you want to run a business in the real world so Before we
dive into that, I just want to show kind of what is the autonomy of one of these
platforms. So here you have Pulse.ia and I picked this one because they have an
amazing ugly but simple UI and I hope I'm not in front. But they basically have
a few components. So let's go over them. We have the human layer where there are
two places the human can interact, pause it and chat with it. But also from this
chat you can kind of get some instructions and then we have the part where you
basically see what is working on a bunch of tasks you know it's just going one
by one by one just like anyone would do if they wanted to do get things done you
know and then there's the most interesting part and that's the way the part
where this AI company can interact with the human world and it's fine a website
via x magna ads and also an email account to reach out so this is kind of like
an autonomy of one of these software companies and of course we also have the
sorry we also have the kpis and the business knowledge because this is kind of
like uh a way that it feels more like a company when it's like going for kpis
and other stuff so yeah so this is this is a normal software company but this is
nice. But you imagine if you're a restaurant, you're like, okay, but I have more
stuff to do. So we thought, if this is possible, can AI or your agent, can it
run a restaurant?

And then you're thinking, oh, a restaurant, there was a vending machine on the
first slide. Yeah, that's true. Because this was the initial goal. But then I
made a comment. And I said, look, why do we immediately jump into this
restaurant? We can literally do a vending machine in a day. That was me very
confidently I think four months ago and I was like yeah let's go it's super
easy. But yeah it wasn't a day, took a bit more time but the hypothesis was
correct.

That we could learn a lot about how do we structure agents to understand the
real world even if we're just running something simple like a vending machine.
And to make it a bit more difficult we we didn't do one vending machine we we
immediately start with six so it's kind of like uh uh maybe ambitious but we
wanted to like make it a bit cooler than just one uh so yeah so let me just take
through the process from the moment i made this comment and say okay what how do
we start and the first part was of course very easy and that is uh get a get a
vending machine so this This is the model we got.

It's a fun part because we had, I think, so many cool options with like LED
screens and very big. And, you know, they were like basically already pre-made
to be run by an agent, but they're all NSF. Or they were in China. And then we
reached out and said like, hey, can we have one next week? They would say, best
we can do is six months. So that would have mean that even today I would still
be waiting on my machine. And that was not the idea.

I said, this could be faster. So our whole purpose was like, let's find the best
option in the Netherlands. And then we found this one. And actually it was a
really good option because it had everything we needed. It had a POS on the
mobile, so not a payment terminal of things if you need to do some hardware
hacking. And it had a dashboard that you as an operator from a distance could
operate. And agents love that. So this was our weapon of choice.

And yeah, we got a few snack machine, we all got the drink machine. They look
kind of similar but a bit different. And yeah, we just went ahead. So of course
we have the, so we have this operating system already. So they already felt like
let's make this vending machine operatable, but they did something wrong. They
made it for humans. So we needed to make it for agents. So we did like the
oldest trick in the history of scraping and it was reverse engineering these
APIs.

So we would just look like, okay, if we get this session token, We're able to
just send a bunch of curls, and then we're able to recreate this dashboard, but
then for agents. So we turned the whole dashboards into a bunch of tool calls.
So that was really nice. So that was actually, this was less than a day of work.
So I was like, I'm on my schedule, you know, to do it in a day. But yeah, and
then we had the POS. And we thought from the marketing material, this is an
amazing POS, because then we can change the images and the names and the prizes.

wrong. They had a pre-configured list and you could only choose those names,
those images, and you could change the prices. So we were like, that's not good
enough. We want full customized ability. So we took an executive decision. We
said like, let's also build a POS. That added already two extra days to it. So
it wasn't looking well for my let's build this in a day type of situation. But
yeah, so we had a POS we could fully control.

And that's really nice. You see that a lot where companies want to be agent
first and they go full agent native and they just rebuild their product from
scratch. That's basically what we did with M4POS. Maybe this is also a nice spin
off. But it was, so that was the donor step. Okay, so in order to verify whether
we had all steps in order to get this thing done, we needed to kind of test our
toolification, right? So we started with just a simple chatbot running called
SDK.

And we started to attach all these tools we made. And we said, like, are we able
to operate this vending machine for just, you know, a few minutes by just
prompting a bit? Because then we could verify whether we've made all the tools
that were needed in order for this agent to operate. So, yeah, it looks like a
chatbot, but, yeah, that's kind of how you start these agency. You need to try
it. But I think the most important part is that our entire operating of the
vending machine in the POS could just fit in two scales. So we made a scale with
a custom CLI in it and the instructions in that scale of course, where they
would just have all the options to control the machine, you know, opening the
door, dispensing, whatever. And also the POS where it says, hey change an item,
change the price, change the name, and I will tell a bit more about the POS
later.

But so we just verified where everything was working because I think if we have
this we can just give it to an agent and be profitable right? So yeah, oh sorry.
So the first thing that we felt like okay let's do one piece of research in how
we kind of do this agent because I think a a lot of you, when you run an agent,
it doesn't run 24-7. That's really expensive. You know, maybe you do like a
batch sleep, but you kind of see it's not the most efficient way.

So we peeked a bit at the previous vending machine experiment that Claude did,
or Anthropic, and they basically said what would work really well is to just
have a schedule. It sounds boring. It gets more exciting. But we started with a
schedule. So we just said, okay, let's say if I wanted to run this machine,
let's just make a schedule, and that triggers the agent that has all those tools
with all these things to manipulate, and it will wake it up, it will act, and it
will do, and then we would review it.

And what's really important is that we just don't see if the session would
complete, but we actually check whether the result was delivered independently.
because we saw in the beginning that all tasks were green all the time and then
we looked into it was actually not happening so this was already the first thing
like okay this is it apparently this is important when you're working with the
real world you gotta verify it so tasks with verification there was kind of
already it was getting a bit more complicated than the one they built I had in
mind but we continue so under the hood it looks like I'm from Cloudflare I want
to do some promotion, but I just like how easy it is to spin experiments up to
Cloudflare.

And the funny thing is, Cloudflare, I think a month ago or maybe a few weeks,
launched Cloudflare OS. And we were like, why didn't you do that sooner? Because
we basically build it. So yeah, so we took a VM and we added the front end to it
and we ran a Cloud SDK in it. as a game because it had natively sub-agents. We
didn't need to think about how to do skills. It has the bash tool inside of it.
So it was just a vanilla harness because we didn't want to push in the direction
yet. And then we of course gave it the tools. What was really important was of
course the browser and secrets. Because we wanted this to do some interesting
stuff, but we didn't want to leak our secrets so we made our own custom skill
that had a CLI that could inject secrets into code with placeholders whatever
maybe a bit over engineered but we thought it was really useful to have so you
know we didn't leak any secrets to any of the providers so there was the agent
in some sense and this is still kind of basic so I don't think this is I think
many of the VM agents have this but it's a it's just a unique combination of
toolset but what's really important because this is something that I didn't see
with many of the providers is that many people should access this one machine
because the moment AI is running a business or a project what you see is that
it's not my agent it's ours so the most important thing that I think we added
first with which was not yet that readily available, was have multiple people
sign on to it. Because I didn't want to be on holiday and then the agent was
like, help. And then they come back and it wasn't doing anything for a week.

So the idea was that multiple people were able to log in to this machine and
have to see the same exact thing. And that's also what's really nice about
Cloudflare with the durable workers. But that's no promotion. So this is some,
we thought this is like the first step. like it's important that this is
happening. And another thing that wasn't really like a SDK default was the
compacting. Because normal compacting, what does it do?

It summarizes, right? So you will just get a summary of what the previous
conversation is. But if you're running a company, you want to preserve the
direction, the vision. So what we thought was really important that the
compacting, if it did a lot of tool calls, had this business narrative in mind.
So it would always preserve the narrative. And also, if things were really
important, this compacting system was able to write the documents and link it
automatically.

So it was a very complicated way of saying, be smart with the context. Because
you're compacting, you have actually no idea what's being compact. So we gave it
a bit of a direction here, And we thought that would be really helpful. And it
was. So we had everything in place. And here you see the two in the AI house.
These are, you're able to visit these if you're at the AI house. And those who
don't know the AI house, use the QR code.

It's an event space at the process office. Super nice. And Ender is also there.
So if people are trying to handle it, they've probably seen these machines. But
these were the two machines. So these are two out of the six. It's a drink
machine. It's a snack machine. Of course empty, but this was like my picture of
like, hey, ta-da, it's here. And we were fully ready to start. And yeah, let's
just print money, right? Because now I automated it.

But actually now the real work began because at this point I had a lot of fun
and now all the pain began. So let's go over the pain points. That's something I
think people who are building a lot of agents probably would miss thinking about
it. So the first part was let me just test whether these APIs are still live.
And testing these would just mean dispensing. So it would run tests, but it
would be on a live API. So it would just dispense machines.

So one day I would come in the office. Someone said, Boris, I think you need to
check this machine. And I went to the machine, and I dispensed 30 drinks out of
it. And so it was trying to calibrate how much diameter, like it was a hell. It
was like, I was like, why does this agent think it could be able to just test it
a bit? But yeah, so that was the first interesting one where you kind of really
need to be specific which APIs are live and which are not.

I think that's a really good one. And you really saw that these agents, I think
we used Opus 4.8 at the time. These agents are so coding agents. Because if we
said, hey, give me an update, it will give me a change log of things that
changed. I was like, this is so boring. I want KPIs, I want big numbers. I want,
tell me how much money I've been printing. And yeah, you could really see that
it was always trying to put everything in a more coding sense.

So you really see that all that you need to really specify here. And so one
comment, so I got some people say, why don't we put noodles in the machine? And
I thought that was a good idea, So I said the agent, it was listening on the
Slack channel, and the agent said, yeah sure, I will explore some noodles. And
it bought some cup noodles. And the thing, yeah, so it's not that funny for you,
but it didn't fit in the machine, that was the whole point.

So I had all these cup noodles, and I needed to give them away for free, which
was bad for competition. So that was really sad. And then people said, is it
looking out for deals? I was like, I don't have a task for looking out for
deals. let me make a task for finding deals. And it was finding deals. I think
it found 1,100 of them. But we had soap bottles, cleaners, sex on the beach,
cocktail mix. It was just like, ah, he was so proud.

He said, oh my gosh, look, I found this amazing soap bar. I was like, no one's
going to eat the soap bar. So yeah, so it was, you kind of see there was a love-
hate relation. You know, there's agents, like, as a puppy saying, I did the
task, I did so well. I found 1100s, it didn't all do well. Was a lot of browser
costs as well, so that was really bad. But yeah, so these were kind of these
misbehaviors. So I made this meme. Not sure if people know this meme, but it's
like, it was basically a vending machine saying like, okay, I have a bag of
chips, and then returning with the biggest bag of chips it was able to find on
the supermarket.

So I don't know, I found it funny. Apparently not everyone loves the fun of
chips. It's Friday afternoon, so I'll keep it light. It's the last presentation
for most of you, I think for all of you. Okay, so what did we do? We didn't go
with LiDAR. We didn't go LiDAR scandal, taking a made-in-3D model. Maybe next
time, maybe if I had two days. But we just started to specify, okay, if you
order, these are the dimensions. You are a vending machine and people want to
eat what's inside the vending machine.

And it seems stupid, but for me it was clear, like it's a vending machine, it's
in the office, people want to eat. But apparently these agents, you know, just
trying to complete tasks, it was not. So it was very important to kind of like
really, really get all this context in. And so we started to map tasks and then
documents that would be related. It got a bit complicated. I think for those who
remember this, maybe I'll skip over this part a bit.

But we had like these documents and these were able to be written by agents, but
also by humans. So it was kind of like this is the company knowledge, right? But
of course we didn't really know because I never ran a vending machine, so there
was no company knowledge in me. So I was just like, you know, we just let it
run. And while I discover things, I will tell the agent. And that was kind of
this document part. It was just a mount, so it was in the VM as well.

Very useful. Highly recommend. Okay. So I think some of you have already noticed
that sometimes it does the bare minimum. And I think it did really well because
this is kind of what we expected when we said Promote yourself because it was
promoting itself with like Slack text Gemini endpoints, you know, you make it
make a mold make an image and it started to do this Yes, it's an image true We
want this So yeah, so now I was like finally understanding why people would have
like main agent manager and then a marketing agent because you really see That
you need to put you know the specification. What is marketing for?

For humans because the agent just wants to get the message across as if it's
talking to another agent, but we want colors So yeah, so there was a very
interesting one. What we kind of try to to mitigate because what we saw is these
tasks you know we should not see them as static because the task you know if I
do it does like refill the machine you know it's like at some point in the
business you may learn something so we wanted these thoughts to evolve so we
took inspiration from the goal perspective so we started to define goals and
when it would check goals it would check which tasks are associated with the
goal if there are none it would create tasks but was also able to edit these
tasks. So if it would say like, if I want to become the most famous machine in
the world, do you think that one task a week promoting myself is enough?

I don't think so. So the goal would then create more tasks or would do market
research, look at competitors. It would Google for competing autonomous spending
machines. You're like, there's no one there, there's none. But it's right, it's
right, it was really fine. But But like, it was interesting. But instead of
giving it all these tasks, which it was really eager to complete, we started to
give it goals. And one of these goals was of course, make revenue.

And revenue is always important. But then, I think a lot of people ask me like,
how nice is it that this AI runs your vending machine? I was like, I literally
feel I'm running it. Because I was carrying the stock, He was telling me to do
some stuff, and then I was figuring out what I actually like. How do you mean
add this to the machine? Like on top of it? I was confused as well. So I kind of
helped it, and I call this piece, I call it the AI's last mouth.

Because it's really nice that you have a task. I really know that now this is
the most important, but maybe when I'm doing the task, I will encounter
different things. So we built an operator, which was just a button on the POS,
some code, and then I entered this other chat. And it would have my task there.
And then I could ask a thing to clarify. And this really 10x my productivity.
Because instead of an hour with my email open, and then just the other Jumea app
open, figuring out what to do, I was just chatting to this agent, saying, I will
open the door and do these things.

So these roles are the okay. And that really helped me. So I think this AI last
mile thing, I think this is maybe a new market that people kind of think of if
they're trying to help businesses with AI. But it was for me actually most
useful. But yeah, pretty nice that the AI took also care of changing a number.
So yeah, so let's see some results. So this is my business slide. you'd be like
oh you were doing great but actually this part was the free item period I call
it the warm-up because we needed data of course you know we needed data in order
for the agent to determine what the prices were and what popular items were so
it would reorder or reshuffle so we had some free items and then it was able to
make prices and it was ridiculously expensive so that was bad for business and
then it would slowly kind of like increase or decrease prices but then summer
came so what did it do it continued lowering prices like aggressively a lot and
then people realized like oh i can get my protein shake cheaper in here than at
the albert height why do i walk to the albert height it was it was good for
revenue but it was not good for profit and now we're here and that is like i
call it recovery and i think now at some point it's able to at least price these
items a bit. But yeah, so I want to add the token cost, but it was about 300 a
month, so we ran for four months, so we're down bad. But IPO is soon. I've heard
you don't have to make a profit anymore. So it's about revenue. So The multiple,
this is pretty neat, 35.

No, so it was not really good, but I do want to say this. We were competing with
free items. So a lot of like, we had free fruits, we had free bars, we had free
drinks. So it was a hard market. Like AI house was by far our most profitable
machine. Yeah, so I think that was pretty nice. But I saw a lot of people of you
laughing, so I have a challenge for you. So why don't you try it yourself? So
together with Harbor and the agentic foundation, they poked me like, why don't
you make this available for everyone to use?

So we did a vending bench and I tested it, it works and we see the same kind of
behavior with the models. But you're basically able to operate the six machines.
course the elasticity and and those things are simulated uh but it's a real
environment this is real items and um yeah you can try uh you can test your
model maybe you can make an amazing artist and you know drop me a dm and i will
implement it but uh i i love to see you try because we are ready to fail at
running a restaurant.

I want to thank you everyone.

## Q&A

I think the shoe, do you come up with stuff like you're gonna sell cocaine or
cyanide? No, no, no, yeah, maybe because we first said like do snacks, you
know, we already had it in the inventory guard wheels, but the whole thing of
like not giving it guard wheels because we want to see what what it would do
wrong uh because if you give it guardrails you never know if it ever needed to
hit those right so there was like a whole point of like let's just keep
prompts really empty uh because then we really see what's what's lacking and
like the foremost thing is like laziness and it being a code model and not a
business model that was like the foremost two things that came out of behavior
that you needed to steer all the time but definitely do the guard if you do
this in public.

Any other questions? I just had an interesting idea. Since you said that it's
connected to USF, I didn't think I'd change it. I think you're welcome to come
and come and help in the company to go through the restocking port. That's what
I mean. Yeah, so... People are telling me you take one shipping port and then...
So I was thinking about it, so I thought I'd just add some random interns to the
mailing list. It did, so at one day I was going through the agent's log and it
extracted all contacts of the AI team, which I found a bit scary. So it had like
every slack handle and name. I was like, well I never asked it. It was just
starting to map like everyone in the space. So it didn't knew everyone but it
yeah like I was like I was proclaimed operator and maintainer so but I don't
know like maybe next time I will see if it can convince people for some free
snacks to start refit it of course you know it's like of course in reply can you
do it for a bag of chips that could be the nice one but yeah on the phone part
also I got to add like the moment shoot to fable it started to act like customer
support all of a sudden we never asked this to but people would reply and
normally it would have never we didn't do the the live connection but when it
was fable like at some point just started to reply apparently it was scanning
swag and it's like oh I need to reply all this it's a question towards me and
we're like whoa so that was pretty sick it was like the only like model gem that
I was like oh that's That's pretty cool.

What was the question? Yeah, yeah. Was the more aware of the campaign about the
free foods? And was there some strategies to mitigate? No, yeah, people said
like, yeah, like I didn't want to demotivate it, you know? But they didn't see
that because there were free snacks, but not free protein bars, they'd already
figured out that like protein bars and noodles were actually selling. So we just
like only ordered that at some point.

So it was like basically protein shakes, protein bars, beefy and noodles were
like everything. It was all the time ordering at some point. Question. Do you
feel the physical infrastructure is not equipped for AI for the time being, the
physical vending machine? Oh yeah. Yeah, because there was no feedback. Like you
miss sensors, right? Like, yeah, it was kind of like this awareness, I was also
thinking like maybe I should ask just like the ride-sharing people do you know
the moment you order something I would just ask can you make a picture please
you know maybe crowdsource maintenance specs or something because I was missing
this view and I was just like walking around once or twice or three times a week
checking the machines for any quirks but yeah you see that a random vending
machine from the stock it was not suitable.

Yeah, so I was tracking it was like 330 ish in the month that I like a full
month. And when we switched it at Fable at some point, so probably then it
doubled. But yeah, but we were checking like we were storing all the traces. So
we could do analysis like that but yeah but the goal was more like uh the
decisions uh because yeah if you would have asked me do you think you operated
properly when when people was making all these ai guys i was like i don't know
selling 20 cent or one one year or 50 stroke waffles i'm not just gonna make
back the tokens uh question over there can you talk about the benchmark and how
you built it How do you want to solve that?

Okay, so the benchmark. So there was, let's say, some ask as well from the
community to do something with this data. And I think I basically concluded that
it was too little to create an eval, like, for every decision. Because I didn't
know which decisions were actually right or wrong. So we ended up doing a
simulation. Because of simulation, the environment changes. So your agent has
billions of possibilities. So it feels more real world.

And like I said, we really saw that the behavior of which model performed well
on the vending machine was also showing up highest in the benchmark. So there
was some So similarity
