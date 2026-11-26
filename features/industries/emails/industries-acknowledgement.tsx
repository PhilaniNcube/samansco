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

export type IndustriesAcknowledgementProps = IndustriesEnquiryInput & {
  reference: string;
};

/** Confirmation sent to the person who submitted the Industries brief. */
export function IndustriesAcknowledgementEmail(
  props: IndustriesAcknowledgementProps = previewProps,
) {
  const { reference, fullName, organisation, enquiryType, site, email } = {
    ...previewProps,
    ...props,
  };
  const firstName = fullName.trim().split(/\s+/)[0] || fullName;

  return (
    <EmailShell
      preview={`We have received your industrial brief ${reference}.`}
      eyebrow="Brief received"
      title={`Thank you, ${firstName}. Your brief is with ${INDUSTRIES_DESK.company}.`}
      footerNote="You are receiving this message because this address was submitted on our Samansco Industries enquiry dialog."
    >
      <BodyText>
        We have logged your brief with the{" "}
        <strong>{INDUSTRIES_DESK.desk}</strong> at our Harare Central Logistics
        facility. A senior engineering representative will respond within{" "}
        <strong>24 business hours</strong>.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow label="Organisation" value={organisation} />
        <DetailRow
          label="Enquiry type"
          value={industriesEnquiryLabel(enquiryType)}
        />
        <DetailRow
          label="Site location"
          value={site || "Not specified"}
          last
        />
      </DetailTable>

      <BodyText muted>
        Need to add technical files or drawings? Reply to this address or write
        to{" "}
        <Link
          href={`mailto:${INDUSTRIES_DESK.email}?subject=${encodeURIComponent(reference)}`}
          style={{ color: emailTheme.brand, textDecoration: "underline" }}
        >
          {INDUSTRIES_DESK.email}
        </Link>{" "}
        quoting {reference}. This confirmation was sent to {email}.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: IndustriesAcknowledgementProps = {
  reference: "SAM-IND-2026-418219",
  fullName: "Rufaro Chikwanda",
  organisation: "Masvingo Cold Storage",
  email: "rufaro@masvingocold.co.zw",
  enquiryType: "epc",
  site: "Masvingo, Zimbabwe",
};

IndustriesAcknowledgementEmail.PreviewProps = previewProps;

export default IndustriesAcknowledgementEmail;
