import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ComponentGallery } from "@/features/playground/components/component-gallery";

export const metadata: Metadata = {
  title: "Components",
  description:
    "shadcn-styled wrappers around UI SDK behaviors: buttons, fields, selects, dialogs, tabs, tooltips, and accordions.",
};

export default function ComponentsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-[calc(var(--header-height)+3rem)] lg:pb-16 lg:pt-[calc(var(--header-height)+4rem)]">
      <div className="mb-10 flex max-w-2xl flex-col gap-3">
        <Badge variant="secondary" className="w-fit font-mono text-[11px]">
          components/ui
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          The starter kit
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Each file wraps UI SDK parts with Tailwind classes built from the
          shadcn tokens. Copy a wrapper, change its classes, or use the parts
          directly — the behavior stays the same.
        </p>
      </div>

      <ComponentGallery />
    </div>
  );
}
