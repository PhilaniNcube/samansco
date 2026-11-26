import { z } from "zod";
import { engagementNatures, enquiryDivisions } from "./enquiry-options";

/**
 * Server-side contract for the institutional enquiry form. The client uses
 * native constraints first; this schema is the authority.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full legal name.")
    .max(120, "Keep your name under 120 characters."),
  organisation: z
    .string()
    .trim()
    .min(2, "Enter your organisation or entity.")
    .max(160, "Keep the organisation name under 160 characters."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(
      z
        .email("Enter an email address like name@organization.com.")
        .max(200, "Keep the email address under 200 characters."),
    ),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a telephone or WhatsApp number with a country code.")
    .max(40, "Keep the phone number under 40 characters.")
    .regex(
      /^\+?[\d\s().-]{6,}$/,
      "Use digits, spaces, brackets, dots or dashes, with an optional leading +.",
    ),
  division: z.enum(enquiryDivisions, "Choose the operating entity to route to."),
  engagementNature: z.enum(
    engagementNatures,
    "Select the nature of your engagement.",
  ),
  message: z
    .string()
    .trim()
    .min(20, "Describe your project scope in at least 20 characters.")
    .max(5000, "Keep the message under 5,000 characters."),
  confirmation: z.literal("on", {
    error: "Confirm that this is an institutional enquiry.",
  }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryField = keyof EnquiryInput;

export type EnquiryFieldErrors = Partial<Record<EnquiryField, string[]>>;
