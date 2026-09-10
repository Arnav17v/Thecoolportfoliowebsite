const configuredUrl = process.env.SITE_URL;
export const siteUrl = new URL(configuredUrl ?? "https://tcpw.vercel.app").origin;
export const title = "Arnav Verma | 2026 New-Grad Software Engineer";
export const description =
  "Meet Arnav Verma, a 2026 new-grad software engineering candidate focused on backend systems and AI products. Explore projects, experience, and hiring contact.";

export const person = {
  "@type": "Person",
  "@id": siteUrl ? `${siteUrl}/#arnav-verma` : "#arnav-verma",
  name: "Arnav Verma",
  description,
  ...(siteUrl ? { url: `${siteUrl}/` } : {}),
  email: "mailto:arnavverma1204@gmail.com",
  sameAs: ["https://github.com/Arnav17v", "https://www.linkedin.com/in/arnav17v"],
  knowsAbout: ["Backend engineering", "Software engineering", "PostgreSQL", "GraphQL", "Python", "Node.js", "AI applications"],
};
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  ...(siteUrl ? { "@id": `${siteUrl}/#profile`, url: `${siteUrl}/` } : {}),
  name: title,
  description,
  inLanguage: "en",
  mainEntity: person,
};
