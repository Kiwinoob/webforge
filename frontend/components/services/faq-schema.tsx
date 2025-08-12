"use client";

import Script from "next/script";

export default function FAQSchema() {
  const faqs = [
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we specialize in growing Singapore businesses of all sizes. Our Starter is perfect for new businesses, freelancers, and professionals."
    },
    {
      question: "How long does a project take?",
      answer: "Typically 4-12 weeks depending on complexity. Starter projects usually take 4-6 weeks, while Professional and Enterprise projects may take 6-12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, all projects include support periods. We also offer ongoing maintenance and development partnerships."
    },
    {
      question: "Can you help with SEO?",
      answer: "Basic SEO is included in all packages. For advanced SEO strategies and ongoing optimization, we can discuss additional services."
    },
    {
      question: "Do you work remotely?",
      answer: "Yes, we're a remote-first team serving all of Singapore. We use modern collaboration tools and maintain regular communication throughout the project."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}