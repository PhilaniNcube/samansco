import { ArrowRightIcon, NetworkIcon } from "lucide-react";
import { divisions } from "@/lib/site";

const subsidiaryChannels = [
  {
    email: "industries@samansco.com",
    scope: "Turnkey Solar EPC & Technical Supply Distribution",
  },
  {
    email: "energy@samansco.com",
    scope: "Licensed Utility PPAs & Commercial Power Wheeling",
  },
  {
    email: "maintenance@samansco.com",
    scope: "Asset Telemetry, SCADA & Long-term O&M SLAs",
  },
  {
    email: "carbon@samansco.com",
    scope: "I-REC Certification, Carbon Offsetting & ESG Advisory",
  },
];

/**
 * Operating subsidiary directory: one direct commercial channel per company,
 * named from the shared group division data.
 */
export function OperatingSubsidiaries() {
  return (
    <article
      aria-labelledby="operating-subsidiaries-title"
      className="border border-hairline bg-card p-5 lg:p-6"
    >
      <div className="flex items-start justify-between gap-3 border-b border-hairline/80 pb-3">
        <div className="flex min-w-0 items-center gap-2">
          <NetworkIcon
            aria-hidden="true"
            className="size-5 shrink-0 text-brand-deep"
          />
          <h2
            id="operating-subsidiaries-title"
            className="type-headline-md text-balance text-ink"
          >
            Operating Subsidiaries
          </h2>
        </div>
        <span className="type-code shrink-0 text-caption">DIRECT ROUTING</span>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {divisions.map((division, index) => {
          const channel = subsidiaryChannels[index];
          if (!channel) return null;

          return (
            <li key={division.href}>
              <a
                href={`mailto:${channel.email}`}
                className="group flex flex-col gap-2 bg-surface-band p-3.5 transition-colors hover:bg-surface-sunken sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex items-center gap-2">

                    <h3 className="type-headline-sm text-ink transition-colors group-hover:text-brand-deep">
                      {division.name}
                    </h3>
                  </div>
                  <span className="type-body-sm leading-snug text-muted-foreground">
                    {channel.scope}
                  </span>
                </div>

                <span className="flex items-center gap-2 sm:shrink-0 sm:flex-col sm:items-end sm:gap-1">
                  <span className="type-code break-all text-brand-deep">
                    {channel.email}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-caption transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
