<img src="public/logo.png" width="200" height="53" alt="Hollingshead Harbor" />

# Hollingshead Harbor

Website for Hollingshead Harbor, a marine transportation company with 13 harbors in six states.

[hollingsheadharbor.com](https://www.hollingsheadharbor.com)

<img src="https://img.shields.io/badge/version-2026.44.0-2a3163?style=for-the-badge" width="170" height="28" alt="Version 2026.44.0" />

What the company runs and where, plus a full employment application wheelmen and deckhands can fill out on a phone, resume included. React single-page app on Vite, with one Vercel function for applications.

## How it's built

- **Content is JSON.** Jobs, equipment and harbors are files in `src/data/`. Adding a job or a boat isn't a code change.
- **One schema for the application.** `src/constants/application.js` describes every section and field once. The form renders it, the client validator checks it, and the email walks it in the same order.
- **Applications are email, nothing else.** `api/apply.js` renders the answers as a readable email and sends it with the resume attached through Resend. Applications carry an SSN and date of birth, so nothing in the function logs the payload.
- **The map is generated.** `npm run map` draws `src/data/service-map.json` from Census Bureau outlines (us-atlas) and `harbors.json`, projected onto the same plate every illustration uses. The atlas is fetched when it runs, not kept. Only the small output is checked in.

<details>
<summary>Decisions and tradeoffs</summary>

- The resume is capped at 3 MB. The size check runs on the server against the base64 length.
- A hidden honeypot field catches bots. A real applicant never sees it.
- Errors back to the applicant are vague on purpose when the problem is on our side.
- `src/lib/chunk-recovery.js` reloads once when a deploy has removed a chunk an open tab asks for.
- `middleware.js` checks a TaylorURL status endpoint and shows a holding page if the site is paused. Fails open. `api/version.js` returns the deployed commit, uncached.

</details>

<details>
<summary>Running it locally</summary>

```bash
npm install
npm run dev        # Vite dev server
npm run build      # production build to dist/
```

The application form posts to `api/apply.js`, a Vercel function that sends the email through Resend. `npm run dev` doesn't serve it, so use `vercel dev` when you need to test the form. Copy `.env.example` to `.env` and fill in:

| Variable         | What it is                                                |
| :--------------- | :-------------------------------------------------------- |
| `RESEND_API_KEY` | Resend API key                                            |
| `CAREERS_INBOX`  | Where applications go (comma-separated for more than one) |
| `CAREERS_FROM`   | From address, on a domain verified with Resend            |

After editing `src/data/harbors.json`, run `npm run map` to rebuild the harbor map.

</details>

## Built with

React 19, React Router, Vite, Tailwind CSS and Resend. Hosted on Vercel.

<details>
<summary>License</summary>

Proprietary. Copyright (c) 2026 TaylorURL LLC, all rights reserved. See [LICENSE.md](LICENSE.md).

</details>

Built and maintained by [TaylorURL](https://www.taylorurl.com).
