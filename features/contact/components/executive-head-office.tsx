import {
  Building2Icon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SmartphoneIcon,
  type LucideIcon,
} from "lucide-react";
import type * as React from "react";
import { SpecChip } from "@/components/samansco/badges";
import { headOffice } from "@/lib/site";

type ContactRowProps = {
  icon: LucideIcon;
  label?: string;
  children: React.ReactNode;
};

function ContactRow({ icon: Icon, label, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-caption"
      />
      <div className="flex min-w-0 flex-col gap-0.5">
        {label ? (
          <span className="type-eyebrow text-caption">{label}</span>
        ) : null}
        {children}
      </div>
    </div>
  );
}

/**
 * Executive head office card: physical address, landlines, commercial
 * WhatsApp desks, official inbox and operating hours for the Harare HQ.
 */
export function ExecutiveHeadOffice() {
  return (
    <article
      aria-labelledby="head-office-title"
      className="rounded-lg border border-hairline bg-card p-5 lg:p-6"
    >
      <div className="flex items-start justify-between gap-3 border-b border-hairline/80 pb-3">
        <div className="flex min-w-0 items-center gap-2">
          <Building2Icon
            aria-hidden="true"
            className="size-5 shrink-0 text-brand-deep"
          />
          <h2
            id="head-office-title"
            className="type-headline-md text-balance text-ink"
          >
            Executive Head Office
          </h2>
        </div>
        <SpecChip className="shrink-0 text-caption">HARARE</SpecChip>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <ContactRow icon={MapPinIcon}>
          <address className="flex flex-col gap-0.5 not-italic">
            <p className="type-body-md font-medium text-ink">
              {headOffice.street}
            </p>
            <p className="type-body-sm text-muted-foreground">
              {headOffice.suburb}, {headOffice.country}
            </p>
            <p className="type-code mt-1 text-caption">
              Convenient dual access via Samora Machel arterial
            </p>
          </address>
        </ContactRow>

        <ContactRow icon={PhoneIcon} label="Landline Telecommunications">
          <span className="type-code font-medium text-ink">
            {headOffice.phone}
          </span>
          <span className="type-code text-muted-foreground">
            +263 242 480484
          </span>
        </ContactRow>

        <ContactRow
          icon={SmartphoneIcon}
          label="Direct Mobile & WhatsApp Commercial Desk"
        >
          <a
            href="https://wa.me/263778377055"
            target="_blank"
            rel="noopener noreferrer"
            className="type-code inline-block py-1 font-medium text-brand-deep transition-colors hover:text-brand-strong hover:underline"
          >
            +263 778 377 055
          </a>
          <a
            href="https://wa.me/263712600245"
            target="_blank"
            rel="noopener noreferrer"
            className="type-code inline-block py-1 text-ink transition-colors hover:text-brand-deep"
          >
            +263 712 600 245
          </a>
        </ContactRow>

        <ContactRow icon={MailIcon} label="Official Inquiries & Legal Notices">
          <a
            href={`mailto:${headOffice.email}`}
            className="type-body-md font-medium break-all text-ink transition-colors hover:text-brand-deep"
          >
            {headOffice.email}
          </a>
        </ContactRow>

        <div className="rounded-lg bg-surface-band p-4">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <span className="type-body-sm flex items-center gap-1.5 text-muted-foreground">
              <ClockIcon aria-hidden="true" className="size-4" />
              Operating Hours:
            </span>
            <span className="type-code text-ink">
              Mon – Fri: 08:00 – 17:00 CAT
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-hairline/70 pt-2">
            <span className="type-code text-muted-foreground">
              Verified Channels:
            </span>
            <span className="flex flex-wrap items-center gap-2">
              <span className="type-code rounded bg-card px-2 py-0.5 text-ink">
                @samansco
              </span>
              <span className="type-body-sm text-caption">
                LinkedIn • X • Meta
              </span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
