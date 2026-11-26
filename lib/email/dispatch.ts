import "server-only";

import { randomInt } from "node:crypto";
import { headers } from "next/headers";
import * as v from "valibot";

export const HONEYPOT_FIELD = "companyWebsite";

/**
 * Best-effort throttle. Serverless instances do not share memory, so this
 * stops casual repeat submissions rather than determined abuse; pair it with
 * Resend's own rate limits and a WAF rule before launch.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const recentSubmissions = new Map<string, number[]>();

export function isHoneypotTriggered(formData: FormData): boolean {
  const value = formData.get(HONEYPOT_FIELD);
  return typeof value === "string" && value !== "";
}

export async function getClientIp(): Promise<string> {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown"
  );
}

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  recentSubmissions.set(key, timestamps);

  if (recentSubmissions.size > 500) {
    for (const [entryKey, entry] of recentSubmissions) {
      if (entry.every((timestamp) => now - timestamp >= RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(entryKey);
      }
    }
  }

  return false;
}

export function createReference(prefix = "SAM"): string {
  return `${prefix}-${new Date().getFullYear()}-${randomInt(100000, 999999)}`;
}

/** Optional override used to funnel every notification into one inbox. */
export function notificationRecipients(fallback: string): string[] {
  const override = process.env.ENQUIRY_NOTIFICATION_EMAIL?.trim();

  if (!override) {
    return [fallback];
  }

  const recipients = override
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  return recipients.length > 0 ? recipients : [fallback];
}

export function flattenValibotErrors(
  issues: [v.BaseIssue<unknown>, ...v.BaseIssue<unknown>[]],
): Record<string, string[] | undefined> {
  const flattened = v.flatten(issues);
  const result: Record<string, string[] | undefined> = {};

  if (flattened.nested) {
    for (const [key, messages] of Object.entries(flattened.nested)) {
      if (messages && messages.length > 0) {
        result[key] = messages;
      }
    }
  }

  return result;
}
