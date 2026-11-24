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
  layout?: "bottom-split" | "bottom-aside";
  titleScale?: "hero" | "compact";
  breadcrumb?: HeroBreadcrumbItem[];
  statusPill?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  bottomBand?: React.ReactNode;
  className?: string;
};

const sizeClasses: Record<NonNullable<PageHeroProps["size"]>, string> = {
  cinematic: "min-bs-[clamp(38rem,88svh,56rem)]",
  division: "min-bs-[clamp(34rem,78svh,48rem)]",
  compact: "min-bs-[clamp(27rem,58svh,36rem)]",
};

const bottomScrimClasses: Record<NonNullable<PageHeroProps["scrim"]>, string> = {
  cinematic:
    "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.78)_36%,oklch(0.18_0.03_264/0.18)_70%,transparent_100%)]",
  deep: "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.86)_42%,oklch(0.18_0.03_264/0.28)_76%,transparent_100%)]",
  dusk: "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.18_0.03_264/0.72)_38%,oklch(0.18_0.03_264/0.16)_72%,transparent_100%)]",
  emerald:
    "bg-[linear-gradient(to_top,var(--ink)_0%,oklch(0.20_0.04_175/0.82)_42%,oklch(0.18_0.03_200/0.28)_76%,transparent_100%)]",
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
        <g stroke="white" strokeOpacity="0.11" strokeWidth="1" fill="none">
          <line x1="120" y1="0" x2="120" y2="900" />
          <line x1="280" y1="0" x2="280" y2="900" />
          <line x1="1140" y1="0" x2="1140" y2="900" />
          <line x1="680" y1="900" x2="980" y2="0" />
          <line x1="880" y1="900" x2="1180" y2="0" />
          <line x1="1080" y1="900" x2="1380" y2="0" />
          <line x1="0" y1="620" x2="1440" y2="620" strokeOpacity="0.07" />
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
        <g stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none">
          <line x1="160" y1="0" x2="160" y2="900" />
          <line x1="480" y1="0" x2="480" y2="900" />
          <line x1="960" y1="0" x2="960" y2="900" />
          <line x1="1280" y1="0" x2="1280" y2="900" />
          <line x1="940" y1="900" x2="1220" y2="0" />
          <line x1="0" y1="540" x2="1440" y2="540" strokeOpacity="0.06" />
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
      <g stroke="white" strokeOpacity="0.11" strokeWidth="1" fill="none">
        <line x1="108" y1="0" x2="108" y2="900" />
        <line x1="216" y1="0" x2="216" y2="900" />
        <line x1="348" y1="0" x2="348" y2="900" />
        <line x1="492" y1="0" x2="492" y2="900" />
        <line x1="760" y1="900" x2="1020" y2="0" />
        <line x1="920" y1="900" x2="1190" y2="0" />
        <line x1="1080" y1="900" x2="1360" y2="0" />
        <line x1="1240" y1="900" x2="1440" y2="260" />
      </g>
    </svg>
  );
}

/**
 * Editorial full-bleed photographic hero modeled after Vooma's bottom-anchored
 * layout, translucent architectural grid hairlines, and deep-ink proof band.
 */
