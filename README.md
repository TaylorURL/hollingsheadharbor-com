<p align="center">
  <img src="public/logo.png" width="200" height="53" alt="Hollingshead Harbor" />
</p>

<h1 align="center">Hollingshead Harbor</h1>

<p align="center">Website for Hollingshead Harbor, a marine transportation company with 13 harbors in six states.</p>
<p align="center"><a href="https://www.hollingsheadharbor.com">hollingsheadharbor.com</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2026.43.0-2a3163?style=for-the-badge" width="170" height="28" alt="Version 2026.43.0" />
</p>

Hollingshead Harbor is the marine arm of Smyrna Ready Mix. It moves bulk dry cargo on the inland rivers and the Gulf, and charters vessels and barges out of harbors in Alabama, Florida, Michigan, Ohio, Tennessee and Texas. The site explains what the company does and lets wheelmen and deckhands apply for a job from their phone, resume and all.

## What's on the site

- A home page with a map of the harbor network.
- An about page with how the company started, what it runs and the SRM family of companies.
- An equipment page for the towboats and barges.
- A careers page with open positions and the full employment application. The form checks itself before sending, and the application lands in the hiring inbox as an email with the resume attached.
- A contact page with the office phone, email, and the Murfreesboro, TN and San Leon, TX offices.

Job postings and fleet equipment are plain JSON files in `src/data/`, so adding a job or a boat doesn't need a code change.

## Running it locally

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

## Built with

React 19, React Router, Vite, Tailwind CSS and Resend. Hosted on Vercel.

## License

Proprietary. Copyright (c) 2026 TaylorURL LLC, all rights reserved. See [LICENSE.md](LICENSE.md).

Built and maintained by [TaylorURL](https://www.taylorurl.com).
