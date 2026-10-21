// Shared task status for the Gantt chart (Vercel serverless function).
// Storage: Upstash Redis REST (Vercel Marketplace → Upstash / "KV"). Env vars:
//   KV_REST_API_URL + KV_REST_API_TOKEN   (or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
// Optional email to Michele when someone else completes a task (Resend):
//   RESEND_API_KEY, NOTIFY_EMAIL (Michele's address), NOTIFY_FROM (verified sender)
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const PEOPLE = ['Michele', 'Victor', 'Diego', 'Nazar'];

async function redis(cmd) {
  const r = await fetch(URL_, { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(cmd) });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  return (await r.json()).result;
}

async function readAll() {
  const flat = (await redis(['HGETALL', 'gantt:tasks'])) || [];
  const tasks = {};
  for (let i = 0; i < flat.length; i += 2) { try { tasks[flat[i]] = JSON.parse(flat[i + 1]); } catch (e) {} }
  const updates = ((await redis(['LRANGE', 'gantt:updates', '0', '99'])) || []).map((x) => { try { return JSON.parse(x); } catch (e) { return null; } }).filter(Boolean);
  return { tasks, updates };
}

async function notify(u) {
  const key = process.env.RESEND_API_KEY, to = process.env.NOTIFY_EMAIL, from = process.env.NOTIFY_FROM;
  if (!key || !to || !from || u.by === 'Michele') return;
  const verb = u.done ? 'completed' : 'reopened';
  await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject: `Gantt: ${u.by} ${verb} "${u.name}"`, text: `${u.by} ${verb} "${u.name}" (${u.ws}) on ${new Date(u.at).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT.` })
  }).catch(() => {});
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!URL_ || !TOKEN) return res.status(501).json({ error: 'storage_not_configured' });
  try {
    if (req.method === 'GET') return res.status(200).json(await readAll());
    if (req.method === 'POST') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const id = String(b.id || '').slice(0, 80), name = String(b.name || '').slice(0, 200), ws = String(b.ws || '').slice(0, 60);
      if (!id || !PEOPLE.includes(b.by)) return res.status(400).json({ error: 'bad_request' });
      const u = { id, name, ws, done: !!b.done, by: b.by, at: Date.now() };
      await redis(['HSET', 'gantt:tasks', id, JSON.stringify({ done: u.done, by: u.by, at: u.at })]);
      await redis(['LPUSH', 'gantt:updates', JSON.stringify(u)]);
      await redis(['LTRIM', 'gantt:updates', '0', '199']);
      await notify(u);
      return res.status(200).json(await readAll());
    }
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'server_error' });
  }
}
