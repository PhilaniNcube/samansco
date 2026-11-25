import type * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Technical specification list: label on the left, monospace value on the
 * right, hairline rules between rows.
 */
export function SpecList({
  className,
  ...props
}: React.ComponentProps<"dl">) {
  return (
    <dl
      className={cn("divide-y divide-hairline border-y border-hairline", className)}
      {...props}
    />
  );
}

export function SpecRow({
  label,
  value,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4 py-3",
        className,
      )}
    >
      <dt className="type-body-sm text-caption">{label}</dt>
      <dd className="type-body-sm text-right font-medium text-ink tabular-nums">
        {value}
      </dd>
    </div>
  );
}

/**
 * Parameter panel: a small technical metric block used inside editorial and
 * capability sections.
 */
export function ParameterPanel({
  label,
  value,
  note,
  className,
}: {
  label: string;
  value: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-hairline/70 bg-surface-band p-4",
        className,
      )}
    >
      <span className="type-label block text-muted-foreground">{label}</span>
      <div className="type-headline-md mbs-2 text-ink tabular-nums">{value}</div>
      {note ? (
        <span className="type-body-sm mbs-1 block text-muted-foreground">{note}</span>
      ) : null}
    </div>
  );
}