export function PageHero({
  image,
  imageAlt,
  imageClassName,
  priority = false,
  size = "division",
  scrim = "cinematic",
  gridVariant = "vooma",
  layout = "bottom-split",
  titleScale = "hero",
  breadcrumb,
  statusPill,
  eyebrow,
  title,
  description,
  meta,
  actions,
  aside,
  bottomBand,
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

        {/* Top navigation scrim ensures crisp white header legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.18_0.03_264/0.84)_0%,oklch(0.18_0.03_264/0.34)_24%,transparent_48%)]"
        />

        {/* Bottom editorial typography scrim */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            bottomScrimClasses[scrim],
          )}
        />

        {/* Subtle left directional vignette for copy balance */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.18_0.03_264/0.58)_0%,oklch(0.18_0.03_264/0.22)_45%,transparent_80%)]"
        />

        <HeroGridOverlay variant={gridVariant} />

        <div
          className="shell relative z-10 flex flex-1 flex-col justify-between gap-10"
          style={{
            paddingBlockStart: "calc(var(--header-height) + 1.5rem)",
            paddingBlockEnd: "clamp(2.25rem, 4vw, 3.75rem)",
          }}
        >
          {(breadcrumb?.length || statusPill) ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              {breadcrumb?.length ? (
                <nav
                  aria-label="Breadcrumb"
                  className="type-code flex flex-wrap items-center gap-1.5 text-[11px] tracking-[0.08em] text-white/70 uppercase"
                >
                  {breadcrumb.map((item, index) => (
                    <span key={item.label} className="inline-flex items-center gap-1.5">
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
                <span />
              )}

              {statusPill ? (
                <div className="type-code inline-flex items-center gap-2 rounded-[2px] border border-white/15 bg-ink/55 px-3 py-1.5 text-[10px] tracking-[0.12em] text-white/90 uppercase backdrop-blur-sm sm:text-[11px]">
                  {statusPill}
                </div>
              ) : null}
            </div>
          ) : (
            <div />
          )}

          {layout === "bottom-aside" ? (
            <div className="mbs-auto grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="flex flex-col items-start lg:col-span-7">
                {eyebrow ? (
                  <p className="type-eyebrow mbe-3 flex items-center gap-2 text-white/80">
                    {eyebrow}
                  </p>
                ) : null}

                <h1
                  className={cn(
                    "max-w-3xl text-balance text-white",
                    titleScale === "compact"
                      ? "type-hero-display-compact"
                      : "type-hero-display",
                  )}
                >
                  {title}
                </h1>

                {description ? (
                  <p className="type-body-lg mbs-4 max-w-2xl leading-relaxed text-white/80">
                    {description}
                  </p>
                ) : null}

                {meta ? <div className="mbs-4">{meta}</div> : null}

                {actions ? (
                  <div className="mbs-7 flex flex-wrap items-center gap-3">
                    {actions}
                  </div>
                ) : null}
              </div>

              {aside ? <div className="lg:col-span-5">{aside}</div> : null}
            </div>
          ) : (
            <div className="mbs-auto flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="flex max-w-3xl flex-col items-start">
                {eyebrow ? (
                  <p className="type-eyebrow mbe-3 flex items-center gap-2 text-white/80">
                    {eyebrow}
                  </p>
                ) : null}

                <h1
                  className={cn(
                    "text-balance text-white",
                    titleScale === "compact"
                      ? "type-hero-display-compact"
                      : "type-hero-display",
                  )}
                >
                  {title}
                </h1>

                {description ? (
                  <p className="type-body-lg mbs-4 max-w-2xl leading-relaxed text-white/80">
                    {description}
                  </p>
                ) : null}

                {meta ? <div className="mbs-5">{meta}</div> : null}
              </div>

              {actions ? (
                <div className="flex shrink-0 flex-wrap items-center gap-3 lg:justify-end">
                  {actions}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {bottomBand}
    </section>
  );
}

/**
 * Vooma signature two-piece CTA: crisp rectangular label cap + separated
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
      <span className="inline-flex h-12 items-center rounded-[2px] bg-brand px-5 font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-150 group-hover:bg-brand-deep group-active:scale-[0.98] sm:h-13 sm:px-6">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="grid size-12 shrink-0 place-items-center rounded-[2px] bg-brand text-white transition-colors duration-150 group-hover:bg-brand-deep group-active:scale-[0.98] motion-safe:transition-[transform,background-color] sm:size-13 [&_svg]:size-4"
      >
        <span className="inline-flex motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5">
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

/**
 * Secondary dark-glass outlined rectangular button matching Vooma's crisp
 * rectilinear hero grammar.
 */
export const heroGhostActionClassName =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-white/30 bg-ink/45 px-5 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase backdrop-blur-sm hover:border-white/75 hover:bg-white/10 active:scale-[0.97] motion-safe:transition-[transform,background-color,border-color] motion-safe:duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:h-13 [&_svg]:size-4";

export function HeroGhostAction({
  href,
  children,
  icon,
  className,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  const isHash = href.startsWith("#");
  const sharedClass = cn(heroGhostActionClassName, className);

  if (isHash) {
    return (
      <a href={href} className={sharedClass}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClass}>
      {children}
      {icon}
    </Link>
  );
}

/**
 * Deep-ink bottom proof band seamlessly stitched below the hero photography,
 * inspired by Vooma's dark trust strip and hairline-bordered grid cells.
 */
export function HeroBand({
  heading,
  headingAside,
  children,
  columns = 4,
  className,
}: {
  heading: React.ReactNode;
  headingAside?: React.ReactNode;
  children: React.ReactNode;
  columns?: 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-t border-white/10 bg-ink text-white",
        className,
      )}
    >
      <div className="shell py-6 lg:py-8">
        <div
          className={cn(
            "mbe-5 flex flex-wrap items-center gap-2",
            headingAside ? "justify-between" : "justify-center text-center",
          )}
        >
          <p className="type-code text-[11px] tracking-[0.16em] text-white/75 uppercase">
            {heading}
          </p>
          {headingAside ? (
            <div className="type-code text-[11px] text-white/70">
              {headingAside}
            </div>
          ) : null}
        </div>

        <dl
          className={cn(
            "grid grid-cols-1 gap-3 sm:grid-cols-2",
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
          )}
        >
          {children}
        </dl>
      </div>
    </div>
  );
}

export function HeroBandCell({
  label,
  value,
  note,
  accent = false,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  note?: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-2 rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-4 lg:px-5",
        className,
      )}
    >
      <dt className="type-code text-[10px] tracking-[0.14em] text-white/60 uppercase">
        {label}
      </dt>
      <dd className="flex flex-col gap-1">
        <span
          className={cn(
            "type-headline-sm font-semibold",
            accent ? "text-brand-soft" : "text-white",
          )}
        >
          {value}
        </span>
        {note ? (
          <span className="type-body-sm text-xs leading-relaxed text-white/65">
            {note}
          </span>
        ) : null}
      </dd>
    </div>
  );
}
