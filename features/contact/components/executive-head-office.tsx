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
        className="mbs-0.5 size-4 shrink-0 text-caption"
      />
      <div className="flex min-w-0 flex-col gap-0.5">
        {label ? (
          <span className="type-body-sm text-muted-foreground">{label}</span>
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
      className="border border-hairline bg-card p-5 lg:p-6"
    >
      <div className="flex items-center justify-between gap-3 border-b border-hairline/80 pbe-3">
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
        <span className="type-body-sm shrink-0 text-muted-foreground">
          Harare
        </span>
      </div>

      <div className="mbs-4 flex flex-col gap-4">
        <ContactRow icon={MapPinIcon}>
          <address className="flex flex-col gap-0.5 not-italic">
            <p className="type-body-md font-medium text-ink">
              {headOffice.street}
            </p>
            <p className="type-body-sm text-muted-foreground">
              {headOffice.suburb}, {headOffice.country}
            </p>
            <p className="type-body-sm mbs-1 text-caption">
              Convenient dual access via Samora Machel arterial
            </p>
          </address>
        </ContactRow>

        <ContactRow icon={PhoneIcon} label="Landline telecommunications">
          <span className="type-body-sm font-medium text-ink tabular-nums">
            {headOffice.phone}
          </span>
        </ContactRow>

        <ContactRow
          icon={SmartphoneIcon}
          label="Direct mobile & WhatsApp commercial desk"
        >
          <a
            href="https://wa.me/263712600245"
            target="_blank"
            rel="noopener noreferrer"
            className="type-body-sm inline-block py-0.5 font-medium text-brand-deep transition-colors hover:text-brand-strong hover:underline tabular-nums"
          >
            +263 712 600 245
          </a>
        </ContactRow>

        <ContactRow icon={MailIcon} label="Official inquiries & legal notices">
          <a
            href={`mailto:${headOffice.email}`}
            className="type-body-md font-medium break-all text-ink transition-colors hover:text-brand-deep"
          >
            {headOffice.email}
          </a>
        </ContactRow>

        <div className="border-t border-hairline pbs-4">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <span className="type-body-sm flex items-center gap-1.5 text-muted-foreground">
              <ClockIcon aria-hidden="true" className="size-4" />
              Operating hours
            </span>
            <span className="type-body-sm font-medium text-ink tabular-nums">
              Mon to Fri, 08:00 to 17:00 CAT
            </span>
          </div>

          <div className="mbs-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-hairline/70 pbs-2.5">
            <span className="type-body-sm text-muted-foreground">
              Channels (@samansco)
            </span>
            <span className="type-body-sm text-caption">
              LinkedIn · Facebook · Instagram
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
