import type { LucideIcon } from "lucide-react";
import {
  ActivityIcon,
  CircleCheckIcon,
  ScanSearchIcon,
  SolarPanelIcon,
  WrenchIcon,
} from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { Section, SectionHeading } from "@/components/samansco/section";
import { Card } from "@/components/ui/card";

type Service = {
  title: string;
  description: string;
  scope: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

const services: Service[] = [
  {
    title: "Utility-Scale & C&I Solar O&M",
    description:
      "Preventive and corrective maintenance contracts protecting warranties and maximizing plant availability across 20- to 25-year asset lifecycles.",
    scope: [
      "Scheduled preventive inspections",
      "Thermographic & IV-curve testing",
      "Rapid corrective dispatch",
    ],
    icon: SolarPanelIcon,
    image: "/images/panels.webp",
    imageAlt:
      "Samansco field crew performing preventive maintenance on a commercial rooftop solar array.",
    imageClassName: "object-top",
  },
  {
    title: "24/7 Asset Monitoring & Optimization",
    description:
      "Real-time digital telemetry and fault diagnostics to sustain peak energy yield, detect string-level anomalies, and optimize storage dispatch.",
    scope: [
      "Continuous SCADA & cloud telemetry",
      "Automated fault & alarm triage",
      "Monthly performance ratio reporting",
    ],
    icon: ActivityIcon,
    image: "/images/installation.webp",
    imageAlt:
      "Battery energy storage racks and monitoring switchgear inside an active plant room.",
  },
  {
    title: "OEM Repairs & Warranty Support",
    description:
      "Authorized local repair center and technical warranty support for inverters, batteries, and power electronics, minimizing equipment turnaround time.",
    scope: [
      "Authorized OEM component diagnostics",
      "Inverter & BESS bench servicing",
      "End-to-end warranty claim management",
    ],
    icon: WrenchIcon,
    image: "/images/livotek-installation.jpeg",
    imageAlt:
      "Commercial hybrid inverters and wall-mounted lithium battery storage serviced by authorized technicians.",
  },
];

/**
 * Core O&M capabilities: the three contractual service tiers, followed by
 * field precision tooling and lifecycle assurance notes.
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
            <SectionHeading
              title="Structured Lifecycle Asset Management"
              titleClassName="text-balance"
            />
          </div>
          <p className="type-body-md max-w-[48ch] leading-relaxed text-muted-foreground lg:col-span-5">
            Engineered maintenance protocols designed to eliminate unplanned
            downtime, preserve manufacturer warranties, and sustain bankable
            energy yield.
          </p>
        </div>

        <div className="mbs-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <ImageBackdropCard
                key={service.title}
                image={service.image}
                imageAlt={service.imageAlt}
                imageClassName={service.imageClassName}
                sizes="(min-width: 768px) 33vw, 100vw"
                scrim="deep"
                className="bs-full min-bs-[27rem] p-6 lg:p-8"
              >
                <div className="flex items-center justify-end">
                  <span className="grid size-12 place-items-center border border-white/20 bg-ink/60 text-brand-soft backdrop-blur-sm">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                </div>

                <h3 className="type-headline-md mbs-6 text-white">
                  {service.title}
                </h3>
                <p className="type-body-md mbs-2 leading-relaxed text-white/85">
                  {service.description}
                </p>

                <ul className="mbs-auto space-y-2.5 border-t border-white/15 pbs-5">
                  {service.scope.map((item) => (
                    <li
                      key={item}
                      className="type-body-md flex items-start gap-2.5 text-white/90"
                    >
                      <CircleCheckIcon
                        aria-hidden="true"
                        className="mbs-1 size-4 shrink-0 text-brand-soft"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ImageBackdropCard>
            );
          })}
        </div>

        <div className="mbs-6 grid gap-6 lg:grid-cols-12">
          <Card className="gap-0 border-hairline bg-card p-6 shadow-none lg:col-span-7 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid size-12 shrink-0 place-items-center bg-surface-band text-brand-deep">
                <ScanSearchIcon aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h3 className="type-headline-sm text-ink">
                  Drone-Assisted Thermographic Audits
                </h3>
                <p className="type-body-md mbs-2 leading-relaxed text-muted-foreground">
                  Autonomous flight paths identify micro-cracks, bypassed
                  diodes, and hotspot anomalies with sub-centimeter GPS
                  accuracy, minimizing revenue loss.
                </p>
                <p className="type-body-sm mbs-4 font-medium text-brand-deep">
                  Radiometric drone IR · IEC 62446-3 · Air &amp; ground inspection
                </p>
              </div>
            </div>
          </Card>

          <ImageBackdropCard
            as="div"
            image="/images/maintenance-plant-dusk.jpg"
            imageAlt="Utility-scale solar array and Samansco maintenance vehicle at golden hour."
            imageClassName="object-top"
            sizes="(min-width: 1024px) 40vw, 100vw"
            scrim="deep"
            className="p-6 lg:col-span-5 lg:p-8"
          >
            <h3 className="type-headline-sm text-white">
              Engineered Lifecycle Assurance
            </h3>
            <p className="type-body-md mbs-3 leading-relaxed text-white/85">
              Multi-tier contractual coverage calibrated to plant MW capacity,
              environmental dust conditions, and power purchase covenants.
            </p>
          </ImageBackdropCard>
        </div>
      </div>
    </Section>
  );
}
