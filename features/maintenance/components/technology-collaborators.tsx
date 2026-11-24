import { SpecChip } from "@/components/samansco/badges";
import { Eyebrow, Section } from "@/components/samansco/section";

type Collaborator = {
  monogram: string;
  name: string;
  role: string;
};

const collaborators: Collaborator[] = [
  {
    monogram: "H",
    name: "Huawei Solar",
    role: "CSP Certified Partner",
  },
  {
    monogram: "S",
    name: "Sigenergy",
    role: "Service Center (BESS)",
  },
  {
    monogram: "E",
    name: "Elum Energy",
    role: "SCADA / ePowerControl",
  },
  {
    monogram: "N",
    name: "NeedEnergy",
    role: "Telemetry Architecture",
  },
];

/**
 * Authorized technical ecosystem: the OEM and telemetry partners behind the
 * maintenance and monitoring service.
 */
export function TechnologyCollaborators() {
  return (
    <Section
      tone="white"
      className="border-b border-hairline/60"
      aria-labelledby="maintenance-partners-title"
    >
      <div className="shell section-y">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="text-brand-deep">
              Authorized Technical Ecosystem
            </Eyebrow>
            <h2
              id="maintenance-partners-title"
              className="type-headline-lg mt-3 text-ink"
            >
              Technology Collaborators
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="type-code text-caption">
              OEM Certifications &amp; Telemetry Partners
            </span>
            <SpecChip>TIER-1 AUDITED</SpecChip>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((collaborator) => (
            <li
              key={collaborator.name}
              className="flex items-center gap-3 border border-hairline bg-surface-page/60 p-4"
            >
              <span
                aria-hidden="true"
                className="type-headline-sm grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 font-bold text-brand-deep"
              >
                {collaborator.monogram}
              </span>
              <span className="min-w-0">
                <span className="type-label block truncate font-semibold text-ink">
                  {collaborator.name}
                </span>
                <span className="type-code block truncate text-caption">
                  {collaborator.role}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
