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
      "The 151 kWp Chinhoyi Student Housing plant exceeded uptime and yield benchmarks from month one. Their technical execution was dependable.",
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
          title="Institutional & Technical Endorsements"
          className="mbe-10 max-w-3xl lg:mbe-12"
        />

        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline lg:grid-cols-3">
          {endorsements.map((endorsement) => (
            <figure
              key={endorsement.name}
              className="flex flex-col justify-between bg-background p-6 lg:p-8"
            >
              <div>
                <QuoteIcon
                  aria-hidden="true"
                  className="size-8 text-brand"
                />
                <blockquote className="type-body-md mbs-5 leading-relaxed text-charcoal">
                  “{endorsement.quote}”
                </blockquote>
              </div>

              <figcaption className="mbs-6 border-t border-hairline/80 pbs-4">
                <span className="type-label block font-semibold text-ink">
                  {endorsement.name}
                </span>
                <span className="type-body-sm mbs-0.5 block text-muted-foreground">
                  {endorsement.role}
                </span>
                <span className="type-body-sm mbs-2 block font-medium text-brand-deep">
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
