import { Button as UiButton } from "@ui-sdk/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium active:scale-[0.98] motion-safe:transition-[transform,background-color,border-color,color] duration-150 ease-[var(--ease-out)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "data-pending:cursor-progress",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-brand-strong",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-ink",
        outline:
          "border border-hairline bg-transparent text-ink hover:border-charcoal hover:bg-muted",
        ghost: "text-ink hover:bg-muted",
        link: "text-brand-deep underline-offset-4 hover:text-brand-strong hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 px-6 text-base has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<typeof UiButton> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <UiButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
