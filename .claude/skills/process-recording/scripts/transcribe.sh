#!/usr/bin/env bash
# Transcribe a conference recording locally with Whisper large-v3.
#
# Local on purpose: the audio is someone else's talk, so it never leaves the
# machine, and there is no 25MB upload ceiling to work around.
#
# Usage: ./transcribe.sh <audio-file> [output-dir]
set -euo pipefail

AUDIO="${1:?usage: transcribe.sh <audio-file> [output-dir]}"
OUTDIR="${2:-.transcribe-cache}"

# large-v3, not turbo. The speaker list is heavily international and the
# distilled models drop accented names and protocol jargon (MCP, SemVer,
# "abliterated") that this repo exists to capture.
MODEL="mlx-community/whisper-large-v3-mlx"

mkdir -p "$OUTDIR"

uvx --from mlx-whisper mlx_whisper \
    --model "$MODEL" \
    --output-dir "$OUTDIR" \
    --output-format all \
    --language en \
    "$AUDIO"

echo "Wrote transcripts to $OUTDIR/$(basename "${AUDIO%.*}").{txt,srt,vtt,tsv,json}"
