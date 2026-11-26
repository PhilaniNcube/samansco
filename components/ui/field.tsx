import {
  Field as UiField,
  FieldDescription as UiFieldDescription,
  FieldError as UiFieldError,
  FieldGroup as UiFieldGroup,
  FieldLabel as UiFieldLabel,
  FieldLegend as UiFieldLegend,
  FieldSet as UiFieldSet,
} from "@ui-sdk/react/field";
import type * as React from "react";
import { cn } from "@/lib/utils";

type ClassName = { className?: string };

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof UiField> &
  ClassName & { orientation?: "vertical" | "horizontal" }) {
  return (
    <UiField
      data-orientation={orientation}
      className={cn(
        orientation === "horizontal"
          ? "flex w-full flex-row items-start gap-3 data-[disabled]:opacity-50"
          : "flex w-full flex-col gap-2 data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldLabel> & ClassName) {
  return (
    <UiFieldLabel
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-none font-medium select-none data-[invalid]:text-destructive",
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
    <UiFieldGroup
      className={cn("flex w-full flex-col gap-5", className)}
      {...props}
    />
  );
}

function FieldSet({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldSet> & ClassName) {
  return (
    <UiFieldSet
      className={cn("flex w-full flex-col gap-4 border-0 p-0", className)}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldLegend> & ClassName) {
  return (
    <UiFieldLegend
      className={cn("text-sm font-medium text-ink", className)}
      {...props}
    />
  );
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
};
