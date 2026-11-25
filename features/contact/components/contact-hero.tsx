import { ArrowDownIcon } from "lucide-react";
import { HeroSplitAction, PageHero } from "@/components/samansco/page-hero";

/**
 * Contact page hero: compact blue-hour corporate headquarters backdrop paired
 * with direct anchor to the enquiry form.
 */
export function ContactHero() {
  return (
    <PageHero
      image="/images/contact-hero-hq.jpg"
      imageAlt="Contemporary Samansco corporate headquarters building in steel, concrete, and warm-lit glass at blue hour."
      priority
      size="compact"
      scrim="deep"
      gridVariant="structural"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Contact & Governance" },
      ]}
      title="Contact Samansco Group."
      description="Reach our Harare headquarters or route your enquiry directly to Samansco Industries, Energy, Maintenance, or Carbon desks."
      actions={
        <HeroSplitAction
          href="#enquiry-form"
          label="Initiate enquiry"
          icon={<ArrowDownIcon />}
        />
      }
    />
  );
}
