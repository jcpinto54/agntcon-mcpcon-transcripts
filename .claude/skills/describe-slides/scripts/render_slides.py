#!/usr/bin/env python3
"""Render each slide of a deck to a PNG, ready for an agent to look at.

    render_slides.py                 # every deck that has no images yet
    render_slides.py --slug <slug>   # one talk
    render_slides.py --force         # re-render even where images exist

Images land in .transcribe-cache/slides/<slug>/slide-NNN.png, which is
gitignored: they are working material for describing the deck, not something
the archive carries. The deck itself is already in the repo.

PDFs render directly. PowerPoint needs LibreOffice on the machine to convert
first; without it the deck is reported as skipped rather than silently
producing nothing.
"""
import argparse, pathlib, re, shutil, subprocess, sys, tempfile, zipfile

try:
    import pymupdf
except ImportError:
    sys.exit("pymupdf is not installed. Run: python3 -m pip install pymupdf")

ROOT = pathlib.Path(__file__).resolve().parents[4]
CACHE = ROOT / ".transcribe-cache" / "slides"
ZOOM = 2.0          # ~1540px wide for a 16:9 deck: legible without being huge

SOFFICE = [
    "/Applications/LibreOffice.app/Contents/MacOS/soffice",
    shutil.which("soffice") or "", shutil.which("libreoffice") or "",
]


def soffice():
    for p in SOFFICE:
        if p and pathlib.Path(p).exists():
            return p
    return None


def decks():
    for d in sorted((ROOT / "talks").glob("*/materials/*")):
        if d.suffix.lower() in (".pdf", ".pptx", ".ppt"):
            yield d


def as_pdf(deck, tmp):
    """Return a PDF path for this deck, converting PowerPoint if we can."""
    if deck.suffix.lower() == ".pdf":
        return deck
    exe = soffice()
    if not exe:
        return None
    subprocess.run([exe, "--headless", "--convert-to", "pdf",
                    "--outdir", str(tmp), str(deck)],
                   capture_output=True, timeout=300)
    out = tmp / (deck.stem + ".pdf")
    return out if out.exists() else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", default="")
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()

    CACHE.mkdir(parents=True, exist_ok=True)
    done = skipped = 0
    for deck in decks():
        slug = deck.parent.parent.name
        if a.slug and slug != a.slug:
            continue
        out = CACHE / slug
        if out.exists() and any(out.glob("*.png")) and not a.force:
            print(f"have  {len(list(out.glob('*.png'))):3d}  {slug}")
            done += 1
            continue
        with tempfile.TemporaryDirectory() as td:
            pdf = as_pdf(deck, pathlib.Path(td))
            if pdf is None:
                # No empty directory left behind: batch_slides.py and the
                # agents both key off "has images", so a stub folder here
                # reads as a deck with zero slides.
                print(f"SKIP       {slug}: {deck.suffix} needs LibreOffice "
                      "(brew install --cask libreoffice)")
                skipped += 1
                continue
            out.mkdir(parents=True, exist_ok=True)
            doc = pymupdf.open(str(pdf))
            for i, page in enumerate(doc, 1):
                page.get_pixmap(matrix=pymupdf.Matrix(ZOOM, ZOOM)).save(
                    str(out / f"slide-{i:03d}.png"))
            print(f"render{len(doc):3d}  {slug}")
            doc.close()
        done += 1

    print(f"\n{done} deck(s) ready, {skipped} skipped")
    if skipped:
        print("Skipped decks keep whatever text extraction they already have.")


if __name__ == "__main__":
    main()
