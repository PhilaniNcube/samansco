"use client";

import { Textarea } from "@ui-sdk/react/textarea";
import {
  ArrowRightIcon,
  CircleCheckIcon,
  LockIcon,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
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
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const routingOptions = [
  {
    value: "holdings",
    label:
      "Samansco Group Holdings (General / Governance / Executive Office)",
  },
  {
    value: "industries",
    label:
      "Samansco Industries (Solar EPC, Equipment Supply & NGO Procurement)",
  },
  {
    value: "energy",
    label:
      "Samansco Energy / SEPCO (Utility PPAs, Electricity Wheeling & Retail)",
  },
  {
    value: "maintenance",
    label:
      "Samansco Maintenance (Asset Telemetry, Solar O&M & Repowering)",
  },
  {
    value: "carbon",
    label: "Samansco Carbon (I-RECs, Carbon Offsets & ESG Advisory)",
  },
];

const engagementNatures = [
  "Commercial RFP / Tender",
  "PPA & Power Wheeling",
  "Equipment Distribution",
  "Asset O&M SLA",
  "I-REC Carbon Credits",
  "Media & Governance",
];

const trustMarkers = [
  "ZERA LICENSE NO. 0422/GEN",
  "SADC REGIONAL DESK",
  "ISO 9001 / ISO 14001 COMPLIANT",
];

/**
 * Multi-line field on the UI SDK textarea primitive. There is no shared
 * wrapper for textarea yet, so the contact feature owns the token styling.
 */
function FormTextarea({
  className,
  ...props
}: React.ComponentProps<typeof Textarea>) {
  return (
    <Textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-lg border border-input bg-surface-band px-4 py-3 text-base text-ink transition-colors outline-none",
        "placeholder:text-caption",
        "focus-visible:border-charcoal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Institutional enquiry form. Client-side only: native constraints plus an
 * explicit confirmation check gate the success state, which is announced
 * through a live region. Nothing is transmitted or stored.
 */
export function EnquiryForm() {
  const [selectedNature, setSelectedNature] = React.useState<string | null>(
    null,
  );
  const [confirmed, setConfirmed] = React.useState(false);
  const [confirmError, setConfirmError] = React.useState(false);
  const [reference, setReference] = React.useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReference(null);

    if (!confirmed) {
      setConfirmError(true);
      return;
    }

    setConfirmError(false);
    setReference(
      `SAM-DIR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    );
    event.currentTarget.reset();
    setSelectedNature(null);
    setConfirmed(false);
  }

  return (
    <div className="flex h-full flex-col rounded-lg border border-hairline bg-card p-5 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-hairline/80 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <h2 className="type-headline-lg text-balance text-ink">
            Initiate an Institutional Enquiry
          </h2>
          <p className="type-body-sm mt-1 leading-relaxed text-muted-foreground">
            Directly routed to the relevant operating company executive desk
            within 24 business hours.
          </p>
        </div>

        <div className="hidden shrink-0 flex-col items-end sm:flex">
          <span className="type-code text-caption">PROTOCOL</span>
          <span className="type-code font-semibold text-ink">ENC-S256</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <FieldGroup>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field name="name">
              <FieldLabel className="flex w-full items-center justify-between gap-3">
                <span>Full Legal Name</span>
                <span className="type-code font-normal text-caption">
                  *Required
                </span>
              </FieldLabel>
              <Input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Tendai Mashingaidze"
                className="h-12 bg-surface-band text-base"
                required
              />
              <FieldError match="valueMissing">
                Enter your full legal name.
              </FieldError>
            </Field>

            <Field name="organisation">
              <FieldLabel className="flex w-full items-center justify-between gap-3">
                <span>Organization / Entity</span>
                <span className="type-code font-normal text-caption">
                  *Required
                </span>
              </FieldLabel>
              <Input
                name="organisation"
                type="text"
                autoComplete="organization"
                placeholder="e.g. Anglo American / Old Mutual"
                className="h-12 bg-surface-band text-base"
                required
              />
              <FieldError match="valueMissing">
                Enter your organisation or entity.
              </FieldError>
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field name="email">
              <FieldLabel className="flex w-full items-center justify-between gap-3">
                <span>Corporate Email Address</span>
                <span className="type-code font-normal text-caption">
                  *Required
                </span>
              </FieldLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tendai.m@organization.com"
                className="h-12 bg-surface-band text-base"
                required
              />
              <FieldDescription className="type-code text-caption">
                *Official domain
              </FieldDescription>
              <FieldError match="valueMissing">
                Enter your corporate email address.
              </FieldError>
              <FieldError match="typeMismatch">
                Enter an email address like name@organization.com.
              </FieldError>
            </Field>

            <Field name="phone">
              <FieldLabel className="flex w-full items-center justify-between gap-3">
                <span>Telephone / WhatsApp</span>
                <span className="type-code font-normal text-caption">
                  With country code
                </span>
              </FieldLabel>
              <Input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+263 77..."
                className="h-12 bg-surface-band text-base"
                required
              />
              <FieldError match="valueMissing">
                Enter a telephone or WhatsApp number.
              </FieldError>
            </Field>
          </div>

          <Field name="division">
            <FieldLabel>Direct Enquiry To Operating Entity</FieldLabel>
            <Select items={routingOptions} defaultValue="holdings">
              <SelectTrigger className="h-12 rounded-lg border-input bg-surface-band px-3.5 text-base text-ink shadow-none">
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
          </Field>

          <div className="flex flex-col gap-2">
            <span
              id="nature-of-engagement-label"
              className="type-label text-charcoal"
            >
              Nature of Engagement
            </span>
            <div
              role="group"
              aria-labelledby="nature-of-engagement-label"
              className="flex flex-wrap gap-2"
            >
              {engagementNatures.map((nature) => {
                const active = selectedNature === nature;

                return (
                  <Button
                    key={nature}
                    type="button"
                    size="sm"
                    variant={active ? "secondary" : "outline"}
                    aria-pressed={active}
                    onClick={() =>
                      setSelectedNature(active ? null : nature)
                    }
                    className={cn(
                      "h-auto rounded-lg px-3 py-1.5 text-sm font-medium",
                      active
                        ? "border border-charcoal bg-charcoal text-white hover:bg-ink"
                        : "border-hairline bg-surface-band text-muted-foreground hover:bg-surface-sunken",
                    )}
                  >
                    {nature}
                  </Button>
                );
              })}
            </div>
          </div>

          <Field name="message">
            <FieldLabel className="flex w-full items-center justify-between gap-3">
              <span>Message / Project Scope Details</span>
              <span className="type-code font-normal text-caption">
                Capacity / Location / Specs
              </span>
            </FieldLabel>
            <FormTextarea
              name="message"
              rows={4}
              placeholder="Specify MW/kW load requirement, geographical site coordinates, tender references, or specific operational parameters..."
              required
            />
            <FieldError match="valueMissing">
              Describe your project scope or enquiry.
            </FieldError>
          </Field>

          <Field
            name="confirmation"
            className="flex-row items-start gap-3"
            invalid={confirmError || undefined}
          >
            <Switch
              checked={confirmed}
              onCheckedChange={(next) => {
                setConfirmed(next);
                if (next) setConfirmError(false);
              }}
              aria-required="true"
              className="mt-0.5"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <FieldLabel className="type-body-sm leading-snug text-charcoal">
                I confirm this enquiry pertains to institutional, commercial,
                mining, agricultural, or utility-scale energy operations.
              </FieldLabel>
              {confirmError ? (
                <FieldError match role="alert">
                  Please confirm the institutional nature of this enquiry.
                </FieldError>
              ) : null}
            </div>
          </Field>
        </FieldGroup>

        <div className="mt-6 flex flex-col gap-4 border-t border-hairline/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit Corporate Enquiry
            <ArrowRightIcon aria-hidden="true" />
          </Button>

          <p className="type-code flex items-center gap-1.5 text-caption">
            <LockIcon
              aria-hidden="true"
              className="size-3.5 shrink-0 text-emerald-600"
            />
            Encrypted &amp; Confidential • Zero Spam
          </p>
        </div>
      </form>

      <div className="mt-auto">
        <div aria-live="polite" aria-atomic="true" role="status">
          {reference ? (
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-hairline bg-surface-band p-4">
              <CircleCheckIcon
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-emerald-600"
              />
              <div>
                <h3 className="type-headline-sm text-ink">
                  Corporate Enquiry Dispatched
                </h3>
                <p className="type-body-sm mt-1 leading-relaxed text-muted-foreground">
                  Your institutional message has been routed to the relevant
                  Operating Company Liaison Desk. A senior representative will
                  review specifications and respond within 24 business hours.
                </p>
                <p className="type-code mt-2 text-brand-deep">
                  Reference ID: {reference}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="type-code mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg bg-surface-band px-3 py-2 text-caption">
          {trustMarkers.map((marker, index) => (
            <span key={marker} className="flex items-center gap-2">
              {index === 0 ? (
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-600"
                />
              ) : null}
              {marker}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
