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
import { INDUSTRIES_DESK } from "./industries-enquiry-options";
import { industriesEnquirySchema } from "./industries-enquiry-schema";
import type { IndustriesEnquiryState } from "./industries-enquiry-state";
import { IndustriesAcknowledgementEmail } from "./emails/industries-acknowledgement";
import {
  IndustriesNotificationEmail,
  industriesNotificationSubject,
} from "./emails/industries-notification";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.slice(0, 500) : "";
}

export async function submitIndustriesEnquiry(
  _previousState: IndustriesEnquiryState,
  formData: FormData,
): Promise<IndustriesEnquiryState> {
  const attempt = Date.now();

  function fail(
    message: string,
    fieldErrors?: Record<string, string[] | undefined>,
  ): IndustriesEnquiryState {
    return { status: "error", message, fieldErrors, attempt };
  }

  if (isHoneypotTriggered(formData)) {
    return {
      status: "success",
      reference: createReference("SAM-IND"),
    };
  }

  const payload = {
    fullName: readString(formData, "fullName"),
    organisation: readString(formData, "organisation"),
    email: readString(formData, "email"),
    enquiryType: readString(formData, "enquiryType"),
    site: readString(formData, "site"),
  };

  const parsed = v.safeParse(industriesEnquirySchema, payload);

  if (!parsed.success) {
    return fail(
      "Check the highlighted fields and submit again.",
      flattenValibotErrors(parsed.issues),
    );
  }

  const input = parsed.output;
  const clientIp = await getClientIp();

  if (isRateLimited(`industries:${clientIp}`)) {
    return fail(
      "We have received several enquiries from this connection. Please wait a few minutes or email industries@samansco.com directly.",
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[industries-enquiry] RESEND_API_KEY is missing; the enquiry was not emailed.",
    );

    return fail(
      "Our engineering desk is briefly unavailable. Please email industries@samansco.com and we will respond directly.",
    );
  }

  const reference = createReference("SAM-IND");
  const submittedAt = new Date().toISOString();
  const resend = getResendClient();
  const from = getFromAddress();

  try {
    const { error } = await resend.emails.send({
      from,
      to: notificationRecipients(INDUSTRIES_DESK.email),
      replyTo: [input.email],
      subject: `[${reference}] ${industriesNotificationSubject(input)}`,
      react: (
        <IndustriesNotificationEmail
          {...input}
          reference={reference}
          submittedAt={submittedAt}
        />
      ),
    });

    if (error) {
      console.error("[industries-enquiry] Resend rejected notification", error);

      return fail(
        "We could not dispatch your brief. Please try again in a moment or email industries@samansco.com.",
      );
    }
  } catch (error) {
    console.error("[industries-enquiry] Failed to send notification", error);

    return fail(
      "We could not dispatch your brief. Please try again in a moment or email industries@samansco.com.",
    );
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to: [input.email],
      replyTo: [INDUSTRIES_DESK.email],
      subject: `Samansco Industries brief received · ${reference}`,
      react: (
        <IndustriesAcknowledgementEmail {...input} reference={reference} />
      ),
    });

    if (error) {
      console.warn(
        "[industries-enquiry] Acknowledgement was not delivered",
        error,
      );
    }
  } catch (error) {
    console.warn("[industries-enquiry] Acknowledgement threw", error);
  }

  return {
    status: "success",
    reference,
  };
}
