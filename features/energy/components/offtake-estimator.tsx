"use client";

import { useState } from "react";
import { Section } from "@/components/samansco/section";

const numberFormat = new Intl.NumberFormat("en-US");

/**
 * Interactive offtake estimator: baseline demand in megawatts drives an
 * indicative wheeling volume and annual CO2e offset.
 */
export function OfftakeEstimator() {
  const [demand, setDemand] = useState(5);

  const monthlyWheeling = Math.round(demand * 24 * 30 * 0.6);
  const annualOffset = Math.round(demand * 3680);

  return (
    <Section
      tone="page"
      aria-labelledby="offtake-estimator-title"
      className="border-y border-hairline/60"
    >
      <div className="shell section-y">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2
              id="offtake-estimator-title"
              className="type-headline-lg text-balance text-ink"
            >
              Estimate Wheeling &amp; Offset Capacity
            </h2>
            <p className="type-body-md mbs-3 max-w-[44ch] leading-relaxed text-muted-foreground">
              Select baseline demand to simulate blended PPA tariff hedging.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-hairline bg-background">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline px-5 py-3.5">
                <span className="type-label text-muted-foreground">
                  Connected demand
                </span>
                <span className="type-label font-semibold text-brand-deep tabular-nums">
                  {demand.toFixed(1)} MW
                </span>
              </div>

              <div className="px-5 py-6">
                <label htmlFor="offtake-demand" className="sr-only">
                  Connected demand in megawatts
                </label>
                <input
                  id="offtake-demand"
                  type="range"
                  min={1}
                  max={25}
                  step={0.5}
                  value={demand}
                  onChange={(event) => setDemand(Number(event.target.value))}
                  aria-valuetext={`${demand.toFixed(1)} megawatts`}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-sunken accent-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-charcoal [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-charcoal"
                />
                <div className="type-body-sm mbs-3 flex items-center justify-between text-caption tabular-nums">
                  <span>1.0 MW</span>
                  <span>25.0 MW</span>
                </div>
              </div>

              <dl className="grid grid-cols-1 gap-px border-t border-hairline bg-hairline sm:grid-cols-2">
                <div className="bg-background px-5 py-5">
                  <dt className="type-label text-muted-foreground">
                    Estimated monthly wheeling
                  </dt>
                  <dd className="type-metric mbs-2 text-ink">
                    {numberFormat.format(monthlyWheeling)} MWh
                  </dd>
                </div>
                <div className="bg-background px-5 py-5">
                  <dt className="type-label text-muted-foreground">
                    Annual CO₂e offset
                  </dt>
                  <dd className="type-metric mbs-2 text-brand-deep">
                    {numberFormat.format(annualOffset)} t
                  </dd>
                </div>
              </dl>
            </div>

            <p className="type-body-sm mbs-3 text-muted-foreground">
              Indicative blended PPA and wheeling scenario for institutional
              offtakers.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
