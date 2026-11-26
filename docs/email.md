# Transactional email (Resend + React Email)

Contact-form enquiries are sent through [Resend](https://resend.com) using
[React Email](https://react.email) templates. Nothing is stored server-side: the
action validates the submission, emails the operating-company desk, then emails
a confirmation to the enquirer.

## Environment

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Sending-only API key from <https://resend.com/api-keys>. Without it the action fails closed with a "desk unavailable" message. |
| `RESEND_FROM_EMAIL` | recommended | Verified sender, e.g. `Samansco Group <enquiries@samansco.com>`. Defaults to that same address. |
| `ENQUIRY_NOTIFICATION_EMAIL` | optional | Comma-separated override that funnels every notification to one inbox instead of the operating-company desk (useful for QA and early days). |
| `NEXT_PUBLIC_SITE_URL` | optional | Public base URL used in email copy. Defaults to `https://www.samansco.com`. |

Until the sending domain is verified in Resend, the account owner's address is
the only inbox that can receive mail. Verify `samansco.com` (SPF + DKIM) before
going live.

## Flow

1. `features/contact/components/enquiry-form.tsx` submits to the `submitEnquiry`
   Server Action with native validation plus a hidden bot-trap field.
2. `features/contact/enquiry-actions.tsx` re-validates with the Zod schema in
   `features/contact/enquiry-schema.ts`, applies a small in-memory throttle, and
   generates a `SAM-YYYY-NNNNNN` reference.
3. The notification goes to the desk selected in the form
   (`features/contact/enquiry-options.ts`), with `Reply-To` set to the enquirer.
4. The acknowledgement goes to the enquirer, with `Reply-To` set to the desk.
   A failed acknowledgement is logged but never fails the enquiry.
5. The form shows the reference and promised response time in a live region.

## Templates

```text
lib/email/resend.ts                 lazy Resend client + env helpers
lib/email/email-shell.tsx          shared layout, tokens, detail rows
features/contact/emails/           one file per template (default export)
  enquiry-notification.tsx         internal desk notification
  enquiry-acknowledgement.tsx      enquirer confirmation
```

Styles are inline and use the site palette directly: email clients strip
stylesheets, and the Tailwind tokens do not survive delivery.

Preview locally:

```bash
npm run email:dev        # http://localhost:3001
```

Render to static HTML for a visual check:

```bash
npx email export --dir features/contact/emails --outDir .react-email-export --pretty
```

## Before launch

- Verify the sending domain in Resend and set `RESEND_FROM_EMAIL` to an address
  on that domain.
- Replace the in-memory throttle with a shared limiter (for example Upstash
  Redis or Vercel WAF) if the form sees sustained traffic.
- Add a real inbox for `info@` / the four desk addresses, or set
  `ENQUIRY_NOTIFICATION_EMAIL` to one monitored mailbox.
- Send one real enquiry in production and confirm both messages arrive, that
  "Reply" targets the right party, and that SPF/DKIM pass.
