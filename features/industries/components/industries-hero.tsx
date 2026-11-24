import { ArrowRightIcon } from "lucide-react";
import {
  HeroBand,
  HeroBandCell,
  HeroGhostAction,
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";

const operationalSpecs = [
  { label: "Licensure Class", value: "ZERA Certified" },
  { label: "Engineering Council", value: "ECZ No. 300326" },
  { label: "Institutional Status", value: "ZIE Affiliate 20218996" },
  { label: "Primary Warehouse", value: "Eastlea Logistics Center" },
];

/**
 * Samansco Industries subsidiary hero: editorial blueprint photography over
 * campus solar infrastructure with bottom-anchored mandate and operational band.
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
      layout="bottom-split"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Samansco Industries" },
      ]}
      statusPill="FOUNDING OPERATING COMPANY · EST. 1982"
      eyebrow="Samansco Industries (Pvt) Ltd"
      title="Engineering, Procurement, Construction & Solar Supply Since 1982."
      description="Samansco Industries is the founding operating entity behind the original Samansco solar brand—delivering heavy EPC execution, Tier-1 distribution, and community water infrastructure across 15+ African markets."
      actions={
        <>
          <HeroSplitAction
            href="#epc-inquiry"
            label="Enquire EPC Services"
            icon={<ArrowRightIcon />}
          />
          <HeroGhostAction href="#flagship-projects">
            Flagship Projects
          </HeroGhostAction>
        </>
      }
      bottomBand={
        <HeroBand
          heading="Operational Profile · Harare Hub"
          headingAside={
            <span className="inline-flex items-center gap-2">
              ENGINEERING OPERATIONS ACTIVE · ZIM • SADC REGION
            </span>
          }
        >
          {operationalSpecs.map((spec) => (
            <HeroBandCell
              key={spec.label}
              label={spec.label}
              value={spec.value}
            />
          ))}
        </HeroBand>
      }
    />
  );
}
