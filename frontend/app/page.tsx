import React from "react";
import HeroSection from "../components/home/hero-section";
import ProcessSection from "../components/home/process-section";
import AboutSection from "../components/home/about-section";
import CTASection from "../components/home/cta-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Web Design & Development Singapore",
  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, Webforge.sg, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
  pathname: "/",
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
