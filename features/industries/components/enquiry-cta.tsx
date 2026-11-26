"use client";

import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import * as React from "react";
import { Section } from "@/components/samansco/section";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const enquiryTypes = [
  { value: "epc", label: "EPC & turnkey project delivery" },
  { value: "supply", label: "Solar equipment & technical distribution" },
  { value: "water", label: "Water pumping & irrigation systems" },
  { value: "institutional", label: "Institutional or municipal infrastructure" },
];

/**
 * Engineering desk CTA: dark enquiry band with direct contact lines and a
 * dialog-hosted project brief form that prepares a real mailto payload.
 */
export function EnquiryCta() {
  const [enquiryType, setEnquiryType] = React.useState("epc");
  const [submitted, setSubmitted] = React.useState(false);
  const [mailtoHref, setMailtoHref] = React.useState(
    "mailto:industries@samansco.com",
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    const fullName = read("fullName");
    const organisation = read("organisation");
    const email = read("email");
    const site = read("site");
    const enquiryLabel =
      enquiryTypes.find((type) => type.value === enquiryType)?.label ??
      "General enquiry";

    const subject = `Industrial enquiry: ${organisation || fullName || "Samansco Industries"}`;
    const body = [
      `Name: ${fullName}`,
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      `Enquiry type: ${enquiryLabel}`,
      `Site location: ${site || "Not specified"}`,
    ].join("\n");

    setMailtoHref(
      `mailto:industries@samansco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setSubmitted(true);
  }

  return (
    <Section
      tone="ink"
      id="epc-inquiry"
      className="scroll-mt-24 bg-ink"
    >
      <div className="shell section-y">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="type-headline-xl max-w-2xl text-balance text-white">
              Initiate an EPC Project or Technical Equipment Enquiry
            </h2>
            <p className="type-body-md mbs-4 max-w-[65ch] leading-relaxed text-white/80">
              Connect directly with our senior engineering team, certified
              system designers, and wholesale distribution specialists at our
              Harare headquarters.
            </p>

            <address className="mbs-8 flex flex-col gap-3 not-italic text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <span className="type-body-sm flex items-center gap-2">
                <MapPinIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-brand-tint"
                />
                331 Samora Machel Avenue, Eastlea, Harare
              </span>
              <a
                href="tel:+263242480484"
                className="type-body-sm flex items-center gap-2 transition-colors hover:text-white tabular-nums"
              >
                <PhoneIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-brand-tint"
                />
                +263 242 480484
              </a>
              <a
                href="mailto:industries@samansco.com"
                className="type-body-sm flex items-center gap-2 transition-colors hover:text-white"
              >
                <MailIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-brand-tint"
                />
                industries@samansco.com
              </a>
            </address>
          </div>

          <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-end">
            <Dialog>
              <DialogTrigger
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full border-transparent sm:w-auto",
                )}
              >
                Contact Samansco Industries
                <ArrowRightIcon aria-hidden="true" />
              </DialogTrigger>

              <DialogContent className="max-w-xl">
                <DialogHeader>
                  <DialogTitle className="type-headline-md">
                    Direct Inquiry
                  </DialogTitle>
                  <DialogDescription>
                    Connect immediately with the Engineering Desk at our Harare
                    Central Logistics facility. Complete the brief and we will
                    prepare it for industries@samansco.com.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Full name</FieldLabel>
                      <Input
                        name="fullName"
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                        autoFocus
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Organisation</FieldLabel>
                      <Input
                        name="organisation"
                        autoComplete="organization"
                        placeholder="Institution or company"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Work email</FieldLabel>
                      <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@organisation.com"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Enquiry type</FieldLabel>
                      <Select
                        items={enquiryTypes}
                        value={enquiryType}
                        onValueChange={(value) =>
                          setEnquiryType(value ?? "epc")
                        }
                      >
                        <SelectTrigger className="h-11 bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {enquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel>Site location</FieldLabel>
                      <Input
                        name="site"
                        autoComplete="address-level2"
                        placeholder="City or district, country"
                      />
                    </Field>
                  </FieldGroup>

                  {submitted ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="border border-hairline bg-surface-band p-4"
                    >
                      <p className="type-label font-semibold text-ink">
                        Enquiry brief prepared
                      </p>
                      <p className="type-body-sm mt-1 leading-relaxed text-muted-foreground">
                        Open the brief in your email client, or write directly
                        to{" "}
                        <a
                          href="mailto:industries@samansco.com"
                          className="font-medium text-brand-deep underline-offset-4 hover:underline"
                        >
                          industries@samansco.com
                        </a>
                        .
                      </p>
                      <Button
                        size="sm"
                        className="mt-3"
                        render={<a href={mailtoHref} />}
                      >
                        <MailIcon aria-hidden="true" />
                        Open email brief
                      </Button>
                    </div>
                  ) : null}

                  <DialogFooter>
                    <DialogClose type="button">Cancel</DialogClose>
                    <Button type="submit">Prepare enquiry</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <span className="type-body-sm text-white/75">
              Commercial &amp; institutional RFPs welcome
            </span>
          </div>
        </div>

        <div className="type-body-sm mbs-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pbs-5 text-white/75">
          <span>ZERA ID: 0422/GEN</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-white/25" />
          <span>ISO 9001 compliant</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-white/25" />
          <span>SADC regional clearance</span>
        </div>
      </div>
    </Section>
  );
}
