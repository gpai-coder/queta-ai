---
name: verify-queta-site
description: Launch the Queta AI replica, crawl every public route, capture Playwright screenshots at desktop and mobile widths, compare against live queta.ai captures, and run lint, typecheck, and build. Use before shipping visual or route parity changes.
---

# Verify Queta site

Project-local verification for the Queta AI marketing replica.

## Launch

From the repo root:

```bash
npm install
npx playwright install chromium
npm run build
npm run verify
```

`npm run verify` runs lint, typecheck, build, starts `next start` on port 3000, drives routes, writes evidence, then tears down the server.

Ready when `http://127.0.0.1:3000/` returns HTTP 200.

Teardown: the verify script stops the `next start` process it started and removes `.verification-dev-server.pid`. Do not kill processes by name.

## Doctor

Before driving after a failed run:

```bash
test ! -f .verification-dev-server.pid || echo "stale pid file"
curl -sf http://127.0.0.1:3000/ >/dev/null && echo "port 3000 in use" || echo "port 3000 free"
node -v
npm run typecheck
```

Doctor passes when port 3000 is free (unless you intentionally run the verify server), Node is 24.x, and typecheck succeeds.

## Drive

Primary harness: `scripts/verify-site.mjs` via `npm run verify`.

Routes (must return 200 on replica and original):

- `/`
- `/pricing`
- `/about`
- `/contact`
- `/solutions/lifestyle`
- `/solutions/realtor`
- `/solutions/trader`
- `/solutions/office-manager`

For each route and for both `replica` and `original` bases, the script:

1. Loads the page with Playwright (network idle).
2. Records HTTP status, console errors, failed network requests, and broken images.
3. Saves full-page PNGs at 1280×720 and 390×844.

Compare side-by-side pairs under `verification-evidence/<runId>/`:

- `replica-<route>-desktop.png` next to `original-<route>-desktop.png`
- same for `-mobile.png`

## Evidence

Output directory: `verification-evidence/<iso-run-id>/`

Artifacts:

- `summary.json` — per-route audit results
- `verify.log` — one-line per route summary
- PNG screenshots for replica and original

Proof standards:

- Every mapped route returns HTTP 200 on the replica with zero console errors and zero broken images.
- Lint, typecheck, and `next build` exit 0 inside the same verify run.
- Side-by-side screenshots are the visual parity record; layout and copy should match queta.ai closely.

## Cleanup

The verify script stops the server it started. If a run aborts mid-flight:

```bash
kill "$(cat .verification-dev-server.pid)" 2>/dev/null || true
rm -f .verification-dev-server.pid
```

Never delete `verification-evidence/`.

## Helpers

```bash
npm run verify
node scripts/verify-site.mjs
```

Feature map: see [`features/README.md`](features/README.md).
