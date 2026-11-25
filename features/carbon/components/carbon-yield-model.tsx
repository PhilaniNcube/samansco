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
        <div className="border border-hairline bg-surface-band p-6 lg:p-8">
          <div>
            <h2 id="carbon-yield-title" className="type-headline-lg text-ink">
              I-REC Yield Simulation
            </h2>
            <p
              id={descriptionId}
              className="type-body-md mbs-2 max-w-[60ch] leading-relaxed text-muted-foreground"
            >
              Adjust solar plant nominal rating to preview annual certificate
              issuance potential.
            </p>
          </div>

          <div className="mbs-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="type-body-sm flex flex-wrap items-center justify-between gap-2 text-ink tabular-nums">
                <span>
                  Capacity:{" "}
                  <strong className="font-semibold text-brand-deep">
                    {capacity.toFixed(1)} MWp
                  </strong>
                </span>
                <span>
                  Generation:{" "}
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
                className="mbs-4 h-2 w-full cursor-pointer accent-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              />

              <div className="type-body-sm mbs-2 flex items-center justify-between text-caption tabular-nums">
                <span>{CAPACITY_MIN.toFixed(1)} MWp</span>
                <span>{CAPACITY_MAX.toFixed(1)} MWp</span>
              </div>
            </div>

            <dl className="grid grid-cols-2 divide-x divide-hairline border-t border-hairline pbs-6 lg:col-span-6 lg:border-t-0 lg:border-s lg:pbs-0 lg:pis-8">
              <div className="pie-4">
                <dt className="type-label text-muted-foreground">
                  Annual I-RECs
                </dt>
                <dd className="type-metric mbs-2 text-ink">
                  {numberFormat.format(annualMWh)}
                </dd>
                <dd className="type-body-sm mbs-1 text-muted-foreground">
                  Verified units
                </dd>
              </div>
              <div className="pis-6">
                <dt className="type-label text-muted-foreground">
                  CO₂e offset
                </dt>
                <dd className="type-metric mbs-2 text-brand-deep">
                  ~{numberFormat.format(avoidedTco2e)} t
                </dd>
                <dd className="type-body-sm mbs-1 text-muted-foreground">
                  Avoided annual emissions
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
