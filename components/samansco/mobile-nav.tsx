"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Mobile navigation sheet. UI SDK Dialog supplies the focus trap, escape
 * handling and inert background; the markup and styling are ours.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-hairline bg-card text-ink focus-visible:ring-2 focus-visible:ring-charcoal/30 lg:hidden"
      >
        <MenuIcon aria-hidden="true" className="size-5" />
      </DialogTrigger>

      <DialogContent className="inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[86%] max-w-sm rounded-none border-y-0 border-r-0 border-l border-hairline p-0">
        <div className="border-b border-hairline px-6 py-5">
          <DialogTitle className="type-eyebrow text-caption">
            Samansco Group
          </DialogTitle>
          <DialogDescription className="sr-only">
            Division navigation and group contact links.
          </DialogDescription>
        </div>

        <nav aria-label="Mobile" className="flex flex-col px-3 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="type-label rounded-md px-3 py-3 text-ink transition-colors hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-hairline p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="type-label inline-flex w-full items-center justify-center rounded-lg bg-charcoal px-5 py-3 font-semibold text-white transition-colors hover:bg-ink"
          >
            Contact Group HQ
          </Link>
          <p className="type-code mt-4 text-caption">SINCE 1982 · SOUTHERN AFRICA</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
