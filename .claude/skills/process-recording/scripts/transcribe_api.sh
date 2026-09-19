#!/usr/bin/env bash
# Transcribe a recording with a hosted Whisper large-v3, for machines that
# cannot run it locally.
#
# This is the fallback, not the default. It uploads someone else's talk to a
# third party, so use transcribe.sh where you can, and see the API section of
# README.md for which provider to use and how to turn retention off first.
#
# Defaults to Groq, which serves the same large-v3 weights this archive
# requires -- not a turbo or distilled variant, which mangle the accented names
# and protocol jargon the archive exists to preserve.
#
# Usage: GROQ_API_KEY=... ./transcribe_api.sh <audio-file> [output-dir]
set -euo pipefail

AUDIO="${1:?usage: transcribe_api.sh <audio-file> [output-dir]}"
OUTDIR="${2:-.transcribe-cache}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

API_URL="${WHISPER_API_URL:-https://api.groq.com/openai/v1/audio/transcriptions}"
API_MODEL="${WHISPER_API_MODEL:-whisper-large-v3}"
API_KEY="${WHISPER_API_KEY:-${GROQ_API_KEY:-}}"
PROMPT="${PROMPT:-}"

# Providers cap the upload. Groq's is 25MB on the free tier, 100MB on the paid
# one; a 25-minute talk straight off a phone can exceed the former.
MAX_MB="${WHISPER_API_MAX_MB:-24}"

if [ -z "$API_KEY" ]; then
  cat >&2 <<'MSG'
No API key. Set GROQ_API_KEY (see the "Transcribing without a capable machine"
section of README.md for how to get one and how to switch retention off).

Prefer transcribe.sh if this machine can run Whisper at all -- it keeps the
recording on your own disk, which is what the speakers were promised.
MSG
  exit 1
fi

for tool in curl ffmpeg python3; do
  command -v "$tool" >/dev/null 2>&1 || { echo "$tool is required" >&2; exit 1; }
done

mkdir -p "$OUTDIR"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# Whisper resamples to 16kHz mono internally, so sending anything richer wastes
# upload budget without improving the transcript. This routinely takes a 60MB
# phone recording under the cap without touching what the model actually sees.
echo "Downmixing to 16kHz mono FLAC..."
ffmpeg -nostdin -loglevel error -i "$AUDIO" \
       -ar 16000 -ac 1 -map 0:a -c:a flac "$WORK/audio.flac"

size_mb=$(( $(stat -f%z "$WORK/audio.flac" 2>/dev/null || \
              stat -c%s "$WORK/audio.flac" 2>/dev/null || echo 0) / 1000000 ))
if [ "$size_mb" -gt "$MAX_MB" ]; then
  cat >&2 <<MSG
Compressed audio is ${size_mb}MB, over the ${MAX_MB}MB limit.

Split it and transcribe each part, then concatenate the .txt files in order:
  ffmpeg -i "$AUDIO" -f segment -segment_time 1200 -c copy part-%02d.\${AUDIO##*.}

A talk split this way reads continuously as long as you keep the parts in
order; note the join in the transcript if a word is lost at the seam.
MSG
  exit 1
fi

echo "Transcribing via $API_MODEL..."
HTTP=$(curl -sS -w '%{http_code}' -o "$WORK/response.json" \
  --request POST "$API_URL" \
  --header "Authorization: Bearer $API_KEY" \
  --form "file=@$WORK/audio.flac" \
  --form "model=$API_MODEL" \
  --form "language=en" \
  --form "temperature=0" \
  --form "response_format=verbose_json" \
  ${PROMPT:+--form "prompt=$PROMPT"})

if [ "$HTTP" != "200" ]; then
  echo "API returned HTTP $HTTP:" >&2
  head -c 2000 "$WORK/response.json" >&2; echo >&2
  exit 1
fi

TXT="$OUTDIR/$(basename "${AUDIO%.*}").txt"

# Write one segment per line, matching what the local backends produce, so
# write_talk.py and the loop check behave identically on either path.
python3 - "$WORK/response.json" "$TXT" <<'PY'
import json, sys
data = json.load(open(sys.argv[1], encoding="utf-8"))
segs = [s.get("text", "").strip() for s in data.get("segments", [])]
segs = [s for s in segs if s]
if not segs:
    text = (data.get("text") or "").strip()
    if not text:
        sys.exit("API returned no speech at all -- check the audio is not silent")
    # No segment breakdown: fall back to one sentence per line so the loop
    # check still has something to count.
    segs = [t.strip() for t in text.replace("? ", "?\n").replace(". ", ".\n")
            .replace("! ", "!\n").split("\n") if t.strip()]
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(segs) + "\n")
PY

"$HERE/check_loop.sh" "$TXT"

cat <<'MSG'

Transcribed via a hosted API. Two things to check before you file this:
  - Proper nouns. Prime the decoder and re-run once you know the talk:
      PROMPT="Speaker Name, Company. Talk Title." ./transcribe_api.sh <file>
  - The recording you just uploaded is still yours to delete. The archive only
    ever wanted the text.
MSG
