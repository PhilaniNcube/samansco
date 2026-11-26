/**
 * Result shape returned by `submitTradingEnquiry` and consumed by
 * `useActionState`.
 */
export type TradingEnquiryState =
  | { status: "idle" }
  | { status: "success"; reference: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
      attempt: number;
    };

export const initialTradingEnquiryState: TradingEnquiryState = {
  status: "idle",
};
