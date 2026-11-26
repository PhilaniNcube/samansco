import * as v from "valibot";
import { baseloadValues } from "./trading-enquiry-options";

/**
 * Shared client and server validation contract for the Samansco Energy
 * institutional offtake enquiry form.
 */
export const tradingEnquirySchema = v.object({
  entity: v.pipe(
    v.string("Enter your institutional offtaker entity."),
    v.trim(),
    v.minLength(2, "Enter your institutional offtaker entity."),
    v.maxLength(160, "Keep the entity name under 160 characters."),
  ),
  email: v.pipe(
    v.string("Enter your corporate email address."),
    v.trim(),
    v.toLowerCase(),
    v.email("Enter a corporate email address like name@organization.com."),
    v.maxLength(200, "Keep the email address under 200 characters."),
  ),
  baseload: v.picklist(
    baseloadValues,
    "Select a target baseload requirement.",
  ),
});

export type TradingEnquiryInput = v.InferOutput<typeof tradingEnquirySchema>;

export type TradingEnquiryField = keyof TradingEnquiryInput;
