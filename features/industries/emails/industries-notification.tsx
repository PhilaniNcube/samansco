import { Link } from "@react-email/components";
import {
  BodyText,
  DetailRow,
  DetailTable,
  EmailShell,
  emailTheme,
  ReferencePill,
} from "@/lib/email/email-shell";
import {
  INDUSTRIES_DESK,
  industriesEnquiryLabel,
} from "../industries-enquiry-options";
import type { IndustriesEnquiryInput } from "../industries-enquiry-schema";

export type IndustriesNotificationProps = IndustriesEnquiryInput & {
  reference: string;
  submittedAt: string;
};

const harareTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Harare",
});

export function industriesNotificationSubject(
  input: IndustriesEnquiryInput,
): string {
  const organisation = input.organisation.replace(/[\r\n]+/g, " ").trim();

  return `Industrial enquiry · ${organisation}`;
}

/** Internal routing email sent to the Samansco Industries desk. */
export function IndustriesNotificationEmail(
  props: IndustriesNotificationProps = previewProps,
) {
  const { reference, submittedAt, ...input } = {
    ...previewProps,
    ...props,
  };

  return (
    <EmailShell
      preview={`${input.fullName} (${input.organisation}) · ${industriesEnquiryLabel(input.enquiryType)}`}
      eyebrow={`Direct inquiry · ${INDUSTRIES_DESK.company}`}
      title={`${input.organisation} submitted an industrial brief`}
      footerNote="You are receiving this because this address is the routing desk for Samansco Industries."
    >
      <BodyText>
        Submitted through the Samansco Industries page to the{" "}
        <strong>{INDUSTRIES_DESK.desk}</strong>.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow
          label="Received"
          value={harareTime.format(new Date(submittedAt))}
        />
        <DetailRow
          label="Enquiry type"
          value={industriesEnquiryLabel(input.enquiryType)}
        />
        <DetailRow label="Contact" value={input.fullName} />
        <DetailRow
          label="Email"
          value={
            <Link
              href={`mailto:${input.email}`}
              style={{ color: emailTheme.brand, textDecoration: "underline" }}
            >
              {input.email}
            </Link>
          }
        />
        <DetailRow label="Organisation" value={input.organisation} />
        <DetailRow
          label="Site location"
          value={input.site || "Not specified"}
          last
        />
      </DetailTable>

      <BodyText muted>
        Reply directly to this message to answer {input.fullName.split(" ")[0]}.
        Quote {reference} in all correspondence.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: IndustriesNotificationProps = {
  reference: "SAM-IND-2026-418219",
  submittedAt: new Date().toISOString(),
  fullName: "Rufaro Chikwanda",
  organisation: "Masvingo Cold Storage",
  email: "rufaro@masvingocold.co.zw",
  enquiryType: "epc",
  site: "Masvingo, Zimbabwe",
};

IndustriesNotificationEmail.PreviewProps = previewProps;

export default IndustriesNotificationEmail;
