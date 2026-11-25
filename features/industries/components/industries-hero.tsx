import { ArrowRightIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

/**
 * Samansco Industries subsidiary hero: full-bleed solar campus photography
 * with concise bottom-anchored mandate and single primary CTA.
 */
export function IndustriesHero() {
  return (
    <PageHero
      image="/images/panels.webp"
      imageAlt="Aerial view of an institutional campus complex outfitted with a commercial rooftop solar photovoltaic array."
      priority
      size="division"
      scrim="deep"
      gridVariant="structural"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Industries" },
      ]}
      title="Turnkey Solar EPC, Equipment Supply and Water Systems."
      description="Samansco Industries delivers utility and commercial solar engineering, direct factory distribution, and community water infrastructure across 15+ African markets."
      actions={
        <HeroSplitAction
          href="#epc-inquiry"
          label="Enquire about EPC services"
          icon={<ArrowRightIcon />}
        />
      }
    />
  );
}
