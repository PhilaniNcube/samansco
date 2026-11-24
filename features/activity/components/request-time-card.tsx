import { connection } from "next/server";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * `await connection()` opts this component into request-time rendering.
 * Everything outside its Suspense boundary still comes from the static shell.
 */
export async function RequestTimeCard() {
  await connection();

  const renderedAt = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(new Date());

  return (
    <Card className="h-full justify-between gap-5">
      <CardHeader>
        <Badge variant="outline" className="w-fit font-mono text-[11px]">
          connection()
        </Badge>
        <CardTitle className="mt-2">Request-time hole</CardTitle>
        <CardDescription className="leading-relaxed">
          This card renders on every request. The header, hero, and cached feed
          around it do not.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border bg-muted/40 p-4">
          <p className="text-xs text-muted-foreground">Server time (UTC)</p>
          <p className="font-mono text-2xl tracking-tight tabular-nums">
            {renderedAt}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function RequestTimeCardSkeleton() {
  return (
    <Card className="h-full justify-between gap-5" aria-hidden="true">
      <CardHeader>
        <span className="h-5 w-24 animate-pulse rounded-md bg-muted" />
        <div className="mt-2 h-5 w-40 animate-pulse rounded bg-muted" />
        <div className="h-3.5 w-full animate-pulse rounded bg-muted" />
        <div className="h-3.5 w-2/3 animate-pulse rounded bg-muted" />
      </CardHeader>
      <CardContent>
        <div className="h-[4.75rem] animate-pulse bg-muted/60" />
      </CardContent>
    </Card>
  );
}
