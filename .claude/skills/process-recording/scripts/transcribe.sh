#!/usr/bin/env bash
# Transcribe a conference recording locally with Whisper large-v3.
#
# Local by default: the audio is someone else's talk, so it never leaves the
# machine, and there is no upload size ceiling to work around. If this machine
# cannot run Whisper, transcribe_api.sh sends it to a hosted model instead --
# but that is a deliberate second choice, never an automatic fallback, because
# it means uploading a recording that is not yours.
#
# Usage: ./transcribe.sh <audio-file> [output-dir]
set -euo pipefail

AUDIO="${1:?usage: transcribe.sh <audio-file> [output-dir]}"
OUTDIR="${2:-.transcribe-cache}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Optional: once you know which talk this is, pass the speaker, company and
# title to bias decoding toward the right spellings. Whisper reliably mangles
# proper nouns ("Floris Fok at Prosus" came out as "Forrest Fock at Proces"),
# and priming the decoder is the cheapest fix.
#   PROMPT="Floris Fok, Prosus. Autonomous Organisations: Starting Small." ./transcribe.sh ...
PROMPT="${PROMPT:-}"

# stat has no portable spelling: BSD/macOS takes -f%z, GNU/Linux -c%s.
filesize() { stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null || echo 0; }

# Pick a backend. MLX is far faster on Apple Silicon; CTranslate2 runs
# everywhere else, on CPU or CUDA. Override with WHISPER_BACKEND=mlx|ct2.
if [ -z "${WHISPER_BACKEND:-}" ]; then
  if [ "$(uname -s)" = "Darwin" ] && [ "$(uname -m)" = "arm64" ]; then
    WHISPER_BACKEND=mlx
  else
    WHISPER_BACKEND=ct2
  fi
fi

if ! command -v uvx >/dev/null 2>&1; then
  cat >&2 <<'MSG'
uvx not found. Install uv (https://docs.astral.sh/uv/) and re-run.

If this machine cannot run Whisper at all -- no GPU, too little RAM, or you
simply do not want a 3GB download -- use the hosted fallback instead:
  .claude/skills/process-recording/scripts/transcribe_api.sh <audio-file>
MSG
  exit 1
fi

mkdir -p "$OUTDIR"

# large-v3, not turbo or a distilled variant. The speaker list is heavily
# international and the smaller models mangle exactly the accented names and
# protocol jargon (MCP, SemVer, "abliterated") this archive exists to capture.
#
# --condition-on-previous-text False is NOT optional. With it left on (the
# default), Whisper feeds each window its own previous output, and on a quiet
# or unclear passage it locks into a repetition loop. A 31-minute talk came
# back as 1382 segments of which only 261 were unique -- one sentence repeated
# 1080 times -- and took 18x longer to produce that garbage than a clean run
# takes. --temperature 0 keeps decoding deterministic.
if [ "$WHISPER_BACKEND" = "mlx" ]; then
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
     [ "$(filesize "$LOCAL_MODEL/weights.npz")" -ne "$WEIGHTS_BYTES" ]; then
    echo "Fetching Whisper large-v3 weights (~3GB, one time)..."
    mkdir -p "$LOCAL_MODEL"
    curl -sL -o "$LOCAL_MODEL/config.json" \
         "https://huggingface.co/$REPO/resolve/main/config.json"
    for attempt in $(seq 1 300); do
      cur=$(filesize "$LOCAL_MODEL/weights.npz")
      [ "$cur" -ge "$WEIGHTS_BYTES" ] && break
      echo "  $(( cur * 100 / WEIGHTS_BYTES ))%"
      curl -C - -L -s --speed-time 60 --speed-limit 5000 \
           -o "$LOCAL_MODEL/weights.npz" \
           "https://huggingface.co/$REPO/resolve/main/weights.npz" || true
      sleep 5
    done
    if [ "$(filesize "$LOCAL_MODEL/weights.npz")" -ne "$WEIGHTS_BYTES" ]; then
      echo "Download did not complete. Re-run to resume where it stopped." >&2
      exit 1
    fi
  fi

  uvx --from mlx-whisper mlx_whisper \
      --model "$LOCAL_MODEL" \
      --output-dir "$OUTDIR" \
      --output-format all \
      --language en \
      --condition-on-previous-text False \
      --temperature 0 \
      ${PROMPT:+--initial-prompt "$PROMPT"} \
      "$AUDIO"
else
  # CTranslate2 build of the same large-v3 weights. Downloads on first use and
  # caches under ~/.cache/huggingface. Add WHISPER_DEVICE=cuda on a GPU box;
  # on CPU expect roughly realtime rather than the 16x MLX manages.
  uvx whisper-ctranslate2 \
      --model large-v3 \
      --device "${WHISPER_DEVICE:-auto}" \
      --output_dir "$OUTDIR" \
      --output_format all \
      --language en \
      --condition_on_previous_text False \
      --temperature 0 \
      ${PROMPT:+--initial_prompt "$PROMPT"} \
      "$AUDIO"
fi

TXT="$OUTDIR/$(basename "${AUDIO%.*}").txt"

# Always check for the loop before trusting the output. Near-identical segment
# and unique counts mean a clean run; a large gap means it hallucinated.
"$HERE/check_loop.sh" "$TXT"
