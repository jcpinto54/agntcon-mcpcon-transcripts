#!/usr/bin/env python3
"""Narrow a recording to a shortlist of candidate sessions using its timestamp.

Stage 1 of the two-stage matching process. This gets you from 93 sessions down
to the 3-5 that were running while the recording was made. Stage 2 (reading the
transcript) picks the winner.

Usage:  python3 identify.py <audio-file> [<audio-file> ...]
"""
import json, subprocess, sys, datetime, re, os

# The conference ran in Amsterdam (CEST = UTC+2 in September).
TZ = datetime.timezone(datetime.timedelta(hours=2))
DAYS = {"thu": datetime.date(2026, 9, 17), "fri": datetime.date(2026, 9, 18)}

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))))
SESSIONS = os.path.join(ROOT, "guide", "sessions.json")


def session_window(s):
    day = DAYS[s["day"]]
    sh, sm = map(int, s["start"].split(":"))
    eh, em = map(int, s["end"].split(":"))
    return (datetime.datetime.combine(day, datetime.time(sh, sm), TZ),
            datetime.datetime.combine(day, datetime.time(eh, em), TZ))


def recording_window(path):
    """Return (start, duration_seconds, source).

    Prefer the creation_time inside the container. Apple Voice Memos writes the
    true recording start there, and it survives export -- the filesystem dates
    do not. A batch export rewrites every file's mtime to the export moment,
    which will silently collapse a whole day of talks onto one timestamp.
    """
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries",
         "format=duration:format_tags=creation_time", "-of", "json", path],
        capture_output=True, text=True)
    fmt = json.loads(probe.stdout)["format"]
    duration = float(fmt.get("duration", 0))
    created = fmt.get("tags", {}).get("creation_time")
    if created:
        start = (datetime.datetime.strptime(created[:19], "%Y-%m-%dT%H:%M:%S")
                 .replace(tzinfo=datetime.timezone.utc).astimezone(TZ))
        return start, duration, "container"
    # .wav and friends carry no container timestamp; fall back to the filesystem
    # and treat the result with suspicion.
    raw = subprocess.run(["mdls", "-raw", "-name", "kMDItemContentCreationDate", path],
                         capture_output=True, text=True).stdout
    m = re.search(r"(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})", raw)
    if not m:
        raise SystemExit(f"no usable timestamp for {path}")
    start = (datetime.datetime.strptime(m.group(1), "%Y-%m-%d %H:%M:%S")
             .replace(tzinfo=datetime.timezone.utc).astimezone(TZ))
    return start, duration, "filesystem"


def main(paths):
    sessions = json.load(open(SESSIONS))["sessions"]
    for path in paths:
        start, duration, source = recording_window(path)
        end = start + datetime.timedelta(seconds=duration)
        print(f"\n=== {os.path.basename(path)}")
        print(f"    {start:%a %d %b %H:%M} -> {end:%H:%M}  "
              f"({duration/60:.1f} min, timestamp from {source})")
        if source == "filesystem":
            print("    WARNING: no container timestamp. Verify against the "
                  "transcript before trusting this slot.")

        scored = []
        for s in sessions:
            a, b = session_window(s)
            overlap = (min(end, b) - max(start, a)).total_seconds()
            if overlap > 60:
                scored.append((overlap, s))
        scored.sort(key=lambda x: -x[0])

        if not scored:
            print("    No scheduled session overlaps. Off-schedule recording?")
            continue
        for overlap, s in scored[:6]:
            # A 95-minute workshop block overlaps every 25-minute talk in its
            # span, so it tops this ranking by default. That is an artifact of
            # its length, not evidence. Let the transcript decide.
            note = "  (long block -- ranks high by span, not by evidence)" \
                if s["mins"] >= 60 else ""
            names = ", ".join(sp["n"] for sp in s["speakers"])
            print(f"    {overlap/60:5.1f} min | {s['start']}-{s['end']} | "
                  f"{s['room']:<14} | {s['title']}{note}")
            print(f"           | {names}  [{s['track']}]")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    main(sys.argv[1:])
