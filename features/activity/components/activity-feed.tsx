import {
  BotIcon,
  GitMergeIcon,
  RocketIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getRecentActivity, type ActivityKind } from "@/features/activity/activity-queries";

const icons: Record<ActivityKind, typeof RocketIcon> = {
  deploy: RocketIcon,
  merge: GitMergeIcon,
  review: SearchIcon,
  agent: BotIcon,
};

export async function ActivityFeed() {
  const items = await getRecentActivity();

  return (
    <Card className="gap-0 overflow-hidden py-0">
      <ul className="divide-y divide-border">
        {items.map((item) => {
          const Icon = icons[item.kind];

          return (
            <li key={item.id} className="flex items-center gap-4 px-5 py-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">
                  <span className="font-medium">{item.actor}</span>{" "}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  <span className="font-medium">{item.target}</span>
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.meta}
                </p>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                {item.kind}
              </Badge>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export function ActivityFeedSkeleton() {
  return (
    <Card className="gap-0 overflow-hidden py-0" aria-hidden="true">
      <div className="divide-y divide-border">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="flex items-center gap-4 px-5 py-4">
            <span className="size-8 shrink-0 animate-pulse rounded-full bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
            </div>
            <span className="h-5 w-16 animate-pulse rounded-md bg-muted" />
          </div>
        ))}
      </div>
    </Card>
  );
}
