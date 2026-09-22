/**
 * The plain HTTP face of the archive: the same three operations as the MCP
 * tools, as GET endpoints returning JSON, plus a landing page. For people
 * with curl, for agents without an MCP client, and for checking the server
 * is alive.
 */

import type { Archive } from './search.ts';
import { listSessions, readTalk, searchArchive, ToolError } from './tools.ts';
import type { Part } from './tools.ts';
import type { Kind } from './types.ts';
import { KINDS } from './types.ts';

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

export function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body, null, 2), { status, headers: { ...JSON_HEADERS, ...headers } });
}

function intParam(params: URLSearchParams, name: string): number | undefined {
  const v = params.get(name);
  if (v === null || v === '') return undefined;
  const n = Number(v);
  if (!Number.isInteger(n)) throw new ToolError(`${name} must be an integer`, 400);
  return n;
}

function dayParam(params: URLSearchParams): 'thu' | 'fri' | undefined {
  const v = params.get('day');
  if (v === null || v === '') return undefined;
  if (v !== 'thu' && v !== 'fri') throw new ToolError('day must be "thu" or "fri"', 400);
  return v;
}

function kindsParam(params: URLSearchParams): Kind[] | undefined {
  const v = params.get('kinds');
  if (v === null || v === '') return undefined;
  const kinds = v.split(',').map((k) => k.trim());
  for (const k of kinds) if (!(KINDS as readonly string[]).includes(k)) throw new ToolError(`unknown kind "${k}"`, 400);
  return kinds as Kind[];
}

const PARTS: readonly Part[] = ['transcript', 'summary', 'slides', 'materials', 'session'];

export function handleHttp(request: Request, url: URL, archive: Archive): Response {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return json({ error: 'method not allowed' }, 405, { Allow: 'GET, HEAD' });
  }
  const p = url.pathname.replace(/\/+$/, '') || '/';
  const q = url.searchParams;
  const cache = { 'Cache-Control': 'public, max-age=300' };

  try {
    if (p === '/') return new Response(landingPage(url.origin, archive), { headers: { 'Content-Type': 'text/html; charset=utf-8', ...cache } });
    if (p === '/llms.txt') return new Response(llmsTxt(url.origin, archive), { headers: { 'Content-Type': 'text/plain; charset=utf-8', ...cache } });
    if (p === '/api/coverage') {
      const i = archive.index;
      return json({ coverage: i.coverage, built_at: i.builtAt, commit: i.commit, docs: i.docs.length, chunks: i.chunks.length }, 200, cache);
    }
    if (p === '/api/search') {
      const query = q.get('q') ?? q.get('query') ?? '';
      if (!query.trim()) throw new ToolError('q is required', 400);
      const r = searchArchive(archive, {
        query,
        limit: intParam(q, 'limit'),
        kinds: kindsParam(q),
        day: dayParam(q),
        track: q.get('track') ?? undefined,
        talk: q.get('talk') ?? undefined,
        per_talk: intParam(q, 'per_talk'),
      });
      return json(r.data, 200, cache);
    }
    if (p === '/api/sessions') {
      const has = q.get('has') ?? undefined;
      if (has !== undefined && !['transcript', 'summary', 'slides', 'materials', 'any'].includes(has)) throw new ToolError('bad has', 400);
      const r = listSessions(archive, {
        day: dayParam(q),
        track: q.get('track') ?? undefined,
        speaker: q.get('speaker') ?? undefined,
        title: q.get('title') ?? undefined,
        has: has as Kind | 'any' | undefined,
      });
      return json(r.data, 200, cache);
    }
    const m = /^\/api\/talks\/([^/]+)(?:\/([^/]+))?$/.exec(p);
    if (m) {
      const part = decodeURIComponent(m[2] ?? 'transcript');
      if (!PARTS.includes(part as Part)) throw new ToolError(`part must be one of ${PARTS.join(', ')}`, 400);
      const r = readTalk(archive, {
        talk: decodeURIComponent(m[1]),
        part: part as Part,
        offset: intParam(q, 'offset'),
        max_chars: intParam(q, 'max_chars'),
      });
      return json(r.data, 200, cache);
    }
    return json({ error: 'not found', endpoints: ['/mcp', '/api/search?q=', '/api/sessions', '/api/talks/{talk}/{part}', '/api/coverage', '/llms.txt'] }, 404);
  } catch (e) {
    if (e instanceof ToolError) return json({ error: e.message }, e.status);
    throw e;
  }
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);
}

const REPO = 'https://github.com/jcpinto54/agntcon-mcpcon-transcripts';

