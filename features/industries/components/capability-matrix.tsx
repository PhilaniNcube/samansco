"use client";

import {
  CheckCircle2Icon,
  DropletsIcon,
  FactoryIcon,
  PackageIcon,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Capability = {
  value: "supply" | "epc" | "water";
  tab: string;
  division: string;
  title: string;
  description: string;
  bullets: string[];
  assurance: string;
  icon: LucideIcon;
  accent: "brand" | "charcoal";
};

const capabilities: Capability[] = [
  {
    value: "supply",
    tab: "Supply",
    division: "Division 01 // Supply",
    title: "Solar Equipment Supply & Technical Distribution",
    description:
      "Wholesale distribution and direct factory warranty coordination across Southern Africa for top-tier international manufacturers.",
    bullets: [
      "Tier-1 monocrystalline PV modules, high-capacity Gel & Lithium BESS storage banks.",
      "Commercial hybrid & utility grid-tie inverters, industrial MPPT charge controllers.",
      "Certified balance of system (BOS) switchgear, surge suppression, and structural racking.",
      "Harare central warehousing with regional SADC logistics clearing capabilities.",
    ],
    assurance: "Tier-1 Supply Chain Assurance",
    icon: PackageIcon,
    accent: "brand",
  },
  {
    value: "epc",
    tab: "EPC",
    division: "Division 02 // EPC",
    title: "EPC & Turnkey Project Delivery",
    description:
      "Complete electrical, structural, and civil engineering delivery for mission-critical installations requiring rigorous compliance.",
    bullets: [
      "Utility-scale, commercial & industrial (C&I), mini-grid, and microgrid installations.",
      "Autonomous hybrid backup plants, telecommunications base station power nodes.",
      "End-to-end design, structural wind load analysis, SCADA sync, and commissioning.",
      "High-efficiency municipal solar street lighting with smart dusk-to-dawn controls.",
    ],
    assurance: "Engineered to IEC & ZWS Standards",
    icon: FactoryIcon,
    accent: "charcoal",
  },
  {
    value: "water",
    tab: "Water",
    division: "Division 03 // Water",
    title: 'NGO & Solar Water Solutions ("Water Is Life")',
    description:
      "Official LORENTZ Distribution Partner delivering high-durability solar pumping systems engineered for rugged remote deployment.",
    bullets: [
      "Official LORENTZ Premier Partner delivering helical rotor deep-well submersibles.",
      "Large-scale rural piped community water schemes and institutional healthcare clinic supplies.",
      "High-yield agricultural drip irrigation networks for cooperative and commercial farming.",
      "Fuel-free operational longevity engineered for extreme heat and variable water tables.",
    ],
    assurance: "Official LORENTZ Distribution Partner",
    icon: DropletsIcon,
    accent: "brand",
  },
];

function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = capability.icon;
  const isBrand = capability.accent === "brand";

  return (
    <article className="flex h-full flex-col rounded-lg border border-hairline bg-surface-band p-6 lg:p-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="type-code text-caption uppercase">
          {capability.division}
        </span>
        <Icon
          aria-hidden="true"
          className={cn(
            "size-7 shrink-0",
            isBrand ? "text-brand-deep" : "text-charcoal",
          )}
        />
      </div>

      <h3 className="type-headline-md text-ink">{capability.title}</h3>
      <p className="type-body-md mt-3 leading-relaxed text-muted-foreground">
        {capability.description}
      </p>

      <ul className="mt-5 mb-8 space-y-2.5">
        {capability.bullets.map((bullet) => (
          <li
            key={bullet}
            className="type-body-sm flex items-start gap-2 text-charcoal"
          >
            <CheckCircle2Icon
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-hairline/80 pt-4">
        <span className="type-eyebrow text-caption">
          {capability.assurance}
        </span>
      </div>
    </article>
  );
}

/**
 * Core industrial capabilities. The three divisions sit as a technical matrix
 * on desktop; on narrow screens a segmented control keeps one capability in
 * view at a time.
 */
export function CapabilityMatrix() {
  return (
    <Section tone="white">
      <div className="shell section-y">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-12">
          <SectionHeading
            eyebrow="Core Industrial Capabilities"
            title="Integrated Turnkey Energy & Water Systems"
            className="max-w-2xl"
          />
          <p className="type-body-md max-w-md leading-relaxed text-muted-foreground">
            Providing specialized infrastructure execution for institutional
            developers, international NGOs, municipal agencies, and heavy
            commerce.
          </p>
        </div>

        <div className="lg:hidden">
          <Tabs defaultValue="supply">
            <TabsList
              aria-label="Industrial capability"
              className="grid w-full grid-cols-3"
            >
              {capabilities.map((capability) => (
                <TabsTrigger
                  key={capability.value}
                  value={capability.value}
                  className="type-code tracking-wide"
                >
                  {capability.tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {capabilities.map((capability) => (
              <TabsContent
                key={capability.value}
                value={capability.value}
                className="mt-4"
              >
                <CapabilityCard capability={capability} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.value} capability={capability} />
          ))}
        </div>
      </div>
    </Section>
  );
}
