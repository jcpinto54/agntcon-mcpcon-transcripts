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

# The section order, borrowed from how recaps and structured abstracts are
# conventionally written: the claim first (inverted pyramid), then the stages
# of thought that support it, then the reusable payload -- quotes and
# takeaways. See SKILL.md for where each piece comes from.
ONELINE = "## In one line"
ARGUMENT = "## The argument"
QUOTES = "## In their words"
TAKEAWAYS = "## Takeaways"
OPEN = "## What the talk leaves open"   # optional, always last

MIN_WORDS, MAX_WORDS = 550, 950
# ...but scaled down for a short transcript. One recording here is 451 words
# of speech, and no honest summary of it reaches 550 -- demanding one buys
# padding or invention, the two things this format exists to prevent. A
# summary is capped at roughly 40% of what was said, and the floor drops with
# it. Below SHORT_TRANSCRIPT a single topic section is enough.
SUMMARY_CEILING = 0.40
SUMMARY_FLOOR = 0.30
SHORT_TRANSCRIPT = 1200
MIN_TAKEAWAYS, MAX_TAKEAWAYS = 3, 5
MIN_TOPICS, MAX_TOPICS = 2, 4
MIN_QUOTES, MAX_QUOTES = 2, 4
MAX_ONELINE_WORDS = 45
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


def blockquotes(text):
    """Contiguous runs of '>' lines, joined into one quote each."""
    out, buf = [], []
    for line in text.splitlines():
        if line.lstrip().startswith(">"):
            buf.append(line.lstrip()[1:].strip())
        elif buf:
            out.append(" ".join(buf).strip()); buf = []
    if buf:
        out.append(" ".join(buf).strip())
    return [q for q in out if q]


def normalise(s):
    """Fold a string for verbatim comparison against the transcript.

    The transcript is hard-wrapped at 80 columns and the summary is not, so a
    quote that is word-for-word correct still will not match on whitespace
    alone. Quote characters get folded too, because a writer typing the quote
    by hand produces curly ones the transcript does not have.
    """
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("—", " ").replace("–", " ")
    # Punctuation goes first, then whitespace collapses -- otherwise a comma
    # present on one side and absent on the other leaves a double space there
    # and a single space here, and a correct quote fails to match.
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9' ]", " ", s.lower())).strip()


def check_quotes(body, transcript):
    """Every quoted line must appear word for word in the transcript.

    This is the one check the archive is uniquely able to make: the source is
    sitting in the next file. A summary that misquotes a speaker is worse than
    one that does not quote at all, and a quote smoothed into tidier grammar
    is a misquote.
    """
    problems = []
    quotes = blockquotes(dict(sections(body)).get(QUOTES, ""))
    if not MIN_QUOTES <= len(quotes) <= MAX_QUOTES:
        problems.append(f"{len(quotes)} quote(s) in \"{QUOTES}\" "
                        f"(want {MIN_QUOTES}-{MAX_QUOTES})")
    hay = normalise(transcript)
    for q in quotes:
        if normalise(q) not in hay:
            short = q if len(q) <= 60 else q[:57] + "..."
            problems.append(f'not in the transcript word for word: "{short}"')
    return problems


def limits(transcript_words):
    """Word range and topic minimum allowed for a transcript this long."""
    lo = min(MIN_WORDS, int(SUMMARY_FLOOR * transcript_words))
    hi = min(MAX_WORDS, max(int(SUMMARY_CEILING * transcript_words), lo + 150))
    return lo, hi, (MIN_TOPICS if transcript_words >= SHORT_TRANSCRIPT else 1)


