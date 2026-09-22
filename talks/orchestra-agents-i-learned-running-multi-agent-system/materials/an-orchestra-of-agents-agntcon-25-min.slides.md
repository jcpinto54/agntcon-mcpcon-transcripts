---
title: "An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers"
speakers: [Muhammad Ahsan Ayaz]
session_id: 80826fbc5cc99019699571a6395ab758
kind: slides
deck: an-orchestra-of-agents-agntcon-25-min.pdf
slides: 54
---

# An Orchestra of Agents: What I Learned Running a Multi-Agent System for 5,000+ Developers — slides

**Muhammad Ahsan Ayaz**

*Thursday 17 September 2026, 10:50, Auditorium — Multi-Agent track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`an-orchestra-of-agents-agntcon-25-min.pdf`](an-orchestra-of-agents-agntcon-25-min.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** An Orchestra of Agents / What I learned running a multi-agent system for 5,000+ developers / Muhammad Ahsan Ayaz · GDE in AI & Angular / AGNTCon + MCPCon Europe · Amsterdam · 2026
**Shows.** Nothing beyond the text. Black background, white and purple type, a small dot decoration bottom-right that recurs on every slide of the deck.

## Slide 2 — Scan for Slides & Code
**Text.** Scan for Slides & Code / All links related to this session / The postmortems I'll be quoting / My socials
**Shows.** A purple-on-dark QR code centred on the slide, with a small mobile-phone emoji next to the title.

## Slide 3 — 5,000 developers, 16 agents, one break statement
**Text.** [2026-05-23 19:55] user report: / Q: "any good repos for Google's Antigravity CLI?" / A: "dev.to temporarily unavailable." / 5,000 developers. 16 agents. One break statement.
**Shows.** The user-report snippet sits in a grey terminal-style code block; "break" is highlighted in yellow in the sentence beneath it, foreshadowing the bug the talk builds to.

## Slide 4 — We'll come back to this
**Text.** We'll come back to this.
**Shows.** Nothing beyond the text. Plain black slide, small centred white text — a placeholder card telling the audience the cliffhanger from slide 3 will be resolved later.

## Slide 5 — Who runs an agent in production?
**Text.** Who here runs an AI agent in production? 🙋
**Shows.** Nothing beyond the text and the raised-hand emoji. A poll/audience-participation slide.

## Slide 6 — Who runs more than one, talking to each other?
**Text.** Who here runs more than one... talking to each other? 🙋
**Shows.** Nothing beyond the text and the raised-hand emoji. Second audience-participation slide, narrowing the poll to multi-agent setups.

## Slide 7 — Who found a bug from a user message?
**Text.** And who found their worst agent bug from a user's message instead of their telemetry? 🙋
**Shows.** Nothing beyond the text and the raised-hand emoji. Third poll slide, setting up the talk's theme that telemetry can mislead.

## Slide 8 — The stick-figure prompt
**Text.** prompt: Generate a super realistic image of a programmer using this drawing. Keep the weird pose as much as realistically possible.
**Shows.** A crude white-background stick-figure drawing of a person slumped backward off a chair, feet propped on another chair, reaching for a keyboard at a desk with a monitor — the source sketch fed to an image generator.

## Slide 9 — AI-generated photo of the pose, version 1
**Text.** Nothing beyond the text.
**Shows.** A photorealistic AI-generated image recreating the stick figure's pose: a man in a hoodie and jeans lying face-down and airborne across an office chair and desk, hands on keyboard/mouse, two monitors showing code, grinning at the camera — a deliberately absurd, physically implausible "typing" posture.

## Slide 10 — The prompt-chaining formula
**Text.** [Prompt]
**Shows.** The same stick-figure drawing at top, followed by a "+" sign, the placeholder text "[Prompt]", and another "+" sign — illustrating the recipe (sketch + prompt + more prompt) used to generate the running gag images throughout the deck.

## Slide 11 — Speaker headshot
**Text.** Nothing beyond the text.
**Shows.** A studio-style photo of the speaker (bearded man with glasses, smartwatch, white t-shirt and jeans) standing with arms crossed against a plain light background — a straightforward personal photo, not a generated gag image.

## Slide 12 — AI-generated photo of the pose, version 2
**Text.** Nothing beyond the text.
**Shows.** A second photorealistic AI image of the same "weird pose" gag: a man lying flat across an office chair and desk, typing on a keyboard with two monitors showing code, in a different room/lighting than slide 9.

## Slide 13 — AI-generated photo, feet-up variant
**Text.** Nothing beyond the text.
**Shows.** A photorealistic AI image of a man reclined in an office chair with both feet up on the desk near dual monitors showing code, typing awkwardly from that position, grinning at the camera.

## Slide 14 — AI-generated close-up
**Text.** Nothing beyond the text.
**Shows.** A close, photorealistic AI-generated shot of the same man in a tan hoodie at a desk with three monitors (two showing code) and two mugs, twisted around to grin at the camera with a strained expression — reinforcing the running "programmer in a weird pose" joke.

## Slide 15 — Whoami
**Text.** Whoami / Muhammad Ahsan Ayaz / GDE in AI & Angular / Software Architect / 4x Author, 14M+ OSS installs / Runs codewithahsan.dev (5,000+ devs) / Also me: shipped a `break` statement to 5,000 people 😅
**Shows.** Nothing beyond the text. Bio bullet list with a self-deprecating aside in smaller grey text on the right, tying back to the slide-3 cliffhanger.

## Slide 16 — The problem with being the community
**Text.** The problem with being the community / "How do I start with Angular? Any recent articles worth reading? Also... is anyone here open to mentoring me?" / One Discord message. Three different specialists. One of me. / What could go wrong?
**Shows.** The quoted Discord message sits in a grey highlighted box, italicised, above the framing text.

## Slide 17 — Tom and Jerry cleaning clip
**Text.** Nothing beyond the text.
**Shows.** A still from an HBO Max-branded Tom and Jerry cartoon: Tom, dressed as a maid with a pink apron and bonnet, energetically dusting and vacuuming a room — used as a comedic stand-in for "doing everything at once."

## Slide 18 — Orchestrators route, leaves work
**Text.** Orchestrators route. Leaves work. / One big agent | Every skill in one prompt / Every failure everywhere / Nothing measurable / An orchestra | Specialists with one job each / A conductor that only routes / Failures isolated per seat
**Shows.** Two side-by-side bordered boxes connected by a right-pointing arrow: a red-outlined "One big agent" box on the left listing its problems, and a green-outlined "An orchestra" box on the right listing the benefits of specialization.

## Slide 19 — One bot, sixteen agents
**Text.** One bot, sixteen agents (the abstract says twelve) / The abstract says 12. / My own docs say "12 total"... then list 13. / I counted for this talk. It's 16.
**Shows.** Below the text, a reaction-meme image of a woman looking skeptically sideways in front of a chalkboard covered in trigonometry formulas (sin/cos/tan table, triangles) — a "math is hard, but so is counting agents" joke.

## Slide 20 — The tree
**Text.** The tree / 13 LlmAgents + 3 workflow agents. All gemini-2.5-flash. All in one process.
**Shows.** A hand-drawn-style diagram on a dark panel: root node "community_assistant" branches (labelled Sequential on the left, plain routing in the middle, Sequential on the right) to "onboarding_agent" (itself Sequential, fanning to skill_level, goals, welcome), "mentorship_agent", "projects_agent", "roadmap_agent", "content_agent" (which calls an AgentTool "featured_resources"), and "external_knowledge_agent" (Sequential, fanning via a "Parallel" ExternalFanOutParallel node to gh_researcher, devto_researcher, so_researcher, then to a "synthesizer"). It is the full agent org chart referenced throughout the talk.

## Slide 21 — The root, in code
**Text.** The root, in code / root_agent = LlmAgent( / name="community_assistant", / model=MODEL, # gemini-2.5-flash / instruction=ROOT_INSTRUCTION, / before_model_callback=[pii_sanitizer, inject_current_date], / sub_agents=[ # <-- this list IS the routing table / onboarding_agent, mentorship_agent, projects_agent, / roadmap_agent, content_agent, external_knowledge_agent, / ], / ) / sub_agents gives you LLM-driven routing for free. Each child's description is its routing advertisement.
**Shows.** Nothing beyond the text; a Python code block showing the root LlmAgent definition, with the sub_agents list annotated as the routing table.

## Slide 22 — The busy conductor pitfall
**Text.** ⚠ The busy conductor pitfall / The orchestrator routes. It does not answer. / # BAD: root with tools and opinions of its own / root_agent = LlmAgent( / tools=[search_blog_posts], # <-- root hoards the turn / sub_agents=[content_agent], # ...and content_agent starves / ) / # GOOD: route-only root, all work lives in leaves / root_agent = LlmAgent( / instruction=ROUTING_INSTRUCTION, / sub_agents=[content_agent, mentorship_agent], / )
**Shows.** A warning triangle icon beside the title. Two contrasted Python snippets, one labelled BAD (root agent with its own tools starves its children) and one labelled GOOD (route-only root).

## Slide 23 — Workflow agents: when you stop trusting the LLM
**Text.** Workflow agents: when you stop trusting the LLM / onboarding_agent = SequentialAgent( / name="onboarding_agent", / sub_agents=[ / skill_level_extractor, # output_key="user_skill_level" / goals_extractor, # output_key="user_goals" / welcome_agent, # user-facing, runs LAST on purpose / ], / ) / output_key is scalar: one agent, one state key. Two facts = two silent extractors. State is the contract.
**Shows.** Nothing beyond the text; a Python SequentialAgent definition with inline comments explaining each sub-agent's role and output_key.

## Slide 24 — The fan-out
**Text.** The fan-out / external_knowledge_fan_out = ParallelAgent( / name="ExternalFanOut", / sub_agents=[gh_researcher, devto_researcher, so_researcher], / ) / external_knowledge_agent = SequentialAgent( / name="external_knowledge_agent", # routable name on the WRAPPER / sub_agents=[external_knowledge_fan_out, synthesizer], / ) / GitHub, dev.to, Stack Overflow in parallel. Then one synthesizer voice.
**Shows.** Nothing beyond the text; Python code showing a ParallelAgent wrapped inside a SequentialAgent so the parallel fan-out is followed by a single synthesizer step.

## Slide 25 — The parallel win
**Text.** The parallel win 📊 / time / gh_researcher | 4,463 ms / devto_researcher | 4,570 ms / so_researcher | 5,251 ms / Parallel total | 5,251 ms / Serial would be | 14,284 ms
**Shows.** A two-column timing table (agent name, time) proving the ParallelAgent's total equals the slowest branch (5,251 ms) rather than the sum of all three (which would be 14,284 ms if run serially).

## Slide 26 — The bottleneck didn't disappear, it moved
**Text.** The bottleneck didn't disappear. It moved. / End-to-end turn: 17.6 s / The synthesizer alone: 10.9 s
**Shows.** Below the numbers, a still of Mr. Bean standing smugly in a yellow flower field with his hand on his hip — a comic "well, would you look at that" reaction to the synthesizer eating up most of the remaining turn time after the fan-out was parallelized.

## Slide 27 — Boring tools that never miss
**Text.** Boring tools that never miss / def search_github(query: str) -> dict: / """Search GitHub repositories for a topic.""" # docstring IS the schema / try: / resp = _client.get("/search/repositories", ...) # 10s timeout / ... / except httpx.HTTPError: / return {"status": "error", "detail": "github unavailable"} / # <-- return, never raise / Plain Python functions. ADK derives the tool schema from signature + docstring.
**Shows.** Nothing beyond the text; a Python function tool example annotated to show the docstring serves as the schema and errors are returned as data, not raised as exceptions.

## Slide 28 — So, how much MCP holds this together?
**Text.** So. How much MCP holds this together?
**Shows.** Nothing beyond the text. Plain black slide posing the rhetorical question the next slide answers.

## Slide 29 — Zero
**Text.** Zero.
**Shows.** Below the word, a still from a Steve Jobs "This American Life"-style interview clip (GrowthX-branded) with the caption "ZERO" burned into the video — a meme reinforcing that the system uses no MCP servers internally.

## Slide 30 — Why function tools won here
**Text.** Why function tools won here / One process. I own both ends of every call / Typed dict in, typed dict out... no serialization boundary / No server lifecycle, no auth ceremony, no extra hop to monitor
**Shows.** Nothing beyond the text. Plain bulleted list.

## Slide 31 — Where MCP earns its place
**Text.** Where MCP earns its place / Tools that cross an org boundary: someone else's system, someone else's auth / Tools consumed by clients you don't control: Claude, IDEs, other people's agents / Dev-time tooling, where the server ecosystem is genuinely a gift
**Shows.** Nothing beyond the text. Plain bulleted list, the counterpoint to slide 30.

## Slide 32 — Callbacks: the immune system
**Text.** Callbacks: the immune system / PII sanitizer — Redacts before the model sees it. / Tool cache — 600 s TTL on repeat searches. / Lifecycle telemetry — JSON to stdout. Zero infra. / Date injection — The model learns what "today" is.
**Shows.** Four colour-outlined boxes in a 2x2 grid (red, blue, green, yellow), each naming one callback and its one-line purpose.

## Slide 33 — May 2026, the bot recommends
**Text.** May 2026. The bot recommends... / "Front-end Weekly News Week - 18" / published 2020
**Shows.** The quoted recommendation sits in a grey box, showing the bot surfaced a five-years-stale article. Below it, a photo of a bald man in a padded vest and plaid shirt standing with hands on hips outdoors — a reaction/meme image, seemingly the same speaker photo reused, expressing exasperation.

## Slide 34 — The fix is ten tokens
**Text.** The fix is ten tokens / def inject_current_date(callback_context, llm_request): / today = datetime.now(timezone.utc).strftime("%Y-%m-%d") / llm_request.append_instructions([ / f"Today is {today} (UTC). When surfacing third-party " / f"content, prefer the most recent items unless the user " / f"asks for historical material." / ]) # <-- system_instruction, not a get_date TOOL (that costs a round trip) / Verified with a query about a tool announced 2 days earlier: all 5 repos dated inside those 2 days.
**Shows.** Nothing beyond the text; the Python callback that injects the current date as a system instruction rather than exposing it as a callable tool.

## Slide 35 — A websocket bot on serverless
**Text.** A websocket bot on serverless (yes, really) / --min-instances=1: scale-to-zero hangs up the Discord websocket / --max-instances=1: in-memory sessions... two instances = split-brain memory / --no-cpu-throttling: Cloud Run throttles CPU between requests. A websocket bot's work happens between requests. / PYTHONUNBUFFERED=1: or the stdout telemetry pipeline just... buffers
**Shows.** Nothing beyond the text. Bulleted list of Cloud Run deployment flags, each with a yellow-highlighted flag name and the reason it's required for a long-lived websocket process.

## Slide 36 — The epilogue
**Text.** The epilogue 💸 / Always-on + unthrottled CPU = instance-based billing / 1 vCPU rented 24/7 ≈ $47 / month. The free tier covers ~50 hours of it. / Today the same container runs on an Always-Free e2-micro VM: ~$3-4 / month / Same Dockerfile, same image. The flags that keep a websocket bot alive on Cloud Run are the flags that make it expensive there.
**Shows.** Nothing beyond the text. Cost breakdown comparing Cloud Run instance billing (~$47/month) against an Always-Free e2-micro VM (~$3-4/month) running the identical container.

## Slide 37 — Sanitized, cached, instrumented, deployed
**Text.** So: sanitized, cached, instrumented, deployed. / Nothing could go wrong. Right?
**Shows.** Below the text, a cartoon dog (the "This is fine" meme character) sitting at a table with a mug amid a room fully engulfed in flames — signalling the postmortem section that follows.

## Slide 38 — The night the telemetry lied
**Text.** The night the telemetry lied / [2026-05-23 19:55] user report: / Q: "any good repos for Google's Antigravity CLI?" / A: "dev.to temporarily unavailable."
**Shows.** Nothing beyond the text; the same grey terminal-style code block with the user report shown earlier on slide 3, now used to open the incident narrative.

## Slide 39 — The loop that looked correct
**Text.** The loop that looked correct / async for event in runner.run_async(...): / events_seen.append(event) / if event.is_final_response() and event.content: / response_text = event.content.parts[0].text or "" / break # <-- the entire incident / Reads perfectly. Reviewed. Shipped. Wrong.
**Shows.** Nothing beyond the text; a Python event-loop snippet with the `break` statement called out as the root cause of the incident.

## Slide 40 — The docstring I didn't read slowly enough
**Text.** The docstring I didn't read slowly enough / "...when multiple agents participate in one invocation, there could be one event has is_final_response() as True for each participating agent." / ADK's own Event.is_final_response docs.
**Shows.** The quoted docstring passage sits in a grey highlighted box, italicised, with the key phrase "for each participating agent" in bold — the detail that broke the loop on slide 39.

## Slide 41 — The fastest agent wins, the fastest agent was broken
**Text.** The fastest agent wins. The fastest agent was broken. / dev.to 404s on the two-day-old tag → error dict → done in 1.2 s / GitHub: 2.4 s. Stack Overflow: 2.6 s. The synthesizer: never heard from / My "graceful degradation" is now the bot's answer
**Shows.** Nothing beyond the text. Bulleted list with an arrow showing the dev.to error path finishing fastest and, because of the early break, winning the race to become the user-facing answer.

## Slide 42 — And then the break pulled the pin
**Text.** And then the break pulled the pin / break → GeneratorExit → asyncio.TaskGroup cancelled mid-flight / Root + synthesizer exit callbacks: never fired / The bug corrupted the telemetry built to catch it.
**Shows.** Nothing beyond the text. A causal chain diagram in text form (break → GeneratorExit → TaskGroup cancelled), explaining why the lifecycle telemetry callback from slide 32 silently failed to record the incident.

## Slide 43 — How long? Since the fan-out shipped
**Text.** How long? Since the fan-out shipped. / The synthesizer's reply had never once reached a user. / "Local adk web drains the entire event stream, so synthesizer output always rendered. The smoke test was a false positive." / The dev tool was more forgiving than production.
**Shows.** The quoted explanation sits in a grey highlighted box, italicised, with "adk" and "web" highlighted in yellow — explaining why local testing never caught the bug.

## Slide 44 — 37 minutes, the fix
**Text.** 37 minutes. The fix: drain everything, keep the last word. / async for event in runner.run_async(...): / events_seen.append(event) / if event.is_final_response() and event.content and event.content.parts: / text = event.content.parts[0].text or "" / if text: / response_text = text # keep latest; synthesizer wins / # no break. The stream ends when the stream ends. / Report 19:55 → root cause 20:01 → deployed 20:32. Leaves speak first, orchestrators speak last.
**Shows.** Nothing beyond the text; the corrected Python loop with the `break` removed and a comment explaining the fix, plus an incident timeline in the caption.

## Slide 45 — The clean trace
**Text.** The clean trace / agent.enter gh_researcher 20:33:43.220 / agent.enter devto_researcher 20:33:43.220 / agent.enter so_researcher 20:33:43.221 / agent.exit devto_researcher 1365ms 20:33:44.586 / agent.exit so_researcher 5009ms 20:33:48.229 / agent.exit gh_researcher 7025ms 20:33:50.246 / agent.enter external_knowledge_synthesizer 20:33:50.248 / agent.exit external_knowledge_synthesizer 3637ms 20:33:53.883 / agent.exit community_assistant 13072ms 20:33:53.884 / Three leaves entering within 1 ms. Every enter pairs with an exit. This is what healthy looks like.
**Shows.** A monospace telemetry log table (event, agent name, duration, timestamp) showing a clean post-fix trace where every agent.enter is matched by an agent.exit.

## Slide 46 — The confession, and the fix for the fixer
**Text.** The confession, and the fix for the fixer / That night, I never wrote the regression test. / async def test_synthesizer_beats_fastest_leaf_in_fan_out_race(): / events = [ / _final("devto_researcher", "dev.to temporarily unavailable."), / _final("gh_researcher", "Found 5 GitHub repos."), / _final("so_researcher", "Found 4 Stack Overflow questions."), / _final("external_knowledge_synthesizer", synthesizer_answer), / ] / text = await drain_final_response(_stream(events, []), events_seen=[]) / assert text == synthesizer_answer / Written while preparing this talk. It passes. It would have failed for weeks.
**Shows.** Nothing beyond the text; a Python async test simulating the fan-out race to confirm the synthesizer's answer wins, admitted by the speaker to have been written only while preparing the talk, not at the time of the original fix.

## Slide 47 — The one I haven't fixed
**Text.** The one I haven't fixed / Leaves don't get opinions about scope. That's the orchestrator's job... in both directions. / Captured last night, rehearsing this talk. Fix is still a proposal doc. Find me after and tell me where it's wrong.
**Shows.** Two side-by-side screenshots: on the left, an ADK event-inspector panel showing a trace tree, event metadata (finishReason "STOP", token counts, invocation id, author "projects_agent"); on the right, a chat debug UI showing a session where the user asks "Can you find the code-with-ahsan github repo?" and multiple transfer_to_agent hops occur, with agents replying "I can't help you find GitHub repos, as I can only search for articles on dev.to" and a Stack Overflow-scoped agent giving a similarly out-of-scope refusal, before a search_github_repos tool call finally returns the correct repo — illustrating leaf agents wrongly asserting scope opinions.

## Slide 48 — What the user actually sees
**Text.** What the user actually sees / Muhammad Ahsan · @CWA Assistant · 11:21 PM / @CWA Assistant Can you find the code-with-ahsan github repo? / The GitHub repository for "Code with Ahsan - Community Platform" is: https://github.com/ahsanayaz/code-with-ahsan. / Let me know if you'd like to explore this project further or get its contribution guide. / Same night, same query, through the fixed drain loop: the synthesizer's answer, refusals swallowed.
**Shows.** A Discord chat screenshot showing the bot's clean final answer to the same query as slide 47, with the earlier refusal messages from the leaf agents no longer visible to the user, thanks to the drain-and-keep-last-word fix.

## Slide 49 — Patterns cheat sheet
**Text.** Patterns cheat sheet / Pattern | When | The gotcha / LLM auto-transfer routing | intent is genuinely open | route-only root: no tools, no opinions / SequentialAgent + output_key | order must be guaranteed | keys are scalar; state is the contract / ParallelAgent fan-out | independent I/O branches | total = slowest branch + the merge / Function tools | you own both ends of the call | return error dicts, never raise in a branch / MCP | tools cross an org/client boundary | don't pay a server hop for your own code / Callbacks | cross-cutting concerns | fail open: try/except, return None / Cloud Run for a gateway bot | request-driven work only | always-on flags flip it to instance billing; a tiny VM wins
**Shows.** A seven-row, three-column summary table recapping every pattern covered in the talk with its use case and pitfall.

## Slide 50 — Patterns cheat sheet, continued
**Text.** Pattern | When | The gotcha / Event-stream drain | any production runner | is_final_response() fires per agent
**Shows.** An eighth table row, apparently scrolled/continued from slide 49, adding the event-stream-drain pattern and its gotcha (that is_final_response() fires once per participating agent, the bug at the heart of the talk).

## Slide 51 — Resources & Code
**Text.** Resources & Code 📱 / The repo · the postmortems · the soak logs · these slides
**Shows.** A purple-on-dark QR code centred on the slide, matching the style of slide 2, linking to the talk's repo, postmortems, logs and slides.

## Slide 52 — The one thing to remember
**Text.** The one thing to remember / Determinism where you can. / An LLM only where you must. / And drain the whole stream. / Orchestrators route. Leaves work. Production keeps the receipts.
**Shows.** Nothing beyond the text. Plain black slide with the talk's closing thesis in large centred type and a grey subtitle beneath.

## Slide 53 — Thank you, Amsterdam
**Text.** Thank you, Amsterdam 🇳🇱 / Muhammad Ahsan Ayaz / 🌐 codewithahsan.dev / 🐦 @codewith_ahsan / 💼 linkedin.com/in/ahsanayaz / Code from today: github.com/AhsanAyaz/code-with-ahsan / Q&A - ask me anything (especially about the unfixed bug)
**Shows.** Nothing beyond the text. Closing contact-details slide with a Dutch flag emoji next to the title, split into a personal-links column and a code-repo column.

## Slide 54 — Closing card
**Text.** @codewith_ahsan
**Shows.** A near-black slide with only a small code-bracket logo icon and the handle "@codewith_ahsan" in the bottom-left corner — a minimal closing/end card.
