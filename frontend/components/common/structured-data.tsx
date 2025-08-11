"use client";

import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webforge",
    url: "https://webforge.sg",
    logo: "https://webforge.sg/webforge-logo.png",
    description:
      "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
    },
    sameAs: [
      "https://www.tiktok.com/@webforgesg",
      "https://www.instagram.com/webforgesg?igns=dTNvb2cyaTNRAJZ1",
      // Add your social media profiles here
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Webforge",
    url: "https://webforge.sg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://webforge.sg/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
