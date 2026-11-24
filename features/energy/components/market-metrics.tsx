import {
  ArrowLeftRightIcon,
  Building2Icon,
  GaugeIcon,
  LeafIcon,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/samansco/section";

type MarketMetric = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

const metrics: MarketMetric[] = [
  {
    label: "Regional Interconnect",
    value: "SAPP & EAPP Synchronized",
    note: "Active bilateral trading protocols executing cross-border high-voltage electricity wheeling agreements across Southern Africa.",
    icon: ArrowLeftRightIcon,
  },
  {
    label: "Offtake Portfolio",
    value: "Multi-Megawatt",
    note: "Bespoke Commercial & Industrial (C&I) Power Purchase Agreements structured with long-term inflation indexation mechanisms.",
    icon: Building2Icon,
  },
  {
    label: "Dynamic Grid Balancing",
    value: "Sub-Second Telemetry",
    note: "AI-driven algorithmic dispatch balancing commercial loads, BESS reserves, and rooftop fleets within fractional-second response cycles.",
    icon: GaugeIcon,
  },
  {
    label: "Attribute Settlement",
    value: "Zero Carbon Wheeling",
    note: "Every delivered megawatt-hour is digitally bundled and reconciled with verifiable I-REC registry tracking for corporate ESG compliance.",
    icon: LeafIcon,
  },
];

/**
 * Four-cell market strip: the trading desk's proof points, set as a single
 * hairline matrix rather than four floating cards.
 */
export function MarketMetrics() {
  return (
    <Section
      tone="band"
      aria-labelledby="market-metrics-title"
      className="border-y border-hairline/60 py-10 lg:py-12"
    >
      <div className="shell">
        <h2 id="market-metrics-title" className="sr-only">
          Power Trading &amp; Grid Metrics
        </h2>

        <dl className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className="flex flex-col bg-background p-6"
              >
                <dt className="type-eyebrow flex items-start justify-between gap-3 text-brand-deep">
                  <span>{metric.label}</span>
                  <Icon
                    aria-hidden="true"
                    className="size-5 shrink-0 text-caption"
                  />
                </dt>
                <dd className="mt-5 flex flex-1 flex-col">
                  <span className="type-headline-md text-balance text-ink">
                    {metric.value}
                  </span>
                  <span className="type-body-sm mt-3 leading-relaxed text-muted-foreground">
                    {metric.note}
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
}
