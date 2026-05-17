# clicknpop-entreprise-landing

Placeholder Niveau 3 pour **entreprise.clicknpop.fr** (Click'n Pop).

App entreprise complète prévue J 21/05/2026 — ce repo remplit le sous-domaine
en attendant et capture la waitlist commercial via Supabase
(`public.commercial_leads`, `source_lead='placeholder_entreprise_landing'`).

## Stack

Next.js 16 + React 19 + OpenNext Cloudflare Workers + Tailwind 4
+ Fraunces serif + IBM Plex Sans + IBM Plex Mono. Stack alignée
`clicknpop-landing` (apex) et `clicknpop-candidat` (app candidat).

## Secrets requis (Cloudflare)

```bash
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
```

`SUPABASE_URL` est en vars publiques (wrangler.jsonc).

## Commandes

```bash
npm install
npm run dev
npm run deploy   # OpenNext build + Cloudflare deploy
```
