import { ActivityIcon, CpuIcon, SunMediumIcon, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type ChainStep = {
  index: string;
  subtitle: string;
  title: string;
  description: string;
  metaLabel: string;
  metaValue: string;
  icon: LucideIcon;
  active?: boolean;
};

const steps: ChainStep[] = [
  {
    index: "1",
    subtitle: "Samansco Industries · Physical layer",
    title: "Physical Infrastructure Delivery",
    description:
      "Turnkey solar EPC, microgrids, high-voltage substations, and industrial BESS built to rigorous utility engineering standards. Robust generation foundations engineered for 25+ years of active duty.",
    metaLabel: "Output",
    metaValue: "Grid-connected hardware & substation assets",
    icon: SunMediumIcon,
  },
  {
    index: "2",
    subtitle: "Samansco Maintenance · Telemetry and O&M",
    title: "24/7 Availability & Asset Telemetry",
    description:
      "High-precision SCADA monitoring, thermographic imaging, and preventive servicing keeping generation yield above 99.4%. Live field data feeds directly into the Samansco Energy dispatch desk for real-time load forecasting.",
    metaLabel: "SLA yield",
    metaValue: ">99.4% availability uptime",
    icon: ActivityIcon,
  },
  {
    index: "3",
    subtitle: "Samansco Energy & Carbon · Active utility engine",
    title: "Commercial Dispatch & Environmental Monetization",
    description:
      "Clean kWh aggregated and wheeled to high-demand corporate off-takers via Samansco Energy trading, while Samansco Carbon audits, issues, and monetizes certified I-RECs on regional environmental exchanges.",
    metaLabel: "Realization",
    metaValue: "Firm power delivery + verifiable I-RECs",
    icon: CpuIcon,
    active: true,
  },
];

/**
 * Group value chain: how engineering, O&M and Samansco Energy's commercial desk
 * hand off to one another around a single generation asset.
 */
export function ValueChain() {
  return (
    <Section tone="none" className="bg-surface-sunken">
      <div className="shell section-y">
        <div className="mbe-10 max-w-3xl">
          <SectionHeading
            title="How Samansco Energy Integrates Across Samansco Group"
            description="An integrated operational cycle bridging physical engineering execution, mission-critical operations, commercial electricity sales, and certified environmental asset trading."
          />
        </div>

        <div className="grid grid-cols-1 gap-px overflow-clip border border-hairline bg-hairline lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.index}
                className="flex flex-col bg-background"
              >
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <span
                    className={cn(
                      "type-metric mbe-5 leading-none",
                      step.active ? "text-brand-deep" : "text-caption",
                    )}
                  >
                    {step.index}
                  </span>

                  <h3 className="type-headline-md text-balance text-ink">
                    {step.title}
                  </h3>
                  <p className="type-body-sm mbs-1.5 font-medium text-brand-deep">
                    {step.subtitle}
                  </p>
                  <p className="type-body-md mbs-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "type-body-sm flex flex-col gap-1 border-t border-hairline bg-surface-page px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between lg:px-8",
                    step.active ? "text-brand-deep" : "text-ink",
                  )}
                >
                  <span className="flex items-center gap-1.5 text-caption">
                    <Icon aria-hidden="true" className="size-4" />
                    {step.metaLabel}:
                  </span>
                  <span className="font-medium tabular-nums">{step.metaValue}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
