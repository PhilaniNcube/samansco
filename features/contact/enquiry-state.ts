/**
 * What the user typed, echoed back after a failed submission. React resets
 * uncontrolled fields once a form action settles, so the form remounts from
 * these defaults instead of losing the draft.
 */
export type EnquiryDraft = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  division: string;
  engagementNature: string;
  message: string;
  confirmation: string;
};

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
      values: EnquiryDraft;
      /** Changes on every failed attempt so the fields remount with the draft. */
      attempt: number;
    };

export const initialEnquiryState: EnquiryFormState = { status: "idle" };
