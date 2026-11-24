import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-5 px-6 pb-24 pt-[calc(var(--header-height)+6rem)] text-center">
      <p className="font-mono text-xs tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        This route hasn&apos;t been built
      </h1>
      <p className="text-sm leading-relaxed text-muted-foreground">
        The page you asked for doesn&apos;t exist yet. Start from the components
        gallery or head back home.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Button render={<Link href="/" />}>Back home</Button>
        <Button variant="outline" render={<Link href="/components" />}>
          Components
        </Button>
      </div>
    </div>
  );
}
