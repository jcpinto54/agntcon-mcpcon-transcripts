---
title: "When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments"
speakers: [Janosch Woschitz]
session_id: 7d087d5cd9f8906ff25ef09f52e3bad2
kind: slides
deck: agntcon-when-agents-run-healthcare.pdf
slides: 22
---

# When Agents Run Healthcare: Building Reliable Agentic Systems in Highly Regulated Environments — slides

**Janosch Woschitz**

*Friday 18 September 2026, 13:15, Auditorium — Enterprise Adoption track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`agntcon-when-agents-run-healthcare.pdf`](agntcon-when-agents-run-healthcare.pdf), and where a transcript exists it is next door
> and outranks this.

## Slide 1 — Title
**Text.** When Agents Run Healthcare / Building Reliable Agentic Systems in Highly Regulated Environments / AGNTCon + MCPCon Europe 2026 / Janosch Woschitz | Senior Cloud & AI Architect / BARMER
**Shows.** A title card split in two: light green panel on the left with a white rounded box holding the talk title ("Agents" in green) and subtitle, the speaker's name/role beneath, and the green pill-shaped BARMER logo bottom-right of that panel. The right side shows a dark, green-tinted aerial/abstract photo of looping highway on/off-ramps, evoking interconnected pathways.

## Slide 2 — Stat: 40% will demote/decommission agents
**Text.** 40% of enterprises will demote or decommission autonomous AI agents by 2027 due to governance gaps discovered only after production incidents occur. / Gartner, 2026 / BARMER / Gartner — "Avoid Governance Mismatch: Classify AI Agents by Autonomy Level". Gartner, Inc., May 2026
**Shows.** A large red "40%" statistic dominates the left side of an otherwise plain light-grey slide, paired with the explanatory sentence and citation on the right — a framing stat opening the talk's governance argument.

## Slide 3 — German Healthcare System
**Text.** German Healthcare System / The system, in a nutshell / Public statutory health insurance (Gesetzliche Krankenversicherung, GKV) covers the vast majority of the population. A large, tightly regulated, and operationally complex system. / 74.2M | people insured under statutory health insurance | >90% of Germany's population / €353B | spent through the GKV system every year / 93 | self-governed insurers – one legal framework (SGB) sets the boundaries: regulated, but decentralized / BARMER / Bundesministerium für Gesundheit — "Finanzentwicklung der GKV im 1.–4. Quartal 2025", March 2026 / 3
**Shows.** Three large colour-coded statistics (green 74.2M, blue €353B, purple 93) laid out side by side under an introductory paragraph, giving scale and context for the German statutory health insurance system BARMER operates within.

## Slide 4 — Who is BARMER
**Text.** Who is BARMER / 8.3M | insured people, one of the largest GKV in Germany / 14,000+ | employees across Germany / Nationwide | branch network serving members in every region / BARMER / 4
**Shows.** Three large statistics (green 8.3M, blue 14,000+, purple "Nationwide") above a wide photo of three smiling young people laughing together, with the green BARMER pill logo overlaid bottom-left and a "Germany's Best Health Insurance 2026, 1. Platz, BARMER" award badge overlaid on the photo's right side.

## Slide 5 — From data platforms to agentic workflows
**Text.** From data platforms to agentic workflows / How BARMER.KI evolved from AI foundations to agents / Janosch Woschitz · AI Architect · BARMER.KI / DATA — Data & Analytics — Scalable data foundations, cloud, governance / DECISIONS — Analytics & ML at scale — Predictive models and decision support / INTERACTIONS — Conversational AI & assistants — BARMER Chat and internal assistants / ACTIONS — Agentic workflows / BARMER Chat / Hallo, wie kann ich Ihnen helfen? / Häufige Fragen: Wie funktioniert der BARMER Bonus? | Ich habe meine Gesundheitskarte verloren, was nun? | Ich möchte BARMER Mitglied werden / BARMER / 5
**Shows.** A speaker headshot and credit top-left, next to a screenshot of the live BARMER website with its "BARMER Chat" widget open showing a greeting and three suggested FAQ buttons. Below, a four-stage horizontal timeline (Data → Decisions → Interactions → Actions) marks BARMER's evolution from data platforms toward agentic workflows, with "Actions/Agentic workflows" highlighted in green as the current/next stage.

