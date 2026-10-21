---
title: Q4 4C AI Solutions — handoff for Claude Code
tags: [claudecode, home-alliance, crm, lifecycle-marketing, ai-automation]
owner: MK (Michele) · Head of AI Customer Lifecycle, Home Alliance
updated: 2026-10-18
artifact: https://claude.ai/artifact/67gtzX7QRhrrfdP5vc1ETY
repo: https://github.com/michelek-bit/Q4-4C-AI-Solutions
entry: index.html
---

# Read this first

- The whole app is **one self-contained `index.html` (~11 MB)**: CSS, JS, JSON data, JPEG images and MP3 clips are inline. No build step, no dependencies.
- Edit in place, then test with Playwright (see `docs/TESTING.md`). Keep the file self-contained (no external images/fetches).
- Hash routes: `#calculator` (default), `#members`, `#non-member`, `#brand-logic`, `#transactional`, `#personas`, `#database`, `#benchmark`.
- Labels matter: real data is marked **Actual**; assumptions are **Modelled / Projected / Illustrative**. Keep that convention.
- Customer PII never goes in the page (sample names only).

# Map of the app

| Tab (button → panel) | Sub-tabs (bar → panels) | What lives there |
|---|---|---|
| `t-calc` → `p-calc` | `calc-sub`: `calc-main` (iframe) · `calc-rp` | 4C Calculator (patched Vercel bundle in `calc-src`), Retention Point (PM expectations) |
| `t-lib` → `p-lib` | — | Members library: onboarding (`data`), event-based (`extra`), Passport event-triggered (`rt-new`), fix list |
| `t-non` → `p-non` | `np-sub`: `np-new` · `np-old` | Weekly workflow (designed emails/SMS/timeline) + planner sheet (`np-data`) |
| `t-brand` → `p-brand` | `bl-sub`: `bl-brands` · `bl-sms` · `bl-email` · `bl-score` | Brand tiers (leadscore column removed), SMS rotation, email reputation, Leadscore |
| `t-trans` → `p-trans` | `tw-sub`: `tw-new` · `tw-old` | Designed Booking Workflow (`tw-imgs` for slide crops) + QA slide |
| `t-pers` → `p-pers` | `pers-sub`: `pers-main` (Journeys) · `pers-dna` · `pers-gantt` | Journeys overview + 5 persona timelines; DNA (map, 3D brain, Zillow home, AI by channel); Gantt + projection |
| `t-db` → `p-db` | `db-sub`: `db-reach` · `db-coh` | Reachable contacts (`db-data`), cohorts/retention analytics (`ra-data`) |
| `t-cb` → `p-cb` | — | Competitive benchmark + animated retention-efforts matrix |

Floating: **project assistant** (`#ab-fab` mascot top-left, panel `#ab`).

# Embedded data blocks (`<script type="application/json" id=…>`)

`tw-imgs` booking slide crops · `rt-new` Passport retention designs · `extra` event-based emails + retention set · `data` onboarding emails · `np-data` PROMO 2026 planner · `calc-src` calculator bundle · `db-data` reachable monthly (phone/email/unique) · `ra-data` retention segments + survival curves · `sc-aud` Live Coach MP3 clips (`scenario:lineIndex`) · `ref-imgs` reference emails/ads · `us-states` US state paths · `ai-home` AI home photos (`{clone}_{ext|kitchen|living|yard}`).

# Engines and globals

- **Persona timelines:** `WeekJourney(pre, getItems, opt)`; builders `year1..year4`; instances `pz`, `pz2`, `pz3`, `pz4` (Persona 4 B, AI-first) and `pz4b` (Persona 4 A, human in the loop). Item shape `{week,k,t,e,m,push,inapp,chat,voice,ad,call,mail,camps,…}`. Click handler routes: email → `__emailGallery`, ads → `__adGallery`, Persona 4 others → `__smartCall`.
- **Live Coach:** `window.__smartCall(kind,label,week,channel)` is **wrapped in layers** (base engine → intel tabs/points → in-app phone → Area/offer ladder → cross-book + omnichannel). Scenarios: `la pm ne tr xb` (calls) and `ch_*` (channels). Line format `[who,text,step,objKey('#used'),autos[],sentiment,highlight]`. Voice: `window.__scVoice` (Piper clips, browser TTS fallback).
- **Persona 4 (B) blocks:** `#rx` AI-reactive model + sliders, `#rm` signal→response map + day simulation, `.sp4` Live Coach strip, `.ai4` decision loop (collapsed).
- **DNA:** one IIFE: clones array `C`, canvas brain (`#dna-g`), helix, Live Coach card (`lcCard`), Zillow page (`house`, `panel`, `plan`, `avail`, `ideas`, `techAvail`, `XOFF` offers), AI-by-channel grid. US map (`#um-svg`) in its own script.
- **Gantt:** tasks `T` `[ws,name,startWeek,weeks,what,tools,depends,output,owner,support]`, workstreams `WS` (incl. `ab` A/B tests), people `PE` (M Michele accountable, V Victor, D Diego, N Nazar), milestones `MS`. Projection `#pj` (Conservative/Expected/Stretch).
- **Assistant:** indexes headings across tabs, local intents with charts, `goTo(el)` opens tab/sub-tab and flashes the target; AI insights via the artifact runtime **`sample`** capability (declared on publish).

# Gotchas

- Global `.bar` CSS sets `height:8px` → never use class `bar` on SVG rects (use `dbbar`, `rpbar`).
- `.slot` class is styled elsewhere → use prefixed classes.
- Some features exist in **wrapper chains**; patch the outermost layer or the base consistently.
- `<details>` collapsed content returns empty `innerText` in tests.
- Pollinations free image API: 1 image / 45 s per IP (watermark cropped at bottom 40 px).
- Published page CSP blocks external fetches; only cdnjs/jsdelivr scripts and Google Fonts.

# Publishing

Republish to the same artifact URL. Keep `capabilities: {sample: {}}` (assistant AI insights). For GitHub: replace `index.html`, commit, push (keep repo private).

See `docs/OPEN-ISSUES.md`, `docs/DATA-SOURCES.md`, `docs/TESTING.md`, `docs/CONVERSATION.md`.
