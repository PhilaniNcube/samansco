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
          eyebrow="Corporate & Institutional Engagement"
          title="Initiate a Strategic Partnership or PPA Consultation"
          description="Connect with Samansco Holdings executive leadership and technical division engineers."
          actionLabel="Contact Group Headquarters"
          actionHref="/contact"
        />
      </div>
    </Section>
  );
}
