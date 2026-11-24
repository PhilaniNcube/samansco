import {
  Tabs as UiTabs,
  TabsList as UiTabsList,
  TabsPanel,
  TabsTab,
} from "@ui-sdk/react/tabs";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Tabs(props: React.ComponentProps<typeof UiTabs>) {
  return <UiTabs {...props} />;
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof UiTabsList> & { className?: string }) {
  return (
    <UiTabsList
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsTab> & { className?: string }) {
  return (
    <TabsTab
      className={cn(
        "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPanel> & { className?: string }) {
  return (
    <TabsPanel
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