## Slide 6 — Why agentic, why now
**Text.** Why agentic, why now / Two forces are pulling apart and hiring can't close the gap / Demand — An aging population means more claims, more complex care, more admin per member. / Supply — The workforce is shrinking, while experienced employees are retiring. / BARMER's response — "Agenten Automatisieren Arbeitsabläufe" → Agents automate workflows / Workforce Age Distribution — Employee age distribution, 2025 (%) / >60: 11 (BARMER) / 12 (Public Sector) / 55–59: 22 / 15 / 45–54: 31 / 25 / 35–44: 16 / 21 / 25–34: 14 / 18 / <25: 3 / 4 / In Training: 4 / 6 / BARMER / 6
**Shows.** Left side lists rising demand (aging population, up arrow) against shrinking supply (retiring workforce, down arrow), leading to BARMER's "AAA" (Agenten Automatisieren Arbeitsabläufe) tagline. Right side is a population-pyramid-style bar chart comparing BARMER's employee age distribution (green) against the public sector's (purple) across age bands, showing BARMER skews slightly older/more concentrated in the 45–54 bracket (31% vs 25%).

## Slide 7 — When agents enter core processes
**Text.** When agents enter core processes / Autonomy introduces a different class of engineering challenges / 01 Probabilistic reasoning — Agents operate with uncertainty. Core processes require defensible outcomes. / 02 Autonomy & control — More autonomy increases the impact of errors. / 03 Auditability & accountability — Consequential actions must remain traceable and attributable. / 04 Sensitive data & access — Agents need context, but access must remain purpose-bound and least-privilege. / 05 Core-system integration — Agents must work across existing environments without destabilizing core systems. / The challenge isn't making agents intelligent enough. It's making their autonomy governable. / BARMER
**Shows.** Five numbered columns (01–05), each with a green underline, a bold challenge name, and a short explanation, followed by a bold one-line thesis statement beneath a divider — framing the talk's central engineering challenge.

## Slide 8 — And then there is regulation
**Text.** And then there is regulation / One agentic workflow. Multiple regulatory regimes. All at once. / GDPR — Personal data — Purpose limitation, lawful processing, and data-subject rights — Related: BDSG / EU AI Act — AI governance — Risk classification, documentation, oversight, and transparency / SGB IV / V / X — Health & social data — Sector-specific rules on what data may be used, by whom, and why / BSI / C5 / … — Infrastructure & security — Security controls, assurance, cloud, and operational requirements — Related: NIS2 · KRITIS · CADA / Regulation isn't a layer we add around the agent. It shapes how the system must be designed. / BARMER / 8
**Shows.** A central purple "Agentic Workflow" box with four diagonal lines connecting out to four corner cards (GDPR, EU AI Act, SGB IV/V/X, BSI/C5/…), each naming the regulatory regime, its focus, and related laws — illustrating that one workflow sits at the intersection of several regulatory frameworks simultaneously.

## Slide 9 — Section divider: Architecture, the How
**Text.** Architecture / The How / BARMER / 9
**Shows.** A light-green section-divider slide with large bold text and the green BARMER pill logo top-right; no other imagery.

## Slide 10 — Determinism first
**Text.** Determinism first. AI where it earns its place. / Primarily deterministic, agentic where necessary, human in oversight / Observability & Runtime Guard — End-to-end Trajectories · Auditing · Guardrails · Validation / Paper, Fax, Online, Email → Work Item (Normalized business case) → Workflow Orchestration (Owns process state, business rules & agent invocations): deterministic step → Agent (Agent Harness) → deterministic step (loop) → Agent (Agent Harness) → … / Success — Processing completed, No immediate action needed / Review needed — Processing completed, Manual review is mandatory / Exit Condition Met (e.g. Confidence Threshold) -or- Failure → Business Unit / Human (Human review) — Can be reassigned to Work Item / BARMER / 10
**Shows.** A flowchart: four intake channel icons (Paper, Fax, Online, Email) feed into a "Work Item" box, which enters a large "Workflow Orchestration" container alternating deterministic processing steps (blue squares, including a branching decision icon and a small neural-net icon) with two purple "Agent" boxes; an "Observability & Runtime Guard" bar spans on top. Output routes to a green "Success" card or a yellow "Review needed" card; a red "Exit Condition Met / Failure" box below routes to a "Business Unit / Human" box for manual review, which can loop back to reassign the work item.

