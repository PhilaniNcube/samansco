import {
  Tooltip as UiTooltip,
  TooltipContent as UiTooltipContent,
  TooltipTrigger,
} from "@ui-sdk/react/tooltip";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Tooltip(props: React.ComponentProps<typeof UiTooltip>) {
  return <UiTooltip {...props} />;
}

function TooltipContent({
  className,
  ...props
}: React.ComponentProps<typeof UiTooltipContent> & { className?: string }) {
  return (
    <UiTooltipContent
      sideOffset={6}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-2.5 py-1.5 text-xs text-primary-foreground shadow-md",
        "transition-[opacity,scale] duration-150",
        "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

export { Tooltip, TooltipContent, TooltipTrigger };
