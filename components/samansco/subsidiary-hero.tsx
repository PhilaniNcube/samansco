import Link from "next/link";
import type * as React from "react";
import { Section } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

export type SubsidiaryHeroProps = {
  division: string;
  pill: string;
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

/**
 * Compact subsidiary hero used by the four operating-company pages: breadcrumb
 * and division pill above a two-column headline, with a technical panel on the
 * right. Unlike the group hero it sits on the white canvas, not photography.
 */
export function SubsidiaryHero({
  division,
  pill,
  kicker,
  title,
  description,
  actions,
  aside,
  className,
}: SubsidiaryHeroProps) {
  return (
    <Section tone="white" className={cn("border-b border-hairline/60", className)}>
      <div className="shell py-12 lg:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="type-code flex items-center gap-1.5 text-caption"
          >
            <Link href="/" className="transition-colors hover:text-ink">
              Samansco Group
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-brand-deep">{division}</span>
          </nav>

          <span className="type-code inline-flex items-center gap-2 rounded-full bg-surface-band px-3 py-1 text-[10px] whitespace-nowrap text-ink sm:text-xs">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand"
            />
            {pill}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start lg:col-span-7">
            {kicker ? <div className="mb-4">{kicker}</div> : null}
            <h1 className="type-display max-w-3xl text-balance text-ink">
              {title}
            </h1>
            {description ? (
              <p className="type-body-lg mt-5 max-w-2xl leading-relaxed text-muted-foreground">
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
      </div>
    </Section>
  );
}
