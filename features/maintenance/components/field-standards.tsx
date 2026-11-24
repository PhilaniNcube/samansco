import type { LucideIcon } from "lucide-react";
import {
  ArrowUpFromLineIcon,
  GavelIcon,
  HardHatIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import { DivisionChip } from "@/components/samansco/badges";
import { Eyebrow, Section } from "@/components/samansco/section";
import {
  Accordion,
  AccordionSection,
  AccordionSectionContent,
  AccordionSectionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

type Standard = {
  title: string;
  summary: string;
  detailTitle: string;
  detail: string;
  icon: LucideIcon;
};

const standards: Standard[] = [
  {
    title: "Legal Compliance",
    summary:
      "Full adherence to national occupational health, electrical safety, and ZERA regulatory frameworks.",
    detailTitle: "Legal & Regulatory Compliance",
    detail:
      "Strict adherence to ZERA (Zimbabwe Energy Regulatory Authority) grid codes, ECZ statutory standards, and national electrical inspectorate regulations.",
    icon: GavelIcon,
  },
  {
    title: "Hazard Elimination",
    summary:
      "Mandatory Lockout/Tagout (LOTO) procedures and pre-task risk assessments on every site.",
    detailTitle: "Hazard Elimination & LOTO",
    detail:
      "Mandatory Lockout/Tagout (LOTO) protocols with personal padlock isolation keys prior to touching any inverter cabinet, DC string, or AC combiner.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Working at Heights",
    summary:
      "Certified harness, fall-arrest, and rooftop access training for all C&I and utility field crews.",
    detailTitle: "Working at Heights & Rooftops",
    detail:
      "Double-lanyard fall-arrest harnesses, static lifeline engineering, and certified ladder/scaffold inspection tagging for all commercial roof operations.",
    icon: ArrowUpFromLineIcon,
  },
  {
    title: "Tools Safety Training",
    summary:
      "Insulated high-voltage tooling, arc-flash PPE, and regular equipment calibration audits.",
    detailTitle: "Insulated Tooling & Arc-Flash PPE",
    detail:
      "1000V VDE-certified hand tools, NFPA 70E-compliant arc-flash face shields, and Category 4 protective garments on all live diagnostic procedures.",
    icon: HardHatIcon,
  },
];

/**
 * Field governance band: the formal health and safety standards, the policy
 * disclosure, and photography of the field crews the policy governs.
 */
export function FieldStandards() {
  return (
    <Section
      tone="band"
      className="border-b border-hairline/60"
      aria-labelledby="maintenance-hse-title"
    >
      <div className="shell section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <DivisionChip dot="green">ZERO HARM COMMITMENT</DivisionChip>
              <Eyebrow dot={false} className="text-brand-deep">
                02 / Field Governance
              </Eyebrow>
            </div>

            <h2
              id="maintenance-hse-title"
              className="type-headline-xl mt-4 text-balance text-ink"
            >
              Health, Safety &amp; Field Standards
            </h2>
            <p className="type-body-lg mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Every field intervention is governed by Samansco Group&rsquo;s
              formal Health and Safety Policy&mdash;enforcing strict legal
              compliance, proactive hazard elimination, and zero-compromise site
              discipline.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {standards.map((standard) => {
                const Icon = standard.icon;

                return (
                  <Card
                    key={standard.title}
                    className="gap-0 rounded-lg border-hairline bg-card p-5 shadow-none"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-brand-deep"
                    />
                    <h3 className="type-label mt-3 font-semibold text-ink">
                      {standard.title}
                    </h3>
                    <p className="type-body-sm mt-1.5 leading-relaxed text-muted-foreground">
                      {standard.summary}
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-hairline bg-card">
              <Accordion>
                <AccordionSection value="policy" className="border-0">
                  <AccordionSectionTrigger className="type-label px-5 py-4 font-semibold text-ink">
                    Review Formal Health &amp; Safety Policy
                  </AccordionSectionTrigger>
                  <AccordionSectionContent className="px-5">
                    <ul className="space-y-4 pt-1">
                      {standards.map((standard) => (
                        <li
                          key={standard.detailTitle}
                          className="border-t border-hairline/60 pt-3 first:border-t-0 first:pt-0"
                        >
                          <h4 className="type-label font-semibold text-ink">
                            {standard.detailTitle}
                          </h4>
                          <p className="type-body-sm mt-1 leading-relaxed text-muted-foreground">
                            {standard.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </AccordionSectionContent>
                </AccordionSection>
              </Accordion>
            </div>
          </div>

          <figure className="relative min-h-[360px] overflow-hidden rounded-lg border border-hairline bg-surface-sunken sm:min-h-[420px] lg:col-span-6 lg:h-full lg:min-h-[560px]">
            <Image
              src="/images/maintenance-technicians.jpg"
              alt="Two certified solar field technicians in high-visibility vests, hard hats, and insulated gloves inspecting a commercial solar array and inverter combiner box."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-8">
              <span className="type-eyebrow text-white/70">
                Field Integrity
              </span>
              <p className="type-headline-sm mt-2 max-w-md text-white">
                Rapid Intervention Crews on Standby across Harare, Bulawayo
                &amp; Regional Corridors.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
