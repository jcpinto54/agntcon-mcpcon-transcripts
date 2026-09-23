/**
 * End-to-end: a real MCP client against the real Worker.
 *
 * By default this starts `wrangler dev` on a spare port, runs the checks and
 * stops it. Point ARCHIVE_URL at a running server (local or deployed) to test
 * that instead:
 *
 *   ARCHIVE_URL=https://agntcon-mcpcon-archive.<you>.workers.dev npm run test:e2e
 *
 * It exercises both protocol generations the server has to serve: a 2025-era
 * client that sends initialize, and a 2026-07-28 client that sends nothing
 * but self-contained requests. Both must get the same answers, and neither
 * must ever be handed a session.
 */

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import type { ChildProcess } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';

const SERVER_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PORT = 8799;
let baseUrl = process.env.ARCHIVE_URL?.replace(/\/+$/, '') ?? '';
let child: ChildProcess | undefined;

async function waitForServer(url: string, timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let lastError = '';
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${url}/api/coverage`);
      if (res.ok) return;
      lastError = `HTTP ${res.status}`;
    } catch (e) {
      lastError = e instanceof Error ? e.message : String(e);
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`server at ${url} did not come up: ${lastError}`);
}

before(async () => {
  if (baseUrl) return;
  baseUrl = `http://127.0.0.1:${PORT}`;
  child = spawn('npx', ['wrangler', 'dev', '--port', String(PORT), '--log-level', 'error'], {
    cwd: SERVER_DIR,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true,
  });
  child.stderr?.on('data', (d: Buffer) => process.stderr.write(`[wrangler] ${d}`));
  await waitForServer(baseUrl, 90_000);
});

after(() => {
  if (child?.pid) {
    try {
      process.kill(-child.pid, 'SIGTERM');
    } catch {
      child.kill('SIGTERM');
    }
  }
});

type ToolText = { type: string; text?: string };
function textOf(result: { content: unknown }): string {
  return (result.content as ToolText[]).map((c) => c.text ?? '').join('\n');
}

