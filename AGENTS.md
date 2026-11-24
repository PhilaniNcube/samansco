<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-sdk-rules -->

## UI SDK

Before using `@ui-sdk/react`, read `node_modules/@ui-sdk/react/docs/llms.txt`. To build a new component from behaviors, search `node_modules/@ui-sdk/react/docs/core.md` by heading and read `rendering.md` next to it.

- Prefer the wrappers in `components/ui/`. They style UI SDK parts with the shadcn tokens in `app/globals.css`.
- Do not add a second primitive library for a control UI SDK already ships (Dialog, Select, Tabs, Switch, Accordion, Tooltip, ...).
- Styling hooks are `data-slot` and state attributes (`data-open`, `data-checked`, `data-highlighted`). The selected tab is a bare `data-selected`, so use `data-[selected]:` with Tailwind.
- `@ui-sdk/core/web.css` is intentionally not imported. The wrappers own the look; keep `@layer ui-sdk;` as the first line of `app/globals.css`.

<!-- END:ui-sdk-rules -->
