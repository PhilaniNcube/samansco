import {
  Field as UiField,
  FieldDescription as UiFieldDescription,
  FieldError as UiFieldError,
  FieldGroup as UiFieldGroup,
  FieldLabel as UiFieldLabel,
} from "@ui-sdk/react/field";
import type * as React from "react";
import { cn } from "@/lib/utils";

type ClassName = { className?: string };

function Field({ className, ...props }: React.ComponentProps<typeof UiField> & ClassName) {
  return <UiField className={cn("flex w-full flex-col gap-2", className)} {...props} />;
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldLabel> & ClassName) {
  return (
    <UiFieldLabel
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-none font-medium select-none",
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldDescription> & ClassName) {
  return (
    <UiFieldDescription
      className={cn("text-sm leading-normal text-muted-foreground", className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldError> & ClassName) {
  return (
    <UiFieldError
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    />
  );
}

function FieldGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldGroup> & ClassName) {
  return (
    <UiFieldGroup className={cn("flex w-full flex-col gap-5", className)} {...props} />
  );
}

export {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
};
