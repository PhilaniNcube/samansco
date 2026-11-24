import type { Metadata } from "next";
import { CapabilityMatrix } from "@/features/industries/components/capability-matrix";
import { CredentialStrip } from "@/features/industries/components/credential-strip";
import { Endorsements } from "@/features/industries/components/endorsements";
import { EnquiryCta } from "@/features/industries/components/enquiry-cta";
import { IndustriesHero } from "@/features/industries/components/industries-hero";
import { PartnerWall } from "@/features/industries/components/partner-wall";
import { ProjectGallery } from "@/features/industries/components/project-gallery";

export const metadata: Metadata = {
  title: "Samansco Industries — EPC, Solar Supply & Water Systems",
  description:
    "Samansco Industries (Pvt) Ltd is the founding operating company behind the original Samansco solar brand—operating as an independent infrastructure entity focused on heavy EPC, technical distribution, and community water projects, separate from Samansco Energy, Maintenance, and Carbon.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <CredentialStrip />
      <CapabilityMatrix />
      <PartnerWall />
      <ProjectGallery />
      <Endorsements />
      <EnquiryCta />
    </>
  );
}
