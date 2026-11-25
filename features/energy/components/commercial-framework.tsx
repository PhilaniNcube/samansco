import {
  ArrowLeftRightIcon,
  BadgeCheckIcon,
  CpuIcon,
  FileSignatureIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";
import {
  CapabilityBlock,
  type CapabilityBlockProps,
} from "@/features/energy/components/capability-block";
import { ProspectusDialog } from "@/features/energy/components/prospectus-dialog";

const capabilities: CapabilityBlockProps[] = [
  {
    icon: FileSignatureIcon,
    title: "Direct Electricity Retail & Long-Term PPAs",
    subtitle: "Tier-1 offtake structuring for mining and industrial baselines",
    description:
      "Tailored commercial and industrial (C&I) Power Purchase Agreements, multi-year fixed and indexed tariffs, corporate off-taker risk mitigation, and distributed rooftop/ground-mounted power sales.",
    capabilities: [
      "Long-term corporate energy cost hedging against grid escalation",
      "Zero-Capex off-taker options with guaranteed performance yields",
      "Demand-side management & dynamic industrial load profiling",
      "Bankable off-take contracts engineered to international project finance standards",
    ],
    metaLabel: "Tenure",
    metaValue: "5 to 20 years",
    status: "Tier-1 offtake",
    statusIcon: TrendingUpIcon,
    image: "/images/home-hero-source.webp",
    imageAlt:
      "Large commercial and industrial rooftop solar installation supplying long-term PPA baseload power.",
  },
  {
    icon: ArrowLeftRightIcon,
    title: "Wholesale Energy Trading & Grid Wheeling",
    subtitle: "Southern African Power Pool (SAPP) interconnection",
    description:
      "Bilateral energy trading contracts and market participation across the Southern African Power Pool (SAPP) day-ahead and intra-day markets, coordinating directly with national transmission utilities.",
    capabilities: [
      "Cross-border transmission capacity allocation and corridor access",
      "High-voltage grid wheeling coordination with ZETDC & Eskom systems",
      "Arbitrage & reserve margin balancing on Day-Ahead Markets (DAM)",
      "SADC regional power flow optimization across interconnectors",
    ],
    metaLabel: "Voltage",
    metaValue: "33kV to 400kV",
    status: "SAPP member",
    statusIcon: BadgeCheckIcon,
    image: "/images/energy-hero-substation.jpg",
    imageAlt:
      "High-voltage transmission substation and power corridors interconnecting the Southern African Power Pool.",
  },
  {
    icon: CpuIcon,
    title: "Virtual Power Plant & Asset Aggregation",
    subtitle: "Automated cloud dispatch and smart reserve balancing",
    description:
      "Next-generation aggregation of decentralized solar PV, Battery Energy Storage Systems (BESS), hydro, and flexible commercial loads into a unified dispatchable digital utility fleet.",
    capabilities: [
      "Real-time frequency response, spinning reserve & peak shaving",
      "AI-assisted algorithmic dispatch integrated with NeedEnergy grid APIs",
      "Ancillary stability services contracted to national transmission operators",
      "Monetization of idle distributed commercial battery reserves",
    ],
    metaLabel: "Intelligence",
    metaValue: "NeedEnergy",
    status: "Digital dispatch",
    statusIcon: CpuIcon,
    image: "/images/installation.webp",
    imageAlt:
      "Grid-synchronized battery energy storage stacks and switchgear inside a commercial plant room.",
  },
];

/**
 * Commercial utility framework: the three contractual and dispatch scopes that
 * define Samansco Energy's revenue engine.
 */
export function CommercialFramework() {
  return (
    <Section
      tone="white"
      id="commercial-framework"
      className="scroll-mt-20"
    >
      <div className="shell section-y">
        <div className="mbe-10 flex flex-col gap-6 border-b border-hairline/60 pbe-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Institutional Energy Operations"
            description="De-risking corporate energy consumption and optimizing utility-scale generation through structured power contracts and software-defined dispatch."
            className="max-w-2xl"
          />
          <div className="shrink-0">
            <ProspectusDialog />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityBlock key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </Section>
  );
}
