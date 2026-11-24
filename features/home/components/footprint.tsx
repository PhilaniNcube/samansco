import { MapPinIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";

const offices = [
  {
    country: "Zimbabwe",
    role: "Group HQ • Harare",
    detail: "331 Samora Machel Avenue, Eastlea",
  },
  {
    country: "South Africa",
    role: "Trading • Johannesburg",
    detail: "Regional Power Desk & SAPP Trading",
  },
  {
    country: "Zambia",
    role: "Operations • Lusaka",
    detail: "Commercial C&I Solar & Microgrid Hub",
  },
  {
    country: "Tanzania",
    role: "East Africa • Dar es Salaam",
    detail: "Industrial Solar & Water Pumping Hub",
  },
];

const goals = [
  { goal: "SDG 7", title: "Affordable & Clean Energy", marker: "Utility Generation" },
  {
    goal: "SDG 8",
    title: "Decent Work & Economic Growth",
    marker: "Local Skilled Employment",
  },
  {
    goal: "SDG 9",
    title: "Industry, Innovation & Infrastructure",
    marker: "Microgrid Resilience",
  },
  {
    goal: "SDG 11",
    title: "Sustainable Cities & Communities",
    marker: "Decentralized Power",
  },
  { goal: "SDG 13", title: "Climate Action", marker: "Carbon & I-REC Integrity" },
];

/**
 * Operating footprint and UN SDG alignment: two governance panels side by side.
 */
export function Footprint() {
  return (
    <Section tone="band" className="border-t border-hairline/60">
      <div className="shell section-y">
        <SectionHeading
          eyebrow="Regional Operations & Governance"
          title="Infrastructure Footprint & Global Impact"
          description="Operating across Southern and Eastern Africa, Samansco Group aligns capital deployment and engineering excellence with internationally accredited sustainability frameworks and regional energy ministries."
          className="mb-10 max-w-3xl"
        />

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col border border-hairline/70 bg-card p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4">
              <h3 className="type-headline-sm text-ink">Operating Presence</h3>
              <span className="type-eyebrow text-caption">
                SADC Headquarters & Hubs
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="border border-hairline/50 bg-surface-page/60 p-4"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <MapPinIcon
                      aria-hidden="true"
                      className="size-[18px] text-brand"
                    />
                    <span className="type-label font-semibold text-ink">
                      {office.country}
                    </span>
                  </div>
                  <p className="type-eyebrow text-caption">{office.role}</p>
                  <p className="type-body-sm mt-1 text-muted-foreground">
                    {office.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="type-code mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-4 text-caption">
              <span className="flex items-center gap-1.5">
                UN COP Delegation Participant
              </span>
              <span className="uppercase">SADC Licensed Operator</span>
            </div>
          </div>

          <div className="flex flex-col border border-hairline/70 bg-card p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4">
              <h3 className="type-headline-sm text-ink">
                Sustainable Development Alignment
              </h3>
              <span className="type-eyebrow text-caption">UN Agenda 2030</span>
            </div>

            <p className="type-body-sm mt-5 leading-relaxed text-muted-foreground">
              Our vertically integrated divisions drive systemic socio-economic
              progress across Africa by advancing five primary Sustainable
              Development Goals through durable grid and clean generation
              assets:
            </p>

            <ul className="mt-5 space-y-2">
              {goals.map((item) => (
                <li
                  key={item.goal}
                  className="type-label flex items-center justify-between gap-3 bg-surface-page/60 p-2.5 px-3 text-ink transition-colors hover:bg-surface-page"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="type-code w-14 shrink-0 font-bold text-brand-deep">
                      {item.goal}
                    </span>
                    <span className="truncate font-medium">{item.title}</span>
                  </span>
                  <span className="type-code hidden shrink-0 text-caption sm:inline">
                    {item.marker}
                  </span>
                </li>
              ))}
            </ul>

            <div className="type-body-sm mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-4 text-muted-foreground">
              <span>Standardized under GHG Protocol & I-REC Standard</span>
              <span className="type-code font-semibold text-ink">
                VERIFIED IMPACT
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
