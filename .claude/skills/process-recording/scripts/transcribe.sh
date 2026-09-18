#!/usr/bin/env bash
# Transcribe a conference recording locally with Whisper large-v3.
#
# Local on purpose: the audio is someone else's talk, so it never leaves the
# machine, and there is no upload size ceiling to work around.
#
# Usage: ./transcribe.sh <audio-file> [output-dir]
set -euo pipefail

AUDIO="${1:?usage: transcribe.sh <audio-file> [output-dir]}"
OUTDIR="${2:-.transcribe-cache}"

# large-v3, not turbo or a distilled variant. The speaker list is heavily
# international and the smaller models mangle exactly the accented names and
# protocol jargon (MCP, SemVer, "abliterated") this archive exists to capture.
REPO="mlx-community/whisper-large-v3-mlx"
LOCAL_MODEL="${WHISPER_MODEL_DIR:-$HOME/.cache/whisper-mlx/large-v3}"
WEIGHTS_BYTES=3083520416

# Fetch the weights ourselves rather than letting the library do it. Two
# reasons, both learned the hard way:
#   1. huggingface_hub does not reliably resume -- an interrupted download
#      starts from zero next time, and a 3GB file on a flaky link may never
#      finish.
#   2. curl's own --retry rewinds to the offset captured when the command
#      started, throwing away everything fetched during the attempt. Retrying
#      at the shell level means each attempt re-reads the real file size.
if [ ! -f "$LOCAL_MODEL/weights.npz" ] || \
   [ "$(stat -f%z "$LOCAL_MODEL/weights.npz" 2>/dev/null || echo 0)" -ne "$WEIGHTS_BYTES" ]; then
  echo "Fetching Whisper large-v3 weights (~3GB, one time)..."
  mkdir -p "$LOCAL_MODEL"
  curl -sL -o "$LOCAL_MODEL/config.json" \
       "https://huggingface.co/$REPO/resolve/main/config.json"
  for attempt in $(seq 1 300); do
    cur=$(stat -f%z "$LOCAL_MODEL/weights.npz" 2>/dev/null || echo 0)
    [ "$cur" -ge "$WEIGHTS_BYTES" ] && break
    echo "  $(( cur * 100 / WEIGHTS_BYTES ))%"
    curl -C - -L -s --speed-time 60 --speed-limit 5000 \
         -o "$LOCAL_MODEL/weights.npz" \
         "https://huggingface.co/$REPO/resolve/main/weights.npz" || true
    sleep 5
  done
  if [ "$(stat -f%z "$LOCAL_MODEL/weights.npz" 2>/dev/null || echo 0)" -ne "$WEIGHTS_BYTES" ]; then
    echo "Download did not complete. Re-run to resume where it stopped." >&2
    exit 1
  fi
fi

mkdir -p "$OUTDIR"

uvx --from mlx-whisper mlx_whisper \
    --model "$LOCAL_MODEL" \
    --output-dir "$OUTDIR" \
    --output-format all \
    --language en \
    "$AUDIO"

echo "Wrote $OUTDIR/$(basename "${AUDIO%.*}").{txt,srt,vtt,tsv,json}"
