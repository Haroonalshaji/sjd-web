# AGENTS.md

## Project

Sajad Digital — personal portfolio / lead-gen site for a freelance digital marketing consultant.

## Stack

Next.js 15 App Router, React 19, TypeScript, Tailwind 4, Framer Motion, GSAP, RHF + Zod.

## Conventions

- Content lives in `src/data/*` — edit there before hardcoding copy in pages.
- SEO via `buildMetadata` + `JsonLd` helpers in `src/lib/seo.tsx`.
- New service pages: add to `services` array (generates `/services/[slug]`).
- New case studies: add to `caseStudies` array (generates `/portfolio/[slug]`).
- Keep dark premium theme tokens in `globals.css` / `:root`.
- Prefer server components; client only for forms, motion, sticky nav.
- No secrets in repo. Use `.env.local`.

## Commands

- `npm run dev` / `npm run build` / `npm run lint`

## Roles

See `docs/agents/` for role-specific guidance.
