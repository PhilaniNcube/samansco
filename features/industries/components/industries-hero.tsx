import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import { SpecList, SpecRow } from "@/components/samansco/spec-list";
import { SubsidiaryHero } from "@/components/samansco/subsidiary-hero";
import { Button } from "@/components/ui/button";

/**
 * Samansco Industries subsidiary hero: breadcrumb, founding-company pill,
 * corporate mandate panel, and the operational profile that anchors the page.
 */
export function IndustriesHero() {
  return (
    <SubsidiaryHero
      division="Samansco Industries"
      pill="FOUNDING OPERATING COMPANY • EST. 1982"
      kicker={
        <span className="type-eyebrow block tracking-[0.08em] text-muted-foreground uppercase">
          Samansco Industries (Pvt) Ltd
        </span>
      }
      title="Engineering, Procurement, Construction & Solar Supply Since 1982."
      actions={
        <>
          <div className="w-full rounded-lg border border-hairline bg-surface-band p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheckIcon
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-deep"
              />
              <div className="min-w-0">
                <p className="type-eyebrow text-brand-deep">
                  Corporate Mandate &amp; Scope
                </p>
                <p className="type-body-md mt-2 leading-relaxed text-charcoal">
                  Samansco Industries (Pvt) Ltd is the founding operating
                  company behind the original Samansco solar brand—operating as
                  an independent infrastructure entity focused on heavy EPC,
                  technical distribution, and community water projects, separate
                  from Samansco Energy, Maintenance, and Carbon.
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href="#epc-inquiry" />}
          >
            Enquire About EPC Services
            <ArrowRightIcon aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            render={<Link href="#flagship-projects" />}
          >
            View Flagship Projects
          </Button>
        </>
      }
      aside={
        <aside
          aria-labelledby="operational-profile-title"
          className="rounded-lg border border-hairline bg-surface-band p-6 lg:p-8"
        >
          <div className="flex items-center justify-between gap-3 border-b border-hairline/80 pb-3">
            <p
              id="operational-profile-title"
              className="type-eyebrow text-caption"
            >
              Operational Profile
            </p>
            <span className="type-code font-semibold text-brand-deep">
              HARARE HUB
            </span>
          </div>

          <p className="type-body-sm mt-4 leading-relaxed text-charcoal">
            Operating uninterrupted for 43 years, providing direct engineering
            oversight, bulk SADC procurement pipelines, and specialized off-grid
            hydraulic solar systems.
          </p>

          <SpecList className="mt-4 border-hairline/80">
            <SpecRow label="Licensure Class" value="ZERA Certified" />
            <SpecRow label="Engineering Council" value="ECZ No. 300326" />
            <SpecRow
              label="Institutional Status"
              value="ZIE Affiliate 20218996"
            />
            <SpecRow
              label="Primary Warehouse"
              value="Eastlea Logistics Center"
            />
          </SpecList>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <span className="type-code flex items-center gap-2 text-muted-foreground">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-emerald-600"
              />
              ENGINEERING OPERATIONS ACTIVE
            </span>
            <span className="type-code text-caption">ZIM • SADC REGION</span>
          </div>
        </aside>
      }
    />
  );
}
