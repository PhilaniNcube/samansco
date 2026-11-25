import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type ChainStep = {
  step: string;
  tier: string;
  title: string;
  description: string;
  parameterLabel: string;
  parameterValue: string;
  image: string;
  imageAlt: string;
  plate: "cover" | "light";
  imageClassName?: string;
};

const steps: ChainStep[] = [
  {
    step: "Step 1",
    tier: "Physical generation",
    title: "Engineered by Samansco Industries",
    description:
      "High-precision tier-1 solar EPC and rural water pumping assets built with bankable technical rigor and metered generation hardware that guarantees continuous clean kilowatt-hour output.",
    parameterLabel: "Hardware provenance",
    parameterValue: "Class 0.2 revenue-grade metering",
    image: "/images/rural-2.JPG",
    imageAlt:
      "Commercial rooftop solar photovoltaic arrays engineered by Samansco Industries.",
    plate: "cover",
    imageClassName: "object-top",
  },
  {
    step: "Step 2",
    tier: "Continuous telemetry",
    title: "Monitored by Samansco Maintenance",
    description:
      "24/7 SCADA data streams and automated telemetry feed live, tamper-proof generation figures into audit databases without manual estimates, preserving absolute baseline integrity.",
    parameterLabel: "Verification integrity",
    parameterValue: "Zero-discrepancy inverter audit log",
    image: "/images/eastron-sdm630-energy-meter.webp",
    imageAlt:
      "Eastron SDM630-Modbus V2 three-phase revenue meter capturing Class 0.2 generation telemetry.",
    plate: "light",
  },
  {
    step: "Step 3",
    tier: "Certified commodities",
    title: "Monetized by Samansco Carbon",
    description:
      "Raw kilowatt-hours are verified, recorded on global registries, and issued as internationally tradeable I-RECs and carbon credits for commercial and sovereign corporate off-takers.",
    parameterLabel: "Registry transfer",
    parameterValue: "Evident & international account direct push",
    image: "/images/carbon.jpg",
    imageAlt:
      "Utility-scale solar array across Southern Africa generating verified environmental attributes.",
    plate: "cover",
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
        <div className="mbe-10 max-w-3xl">
          <SectionHeading
            title="How Proven Solar Infrastructure Generates Verifiable Environmental Value"
            description="Unlike speculative carbon brokers, Samansco Carbon's environmental commodities are backed by tangible, physically engineered assets operating across Southern Africa."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col">
              <article className="flex flex-1 flex-col overflow-clip border border-hairline/70 bg-background">
                <div
                  className={cn(
                    "relative aspect-[16/9] is-full overflow-clip border-b border-hairline",
                    step.plate === "light" ? "bg-white" : "bg-ink",
                  )}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={cn(
                      step.plate === "light"
                        ? "object-contain p-4"
                        : cn("object-cover", step.imageClassName),
                    )}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                  <div>
                    <p className="type-body-sm font-medium text-brand-deep">
                      {step.step} · {step.tier}
                    </p>

                    <h3 className="type-headline-md mbs-3 text-ink">
                      {step.title}
                    </h3>
                    <p className="type-body-md mbs-3 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="mbs-8 border-t border-hairline pbs-4">
                    <span className="type-label block text-ink">
                      {step.parameterLabel}
                    </span>
                    <span className="type-body-sm mbs-1 block text-muted-foreground">
                      {step.parameterValue}
                    </span>
                  </div>
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
