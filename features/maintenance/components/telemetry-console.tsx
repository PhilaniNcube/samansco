import { TrendingUpIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type SparklineProps = {
  viewBox: string;
  path: string;
  endX: number;
  endY: number;
};

function Sparkline({ viewBox, path, endX, endY }: SparklineProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      className="h-12 w-28 shrink-0 text-brand-tint"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={endX} cy={endY} r="3.5" fill="currentColor" />
    </svg>
  );
}

function ConsoleStatus() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="type-eyebrow text-white/65">Fleet Telemetry &bull; Live</span>
      <span className="type-code flex items-center gap-1.5 text-[11px] text-emerald-400">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-emerald-400"
        />
        ACTIVE MONITORING
      </span>
    </div>
  );
}

/**
 * Live SCADA card from the maintenance hero: availability and generation
 * views share one compact telemetry surface.
 */
export function TelemetryConsole() {
  return (
    <div className="rounded-lg border border-white/10 bg-ink p-5 text-white">
      <Tabs defaultValue="availability">
        <ConsoleStatus />

        <TabsList
          aria-label="Fleet telemetry views"
          className="mt-4 flex h-auto w-full items-center gap-1 rounded-md bg-white/5 p-1 text-white/60"
        >
          <TabsTrigger
            value="availability"
            className="type-code rounded px-2.5 py-1.5 text-[11px] data-[selected]:bg-white/10 data-[selected]:text-white data-[selected]:shadow-none"
          >
            Availability
          </TabsTrigger>
          <TabsTrigger
            value="generation"
            className="type-code rounded px-2.5 py-1.5 text-[11px] data-[selected]:bg-white/10 data-[selected]:text-white data-[selected]:shadow-none"
          >
            Generation
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="availability"
          className="mt-4 min-h-[9.5rem] outline-none"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="type-metric leading-none text-white">
                99.4
                <span className="type-headline-md align-baseline text-white/60">
                  %
                </span>
              </p>
              <p className="type-eyebrow mt-2 text-white/65">
                AVG. PLANT AVAILABILITY
              </p>
            </div>
            <Sparkline
              viewBox="0 0 120 40"
              path="M2 32 L18 28 L32 30 L48 18 L64 20 L80 10 L96 12 L118 4"
              endX={118}
              endY={4}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
            <span className="type-code text-[11px] text-white/65">
              POLL: 850ms
            </span>
            <span className="type-code flex items-center gap-1.5 text-[11px] text-emerald-400">
              <TrendingUpIcon aria-hidden="true" className="size-3.5" />
              +0.2% / 30-DAY MTBF
            </span>
          </div>
        </TabsContent>

        <TabsContent
          value="generation"
          className="mt-4 min-h-[9.5rem] outline-none"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="type-metric leading-none text-white">
                142.8
                <span className="type-headline-md align-baseline text-white/60">
                  MW
                </span>
              </p>
              <p className="type-eyebrow mt-2 max-w-[15rem] text-white/65">
                REAL-TIME GENERATION TRACE (GRID SYNC)
              </p>
            </div>
            <Sparkline
              viewBox="0 0 240 36"
              path="M0 28 L20 24 L45 26 L65 18 L90 20 L115 12 L135 14 L160 8 L185 11 L210 5 L238 4"
              endX={238}
              endY={4}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
            <span className="type-code text-[11px] text-white/65">
              SUB-SECOND TELEMETRY
            </span>
            <span className="type-code text-[11px] text-emerald-400">
              0 UNSCHEDULED TRIPS
            </span>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
