---
title: Transactional Workflow — email library audit
tags: [claudecode, home-alliance, transactional-workflow, customer-io, email-qa, lifecycle-marketing]
owner: MK (Marketing, Home Alliance)
updated: 2026-10-20
artifact: https://claude.ai/artifact/67gtzX7QRhrrfdP5vc1ETY (tab: Transactional Workflow, #transactional-workflow)
repo: https://github.com/michelek-bit/Q4-4C-AI-Solutions
source: Customer.io HTML exports and campaign list shared by MK on 2026-10-20
---

# Transactional Workflow — email library audit

Every customer email from a serviceable lead to preventive maintenance, as exported from Customer.io on Oct 20, 2026, with what to fix before sending. The same content is live in the **Transactional Workflow** tab (sub-view *Email library & fixes*); the older booking-workflow player is the second sub-view, *Booking workflow & QA flow*.

> Send counts are from the Customer.io campaigns screen (last 30 days). They count messages, not jobs. Delays between steps are not in the exports; step order follows the content. Nothing here is legal advice.

## Journey

| Step | Workflow | Starts when | Category | Channels | Sent 30d | Designs |
|---|---|---|---|---|---:|---:|
| 0 · Serviceable SAL | Serviceable SAL (not booked yet) | `serviceable lead with no booking` | Marketing | Email | not in list | 4 |
| 1 · Job Booked | NEW: Job Booked | `job_booked` | Transactional | SMS + Email | 7,258 | 4 |
| 2 · On My Way | NEW: Job On My Way | `job_on_my_way` | Transactional | Email + SMS | 1,035 | 4 |
| 3 · Arrived | NEW: Job Arrived | `job_arrived` | Transactional | Email + SMS | 701 | 3 |
| 4 · Completed | NEW: Job Completed | `job_sold` | Marketing | SMS + Email | 1,888 | 5 |
| 5 · Referral | Referral program (Promoters) | `promoter (rating / NPS 9–10)` | Marketing | Email | not live | 3 |
| 6 · Rebooked | NEW: Job Rebooked | `job_rebooked` | Transactional | Email + SMS | 629 | 2 |
| 7 · Cancelled | NEW: Job Cancelled | `job_cancelled` | Transactional | Email + SMS | 1,976 | 3 |
| 8 · PM Notice | Preventive Maintenance Notice (Electrical) | `PM due date: 6–12 months after the job` | Marketing | Email | not in list | 8 |
| 9 · 6-Month Check-in | 6-Month Check-in (no bookings) | `180 days after the last job, nothing booked since` | Marketing | Email + SMS | not live | 2 |

**38 emails · 72 fix items (9 blockers, 15 high).**

## Fix first (cross-journey)

1. **One phone token everywhere.** Four phone sources appear across the journey: (844) 954-4474 (Booked, On My Way tiles), (888) 996-5659 (Completed, SAL, Cancelled), (888) 977-7114 (PM Notice) and `{{snippets.brandPhone}}`. Use the token on every link and remove numbers printed inside images.
2. **Fix the shared signature snippet.** `tel:{{<BOM>snippets.brandPhone}}` (an invisible byte-order mark) appears in Serviceable SAL, Arrived, Rebooked and Cancelled: one snippet, one fix.
3. **Cancelled sends the new-lead welcome offer.** Replace it with a transactional cancellation confirmation + one-tap rebook + reason question, then a save offer for price/timing reasons only.
4. **Gate the referral ask.** Add the star rating / NPS to Job Completed: 9–10 → referral invite, 7–8 → returning-customer offer, 0–6 → manager call. The referral program today exists only for 5 Star Appliance Repair.
5. **Make every deadline real.** The 7-day countdown restarts in each email, SAL says “2 days only”, PM Last Call says “ends tomorrow” on an always-on sequence, and there are three different 10% offers. Anchor each to a real expiry or drop it.
6. **Footer and opt-out.** Several bodies have no unsubscribe (SAL, Cancelled, referral reminder) and none has a postal address. Confirm the Customer.io layout adds them.
7. **Tech-triggered events.** On My Way (1,035) and Arrived (701) sends vs Job Booked (7,258) suggest techs aren’t tapping the app on most jobs.
8. **Job Completed** starts on `job_sold` and is filed as Marketing: jobs finished without a sale and opted-out customers never get it.

## 0 · Serviceable SAL — Serviceable SAL (not booked yet)

Touchpoint 0, before Job Booked: a lead in a serviceable area that has not booked. Welcome offer of 10% off the first service, “valid for 2 days”. Two exports with the same body and different subjects.

**Planned changes:** Name the service they asked about and link to online booking; Add SMS + outbound call within the 2-day window; Exit as soon as job_booked fires.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP0 · V1 New | NEW V1 · cross-book: book online + real deadline + whole-home chips | Your {{snippets.service_name}} visit is one tap away | 10% welcome with a real expiry; whole-home department chips | See preview |
| TP0 · V2 New | NEW V2 · same-trade upsell: book online + real deadline + whole-home chips | Your {{snippets.service_name}} visit is one tap away | 10% welcome with a real expiry; whole-home department chips; 3 more electrical services with free quotes | See preview |
| TP0 · A | Welcome offer · subject A | A Special Welcome Offer Just For You: Get 10% Off! | 10% off the first service, “valid for 2 days only” | Call (888) 996-5659 or reply |
| TP0 · B | Welcome offer · subject B | Exclusive 10% Discount on Your First Service! | 10% off the first service, “valid for 2 days only” | Call (888) 996-5659 or reply |

**Fix before sending**

