import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SOURCE_LEAD = "placeholder_entreprise_landing";
const TYPE_LEAD = "entreprise";

// Rate limit in-memory : 5 requêtes / IP / 60s.
// In-memory côté Workers : suffisant pour un placeholder waitlist (1 instance
// par isolate, persisté pendant ~quelques minutes). Pour un trafic élevé,
// migrer vers Cloudflare KV ou Durable Object.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const ipHits = new Map<string, number[]>();

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const window = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (window.length >= RATE_MAX) {
    ipHits.set(ip, window);
    return true;
  }
  window.push(now);
  ipHits.set(ip, window);
  return false;
}

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: "missing_env" }, { status: 500 });
  }

  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anon";

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    email?: string;
    prenom?: string;
    raison_sociale?: string;
  };

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const prenom = body.prenom?.trim().slice(0, 50) || null;
  const raisonSociale = body.raison_sociale?.trim().slice(0, 120) || null;

  const sb = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await sb.from("commercial_leads").insert({
    email,
    prenom,
    raison_sociale: raisonSociale,
    source_lead: SOURCE_LEAD,
    type_lead: TYPE_LEAD,
  });

  // Silencieux sur duplicate (UNIQUE email) — doctrine respect privacy.
  if (error && /unique|duplicate|23505/i.test(error.message)) {
    return NextResponse.json({ ok: true });
  }

  if (error) {
    console.error(`[waitlist:${SOURCE_LEAD}] insert error:`, error.message);
    return NextResponse.json({ ok: false, error: "insert_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
