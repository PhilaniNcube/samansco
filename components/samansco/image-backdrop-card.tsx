import Image from "next/image";
import type * as React from "react";
import { cn } from "@/lib/utils";

type Scrim = "ink" | "deep" | "emerald";

const scrimClasses: Record<Scrim, string> = {
  ink: "bg-[linear-gradient(to_top,oklch(0.14_0.025_264/0.96)_0%,oklch(0.16_0.025_264/0.82)_48%,oklch(0.16_0.025_264/0.46)_100%)]",
  deep: "bg-[linear-gradient(to_top,oklch(0.13_0.025_264/0.98)_0%,oklch(0.15_0.025_264/0.88)_56%,oklch(0.16_0.025_264/0.58)_100%)]",
  emerald:
    "bg-[linear-gradient(to_top,oklch(0.15_0.03_200/0.97)_0%,oklch(0.18_0.035_185/0.84)_50%,oklch(0.16_0.03_220/0.48)_100%)]",
};

export type ImageBackdropCardProps = {
  image: string;
  imageAlt: string;
  imageClassName?: string;
  sizes?: string;
  scrim?: Scrim;
  interactive?: boolean;
  id?: string;
  as?: "article" | "div";
  "aria-labelledby"?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Full-bleed photographic backdrop card with directional oklch scrims,
 * hairline borders, and pointer-fine / reduced-motion-safe media zoom.
 */
export function ImageBackdropCard({
  image,
  imageAlt,
  imageClassName,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  scrim = "ink",
  interactive = false,
  id,
  as: Component = "article",
  "aria-labelledby": ariaLabelledBy,
  className,
  children,
}: ImageBackdropCardProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "photo-card relative flex flex-col overflow-clip border border-white/15 bg-ink text-white",
        interactive &&
          "photo-card-interactive motion-safe:transition-[transform,border-color] motion-safe:duration-200 ease-out has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-brand",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={sizes}
        className={cn(
          "photo-card-media object-cover motion-safe:transition-transform motion-safe:duration-500 ease-out",
          imageClassName,
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          scrimClasses[scrim],
        )}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.14_0.025_264/0.55)_0%,transparent_34%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </Component>
  );
}
