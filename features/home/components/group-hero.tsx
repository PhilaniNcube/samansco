import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import {
  HeroGhostAction,
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";

export function GroupHero() {
  return (
    <PageHero
      image="/images/home-hero-source.webp"
      imageAlt="Aerial view of a multi-storey institutional building with a large rooftop solar array above the surrounding high-density suburb."
      priority
      size="cinematic"
      scrim="cinematic"
      gridVariant="vooma"
      layout="bottom-split"
      statusPill="ESTABLISHED 1982 · SOUTHERN AFRICA"
      title="The Future of Power, Delivered."
      description="A vertically integrated energy and electricity group shaping Africa's clean energy future through heavy infrastructure execution, commercial power trading, and enduring operational stewardship."
      actions={
        <>
          <HeroSplitAction
            href="#operating-companies"
            label="Explore Companies"
            icon={<ArrowDownIcon />}
          />
          <HeroGhostAction href="/contact" icon={<ArrowRightIcon aria-hidden="true" />}>
            Contact Group HQ
          </HeroGhostAction>
        </>
      }
    />
  );
}
