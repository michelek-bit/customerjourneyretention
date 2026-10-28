---
title: Conversation log — Customer Journey Communication / Q4 4C AI Solutions
tags: [claudecode, home-alliance, conversation-log, crm, lifecycle-marketing, retention]
owner: MK (Marketing, Home Alliance)
period: 2026-10-12 → 2026-10-21
updated: 2026-10-21
artifact: https://claude.ai/artifact/67gtzX7QRhrrfdP5vc1ETY
repo: https://github.com/michelek-bit/Q4-4C-AI-Solutions
related: docs/CLAUDE.md (technical handoff), docs/TRANSACTIONAL-WORKFLOW.md (email audit), README.md
---

# Conversation log

A record of what MK asked for, what was built, the decisions taken and the open questions, in order. Use it with `docs/CLAUDE.md` to continue the work in Claude Code.

## 1. Library foundation
| # | Request | What was built |
|---|---|---|
| 1 | Create a Customer Journey Communication project topped by a Membership Communication Library; start with the Passport onboarding emails | Hub page with journey stages; 13 onboarding emails as screenshots with purpose, audience, CTA, tokens; QA list (blank `{{ tFirst }}`, no unsubscribe, links to `#`, no subjects, HVAC copy in 11–12, footer typo, © 2025) |
| 2 | Add the communications from MK's earlier library HTML | 106 event-based emails + 25-email retention set; 7 journey phases; overlaps between collections; cross-library issues (tier names, Emily vs Jennifer, `$TBD`, address placeholder) |
| 3 | Add the 4C Plan Calculator (4C Retention only) as a Calculator tab | First rebuilt; then, on request, the original Vercel app embedded unchanged with Core plan / BHAG, 4A/4B removed |
| 4 | Rename to Members, add a Non-Member tab with the communication planner | PROMO 2026 tab from the 2026 4C Communication Plan sheet (gid 1378697654), searchable, jump to week |
| 5 | Brand Logic tab from the slide | Job stage → leadscore band → brands (8 / 5 / Home Alliance) → unlock; leadscore attribute tables |
| 6 | Transactional Workflow tab, Booking Workflow sub-tab | QA flow with email previews, SMS copy, CSAT/NPS, tech-app triggers, sender notes |
| 7 | Remove header; Calculator first | Tab menu only; Calculator default |

## 2. Personas
| # | Request | What was built |
|---|---|---|
| 8 | 10 Personas tab; transactional then nurture for LA and 5 trades; animate | Animated workflow engine; later reduced to Persona 1 only (LA, $2M) |
| 9 | Holiday promos and preventive maintenance | Pre/holiday/post weeks; 6-month and 1-year checks |
| 10 | Nurture weekly AR HE, AR LE, HVAC; every other week EL, PL, ADC, Cleaning, Paint | Multi-trade weekly cards; flagged ~22 emails/month vs the 4/month cap |
| 11 | Leadscore logic (Home Alliance Score) | Score rules, tiers A–E/DNC, scorer; flagged membership double-count |
| 12 | Tier B card and customer record on Persona 1 | Score strip; "+" panel with metrics/history (PII removed); flagged SF location vs LA, 35 emails in 30 days |
| 13 | Persona 2 (member, coupon of the week) and Membership Inactive on Persona 1 | Member transactional + Passport onboarding + coupons from the Coupons sheet |
| 14 | Retargeting weekly impressions; outbound calls on PM | ADS and CALL lanes |
| 15 | Nature events, HVAC season, brand anniversary, newsletter, seasonal themes, new services | Shared phases for all personas |
| 16 | Persona 3 (Tier A, lapse, coupon of the month, direct-mail welcome package) | Renewal touch, did-not-renew, win-back, monthly coupons, mail lane |
| 17 | 6-month check-in SMS (7 trades) + call follow-up for all personas | Auto-added after every PM step |
| 18 | 52-week structure for all personas | Week-based engine (W1 = Oct 12, 2026), clickable stage legend |
| 19 | Persona 4: AI-first, fully automated, many channels | 8 lanes (email, SMS, push, in-app, AI chat, AI voice, ads, mail), micro-segment strip, guardrails, compliance notes (TCPA AI voice consent, CA bot disclosure, escalation) |

## 3. AI and Live Coach
| # | Request | What was built |
|---|---|---|
| 20 | End-to-end AI loop from the whiteboard (Offers → Direction → Models → Database → YES reply) | Animated decision loop with a worked example from a call transcript |
| 21 | Smart script for calls (real-time transcript, objection handling) | CRM call screen; then intel tabs (intent, offers, approach, home, points) |
| 22 | Same for other channels | Chat, SMS, email, push, in-app, ads, direct mail scenarios |
| 23 | Voice | Browser TTS, then Piper neural voices (Lessac / Ryan) embedded as MP3 |
| 24 | In-app: points pop-ups and home sensors (Chase and Apple Home as references) | Passport phone mock-up: offers carousel, points sheet, leak/fridge/filter sensors |
| 25 | Retargeting galleries from previous events | 4 ad formats, copy variants, audience, rules |
| 26 | AI-reactive, intent-triggered workflow; email and ad references | Intent engine model with conversion projection (6.3× bookings at defaults, modelled); email gallery with 3 reference emails; 3 live ad references; flagged 20% vs 25% labor offer |
| 27 | CSR-friendly CRM; rename | **Live Coach**: "Say this next", customer banner, quick actions, fed by CRM + intent data providers |
| 28 | Reactive vs calendar for Persona 4 | Recommendation: reactive as primary, calendar kept as reference; Signal → response map (20 signals) + day simulation |
| 29 | Keep both versions | **Persona 4 (A) · Human in the loop** (calendar, CSR calls) and **Persona 4 (B) · AI-first (AI in the loop)** (reactive) |

## 4. Brand Logic sub-tabs
| # | Request | What was built |
|---|---|---|
| 30 | Email reputation management | `"Brand" <info@service-appointments.com>` for transactional; concierge 1:1 for care; promotional by brand; then `.pro` mailboxes: `(city)@`, `(concierge_name)@`, `marketing@5starappliance.pro`; next sprint `la@ / oc@ / sd@` |
| 31 | SMS · Number Rotation Strategy (from the PDF) | Animated ring, workflow, week grid, flag-a-number skip |
| 32 | Sub-tabs SMS / Email / Leadscore | Brands · SMS · Email · Leadscore |

## 5. Data
| # | Request | What was built |
|---|---|---|
| 33 | Database tab (reachable contacts, 24 months) | Phone / email / unique views; flagged October phone drop (−42%, 99,136 opt-outs) |
| 34 | Communication cohorts and LTV | Modelled channel/journey grids (labelled) |
| 35 | Quarterly results | Quarterly cohorts (visits basis, 20q) by count and $ revenue |
| 36 | Segment leaderboard, LTV, time to return, time to 2nd job (CSV exports) | Retention analytics from real exports; key finding: active members 24.0% M12 vs 8.0% never-members |
| 37 | Members event-triggered library swap | 25 Passport retention designs as previews (sample data flagged) |
| 38 | Competitive Benchmark (top 10) | Frontdoor 79.6%, Terminix NA 80.7%, HomeServe 83% (FY21), ServiceTitan renewal 37%; animated retention-efforts matrix |
| 39 | Retention Point on Calculator (PM Expectations PDF) | 1,492 past-due, 5,261 contacts, 789 bookings at 15% (526–1,052), Jan +61% |

