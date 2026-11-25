import { Section } from "@/components/samansco/section";

type Collaborator = {
  name: string;
  role: string;
};

const collaborators: Collaborator[] = [
  {
    name: "Huawei Solar",
    role: "CSP certified partner",
  },
  {
    name: "Sigenergy",
    role: "Service center (BESS)",
  },
  {
    name: "Elum Energy",
    role: "SCADA / ePowerControl",
  },
  {
    name: "NeedEnergy",
    role: "Telemetry architecture",
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
        <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <h2
            id="maintenance-partners-title"
            className="type-headline-lg text-ink"
          >
            Technology Collaborators
          </h2>
          <p className="type-body-sm text-muted-foreground">
            OEM certifications &amp; telemetry partners
          </p>
        </div>

        <ul className="mbs-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((collaborator) => (
            <li
              key={collaborator.name}
              className="flex flex-col gap-1 bg-surface-page/70 p-5"
            >
              <span className="type-headline-sm text-ink">
                {collaborator.name}
              </span>
              <span className="type-body-sm text-muted-foreground">
                {collaborator.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
