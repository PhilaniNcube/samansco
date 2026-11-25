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
    label: "Paris alignment",
    value: "Article 6",
    title: "Cross-Border Trading",
    description:
      "Structured internationally transferred mitigation outcomes backing regional NDC commitments.",
    icon: Globe2Icon,
  },
  {
    label: "Volume scope",
    value: "Multi-MWh",
    title: "Certified Clean Power",
    description:
      "Monetized high-yield generation volume across utility and C&I installations in Southern Africa.",
    icon: ZapIcon,
  },
];

/**
 * Four-column environmental metrics matrix: integrity, accounting,
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
        <dl className="grid grid-cols-1 gap-px overflow-clip border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ label, value, title, description, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col justify-between bg-background p-6"
            >
              <dt className="flex items-start justify-between gap-2">
                <span className="type-label text-muted-foreground">{label}</span>
                <Icon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand"
                />
              </dt>
              <dd className="mbs-6">
                <span className="type-metric block text-ink">{value}</span>
                <span className="type-headline-sm mbs-2 block text-ink">
                  {title}
                </span>
                <span className="type-body-md mbs-2 block leading-relaxed text-muted-foreground">
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
