import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/samansco/section";

const goals = [
  { goal: "SDG 7", title: "Affordable & Clean Energy", marker: "Utility generation" },
  {
    goal: "SDG 8",
    title: "Decent Work & Economic Growth",
    marker: "Local skilled employment",
  },
  {
    goal: "SDG 9",
    title: "Industry, Innovation & Infrastructure",
    marker: "Microgrid resilience",
  },
  {
    goal: "SDG 11",
    title: "Sustainable Cities & Communities",
    marker: "Decentralized power",
  },
  { goal: "SDG 13", title: "Climate Action", marker: "Carbon & I-REC integrity" },
];

/**
 * Operating footprint and UN SDG alignment in an asymmetric 12-column editorial
 * split.
 */
export function Footprint() {
  return (
    <Section tone="band" className="border-t border-hairline/60">
      <div className="shell section-y">
        <SectionHeading
          title="Infrastructure Footprint & Global Impact"
          description="Headquartered in Harare, Zimbabwe, Samansco Group aligns capital deployment and engineering excellence with internationally accredited sustainability frameworks and regional energy ministries."
          className="mbe-10 lg:mbe-12"
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col lg:col-span-5">
            <div className="relative aspect-[16/9] is-full overflow-clip border border-hairline/70 bg-ink">
              <Image
                src="/images/office-building-exterior-alt.jpg"
                alt="Samansco Group executive headquarters in Harare, Zimbabwe."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="divide-y divide-hairline border-b border-hairline">
              <div className="flex items-start gap-3 py-5">
                <MapPinIcon
                  aria-hidden="true"
                  className="mbs-0.5 size-[18px] shrink-0 text-brand-deep"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="type-headline-sm text-ink">
                    Harare Executive Headquarters
                  </h3>
                  <p className="type-body-sm text-muted-foreground">
                    331 Samora Machel Avenue, Eastlea, Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="type-body-sm flex flex-wrap items-center justify-between gap-2 py-4 text-muted-foreground">
                <span>UN COP delegation participant</span>
                <span className="font-medium text-ink">SADC licensed operator</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline pbe-4">
              <h3 className="type-headline-md text-ink">
                Sustainable Development Alignment
              </h3>
              <span className="type-body-sm text-muted-foreground">
                UN Agenda 2030
              </span>
            </div>

            <p className="type-body-md mbs-5 max-w-[65ch] leading-relaxed text-muted-foreground">
              Our vertically integrated divisions drive systemic socio-economic
              progress across Africa by advancing five primary Sustainable
              Development Goals through durable grid and clean generation assets.
            </p>

            <ul className="mbs-6 divide-y divide-hairline border-y border-hairline">
              {goals.map((item) => (
                <li
                  key={item.goal}
                  className="flex flex-wrap items-center justify-between gap-3 py-3.5"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="type-label w-16 shrink-0 font-semibold text-brand-deep tabular-nums">
                      {item.goal}
                    </span>
                    <span className="type-body-md font-medium text-ink">
                      {item.title}
                    </span>
                  </span>
                  <span className="type-body-sm text-muted-foreground">
                    {item.marker}
                  </span>
                </li>
              ))}
            </ul>

            <p className="type-body-sm mbs-4 text-muted-foreground">
              Standardized under the GHG Protocol and I-REC Standard.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
