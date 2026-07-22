# Sajad Digital Portfolio

Personal portfolio for a freelance digital marketing consultant.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion + GSAP
- React Hook Form + Zod
- Lucide icons

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to your production domain.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Customize

- Brand / contact: `src/data/site.ts`
- Services: `src/data/services.ts`
- Case studies: `src/data/case-studies.ts`
- About / testimonials: `src/data/content.ts`
- Calendly URL in `siteConfig.calendlyUrl`

## Deploy

Vercel-ready. Connect repo and set `NEXT_PUBLIC_SITE_URL`.
