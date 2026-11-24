import {
  Select,
  SelectContent as UiSelectContent,
  SelectItem as UiSelectItem,
  SelectItemIndicator,
  SelectTrigger as UiSelectTrigger,
  SelectValue as UiSelectValue,
} from "@ui-sdk/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UiSelectTrigger> & { className?: string }) {
  const content = children as React.ReactNode;

  return (
    <UiSelectTrigger
      className={cn(
        "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none",
        "data-[placeholder]:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {content}
      <ChevronDownIcon className="size-4 opacity-50" aria-hidden="true" />
    </UiSelectTrigger>
  );
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof UiSelectValue> & { className?: string }) {
  return (
    <UiSelectValue
      className={cn("truncate data-[placeholder]:text-muted-foreground", className)}
      {...props}
    />
  );
}

function SelectContent({
  className,
  ...props
}: React.ComponentProps<typeof UiSelectContent> & { className?: string }) {
  return (
    <UiSelectContent
      className={cn(
        "z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "transition-[opacity,scale] duration-150",
        "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UiSelectItem> & { className?: string }) {
  const content = children as React.ReactNode;

  return (
    <UiSelectItem
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      {content}
      <SelectItemIndicator className="absolute right-2 flex size-4 items-center justify-center">
        <CheckIcon className="size-4" aria-hidden="true" />
      </SelectItemIndicator>
    </UiSelectItem>
  );
}

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
};
