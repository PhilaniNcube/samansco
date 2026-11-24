"use client";

import { useId, useState } from "react";
import { Section } from "@/components/samansco/section";

const CAPACITY_MIN = 0.5;
const CAPACITY_MAX = 15;
const CAPACITY_STEP = 0.5;
const DEFAULT_CAPACITY = 3.2;
const ANNUAL_MWH_PER_MWP = 1650;
const TCO2E_PER_MWH = 0.78;

const numberFormat = new Intl.NumberFormat("en-US");

/**
 * Interactive I-REC issuance model: adjusts a nominal plant rating and derives
 * annual generation, certificate volume and avoided CO₂e from it.
 */
export function CarbonYieldModel() {
  const [capacity, setCapacity] = useState(DEFAULT_CAPACITY);
  const sliderId = useId();
  const descriptionId = `${sliderId}-description`;

  const annualMWh = Math.round(capacity * ANNUAL_MWH_PER_MWP);
  const avoidedTco2e = Math.round(annualMWh * TCO2E_PER_MWH);

  return (
    <Section
      tone="white"
      className="border-t border-hairline/60"
      aria-labelledby="carbon-yield-title"
    >
      <div className="shell section-y">
        <div className="rounded-lg border border-hairline bg-surface-band p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 id="carbon-yield-title" className="type-headline-md text-ink">
                I-REC Yield Simulation
              </h2>
              <p
                id={descriptionId}
                className="type-body-sm mt-2 max-w-xl leading-relaxed text-muted-foreground"
              >
                Adjust solar plant nominal rating to preview annual certificate
                issuance potential:
              </p>
            </div>
            <span className="type-code rounded bg-brand-deep px-2 py-1 text-[11px] font-medium text-white">
              {capacity.toFixed(1)} MWp Hub
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="type-code flex flex-wrap items-center justify-between gap-2 text-ink">
                <span>
                  Capacity:{" "}
                  <strong className="font-bold text-brand-deep">
                    {capacity.toFixed(1)} MWp
                  </strong>
                </span>
                <span>
                  Gen:{" "}
                  <strong className="font-semibold">
                    {numberFormat.format(annualMWh)} MWh/yr
                  </strong>
                </span>
              </div>

              <input
                id={sliderId}
                type="range"
                min={CAPACITY_MIN}
                max={CAPACITY_MAX}
                step={CAPACITY_STEP}
                value={capacity}
                onChange={(event) =>
                  setCapacity(Number.parseFloat(event.target.value))
                }
                aria-label="Solar plant nominal rating in megawatt-peak"
                aria-describedby={descriptionId}
                className="mt-4 h-2 w-full cursor-pointer accent-brand"
              />

              <div className="type-code mt-1 flex items-center justify-between text-[10px] text-caption">
                <span>{CAPACITY_MIN.toFixed(1)} MWp</span>
                <span>{CAPACITY_MAX.toFixed(1)} MWp</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-5">
              <div className="rounded-lg border border-hairline/70 bg-background p-4">
                <span className="type-eyebrow block text-caption">
                  Annual I-RECs
                </span>
                <span className="type-headline-sm mt-2 block text-ink">
                  {numberFormat.format(annualMWh)} Units
                </span>
              </div>
              <div className="rounded-lg border border-hairline/70 bg-background p-4">
                <span className="type-eyebrow block text-caption">
                  CO₂e Offset
                </span>
                <span className="type-headline-sm mt-2 block text-brand-deep">
                  ~{numberFormat.format(avoidedTco2e)} tCO₂e
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