- **Blocker — Hidden character inside a merge tag** (TP0 · A, TP0 · B). The trailing link is tel:{{<BOM>snippets.brandPhone}}: an invisible byte-order mark sits between {{ and snippets. Liquid may fail to render it (or the send errors). Delete the empty link, or retype the tag.
- **Blocker — No unsubscribe or footer in the body** (TP0 · A, TP0 · B). The exports are body only: no {% unsubscribe %}, brand footer or postal address. If the Customer.io layout for this campaign doesn't add them, a promotional offer goes out with no way to opt out. Confirm the layout, or add the footer.
- **High — Two exports, one email** (TP0 · A, TP0 · B). Both files are byte-for-byte the same body; only the subjects differ. Set it up as a subject A/B test on one message, not two sends, or the lead gets the same email twice.
- **High — Phone link copied from a test send** (TP0 · A, TP0 · B). The signature number uses a hard-coded Customer.io tracking link whose payload is email_id “example”, created April 2024. Clicks won't be attributed to this campaign. Use tel:{{snippets.brandPhone}} and let Customer.io track it.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP0 · V1 New, TP0 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP0 · V1 New, TP0 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — “Valid for 2 days only” on every lead** (TP0 · A, TP0 · B). Every lead gets a 2-day window whenever they enter. Make it real (expire the code 48 h after the send) and say the date; it is also the third 10% offer in the journey (with the two in Job Completed).
- **Medium — Generic copy, no booking button** (TP0 · A, TP0 · B). Plain text with no brand header, no button and no online booking link; it doesn't mention the service the lead asked about. Add {{lead.service}} and a Book online button with UTM, keep the phone as the second option.
- **Low — Follow-up SMS: stop rules** (TP0 · V1 New, TP0 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP0 · V1 New, TP0 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP0 · V1 New, TP0 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Hard-coded (888) 996-5659 and justified text** (TP0 · A, TP0 · B). Use {{snippets.brandPhone}} (the body already loads it) and left-align the text; justified text leaves gaps on phones. Remove the empty <b><div></div></b> blocks.

## 1 · Job Booked — NEW: Job Booked

Touchpoint 1: the appointment confirmation, sent right after the job is booked.

**Planned changes:** Re-do design and copy (Diego); Re-do the workflow: “Your job was booked” (Victor).

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP1 · V1 New | NEW V1 · cross-book: confirmation + tech card + add-on coupon + cross-book | You're booked: {{snippets.appt_date}}, {{snippets.appt_window}} | Cross-book: top department coupon + other departments in the area | See preview |
| TP1 · V2 New | NEW V2 · same-trade upsell: confirmation + tech card + add-on coupon + cross-book | You're booked: {{snippets.appt_date}}, {{snippets.appt_window}} | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) | See preview |
| TP1 · V1 | Appointment confirmed · Regions, all trades | Your Appointment With {{snippets.brand}} Is Confirmed | 2nd Appliance Check for only $30; FREE quote for Electrician service; FREE Air Duct Cleaning estimate; FREE service call with any HVAC repair; $99 Hot Water Flush for Plumbing service; Cleaning: $100 off your first deep cleaning; Handyman: $1 every 3rd hour of service | Call {{snippets.brandPhone}}; tiles call (844) 954-4474 |
| TP1 · V2 | Appointment confirmed · Single trade | Your Appointment With {{snippets.brand}} Is Confirmed | 2nd Appliance Check for only $30 | Call {{snippets.brandPhone}}; tiles call (844) 954-4474 |

**Fix before sending**

- **High — One hard-coded phone number on every offer** (TP1 · V1, TP1 · V2). The body uses {{snippets.brandPhone}}, but every offer tile links to tel:+18449544474 and the hero offers print (844) 954-4474 inside the image. In a regional send, customers of every brand and region call the same line, and call tracking by brand breaks. Use {{snippets.brandPhone}} on the links and a phone-free image (or live text) for the number.
- **High — No postal address in the footer** (TP1 · V1, TP1 · V2). The messages carry promotional offers, but the footer has only the copyright line, a privacy note and the unsubscribe tag. US commercial email rules (CAN-SPAM) require a valid postal address in commercial messages; add the brand's address to be safe. Not legal advice: confirm with counsel.
- **High — The 7-day countdown restarts in every email** (TP1 · V1, TP1 · V2). Both Job Booked and On My Way set the timer to 7 days after their own event, so a customer sees a fresh 7-day deadline in each message for the same job. A deadline that keeps moving reads as fake urgency. Anchor the timer to the first message (booking date + 7) or drop it from On My Way.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP1 · V1 New, TP1 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP1 · V1 New, TP1 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — Same six tiles twice within hours** (TP1 · V1). V1 of Job Booked and V1 of On My Way repeat the same Electrical, HVAC, Plumbing, Cleaning, Handyman and Appliance tiles. Rotate offers between touchpoints, or keep one next-best offer per message.
- **Medium — Subject and body disagree** (TP1 · V1, TP1 · V2). The subject and banner say the appointment “Is Confirmed”; the body says “We have received your appointment request and would like to confirm”. Pick one: if the job is booked, say it is confirmed.
- **Medium — Countdown counts down to nothing named** (TP1 · V1, TP1 · V2). The timer's alt text promises “10% Discount on The Next Service”, but no 10% offer appears in any version. The timer also loads from yorbalinda-sub-zero-repair.com, one brand's site: if that site changes, every brand loses the image. Name the deal the timer belongs to and host the timer on a shared domain.
- **Medium — “Book Now” buttons dial the phone** (TP1 · V1, TP1 · V2). The tiles show a Book Now button but link to a phone call. Link to the online booking page for that trade (with UTM), or relabel the button “Call to book”.
- **Medium — Key content is image-only** (TP1 · V1, TP1 · V2). The banner (“Your appointment is confirmed” / “Your technician is on the way”) and the progress tracker have empty alt text, so with images off (common in Outlook and Gmail on first open) the email opens with no headline. Add alt text, or a live-text headline above the banner.
- **Low — Follow-up SMS: stop rules** (TP1 · V1 New, TP1 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP1 · V1 New, TP1 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP1 · V1 New, TP1 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — No preheader and an empty <title>** (TP1 · V1, TP1 · V2). Inbox previews will show the brand name and the first line of body text. Add a preheader, e.g. “Thu, Oct 22 · 10–12 AM · reply or call to change” for Job Booked, “Alex is on the way, about 15 minutes out” for On My Way.
- **Low — Seven offers in one transactional email** (TP1 · V1). Both V1s show 7 offers, including the trade the customer just booked. Show the 2–3 next-best services for that customer (exclude the booked trade); the 10 Personas cross-sell order is a ready ranking.
- **Low — Confirm every trade is served in each V1 region** (TP1 · V1). Cleaning and Handyman are offered to every V1 region. If a region lacks one of them, it should get V2 or a region-specific tile set.
- **Low — Phone number repeated in the sign-off** (TP1 · V1, TP1 · V2). {{snippets.brandPhone}} appears twice in a row (after “reach us at” and again under the signature). Keep one, and sign as a team (“The {{snippets.brand}} team”).

## 2 · On My Way — NEW: Job On My Way

Touchpoint 2: sent when the technician starts the drive (triggered by the tech).

**Planned changes:** Tech introduction: name, photo, experience; Coupon while the tech is on the way.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP2 · V1 New | NEW V1 · cross-book: tech intro + proof + another department | {{snippets.tech_name}} is on the way | Cross-book coupon for the top department (sample HVAC) + 2 more departments in the area | Track · Call · Book another department |
| TP2 · V2 New | NEW V2 · same-trade upsell: tech intro + proof + coupon | {{snippets.tech_name}} is on the way | Coupon for one trade-matched add-on on this visit (sample: $199 Electrical Safety Check, code SAFE199); Passport members only: “Open my Passport offers” link to member savings | Track {{tech_name}} · Call {{snippets.brandPhone}} · Add it to my visit |
| TP2 · V1 | Technician on the way · Regions, all trades | _not in export_ | 15% off UV Light installation (HVAC, hero); $1 diagnostic for High End Appliances; $99 Hot Water Flush for Plumbing service; FREE quote for Electrician service; FREE service call with any HVAC repair; Cleaning: $100 off your first deep cleaning; Handyman: $1 every 3rd hour of service | Call {{snippets.brandPhone}}; tiles call (844) 954-4474 |
| TP2 · V2 | Technician on the way · Single trade | _not in export_ | $99 Hot Water Flush (Plumbing, hero); $1 diagnostic for High End Appliances | Call {{snippets.brandPhone}}; tiles call (844) 954-4474 |

**Fix before sending**

- **High — One hard-coded phone number on every offer** (TP2 · V1, TP2 · V2). The body uses {{snippets.brandPhone}}, but every offer tile links to tel:+18449544474 and the hero offers print (844) 954-4474 inside the image. In a regional send, customers of every brand and region call the same line, and call tracking by brand breaks. Use {{snippets.brandPhone}} on the links and a phone-free image (or live text) for the number.
- **High — No postal address in the footer** (TP2 · V1, TP2 · V2). The messages carry promotional offers, but the footer has only the copyright line, a privacy note and the unsubscribe tag. US commercial email rules (CAN-SPAM) require a valid postal address in commercial messages; add the brand's address to be safe. Not legal advice: confirm with counsel.
- **High — The 7-day countdown restarts in every email** (TP2 · V1, TP2 · V2). Both Job Booked and On My Way set the timer to 7 days after their own event, so a customer sees a fresh 7-day deadline in each message for the same job. A deadline that keeps moving reads as fake urgency. Anchor the timer to the first message (booking date + 7) or drop it from On My Way.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP2 · V1 New, TP2 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP2 · V1 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — New data fields to wire up in Customer.io** (TP2 · V2 New). This design needs per-tech fields the current emails don't use: tech_photo_url, tech_repairs, tech_reviews (from the tech app / review platform), eta_window and tracking_url (dispatch), and upsell_title / upsell_detail / upsell_url picked by trade. Until they exist, keep V1/V2 live; falls back to the brand logo if a photo is missing.
- **Medium — Passport block needs a member flag and link** (TP2 · V2 New). The Passport card shows only when customer.passport_member is true; map that to the real Customer.io attribute (member status / tier) and add passport_url (deep link to the member offers page, with UTM). Non-members see nothing extra. The preview always shows the card so it can be reviewed.
- **Medium — SMS coupon needs marketing consent** (TP2 · V2 New). SMS 1 is transactional and goes to everyone. SMS 2 carries the coupon, which makes it marketing: send it only to contacts with SMS marketing consent, keep the STOP line, and respect quiet hours. Keep both texts in plain GSM-7 characters (a hyphen, not an en dash, in the time window; no ★), or each SMS splits into 70-character segments. Coupon code SAFE199 is a sample; create one code per trade (or a unique code per job) so redemptions can be tracked.
- **Medium — No arrival time, photo or tracking link** (TP2 · V1, TP2 · V2). On My Way names the tech ({{snippets.tech_name}}) and says “will arrive soon”, nothing more. Add the ETA, the tech's photo and years of experience, and a live-tracking link: it cuts “where is my tech?” calls and matches the planned tech introduction. Shorten the copy for phones (“Alex is on the way, arriving about 10:40 AM”).
- **Medium — Same six tiles twice within hours** (TP2 · V1). V1 of Job Booked and V1 of On My Way repeat the same Electrical, HVAC, Plumbing, Cleaning, Handyman and Appliance tiles. Rotate offers between touchpoints, or keep one next-best offer per message.
- **Medium — V2 carries two trades** (TP2 · V2). On My Way V2 offers a $99 Hot Water Flush (Plumbing) and a $1 diagnostic (Appliance), while Job Booked V2 offers Appliance only. If V2 is for single-trade regions, one of these is off-trade; confirm which trade each V2 region serves.
- **Medium — Countdown counts down to nothing named** (TP2 · V1, TP2 · V2). The timer's alt text promises “10% Discount on The Next Service”, but no 10% offer appears in any version. The timer also loads from yorbalinda-sub-zero-repair.com, one brand's site: if that site changes, every brand loses the image. Name the deal the timer belongs to and host the timer on a shared domain.
- **Medium — “Book Now” buttons dial the phone** (TP2 · V1, TP2 · V2). The tiles show a Book Now button but link to a phone call. Link to the online booking page for that trade (with UTM), or relabel the button “Call to book”.
- **Medium — Key content is image-only** (TP2 · V1, TP2 · V2). The banner (“Your appointment is confirmed” / “Your technician is on the way”) and the progress tracker have empty alt text, so with images off (common in Outlook and Gmail on first open) the email opens with no headline. Add alt text, or a live-text headline above the banner.
- **Low — Offers in the NEW set reuse today's offers** (TP2 · V1 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP2 · V1 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Confirm the numbers and the add-on before launch** (TP2 · V2 New). 1,657 repairs and 1,600+ five-star reviews are sample values for the preview; pull them per technician, never type them in. The add-on reuses the existing $199 Electrical Safety Package; confirm “no extra trip fee” with operations and set one add-on per trade (Appliance: 2nd appliance check $30; Plumbing: $99 hot water flush; HVAC: free service call with repair).
- **Low — Alt text and image disagree on the $1 diagnostic** (TP2 · V1, TP2 · V2). The alt text says “$1 diagnostic for all Appliances”; the image says “for High End Appliances”. Make them match, since the alt text is what shows with images off.
- **Low — No preheader and an empty <title>** (TP2 · V1, TP2 · V2). Inbox previews will show the brand name and the first line of body text. Add a preheader, e.g. “Thu, Oct 22 · 10–12 AM · reply or call to change” for Job Booked, “Alex is on the way, about 15 minutes out” for On My Way.
- **Low — Seven offers in one transactional email** (TP2 · V1). Both V1s show 7 offers, including the trade the customer just booked. Show the 2–3 next-best services for that customer (exclude the booked trade); the 10 Personas cross-sell order is a ready ranking.
- **Low — Confirm every trade is served in each V1 region** (TP2 · V1). Cleaning and Handyman are offered to every V1 region. If a region lacks one of them, it should get V2 or a region-specific tile set.

## 3 · Arrived — NEW: Job Arrived

Touchpoint 3: sent when the technician checks in on site (triggered by the tech). Plain text: arrival notice, review ask and a cross-sell mention.

**Planned changes:** Upsell / point system while the tech is on site; Get techs to tap Arrived on every job (701 sends vs 7,258 booked).

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP3 · V1 New | NEW V1 · cross-book: arrival + proof + on-site coupon + other departments | {{snippets.tech_name}} is at your home now | Cross-book: top department coupon + other departments in the area | See preview |
| TP3 · V2 New | NEW V2 · same-trade upsell: arrival + proof + on-site coupon + other departments | {{snippets.tech_name}} is at your home now | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) | See preview |
| TP3 · 1 | Your technician has arrived | Your Technician Has Arrived | “A range of other services” (no list or links); Review form ask (no link) | None (no links besides the phone) |

**Fix before sending**

- **Blocker — Hidden character inside the signature phone link** (TP3 · 1). tel:{{<BOM>snippets.brandPhone}} again: an invisible byte-order mark after {{. Retype the tag (same fix as Serviceable SAL, Rebooked and Cancelled; it looks copied from one shared signature snippet, so fix the snippet once).
- **High — “Click on the brands below”, but there is nothing below** (TP3 · 1). The email says “You can click on the brands below to learn more”, then ends with the sign-off. Add the brand / service tiles (with links and UTMs) or cut the sentence. Unless the Customer.io layout adds them, the cross-sell has no click target.
- **High — Review ask with no review link** (TP3 · 1). It asks the customer to complete the review form “once the job is done” but links nowhere, and it asks before the job is finished. Move the review ask to Job Completed (with the star rating that gates referral) and use this email for the on-site moment.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP3 · V1 New, TP3 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP3 · V1 New, TP3 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — Appliance- and gender-specific copy** (TP3 · 1). “Restoring your item to its proper working condition” fits appliances only, and “he will be happy to assist you” assumes the tech is male. Use the trade token and “{{snippets.tech_name}} will be happy to help”. Also fix the double space in “Dear  {{…}}” and the formal opener “We are writing to inform you”.
- **Medium — This is the upsell moment, and it has no offer** (TP3 · 1). The planned upsell / point system belongs here: one concrete, on-site offer (e.g. a second item checked during this visit) the customer can ask the tech for, tied to the booked trade. Today it only says “we offer a range of other services”.
- **Low — Offers in the NEW set reuse today's offers** (TP3 · V1 New, TP3 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP3 · V1 New, TP3 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Plain text, no preheader or footer** (TP3 · 1). Job Booked and On My Way use the banner and the 4-step tracker, which already has a “Your Technician Has Arrived” step. Reuse it, add a preheader (“Alex is at your home now”) and the brand footer.

## 4 · Completed — NEW: Job Completed

Touchpoint 4: three emails after the job. Starts on job_sold and sits in the Marketing category. Order follows the content; the delays between steps are not in the exports.

**Planned changes:** Star rating → CSAT / NPS → promoters to referral → membership; PI folder and service-due sticker; Job Sold + Referral workflow (not active yet).

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP4 · V1 New | NEW V1 · cross-book: 1-tap rating + receipt + next-service coupon + cross-book | All done, {{snippets.customer_first_name}}. How did {{snippets.tech_name}} do? | Rating gate for referral; 10% next service within 7 days; 3 next-best departments; Passport | See preview |
| TP4 · V2 New | NEW V2 · same-trade upsell: 1-tap rating + receipt + next-service coupon + cross-book | All done, {{snippets.customer_first_name}}. How did {{snippets.tech_name}} do? | Rating gate for referral; 10% next service within 7 days; 3 next-best departments; Passport; 3 more electrical services with free quotes | See preview |
| TP4 · 1 | Service complete + 10% off next service | One call for more of your home-service needs | Save 10% on your next service if booked within 7 days; Cross-sell list: Appliance, HVAC, Plumbing, Electrical, Air duct | Call (888) 996-5659 |
| TP4 · 2 | Check-in: how is it working? | How's your appliance working now? | No offer: check-in + cross-sell list (HVAC, Plumbing, Electrical, Air duct) | Call (888) 996-5659 |
| TP4 · 3 | Returning-customer offer | Your 10% returning-customer offer | 10% off your next eligible home service (no deadline; “mention this email”) | Call (888) 996-5659 |

**Fix before sending**

- **High — Nothing gates the referral ask to promoters** (TP4 · 1, TP4 · 2). The invite says “Because you had a great experience”, but Job Completed has no rating step yet. Add the star rating / NPS first: 9–10 (or 5 stars) get the referral invite, 7–8 get the returning-customer offer, 0–6 go to a manager call.
- **High — A third phone number** (TP4 · 1, TP4 · 2, TP4 · 3). All three Job Completed emails hard-code (888) 996-5659, while Job Booked and On My Way use (844) 954-4474 and {{snippets.brandPhone}}. Customers now see three numbers across one job. Use {{snippets.brandPhone}} everywhere.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP4 · V1 New, TP4 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP4 · V1 New, TP4 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — Two different 10% offers** (TP4 · 1, TP4 · 3). Step 1 offers 10% off if booked within 7 days; step 3 offers 10% with no deadline and “mention this email”. The second undercuts the first deadline. Keep the 7-day offer in step 1 and give step 3 a different reason (seasonal tune-up, membership) or a unique code with its own expiry.
- **Medium — Appliance-only copy in a workflow for every trade** (TP4 · 2). “How's your appliance working now?” fires on job_sold for every trade. Use a trade token or trade variants, and drop the trade they just bought from the cross-sell list (step 1 lists Appliance Repair to appliance customers too).
- **Medium — No postal address in the footer** (TP4 · 1, TP4 · 2, TP4 · 3). The new footers are “{{snippets.brand}} · unsubscribe” only (the reminder has none). Add the brand's postal address, as for the other touchpoints. Not legal advice: confirm with counsel.
- **Medium — Discount can't be tracked** (TP4 · 3). “Mention this email when you schedule” relies on the CSR. Add a unique code or a booking link with a UTM so the 10% is measurable in the iROAS view.
- **Low — Follow-up SMS: stop rules** (TP4 · V1 New, TP4 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP4 · V1 New, TP4 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP4 · V1 New, TP4 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Two merge-field styles** (TP4 · 1, TP4 · 2, TP4 · 3). The new emails use {{customer.first_name | default: "there"}}; the Customer.io transactional set uses {{snippets.customer_first_name}}. Pick one so fallbacks behave the same everywhere. These five do the basics well: live text, preheaders and dark-mode support.

## 5 · Referral — Referral program (Promoters)

Touchpoint 5: the referral invite and its reminder, for promoters only. Part of the Job Sold + Referral workflow, not active yet.

**Planned changes:** Gate on a 5-star rating or NPS 9–10 (CSAT/NPS step still to build); Detractors go to service recovery, not the referral ask.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP5 · New | Proposal: give/get referral for every department | {{snippets.customer_first_name}}, share {{snippets.brand}} and you both get {{snippets.referral_reward}} | Give/get reward (amount to set), one link for all departments; Passport bonus | See preview |
| TP5 · 1 | Referral invite | Join the 5 Star Appliance Repair Referral Program | Referral rewards (amount not stated); CTA: Get My Referral Code → lp.5starappliancerepair.pro/referral | Get My Referral Code (landing page) |
| TP5 · 2 | Referral reminder | _not in export_ | Same referral program; CTA “Get my referral code” (links to #) | Get my referral code (link is #) |

**Fix before sending**

- **Blocker — Referral reminder greets every customer as “Belinda”** (TP5 · 2). The reminder starts “Hi Belinda,” typed in, not a merge field. Replace it with {{customer.first_name | default: "there"}} as in the invite.
- **Blocker — Referral reminder button goes nowhere** (TP5 · 2). “Get my referral code” links to # (in both the Outlook and standard button). Point it at lp.5starappliancerepair.pro/referral, the same page as the invite, with a UTM.
- **Blocker — Referral reminder has no unsubscribe or footer** (TP5 · 2). The reminder ends after the sign-off: no unsubscribe tag, brand line or address. It is a marketing email, so it needs {% unsubscribe %} and the footer the invite uses.
- **High — Referral program exists only for 5 Star Appliance Repair** (TP5 · 1, TP5 · 2). Both referral emails, the header and the landing page are the appliance brand. Job Completed goes to every trade, so HVAC, plumbing and electrical promoters would be invited to an appliance program. Build one program per brand, or one Home Alliance program that credits the right brand.
- **High — Nothing gates the referral ask to promoters** (TP5 · 1). The invite says “Because you had a great experience”, but Job Completed has no rating step yet. Add the star rating / NPS first: 9–10 (or 5 stars) get the referral invite, 7–8 get the returning-customer offer, 0–6 go to a manager call.
- **Medium — The NEW set needs shared data fields** (TP5 · New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — No postal address in the footer** (TP5 · 1, TP5 · 2). The new footers are “{{snippets.brand}} · unsubscribe” only (the reminder has none). Add the brand's postal address, as for the other touchpoints. Not legal advice: confirm with counsel.
- **Low — Follow-up SMS: stop rules** (TP5 · New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP5 · New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP5 · New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Referral reward is never stated** (TP5 · 1, TP5 · 2). Both emails say “earn rewards” without saying what. A named reward (credit amount or free service) converts better; add it once it is set. The how-it-works image shows 5 steps while the invite text lists 3.
- **Low — Reminder has no subject, preheader or image alt text** (TP5 · 2). The export has an empty <title> and preheader, and the images' alt text is the file name (“Uploaded: ChatGPT Image Aug 18, 2026…”). Add a subject such as “Your referral code is waiting” and real alt text.
- **Low — Two merge-field styles** (TP5 · 1, TP5 · 2). The new emails use {{customer.first_name | default: "there"}}; the Customer.io transactional set uses {{snippets.customer_first_name}}. Pick one so fallbacks behave the same everywhere. These five do the basics well: live text, preheaders and dark-mode support.

## 6 · Rebooked — NEW: Job Rebooked

Touchpoint 6 (branch): the appointment moved to a new date or time. One plain-text confirmation of the new details.

**Planned changes:** Reuse the Job Booked design (banner + tracker) with a “Rescheduled” header; Add a self-serve reschedule link and a calendar invite.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP6 · New | Proposal: was → now + calendar + add-on coupon | Rescheduled: {{snippets.appt_date}}, {{snippets.appt_window}} | Same-visit add-on coupon on the new date | See preview |
| TP6 · 1 | Appointment rescheduled | Your Appointment Has Been Rescheduled | None (transactional) | Call {{snippets.brandPhone}} to change it again |

**Fix before sending**

- **Blocker — Hidden character inside the signature phone link** (TP6 · 1). The last link is tel:{{<BOM>snippets.brandPhone}}, with an invisible byte-order mark after {{ (the same problem as the Serviceable SAL email). Liquid may fail to render it, breaking the link or the send. Retype the tag.
- **Medium — The NEW set needs shared data fields** (TP6 · New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — Doesn't show what changed** (TP6 · 1). {{snippets.yourDetails}} gives the new details only. Show “Was: Thu 10–12 → Now: Fri 2–4” so the customer can spot a mistake, and add a calendar invite (.ics) link.
- **Medium — Plain text, off-design** (TP6 · 1). Job Booked and On My Way use the banner + 4-step tracker; this one is plain text with no header. Reuse that template with a “Your appointment has been rescheduled” banner so the series looks like one brand.
- **Low — Follow-up SMS: stop rules** (TP6 · New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP6 · New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP6 · New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Only way to change it again is a call** (TP6 · 1). Add a self-serve reschedule link; 629 rebooked sends in 30 days suggests rescheduling is common enough to automate. Keep the phone as backup and show it once (it appears twice).
- **Low — No preheader or footer** (TP6 · 1). Add a preheader with the new date and time, and the brand footer with postal address. As a transactional message it needs no offers; this one correctly has none, and it is the only email that uses {{snippets.brandPhone}} throughout.

## 7 · Cancelled — NEW: Job Cancelled

Touchpoint 7 (branch): the appointment was cancelled. The email in the export is the Serviceable SAL welcome offer, byte for byte.

**Planned changes:** Split into a cancellation confirmation (transactional) + a rebook save step; Capture the cancel reason; one-tap rebook link; Track rebook rate (629 rebooked vs 1,976 cancelled sends).

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP7 · V1 New | NEW V1 · cross-book: cancellation confirmation + 1-tap rebook + reason + other departments | Your {{snippets.appt_date}} visit is cancelled. Rebook in one tap | No discount; next open slots, reason capture, other departments | See preview |
| TP7 · V2 New | NEW V2 · same-trade upsell: cancellation confirmation + 1-tap rebook + reason + other departments | Your {{snippets.appt_date}} visit is cancelled. Rebook in one tap | No discount; next open slots, reason capture, other departments; 3 more electrical services with free quotes | See preview |
| TP7 · 1 | Welcome offer reused for cancellations | A Special Welcome Offer Just For You: Get 10% Off! | 10% off the first service, “valid for 2 days only” | Call (888) 996-5659 or reply |

**Fix before sending**

- **Blocker — Cancelled customers get the new-lead welcome email** (TP7 · 1). The Job Cancelled export is identical to the Serviceable SAL email: “We noticed you haven't had the chance to experience our quality and care yet… To welcome you…”. It never confirms the cancellation, and for a repeat customer who cancelled it is simply wrong. A workflow filed as Transactional is sending a promotional welcome offer.
- **Blocker — Hidden character inside a merge tag** (TP7 · 1). The trailing link is tel:{{<BOM>snippets.brandPhone}}: an invisible byte-order mark sits between {{ and snippets. Liquid may fail to render it (or the send errors). Delete the empty link, or retype the tag.
- **Blocker — No unsubscribe or footer in the body** (TP7 · 1). The exports are body only: no {% unsubscribe %}, brand footer or postal address. If the Customer.io layout for this campaign doesn't add them, a promotional offer goes out with no way to opt out. Confirm the layout, or add the footer.
- **High — No cancellation confirmation and no rebook path** (TP7 · 1). Send a short transactional confirmation first (“Your {{date}} appointment is cancelled”) with a one-tap rebook link and a reason question (price, timing, fixed it, chose someone else). Then, only for price/timing reasons, a save offer a day later.
- **High — Phone link copied from a test send** (TP7 · 1). The signature number uses a hard-coded Customer.io tracking link whose payload is email_id “example”, created April 2024. Clicks won't be attributed to this campaign. Use tel:{{snippets.brandPhone}} and let Customer.io track it.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP7 · V1 New, TP7 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP7 · V1 New, TP7 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — A discount for cancelling** (TP7 · 1). Rewarding a cancellation with 10% off trains customers to cancel and rebook for a discount. Lead with convenience (new time slots, same-week visit); keep the discount for the price-reason branch only.
- **Low — Follow-up SMS: stop rules** (TP7 · V1 New, TP7 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP7 · V1 New, TP7 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP7 · V1 New, TP7 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Hard-coded (888) 996-5659 and justified text** (TP7 · 1). Use {{snippets.brandPhone}} (the body already loads it) and left-align the text; justified text leaves gaps on phones. Remove the empty <b><div></div></b> blocks.

## 8 · PM Notice — Preventive Maintenance Notice (Electrical)

Touchpoint 8: the service-done check-in, then the past-due notices when the panel is due (6 months to 1 year after the job). Electricians Service Team. Order follows the content; delays are not in the exports.

**Planned changes:** Add SMS + outbound call + retargeting to the PM trigger (Victor); Extend the trigger base to HVAC; check maintenance frequency per trade; Exit the sequence as soon as a PM visit is booked.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP8 · V1 New | NEW V1 · cross-book: due date + $199 check + bundle yearly checks | Your yearly electrical check is due {{snippets.pm_due_date}} | $199 safety check coupon; bundle HVAC, air duct, plumbing checks; Passport | See preview |
| TP8 · V2 New | NEW V2 · same-trade upsell: due date + $199 check + bundle yearly checks | Your yearly electrical check is due {{snippets.pm_due_date}} | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) | See preview |
| TP8 · 0 | Service done: next check-in | Your Next Electrical Check-in | No offer: sets expectations for the next reminder | Contact Our Team (contact page) or call (888) 977-7114 |
| TP8 · 1 | Due now: action required | ACTION REQUIRED: Your Electrical System is doe for maintenance | $199 Electrical Safety Package (panel inspection + outlet & smoke-detector check); FREE service call fee (banner) | BOOK NOW (contact page) or call (888) 977-7114 |
| TP8 · 2 | Past due: the facts | FACT: Your Electrical Panel Is Past Due for Maintenance | $199 Electrical Safety Package; Claims: $1,000+ damage avoided, up to 15% energy, 60% fire-risk reduction | BOOK YOUR $199 ELECTRICAL SAFETY SERVICE NOW |
| TP8 · 3 | Past due: customer story | A small spark nearly caused a big problem… | $199 Electrical Safety Package | BOOK YOUR $199 ELECTRICAL SAFETY SERVICE NOW |
| TP8 · 4 | Past due: reminder | Don't wait: your electrical panel is due for maintenance now | $199 Electrical Safety Package | BOOK YOUR $199 INSPECTION NOW |
| TP8 · 5 | Past due: last call | Last Call: Your Electrical Panel Is Still Past Due | $199 package “ends tomorrow”, then standard rates | BOOK NOW or call (888) 977-7114 |

**Fix before sending**

- **Blocker — “Call Today to Schedule” button is a broken link** (TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). In all five notices the red status-box button links to “+18889777114” without tel:, so tapping it opens a broken page instead of dialing. Change it to tel:+18889777114 (or {{snippets.brandPhone}}).
- **High — Check-in promises 4 months; the rule is 6 months to 1 year** (TP8 · 0). “We will remind you in 4 months” (title, preheader, hero and timeline) doesn't match the 6–12 month PM trigger, and the FACT email says experts recommend every 12 months. Set one interval per trade and use it in the copy (or a {{pm_due_date}} field).
- **High — Typos in the subject and status box** (TP8 · 0, TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). Subject “Your Electrical System is doe for maintenance” (due) and “Your Eletrical system is due…” in the status box of all five notices. These are the first lines a customer reads.
- **High — “Ends tomorrow” on an always-on offer** (TP8 · 5). Last Call says the $199 package ends tomorrow and “final 24 hours”, but this is a triggered sequence: every customer gets the same deadline whenever they enter. If the price doesn't really change, that is false urgency. Make the deadline real (offer expires 7 days after the first notice) or drop it. Not legal advice.
- **High — Claims and story need proof** (TP8 · 2, TP8 · 3). FACT cites “up to 15% energy”, “60% fewer fire-risk factors” and “$1,000+ damage” with no source; the spark story is told as a real customer from “last month”. Keep them only if you can source them; otherwise label the story as an example and soften the numbers.
- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP8 · V1 New, TP8 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — The NEW set needs shared data fields** (TP8 · V1 New, TP8 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Medium — Status box must reflect real bookings** (TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). Each notice states “You currently do not have an appointment scheduled.” The sequence must exit the moment a PM visit is booked, or booked customers will receive “past due” emails.
- **Medium — Every link is tagged with an April promo campaign** (TP8 · 0, TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). The notices use utm_campaign=promo_04.07.26 on every link, so PM bookings will be credited to an old promo. Use one campaign per step (pm_notice_1 … pm_last_call), as the check-in already does (maintenance_workflow_opening).
- **Medium — Image alt text is the tech names** (TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). The risk tiles and tech photos all have alt text “Tim”, “Toby” or “Vlad”, but the techs shown are Razmik, Saro, Steve and Dikran. With images off, “Skipping maintenance can lead to” reads as a list of the wrong names. Describe each image and name the right tech.
- **Medium — Duplicate block in FACT** (TP8 · 2). “What do you actually check for $199?” and its answer appear twice in a row.
- **Medium — Hard-coded phone and no postal address** (TP8 · 0, TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). (888) 977-7114 is typed in every email (a fourth number across the journey) and the footer has privacy, unsubscribe and copyright but no postal address. Use {{snippets.brandPhone}} and add the address.
- **Low — Follow-up SMS: stop rules** (TP8 · V1 New, TP8 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Offers in the NEW set reuse today's offers** (TP8 · V1 New, TP8 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP8 · V1 New, TP8 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.
- **Low — Five past-due emails, email only** (TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). Five notices in a row is heavy for one channel. Per the Workflows Optimization notes, add SMS + an outbound call + retargeting and cut the email count to three (due now, story, last call).
- **Low — Empty link after “See Profiles”** (TP8 · 1, TP8 · 2, TP8 · 3, TP8 · 4, TP8 · 5). Each notice has an empty <a href=""> next to “See Profiles”. Remove it.

## 9 · 6-Month Check-in — 6-Month Check-in (no bookings)

Touchpoint 9: a win-back check-in 6 months after the last completed job, only if nothing was booked since. Seasonal checklist, 10% off any service and Passport.

**Planned changes:** Suppress if a PM notice is due within 30 days or the last rating was 0–6; Exit as soon as job_booked fires.

| Code | Email | Subject | Offers | CTA |
|---|---|---|---|---|
| TP9 · V1 New | NEW V1 · cross-book: 6-month check-in (no bookings since the job) | {{snippets.customer_first_name}}, 6 months since your {{snippets.service_name}}: how's it going? | 10% off any service for 14 days (code sample BACK10); 3 seasonal next-best services (HVAC tune-up, water heater flush, appliance check); Passport: member offers, or “See how Passport works” for non-members | Book with 10% off · Book → per service · Reply / call if the issue is back |
| TP9 · V2 New | NEW V2 · same-trade upsell: 6-month check-in (no bookings since the job) | {{snippets.customer_first_name}}, 6 months since your {{snippets.service_name}}: how's it going? | 10% off any service for 14 days (code sample BACK10); 3 more electrical services with free quotes | Book with 10% off · Book → per service · Reply / call if the issue is back |

**Fix before sending**

- **Medium — Pick V1 or V2 by the trades served at the customer's location** (TP9 · V1 New, TP9 · V2 New). V1 (cross-book) goes to locations where 2+ trades are available; xb1-3 must only list departments that actually serve that ZIP, never the trade just booked. V2 (same-trade upsell) goes to single-trade locations; sv1-3 are more services from that trade (sample electrical: EV charger, surge protection, smoke & CO detectors, each with the existing free-quote offer). Needs a location → trades table in Customer.io (one attribute, e.g. location.trades_available).
- **Medium — Trigger and suppression rules for the 6-month check-in** (TP9 · V1 New). Send on day 180 after the last completed job only if there is no booking, open job, cancellation or rebook since; exit as soon as job_booked fires. Skip anyone with a PM notice due within 30 days (PM Notice takes over) and anyone who rated 0–6 (they need a manager call, not an offer). Uses the same 10% as Job Completed; give it its own code (sample BACK10) so win-back bookings are measurable.
- **Medium — The NEW set needs shared data fields** (TP9 · V1 New, TP9 · V2 New). All NEW emails share one template and one field set: tech_photo_url / tech_repairs / tech_reviews (tech app), appt_date / appt_window / old_appt / slot1-3 (dispatch), book_url / manage_url / calendar_url / rebook_url / rating_url (booking links), upsell_* (one add-on per booked trade) and xb1-3_dept / _offer / _url (next-best departments, excluding the booked trade, ranked by the 10 Personas cross-sell order). Build the fields once; every touchpoint then reuses them.
- **Low — Follow-up SMS: stop rules** (TP9 · V1 New, TP9 · V2 New). Each follow-up text fires only if the customer has not acted: not booked (SAL, Cancelled, PM, 6-month, Completed coupon), not rated (Completed), not shared (Referral). Day-before reminders (Booked, Rebooked) are transactional and go to everyone; reply C/R needs two-way SMS keywords in Customer.io. Max one follow-up per step except PM (2) and Completed (rating + coupon); none on On My Way or Arrived, where the visit is already happening. All marketing follow-ups need SMS consent, quiet hours (9 AM–8 PM local) and the brand name first.
- **Low — Preview shows both Passport versions** (TP9 · V1 New). The Liquid {% if customer.passport_member %} … {% else %} shows members “Open my Passport offers” and non-members “See how Passport works” (needs passport_join_url). The library preview strips Liquid, so both cards appear one after the other.
- **Low — Offers in the NEW set reuse today's offers** (TP9 · V1 New, TP9 · V2 New). Samples use only offers already in the live emails ($199 Electrical Safety Package, free HVAC service call with repair, $99 hot water flush, $30 second appliance check, free air duct estimate, 10% next service in 7 days). Referral reward, warranty terms and codes (WELCOME10, NEXT10, SAFE199) are placeholders; confirm with operations before launch. One coupon per email, real expiry dates, no countdown timers.
- **Low — SMS split: transactional vs marketing** (TP9 · V1 New, TP9 · V2 New). Each touchpoint keeps SMS 1 as a plain update for everyone; anything with an offer or cross-sell is SMS 2, sent only with SMS marketing consent and a STOP line, in GSM-7 characters. Cancelled and Rebooked have no marketing SMS on purpose.

## NEW: V1 cross-book · V2 same-trade upsell (Oct 21)

Every touchpoint has a NEW proposal in two versions, picked by the trades available at the customer's location:

- **V1 · locations with 2+ trades → cross-book.** Coupon for the top other department (sample: HVAC free service call with repair, code HOME2) plus more departments that serve the area; never the trade just booked.
- **V2 · single-trade locations → same-trade upsell.** Same-visit add-on coupon (sample: $199 Electrical Safety Check, SAFE199) plus three more services from the same trade with the existing free-quote offer (sample: EV charger, whole-home surge protection, smoke & CO detectors).

Shared template: live-text tracker, tech headshot + proof stats, one coupon, Passport card for members, SMS 1 update for everyone + offer SMS only with marketing consent. Files: `emails/new/<touchpoint>-v1.html` / `-v2.html`, `emails/new/NEW-sms.txt`.

| Code | Email | Subject | Offer |
|---|---|---|---|
| TP0 · V1 New | NEW V1 · cross-book: book online + real deadline + whole-home chips | Your {{snippets.service_name}} visit is one tap away | 10% welcome with a real expiry; whole-home department chips |
| TP0 · V2 New | NEW V2 · same-trade upsell: book online + real deadline + whole-home chips | Your {{snippets.service_name}} visit is one tap away | 10% welcome with a real expiry; whole-home department chips; 3 more electrical services with free quotes |
| TP1 · V1 New | NEW V1 · cross-book: confirmation + tech card + add-on coupon + cross-book | You're booked: {{snippets.appt_date}}, {{snippets.appt_window}} | Cross-book: top department coupon + other departments in the area |
| TP1 · V2 New | NEW V2 · same-trade upsell: confirmation + tech card + add-on coupon + cross-book | You're booked: {{snippets.appt_date}}, {{snippets.appt_window}} | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) |
| TP2 · V1 New | NEW V1 · cross-book: tech intro + proof + another department | {{snippets.tech_name}} is on the way | Cross-book coupon for the top department (sample HVAC) + 2 more departments in the area |
| TP2 · V2 New | NEW V2 · same-trade upsell: tech intro + proof + coupon | {{snippets.tech_name}} is on the way | Coupon for one trade-matched add-on on this visit (sample: $199 Electrical Safety Check, code SAFE199); Passport members only: “Open my Passport offers” link to member savings |
| TP3 · V1 New | NEW V1 · cross-book: arrival + proof + on-site coupon + other departments | {{snippets.tech_name}} is at your home now | Cross-book: top department coupon + other departments in the area |
| TP3 · V2 New | NEW V2 · same-trade upsell: arrival + proof + on-site coupon + other departments | {{snippets.tech_name}} is at your home now | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) |
| TP4 · V1 New | NEW V1 · cross-book: 1-tap rating + receipt + next-service coupon + cross-book | All done, {{snippets.customer_first_name}}. How did {{snippets.tech_name}} do? | Rating gate for referral; 10% next service within 7 days; 3 next-best departments; Passport |
| TP4 · V2 New | NEW V2 · same-trade upsell: 1-tap rating + receipt + next-service coupon + cross-book | All done, {{snippets.customer_first_name}}. How did {{snippets.tech_name}} do? | Rating gate for referral; 10% next service within 7 days; 3 next-best departments; Passport; 3 more electrical services with free quotes |
| TP5 · New | Proposal: give/get referral for every department | {{snippets.customer_first_name}}, share {{snippets.brand}} and you both get {{snippets.referral_reward}} | Give/get reward (amount to set), one link for all departments; Passport bonus |
| TP6 · New | Proposal: was → now + calendar + add-on coupon | Rescheduled: {{snippets.appt_date}}, {{snippets.appt_window}} | Same-visit add-on coupon on the new date |
| TP7 · V1 New | NEW V1 · cross-book: cancellation confirmation + 1-tap rebook + reason + other departments | Your {{snippets.appt_date}} visit is cancelled. Rebook in one tap | No discount; next open slots, reason capture, other departments |
| TP7 · V2 New | NEW V2 · same-trade upsell: cancellation confirmation + 1-tap rebook + reason + other departments | Your {{snippets.appt_date}} visit is cancelled. Rebook in one tap | No discount; next open slots, reason capture, other departments; 3 more electrical services with free quotes |
| TP8 · V1 New | NEW V1 · cross-book: due date + $199 check + bundle yearly checks | Your yearly electrical check is due {{snippets.pm_due_date}} | $199 safety check coupon; bundle HVAC, air duct, plumbing checks; Passport |
| TP8 · V2 New | NEW V2 · same-trade upsell: due date + $199 check + bundle yearly checks | Your yearly electrical check is due {{snippets.pm_due_date}} | Same-trade add-on coupon (sample $199 Electrical Safety Check); 3 more electrical services with free quotes (EV charger, surge protection, detectors) |
| TP9 · V1 New | NEW V1 · cross-book: 6-month check-in (no bookings since the job) | {{snippets.customer_first_name}}, 6 months since your {{snippets.service_name}}: how's it going? | 10% off any service for 14 days (code sample BACK10); 3 seasonal next-best services (HVAC tune-up, water heater flush, appliance check); Passport: member offers, or “See how Passport works” for non-members |
| TP9 · V2 New | NEW V2 · same-trade upsell: 6-month check-in (no bookings since the job) | {{snippets.customer_first_name}}, 6 months since your {{snippets.service_name}}: how's it going? | 10% off any service for 14 days (code sample BACK10); 3 more electrical services with free quotes |

### SMS per step (incl. follow-ups)

| Code | When | Text (sample) | Chars |
|---|---|---|---:|
| TP0 · V1 New | SMS 1 · offer (marketing SMS consent only) | Electricians Service Team: Hi Sarah, 10% off your first electrical repair visit until Oct 24. Book in 1 tap: est.link/book/8Hd Reply STOP to opt out | 148 |
| TP0 · V1 New | Follow-up · +24 h if not booked (marketing consent) | Electricians Service Team: Still need electrical repair, Sarah? Same-week slots are open and your 10% ends Oct 24: est.link/book/8Hd Reply STOP to opt out | 154 |
| TP0 · V2 New | SMS 1 · offer (marketing SMS consent only) | Electricians Service Team: Hi Sarah, 10% off your first electrical repair visit until Oct 24. Book in 1 tap: est.link/book/8Hd Reply STOP to opt out | 148 |
| TP0 · V2 New | Follow-up · +24 h if not booked (marketing consent) | Electricians Service Team: Still need electrical repair, Sarah? Same-week slots are open and your 10% ends Oct 24: est.link/book/8Hd Reply STOP to opt out | 154 |
| TP1 · V1 New | SMS 1 · transactional (everyone) | Electricians Service Team: You're booked Thu, Oct 22, 10:00 AM-12:00 PM with Razmik. Reschedule: est.link/mana/8Hd | 114 |
| TP1 · V1 New | SMS 2 · cross-book (marketing SMS consent only, +1 h) | Our HVAC team is near you this week: Free service call with any HVAC repair. Code HOME2: est.link/xb1/8Hd Reply STOP to opt out | 127 |
| TP1 · V1 New | Follow-up · day before the visit, 6 PM (transactional) | Electricians Service Team: Reminder, Razmik visits tomorrow 10:00 AM-12:00 PM. Reply C to confirm or R to reschedule: est.link/mana/8Hd | 135 |
| TP1 · V2 New | SMS 1 · transactional (everyone) | Electricians Service Team: You're booked Thu, Oct 22, 10:00 AM-12:00 PM with Razmik. Reschedule: est.link/mana/8Hd | 114 |
| TP1 · V2 New | SMS 2 · add-on (marketing SMS consent only, +1 h) | Add to the same visit: Electrical Safety Check $199. Code SAFE199: est.link/upse/8Hd Reply STOP to opt out | 106 |
| TP1 · V2 New | Follow-up · day before the visit, 6 PM (transactional) | Electricians Service Team: Reminder, Razmik visits tomorrow 10:00 AM-12:00 PM. Reply C to confirm or R to reschedule: est.link/mana/8Hd | 135 |
| TP2 · V1 New | SMS 1 · transactional (everyone) | Electricians Service Team: Razmik is on the way, arriving 10:40-11:00 AM. 1,657 repairs, 1,600+ 5-star reviews. Track: est.link/trac/8Hd | 136 |
| TP2 · V1 New | SMS 2 · cross-book (marketing SMS consent only, 1 min later) | Our HVAC team is near you this week: Free service call with any HVAC repair. Code HOME2: est.link/xb1/8Hd Reply STOP to opt out | 127 |
| TP2 · V2 New | SMS 1 · transactional (everyone) | Electricians Service Team: Razmik is on the way, arriving 10:40-11:00 AM. 1,657 repairs, 1,600+ 5-star reviews. Track: est.link/trac/8Hd | 136 |
| TP2 · V2 New | SMS 2 · coupon (marketing SMS consent only, 1 min later) | While Razmik is there: Electrical Safety Check $199, today only. Show code SAFE199. Reply STOP to opt out | 105 |
| TP2 · V2 New | SMS 2 · Passport members (replaces the line above) | While Razmik is there: Electrical Safety Check $199, today only. Code SAFE199. More member offers: est.link/pass/8Hd Reply STOP to opt out | 138 |
| TP3 · V1 New | SMS 1 · transactional (everyone) | Electricians Service Team: Razmik has arrived. Questions during the visit? Call (888) 977-7114 | 94 |
| TP3 · V1 New | SMS 2 · cross-book (marketing SMS consent only, +5 min) | Anything else at home? Our HVAC team can come this week: Free service call with any HVAC repair. Code HOME2. Reply STOP to opt out | 130 |
| TP3 · V2 New | SMS 1 · transactional (everyone) | Electricians Service Team: Razmik has arrived. Questions during the visit? Call (888) 977-7114 | 94 |
| TP3 · V2 New | SMS 2 · add-on (marketing SMS consent only, +5 min) | While Razmik is there: Electrical Safety Check $199, today only. Code SAFE199. Reply STOP to opt out | 100 |
| TP4 · V1 New | SMS 1 · rating (everyone) | Electricians Service Team: Thanks Sarah! How did Razmik do? Rate 1-5: est.link/rati/8Hd | 87 |
| TP4 · V1 New | SMS 2 · next service (marketing SMS consent only, +1 day) | 10% off your next service (HVAC, Air duct and more) until Oct 24. Code NEXT10: est.link/book/8Hd Reply STOP to opt out | 118 |
| TP4 · V1 New | Follow-up · +24 h if no rating (transactional) | Electricians Service Team: Quick one, Sarah: how did Razmik do? Tap 1-5: est.link/rati/8Hd | 90 |
| TP4 · V1 New | Follow-up · day 5 if no booking (marketing consent) | Electricians Service Team: Your 10% off ends Oct 24. HVAC, Air duct or Plumbing? Code NEXT10: est.link/book/8Hd Reply STOP to opt out | 133 |
| TP4 · V2 New | SMS 1 · rating (everyone) | Electricians Service Team: Thanks Sarah! How did Razmik do? Rate 1-5: est.link/rati/8Hd | 87 |
| TP4 · V2 New | SMS 2 · next service (marketing SMS consent only, +1 day) | 10% off your next electrical service until Oct 24, e.g. EV charger installation. Code NEXT10: est.link/book/8Hd Reply STOP to opt out | 133 |
| TP4 · V2 New | Follow-up · +24 h if no rating (transactional) | Electricians Service Team: Quick one, Sarah: how did Razmik do? Tap 1-5: est.link/rati/8Hd | 90 |
| TP4 · V2 New | Follow-up · day 5 if no booking (marketing consent) | Electricians Service Team: Your 10% off your next electrical service ends Oct 24. Code NEXT10: est.link/book/8Hd Reply STOP to opt out | 134 |
| TP5 · New | SMS 1 · referral (marketing SMS consent only, promoters) | Thanks for the 5 stars, Sarah! Share Electricians Service Team and you both get [reward]: est.link/refe/8Hd Reply STOP to opt out | 129 |
| TP5 · New | Follow-up · day 3 if the link was not shared (marketing consent) | Electricians Service Team: Sarah, your [reward] referral is still waiting. Share your link: est.link/refe/8Hd Reply STOP to opt out | 131 |
| TP6 · New | SMS 1 · transactional (everyone) | Electricians Service Team: Your visit moved to Thu, Oct 22, 10:00 AM-12:00 PM. Change it: est.link/mana/8Hd | 107 |
| TP6 · New | Follow-up · day before the new visit, 6 PM (transactional) | Electricians Service Team: Reminder, your visit is tomorrow 10:00 AM-12:00 PM with Razmik. Reply C to confirm or R to reschedule: est.link/mana/8Hd | 147 |
| TP7 · V1 New | SMS 1 · transactional (everyone) | Electricians Service Team: Your Thu, Oct 22 visit is cancelled. Rebook in 1 tap: est.link/rebo/8Hd or reply with a time that works | 130 |
| TP7 · V1 New | Follow-up · +48 h if not rebooked (marketing consent) | Electricians Service Team: Still need help with electrical repair, Sarah? Pick a new time in 1 tap: est.link/rebo/8Hd Reply STOP to opt out | 139 |
| TP7 · V2 New | SMS 1 · transactional (everyone) | Electricians Service Team: Your Thu, Oct 22 visit is cancelled. Rebook in 1 tap: est.link/rebo/8Hd or reply with a time that works | 130 |
| TP7 · V2 New | Follow-up · +48 h if not rebooked (marketing consent) | Electricians Service Team: Still need help with electrical repair, Sarah? Pick a new time in 1 tap: est.link/rebo/8Hd Reply STOP to opt out | 139 |
| TP8 · V1 New | SMS 1 · reminder (marketing SMS consent only) | Electricians Service Team: Your yearly electrical check is due Nov 1, 2026. Add a HVAC check the same week: est.link/book/8Hd Reply STOP to opt out | 147 |
| TP8 · V1 New | Follow-up · +3 days if not booked (marketing consent) | Electricians Service Team: Your electrical check is still due Nov 1, 2026. Same-week slots open: est.link/book/8Hd Reply STOP to opt out | 136 |
| TP8 · V1 New | Follow-up · +7 days, last one (marketing consent) | Electricians Service Team: Last reminder: book your yearly electrical check with code SAFE199: est.link/book/8Hd Reply STOP to opt out | 134 |
| TP8 · V2 New | SMS 1 · reminder (marketing SMS consent only) | Electricians Service Team: Your yearly electrical check is due Nov 1, 2026. Electrical Safety Check $199, book: est.link/book/8Hd Reply STOP to opt out | 151 |
| TP8 · V2 New | Follow-up · +3 days if not booked (marketing consent) | Electricians Service Team: Your electrical check is still due Nov 1, 2026. Same-week slots open: est.link/book/8Hd Reply STOP to opt out | 136 |
| TP8 · V2 New | Follow-up · +7 days, last one (marketing consent) | Electricians Service Team: Last reminder: book your yearly electrical check with code SAFE199: est.link/book/8Hd Reply STOP to opt out | 134 |
| TP9 · V1 New | SMS 1 · check-in (marketing SMS consent only, day 180, 10 AM local) | Electricians Service Team: Hi Sarah, 6 months since your electrical repair. Need anything else? 10% off until Nov 4: est.link/book/8Hd Reply STOP to opt out | 156 |
| TP9 · V1 New | Follow-up · day 3 if not booked, last one (marketing consent) | Electricians Service Team: Last reminder, Sarah: 10% off any service ends Nov 4. Code BACK10: est.link/book/8Hd Reply STOP to opt out | 133 |
| TP9 · V2 New | SMS 1 · check-in (marketing SMS consent only, day 180, 10 AM local) | Electricians Service Team: 6 months since your electrical repair. Ask about EV charger installation: 10% off to Nov 4 est.link/book/8Hd Reply STOP to opt out | 157 |
| TP9 · V2 New | Follow-up · day 3 if not booked, last one (marketing consent) | Electricians Service Team: Last reminder, Sarah: 10% off any service ends Nov 4. Code BACK10: est.link/book/8Hd Reply STOP to opt out | 133 |

Follow-up rules: only if the customer hasn't acted (not booked / rated / shared); day-before reminders on Booked and Rebooked are transactional (reply C/R needs two-way keywords); none on On My Way or Arrived; max one follow-up per step except PM (2) and Completed (rating + coupon).

## Channels sidebar (Oct 21)

The Transactional Workflow tab has a channel sidebar — **PRINT · EMAIL · SMS · IN-APP · RETARGETING** — that works with the touchpoint bar (pick a step to narrow any channel).

**Next service due: reminder ladder** — Job done: sticker on the unit + service folder (print, email, in-app) → +1 day: next check due saved in the app → Month 6: check-in if nothing booked (email, SMS, in-app, retargeting) → Due −30 days: next service due card + ads → Due date: PM notice + $199 check (email, SMS) → +3/+7 days: follow-up texts → +14 days: voucher card by mail. Every step stops when the customer books.

**PRINT**
- Next Service Due sticker, today: three designs (HVAC Alliance Expert STOP/warranty, 5 Star Appliance QR, Appliance Repair & HVAC QR) with three phone numbers and a handwritten date.
- Next Service Due sticker, NEW: one template per brand, brand phone, date / service / tech / job #, QR = booking link with the job ID ("Scan to book in 30 seconds"), Passport line.
- Service folder (PI folder) with the A-Player technician: cover with tech photo and proof; inside left = meet the tech, invoice, warranty; inside right = next service due, 10% next service, other departments (V1) or same-trade services (V2), Passport QR.
- Promotional: neighbor door hanger (neighborhood replacement cycle, free service call fee for neighbors) and a wallet-size voucher card with a unique code per home (instead of the "$100 bill" look).

**IN-APP** (screens suggested from the delivery-app reference): booking confirmed + upsell coupon · GPS tech location with name, photo, ETA, call/message · About your tech (A-Player badge, jobs done, 5-star reviews, years, skills; personal lines only if the tech writes and approves them, never financial or private details) · tech arrived + on-site coupon · job done + next-service coupon · tip (100% to the tech, optional) · rating + NPS (5★ / 9–10 → referral, 0–6 → manager call) · referral share · next service due card · 6-month check-in card.

**RETARGETING**: SAL not booked (7 days) · suppress booked and in-visit customers · completed jobs V1 (next-best departments) / V2 (same-trade services) for 30 days · promoters as a lookalike seed · cancelled not rebooked (7 days) · PM due in 30 days · 6-month no booking · geo radius around completed jobs (neighbor ads + door hangers). Tech photo/name in ads only with the tech's written OK.

## Channels on Members and Non-Member (Oct 21)

The same sidebar is on the **Members** and **Non-Member** tabs. EMAIL shows each tab's existing content (Members library; Non-member weekly workflow and planner); the other channels are boards filtered by stage.

- **Members (Passport)** — PRINT: welcome kit (member card, magnet, benefits sheet, window decal), member Next Service Due sticker, “Your year with Passport” savings letter before renewal, tier upgrade postcard. SMS: welcome, first visit (day 7), yearly check due, credits expiring, payment failed, renewal (30 days), win-back (60 days). IN-APP: member card, Home Health Score, credits wallet, member offers, renewal recap, upgrade prompt. RETARGETING: suppress active members from acquisition, activate members with no visit, upgrade multi-trade members, win back cancelled members, high-value members as lookalike seed, suppress failed payments.
- **Non-members** — PRINT: seasonal EDDM postcard, neighbor door hanger, join-Passport mailer with the customer's own “members would have saved”. SMS: 5-week promo rotation from the PROMO 2026 offers (Appliance 25% off labor, high-end $1 diagnostic, HVAC 15%, Electrical free service call fee, Plumbing $1 diagnostic), theme/weather week, Passport invite after a 2nd job. IN-APP: seasonal promo card, Passport at checkout, “members save” on the receipt. RETARGETING: promo week, theme week, site visitors, 2+ jobs non-members, suppress booked.

## Sources

- Customer.io HTML exports received 2026-10-20: Appointment confirmed (V1 Regions all trades, V2 single trade); Tech on my way (V1, V2); Your Technician Has Arrived; One call for more of your home-service needs; How's your appliance working now?; Your 10% returning-customer offer; Join the 5 Star Appliance Repair Referral Program + reminder; Your Next Electrical Check-in + 5 electrical past-due notices; two Serviceable SAL welcome offers; Your Appointment Has Been Rescheduled; Job Cancelled body.
- Customer.io campaigns list (Automation, Starts when, Category, Channels, Sent 30d), screenshot 2026-10-20.
- Workflows Optimization notes and Fireflies meeting (planned changes).

## Landing Page channel
Every channel sidebar (Transactional, Members, Non-members) now has LANDING PAGE. Rule: one message, one page. The link carries job, customer and code so the page opens prefilled with the same offer; UTM per channel for attribution.

## Non-member nurture campaign (example)
| Step | Email | Retargeting | Landing page |
|---|---|---|---|
| Day 0 | Email 1 · Offer 1: 25% off laundry labor | Ad 1 (list + LP visitors) | LP 1 · 25% off labor |
| Day 3, not opened | Email 2 · Offer 2: $1 high-end diagnostic (new subject, offer, send time) | Ad 2 (non-openers, high-end brand) | LP 2 · $1 diagnostic |
| Day 3, opened not booked | Reminder · 25% still available, real end date | Ad 1 continues | LP 1 prefilled |
| Day 10–14 | Last call to clickers, then exit | Stop day 14 | Thank-you → Passport invite |

Exit on booking in any channel (suppress ads within 1 hour) and hand off to Job Booked. Hold out 10%.
Fix first: offer mismatch (25% vs 20% vs $200), Ad 2 → wrong page, resetting countdown, "Limited appointments" claim, 6-field form, spring/summer copy in October.
