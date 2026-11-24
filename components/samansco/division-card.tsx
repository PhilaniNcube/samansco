import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon, BadgeCheckIcon } from "lucide-react";
import Link from "next/link";
import { DivisionChip } from "@/components/samansco/badges";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Accent = "brand" | "charcoal" | "emerald";

const accentText: Record<Accent, string> = {
  brand: "text-brand",
  charcoal: "text-charcoal",
  emerald: "text-emerald-600",
};

export type DivisionCardProps = {
  index: string;
  established?: string;
  chipLabel: string;
  accent?: Accent;
  name: string;
  description: string;
  capabilities: string[];
  href: string;
  ctaLabel: string;
  icon?: LucideIcon;
  className?: string;
};

/**
 * Structural entity card for one operating company: eyebrow, status chip,
 * division name, scope summary and the two capability lines from the design.
 */
export function DivisionCard({
  index,
  established = "EST. 1982",
  chipLabel,
  accent = "brand",
  name,
  description,
  capabilities,
  href,
  ctaLabel,
  icon: Icon = BadgeCheckIcon,
  className,
}: DivisionCardProps) {
  return (
    <Card
      className={cn(
        "group gap-0 border-hairline bg-card p-6 shadow-none transition-colors duration-150 hover:border-secondary lg:p-8",
        className,
      )}
    >
      <div className="type-code mb-4 flex flex-wrap items-center justify-between gap-2 text-caption uppercase">
        <span>
          DIVISION {index} · {established}
        </span>
        <DivisionChip>{chipLabel}</DivisionChip>
      </div>

      <h3 className="type-headline-md text-ink transition-colors group-hover:text-brand">
        {name}
      </h3>
      <p className="type-body-md mt-2 leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mt-6 mb-6 space-y-2 border-t border-hairline pt-4">
        {capabilities.map((capability) => (
          <li
            key={capability}
            className="type-label flex items-start gap-2 text-ink"
          >
            <Icon
              aria-hidden="true"
              className={cn("mt-0.5 size-[18px] shrink-0", accentText[accent])}
            />
            {capability}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="type-label mt-auto inline-flex items-center gap-2 font-semibold text-charcoal transition-colors group-hover:text-brand"
      >
        {ctaLabel}
        <ArrowRightIcon
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </Card>
  );
}
