/**
 * The MCP face of the archive: one McpServer with three read-only tools.
 *
 * `buildServer` is a factory on purpose. Under the 2026-07-28 revision every
 * request is self-contained — there is no initialize handshake and no session
 * — so `createMcpHandler` calls this once per request and throws the instance
 * away. It must therefore stay cheap: the Archive it closes over is built once
 * at module scope in worker.ts, and this function only registers tools.
 */

import { McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';

import type { Archive } from './search.ts';
import { listSessions, readTalk, searchArchive, ToolError } from './tools.ts';
import type { ToolResult } from './tools.ts';

export const SERVER_NAME = 'agntcon-mcpcon-archive';
export const SERVER_VERSION = '0.1.0';

export const INSTRUCTIONS = `Search over the community transcript archive of AGNTCon + MCPCon Europe 2026 (RAI Amsterdam, 17–18 September 2026).

Tools: search_archive finds passages across transcripts, summaries, slide descriptions and abstracts; read_talk returns a whole transcript, summary, deck description, materials list or a session's guide entry, paginated; list_sessions is the full schedule with what the archive holds for each session.

Rules the archive asks its readers to keep:
1. Say what is not here. Only a fraction of the 93 sessions was recorded. A topic that turns up nothing means no transcript here covers it, not that nobody said it.
2. An abstract is not a transcript. Never present the guide's abstract as something said on stage.
3. Summaries and slide descriptions are derived. Use them to find; quote the transcript, and cite the talk and the speaker.
4. Below a transcript's "## Q&A" heading the speaker and the audience are not distinguished. Attribute as "an audience member asked" or "in the Q&A", never as the speaker.
5. For speaker names and titles the conference guide wins over the transcript body, which is raw speech-to-text.`;

const KIND = z.enum(['transcript', 'summary', 'slides', 'materials', 'abstract']);
const DAY = z.enum(['thu', 'fri']).describe('thu = Thursday 17 September, fri = Friday 18 September');

function ok(result: ToolResult) {
  return { content: [{ type: 'text' as const, text: result.text }], structuredContent: result.data };
}

function run(fn: () => ToolResult) {
  try {
    return ok(fn());
  } catch (e) {
    if (e instanceof ToolError) return { isError: true, content: [{ type: 'text' as const, text: e.message }] };
    throw e;
  }
}

export function buildServer(archive: Archive): McpServer {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    {
      instructions: INSTRUCTIONS,
      // The tool list only changes with a deploy; let clients and shared caches keep it for an hour.
      cacheHints: { 'tools/list': { ttlMs: 3_600_000, cacheScope: 'public' } },
    }
  );

  const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

  server.registerTool(
    'search_archive',
    {
      title: 'Search the archive',
      description:
        'Full-text search over everything the archive holds: transcripts (what speakers said), summaries, slide-by-slide deck descriptions, and the abstracts of all 93 sessions. Returns ranked passages with the talk, speaker, source kind and a file:line citation, at most a few per talk. Keyword matching: precise terms — speaker names, protocol names like SEP-2575 or A2A, product names, technical vocabulary — work best. Every response starts with the archive coverage so you can say what is not here.',
      inputSchema: z.object({
        query: z.string().min(1).describe('Keywords or a short phrase.'),
        limit: z.number().int().min(1).max(30).optional().describe('Maximum passages to return. Default 8.'),
        kinds: z.array(KIND).optional().describe('Restrict to these kinds of source. Default: all.'),
        day: DAY.optional(),
        track: z.string().optional().describe('Substring of the track name, e.g. "MCP", "Reliable Agents", "Keynotes".'),
        talk: z.string().optional().describe('Restrict to one session: its talk key (slug) or session id.'),
        per_talk: z.number().int().min(1).max(10).optional().describe('Maximum passages from any one session. Default 3.'),
      }),
      annotations: readOnly,
    },
    async (args) => run(() => searchArchive(archive, args))
  );

  server.registerTool(
    'read_talk',
    {
      title: 'Read a talk',
      description:
        'Read one session\'s text in full, paginated: part="transcript" (the speaker\'s words), "summary" (derived), "slides" (the deck described slide by slide), "materials" (what the speaker shared), or "session" (the guide entry: speakers with bios, time and room, the abstract, and which of the others exist). Pass the talk key from search_archive or list_sessions. Long documents come back in windows; the response says the offset to continue from.',
      inputSchema: z.object({
        talk: z.string().min(1).describe('Talk key: the slug (e.g. "no-central-brain") or the session id.'),
        part: z.enum(['transcript', 'summary', 'slides', 'materials', 'session']).optional().describe('Default "transcript".'),
        offset: z.number().int().min(0).optional().describe('Character offset to start from. Default 0.'),
        max_chars: z.number().int().min(500).max(60000).optional().describe('Window size in characters. Default 12000.'),
      }),
      annotations: readOnly,
    },
    async (args) => run(() => readTalk(archive, args))
  );

  server.registerTool(
    'list_sessions',
    {
      title: 'List sessions',
      description:
        'The conference schedule: all 93 sessions with time, room, track, speakers, and what the archive holds for each (transcript, summary, slides, materials — or nothing yet beyond the abstract). Filter by day, track, speaker, title or by what exists. Use it to find talk keys, and to see how much of the conference the archive actually covers.',
      inputSchema: z.object({
        day: DAY.optional(),
        track: z.string().optional().describe('Substring of the track name.'),
        speaker: z.string().optional().describe('Substring of a speaker name.'),
        title: z.string().optional().describe('Substring of the session title.'),
        has: z.enum(['transcript', 'summary', 'slides', 'materials', 'any']).optional().describe('Only sessions the archive holds this kind of text for; "any" = at least one kind.'),
      }),
      annotations: readOnly,
    },
    async (args) => run(() => listSessions(archive, args))
  );

  return server;
}
