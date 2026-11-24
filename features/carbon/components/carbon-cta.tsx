import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Eyebrow, Section } from "@/components/samansco/section";
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
    label: "Direct Trading Line",
    value: "+263 242 442645-7",
    href: "tel:+263242442645",
    icon: PhoneIcon,
  },
  {
    label: "Markets & Registry Desk",
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
        <div className="border border-white/10 bg-charcoal px-6 py-10 text-white lg:px-10 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <Eyebrow className="text-brand-soft">
                Direct Desk Engagement
              </Eyebrow>
              <h2
                id="carbon-cta-title"
                className="type-headline-xl mt-3 text-balance text-white"
              >
                Structure Your Corporate Decarbonization or I-REC Strategy.
              </h2>
              <p className="type-body-lg mt-4 max-w-2xl leading-relaxed text-white/70">
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

                  <ul className="flex flex-col gap-3">
                    {contacts.map((contact) => {
                      const Icon = contact.icon;

                      return (
                        <li
                          key={contact.label}
                          className="flex items-start gap-3 border border-hairline bg-surface-page p-3"
                        >
                          <Icon
                            aria-hidden="true"
                            className="mt-0.5 size-5 shrink-0 text-brand-deep"
                          />
                          <div className="flex min-w-0 flex-col gap-0.5">
                            <span className="type-eyebrow text-caption">
                              {contact.label}
                            </span>
                            <a
                              href={contact.href}
                              className="type-code text-ink transition-colors hover:text-brand-deep"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="type-code border-t border-hairline pt-3 text-caption">
                    DESKS: Harare • Johannesburg
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

              <p className="type-code flex items-center gap-2 text-[11px] text-white/80">
                DESK RESPONSE: &lt; 24H SLA • CONFIDENTIAL INQUIRIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