## Slide 11 — Observe end-to-end
**Text.** Observe end-to-end. Expose only what is needed. / Durable evidence and controlled data access by design / Runtime Guard — Validation · Gating · Aggregate Monitoring / Observability & Auditing / Work Item (Normalized business case) → Workflow Orchestration: Steps & Versions Inputs/outputs, Traces (Context, Tools, Models, etc.), Logs Business rules Metrics, Data Interactions / Workflow Protocol / Technical Audit Log — Technical Evidence — execution trajectory · states & transitions · versions · tool & data interactions · rules & validations · errors / failures / Business Protocol — Business Decision Record — case context · evidence considered · business rules & validations · decisions & results · final outcome / Data Bridge — Data Integration Layer · Controlled Integration Boundary — read/write — Operational Core Systems, Operational Databases, Archive System / BARMER / 11
**Shows.** A detailed architecture diagram: a Work Item flows through a "Workflow Orchestration" box (containing deterministic steps and an "Agent" box in an Agent Harness) monitored from above by a "Runtime Guard" and "Observability & Auditing" bar via dashed arrows capturing steps/versions, traces, logs and data interactions. These feed two output cards on the right: a tan "Workflow Protocol / Technical Audit Log" (technical evidence) and a green "Business Protocol" (business decision record). Below, a blue "Data Bridge" bar mediates read/write access to three underlying systems (Operational Core Systems, Operational Databases, Archive System) via icons.

## Slide 12 — Model-based understanding
**Text.** Model-based understanding. Controlled orchestration. / VLM-based document splitting and structured extraction / Work Item (Normalized business case) → Pre-Processing → [documents] → Document Splitting ({Schema}) → [classified documents] → Structured Extraction ({Schema}) → {JSON} outputs → Post-Processing → … / VLM / VLM / doc_type: DocType, pages: list[int] / rechnungsdatum: str, betrag: float, leistungserbringer: PII, leistung: str, antragssteller: PII / rechnungsdatum: "17.09.2026", betrag: 87.53, leistungserbringer: "AMS UMC", leistung: "Lab Diagnosis", antragssteller: "John Doe" / BARMER / 12
**Shows.** A pipeline diagram: a box of scanned documents ("Work Item") flows through Pre-Processing, then a "Document Splitting" step (calling a VLM against a doc_type/pages schema) that colour-codes pages into document types (green/yellow/blue), then a "Structured Extraction" step (calling a second VLM against a field schema) producing JSON per document, then Post-Processing. A sample extracted JSON record (invoice date, amount, provider, service, applicant) is shown on the right, illustrating the kind of structured, PII-tagged data the agent produces from raw scanned paperwork.

## Slide 13 — Section divider: Walkthrough
**Text.** Walkthrough / One Case, End to End / BARMER / 13
**Shows.** A light-green section-divider slide matching slide 9's style, introducing a worked example.

## Slide 14 — Raw input
**Text.** Raw input / This is what arrives / 1–15 (numbered thumbnail pages) / A single PDF containing different kinds of documents / BARMER / 14
**Shows.** Fifteen small greyscale thumbnails of scanned German insurance documents (forms, receipts, letters) arranged in two rows and numbered 1–15, representing a single incoming multi-document PDF case before any processing.

## Slide 15 — Split + classification
**Text.** Split + classification / Bringing Structure to the Case / [1–4] Claims Form / [5–6] Receipt / [7–8] Receipt / 9 Receipt / [10–11] Receipt / 12 Receipt / 13 Receipt / 14 Other / Not relevant / 15 Receipt / Documents are split and classified by type / BARMER / 15
**Shows.** The same 15 page thumbnails from slide 14, now colour-coded and grouped by document type — pink for the 4-page Claims Form (pages 1–4), blue for the various Receipt groupings, and yellow for one page classified "Other / Not relevant" (page 14) — showing the automated splitting and classification step.

