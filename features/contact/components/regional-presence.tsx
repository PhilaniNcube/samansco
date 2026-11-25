import { FlagIcon, Globe2Icon } from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";

const regions = [
  {
    country: "Zimbabwe",
    detail: "Harare HQ, Central Warehousing & Distribution Center",
  },
];

/**
 * Regional presence: the Harare headquarters as the group's operating base,
 * framed with field service fleet photography.
 */
export function RegionalPresence() {
  return (
    <ImageBackdropCard
      aria-labelledby="regional-presence-title"
      image="/images/varsity.webp"
      imageAlt="Samansco branded technical service fleet parked outside a commissioned commercial solar site in Zimbabwe."
      sizes="(min-width: 1024px) 40vw, 100vw"
      scrim="deep"
      className="min-bs-[17rem] p-5 lg:p-6"
    >
      <div className="flex items-start justify-between gap-3 border-b border-white/15 pbe-3">
        <div className="flex min-w-0 items-center gap-2">
          <Globe2Icon
            aria-hidden="true"
            className="size-5 shrink-0 text-brand-soft"
          />
          <h2
            id="regional-presence-title"
            className="type-headline-md text-balance text-white"
          >
            Regional Presence (SADC)
          </h2>
        </div>
        <span className="type-code shrink-0 text-white/75">ZIMBABWE</span>
      </div>

      <ul className="mbs-auto grid grid-cols-1 gap-3 pbs-8">
        {regions.map((region) => (
          <li
            key={region.country}
            className="border border-white/15 bg-ink/70 p-3.5 backdrop-blur-sm"
          >
            <h3 className="type-label flex items-center gap-1.5 font-semibold text-white">
              <FlagIcon
                aria-hidden="true"
                className="size-3.5 shrink-0 text-brand-soft"
              />
              {region.country}
            </h3>
            <p className="type-body-sm mbs-1 leading-snug text-white/80">
              {region.detail}
            </p>
          </li>
        ))}
      </ul>
    </ImageBackdropCard>
  );
}
