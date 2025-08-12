"use client";

import Script from "next/script";

export default function PortfolioSchema() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "Client Project Portfolio",
        "description": "Showcase of our client projects featuring custom web development and design solutions",
        "creator": {
          "@type": "Organization",
          "name": "Webforge",
          "url": "https://webforge.sg"
        }
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "Concept Project Portfolio",
        "description": "Collection of concept projects demonstrating our creative capabilities and technical expertise",
        "creator": {
          "@type": "Organization",
          "name": "Webforge",
          "url": "https://webforge.sg"
        }
      }
    ]
  };

  return (
    <Script
      id="portfolio-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
    />
  );
}