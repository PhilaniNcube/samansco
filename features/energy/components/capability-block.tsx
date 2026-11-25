import { CheckIcon, type LucideIcon } from "lucide-react";
import { ImageBackdropCard } from "@/components/samansco/image-backdrop-card";
import { cn } from "@/lib/utils";

export type CapabilityBlockProps = {
  icon: LucideIcon;
  scope: string;
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
 * One commercial utility capability: scope tag, service definition, operating
 * checklist and a technical footer strip. Supports an optional full-background
 * photographic mode.
 */
export function CapabilityBlock({
  icon: Icon,
  scope,
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
          <div className="mbe-6 flex items-start justify-between gap-3">
            <span className="grid size-11 place-items-center border border-white/20 bg-ink/60 text-brand-soft backdrop-blur-sm">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <span className="type-code rounded border border-white/20 bg-ink/60 px-2 py-1 text-white/85 backdrop-blur-sm">
              {scope}
            </span>
          </div>

          <h3 className="type-headline-md text-balance text-white">{title}</h3>
          <p className="type-code mbs-2 text-brand-soft">{subtitle}</p>
          <p className="type-body-sm mbs-4 leading-relaxed text-white/80">
            {description}
          </p>

          <ul className="mbs-6 space-y-2.5">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="type-body-sm flex items-start gap-2.5 text-white/90"
              >
                <CheckIcon
                  aria-hidden="true"
                  className="mbs-0.5 size-4 shrink-0 text-brand-soft"
                />
                {capability}
              </li>
            ))}
          </ul>
        </div>

        <div className="type-code mbs-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/15 bg-ink/75 px-6 py-3.5 text-white/75 backdrop-blur-sm lg:px-8">
          <span className="uppercase">
            {metaLabel}: <span className="text-white">{metaValue}</span>
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-brand-soft uppercase">
            {status}
            <StatusIcon aria-hidden="true" className="size-4" />
          </span>
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
        <div className="mbe-6 flex items-start justify-between gap-3">
          <span className="grid size-11 place-items-center border border-hairline bg-surface-page text-brand-deep">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <span className="type-code rounded border border-hairline bg-surface-page px-2 py-1 text-caption">
            {scope}
          </span>
        </div>

        <h3 className="type-headline-md text-balance text-ink">{title}</h3>
        <p className="type-code mbs-2 text-brand-deep">{subtitle}</p>
        <p className="type-body-sm mbs-4 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul className="mbs-6 space-y-2.5">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="type-body-sm flex items-start gap-2.5 text-ink"
            >
              <CheckIcon
                aria-hidden="true"
                className="mbs-0.5 size-4 shrink-0 text-brand"
              />
              {capability}
            </li>
          ))}
        </ul>
      </div>

      <div className="type-code flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-surface-band px-6 py-3.5 text-caption lg:px-8">
        <span className="uppercase">
          {metaLabel}: <span className="text-ink">{metaValue}</span>
        </span>
        <span className="flex items-center gap-1.5 font-semibold text-brand-deep uppercase">
          {status}
          <StatusIcon aria-hidden="true" className="size-4" />
        </span>
      </div>
    </article>
  );
}
