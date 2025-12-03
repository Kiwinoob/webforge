import { Metadata } from "next";

type OpenGraphType = "website" | "article";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: OpenGraphType;
  twitterCard?: string;
  pathname?: string;
};

export function constructMetadata({
  title = "Webforge | Web Design & Development Singapore",
  description = "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords = "Webforge,WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogImage = "/webforge-og.png",

  ogType = "website",
  twitterCard = "summary_large_image",
  pathname = "/",
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webforge.sg";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Webforge" }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Webforge | Professional Website Creation Services",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: twitterCard as "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`],
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL(baseUrl),
  };
}
