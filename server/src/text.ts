/**
 * Tokenising and stemming, shared by the index builder and the query side so
 * that both see exactly the same terms.
 *
 * Deliberately simple: lower-case, strip accents, split on anything that is
 * not a letter or digit, drop stopwords and one-letter tokens, then a light
 * stemmer that folds plurals and -ing/-ed forms. Conference talks are full of
 * precise vocabulary (SEP-2575, ID-JAG, elicitation, harness) and keyword
 * matching is strongest exactly there, so nothing cleverer is needed until
 * real queries show it missing.
 */

const STOPWORDS = new Set(
  (
    'a about above after again against all am an and any are as at be because been before being ' +
    'below between both but by can could did do does doing down during each few for from further ' +
    'had has have having he her here hers herself him himself his how i if in into is it its itself ' +
    'just me more most my myself no nor not now of off on once only or other our ours ourselves out ' +
    'over own same she should so some such than that the their theirs them themselves then there ' +
    'these they this those through to too under until up very was we were what when where which ' +
    'while who whom why will with would you your yours yourself yourselves ' +
    // Speech fillers that Whisper faithfully keeps.
    'uh um yeah okay ok gonna right really actually basically kind sort thing things lot'
  ).split(/\s+/)
);

function isVowel(w: string, i: number): boolean {
  const c = w[i];
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
  if (c === 'y') return i > 0 && !isVowel(w, i - 1);
  return false;
}

/** Porter's "measure": the number of vowel-consonant sequences. */
function measure(w: string): number {
  let m = 0;
  let prevVowel = false;
  for (let i = 0; i < w.length; i++) {
    const v = isVowel(w, i);
    if (prevVowel && !v) m++;
    prevVowel = v;
  }
  return m;
}

function hasVowel(w: string): boolean {
  for (let i = 0; i < w.length; i++) if (isVowel(w, i)) return true;
  return false;
}

/** consonant-vowel-consonant ending, where the last consonant is not w, x or y. */
function endsCvc(w: string): boolean {
  const n = w.length;
  if (n < 3) return false;
  const last = w[n - 1];
  return !isVowel(w, n - 1) && isVowel(w, n - 2) && !isVowel(w, n - 3) && last !== 'w' && last !== 'x' && last !== 'y';
}

/**
 * A light stemmer: Porter steps 1a and 1b, nothing more. Enough to make
 * "agents" find "agent" and "hacking" find "hacked" without turning
 * "harness" into "har".
 */
export function stem(word: string): string {
  let w = word;
  if (w.length <= 3 || /\d/.test(w)) return w;

  // Step 1a — plurals.
  if (w.endsWith('ies') && w.length > 4) w = w.slice(0, -3) + 'y';
  else if (w.endsWith('sses')) w = w.slice(0, -2);
  else if (w.endsWith('ss') || w.endsWith('us') || w.endsWith('is')) {
    /* keep: stateless, status, analysis */
  } else if (w.endsWith('s')) w = w.slice(0, -1);

  // Step 1b — -ing and -ed, with Porter's repairs.
  let stripped = false;
  if (w.length > 5 && w.endsWith('ing') && hasVowel(w.slice(0, -3))) {
    w = w.slice(0, -3);
    stripped = true;
  } else if (w.length > 4 && w.endsWith('ed') && hasVowel(w.slice(0, -2))) {
    w = w.slice(0, -2);
    stripped = true;
  }
  if (stripped) {
    if (/(at|bl|iz)$/.test(w)) w += 'e'; // stated -> state, sized -> size
    else if (/([^aeiouylsz])\1$/.test(w)) w = w.slice(0, -1); // running -> run
    else if (measure(w) === 1 && endsCvc(w)) w += 'e'; // hoping -> hope
  }
  return w;
}

/** Turn free text into the terms that get indexed and queried. */
export function tokenize(text: string): string[] {
  const norm = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  const out: string[] = [];
  for (const raw of norm.split(/[^a-z0-9]+/)) {
    if (!raw) continue;
    if (raw.length < 2 && !/\d/.test(raw)) continue;
    if (STOPWORDS.has(raw)) continue;
    out.push(stem(raw));
  }
  return out;
}

/** Unique terms, in first-seen order. */
export function uniqueTerms(text: string): string[] {
  return [...new Set(tokenize(text))];
}
