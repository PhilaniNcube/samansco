"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/samansco/mobile-nav";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="shell flex h-16 items-center gap-4 lg:h-18 lg:gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2"
        >
          <Image
            src="/images/samansco-logo.png"
            alt="Samansco Group"
            width={826}
            height={254}
            priority
            className="h-7 w-auto lg:h-8"
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 lg:ml-4 lg:flex"
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
                  "type-label relative rounded-md px-3 py-2 transition-colors",
                  active ? "text-brand-deep" : "text-muted-foreground hover:text-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-brand"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/contact"
            className="type-label inline-flex items-center rounded-lg bg-brand-deep px-4 py-2.5 font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
