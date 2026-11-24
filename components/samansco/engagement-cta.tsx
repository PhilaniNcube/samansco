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
  className,
}: EngagementCtaProps) {
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
