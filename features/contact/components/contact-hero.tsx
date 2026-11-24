import { ArrowDownIcon, RadioTowerIcon } from "lucide-react";
import {
  HeroSplitAction,
  PageHero,
} from "@/components/samansco/page-hero";

/**
 * Contact page hero: compact blue-hour corporate headquarters backdrop paired
 * with the live 24/7 dispatch-support anchor panel.
 */
export function ContactHero() {
  return (
    <PageHero
      image="/images/contact-hero-hq.jpg"
      imageAlt="Contemporary Samansco corporate headquarters building in steel, concrete, and warm-lit glass at blue hour."
      priority
      size="compact"
      scrim="deep"
      gridVariant="structural"
      layout="bottom-aside"
      titleScale="compact"
      breadcrumb={[
        { label: "Samansco Group", href: "/" },
        { label: "Contact & Governance" },
      ]}
      statusPill="CORPORATE LIAISON & GOVERNANCE · HARARE HQ"
      title="Contact Samansco Group."
      description="Reach our Harare executive headquarters or route your commercial enquiry directly to Samansco Industries, Samansco Energy, Samansco Maintenance, or Samansco Carbon desks."
      actions={
        <HeroSplitAction
          href="#enquiry-form"
          label="Initiate Enquiry"
          icon={<ArrowDownIcon />}
        />
      }
      aside={
        <div className="flex items-center gap-4 rounded-[2px] border border-white/15 bg-ink/80 p-5 backdrop-blur-md lg:ms-auto lg:max-w-sm">
          <span className="grid size-11 shrink-0 place-items-center rounded-[2px] border border-white/15 bg-white/10 text-brand-soft">
            <RadioTowerIcon aria-hidden="true" className="size-5" />
          </span>

          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="type-eyebrow text-white/65">
              Dispatch Support
            </span>
            <span className="type-headline-sm flex items-center gap-2 text-white">
              24/7 Grid Active
            </span>
            <span className="type-body-sm text-white/75">
              SCADA &amp; Substation Hub
            </span>
          </div>
        </div>
      }
    />
  );
}
