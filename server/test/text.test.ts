import assert from 'node:assert/strict';
import { test } from 'node:test';

import { stem, tokenize, uniqueTerms } from '../src/text.ts';

test('stem folds plurals and verb forms without mangling protocol vocabulary', () => {
  const cases: Array<[string, string]> = [
    ['agents', 'agent'],
    ['sessions', 'session'],
    ['harnesses', 'harness'],
    ['stateless', 'stateless'],
    ['status', 'status'],
    ['analysis', 'analysis'],
    ['policies', 'policy'],
    ['hacking', 'hack'],
    ['hacked', 'hack'],
    ['running', 'run'],
    ['stated', 'state'],
    ['sized', 'size'],
    ['hoping', 'hope'],
    ['calling', 'call'],
    ['engineering', 'engineer'],
    ['evaluating', 'evaluate'],
    ['mcp', 'mcp'],
    ['a2a', 'a2a'],
    ['2575', '2575'],
  ];
  for (const [input, expected] of cases) assert.equal(stem(input), expected, input);
});

test('tokenize lower-cases, strips accents and punctuation, drops stopwords and fillers', () => {
  assert.deepEqual(tokenize('The Agents were, uh, running SEP-2575 in Zürich!'), ['agent', 'run', 'sep', '2575', 'zurich']);
  assert.deepEqual(tokenize("Fausto Albers's talk: ID-JAG & OAuth"), ['fausto', 'alber', 'talk', 'id', 'jag', 'oauth']);
  assert.deepEqual(tokenize(''), []);
  assert.deepEqual(tokenize('a the of'), []);
});

test('uniqueTerms keeps first-seen order', () => {
  assert.deepEqual(uniqueTerms('agent agents session agent'), ['agent', 'session']);
});
