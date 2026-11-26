import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const contacts = [
  {
    label: "Direct trading line",
    value: "+263 242 480484",
    href: "tel:+263242480484",
    icon: PhoneIcon,
  },
  {
    label: "Markets & registry desk",
    value: "carbon@samansco.com",
    href: "mailto:carbon@samansco.com",
    icon: MailIcon,
  },
];

/**
 * Closing decarbonization banner: a statement of intent for corporate buyers
 * and a dialog carrying the environmental markets desk's direct contacts.
 */
export function CarbonCta() {
  return (
    <Section
      id="inquire"
      tone="white"
      className="scroll-mt-24"
      aria-labelledby="carbon-cta-title"
    >
      <div className="shell py-12 lg:py-16">
        <div className="relative overflow-clip border border-white/15 bg-ink px-6 py-10 text-white lg:px-10 lg:py-12">
          <Image
            src="/images/carbon-hero-landscape.jpg"
            alt="Utility-scale solar array across Southern African savanna at dawn."
            fill
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.15_0.03_200/0.95)_0%,oklch(0.18_0.035_185/0.82)_55%,oklch(0.16_0.03_220/0.68)_100%)]"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h2
                id="carbon-cta-title"
                className="type-headline-xl text-balance text-white"
              >
                Structure Your Corporate Decarbonization or I-REC Strategy
              </h2>
              <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-white/85">
                Partner with Samansco Carbon to monetize your solar asset
                attributes, secure long-term renewable certificates, or audit
                corporate emissions with our Harare and regional advisory teams.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <Dialog>
                <DialogTrigger className="h-12 w-full justify-center gap-2 rounded-lg border-transparent bg-brand-deep px-6 text-base font-medium text-white hover:border-transparent hover:bg-brand-strong sm:w-auto">
                  Consult Our Carbon &amp; ESG Desk
                  <ArrowUpRightIcon aria-hidden="true" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="type-headline-sm text-ink">
                      Consult Our Carbon &amp; ESG Desk
                    </DialogTitle>
                    <DialogDescription>
                      Engage directly with our environmental markets brokers and
                      registry practitioners in Harare and Johannesburg.
                    </DialogDescription>
                  </DialogHeader>

                  <ul className="divide-y divide-hairline border-y border-hairline">
                    {contacts.map((contact) => {
                      const Icon = contact.icon;

                      return (
                        <li
                          key={contact.label}
                          className="flex items-start gap-3 py-3.5"
                        >
                          <Icon
                            aria-hidden="true"
                            className="mbs-0.5 size-5 shrink-0 text-brand-deep"
                          />
                          <div className="flex min-w-0 flex-col gap-0.5">
                            <span className="type-label text-muted-foreground">
                              {contact.label}
                            </span>
                            <a
                              href={contact.href}
                              className="type-body-sm font-medium text-ink transition-colors hover:text-brand-deep tabular-nums"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="type-body-sm text-muted-foreground">
                    Desks: Harare · Johannesburg
                  </p>

                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                    <Button
                      render={
                        <a href="mailto:carbon@samansco.com?subject=Institutional%20I-REC%20Inquiry" />
                      }
                    >
                      Compose enquiry
                      <ArrowUpRightIcon aria-hidden="true" />
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <p className="type-body-sm text-white/80">
                Desk response under 24 hours · Confidential inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
