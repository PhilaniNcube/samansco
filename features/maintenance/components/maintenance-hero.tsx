import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import {
  HeroGhostAction,
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";
import { TelemetryConsole } from "./telemetry-console";

/**
 * Maintenance hero: golden-hour plant photography paired with the live
 * interactive SCADA telemetry console anchored in the lower-right column.
 */
export function MaintenanceHero() {
  return (
    <PageHero
      image="/images/varsity.webp"
      imageAlt="Utility-scale solar photovoltaic plant in Southern Africa at golden hour, with precision-aligned bifacial panel rows stretching toward the horizon."
      imageClassName="object-bottom"
      priority
      size="division"
      scrim="dusk"
      gridVariant="corridor"
      layout="bottom-aside"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Maintenance" },
      ]}
      statusPill="O&M LIVE · EST. 2013"
      eyebrow="Operations & Asset Care"
      title={"Protecting Asset Uptime, Yield & Long\u2011Term Performance."}
      description="Samansco Maintenance is a standalone Operations & Maintenance (O&M) company dedicated to caring for 20- to 25-year utility-scale and commercial & industrial solar and battery energy storage assets across Southern Africa."
      actions={
        <>
          <HeroSplitAction
            href="/contact"
            label="Request O&M Consultation"
            icon={<ArrowRightIcon />}
          />
          <HeroGhostAction
            href="#core-services"
            icon={<ArrowDownIcon aria-hidden="true" />}
          >
            Explore O&amp;M Scope
          </HeroGhostAction>
        </>
      }
    // aside={
    //   <TelemetryConsole className="rounded-[2px] border-white/15 bg-ink/85 backdrop-blur-md" />
    // }
    />
  );
}
