import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon, BadgeCheckIcon } from "lucide-react";
import Link from "next/link";
import { DivisionChip } from "@/components/samansco/badges";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Accent = "brand" | "charcoal" | "emerald";

const accentText: Record<Accent, string> = {
  brand: "text-brand",
  charcoal: "text-charcoal",
  emerald: "text-emerald-600",
};

const accentPhotoText: Record<Accent, string> = {
  brand: "text-brand-soft",
  charcoal: "text-white/85",
  emerald: "text-emerald-400",
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
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  className?: string;
};

/**
 * Structural entity card for one operating company: eyebrow, status chip,
 * division name, scope summary and the two capability lines from the design.
 * Supports an optional full-background photographic mode.
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
  image,
  imageAlt,
  imageClassName,
  className,
}: DivisionCardProps) {
  if (image) {
    return (
      <ImageBackdropCard
        image={image}
        imageAlt={imageAlt ?? `${name} operations`}
        imageClassName={imageClassName}
        sizes="(min-width: 768px) 50vw, 100vw"
        scrim="deep"
        interactive
        className={cn(
          "group min-bs-[24rem] border-hairline/25 lg:min-bs-[26rem] [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/40",
          className,
        )}
      >
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="type-code mbe-4 flex flex-wrap items-center justify-between gap-2 text-white/75 uppercase">
            <span>
              DIVISION {index} · {established}
            </span>
            <DivisionChip className="border border-white/20 bg-ink/60 text-white backdrop-blur-sm">
              {chipLabel}
            </DivisionChip>
          </div>

          <div className="mbs-auto pbs-10 lg:pbs-14">
            <h3 className="type-headline-md text-white motion-safe:transition-colors [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-brand-soft">
              {name}
            </h3>
            <p className="type-body-md mbs-2 leading-relaxed text-white/80">
              {description}
            </p>

            <ul className="mbs-5 mbe-6 space-y-2 border-t border-white/15 pbs-4">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="type-label flex items-start gap-2 text-white/90"
                >
                  <Icon
                    aria-hidden="true"
                    className={cn(
                      "mbs-0.5 size-[18px] shrink-0",
                      accentPhotoText[accent],
                    )}
                  />
                  {capability}
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className="type-label inline-flex items-center gap-2 font-semibold text-white after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-transparent motion-safe:transition-colors [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-brand-soft"
            >
              {ctaLabel}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 motion-safe:transition-transform [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </ImageBackdropCard>
    );
  }

  return (
    <Card
      className={cn(
        "group gap-0 border-hairline bg-card p-6 shadow-none transition-colors duration-150 hover:border-secondary lg:p-8",
        className,
      )}
    >
      <div className="type-code mbe-4 flex flex-wrap items-center justify-between gap-2 text-caption uppercase">
        <span>
          DIVISION {index} · {established}
        </span>
        <DivisionChip>{chipLabel}</DivisionChip>
      </div>

      <h3 className="type-headline-md text-ink transition-colors group-hover:text-brand">
        {name}
      </h3>
      <p className="type-body-md mbs-2 leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mbs-6 mbe-6 space-y-2 border-t border-hairline pbs-4">
        {capabilities.map((capability) => (
          <li
            key={capability}
            className="type-label flex items-start gap-2 text-ink"
          >
            <Icon
              aria-hidden="true"
              className={cn("mbs-0.5 size-[18px] shrink-0", accentText[accent])}
            />
            {capability}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="type-label mbs-auto inline-flex items-center gap-2 font-semibold text-charcoal transition-colors group-hover:text-brand"
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
