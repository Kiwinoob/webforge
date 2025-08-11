"use client";

import Script from "next/script";

export default function ContactSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Webforge",
    "description": "Get in touch with Webforge for professional website development services",
    "mainEntity": {
      "@type": "Organization",
      "name": "Webforge",
      "url": "https://webforge.sg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "SG",
        "availableLanguage": ["English", "Chinese"],
        "contactOption": ["TollFree", "Email"],
        "email": "hello@webforge.sg"
      }
    }
  };

  return (
    <Script
      id="contact-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
}