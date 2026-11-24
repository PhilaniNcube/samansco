import {
  ArrowDownIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  LandmarkIcon,
  ShieldCheckIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SubsidiaryHero } from "@/components/samansco/subsidiary-hero";
import { Button } from "@/components/ui/button";

const assurances: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheckIcon, label: "Registry-Grade Traceability" },
  { icon: LandmarkIcon, label: "SADC Decarbonization Hub" },
  { icon: ArrowLeftRightIcon, label: "Evident Standard Participant" },
];

const tradedAssets = [
  "International RECs (I-RECs)",
  "Article 6 ITMOs",
  "Scope 2 Mitigation Units",
];

/**
 * Terminal panel in the hero's second column: the desk's registry identity,
 * methodology frameworks and traded asset classes on an ink surface.
 */
function CommodityTerminal() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-charcoal p-5 text-white lg:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex min-w-0 items-center gap-2">
          <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-brand" />
          <span className="type-code truncate text-[11px] font-medium tracking-[0.04em] text-white">
            <span className="sm:hidden">DESK // CAR-MKT-2024</span>
            <span className="hidden sm:inline">
              ENVIRONMENTAL COMMODITY DESK // CAR-MKT-2024
            </span>
          </span>
        </div>
        <span className="type-code shrink-0 rounded bg-white/10 px-1.5 py-0.5 text-[10px] tracking-[0.08em] text-white/80">
          LIVE
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="rounded-lg bg-white/5 p-4">
          <span className="type-code block text-[10px] tracking-[0.1em] text-white/70 uppercase">
            Registry Verification
          </span>
          <p className="type-headline-sm mt-1.5 text-white">
            I-REC Standard Certified Issuer &amp; Evident Participant
          </p>
          <p className="type-code mt-2 flex items-center gap-2 text-[11px] text-white/80">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
            Participant ID: EVD-AFR-04829
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/5 p-4">
            <span className="type-code block text-[10px] tracking-[0.1em] text-white/70 uppercase">
              Standard Frameworks
            </span>
            <p className="type-body-sm mt-1.5 text-white">
              Gold Standard &amp; Verra (VCS) Project Pipeline
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-4">
            <span className="type-code block text-[10px] tracking-[0.1em] text-white/70 uppercase">
              Issuance Latency
            </span>
            <p className="type-body-sm mt-1.5 text-white">
              &lt; 24 Hrs SCADA Inverter Reconciliation
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white/5 p-4">
          <span className="type-code block text-[10px] tracking-[0.1em] text-white/70 uppercase">
            Traded Asset Classes
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tradedAssets.map((asset) => (
              <span
                key={asset}
                className="type-code rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/80"
              >
                {asset}
              </span>
            ))}
          </div>
        </div>

        <div className="type-code flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px] text-white/70">
          <span>DESKS: Harare • Johannesburg</span>
          <span className="font-medium text-brand-soft">
            SADC REGION DESK ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Carbon subsidiary hero: breadcrumb, division pill, the environmental markets
 * proposition and the desk terminal aside.
 */
export function CarbonHero() {
  return (
    <SubsidiaryHero
      division="Samansco Carbon"
      pill="ENVIRONMENTAL MARKETS & ESG ARM • EST. 2023"
      kicker={
        <span className="type-eyebrow block text-brand-deep">
          Environmental Commodities &amp; Sustainability Desk
        </span>
      }
      title={"Turning Clean Energy Into Verified Carbon Credits, I\u2011RECs & ESG Impact."}
      description="Samansco Carbon operates as the Group's dedicated environmental markets desk, originating, certifying, and monetizing high-integrity Renewable Energy Certificates (I-RECs) and verified carbon credits from African clean energy infrastructure."
      actions={
        <>
          <Button
            size="lg"
            className="w-full justify-center sm:w-auto"
            render={<a href="#portfolio" />}
          >
            Explore Carbon Portfolio
            <ArrowRightIcon aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full justify-center sm:w-auto"
            render={<a href="#inquire" />}
          >
            Structure an I-REC Agreement
            <ArrowDownIcon aria-hidden="true" />
          </Button>

          <div className="mt-3 flex w-full basis-full flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline/70 pt-4">
            {assurances.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="type-code flex items-center gap-2 text-[11px] text-muted-foreground"
              >
                <Icon aria-hidden="true" className="size-4 text-brand" />
                {label}
              </span>
            ))}
          </div>
        </>
      }
      aside={<CommodityTerminal />}
    />
  );
}
