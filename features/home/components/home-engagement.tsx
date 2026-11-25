import { EngagementCta } from "@/components/samansco/engagement-cta";
import { Section } from "@/components/samansco/section";

/**
 * Closing engagement banner for the group home page.
 */
export function HomeEngagement() {
  return (
    <Section tone="white" className="border-t border-hairline/60 py-12 lg:py-16">
      <div className="shell">
        <EngagementCta
          title="Initiate a Strategic Partnership or PPA Consultation"
          description="Connect with Samansco Group executive leadership and technical division engineers."
          actionLabel="Contact Group Headquarters"
          actionHref="/contact"
          image="/images/maintenance-plant-dusk.jpg"
          imageAlt="Aerial view of a utility-scale solar farm at golden hour across Southern Africa."
          imageClassName="object-top"
        />
      </div>
    </Section>
  );
}
