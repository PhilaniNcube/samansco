/**
 * Result shape returned by `submitIndustriesEnquiry` and consumed by
 * `useActionState`.
 */
export type IndustriesEnquiryState =
  | { status: "idle" }
  | { status: "success"; reference: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
      attempt: number;
    };

export const initialIndustriesEnquiryState: IndustriesEnquiryState = {
  status: "idle",
};
