import { RadioTowerIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/samansco/section";

/**
 * Contact page hero: breadcrumb, corporate liaison pill and the single page
 * headline, balanced by the live dispatch-support panel from the design.
 */
export function ContactHero() {
  return (
    <Section tone="white" className="border-b border-hairline/60">
      <div className="shell pt-8 pb-10 lg:pt-12 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className="type-code flex flex-wrap items-center gap-1.5 text-caption"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Samansco Group
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-brand-deep">
            Contact &amp; Governance
          </span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full bg-charcoal px-3.5 py-1.5 text-white">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-brand"
              />
              Corporate Liaison &amp; Governance • Harare HQ
            </span>

            <h1 className="type-display mt-6 max-w-3xl text-balance text-ink">
              Contact Samansco Group.
            </h1>

            <p className="type-body-lg mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Reach our Harare executive headquarters or route your commercial
              enquiry directly to Samansco Industries, Samansco Energy,
              Samansco Maintenance, or Samansco Carbon desks.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="flex items-center gap-4 rounded-lg border border-hairline bg-surface-band p-4 lg:min-w-[280px]">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-surface-sunken text-brand-deep">
                <RadioTowerIcon aria-hidden="true" className="size-5" />
              </span>

              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="type-eyebrow text-caption">
                  Dispatch Support
                </span>
                <span className="type-headline-sm flex items-center gap-2 text-ink">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-emerald-600"
                  />
                  24/7 Grid Active
                </span>
                <span className="type-body-sm text-muted-foreground">
                  SCADA &amp; Substation Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
