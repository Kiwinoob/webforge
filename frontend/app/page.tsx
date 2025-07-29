import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ApproachSection } from "@/components/approach-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import DesignSection from "@/components/design-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

// Static metadata for this page
export const metadata: Metadata = constructMetadata({
  title: "Webforge",
  description:
    "Welcome to Webforge, where we create stunning and functional websites that help businesses grow.",
  keywords:
    "Webforge, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Video Editing, Photo Editing",
  ogType: "website",
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <DesignSection />
        {/* <MockupSection /> */}
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
