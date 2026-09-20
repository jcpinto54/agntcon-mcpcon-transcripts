#!/usr/bin/env python3
"""Regenerate the coverage table in README.md.

Lists all 93 sessions from the conference and marks what the archive holds for
each one, so every kind of gap is visible and someone can fill it:

  transcript.md   what the speaker said, from a recording
  summary.md      a derived summary, written from the transcript
  materials.md    links the speaker shared — slides, video, references

The three are independent. A session can have materials and no recording,
which is the usual shape when a speaker turns up and shares their slides for a
talk nobody in the audience recorded.

Usage:  python3 build_index.py
"""
import json, os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))))
START = "<!-- COVERAGE:START -->"
END = "<!-- COVERAGE:END -->"
DAY_LABEL = {"thu": "Thursday 17 September", "fri": "Friday 18 September"}


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}
    out = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            out[k.strip()] = v.strip().strip('"')
    return out


def index_by_session(filename):
    """Map session_id -> slug for every talks/*/<filename> that declares one."""
    found = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "talks", "*", filename))):
        fm = frontmatter(path)
        if fm.get("session_id"):
            found[fm["session_id"]] = os.path.basename(os.path.dirname(path))
    return found


def main():
    sessions = json.load(open(os.path.join(ROOT, "guide", "sessions.json")))["sessions"]

    transcripts = index_by_session("transcript.md")
    materials = index_by_session("materials.md")
    summarised = {sid for sid, slug in transcripts.items()
                  if os.path.exists(os.path.join(ROOT, "talks", slug, "summary.md"))}

    lines = []
    for day in ("thu", "fri"):
        day_sessions = sorted((s for s in sessions if s["day"] == day),
                              key=lambda s: (s["start"], s["room"]))
        done = sum(1 for s in day_sessions if s["id"] in transcripts)
        summed = sum(1 for s in day_sessions if s["id"] in summarised)
        mats = sum(1 for s in day_sessions if s["id"] in materials)
        heading = (f"\n### {DAY_LABEL[day]}  ({done}/{len(day_sessions)} "
                   f"transcribed, {summed} summarised")
        heading += f", {mats} with materials)\n" if mats else ")\n"
        lines.append(heading)
        lines.append("| | Time | Room | Talk | Speakers | Summary | Materials |")
        lines.append("|---|---|---|---|---|---|---|")
        for s in day_sessions:
            slug = transcripts.get(s["id"])
            mat_slug = materials.get(s["id"])
            mark = f"[x](talks/{slug}/transcript.md)" if slug else " "
            title = s["title"].replace("|", "\\|")
            names = ", ".join(sp["n"] for sp in s["speakers"]).replace("|", "\\|")
            # Link the title at the best thing the archive holds for it.
            if slug:
                link = f"[{title}](talks/{slug}/transcript.md)"
            elif mat_slug:
                link = f"[{title}](talks/{mat_slug}/materials.md)"
            else:
                link = title
            summary = f"[x](talks/{slug}/summary.md)" if s["id"] in summarised else " "
            mats = f"[x](talks/{mat_slug}/materials.md)" if mat_slug else " "
            lines.append(f"| {mark} | {s['start']} | {s['room']} | {link} "
                         f"| {names} | {summary} | {mats} |")

    table = "\n".join(lines)
    readme_path = os.path.join(ROOT, "README.md")
    readme = open(readme_path, encoding="utf-8").read()
    if START not in readme:
        raise SystemExit("README.md is missing the COVERAGE markers")
    new = re.sub(f"{re.escape(START)}.*?{re.escape(END)}",
                 f"{START}\n{table}\n\n{END}", readme, flags=re.S)
    open(readme_path, "w", encoding="utf-8").write(new)

    covered = set(transcripts) | set(materials)
    print(f"Indexed {len(transcripts)}/{len(sessions)} transcripts into README.md "
          f"({len(summarised)} with summaries, {len(materials)} with materials; "
          f"{len(covered)}/{len(sessions)} sessions have something)")


if __name__ == "__main__":
    main()
