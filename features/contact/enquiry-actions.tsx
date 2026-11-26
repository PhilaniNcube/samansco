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
import { destinationFor } from "./enquiry-options";
import { enquirySchema } from "./enquiry-schema";
import { type EnquiryFormState } from "./enquiry-state";
import { EnquiryAcknowledgementEmail } from "./emails/enquiry-acknowledgement";
import {
  EnquiryNotificationEmail,
  enquiryNotificationSubject,
} from "./emails/enquiry-notification";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.slice(0, 5000) : "";
}

export async function submitEnquiry(
  _previousState: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  const attempt = Date.now();

  function fail(
    message: string,
    fieldErrors?: Record<string, string[] | undefined>,
  ): EnquiryFormState {
    return { status: "error", message, fieldErrors, attempt };
  }

  // Bots fill every field. Accept silently so they cannot calibrate.
  if (isHoneypotTriggered(formData)) {
    return {
      status: "success",
      reference: createReference(),
      company: "Samansco Group",
      desk: "Executive Office",
    };
  }

  const rawConfirmation = formData.get("confirmation");
  const payload = {
    name: readString(formData, "name"),
    organisation: readString(formData, "organisation"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    division: readString(formData, "division"),
    engagementNature: readString(formData, "engagementNature"),
    message: readString(formData, "message"),
    confirmation: rawConfirmation === "on" || rawConfirmation === "true",
  };

  const parsed = v.safeParse(enquirySchema, payload);

  if (!parsed.success) {
    return fail(
      "Check the highlighted fields and submit again.",
      flattenValibotErrors(parsed.issues),
    );
  }

  const input = parsed.output;
  const destination = destinationFor(input.division);

  const clientIp = await getClientIp();
  if (isRateLimited(`contact:${clientIp}`)) {
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
