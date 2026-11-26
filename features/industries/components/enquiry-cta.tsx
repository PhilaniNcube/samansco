"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  ArrowRightIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
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
import { cn } from "@/lib/utils";
import { submitIndustriesEnquiry } from "../industries-enquiry-actions";
import { industriesEnquiryTypes } from "../industries-enquiry-options";
import {
  type IndustriesEnquiryField,
  type IndustriesEnquiryInput,
  industriesEnquirySchema,
} from "../industries-enquiry-schema";
import { initialIndustriesEnquiryState } from "../industries-enquiry-state";

const defaultValues: IndustriesEnquiryInput = {
  fullName: "",
  organisation: "",
  email: "",
  enquiryType: "epc",
  site: "",
};

/**
 * Engineering desk CTA: dark enquiry band with direct contact lines and a
 * dialog-hosted project brief form using `<form action>`, `react-hook-form`,
 * Valibot, `useActionState`, and Shadcn `Field` wrappers.
 */
export function EnquiryCta() {
  const [state, formAction, pending] = React.useActionState(
    submitIndustriesEnquiry,
    initialIndustriesEnquiryState,
  );

  const { control, trigger, getValues, setError, reset } =
    useForm<IndustriesEnquiryInput>({
      resolver: valibotResolver(industriesEnquirySchema),
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
          setError(field as IndustriesEnquiryField, {
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
    formData.set("fullName", values.fullName);
    formData.set("organisation", values.organisation);
    formData.set("email", values.email);
    formData.set("enquiryType", values.enquiryType);
    formData.set("site", values.site);

    React.startTransition(() => {
      formAction(formData);
    });
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
                    Submit your brief directly to the Engineering Desk at our
                    Harare Central Logistics facility.
                  </DialogDescription>
                </DialogHeader>

                <form
                  action={handleFormAction}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div aria-hidden="true" className="hidden">
                    <label htmlFor="industries-companyWebsite">
                      Company website
                    </label>
                    <input
                      id="industries-companyWebsite"
                      name="companyWebsite"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <FieldGroup>
                    <Controller
                      name="fullName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          name={field.name}
                          invalid={fieldState.invalid || undefined}
                        >
                          <FieldLabel>Full name</FieldLabel>
                          <Input
                            ref={field.ref}
                            name={field.name}
                            autoComplete="name"
                            placeholder="Your full name"
                            maxLength={120}
                            autoFocus
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
                            <FieldError match>
                              {fieldState.error.message}
                            </FieldError>
                          ) : null}
                        </Field>
                      )}
                    />

                    <Controller
                      name="organisation"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          name={field.name}
                          invalid={fieldState.invalid || undefined}
                        >
                          <FieldLabel>Organisation</FieldLabel>
                          <Input
                            ref={field.ref}
                            name={field.name}
                            autoComplete="organization"
                            placeholder="Institution or company"
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
                            <FieldError match>
                              {fieldState.error.message}
                            </FieldError>
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
                          <FieldLabel>Work email</FieldLabel>
                          <Input
                            ref={field.ref}
                            name={field.name}
                            type="email"
                            autoComplete="email"
                            placeholder="name@organisation.com"
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
                            <FieldError match>
                              {fieldState.error.message}
                            </FieldError>
                          ) : null}
                        </Field>
                      )}
                    />

                    <Controller
                      name="enquiryType"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          name={field.name}
                          invalid={fieldState.invalid || undefined}
                        >
                          <FieldLabel>Enquiry type</FieldLabel>
                          <Select
                            name={field.name}
                            items={[...industriesEnquiryTypes]}
                            value={field.value}
                            onValueChange={(value, details) => {
                              if (details.reason === "reset") {
                                details.cancel();
                                return;
                              }
                              field.onChange(value ?? "epc");
                            }}
                          >
                            <SelectTrigger
                              ref={field.ref}
                              className="h-11 bg-background"
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {industriesEnquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {fieldState.error?.message ? (
                            <FieldError match>
                              {fieldState.error.message}
                            </FieldError>
                          ) : null}
                        </Field>
                      )}
                    />

                    <Controller
                      name="site"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          name={field.name}
                          invalid={fieldState.invalid || undefined}
                        >
                          <FieldLabel>Site location</FieldLabel>
                          <Input
                            ref={field.ref}
                            name={field.name}
                            autoComplete="address-level2"
                            placeholder="City or district, country"
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
                            <FieldError match>
                              {fieldState.error.message}
                            </FieldError>
                          ) : null}
                        </Field>
                      )}
                    />
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

                  <div aria-live="polite" aria-atomic="true" role="status">
                    {state.status === "success" ? (
                      <div className="flex items-start gap-3 border border-hairline bg-surface-band p-4">
                        <CircleCheckIcon
                          aria-hidden="true"
                          className="mbs-0.5 size-5 shrink-0 text-emerald-600"
                        />
                        <div>
                          <p className="type-label font-semibold text-ink">
                            Industrial brief dispatched
                          </p>
                          <p className="type-body-sm mbs-1 leading-relaxed text-muted-foreground">
                            Your brief has been routed to Samansco Industries
                            and a confirmation copy emailed to you.
                          </p>
                          <p className="type-body-sm mbs-2 font-medium text-brand-deep tabular-nums">
                            Reference ID: {state.reference}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <DialogFooter>
                    <DialogClose type="button">Cancel</DialogClose>
                    <Button
                      type="submit"
                      disabled={pending}
                      aria-busy={pending}
                    >
                      {pending ? (
                        <LoaderCircleIcon
                          aria-hidden="true"
                          className="animate-spin"
                        />
                      ) : null}
                      {pending ? "Submitting enquiry…" : "Submit enquiry"}
                    </Button>
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
