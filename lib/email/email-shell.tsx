import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

/**
 * Shared chrome for transactional mail. Inline styles only: email clients
 * strip stylesheets, and the site's Tailwind tokens do not survive delivery.
 */
export const emailTheme = {
  page: "#f9f9ff",
  card: "#ffffff",
  ink: "#141b2b",
  charcoal: "#2b303a",
  body: "#374151",
  muted: "#595e6a",
  hairline: "#e5e7eb",
  band: "#f1f3ff",
  brand: "#b61825",
  success: "#047857",
} as const;

const sans =
  "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif";
const display = `'Space Grotesk', ${sans}`;

export const siteDetails = {
  name: "Samansco Group",
  address: "331 Samora Machel Avenue, Eastlea, Harare, Zimbabwe",
  phone: "+263 242 442645-7",
  email: "info@samansco.com",
  licence: "ZERA Licence No. 0422/GEN · ISO 9001 & ISO 14001 compliant",
} as const;

type EmailShellProps = {
  preview: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  footerNote?: string;
};

export function EmailShell({
  preview,
  eyebrow,
  title,
  children,
  footerNote,
}: EmailShellProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{preview}</Preview>
      <Body
        style={{
          margin: 0,
          padding: "32px 12px",
          backgroundColor: emailTheme.page,
          color: emailTheme.body,
          fontFamily: sans,
          fontSize: "15px",
          lineHeight: "24px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: emailTheme.card,
            border: `1px solid ${emailTheme.hairline}`,
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <Section
            style={{
              backgroundColor: emailTheme.brand,
              height: "4px",
              lineHeight: "4px",
              fontSize: "4px",
            }}
          >
            &nbsp;
          </Section>

          <Section style={{ padding: "24px 32px 20px" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: display,
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: emailTheme.ink,
              }}
            >
              Samansco{" "}
              <span style={{ fontWeight: 400, color: emailTheme.muted }}>
                Group
              </span>
            </Text>
          </Section>

          <Section style={{ padding: "0 32px" }}>
            <Hr
              style={{
                margin: 0,
                border: "none",
                borderTop: `1px solid ${emailTheme.hairline}`,
              }}
            />
          </Section>

          <Section style={{ padding: "28px 32px 8px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: emailTheme.brand,
              }}
            >
              {eyebrow}
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontFamily: display,
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: emailTheme.ink,
              }}
            >
              {title}
            </Text>
          </Section>

          <Section style={{ padding: "12px 32px 8px" }}>{children}</Section>

          <Section style={{ padding: "16px 32px 28px" }}>
            <Hr
              style={{
                margin: "0 0 16px",
                border: "none",
                borderTop: `1px solid ${emailTheme.hairline}`,
              }}
            />
            {footerNote ? (
              <Text
                style={{
                  margin: "0 0 12px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: emailTheme.muted,
                }}
              >
                {footerNote}
              </Text>
            ) : null}
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                lineHeight: "18px",
                color: emailTheme.muted,
              }}
            >
              {siteDetails.name} · {siteDetails.address}
              <br />
              <Link
                href={`tel:${siteDetails.phone.replace(/[^+\d]/g, "")}`}
                style={{ color: emailTheme.muted, textDecoration: "none" }}
              >
                {siteDetails.phone}
              </Link>
              {" · "}
              <Link
                href={`mailto:${siteDetails.email}`}
                style={{ color: emailTheme.muted, textDecoration: "none" }}
              >
                {siteDetails.email}
              </Link>
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontSize: "11px",
                lineHeight: "16px",
                color: emailTheme.muted,
              }}
            >
              {siteDetails.licence}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

type DetailRowProps = {
  label: string;
  value: ReactNode;
  last?: boolean;
};

export function DetailRow({ label, value, last }: DetailRowProps) {
  return (
    <Row
      style={{
        borderBottom: last ? "none" : `1px solid ${emailTheme.hairline}`,
      }}
    >
      <Column
        width="38%"
        style={{
          padding: "10px 12px 10px 0",
          verticalAlign: "top",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: emailTheme.muted,
        }}
      >
        {label}
      </Column>
      <Column
        style={{
          padding: "10px 0",
          verticalAlign: "top",
          fontSize: "14px",
          lineHeight: "21px",
          color: emailTheme.ink,
          wordBreak: "break-word",
        }}
      >
        {value}
      </Column>
    </Row>
  );
}

export function DetailTable({ children }: { children: ReactNode }) {
  return (
    <Section
      style={{
        margin: "20px 0 0",
        borderTop: `1px solid ${emailTheme.hairline}`,
      }}
    >
      {children}
    </Section>
  );
}

export function BodyText({
  children,
  muted,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <Text
      style={{
        margin: "12px 0 0",
        fontSize: "15px",
        lineHeight: "24px",
        color: muted ? emailTheme.muted : emailTheme.body,
      }}
    >
      {children}
    </Text>
  );
}

export function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <Section
      style={{
        margin: "16px 0 0",
        padding: "16px 18px",
        backgroundColor: emailTheme.band,
        borderLeft: `3px solid ${emailTheme.brand}`,
      }}
    >
      <Text
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: "22px",
          color: emailTheme.charcoal,
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </Text>
    </Section>
  );
}

export function ReferencePill({ reference }: { reference: string }) {
  return (
    <Text
      style={{
        margin: "20px 0 0",
        display: "inline-block",
        padding: "6px 12px",
        backgroundColor: emailTheme.band,
        border: `1px solid ${emailTheme.hairline}`,
        borderRadius: "2px",
        fontFamily: display,
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        color: emailTheme.brand,
      }}
    >
      {reference}
    </Text>
  );
}
