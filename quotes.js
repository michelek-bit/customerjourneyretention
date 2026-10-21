// Live performance leaderboard for the Competitive Benchmark tab (Vercel serverless).
// Source: Yahoo Finance chart endpoint (1y daily, no key). Cached 60 s.
const SYMBOLS = ['^VIX','ANGI','MAS','XLP','HVT','HD','XLY','AOS','^TNX','FTDR','LOW','POOL','XHB','ITB','BLDR','RCI','WHR','ROL','RTO','TTAN','LII','CARR','TT','WSO','SPY'];
let cache = { at: 0, data: null };
const pct = (a, b) => (a != null && b ? (a / b - 1) * 100 : null);

async function one(sym) {
  const r = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=1y&interval=1d`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('http ' + r.status);
  const res = (await r.json()).chart?.result?.[0];
  if (!res) throw new Error('no data');
  const ts = res.timestamp || [], cl = res.indicators.quote[0].close || [];
  const pts = ts.map((t, i) => [t * 1000, cl[i]]).filter((p) => p[1] != null);
  const last = res.meta.regularMarketPrice ?? pts[pts.length - 1][1];
  const at = (days) => { const cut = Date.now() - days * 864e5; let v = pts[0][1]; for (const p of pts) { if (p[0] <= cut) v = p[1]; else break; } return v; };
  const y0 = new Date(new Date().getFullYear(), 0, 1).getTime(); let ytd = pts[0][1]; for (const p of pts) { if (p[0] < y0) ytd = p[1]; else break; }
  const rets = []; for (let i = 1; i < pts.length; i++) rets.push(Math.log(pts[i][1] / pts[i - 1][1]));
  const m = rets.reduce((a, b) => a + b, 0) / (rets.length || 1);
  const vol = Math.sqrt(rets.reduce((a, b) => a + (b - m) ** 2, 0) / Math.max(1, rets.length - 1)) * Math.sqrt(252) * 100;
  const hi = Math.max(...pts.map((p) => p[1]));
  const prev = res.meta.chartPreviousClose && pts.length < 2 ? res.meta.chartPreviousClose : pts[pts.length - 2]?.[1];
  const step = Math.max(1, Math.floor(pts.length / 40));
  return { s: sym, last, d1: pct(last, prev), w1: pct(last, at(7)), m1: pct(last, at(30)), m3: pct(last, at(91)), ytd: pct(last, ytd), y1: pct(last, pts[0][1]), vol, hi: pct(last, hi), spark: pts.filter((_, i) => i % step === 0).map((p) => +p[1].toFixed(2)).concat([+last.toFixed(2)]), t: (res.meta.regularMarketTime || 0) * 1000 };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
  if (cache.data && Date.now() - cache.at < 60000) return res.status(200).json(cache.data);
  const quotes = await Promise.all(SYMBOLS.map((s) => one(s).catch(() => ({ s, error: true }))));
  cache = { at: Date.now(), data: { at: Date.now(), source: 'Yahoo Finance', quotes } };
  return res.status(200).json(cache.data);
}
