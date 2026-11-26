import { Input as UiInput } from "@ui-sdk/react/input";
import type * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<typeof UiInput> & {
  className?: string;
};

function Input({ className, ...props }: InputProps) {
  return (
    <UiInput
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-input bg-card px-4 py-2 text-sm text-ink transition-colors outline-none",
        "placeholder:text-caption",
        "selection:bg-primary/15 selection:text-ink",
        "focus-visible:border-charcoal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive data-[invalid]:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
