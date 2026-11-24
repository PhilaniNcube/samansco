/**
 * Operational telemetry strip from the mobile design, rebuilt without
 * photography: a single ink band that states the intertie status in the same
 * voice as the dispatch desk.
 */
export function GridStatus() {
  return (
    <div className="border-y border-white/10 bg-charcoal text-white">
      <div className="shell">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-2 py-4 sm:col-span-4 sm:py-5 sm:pr-6">
            <span className="type-eyebrow text-white/80">
              Substation Intertie Active
            </span>
          </div>

          <div className="flex items-center py-4 sm:col-span-5 sm:px-6 sm:py-5">
            <p className="type-headline-sm text-balance text-white">
              330kV Regional Transmission Corridor
            </p>
          </div>

          <div className="flex items-center py-4 sm:col-span-3 sm:justify-end sm:py-5 sm:pl-6">
            <span className="type-code inline-flex items-center gap-2 rounded bg-brand-deep px-2.5 py-1 font-medium text-white">
              LIVE VPP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
