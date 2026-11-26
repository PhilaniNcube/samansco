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

export type TradingNotificationProps = TradingEnquiryInput & {
  reference: string;
  submittedAt: string;
};

const harareTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Harare",
});

export function tradingNotificationSubject(
  input: TradingEnquiryInput,
): string {
  const entity = input.entity.replace(/[\r\n]+/g, " ").trim();

  return `Offtake enquiry · ${entity}`;
}

/** Internal routing email sent to the Samansco Energy trading desk. */
export function TradingNotificationEmail(
  props: TradingNotificationProps = previewProps,
) {
  const { reference, submittedAt, ...input } = {
    ...previewProps,
    ...props,
  };

  return (
    <EmailShell
      preview={`${input.entity} · ${baseloadLabel(input.baseload)}`}
      eyebrow={`Offtake enquiry · ${ENERGY_DESK.company}`}
      title={`${input.entity} requested trading desk engagement`}
      footerNote="You are receiving this because this address is the routing desk for Samansco Energy."
    >
      <BodyText>
        Submitted through the Samansco Energy trading desk form to the{" "}
        <strong>{ENERGY_DESK.desk}</strong>.
      </BodyText>

      <ReferencePill reference={reference} />

      <DetailTable>
        <DetailRow
          label="Received"
          value={harareTime.format(new Date(submittedAt))}
        />
        <DetailRow label="Offtaker entity" value={input.entity} />
        <DetailRow
          label="Corporate email"
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
          label="Target baseload"
          value={baseloadLabel(input.baseload)}
          last
        />
      </DetailTable>

      <BodyText muted>
        Reply directly to this message to reach {input.entity}. Quote{" "}
        {reference} in all correspondence.
      </BodyText>
    </EmailShell>
  );
}

const previewProps: TradingNotificationProps = {
  reference: "SAM-ENG-2026-847210",
  submittedAt: new Date().toISOString(),
  entity: "Zimplats Mining",
  email: "power@zimplats.co.zw",
  baseload: "5-20",
};

TradingNotificationEmail.PreviewProps = previewProps;

export default TradingNotificationEmail;
