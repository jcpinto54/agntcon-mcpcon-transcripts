---
title: "The Browser Isn't Dead Yet"
speakers: [Rachel-Lee Nabors]
day: thu
date: 2026-09-17
start: "15:28"
room: Auditorium
track: Keynotes
kind: keynote
session_id: 62fd1975975b275115e7552ba6d5c26f
recording: AAIF livestream Day 1, https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=23616s
contributor: jcpinto54
---

# The Browser Isn't Dead Yet

**Rachel-Lee Nabors** — Founder & Mima.social

Founder of Mima.social. A decade making hard tech approachable: award-winning dev portals, standards and education with the React team and MDN, pushing the web forward with browsers.

*Thursday 17 September 2026, 15:28, Auditorium — Keynotes track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.
> Source: the Agentic AI Foundation's livestream of the Auditorium ([Day 1 on YouTube, from 6:33:36](https://www.youtube.com/watch?v=hbH2RbUBZQ0&t=23616s)), not an attendee's recording.

## Transcript

It's so good to see you out there today. How are we feeling? Oh, you're still
recovering from that delicious dinner. I understand. I enjoyed the beef myself.
Hello. It's so good to see you all. Fun fact, I actually lived in Amsterdam for
a full year working for Booking. So who here has worked for Booking in the past?
It's okay. Put your hand up. Nobody's judging. All right. So you might remember
my work from building the web forward on Edge and Firefox dev tools and the W3C
back in the day.

Last year, I gave this talk in a couple of places saying the browser has already
died. It just hasn't stopped moving yet. But obviously, it's taking a little bit
of time. The browser is still around, and we still do not have Jarvis in our
pockets. So what's taking so long and when can we uninstall Chrome and move on
to our personal AI assistance, right? Well, we have been noticing changes in how
people are using their browsers They're still using them. But how they are using
the Internet is changing AI summaries and search results on Google and in agents
are actively depressing traffic to websites in 2025 Pew found AI summaries in
search results would decrease click-through rates by 50% and a follow-up study
in 2026 by Ahrefs I don't know how you pronounce this, Ahrefs, Ahrefs, found a
58% decrease. So in general AI summaries and search results have an impact
whether they're coming from your agent in which case only about 1% of links
inside those summaries are ever clicked or they're coming from Google. This is
impacting shopping, advertising and content creation right now.

All right, there we go. Non-human traffic is increasing as well. Bots make up
more than half of the traffic on the web right now, and most of it is scrapers
for training data, but some of it is agents, people's personal assistants,
ChatGPT and Claude. Keep in mind that it took just nine years after the launch
of iPhone for mobile traffic to exceed desktop traffic on the web. And we can
assume that something similar is going to happen with traffic moving from apps
and the web to agents.

That means we're like, what, three years in from the inception of ChatGPT, and
if history rhymes, that means agent traffic for people using agents will eclipse
human browsing around 2032. So the clock is ticking. Browsers are evolving in
response to this. They're evolving to stay relevant. It started with extensions.
You could put Claude right there in the browser. It could summarize pages for
you. ChatGPT, of course, an extension for your browser. But now we also have
browsers that have agents inside them. Browsers with internal agents. You've got
Gemini inside Chrome and you've got like Copilot inside Edge and Samsung with
who knows what that is, but it's annoying it shows up every time I every time I
use my my TV And guess what now you have agents with internal browsers. We put
we heard you like agents so much We just stuck a browser in them Atlas was a
browser from OpenAI, but it was quickly absorbed into ChatGPT To be it's sort of
web view if you've seen the browser inside ChatGPT. That is what happened to axe
Atlas. And browsers out there right now, there are some that are agents. And
they use the browser's window as a GUI, so to speak. These are what I call
agentic browsers, like Dia and Strawberry, and they are essentially an agent
with a browser fully merged into one. And my particular favorite one is Comet
from Perplexity. Perplexity was just in court with Amazon who claimed the
Computer Fraud and Abuse Act and bad user experience.

They said, Perplexity has released this browser that is automating people's
shopping on our website, our surface that we control. Terrible. We can't have
this, please shut them down. And in 2025, the Fed said, yeah, you should
probably stop doing that. But then in 2026, just a month ago, Fed Appeals Court
overturned that preliminary injunction and said, you know what, we disagree.
They ruled that when you direct an agent, essentially the agent is you. Very
important to the future of the web, as well as agentic automation. This case,
and others that will follow like it, set a precedent about who is responsible.
It is the first of many that will determine how much agents are legally able to
do on the web and who is liable for that activity. Many site owners want to
control user attention and monetize it, and agents break that equation and upset
that profit model. Whether agents on the web act as extensions of their users or
advocates still is being determine. But the browser, it carries your passwords,
it authenticates as you. And with AI and court rulings, it's now increasingly
being seen as an advocate on your behalf.

