import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ApproachSection } from "@/components/approach-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import DesignSection from "@/components/design-section"
import { MockupSection } from "@/components/mockup-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <DesignSection />
        <MockupSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
