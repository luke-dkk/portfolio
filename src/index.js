const MAX_BODY_BYTES = 16 * 1024;
const corsHeaders = (origin, allowedOrigins) => { const allowed = allowedOrigins.split(',').map((value) => value.trim()).filter(Boolean); const headers = { 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS', Vary: 'Origin' }; if (origin && allowed.includes(origin)) headers['Access-Control-Allow-Origin'] = origin; return headers; };
const json = (data, status, origin, allowedOrigins) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(origin, allowedOrigins) } });

export default { async fetch(request, env) {
  const url = new URL(request.url); if (url.pathname !== '/api/chat') return env.ASSETS.fetch(request);
  const origin = request.headers.get('Origin') || ''; const allowedOrigins = env.ALLOWED_ORIGINS || ''; const allowed = allowedOrigins.split(',').map((value) => value.trim()).filter(Boolean);
  if (origin && !allowed.includes(origin)) return json({ error: 'Origin is not allowed.' }, 403, origin, allowedOrigins);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(origin, allowedOrigins) });
  if (request.method !== 'POST') return json({ error: 'Only POST is allowed.' }, 405, origin, allowedOrigins);
  if (!env.DIFY_APP_KEY) return json({ error: 'Chatbot is not configured.' }, 503, origin, allowedOrigins);
  if (Number(request.headers.get('Content-Length') || 0) > MAX_BODY_BYTES) return json({ error: 'Request is too large.' }, 413, origin, allowedOrigins);
  let body; try { const raw = await request.text(); if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) return json({ error: 'Request is too large.' }, 413, origin, allowedOrigins); body = JSON.parse(raw); } catch { return json({ error: 'Request must contain valid JSON.' }, 400, origin, allowedOrigins); }
  const query = typeof body.query === 'string' ? body.query.trim() : ''; const conversationId = typeof body.conversation_id === 'string' ? body.conversation_id : ''; const user = typeof body.user === 'string' && /^[a-zA-Z0-9._-]{1,64}$/.test(body.user) ? body.user : 'portfolio-visitor';
  if (!query || query.length > 4000) return json({ error: 'Query must contain between 1 and 4000 characters.' }, 400, origin, allowedOrigins);
  const baseUrl = (env.DIFY_BASE_URL || 'https://api.dify.ai').replace(/\/$/, '');
  const response = await fetch(`${baseUrl}/v1/chat-messages`, { method: 'POST', headers: { Authorization: `Bearer ${env.DIFY_APP_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ inputs: {}, query, response_mode: 'streaming', conversation_id: conversationId, user }) });
  return new Response(response.body, { status: response.status, headers: { 'Content-Type': response.headers.get('Content-Type') || 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache', ...corsHeaders(origin, allowedOrigins) } });
} };
