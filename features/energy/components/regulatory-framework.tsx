import { Section } from "@/components/samansco/section";

const marketBodies = [
  { short: "ZERA", name: "Zimbabwe Energy Regulatory Authority" },
  { short: "ZETDC", name: "Transmission & Distribution Co." },
  { short: "SAPP", name: "Southern African Power Pool" },
  { short: "EAPP", name: "Eastern Africa Power Pool" },
  { short: "NeedEnergy", name: "Algorithmic Grid Software" },
  { short: "SADC RERA", name: "Regional Energy Regulators" },
];

/**
 * Regulatory and market-clearing framework: six counterparties, laid out as a
 * hairline register across the page.
 */
export function RegulatoryFramework() {
  return (
    <Section tone="white" className="border-t border-hairline/60">
      <div className="shell py-12 lg:py-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="type-eyebrow text-caption">
            Regulatory Compliance &amp; Market Clearing Framework
          </h2>
          <span className="type-code tracking-wider text-brand-deep uppercase">
            Interconnected Utility Ecosystem
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3 lg:grid-cols-6">
          {marketBodies.map((body) => (
            <li
              key={body.short}
              className="flex min-h-24 flex-col items-center justify-center gap-1.5 bg-surface-page px-3 py-5 text-center"
            >
              <span className="type-headline-sm font-bold text-ink">
                {body.short}
              </span>
              <span className="type-code text-[11px] leading-snug text-caption uppercase">
                {body.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