def check_shape(body, transcript_words):
    """Reject a body that is not the agreed format.

    Order is the claim, the argument behind it, the stages of thought, then
    the reusable payload -- quotes and takeaways -- with an optional section
    for what the speaker left unresolved. The per-section minimum is the part
    that does the work: without it the format degrades into the same short
    summary with more headings in it.
    """
    problems = []
    secs = sections(body)
    headings = [h for h, _ in secs]
    fixed = (ONELINE, ARGUMENT, QUOTES, TAKEAWAYS, OPEN)

    deep = re.findall(r"^#{3,6} .*$", body, re.M)
    if deep:
        problems.append(f"{len(deep)} heading(s) below level 2 -- sections "
                        "do not get sub-headings")

    if not headings:
        return [f'no sections at all -- expected "{ONELINE}" first'], 0

    for want, pos in ((ONELINE, 0), (ARGUMENT, 1)):
        if len(headings) <= pos or headings[pos] != want:
            found = headings[pos] if len(headings) > pos else "nothing"
            problems.append(f'section {pos + 1} must be "{want}", found "{found}"')
    for want in (QUOTES, TAKEAWAYS):
        if want not in headings:
            problems.append(f'missing the "{want}" section')
    # Takeaways close the summary, unless the optional open-questions section
    # follows them.
    tail = [h for h in headings if h in (TAKEAWAYS, OPEN)]
    if tail and headings[-len(tail):] != tail:
        problems.append(f'"{TAKEAWAYS}" and "{OPEN}" must come last')
    if QUOTES in headings and TAKEAWAYS in headings \
            and headings.index(QUOTES) > headings.index(TAKEAWAYS):
        problems.append(f'"{QUOTES}" must come before "{TAKEAWAYS}"')

    one = dict(secs).get(ONELINE, "")
    n = len(one.split())
    if n > MAX_ONELINE_WORDS:
        problems.append(f'"{ONELINE}" is {n} words (want at most '
                        f"{MAX_ONELINE_WORDS}) -- it is the elevator sentence")

    lo, hi, min_topics = limits(transcript_words)

    topics = [(h, t) for h, t in secs if h not in fixed]
    if not min_topics <= len(topics) <= MAX_TOPICS:
        problems.append(f"{len(topics)} topic section(s) "
                        f"(want {min_topics}-{MAX_TOPICS})")
    for h, text in topics:
        n = len(text.split())
        if n < MIN_TOPIC_WORDS:
            problems.append(f'"{h}" is {n} words (want at least '
                            f"{MIN_TOPIC_WORDS}) -- elaborate it or drop it")
        if re.search(r"^\s*[-*] ", text, re.M):
            problems.append(f'"{h}" contains bullets -- topic sections are '
                            "prose; bullets belong under Takeaways")

    bullets = re.findall(r"^\s*[-*] ", dict(secs).get(TAKEAWAYS, ""), re.M)
    if not MIN_TAKEAWAYS <= len(bullets) <= MAX_TAKEAWAYS:
        problems.append(f"{len(bullets)} takeaway(s) "
                        f"(want {MIN_TAKEAWAYS}-{MAX_TAKEAWAYS})")

    words = len(re.sub(r"^#{1,6} .*$", "", body, flags=re.M).split())
    if not lo <= words <= hi:
        problems.append(f"{words} words (want {lo}-{hi} for a "
                        f"{transcript_words}-word transcript)")

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
    ap.add_argument("--body", default="",
                    help="file holding the summary body, or - for stdin")
    ap.add_argument("--limits", action="store_true",
                    help="print the word range this transcript allows, and exit")
    a = ap.parse_args()
    if not a.body and not a.limits:
        ap.error("--body is required unless --limits is given")

    talk_dir = os.path.join(ROOT, "talks", a.slug)
    tpath = os.path.join(talk_dir, "transcript.md")
    if not os.path.exists(tpath):
        sys.exit(f"no transcript at talks/{a.slug}/transcript.md -- summaries "
                 "are written beside a transcript, never on their own")
    fm, transcript = frontmatter(tpath)

    # Measure the spoken part only: the speaker bio and the header would
    # otherwise inflate the budget for a very short recording.
    spoken = transcript.split("## Transcript", 1)[-1]
    transcript_words = len(spoken.split())

    if a.limits:
        lo, hi, min_topics = limits(transcript_words)
        print(f"talks/{a.slug}: {transcript_words} words of transcript -> "
              f"summary must be {lo}-{hi} words, with {min_topics}-"
              f"{MAX_TOPICS} topic sections")
        return

    body = (sys.stdin.read() if a.body == "-"
            else open(a.body, encoding="utf-8").read()).strip()

    problems, words = check_shape(body, transcript_words)
    problems += check_quotes(body, transcript)
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
