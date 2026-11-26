import { Link, Section, Text } from "@react-email/components";
import {
  BodyText,
  DetailRow,
  DetailTable,
  EmailShell,
  emailTheme,
  QuoteBlock,
  ReferencePill,
} from "@/lib/email/email-shell";
import type { EnquiryInput } from "../enquiry-schema";
import { destinationFor, divisionLabel } from "../enquiry-options";

export type EnquiryAcknowledgementProps = Pick<
  EnquiryInput,
  "name" | "organisation" | "division" | "engagementNature" | "message" | "email"
> & {
  reference: string;
};

/** Confirmation sent to the person who submitted the enquiry. */
export function EnquiryAcknowledgementEmail(
  props: EnquiryAcknowledgementProps = previewProps,
) {
  const {
    reference,
    name,
    organisation,
    division,
    engagementNature,
    message,
    email,
  } = { ...previewProps, ...props };
  const destination = destinationFor(division);
  const firstName = name.trim().split(/\s+/)[0] || name;

  return (
    <EmailShell
      preview={`We have received your enquiry ${reference} and routed it to ${destination.company}.`}
      eyebrow="Enquiry received"
      title={`Thank you, ${firstName}. Your enquiry is with our ${destination.company} team.`}
      footerNote="You are receiving this message because this address was submitted on our contact form. If that was not you, no further action is needed."
    >
      <BodyText>
        We have logged your institutional enquiry and routed it to the{" "}
        <strong>{destination.desk}</strong>. A senior representative will review
        the scope and respond within <strong>24 business hours</strong>.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow label="Organisation" value={organisation} />
        <DetailRow label="Operating entity" value={divisionLabel(division)} />
        <DetailRow label="Nature" value={engagementNature} last />
      </DetailTable>

      <Section style={{ marginTop: "26px" }}>
        <Text
          style={{
            margin: 0,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: emailTheme.muted,
          }}
        >
          What happens next
        </Text>
        <Text
          style={{
            margin: "10px 0 0",
            fontSize: "15px",
            lineHeight: "24px",
            color: emailTheme.body,
          }}
        >
          1. The {destination.desk} reviews your specifications and commercial
          requirements.
          <br />
          2. A named representative replies directly to this address.
          <br />
          3. If a site visit or technical call is needed, we will propose times.
        </Text>
      </Section>

      <Section style={{ marginTop: "26px" }}>
        <Text
          style={{
            margin: 0,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: emailTheme.muted,
          }}
        >
          Your message
        </Text>
      </Section>

      <QuoteBlock>{message}</QuoteBlock>

      <BodyText muted>
        Need to add something? Reply to this address or write to{" "}
        <Link
          href={`mailto:${destination.email}?subject=${encodeURIComponent(reference)}`}
          style={{ color: emailTheme.brand, textDecoration: "underline" }}
        >
          {destination.email}
        </Link>{" "}
        quoting {reference}. This confirmation was sent to {email}.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: EnquiryAcknowledgementProps = {
  reference: "SAM-2026-4182",
  name: "Tendai Mashingaidze",
  organisation: "Anglo American Platinum",
  division: "industries",
  engagementNature: "Commercial RFP / Tender",
  email: "tendai.m@organization.com",
  message:
    "We are tendering a 4.2 MW rooftop and ground-mount hybrid at our Unki mine offices. Please advise on EPC scope, transformer sizing and a delivery schedule for Q3.",
};

EnquiryAcknowledgementEmail.PreviewProps = previewProps;

export default EnquiryAcknowledgementEmail;
