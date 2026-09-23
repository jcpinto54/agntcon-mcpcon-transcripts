---
title: "Catch Them Early"
speakers: [Manik Surtani]
day: fri
date: 2026-09-18
start: "09:07"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 8aa35b674d30dc00950253805bdb7e04
recording: AAIF livestream Day 2, https://www.youtube.com/watch?v=-w6RDNBAI0E&t=262s
contributor: jcpinto54
---

# Catch Them Early

**Manik Surtani** — CTO & Agentic AI Foundation

Co-founder & CTO of the Agentic AI Foundation. Ex-Head of Open Source at Block, ex-VP Engineering (Platform & Cloud) at Cash App, foundational in gRPC's birth, founder of Infinispan, Red Hat veteran, Sequoia Scout, author and angel investor.

*Friday 18 September 2026, 09:07, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 2 on YouTube, from 0:04:22](https://www.youtube.com/watch?v=-w6RDNBAI0E&t=262s)), not an attendee's recording.

## Transcript

Goedemorgen, Amsterdam. Did I say that right? Someone back there was trying to
teach me how to say that just now. How's everyone doing? Good? So scanning the
room, I can see we are at maybe 40% CPU capacity. Maybe there's a memory leak
because of last night's networking drinks. Being patched up with a bit of
espresso, hopefully. So then by now, I'm not going to go into anything too
intense here. The last time I was on a stage like this, I gave a talk like this.

I made the case that the basic plumbing of the agentic world shouldn't belong to
any one company, even if it's open source. Open source needs somewhere neutral
to live. So we went and built that place. That's the AAIF. What I want to talk
about today is what happened next. Not a boring progress report. I promise you
I'm not going to put you through that. And not this early in the morning anyway.
What I want to share is what we got wrong.

And what we're going to do about it. Because I think that's far more
interesting. It turns out that running a foundation isn't just about opening the
front door. You have to think about all the doors, who gets in, how things grow,
and how things can leave. Just to give you a short version of how we got here.
So a couple of years ago, I was at Block at the time, I helped grow an open
source project, a framework called Goose. People found it, people started using
it, they built a community around it, it got really popular.

And then they asked me a very, very reasonable question, who actually keeps this
stuff open? The code was open, the license was permissive, but the trademarks
and the roadmap still sat with one company, mine at the time. And that's not bad
intent, but it is a risk. You don't want one vendor to be able to change the
rules later. So every big shift in technology creates a layer of shared
infrastructure, of shared plumbing. and there's always a short window when we
get to decide whether that layer becomes genuinely open or whether somebody ends
up owning a toll booth and controlling that layer.

The AAIF exists today to help keep that layer open for agentic AI. And things
have moved quickly. We started with three projects. We now have six. There are
now more than 270 member companies in the organization. something like one new
member a day, right, Mazin? I believe you said. The CNCF took roughly two years
to get to 170 members. We passed that point in six months. The growth has been
extraordinary, and I'm genuinely proud of that.

That's cool stuff, right? But the one thing that taught us the most wasn't the
number of member companies or the projects we accepted. It's the work we had to
keep turning away and saying no to. When we created the project lifecycle, we
borrowed very heavily from the CNCF. Why wouldn't you learn from a foundation
that's clearly a leader like the CNCF, right? So our entry bar looked for broad
production use, for diverse group of maintainers, all perfectly reasonable
things to ask for.

The bit that we missed, though, was the world that the CNCF was operating in
when it set that bar. Kubernetes came in with a decade of Borg experience behind
it. Prometheus was already very mature and in production. Cloud was nearly 10
years old, and people had a really good idea of what the cloud stack already
kind of looked like. In that world, that high bar made a lot of sense. There
were projects mature enough to clear it. Now, agentic AI is not there yet.

What is that, two years old? We're still debating what an agentic stack even
looks like, what that shape even is. And of course the most interesting projects
are early. They're not fully baked. So we copied CNCF's bar, but not the
conditions that made that bar work. MCP, A2A, Goose, they all sailed through
that bar. That was fine. And that actually made things worse. It made everything
else look fine for a while, and we thought the bar was a good bar.

But really we only had that one door. And that one door only opened to projects
that were already winning, that already won. And by then we'd missed the point
at which this foundation could really help the most. So the projects that were
coming to us that we noticed, they were not half-baked ideas or anything. I
mean, they were still pretty solid projects. There was a developer tool with
huge traction, strong benchmarks, loads of integrations, but only one person
maintaining it.

There was a context management infrastructure piece that was, again, really
energetic community, but only one or two production users because everyone was
still trying to figure out how to deploy such a tool, such a piece of
infrastructure. So these are all real projects, real community momentum, but
they were also really early in an early market, and we were measuring them as
though the market had already matured. That was a problem.

Now, on the flip side, when things are really early, that's also when governance
is the easiest to add. If you wait until later, that gets much harder. So, well,
we added another way in. We've created a sandbox phase, and now we have sandbox,
growth, and impact. We look at adoption still, community and commitment to the
foundation in each stage, and expect more as the project matures and goes
through the stages. But for Sandbox, just to get started, all you need is
something that works.

You either have some early outside interest or a convincing reason as to why
this thing ought to exist. And of course, you need an active maintainer who's
willing to show up. But that's about it. In return, what do you get? You get a
neutral home. You'll get some basic infrastructure that comes with that. That's
about it. No funding, no marketing push, no promise that we'll make the project
a success. This is not an accelerator.

It's not a startup accelerator, okay? It's basically somewhere where your
project can grow and somewhere where it can grow knowing that it's immature and
young and early and not pretending like it's a mature project. And then you get
to progress onto growth stage, and that's where the evidence gets stronger.
That's where we still want two unrelated organizations, maintain a diversity,
contributions from different organizations over a period of time, and a growth
plan, et cetera, et cetera.

That bar is still there. It's just moved to the right place now. So, keeping us
honest here just a little bit, right, does that sandbox sound like a really
quick way to collect lots of projects? Is that how you end up with a page full
of logos and nobody home? Well, hopefully not. This is why sandbox has a clock.
Every time something goes in the sandbox, the clock starts. There's a check-in
at six months. By 12 months, the project should be ready to apply for growth.

If it isn't, we'll have an honest conversation about whether it should be
archived. And it isn't automatic eviction on day 366 or anything. That's not the
idea. Archival isn't punishment. Sometimes the idea just didn't find its
community. Sometimes stopping is a healthy outcome for that project. Sometimes
the project decides to join forces with another related one. That's actually a
great outcome. What we don't want is a project sitting in sandbox forever
because no one wants to have an awkward conversation.

and each year we're going to publish numbers. How many came in? How many moved
up? And how many got archived? That archive number, if that number is still zero
after two years, I think that means we're being too cautious. We're not letting
enough projects come into the sandbox that will get archived. So neutral
governance feels supportive if you add it early. Add it after the ownership and
habits have hardened and now it feels like a fight.

So sandbox gives us a chance to do that really early, do the easy version of
that. Projects weren't the only place where we made the door too narrow. Our
working groups were originally only open to people from member organizations.
Organizationally that was tidy. It made sense, right? Like a member organization
you get to participate in the working groups. For an open source community that
was a bit silly. Like, we want everyone to participate in this stuff.

The people who wanted to help weren't all working for our member companies, so
we changed it. Anyone can take part now. You don't need to join anything or fill
out a form, just turn up and contribute. Members still get to propose new groups
and provide their chairs, but starting a group and asking other people to spend
time on it is still an expensive thing, so we want someone to own that
responsibility. But that's where we've drawn the line.

Accountability, but not access. is open to everyone. Now, of course, once you
open that door, you also have to be thoughtful about what you create. There's
real demand for a lot of new working groups, agentic memory, context management,
physical and embodied AI, loads of others, and I'd love to get them moving, but
I'm going to pause for a moment. Because if a foundation only knows how to start
things, it eventually fills up with zombies. A group meets twice, a mailing list
goes quiet, one of the chairs changes jobs, and somehow that group is active
forever.

That's not a criticism on the volunteers. It's our job to give the group a good
way to finish. So we're adding a simple lifecycle to the working groups
themselves. Propose, form, operate, review, and when the work is done, wind
down. Nothing heavy, just enough structure to keep the portfolio honest and
healthy. And yes, we are applying that to the groups you already have. we are
retrofitting that governance onto ourselves. Let me leave you with two asks.

If you maintain something promising, apply. You don't need to arrive looking
like a mature company or a finished ecosystem. If there's working code and a
good reason for it to exist and you've got someone committing to maintaining it,
let's talk. And if you're the only maintainer and the project is suddenly taking
off, that's even more reason to talk to us. A neutral home doesn't mean giving
your project away. It gives you somewhere credible to invite other maintainers
to participate.

The second ask is for companies building on this layer. Please show up early. If
your projects rely on... The projects that your company relies on in three years
from now exist today, but they're short of money, they're short of people,
they're short of governance, they're short of expertise. helping now is much
cheaper and easier than dealing with a fork or a collapse of that project later
on. So I want to end with this. If foundations catch good projects early, we
have a chance of keeping them open. Then that's what we're trying to do.
Foundations that catch projects early keep them. Foundations that wait don't.
Thank you very much.
