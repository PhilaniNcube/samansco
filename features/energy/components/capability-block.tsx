import { CheckIcon, type LucideIcon } from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { cn } from "@/lib/utils";

export type CapabilityBlockProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  metaLabel: string;
  metaValue: string;
  status: string;
  statusIcon: LucideIcon;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  className?: string;
};

/**
 * One commercial utility capability: service definition, operating checklist,
 * and a hairline-separated technical footer strip.
 */
export function CapabilityBlock({
  icon: Icon,
  title,
  subtitle,
  description,
  capabilities,
  metaLabel,
  metaValue,
  status,
  statusIcon: StatusIcon,
  image,
  imageAlt,
  imageClassName,
  className,
}: CapabilityBlockProps) {
  if (image) {
    return (
      <ImageBackdropCard
        image={image}
        imageAlt={imageAlt ?? title}
        imageClassName={imageClassName}
        sizes="(min-width: 1024px) 33vw, 100vw"
        scrim="deep"
        className={cn("min-bs-[29rem]", className)}
      >
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="mbe-6 flex items-center justify-end">
            <span className="grid size-11 place-items-center border border-white/20 bg-ink/60 text-brand-soft backdrop-blur-sm">
              <Icon aria-hidden="true" className="size-5" />
            </span>
          </div>

          <h3 className="type-headline-md text-balance text-white">{title}</h3>
          <p className="type-body-sm mbs-1.5 font-medium text-brand-soft">
            {subtitle}
          </p>
          <p className="type-body-md mbs-4 leading-relaxed text-white/85">
            {description}
          </p>

          <ul className="mbs-6 space-y-2.5">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="type-body-md flex items-start gap-2.5 text-white/90"
              >
                <CheckIcon
                  aria-hidden="true"
                  className="mbs-1 size-4 shrink-0 text-brand-soft"
                />
                <span>{capability}</span>
              </li>
            ))}
          </ul>

          <div className="type-body-sm mbs-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pbs-4 text-white/80">
            <span className="tabular-nums">
              {metaLabel}: <strong className="font-semibold text-white">{metaValue}</strong>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-brand-soft">
              {status}
              <StatusIcon aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
      </ImageBackdropCard>
    );
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-clip border border-hairline bg-background transition-colors duration-150 hover:border-charcoal",
        className,
      )}
    >
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="mbe-6 flex items-center justify-end">
          <span className="grid size-11 place-items-center border border-hairline bg-surface-page text-brand-deep">
            <Icon aria-hidden="true" className="size-5" />
          </span>
        </div>

        <h3 className="type-headline-md text-balance text-ink">{title}</h3>
        <p className="type-body-sm mbs-1.5 font-medium text-brand-deep">
          {subtitle}
        </p>
        <p className="type-body-md mbs-4 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul className="mbs-6 space-y-2.5">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="type-body-md flex items-start gap-2.5 text-ink"
            >
              <CheckIcon
                aria-hidden="true"
                className="mbs-1 size-4 shrink-0 text-brand"
              />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="type-body-sm flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-surface-band px-6 py-3.5 text-caption lg:px-8">
        <span className="tabular-nums">
          {metaLabel}: <strong className="font-semibold text-ink">{metaValue}</strong>
        </span>
        <span className="flex items-center gap-1.5 font-semibold text-brand-deep">
          {status}
          <StatusIcon aria-hidden="true" className="size-4" />
        </span>
      </div>
    </article>
  );
}