## Slide 16 — Extraction
**Text.** Extraction / From Documents to Data / [1–4] Claims Form → JSON: "pages": [1,2,3,4], "reasoning": "BARMER-Antrag auf Erstattung von Zuzahlungen für das Jahr 2025, 4-seitiges For...", "doc_type": "Antrag", "extracted": { "versicherungsnummer": "V123456789", "antragsdatum": "XX.XX.2026", "beantragte_leistungen": ["Erstattung von Zuzahlungen für das Jahr 2025"], "unterschrift_vorhanden": true, "chroniker_information": true, / [5–6] Receipt → JSON: "pages": [5,6], "reasoning": "Zuzahlungsrechnung der Podologie XXXXXXXX, RG.-Nr. ZZXXXXXXXXX817, Datum XX.XX.2025, Se...", "doc_type": "Belege/Quittungen", "extracted": { "belege": [{ "beleg_id": "B001", "beleg_reasoning": "Zuzahlungsrechnung (Heilmittel/Podologie) – Eigenanteil von 3,42 € ex...", "rechnungsdatum": "XX.XX.2025", "leistung_von": "XX.XX.2025", "leistung_bis": "XX.XX.2025", "betrag": 3.42, "leistungserbringer": "Podologie XXXXXXXX", "leistung": "78010 / Podologische Behandlung (klein)", / Structured extraction turns relevant content into machine-readable data / BARMER / 16
**Shows.** The classified claims-form pages (1–4) and receipt pages (5–6) each feed via a green arrow into a dark code panel showing the corresponding structured JSON output — reasoning, document type, and extracted fields (insurance number, application date, requested benefits, signature/chronic-illness flags for the claim; invoice date, service dates, amount, provider and service code for the receipt).

## Slide 17 — Business protocol
**Text.** Business protocol / What Happened? / Protokoll aus Antragsverarbeitung AI — Dokumentation / Verarbeitungsergebnis: Technisches Ergebnis: Erfolg — Fachliches Ergebnis: Erstattung: 22,35 € (Berücksichtigte Zuzahlungen: 190,12 €, Belastungsgrenze: 167,77 €) / Verfahren: Kundenantrag Befreiung § 62 / Fallbündelnummer, Datum Posteingang verarbeiteter Antrag, Bezugsjahr: 2025, KVNRDE, BP-NR, Name des Versicherten, Datum Verarbeitung durch Agent: 11.08.2026 11:56:18, 1. aufgetretener Fehler: — / (second case) Technisches Ergebnis: Fehlgeschlagen — Fachliches Ergebnis: Keine Entscheidung — 1. aufgetretener Fehler in Phase: Datenabgleich (Nachverarbeitung), Grund: Antrag-Einkommensart ist ungültig — Keine Berechnung möglich — Verarbeitung / Prüfung(en) fehlgeschlagen / 1. aufgetretener Fehler: EXIT_023 – Antrag-Eink... Fallbündel (siehe Detai...) / (third case) Technisches Ergebnis: Erfolg — Fachliches Ergebnis: Ablehnung — Belastungsgrenze noch nicht erreicht / Detaillierte Postprocessing-Entscheidungen (Datenabgleich): R010 Prüft ob Dokumententyp 'Sonstiges' vorhanden ist (nicht zulässig) — Erfolgreich / R011 Prüft Einkommensdaten gegen Antrag/Nachweise: Übereinstimmung Renteneinkunftsart zwischen Antrag und SAP, nur zulässige Einkunftsarten in Antrag und Einkommensnachweisen — Exit: EXIT_023 - Antrag enthält nicht unterstützte Einkommensarten: Angehörigen] | Erwartet: None oder ausschließlich 'Altersrente', 'Erwerbsminderungsrente' oder 'Hinterbliebenenrente' — Nicht erfüllt / R024 Prüft Chroniker-Übereinstimmung: SAP-Status muss mit Antrag und Chronikerbescheinigung übereinstimmen — Erfolgreich / R012 Prüft alle Belege auf strukturelle Vollständigkeit: Leistungsdatum vorhanden und im Bezugsjahr, Antragssteller stimmt mit Beteiligten überein — Beleg B001 Erfolgreich, Beleg B002 Erfolgreich / The business protocol captures the case in business terms / BARMER / 17
**Shows.** Three side-by-side mock "Protokoll aus Antragsverarbeitung AI" (AI application-processing protocol) documents in German, each with a redacted (blacked-out) case/member ID and policy number, showing different outcomes: a successful reimbursement decision (green), a failed/no-decision case due to an invalid income type (red), and an approved-but-rejected-on-merits case (orange). A popup window overlays the third document showing detailed rule-by-rule postprocessing decisions (R010, R011, R012, R024) with pass/fail status for each — illustrating the human-readable business audit trail generated for each case.

## Slide 18 — Workflow protocol
**Text.** Workflow protocol / How Did It Happen? / { "execution_id": "28d85065-9c1d-4d9a-a984-85d37cf5cdc0", "status": "SUCCEEDED", "start_time": "2026-08-20T13:50:42.363000+00:00", "stop_time": "2026-08-20T13:54:11.786000+00:00", "state": [ { "state_name": "InvokeSapDataFetch", "state_type": "Task", "input": { "data": { "fallbuendel_id": "XXXXXXXXXXXXXXX0910", "instance_id": "XXXXXXXX449", "use_mock_sap_data": false, "write_charges": false, "write_activities": false, "write_refund_zuz": false, "write_close_fallbuendel": false, "write_charge_free": false, "forward_workitem": false, "write_to_nuxeo": false }, "timestamp": "2026-08-20T13:50:42.429000+00:00" }, "output": { "data": { "fallbuendel_id": "XXXXXXXXXXXXXXX0910", "instance_id": "XXXXXXXX449", "use_mock_sap_data": false, "write_charges": false, "write_activities": false, "write_refund_zuz": false, "write_close_fallbuendel": false, "write_charge_free": false, "forward_workitem": false, "write_to_nuxeo": false, "sap_result": { / 80,000+ lines for a single case / The technical protocol captures the complete execution record / BARMER / 18
**Shows.** A dark code panel on the left shows a fragment of the raw JSON execution-state log (execution ID, status, start/stop timestamps, a state entry with redacted IDs and boolean write flags). On the right, three tall narrow panels of dense green-on-dark text (too small to read, representing minimap-style code/log views) visualise the sheer volume of the full trace, captioned "80,000+ lines for a single case."

## Slide 19 — Section divider: Beyond the Workflow
**Text.** Beyond the Workflow / Building for Production / BARMER / 19
**Shows.** A light-green section-divider slide matching slides 9 and 13, transitioning to production-engineering concerns.

## Slide 20 — What we didn't cover
**Text.** What we didn't cover / Production engineering extends beyond the runtime architecture / Release Engineering — Offline evals & software testing (unit / integration / smoke tests) — Automated quality gates & release processes / Governance & Documentation — Documentation requirements & curation — Regulatory assessment of individual use cases & processes / AI-assisted Engineering — AI-assisted development across the engineering lifecycle — Faster exploration, implementation & iteration / From agentic to deterministic — Highly agentic approaches during development — Harden into deterministic production pathways wherever possible / BARMER / 20
**Shows.** Four labelled sections, each with a small green circular icon (gear, layered documents, network/nodes, stacked layers) and two bullet points, listing production-engineering topics the talk explicitly did not have time to cover in depth.

## Slide 21 — Key Takeaways
**Text.** Key Takeaways / What we learned building agents for production / 01 Introduce autonomy selectively — Explicit behaviour makes the system easier to control, test and explain — Deterministic pathways keep the process controllable; use agentic reasoning where it adds value. / 02 Promote recurring needs into shared capabilities — Reliability emerges from the system, not any single component — Shared capabilities make access, integration and execution concerns consistent across workflows. / 03 Translate regulation into engineering — Turn regulatory requirements into explicit, testable system properties — Express requirements through controls, evidence, access boundaries and escalation paths that can be verified. / BARMER / 21
**Shows.** Three numbered takeaways (01 blue, 02 purple, 03 red), each marked with a coloured vertical bar, a bold headline, a bold sub-statement, and an explanatory sentence — the talk's closing summary.

## Slide 22 — Thank you
**Text.** Thank You / Janosch Woschitz / Senior Cloud & AI Architect @ BARMER.KI / https://www.linkedin.com/in/jwoschitz / BARMER
**Shows.** A light-green closing card with a white rounded panel holding "Thank You" and the speaker's name/title on the left, a QR code linking to his LinkedIn profile on the right, and the green BARMER pill logo bottom-right.
