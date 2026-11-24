import {
  ArrowDownIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  LandmarkIcon,
  ShieldCheckIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  HeroBand,
  HeroBandCell,
  HeroGhostAction,
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";

const assurances: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheckIcon, label: "Registry-Grade Traceability" },
  { icon: LandmarkIcon, label: "SADC Decarbonization Hub" },
  { icon: ArrowLeftRightIcon, label: "Evident Standard Participant" },
];

const deskSpecs = [
  {
    label: "Registry Verification",
    value: "I-REC Certified Issuer & Evident Participant",
    note: "Participant ID: EVD-AFR-04829",
    accent: true,
  },
  {
    label: "Standard Frameworks",
    value: "Gold Standard & Verra (VCS)",
    note: "Verified utility & C&I project pipeline",
  },
  {
    label: "Issuance Latency",
    value: "< 24 Hrs Reconciliation",
    note: "Direct SCADA inverter telemetry feed",
  },
  {
    label: "Traded Asset Classes",
    value: "I-RECs · Article 6 ITMOs",
    note: "Scope 2 mitigation units & ESG advisory",
  },
];

/**
 * Carbon subsidiary hero: atmospheric savanna solar twilight photography
 * paired with registry assurances and the Environmental Commodity Desk band.
 */
export function CarbonHero() {
  return (
    <PageHero
      image="/images/carbon-hero-landscape.jpg"
      imageAlt="Utility-scale solar photovoltaic array set within a misty Southern African savanna landscape at twilight."
      priority
      size="division"
      scrim="emerald"
      gridVariant="structural"
      layout="bottom-split"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Carbon" },
      ]}
      statusPill="ENVIRONMENTAL MARKETS & ESG · EST. 2023"
      eyebrow="Environmental Commodities & Sustainability Desk"
      title={"Turning Clean Energy Into Verified Carbon Credits, I\u2011RECs & ESG Impact."}
      description="Samansco Carbon operates as the Group's dedicated environmental markets desk, originating, certifying, and monetizing high-integrity Renewable Energy Certificates (I-RECs) and verified carbon credits from African clean energy infrastructure."
      meta={
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-4">
          {assurances.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="type-code flex items-center gap-2 text-[11px] text-white/80"
            >
              <Icon aria-hidden="true" className="size-4 text-brand-soft" />
              {label}
            </span>
          ))}
        </div>
      }
      actions={
        <>
          <HeroSplitAction
            href="#portfolio"
            label="Explore Portfolio"
            icon={<ArrowRightIcon />}
          />
          <HeroGhostAction
            href="#inquire"
            icon={<ArrowDownIcon aria-hidden="true" />}
          >
            Structure I-REC Agreement
          </HeroGhostAction>
        </>
      }
      bottomBand={
        <HeroBand
          heading="Environmental Commodity Desk // CAR-MKT-2024 · Live"
          headingAside="Harare & Johannesburg Desks · SADC Region Active"
        >
          {deskSpecs.map((spec) => (
            <HeroBandCell
              key={spec.label}
              label={spec.label}
              value={spec.value}
              note={spec.note}
              accent={spec.accent}
            />
          ))}
        </HeroBand>
      }
    />
  );
}
