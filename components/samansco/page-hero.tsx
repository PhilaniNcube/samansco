import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { cn } from "@/lib/utils";

export type HeroBreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageHeroProps = {
  image: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "cinematic" | "division" | "compact";
  scrim?: "cinematic" | "deep" | "dusk" | "emerald";
  gridVariant?: "vooma" | "corridor" | "structural";
  titleScale?: "hero" | "compact";
  breadcrumb?: HeroBreadcrumbItem[];
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

const sizeClasses: Record<NonNullable<PageHeroProps["size"]>, string> = {
  cinematic: "min-bs-[100dvh]",
  division: "min-bs-[clamp(36rem,82dvh,52rem)]",
  compact: "min-bs-[clamp(26rem,58dvh,38rem)]",
};

const bottomScrimClasses: Record<NonNullable<PageHeroProps["scrim"]>, string> = {
  cinematic:
    "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.82)_28%,oklch(0.18_0.03_264/0.2)_52%,transparent_72%)]",
  deep: "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.86)_34%,oklch(0.18_0.03_264/0.24)_58%,transparent_76%)]",
  dusk: "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.78)_30%,oklch(0.18_0.03_264/0.18)_54%,transparent_74%)]",
  emerald:
    "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.20_0.04_175/0.84)_32%,oklch(0.18_0.03_200/0.22)_56%,transparent_76%)]",
};

function HeroGridOverlay({
  variant = "vooma",
}: {
  variant?: NonNullable<PageHeroProps["gridVariant"]>;
}) {
  if (variant === "corridor") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <g stroke="white" strokeOpacity="0.09" strokeWidth="1" fill="none">
          <line x1="120" y1="0" x2="120" y2="900" />
          <line x1="280" y1="0" x2="280" y2="900" />
          <line x1="1140" y1="0" x2="1140" y2="900" />
          <line x1="680" y1="900" x2="980" y2="0" />
          <line x1="880" y1="900" x2="1180" y2="0" />
          <line x1="1080" y1="900" x2="1380" y2="0" />
        </g>
      </svg>
    );
  }

  if (variant === "structural") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <g stroke="white" strokeOpacity="0.09" strokeWidth="1" fill="none">
          <line x1="160" y1="0" x2="160" y2="900" />
          <line x1="480" y1="0" x2="480" y2="900" />
          <line x1="960" y1="0" x2="960" y2="900" />
          <line x1="1280" y1="0" x2="1280" y2="900" />
          <line x1="940" y1="900" x2="1220" y2="0" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <g stroke="white" strokeOpacity="0.09" strokeWidth="1" fill="none">
        <line x1="108" y1="0" x2="108" y2="900" />
        <line x1="216" y1="0" x2="216" y2="900" />
        <line x1="348" y1="0" x2="348" y2="900" />
        <line x1="492" y1="0" x2="492" y2="900" />
        <line x1="760" y1="900" x2="1020" y2="0" />
        <line x1="920" y1="900" x2="1190" y2="0" />
        <line x1="1080" y1="900" x2="1360" y2="0" />
      </g>
    </svg>
  );
}

/**
 * Full-bleed photographic hero bleeding to y = 0 behind a borderless header,
 * anchored cleanly in the lower horizon with crisp display typography.
 */
export function PageHero({
  image,
  imageAlt,
  imageClassName,
  priority = false,
  size = "division",
  scrim = "cinematic",
  gridVariant = "vooma",
  titleScale = "hero",
  breadcrumb,
  title,
  description,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-x-clip bg-ink text-white",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex w-full flex-col",
          sizeClasses[size],
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className={cn("object-cover", imageClassName)}
        />

        {/* Subtle top navigation scrim keeps white header links legible */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.18_0.03_264/0.65)_0%,oklch(0.18_0.03_264/0.18)_18%,transparent_34%)]"
        />

        {/* Lower-horizon scrim preserves open sky/field photography above */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            bottomScrimClasses[scrim],
          )}
        />

        <HeroGridOverlay variant={gridVariant} />

        <div
          className="shell relative z-10 flex flex-1 flex-col justify-between gap-10"
          style={{
            paddingBlockStart: "calc(var(--header-height) + 1.5rem)",
            paddingBlockEnd: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          {breadcrumb?.length ? (
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-white/80"
            >
              {breadcrumb.map((item, index) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="rounded-[2px] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : (
            <div />
          )}

          <div className="mbs-auto flex flex-col items-start">
            <h1
              className={cn(
                "hero-reveal max-w-5xl text-balance text-white",
                titleScale === "compact"
                  ? "type-hero-display-compact"
                  : "type-hero-display",
              )}
            >
              {title}
            </h1>

            {description ? (
              <p className="type-body-md hero-reveal-delay-1 mbs-5 max-w-[58ch] leading-relaxed text-white/85">
                {description}
              </p>
            ) : null}

            {actions ? (
              <div className="hero-reveal-delay-2 mbs-7 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Signature two-piece CTA: crisp rectangular label cap + separated
 * square arrow/icon cap in Samansco Brand Red.
 */
export function HeroSplitAction({
  href,
  label,
  icon,
  className,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}) {
  const isHash = href.startsWith("#");
  const sharedClass = cn(
    "group inline-flex items-stretch gap-1.5 rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white",
    className,
  );

  const inner = (
    <>
      <span className="inline-flex h-12 items-center rounded-[2px] bg-brand px-6 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-[var(--ease-out)] group-active:scale-[0.98] [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-brand-deep sm:h-13">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="grid size-12 shrink-0 place-items-center rounded-[2px] bg-brand text-white transition-[transform,background-color] duration-150 ease-[var(--ease-out)] group-active:scale-[0.98] [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-brand-deep sm:size-13 [&_svg]:size-4"
      >
        <span className="inline-flex motion-safe:transition-transform motion-safe:duration-150 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5">
          {icon}
        </span>
      </span>
    </>
  );

  if (isHash) {
    return (
      <a href={href} className={sharedClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClass}>
      {inner}
    </Link>
  );
}
