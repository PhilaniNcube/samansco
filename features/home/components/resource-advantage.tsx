import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";

/**
 * Editorial resource argument, paired with an executive pull quote.
 */
export function ResourceAdvantage() {
  return (
    <Section tone="white" className="border-t border-hairline/60">
      <div className="shell section-y">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading title="Why Africa's Energy Transition Matters" />

            <div className="mbs-6 flex max-w-[65ch] flex-col gap-4">
              <p className="type-body-md leading-relaxed text-muted-foreground">
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

            <dl className="mbs-8 grid grid-cols-1 gap-6 border-t border-hairline pbs-6 sm:grid-cols-2 sm:divide-x sm:divide-hairline">
              <div className="flex flex-col gap-1">
                <dt className="type-label text-muted-foreground">
                  Resource metric (ESMAP)
                </dt>
                <dd className="type-headline-lg text-ink tabular-nums">
                  5.78 kWh/m²/day
                </dd>
                <dd className="type-body-sm text-muted-foreground">
                  Specific photovoltaic yield index
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:pis-6">
                <dt className="type-label text-muted-foreground">
                  Interconnection
                </dt>
                <dd className="type-headline-lg text-ink">
                  SAPP Synchronized
                </dd>
                <dd className="type-body-sm text-muted-foreground">
                  Cross-border power trading alignment
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <figure className="bg-charcoal p-8 text-white lg:p-10">
              <QuoteIcon
                aria-hidden="true"
                className="mbe-6 size-9 text-brand-tint opacity-90"
              />
              <blockquote className="font-display text-[var(--text-heading)] font-medium leading-snug tracking-tight text-white">
                “Africa is not merely participating in the global energy
                transition; we are defining its architecture through
                decentralized, resilient clean power.”
              </blockquote>
              <figcaption className="mbs-8 flex items-center gap-4 border-t border-white/15 pbs-5">
                <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-brand-deep ring-1 ring-white/15">
                  <Image
                    src="/images/group-ceo.jpeg"
                    alt="Nyasha Bamhare"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="type-headline-sm text-white">
                    Nyasha Bamhare
                  </span>
                  <span className="type-body-sm text-white/75">
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
