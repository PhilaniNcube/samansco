import type { Metadata } from "next";
import { CommercialFramework } from "@/features/energy/components/commercial-framework";
import { EnergyEngagement } from "@/features/energy/components/energy-engagement";
import { EnergyHero } from "@/features/energy/components/energy-hero";
import { MarketMetrics } from "@/features/energy/components/market-metrics";
import { OfftakeEstimator } from "@/features/energy/components/offtake-estimator";
import { RegulatoryFramework } from "@/features/energy/components/regulatory-framework";
import { TradingDesk } from "@/features/energy/components/trading-desk";
import { ValueChain } from "@/features/energy/components/value-chain";

export const metadata: Metadata = {
  title: "Samansco Energy",
  description:
    "Samansco Energy is the commercial utility layer of Samansco Group: institutional long-term PPAs, cross-border SAPP wheeling, and Virtual Power Plant aggregation.",
};

export default function EnergyPage() {
  return (
    <>
      <EnergyHero />
      <MarketMetrics />
      <CommercialFramework />
      <OfftakeEstimator />
      <ValueChain />
      <RegulatoryFramework />
      <TradingDesk />
      <EnergyEngagement />
    </>
  );
}
