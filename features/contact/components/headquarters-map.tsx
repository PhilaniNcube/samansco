import {
  ArrowUpRightIcon,
  Building2Icon,
  NavigationIcon,
  PlaneIcon,
  SolarPanelIcon,
} from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";

const gpsCoordinates = "17°49'32.6\"S 31°04'58.2\"E";

const directions = [
  {
    icon: PlaneIcon,
    title: "Airport Transit",
    detail: "15 minutes direct via Airport Road & Dieppe Ave",
  },
  {
    icon: Building2Icon,
    title: "Harare CBD Hub",
    detail: "5 minutes direct eastward commute from city center",
  },
];

/**
 * Eastlea headquarters map and navigation banner. The map artwork is a real
 * image asset; the location pill and pin are reproduced with design tokens.
 */
export function HeadquartersMap() {
  return (
    <Section tone="white">
      <div className="shell section-y">
        <div className="overflow-hidden border border-hairline bg-ink text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-8 p-6 lg:col-span-6 lg:p-10">
              <div>
                <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/80">
                  <NavigationIcon
                    aria-hidden="true"
                    className="size-3.5 text-brand-tint"
                  />
                  Strategic Transport Corridor
                </span>

                <h2 className="type-headline-xl mt-5 text-balance text-white">
                  Eastlea Headquarters &amp; Central Depot
                </h2>

                <p className="type-body-md mt-4 max-w-md leading-relaxed text-white/70">
                  Located directly along the main arterial Samora Machel Avenue
                  (A2), providing rapid logistical access between Harare Central
                  Business District and Robert Gabriel Mugabe International
                  Airport.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {directions.map((direction) => {
                    const Icon = direction.icon;

                    return (
                      <li
                        key={direction.title}
                        className="flex items-start gap-3 bg-white/5 p-3"
                      >
                        <Icon
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-brand-tint"
                        />
                        <span className="flex min-w-0 flex-col gap-0.5">
                          <span className="type-label font-semibold text-white">
                            {direction.title}
                          </span>
                          <span className="type-body-sm text-white/60">
                            {direction.detail}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-1">
                  <span className="type-eyebrow text-white/50">
                    GPS Coordinates
                  </span>
                  <span className="type-code text-white">
                    {gpsCoordinates}
                  </span>
                </div>

                <Button
                  className="w-full shrink-0 sm:w-auto"
                  render={
                    <a
                      href="https://maps.google.com/?q=331+Samora+Machel+Avenue+Eastlea+Harare"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Open in Navigation
                  <ArrowUpRightIcon aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:col-span-6 lg:min-h-[480px]">
              <Image
                src="/images/contact-map.jpg"
                alt="Street map of Eastlea, Harare, showing the Samansco Group headquarters at 331 Samora Machel Avenue on the A2 arterial, with the surrounding city and airport corridor."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
              />

              <span className="type-code absolute top-4 left-4 flex items-center gap-2 rounded bg-ink/90 px-3 py-1.5 text-white">
                SAMANSCO HQ HUB • EASTLEA
              </span>

              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center">
                  <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                    <SolarPanelIcon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="type-code mt-2 rounded bg-background px-3 py-1 text-ink">
                    331 Samora Machel Ave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
