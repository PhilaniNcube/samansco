import Image from "next/image";
import { Section, SectionHeading } from "@/components/samansco/section";

type ProjectCase = {
  title: string;
  detail: string;
};

type Project = {
  image: string;
  imageAlt: string;
  imageClassName?: string;
  impactSummary: string;
  title: string;
  description: string;
  cases: ProjectCase[];
};

const projects: Project[] = [
  {
    image: "/images/food-security.jpg",
    imageAlt:
      "Utility-scale ground-mounted solar photovoltaic array across Southern African savanna.",
    imageClassName: "object-top",
    impactSummary: "500,000+ people reached · Operating continuously",
    title: "Clean Water & Food Security Infrastructure",
    description:
      "Extensive deep-borehole water supply networks built in partnership with multilateral humanitarian agencies and community trusts.",
    cases: [
      {
        title: "OXFAM & UNICEF Schemes",
        detail:
          "Integrated piped rural community water grids serving over 15,000 residents across dry rural districts.",
      },
      {
        title: "Ruti-Gutu Agricultural Scheme",
        detail:
          "40-hectare automated solar irrigation network sustaining approximately 20,000 smallholder farmer beneficiaries.",
      },
      {
        title: "Mercy Corps & World Vision Hubs",
        detail:
          "Chikwakwa Village and Chayamiti community solar water distribution nodes ensuring uninterrupted local access.",
      },
    ],
  },
  {
    image: "/images/livotek-installation.jpeg",
    imageAlt:
      "Commercial hybrid inverter bank and lithium battery storage wall installed for continuous facility backup power.",
    impactSummary: "30+ district hospitals · 99.8% uptime recorded",
    title: "Healthcare & Clinic Power Infrastructure",
    description:
      "Engineered autonomous microgrids keeping laboratory diagnostics, surgical theaters, and cold chains fully energized during grid failures.",
    cases: [
      {
        title: "JSI Zimbabwe (USAID Funded)",
        detail:
          "30 rural district hospital laboratory solar backup systems with precision voltage regulation for blood analysis.",
      },
      {
        title: "Médecins Sans Frontières (MSF)",
        detail:
          "Full electrical solar microgrids deployed across primary clinical facilities in Beitbridge and Mbare.",
      },
      {
        title: "WHO Cold-Chain Preservation",
        detail:
          "Zero-failure vaccine refrigeration solar power systems across 22 isolated regional mission healthcare clinics.",
      },
    ],
  },
  {
    image: "/images/varsity.webp",
    imageAlt:
      "Varsity Heights student housing complex with Samansco field service vans parked outside.",
    impactSummary: "35+ MW regionally · Utility and commercial",
    title: "Civic & Commercial Infrastructure",
    description:
      "Delivering high-visibility urban illumination, institutional hybrid architectures, and diplomatic estate microgrid installations.",
    cases: [
      {
        title: "1,000+ Municipal Street Lights",
        detail:
          "Major arterial roadway solar lighting program delivered with City of Harare & Primedia partnership.",
      },
      {
        title: "151 kWp Chinhoyi Student Housing",
        detail:
          "Turnkey commercial hybrid rooftop installation engineered directly for First Mutual Wealth Management.",
      },
      {
        title: "Diplomatic & Institutional Sites",
        detail:
          "CAMFED nationwide educational hybrid plants, Embassy of the Republic of Korea, and Forest Hills Resort microgrid.",
      },
    ],
  },
];

/**
 * Engineering track record: water, healthcare and civic deployments presented as
 * stacked 12-column editorial rows.
 */
export function ProjectGallery() {
  return (
    <Section
      tone="white"
      id="flagship-projects"
      className="scroll-mt-24 border-b border-hairline/60"
    >
      <div className="shell section-y">
        <div className="mbe-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mbe-12">
          <SectionHeading title="Proven Delivery Across Southern Africa" />
          <p className="type-body-sm text-muted-foreground">
            Over four decades of operational deployments
          </p>
        </div>

        <div className="divide-y divide-hairline border-b border-hairline">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid grid-cols-1 items-start gap-8 border-t border-hairline py-10 lg:grid-cols-12 lg:gap-12 lg:py-12"
            >
              <div className="relative aspect-[16/10] is-full overflow-clip border border-hairline bg-ink lg:col-span-5">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={
                    project.imageClassName
                      ? `object-cover ${project.imageClassName}`
                      : "object-cover"
                  }
                />
              </div>

              <div className="flex flex-col lg:col-span-7">
                <h3 className="type-headline-lg text-ink">{project.title}</h3>
                <p className="type-body-sm mbs-2 font-medium text-brand-deep tabular-nums">
                  {project.impactSummary}
                </p>
                <p className="type-body-md mbs-3 max-w-[65ch] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mbs-6 divide-y divide-hairline border-y border-hairline">
                  {project.cases.map((projectCase) => (
                    <li
                      key={projectCase.title}
                      className="grid grid-cols-1 gap-1.5 py-4 sm:grid-cols-12 sm:gap-6"
                    >
                      <span className="type-label font-semibold text-ink sm:col-span-4">
                        {projectCase.title}
                      </span>
                      <span className="type-body-md leading-relaxed text-muted-foreground sm:col-span-8">
                        {projectCase.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
