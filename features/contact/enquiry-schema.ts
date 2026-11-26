import * as v from "valibot";
import { engagementNatures, enquiryDivisions } from "./enquiry-options";

/**
 * Shared client and server validation contract for the institutional enquiry form.
 */
export const enquirySchema = v.object({
  name: v.pipe(
    v.string("Enter your full legal name."),
    v.trim(),
    v.minLength(2, "Enter your full legal name."),
    v.maxLength(120, "Keep your name under 120 characters."),
  ),
  organisation: v.pipe(
    v.string("Enter your organisation or entity."),
    v.trim(),
    v.minLength(2, "Enter your organisation or entity."),
    v.maxLength(160, "Keep the organisation name under 160 characters."),
  ),
  email: v.pipe(
    v.string("Enter your corporate email address."),
    v.trim(),
    v.toLowerCase(),
    v.email("Enter an email address like name@organization.com."),
    v.maxLength(200, "Keep the email address under 200 characters."),
  ),
  phone: v.pipe(
    v.string("Enter a telephone or WhatsApp number with a country code."),
    v.trim(),
    v.minLength(7, "Enter a telephone or WhatsApp number with a country code."),
    v.maxLength(40, "Keep the phone number under 40 characters."),
    v.regex(
      /^\+?[\d\s().-]{6,}$/,
      "Use digits, spaces, brackets, dots or dashes, with an optional leading +.",
    ),
  ),
  division: v.picklist(
    enquiryDivisions,
    "Choose the operating entity to route to.",
  ),
  engagementNature: v.picklist(
    engagementNatures,
    "Select the nature of your engagement.",
  ),
  message: v.pipe(
    v.string("Describe your project scope in at least 20 characters."),
    v.trim(),
    v.minLength(20, "Describe your project scope in at least 20 characters."),
    v.maxLength(5000, "Keep the message under 5,000 characters."),
  ),
  confirmation: v.pipe(
    v.boolean("Confirm that this is an institutional enquiry."),
    v.check(
      (value) => value === true,
      "Confirm that this is an institutional enquiry.",
    ),
  ),
});

export type EnquiryInput = v.InferOutput<typeof enquirySchema>;

export type EnquiryField = keyof EnquiryInput;

export type EnquiryFieldErrors = Partial<Record<EnquiryField, string[]>>;
