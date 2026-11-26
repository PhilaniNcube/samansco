"use client";

import { Textarea } from "@ui-sdk/react/textarea";
import {
  ArrowRightIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
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
import { submitEnquiry } from "../enquiry-actions";
import {
  engagementNatures,
  enquiryDivisions,
  routingOptions,
} from "../enquiry-options";
import {
  initialEnquiryState,
  type EnquiryDraft,
  type EnquiryFormState,
} from "../enquiry-state";

/**
 * Multi-line field on the UI SDK textarea primitive.
 */
function FormTextarea({
  className,
  ...props
}: React.ComponentProps<typeof Textarea>) {
  return (
    <Textarea
      className={cn(
        "min-bs-28 w-full resize-y rounded-lg border border-input bg-surface-band px-4 py-3 text-base text-ink transition-colors",
        "placeholder:text-caption",
        "focus-visible:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Institutional enquiry form. Native constraints gate submission, the server
 * action re-validates and dispatches the notification through Resend, and the
 * outcome is announced through a live region.
 */
export function EnquiryForm() {
  const [state, formAction, pending] = React.useActionState(
    submitEnquiry,
    initialEnquiryState,
  );

  // A successful submission remounts the fields, which clears the browser
  // values and the controlled radio/switch state without an effect. A failed
  // one remounts them with the draft, because React resets the form after an
  // action settles.
  const draft = state.status === "error" ? state.values : null;
  const formKey =
    state.status === "success"
      ? state.reference
      : state.status === "error"
        ? `attempt-${state.attempt}`
        : "enquiry";

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

      <EnquiryFields
        key={formKey}
        state={state}
        draft={draft}
        formAction={formAction}
        pending={pending}
      />

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
                  Your institutional message has been routed to{" "}
                  {state.company} — {state.desk}. A senior representative will
                  review specifications and respond within 24 business hours. A
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

type EnquiryFieldsProps = {
  state: EnquiryFormState;
  draft: EnquiryDraft | null;
  formAction: (formData: FormData) => void;
  pending: boolean;
};

function EnquiryFields({ state, draft, formAction, pending }: EnquiryFieldsProps) {
  const [selectedNature, setSelectedNature] = React.useState<string | null>(
    draft?.engagementNature || null,
  );
  const [confirmed, setConfirmed] = React.useState(
    draft?.confirmation === "on",
  );
  const [confirmError, setConfirmError] = React.useState(false);

  const isError = state.status === "error";
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  const divisionDefault =
    draft && (enquiryDivisions as readonly string[]).includes(draft.division)
      ? draft.division
      : "group";

  function fieldError(name: string): string | undefined {
    return fieldErrors?.[name]?.[0];
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (confirmed) {
      setConfirmError(false);
      return;
    }

    event.preventDefault();
    setConfirmError(true);
  }

  return (
    <form action={formAction} onSubmit={handleSubmit} className="mbs-6">
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
          <Field name="name" invalid={fieldError("name") ? true : undefined}>
            <FieldLabel className="flex w-full items-center justify-between gap-3">
              <span>Full legal name</span>
              <span className="type-body-sm font-normal text-caption">
                Required
              </span>
            </FieldLabel>
            <Input
              name="name"
              type="text"
              autoComplete="name"
              maxLength={120}
              defaultValue={draft?.name ?? ""}
              placeholder="e.g. Tendai Mashingaidze"
              className="h-12 bg-surface-band text-base"
              required
            />
            <FieldError match="valueMissing">
              Enter your full legal name.
            </FieldError>
            {fieldError("name") ? (
              <FieldError match>{fieldError("name")}</FieldError>
            ) : null}
          </Field>

          <Field
            name="organisation"
            invalid={fieldError("organisation") ? true : undefined}
          >
            <FieldLabel className="flex w-full items-center justify-between gap-3">
              <span>Organization / entity</span>
              <span className="type-body-sm font-normal text-caption">
                Required
              </span>
            </FieldLabel>
            <Input
              name="organisation"
              type="text"
              autoComplete="organization"
              maxLength={160}
              defaultValue={draft?.organisation ?? ""}
              placeholder="e.g. Anglo American / Old Mutual"
              className="h-12 bg-surface-band text-base"
              required
            />
            <FieldError match="valueMissing">
              Enter your organisation or entity.
            </FieldError>
            {fieldError("organisation") ? (
              <FieldError match>{fieldError("organisation")}</FieldError>
            ) : null}
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field name="email" invalid={fieldError("email") ? true : undefined}>
            <FieldLabel className="flex w-full items-center justify-between gap-3">
              <span>Corporate email address</span>
              <span className="type-body-sm font-normal text-caption">
                Required
              </span>
            </FieldLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              defaultValue={draft?.email ?? ""}
              placeholder="tendai.m@organization.com"
              className="h-12 bg-surface-band text-base"
              required
            />
            <FieldDescription className="type-body-sm text-caption">
              Official domain preferred
            </FieldDescription>
            <FieldError match="valueMissing">
              Enter your corporate email address.
            </FieldError>
            <FieldError match="typeMismatch">
              Enter an email address like name@organization.com.
            </FieldError>
            {fieldError("email") ? (
              <FieldError match>{fieldError("email")}</FieldError>
            ) : null}
          </Field>

          <Field name="phone" invalid={fieldError("phone") ? true : undefined}>
            <FieldLabel className="flex w-full items-center justify-between gap-3">
              <span>Telephone / WhatsApp</span>
              <span className="type-body-sm font-normal text-caption">
                With country code
              </span>
            </FieldLabel>
            <Input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              defaultValue={draft?.phone ?? ""}
              placeholder="+263 77..."
              className="h-12 bg-surface-band text-base"
              required
            />
            <FieldError match="valueMissing">
              Enter a telephone or WhatsApp number.
            </FieldError>
            {fieldError("phone") ? (
              <FieldError match>{fieldError("phone")}</FieldError>
            ) : null}
          </Field>
        </div>

        <Field
          name="division"
          invalid={fieldError("division") ? true : undefined}
        >
          <FieldLabel>Direct enquiry to operating entity</FieldLabel>
          <Select
            name="division"
            items={[...routingOptions]}
            defaultValue={divisionDefault}
          >
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
          {fieldError("division") ? (
            <FieldError match>{fieldError("division")}</FieldError>
          ) : null}
        </Field>

        <fieldset className="flex flex-col gap-2">
          <legend className="type-label mbe-1 text-charcoal">
            Nature of engagement
          </legend>
          <div className="grid grid-cols-1 gap-px overflow-clip rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
            {engagementNatures.map((nature) => (
              <label key={nature} className="relative block cursor-pointer">
                <input
                  type="radio"
                  name="engagementNature"
                  value={nature}
                  checked={selectedNature === nature}
                  onChange={() => setSelectedNature(nature)}
                  className="peer sr-only"
                />
                <span className="flex items-center gap-2.5 bg-surface-band px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-sunken peer-checked:bg-charcoal peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[-2px] peer-focus-visible:outline-brand [&_.radio-dot]:opacity-0 peer-checked:[&_.radio-dot]:opacity-100">
                  <span
                    aria-hidden="true"
                    className="grid size-3.5 shrink-0 place-items-center rounded-full border border-current/45"
                  >
                    <span className="radio-dot size-1.5 rounded-full bg-current transition-opacity" />
                  </span>
                  <span>{nature}</span>
                </span>
              </label>
            ))}
          </div>
          {fieldError("engagementNature") ? (
            <FieldError match>{fieldError("engagementNature")}</FieldError>
          ) : null}
        </fieldset>

        <Field name="message" invalid={fieldError("message") ? true : undefined}>
          <FieldLabel className="flex w-full items-center justify-between gap-3">
            <span>Message / project scope details</span>
            <span className="type-body-sm font-normal text-caption">
              Capacity, location &amp; specs
            </span>
          </FieldLabel>
          <FormTextarea
            name="message"
            rows={4}
            maxLength={5000}
            defaultValue={draft?.message ?? ""}
            placeholder="Specify MW/kW load requirement, geographical site coordinates, tender references, or specific operational parameters..."
            required
          />
          <FieldError match="valueMissing">
            Describe your project scope or enquiry.
          </FieldError>
          {fieldError("message") ? (
            <FieldError match>{fieldError("message")}</FieldError>
          ) : null}
        </Field>

        <Field
          name="confirmation"
          className="flex-row items-start gap-3"
          invalid={confirmError || fieldError("confirmation") ? true : undefined}
        >
          <Switch
            checked={confirmed}
            onCheckedChange={(next) => {
              setConfirmed(next);
              if (next) setConfirmError(false);
            }}
            aria-required="true"
            className="mbs-0.5"
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
            {fieldError("confirmation") ? (
              <FieldError match>{fieldError("confirmation")}</FieldError>
            ) : null}
          </div>
        </Field>

        {/* Mirrors the switch into the form payload the server validates. */}
        <input
          type="hidden"
          name="confirmation"
          value={confirmed ? "on" : ""}
        />
      </FieldGroup>

      {isError ? (
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
  );
}
