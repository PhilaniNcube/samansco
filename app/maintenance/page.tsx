import type { Metadata } from "next";
import { CoreCapabilities } from "@/features/maintenance/components/core-capabilities";
import { FieldStandards } from "@/features/maintenance/components/field-standards";
import { MaintenanceCta } from "@/features/maintenance/components/maintenance-cta";
import { MaintenanceHero } from "@/features/maintenance/components/maintenance-hero";
import { TechnologyCollaborators } from "@/features/maintenance/components/technology-collaborators";

const description =
  "Samansco Maintenance is a standalone Operations & Maintenance (O&M) company dedicated to caring for 20- to 25-year utility-scale and commercial & industrial solar and battery energy storage assets across Southern Africa.";

export const metadata: Metadata = {
  title: {
    absolute: "Samansco Maintenance — O&M & Asset Monitoring",
  },
  description,
  openGraph: {
    title:
      "Samansco Maintenance — Protecting Asset Uptime, Yield & Long-Term Performance",
    description,
    siteName: "Samansco Group",
    type: "website",
  },
};

export default function MaintenancePage() {
  return (
    <>
      <MaintenanceHero />
      <CoreCapabilities />
      <FieldStandards />
      <TechnologyCollaborators />
      <MaintenanceCta />
    </>
  );
}
