import { ArrowDownIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

export function GroupHero() {
  return (
    <PageHero
      image="/images/home-hero-source.webp"
      imageAlt="Aerial view of a multi-storey institutional building with a large rooftop solar array above the surrounding high-density suburb."
      priority
      size="cinematic"
      scrim="cinematic"
      gridVariant="vooma"
      title="The Future of Power, Delivered."
      description="Vertically integrated solar engineering, commercial power trading, asset stewardship, and verified carbon markets across Southern Africa."
      actions={
        <HeroSplitAction
          href="#operating-companies"
          label="Explore operating companies"
          icon={<ArrowDownIcon />}
        />
      }
    />
  );
}
