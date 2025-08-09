import HeroSection from "../../components/portfolio/hero-section";
import ClientProjectSection from "../../components/portfolio/client-project-section";
import TemplateProjectSection from "../../components/portfolio/concept-project-section";
import ClientTestimonialSection from "../../components/portfolio/client-testimonial-section";
import CTASection from "../../components/common/cta-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Portfolio",

  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
});

const concepts = [
  {
    title: "Dragon's Den",
    description:
      "Modern restaurant website concept with elegant design and menu display.",
    image: "/portfolio/DragonsDen_MockupNew.png",
    hoverImage: "/portfolio/DragonsDen_Hover.png",
    imageAlt: "Restaurant website concept",
    tags: "Food & Beverage • Restaurant • Menu Display",
    siteUrl: "https://dragons-den-sg.vercel.app",
  },
  {
    title: "Furry Friends",
    description:
      "Clean, modern design for Singapore pet care startup with service booking and team profiles.",
    image: "/portfolio/FurryFriends_Mockup.png",
    hoverImage: "/portfolio/FurryFriends_Hover.png",
    imageAlt: "Tech startup website concept",
    tags: "Healthcare • Pet Care • Team Profiles",
    siteUrl: "https://furry-friends-webforge.vercel.app/",
  },
  {
    title: "Crochet & Co",
    description:
      "Elegant ecommerce website for crochet products with online store and customer reviews.",
    image: "/portfolio/CrochetCo_Mockup.png",
    hoverImage: "/portfolio/CrochetCo_Hover.png",
    imageAlt: "Professional services website concept",
    tags: "E-commerce • Retail • Payment Integration",
    siteUrl:
      "https://www.figma.com/proto/Uh0BcNf3MUNU8jgpYXlUnl/Crochet-and-Co.?node-id=0-3&starting-point-node-id=0%3A3",
  },
];

const testimonials = [
  {
    quote:
      "WebForge's technical approach transformed our digital presence. They were a pleasure to work with.",
    author: "Benny Wong",
    title: "Managing Director",
    company: "Belmacs Engineering",
  },
  {
    quote:
      "WebForge transformed our outdated website into a modern, professional platform that truly represents our engineering expertise. Their attention to detail and understanding of our industry was exceptional.",
    author: "Allson Sim",
    title: "Project Manager",
    company: "Perform Industries",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <HeroSection></HeroSection>

      <ClientProjectSection
        badge={{ text: "Engineering" }}
        title="Belmacs Engineering"
        subtitle="Website Revamp"
        description="Our team updated the visual layout, improved usability, and optimized performance across devices. The result is a clean, responsive site that feels current, intuitive, and aligned with the client's goals — giving their online presence new life and a stronger impact."
        challenge="Legacy static site with 8s load times and 12% mobile conversion rate"
        solution="Custom Next.js application with integrated CRM and project portal"
        defaultImage="/portfolio/Belmacs_Multi_White.png"
        hoverImage="/portfolio/Belmacs_Hover.png"
        imageAlt="Belmacs Engineering website preview"
        imagePosition="right"
        siteUrl="https://www.belmacs.com.sg"
      />

      <ClientProjectSection
        badge={{ text: "Interior Design" }}
        title="Perform Industries"
        subtitle="Website Revamp"
        description="We reimagined Perform Industries' website to better reflect their professionalism and industry expertise. From a redesigned interface to improved navigation and mobile optimization, every element was built with clarity, performance, and purpose in mind."
        challenge="Legacy static site with 8s load times and 12% mobile conversion rate"
        solution="Custom Next.js application with integrated CRM and project portal"
        defaultImage="/portfolio/Belmacs_Multi_White.png"
        hoverImage="/portfolio/Belmacs_Hover.png"
        imageAlt="Perform Industries website preview"
        imagePosition="left"
        siteUrl="https://www.performindustries.com"
      />

      <TemplateProjectSection
        title="Concepts across"
        subtitle="industries"
        description="Design studies across different industries demonstrating our versatility and creative approach."
        concepts={concepts}
      />

      <ClientTestimonialSection testimonials={testimonials} />

      <CTASection
        title="Ready to engineer your success story?"
        description="Let's discuss your technical requirements and create a custom solution that delivers measurable results."
        buttonText="Contact Us"
        buttonLink="/contact"
        highlightWord="success story?"
        features="Custom solutions • No templates • Guaranteed performance"
      />
    </div>
  );
}
