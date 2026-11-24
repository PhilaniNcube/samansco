import { Section } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type Metric = {
  label: string;
  value: string;
  note: string;
  accent?: boolean;
};

const metrics: Metric[] = [
  {
    label: "Foundational Heritage",
    value: "1982",
    note: "Founded in Zimbabwe • 40+ Years of Engineering",
  },
  {
    label: "Regional Impact",
    value: "55,000+",
    note: "Solar Installations Across 15+ African Countries",
    accent: true,
  },
  {
    label: "Installed Generation",
    value: "20+ MW",
    note: "Solar Panels Supplied & Integrated in SADC",
  },
  {
    label: "Group Portfolio",
    value: "4",
    note: "Independent Operating Infrastructure Entities",
  },
];

/**
 * Four-column metric strip: the first factual proof point under the hero.
 */
export function MetricStrip() {
  return (
    <Section tone="white" className="border-y border-hairline/60">
      <div className="shell">
        <dl className="grid grid-cols-1 divide-y divide-hairline/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col justify-center py-8 sm:px-6",
                index === 0 && "lg:pl-0",
                index === metrics.length - 1 && "lg:pr-0",
                index === 1 && "sm:border-t-0",
                index >= 2 && "border-t border-hairline/60 sm:border-t-0",
              )}
            >
              <dt className="type-eyebrow text-caption">{metric.label}</dt>
              <dd className="mt-2">
                <span
                  className={cn(
                    "type-metric block",
                    metric.accent ? "text-brand-deep" : "text-ink",
                  )}
                >
                  {metric.value}
                </span>
                <span className="type-body-sm mt-1 block text-muted-foreground">
                  {metric.note}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
