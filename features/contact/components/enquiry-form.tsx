"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  ArrowRightIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  LockIcon,
} from "lucide-react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
} from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry } from "../enquiry-actions";
import {
  type EngagementNature,
  engagementNatures,
  routingOptions,
} from "../enquiry-options";
import {
  type EnquiryField,
  type EnquiryInput,
  enquirySchema,
} from "../enquiry-schema";
import { initialEnquiryState } from "../enquiry-state";

const defaultValues: Partial<EnquiryInput> = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  division: "group",
  engagementNature: undefined,
  message: "",
  confirmation: false,
};

/**
 * Institutional enquiry form. Submits via the native `<form action>` prop to
 * a React 19 `useActionState` server action, validated on both client and
 * server with `react-hook-form` + Valibot and rendered with Shadcn `Field`
 * wrappers around `@ui-sdk/react` primitives.
 */
export function EnquiryForm() {
  const [state, formAction, pending] = React.useActionState(
    submitEnquiry,
    initialEnquiryState,
  );

  const { control, trigger, getValues, setError, reset } =
    useForm<EnquiryInput>({
      resolver: valibotResolver(enquirySchema),
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
          setError(field as EnquiryField, { type: "server", message });
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
    formData.set("name", values.name);
    formData.set("organisation", values.organisation);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("division", values.division);
    formData.set("engagementNature", values.engagementNature);
    formData.set("message", values.message);
    formData.set("confirmation", values.confirmation ? "on" : "");

    React.startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div className="flex h-full flex-col border border-hairline bg-card p-5 lg:p-8">
      <div className="border-b border-hairline/80 pbe-5">
        <h2 className="type-headline-lg text-balance text-ink">
          Initiate an Institutional Enquiry
        </h2>
        <p className="type-body-sm mbs-1.5 leading-relaxed text-muted-foreground">
          Directly routed to the relevant operating company executive desk
          within 24 business hours.
        </p>
      </div>

      <form action={handleFormAction} noValidate className="mbs-6">
        <FieldGroup>
          {/* Bot trap: hidden from people and assistive technology. */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="companyWebsite">Company website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  name={field.name}
                  invalid={fieldState.invalid || undefined}
                >
                  <FieldLabel className="flex w-full items-center justify-between gap-3">
                    <span>Full legal name</span>
                    <span className="type-body-sm font-normal text-caption">
                      Required
                    </span>
                  </FieldLabel>
                  <Input
                    ref={field.ref}
                    name={field.name}
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    placeholder="e.g. Tendai Mashingaidze"
                    className="h-12 bg-surface-band text-base"
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
              name="organisation"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  name={field.name}
                  invalid={fieldState.invalid || undefined}
                >
                  <FieldLabel className="flex w-full items-center justify-between gap-3">
                    <span>Organization / entity</span>
                    <span className="type-body-sm font-normal text-caption">
                      Required
                    </span>
                  </FieldLabel>
                  <Input
                    ref={field.ref}
                    name={field.name}
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="e.g. Anglo American / Old Mutual"
                    className="h-12 bg-surface-band text-base"
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
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  name={field.name}
                  invalid={fieldState.invalid || undefined}
                >
                  <FieldLabel className="flex w-full items-center justify-between gap-3">
                    <span>Corporate email address</span>
                    <span className="type-body-sm font-normal text-caption">
                      Required
                    </span>
                  </FieldLabel>
                  <Input
                    ref={field.ref}
                    name={field.name}
                    type="email"
                    autoComplete="email"
                    maxLength={200}
                    placeholder="tendai.m@organization.com"
                    className="h-12 bg-surface-band text-base"
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
                  <FieldDescription className="type-body-sm text-caption">
                    Official domain preferred
                  </FieldDescription>
                  {fieldState.error?.message ? (
                    <FieldError match>{fieldState.error.message}</FieldError>
                  ) : null}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  name={field.name}
                  invalid={fieldState.invalid || undefined}
                >
                  <FieldLabel className="flex w-full items-center justify-between gap-3">
                    <span>Telephone / WhatsApp</span>
                    <span className="type-body-sm font-normal text-caption">
                      With country code
                    </span>
                  </FieldLabel>
                  <Input
                    ref={field.ref}
                    name={field.name}
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="+263 77..."
                    className="h-12 bg-surface-band text-base"
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
          </div>

          <Controller
            name="division"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                name={field.name}
                invalid={fieldState.invalid || undefined}
              >
                <FieldLabel>Direct enquiry to operating entity</FieldLabel>
                <Select
                  name={field.name}
                  items={[...routingOptions]}
                  value={field.value}
                  onValueChange={(value, details) => {
                    if (details.reason === "reset") {
                      details.cancel();
                      return;
                    }
                    field.onChange(value ?? "group");
                  }}
                >
                  <SelectTrigger
                    ref={field.ref}
                    className="h-12 rounded-lg border-input bg-surface-band px-3.5 text-base text-ink shadow-none"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-hairline shadow-none">
                    {routingOptions.map((option) => (
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

          <Controller
            name="engagementNature"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                name={field.name}
                invalid={fieldState.invalid || undefined}
              >
                <FieldLabel className="text-charcoal">
                  Nature of engagement
                </FieldLabel>
                <RadioGroup
                  name={field.name}
                  value={field.value ?? null}
                  onValueChange={(value, details) => {
                    if (details.reason === "reset") {
                      details.cancel();
                      return;
                    }
                    field.onChange(
                      (value ?? undefined) as EngagementNature | undefined,
                    );
                  }}
                  className="grid grid-cols-1 gap-px overflow-clip rounded-lg border border-hairline bg-hairline sm:grid-cols-2"
                >
                  {engagementNatures.map((nature) => (
                    <label
                      key={nature}
                      className="flex cursor-pointer items-center gap-2.5 bg-surface-band px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-sunken has-[[data-checked]]:bg-charcoal has-[[data-checked]]:text-white"
                    >
                      <Radio value={nature}>
                        <RadioIndicator />
                      </Radio>
                      <span>{nature}</span>
                    </label>
                  ))}
                </RadioGroup>
                {fieldState.error?.message ? (
                  <FieldError match>{fieldState.error.message}</FieldError>
                ) : null}
              </Field>
            )}
          />

          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                name={field.name}
                invalid={fieldState.invalid || undefined}
              >
                <FieldLabel className="flex w-full items-center justify-between gap-3">
                  <span>Message / project scope details</span>
                  <span className="type-body-sm font-normal text-caption">
                    Capacity, location &amp; specs
                  </span>
                </FieldLabel>
                <Textarea
                  ref={field.ref}
                  name={field.name}
                  rows={4}
                  maxLength={5000}
                  placeholder="Specify MW/kW load requirement, geographical site coordinates, tender references, or specific operational parameters..."
                  className="bg-surface-band"
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
            name="confirmation"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                orientation="horizontal"
                name={field.name}
                invalid={fieldState.invalid || undefined}
              >
                <Switch
                  ref={field.ref}
                  name={field.name}
                  checked={Boolean(field.value)}
                  onBlur={field.onBlur}
                  onCheckedChange={(checked, details) => {
                    if (details.reason === "reset") {
                      details.cancel();
                      return;
                    }
                    field.onChange(checked);
                  }}
                  aria-required="true"
                  className="mbs-0.5"
                />
                <FieldContent>
                  <FieldLabel className="type-body-sm leading-snug text-charcoal">
                    I confirm this enquiry pertains to institutional,
                    commercial, mining, agricultural, or utility-scale energy
                    operations.
                  </FieldLabel>
                  {fieldState.error?.message ? (
                    <FieldError match role="alert">
                      {fieldState.error.message}
                    </FieldError>
                  ) : null}
                </FieldContent>
              </Field>
            )}
          />
        </FieldGroup>

        {state.status === "error" ? (
          <div
            role="alert"
            className="mbs-5 flex items-start gap-3 border border-destructive/30 bg-destructive/5 p-4"
          >
            <CircleAlertIcon
              aria-hidden="true"
              className="mbs-0.5 size-5 shrink-0 text-destructive"
            />
            <p className="type-body-sm leading-relaxed text-destructive">
              {state.message}
            </p>
          </div>
        ) : null}

        <div className="mbs-6 flex flex-col gap-4 border-t border-hairline/80 pbs-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={pending}
            aria-busy={pending}
          >
            {pending ? "Dispatching Enquiry…" : "Submit Corporate Enquiry"}
            {pending ? (
              <LoaderCircleIcon aria-hidden="true" className="animate-spin" />
            ) : (
              <ArrowRightIcon aria-hidden="true" />
            )}
          </Button>

          <p className="type-body-sm flex items-center gap-1.5 text-muted-foreground">
            <LockIcon
              aria-hidden="true"
              className="size-3.5 shrink-0 text-emerald-600"
            />
            Encrypted and confidential
          </p>
        </div>
      </form>

      <div className="mbs-auto">
        <div aria-live="polite" aria-atomic="true" role="status">
          {state.status === "success" ? (
            <div className="mbs-6 flex items-start gap-3 border border-hairline bg-surface-band p-4">
              <CircleCheckIcon
                aria-hidden="true"
                className="mbs-0.5 size-5 shrink-0 text-emerald-600"
              />
              <div>
                <h3 className="type-headline-sm text-ink">
                  Corporate Enquiry Dispatched
                </h3>
                <p className="type-body-sm mbs-1 leading-relaxed text-muted-foreground">
                  Your institutional message has been routed to {state.company} ·{" "}
                  {state.desk}. A senior representative will review
                  specifications and respond within 24 business hours. A
                  confirmation copy has been emailed to you.
                </p>
                <p className="type-body-sm mbs-2 font-medium text-brand-deep tabular-nums">
                  Reference ID: {state.reference}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <p className="type-body-sm mbs-6 border-t border-hairline pbs-4 text-muted-foreground">
          ZERA Licence No. 0422/GEN · SADC regional desk · ISO 9001 &amp; ISO
          14001 compliant
        </p>
      </div>
    </div>
  );
}
