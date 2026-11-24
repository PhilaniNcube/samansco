"use client";

import {
  CheckCircle2Icon,
  LoaderCircleIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Eyebrow, Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const baseloadOptions = [
  { value: "1-5", label: "1.0 MW – 5.0 MW (Industrial PPA)" },
  { value: "5-20", label: "5.0 MW – 20.0 MW (Mining & Smelting)" },
  { value: "20-plus", label: "> 20.0 MW (Cross-Border SAPP Wheeling)" },
  { value: "vpp", label: "Distributed VPP Asset Aggregation" },
];

const contactChannels = [
  {
    label: "Direct Utility Desk",
    value: "+263 242 442645-7",
    href: "tel:+263242442645",
    icon: PhoneIcon,
  },
  {
    label: "Trading Desk Email",
    value: "energy@samansco.com",
    href: "mailto:energy@samansco.com",
    icon: MailIcon,
  },
];

/**
 * Direct desk engagement: contact matrix beside a structured offtake enquiry
 * form using the shared Field, Select and Button wrappers.
 */
export function TradingDesk() {
  const [pending, setPending] = useState(false);
  const [logged, setLogged] = useState(false);
  const dispatchTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (dispatchTimer.current !== null) {
        window.clearTimeout(dispatchTimer.current);
      }
    },
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setPending(true);
    setLogged(false);

    dispatchTimer.current = window.setTimeout(() => {
      setPending(false);
      setLogged(true);
      form.reset();
    }, 900);
  }

  return (
    <Section
      tone="band"
      id="trading-inquiry"
      aria-labelledby="trading-desk-title"
      className="scroll-mt-20 border-y border-hairline/60"
    >
      <div className="shell section-y">
        <div className="overflow-hidden rounded-lg border border-hairline bg-background lg:grid lg:grid-cols-12">
          <div className="flex flex-col bg-charcoal p-6 text-white lg:col-span-5 lg:p-8">
            <Eyebrow className="text-white/70">Direct Trading Desk</Eyebrow>

            <h2
              id="trading-desk-title"
              className="type-headline-lg mt-3 text-balance text-white"
            >
              Institutional Offtake Enquiry
            </h2>
            <p className="type-body-sm mt-3 leading-relaxed text-white/75">
              Engage directly with SEPCO energy trading officers regarding
              transmission allocations, bespoke multi-year tariffs, and
              commercial utility structuring.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex flex-col gap-1 rounded border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-center gap-2 text-white/70">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-brand-tint"
                      />
                      <span className="type-body-sm">{channel.label}</span>
                    </span>
                    <span className="type-code text-white">{channel.value}</span>
                  </a>
                );
              })}
            </div>

            <div className="type-code mt-auto space-y-1 border-t border-white/10 pt-6 text-[10px] leading-relaxed text-white/60">
              <p>
                © 2025 Samansco Electric Power Company (SEPCO). All Rights
                Reserved.
              </p>
              <p>
                Licensed under Zimbabwe Energy Regulatory Authority (ZERA)
                License #LIC-POW-2021/SA. SAPP Synchronized Operating Entity.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-hairline p-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <FieldGroup className="gap-5">
                <Field name="entity">
                  <FieldLabel className="type-label text-ink">
                    Institutional Offtaker Entity
                  </FieldLabel>
                  <Input
                    name="entity"
                    placeholder="e.g. Zimplats Mining / Dairibord"
                    autoComplete="organization"
                    required
                  />
                </Field>

                <Field name="baseload">
                  <FieldLabel className="type-label text-ink">
                    Target Baseload Requirement
                  </FieldLabel>
                  <Select
                    items={baseloadOptions}
                    defaultValue="1-5"
                    name="baseload"
                  >
                    <SelectTrigger className="h-11 w-full rounded-lg border-input bg-background px-4 text-sm text-ink shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {baseloadOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={pending}
                  aria-busy={pending}
                >
                  {pending ? (
                    <LoaderCircleIcon
                      aria-hidden="true"
                      className="animate-spin"
                    />
                  ) : (
                    <SendIcon aria-hidden="true" />
                  )}
                  {pending ? "Dispatching to Harare Desk…" : "Connect with Energy Desk"}
                </Button>
              </FieldGroup>

              <p
                role="status"
                aria-live="polite"
                className="type-code flex min-h-5 items-center gap-2 text-brand-deep"
              >
                {logged ? (
                  <>
                    <CheckCircle2Icon aria-hidden="true" className="size-4" />
                    Priority Ticket Logged
                  </>
                ) : null}
              </p>
            </form>

            <div className="type-code flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-4 text-caption">
              <span className="uppercase">Desk Response: &lt; 24H SLA</span>
              <span className="uppercase">Direct Executive Access</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
