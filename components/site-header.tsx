"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/samansco/mobile-nav";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

const HERO_ROUTES = new Set([
  "/",
  "/industries",
  "/energy",
  "/maintenance",
  "/carbon",
  "/contact",
]);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const syncScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, [pathname]);

  const hasHeroHeader = HERO_ROUTES.has(pathname);
  const isSolid = !hasHeroHeader || scrolled;

  return (
    <header
      data-scrolled={isSolid ? "true" : "false"}
      className={cn(
        "fixed inset-bs-0 inset-x-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200",
        isSolid
          ? "border-hairline bg-background/95 shadow-[0_1px_0_0_oklch(0.22_0.03_264/0.06)] backdrop-blur-md supports-[backdrop-filter]:bg-background/88"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="shell grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <Link
          href="/"
          className={cn(
            "flex w-fit shrink-0 items-center rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4",
            isSolid ? "focus-visible:outline-ink" : "focus-visible:outline-white",
          )}
        >
          <Image
            src="/images/samansco-logo.png"
            alt="Samansco Group"
            width={826}
            height={254}
            priority
            className={cn(
              "h-7 w-auto transition-[filter] duration-200 lg:h-8",
              !isSolid && "brightness-0 invert",
            )}
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center justify-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-[2px] px-3 py-2 font-mono text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
                  isSolid
                    ? active
                      ? "text-brand-deep focus-visible:outline-ink"
                      : "text-muted-foreground hover:text-ink focus-visible:outline-ink"
                    : active
                      ? "text-white focus-visible:outline-white"
                      : "text-white/75 hover:text-white focus-visible:outline-white",
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 inset-be-0.5 h-0.5 bg-brand"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-[2px] border px-4 py-2 font-mono text-xs font-medium tracking-[0.14em] uppercase active:scale-[0.97] motion-safe:transition-[transform,background-color,border-color,color] motion-safe:duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
              isSolid
                ? "border-brand-deep bg-brand-deep text-white hover:border-brand-strong hover:bg-brand-strong focus-visible:outline-ink"
                : "border-white/75 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink focus-visible:outline-white",
            )}
          >
            Contact
          </Link>
          <MobileNav transparent={!isSolid} />
        </div>
      </div>
    </header>
  );
}
