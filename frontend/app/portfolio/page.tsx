import HeroSection from "../../components/portfolio/hero-section";
import ClientProjectSection from "../../components/portfolio/client-project-section";
import ConceptProjectSection from "../../components/portfolio/concept-project-section";
import ClientTestimonialSection from "../../components/portfolio/client-testimonial-section";
import CTASection from "../../components/common/cta-section";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Suspense } from "react";

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

// Optimized API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const FETCH_TIMEOUT = 3000; // Reduced from 5000ms
const CACHE_DURATION = 3600; // 5 minutes

// Enhanced fetch function with better error handling and caching
async function fetchWithRetry<T>(url: string, retries = 2): Promise<T[]> {
  for (let i = 0; i <= retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

      const res = await fetch(url, {
        next: { revalidate: CACHE_DURATION }, // ISR instead of no-store
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "max-age=3600", // Browser cache
        },
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log(
        `Successfully fetched data from ${url} at`,
        new Date().toISOString()
      );
      return data;
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed for ${url}:`, error);

      if (i === retries) {
        console.error(`All retry attempts failed for ${url}:`, error);
        return []; // Return empty array as fallback
      }

      // Exponential backoff
      await new Promise((resolve) =>
        setTimeout(resolve, Math.pow(2, i) * 1000)
      );
    }
  }
  return [];
}

// Parallel fetch functions with better error handling
async function fetchClientProjects(): Promise<ClientProject[]> {
  return fetchWithRetry<ClientProject>(`${API_BASE_URL}/clientproject/get`);
}

async function fetchConceptProjects(): Promise<ConceptProject[]> {
  return fetchWithRetry<ConceptProject>(`${API_BASE_URL}/conceptproject/get`);
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  return fetchWithRetry<Testimonial>(`${API_BASE_URL}/testimonial/get`);
}

// Static fallback data for better UX during failures
const fallbackConcepts: ConceptProject[] = [
  {
    id: 1,
    title: "Dragon's Den",
    description:
      "Modern restaurant website concept with elegant design and menu display.",
    defaultImage: "/portfolio/DragonsDen_MockupNew.png",
    hoverImage: "/portfolio/DragonsDen_Hover.png",
    imageAlt: "Restaurant website concept",
    tags: "Food & Beverage • Restaurant • Menu Display",
    url: "https://dragons-den-sg.vercel.app",
  },
  {
    id: 2,
    title: "Furry Friends",
    description:
      "Clean, modern design for Singapore pet care startup with service booking and team profiles.",
    defaultImage: "/portfolio/FurryFriends_Mockup.png",
    hoverImage: "/portfolio/FurryFriends_Hover.png",
    imageAlt: "Tech startup website concept",
    tags: "Healthcare • Pet Care • Team Profiles",
    url: "https://furry-friends-webforge.vercel.app/",
  },
  {
    id: 3,
    title: "Crochet & Co",
    description:
      "Elegant ecommerce website for crochet products with online store and customer reviews.",
    defaultImage: "/portfolio/CrochetCo_Mockup.png",
    hoverImage: "/portfolio/CrochetCo_Hover.png",
    imageAlt: "Professional services website concept",
    tags: "E-commerce • Retail • Payment Integration",
    url: "https://www.figma.com/proto/Uh0BcNf3MUNU8jgpYXlUnl/Crochet-and-Co.?node-id=0-3&starting-point-node-id=0%3A3",
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "WebForge's technical approach transformed our digital presence. They were a pleasure to work with.",
    author: "Benny Wong",
    title: "Managing Director",
    company: "Belmacs Engineering",
  },
  {
    id: 2,
    quote:
      "WebForge transformed our outdated website into a modern, professional platform that truly represents our engineering expertise. Their attention to detail and understanding of our industry was exceptional.",
    author: "Allson Sim",
    title: "Project Manager",
    company: "Perform Industries",
  },
];

// Loading components for better UX
function ProjectsLoading() {
  return (
    <div className="animate-pulse space-y-8 p-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <div className="bg-gray-800 h-64 w-96 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="bg-gray-800 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-800 h-4 w-1/2 rounded"></div>
            <div className="bg-gray-800 h-20 w-full rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Separate components for better code splitting
async function ClientProjectsSection() {
  const clientProjects = await fetchClientProjects();

  return (
    <>
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
    </>
  );
}

async function ConceptProjectsSection() {
  const conceptProjects = await fetchConceptProjects();
  const projects =
    conceptProjects.length > 0 ? conceptProjects : fallbackConcepts;

  return <ConceptProjectSection concepts={projects} />;
}

async function TestimonialsSection() {
  const testimonials = await fetchTestimonials();
  const testimonialsToShow =
    testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return <ClientTestimonialSection testimonials={testimonialsToShow} />;
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <HeroSection />

      <Suspense fallback={<ProjectsLoading />}>
        <ClientProjectsSection />
      </Suspense>

      <Suspense fallback={<ProjectsLoading />}>
        <ConceptProjectsSection />
      </Suspense>

      <Suspense fallback={<ProjectsLoading />}>
        <TestimonialsSection />
      </Suspense>

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
