This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Single-page SEO experiment

The portfolio targets legitimate relevance for Arnav Verma as a 2026 new-grad
software engineering candidate. It remains one page; navigation uses fragments.
The hiring paragraph uses the experimental search phrase as a question, not an
award or a claim that Arnav has been ranked best. Existing experience metrics
are owner-provided claims, not independently verified rankings.

Set `SITE_URL` to the preferred production origin (including `https://`) in the
hosting environment **before building**. This powers the canonical, Open Graph
URL, profile identifiers, robots sitemap reference, and one-URL sitemap.
Without it, absolute identity metadata is omitted and the sitemap is empty;
no placeholder domain is published. Rebuild after changing the variable.

Before launch, confirm graduation status, availability, project metrics, and
resume accuracy. Add project-specific source links only when they are available;
a generic GitHub profile is not presented as a project's source repository.

After deployment:

- Verify the production canonical and `/robots.txt` and `/sitemap.xml` responses.
- Verify the preferred domain in Google Search Console, submit the sitemap, and
  inspect the homepage URL for indexability and rendered content.
- Validate the profile JSON-LD with Google's Rich Results Test. Eligibility does
  not guarantee a rich result or ranking.
- Record a deployment baseline and track query impressions, clicks, CTR, and
  position monthly for branded and 2026 new-grad queries. Use Search Console
  data rather than personalized search results; low-volume queries may be omitted.
- Earn relevant links through real project documentation, GitHub, and professional
  profiles. Keep employment and project evidence accurate as work evolves.

References: [Google title guidance](https://developers.google.com/search/docs/appearance/title-link)
and [profile structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page).
