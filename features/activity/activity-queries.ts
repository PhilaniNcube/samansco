import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { cache } from "react";

export type ActivityKind = "deploy" | "merge" | "review" | "agent";

export type Activity = {
  id: string;
  actor: string;
  action: string;
  target: string;
  meta: string;
  kind: ActivityKind;
};

const activity: Activity[] = [
  {
    id: "act_01",
    actor: "Maya",
    action: "shipped",
    target: "cache-components",
    meta: "production · 2 minutes ago",
    kind: "deploy",
  },
  {
    id: "act_02",
    actor: "Sam",
    action: "merged",
    target: "#184 — Stream the shell",
    meta: "main · 18 minutes ago",
    kind: "merge",
  },
  {
    id: "act_03",
    actor: "Priya",
    action: "reviewed",
    target: "Dialog composition",
    meta: "changes requested · 41 minutes ago",
    kind: "review",
  },
  {
    id: "act_04",
    actor: "Agent",
    action: "scaffolded",
    target: "ui-sdk wrappers",
    meta: "automated · 1 hour ago",
    kind: "agent",
  },
];

/**
 * Sample query. The `use cache` directive prerenders this result into the
 * route's static shell. Swap the body for a database or fetch call and keep
 * the tag so a Server Action can call `updateTag("activity")`.
 */
export const getRecentActivity = cache(async (): Promise<Activity[]> => {
  "use cache";
  cacheLife("minutes");
  cacheTag("activity");

  // Stand-in for a slow data source so the streaming boundary is visible.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return activity;
});
