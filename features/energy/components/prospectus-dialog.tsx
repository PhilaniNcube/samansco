"use client";

import { ArrowRightIcon, FileDownIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const documentSpecs = [
  { label: "File Format", value: "Secured PDF (14.2 MB)" },
  { label: "Version", value: "v4.8 Institutional (Jan 2025)" },
];

/**
 * Institutional PPA prospectus: the mobile design opens this brief as a
 * disclosure sheet, so the UI SDK Dialog supplies the modal behaviour.
 */
export function ProspectusDialog() {
  return (
    <Dialog>
      <DialogTrigger
        aria-haspopup="dialog"
        className="h-12 rounded-lg border-hairline px-5 text-base whitespace-normal"
      >
        Download PPA Prospectus
        <FileDownIcon aria-hidden="true" className="size-4" />
      </DialogTrigger>

      <DialogContent className="rounded-lg border-hairline shadow-none">
        <DialogHeader className="gap-2">
          <span className="type-eyebrow text-brand-deep">Document Brief</span>
          <DialogTitle className="type-headline-sm text-ink">
            Institutional PPA Prospectus 2025
          </DialogTitle>
          <DialogDescription className="type-body-sm leading-relaxed text-muted-foreground">
            Comprehensive breakdown of SEPCO’s wheeling tariffs, grid intertie
            technical specifications, dispatch security, and SAPP market
            liquidity frameworks.
          </DialogDescription>
        </DialogHeader>

        <dl className="divide-y divide-hairline border-y border-hairline">
          {documentSpecs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <dt className="type-code text-caption">{spec.label}</dt>
              <dd className="type-code text-right text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <DialogFooter>
          <Button
            className="w-full sm:w-auto"
            render={<Link href="/contact" />}
          >
            Request the Secured PDF
            <ArrowRightIcon aria-hidden="true" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
