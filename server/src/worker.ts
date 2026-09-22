/**
 * Cloudflare Worker entry point.
 *
 * Everything expensive happens once, at module scope: the prebuilt index is
 * parsed and the Archive built. Each request then only walks postings —
 * which is what keeps a search inside the free plan's 10 ms of CPU. The MCP
 * handler is stateless by construction: a fresh McpServer per request,
 * nothing kept between them, so any number of isolates in any region can
 * answer any request.
 */

import { createMcpHandler } from '@modelcontextprotocol/server';

import { INDEX_JSON } from '../data/index.ts';
import { handleHttp, json } from './api.ts';
import { buildServer } from './mcp.ts';
import { Archive } from './search.ts';
import type { ArchiveIndex } from './types.ts';

const archive = new Archive(JSON.parse(INDEX_JSON) as ArchiveIndex);

const mcp = createMcpHandler(() => buildServer(archive), {
  // 2025-era clients (initialize + Mcp-Session-Id) are answered per request
  // with no session, the SDK's stateless idiom; 2026-07-28 clients need
  // nothing of the sort. 'reject' would turn the old clients away.
  legacy: 'stateless',
  onerror: (error) => console.error(JSON.stringify({ message: 'mcp handler error', error: error.message })),
});

// The archive is public and read-only; let browsers and web-based agents call it from anywhere.
const CORS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Method, Mcp-Name, Mcp-Protocol-Version, Mcp-Session-Id',
  'Access-Control-Max-Age': '86400',
};

function withCors(res: Response): Response {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(CORS)) headers.set(k, v);
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

export default {
  async fetch(request): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    try {
      const path = url.pathname.replace(/\/+$/, '');
      if (path === '/mcp') return withCors(await mcp.fetch(request));
      return withCors(handleHttp(request, url, archive));
    } catch (e) {
      console.error(JSON.stringify({ message: 'request failed', path: url.pathname, error: e instanceof Error ? e.message : String(e) }));
      return withCors(json({ error: 'internal error' }, 500));
    }
  },
} satisfies ExportedHandler<Env>;
