import { Footprint } from "@/features/home/components/footprint";
import { GroupHero } from "@/features/home/components/group-hero";
import { HomeEngagement } from "@/features/home/components/home-engagement";
import { MetricStrip } from "@/features/home/components/metric-strip";
import { OperatingCompanies } from "@/features/home/components/operating-companies";
import { ResourceAdvantage } from "@/features/home/components/resource-advantage";

export default function HomePage() {
  return (
    <>
      <GroupHero />
      <MetricStrip />
      <OperatingCompanies />
      <ResourceAdvantage />
      <Footprint />
      <HomeEngagement />
    </>
  );
}
