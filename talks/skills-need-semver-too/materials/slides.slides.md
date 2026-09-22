---
title: "Skills Need SemVer Too"
speakers: [Pedro Rodrigues]
session_id: 7843a525c6c9a3310e57e52edd01a581
kind: slides
deck: slides.pdf
slides: 17
---

# Skills Need SemVer Too — slides

**Pedro Rodrigues**

*Thursday 17 September 2026, 16:55, G102 + G103 — Interop & Standards track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`slides.pdf`](slides.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title card
**Text.** COMMUNITY PERSPECTIVE / Skills need SemVer too / What happens after agents can discover them? / Pedro Rodrigues · Supabase / [nav: Today · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro] / 1 / 17
**Shows.** A black title slide with a green wireframe polygon/constellation graphic (connected dots and lines) across the background, suggesting a network. A bottom navigation bar lists the talk's section names with "Today" highlighted as current, and a slide counter "1/17" — this footer nav and counter recur on every slide of the deck.

## Slide 2 — Where Agent Skills are today
**Text.** Where Agent Skills are today / The format is portable — my-skill/ ├── SKILL.md ├── references/ ├── assets/ └── scripts/ / Distribution is not standard yet — Git repository / Client-specific installer / Marketplace or directory / Over MCP / [nav: Today (current) · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro] / 2 / 17
**Shows.** Two side-by-side cards: the left shows a file-tree code block for the portable Agent Skill folder format; the right lists four current, non-standardized ways skills get distributed today.

## Slide 3 — Publisher-origin discovery
**Text.** OPEN PR #254 / Publisher-origin discovery / https://supabase.com/.well-known/agent-skills/index.json / { "skills": [ { "name": "supabase", "type": "archive", "url": "/skills/supabase.tar.gz", "digest": "sha256:abc123..." } ] } / Publisher → index → artifact → verified installation / [nav: Today (current) · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro] / 3 / 17
**Shows.** A code panel showing an example .well-known discovery URL and its JSON response listing a skill's name, type, download URL, and digest, with a caption diagramming the resolution chain from publisher to verified installation — the open pull request (#254) the talk is discussing.

## Slide 4 — What the proposal already solves
**Text.** What the proposal already solves / Installed: sha256:abc123... / Current: sha256:def456... ← changed / "A larger benefit is being able to check if any skills have been updated with a single GET." / Jonathan Hefner, PR #254 / ORIGIN DISCOVERY / ARTIFACT IDENTITY / CHANGE DETECTION / INTEGRITY / [nav: Today (current) · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro] / 4 / 17
**Shows.** A code block comparing an "Installed" digest against a "Current" digest flagged as changed, followed by a quoted comment from the PR's discussion, and four green pill tags summarizing the capabilities PR #254 already delivers.

## Slide 5 — In this talk, we're assuming
**Text.** ASSUMPTIONS / In this talk, we're assuming / 1 .well-known, or something close to it, lands. / 2 Publishers and clients adopt it. / [nav: Today (current) · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro] / 5 / 17
**Shows.** Nothing beyond the text. A two-item numbered list of stated assumptions underpinning the rest of the talk, each in a circular numbered badge.

## Slide 6 — What is SemVer?
**Text.** What is SemVer? / MAJOR.MINOR.PATCH / SEGMENT / MEANING / MAJOR — Breaking change / MINOR — Backward-compatible addition / PATCH — Backward-compatible fix / npm and most package registries already use SemVer as the default versioning convention. / [nav: Today · Latest vs versions (current) · The gap · The evidence · Proposal · Open questions · Outro] / 6 / 17
**Shows.** A code-style header showing the MAJOR.MINOR.PATCH pattern above a three-row table defining each segment's meaning, framing SemVer as the deck's baseline reference model.

## Slide 7 — Skills are not npm packages
**Text.** Skills are not npm packages / NPM PACKAGE / AGENT SKILL / Executable code / Mostly instructions and knowledge / A fairly explicit API / A behavioral, probabilistic effect / Compatibility you can test structurally / Depends on model, client, tools, and task / Latest can break the API / Latest often carries the best guidance / For skills, following latest is often the right call. / [nav: Today · Latest vs versions (current) · The gap · The evidence · Proposal · Open questions · Outro] / 7 / 17
**Shows.** A two-column, four-row comparison table contrasting npm packages against agent skills on executability, API explicitness, compatibility testing, and what "latest" means for each, followed by a highlighted green takeaway box.

## Slide 8 — Why versions, if latest is usually best?
**Text.** Why versions, if latest is usually best? / Historical identity earns its keep for: / A/B testing / Regression reproduction / Auditing agent inputs / Rollback after unexpected behavior / [nav: Today · Latest vs versions (current) · The gap · The evidence · Proposal · Open questions · Outro] / 8 / 17
**Shows.** Nothing beyond the text. A two-column bulleted list of four use cases where pinning to a specific historical skill version still matters.

## Slide 9 — Digest + URL + lockfile
**Text.** OPTION 1 / Digest + URL + lockfile / skill: supabase / url: .../supabase.tar.gz / digest: sha256:abc123... / Version pinning is done by digest and artifact URL. Essentially, the lock file contains the snapshot of index.json. / [nav: Today · Latest vs versions · The gap (current) · The evidence · Proposal · Open questions · Outro] / 9 / 17
**Shows.** A code block showing a lockfile-style entry recording a skill's name, artifact URL, and content digest, presented as "Option 1" for how existing tooling already pins versions.

## Slide 10 — The fresh-client problem
**Text.** The fresh-client problem / Existing client — Observed release → its lockfile can remember it. / Fresh client — Never-seen release → how does it discover the artifact? / It does nothing for a fresh client that wants v0.1.6 of something it has never seen. / [nav: Today · Latest vs versions · The gap (current) · The evidence · Proposal · Open questions · Outro] / 10 / 17
**Shows.** Two side-by-side cards contrasting an existing client (which can rely on its lockfile's memory of a previously observed release) against a fresh client with no such memory, unable to discover an artifact for a release it has never encountered — the gap the lockfile approach from the prior slide doesn't close.

## Slide 11 — "with skill" means "with latest"
**Text.** CASE STUDY / "with skill" means "with latest" / Today — Without skill ↔ With latest skill / Potential comparison — Skill v0.1.6 ↔ Skill v0.1.7 / Reproducible input: skill + release + digest + model + client + tools / One example of a broader lifecycle problem. / [nav: Today · Latest vs versions · The gap · The evidence (current) · Proposal · Open questions · Outro] / 11 / 17
**Shows.** Two cards contrasting how skill evaluations are currently framed (without skill vs. with the latest skill) against a proposed alternative comparison (one pinned skill version against another), followed by a list of the full set of inputs needed to make such a comparison reproducible.

## Slide 12 — Latest can still be worse for one client
**Text.** Latest can still be worse for one client / Publisher eval environment ≠ every consumer environment / Different model / Different agent client / Different tools and permissions / Different surrounding instructions / Probabilistic execution / Representative evals are evidence, not a guarantee. / [nav: Today · Latest vs versions · The gap · The evidence (current) · Proposal · Open questions · Outro] / 12 / 17
**Shows.** A two-column bulleted list of five reasons a publisher's evaluation environment can diverge from an individual consumer's environment, closing with a bold green caveat statement.

## Slide 13 — Three signals, three questions
**Text.** Three signals, three questions / Version — What change did the publisher signal? / Digest — What exact bytes did we use? / Eval — What behavior did we observe? / None of these three questions has the same answer. / [nav: Today · Latest vs versions · The gap · The evidence (current) · Proposal · Open questions · Outro] / 13 / 17
**Shows.** Three side-by-side cards, each naming one signal (Version, Digest, Eval) and the distinct question it answers, followed by a highlighted green box stating that no two of the three questions share an answer — the deck's central argument that these three concerns must be tracked separately.

## Slide 14 — Optional historical resolution
**Text.** MY PROPOSAL / Optional historical resolution / /.well-known/agent-skills/index.json / /.well-known/agent-skills/versions.json / /.well-known/agent-skills/v0.1.6/index.json / /.well-known/agent-skills/v0.1.7/index.json / skills install supabase@0.1.6 / skills install supabase@0.1.7 / Optional for providers · one resolution model · any artifact host / [nav: Today · Latest vs versions · The gap · The evidence · Proposal (current) · Open questions · Outro] / 14 / 17
**Shows.** Two code blocks: the first lists a proposed family of well-known discovery URLs (a base index, a versions index, and per-version indexes), the second shows example CLI install commands pinning to specific skill versions — the speaker's concrete proposal for optional historical version resolution.

## Slide 15 — Latest by default, reproducible when needed
**Text.** Latest by default. Reproducible when needed. / Merge discovery independently. Keep latest easy. Make historical comparison possible. / Version, digest, and eval each answer a different question. / [nav: Today · Latest vs versions · The gap · The evidence · Proposal (current) · Open questions · Outro] / 15 / 17
**Shows.** Nothing beyond the text. A centred statement slide summarising the proposal's guiding principle, with the deck's recurring three-signals line repeated in green beneath it.

## Slide 16 — Open Questions
**Text.** Open Questions / Is a lockfile sufficient? / Who retains history: client, publisher, or registry? / Do versions belong in SKILL.md, distribution metadata, or both? / Is SemVer the right language for behavioral change? / How long should old artifacts stay available? / [nav: Today · Latest vs versions · The gap · The evidence · Proposal · Open questions (current) · Outro] / 16 / 17
**Shows.** Nothing beyond the text. A two-column bulleted list of five unresolved design questions left open for community discussion.

## Slide 17 — Let's keep the discussion going
**Text.** THANK YOU / Let's keep the discussion going / Find PR #254 on the Agent Skills repository. / Pedro Rodrigues · Supabase / github.com/Rodriguespn / x.com/Rodriguespn23 / SCAN FOR PR #254 / [nav: Today · Latest vs versions · The gap · The evidence · Proposal · Open questions · Outro (current)] / 17 / 17
**Shows.** A closing slide with speaker contact details on the left and a green-and-white QR code on the right (styled with the Supabase lightning-bolt logo in its centre) captioned "SCAN FOR PR #254," linking to the GitHub pull request discussed throughout the talk.
