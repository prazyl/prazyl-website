# Claude Code Instructions

## About this site

Marketing website for **Prazyl** — claims management software for **independent appraisers** (not adjusters). Currently in **private beta** with no live pricing. All CTAs route to a waitlist.

The companion app lives at https://prazyl.app (separate Next.js project at `C:\Users\ryan\dev\v0-prazyl-app`).

## Development Commands

- `npm run dev` — Start dev server (typically http://localhost:3000 or next available port)
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npx tsc --noEmit` — Type check

## Deployment

1. **Git deployment (automatic via webhook):**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Manual Vercel deployment (if git webhook fails):**
   ```bash
   vercel --prod
   ```

## Project Structure

Next.js 15 App Router project:
- TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Lucide React for icons

Pages:
- `/` — home (Hero, Features, Workflow, Waitlist, FAQ)
- `/integrations` — integrations catalog
- `/privacy`, `/terms` — redirected to prazyl.app via `next.config.ts`

## Brand & Style

- **Accent color: teal** (`teal-400` / `teal-500`) to match the app's primary `oklch(0.75 0.15 175)`. Do NOT use blue as the brand accent — that was the old palette.
- Background: `#0a0a0a` (near-black). Cards: `#18181b`. Borders: `#27272a`.
- Decorative variety colors in feature cards (purple, amber, rose, etc.) are intentional and stay.

## Content rules

- Always say "appraiser", never "adjuster" — Prazyl is for independent appraisers.
- "Prazyl" (no macron) in body copy. The logotype keeps "PRAZYL".
- No fabricated stats, testimonials, or user counts. Beta = small numbers, lean into it.
- Pricing copy is **off the site** while in beta. Hero/CTAs go to the waitlist (`#waitlist` anchor).
- See `~/.claude/projects/.../memory/project_pricing_strategy.md` for the pricing direction.
