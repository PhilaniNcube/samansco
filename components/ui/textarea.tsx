import { Textarea as UiTextarea } from "@ui-sdk/react/textarea";
import type * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentProps<typeof UiTextarea> & {
  className?: string;
};

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <UiTextarea
      className={cn(
        "min-bs-28 w-full resize-y rounded-lg border border-input bg-card px-4 py-3 text-base text-ink transition-colors",
        "placeholder:text-caption",
        "focus-visible:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive data-[invalid]:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
export type { TextareaProps };
