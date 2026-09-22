#!/usr/bin/env python3
"""Split the decks still needing description into per-agent batches.

    batch_slides.py --agents 8 [--out DIR]

Prints one manifest per agent. Decks are dealt round-robin by slide count so
no single agent gets all the 50-slide decks, and any deck that already has a
.slides.md is left out, which makes the whole pipeline resumable: run it
again after a failure and only the unfinished decks come back.
"""
import argparse, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[4]
CACHE = ROOT / ".transcribe-cache" / "slides"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--agents", type=int, default=8)
    ap.add_argument("--out", default=str(CACHE / "batches"))
    a = ap.parse_args()

    items = []
    for d in sorted(CACHE.iterdir()):
        if not d.is_dir() or d.name == "batches":
            continue
        pngs = sorted(d.glob("*.png"))
        if not pngs:
            continue
        talk = ROOT / "talks" / d.name / "materials"
        deck = next((f for f in sorted(talk.iterdir())
                     if f.suffix.lower() in (".pdf", ".pptx", ".ppt")), None)
        if deck is None:
            continue
        if (talk / (deck.stem + ".slides.md")).exists():
            continue                                   # already described
        items.append({
            "slug": d.name,
            "deck": deck.name,
            "slides": len(pngs),
            "images_dir": str(d.relative_to(ROOT)),
            "first_image": str(pngs[0].relative_to(ROOT)),
        })

    if not items:
        print("nothing left to describe")
        return

    items.sort(key=lambda x: -x["slides"])            # biggest first, then deal
    out = pathlib.Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for i in range(a.agents):
        batch = items[i::a.agents]
        if not batch:
            continue
        p = out / f"batch{i+1}.json"
        p.write_text(json.dumps(batch, indent=1, ensure_ascii=False))
        print(f"{p.relative_to(ROOT)}: {len(batch)} deck(s), "
              f"{sum(x['slides'] for x in batch)} slides")

    print(f"\n{len(items)} deck(s) to describe, "
          f"{sum(x['slides'] for x in items)} slides total")


if __name__ == "__main__":
    main()
