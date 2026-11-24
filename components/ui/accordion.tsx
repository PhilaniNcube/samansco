import {
  Accordion as UiAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Accordion(props: React.ComponentProps<typeof UiAccordion>) {
  return <UiAccordion {...props} />;
}

function AccordionSection({
  className,
  ...props
}: React.ComponentProps<typeof AccordionItem> & { className?: string }) {
  return (
    <AccordionItem
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionSectionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionTrigger> & { className?: string }) {
  const content = children as React.ReactNode;

  return (
    <AccordionHeader className="flex">
      <AccordionTrigger
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-colors outline-none hover:text-foreground/80",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "[&[data-open]_svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {content}
        <ChevronDownIcon
          className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200"
          aria-hidden="true"
        />
      </AccordionTrigger>
    </AccordionHeader>
  );
}

function AccordionSectionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPanel> & { className?: string }) {
  const content = children as React.ReactNode;

  return (
    <AccordionPanel
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      <div className="pb-4">{content}</div>
    </AccordionPanel>
  );
}

export {
  Accordion,
  AccordionSection,
  AccordionSectionContent,
  AccordionSectionTrigger,
};