async function checkTools(client: Client, label: string): Promise<void> {
  const tools = await client.listTools();
  assert.deepEqual(
    tools.tools.map((t) => t.name).sort(),
    ['list_sessions', 'read_summary', 'read_talk', 'search_archive'],
    `${label}: tool names`
  );

  const search = await client.callTool({ name: 'search_archive', arguments: { query: 'stateless mcp', limit: 2 } });
  assert.ok(!search.isError, `${label}: search is not an error`);
  const text = textOf(search);
  assert.match(text, /^Archive coverage: \d+ of 93 sessions/, `${label}: coverage note`);
  assert.match(text, /Stateless: The Future of MCP Transports/, `${label}: finds the transports deck`);
  const structured = search.structuredContent as { results: Array<{ talk: string; kind: string }> };
  assert.equal(structured.results.length, 2, `${label}: structured results`);

  const deck = structured.results.find((r) => r.talk === 'stateless-future-mcp-transports');
  assert.ok(deck, `${label}: the transports deck is among the results`);
  const sheet = await client.callTool({ name: 'read_talk', arguments: { talk: deck.talk, part: 'session' } });
  assert.match(textOf(sheet), /Kurtis Van Gent/, `${label}: session sheet`);

  const page = await client.callTool({ name: 'read_talk', arguments: { talk: 'no-central-brain', part: 'transcript', max_chars: 1500 } });
  assert.match(textOf(page), /^# No Central Brain — Fausto Albers/, `${label}: transcript page`);
  assert.equal(typeof (page.structuredContent as { next_offset: unknown }).next_offset, 'number', `${label}: pagination`);

  // The raw speech is the default; the summary is a tool you have to ask for.
  const raw = await client.callTool({ name: 'search_archive', arguments: { query: 'reward hacking', limit: 3 } });
  const found = (raw.structuredContent as { results: Array<{ kind: string; talk: string; found_via?: { kind: string } }> }).results;
  assert.equal(found[0].kind, 'transcript', `${label}: search quotes the transcript`);
  assert.equal(found[0].found_via?.kind, 'summary', `${label}: and says the summary found it`);

  const digest = await client.callTool({ name: 'read_summary', arguments: { talk: 'no-central-brain', max_chars: 800 } });
  assert.match(textOf(digest), /^# No Central Brain — Fausto Albers/, `${label}: summary page`);
  assert.equal((digest.structuredContent as { part: string }).part, 'summary', `${label}: summary part`);
  assert.match(textOf(digest), /continues: read_summary\(talk="no-central-brain", offset=\d+\)/, `${label}: paging points back at read_summary`);

  const noSummary = await client.callTool({ name: 'read_summary', arguments: { talk: 'stateless-future-mcp-transports' } });
  assert.equal(noSummary.isError, true, `${label}: a talk with no summary is a tool error`);

  const missing = await client.callTool({ name: 'read_talk', arguments: { talk: 'no-such-talk' } });
  assert.equal(missing.isError, true, `${label}: unknown talk is a tool error`);
  assert.match(textOf(missing), /No session matches/, `${label}: error message`);

  const list = await client.callTool({ name: 'list_sessions', arguments: { day: 'thu', has: 'transcript' } });
  const sessions = (list.structuredContent as { sessions: Array<{ day: string; has: string[] }> }).sessions;
  assert.ok(sessions.length > 0, `${label}: some Thursday transcripts`);
  for (const s of sessions) {
    assert.equal(s.day, 'thu');
    assert.ok(s.has.includes('transcript'));
  }
}

test('a 2025-era client (initialize handshake) is served statelessly', async () => {
  const client = new Client({ name: 'archive-e2e-legacy', version: '0.0.0' });
  const transport = new StreamableHTTPClientTransport(new URL(`${baseUrl}/mcp`));
  await client.connect(transport);
  try {
    assert.equal(client.getServerVersion()?.name, 'agntcon-mcpcon-archive');
    assert.match(client.getInstructions() ?? '', /Say what is not here/);
    assert.equal(transport.sessionId, undefined, 'the server hands out no session id');
    await checkTools(client, 'legacy');
  } finally {
    await client.close();
  }
});

test('a 2026-07-28 client (no handshake, per-request envelope) gets the same answers', async () => {
  const client = new Client(
    { name: 'archive-e2e-modern', version: '0.0.0' },
    { versionNegotiation: { mode: { pin: '2026-07-28' } } }
  );
  const transport = new StreamableHTTPClientTransport(new URL(`${baseUrl}/mcp`));
  await client.connect(transport);
  try {
    assert.match(client.getInstructions() ?? '', /Say what is not here/);
    await checkTools(client, 'modern');
  } finally {
    await client.close();
  }
});

test('on the wire: every request stands alone and no session is ever issued', async () => {
  const envelope = {
    'io.modelcontextprotocol/protocolVersion': '2026-07-28',
    'io.modelcontextprotocol/clientCapabilities': {},
    'io.modelcontextprotocol/clientInfo': { name: 'curl', version: '0' },
  };
  const post = (method: string, params: Record<string, unknown>, headers: Record<string, string> = {}) =>
    fetch(`${baseUrl}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream', 'Mcp-Method': method, ...headers },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
    });

  // 2026-07-28: discover, then call — two unrelated requests, JSON in, JSON out.
  const discover = await post('server/discover', { _meta: envelope });
  assert.equal(discover.status, 200);
  assert.equal(discover.headers.get('mcp-session-id'), null);
  const discovered = (await discover.json()) as { result: { supportedVersions: string[] } };
  assert.deepEqual(discovered.result.supportedVersions, ['2026-07-28']);

  const call = await post(
    'tools/call',
    { name: 'search_archive', arguments: { query: 'identity broker', limit: 1 }, _meta: envelope },
    { 'Mcp-Name': 'search_archive' }
  );
  assert.equal(call.status, 200);
  assert.equal(call.headers.get('mcp-session-id'), null);
  const called = (await call.json()) as { result: { content: ToolText[] } };
  assert.match(called.result.content[0].text ?? '', /Identity Broker/);

  // 2025-era: initialize is answered but no session comes back, and a bare
  // tools/call with no initialize before it works just the same.
  const init = await fetch(`${baseUrl}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'curl', version: '0' } },
    }),
  });
  assert.equal(init.status, 200);
  assert.equal(init.headers.get('mcp-session-id'), null);
  assert.match(await init.text(), /"protocolVersion":"2025-11-25"/);

  const bare = await fetch(`${baseUrl}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }),
  });
  assert.equal(bare.status, 200);
  assert.match(await bare.text(), /"name":"search_archive"/);

  // A browser-based agent can call it: CORS preflight is answered.
  const preflight = await fetch(`${baseUrl}/mcp`, { method: 'OPTIONS', headers: { Origin: 'https://example.org' } });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), '*');
});

test('the plain HTTP API mirrors the tools', async () => {
  const search = (await (await fetch(`${baseUrl}/api/search?q=stateless+mcp&limit=1&kinds=slides`)).json()) as {
    results: Array<{ kind: string; talk: string }>;
  };
  assert.equal(search.results[0].kind, 'slides');
  assert.equal(search.results[0].talk, 'stateless-future-mcp-transports');

  const talk = (await (await fetch(`${baseUrl}/api/talks/no-central-brain/summary?max_chars=800`)).json()) as { total_chars: number; next_offset: number | null };
  assert.ok(talk.total_chars > 800);
  assert.equal(typeof talk.next_offset, 'number');

  const bad = await fetch(`${baseUrl}/api/talks/no-such-talk`);
  assert.equal(bad.status, 404);
  const badKind = await fetch(`${baseUrl}/api/search?q=x&kinds=video`);
  assert.equal(badKind.status, 400);

  assert.match(await (await fetch(`${baseUrl}/llms.txt`)).text(), /read_summary/);

  const home = await fetch(`${baseUrl}/`);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-type') ?? '', /text\/html/);
  assert.match(await home.text(), /claude mcp add --transport http/);
});
