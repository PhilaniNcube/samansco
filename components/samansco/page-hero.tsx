import Image from "next/image";
import type * as React from "react";
import { cn } from "@/lib/utils";

export type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "default" | "compact";
  priority?: boolean;
  className?: string;
};

/**
 * Division and group hero: full-bleed photography under an editorial ink
 * scrim, with an optional technical panel in the second column.
 */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  actions,
  aside,
  footer,
  size = "default",
  priority = false,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex w-full items-center overflow-hidden bg-charcoal",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
      />

      <div className="shell relative z-10 flex min-h-[560px] w-full items-center py-16 lg:min-h-[680px] lg:py-24">
        <div
          className={cn(
            "w-full items-center gap-10",
            aside && "grid lg:grid-cols-12 lg:gap-12",
          )}
        >
          <div
            className={cn(
              "flex flex-col items-start",
              aside ? "lg:col-span-7" : "max-w-3xl",
            )}
          >
            {eyebrow ? (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-brand-tint"
                />
                <span className="type-eyebrow whitespace-nowrap text-[10px] tracking-[0.08em] text-white sm:text-xs sm:tracking-[0.12em]">{eyebrow}</span>
              </div>
            ) : null}

            <h1
              className={cn(
                "type-display max-w-2xl text-balance text-white",
                size === "compact" ? "lg:text-[56px] lg:leading-[64px]" : undefined,
              )}
            >
              {title}
            </h1>

            {description ? (
              <p className="type-body-lg mt-6 max-w-xl leading-relaxed text-white/70">
                {description}
              </p>
            ) : null}

            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>

          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>

        {footer ? (
          <div className="mt-12 border-t border-white/15 pt-6">{footer}</div>
        ) : null}
      </div>
    </section>
  );
}
