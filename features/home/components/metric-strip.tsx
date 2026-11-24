import { HeroBand, HeroBandCell } from "@/components/samansco/page-hero";

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
    note: "Founded in Zimbabwe · 40+ Years of Engineering",
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
 * Four-column metric proof band anchored directly beneath the Group hero,
 * echoing Vooma's dark bottom trust strip.
 */
export function MetricStrip() {
  return (
    <section aria-label="Group track record">
      <HeroBand heading="Four Decades of Integrated Infrastructure Across Africa">
        {metrics.map((metric) => (
          <HeroBandCell
            key={metric.label}
            label={metric.label}
            value={
              <span className="type-metric block leading-none">{metric.value}</span>
            }
            note={metric.note}
            accent={metric.accent}
          />
        ))}
      </HeroBand>
    </section>
  );
}
