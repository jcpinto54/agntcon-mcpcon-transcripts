---
name: describe-slides
description: Run the pipeline that turns the slide decks in this archive into searchable text — render every slide, split the work into batches, fan out slide-describer agents, verify. Use when decks have been added and need describing, or when someone says a deck's diagrams are lost in a text extraction.
---

# Describing the decks

A slide deck does not survive as a text extraction. The text layer of a
diagram gives you its labels and throws away the arrows — and three decks in
this archive are built entirely from images and extract to nothing at all.

This pipeline fixes that by having an agent look at each slide and write down
both what it says and what it shows. **How to describe a slide lives in the
[`slide-describer`](../../agents/slide-describer.md) agent definition**, not
here; this file is how to run the job.

## The pipeline

```bash
# 1. Render every deck that has no images yet.
#    PDFs render directly; PowerPoint needs LibreOffice on the machine.
python3 .claude/skills/describe-slides/scripts/render_slides.py

# 2. Split what remains into per-agent batches, balanced by slide count.
python3 .claude/skills/describe-slides/scripts/batch_slides.py --agents 8
```

3. **Fan out.** One `slide-describer` agent per batch, all launched in a single
   message so they run in parallel, each given only its manifest path:

   > Describe the decks in `.transcribe-cache/slides/batches/batch3.json`.

   **Name the model on every call**, like this:

   ```
   Agent(subagent_type: "slide-describer", model: "sonnet",
         prompt: "Describe the decks in .transcribe-cache/slides/batches/batch3.json")
   ```

   The definition declares `model: sonnet`, and the documented resolution
   order is per-call model, then the definition's, then
   `CLAUDE_CODE_SUBAGENT_MODEL`, then the main conversation's. But the second
   step is currently broken -- frontmatter `model:` is ignored and a subagent
   silently inherits the parent's model (anthropics/claude-code#44385). On a
   thousand-slide vision job that is the difference between Sonnet and
   whatever the orchestrator happens to be running, so never leave it to the
   definition to enforce.

4. **Verify and resume.** Re-run `batch_slides.py`; it lists only decks with no
   `.slides.md` yet, so a clean run prints `nothing left to describe`. Anything
   still listed failed, and re-running the fan-out picks up exactly those.

## Where the output goes

`talks/<slug>/materials/<deck>.slides.md`, beside the deck. It is derived,
like a summary — labelled as such, and outranked by a transcript where one
exists. Link it from `materials.md`.

It replaces the flat `<deck>.txt` extraction, which loses the visuals; delete
that once the description is written.

**Except for PowerPoint.** A `.pptx` has to be converted to PDF before it can
be rendered, and the conversion sometimes stacks text boxes on top of each
other, leaving slides that are genuinely illegible in the image while the
words sit perfectly readable in the original file's XML. For those decks keep
both: the description for what the slide showed, the extraction for what it
said. `materials.md` should say why both are there, so nobody tidies one away
later.

## Notes

- Slide images live in `.transcribe-cache/slides/`, which is gitignored. They
  are working material — the deck itself is already in the repo under Git LFS,
  and re-rendering is cheap.
- `write_slides.py --slug <slug> --count` says how many slides a deck has.
- `render_slides.py --force` re-renders a deck whose images are stale.
- The checks in `write_slides.py` are the point of the pipeline: a description
  that quietly stops at slide 12 of 40 reads as complete and is not, so the
  script refuses drafts that skip slides, invent them, or drop a field.
