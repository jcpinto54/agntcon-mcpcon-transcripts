#!/usr/bin/env node
/**
 * Search the built index from the command line, for checking relevance
 * without starting the server.
 *
 *   node scripts/query.ts "stateless mcp"
 *   node scripts/query.ts --kinds transcript,summary --limit 5 "reward hacking"
 *   node scripts/query.ts --sessions --has transcript
 *   node scripts/query.ts --read no-central-brain --part summary
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Archive } from '../src/search.ts';
import { listSessions, readTalk, searchArchive } from '../src/tools.ts';
import type { Part } from '../src/tools.ts';
import type { ArchiveIndex, Kind } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const INDEX = resolve(HERE, '..', 'data', 'index.json');

function main(argv: string[]): void {
  const opts: Record<string, string> = {};
  const words: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith('--') && !['sessions', 'json'].includes(key)) {
        opts[key] = next;
        i++;
      } else opts[key] = 'true';
    } else words.push(a);
  }
  const archive = new Archive(JSON.parse(readFileSync(INDEX, 'utf8')) as ArchiveIndex);

  let result;
  if (opts.sessions) {
    result = listSessions(archive, {
      day: opts.day as 'thu' | 'fri' | undefined,
      track: opts.track,
      speaker: opts.speaker,
      title: opts.title,
      has: opts.has as Kind | 'any' | undefined,
    });
  } else if (opts.read) {
    result = readTalk(archive, {
      talk: opts.read,
      part: opts.part as Part | undefined,
      offset: opts.offset ? Number(opts.offset) : undefined,
      max_chars: opts.max ? Number(opts.max) : undefined,
    });
  } else {
    const query = words.join(' ');
    if (!query) {
      process.stderr.write('usage: node scripts/query.ts [--kinds a,b] [--limit n] [--day thu|fri] [--track t] [--talk key] <query>\n');
      process.exit(2);
    }
    result = searchArchive(archive, {
      query,
      limit: opts.limit ? Number(opts.limit) : undefined,
      kinds: opts.kinds ? (opts.kinds.split(',') as Kind[]) : undefined,
      day: opts.day as 'thu' | 'fri' | undefined,
      track: opts.track,
      talk: opts.talk,
      per_talk: opts.per_talk ? Number(opts.per_talk) : undefined,
    });
  }
  process.stdout.write(opts.json ? JSON.stringify(result.data, null, 2) + '\n' : result.text + '\n');
}

main(process.argv.slice(2));
