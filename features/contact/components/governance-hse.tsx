import {
  GavelIcon,
  LeafIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { Section } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type Pillar = {
  title: string;
  body: string;
  statLabel: string;
  statValue: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  anchor?: string;
};

const pillars: Pillar[] = [
  {
    title: "Legal & Regulatory Compliance",
    body: "Full adherence to national occupational health and safety acts, Zimbabwe Energy Regulatory Authority (ZERA) frameworks, and Engineering Council of Zimbabwe standards across all high-voltage sub-stations, microgrids, and field installations.",
    statLabel: "Statutory audit",
    statValue: "100% verified",
    icon: GavelIcon,
    image: "/images/energy-hero-substation.jpg",
    imageAlt:
      "High-voltage electrical substation operated under statutory regulatory compliance.",
  },
  {
    title: "Proactive Safety Culture",
    body: "Mandatory pre-work risk assessments, rigorous Lockout/Tagout (LOTO) protocols for high-voltage DC & AC infrastructure, Working at Heights certification, and continuous technical tooling audits to guarantee zero preventable lost-time injuries.",
    statLabel: "Zero harm metric",
    statValue: "> 1.8M safe hours",
    icon: ShieldCheckIcon,
    image: "/images/maintenance-technicians.jpg",
    imageAlt:
      "Field engineers wearing insulated PPE and executing LOTO safety protocols.",
    imageClassName: "object-top",
  },
  {
    title: "Quality & Environmental Integrity",
    body: "Strict alignment with ISO 9001 (Quality Management) and ISO 14001 (Environmental Stewardship) global standards. Our end-of-life solar panel and lithium-ion battery lifecycle protocols safeguard workers, host communities, and fragile Southern African ecosystems.",
    statLabel: "Environmental ISO",
    statValue: "ISO 14001 / 9001",
    icon: LeafIcon,
    image: "/images/carbon-hero-landscape.jpg",
    imageAlt:
      "Clean solar generation integrated with the Southern African landscape.",
    anchor: "quality",
  },
];

/**
 * Corporate governance and HSE policy strip. Footer links land here:
 * `#governance` on the section, `#hse` on the policy block and `#quality` on
 * the environmental integrity pillar.
 */
export function GovernanceHse() {
  return (
    <Section
      tone="band"
      id="governance"
      className="scroll-mt-24 border-y border-hairline/60"
    >
      <div className="shell section-y">
        <div id="hse" className="scroll-mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="type-headline-xl text-balance text-ink">
                Corporate Governance &amp; Health, Safety Policy (HSE)
              </h2>
              <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-muted-foreground">
                Samansco Group enforces rigorous statutory compliance,
                operational ethics, and proactive risk elimination across all
                subsidiary grid, utility, and field engineering operations.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-1 border-t border-hairline pbs-3 md:border-t-0 md:border-s md:pbs-0 md:pis-6">
              <span className="type-body-sm font-semibold text-ink">
                ZERA Licence No. 0422/GEN
              </span>
              <span className="type-body-sm text-muted-foreground">
                ISO 9001 &amp; ISO 14001 compliant
              </span>
            </div>
          </div>

          <div className="mbs-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <ImageBackdropCard
                  key={pillar.title}
                  id={pillar.anchor}
                  image={pillar.image}
                  imageAlt={pillar.imageAlt}
                  imageClassName={pillar.imageClassName}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  scrim="deep"
                  className={cn(
                    "min-bs-[23rem] justify-between p-6",
                    pillar.anchor && "scroll-mt-24",
                  )}
                >
                  <div>
                    <div className="flex justify-end">
                      <span className="grid size-9 shrink-0 place-items-center border border-white/20 bg-ink/60 backdrop-blur-sm">
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-brand-soft"
                        />
                      </span>
                    </div>

                    <h3 className="type-headline-sm mbs-4 text-white">
                      {pillar.title}
                    </h3>
                    <p className="type-body-md mbs-2 leading-relaxed text-white/85">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="type-body-sm mbs-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pbs-4 text-white/80">
                    <span>{pillar.statLabel}</span>
                    <span className="font-medium text-white tabular-nums">
                      {pillar.statValue}
                    </span>
                  </div>
                </ImageBackdropCard>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
