import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";

/**
 * Closing engagement band: long-term asset stewardship statement, direct O&M
 * desk, and consultation request.
 */
export function MaintenanceCta() {
  return (
    <Section
      id="consultation-desk"
      tone="ink"
      className="scroll-mt-20"
      aria-labelledby="maintenance-cta-title"
    >
      <div className="shell section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2
              id="maintenance-cta-title"
              className="type-headline-xl max-w-2xl text-balance text-white"
            >
              Secure Long-Term Performance for Your Solar &amp; Storage Assets
            </h2>
            <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-white/80">
              Engage our engineering and O&amp;M teams to structure a preventive
              maintenance, monitoring, or OEM warranty support agreement
              tailored to your plant.
            </p>
            <p className="type-body-md mbs-3 max-w-[65ch] leading-relaxed text-white/75">
              Whether you are commissioning a new 5 MW solar plant or require
              warranty troubleshooting on existing BESS hardware, our engineers
              review site single-line diagrams (SLD) within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/5 p-6">
              <p className="type-headline-sm text-white">Direct O&amp;M Desk</p>

              <div className="mbs-4 divide-y divide-white/10 border-y border-white/10">
                <a
                  href="tel:+263242442645"
                  className="flex items-center justify-between gap-3 py-3 transition-colors hover:text-white"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <PhoneIcon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-tint"
                    />
                    <span className="type-body-sm truncate text-white tabular-nums">
                      +263 242 442645 / 7
                    </span>
                  </span>
                  <span className="type-body-sm text-white/75">
                    Harare desk
                  </span>
                </a>

                <a
                  href="mailto:maintenance@samansco.com"
                  className="flex items-center justify-between gap-3 py-3 transition-colors hover:text-white"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <MailIcon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-tint"
                    />
                    <span className="type-body-sm truncate text-white">
                      maintenance@samansco.com
                    </span>
                  </span>
                  <span className="type-body-sm text-white/75">
                    Dispatch
                  </span>
                </a>
              </div>

              <Button
                size="lg"
                className="mbs-5 w-full"
                render={<Link href="/contact" />}
              >
                Request an O&amp;M Consultation
                <ArrowRightIcon aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        <div className="type-body-sm mbs-12 flex flex-col gap-2 border-t border-white/10 pbs-5 text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <span>Samansco Maintenance Ltd</span>
          <span>ISO 9001 compliant</span>
        </div>
      </div>
    </Section>
  );
}
