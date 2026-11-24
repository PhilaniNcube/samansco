"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
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
export function MobileNav({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label="Open menu"
        unstyled
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-[2px] border transition-colors duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden",
          transparent
            ? "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/15 focus-visible:outline-white"
            : "border-hairline bg-card text-ink hover:border-charcoal focus-visible:outline-ink",
        )}
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
              className="type-label rounded-md px-3 py-3 text-ink transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mbs-auto border-t border-hairline p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="type-label inline-flex w-full items-center justify-center rounded-[2px] bg-charcoal px-5 py-3 font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Contact Group HQ
          </Link>
          <p className="type-code mbs-4 text-caption">SINCE 1982 · SOUTHERN AFRICA</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
