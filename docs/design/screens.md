# Stitch design reference

Source project: **Samansco Group Web Platform** (`projects/462126253514983498`) in Google Stitch.
The design system export is [`design.md`](./design.md) — "Infrastructure Modernism".

## Screens

| Route | Desktop screen | Mobile screen | Notes |
| --- | --- | --- | --- |
| `/` | Samansco Group — Home (2560×8774) | Home (Mobile) (780×7924) | Photo hero, metric strip, four divisions, resource argument, footprint, CTA |
| `/industries` | Solar EPC & Supply (2560×9158) | Solar EPC & Supply (Mobile) | Three project photographs |
| `/energy` | Energy — Electricity Trading & Utility Retail (2560×7692) | Electricity Trading & Retail (Mobile) | No photography; ink panels and technical grids |
| `/maintenance` | Solar O&M & Asset Monitoring (2560×6544) | Solar O&M & Telemetry (Mobile) | Field photography |
| `/carbon` | Environmental Markets, I-RECs & ESG Advisory (2560×7668) | I-RECs & ESG Advisory (Mobile) | No photography |
| `/contact` | Group — Contact & Governance (2560×7336) | Contact & Governance (Mobile) | Map image, enquiry form, governance anchors |

Assets were downloaded from the Stitch exports into `public/images/`:
`industries-*.jpg`, `maintenance-*.jpg`, `contact-map.jpg`, `samansco-logo.png`.
The home hero uses the client-supplied photograph `home-hero-source.webp`
(`home-hero.jpg` is the original Stitch hero, kept for reference).

## Architecture

- **Tokens** — `app/globals.css` maps the design system onto shadcn tokens (`primary`, `muted`, `border`, …) plus brand tokens (`surface-page`, `surface-band`, `ink`, `charcoal`, `brand`, `hairline`, …), the type scale (`type-*` classes) and the page shell (`shell`, `section-y`).
- **Shared primitives** — `components/samansco/` holds the cross-page furniture: `Section`, `SectionHeading`, `Eyebrow`, `PageHero`, `SubsidiaryHero`, `DivisionCard`, `EngagementCta`, `ParameterPanel`, `SpecList`, `LegacyPill`, `DivisionChip`, `SpecChip`, `MobileNav`.
- **Sections** — every visual band of every page is its own component under `features/<page>/components/`, composed by the route in `app/<page>/page.tsx`.
- **Interaction** — controls are UI SDK parts wrapped in `components/ui/`: Button, Accordion, Tabs, Dialog, Select, Field/Input, Switch, Tooltip. Styling lives in the wrappers, not in the pages.
