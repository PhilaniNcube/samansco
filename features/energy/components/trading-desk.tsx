"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  CheckCircle2Icon,
  CircleAlertIcon,
  LoaderCircleIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Section } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitTradingEnquiry } from "../trading-enquiry-actions";
import { baseloadOptions } from "../trading-enquiry-options";
import {
  type TradingEnquiryField,
  type TradingEnquiryInput,
  tradingEnquirySchema,
} from "../trading-enquiry-schema";
import { initialTradingEnquiryState } from "../trading-enquiry-state";

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

const defaultValues: TradingEnquiryInput = {
  entity: "",
  email: "",
  baseload: "1-5",
};

/**
 * Direct desk engagement: contact matrix beside a structured offtake enquiry
 * form using `<form action>`, `react-hook-form`, Valibot, `useActionState`, and
 * Shadcn `Field` wrappers.
 */
export function TradingDesk() {
  const [state, formAction, pending] = React.useActionState(
    submitTradingEnquiry,
    initialTradingEnquiryState,
  );

  const { control, trigger, getValues, setError, reset } =
    useForm<TradingEnquiryInput>({
      resolver: valibotResolver(tradingEnquirySchema),
      defaultValues,
    });

  React.useEffect(() => {
    if (state.status === "success") {
      reset(defaultValues);
      return;
    }

    if (state.status === "error" && state.fieldErrors) {
      for (const [field, messages] of Object.entries(state.fieldErrors)) {
        const message = messages?.[0];
        if (message) {
          setError(field as TradingEnquiryField, {
            type: "server",
            message,
          });
        }
      }
    }
  }, [state, reset, setError]);

  async function handleFormAction(formData: FormData) {
    const isValid = await trigger(undefined, { shouldFocus: true });
    if (!isValid) {
      return;
    }

    const values = getValues();
    formData.set("entity", values.entity);
    formData.set("email", values.email);
    formData.set("baseload", values.baseload);

    React.startTransition(() => {
      formAction(formData);
    });
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
            <form
              action={handleFormAction}
              noValidate
              className="flex flex-col gap-5"
            >
              <div aria-hidden="true" className="hidden">
                <label htmlFor="energy-companyWebsite">Company website</label>
                <input
                  id="energy-companyWebsite"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <FieldGroup className="gap-5">
                <Controller
                  name="entity"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      name={field.name}
                      invalid={fieldState.invalid || undefined}
                    >
                      <FieldLabel className="type-label text-ink">
                        Institutional offtaker entity
                      </FieldLabel>
                      <Input
                        ref={field.ref}
                        name={field.name}
                        placeholder="e.g. Zimplats Mining / Dairibord"
                        autoComplete="organization"
                        maxLength={160}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(value, details) => {
                          if (details.reason === "reset") {
                            details.cancel();
                            return;
                          }
                          field.onChange(value);
                        }}
                      />
                      {fieldState.error?.message ? (
                        <FieldError match>{fieldState.error.message}</FieldError>
                      ) : null}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      name={field.name}
                      invalid={fieldState.invalid || undefined}
                    >
                      <FieldLabel className="type-label text-ink">
                        Corporate email address
                      </FieldLabel>
                      <Input
                        ref={field.ref}
                        name={field.name}
                        type="email"
                        placeholder="power@organization.com"
                        autoComplete="email"
                        maxLength={200}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(value, details) => {
                          if (details.reason === "reset") {
                            details.cancel();
                            return;
                          }
                          field.onChange(value);
                        }}
                      />
                      {fieldState.error?.message ? (
                        <FieldError match>{fieldState.error.message}</FieldError>
                      ) : null}
                    </Field>
                  )}
                />

                <Controller
                  name="baseload"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      name={field.name}
                      invalid={fieldState.invalid || undefined}
                    >
                      <FieldLabel className="type-label text-ink">
                        Target baseload requirement
                      </FieldLabel>
                      <Select
                        name={field.name}
                        items={[...baseloadOptions]}
                        value={field.value}
                        onValueChange={(value, details) => {
                          if (details.reason === "reset") {
                            details.cancel();
                            return;
                          }
                          field.onChange(value ?? "1-5");
                        }}
                      >
                        <SelectTrigger
                          ref={field.ref}
                          className="h-11 w-full rounded-lg border-input bg-background px-4 text-sm text-ink shadow-none"
                        >
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
                      {fieldState.error?.message ? (
                        <FieldError match>{fieldState.error.message}</FieldError>
                      ) : null}
                    </Field>
                  )}
                />

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

              {state.status === "error" ? (
                <div
                  role="alert"
                  className="flex items-start gap-3 border border-destructive/30 bg-destructive/5 p-3.5"
                >
                  <CircleAlertIcon
                    aria-hidden="true"
                    className="mbs-0.5 size-4 shrink-0 text-destructive"
                  />
                  <p className="type-body-sm leading-relaxed text-destructive">
                    {state.message}
                  </p>
                </div>
              ) : null}

              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="min-bs-5"
              >
                {state.status === "success" ? (
                  <p className="type-body-sm flex items-center gap-2 font-medium text-brand-deep tabular-nums">
                    <CheckCircle2Icon aria-hidden="true" className="size-4" />
                    Priority ticket logged ({state.reference}). Confirmation emailed.
                  </p>
                ) : null}
              </div>
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
