import { BoltIcon, LeafIcon, WrenchIcon } from "lucide-react";
import { DivisionCard } from "@/components/samansco/division-card";
import { Section, SectionHeading } from "@/components/samansco/section";

const companies = [
  {
    subtitle: "Since 1982 · EPC and distribution",
    accent: "brand" as const,
    name: "Samansco Industries",
    description:
      "Founding operating company focused on comprehensive solar EPC, heavy equipment distribution, and critical NGO and community water and power infrastructure.",
    capabilities: [
      "Tier-1 PV & Hybrid Battery Storage Architecture",
      "Regional Logistics Hub & Direct Factory Supply Lines",
    ],
    href: "/industries",
    ctaLabel: "View Samansco Industries",
    icon: undefined,
    image: "/images/panels.webp",
    imageAlt:
      "Samansco field engineers servicing a large commercial rooftop solar array.",
    imageClassName: "object-top",
  },
  {
    subtitle: "Since 2017 · Power utility and trading",
    accent: "charcoal" as const,
    name: "Samansco Energy",
    description:
      "Commercial power utility layer executing long-term commercial and industrial PPAs, wholesale power trading across the Southern African Power Pool (SAPP), and Virtual Power Plant aggregation.",
    capabilities: [
      "Licensed Regional Electricity Wheeling & Retail",
      "Multi-Megawatt Industrial PPA Structuring",
    ],
    href: "/energy",
    ctaLabel: "View Samansco Energy",
    icon: BoltIcon,
    image: "/images/energy-hero-substation.jpg",
    imageAlt:
      "High-voltage regional transmission substation and power corridors at twilight.",
  },
  {
    subtitle: "Since 2013 · 24/7 asset monitoring",
    accent: "emerald" as const,
    name: "Samansco Maintenance",
    description:
      "Dedicated technical Operations & Maintenance entity providing round-the-clock SCADA asset monitoring, systematic preventive servicing, performance optimization, and rapid field repairs for C&I installations.",
    capabilities: [
      "99.4% Grid & Generation Availability SLAs",
      "Infrared Thermography & Factory RMA Handling",
    ],
    href: "/maintenance",
    ctaLabel: "View Samansco Maintenance",
    icon: WrenchIcon,
    image: "/images/maintenance-technicians.jpg",
    imageAlt:
      "Certified Samansco Maintenance technicians inspecting a solar combiner enclosure.",
    imageClassName: "object-top",
  },
  {
    subtitle: "Since 2023 · I-RECs and carbon credits",
    accent: "brand" as const,
    name: "Samansco Carbon",
    description:
      "Environmental commodity and sustainability arm facilitating International Renewable Energy Certificates (I-RECs), high-integrity voluntary carbon credits, corporate emissions auditing, and institutional ESG roadmapping.",
    capabilities: [
      "Traceable Registry Issuance & Retirement",
      "Scope 1, 2 & 3 Decarbonization Pathways",
    ],
    href: "/carbon",
    ctaLabel: "View Samansco Carbon",
    icon: LeafIcon,
    image: "/images/carbon-hero-landscape.jpg",
    imageAlt:
      "Utility-scale solar array across Southern African savanna at dawn.",
  },
];

/**
 * Group portfolio: the four operating companies as a 2x2 structural grid.
 */
export function OperatingCompanies() {
  return (
    <Section tone="page" id="operating-companies" className="scroll-mt-20">
      <div className="shell section-y">
        <div className="mbe-10 border-b border-hairline/60 pbe-8">
          <SectionHeading
            title="Our Operating Companies"
            description="Vertically integrated across engineering, generation trading, asset maintenance, and environmental commodities."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {companies.map((company) => (
            <DivisionCard key={company.name} {...company} />
          ))}
        </div>
      </div>
    </Section>
  );
}
