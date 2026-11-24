import { ArrowDownIcon, NetworkIcon, ShieldCheckIcon } from "lucide-react";
import { SubsidiaryHero } from "@/components/samansco/subsidiary-hero";
import { Button } from "@/components/ui/button";
import { ProspectusDialog } from "@/features/energy/components/prospectus-dialog";

const charterRows = [
  {
    label: "Corporate Entity",
    value: "Samansco Electric Power Company (SEPCO)",
    emphasis: true,
  },
  {
    label: "Regulatory Status",
    value: "Licensed Electricity Trader & Wheeling Aggregator",
  },
  {
    label: "Market Affiliations",
    value: "SAPP & EAPP Synchronized Participant",
  },
  {
    label: "Grid Integration Architecture",
    value: "Virtual Power Plant (VPP) Algorithmic Dispatch Engine",
  },
];

const operationsDesks = ["Harare Central Desk", "Johannesburg SAPP Hub"];

/**
 * Operating charter panel: the dark header band carries the licence reference,
 * while the body reads as a technical data sheet, not a marketing card.
 */
function OperatingCharter() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-background">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-charcoal px-5 py-3.5 text-white">
        <div className="flex items-center gap-2">
          <NetworkIcon
            aria-hidden="true"
            className="size-[18px] text-brand-tint"
          />
          <span className="type-eyebrow text-white">
            Operating Charter &amp; Reg. Desk
          </span>
        </div>
        <span className="type-code text-white/65">LIC-POW-2021/SA</span>
      </div>

      <dl className="divide-y divide-hairline">
        {charterRows.map((row) => (
          <div key={row.label} className="px-5 py-3.5">
            <dt className="type-code text-[11px] tracking-wider text-caption uppercase">
              {row.label}
            </dt>
            <dd
              className={
                row.emphasis
                  ? "type-headline-sm mt-1.5 text-ink"
                  : "type-body-sm mt-1.5 font-medium text-ink"
              }
            >
              {row.value}
            </dd>
          </div>
        ))}

        <div className="px-5 py-3.5">
          <dt className="type-code text-[11px] tracking-wider text-caption uppercase">
            Active Operations Desks
          </dt>
          <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
            {operationsDesks.map((desk) => (
              <span
                key={desk}
                className="type-body-sm flex items-center gap-1.5 font-medium text-ink"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-brand"
                />
                {desk}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="type-code flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-surface-band px-5 py-3 text-caption">
        <span className="uppercase">Telemetry Latency</span>
        <span className="font-semibold text-ink">
          &lt; 340ms (High-Voltage Scada)
        </span>
      </div>
    </div>
  );
}

/**
 * Subsidiary hero for SEPCO: breadcrumb, division pill, the institutional
 * mandate and the operating charter data sheet.
 */
export function EnergyHero() {
  return (
    <SubsidiaryHero
      division="Samansco Energy (SEPCO)"
      pill="Power Utility & Commercial Trading Layer • Est. 2017"
      title="Energy Trading, Electricity Retail & Virtual Power Plants."
      description={
        <>
          <span className="type-eyebrow mb-2 block text-brand-deep">
            Autonomous Power Operating Arm
          </span>
          Samansco Electric Power Company (SEPCO) operates as an independent
          utility entity within Samansco Group. Distinct from the EPC operations
          of Samansco Industries, SEPCO executes the commercial electricity
          layer: structuring institutional long-term Power Purchase Agreements
          (PPAs), executing cross-border transmission wheeling across the
          Southern African Power Pool (SAPP), and aggregating smart-grid
          capacity via next-generation Virtual Power Plants.
        </>
      }
      actions={
        <>
          <Button
            size="lg"
            variant="secondary"
            render={<a href="#trading-inquiry" />}
          >
            Initiate Trading Inquiry
            <ArrowDownIcon aria-hidden="true" />
          </Button>

          <ProspectusDialog />

          <p className="type-code flex w-full items-center gap-2 text-caption">
            <ShieldCheckIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-brand-deep"
            />
            Southern Africa Regional Grid Licensee
          </p>
        </>
      }
      aside={<OperatingCharter />}
    />
  );
}