## 6. Delivery
| # | Request | Output |
|---|---|---|
| 40 | Handoff MD for Claude Code | `docs/CLAUDE.md` |
| 41 | Commit to GitHub (beginner) | Repo zip + browser and Terminal instructions; keep repo private |
| 42 | MD for GitHub | `README.md` |
| 43 | MD of the conversation | This file |
| 61 | I-MOS tab | Intelligent Marketing Operating System for retention: animated hub (customer intelligence, content systems at scale, journey orchestration, incrementality & iROAS) mapped to HA data, owners, gaps; maturity radar; retention flywheel; ROAS vs iROAS holdout sliders; 8-week rollout |
| 60 | AI-ADVISORS tab (C-Level Brain Clone) | Board of 5 AI executives (COO, CMO, CFO, Partnerships, CTO) using Jay Abraham-associated frameworks; 7 pillars diagnosed on HA data with blueprints, money math and owners; leverage calculator; enterprise-value drivers; 90-day sequence; live AI answers via sample capability with offline fallback |
| 59 | Q4 Core plan and BHAG #1 | MoM + 2027 uses the Q4 plan sheet: Core plan (default) or BHAG #1 (+5%) or Scorecard plan for Oct–Dec 2026; Q4 comparison table, department mix; flagged Total column mismatches |
| 58 | MoM + 2027 projection | Calculator › MoM + 2027: 4C Scorecard MoM (2025 actual, 2026 actual + plan), 2027 baseline (+9.6% bookings, +3.8% revenue) plus AI uplift scenarios on channel bookings; total and by-channel views, MoM growth, insights |
| 57 | Project assistant chatbot | Bottom-left assistant: indexes every section, answers with KPIs, charts and Go-to buttons that open the right tab; AI insights via the artifact sample capability when the viewer allows it |
| 56 | A/B tests + before/after projection | New A/B workstream (6 small-batch tests) with owners; projection of team hours, bookings, revenue and messages per booking before vs after AI, 3 scenarios and a monthly ramp |
| 55 | Owners on the Gantt | Michele (Head of AI Customer Lifecycle, accountable), Victor (AI Product Manager), Diego (AI-First Omnichannel Manager), Nazar (AI-driven Database Sourcing Manager); responsible + support per task, team filter |
| 54 | Journeys easier to present + Gantt chart | Overview with 5-step evolution (today → AI-led), AI layers, how-to-read, sticky persona nav, collapse/expand; Gantt sub-tab with 25 AI-automation tasks in 6 workstreams and milestones |
| 53 | Remove the Leadscore column from Brand Logic › Brands | Column (1–10 / 11–20 / 21–30 bands) removed from the brand tier table; Leadscore sub-tab kept |
| 52 | Designed Booking Workflow + Non-member weekly workflow | Stage timeline with email design, SMS/push/in-app phone, trigger/timing/sender, current slide version; planner weeks laid out by day with email, SMS, retargeting and follow-up timeline |
| 51 | AI home photos + Live Coach above The home | 40 AI-generated photos (exterior, kitchen, living, back/equipment for 10 homes, Pollinations.ai) embedded; Live Coach card per clone (say this first, offer ladder, objections, cross-book, start call) |
| 50 | Cross-book on the call + omnichannel booking | Live Coach call (Bel Air) pitches cross-books, handles objections until booked; live cross-book list, Bel Air tech availability, and a 12-step booking omnichannel workflow triggered at booking |
| 49 | 3 offers per cross-book idea | Offer 1/2/3 per idea by trade (from the Coupons sheet where available), selectable, carried into the appointment summary and Live Coach log |
| 48 | Tech availability + cross-book on the floor plan | Techs per trade, first date and window; property-based cross-book ideas with Add to appointment and a combined appointment summary |
| 47 | Live Coach area intel + USA map | Area tab (techs nearby, slots, regional problems, neighbors' projects, cross-book), Offer 1 → Offer 2 ladder in every script; US market map on DNA with regional DNA types and in-home service needs |
| 46 | Brain like MCP AI Brain reference; Zillow-style home | 3D particle brain (canvas, rotate/zoom, filters, legend, neural transmissions); property page with gallery, est. value, facts & features, floor plan tabs, Home Health card |

## 7. DNA and the home
| # | Request | What was built |
|---|---|---|
| 44 | DNA tab inside 10 Personas | 10 brain clones with clickable touchpoint neurons, conversion path, DNA helix |
| 45 | DNA as Obsidian graph + home + AI by channel | Force graph (drag, hover, path firing), illustrated home + street view link, blueprint pins, systems insight, best AI approach for 10 channels |
| 46 | Brain like MCP AI Brain reference; Zillow-style home | 3D particle brain (canvas, rotate/zoom, filters, legend, neural transmissions); property page with gallery, est. value, facts & features, floor plan tabs, Home Health card |
| 47 | Live Coach area intel + USA map | Area tab (techs nearby, slots, regional problems, neighbors' projects, cross-book), Offer 1 → Offer 2 ladder in every script; US market map on DNA with regional DNA types and in-home service needs |
| 48 | Tech availability + cross-book on the floor plan | Techs per trade, first date and window; property-based cross-book ideas with Add to appointment and a combined appointment summary |
| 49 | 3 offers per cross-book idea | Offer 1/2/3 per idea by trade (from the Coupons sheet where available), selectable, carried into the appointment summary and Live Coach log |
| 50 | Cross-book on the call + omnichannel booking | Live Coach call (Bel Air) pitches cross-books, handles objections until booked; live cross-book list, Bel Air tech availability, and a 12-step booking omnichannel workflow triggered at booking |
| 51 | AI home photos + Live Coach above The home | 40 AI-generated photos (exterior, kitchen, living, back/equipment for 10 homes, Pollinations.ai) embedded; Live Coach card per clone (say this first, offer ladder, objections, cross-book, start call) |

## 8. Workflows, journeys and the AI plan
| # | Request | What was built |
|---|---|---|
| 52 | Designed Booking Workflow + Non-member weekly workflow | Stage timeline with email design, SMS/push/in-app phone, trigger/timing/sender, current slide version; planner weeks laid out by day with email, SMS, retargeting and follow-up timeline |
| 53 | Remove the Leadscore column from Brand Logic › Brands | Column (1–10 / 11–20 / 21–30 bands) removed from the brand tier table; Leadscore sub-tab kept |
| 54 | Journeys easier to present + Gantt chart | Overview with 5-step evolution (today → AI-led), AI layers, how-to-read, sticky persona nav, collapse/expand; Gantt sub-tab with 25 AI-automation tasks in 6 workstreams and milestones |
| 55 | Owners on the Gantt | Michele (Head of AI Customer Lifecycle, accountable), Victor (AI Product Manager), Diego (AI-First Omnichannel Manager), Nazar (AI-driven Database Sourcing Manager); responsible + support per task, team filter |
| 56 | A/B tests + before/after projection | New A/B workstream (6 small-batch tests) with owners; projection of team hours, bookings, revenue and messages per booking before vs after AI, 3 scenarios and a monthly ramp |
| 57 | Project assistant chatbot | Bottom-left assistant: indexes every section, answers with KPIs, charts and Go-to buttons that open the right tab; AI insights via the artifact sample capability when the viewer allows it |

## 9. Plans and projections
| # | Request | What was built |
|---|---|---|
| 58 | MoM + 2027 projection | Calculator › MoM + 2027: 4C Scorecard MoM (2025 actual, 2026 actual + plan), 2027 baseline (+9.6% bookings, +3.8% revenue) plus AI uplift scenarios on channel bookings; total and by-channel views, MoM growth, insights |
| 59 | Q4 Core plan and BHAG #1 | MoM + 2027 uses the Q4 plan sheet: Core plan (default) or BHAG #1 (+5%) or Scorecard plan for Oct–Dec 2026; Q4 comparison table, department mix; flagged Total column mismatches |

## 10. Strategy tabs
| # | Request | What was built |
|---|---|---|
| 60 | AI-ADVISORS tab (C-Level Brain Clone) | Board of 5 AI executives (COO, CMO, CFO, Partnerships, CTO) using Jay Abraham-associated frameworks; 7 pillars diagnosed on HA data with blueprints, money math and owners; leverage calculator; enterprise-value drivers; 90-day sequence; live AI answers via sample capability with offline fallback |
| 61 | I-MOS tab | Intelligent Marketing Operating System for retention: animated hub (customer intelligence, content systems at scale, journey orchestration, incrementality & iROAS) mapped to HA data, owners, gaps; maturity radar; retention flywheel; ROAS vs iROAS holdout sliders; 8-week rollout |
| 62 | I-MOS before Calculator | I-MOS is now the first tab in the menu (Calculator still opens by default) |

## 11. Delivery (continued)
| # | Request | What was built |
|---|---|---|
| 91 | Channels on Members and Non-Member | Same channel sidebar (PRINT · EMAIL · SMS · IN-APP · RETARGETING) added to the Members and Non-Member tabs; EMAIL shows each tab’s existing content, the others are new boards with stage filters. Members: welcome kit, member Next Service Due sticker, yearly savings letter, upgrade postcard; 7 texts (welcome, first visit, check due, credits expiring, payment failed, renewal, win-back); 6 Passport app screens (member card, Home Health Score, credits wallet, member offers, renewal recap, upgrade); retargeting (suppress active members, activate, upgrade, win-back, high-value lookalike, suppress failed payment). Non-members: EDDM seasonal postcard, neighbor door hanger, join-Passport mailer; 5-week promo SMS rotation from the PROMO 2026 offers + theme week + Passport invite; in-app seasonal card, Passport at checkout, “members save” receipt; retargeting by promo week, theme, site visitors, 2+ jobs non-members, booked suppression. |
| 90 | Channels sidebar + Next Service Due + A-Player folder + in-app | Transactional Workflow gets a channel sidebar (PRINT · EMAIL · SMS · IN-APP · RETARGETING) filtered by the touchpoint bar. PRINT: today’s 3 Next Service Due stickers (from MK’s slide), a NEW QR sticker template, the service folder with the A-Player technician, a neighbor door hanger and a voucher card. IN-APP: 10 phone screens from the delivery-app reference (upsell coupon, GPS tech map, About tech, arrived coupon, job done, tip, rating/NPS, referral, next service due, 6-month). RETARGETING: audience/window/exclusions/creative per step, suppression while booked. Reminder ladder for next service due across channels. Personal tech details only with consent; no financial info. |
| 89 | Follow-up SMS | Follow-up texts added where they earn their place: SAL (+24 h not booked), Booked and Rebooked (day-before reminder, reply C/R), Completed (+24 h no rating; day 5 coupon reminder, V1 departments / V2 same trade), Referral (day 3 not shared), Cancelled (+48 h not rebooked), PM (+3 and +7 days), 6-month (day 3 last reminder). None on On My Way / Arrived. All ≤160 chars, brand first, STOP on marketing ones; stop rules in the fix list. |
| 88 | NEW split into V1 cross-book / V2 same-trade upsell | Each NEW proposal now comes in two versions chosen by the trades at the customer’s location: **V1** (2+ trades) cross-books other departments (top-department coupon HOME2 + area departments); **V2** (single trade) upsells more services from the same trade (add-on coupon + 3 same-trade services with free quotes). Applies to SAL, Booked, On My Way, Arrived, Completed, Cancelled, PM and the 6-month check-in (Referral and Rebooked stay single). Files renamed `emails/new/<tp>-v1.html` / `-v2.html`; SMS regenerated; V1/V2 filters work on the NEW set. |
| 87 | 6-month check-in after PM Notice | Moved out of PM Notice into its own last step, **9 · 6-Month Check-in** (code TP9 · New), with a comparison against today’s win-back emails (Completed step 3, PM step 1). Rail now 10 steps. |
| 86 | 6-month check-in if no bookings | New proposal TP8 · 6-mo (`emails/new/six-month-checkin.html`): day 180 after the last job, only if nothing booked since. “Hi Sarah, how’s everything at home? It’s been 6 months since Razmik finished your electrical repair”, 6-month home checklist (HVAC tune-up, water heater flush, appliance check, “Same issue back?” call), coupon 10% off any service for 14 days (sample BACK10), Passport card for members / “See how Passport works” for non-members, SMS 156 chars. Suppress if PM due within 30 days or rating 0–6. |
| 85 | NEW set for every touchpoint | Upsell + cross-book proposals added as “TPx · New” to SAL, Booked, Arrived, Completed, Referral, Rebooked, Cancelled and PM (On My Way already had one): shared template, one coupon each, 3 next-best departments (HVAC, Plumbing, Appliance / Air duct), Passport card for members, rating gate in Completed, 1-tap rebook + reason in Cancelled, was→now in Rebooked, bundle yearly checks in PM; SMS 1 transactional + SMS 2 marketing-consent per touchpoint. Files in `emails/new/`. |
| 84 | Passport link for members | Email TP2 · New: members-only card under the coupon (`{% if customer.passport_member == true %}`): “Passport member · More offers are waiting in your Passport · Open my Passport offers” → {{passport_url}}. SMS 2 member variant adds “More member offers: {{passport_url}}” (136 chars). Preview strips Liquid tags and always shows the member card. |
| 83 | Upsell as coupon + SMS | Add-on box restyled as a dashed coupon (“✂ Coupon · today’s visit only”, {{upsell_code}} sample SAFE199, terms line). Two SMS added to TP2 · New: SMS 1 transactional for everyone (“{{brand}}: {{tech_name}} is on the way, arriving {{eta_window}}. {{tech_repairs}} repairs, {{tech_reviews}} 5-star reviews. Track: {{tracking_url}}”, ~134 chars); SMS 2 coupon only for marketing-SMS consent (“While {{tech_name}} is there: {{upsell_short}}, today only. Show code {{upsell_code}}. Reply STOP to opt out”, ~105 chars). Note: GSM-7 only (hyphen, no ★). |
| 82 | “Tech on the way” redesign proposal | New email `emails/tech-on-the-way-v3.html` (Customer.io-ready, table layout, inline styles): live-text tracker, technician headshot with gold ring, “{{tech_name}} is on the way · Arriving {{eta_window}}”, proof stats ({{tech_repairs}} repairs, ★★★★★ {{tech_reviews}} five-star reviews; sample 1,657 / 1,600+ for Razmik), two-line copy, Track + Call buttons, one trade-matched add-on (“While Razmik is there”, sample $199 Electrical Safety Check), footer with address + preferences. Added to On My Way as TP2 · New with a 3-column comparison; fix items list the new data fields to wire. |
| 81 | Create MD | `docs/TRANSACTIONAL-WORKFLOW.md`: journey table, cross-journey fix list, every email by step with subject/offer/CTA and its fix items (generated from the page data); conversation log updated through Oct 20. |
| 80 | Merge previous Transactional into Transactional Workflow | The old tab is removed from the tab bar and placed inside Transactional Workflow as a second sub-view, “Booking workflow & QA flow” (its own Booking Workflow / QA flow sub-tabs kept). #transactional opens that sub-view; #transactional-workflow and #appointment open the email library. Assistant search jumps updated. |
| 79 | Appointment → Transactional Workflow | The Appointment tab is renamed **Transactional Workflow** and moved before Members (route #transactional-workflow; #appointment still works). The older Transactional Workflow tab is kept, renamed “Transactional (previous)”, to avoid two tabs with one name. |
| 78 | PM Notice moved to the end | Journey order now: 0 Serviceable SAL · 1 Job Booked · 2 On My Way · 3 Arrived · 4 Completed · 5 Referral · 6 Rebooked · 7 Cancelled · 8 PM Notice (6–12 months after). Codes renumbered (TP6 Rebooked, TP7 Cancelled, TP8 PM). |
| 77 | Job Arrived email | “Your Technician Has Arrived” (plain text) added to TP3 with a today / On My Way / recommended table. Fix items: hidden BOM in the shared signature tel: tag (blocker; same snippet as SAL, Rebooked, Cancelled), “click on the brands below” with nothing below, review ask with no link and before the job ends, appliance/gendered copy, no on-site upsell offer, off-design. Every touchpoint now has its email in the library. |
| 76 | Job Cancelled email | Job Cancelled export is byte-identical to the Serviceable SAL welcome offer (“…haven’t had the chance to experience our quality… To welcome you… 10% off, 2 days”). Added to TP8 with a today / SAL / recommended table and fix items: blocker (cancelled customers get the new-lead welcome, no cancellation confirmation, promo inside a Transactional workflow), no rebook path or reason capture, discount-for-cancelling risk, plus the SAL issues (hidden BOM, no unsubscribe, 2024 test tracking link). All 6 live workflows now have their emails in the library. |
| 75 | Job Rebooked email | “Your Appointment Has Been Rescheduled” (plain text, transactional, uses {{snippets.brandPhone}}) added to TP7 Rebooked with a comparison against Job Booked. Fix items: hidden BOM in the signature tel: tag (blocker), no old → new time or calendar invite, off-design vs the Booked template, call-only rescheduling, no preheader/footer. |
| 74 | Serviceable SAL before Job Booked | New TP0 Serviceable SAL (lead in a served area, not booked): two welcome-offer exports (10% off first service, “valid 2 days”) with byte-identical bodies and different subjects (“A Special Welcome Offer Just For You: Get 10% Off!” / “Exclusive 10% Discount on Your First Service!”). Fix items: hidden BOM inside {{snippets.brandPhone}}, no unsubscribe/footer in the body, run as subject A/B test, phone link is a Customer.io tracking URL from a 2024 test (email_id “example”), always-on 2-day deadline, no booking button. Rail now 9 steps. |
| 73 | Preventive Maintenance Notice (Electrical) | New TP6 PM Notice (6–12 months after the job), Electricians Service Team: check-in (“we will remind you in 4 months”) + 5 past-due notices (Action required, FACT, spark story, Don’t wait, Last call), step-by-step table, 12 fix items incl. blocker: status-box call button href “+18889777114” without tel:; 4 months vs 6–12 month rule; typos “doe” / “Eletrical”; “ends tomorrow” on an always-on offer; unsourced claims/story; April promo UTMs; alt text names wrong techs. Rail now 8 steps. Page ≈14.6 MB (limit 16 MB). |
| 72 | Job Completed + Referral for Promoters | Job Completed (TP4) now has 3 emails in content order (service complete + 10% within 7 days; “How’s your appliance working now?” check-in; 10% returning-customer offer). New TP5 Referral program (Promoters), not live yet: invite + reminder. Step-by-step comparison tables. 13 new fix items, incl. 3 blockers on the reminder (hard-coded “Hi Belinda”, button links to #, no unsubscribe/footer), appliance-only referral program, no promoter gate, a third phone number (888) 996-5659, two conflicting 10% offers. |
| 71 | Tech On My Way added (Touchpoint 2) | Both “Tech on my way” exports (V1 all trades: UV Light hero + 6 tiles; V2: $99 Hot Water Flush hero + $1 HE Appliance diagnostic) added under On My Way with live previews (tech_name sample “Alex”), V1 vs V2 table that follows the selected touchpoint, and new issues: countdown restarts in each email, no ETA/photo/tracking, same tiles repeated from Job Booked, V2 carries two trades, alt text vs image mismatch on the $1 diagnostic. |
| 70 | Appointment tab = live transactional workflows | Rail now mirrors the 6 Customer.io automations (Job Booked, On My Way, Arrived, Completed, Rebooked, Cancelled) with event, category, channels and 30-day sends (screenshot Oct 20, 2026). New “Transactional workflows” table with bars, plus 3 findings: tech-triggered sends ≈14% / 10% of Job Booked sends; Job Completed starts on job_sold and is filed as Marketing; cancellations ≈27% of booking sends. |
| 69 | Appointment library (Touchpoint 1) | New **Appointment** tab after Members, built like the Members library: 7-touchpoint rail (Booked → Reminder → On my way → Arrived → Job done → Rate & refer → Next service), version filter, search, live preview of both Customer.io exports (images embedded), sample-data / merge-field toggle, meta panel, V1 vs V2 table, 10 fix-before-sending items (hard-coded 844 number on tiles, no postal address, subject/body mismatch, unnamed countdown, Book Now dials phone, image-only headline, no preheader). Route `#appointment`. |
| 68 | Tickers → Performance leaderboard layout | Kept the animated ticker tape on top; replaced the cards with MK's admin-style sortable leaderboard (Symbol, Group, Last, 1D, 1W, 1M, 3M, YTD, 1Y, Vol, From 52w hi, Trend), group filters, CSV, click-row 'For Home Alliance' notes. Seeded with the Oct 19 admin snapshot (17 symbols); `api/quotes.js` now computes all timeframes, volatility and 52w distance from 1y daily closes and adds 8 HA-context symbols live. |
| 67 | Home-services finance tickers on Benchmark | Ticker tape + 15 company cards (FTDR, ROL, RTO, TTAN, ANGI, LII, CARR, TT, WSO, AOS, WHR, HD, LOW, XHB, SPY) with latest results and what each means for HA; live prices via api/quotes.js on Vercel (Yahoo Finance or Finnhub), dated snapshots elsewhere; growth vs HA chart; 6 industry trends → actions |
| 66 | Gantt checkboxes + team updates | Checkbox per task (owner, supporter or Michele can tick), progress bar, shared save on Vercel via api/tasks.js (Upstash Redis), local fallback, Updates panel, 🔔 toast for new updates since last visit, optional Resend email to Michele |
| 65 | Gantt project: Workflows Optimization | 19 tasks from MK's notes + Oct 19 Fireflies meeting (workflow dashboard, Job Sold + Referral, Job Booked redo, tech on the way / arrived, CSAT/NPS → referral, lifecycle chain + PI, service-due sticker, PM triggers EL+HVAC, SERVICE job-type field Oct 26, HE frequency with BUM, PM cadence AR HE/PL/ADC, PM dashboard, 5-number SMS rotation, 6–12 mo follow-up, nurture, themes, CTA optimization); owners Victor/Diego/Nazar, Michele accountable |
| 64 | Gold and blue palette (G4 Business reference) | Navy/blue + gold theme across tabs: navy tab bar with gold underline, blue primary, gold accents; status colors (red/green) and category colors kept; light + dark |
| 63 | MD of the conversation (update) | This file, refreshed through Oct 18 |

## Tabs today (left to right)
I-MOS · Calculator (4C Calculator · Retention Point · MoM + 2027) · Members · Non-Member (Weekly workflow · Planner sheet) · Brand Logic (Brands · SMS · Email · Leadscore) · Transactional Workflow (Booking Workflow · QA flow) · 10 Personas (Journeys · DNA · Gantt chart) · Database (Reachable · Cohorts) · Competitive Benchmark · AI-ADVISORS. Floating: project assistant mascot (top left).

## Key decisions
- One self-contained HTML; no build step; republished to the same artifact URL with the `sample` capability (assistant + AI-Advisors live answers).
- Real data labelled **Actual**; assumptions labelled **Modelled / Projected / Illustrative**.
- Customer PII removed from the page; sample names only; AI home photos are illustrative, not real customer homes.
- Persona 4 (B) is the target operating model (reactive, AI in the loop); 4 (A) kept for comparison and for the human-in-the-loop path.
- Q4 2026 uses the **4C Core plan** by default (BHAG #1 and Scorecard plan selectable); monthly figures used where the plan sheet's Total column disagrees.
- AI-Advisors use Jay Abraham-associated frameworks but never present themselves as him; framework benchmarks are labelled as claims to test.
- Owners: Michele (Head of AI Customer Lifecycle, accountable), Victor (AI Product Manager), Diego (AI-First Omnichannel Manager), Nazar (AI-driven Database Sourcing Manager).
- One promotional email a week cap where personas allow; transactional and safety messages always go.

## Open questions for MK
- Q4 plan sheet: Total column doesn't match the months (Books 3,026 vs 3,469; Revenue $1,809,787 vs $1,755,516; ADL $650 vs $550); department rows 3,008 vs header 3,449.
- 4C Scorecard: 2025 bookings 12,310 (annual cell) vs 11,067 (months); #REF!/#DIV/0! in runs, closing ratio, ADL rows.
- Real Home Alliance Points rules (earn rate, $ per point, redemption cap).
- `.pro` domains for HVAC Alliance Expert, Electricians Service Team, 5 Star Air, 5 Star Best Plumbing; concierge names; SMS sender number.
- Which intent data providers are licensed; dispatch feed for tech availability by ZIP.
- Cause of the October phone opt-out wave (−42%).
- Membership renewal rate (to compare with competitors' ~80%).
- 20% vs 25% labor offer; real holiday offers.
- Finance inputs for the leverage calculator (EBITDA margin, variable cost) and holdout results for iROAS.
- Customer.io connection via Composio still needs MK's API keys.

## Suggested next steps
1. Start holdouts on Email, SMS, Outbound and Retargeting (I-MOS weeks 7–8) and replace modelled lifts and iROAS defaults.
2. Fix the email blockers (merge fields, unsubscribe, links, subjects) before any send.
3. Call the 1,492 past-due PM customers with Live Coach; measure the January PM booking rate.
4. Correct the Q4 plan sheet totals and the Scorecard errors, then refresh MoM + 2027.
5. CSR call scripts for Persona 4 (A); Personas 5–10.
6. Connect Customer.io and dispatch to replace illustrative tech availability and campaign metrics.

## 92. Landing Page channel + Non-member nurture campaign (Oct 21)
Request: add Landing Page as a channel; add the 5 Star Appliance Repair reference as a nurture example on Non-members (Email 1 offer 1, not opened → offer 2, with retargeting ads and landing page alongside).
- LANDING PAGE added to the channel sidebar on Transactional Workflow (9 pages, one per touchpoint), Members (4) and Non-members (5, incl. today's reference LP and NEW LP 1 / LP 2).
- Non-members → new "Nurture campaign" subtab: Day 0 Email 1 (25% off labor) + Ad 1 + LP 1; Day 3 not opened → Email 2 offer 2 ($1 high-end diagnostic) + Ad 2 + LP 2; opened not booked → reminder; Day 10 last call; exit on booking, 10% holdout.
- Flags: 25% vs 20% offer mismatch, Ad 2 landing on the wrong offer, resetting countdown, "Limited appointments", 6-field form, off-season copy.

## 93. Transactional Workflow on the 10 Personas timelines (Oct 21)
Request: add the transactional communication for members and non-members to the 10 Personas timeline.
- Personas 1 (non-member), 2 (member) and 3 (member → lapsed week 20) now run the 10-step Transactional Workflow instead of the old transactional items: W1 SAL (non-member only), Job Booked, On My Way, Arrived, Rebooked/Cancelled (only if); W2 Job Completed, NPS + referral; W21 next service due card + ads; W25 PM Notice; W26 6-Month check-in (keeps the follow-up call); W27 follow-up SMS; W28 voucher card.
- New lanes: IN-APP, LANDING, PRINT / MAIL alongside EMAIL, SMS, ADS, CALL. Non-member copy uses V2 same-trade upsell + Passport invite; members use V1 cross-book + Passport offers; Persona 3 gets rejoin copy after the lapse.
- Personas 4 (A) and 4 (B) unchanged (they already have their own AI-led transactional set).

## 94. Members → Nurture workflow, coupon of the week by intent signal (Oct 21)
Request: add a Nurture workflow on Members with emails for 5 trades, coupon of the week tied to intent signals, following the Home Alliance membership email reference, with custom fields.
- Members tab now has subtabs: Email library | Nurture workflow.
- Flow: signal → intent score picks the trade (≥ 0.6) → coupon-of-the-week email (+2 next-best trades) → +72 h not opened: push/SMS → opened no click: retargeting + LP → day 5 clicked no booking: reminder → booked: exit to Transactional.
- 5 emails (emails/member-nurture/coupon-{ar,hvac,el,pl,adc}.html): Fridge Repair $50 OFF FRIDGE50, HVAC Repair 10% OFF HVAC10, Breaker Repair $60 OFF BREAKER60, Drain Cleaning $25 OFF DRAIN25, Air Duct Cleaning $75 OFF DUCT75 (amounts from the Coupons sheet; codes are placeholders).
- Custom fields: customer.* (first_name, passport_tier, address_line, zip, ham_name, home_health_score, member_savings_ytd, member_since), intent.* (trade, signal, score), coupon.* (code, amount, expires, url, hero_image), brand.* snippets. Preview toggles sample values / raw Liquid; Copy HTML.
- Reference fixes: two phone numbers (855 946-3605 vs 877 777-0796), hard-coded © 2025, vague "limited time" → real end date.

## 95. One email with all 5 trades' coupons + home-services hero (Oct 21)
- The member nurture is now ONE weekly email with the coupon of the week from all 5 trades (Appliance $50 off fridge repair, HVAC 10% off repair, Electrical $60 off breaker repair, Plumbing $25 off drain cleaning, Air Duct $75 off cleaning).
- The intent signal sets the ORDER: the top trade is first, larger, and tagged "Picked for your home"; the other four follow under "More member coupons this week".
- Hero image: new illustration of one home with the 5 trade icons (replaces the tech headshot).
- Files: emails/member-nurture/coupons-all-trades.liquid.html (template with `{% for c in customer.coupons_ranked %}`), plus 5 rendered orders coupons-all-trades-lead-{ar,hvac,el,pl,adc}.html. Custom field `customer.coupons_ranked` (trade, service, amount, code, url, problem_line).

## 96. 10 Personas: weekly trade cadence + clickable email previews (Oct 21)
Request: reorganize Personas around a weekly email + SMS for Appliance Repair High End, Appliance Repair Low End and HVAC, a follow-up email with a better offer for non-openers, and Plumbing, Electrical, Air Duct Cleaning, Painting and Cleaning every other week; show them on the clickable touchpoints.
- Personas 1, 2 and 3 use the same cadence (P1 from week 3, P2/P3 from week 10 after onboarding); it replaces the old weekly nurture and coupon-of-the-week/month items. Holiday, seasonal, anniversary, new-service and nature weeks still replace the regular sends (newsletter weeks don't).
- Every week: 3 emails (Tue) + 3 SMS + 3 follow-ups (Fri, Day +3, only to non-openers: new subject, better offer, 72 h). Even weeks: + 5 emails (Wed).
- Offers: ARHE $1 diagnostic → $1 + 20% off labor (HE1/HE20); AR LE 25% off labor → + free diagnostic (LABOR25/LABOR25FD); HVAC 15% → 20% + free filter (HVAC15/HVAC20); PL $1 diagnostic; EL free service call; ADC free estimate; PT free minor drywall repair; CL 3rd cleaning free. Better offers and codes are proposals.
- 11 email files in emails/personas-weekly/ (8 main + 3 follow-ups), each with a trade illustration and a member / non-member Passport block.
- Clicking any EMAIL box now shows the week's real emails as tabs (rendered preview + subject, preheader, offer, code, timing, SMS). Transactional weeks show the matching Transactional Workflow email (V1 members, V2 non-members).

## 97. Non-member: Figma email archive + Figma designs on the weekly workflow (Oct 21)
Request: add all weekly emails from "4C all_brands_email_copy (FIGMA DESIGN)" (Google Sheet 1lEbyeEMfVi8B4vrShXWCaaNK6dY8XWySXOLeuz5abEw) to the non-member library, with the Figma designs as images, on the weekly nurture campaigns.
- New Non-member subtab "Figma emails (737)": every trade-brand email (5 Star Appliance Repair LE/HE, HVAC Alliance Expert + HVAC Sales, Electricians Service Team, 5 Star Best Plumbing, 5 Star Air, Cleenora, Painting, cross-brand lead follow-ups), grouped by campaign week (2025 W9–W53, 2026 W2–W42), with trade filter, week filter, search, coupon codes, top banner, full copy and "Open in Figma". Membership emails (224) left for the Members tab.
- Weekly workflow: new "Figma designs · 2026 W##" strip under the selected planner week.
- Data in data/figma-emails.json (1.3 MB, loaded on demand to keep index.html under 16 MB).
- Images: NOT added yet. The Figma connector is linked to michele.k@homealliance.com on a Starter team without edit access to the Home Alliance files, so screenshots/exports are refused. Cards show a copy-based preview until renders are added (data field `img`).

## 98. 4C Retention Ecosystem: 4C RETENTION + 4C LEAD GENERATION (Oct 21)
- Page renamed "4C Retention Ecosystem"; a switch above the tabs: 4C RETENTION (everything built so far) | 4C LEAD GENERATION (new, `#lead-generation`).
- 4C Lead Generation project (B2C email + SMS, AI-led, outreach CRMs): overview funnel, lead sources & consent, 6 email/SMS sequences with phone mockups, AI agent rules, CRM stack options, compliance, 90-day plan with owners and KPIs. See docs/PROSPECTING.md.

## 99. Lead Generation: sidebar navigation + pipeline board (Oct 21)
- 4C Lead Generation sections moved into a left sidebar (same style as the channel sidebars): Overview, Pipeline, Lead sources & consent, Email & SMS sequences, AI agent, CRM stack, Compliance, 90-day plan & KPIs.
- New Pipeline: 7 stages (New, Contacted, Qualifying, Slot offered, Booked → 4C Retention, Nurture, Closed) with stage rules/SLAs, 14 sample leads, source filter, "needs a person" filter, drag-and-drop between stages and a lead detail panel. Sample data only; the live board reads the CRM.

## 100. Lead Generation: B2C Database from brokers + intent enhancement (Oct 21)
- New sidebar item "B2C Database", structured like a prospecting platform (ZoomInfo-style): Search with filter panel, results table, household profile, bulk actions; Lists; Intent signals; Field dictionary (103 custom fields in 9 groups); Broker purchase workflow and channel rules. 20 fictional sample households. See docs/PROSPECTING.md.

## 101. In-house Figma Email tab (Oct 21)
Request: replicate the Figma page Email-Templates-HA (file vY5zKmQDZBBI8H9AXKgNqC, Page 1) with everything on it in a new tab.
- New 4C RETENTION tab "In-house Figma Email" (`#inhouse-figma`): Canvas view (all 619 top-level frames at their Figma positions; drag, wheel/± zoom, fit; labels; search highlight), Grid view (cards in canvas order with mini layouts), and a frame panel (layout + copy rebuilt from the file structure, real Figma render where available, brand, coupon codes, size, position, all copy top to bottom, Open in Figma).
- Data: data/inhouse-figma.json (619 frames, ~33K elements: text with full copy, image boxes, backgrounds, lines) + data/inhouse-figma/*.jpg (12 real renders).
- Limit: Figma's Starter plan MCP cap stopped the renders after 12 frames; colors/images for the rest need a Dev/Full seat on Home Alliance's paid plan. Re-running the download script fills them in with no page changes (files named by node id).

## 102. Renamed 4C Lead Generation → 4C Prospecting (Oct 21)
- Switch, section title, sidebar heading and docs now say 4C PROSPECTING; deep link `#prospecting` (old `#lead-generation` still opens it). Doc moved to docs/PROSPECTING.md.

## 103. In-house Figma Email moved to a Non-Member subtab (Oct 21)
- Removed from the main tab bar; now Non-Member → "In-house Figma Email" (after Figma emails). `#inhouse-figma` opens it directly. Non-Member subtabs scroll sideways on phones.

## 104. AI-OFFICE tab, game mode (Oct 21)
Request: a videogame-style AI-OFFICE tab (reference: Infuser Skilltree map) with an AI agent for every team member.
- New tab AI-OFFICE (`#ai-office`) with MAP | DASHBOARD | LIST and skill search.
- MAP: office tower (one lit floor per agent), particle background, 4C CORE orb, and a pannable/zoomable skill tree. Agents: COMMANDER (MK, Head of AI Customer Lifecycle), ARCHITECT (Victor, AI Product Manager), MAESTRO (Diego, AI-First Omnichannel Manager), SCOUT (Nazar, AI-driven Database Sourcing Manager), FRONT DESK (shared customer-facing agents). 33 skills marked Live / Building / Locked; agent card with level, XP, stats, skill details and scripted "Talk to" replies.
- DASHBOARD: agent cards, quest board from the 90-day plan (checkboxes add XP, saved per browser), leaderboard, achievements. LIST: every skill with owner, status, inputs and outputs.

## 105. AI-OFFICE: office building view (Oct 21)
- New default view OFFICE (before MAP): a 5-floor office building with the "4C · AI-OFFICE" roof sign, beacon, side elevator, and one themed floor per agent: Penthouse 5F COMMANDER (KPI wall), Lab 4F ARCHITECT (whiteboard), Studio 3F MAESTRO (screens), Data Center 2F SCOUT (server racks), Lobby 1F FRONT DESK (reception). Each skill is a workstation: bot working at a lit monitor (live), blinking monitor (building) or empty locked desk. Click a floor or desk to open its card.

## 106. AI-OFFICE: high-tech tower, floor blueprints, team interactions (Oct 21)
- OFFICE view rebuilt in three panels: (1) a tapered glass tower with spire, beacon, halo rings, an orbiting drone, flowing data streams and a core spine; data packets travel between floors when agents hand work to each other; (2) an architectural blueprint of the selected floor (grid paper, walls, core/lift, stairs, the team member's office, a huddle table for humans + agents, one workstation per skill with live/building/locked status, dimension lines, title block, north arrow), with bots walking between desks and the huddle and the team member walking to the huddle; (3) a Team activity feed and on-floor speech bubbles cycling through sample hand-offs (MK approves, SCOUT delivers a list to MAESTRO, FRONT DESK escalates a gas smell, etc.).
- Tab bar: tighter padding; tab subtitles hidden under 1600 px so AI-OFFICE stays visible.

## 107. AI-OFFICE more human (Oct 21)
- Robot icons replaced by illustrated people (face, hair, outfit in the agent's color, small glowing earpiece marking them as AI): Ava · COMMANDER (with MK), Leo · ARCHITECT (with Victor), Mia · MAESTRO (with Diego), Sam · SCOUT (with Nazar), Joy · FRONT DESK (with the CSR team). Used on the map, tower floors, agent cards, dashboard, and the activity feed.
- Blueprints: agents seated at live desks and walking as top-down people, the team member walking to the huddle with their name, plus a café, lounge and plants on every floor.

## 108. AI-OFFICE located in Century City, Los Angeles (Oct 21)
- Tower now stands in an LA sunset scene: purple-to-orange sky, setting sun, Hollywood Hills / Santa Monica Mountains silhouette, a lit skyline with the Century City twin triangular towers, palm trees, and an "Avenue of the Stars" street sign; "CENTURY CITY · Los Angeles, CA" with a live Pacific-time clock under the tower.
- Header says CENTURY CITY · LOS ANGELES; blueprints note "Century City, LA", windows facing the Hollywood Hills, and the location in the title block.

## 109. AI-OFFICE always visible (Oct 21)
- On laptop widths (1280–1440 px) the AI-OFFICE tab was pushed off the right edge of the tab bar. The tab bar now wraps onto a second row on desktop, and AI-OFFICE also has its own button in the top switch (4C RETENTION | 4C PROSPECTING | AI-OFFICE). Direct link: #ai-office.

## 110. D7 tab: Cleenora Workflow Simulator (Oct 22)
- New 4C RETENTION tab "D7" (before AI-OFFICE, `#d7`) that embeds the attached "Cleenora Workflow Simulator (DRAFT)" unchanged: 11 GoHighLevel workflows (WF-01 Quote follow-up … WF-11 Retargeting) with scenarios, Play/Prev/Next, what the contact receives, and the live contact record.
- Runs in its own frame (its styles and scripts stay separate from the page) and loads only when the tab is opened. Source file kept at d7/cleenora-workflow-simulator.html.

## 111. Retention Point: preventive maintenance brief by brand (Oct 22)
- Calculator → Retention Point now ends with "Preventive maintenance brief by brand" (from the PM Brand Briefs deck, link included): a brand switch for 5 Star Appliance Repair High-End, HVAC Alliance Expert, The 5 Star Plumbing, Electricians Service Team and 5 Star Air. Each shows slide 1 (service · our offer today · LA/OC competitor price · PM period · suggested PM option, with sources) and slide 2 (the offer, more profitable, more likely to book, ask, copy fix), plus a price-test calculator: bookings change = (new ÷ old)^E, preset to each brief's numbers (AR 249→299 at −0.4: −7% bookings / +12% revenue; Air 179→249 at −0.6: +14%; EL 135→99 implied −1.39: +54% bookings).
- "How the suggestions were built" (market, clock, elasticity). Competitor prices checked Oct 22, 2026; all prices pending Ops margin approval. Text kept in docs/PM-BRAND-BRIEFS.txt.

## 112. 4C Prospecting → Lead to Loyalty (Oct 23)
- New sidebar item "Lead to Loyalty": full lead-to-retention strategy (7 stages, owners, KPIs, plays, links into the tabs that run them), a channel × stage map, principles, and an editable 12-month P&L (revenue, gross profit, acquisition, retention, contribution, CAC, LTV:CAC, payback). Assumptions are labeled; replace with actuals. See docs/PROSPECTING.md.

## 113. Tech Assignment (dispatch source) + AI-agent managed
Request: "as a dispatch source replicate this system add as the tech assignment. The whole project should be fully managed by AI-Agents." (reference: job-assignment-efficiency.vercel.app, CSR SOP)
- New 4C RETENTION tab **Tech Assignment** (#tech-assignment), sidebar modeled on the Tower dispatch app: Dispatch Board, Coverage Finder, Daily Entry, Dispatcher KPIs, Dispatch Groups, Technician Payments, Outbound, Team Schedule, CSR SOP, AI control.
- Dispatch Board: the DISPATCH agent scores technicians (tier, HE/LE, skill, free capacity, ZIP coverage), explains every pick, and flags for a DSR: after 12 PM LA no same-day; outside coverage → OOSA request + tag; all at capacity → DSR decides. Simulated LA hour selector. Sample roster and jobs only.
- KPIs use the floor weights: revenue 35% (full share at 85% of goal), response reliability 25% (99% within 120 working seconds), job efficiency 20% (98%), group ADP 20%; ADL bands A/B/C.
- AI control: function → agent → human approval point for the whole ecosystem.
- AI-OFFICE: 6th agent **Max · DISPATCH** (DS-06, floor L2, 6 skills, 4 quests, interactions); tower now 6 floors.

## 114. Tech Assignment in 4C Prospecting
Request: "add Tech Assignment to 4C PROSPECTING project"
- New sidebar item **Tech Assignment** in 4C Prospecting (after Pipeline): prospect-to-dispatch header (Lead captured → AI qualifies → Job booked → DISPATCH assigns → First job done → 4C Retention) plus the full Tech Assignment workspaces as a horizontal sub-nav.
- One shared module and state (window.__ta): dispatch runs and KPI edits show in both 4C Prospecting and 4C Retention.

## 115. Tech Assignment and AI-OFFICE removed from the 4C RETENTION tab bar
Request: "remove them both from 4C RETENTION project, leave AI-OFFICE on AI-OFFICE project only and tech assignment only on 4C PROSPECTING"
- 4C RETENTION tabs no longer show Tech Assignment or AI-OFFICE.
- AI-OFFICE is its own project from the top switch: hides the Retention tab bar and highlights only AI-OFFICE; 4C RETENTION returns to the Calculator.
- Tech Assignment lives only in 4C Prospecting; #tech-assignment opens it there.

## 116. Appliance PM Care Visit emails on Touchpoint 8 (PM Notice)
Request: add Care_Visit_Email_Previews.html to Appliance preventive maintenance communication on Touchpoint 8: PM Notice.
- Transactional Workflow → Touchpoint 8 now has two groups: Electrical (existing) and **Appliance Preventive Maintenance · HE refrigerator Care Visit (5 Star Appliance Repair) · $249 vs $299 test**.
- 12 emails (6 steps × Group A $249 / SZCARE249 and Group B $299 / SZCARE299): Day 0 Status, Day 2 What we check, Day 7 Flow A story / Flow B Q&A, Day 20 Reminder, Day 22 Last reminder.
- HTML stored in data/care-visit-emails.json (loaded on demand) and emails/care-visit/*.html; fixed 640px emails scale to fit the preview.

## 117. Onboarding video + SOP
Request: "create an onboarding video and SOP written on how to find all the information here"
- New **START HERE** button in the top bar (#start): 3-minute tour video (video/onboarding.mp4, 1280×720, captions on screen), the 6-step SOP, a searchable "Where do I find…" table with 34 Go → shortcuts, house rules and a map of the ecosystem.
- Same SOP as docs/ONBOARDING-SOP.md.

## 118. Onboarding video with sound, introduced as the Retention CRM
Request: "put sound on, introduce as retention CRM"
- Re-recorded the tour with a voice-over (26 narrated scenes, offline Piper TTS voice en_US-lessac), timed scene by scene; title card "4C Retention CRM". Length 3:52. MP4 (H.264 + AAC) and WebM (VP9 + Opus).
- Start Here hero now reads "How to find everything in the 4C Retention CRM". Narration script in docs/ONBOARDING-SOP.md and docs/ONBOARDING-NARRATION.json.

## 119. SMART TOOLS tab (SMS · Email · Outbound Script · Retargeting)
Request: "create a tab call SMART TOOLS, add as the subtab SMS, Email, Outbound Script and Retargeting"
- New 4C RETENTION tab **SMART TOOLS** (#smart-tools), sidebar with four builders sharing trade, brand, phone, offer, end date and link (7 trades, 8 goals, 4 audiences).
- SMS: 3 drafts per trade/goal, editable final text, live segment counter (GSM-7 vs Unicode), phone preview, checks: brand first, STOP line, segments, branded link, spam words, caps, consent + quiet hours, tokens.
- Email: 3 subject + preheader options with scores, branded HTML email (preview, copy, download), CAN-SPAM and deliverability checks (unsubscribe, address, real end date, one CTA, alt text, 102 KB clip).
- Outbound Script: opening, discovery questions by trade, value, offer, two-slot close, voicemail, follow-up text, objection handling, 13 call outcomes, read time; checks for DNC, calling hours, AI-voice consent/disclosure, CA recording notice, same-day rule; download .txt.
- Retargeting: Meta, Google Search RSA, Display/PMax, YouTube; 6 audiences with inclusions/exclusions/window/cap; ad copy with per-field character counters; UTM link; ad preview; policy checks.
- Added to the START HERE finder and map.

## 120. SMART TOOLS: SEO, GMB, Google Ads, LSA, Landing Pages, Blogs, Paid Media
Request: "Add other marketing channels such as SEO, GMB, Google Ads, LSA, Landing Pages, Blogs, Paid Media"
- Sidebar now grouped: Messaging (SMS, Email, Outbound Script) and Acquisition (SEO, GMB, Google Ads, LSA, Landing Pages, Blogs, Paid Media, Retargeting). City/market field added.
- SEO: keyword cluster (service + city, near me, emergency, cost, HE brands), title/meta/H1/URL with counters, FAQ, LocalBusiness + Service + FAQPage JSON-LD, Google preview, internal links.
- GMB: offer/update/event posts (no phone in text, CTA button + UTM), review replies for 1–5 stars, Q&A seeds, profile preview.
- Google Ads: 4 ad groups with match types, 20 shared negatives, 15 headlines / 4 descriptions (fit to 30/90), sitelinks, callouts, preview, tracking checks.
- LSA: job types per trade, service area, profile bio, budget → leads → bookings → revenue/ROAS (editable assumptions), ranking and dispute rules.
- Landing Pages: message-matched page per traffic source with 4-field form, unchecked TCPA consent, click-to-call; live preview + HTML download.
- Blogs: 6 seasonal topics per trade, brief (title, keyword, meta, outline, CTA), E-E-A-T checks, download.
- Paid Media: budget split across 6 channels with editable share / cost per lead / booking rate → leads, bookings, cost per booking, ROAS; 70/20/10 and offline-conversion checks. All rates are labeled planning assumptions.
- 7 new rows in the START HERE finder.

## 121. SMS · AI smart reply after YES (upsell + cross-book)
Request: AI smart communication on SMS with as many custom fields as possible from the home address, after customers reply YES to promos with the CTA "To book your appointment reply YES"; do upsell and cross-book.
- SMART TOOLS › SMS now has two modes: Promo composer (new Draft 4 ends with "To book your appointment reply YES.") and **AI smart reply · after YES**.
- 82 custom fields in 9 groups (contact & consent, property from the address, home systems, appliances on file, service history, membership, promo, scheduling from Tech Assignment, context), searchable, CSV download.
- Clickable conversation: YES → virtual-assistant disclosure + 2 real slots → booked + 1 upsell (ADD) → 1 cross-book (BOOK) → Passport pitch (non-members). Branches: price question, safety words → live call, STOP, free text → human, outside coverage → OOSA.
- Offer scoring table shows every candidate, its score, the fields behind it and how the AI phrases it (data picks the offer; the message never recites home value or ownership).
- 3 fictional sample homes (Woodland Hills HE, Westside condo member, Northridge 1962 with Federal Pacific panel); Customer.io/Liquid template.

## 122. Automated pipeline on top of all channels + outbound follow-up list after SMS
Request: "after SMS create a list for outbound follow up. create as a pipeline the order. Add on top of all channels a pipeline and make all the communication fully automated with smart channels"
- SMART TOOLS opens on **Pipeline · automated**: 10 stages in order (New lead → Promo SMS → Replied YES/AI reply → Email follow-up → Outbound follow-up → Retargeting → Booked → dispatch → Upsell/cross-book → Nurture → Suppressed), each with its smart channel, owning AI agent, start rule and next-step rule, and an Auto / Approve switch.
- "Run automation" plays 12 days for 16 fictional customers; KPIs (booked, revenue at $479, booked by channel, automated actions vs human calls) and an automation log update live.
- A pipeline strip sits on top of every channel tool, highlighting where that tool sits in the flow.
- SMS › **Outbound follow-up list**: everyone the SMS did not convert, ranked by a 0–100 priority score, as a call pipeline (Call queue → Attempt 1 → Attempt 2 → Callback → Booked / Not interested / Retargeting / DNC). Outcome buttons move cards automatically (voicemail → auto-text with consent; 3 attempts → retargeting; DNC → suppressed everywhere); drag and drop; "Call next"; Script › opens the Outbound Script prefilled; CSV export.

## 123. Live Coach for every channel (SMART TOOLS)
Request: "add Live Coach: every channel (email, SMS, push, in-app, AI chat, AI voice, ads or mail) to AI TOOLS"
- SMART TOOLS › **Live Coach** (second item, under Pipeline) with 8 channels: AI voice, AI chat, SMS, Email, Push, In-app, Ads, Direct mail.
- Conversation channels (AI voice, AI chat, SMS): live transcript; each turn the coach shows detected intent, a sentiment meter, objections, the next best action, 3 suggested replies (tap to send; SMS shows characters/segments), compliance checks, customer context and live guardrails (safety words, STOP, human takeover).
- Broadcast channels (Email, Push, In-app, Ads, Direct mail): the draft is scored as you type (0–100 with fixes), then Launch plays simulated live results (opens/clicks/bookings, CTR, frequency, QR scans) with coach recommendations (A/B switch, resend to non-openers, refresh creative at frequency > 3, match-back for mail).
- Page size: moved the 1.76 MB Smart Calling audio to data/sc-aud.json (loaded on demand); index.html back to 14.3 MB.

## 124. SMART TOOLS and AI-ADVISORS moved to AI-OFFICE
Request: "place the SMARTTOOLS and AI-ADVISORS to AI OFFICE tab, and remove from 4C RETENTION"
- Removed both tabs from the 4C RETENTION tab bar.
- AI-OFFICE now has its own section bar: AI-OFFICE (the game) · SMART TOOLS · AI-ADVISORS. #smart-tools and #ai-advisors open inside AI-OFFICE.
- START HERE finder rows, map and SOP step 2 updated to "AI-OFFICE › …".

## 125. SELF-MANAGE + AI-OFFICE project renamed AI-FIRST
Request: "add another tab on AI-OFFICE called SELF-MANAGE create an end to end lead generation and customer retention self-managed process. Change the name of tab from AI-OFFICE to AI-FIRST"
- Top project button renamed **AI-FIRST** (sections: AI-OFFICE game · SMART TOOLS · AI-ADVISORS · SELF-MANAGE). START HERE texts and finder breadcrumbs updated; #ai-first and #self-manage links.
- SELF-MANAGE: a closed loop of 12 stages (Source → Capture & respond → Qualify & book → Dispatch → First job → Upsell & cross-book → Onboard & review → Maintain (PM) → Membership → Nurture → Win-back → Refer & lookalike → back to Source), each with an AI agent, KPI, target, status and smart channels.
- "Run a week" simulates 10 sense → decide → act decisions (budget shift Meta→LSA, missed-call text-back, geo pause on full capacity, SMS frequency cut, PM campaign, upsell A/B, review ask, member offer, mail drop for non-openers, promoter lookalike), each checked against editable guardrails (budget cap, CPA, ROAS, opt-out, frequency, CSAT, max discount).
- Autonomy levels 0–4, approval queue (approve/reject), decision log, auto-written weekly self-report and a kill switch. Sample week; numbers simulated.

## 126. SELF-MANAGE › SMART DASHBOARD (metrics, P&L, projections)
Request: "on self manage add a tab called SMART DASHBOARD, add main metrics updated daily, weekly and monthly. Add also P&L metrics and projections dashboard"
- SELF-MANAGE now has two views: Self-managed loop · **SMART DASHBOARD** (#smart-dashboard).
- Daily / Weekly / Monthly toggle (30 days, 13 weeks, 12 months; refresh daily 6 AM PT, Mondays, the 1st): 8 KPI tiles with change vs prior period and sparklines (revenue, bookings, leads, cost per booking, ROAS, lead→booked, 90-day repeat, SMS opt-out), revenue bar chart and leads-vs-bookings lines with hover tooltips, channel table, funnel.
- P&L for the period vs prior: job revenue, Passport, COGS, gross profit, marketing, contribution, tools, staff, operating profit, % of revenue; unit economics.
- Projections: Conservative / Base / Aggressive with editable assumptions (lead growth, booking-rate change, revenue per booking, cost per lead change, gross margin) → 12-month revenue, operating profit, bookings, spend/ROAS, chart (6 months actual + 12 projected, dashed) and table.
- Simulated data anchored to the 4C Calculator Q4 plan (~$527K/month, $598 per booking, ~10× ROAS); assumptions labeled.

## 127. AI GANTT + AI agents at the bottom of every page
Request: "create an AI gantt chart tab with all the activities, create an AI-Agent per position, have them executing the tasks and checking in, show inputs and outputs. Make each on a small figure on the bottom page and when needed to interact via prompt, show notification"
- AI-FIRST › **AI GANTT** (#ai-gantt): 26 Q4 activities (Oct 5 → Jan 3, 13 weeks) grouped by 6 positions, each run by its AI agent: Ava · COMMANDER (MK), Leo · ARCHITECT (Victor), Mia · MAESTRO (Diego), Sam · SCOUT (Nazar), Joy · FRONT DESK (CSR team), Max · DISPATCH (Dispatch team). Bars show progress and status (in progress, done, needs input, waiting on a dependency, not started) with a Today line.
- Task detail: inputs, outputs, dependencies, your answers and the agent's check-ins. Run agents / +1 day / Back to today; agents check in every simulated morning.
- Bottom dock on every page: a small figure per agent with live status; click for the current task, inputs/outputs, recent check-ins and an "Ask" box. When an agent hits a decision point it raises a notification toast and a badge; answer by prompt and the agent resumes (answers kept in this browser).
