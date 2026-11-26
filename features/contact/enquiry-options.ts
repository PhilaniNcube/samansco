/**
 * Values shared by the enquiry form (client) and the server action. This
 * module must stay free of server-only imports so both sides can use it.
 */

export const routingOptions = [
  {
    value: "group",
    label: "Samansco Group (General / Governance / Executive Office)",
  },
  {
    value: "industries",
    label:
      "Samansco Industries (Solar EPC, Equipment Supply & NGO Procurement)",
  },
  {
    value: "energy",
    label:
      "Samansco Energy (Utility PPAs, Electricity Wheeling & Retail)",
  },
  {
    value: "maintenance",
    label:
      "Samansco Maintenance (Asset Telemetry, Solar O&M & Repowering)",
  },
  {
    value: "carbon",
    label: "Samansco Carbon (I-RECs, Carbon Offsets & ESG Advisory)",
  },
] as const;

export type EnquiryDivision = (typeof routingOptions)[number]["value"];

export const enquiryDivisions = routingOptions.map(
  (option) => option.value,
) as [EnquiryDivision, ...EnquiryDivision[]];

export const engagementNatures = [
  "Commercial RFP / Tender",
  "PPA & Power Wheeling",
  "Equipment Distribution",
  "Asset O&M SLA",
  "I-REC Carbon Credits",
  "Media & Governance",
] as const;

export type EngagementNature = (typeof engagementNatures)[number];

type EnquiryDestination = {
  /** Operating company that owns the desk. */
  company: string;
  /** Desk the notification is addressed to. */
  desk: string;
  /** Default recipient, overridable with ENQUIRY_NOTIFICATION_EMAIL. */
  email: string;
};

/**
 * One recipient per operating company, mirroring the channels published on
 * the contact page.
 */
export const enquiryDestinations: Record<EnquiryDivision, EnquiryDestination> =
  {
    group: {
      company: "Samansco Group",
      desk: "Executive Office · Group Governance",
      email: "info@samansco.com",
    },
    industries: {
      company: "Samansco Industries",
      desk: "Engineering & Commercial Desk",
      email: "industries@samansco.com",
    },
    energy: {
      company: "Samansco Energy",
      desk: "PPA & Trading Desk",
      email: "energy@samansco.com",
    },
    maintenance: {
      company: "Samansco Maintenance",
      desk: "O&M & Asset Performance Desk",
      email: "maintenance@samansco.com",
    },
    carbon: {
      company: "Samansco Carbon",
      desk: "I-REC & ESG Advisory Desk",
      email: "carbon@samansco.com",
    },
  };

export function destinationFor(division: EnquiryDivision): EnquiryDestination {
  return enquiryDestinations[division];
}

export function divisionLabel(division: EnquiryDivision): string {
  return (
    routingOptions.find((option) => option.value === division)?.label ??
    division
  );
}
