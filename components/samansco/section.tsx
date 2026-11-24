import type * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "white" | "page" | "band" | "ink" | "none";

const tones: Record<Tone, string> = {
  white: "bg-background text-foreground",
  page: "bg-surface-page text-foreground",
  band: "bg-surface-band text-foreground",
  ink: "bg-charcoal text-white",
  none: "",
};

/**
 * Page section band. Alternating surfaces carry the group structure: white
 * canvas, architectural page tint, and full-bleed ink panels for emphasis.
 */
export function Section({
  tone = "white",
  className,
  ...props
}: React.ComponentProps<"section"> & { tone?: Tone }) {
  return <section className={cn(tones[tone], className)} {...props} />;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
  className,
  titleClassName,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-3">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading
          className={cn("type-headline-xl text-balance text-ink", titleClassName)}
        >
          {title}
        </Heading>
        {description ? (
          <div className="type-body-md max-w-2xl leading-relaxed text-muted-foreground">
            {description}
          </div>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "type-eyebrow flex items-center gap-2 text-caption",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Divider used between a heading block and the content it introduces.
 */
export function SectionRule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-hairline", className)} />;
}
