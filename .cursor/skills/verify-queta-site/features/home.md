# Home

Marketing homepage with hero, persona grid, and stats band.

## Sub-features

- `home-hero` — badge, headline, CTAs
- `home-personas` — four persona cards linking to solution pages
- `home-stats` — dark stats section

## How to get to it (user POV)

- Open `/`

## Driving it with Playwright

Preconditions:

- Verification server running via `npm run verify` (or manual `npm run build && npm run start`).

Steps:

- Navigate to `http://127.0.0.1:3000/`
- Expect HTTP 200, no console errors
- Screenshot desktop and mobile via verify script output files `replica-home-*.png`
- Compare to `original-home-*.png` from the same run

## Gotchas

- Persona hover bullets are always visible on small viewports; desktop hides bullets until hover.
