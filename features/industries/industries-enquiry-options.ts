/**
 * Shared options and desk routing for the Samansco Industries direct inquiry
 * dialog. Kept free of server-only imports so both client and server use it.
 */

export const industriesEnquiryTypes = [
  { value: "epc", label: "EPC & turnkey project delivery" },
  { value: "supply", label: "Solar equipment & technical distribution" },
  { value: "water", label: "Water pumping & irrigation systems" },
  { value: "institutional", label: "Institutional or municipal infrastructure" },
] as const;

export type IndustriesEnquiryType =
  (typeof industriesEnquiryTypes)[number]["value"];

export const industriesEnquiryValues = industriesEnquiryTypes.map(
  (item) => item.value,
) as [IndustriesEnquiryType, ...IndustriesEnquiryType[]];

export function industriesEnquiryLabel(value: IndustriesEnquiryType): string {
  return (
    industriesEnquiryTypes.find((item) => item.value === value)?.label ?? value
  );
}

export const INDUSTRIES_DESK = {
  company: "Samansco Industries",
  desk: "Engineering & Distribution Desk",
  email: "industries@samansco.com",
} as const;
