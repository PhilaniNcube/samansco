import { Eyebrow, Section } from "@/components/samansco/section";
import { cn } from "@/lib/utils";

const partners = [
  "HUAWEI",
  "SIGENERGY",
  "JA SOLAR",
  "CHINT",
  "JINKO SOLAR",
  "TRINA SOLAR",
  "PHOCOS",
  "VICTRON ENERGY",
  "LORENTZ",
  "TROJAN BATTERY",
  "ARCO BATTERY",
  "BYD ENERGY",
  "REBEL ENERGY",
] as const;

/**
 * Hardware tiering wall: the OEM and distribution alignment behind the
 * technical supply chain.
 */
export function PartnerWall() {
  return (
    <Section
      tone="none"
      className="border-y border-hairline/60 bg-surface-sunken py-10 lg:py-14"
    >
      <div className="shell">
        <div className="flex flex-col gap-3 border-b border-hairline/70 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="text-muted-foreground">
              Hardware Tiering &amp; Distribution
            </Eyebrow>
            <h2 className="type-headline-md mt-2 text-ink">
              Direct Factory Alignment &amp; Certified Distribution
            </h2>
          </div>
          <p className="type-code text-caption uppercase">
            All warranties administered locally
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <li
              key={partner}
              className={cn(
                "type-label flex min-h-16 items-center justify-center border border-hairline/80 bg-background px-3 py-4 text-center font-semibold tracking-tight text-ink",
                partner === "LORENTZ" && "text-brand-deep",
                partner === "REBEL ENERGY" && "col-span-2 sm:col-span-1",
              )}
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
