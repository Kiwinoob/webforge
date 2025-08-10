import HeroSection from "../../components/portfolio/hero-section";
import ClientProjectSection from "../../components/portfolio/client-project-section";
import ConceptProjectSection from "../../components/portfolio/concept-project-section";
import ClientTestimonialSection from "../../components/portfolio/client-testimonial-section";
import CTASection from "../../components/common/cta-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

// Import datatypes
import { ClientProject } from "../../types/client-project";
import { ConceptProject } from "../../types/concept-project";
import { Testimonial } from "../../types/testimonial";

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Portfolio",

  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
});

// Function to fetch Client Projects
async function fetchClientProjects(): Promise<ClientProject[]> {
  try {
    const res = await fetch("http://54.251.165.197:8080/clientproject/get", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error("Failed to fetch client projects");
    const data = await res.json();
    console.log("Successfully fetched projects at", new Date().toISOString());
    return data;
  } catch (error) {
    console.log("Backend server error: ", error);
    return []; // return empty array
  }
}

// Function to fetch concept projects
async function fetchConceptProjects(): Promise<ConceptProject[]> {
  try {
    const res = await fetch("http://54.251.165.197:8080/conceptproject/get", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error("Failed to fetch client projects");
    const data = await res.json();
    console.log("Successfully fetched projects at", new Date().toISOString());
    return data;
  } catch (error) {
    console.log("Backend server error: ", error);
    return []; // return empty array
  }
}

// Function to fetch testimonials
async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch("http://54.251.165.197:8080/testimonial/get", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error("Failed to fetch client projects");
    const data = await res.json();
    console.log("Successfully fetched projects at", new Date().toISOString());
    return data;
  } catch (error) {
    console.log("Backend server error: ", error);
    return []; // return empty array
  }
}

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

export default async function PortfolioPage() {
  const [clientProjects, conceptProjects, testimonials] = await Promise.all([
    fetchClientProjects(),
    fetchConceptProjects(),
    fetchTestimonials(),
  ]);

  return (
    <div className="min-h-screen bg-neutral-950">
      <HeroSection></HeroSection>

      {clientProjects.map((clientProject) => (
        <ClientProjectSection
          key={clientProject.id}
          badge={clientProject.badge}
          title={clientProject.title}
          subtitle={clientProject.subtitle}
          description={clientProject.description}
          challenge={clientProject.challenge}
          solution={clientProject.solution}
          defaultImage={clientProject.defaultImage}
          hoverImage={clientProject.hoverImage}
          imageAlt={clientProject.imageAlt}
          imagePosition={clientProject.imagePosition}
          url={clientProject.url}
        />
      ))}

      <ConceptProjectSection concepts={conceptProjects} />

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
