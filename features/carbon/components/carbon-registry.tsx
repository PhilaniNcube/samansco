import { Section } from "@/components/samansco/section";

const registries = [
  { name: "UNFCCC", detail: "Article 6 Paris Accord" },
  { name: "Verra", detail: "VCS Standard Protocol" },
  { name: "Gold Standard", detail: "SDG Impact Certifications" },
  { name: "I-REC Standard", detail: "Tracking Standard Foundation" },
  { name: "Evident", detail: "Attribute Registry Platform" },
  { name: "Carbontricity", detail: "Environmental Commodity Systems" },
];

/**
 * Registry architecture: the standards bodies and platforms that the desk's
 * issuance and retirement activity is structured against.
 */
export function CarbonRegistry() {
  return (
    <Section
      tone="white"
      aria-labelledby="carbon-registry-title"
      className="border-t border-hairline/60"
    >
      <div className="shell py-12 lg:py-16">
        <h2
          id="carbon-registry-title"
          className="type-headline-lg text-center text-ink"
        >
          Registry Architecture &amp; Accreditation Partners
        </h2>

        <ul className="mbs-8 grid grid-cols-2 gap-px overflow-clip border border-hairline bg-hairline md:grid-cols-3 xl:grid-cols-6">
          {registries.map((registry) => (
            <li
              key={registry.name}
              className="flex flex-col items-center justify-center bg-surface-band px-4 py-5 text-center transition-colors duration-150 hover:bg-background"
            >
              <span className="type-headline-sm font-bold tracking-tight text-ink">
                {registry.name}
              </span>
              <span className="type-body-sm mbs-1 text-center text-muted-foreground">
                {registry.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
