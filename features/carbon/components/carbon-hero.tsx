import { ArrowDownIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

/**
 * Carbon subsidiary hero: atmospheric savanna solar twilight photography
 * paired with concise mandate and single primary CTA.
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
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Carbon" },
      ]}
      title="Turning Clean Energy Into Verified Carbon Value."
      description="Samansco Carbon originates, certifies, and monetizes high-integrity I-RECs and verified carbon credits from African clean energy infrastructure."
      actions={
        <HeroSplitAction
          href="#portfolio"
          label="Explore carbon portfolio"
          icon={<ArrowDownIcon />}
        />
      }
    />
  );
}
