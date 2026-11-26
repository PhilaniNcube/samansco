"use client";

import {
  CheckCircle2Icon,
  LoaderCircleIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Section } from "@/components/samansco/section";
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
  { value: "1-5", label: "1.0 to 5.0 MW (Industrial PPA)" },
  { value: "5-20", label: "5.0 to 20.0 MW (Mining & Smelting)" },
  { value: "20-plus", label: "> 20.0 MW (Cross-Border SAPP Wheeling)" },
  { value: "vpp", label: "Distributed VPP Asset Aggregation" },
];

const contactChannels = [
  {
    label: "Direct utility desk",
    value: "+263 242 480484",
    href: "tel:+263242480484",
    icon: PhoneIcon,
  },
  {
    label: "Trading desk email",
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
        <div className="overflow-clip border border-hairline bg-background lg:grid lg:grid-cols-12">
          <div className="flex flex-col bg-charcoal p-6 text-white lg:col-span-5 lg:p-8">
            <h2
              id="trading-desk-title"
              className="type-headline-lg text-balance text-white"
            >
              Institutional Offtake Enquiry
            </h2>
            <p className="type-body-md mbs-3 leading-relaxed text-white/80">
              Engage directly with Samansco Energy trading officers regarding
              transmission allocations, bespoke multi-year tariffs, and
              commercial utility structuring.
            </p>

            <div className="mbs-6 divide-y divide-white/10 border-y border-white/10">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex flex-col gap-1 py-3.5 transition-colors hover:text-white sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-center gap-2 text-white/75">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-brand-tint"
                      />
                      <span className="type-body-sm">{channel.label}</span>
                    </span>
                    <span className="type-body-sm font-medium text-white tabular-nums">
                      {channel.value}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="type-body-sm mbs-auto space-y-1.5 border-t border-white/10 pbs-6 leading-relaxed text-white/75">
              <p>Samansco Energy</p>
              <p>
                Licensed under Zimbabwe Energy Regulatory Authority (ZERA)
                Licence #LIC-POW-2021/SA. SAPP Synchronized Operating Entity.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-hairline p-6 lg:col-span-7 lg:border-t-0 lg:border-s lg:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <FieldGroup className="gap-5">
                <Field name="entity">
                  <FieldLabel className="type-label text-ink">
                    Institutional offtaker entity
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
                    Target baseload requirement
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
                  {pending ? "Dispatching to Harare desk…" : "Connect with Energy desk"}
                </Button>
              </FieldGroup>

              <p
                role="status"
                aria-live="polite"
                className="type-body-sm flex min-bs-5 items-center gap-2 font-medium text-brand-deep"
              >
                {logged ? (
                  <>
                    <CheckCircle2Icon aria-hidden="true" className="size-4" />
                    Priority ticket logged
                  </>
                ) : null}
              </p>
            </form>

            <div className="type-body-sm flex flex-wrap items-center justify-between gap-2 border-t border-hairline pbs-4 text-muted-foreground">
              <span>Desk response under 24 hours</span>
              <span>Direct executive access</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
