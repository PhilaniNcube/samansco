/**
 * Shared options and desk routing for the Samansco Energy trading desk form.
 * Kept free of server-only imports so both client and server use it.
 */

export const baseloadOptions = [
  { value: "1-5", label: "1.0 to 5.0 MW (Industrial PPA)" },
  { value: "5-20", label: "5.0 to 20.0 MW (Mining & Smelting)" },
  { value: "20-plus", label: "> 20.0 MW (Cross-Border SAPP Wheeling)" },
  { value: "vpp", label: "Distributed VPP Asset Aggregation" },
] as const;

export type BaseloadRequirement = (typeof baseloadOptions)[number]["value"];

export const baseloadValues = baseloadOptions.map((item) => item.value) as [
  BaseloadRequirement,
  ...BaseloadRequirement[],
];

export function baseloadLabel(value: BaseloadRequirement): string {
  return (
    baseloadOptions.find((item) => item.value === value)?.label ?? value
  );
}

export const ENERGY_DESK = {
  company: "Samansco Energy",
  desk: "PPA & Trading Desk",
  email: "energy@samansco.com",
} as const;
