"use client";

import {
  CheckCircle2Icon,
  DropletsIcon,
  FactoryIcon,
  PackageIcon,
  type LucideIcon,
} from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { Section, SectionHeading } from "@/components/samansco/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Capability = {
  value: "supply" | "epc" | "water";
  tab: string;
  title: string;
  description: string;
  bullets: string[];
  assurance: string;
  icon: LucideIcon;
  accent: "brand" | "charcoal";
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

const capabilities: Capability[] = [
  {
    value: "supply",
    tab: "Supply",
    title: "Solar Equipment Supply & Technical Distribution",
    description:
      "Wholesale distribution and direct factory warranty coordination across Southern Africa for top-tier international manufacturers.",
    bullets: [
      "Tier-1 monocrystalline PV modules, high-capacity Gel & Lithium BESS storage banks.",
      "Commercial hybrid & utility grid-tie inverters, industrial MPPT charge controllers.",
      "Certified balance of system (BOS) switchgear, surge suppression, and structural racking.",
      "Harare central warehousing with regional SADC logistics clearing capabilities.",
    ],
    assurance: "Tier-1 supply chain assurance",
    icon: PackageIcon,
    accent: "brand",
    image: "/images/installation.webp",
    imageAlt:
      "Commercial Sigenergy battery energy storage room with switchgear and grid gateway.",
  },
  {
    value: "epc",
    tab: "EPC",
    title: "EPC & Turnkey Project Delivery",
    description:
      "Complete electrical, structural, and civil engineering delivery for mission-critical installations requiring rigorous compliance.",
    bullets: [
      "Utility-scale, commercial & industrial (C&I), mini-grid, and microgrid installations.",
      "Autonomous hybrid backup plants, telecommunications base station power nodes.",
      "End-to-end design, structural wind load analysis, SCADA sync, and commissioning.",
      "High-efficiency municipal solar street lighting with smart dusk-to-dawn controls.",
    ],
    assurance: "Engineered to IEC & ZWS standards",
    icon: FactoryIcon,
    accent: "charcoal",
    image: "/images/home-hero-source.webp",
    imageAlt:
      "Aerial view of a large commercial rooftop solar photovoltaic plant.",
  },
  {
    value: "water",
    tab: "Water",
    title: 'NGO & Solar Water Solutions ("Water Is Life")',
    description:
      "Official LORENTZ Distribution Partner delivering high-durability solar pumping systems engineered for rugged remote deployment.",
    bullets: [
      "Official LORENTZ Premier Partner delivering helical rotor deep-well submersibles.",
      "Large-scale rural piped community water schemes and institutional healthcare clinic supplies.",
      "High-yield agricultural drip irrigation networks for cooperative and commercial farming.",
      "Fuel-free operational longevity engineered for extreme heat and variable water tables.",
    ],
    assurance: "Official LORENTZ distribution partner",
    icon: DropletsIcon,
    accent: "brand",
    image: "/images/carbon-hero-landscape.jpg",
    imageAlt:
      "Ground-mounted solar array deployed across rural Southern African terrain.",
  },
];

function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = capability.icon;
  const isBrand = capability.accent === "brand";

  return (
    <ImageBackdropCard
      image={capability.image}
      imageAlt={capability.imageAlt}
      imageClassName={capability.imageClassName}
      sizes="(min-width: 1024px) 33vw, 100vw"
      scrim="deep"
      className="bs-full min-bs-[28rem] p-6 lg:p-8"
    >
      <div className="mbe-5 flex items-center justify-end">
        <span className="grid size-10 shrink-0 place-items-center border border-white/20 bg-ink/60 backdrop-blur-sm">
          <Icon
            aria-hidden="true"
            className={cn(
              "size-5",
              isBrand ? "text-brand-soft" : "text-white",
            )}
          />
        </span>
      </div>

      <h3 className="type-headline-md text-white">{capability.title}</h3>
      <p className="type-body-md mbs-3 leading-relaxed text-white/85">
        {capability.description}
      </p>

      <ul className="mbs-5 mbe-8 space-y-2.5">
        {capability.bullets.map((bullet) => (
          <li
            key={bullet}
            className="type-body-md flex items-start gap-2.5 text-white/90"
          >
            <CheckCircle2Icon
              aria-hidden="true"
              className="mbs-1 size-4 shrink-0 text-brand-soft"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mbs-auto border-t border-white/15 pbs-4">
        <span className="type-body-sm text-white/80">
          {capability.assurance}
        </span>
      </div>
    </ImageBackdropCard>
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
        <div className="mbe-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mbe-12">
          <SectionHeading
            title="Integrated Turnkey Energy & Water Systems"
            className="max-w-2xl"
          />
          <p className="type-body-md max-w-[42ch] leading-relaxed text-muted-foreground">
            Specialized infrastructure execution for institutional developers,
            international NGOs, municipal agencies, and heavy commerce.
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
                  className="type-label"
                >
                  {capability.tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {capabilities.map((capability) => (
              <TabsContent
                key={capability.value}
                value={capability.value}
                className="mbs-4"
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
