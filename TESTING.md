---
title: Testing
tags: [claudecode, testing]
---
```bash
pip install playwright --break-system-packages && playwright install chromium
```
```python
import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':1440,'height':1000})
    errs=[]; pg.on('pageerror',lambda e: errs.append(str(e)))
    for h in ['#calculator','#members','#non-member','#brand-logic','#transactional','#personas','#database','#benchmark']:
        await pg.goto('file:///path/index.html'+h); await pg.wait_for_timeout(1200)
    await pg.click('#pers-sub button[data-p="dna"]'); await pg.wait_for_timeout(800)
    await pg.click('#pers-sub button[data-p="gantt"]'); await pg.wait_for_timeout(800)
    await pg.click('#ab-fab'); await pg.fill('#ab-i','projection'); await pg.press('#ab-i','Enter')
    print(errs); await b.close()
asyncio.run(main())
```
- Syntax-check edited inline scripts: extract `<script>` bodies and run `node --check`.
- Animated SVG nodes may need `click(force=True)`.
- Live Coach calls wait for audio; click `#sc-voice` to turn voice off in tests.
