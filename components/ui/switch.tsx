import { Switch as UiSwitch, SwitchThumb } from "@ui-sdk/react/switch";
import type * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = React.ComponentProps<typeof UiSwitch> & {
  className?: string;
};

function Switch({ className, ...props }: SwitchProps) {
  return (
    <UiSwitch
      className={cn(
        "inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent bg-input p-0.5 shadow-xs transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-[checked]:bg-primary",
        "data-[invalid]:border-destructive",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchThumb
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform",
          "data-[checked]:translate-x-4",
        )}
      />
    </UiSwitch>
  );
}

export { Switch };
export type { SwitchProps };
