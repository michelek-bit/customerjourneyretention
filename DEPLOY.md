---
title: Deploy to GitHub and Vercel
tags: [claudecode, deploy, github, vercel]
---
# Deploy

The app is one static page (`index.html`) plus one small serverless function (`api/tasks.js`) that saves Gantt checkboxes for the whole team. No build step and no npm packages.

## 1. GitHub
**Browser:** open the repo → **Add file → Upload files** → drag every file and the `api` and `docs` folders → **Commit changes**.

**Terminal** (from the unzipped folder):
```bash
git init
git remote add origin https://github.com/michelek-bit/Q4-4C-AI-Solutions.git
git add .
git commit -m "Q4 4C AI Solutions: Gantt checkboxes + team updates"
git branch -M main
git push -u origin main
```
If the repo already has history: `git pull origin main --allow-unrelated-histories` first, or copy the files into your clone.

## 2. Vercel
1. vercel.com → **Add New… → Project** → **Import** `Q4-4C-AI-Solutions`.
2. Framework preset **Other**; leave Build, Output and Install commands empty → **Deploy**.
3. Every push to `main` redeploys.

## 3. Turn on shared checkboxes (5 minutes, once)
Without this step, ticks save only in each person's browser.
1. In the Vercel project: **Storage → Create / Connect → Upstash for Redis** (Marketplace; free tier is enough). Connect it to this project for **Production** (and Preview if you want).
2. Vercel adds the env vars automatically (`KV_REST_API_URL`, `KV_REST_API_TOKEN`, or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`; either pair works).
3. **Deployments → Redeploy**. The Gantt header now shows **● Shared · saved for the team**.

## 4. Email Michele when someone completes a task (optional)
1. Create a free Resend account, verify a sender domain (e.g. `notify@homealliance.com`) and create an API key.
2. In Vercel **Settings → Environment Variables** add:
   - `RESEND_API_KEY` = the key
   - `NOTIFY_EMAIL` = Michele's email
   - `NOTIFY_FROM` = the verified sender, e.g. `Gantt <notify@homealliance.com>`
3. Redeploy. Every tick or untick by Victor, Diego or Nazar sends Michele an email. Michele's own ticks don't.

Even without email, when Michele opens the site a **🔔 N new updates** card appears (top right) listing what changed since her last visit, and the **Updates** panel in the Gantt shows the full history.

## 5. How ticking works
- Pick **You are: Michele / Victor / Diego / Nazar** at the top of the Gantt (remembered in that browser).
- You can tick a task if you're its owner or supporter; **Michele can tick any task**.
- Ticks save instantly; other people see them on refresh or within a minute.
- Unticking is also logged, so the history stays honest.

## 6. Keep it private
The page holds internal revenue and customer metrics, and anyone with the link can tick tasks.
- Keep the GitHub repo **private**.
- Vercel **Settings → Deployment Protection**: protect the production URL (Vercel Authentication or password, depending on plan).
- `vercel.json` and `robots.txt` block search engines.

## 7. Live stock tickers (Competitive Benchmark)
`api/quotes.js` fetches quotes server-side every minute (Yahoo Finance, no key). If Yahoo blocks requests, add `FINNHUB_API_KEY` (free at finnhub.io) and redeploy. The leaderboard shows **● Live · Yahoo Finance · hh:mm** when working; returns, realized volatility and distance from the 52-week high are computed from 1 year of daily closes. Outside Vercel it shows the Oct 19, 2026 snapshot.

## 8. Outside Vercel
In claude.ai or when opened as a local file, ticks save in that browser only, and the assistant / AI-Advisors live answers work only in claude.ai.
