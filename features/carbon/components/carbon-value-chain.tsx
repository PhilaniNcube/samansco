import { ArrowDownIcon } from "lucide-react";
import { Eyebrow, Section } from "@/components/samansco/section";

type ChainStep = {
  step: string;
  tier: string;
  title: string;
  description: string;
  parameterLabel: string;
  parameterValue: string;
};

const steps: ChainStep[] = [
  {
    step: "01 // PHYSICAL GENERATION",
    tier: "ENGINEERING TIER",
    title: "Engineered by Samansco Industries",
    description:
      "High-precision tier-1 solar EPC and rural water pumping assets built with bankable technical rigor and metered generation hardware that guarantees continuous clean kilowatt-hour output.",
    parameterLabel: "Hardware Provenance",
    parameterValue: "Class 0.2 Revenue-Grade Metering",
  },
  {
    step: "02 // CONTINUOUS TELEMETRY",
    tier: "AUDIT TIER",
    title: "Monitored by Samansco Maintenance",
    description:
      "24/7 SCADA data streams and automated telemetry feed live, tamper-proof generation figures into audit databases without manual estimates, preserving absolute baseline integrity.",
    parameterLabel: "Verification Integrity",
    parameterValue: "Zero-Discrepancy Inverter Audit Log",
  },
  {
    step: "03 // CERTIFIED COMMODITIES",
    tier: "MARKET TIER",
    title: "Monetized by Samansco Carbon",
    description:
      "Raw kilowatt-hours are verified, recorded on global registries, and issued as internationally tradeable I-RECs and carbon credits for commercial and sovereign corporate off-takers.",
    parameterLabel: "Registry Transfer",
    parameterValue: "Evident & International Account Direct Push",
  },
];

/**
 * Integrated value chain: engineering, audit and market tiers that turn
 * metered solar output into verified environmental commodities.
 */
export function CarbonValueChain() {
  return (
    <Section
      tone="band"
      aria-labelledby="carbon-value-chain-title"
      className="border-t border-hairline/60"
    >
      <div className="shell section-y">
        <div className="mb-10 max-w-3xl">
          <Eyebrow dot={false} className="text-brand-deep">
            02 / Integrated Value Chain
          </Eyebrow>
          <h2
            id="carbon-value-chain-title"
            className="type-headline-xl mt-3 text-balance text-ink"
          >
            How Proven Solar Infrastructure Generates Verifiable Environmental
            Value
          </h2>
          <p className="type-body-lg mt-4 leading-relaxed text-muted-foreground">
            Unlike speculative carbon brokers, Samansco Carbon&rsquo;s
            environmental commodities are backed by tangible, physically
            engineered assets operating across Southern Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col">
              <article className="flex flex-1 flex-col justify-between rounded-lg border border-hairline/70 bg-background p-6 lg:p-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="type-code font-bold text-brand-deep">
                      {step.step}
                    </span>
                    <span className="type-code text-caption uppercase">
                      {step.tier}
                    </span>
                  </div>

                  <h3 className="type-headline-sm mt-4 text-ink">
                    {step.title}
                  </h3>
                  <p className="type-body-md mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 rounded-lg border border-hairline/60 bg-surface-band p-4">
                  <span className="type-code block font-medium text-ink">
                    {step.parameterLabel}
                  </span>
                  <span className="type-code mt-1 block text-caption">
                    {step.parameterValue}
                  </span>
                </div>
              </article>

              {index < steps.length - 1 ? (
                <div className="flex justify-center py-2 lg:hidden" aria-hidden="true">
                  <ArrowDownIcon className="size-4 text-brand" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
