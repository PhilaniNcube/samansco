import { ArrowDownIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

/**
 * Subsidiary hero for Samansco Energy: high-voltage substation twilight
 * photography paired with concise mandate and single primary CTA.
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
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Energy" },
      ]}
      title="Energy Trading, Electricity Retail & Virtual Power Plants."
      description="Samansco Energy structures institutional PPAs, cross-border SAPP electricity wheeling, and dispatchable capacity through cloud-managed Virtual Power Plants."
      actions={
        <HeroSplitAction
          href="#trading-inquiry"
          label="Initiate trading inquiry"
          icon={<ArrowDownIcon />}
        />
      }
    />
  );
}
