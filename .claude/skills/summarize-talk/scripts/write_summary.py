#!/usr/bin/env python3
"""Write talks/<slug>/summary.md beside an existing transcript.

Attribution is derived from guide/sessions.json via the transcript's
session_id, never retyped -- so the two files in a talk directory can never
drift apart on who spoke or what the talk was called.

Usage:
  python3 write_summary.py --slug <slug> --body body.md
  ... | python3 write_summary.py --slug <slug> --body -
"""
import argparse, json, os, re, sys, textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))))
DAY_NAME = {"thu": "Thursday 17 September 2026", "fri": "Friday 18 September 2026"}

ABOUT = "## What it was about"
POINTS = "## Key points"
MIN_WORDS, MAX_WORDS = 400, 750
MIN_POINTS, MAX_POINTS = 3, 6
MIN_TOPICS, MAX_TOPICS = 2, 4
# A topic section shorter than this is a heading with a sentence under it --
# the table of contents the format exists to avoid.
MIN_TOPIC_WORDS = 60

# Words that start sentences or bullets and would otherwise look like invented
# proper nouns. Everything else capitalised has to be in the transcript.
COMMON = {
    "a", "after", "an", "and", "as", "at", "both", "but", "by", "each", "every",
    "for", "from", "he", "her", "his", "how", "i", "if", "in", "it", "its",
    "most", "no", "not", "on", "one", "or", "rather", "she", "several", "since",
    "so", "than", "that", "the", "their", "them", "they", "this", "three", "to",
    "two", "until", "we", "what", "when", "where", "which", "while", "who",
    "why", "with", "without", "you", "your",
}


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}, text
    out = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            out[k.strip()] = v.strip().strip('"')
    return out, text[m.end():]


def sections(body):
    """Split the body into [(heading, text)] at level-2 headings, in order."""
    parts = re.split(r"^(## .*)$", body, flags=re.M)
    return [(parts[i].strip(), parts[i + 1])
            for i in range(1, len(parts) - 1, 2)]


def check_shape(body):
    """Reject a body that is not the agreed format.

    The shape is: what it was about, then two to four sections named after the
    topics the talk actually dwelt on, then the key points. The per-section
    minimum is the part that matters -- without it the format degrades into
    the same short summary with more headings in it.
    """
    problems = []
    secs = sections(body)
    headings = [h for h, _ in secs]

    deep = re.findall(r"^#{3,6} .*$", body, re.M)
    if deep:
        problems.append(f"{len(deep)} heading(s) below level 2 -- topic "
                        "sections do not get sub-headings")

    if not headings:
        return [f'no sections at all -- expected "{ABOUT}" first'], 0
    if headings[0] != ABOUT:
        problems.append(f'first section must be "{ABOUT}", found "{headings[0]}"')
    if POINTS not in headings:
        problems.append(f'missing the "{POINTS}" section')
    elif headings[-1] != POINTS:
        problems.append(f'"{POINTS}" must be the last section')

    topics = [(h, t) for h, t in secs if h not in (ABOUT, POINTS)]
    if not MIN_TOPICS <= len(topics) <= MAX_TOPICS:
        problems.append(f"{len(topics)} topic section(s) between them "
                        f"(want {MIN_TOPICS}-{MAX_TOPICS})")
    for h, text in topics:
        n = len(text.split())
        if n < MIN_TOPIC_WORDS:
            problems.append(f'"{h}" is {n} words (want at least '
                            f"{MIN_TOPIC_WORDS}) -- elaborate it or drop it")
        if re.search(r"^\s*[-*] ", text, re.M):
            problems.append(f'"{h}" contains bullets -- topic sections are '
                            "prose; bullets belong under Key points")

    points = dict(secs).get(POINTS, "")
    bullets = re.findall(r"^\s*[-*] ", points, re.M)
    if not MIN_POINTS <= len(bullets) <= MAX_POINTS:
        problems.append(f"{len(bullets)} key points (want {MIN_POINTS}-{MAX_POINTS})")

    words = len(re.sub(r"^#{1,6} .*$", "", body, flags=re.M).split())
    if not MIN_WORDS <= words <= MAX_WORDS:
        problems.append(f"{words} words (want {MIN_WORDS}-{MAX_WORDS})")

    return problems, words


