# 4C Retention Ecosystem

Two parts, switched at the top of the page: **4C RETENTION** (the Membership Communication Library and everything built so far) and **4C PROSPECTING** (B2C email + SMS, AI-led; see docs/PROSPECTING.md).

# Q4 4C AI Solutions — Membership Communication Library

A single-page web app for Home Alliance's Q4 2026 customer-communication and retention program (4C). It is one self-contained `index.html` (≈11 MB, everything inlined: data, images, audio). No build step, no server, no dependencies to install.

**Live preview:** open `index.html` in Chrome, Edge or Safari, or publish with GitHub Pages (see below).

---

## What's inside

| Tab | What it shows |
|---|---|
| **Calculator** | **4C Calculator** (Core plan / BHAG, 4C Retention only) and **Retention Point**: PM expectations by month for HVAC and Electrical (1,492 past-due, 5,261 contacts, 789 expected bookings at 15%), with booking-rate and revenue controls. |
| **Members** | 144 member communications: Passport onboarding (13), event-based emails (106) and Passport event-triggered retention designs (25), with overlaps and a "fix before sending" list. |
| **Transactional Workflow** (before Members; sub-views: Email library & fixes · Booking workflow & QA flow; channel sidebar PRINT · EMAIL · SMS · IN-APP · RETARGETING) | Appointment journey library (same layout as Members). Mirrors the 6 live Customer.io transactional workflows. Touchpoint 1 Job Booked and Touchpoint 2 On My Way each have V1 (Regions, all trades) and V2 (single trade) designs. Live previews with sample data or merge fields, V1 vs V2 comparison, a fix-before-sending list, and touchpoints 2–7 (reminder → next service) marked as planned. |
| **Non-Member** | Snapshot of the PROMO 2026 communication planner (searchable, jump to week). |
| **Brand Logic** | Sub-tabs **Brands** (brand tiers and unlocks by job stage), **SMS** (animated number-rotation strategy), **Email** (reputation management: `info@service-appointments.com`, `.pro` city / concierge / marketing mailboxes) and **Leadscore** (Home Alliance Score 0–100, tiers A–E, scorer). |
| **10 Personas** | Sub-tabs **Journeys** (overview of the 5-step evolution from today to AI-led, sticky persona navigation), **Gantt chart** (next steps to automate with AI by workstream) and **DNA** (US market map: click a market for customers, M12 return and revenue (actual), its customer DNA types and the regional home problems to offer in-home service for; 10 customer brain clones as a rotating 3D particle brain with touchpoint, trait, home-system and offer nodes, filters and neural transmissions; trait helix; actual M12 return and revenue by first trade; a Zillow-style property page with photo gallery, value, facts & features, floor plan with system pins and systems list; and the best AI approach per channel). Journeys: 52-week journeys for Personas 1–3, plus **Persona 4 (A) · Human in the loop** (calendar-led, CSRs coached by Live Coach) and **Persona 4 (B) · AI-first (AI in the loop)** (reactive: intent-triggered model with conversion projection, signal → response map with day simulation, Live Coach on every channel). Email and retargeting boxes open galleries with real email and ad references. |
| **Database** | **Reachable** contacts (phone, email, unique, 24 months) and **Cohorts** (segment leaderboard, LTV, time to return, time to 2nd job, quarterly cohorts by count and $ revenue, modelled channel/journey grids). |
| **I-MOS** | Retention marketing as an Intelligent Marketing Operating System: 4 modules around an AI brain, maturity radar, flywheel, iROAS by channel, 8-week rollout. |
| **AI-ADVISORS** | C-Level brain-clone board (COO, CMO, CFO, Partnerships, CTO): 7 growth pillars diagnosed on Home Alliance data, leverage calculator, enterprise-value drivers, 90-day plan, ask-the-board chat. |
| **Competitive Benchmark** | Retention rates of the top 10 home-service competitors and an animated map of the retention tactics each one uses, compared with Home Alliance. |

### Project assistant
Bottom-left chatbot that finds any section, answers with KPIs and charts, and jumps to the right tab. When opened from claude.ai it can add AI insights (asks the viewer for permission first); offline it still answers from the built-in index and data.

### Live Coach (Persona 4)
A CRM agent-assist console with tech availability in the area, an Offer 1 → Offer 2 ladder, regional home problems, neighbors' projects and cross-book suggestions; live transcript (with neural voice playback), **"Say this next"** prompts, objection detection and approved responses, customer banner, intent / offers / approach / home / points tabs, quick CSR actions and an automation log. Fed by CRM data plus intent data providers. Works for AI voice, AI chat, SMS, email, push, in-app (phone mock-up with offers, points and home sensors), ads and direct mail.

---

## Deploy on Vercel
Import the GitHub repo in Vercel with framework **Other** and no build command. `index.html` is served as a static page and `api/tasks.js` saves Gantt checkboxes for the team once Upstash Redis is connected (optional Resend email to Michele). Full steps: `docs/DEPLOY.md`.

## Run locally
Double-click `index.html`. Works offline. Fonts load from Google Fonts when online and fall back to system fonts otherwise.

## Publish with GitHub Pages
**Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.**
The site appears at `https://michelek-bit.github.io/Q4-4C-AI-Solutions/` after a few minutes.

> ⚠️ The page contains internal business data (revenue, cohorts, customer metrics, competitor research). Keep the repository **private**. GitHub Pages on a private repository needs a paid plan (Pro / Team); on a free plan Pages only works for public repos.

## Update the site
Replace `index.html` with the new version, then:
```bash
git add index.html
git commit -m "Describe the change"
git push
```
Or upload the file in the browser: **Add file → Upload files → Commit changes**.

---

## Data and assumptions
- Data is a snapshot as of **Oct 15, 2026** (Cohorts screen exports, reachable-contact exports, PROMO 2026 planner, PM Expectations by Month, 4C Calculator).
- Sections marked **Modelled**, **Projected** or **Illustrative** use planning assumptions, not measured results; each says so on the page.
- Live Coach dialogue, home details, intent scores and the points rate (100 points = $1) are illustrative. Voices are Piper neural TTS samples, not a final brand voice.
- Competitor figures come from public filings and company pages (sources linked in the tab).

## Repository layout
```
index.html        the whole app
README.md         this file
docs/CLAUDE.md    technical handoff for continuing work with Claude Code
docs/DEPLOY.md    GitHub + Vercel steps
api/tasks.js      Gantt task status API (Upstash Redis + optional Resend email)
api/quotes.js     live stock quotes for the Benchmark ticker board (Yahoo Finance; optional FINNHUB_API_KEY)
package.json      Node ESM flag for the API
api/tasks.js      Gantt task status API (Upstash Redis + optional Resend email)
api/quotes.js     live stock quotes for the Benchmark ticker board (Yahoo Finance; optional FINNHUB_API_KEY)
package.json      Node ESM flag for the API
vercel.json       static hosting config (no-index headers)
robots.txt        block search engines
.gitignore
```

## Owner
MK · Marketing, Home Alliance
