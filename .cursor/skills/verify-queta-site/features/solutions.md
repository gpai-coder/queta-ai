# Solution pages

Persona-specific solution detail pages.

## Sub-features

- `solutions-lifestyle` — `/solutions/lifestyle`
- `solutions-realtor` — `/solutions/realtor`
- `solutions-trader` — `/solutions/trader`
- `solutions-office-manager` — `/solutions/office-manager`

## How to get to it (user POV)

- Home persona cards
- Header **Solutions** dropdown
- Direct URLs above

## Driving it with Playwright

- Visit each slug; expect HTTP 200.
- Compare replica and original screenshot pairs per slug.

## Gotchas

- `/solutions/lifestyle-user` 404 on live site; replica uses `/solutions/lifestyle` like queta.ai home links.
