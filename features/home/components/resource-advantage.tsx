import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";
import { ParameterPanel } from "@/components/samansco/spec-list";

/**
 * Editorial resource argument, paired with an executive pull quote.
 */
export function ResourceAdvantage() {
  return (
    <Section tone="white" className="border-t border-hairline/60">
      <div className="shell section-y">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Regional Resource Advantage"
              dot={false}
              title="Why Africa's Energy Transition Matters"
            />

            <div className="mt-6 flex flex-col gap-4">
              <p className="type-body-lg leading-relaxed text-muted-foreground">
                Southern Africa boasts some of the most concentrated solar
                irradiance levels globally. According to World Bank and ESMAP
                Global Solar Atlas metrics, Zimbabwe registers an average
                photovoltaic solar resource of{" "}
                <strong className="font-semibold text-ink">
                  5.78 kWh/m²/day
                </strong>
                .
              </p>
              <p className="type-body-md leading-relaxed text-muted-foreground">
                This exceptional endowment transforms clean power from a climate
                compliance target into an immediate industrial imperative.
                Through decentralized, resilient microgrids and interconnected
                trading networks, Samansco Group converts raw radiant capacity
                into dispatchable, cost-effective baseline power that fuels
                manufacturing, heavy agriculture, and continental economic
                autonomy.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ParameterPanel
                label="Resource Metric (ESMAP)"
                value="5.78 kWh/m²/day"
                note="Specific Photovoltaic Yield Index"
              />
              <ParameterPanel
                label="Interconnection"
                value="SAPP Synchronized"
                note="Cross-Border Power Trading Alignment"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-xl bg-charcoal p-8 text-white lg:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -bottom-6 size-36 rounded-full bg-white/5 blur-2xl"
              />
              <QuoteIcon
                aria-hidden="true"
                className="mb-6 size-10 text-brand-tint opacity-80"
              />
              <blockquote className="type-headline-md leading-snug tracking-tight text-white">
                “Africa is not merely participating in the global energy
                transition; we are defining its architecture through
                decentralized, resilient clean power.”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/15 pt-5">
                <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-brand-deep ring-1 ring-white/15">
                  <Image
                    src="/images/group-ceo.jpeg"
                    alt="Nyasha Bamhare"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="flex flex-col">
                  <span className="type-headline-sm font-semibold text-white">
                    Nyasha Bamhare
                  </span>
                  <span className="type-eyebrow text-white/60">
                    Group Chief Executive Officer
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}
