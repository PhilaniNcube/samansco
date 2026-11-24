import {
  Globe2Icon,
  LayersIcon,
  NetworkIcon,
  ZapIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/samansco/section";

type EnvironmentalMetric = {
  label: string;
  value: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const metrics: EnvironmentalMetric[] = [
  {
    label: "Provenance",
    value: "100%",
    title: "Traceable Provenance",
    description:
      "End-to-end auditability from solar inverter generation to international registry retirement.",
    icon: NetworkIcon,
  },
  {
    label: "Compliance",
    value: "Scope 1, 2, 3",
    title: "Emissions Mitigation",
    description:
      "Full-spectrum corporate greenhouse gas inventorying and cross-sector mitigation advisory.",
    icon: LayersIcon,
  },
  {
    label: "Paris Alignment",
    value: "Article 6",
    title: "Cross-Border Trading",
    description:
      "Structured internationally transferred mitigation outcomes backing regional NDC commitments.",
    icon: Globe2Icon,
  },
  {
    label: "Volume Scope",
    value: "Multi-MWh",
    title: "Certified Clean Power",
    description:
      "Monetized high-yield generation volume across utility and C&I installations in Southern Africa.",
    icon: ZapIcon,
  },
];

/**
 * Four-column environmental metrics band: the desk's integrity, accounting,
 * Paris-alignment and volume proof points.
 */
export function CarbonMetrics() {
  return (
    <Section
      tone="band"
      aria-label="Environmental market metrics"
      className="border-b border-hairline/60 py-10 lg:py-12"
    >
      <div className="shell">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {metrics.map(({ label, value, title, description, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col justify-between border border-hairline/70 bg-background p-4 lg:p-6"
            >
              <dt className="flex items-start justify-between gap-2">
                <span className="type-eyebrow text-caption">{label}</span>
                <Icon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand"
                />
              </dt>
              <dd className="mt-6">
                <span className="type-metric block text-ink">{value}</span>
                <span className="type-headline-sm mt-2 block text-ink">
                  {title}
                </span>
                <span className="type-body-sm mt-2 block leading-relaxed text-muted-foreground">
                  {description}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
