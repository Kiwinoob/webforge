import HeroSection from "../../components/services/hero-section";
import FAQSection from "../../components/services/faq-section";
import InclusionsSection from "../../components/services/inclusions-section";
import PackageSection from "../../components/services/package-section";
import CTASection from "../../components/common/cta-section";
import ServiceSchema from "../../components/services/service-schema";
import FAQSchema from "../../components/services/faq-schema";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Services",

  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <ServiceSchema />
      <FAQSchema />
      <HeroSection></HeroSection>
      <InclusionsSection></InclusionsSection>
      <PackageSection></PackageSection>
      <FAQSection></FAQSection>
      <CTASection
        title="Ready to bring your business online?"
        description="Let's discuss your project and create a custom solution that delivers real results for your business."
        buttonText="Contact Us"
        buttonLink="/contact"
        highlightWord="online?"
        features="Free consultation • Custom proposal • Quotation"
      />
    </div>
  );
}
