import type { Metadata } from "next";
import { CarbonCapabilities } from "@/features/carbon/components/carbon-capabilities";
import { CarbonCta } from "@/features/carbon/components/carbon-cta";
import { CarbonHero } from "@/features/carbon/components/carbon-hero";
import { CarbonMetrics } from "@/features/carbon/components/carbon-metrics";
import { CarbonRegistry } from "@/features/carbon/components/carbon-registry";
import { CarbonValueChain } from "@/features/carbon/components/carbon-value-chain";
import { CarbonYieldModel } from "@/features/carbon/components/carbon-yield-model";

export const metadata: Metadata = {
  title: "Carbon · I-RECs, Verified Carbon Credits & ESG Advisory",
  description:
    "Samansco Carbon originates, certifies, and monetizes high-integrity I-RECs and verified carbon credits from African clean energy infrastructure.",
};

export default function CarbonPage() {
  return (
    <>
      <CarbonHero />
      <CarbonMetrics />
      <CarbonCapabilities />
      <CarbonYieldModel />
      <CarbonValueChain />
      <CarbonRegistry />
      <CarbonCta />
    </>
  );
}
