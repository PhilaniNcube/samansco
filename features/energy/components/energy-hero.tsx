import { ArrowDownIcon, ShieldCheckIcon } from "lucide-react";
import {
  HeroBand,
  HeroBandCell,
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";
import { ProspectusDialog } from "@/features/energy/components/prospectus-dialog";

const charterRows = [
  {
    label: "Corporate Entity",
    value: "Samansco Electric Power Company (SEPCO)",
    accent: true,
  },
  {
    label: "Regulatory Status",
    value: "Licensed Electricity Trader & Wheeling Aggregator",
  },
  {
    label: "Market Affiliations",
    value: "SAPP & EAPP Synchronized Participant",
  },
  {
    label: "Grid Integration",
    value: "Virtual Power Plant (VPP) Algorithmic Dispatch Engine",
  },
];

/**
 * Subsidiary hero for SEPCO: high-voltage substation twilight photography
 * paired with bottom-anchored mandate and operating charter proof band.
 */
export function EnergyHero() {
  return (
    <PageHero
      image="/images/energy-storage.webp"
      imageAlt="High-voltage 330kV electrical substation and steel transmission towers across Southern African hills at blue-hour dusk."
      priority
      size="division"
      scrim="deep"
      gridVariant="corridor"
      layout="bottom-split"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Energy (SEPCO)" },
      ]}
      // statusPill={
      //   <>
      //     <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
      //     POWER UTILITY &amp; TRADING · LIC-POW-2021/SA
      //   </>
      // }
      // eyebrow="Autonomous Power Operating Arm"
      title="Energy Trading, Electricity Retail & Virtual Power Plants."
      description="Samansco Electric Power Company (SEPCO) executes the Group's commercial electricity layer—structuring institutional PPAs, cross-border SAPP transmission wheeling, and smart-grid capacity via next-generation Virtual Power Plants."
      meta={
        <p className="type-code flex items-center gap-2 text-xs text-white/80">
          <ShieldCheckIcon
            aria-hidden="true"
            className="size-4 shrink-0 text-brand-soft"
          />
          Southern Africa Regional Grid Licensee
        </p>
      }
      actions={
        <>
          <HeroSplitAction
            href="#trading-inquiry"
            label="Initiate Trading Inquiry"
            icon={<ArrowDownIcon />}
          />
          <ProspectusDialog variant="hero" />
        </>
      }
      bottomBand={
        <HeroBand
          heading="Operating Charter & Reg. Desk"
          headingAside="Harare Central & Johannesburg SAPP Hubs · Telemetry < 340ms"
        >
          {charterRows.map((row) => (
            <HeroBandCell
              key={row.label}
              label={row.label}
              value={row.value}
              accent={row.accent}
            />
          ))}
        </HeroBand>
      }
    />
  );
}
