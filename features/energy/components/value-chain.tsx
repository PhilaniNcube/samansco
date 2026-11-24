import { ActivityIcon, CpuIcon, SunMediumIcon, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type ChainStep = {
  index: string;
  layer: string;
  entity: string;
  title: string;
  description: string;
  metaLabel: string;
  metaValue: string;
  icon: LucideIcon;
  dot: "brand" | "green";
  active?: boolean;
};

const steps: ChainStep[] = [
  {
    index: "01",
    layer: "Physical Layer",
    entity: "Samansco Industries",
    title: "Physical Infrastructure Delivery",
    description:
      "Turnkey solar EPC, microgrids, high-voltage substations, and industrial BESS built to rigorous utility engineering standards. Robust generation foundations engineered for 25+ years of active duty.",
    metaLabel: "Output",
    metaValue: "Grid-Connected Hardware & Substation Assets",
    icon: SunMediumIcon,
    dot: "brand",
  },
  {
    index: "02",
    layer: "Telemetry & O&M",
    entity: "Samansco Maintenance",
    title: "24/7 Availability & Asset Telemetry",
    description:
      "High-precision SCADA monitoring, thermographic imaging, and preventive servicing keeping generation yield at >99.4%. Live field data feeds directly into the SEPCO dispatch desk for real-time load forecasting.",
    metaLabel: "SLA Yield",
    metaValue: ">99.4% Availability Uptime",
    icon: ActivityIcon,
    dot: "green",
  },
  {
    index: "03",
    layer: "Active Utility Engine",
    entity: "Samansco Energy & Carbon",
    title: "Commercial Dispatch & Environmental Monetization",
    description:
      "Clean kWh aggregated and wheeled to high-demand corporate off-takers via SEPCO trading, while Samansco Carbon audits, issues, and monetizes certified I-RECs on regional environmental exchanges.",
    metaLabel: "Realization",
    metaValue: "Firm Power Delivery + Verifiable I-RECs",
    icon: CpuIcon,
    dot: "brand",
    active: true,
  },
];

/**
 * Group value chain: how engineering, O&M and SEPCO's commercial desk hand off
 * to one another around a single generation asset.
 */
export function ValueChain() {
  return (
    <Section tone="none" className="bg-surface-sunken">
      <div className="shell section-y">
        <div className="mb-10 max-w-3xl">
          <SectionHeading
            eyebrow="Vertically Integrated Architecture"
            title="How SEPCO Integrates Across Samansco Group."
            description="A seamless operational cycle that bridges physical engineering execution, mission-critical operations, commercial electricity sales, and certified environmental asset trading."
          />
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.index}
                className="flex flex-col bg-background"
              >
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "type-headline-xl leading-none font-bold",
                        step.active ? "text-brand-deep" : "text-caption",
                      )}
                    >
                      {step.index}
                    </span>
                    <span
                      className={cn(
                        "type-code rounded px-2 py-1 uppercase",
                        step.active
                          ? "bg-brand-deep text-white"
                          : "border border-hairline bg-surface-page text-caption",
                      )}
                    >
                      {step.layer}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full",
                        step.dot === "green" ? "bg-emerald-600" : "bg-brand",
                      )}
                    />
                    <span className="type-eyebrow text-caption">
                      {step.entity}
                    </span>
                  </div>

                  <h3 className="type-headline-md mt-2 text-balance text-ink">
                    {step.title}
                  </h3>
                  <p className="type-body-sm mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "type-code flex flex-col gap-1 border-t border-hairline bg-surface-page px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between lg:px-8",
                    step.active ? "text-brand-deep" : "text-ink",
                  )}
                >
                  <span className="flex items-center gap-1.5 text-caption uppercase">
                    <Icon aria-hidden="true" className="size-3.5" />
                    {step.metaLabel}:
                  </span>
                  <span className="font-medium">{step.metaValue}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
