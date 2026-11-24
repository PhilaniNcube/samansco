import type { Metadata } from "next";
import { Section } from "@/components/samansco/section";
import { ContactHero } from "@/features/contact/components/contact-hero";
import { EnquiryForm } from "@/features/contact/components/enquiry-form";
import { ExecutiveHeadOffice } from "@/features/contact/components/executive-head-office";
import { GovernanceHse } from "@/features/contact/components/governance-hse";
import { HeadquartersMap } from "@/features/contact/components/headquarters-map";
import { OperatingSubsidiaries } from "@/features/contact/components/operating-subsidiaries";
import { RegionalPresence } from "@/features/contact/components/regional-presence";

export const metadata: Metadata = {
  title: "Contact & Governance",
  description:
    "Contact Samansco Group's Harare executive headquarters, route a commercial enquiry to an operating company desk, and review corporate governance, HSE, quality and environmental standards.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section id="enquiry-form" tone="page">
        <div className="shell section-y">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
              <EnquiryForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <ExecutiveHeadOffice />
              <OperatingSubsidiaries />
              <RegionalPresence />
            </div>
          </div>
        </div>
      </Section>

      <GovernanceHse />
      <HeadquartersMap />
    </>
  );
}
