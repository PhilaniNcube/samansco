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
    label: "Foundational heritage",
    value: "1982",
    note: "Founded in Zimbabwe with over 40 years of engineering delivery.",
  },
  {
    label: "Regional impact",
    value: "55,000+",
    note: "Solar installations delivered across 15+ African countries.",
    accent: true,
  },
  {
    label: "Installed generation",
    value: "20+ MW",
    note: "Solar panels supplied and integrated across SADC.",
  },
  {
    label: "Group portfolio",
    value: "4",
    note: "Independent operating infrastructure entities.",
  },
];

/**
 * Four-column architectural proof ledger on a crisp white surface below the
 * Group hero.
 */
export function MetricStrip() {
  return (
    <Section
      tone="white"
      aria-label="Group track record"
      className="border-b border-hairline"
    >
      <div className="shell py-12 lg:py-16">
        <dl className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col justify-between gap-4 bg-background p-6 lg:p-8"
            >
              <dt className="type-label text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="flex flex-col gap-2">
                <span
                  className={cn(
                    "type-metric block leading-none",
                    metric.accent ? "text-brand-deep" : "text-ink",
                  )}
                >
                  {metric.value}
                </span>
                <span className="type-body-sm text-muted-foreground">
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
