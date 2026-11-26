/**
 * Result shape returned by the `submitEnquiry` server action and consumed by
 * `useActionState` in the client form.
 */
export type EnquiryFormState =
  | { status: "idle" }
  | {
      status: "success";
      reference: string;
      company: string;
      desk: string;
    }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
      attempt: number;
    };

export const initialEnquiryState: EnquiryFormState = { status: "idle" };