function llmsTxt(origin: string, archive: Archive): string {
  const c = archive.coverage;
  return `# AGNTCon + MCPCon Europe 2026 — transcript archive

A community archive of what was said at AGNTCon + MCPCon Europe 2026 (RAI Amsterdam, 17–18 September 2026). Transcripts, summaries and slide descriptions, searchable.

Coverage: ${c.transcripts} of ${c.sessions} sessions have a transcript, ${c.summaries} are summarised, ${c.decks} have a slide deck (${c.slides} slides). Most of the conference was never recorded.

MCP endpoint (Streamable HTTP, stateless, no auth): ${origin}/mcp
Tools: search_archive, read_talk, list_sessions

HTTP API:
- ${origin}/api/search?q=stateless+mcp
- ${origin}/api/sessions?day=thu&has=transcript
- ${origin}/api/talks/no-central-brain/transcript?offset=0
- ${origin}/api/coverage

Source and licence: ${REPO}
Speakers own their talks; removal on request, see SPEAKERS.md in the repository.
`;
}

function landingPage(origin: string, archive: Archive): string {
  const c = archive.coverage;
  const i = archive.index;
  const mcpUrl = `${origin}/mcp`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AGNTCon + MCPCon Europe 2026 — archive search</title>
<style>
  :root { color-scheme: light dark; }
  body { font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; max-width: 42rem; margin: 2rem auto; padding: 0 1rem; }
  h1 { font-size: 1.6rem; } h2 { font-size: 1.15rem; margin-top: 2rem; }
  code, pre { font: 0.9em ui-monospace, SFMono-Regular, Menlo, monospace; }
  pre { padding: .75rem 1rem; overflow-x: auto; background: rgba(127,127,127,.12); border-radius: 6px; }
  code { background: rgba(127,127,127,.12); padding: .1em .3em; border-radius: 4px; }
  pre code { background: none; padding: 0; }
  table { border-collapse: collapse; } td, th { text-align: left; padding: .2rem 1rem .2rem 0; }
  footer { margin-top: 3rem; font-size: .9em; opacity: .75; }
</style>
</head>
<body>
<h1>AGNTCon + MCPCon Europe 2026 — archive search</h1>
<p>A community archive of what was said at <strong>AGNTCon + MCPCon Europe 2026</strong> (RAI Amsterdam, 17–18 September 2026): transcripts, summaries and slide-by-slide deck descriptions, searchable by any agent that speaks MCP, or by curl.</p>

<h2>What is here</h2>
<table>
<tr><th>Sessions in the programme</th><td>${c.sessions}</td></tr>
<tr><th>With a transcript</th><td>${c.transcripts}</td></tr>
<tr><th>With a summary</th><td>${c.summaries}</td></tr>
<tr><th>With a slide deck</th><td>${c.decks} (${c.slides} slides described)</td></tr>
<tr><th>With anything at all</th><td>${c.covered}</td></tr>
</table>
<p>Most of the conference was never recorded. When a search finds nothing, that means no transcript here covers it, not that nobody said it. Index built ${esc(i.builtAt.slice(0, 10))}${i.commit ? ` from commit <code>${esc(i.commit)}</code>` : ''}.</p>

<h2>Connect an agent</h2>
<p>The MCP endpoint is <code>${esc(mcpUrl)}</code> — Streamable HTTP, stateless, no authentication. It serves both the 2026-07-28 revision of the protocol (no handshake, no session) and 2025-era clients.</p>
<pre><code># Claude Code
claude mcp add --transport http agntcon-archive ${esc(mcpUrl)}

# Any other client: add a remote / custom MCP server with that URL.</code></pre>
<p>Tools: <code>search_archive</code>, <code>read_talk</code>, <code>list_sessions</code>.</p>

<h2>Or just HTTP</h2>
<pre><code>curl "${esc(origin)}/api/search?q=stateless+mcp"
curl "${esc(origin)}/api/sessions?day=thu&amp;has=transcript"
curl "${esc(origin)}/api/talks/no-central-brain/transcript?offset=0"
curl "${esc(origin)}/api/coverage"</code></pre>
<p>Search parameters: <code>q</code>, <code>limit</code>, <code>kinds</code> (comma-separated: transcript, summary, slides, materials, abstract), <code>day</code> (thu|fri), <code>track</code>, <code>talk</code>, <code>per_talk</code>. Talk parts: transcript, summary, slides, materials, session.</p>

<footer>
<p>Source, contributions and the full archive: <a href="${REPO}">${REPO}</a>. Speakers own their talks; a correction or removal is honoured on request — see <a href="${REPO}/blob/main/SPEAKERS.md">SPEAKERS.md</a>. Agents: <a href="/llms.txt">/llms.txt</a>.</p>
</footer>
</body>
</html>
`;
}
