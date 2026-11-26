"use server";

import * as v from "valibot";
import {
  createReference,
  flattenValibotErrors,
  getClientIp,
  isHoneypotTriggered,
  isRateLimited,
  notificationRecipients,
} from "@/lib/email/dispatch";
import { getFromAddress, getResendClient } from "@/lib/email/resend";
import { ENERGY_DESK } from "./trading-enquiry-options";
import { tradingEnquirySchema } from "./trading-enquiry-schema";
import type { TradingEnquiryState } from "./trading-enquiry-state";
import { TradingAcknowledgementEmail } from "./emails/trading-acknowledgement";
import {
  TradingNotificationEmail,
  tradingNotificationSubject,
} from "./emails/trading-notification";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.slice(0, 500) : "";
}

export async function submitTradingEnquiry(
  _previousState: TradingEnquiryState,
  formData: FormData,
): Promise<TradingEnquiryState> {
  const attempt = Date.now();

  function fail(
    message: string,
    fieldErrors?: Record<string, string[] | undefined>,
  ): TradingEnquiryState {
    return { status: "error", message, fieldErrors, attempt };
  }

  if (isHoneypotTriggered(formData)) {
    return {
      status: "success",
      reference: createReference("SAM-ENG"),
    };
  }

  const payload = {
    entity: readString(formData, "entity"),
    email: readString(formData, "email"),
    baseload: readString(formData, "baseload"),
  };

  const parsed = v.safeParse(tradingEnquirySchema, payload);

  if (!parsed.success) {
    return fail(
      "Check the highlighted fields and submit again.",
      flattenValibotErrors(parsed.issues),
    );
  }

  const input = parsed.output;
  const clientIp = await getClientIp();

  if (isRateLimited(`energy:${clientIp}`)) {
    return fail(
      "We have received several enquiries from this connection. Please wait a few minutes or email energy@samansco.com directly.",
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[trading-enquiry] RESEND_API_KEY is missing; the enquiry was not emailed.",
    );

    return fail(
      "Our trading desk is briefly unavailable. Please email energy@samansco.com and we will respond directly.",
    );
  }

  const reference = createReference("SAM-ENG");
  const submittedAt = new Date().toISOString();
  const resend = getResendClient();
  const from = getFromAddress();

  try {
    const { error } = await resend.emails.send({
      from,
      to: notificationRecipients(ENERGY_DESK.email),
      replyTo: [input.email],
      subject: `[${reference}] ${tradingNotificationSubject(input)}`,
      react: (
        <TradingNotificationEmail
          {...input}
          reference={reference}
          submittedAt={submittedAt}
        />
      ),
    });

    if (error) {
      console.error("[trading-enquiry] Resend rejected notification", error);

      return fail(
        "We could not dispatch your offtake enquiry. Please try again in a moment or email energy@samansco.com.",
      );
    }
  } catch (error) {
    console.error("[trading-enquiry] Failed to send notification", error);

    return fail(
      "We could not dispatch your offtake enquiry. Please try again in a moment or email energy@samansco.com.",
    );
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to: [input.email],
      replyTo: [ENERGY_DESK.email],
      subject: `Samansco Energy enquiry received · ${reference}`,
      react: (
        <TradingAcknowledgementEmail {...input} reference={reference} />
      ),
    });

    if (error) {
      console.warn(
        "[trading-enquiry] Acknowledgement was not delivered",
        error,
      );
    }
  } catch (error) {
    console.warn("[trading-enquiry] Acknowledgement threw", error);
  }

  return {
    status: "success",
    reference,
  };
}
