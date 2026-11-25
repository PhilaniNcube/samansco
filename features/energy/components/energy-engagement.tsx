import { ArrowRightIcon, InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";

/**
 * Closing engagement banner: the page's single red action, set against an ink
 * photographic panel so the commercial desk reads as the conclusion of the value chain.
 */
export function EnergyEngagement() {
  return (
    <Section tone="white" className="border-t border-hairline/60">
      <div className="shell py-12 lg:py-16">
        <div className="relative overflow-clip border border-white/15 bg-ink p-6 text-white lg:p-10">
          <Image
            src="/images/energy-storage.webp"
            alt="Grid-scale battery energy storage systems illuminated inside a Samansco power room."
            fill
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.14_0.025_264/0.94)_0%,oklch(0.16_0.025_264/0.82)_55%,oklch(0.16_0.025_264/0.68)_100%)]"
          />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h2 className="type-headline-xl max-w-2xl text-balance text-white">
                Structure an Institutional PPA or Explore Power Wheeling
              </h2>

              <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-white/85">
                Connect with our power trading desk and commercial PPA
                structuring directors in Harare and Johannesburg to evaluate
                your grid connection, off-take profile, or dispatchable
                capacity.
              </p>

              <p className="type-body-sm mbs-5 flex items-start gap-2 text-white/80">
                <InfoIcon
                  aria-hidden="true"
                  className="mbs-0.5 size-4 shrink-0 text-brand-soft"
                />
                Inquiries welcome from licensed IPPs, C&amp;I heavy consumers,
                and regional transmission operators.
              </p>
            </div>

            <div className="lg:col-span-4">
              <Button
                size="lg"
                className="min-bs-12 bs-auto is-full px-5 py-3 text-center whitespace-normal"
                render={<Link href="/contact" />}
              >
                Connect with Samansco Energy Desk
                <ArrowRightIcon aria-hidden="true" />
              </Button>

              <p className="type-body-sm mbs-4 text-center text-white/80 lg:text-start">
                Desk response under 24 hours · Direct executive access
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
