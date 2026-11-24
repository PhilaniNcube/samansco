import type { LucideIcon } from "lucide-react";
import {
  ActivityIcon,
  CircleCheckIcon,
  ScanSearchIcon,
  SolarPanelIcon,
  WrenchIcon,
} from "lucide-react";
import { SpecChip } from "@/components/samansco/badges";
import { Eyebrow, Section } from "@/components/samansco/section";
import { Card } from "@/components/ui/card";

type Service = {
  code: string;
  title: string;
  description: string;
  scope: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    code: "O&M-01",
    title: "Utility-Scale & C&I Solar O&M",
    description:
      "Preventive and corrective maintenance contracts protecting warranties and maximizing plant availability across 20- to 25-year asset lifecycles.",
    scope: [
      "Scheduled preventive inspections",
      "Thermographic & IV-curve testing",
      "Rapid corrective dispatch",
    ],
    icon: SolarPanelIcon,
  },
  {
    code: "O&M-02",
    title: "24/7 Asset Monitoring & Optimization",
    description:
      "Real-time digital telemetry and fault diagnostics to sustain peak energy yield, detect string-level anomalies, and optimize storage dispatch.",
    scope: [
      "Continuous SCADA & cloud telemetry",
      "Automated fault & alarm triage",
      "Monthly performance ratio reporting",
    ],
    icon: ActivityIcon,
  },
  {
    code: "O&M-03",
    title: "OEM Repairs & Warranty Support",
    description:
      "Authorized local repair center and technical warranty support for inverters, batteries, and power electronics—minimizing equipment turnaround time.",
    scope: [
      "Authorized OEM component diagnostics",
      "Inverter & BESS bench servicing",
      "End-to-end warranty claim management",
    ],
    icon: WrenchIcon,
  },
];

const tiers = ["O&M-01", "O&M-02", "O&M-03"];

/**
 * Core O&M capabilities: the three contractual service tiers, followed by the
 * field tooling and lifecycle coverage notes from the mobile design.
 */
export function CoreCapabilities() {
  return (
    <Section
      id="core-services"
      tone="page"
      className="scroll-mt-20 border-b border-hairline/60"
      aria-labelledby="maintenance-core-title"
    >
      <div className="shell section-y">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow dot={false} className="text-brand-deep">
              01 / Core Capabilities
            </Eyebrow>
            <h2
              id="maintenance-core-title"
              className="type-headline-xl mt-3 text-balance text-ink"
            >
              Structured Lifecycle Asset Management
            </h2>
          </div>
          <p className="type-body-md max-w-xl leading-relaxed text-muted-foreground lg:col-span-5">
            Engineered maintenance protocols designed to eliminate unplanned
            downtime, preserve manufacturer warranties, and sustain bankable
            energy yield.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.code}
                className="h-full gap-0 rounded-lg border-hairline bg-card p-6 shadow-none lg:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-lg bg-surface-band text-brand-deep">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="type-code text-caption">{service.code}</span>
                </div>

                <h3 className="type-headline-md mt-6 text-ink">
                  {service.title}
                </h3>
                <p className="type-body-md mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <ul className="space-y-2.5 rounded-lg border border-hairline/60 bg-surface-page p-4">
                    {service.scope.map((item) => (
                      <li
                        key={item}
                        className="type-body-sm flex items-start gap-2.5 text-ink"
                      >
                        <CircleCheckIcon
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-brand-deep"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <Card className="gap-0 rounded-lg border-hairline bg-card p-6 shadow-none lg:col-span-7 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Eyebrow dot={false} className="text-brand-deep">
                Field Precision Tooling
              </Eyebrow>
              <span className="type-code text-caption">AIR &amp; GROUND</span>
            </div>

            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-surface-band text-brand-deep">
                <ScanSearchIcon aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h3 className="type-headline-sm text-ink">
                  Drone-Assisted Thermographic Audits
                </h3>
                <p className="type-body-sm mt-2 leading-relaxed text-muted-foreground">
                  Autonomous flight paths identify micro-cracks, bypassed
                  diodes, and hotspot anomalies with sub-centimeter GPS
                  accuracy, minimizing revenue loss.
                </p>
                <SpecChip className="mt-4">
                  RADIOMETRIC DRONE IR &bull; IEC 62446-3
                </SpecChip>
              </div>
            </div>
          </Card>

          <div className="flex flex-col rounded-lg border border-white/10 bg-charcoal p-6 text-white lg:col-span-5 lg:p-8">
            <h3 className="type-headline-sm text-white">
              Engineered Lifecycle Assurance
            </h3>
            <p className="type-body-md mt-3 leading-relaxed text-white/70">
              Multi-tier contractual coverage calibrated to plant MW capacity,
              environmental dust conditions, and power purchase covenants.
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
              {tiers.map((tier) => (
                <span
                  key={tier}
                  className="type-code rounded border border-white/15 px-2 py-1 text-white/65"
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
