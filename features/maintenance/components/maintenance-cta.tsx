import {
  ArrowRightIcon,
  HeadsetIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";

/**
 * Closing engagement band: the long-term asset stewardship statement, the
 * dedicated O&M desk, and the consultation request.
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
            <span className="type-eyebrow inline-flex items-center gap-2 rounded bg-brand-deep px-3 py-1 text-white">
              <HeadsetIcon aria-hidden="true" className="size-3.5" />
              Dedicated Enterprise Desk
            </span>

            <Eyebrow className="mt-5 text-white/65">
              Asset Stewardship
            </Eyebrow>
            <h2
              id="maintenance-cta-title"
              className="type-headline-xl mt-3 max-w-2xl text-balance text-white"
            >
              Secure Long-Term Performance for Your Solar &amp; Storage Assets.
            </h2>
            <p className="type-body-lg mt-4 max-w-2xl leading-relaxed text-white/70">
              Engage our engineering and O&amp;M teams to structure a preventive
              maintenance, monitoring, or OEM warranty support agreement
              tailored to your plant.
            </p>
            <p className="type-body-md mt-3 max-w-2xl leading-relaxed text-white/65">
              Whether you are commissioning a new 5 MW solar plant or require
              warranty troubleshooting on existing BESS hardware, our engineers
              review site single-line diagrams (SLD) within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/5 p-5 lg:p-6">
              <p className="type-eyebrow text-white/65">Direct O&amp;M Desk</p>

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:+263242442645"
                  className="flex items-center justify-between gap-3 border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <PhoneIcon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-tint"
                    />
                    <span className="type-code truncate text-white">
                      +263 242 442645 / 7
                    </span>
                  </span>
                  <span className="type-code text-[10px] text-white/65">
                    HARARE DESK
                  </span>
                </a>

                <a
                  href="mailto:maintenance@samansco.com"
                  className="flex items-center justify-between gap-3 border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <MailIcon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-tint"
                    />
                    <span className="type-code truncate text-white">
                      maintenance@samansco.com
                    </span>
                  </span>
                  <span className="type-code text-[10px] text-white/65">
                    DISPATCH
                  </span>
                </a>
              </div>

              <Button
                size="lg"
                className="mt-4 w-full"
                render={<Link href="/contact" />}
              >
                Request an O&amp;M Consultation
                <ArrowRightIcon aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        <div className="type-code mt-12 flex flex-col gap-2 border-t border-white/10 pt-5 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span className="uppercase">Samansco Maintenance Ltd</span>
          <span className="inline-flex items-center gap-2 uppercase">
            ISO 9001 Compliant
          </span>
        </div>
      </div>
    </Section>
  );
}