So there are three major technologies you should be looking at if you're
thinking about becoming agent ready. How many of you actually work at a company
that has a website? There you go. Yeah, so this is pertinent. You can go home
and say, this were the top three things I learned and you should send me to this
conference again next year. Alright, WebMCP. I know this is news to a lot of you
but we still have some great WebMCP talks in the lineup. I'll share them at the
end. It makes every HTML page a mini MCP tool server. It's mostly inspired by
the MCP spec but it's not actually conforming to it. It's kind of like Java is
to JavaScript, what MCP, WebMCP is to, well, MCP is to WebMCP. But this is an
example of what it looks like.

Here I'm using the ChatGPT browser to access, I also used to be an award-winning
cartoonist, I revamped my site to have an MCP server, MCP app, and WebMCP. And
now you can talk to ChatGPT and say, go find the comic that starred one
particular character and then take me to that page and it will use the WebMCP
tools made available through my website to navigate to and interact with the
comic on the user's behalf. And it does this a lot faster than if it was taking
screenshots or scraping the DOM and round tripping with a big model with all
this extra token consumption. How many of you have MCP servers in production
that are public facing?

Less of you. Okay. I won't go into what an MCP server is because you're here and
I assume you know better. Web ones, they're a lot of fun. With HTTP based MCP
servers, it's a little complicated to add them as a connector to an agent like
ChatGPT. But here, all I had to do was put in rachelthegreat.com slash mcp, and
boom, all of those tools registered so that now when I'm in Claude, I can ask it
things about my comics and it can return them.

Now an MCP server can also host an MCP app. MCP apps are in-agent rich
experiences. They're interactive. They're similar to the widgets of the early
web development that we briefly experimented with their HTML, CSS, and
JavaScript in a single file. Not unlike shipping a little mini site, it even
uses an iframe. This is what it's like in action. It brings up a little comic
book reader right there inside chat. And the best part is that you can reuse a
lot of your design system and components when you're shipping one of these.

It's not too hard to put an MCP app together with a build script. So far, you've
been seeing ways we've been pushing UI and data to the web. But what if you
could push just data and UI, just the data and the UI inside the chat would
adapt to what you were pushing in. And this is where A2UI shows up. It's a JSON
format that lets agents compose interfaces from a catalog of components. So you
might buy an agent like ChatGPT and it ships with its own equivalent of material
design and you'd just be signing up for a comic book feed and it would go, it
would get the pages and it would determine what a carousel or a comic book
reader would look like using those components. In the future we're probably
going to see operating systems go in this direction, taking feeds directly from
providers on the web and creating bespoke UI on the fly.

No tools, no UI being pushed down the line, but data being combined with UI
that's provided by the agent itself. So what do you got to do to prepare for
this agentic future which is, albeit just around the corner, but still probably
like five years out from seeing the complete degradation of browser and website
experiences? Well first you got to ask yourself, discovery for MCP apps and
servers isn't that great right now, so it really comes down to your users. You
have to ask yourself, are they using agents? And does it benefit you to make
some things easier for users to do via agent? If you answered yes to either of
these or both of them, it's worth going on and figuring out what to adopt and
what to not. I recommend adopting Web MCP. It's really easy. Pop it onto the
forms that you have. It's a low lift. And it gives great benefits when browsers
adopt it. Deploy an MCP server. Everyone's doing it. It's in fashion. Just go
ahead. See what happens. It takes about a year for people to start using it, and
you'll start seeing traction there. Consider an MCP app. The discovery story on
MCP apps is not there right now, so it's something to look at and to consider,
especially if the MCP app store really takes off inside something like ChatGPT,
then you want to be there for that.

So consider it more as like a R&D investment. And you want to investigate A2UI,
as this is the thing that will start something like this will be picking up as
the web surface really starts to shift over to agents. Look inside your org for
people to team up with. Front end team, they can help implement WebMCP. API and
back end team help figuring out what goes into an MCP server and who's going to
maintain it. And your design system team is going to be there for you on MCP
apps and figuring out what A2UI is going to look like when you're shipping your
services to an unpredictable UI surface.

Now, I've worked in web standards and gotten the industry to adopt new ways of
building in the past, and I got to say that the web comes down to what we build.
It doesn't evolve if we don't build. We are browsing differently, and it's time
to build differently. Back end, front end design, we have to build the future of
the web together. We are all allies in building this agentic web. So we've got
the MCP core team here. Talk with them.

Tell them what you are looking for, what you need. Go to these awesome talks.
There are many more happening tomorrow. We missed a couple of good ones today.
Take a photo of it if you can. And I can't wait to build the web forward with
you all. Thank you for coming today.
