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

export type EnquiryNotificationProps = EnquiryInput & {
  reference: string;
  submittedAt: string;
};

const harareTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Harare",
});

export function enquiryNotificationSubject(input: EnquiryInput): string {
  const organisation = input.organisation.replace(/[\r\n]+/g, " ").trim();

  return `New enquiry · ${destinationFor(input.division).company} · ${organisation}`;
}

/** Internal routing email sent to the operating-company desk. */
export function EnquiryNotificationEmail(
  props: EnquiryNotificationProps = previewProps,
) {
  const { reference, submittedAt, ...input } = {
    ...previewProps,
    ...props,
  };
  const destination = destinationFor(input.division);

  return (
    <EmailShell
      preview={`${input.name} (${input.organisation}) — ${input.engagementNature}`}
      eyebrow={`Institutional enquiry · ${destination.company}`}
      title={`${input.organisation} has submitted an enquiry`}
      footerNote="You are receiving this because this address is the routing desk for the selected operating entity."
    >
      <BodyText>
        Routed to the <strong>{destination.desk}</strong>. The sender was told to
        expect a response within 24 business hours.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow label="Received" value={harareTime.format(new Date(submittedAt))} />
        <DetailRow label="Operating entity" value={divisionLabel(input.division)} />
        <DetailRow label="Nature" value={input.engagementNature} />
        <DetailRow label="Contact" value={input.name} />
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
        <DetailRow
          label="Telephone"
          value={
            <Link
              href={`tel:${input.phone.replace(/[^+\d]/g, "")}`}
              style={{ color: emailTheme.ink, textDecoration: "none" }}
            >
              {input.phone}
            </Link>
          }
        />
        <DetailRow label="Organisation" value={input.organisation} last />
      </DetailTable>

      <Section style={{ marginTop: "24px" }}>
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
          Project scope
        </Text>
      </Section>

      <QuoteBlock>{input.message}</QuoteBlock>

      <BodyText muted>
        Reply directly to this message to answer {input.name.split(" ")[0]} — the
        reply-to address is the enquirer&apos;s own inbox. Quote {reference} in
        all correspondence.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: EnquiryNotificationProps = {
  reference: "SAM-2026-4182",
  submittedAt: new Date().toISOString(),
  name: "Tendai Mashingaidze",
  organisation: "Anglo American Platinum",
  email: "tendai.m@organization.com",
  phone: "+263 77 123 4567",
  division: "industries",
  engagementNature: "Commercial RFP / Tender",
  message:
    "We are tendering a 4.2 MW rooftop and ground-mount hybrid at our Unki mine offices. Please advise on EPC scope, transformer sizing and a delivery schedule for Q3.",
  confirmation: "on",
};

EnquiryNotificationEmail.PreviewProps = previewProps;

export default EnquiryNotificationEmail;
