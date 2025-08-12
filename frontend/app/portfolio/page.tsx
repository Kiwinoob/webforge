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
          key = {clientProject.id}
          badge = {clientProject.badge} 
          title = {clientProject.title}
          subtitle = {clientProject.subtitle} 
          description = {clientProject.description}
          challenge = {clientProject.challenge} 
          solution = {clientProject.solution}
          defaultImage = {clientProject.defaultImage} 
          hoverImage = {clientProject.hoverImage}
          imageAlt = {clientProject.imageAlt} 
          imagePosition = {clientProject.imagePosition}
          url = {clientProject.url}
        />
      ))}

      <ConceptProjectSection
        concepts={conceptProjects}
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
