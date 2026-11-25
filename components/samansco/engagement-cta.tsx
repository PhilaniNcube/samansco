import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/samansco/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type EngagementCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  tone?: "card" | "ink";
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  className?: string;
};

/**
 * Executive engagement banner used at the foot of every division page: one
 * statement of intent and a single institutional action.
 */
export function EngagementCta({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  tone = "card",
  image,
  imageAlt,
  imageClassName,
  className,
}: EngagementCtaProps) {
  if (image) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-start justify-between gap-6 overflow-clip border border-white/15 bg-ink p-6 text-white md:flex-row md:items-center lg:p-10",
          className,
        )}
      >
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 1024px) 90vw, 100vw"
          className={cn("object-cover", imageClassName)}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.14_0.025_264/0.94)_0%,oklch(0.16_0.025_264/0.82)_55%,oklch(0.16_0.025_264/0.62)_100%)]"
        />

        <div className="relative z-10 flex max-w-2xl flex-col gap-2">
          <Eyebrow className="text-brand-soft">{eyebrow}</Eyebrow>
          <h3 className="type-headline-md text-white">{title}</h3>
          <p className="type-body-sm text-white/80">{description}</p>
        </div>

        <Button
          className="relative z-10 shrink-0"
          size="lg"
          variant="default"
          render={<Link href={actionHref} />}
        >
          {actionLabel}
        </Button>
      </div>
    );
  }

  const dark = tone === "ink";

  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-6 border p-6 md:flex-row md:items-center lg:p-8",
        dark
          ? "border-white/10 bg-charcoal text-white"
          : "border-hairline bg-card",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-2">
        <Eyebrow className={dark ? "text-white/60" : undefined}>{eyebrow}</Eyebrow>
        <h3 className={cn("type-headline-md", dark ? "text-white" : "text-ink")}>
          {title}
        </h3>
        <p
          className={cn(
            "type-body-sm",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>

      <Button
        className="shrink-0"
        size="lg"
        variant={dark ? "default" : "secondary"}
        render={<Link href={actionHref} />}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
