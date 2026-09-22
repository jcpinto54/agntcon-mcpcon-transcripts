#!/usr/bin/env python3
"""Split the talks still needing a summary into per-agent batches.

    batch_talks.py --agents 5 [--out DIR]

Prints one manifest per agent. Talks are dealt round-robin by transcript
length so no single agent gets all the long ones, and any talk that already
has a summary.md is left out -- which makes the pipeline resumable: run it
again after a failure and only the unfinished talks come back.

A directory with no transcript.md is never listed. Most sessions in this
archive have a deck and nothing else, and a summary written from slides is
exactly what the format exists to prevent, so this script will not hand one
to an agent.

The word budget comes from write_summary.py, imported rather than restated,
so the two can never disagree about what a transcript of a given length is
allowed to produce.
"""
import argparse, json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from write_summary import MAX_TOPICS, frontmatter, limits   # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parents[4]
DRAFTS = ROOT / ".transcribe-cache" / "summaries"


def spoken_words(path):
    """Words of actual speech -- the same slice write_summary.py budgets on.

    The speaker bio and the header sit above `## Transcript` and would
    otherwise inflate the budget for a very short recording.
    """
    _, body = frontmatter(str(path))
    return len(body.split("## Transcript", 1)[-1].split())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--agents", type=int, default=5)
    ap.add_argument("--out", default=str(DRAFTS / "batches"))
    a = ap.parse_args()

    items, no_transcript = [], 0
    for d in sorted((ROOT / "talks").iterdir()):
        if not d.is_dir():
            continue
        tpath = d / "transcript.md"
        if not tpath.exists():
            no_transcript += 1
            continue
        if (d / "summary.md").exists():
            continue                                   # already summarised
        words = spoken_words(tpath)
        lo, hi, min_topics = limits(words)
        items.append({
            "slug": d.name,
            "transcript": str(tpath.relative_to(ROOT)),
            "words": words,
            "min_words": lo,
            "max_words": hi,
            "min_topics": min_topics,
            "max_topics": MAX_TOPICS,
            "draft": str((DRAFTS / f"{d.name}.md").relative_to(ROOT)),
        })

    tail = (f"  ({no_transcript} talk "
            f"{'directory holds' if no_transcript == 1 else 'directories hold'}"
            " no transcript -- slides only, not this pipeline's work)")
    if not items:
        print("nothing left to summarise")
        print(tail)
        return

    DRAFTS.mkdir(parents=True, exist_ok=True)
    items.sort(key=lambda x: -x["words"])             # longest first, then deal
    out = pathlib.Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for i in range(a.agents):
        batch = items[i::a.agents]
        if not batch:
            continue
        p = out / f"batch{i+1}.json"
        p.write_text(json.dumps(batch, indent=1, ensure_ascii=False))
        print(f"{p.relative_to(ROOT)}: {len(batch)} talk(s), "
              f"{sum(x['words'] for x in batch)} words of transcript")

    print(f"\n{len(items)} talk(s) to summarise, "
          f"{sum(x['words'] for x in items)} words of transcript total")
    print(tail)


if __name__ == "__main__":
    main()
