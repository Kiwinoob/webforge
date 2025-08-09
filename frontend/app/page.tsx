import React from "react";
import HeroSection from "../components/home/hero-section";
import ProcessSection from "../components/home/process-section";
import AboutSection from "../components/home/about-section";
import CTASection from "../components/home/cta-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Home",

  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
});
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
