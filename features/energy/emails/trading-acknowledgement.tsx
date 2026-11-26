import { Link } from "@react-email/components";
import {
  BodyText,
  DetailRow,
  DetailTable,
  EmailShell,
  emailTheme,
  ReferencePill,
} from "@/lib/email/email-shell";
import { baseloadLabel, ENERGY_DESK } from "../trading-enquiry-options";
import type { TradingEnquiryInput } from "../trading-enquiry-schema";

export type TradingAcknowledgementProps = TradingEnquiryInput & {
  reference: string;
};

/** Confirmation sent to the person who submitted the Energy trading enquiry. */
export function TradingAcknowledgementEmail(
  props: TradingAcknowledgementProps = previewProps,
) {
  const { reference, entity, email, baseload } = {
    ...previewProps,
    ...props,
  };

  return (
    <EmailShell
      preview={`We have received your offtake enquiry ${reference}.`}
      eyebrow="Offtake enquiry received"
      title={`Your enquiry is with the ${ENERGY_DESK.company} trading desk.`}
      footerNote="You are receiving this message because this address was submitted on our Samansco Energy offtake form."
    >
      <BodyText>
        We have logged your offtake enquiry for <strong>{entity}</strong> with
        our <strong>{ENERGY_DESK.desk}</strong>. A trading officer will respond
        within <strong>24 hours</strong>.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow label="Offtaker entity" value={entity} />
        <DetailRow
          label="Target baseload"
          value={baseloadLabel(baseload)}
          last
        />
      </DetailTable>

      <BodyText muted>
        Need to share load profiles or metering intervals? Reply to this address
        or write to{" "}
        <Link
          href={`mailto:${ENERGY_DESK.email}?subject=${encodeURIComponent(reference)}`}
          style={{ color: emailTheme.brand, textDecoration: "underline" }}
        >
          {ENERGY_DESK.email}
        </Link>{" "}
        quoting {reference}. This confirmation was sent to {email}.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: TradingAcknowledgementProps = {
  reference: "SAM-ENG-2026-847210",
  entity: "Zimplats Mining",
  email: "power@zimplats.co.zw",
  baseload: "5-20",
};

TradingAcknowledgementEmail.PreviewProps = previewProps;

export default TradingAcknowledgementEmail;
