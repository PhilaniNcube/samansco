import * as v from "valibot";
import { industriesEnquiryValues } from "./industries-enquiry-options";

/**
 * Shared client and server validation contract for the Samansco Industries
 * direct inquiry dialog.
 */
export const industriesEnquirySchema = v.object({
  fullName: v.pipe(
    v.string("Enter your full name."),
    v.trim(),
    v.minLength(2, "Enter your full name."),
    v.maxLength(120, "Keep your name under 120 characters."),
  ),
  organisation: v.pipe(
    v.string("Enter your organisation or company."),
    v.trim(),
    v.minLength(2, "Enter your organisation or company."),
    v.maxLength(160, "Keep the organisation name under 160 characters."),
  ),
  email: v.pipe(
    v.string("Enter a valid work email address."),
    v.trim(),
    v.toLowerCase(),
    v.email("Enter a valid work email address."),
    v.maxLength(200, "Keep the email address under 200 characters."),
  ),
  enquiryType: v.picklist(
    industriesEnquiryValues,
    "Select an enquiry type.",
  ),
  site: v.pipe(
    v.string(),
    v.trim(),
    v.maxLength(160, "Keep the site location under 160 characters."),
  ),
});

export type IndustriesEnquiryInput = v.InferOutput<
  typeof industriesEnquirySchema
>;

export type IndustriesEnquiryField = keyof IndustriesEnquiryInput;
