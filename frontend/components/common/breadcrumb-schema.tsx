"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://webforge.sg"
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.charAt(0).toUpperCase() + path.slice(1),
        "item": `https://webforge.sg/${paths.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}