def unknown_proper_nouns(body, transcript):
    """Capitalised words in the summary that never appear in the transcript.

    A summary invents names far more readily than it invents arguments -- a
    company the speaker never mentioned, a product carried over from the
    abstract rather than the talk. Comparing against the transcript's own
    vocabulary catches that cheaply. Warns rather than fails: an inflected form
    can trip it honestly.

    Words at the start of a sentence or a bullet are skipped. Capitalisation
    there is grammar, not a name, and flagging them buries the real hits in
    noise -- a warning nobody trusts is worse than no warning. The cost is that
    a name invented at the very start of a sentence goes unseen; read the
    summary against the transcript, do not lean on this alone.
    """
    # Strip surrounding dots so a word that ends a sentence in the transcript
    # ("not good at UI.") still matches the bare word in the summary. Inner
    # dots are kept, so "4.5" and "e.g" survive intact.
    vocab = {w.lower().strip(".") for w in re.findall(r"[A-Za-z0-9+.\-]+", transcript)}
    prose = re.sub(r"^#{1,6} .*$", "", body, flags=re.M)
    opener = re.compile(r"(?:\A|[.!?][\"')\]]?\s|\n\s*[-*]\s)\s*\Z", re.S)
    seen, out = set(), []
    for m in re.finditer(r"\b[A-Z][A-Za-z0-9+.\-]*\b", prose):
        w = m.group()
        if opener.search(prose[:m.start()]):
            continue
        low = w.lower().strip(".")
        if low.endswith("'s"):
            low = low[:-2]
        if low in COMMON or low in vocab or low in seen:
            continue
        seen.add(low)
        out.append(w)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", required=True)
    ap.add_argument("--body", required=True,
                    help="file holding the summary body, or - for stdin")
    a = ap.parse_args()

    talk_dir = os.path.join(ROOT, "talks", a.slug)
    tpath = os.path.join(talk_dir, "transcript.md")
    if not os.path.exists(tpath):
        sys.exit(f"no transcript at talks/{a.slug}/transcript.md -- summaries "
                 "are written beside a transcript, never on their own")
    fm, transcript = frontmatter(tpath)

    body = (sys.stdin.read() if a.body == "-"
            else open(a.body, encoding="utf-8").read()).strip()

    problems, words = check_shape(body)
    if problems:
        sys.exit("summary body is not in the archive format:\n  - " +
                 "\n  - ".join(problems))

    # Attribution comes from the guide, never from the summary body.
    sessions = json.load(open(os.path.join(ROOT, "guide", "sessions.json")))["sessions"]
    s = next((x for x in sessions if x["id"] == fm.get("session_id")), None)
    if s:
        title = s["title"]
        names = ", ".join(sp["n"] for sp in s["speakers"])
        where = (f"*{DAY_NAME[s['day']]}, {s['start']}, {s['room']} — "
                 f"{s['track']} track*")
    else:
        # Unidentified recordings have no session to inherit from; fall back to
        # what the transcript itself claims and stay quiet about the schedule.
        title = fm.get("title", a.slug)
        names = fm.get("speakers", "").strip("[]")
        where = "*Session not identified — see the transcript.*"

    confidence = fm.get("confidence", "confirmed")
    caveat = ""
    if confidence != "confirmed":
        caveat = (f"\n> The attribution of this recording is `{confidence}`.\n"
                  "> Read the transcript's frontmatter before citing this as a\n"
                  "> record of what this speaker said.\n")

    # An unidentified recording has no speaker to name; say so rather than
    # rendering an empty bold run.
    byline = f"**{names}**" if names else "_Speaker not identified._"
    sid = fm.get("session_id", "")

    doc = f"""---
title: {json.dumps(title, ensure_ascii=False)}
speakers: [{names}]
session_id:{" " + sid if sid else ""}
source: transcript.md
confidence: {confidence}
kind: summary
---

# {title} — summary

{byline}

{where}

> A summary, not a transcript. The speaker's own words are in
> [`transcript.md`](transcript.md); where the two disagree, the transcript is
> right.
{caveat}
{body}
"""
    out = os.path.join(talk_dir, "summary.md")
    open(out, "w", encoding="utf-8").write(doc)
    print(f"wrote talks/{a.slug}/summary.md  ({words} words)")

    unknown = unknown_proper_nouns(body, transcript)
    if unknown:
        print("\n  WARNING: these appear in the summary but nowhere in the "
              "transcript:\n" +
              textwrap.fill(", ".join(unknown), 74,
                            initial_indent="    ", subsequent_indent="    ") +
              "\n  Check each one against the transcript before committing.")


if __name__ == "__main__":
    main()
