import type * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Corporate legacy pill: charcoal band, white mono type. Marks heritage
 * (`SINCE 1982`) and other group-level identifiers.
 */
export function LegacyPill({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "type-eyebrow inline-flex items-center gap-2 rounded-full bg-charcoal px-3 py-1 text-white",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Operating division chip: neutral architectural band that identifies the
 * subsidiary or operating state.
 */
export function DivisionChip({
  tone = "light",
  className,
  children,
  ...props
}: React.ComponentProps<"span"> & {
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "type-code inline-flex items-center gap-1.5 rounded px-2.5 py-1 whitespace-nowrap",
        tone === "dark"
          ? "bg-charcoal text-white"
          : "bg-surface-sunken/70 text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Specification chip: hairline box around monospace technical metadata.
 */
export function SpecChip({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "type-code inline-flex items-center rounded border border-hairline bg-muted px-2 py-1 text-caption",
        className,
      )}
      {...props}
    />
  );
}
