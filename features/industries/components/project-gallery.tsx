import Image from "next/image";
import { Section } from "@/components/samansco/section";

type ProjectCase = {
  title: string;
  detail: string;
};

type Project = {
  image: string;
  imageAlt: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  cases: ProjectCase[];
  statusLabel: string;
  statusValue: string;
};

const projects: Project[] = [
  {
    image: "/images/industries-water-pumping.jpg",
    imageAlt:
      "Solar-powered water pumping station with elevated steel reservoirs and ground-mounted PV arrays in rural Zimbabwe.",
    badge: "500,000+ People Reached",
    category: "Piped Water & Irrigation Schemes",
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
    statusLabel: "Status",
    statusValue: "Operating Continuously",
  },
  {
    image: "/images/industries-hospital-solar.jpg",
    imageAlt:
      "Rooftop solar installation on a rural district hospital with battery backup infrastructure.",
    badge: "30+ District Hospitals",
    category: "Critical Medical Continuity",
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
    statusLabel: "Uptime SLA",
    statusValue: "99.8% Recorded",
  },
  {
    image: "/images/industries-campus-solar.jpg",
    imageAlt:
      "Rooftop solar installation across the 151 kWp Chinhoyi student housing campus.",
    badge: "Utility & Commercial",
    category: "Urban & Institutional Scale",
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
    statusLabel: "Total Commissioned",
    statusValue: "35+ MW Regionally",
  },
];

/**
 * Engineering track record: water, healthcare and civic deployments as three
 * technical case files with photography and verified programme details.
 */
export function ProjectGallery() {
  return (
    <Section
      tone="white"
      id="flagship-projects"
      className="scroll-mt-24 border-b border-hairline/60"
    >
      <div className="shell section-y">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-12">
          <div>
            <p className="type-eyebrow flex items-center gap-2 text-brand-deep">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-brand"
              />
              Engineering Track Record
            </p>
            <h2 className="type-headline-xl mt-3 text-balance text-ink">
              Proven Delivery Across Southern Africa
            </h2>
          </div>
          <span className="type-code text-caption uppercase">
            Over 4 Decades of Operational Deployments
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface-band"
            >
              <div className="relative h-52 w-full overflow-hidden bg-surface-sunken lg:h-56">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="type-eyebrow absolute top-4 left-4 rounded bg-ink/90 px-2.5 py-1 text-white">
                  {project.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <p className="type-eyebrow text-brand-deep">
                  {project.category}
                </p>
                <h3 className="type-headline-md mt-2 text-ink">
                  {project.title}
                </h3>
                <p className="type-body-sm mt-2 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.cases.map((projectCase) => (
                    <li
                      key={projectCase.title}
                      className="rounded border border-hairline/60 bg-background p-4"
                    >
                      <p className="type-label font-semibold text-ink">
                        {projectCase.title}
                      </p>
                      <p className="type-body-sm mt-1 leading-relaxed text-muted-foreground">
                        {projectCase.detail}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between gap-3 border-t border-hairline/80 pt-4">
                    <span className="type-code text-caption">
                      {project.statusLabel}:
                    </span>
                    <span className="type-code text-right text-ink">
                      {project.statusValue}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
