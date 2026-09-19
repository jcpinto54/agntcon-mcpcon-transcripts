#!/usr/bin/env python3
"""Turn a raw Whisper transcript into a finished talks/<slug>.md.

Pulls title, speakers, room, time and track from guide/sessions.json so
attribution never depends on what the transcription heard.

Usage:
  python3 write_talk.py --session <session_id> --transcript <file.txt> \
      --recording "<original audio filename>" [--contributor <handle>] \
      [--bio bio.txt] [--confidence confirmed|uncertain] [--slug <slug>] \
      [--fix "Heard=Correct" --fix "Alsoheard=Correct"] [--note "..."]
"""
import argparse, collections, json, os, re, sys, textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))))
DAY_NAME = {"thu": "Thursday 17 September 2026", "fri": "Friday 18 September 2026"}
STOP = {"a","an","the","to","of","and","or","for","in","on","with","your","you",
        "is","are","at","from","its","it","this","that","why","how","what"}


def slugify(title, limit=8):
    words = re.findall(r"[a-z0-9]+", title.lower())
    kept = [w for w in words if w not in STOP] or words
    return "-".join(kept[:limit])


def drop_looped_segments(lines):
    """Remove individual segments that are one phrase repeated to fill the slot.

    Whisper does this over silence -- a recording that opens while the room is
    still being seated produced a single segment of "the President of the
    United States" repeated 32 times. Counting unique *lines* misses it,
    because the loop lives inside one line.
    """
    # First collapse runs of the same segment repeated back to back. Whisper
    # stutters this way over applause, room noise or a trailing hot mic --
    # "Hot coffee." 28 times in a row, each its own short segment. Every
    # earlier check missed it: the segments are too short to look like
    # internal loops, and spread over a long talk the repeated n-grams stay
    # under a length-scaled ceiling.
    collapsed, prev = [], None
    for l in lines:
        key = re.sub(r"[^a-z0-9 ]", "", l.lower()).strip()
        if key and key == prev:
            continue
        collapsed.append(l)
        prev = key
    lines = collapsed

    kept = []
    for l in lines:
        w = l.split()
        if len(w) >= 8:
            grams = [" ".join(w[i:i+4]).lower() for i in range(len(w) - 3)]
            # Judge by how FEW distinct n-grams the segment has, not by the
            # top count. A phrase looping 32 times still only tops out at 32,
            # well under any "share of total" threshold -- but it leaves just
            # a handful of distinct n-grams, which is unmistakable.
            if len(set(grams)) / len(grams) < 0.25:
                continue  # this segment is a loop; drop it
        kept.append(l)
    return kept


def check_not_hallucinated(lines):
    """Refuse a transcript dominated by one repeated phrase."""
    words = " ".join(lines).split()
    # A real conference talk is thousands of words. Anything this short is a
    # recording that captured silence -- Whisper emits a few "you"/"Thank you"
    # segments over a dead mic, which survive loop-dropping because each is
    # too short to look like a loop.
    if len(words) < 200:
        sys.exit(f"only {len(words)} words after cleaning -- this recording "
                 "captured no usable speech. Do not file it as a transcript.")
    grams = [" ".join(words[i:i+5]).lower() for i in range(len(words) - 4)]
    phrase, count = collections.Counter(grams).most_common(1)[0]
    # A real talk repeats a stock phrase a handful of times; a loop repeats one
    # hundreds. Scale the ceiling with length so long talks are not penalised.
    ceiling = max(10, len(grams) // 300)
    if count > ceiling:
        sys.exit(f'"{phrase}" repeats {count}x (ceiling {ceiling}) -- looks '
                 "like a hallucination loop. Re-transcribe with "
                 "--condition-on-previous-text False before writing.")


def paragraphs(lines, min_chars=430):
    """Group segments into readable paragraphs at sentence boundaries."""
    out, buf = [], ""
    for line in lines:
        buf = (buf + " " + line).strip()
        if len(buf) > min_chars and re.search(r"[.!?][\"')]?$", buf):
            out.append(buf); buf = ""
    if buf:
        out.append(buf)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--session", required=True)
    ap.add_argument("--transcript", required=True)
    ap.add_argument("--recording", required=True)
    ap.add_argument("--contributor", default="")
    ap.add_argument("--bio", default="")
    ap.add_argument("--confidence", default="confirmed")
    ap.add_argument("--slug", default="")
    ap.add_argument("--note", default="")
    ap.add_argument("--lines", default="",
                    help="1-based INCLUSIVE line range of the transcript for "
                         "this talk, e.g. 34-130. Use when one recording "
                         "covers several back-to-back talks.")
    ap.add_argument("--fix", action="append", default=[],
                    help='Proper-noun correction as "Misheard=Correct"')
    a = ap.parse_args()

    sessions = json.load(open(os.path.join(ROOT, "guide", "sessions.json")))["sessions"]
    s = next((x for x in sessions if x["id"] == a.session), None)
    if not s:
        sys.exit(f"no session with id {a.session}")

    lines = [l.rstrip() for l in open(a.transcript, encoding="utf-8")]
    if a.lines:
        lo, hi = (int(x) for x in a.lines.split("-"))
        lines = lines[lo - 1:hi]
    lines = [l.strip() for l in lines if l.strip()]

    # Whisper cannot spell names. Correct proper nouns only -- never phrasing.
    for pair in a.fix:
        wrong, right = pair.split("=", 1)
        lines = [re.sub(re.escape(wrong), right, l) for l in lines]

    lines = drop_looped_segments(lines)
    check_not_hallucinated(lines)

    names = ", ".join(sp["n"] for sp in s["speakers"])
    orgs = " / ".join(dict.fromkeys(sp["c"] for sp in s["speakers"]))
    slug = a.slug or slugify(s["title"])

    bio = open(a.bio, encoding="utf-8").read().strip() if a.bio else \
        "\n".join(sp["bio"] for sp in s["speakers"] if sp.get("bio")).strip() or \
        "_Background for this speaker has not been filled in yet._"

    body = "\n\n".join(textwrap.fill(p, 80) for p in paragraphs(lines))
    note = ("\n> " + a.note) if a.note else ""

    doc = f"""---
title: {json.dumps(s['title'])}
speakers: [{names}]
day: {s['day']}
date: 2026-09-{"17" if s['day']=='thu' else "18"}
start: "{s['start']}"
room: {s['room']}
track: {s['track']}
kind: {s['kind']}
session_id: {s['id']}
recording: {a.recording}
contributor: {a.contributor}
confidence: {a.confidence}
---

# {s['title']}

**{names}** — {orgs}

{bio}

*{DAY_NAME[s['day']]}, {s['start']}, {s['room']} — {s['track']} track*

> Transcribed with Whisper large-v3. Speaker and company names are corrected
> against the conference guide; the spoken words are otherwise unedited.{note}

## Transcript

{body}
"""
    path = os.path.join(ROOT, "talks", slug + ".md")
    open(path, "w", encoding="utf-8").write(doc)
    print(f"wrote talks/{slug}.md  ({len(body.split())} words, "
          f"{len(paragraphs(lines))} paragraphs)")


if __name__ == "__main__":
    main()
