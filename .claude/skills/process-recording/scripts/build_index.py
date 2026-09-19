#!/usr/bin/env python3
"""Regenerate the coverage table in README.md.

Lists all 93 sessions from the conference and marks which ones have a
transcript and which have a summary, so both kinds of gap are visible and
someone can fill them.

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


def main():
    sessions = json.load(open(os.path.join(ROOT, "guide", "sessions.json")))["sessions"]

    # Map session_id -> talk slug, for whatever has been written so far. Each
    # talk is a directory: transcript.md, and summary.md once someone writes it.
    have = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "talks", "*", "transcript.md"))):
        fm = frontmatter(path)
        if fm.get("session_id"):
            have[fm["session_id"]] = os.path.basename(os.path.dirname(path))
    summarised = {sid for sid, slug in have.items()
                  if os.path.exists(os.path.join(ROOT, "talks", slug, "summary.md"))}

    lines = []
    for day in ("thu", "fri"):
        day_sessions = sorted((s for s in sessions if s["day"] == day),
                              key=lambda s: (s["start"], s["room"]))
        done = sum(1 for s in day_sessions if s["id"] in have)
        summed = sum(1 for s in day_sessions if s["id"] in summarised)
        lines.append(f"\n### {DAY_LABEL[day]}  ({done}/{len(day_sessions)} "
                     f"transcribed, {summed} summarised)\n")
        lines.append("| | Time | Room | Talk | Speakers | Summary |")
        lines.append("|---|---|---|---|---|---|")
        for s in day_sessions:
            slug = have.get(s["id"])
            mark = f"[x](talks/{slug}/transcript.md)" if slug else " "
            title = s["title"].replace("|", "\\|")
            names = ", ".join(sp["n"] for sp in s["speakers"]).replace("|", "\\|")
            link = f"[{title}](talks/{slug}/transcript.md)" if slug else title
            summary = f"[x](talks/{slug}/summary.md)" if s["id"] in summarised else " "
            lines.append(f"| {mark} | {s['start']} | {s['room']} | {link} "
                         f"| {names} | {summary} |")

    table = "\n".join(lines)
    readme_path = os.path.join(ROOT, "README.md")
    readme = open(readme_path, encoding="utf-8").read()
    if START not in readme:
        raise SystemExit("README.md is missing the COVERAGE markers")
    new = re.sub(f"{re.escape(START)}.*?{re.escape(END)}",
                 f"{START}\n{table}\n\n{END}", readme, flags=re.S)
    open(readme_path, "w", encoding="utf-8").write(new)
    print(f"Indexed {len(have)}/{len(sessions)} sessions into README.md "
          f"({len(summarised)} with summaries)")


if __name__ == "__main__":
    main()
