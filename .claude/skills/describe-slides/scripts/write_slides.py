#!/usr/bin/env python3
"""Check a slide-by-slide description and write it beside the deck.

    write_slides.py --slug <slug> --body draft.md
    write_slides.py --slug <slug> --count        # how many slides to describe

The body is just the per-slide sections. Frontmatter and the header come from
guide/sessions.json, so attribution is never retyped, and the checks below run
before anything is written.

What is enforced, and why:

* Every slide in the deck gets a section, numbered, none missing and none
  invented. A description that quietly stops at slide 12 of 40 is the failure
  mode this pipeline exists to prevent -- it reads as complete and is not.
* Each slide carries both **Text.** and **Shows.**. The whole point is that a
  text layer alone loses the diagram, so a section with no **Shows.** has not
  done the job. Use "Shows. Nothing beyond the text." where a slide really is
  just words -- explicitly, not by omission.
* No section may be empty.
"""
import argparse, json, os, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
CACHE = ROOT / ".transcribe-cache" / "slides"
DAY = {"thu": "Thursday 17 September 2026", "fri": "Friday 18 September 2026"}


def deck_for(slug):
    d = ROOT / "talks" / slug / "materials"
    for f in sorted(d.iterdir()) if d.is_dir() else []:
        if f.suffix.lower() in (".pdf", ".pptx", ".ppt"):
            return f
    return None


def expected(slug):
    """Slide count, taken from the rendered images."""
    return len(list((CACHE / slug).glob("*.png")))


def check(body, n):
    problems = []
    nums = [int(m) for m in re.findall(r"^## Slide (\d+)\b", body, re.M)]
    if not nums:
        return ["no '## Slide N' sections found"]
    if sorted(nums) != list(range(1, n + 1)):
        missing = [i for i in range(1, n + 1) if i not in nums]
        extra = [i for i in nums if i < 1 or i > n]
        dupes = sorted({i for i in nums if nums.count(i) > 1})
        if missing:
            problems.append(f"missing slide(s): {missing[:15]}"
                            f"{' ...' if len(missing) > 15 else ''}"
                            f"  (deck has {n})")
        if extra:
            problems.append(f"slide number(s) past the end of the deck: {extra}")
        if dupes:
            problems.append(f"duplicated slide number(s): {dupes}")

    parts = re.split(r"^## Slide (\d+)[^\n]*$", body, flags=re.M)[1:]
    for num, chunk in zip(parts[::2], parts[1::2]):
        if not chunk.strip():
            problems.append(f"slide {num}: empty section")
            continue
        if "**Text.**" not in chunk:
            problems.append(f"slide {num}: no '**Text.**'")
        if "**Shows.**" not in chunk:
            problems.append(f"slide {num}: no '**Shows.**' -- say "
                            '"Nothing beyond the text." if that is the case')
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", required=True)
    ap.add_argument("--body", default="")
    ap.add_argument("--count", action="store_true")
    a = ap.parse_args()

    n = expected(a.slug)
    if not n:
        sys.exit(f"no rendered slides for {a.slug}; run render_slides.py first")
    if a.count:
        print(f"{a.slug}: {n} slides to describe "
              f"(images in .transcribe-cache/slides/{a.slug}/)")
        return

    if not a.body:
        sys.exit("--body is required unless --count is given")
    body = (sys.stdin.read() if a.body == "-"
            else open(a.body, encoding="utf-8").read()).strip()

    problems = check(body, n)
    if problems:
        sys.exit("slide descriptions are not in the archive format:\n  - " +
                 "\n  - ".join(problems))

    talk = ROOT / "talks" / a.slug
    fm = (talk / "materials.md").read_text() if (talk / "materials.md").exists() else ""
    sid = (re.search(r"^session_id:\s*(\S+)", fm, re.M) or [None, ""])[1]
    sessions = json.load(open(ROOT / "guide" / "sessions.json"))["sessions"]
    s = next((x for x in sessions if x["id"] == sid), None)
    if not s:
        sys.exit(f"{a.slug}: could not resolve session_id {sid!r} in the guide")

    deck = deck_for(a.slug)
    names = ", ".join(sp["n"] for sp in s["speakers"])
    doc = f"""---
title: {json.dumps(s["title"], ensure_ascii=False)}
speakers: [{names}]
session_id: {sid}
kind: slides
deck: {deck.name}
slides: {n}
---

# {s["title"]} — slides

**{names}**

*{DAY[s["day"]]}, {s["start"]}, {s["room"]} — {s["track"]} track*

> The deck described slide by slide: the words on each slide, and what it
> actually shows. Derived, not the speaker's words — the deck itself is
> [`{deck.name}`]({deck.name}), and where a transcript exists it is next door
> and outranks this.

{body}
"""
    out = talk / "materials" / (deck.stem + ".slides.md")
    out.write_text(doc, encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)}  ({n} slides)")


if __name__ == "__main__":
    main()
