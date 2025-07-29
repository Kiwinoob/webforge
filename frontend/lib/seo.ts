import { Metadata } from "next";

type OpenGraphType = "website" | "article";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: OpenGraphType;
  twitterCard?: string;
};

export function constructMetadata({
  title = "Webforge - Professional Website Creation Services",
  description = "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords = "Webforge,WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogImage = "/og-webforge.png",
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps = {}): Metadata {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webforge.sg";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Webforge" }],
    openGraph: {
      title,
      description,
      url: `${baseUrl}${pathname}`,
      siteName: "Webforge | Web Design & Development",
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
