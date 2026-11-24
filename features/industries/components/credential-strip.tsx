import {
  Building2Icon,
  HardHatIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/samansco/section";

type Credential = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const credentials: Credential[] = [
  {
    title: "ZERA Registered Provider",
    detail: "Zimbabwe Energy Regulatory Authority · Licence No. 0422/GEN",
    icon: ShieldCheckIcon,
  },
  {
    title: "ECZ Registered Firm",
    detail: "Engineering Council No. 300326",
    icon: HardHatIcon,
  },
  {
    title: "ZIE Corporate Affiliate",
    detail: "Institution of Engineers 20218996",
    icon: Building2Icon,
  },
];

/**
 * Technical credentials and regulatory bar: three institutional registrations
 * on the architectural band beneath the hero.
 */
export function CredentialStrip() {
  return (
    <Section tone="band" className="border-y border-hairline/60">
      <div className="shell">
        <h2 className="sr-only">Regulatory credentials</h2>
        <ul className="grid grid-cols-1 divide-y divide-hairline/70 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credentials.map((credential) => {
            const Icon = credential.icon;

            return (
              <li
                key={credential.title}
                className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded bg-surface-sunken text-brand-deep">
                  <Icon aria-hidden="true" className="size-[22px]" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="type-label font-semibold text-ink">
                    {credential.title}
                  </span>
                  <span className="type-body-sm text-muted-foreground">
                    {credential.detail}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
