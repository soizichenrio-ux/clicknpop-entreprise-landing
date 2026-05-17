"use client";

import { useState } from "react";

interface WaitlistFormProps {
  thirdFieldLabel: string;
  thirdFieldPlaceholder: string;
  thirdFieldName: "raison_sociale" | "nom_cfa";
}

const NBSP = String.fromCharCode(0xa0);

type Status = "idle" | "sending" | "success" | "error";

export default function WaitlistForm({
  thirdFieldLabel,
  thirdFieldPlaceholder,
  thirdFieldName,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [prenom, setPrenom] = useState("");
  const [thirdField, setThirdField] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const body: Record<string, string> = { email: email.trim().toLowerCase() };
      if (prenom.trim()) body.prenom = prenom.trim();
      if (thirdField.trim()) body[thirdFieldName] = thirdField.trim();

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean };
      if (res.ok && data.ok) {
        setStatus("success");
        setEmail("");
        setPrenom("");
        setThirdField("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.12em] text-sauge font-mono mb-2">
          Email professionnel
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="prenom@entreprise.fr"
          className="w-full px-4 py-3 rounded-xl border border-[#262A30]/15 bg-white text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-sauge focus:ring-2 focus:ring-sauge-light/40 transition-colors duration-150"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="block text-xs uppercase tracking-[0.12em] text-sauge font-mono mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            autoComplete="given-name"
            maxLength={50}
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom"
            className="w-full px-4 py-3 rounded-xl border border-[#262A30]/15 bg-white text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-sauge focus:ring-2 focus:ring-sauge-light/40 transition-colors duration-150"
          />
        </div>

        <div>
          <label htmlFor={thirdFieldName} className="block text-xs uppercase tracking-[0.12em] text-sauge font-mono mb-2">
            {thirdFieldLabel}
          </label>
          <input
            type="text"
            id={thirdFieldName}
            name={thirdFieldName}
            autoComplete="organization"
            maxLength={120}
            value={thirdField}
            onChange={(e) => setThirdField(e.target.value)}
            placeholder={thirdFieldPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-[#262A30]/15 bg-white text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-sauge focus:ring-2 focus:ring-sauge-light/40 transition-colors duration-150"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-[#262A30] text-paper py-3 px-7 rounded-xl font-medium tracking-wide hover:bg-[#1A1D1B] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Envoi…" : `Prévenez-moi.${NBSP}→`}
      </button>

      {status === "success" && (
        <p className="text-sm text-sauge italic">
          Merci&#8239;! On vous écrit dès que l&apos;app ouvre.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-[#C49A6C] italic">
          Quelque chose n&apos;a pas marché. Re-essayez dans un instant.
        </p>
      )}
    </form>
  );
}
