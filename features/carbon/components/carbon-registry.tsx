import { Section } from "@/components/samansco/section";

const registries = [
  { name: "UNFCCC", detail: "Article 6 Paris Accord" },
  { name: "VERRA", detail: "VCS Standard Protocol" },
  { name: "GOLD STD", detail: "SDG Impact Certifications" },
  { name: "I-REC STD", detail: "Tracking Standard Foundation" },
  { name: "EVIDENT", detail: "Attribute Registry Platform" },
  { name: "CARBONTRICITY", detail: "Environmental Commodity Systems" },
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
      <div className="shell py-12 lg:py-14">
        <h2
          id="carbon-registry-title"
          className="type-eyebrow text-center text-caption"
        >
          Registry Architecture &amp; Accreditation Partners
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {registries.map((registry) => (
            <li
              key={registry.name}
              className="flex flex-col items-center justify-center border border-hairline/70 bg-surface-band px-4 py-5 text-center transition-colors duration-150 hover:border-charcoal"
            >
              <span className="type-headline-sm text-sm font-bold tracking-tight text-ink md:text-xl">
                {registry.name}
              </span>
              <span className="type-code mt-1 text-center text-caption">
                {registry.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
