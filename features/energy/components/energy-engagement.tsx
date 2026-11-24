import { ArrowRightIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";

/**
 * Closing engagement banner: the page's single red action, set against an ink
 * panel so the commercial desk reads as the conclusion of the value chain.
 */
export function EnergyEngagement() {
  return (
    <Section tone="white" className="border-t border-hairline/60">
      <div className="shell py-12 lg:py-16">
        <div className="rounded-lg border border-white/10 bg-charcoal p-6 text-white lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-brand"
                />
                <span className="type-eyebrow text-white/70">
                  Corporate Energy Desk Engagement
                </span>
              </div>

              <h2 className="type-headline-xl mt-4 max-w-2xl text-balance text-white">
                Structure an Institutional PPA or Explore Power Wheeling
              </h2>

              <p className="type-body-lg mt-4 max-w-2xl leading-relaxed text-white/70">
                Connect with our power trading desk and commercial PPA
                structuring directors in Harare and Johannesburg to evaluate
                your grid connection, off-take profile, or dispatchable
                capacity.
              </p>

              <p className="type-code mt-5 flex items-start gap-2 text-white/65">
                <InfoIcon
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-tint"
                />
                Inquiries welcome from licensed IPPs, C&amp;I heavy consumers,
                and regional transmission operators.
              </p>
            </div>

            <div className="lg:col-span-4">
              <Button
                size="lg"
                className="h-auto min-h-12 w-full px-5 py-3 text-center whitespace-normal"
                render={<Link href="/contact" />}
              >
                Connect with Samansco Energy Desk
                <ArrowRightIcon aria-hidden="true" />
              </Button>

              <div className="type-code mt-4 flex flex-wrap items-center justify-center gap-2 text-white/65 lg:justify-start">
                <span>DESK RESPONSE: &lt; 24H SLA</span>
                <span aria-hidden="true">•</span>
                <span>DIRECT EXECUTIVE ACCESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
