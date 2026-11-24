import { FlagIcon, Globe2Icon } from "lucide-react";

const regions = [
  {
    country: "Zimbabwe",
    detail: "Harare HQ, Central Warehousing & Distribution Center",
  },
  {
    country: "South Africa",
    detail: "Johannesburg SAPP Energy Trading Desk & Procurement",
  },
  {
    country: "Zambia",
    detail: "Lusaka Commercial & Industrial (C&I) Regional Operations",
  },
  {
    country: "Tanzania",
    detail: "Dar es Salaam Agricultural Water Pumping & Off-grid Hub",
  },
];

/**
 * SADC regional presence: the four operational hubs anchored by the Harare
 * headquarters.
 */
export function RegionalPresence() {
  return (
    <article
      aria-labelledby="regional-presence-title"
      className="border border-hairline bg-card p-5 lg:p-6"
    >
      <div className="flex items-start justify-between gap-3 border-b border-hairline/80 pb-3">
        <div className="flex min-w-0 items-center gap-2">
          <Globe2Icon
            aria-hidden="true"
            className="size-5 shrink-0 text-brand-deep"
          />
          <h2
            id="regional-presence-title"
            className="type-headline-md text-balance text-ink"
          >
            Regional Presence (SADC)
          </h2>
        </div>
        <span className="type-code shrink-0 text-caption">4 HUBS</span>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-3">
        {regions.map((region) => (
          <li
            key={region.country}
            className="bg-surface-band p-3.5"
          >
            <h3 className="type-label flex items-center gap-1.5 font-semibold text-ink">
              <FlagIcon
                aria-hidden="true"
                className="size-3.5 shrink-0 text-brand-deep"
              />
              {region.country}
            </h3>
            <p className="type-body-sm mt-1 leading-snug text-muted-foreground">
              {region.detail}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
