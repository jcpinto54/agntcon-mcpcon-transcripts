#!/usr/bin/env bash
# Warn when a Whisper transcript is mostly one sentence repeated.
#
# Shared by transcribe.sh and transcribe_api.sh. Whisper locks into repetition
# on quiet or unclear passages, and the hosted APIs do it too -- they run the
# same model, and most of them do not expose the condition-on-previous-text
# flag that suppresses it locally. So the check matters more on the API path,
# not less.
set -euo pipefail

TXT="${1:?usage: check_loop.sh <transcript.txt>}"

total=$(grep -c . "$TXT" || true)
uniq_n=$(sort -u "$TXT" | grep -c . || true)
echo "Wrote $TXT"
echo "Segments: $total, unique: $uniq_n"
if [ "$total" -gt 20 ] && [ "$uniq_n" -lt $(( total * 7 / 10 )) ]; then
  echo "WARNING: over 30% of segments are duplicates -- likely a hallucination" >&2
  echo "loop. Inspect before using; do not commit this transcript." >&2
fi
