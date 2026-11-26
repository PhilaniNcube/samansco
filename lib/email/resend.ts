import "server-only";

import { Resend } from "resend";

/**
 * Lazily created Resend client. Constructing it at module scope would throw
 * during `next build` on machines without the API key, and would also drop
 * the key for the whole process after the first import.
 */
let client: Resend | null = null;

export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local (see .env.example).",
    );
  }

  client ??= new Resend(apiKey);
  return client;
}

const DEFAULT_FROM = "Samansco Group <enquiries@samansco.com>";

/** Verified sender for all transactional mail. */
export function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
}

/**
 * Absolute base URL for links inside emails. Falls back to the production
 * domain so previews and local runs still render usable links.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.samansco.com";

  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

/** Marks a missing configuration as a startup problem, not a mail problem. */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
