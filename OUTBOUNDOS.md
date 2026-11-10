# OutboundOS

**The 4C Retention console for Home Alliance call centers.** One self-contained web page that shows how the team is doing, coaches CSRs live on every call, and rewards them for cross-booking.

> Built for the 4C Retention team (Q4 2026). Static HTML: no build step, no server, no install.

![OutboundOS SOP video poster](../video/outboundos-sop-poster.jpg)

**▶ Start with the video:** [`video/OutboundOS-SOP-story.mp4`](../video/OutboundOS-SOP-story.mp4) (2:43). It follows Maria, a CSR, from one booking to two, and uses the AIDA model: Attention, Interest, Desire (your rewards), Action.

---

## Contents

- [What's inside](#whats-inside)
- [How to use it (SOP)](#how-to-use-it-sop)
- [What CSRs get (gamification)](#what-csrs-get-gamification)
- [Data: what's sample and what's real](#data-whats-sample-and-whats-real)
- [Run locally](#run-locally)
- [Deploy on GitHub + Vercel](#deploy-on-github--vercel)
- [Project structure](#project-structure)
- [Roadmap](#roadmap)
- [Sources](#sources)

---

## What's inside

OutboundOS has **5 tabs**. Switch between them with the top tab bar, or turn on the **▥ Vertical menu** for a sidebar that also jumps to each section.

| Tab | What it's for | Main sections |
|---|---|---|
| **Master** | How the team is doing | How-to video · Benchmark · Goal tracker · Call center metrics · Best offers · LIVE FUNNEL · Pipeline |
| **SmartTool** | The CSR console on every call | Live Coach (cross-booking, outbound) · Home-age call (ATTOM) · Objection points call + leaderboard · Customer 360 · Cross-booking playbook · Support channels (In-app, SMS, AI chat, AI voice, Email, Missed-call text-back, Voicemail + text) |
| **Cash Grab 🏆** | November CSR contest | Black Friday Cash Grab · Daily holiday contests · Leaderboard · Log a cross-booking · Spin-the-wheel rewards · Payout + budget · Tiers · Announcement · Gamification ideas |
| **CSR DNA 🧬** | Rewards that fit each person | Daily progress · Questionnaire · Motivation profile · Team DNA |
| **Gantt 📅** | Implementation plan | 7 two-week sprints · Gantt by workstream · Milestones · Task details · CSV export |

**On every tab:**

- **▶ How to use:** a step-by-step guide that highlights each part of the screen.
- **🎬 Watch the 3-min video:** the SOP video. It can be minimized into a corner player that keeps playing while you work.
- **Pip:** a small AI helper (bottom left). Pip reads the page live, answers questions such as "How are we vs goal?", gives a tip on each tab and celebrates wins.

### Master

| Section | What it shows |
|---|---|
| **Benchmark** | Our last 30 days vs our goal vs published industry numbers: answer rate, booking rate, cross-booking rate, offer rate, offer acceptance, missed calls recovered. |
| **Track toward goal** | November to date for each main metric: progress bar, where we should be by today, projected month-end and what's needed per day. Goals are editable. |
| **Call center metrics** | 15 KPI tiles: inbound calls, answer rate, bookings, booking rate, cross-bookings, **cross-booking rate** (cross-bookings ÷ bookings), **calls → cross-booking** (cross-bookings ÷ inbound calls), offer rate, offer acceptance, cross-bookings kept, cross-booking revenue, average cross-book ticket, missed calls recovered, average handle time and Cash Grab payout. Each tile has a trend, the change vs the prior period and % of goal. Switch between Today, 7 days and 30 days. Below the tiles: a funnel and the cross-book pairings. |
| **Best offers** | Approved offers from the *Home Maintenance by Home Age* sheet, ranked by customer reception (accepted × kept) or revenue per pitch, plus an AI offer map and an offer-by-home-age heatmap. |
| **LIVE FUNNEL** | How many people are in each of the 9 stages right now. Animated moves between stages, plus a "Moving now" feed. |
| **Pipeline** | Open opportunities by stage with dollar value, weighted value, owner, time in stage and next action. Filter by department. |

### SmartTool

| Session | What it does |
|---|---|
| **Live Coach** | Coach card with the next best move, offer ladder, tech availability, playbook steps, live transcript with objections highlighted, and Intent / Offers / Approach / Home / Points / Area tabs. |
| **Home-age call (ATTOM)** | Caller ID → property record → home age → service-life timeline → approved offers by department → cross-booking plan → live commission potential. |
| **Objection points call** | Each objection-handling touchpoint lights up and earns points. A side table totals them; points go into a prize bank. Below it: the **Top CSR performers** leaderboard. |
| **Customer 360** | Opens on the CSR screen with the full history: jobs, every channel, score log, replies and reach, a do-not-contact flag and an AI brief to read before speaking. |
| **In-app** | The customer's phone (Passport offers, sensor alert, points, bookings) next to the in-app events. |
| **Customer points** | 100 points = $1 off; points can cover up to 50% of a job. Earn +500 for a maintenance visit, +750 for a second trade on one visit, +1,000 for completing the home profile and +2,500 for a referral. |

---

## How to use it (SOP)

**The rule on every call:** help first, recommend second, book third.

### For CSRs: start today in 4 steps

1. **Take calls in SmartTool.** Pick the session, read the AI brief in Customer 360, then follow the coach card.
2. **Log every cross-booking in Cash Grab** with its CRM job number. Only confirmed, qualified bookings count, and cancelled bookings are excluded.
3. **Fill in your CSR DNA** so rewards match what matters to you.
4. **Check your daily progress** on the CSR DNA tab, and ask Pip anytime.

### On a call

1. **Connect.** Greet the customer and let them explain the problem fully.
2. **Solve the original request first.** Book it with real time slots from Tech Assignment.
3. **Discover.** Ask one transition question, then listen.
4. **Recommend one service** the customer needs, using an approved offer. Use the home-age offer map, and never invent a discount.
5. **Handle objections:** acknowledge, ask, explain the value, offer two options.
6. **Confirm** every service, time and term. Respect a "no" and do-not-contact flags.

### For leaders

1. **Master:** check the benchmark and goal tracker, and find the biggest leak in the funnel (usually bookings with no second-service offer).
2. **Best offers:** lead with the top 3. Use big-ticket offers only when a system is at end of life.
3. **Cash Grab:** watch the daily payout and the weekly budget meter.
4. **Gantt:** follow the rollout sprint by sprint, and mark tasks done.

The full narration script of the video is in [`docs/OUTBOUNDOS-SOP-VIDEO.md`](OUTBOUNDOS-SOP-VIDEO.md).

---

## What CSRs get (gamification)

| Benefit | How it works |
|---|---|
| 💰 **₱100 per qualified cross-booking** | Paid daily, no limit, during the November Cash Grab. Two extra a day ≈ ₱4,400 in a 22-day month. |
| 🎯 **Tier milestones** | 5 = ₱500 · 10 = ₱1,000 · 15 = ₱1,500 · 20 = ₱2,000 · 30 = ₱3,000. |
| 📅 **A contest every day** | Holiday and team themes, each with its own reward: double pesos, mystery envelopes, early outs, team snack parties. Black Friday is triple pesos plus ₱1,000 to the top CSR. |
| 🎡 **Spin the wheel on every booking** | Each booking (a logged cross-booking, a booking after an objection, a booking or cross-booking on the home-age call) pops up a wheel. Prizes: ₱20, ₱50, ₱100, a ₱500 jackpot, +50 or +100 points, coffee, a 15-minute break, a 30-minute early out or a shout-out. Prizes add up under **My prizes** until redeemed; points go straight to the prize bank. Average cash cost ≈ ₱28.50 per spin. For onboarding, pick **🎓 Test CSR** to practice: unlimited spins, nothing logged or paid. |
| 🛡️ **Objection points → prizes** | 250 badge + shout-out · 500 coffee · 1,000 early out · 1,500 ₱300 GCash · 2,500 movie for two · 4,000 ₱1,000 GCash or first pick of shifts. |
| 🏅 **Recognition** | Leaderboards in Cash Grab and SmartTool; Pip cheers every win. |
| 🧬 **Rewards that fit you** | CSR DNA matches prizes and contest days to personal goals (home, family, travel, study, time off). |

> Daily contest bonuses add up to at most ₱22,700 for November, which is above the $50/week base budget. Pick the days to fund and draw the rest from engagement money. Perk days (early outs, breaks, shift swaps) cost nothing.

---

## Data: what's sample and what's real

**Real**

- **Offers:** the *Home Maintenance by Home Age* sheet (4C_OFFERS), including its flags: the Electrical $95 offer ends Nov 14; 4C Appliance offers run until ops says stop; check that the painting offer is still valid.
- **Cash Grab rules:** ₱100 per qualified cross-booking (~$1.58), paid daily, November 1–30, with the tiers above.
- **Industry benchmarks:** Invoca 2026 and ServiceTitan; see [Sources](#sources).

**Sample (for the layout)**

All customers, CSRs, calls, KPIs, funnel counts, pipeline cards, commission rates and point balances. Commission rates are editable placeholders.

**To go live, connect:**

- the call system (inbound calls, answered calls, handle time);
- the CRM (bookings, cross-bookings, cancellations, tickets, stage changes, an offer code on every job);
- ATTOM (property lookup by caller ID and address);
- Customer.io and ClickSend (message history).

The [Roadmap](#roadmap) puts this work in sprints S1–S2.

**Saved in the browser** (`localStorage`, per viewer, never shared):

| Key | What it saves |
|---|---|
| `os-tour` | Guide seen |
| `os-cg` | Cash Grab log |
| `os-gi` | Chosen ideas |
| `os-dna` | DNA profiles |
| `os-op` | Prize bank |
| `os-goals` | Edited goals |
| `os-gantt` | Task status |
| `os-sv` | Video hidden |
| `os-vnav` | Vertical menu |
| `os-wheel` | Wheel spins and prizes |

**Privacy:** the page never reads a home's value back to the customer. Do-not-contact customers get no outbound offers. The CSR DNA questionnaire is voluntary and doesn't ask about income, debts or health.

---

## Run locally

Double-click `OutboundOS.html` (or `index.html` in the standalone package) and it opens in Chrome, Edge or Safari. Keep the `video/` folder next to the HTML so the SOP video plays.

Or serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000/OutboundOS.html
```

---

## Deploy on GitHub + Vercel

1. **Create a GitHub repo** and push the files:
   ```bash
   git init
   git add .
   git commit -m "OutboundOS"
   git branch -M main
   git remote add origin https://github.com/<your-org>/<repo>.git
   git push -u origin main
   ```
2. **Import the repo in Vercel:** **Add New → Project**, then use these settings:
   - **Framework Preset:** Other
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave empty, root)*
3. **Deploy.** The page is served as a static file:
   - In the main repo: `https://<project>.vercel.app/OutboundOS` (or `/outboundos`)
   - In the standalone package: `https://<project>.vercel.app/`
4. **Every push to `main` redeploys.** Pull requests get preview URLs.

`vercel.json` sets `noindex`, so search engines don't list the site. Add Vercel password protection or team-only access before sharing customer data.

---

## Project structure

Standalone package:

```
outboundos/
├── index.html                       # OutboundOS (single file, all CSS + JS inline)
├── video/
│   ├── OutboundOS-SOP-story.mp4     # 2:43 SOP video (AIDA story)
│   └── outboundos-sop-poster.jpg
├── docs/
│   └── OUTBOUNDOS-SOP-VIDEO.md      # narration script with timestamps
├── vercel.json                      # static hosting, noindex, clean URLs
├── .gitignore
└── README.md                        # this file
```

In the main repo, the same page is `OutboundOS.html` next to `index.html` (the 4C Retention Ecosystem).

---

## Roadmap

Suggested plan (details, dependencies and definitions of done are in the **Gantt** tab):

| Sprint | Dates | Goal |
|---|---|---|
| S0 · Prototype + access | Nov 2–13 | Prototype signed off; data access granted |
| S1 · Data foundation | Nov 16–27 | CRM + call data in the ledger; offer codes on jobs; ATTOM lookup |
| S2 · Master live | Nov 30–Dec 11 | Metrics, goals, funnel and pipeline on real data |
| S3 · Live Coach pilot | Dec 14–23 | 2 CSRs on Live Coach + Customer 360 |
| — · Holiday freeze | Dec 24–Jan 1 | — |
| S4 · Channels | Jan 4–15 | Compliance review; SMS, missed-call text-back, in-app with points |
| S5 · Gamification | Jan 18–29 | Points scoring, CSR DNA, contests on live data |
| S6 · Rollout | Feb 1–12 | All CSRs trained and live; retro |

---

## Sources

- [Invoca: Home Services Lead Conversion Benchmarks Report 2026](https://invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026). 52% of inbound calls answered (73% of calls over 30 seconds); 55% of businesses don't ask leads to book.
- [ServiceTitan: typical call-booking rate](https://www.servicetitan.com/blog/data-call-booking-rates). June 2022 data from 3,000+ trade businesses: a 42% average call-booking rate, and 59% for shops with 25+ techs.
- Definitions differ by source. For example, ServiceTitan counts booking opportunities, while we count answered calls.

---

*Home Alliance · 4C Retention · built with Claude.*
