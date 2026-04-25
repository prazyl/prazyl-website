# Prazyl Marketing Website

Marketing site for [Prazyl](https://prazyl.com) — claims management software for independent appraisers. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

The site is currently positioned as **private beta with waitlist**. The companion app lives at https://prazyl.app.

## Quick start

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000 (or the next available port).

## Project structure

```
app/
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── WorkflowSection.tsx       # "How it works" — 5-step walkthrough
│   ├── WaitlistSection.tsx       # Beta waitlist CTA (replaces pricing)
│   ├── FAQSection.tsx
│   └── Footer.tsx
├── integrations/
│   └── page.tsx                  # /integrations
├── layout.tsx                    # Root layout, SEO metadata
├── page.tsx                      # Home page
├── globals.css
└── sitemap.xml/route.ts
public/
└── (static assets)
next.config.ts                    # /privacy and /terms redirects to prazyl.app
```

## Deployment

Auto-deploys to Vercel on push to `main`. Production: https://prazyl.com.

Manual deploy:
```bash
vercel --prod
```

## Editing content

- **Hero copy**: `app/components/HeroSection.tsx`
- **Feature list**: `app/components/FeaturesSection.tsx` — edit the `features` array
- **Workflow steps**: `app/components/WorkflowSection.tsx` — edit the `steps` array
- **Waitlist CTA**: `app/components/WaitlistSection.tsx`
- **FAQ entries**: `app/components/FAQSection.tsx` — edit the `faqs` array
- **Integrations catalog**: `app/integrations/page.tsx` — edit the `integrations` array (statuses: `available` or `coming-soon`)
- **SEO/metadata**: `app/layout.tsx`

## Brand

- **Accent: teal** to match the app. See `CLAUDE.md` for color tokens.
- Always "appraiser", never "adjuster".
- No fabricated stats, testimonials, or user numbers.

## License

Copyright © Prazyl, Inc. All rights reserved.
