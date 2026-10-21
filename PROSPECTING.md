# 4C Prospecting · B2C email and SMS, AI-led

Part of the **4C Retention Ecosystem** (switch at the top of the page: 4C RETENTION | 4C PROSPECTING; deep link `#prospecting`).

## Funnel
Sidebar sections; Pipeline board with 7 stages (New, Contacted, Qualifying, Slot offered, Booked, Nurture, Closed).

Capture (every source, one CRM, deduped vs customers/members) → Respond (< 60 s, AI SMS with consent + email; missed-call text-back) → Qualify (AI agent: trade, problem, brand, ZIP, urgency) → Book (2 real slots from live capacity; CSR escalation) → Hand off to 4C Retention (Serviceable SAL / Job Booked). Not booked → monthly lead nurture → sunset.

## Lead sources
Website forms, missed calls, Google LSA, Angi/Thumbtack/Yelp, Meta lead ads, chat, abandoned online booking, old leads (90–365 days), B2B2C partners (realtors, property managers, HOAs, home-warranty firms; the only place cold outreach fits), new-homeowner lists (direct mail + paid social only; never cold SMS/autodialed calls).

## Sequences
Form lead · Missed call · Marketplace lead · Quote not booked (HVAC install) · Abandoned booking · Old lead reactivation. All stop on booking, STOP or human takeover. Texts: brand first, GSM-7, ≤ 160 chars, 9 AM–8 PM recipient time.

## AI agent
Reads capacity, service area, price book, planner promo, Brand Logic, history. Can answer, qualify, book, reschedule, send links, open CSR tasks. Never invents prices/availability or texts after STOP. Hands off on safety words, complaints, negotiation, high-ticket installs, two failed answers. Says it is automated. QA: 100% week 1, then 10% weekly.

## CRM stack
1. ServiceTitan Speed to Lead if on Max/Virtual Agent (AI SMS in 30 s, books on dispatch board). 2. Otherwise Customer.io + AI SMS agent on the scheduling API (one profile and consent record with 4C Retention). Avoid a separate all-in-one CRM (data silo). B2B cold-email tools only for partner outreach.

## Compliance (planning summary, not legal advice)
- Prior express written consent for marketing texts and AI voice calls; $500–$1,500 per violation.
- One-to-one consent rule vacated (11th Cir., Jan 24, 2025). Revocation-all rule delayed to Jan 31, 2027; honor opt-outs in any wording within 10 business days.
- 10DLC brand + campaign registration per trade brand; unregistered traffic is blocked.
- Quiet hours 8 AM–9 PM federal; stricter states (e.g. Florida); our rule 9 AM–8 PM, max 3 marketing texts / 24 h.
- CAN-SPAM + Gmail/Yahoo bulk-sender rules (SPF, DKIM, DMARC, one-click unsubscribe).

## 90-day plan
Days 1–30 Foundation (consent audit, 10DLC — Diego; lead inventory + dedupe — Nazar; baseline — Victor; stack decision — MK). Days 31–60 Pilot (AI SMS on 5 Star Appliance Repair forms, 50/50 holdout; missed-call text-back; QA rules). Days 61–90 Scale (LSA, Angi, Thumbtack, lead ads, chat; HVAC quote follow-up; partner channel; dashboard).

## KPIs
Time to first touch (< 60 s), contact rate, lead → booked, cost per booked job, show rate, opt-out rate, AI handoff rate. Baselines in weeks 1–2; targets from pilot vs holdout.

Sources: ServiceTitan Speed to Lead help doc; MoFo on the 11th Circuit ruling; compliancehub.wiki TCPA 2026; DailyStory 10DLC 2026; Callingly speed-to-lead summary (Lead Response Management study, HBR 2011); Invoca.

## B2C Database (purchased data, ZoomInfo-style)
Sidebar → B2C Database. Tabs: Search (filters: location/served ZIPs, property, equipment age, life events, intent, 4C match; results table; household profile), Lists (dynamic saved lists), Intent signals (catalog, weights, decay, enhancement workflow), Field dictionary (103 fields, also data/b2c-field-dictionary.csv), Broker purchase (9 steps with owners, channel permission matrix, broker types, California DROP note).
- Intent score = Σ weight × 0.5^(days ÷ 30), capped at 100 (web visit 35, permit 25, listed 25, new homeowner 25, weather 15, equipment age 15 no decay, in-market 10). Weights to be refit on booked jobs vs holdout.
- Purchased data channels: direct mail and addressable/ad match yes; email only with broker opt-in proof (ESP terms); manual calls only after DNC scrub; no SMS or AI voice without consent. Responses come back as inbound leads (consent captured on the landing page).
- Not purchased: race, ethnicity, religion, health, sexual orientation, political data. Sample records are fictional.
