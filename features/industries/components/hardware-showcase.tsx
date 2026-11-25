import Image from "next/image";
import { Section, SectionHeading } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type HardwareItem = {
  image: string;
  imageAlt: string;
  plate: "cover" | "light" | "dark";
  imageClassName?: string;
  category: string;
  name: string;
  description: string;
  spec: string;
};

const hardwareItems: HardwareItem[] = [
  {
    image: "/images/sigenergy-battery-storage.jpg",
    imageAlt:
      "Sigenergy SigenStor modular battery energy storage stacks arranged side by side.",
    plate: "cover",
    imageClassName: "object-cover object-left",
    category: "BESS // MODULAR STORAGE",
    name: "Sigenergy SigenStor Modular BESS",
    description:
      "Five-in-one integrated solar inverter, battery pack, EMS, and gateway architecture engineered for scalable commercial and industrial resilience.",
    spec: "C&I & Residential 5-in-1 Energy System",
  },
  {
    image: "/images/EVDC Charging Module_Front View.webp",
    imageAlt:
      "Front view of the Sigenergy bi-directional EVDC fast-charging module integrated with a storage stack.",
    plate: "light",
    category: "BESS + EV // DC CHARGING",
    name: "Sigenergy EVDC Fast-Charging Stack",
    description:
      "Direct DC-coupled electric vehicle charging module drawing straight from PV arrays and battery storage without redundant AC conversion losses.",
    spec: "Bi-Directional DC Fast-Charging Module",
  },
  {
    image: "/images/AC Charger_Front View.webp",
    imageAlt:
      "Front view of the Sigenergy Sigen EV AC wall charger with tethered connector.",
    plate: "light",
    category: "MOBILITY // AC CHARGER",
    name: "Sigenergy Sigen EV AC Charger",
    description:
      "Commercial fleet and workplace AC EVSE designed for automated solar-surplus charging, dynamic load balancing, and RFID access control.",
    spec: "Solar-Surplus Commercial Fleet EVSE",
  },
  {
    image: "/images/tbb-riio-sun-ii-white.webp",
    imageAlt:
      "Angled front view of the TBB Power RiiO Sun II hybrid inverter unit.",
    plate: "light",
    category: "INVERTER // HYBRID",
    name: "TBB Power RiiO Sun II All-in-One",
    description:
      "Rugged off-grid and hybrid inverter-charger built with high surge-handling capability for clinics, remote boreholes, and mission-critical loads.",
    spec: "High-Surge Off-Grid & Hybrid Inverter",
  },
  {
    image: "/images/tbb-gs5s-battery-stack.webp",
    imageAlt:
      "Three-tier stack of TBB Power GS5S rack-mounted lithium battery modules.",
    plate: "dark",
    category: "STORAGE // LFP RACK",
    name: "TBB Power GS5S Rack Lithium Stack",
    description:
      "Modular 48V LiFePO4 rack-mount energy storage bank offering parallel expandability, active BMS telemetry, and long cycle life.",
    spec: "Modular 48V LiFePO4 Rack-Mount Bank",
  },
  {
    image: "/images/eastron-sdm630-energy-meter.webp",
    imageAlt:
      "Eastron SDM630-Modbus V2 three-phase DIN-rail multifunction energy meter.",
    plate: "light",
    category: "METERING // SCADA",
    name: "Eastron SDM630-Modbus V2 Meter",
    description:
      "High-accuracy three-phase DIN-rail revenue and bi-directional power meter feeding real-time RS485 Modbus telemetry into plant SCADA systems.",
    spec: "3-Phase DIN-Rail RS485 Revenue Meter",
  },
];

const plateClasses: Record<HardwareItem["plate"], string> = {
  cover: "bg-ink",
  light: "bg-white",
  dark: "bg-black",
};

/**
 * Certified equipment & storage architecture: showcases the core BESS, inverter,
 * EV charging and metering hardware distributed from Samansco's Harare hub.
 */
export function HardwareShowcase() {
  return (
    <Section
      tone="page"
      id="hardware-architecture"
      aria-labelledby="hardware-showcase-title"
      className="scroll-mt-24 border-b border-hairline/60"
    >
      <div className="shell section-y">
        <div className="mbe-10 flex flex-col gap-6 border-b border-hairline/60 pbe-8 md:flex-row md:items-end md:justify-between lg:mbe-12">
          <SectionHeading
            eyebrow="Harare Central Warehousing"
            title="Certified Equipment & Storage Architecture"
            titleClassName="text-balance"
            className="max-w-2xl"
          />
          <p className="type-body-md max-w-md leading-relaxed text-muted-foreground">
            Authorized SADC distribution inventory backed by local engineering
            support, factory warranty administration, and spares availability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hardwareItems.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-clip border border-hairline bg-card"
            >
              <div
                className={cn(
                  "relative aspect-[4/3] is-full overflow-clip border-b border-hairline",
                  plateClasses[item.plate],
                )}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    item.plate === "cover"
                      ? item.imageClassName ?? "object-cover"
                      : "object-contain p-5",
                  )}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="type-eyebrow text-brand-deep">{item.category}</p>
                <h3 className="type-headline-sm mbs-2 text-ink">{item.name}</h3>
                <p className="type-body-sm mbs-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mbs-auto pbs-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-hairline/80 pbs-3.5">
                    <span className="type-code text-ink">{item.spec}</span>
                    <span className="type-code text-caption uppercase">
                      Direct Factory Warranty
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
