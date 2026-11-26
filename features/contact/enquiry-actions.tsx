"use server";

import { randomInt } from "node:crypto";
import { headers } from "next/headers";
import { z } from "zod";
import { getFromAddress, getResendClient } from "@/lib/email/resend";
import { destinationFor } from "./enquiry-options";
import { enquirySchema } from "./enquiry-schema";
import { type EnquiryFormState, type EnquiryDraft } from "./enquiry-state";
import { EnquiryAcknowledgementEmail } from "./emails/enquiry-acknowledgement";
import {
  EnquiryNotificationEmail,
  enquiryNotificationSubject,
} from "./emails/enquiry-notification";

const HONEYPOT_FIELD = "companyWebsite";

/**
 * Best-effort throttle. Serverless instances do not share memory, so this
 * stops casual repeat submissions rather than determined abuse; pair it with
 * Resend's own rate limits and a WAF rule before launch.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
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

function createReference(): string {
  return `SAM-${new Date().getFullYear()}-${randomInt(100000, 999999)}`;
}

/** Optional override used to funnel every notification into one inbox. */
function notificationRecipients(fallback: string): string[] {
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

function readDraft(formData: FormData): EnquiryDraft {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.slice(0, 5000) : "";
  };

  return {
    name: read("name"),
    organisation: read("organisation"),
    email: read("email"),
    phone: read("phone"),
    division: read("division"),
    engagementNature: read("engagementNature"),
    message: read("message"),
    confirmation: read("confirmation"),
  };
}

export async function submitEnquiry(
  _previousState: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  const draft = readDraft(formData);
  const attempt = Date.now();

  function fail(
    message: string,
    fieldErrors?: Record<string, string[] | undefined>,
  ): EnquiryFormState {
    return { status: "error", message, fieldErrors, values: draft, attempt };
  }

  const raw = Object.fromEntries(formData) as Record<string, unknown>;

  // Bots fill every field. Accept silently so they cannot calibrate.
  if (typeof raw[HONEYPOT_FIELD] === "string" && raw[HONEYPOT_FIELD] !== "") {
    return {
      status: "success",
      reference: createReference(),
      company: "Samansco Group",
      desk: "Executive Office",
    };
  }

  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    return fail(
      "Check the highlighted fields and submit again.",
      z.flattenError(parsed.error).fieldErrors,
    );
  }

  const input = parsed.data;
  const destination = destinationFor(input.division);

  const requestHeaders = await headers();
  const clientIp =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(clientIp)) {
    return fail(
      "We have received several enquiries from this connection. Please wait a few minutes or email the desk directly.",
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[enquiry] RESEND_API_KEY is missing; the enquiry was not emailed.",
    );

    return fail(
      "Our enquiry desk is briefly unavailable. Please email info@samansco.com and we will respond directly.",
    );
  }

  const reference = createReference();
  const submittedAt = new Date().toISOString();
  const resend = getResendClient();
  const from = getFromAddress();

  try {
    const { error } = await resend.emails.send({
      from,
      to: notificationRecipients(destination.email),
      replyTo: [input.email],
      subject: `[${reference}] ${enquiryNotificationSubject(input)}`,
      react: (
        <EnquiryNotificationEmail
          {...input}
          reference={reference}
          submittedAt={submittedAt}
        />
      ),
    });

    if (error) {
      console.error("[enquiry] Resend rejected the notification", error);

      return fail(
        "We could not dispatch your enquiry. Please try again in a moment or email info@samansco.com.",
      );
    }
  } catch (error) {
    console.error("[enquiry] Failed to send the notification", error);

    return fail(
      "We could not dispatch your enquiry. Please try again in a moment or email info@samansco.com.",
    );
  }

  // The acknowledgement is a courtesy: never fail a routed enquiry over it.
  try {
    const { error } = await resend.emails.send({
      from,
      to: [input.email],
      replyTo: [destination.email],
      subject: `Samansco enquiry received · ${reference}`,
      react: (
        <EnquiryAcknowledgementEmail
          reference={reference}
          name={input.name}
          organisation={input.organisation}
          email={input.email}
          division={input.division}
          engagementNature={input.engagementNature}
          message={input.message}
        />
      ),
    });

    if (error) {
      console.warn("[enquiry] Acknowledgement was not delivered", error);
    }
  } catch (error) {
    console.warn("[enquiry] Acknowledgement threw", error);
  }

  return {
    status: "success",
    reference,
    company: destination.company,
    desk: destination.desk,
  };
}
