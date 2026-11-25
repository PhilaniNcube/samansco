import { ArrowRightIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

/**
 * Maintenance hero: golden-hour plant photography paired with concise mandate
 * and single primary CTA.
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
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Maintenance" },
      ]}
      title={"Protecting Asset Uptime, Yield & Long\u2011Term Performance."}
      description="Samansco Maintenance cares for 20- to 25-year utility and commercial solar and battery storage assets across Southern Africa."
      actions={
        <HeroSplitAction
          href="/contact"
          label="Request O&M consultation"
          icon={<ArrowRightIcon />}
        />
      }
    />
  );
}
