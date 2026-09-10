# Arnav Verma — Portfolio

Single-page portfolio website for Arnav Verma, a 2026 new grad software engineer.

**[View the portfolio](https://tcpw.vercel.app/)** · [GitHub](https://github.com/Arnav17v) · [LinkedIn](https://www.linkedin.com/in/arnav17v)

## Implementation

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The main page presents experience, projects, skills, and contact links with in-page navigation. Identity metadata is centralized in `src/lib/seo.ts`; the app includes robots and sitemap routes.

## Run locally

Use Node.js 20+.

```bash
git clone https://github.com/Arnav17v/Thecoolportfoliowebsite.git
cd Thecoolportfoliowebsite
npm install
npm run dev
```

Open `http://localhost:3000`. Edit `src/app/page.tsx` for page content and `src/lib/seo.ts` for identity metadata.

For a production build, set `SITE_URL=https://tcpw.vercel.app` in the environment, then run `npm run build` and `npm run start`. Use your own origin if deploying a separate copy.

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
