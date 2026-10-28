# Agent instructions

## Project

Next.js 15 App Router replica of https://www.queta.ai/. Marketing pages only.

## Copy

Edit `src/content/site-content.ts` for all user-facing text. Do not scatter marketing strings in components.

## Verification

Before claiming visual or route parity, run:

```bash
npm run verify
```

Read `.cursor/skills/verify-queta-site/SKILL.md` for launch, doctor, drive, evidence, and cleanup steps.

## Quality gates

```bash
npm run lint
npm run typecheck
npm run build
```

CI runs the same checks on Node 24.

## Routes

Public routes must match `publicRoutes` in `src/content/site-content.ts`.

## Constraints

Do not invent testimonials, founder names, phone numbers, or client logos that are not on queta.ai.
