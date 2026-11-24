import { QuoteIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/samansco/section";

type Endorsement = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
};

const endorsements: Endorsement[] = [
  {
    quote:
      "Samansco's engineering rigor and ability to deliver complex hybrid power in remote educational centers across Zimbabwe has made them an indispensable long-term partner.",
    name: "Tafadzwa Mbishi",
    role: "Infrastructure Director",
    organisation: "CAMFED Zimbabwe",
  },
  {
    quote:
      "The 151 kWp Chinhoyi Student Housing plant exceeded uptime and yield benchmarks from month one. Their technical execution was seamless.",
    name: "Thomas Mutswiti",
    role: "Portfolio Manager",
    organisation: "First Mutual Wealth Management",
  },
  {
    quote:
      "Working alongside Samansco on civic infrastructure ensures structural compliance, pristine electrical engineering, and dependable post-installation support.",
    name: "Phillip Kudzayi",
    role: "Principal Architect",
    organisation: "Troika Design Workshop",
  },
];

/**
 * Client references from the institutions and portfolio custodians behind the
 * delivered infrastructure.
 */
export function Endorsements() {
  return (
    <Section tone="band" className="border-b border-hairline/60">
      <div className="shell section-y">
        <SectionHeading
          eyebrow="Client References"
          title="Institutional & Technical Endorsements"
          className="mb-10 max-w-3xl lg:mb-12"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {endorsements.map((endorsement) => (
            <figure
              key={endorsement.name}
              className="flex flex-col justify-between rounded-lg border border-hairline bg-background p-6 lg:p-8"
            >
              <div>
                <QuoteIcon
                  aria-hidden="true"
                  className="size-8 text-brand"
                />
                <blockquote className="type-body-md mt-5 leading-relaxed text-charcoal">
                  “{endorsement.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 border-t border-hairline/80 pt-4">
                <span className="type-label block font-semibold text-ink">
                  {endorsement.name}
                </span>
                <span className="type-body-sm mt-0.5 block text-muted-foreground">
                  {endorsement.role}
                </span>
                <span className="type-code mt-2 block text-brand-deep">
                  {endorsement.organisation}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
