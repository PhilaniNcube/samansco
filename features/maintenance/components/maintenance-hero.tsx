import { ArrowDownIcon, ArrowRightIcon, WrenchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubsidiaryHero } from "@/components/samansco/subsidiary-hero";
import { Button } from "@/components/ui/button";
import { TelemetryConsole } from "./telemetry-console";

/**
 * Maintenance hero: division breadcrumb and heritage pill, the subsidiary
 * statement, and the plant photograph carrying the live telemetry console.
 */
export function MaintenanceHero() {
  return (
    <SubsidiaryHero
      division="Samansco Maintenance"
      pill="O&M DIVISION • EST. 2013"
      kicker={
        <span className="mb-6 hidden w-fit items-center gap-3 rounded-lg bg-surface-band px-4 py-3 text-left lg:flex">
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-charcoal text-white"
          >
            <WrenchIcon className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="type-headline-sm text-ink">
              Samansco Maintenance
            </span>
            <span className="type-eyebrow text-caption">
              Operations &amp; Asset Care
            </span>
          </span>
        </span>
      }
      title={"Protecting Asset Uptime, Yield & Long\u2011Term Performance."}
      description="Samansco Maintenance is a standalone Operations & Maintenance (O&M) company dedicated to caring for 20- to 25-year utility-scale and commercial & industrial (C&I) solar and battery energy storage assets across Southern Africa."
      actions={
        <>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            render={<Link href="/contact" />}
          >
            Request an O&M Consultation
            <ArrowRightIcon aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            render={<a href="#core-services" />}
          >
            Explore O&M Scope
            <ArrowDownIcon aria-hidden="true" />
          </Button>
        </>
      }
      aside={
        <div className="w-full">
          <div className="relative overflow-hidden rounded-lg border border-hairline bg-surface-sunken">
            <div className="relative h-[300px] sm:h-[360px] lg:h-[380px]">
              <Image
                src="/images/maintenance-plant-dusk.jpg"
                alt="Utility-scale solar photovoltaic plant in Southern Africa at golden hour, with precision-aligned bifacial panel rows stretching toward the horizon."
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <span className="type-eyebrow absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1 text-[10px] text-white">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-emerald-400"
              />
              O&M LIVE
            </span>
          </div>

          <div className="relative z-10 mx-4 -mt-12 sm:mx-6">
            <TelemetryConsole />
          </div>
        </div>
      }
    />
  );
}
