# Courtney du Preez — Portfolio

Creative Director & Content Strategist — Sport, Lifestyle & Fashion

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Done. Every push to `main` auto-deploys.

## Contact Form

The contact form currently simulates a submission. To make it live:

**Option A — Formspree (easiest, free):**
1. Go to formspree.io, create a form, get your form ID
2. In `components/Contact.tsx`, replace the `handleSubmit` function:
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

**Option B — Resend (more control):**
Create an API route at `app/api/contact/route.ts` using the Resend SDK.

## Adding Real Photos

Replace placeholder content in `components/Work.tsx` by adding images to `/public/images/` and importing them with `next/image`.

## Customisation

- Colors: `tailwind.config.ts` → `colors`
- Fonts: `app/layout.tsx` → swap Google Font imports
- Content: Edit component files directly
