# Lanoso Corporation — Marketing Site

Production marketing site for [Lanoso Corporation](https://lanosocorp.com): marine systems integration (electrical, automation, instrumentation, engine room machinery). Built with **Next.js 14 (App Router)**, **Tailwind CSS v3**, **Framer Motion**, **Resend**, and **Google Analytics 4**.

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for transactional email. |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Lanoso Website <notifications@yourdomain.com>`. Resend’s `onboarding@resend.dev` only works for the account signup email until you verify a domain. |
| `CONTACT_EMAIL` | Recipient for contact form submissions (defaults to `info@lanosocorp.com`). |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (e.g. `G-XXXXXXXXXX`). Omit to disable analytics. |

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Connect the repository to Vercel.
2. Set the same environment variables in the Vercel project settings.
3. Add your production domain and verify it in Resend for outbound mail.

## Project structure

- `app/` — Routes, layout, metadata, `sitemap.ts`, `robots.ts`, API route `app/api/contact/route.ts`.
- `components/` — UI primitives, layout (navbar, footer), sections, and forms.
- `lib/` — Constants, validation (Zod), rate limiting, Resend client, JSON-LD.
- `types/` — Shared TypeScript types.

## Security

- Security headers are defined in `next.config.js`.
- Contact API: JSON-only, Zod validation, trimmed/max-length fields, IP rate limit (5 requests per hour, in-memory), CORS `Access-Control-Allow-Origin: https://lanosocorp.com` for future split domains.
- No `dangerouslySetInnerHTML` in page content; JSON-LD in the root layout uses a static object only.

## Media

- **Photography** in `public/images/` is sourced from [Unsplash](https://unsplash.com) (Unsplash License). Replace with your own vessel, yard, and team photography when available.

## License

Proprietary — Lanoso Corporation.
