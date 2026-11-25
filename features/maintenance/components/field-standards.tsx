import type { LucideIcon } from "lucide-react";
import {
  ArrowUpFromLineIcon,
  GavelIcon,
  HardHatIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/samansco/section";
import {
  Accordion,
  AccordionSection,
  AccordionSectionContent,
  AccordionSectionTrigger,
} from "@/components/ui/accordion";

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
 * Field governance band: formal health and safety standards, policy
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
            <h2
              id="maintenance-hse-title"
              className="type-headline-xl text-balance text-ink"
            >
              Health, Safety &amp; Field Standards
            </h2>
            <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-muted-foreground">
              Every field intervention is governed by Samansco Group&rsquo;s
              formal Health and Safety Policy, enforcing strict legal
              compliance, proactive hazard elimination, and zero-compromise site
              discipline.
            </p>

            <div className="mbs-8 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-hairline pbs-6 sm:grid-cols-2">
              {standards.map((standard) => {
                const Icon = standard.icon;

                return (
                  <div key={standard.title} className="flex flex-col">
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-brand-deep"
                    />
                    <h3 className="type-headline-sm mbs-3 text-ink">
                      {standard.title}
                    </h3>
                    <p className="type-body-sm mbs-1.5 leading-relaxed text-muted-foreground">
                      {standard.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mbs-8 border border-hairline bg-card">
              <Accordion>
                <AccordionSection value="policy" className="border-0">
                  <AccordionSectionTrigger className="type-label px-5 py-4 font-semibold text-ink">
                    Review Formal Health &amp; Safety Policy
                  </AccordionSectionTrigger>
                  <AccordionSectionContent className="px-5">
                    <ul className="space-y-4 pbs-1">
                      {standards.map((standard) => (
                        <li
                          key={standard.detailTitle}
                          className="border-t border-hairline/60 pbs-3 first:border-t-0 first:pbs-0"
                        >
                          <h4 className="type-label font-semibold text-ink">
                            {standard.detailTitle}
                          </h4>
                          <p className="type-body-sm mbs-1 leading-relaxed text-muted-foreground">
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

          <figure className="relative min-bs-[360px] overflow-clip border border-hairline bg-surface-sunken sm:min-bs-[420px] lg:col-span-6 lg:bs-full lg:min-bs-[560px]">
            <Image
              src="/images/maintenance.jpg"
              alt="Two certified solar field technicians in high-visibility vests, hard hats, and insulated gloves inspecting a commercial solar array and inverter combiner box."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
            />
            <figcaption className="absolute inset-x-0 inset-be-0 p-6 text-white lg:p-8">
              <p className="type-headline-sm max-w-md text-white">
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
