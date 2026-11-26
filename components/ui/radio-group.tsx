import {
  Radio as UiRadio,
  RadioGroup as UiRadioGroup,
  RadioIndicator as UiRadioIndicator,
} from "@ui-sdk/react/radio";
import type * as React from "react";
import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiRadioGroup> & { className?: string }) {
  return <UiRadioGroup className={cn("grid gap-2", className)} {...props} />;
}

function Radio({
  className,
  ...props
}: React.ComponentProps<typeof UiRadio> & { className?: string }) {
  return (
    <UiRadio
      className={cn(
        "grid size-4 shrink-0 place-items-center rounded-full border border-current/45 transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        "data-[checked]:border-current",
        "data-[invalid]:border-destructive",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function RadioIndicator({
  className,
  ...props
}: React.ComponentProps<typeof UiRadioIndicator> & { className?: string }) {
  return (
    <UiRadioIndicator
      className={cn(
        "size-1.5 rounded-full bg-current transition-[opacity,transform] duration-150",
        "data-[starting-style]:scale-50 data-[starting-style]:opacity-0",
        "data-[ending-style]:scale-50 data-[ending-style]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

export { Radio, RadioGroup, RadioIndicator };
