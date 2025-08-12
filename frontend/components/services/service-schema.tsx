"use client";

import Script from "next/script";

export default function ServiceSchema() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development and Design",
    "provider": {
      "@type": "Organization",
      "name": "Webforge",
      "url": "https://webforge.sg"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Professional website development services tailored to your business needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User-centered design services for optimal user experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimization to improve your website's visibility"
          }
        }
      ]
    }
  };

  return (
    <Script
      id="services-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
    />
  );
}