<img src="public/logo.png" width="200" height="53" alt="Hollingshead Harbor" />

# Hollingshead Harbor

Website for Hollingshead Harbor, a marine transportation company with 13 harbors in six states.

[hollingsheadharbor.com](https://www.hollingsheadharbor.com)

<img src="https://img.shields.io/badge/version-2026.44.1-2a3163?style=for-the-badge" width="170" height="28" alt="Version 2026.44.1" />

What the company runs and where, plus a full employment application wheelmen and deckhands can fill out on a phone, resume included. React on Vite, with one Vercel function for applications.

Jobs, equipment and harbors are JSON in `src/data/`. Adding a job or a boat isn't a code change.

## The application

Every section and field is described once in `src/constants/application.js`. The form renders from it, the client validator checks against it, and the email walks it in the same order.

`api/apply.js` turns the answers into a readable email and sends it, resume attached, through Resend. Nothing is stored. Applications carry an SSN and date of birth, so the function never logs the payload, and errors shown to the applicant stay vague when the fault is ours. Resumes are capped at 3 MB, checked on the server against the base64 length. A hidden honeypot field catches bots.

`npm run dev` doesn't serve the function. Use `vercel dev` to test the form, with these in `.env`:

| Variable         | What it is                                                |
| :--------------- | :-------------------------------------------------------- |
| `RESEND_API_KEY` | Resend API key                                            |
| `CAREERS_INBOX`  | Where applications go (comma-separated for more than one) |
| `CAREERS_FROM`   | From address, on a domain verified with Resend            |

## The map

`npm run map` draws `src/data/service-map.json` from Census Bureau outlines (us-atlas) and `harbors.json`, on the same projection the illustrations use. The atlas is downloaded when it runs and only the small output is committed. Rerun it after editing `harbors.json`.

```bash
npm install
npm run dev
npm run build
```

React 19, React Router, Vite, Tailwind CSS and Resend, on Vercel. Proprietary, see [LICENSE.md](LICENSE.md).

Built and maintained by [TaylorURL](https://www.taylorurl.com).
