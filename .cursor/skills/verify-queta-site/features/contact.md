# Contact

Contact hero and demo request form (UI only).

## Sub-features

- `contact-form` — name, email, phone, comments, submit

## How to get to it (user POV)

- Header **Contact** or **Request a Demo**
- `/contact`

## Driving it with Playwright

- Load `/contact`, expect 200, zero console errors.
- Submit is client-side only; no backend on replica.

## Gotchas

- Live queta.ai may POST to a backend; this replica does not.
