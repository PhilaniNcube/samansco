# samansco

A Next.js App Router starter with **Cache Components**, **[UI SDK](https://ui-sdk.dev/docs/react)** behaviors, **shadcn/ui** theming, and **Tailwind CSS v4**.

The goal: a prerendered shell for every route, request-time holes that stream in, and accessible interactions without writing keyboard, focus, and ARIA code by hand.

## Stack

| Piece | What it does here |
| --- | --- |
| Next.js 16.4 (App Router, Turbopack) | Routing, Server Components, Cache Components, `partialPrefetching` |
| React 19 | Server Components and client leaves |
| `@ui-sdk/react` + `@ui-sdk/core` | Unstyled, accessible behavior for Dialog, Select, Tabs, Switch, Accordion, Tooltip, Input, Field, Button |
| shadcn/ui (`base-nova` preset) | Design tokens, `cn()`, `components.json`, and the shadcn CLI |
| Tailwind CSS v4 | Utilities mapped to the shadcn tokens |
| `next-themes` | Class-based light/dark mode |

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Other scripts:

```bash
npm run build      # prerender check: every route must produce a shell
npm run start      # serve the production build
npm run lint
npm run typecheck
npm run email:dev  # React Email preview for transactional mail (port 3001)
```

## What to look at first

| Path | Why |
| --- | --- |
| `next.config.ts` | `cacheComponents: true` and `partialPrefetching: true` |
| `app/page.tsx` | Hero, static feature grid, and a `<Suspense>` boundary around the cached feed |
| `features/activity/activity-queries.ts` | `'use cache'` + `cacheLife('minutes')` + `cacheTag('activity')` |
| `features/activity/components/activity-feed.tsx` | Async Server Component and its sibling skeleton |
| `features/activity/components/request-time-card.tsx` | `await connection()` + Suspense: a per-request hole beside cached content |
| `features/playground/components/playground.tsx` | Client leaf using UI SDK parts with real state |
| `components/ui/*` | shadcn-shaped wrappers around UI SDK parts |
| `app/globals.css` | `@layer ui-sdk;`, shadcn tokens, and the few behavior styles |

## How Cache Components is wired

`create-next-app --cache-components` enabled the flag and generated the type helpers. The starter keeps the page synchronous and pushes async work behind Suspense:

```tsx
// app/page.tsx
<Suspense fallback={<ActivityFeedSkeleton />}>
  <ActivityFeed />
</Suspense>
```

```ts
// features/activity/activity-queries.ts
export const getRecentActivity = cache(async () => {
  'use cache'
  cacheLife('minutes')
  cacheTag('activity')
  return db.activity.findMany()
})
```

- Sync content and cached output prerender into the route's **static shell**.
- Anything that reads request data (`cookies()`, `headers()`, `params`, `searchParams`) goes inside a Suspense boundary or a cached function.
- The request-time clock card calls `await connection()`, which is the escape hatch for work that must run on every request. The route shows as `◐` in the build output: shell plus a dynamic hole.
- When a mutation lands, call `updateTag('activity')` from the Server Action in the same feature folder to refresh readers immediately.

The build is the check: `npm run build` fails when async work sits outside a Suspense boundary.

## The UI SDK layer

UI SDK parts are unstyled and ship behavior only. Each part renders a `data-slot` and state attributes such as `data-open`, `data-checked`, `data-highlighted`, `data-pending`, or a bare `data-selected`.

`components/ui/` wraps the parts with `class-variance-authority` and the shadcn tokens. For example:

```tsx
// components/ui/switch.tsx
<UiSwitch className="... data-[checked]:bg-primary">
  <SwitchThumb className="... data-[checked]:translate-x-4" />
</UiSwitch>
```

Three conventions matter:

1. **`@layer ui-sdk;` stays first** in `app/globals.css` so Tailwind utilities beat the behavior CSS ui-sdk injects at runtime.
2. **`@ui-sdk/core/web.css` is intentionally not imported.** It is a full default theme and would fight the shadcn tokens. The wrappers own the look instead.
3. **The selected tab is a bare `data-selected` attribute**, so Tailwind uses `data-[selected]:…`, not shadcn's `data-selected:…` variant.

To add a component, read `node_modules/@ui-sdk/react/docs/llms.txt`, then the component page under `node_modules/@ui-sdk/react/docs/components/`. Import each part from its own entry (`@ui-sdk/react/dialog`, not the package root).

## shadcn/ui

`components.json` is configured with the `base-nova` preset and CSS variables. The shadcn CLI can add presentational pieces beside the UI SDK wrappers:

```bash
npx shadcn@latest add separator
```

For controls UI SDK already ships, extend the wrapper in `components/ui/` instead of adding a second primitive library. The shadcn CLI's base is Base UI; UI SDK owns the interactive primitives here.

Design tokens live in `app/globals.css` (`--primary`, `--muted`, `--radius`, …). Change them there and both the shadcn components and the UI SDK wrappers follow. Dark mode is the `.dark` class, set by `next-themes`.

## Project structure

```text
app/
  layout.tsx            shell, fonts, theme provider
  page.tsx              landing page + Suspense boundary
  components/page.tsx   component gallery
  not-found.tsx
  globals.css           ui-sdk layer, shadcn tokens, base styles
components/
  site-header.tsx
  site-footer.tsx
  theme-provider.tsx
  theme-toggle.tsx
  ui/                   UI SDK wrappers styled with shadcn tokens
features/
  activity/             cached query + streamed feed
  playground/           client-side demo and gallery
lib/utils.ts            cn()
```

## Notes

- UI SDK is in public beta (`0.1.0-beta.x`). Watch its changelog before upgrading, and keep `@ui-sdk/react` and `@ui-sdk/core` on the same version.
- `AGENTS.md` points coding agents at the UI SDK docs that ship in `node_modules`.
- The activity data is sample data. Replace `getRecentActivity` with your data source and keep the tag for invalidation.
