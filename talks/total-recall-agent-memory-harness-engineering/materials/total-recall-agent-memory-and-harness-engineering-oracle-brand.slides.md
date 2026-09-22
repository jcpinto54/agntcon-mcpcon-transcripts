---
title: "Total Recall: Agent Memory and Harness Engineering"
speakers: [Ignacio Martinez]
session_id: e190753c9a27025eebdb6e7e15e006f9
kind: slides
deck: total-recall-agent-memory-and-harness-engineering-oracle-brand.pdf
slides: 52
---

# Total Recall: Agent Memory and Harness Engineering — slides

**Ignacio Martinez**

*Thursday 17 September 2026, 10:15, G106 + G107 — Workshops track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`total-recall-agent-memory-and-harness-engineering-oracle-brand.pdf`](total-recall-agent-memory-and-harness-engineering-oracle-brand.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** ORACLE | AI Developer Experience / Total Recall: Agent Memory and Harness Engineering
**Shows.** A dark teal gradient title slide with the Oracle "AI Developer Experience" wordmark top right and the talk title in large white/bold type on the left, no other imagery.

## Slide 2 — Workshop instructions QR
**Text.** WORKSHOP INSTRUCTIONS / workshopwaitingroom.com
**Shows.** A large QR code centred below the URL, on a dark teal background, inviting attendees to scan and follow along with a hands-on workshop.

## Slide 3 — Join the workshop registration screenshot
**Text.** JOIN THE WORKSHOP / Drop your GitHub handle below. We'll add you to jasperan-org/agent-harness-workshop with write access so you can run the workshop in Codespaces. / GITHUB HANDLE / jasperan / Nacho Martinez @jasperan VIEW → / REGISTER ME
**Shows.** Screenshot of a dark-themed web form ("workshopwaitingroom.com") with a GitHub-handle text field pre-filled "jasperan", a resolved profile card showing Nacho Martinez's avatar and GitHub handle with a "VIEW" link, and a white pill-shaped "REGISTER ME" button.

## Slide 4 — "You're in" confirmation screenshot
**Text.** YOU'RE IN. / You already have write access to @jasperan. / NEXT STEPS / 1. Open the repo. / 2. Open the repo: jasperan-org/agent-harness-workshop / 3. Hit CREATE CODESPACE below — it launches preconfigured (4-core · US West). / CREATE CODESPACE → / OPEN REPO → / [ REGISTER ANOTHER ]
**Shows.** Screenshot of the same dark-themed workshop site now showing a confirmation state with a numbered next-steps box and three call-to-action controls: a white "CREATE CODESPACE" pill button, an "OPEN REPO" link, and a "REGISTER ANOTHER" text link.

## Slide 5 — GitHub repository screenshot
**Text.** jasperan-org / agent-harness-workshop / @jasperan has invited you to collaborate on this repository / View invitation / agent-harness-workshop Public / Watch 0 Fork 0 Star 0 / main · 1 Branch · 0 Tags / README / Total Recall — Agent Harness Workshop / Open in GitHub Codespaces / About: Total Recall: build a self-improving agent harness on Oracle AI Database 26ai, with Grok on OCI. Hands-on workshop (student + instructor... [truncated]) / Build a self-improving agent harness from the ground up on a single Oracle AI Database — and watch the same harness running in your browser as you build it. The agent persists its own memory, grounds itself in your schema's meaning, turns the work it does into reusable skills and scheduled automations, and keeps its context window flat — all inside the database.
**Shows.** Screenshot of a GitHub repository page for jasperan-org/agent-harness-workshop. A collaboration-invitation banner near the top has its "View invitation" button circled in red, and the "Open in GitHub Codespaces" button below the README heading is also circled in red, directing the viewer to those two actions.

## Slide 6 — Who Am I (speaker bio)
**Text.** Who Am I? / Data Scientist Advocate @ ORACLE / Find my talks and projects on YouTube + GitHub / Launched two courses this year with Andrew Ng on Building Memory-Aware Agents
**Shows.** A bio slide with orange "Who Am I?" heading on the left and four photos on the right/bottom: the speaker presenting on stage at an "AI Dev World" event with a laptop benchmark table of model latency/throughput numbers (Prompt/Lat/TTFT/Tok/TPS for gomma3 7B, gomma3 27B and OCI GenAI) shown on a screen behind him; a group photo with Andrew Ng and Oracle colleagues in front of an "Oracle AI Database" architecture diagram poster; and a casual group selfie with four people, one wearing an Oracle-branded polo, in front of a monitor reading "Building ... Agents".

## Slide 7 — DeepLearning.AI course page screenshot
**Text.** DeepLearning.AI / Courses News Community Membership For Business / All Courses > Short Course > Building Adaptive AI Agents / Short Course · Intermediate · 1h3m / Building Adaptive AI Agents / Instructors: Nacho Martínez, Casius Lee / ORACLE / Earn an accomplishment with PRO / Enroll Now / Build Adaptive AI Agents
**Shows.** Screenshot of the DeepLearning.AI course landing page for "Building Adaptive AI Agents", showing course metadata badges, an Oracle logo, an "Enroll Now" button, and a course preview thumbnail of two presenters (one in a black Oracle polo, one in a grey Oracle polo) next to a red play button.

## Slide 8 — Agenda
**Text.** AGENDA / What we'll talk through. / 01 The agent stack — application to compute / 02 The four shapes — form factor, evolution / 03 What is an agent — model + harness = agent / 04 Inside the harness — the layers, one by one / 05 The memory substrate — filesystem + database / 06 Find it, recall it — encoding, retrieval, memory / 07 Ground it, drive it, fit it — semantic, loop, context / 08 Continual learning — weight, latent, token space / 09 One substrate — it all runs on Oracle
**Shows.** A two-column numbered agenda (01–05 left, 06–09 right) on a dark teal background, each item with a bold title and a smaller grey subtitle underneath.

## Slide 9 — The agent stack (five layers)
**Text.** SETTING THE CONTEXT / THE AGENT STACK / Application — the agent users interact with: the product surface / Data — memory, knowledge and retrieval: what the agent knows / Model — the reasoning core: the LLM that decides / Infrastructure — orchestration, serving and security: how it runs / Compute — GPUs and the database engine: the hardware underneath
**Shows.** Five stacked horizontal bars, each with an icon (speech bubble, database, brain, layered squares, chip) representing one layer of the stack, listed top to bottom in the order Application, Data, Model, Infrastructure, Compute.

## Slide 10 — The agent stack, Data highlighted
**Text.** SETTING THE CONTEXT / THE AGENT STACK / Application — the agent users interact with: the product surface / Data — memory, knowledge and retrieval: what the agent knows — we are here / Model — the reasoning core: the LLM that decides / Infrastructure — orchestration, serving and security: how it runs / Compute — GPUs and the database engine: the hardware underneath
**Shows.** The same five-layer stack diagram as the previous slide, but the "Data" bar is now outlined in orange with a "we are here" label, marking where the talk is about to focus.

## Slide 11 — The data layer, unpacked
**Text.** SETTING THE CONTEXT / INSIDE THE DATA LAYER / DOUBLE-CLICK THE DATA LAYER / The data layer, unpacked. / Double-click the data layer: an orchestrator drives the app, a gateway fronts it, and memory, meaning, retrieval and context sit under one security boundary. / Gateway & MCP — connectivity to tools and data / Memory Layer — episodic, semantic, working / Semantic Layer — what the schema means / Retrieval Layer — keyword, vector, rerank / Context Layer — compaction and offloading / Tools & Skills — searchable memory
**Shows.** Left side repeats the five-layer stack (Agent Orchestrator above Application/Data/Model/Infrastructure/Compute), with "Data" highlighted and a line branching right into six detailed sub-layer boxes (Gateway & MCP, Memory, Semantic, Retrieval, Context, Tools & Skills), all bracketed on the right under a shield icon labelled "Security".

## Slide 12 — Four shapes AI applications take
**Text.** WHERE THE FIELD IS TODAY / Four shapes AI applications take. / AI Application — LLM Chatbot / RAG Applications / LLM-Driven Workflow (Automation) / AI Agents (Autonomy)
**Shows.** A simple tree diagram: "AI Application" on the left branches via an orange line into four stacked boxes on the right — LLM Chatbot, RAG Applications, LLM-Driven Workflow (Automation), AI Agents (Autonomy) — all in the same white/teal styling with no emphasis yet.

## Slide 13 — What is an AI Agent
**Text.** WHAT THE AGENT DOES / What is an AI Agent / Agent / An autonomous computational entity whose cognitive functions are powered by a language model for reasoning, augmented by a database for memory, extended through tools for action, and grounded in inputs that let it perceive its environment.
**Shows.** A small "Agent" box on the left beside a definition paragraph on the right, on a plain dark teal background with no diagram.

## Slide 14 — Reasoning, memory, tools, perception
**Text.** THE ANATOMY / WHAT AN AGENT IS MADE OF / Reasoning, memory, tools, perception. / Agent / Reasoning — the frontier LLM / Memory — what it knows & has done / Tool use — how it acts / Perception — how it sees inputs / Frontier AI labs (the model) / Agent engineer / you (the harness, the infrastructure you build and own)
**Shows.** An "Agent" box at the top connects down to four component boxes (Reasoning, Memory, Tool use, Perception) each with its own icon, and a horizontal bar beneath splits responsibility: an orange segment under "Reasoning" labelled "Frontier AI labs (the model)" versus a grey segment spanning the other three labelled "Agent engineer / you".

## Slide 15 — Four shapes AI applications take (repeat)
**Text.** WHERE THE FIELD IS TODAY / FORM FACTOR, EVOLUTION / Four shapes AI applications take. / AI Application — LLM Chatbot / RAG Applications / LLM-Driven Workflow (Automation) / AI Agents (Autonomy)
**Shows.** The same tree diagram as slide 12 (AI Application branching into four application shapes), now with a "FORM FACTOR, EVOLUTION" tag added top right; no branch is highlighted yet.

## Slide 16 — Four shapes AI applications take, automation and agents highlighted
**Text.** WHERE THE FIELD IS TODAY / FORM FACTOR, EVOLUTION / Four shapes AI applications take. / AI Application — LLM Chatbot / RAG Applications / LLM-Driven Workflow (Automation) / AI Agents (Autonomy)
**Shows.** The same tree diagram again, but this time the bottom two boxes — "LLM-Driven Workflow (Automation)" and "AI Agents (Autonomy)" — are highlighted in orange text, setting up the next slide's theme of automation and autonomy converging.

## Slide 17 — Automation and autonomy converge
**Text.** WHERE THE FIELD HEADS / AUTOMATION + AUTONOMY CONVERGE / Automation and autonomy converge. / AUTOMATION — The developer fixes the path. Reliable, repeatable, but rigid. / AUTONOMY — The model chooses the path. Flexible, general, but harder to trust. / Agentic systems — automate the routine, decide the rest / IN THE WILD / OpenAI Codex — delegated coding agent / Claude Cowork — agentic knowledge work / Claude Code — terminal coding agent / OpenClaw — open-source personal agent / Hermes (Nous Research) — self-improving skills + memory / The frontier products are already here: agents that automate what is routine and decide what is not.
**Shows.** Two boxes (Automation, Autonomy) both feed with orange arrows into a central "Agentic systems" box, which connects via a grey line to a list of five real-world examples (OpenAI Codex, Claude Cowork, Claude Code, OpenClaw, Hermes) on the right.

## Slide 18 — What is an agent harness
**Text.** DEFINITION / AGENT HARNESS / What is an agent harness / The engineering scaffolding around a model and its agent loop: the memory, retrieval, tools, context and control layers that turn a capable but stateless LLM into a system which produces reliable, repeatable outcomes, run after run. / Why it matters the model supplies raw capability; the harness is what makes that capability dependable. Agent = model + harness.
**Shows.** A layered-squares icon on the left beside the definition text, with an orange-outlined callout box at the bottom stating the "Agent = model + harness" equation.

## Slide 19 — Components of a Dependable System
**Text.** THE REFRAMING / Components of a Dependable System / Agent = Model + Harness / Reasoning / Memory / Tool use / Perception / frontier AI labs · the part you rent / agent engineer / you · the harness you build and own / Reasoning is the part you rent. Memory, tools and perception are the harness you build, along with the other surfaces that support them (prompts, retrieval, sandbox, observability, and more). / Guidance. A good agent harness produces reliable, predictable output regardless of which model you swap in. Memory, tools, and perception are yours to engineer; reasoning is the part you rent.
**Shows.** An equation-style diagram: "Agent" = "Model" + a wide orange "Harness" bar; the Model box connects down to a "Reasoning" box, and the Harness bar connects down to three boxes (Memory, Tool use, Perception), each captioned with who owns that layer (frontier labs vs. the engineer).

## Slide 20 — We'll dissect it layer by layer
**Text.** HARNESS, LAYER BY LAYER / SEVEN LAYERS, ONE CONTAINER / INSIDE THE HARNESS / We'll dissect it layer by layer. / AGENT HARNESS — everything inside is what you build and own / 1 Model layer — the frozen reasoning core the harness is built around / 2 Storage layer — where memory physically lives: files and the database / 3 Encoding & retrieval — turn text into meaning, hand back the slice (memory engineering) / 4 Memory layer — episodic, semantic, working, procedural (memory engineering) / 5 Semantic layer — teach the agent what your schema means (memory engineering) / 6 Agent loop — the typed graph that drives every layer above / 7 Context engineering — keep the window dense as the session grows
**Shows.** A numbered list of seven harness layers inside a large orange-bordered "AGENT HARNESS" container, with three of the rows (Encoding & retrieval, Memory layer, Semantic layer) tagged with a small "memory engineering" badge on the right.

## Slide 21 — The frozen reasoning core
**Text.** LAYER 1, MODEL / THE REASONING CORE / MODEL LAYER / The frozen reasoning core. / The frontier LLM is the reasoning engine, and the one part of the system we do not build. It is a frozen utility: identical from one turn to the next. Everything the harness does is built around it, and everything that makes the agent improve is the harness, not the model. / Reasoning, out over the network — One chat LLM, provider-toggleable, the only outbound call at runtime. / Two models, in the database — An embedder and a cross-encoder reranker run inside the engine (ONNX). / Frozen, by design — Weights never change at runtime; the harness is what learns. / On Oracle reasoning is hosted on OCI Generative AI; embeddings and reranking run in-database.
**Shows.** Nothing beyond the text; three supporting points are set off in boxes on the right of the main paragraph.

## Slide 22 — Oracle Database File System: the best of both worlds
**Text.** LAYER 2, STORAGE / MEMORY, THE SUBSTRATE / THE RESOLUTION / Oracle Database File System: the best of both worlds. / A filesystem interface agents already speak, backed by Oracle AI Database 26ai. / WHAT FILES GIVE YOU — On-distribution verbs / Legible & versionable / Agent-controlled I/O / Hierarchical paths / File interface — DBFS, POSIX, FUSE MOUNT — read write ls grep / Oracle AI Database 26ai — SECUREFILES LOBS / WHAT THE DATABASE ADDS — ACID + HA (Data Guard) / AI Vector Search / Relations + ranking / Scale, security, backup / Hybrid in practice: a scratchpad on the filesystem holds short-term working memory; a scheduled pipeline promotes what is worth keeping into long-term memory in tables. One pipeline, one ACID boundary.
**Shows.** A central "File interface" box (with read/write/ls/grep command buttons) sits above an "Oracle AI Database 26ai" box, flanked on the left by a "what files give you" list and on the right by a "what the database adds" list, showing the filesystem-on-database hybrid architecture.

## Slide 23 — Turn text into meaning, hand back the right slice
**Text.** LAYER 3, ENCODING & RETRIEVAL / WRITE PATH, READ PATH / ENCODING & RETRIEVAL / Turn text into meaning, hand back the right slice. / WRITE PATH, ENCODING — Embeddings are produced inside the database by a loaded ONNX model, reached through OracleVS. / text → in-DB embed → vector table / One model, one vector space. Nothing leaves the engine to be vectorised. / READ PATH, THE RETRIEVAL LADDER — 1 Keyword — Oracle Text CONTAINS, exact terms & identifiers / 2 Vector — cosine over HNSW; query embedded in the same space / 3 Hybrid (RRF) — fuse keyword + vector; no weight tuning / 4 Rerank — cross-encoder reads query & document together / Retrieval is progressive disclosure for tables: hand the model the few rows it needs, nothing more.
**Shows.** Two side-by-side panels: left shows the write path as a three-box flow (text → in-DB embed → vector table); right shows the read path as a numbered four-step retrieval ladder (Keyword, Vector, Hybrid RRF, Rerank).

## Slide 24 — Specialized systems require dedicated attention
**Text.** RAG APPLICATION: DATA INGESTION / Specialized Systems Require Dedicated Attention / Data Sources → Data Object → [chunking pipeline] → Data objects are broken into chunks → Embedding Model / Chunking / Data Deduplication / Text Normalization / Entity extraction / PII Redaction / Content Classification / "We find that retrieval-augmented generation significantly reduces hallucin...all Questions benchmark when using contriver-based retrieval." / {"paper_id": "2312.10997", "title": "Benchmarking RAG for Factual Consistency", "authors": ["Chen, Wei", "Patel, Anika", "Yamamoto, Kenji"], "section": "Results", "page":7, "chunk_index":42} / [0.2323, 0.3524, 0.34543, 0.32423, 0.1234, 0.1343, 0.2343, 0.67644, 0.457654, 0.8765434, 0.345676...] / (:Paper {paper_id: "2312.10997", title: "Benchmarking RAG for Factual Consistency"}) -[:HAS_SECTION]→ (:Section {name: "Results"}) -[:CONTAINS_CHUNK]→(:Chunk D_BY]→(:Author {name: "Yamamoto, Kenji"}) / Relational / JSON / Spatial / Vector / Graph → Data Sync Logic
**Shows.** A left-to-right pipeline diagram: data source icons feed into a "Data Object" box, then a chunking/cleaning sub-pipeline (chunking, dedup, normalization, entity extraction, PII redaction, content classification), then into an embedding model, fanning out into four example chunk representations (plain text quote, JSON metadata, a raw embedding vector, and a graph triple notation), each routed to one of five storage shapes (Relational, JSON, Spatial, Vector, Graph) that converge on a "Data Sync Logic" box.

## Slide 25 — We are seeing increase in cognitive load (anti-pattern)
**Text.** RAG APPLICATION: DATA INGESTION / We are seeing Increase in Cognitive Load / Anti Pattern / [same ingestion pipeline as previous slide: Data Sources → Data Object → chunking pipeline → Embedding Model → four chunk representations → five storage shapes → converging point]
**Shows.** The identical ingestion-pipeline diagram from the previous slide, now labelled "Anti Pattern" in large orange text top-right, and the five storage-shape outputs converge into a single unlabeled square rather than a named "Data Sync Logic" box — illustrating five separate stores glued together as the anti-pattern to avoid.

## Slide 26 — Promoting and championing cognitive focus
**Text.** RAG APPLICATION: DATA INGESTION / Promoting and championing Cognitive Focus / [same ingestion pipeline] / Data Ingestion → Oracle AI Database
**Shows.** The same ingestion-pipeline diagram again, but this time all five storage shapes (Relational, JSON, Spatial, Vector, Graph, shown as a stack of unlabelled bars) and the chunk representations converge into one "Data Ingestion" box that feeds a single "Oracle AI Database" oval — contrasting with the anti-pattern by collapsing everything into one engine.

## Slide 27 — Oracle is the engine, not a step
**Text.** REFERENCE ARCHITECTURE / IT ALL RUNS IN THE DATABASE / HOW THE PIECES CONNECT / Oracle is the engine, not a step. / ORACLE AI DATABASE — ingestion, embeddings, vector search and rerank, one engine / Data sources → Data object → Processing pipeline (chunk · clean · redact) → Embedding model / STORED AS: Spatial / JSON / Graph / Ops / Vector / User query → Vector search (top-k) → Reranking model → LLM → Grounded response / Only the model (OCI Generative AI) and the I/O sit outside. Everything else is the database.
**Shows.** A large orange-outlined "ORACLE AI DATABASE" container holding the full pipeline: data ingestion along the top row (Data sources → Data object → Processing pipeline → Embedding model) feeding five storage formats, and a query row along the bottom (User query → Vector search → Reranking model) that exits the box to an external "LLM" box and finally a "Grounded response" box, visually showing only the LLM and the two I/O boxes sit outside the database.

## Slide 28 — What is agent memory
**Text.** LAYER 4, MEMORY / AGENT MEMORY / What is agent memory / The conceptual description of the mechanisms and systems that enable an agent to retain, reuse, refine, and recall information, for adaptability and continual learning. / Why it matters: without memory, an agent has amnesia. Memory is what turns a stateless model into a persistent entity.
**Shows.** A database icon beside the definition text on a plain dark teal background; no diagram.

## Slide 29 — Agent memory is not one thing
**Text.** AGENT MEMORY / THE FULL TAXONOMY / EVERY KIND, AND WHERE IT LIVES / Agent memory is not one thing. / Short term is ephemeral, long term persists across sessions, and shared memory spans agents. Naming the types tells you where each kind should live. / Agent Memory → Short term (Semantic Cache, Working Memory, LLM Context Window) / Long term → Episodic (Conversational history — every turn, per thread; Tool logs (with timestamps) — ordered, replayable; Summaries — compacted past episodes) / Long term → Procedural (Workflow memory — recipes that recorded their outcome; Toolbox memory — tools, retrieved by meaning; Skillbox memory — SKILL.md, versioned by SHA) / Long term → Semantic (Persona memory — who the agent is, how it behaves; Knowledge base — durable domain documents; Entity memory — people, things, the schema catalog) / Shared Memory (special)
**Shows.** A tree diagram rooted at "Agent Memory" branching into three top-level categories (Short term, Long term, Shared Memory), with Long term further splitting into Episodic, Procedural and Semantic sub-branches, each expanding into three labelled leaf items with short descriptions.

## Slide 30 — A bigger window is not the fix
**Text.** CONTEXT ENGINEERING / KEEP THE WINDOW DENSE / A bigger window is not the fix. / Context rot. Model quality slips before the advertised limit, and the relevant fact gets harder to attend to as inputs grow. Attention, not capacity, is the budget, so you compact ahead of the limit, not at it. / Compaction replace a long history with a faithful summary (the OAMP context card). / Offloading move a large payload out of the window, leave a pointer; substrate-aware (table or file). / Measured, not asserted: flat context versus blow-up.
**Shows.** A line chart (axis labels blurred/illegible) plotting two series against turn number: a grey line rising steeply upward (context size without engineering) versus a flat red line near the bottom (with context engineering), visually contrasting unbounded growth against a bounded, flat context size.

## Slide 31 — What is Memory Engineering
**Text.** DEFINITION / MEMORY ENGINEERING / What is Memory Engineering / The discipline of designing, building, and operating the systems that give an agent memory: the schemas, indexes, retrieval, lifecycle, and governance that let it retain, recall, and refine knowledge reliably at scale. / Why it matters most teams build a model and a prompt, then bolt memory on. Memory engineering treats it as a first-class discipline, not an afterthought.
**Shows.** A gear icon beside the definition text on a plain dark teal background; no diagram.

## Slide 32 — Agent memory is a discipline
**Text.** LAYER 4, MEMORY / MEMORY MANAGER, THE DISCIPLINE / MEMORY LAYER / Agent memory is a discipline. / Schemas, indexes, lifecycle, retrieval, governance: the harness manages all of it. / SCHEMAS — Memory types: episodic · semantic · procedural · working / INDEXES — Make it findable: vector · lexical · graph · hybrid / LIFECYCLE — Write, evict, refresh: expiry · summarisation · compaction / RETRIEVAL — Read in context: top-k · fusion · rerank / GOVERNANCE — Scope by identity: user · agent · thread · RLS / ORACLE'S ANSWER, OAMP — Oracle AI Agent Memory Package — pip install oracleagentmemory — 01 memory: facts, corrections, events / 02 thread: scoped conversations / 03 scratchpad: ephemeral working state
**Shows.** Five equal-width cards across the top (Schemas, Indexes, Lifecycle, Retrieval, Governance), each with a category label and short description, and a highlighted orange-bordered box beneath introducing Oracle's OAMP package with a pip-install command and three numbered primitives (memory, thread, scratchpad).

## Slide 33 — One line instead of a memory subsystem
**Text.** CONTEXT ENGINEERING / WHAT THE CONTEXT CARD ABSORBS / WHAT OAMP ABSORBS / One line instead of a memory subsystem. / WITHOUT OAMP · YOU CARRY THE LOAD — Decide when to summarise / Write a summariser: keep signal, drop filler / Rank + retrieve relevant memories per turn / Extract durable facts from chatty turns / Glue summary + memories + recent into a prompt / Bound it all to a token budget / OAMP absorbs this / WITH OAMP · ONE CALL — mem.context_card(thread_id) / BOUNDED, PROMPT-READY BLOCK — Topics / Summary / Relevant memories / Recent turns / The developer writes one line instead of a memory subsystem. / The agent spends attention on the task, not on housekeeping its own memory.
**Shows.** Left column lists six manual tasks a developer would otherwise own, with an orange arrow labelled "OAMP absorbs this" pointing to the right column, which shows a single code call `mem.context_card(thread_id)` producing a bounded four-part block (Topics, Summary, Relevant memories, Recent turns).

## Slide 34 — What the agent actually reads
**Text.** CONTEXT ENGINEERING / A REAL CARD, ANNOTATED / THE CONTEXT CARD / What the agent actually reads. / <context_card> <topics> q3 growth · outdoors · business risk </topics> <summary> Reviewing Q3 performance. Growth driven by Outdoors, +12% QoQ. User now asks the main risk to that driver. </summary> <relevant_information> <fact> Outdoors drove Q3, +12% QoQ </fact> <preference> prefers metric units </preference> <memory> risk question asked, unanswered </memory> </relevant_information> <recent_messages> user What drove Q3 growth? assistant The Outdoors category, +12% QoQ. user What is the main risk to that? </recent_messages> </context_card> / WHAT EACH PART IS DOING — <topics>: A semantic fingerprint of the thread: cheap orientation and routing. / <summary>: A running recap that also captures the current intent, not just history. / <relevant_information>: Typed and timestamped. A fact is truth; a preference (metric units) shapes the answer; an episodic memory flags the question is still open. / <recent_messages>: The last turns verbatim, with role, for local coherence.
**Shows.** Left panel shows a real XML-tagged context-card example with topics, summary, relevant_information (fact/preference/memory) and recent_messages sections; right panel annotates each XML tag with what it does, one callout box per tag, the relevant_information callout outlined in orange.

## Slide 35 — What is the agent loop
**Text.** DEFINITION / AGENT LOOP / What is the agent loop / The control structure that drives an agent: assemble context, call the model, run the tools it asks for, persist what happened, and decide whether to continue, under an explicit budget. / Why it matters the loop is the component that turns a frozen model into something that acts, recovers, and improves.
**Shows.** A refresh/loop icon beside the definition text on a plain dark teal background; no diagram.

## Slide 36 — The graph that drives every layer
**Text.** LAYER 6, AGENT LOOP / THE DRIVER / AGENT LOOP / The graph that drives every layer. / __start__ → assemble_context (OBSERVE) → call_model (REASON) → persist → stop → __end__ / persist → tools → dispatch_tools (ACT) → loops back into assemble_context / tool results re-enter context · loops under an iteration + wall-clock budget / Dynamic recall skills + recipes pulled in every turn / Failure recovery transient errors retried, not fatal / Human gate side-effecting tools need approval
**Shows.** A left-to-right state graph: __start__ feeds assemble_context, then call_model, then persist, which either stops at __end__ or branches down to dispatch_tools, whose output loops back up into assemble_context — visualising the observe/reason/act cycle with three callout boxes underneath describing dynamic recall, failure recovery and a human-approval gate.

## Slide 37 — Only the tools that fit the turn
**Text.** CONTEXT ENGINEERING / TOOLS AS SEARCHABLE MEMORY / THE TOOLBOX PATTERN / Only the tools that fit the turn. / WRITE PATH, REGISTER A TOOL — Tool fn + metadata → Enrich (syn · when · examples) → VECTOR_EMBEDDING → agent_tools (HNSW) / READ PATH, EVERY USER TURN — User turn → Embed query → Top-k by cosine → k tool schemas to the model / The registry grows past 30 tools without bloating the prompt. Each tool is stored with an enriched document (synonyms, when-to-use, examples) and its embedding; the callable stays in Python, only the schema and vector live in the database.
**Shows.** Two horizontal four-box flows stacked: a write path showing how a tool function is enriched and embedded into an "agent_tools" HNSW index, and a read path showing how each user turn embeds the query and retrieves only the top-k matching tool schemas.

## Slide 38 — Oracle MCP servers
**Text.** CONTEXT ENGINEERING / MODEL CONTEXT PROTOCOL / ORACLE MCP SERVERS / Tools and MCP servers / July 2026 — Oracle's first MCP server, shipped in July — MILESTONE / ~30 sample servers — MySQL · HeatWave · JDBC · OCI cost, Terraform — ONE REPO / Two server shapes — OCI-managed, or HTTPS streaming self-run — CLOUD & ON-PREM / Federated identity — OAuth 2 across Entra ID · Okta · Auth0 — OCI-MANAGED / Identity in the session — roles reach the session, redaction still applies — DEEP DATA SECURITY / The agent is just another client — and it queries as a regular user (and inherits its roles & permissions)
**Shows.** A five-row list, each row an icon plus a bold label, a short description, and a right-aligned tag; the bottom two rows (Federated identity, Identity in the session) are outlined in orange to emphasise the security angle.

## Slide 39 — Let agents run reports, not queries
**Text.** MODEL CONTEXT PROTOCOL / TRUSTED REPORTS AS TOOLS / REPORTS, NOT RAW SQL / Let agents run reports, not queries / NATURAL LANGUAGE → SQL — A different query every time: the same question comes back as another statement / Relationships get guessed: joins and grain are inferred from names, not known / Prompt engineering as upkeep: every schema change becomes a prompt change / TRUSTED REPORTS AS TOOLS — Upload what analysts wrote: existing reports, hard-coded queries and all / The agent selects, then binds: pick the report, supply the inputs, run it / The same answer, every turn: consistent results the business signed off on / MCP is how a tool arrives. The toolbox is how it gets chosen
**Shows.** Two side-by-side panels contrasting a "natural language → SQL" approach against a "trusted reports as tools" approach, each with three sub-points; a small illegible caption reading roughly "Reports = established, robust queries" sits in a mostly-empty box between them.

## Slide 40 — Distil once, recall on demand
**Text.** CONTEXT ENGINEERING / SKILLS AS SEARCHABLE MEMORY / THE SKILLBOX PATTERN / Distil once, recall on demand. / AUTHOR A SKILL — Workflow (did it once) → Distil (LLM) to SKILL.md → SHA + embed → agent_skills (HNSW) / TWO-LEVEL RETRIEVAL — Level 1 a one-line name: description manifest, retrieved every turn so the agent knows which skills exist. / Level 2 load_skill pulls the full SKILL.md body, only when the agent decides to use it. / SHA-256 versions each skill: refresh from a source only when the hash changes, and promoting a workflow retires it from recall so the agent never sees both.
**Shows.** A four-box "author a skill" flow (Workflow → Distil to SKILL.md → SHA + embed → agent_skills index) above two side-by-side boxes explaining the two-level retrieval scheme (a cheap manifest lookup versus an on-demand full-body load).

## Slide 41 — Re-discovered every turn
**Text.** CONTEXT ENGINEERING / LEARNED SKILLS, SURFACED AUTOMATICALLY / DYNAMIC SKILL DISCOVERY / Re-discovered every turn. / Semantic catalog — vector_search / Skillbox manifest — build_skill_manifest / Workflow recipes — recall_workflow / Context card — OAMP working memory / assemble_context (runs every turn) → Assembled system prompt → call_model / Each turn queries the skillbox against the latest user message. A newly learned skill shows up automatically on the very next relevant turn, no redeploy.
**Shows.** Four labelled source boxes (Semantic catalog, Skillbox manifest, Workflow recipes, Context card) all converge with orange lines into an "assemble_context" box, which feeds an "Assembled system prompt" box and then "call_model", showing skills and memory being pulled together fresh each turn.

## Slide 42 — What is continual learning
**Text.** DEFINITION / CONTINUAL LEARNING / What is continual learning / The ability of a system to keep getting better from experience after training: acquiring skills, updating beliefs, and correcting mistakes, without a full retrain. / Why it matters it is the biggest gap between today's agents and human intelligence. The question is where the new knowledge is stored.
**Shows.** A target/bullseye icon beside the definition text on a plain dark teal background; no diagram.

## Slide 43 — How does a frozen model get better?
**Text.** BEYOND THE LAYERS / HOW A FROZEN MODEL IMPROVES / CONTINUAL LEARNING / How does a frozen model get better? / The model's weights never change at runtime. Yet the agent improves. The trick is to choose where new knowledge lives: in the weights, in the representations, or in the context the model reads.
**Shows.** Nothing beyond the text.

## Slide 44 — Continual learning branches three ways
**Text.** CONTINUAL LEARNING / THREE STORAGE LOCATIONS / WHERE KNOWLEDGE LIVES / Continual learning branches three ways. / Continual learning → Weight space (PARAMETRIC MEMORY) — Knowledge in the model's parameters. Examples: fine-tuning · LoRA / PEFT · instruction tuning · RLHF. Characteristics: changes the model · generalises · risk of catastrophic forgetting · expensive. Knowledge → weights. / Latent space (REPRESENTATIONAL MEMORY) — Knowledge in learned representations. Examples: embedding training · contrastive learning · alignment · latent memory. Characteristics: changes how information is represented · improves retrieval & similarity · adds no facts directly. Knowledge → representation. / Context / token space (NON-PARAMETRIC MEMORY) — Knowledge outside the model, injected as tokens. Examples: RAG · memory systems · in-context learning · tool outputs. Characteristics: no weight updates · add immediately · easy to audit · bounded by window & retrieval. Knowledge → tokens.
**Shows.** A root "Continual learning" box branches into three equal-width cards (Weight space, Latent space, Context / token space); the third card is outlined in orange to mark it as the one the rest of the talk focuses on.

## Slide 45 — One taxonomy, three memories
**Text.** CONTINUAL LEARNING / PARAMETRIC, REPRESENTATIONAL, NON-PARAMETRIC / A MORE COMPLETE TAXONOMY / One taxonomy, three memories. / Continual learning = parametric memory (weights) + representational memory (latents) + non-parametric memory (tokens / retrieval) / Our agent lives in the third column: non-parametric memory.
**Shows.** A single wide equation-style bar reading "Continual learning = parametric memory + representational memory + non-parametric memory", with the non-parametric term in orange to match its emphasis as the agent's home.

## Slide 46 — Distil a recipe into reusable skills
**Text.** CONTINUAL LEARNING / WORKFLOW → SKILL PROMOTION / PROMOTE TO A SKILL / Distil a recipe (workflow memory) into reusable skills / Workflow recipe (intent · steps · tools · wins/losses) → Worth promoting? (recurring + reliable, wins > losses) —yes→ LLM distils → SKILL.md (frontmatter + when-to-use + steps) → save_skill (SKILL.md + SHA + embedding → skillbox) → Raw recipe retired (promoted='Y'; recall skips it) and Injected first (top of system prompt → more weight) / "Worth promoting?" —no→ Stays a candidate (still recalled into context) / LLM distils —malformed?→ Deterministic fallback (always a valid skill) → save_skill / The two outcomes on the right are the point. The raw recipe is retired so the agent does not spend attention on both, and the skill is injected at high authority, so the same knowledge counts for more at inference.
**Shows.** A left-to-right flowchart from a workflow recipe through a promotion decision, an LLM distillation step (with a deterministic fallback branch for malformed output) and a save_skill step, ending in two outcome boxes (raw recipe retired; skill injected first) on the right, plus a "stays a candidate" side branch when not promoted.

## Slide 47 — Skills sit in the system layer
**Text.** CONTINUAL LEARNING / WHY SKILLS RANK HIGHER / INSTRUCTION HIERARCHY / Skills sit in the system layer. / INSTRUCTION HIERARCHY (authority decreases downward): System / platform — skills load here (highest authority) / Developer — app instructions / User — the request / Tool outputs & retrieved docs — raw workflow text, RAG (lowest) / Trained to obey a hierarchy: Frontier models prioritise system instructions over user messages, and both over tool and retrieved content. (OpenAI, Instruction Hierarchy & Model Spec) / Skills load into the system prompt: A SKILL.md's metadata is placed in the system prompt at startup, so skills carry system-level authority. (Anthropic, Agent Skills) / Priority improves reliability: Models trained to follow privileged instructions are more steerable and robust; well-structured system prompts follow instructions better. (OpenAI, Instruction Hierarchy) / Put durable, must-follow knowledge in skills (system layer); keep volatile data in retrieval (lower layer).
**Shows.** A vertical four-tier hierarchy box (System/platform outlined in orange at top, then Developer, User, Tool outputs & retrieved docs) with a downward "authority decreases" arrow beside it, and three supporting citation callouts on the right.

## Slide 48 — The whole harness, one engine
**Text.** REFERENCE ARCHITECTURE / THE FULL SYSTEM, BOTTOM-UP / TOTAL RECALL WORKSHOP / The whole harness, one engine. / Read bottom-up, the order we build it. Only the chat model leaves the database. / ORACLE AI DATABASE — PART 7 · Agent Loop: assemble_context → call_model → dispatch_tools → persist (dynamic recall · failure recovery · HITL gate · budgeted loop) → Chat LLM (over network) / 6 Skills & Automations — toolbox + skillbox, harvester, HITL automations / 8 Context Engineering — compaction (context card), offload to table or file / 5 Semantic Layer — schema meaning, a searchable catalog (scheduled) / 4 Cognitive Memory (OAMP) — episodic, semantic, working, workflow recipes / 3 Retrieval · read path — keyword, vector, hybrid RRF, cross-encoder rerank / 3 Encoding · write path — OracleVS, embeddings computed in-database / 2 Memory Substrate — one ACID / security / backup boundary: vector & relational tables + in-DB scratch filesystem (SecureFile LOBs) / 1 Foundation — the database · a least-privilege AGENT user · chat LLM + ONNX embedder + ONNX reranker loaded in-DB
**Shows.** A large orange-outlined container stacking eight numbered layer boxes bottom-to-top (Foundation through Skills & Automations, paired left/right where two layers share a tier) with the Part 7 agent-loop row running along the top, connecting out to an external "Chat LLM" box — visually reinforcing that everything except the chat model itself lives inside the Oracle AI Database.

## Slide 49 — The memory core is the last line of defence
**Text.** ORACLE AI DATABASE · AGENT MEMORY ARCHITECTURE / The memory core is the last line of defence / Prompt engineering → Context engineering → Memory engineering / MEMORY CORE — Oracle AI Database — CONVERGED DATA MODEL: JSON, Relational, AI vectors, Graph, Spatial / INGESTION: Raw ingestion (files, streams, APIs), Document processing & chunking, Embedding generation, Connectors / TYPED MEMORY: Conversational, Entity, Toolbox & skills, Semantic (knowledge base), Workflow / Durable, governed, queryable. One engine for every shape memory takes, not a vector store bolted on. / MEMORY OPS: Memory retrieval, Memory indexing, Memory storage, Decay & forgetting, Retrieval optimisation, Storage optimisation, Data modelling / MEMORY MANAGER / CONTEXT WINDOW (assembled per call): Context engineering (token budgeting · JIT retrieval · context retrieval · compose & order · offloading), Prompt engineering (role · attitude · few-shot · chain of thought · behavioural conditioning), System prompt, User query, Recent interactions, Relevant knowledge, Relevant workflows, Relevant entities, Relevant summaries, Relevant tools & outputs / LLM — Transformer — STATELESS — swappable, remembers nothing / Raw output → refined output, written back to memory. The agent learns. / ORACLE | AI Developer Experience / Memory engineering · the agent harness
**Shows.** A dense capstone architecture diagram: a "Memory Core" panel (Oracle AI Database, its converged data model, ingestion pipeline and typed memory types) on the left feeds through a middle "Memory Ops" column and a vertical "Memory Manager" bar into a "Context Window" panel that assembles a numbered stack of prompt components, which feeds a "Stateless" "LLM" box on the far right; an orange line loops the LLM's output back down and around into the memory core, and a small breadcrumb top-right shows progression from Prompt engineering to Context engineering to (highlighted) Memory engineering.

## Slide 50 — Every layer maps to an Oracle primitive
**Text.** ONE SUBSTRATE / THE HARNESS, ENCAPSULATED ON ORACLE / THE HARNESS ON ORACLE / Every layer maps to an Oracle primitive. / AGENT HARNESS ON ORACLE — Model: OCI Generative AI (hosted frontier models) + in-database ONNX embedder & reranker / Storage: In-database POSIX filesystem (SecureFiles LOBs) + relational / vector tables, one ACID boundary / Encoding & retrieval: OracleVS + in-DB embeddings, AI Vector Search (HNSW), Oracle Text, hybrid RRF, rerank / Memory: Oracle AI Agent Memory Package (OAMP) / Semantic: Comments + annotations + use-case domains + views + V$SQL, catalog (DBMS_SCHEDULER) / Skills & automations: Toolbox / skillbox tables (HNSW), SHA-versioned SKILL.md, DBMS_SCHEDULER automations / Agent loop: LangGraph state graph + Oracle-backed checkpoints / Context engineering: OAMP context card (compaction) + substrate-aware offloading, row-level security
**Shows.** A single orange-outlined table mapping each of the eight harness layers (Model, Storage, Encoding & retrieval, Memory, Semantic, Skills & automations, Agent loop, Context engineering) on the left to its concrete Oracle implementation on the right, summarising the whole talk as a lookup table.

## Slide 51 — Join the Oracle AI Developer Discord
**Text.** Join the Oracle AI Developer Discord Channel to ask questions about Agent Memory and the Oracle AI Agent Memory Package
**Shows.** A centred QR code on a dark teal background beneath the heading text, for joining Oracle's Discord channel; no other imagery.

## Slide 52 — Oracle AI Developer Hub
**Text.** Oracle AI Developer Hub
**Shows.** A centred QR code on a dark teal background beneath the heading text, linking to the Oracle AI Developer Hub; no other imagery.
