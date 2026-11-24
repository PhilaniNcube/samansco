import {
  GavelIcon,
  LeafIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, Section } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

type Pillar = {
  index: string;
  title: string;
  body: string;
  statLabel: string;
  statValue: string;
  icon: LucideIcon;
  anchor?: string;
};

const pillars: Pillar[] = [
  {
    index: "PILLAR 01",
    title: "Legal & Regulatory Compliance",
    body: "Full adherence to national occupational health and safety acts, Zimbabwe Energy Regulatory Authority (ZERA) frameworks, and Engineering Council of Zimbabwe standards across all high-voltage sub-stations, microgrids, and field installations.",
    statLabel: "Statutory Audit",
    statValue: "100% Verified",
    icon: GavelIcon,
  },
  {
    index: "PILLAR 02",
    title: "Proactive Safety Culture",
    body: "Mandatory pre-work risk assessments, rigorous Lockout/Tagout (LOTO) protocols for high-voltage DC & AC infrastructure, Working at Heights certification, and continuous technical tooling audits to guarantee zero preventable lost-time injuries.",
    statLabel: "Zero Harm Metric",
    statValue: "> 1.8M Safe Hours",
    icon: ShieldCheckIcon,
  },
  {
    index: "PILLAR 03",
    title: "Quality & Environmental Integrity",
    body: "Strict alignment with ISO 9001 (Quality Management) and ISO 14001 (Environmental Stewardship) global standards. Our end-of-life solar panel and lithium-ion battery lifecycle protocols safeguard workers, host communities, and fragile Southern African ecosystems.",
    statLabel: "Environmental ISO",
    statValue: "ISO 14001 / 9001",
    icon: LeafIcon,
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
              <Eyebrow>Institutional Standards &amp; Operational Rigor</Eyebrow>
              <h2 className="type-headline-xl mt-3 text-balance text-ink">
                Corporate Governance &amp; Health, Safety Policy (HSE)
              </h2>
              <p className="type-body-lg mt-4 leading-relaxed text-muted-foreground">
                Samansco Group enforces rigorous statutory compliance,
                operational ethics, and proactive risk elimination across all
                subsidiary grid, utility, and field engineering operations.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 rounded-none border border-hairline bg-card px-4 py-3">
              <span className="type-eyebrow text-caption">
                Statutory Framework
              </span>
              <span className="type-code text-ink">
                ZERA LICENSE NO. 0422/GEN
              </span>
              <span className="type-code text-muted-foreground">
                ISO 9001 / ISO 14001 COMPLIANT
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.index}
                  id={pillar.anchor}
                  className={cn(
                    "flex flex-col justify-between rounded-none border border-hairline bg-background p-6",
                    pillar.anchor && "scroll-mt-24",
                  )}
                >
                  <div>

                    <h3 className="type-headline-sm mt-4 text-ink">
                      {pillar.title}
                    </h3>
                    <p className="type-body-md mt-2 leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="type-code mt-6 flex flex-wrap items-center justify-between gap-2 bg-surface-band px-3 py-2 text-caption">
                    <span>{pillar.statLabel}</span>
                    <span className="font-medium text-ink">
                      {pillar.statValue}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
