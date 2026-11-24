import {
  Dialog as UiDialog,
  DialogBackdrop,
  DialogClose as UiDialogClose,
  DialogContent as UiDialogContent,
  DialogDescription as UiDialogDescription,
  DialogTitle as UiDialogTitle,
  DialogTrigger as UiDialogTrigger,
} from "@ui-sdk/react/dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ClassName = { className?: string };

function Dialog(props: React.ComponentProps<typeof UiDialog>) {
  return <UiDialog {...props} />;
}

function DialogTrigger({
  className,
  unstyled = false,
  ...props
}: React.ComponentProps<typeof UiDialogTrigger> &
  ClassName & { unstyled?: boolean }) {
  return (
    <UiDialogTrigger
      className={
        unstyled
          ? className
          : cn(buttonVariants({ variant: "outline" }), className)
      }
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UiDialogContent> & ClassName) {
  const content = children as React.ReactNode;

  return (
    <>
      <DialogBackdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/50",
          "transition-opacity duration-150",
          "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        )}
      />
      <UiDialogContent
        className={cn(
          "fixed inset-0 z-50 m-auto flex h-fit max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg flex-col gap-5 overflow-y-auto overscroll-contain rounded-xl border bg-background p-6 shadow-lg outline-none",
          "transition-[opacity,scale] duration-150",
          "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
          "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
          className,
        )}
        {...props}
      >
        {content}
        <UiDialogClose
          aria-label="Close"
          className={cn(
            "absolute top-4 right-4 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground opacity-70 transition-[color,background-color,opacity] hover:bg-accent hover:text-accent-foreground hover:opacity-100",
            "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
          )}
        >
          <XIcon className="size-4" aria-hidden="true" />
        </UiDialogClose>
      </UiDialogContent>
    </>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogTitle> & ClassName) {
  return (
    <UiDialogTitle
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogDescription> & ClassName) {
  return (
    <UiDialogDescription
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

function DialogClose({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogClose> & ClassName) {
  return (
    <UiDialogClose
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
