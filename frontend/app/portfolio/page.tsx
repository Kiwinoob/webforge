import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

// Import datatypes
import { ClientProject } from "../../types/client-project";
import { ConceptProject } from "../../types/concept-project";
import { Testimonial } from "../../types/testimonial";

// Static imports for critical components
import HeroSection from "../../components/portfolio/hero-section";

// Dynamic imports for non-critical components
const ClientProjectSection = dynamic(
  () => import("../../components/portfolio/client-project-section"),
  {
    loading: () => (
      <div className="h-96 bg-neutral-900 animate-pulse rounded-lg" />
    ),
  }
);

const ConceptProjectSection = dynamic(
  () => import("../../components/portfolio/concept-project-section"),
  {
    loading: () => (
      <div className="h-96 bg-neutral-900 animate-pulse rounded-lg" />
    ),
  }
);

const ClientTestimonialSection = dynamic(
  () => import("../../components/portfolio/client-testimonial-section"),
  {
    loading: () => (
      <div className="h-64 bg-neutral-900 animate-pulse rounded-lg" />
    ),
  }
);

const CTASection = dynamic(
  () => import("../../components/common/cta-section"),
  {
    loading: () => (
      <div className="h-48 bg-neutral-900 animate-pulse rounded-lg" />
    ),
  }
);

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Portfolio",
  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
});

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Enhanced fetch function with better error handling and retry logic
async function fetchWithRetry<T>(
  url: string,
  options: RequestInit = {},
  retries = 2
): Promise<T[]> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...options.headers,
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
      if (attempt === retries) {
        console.error(
          `Failed to fetch from ${url} after ${retries + 1} attempts:`,
          error
        );
        return [];
      }

      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  return [];
}

// Optimized fetch functions with caching and revalidation
async function fetchClientProjects(): Promise<ClientProject[]> {
  return fetchWithRetry<ClientProject>(`${API_BASE_URL}/clientproject/get`, {
    next: {
      revalidate: 3600,
      tags: ["client-projects"],
    },
  });
}

async function fetchConceptProjects(): Promise<ConceptProject[]> {
  return fetchWithRetry<ConceptProject>(`${API_BASE_URL}/conceptproject/get`, {
    next: {
      revalidate: 3600, // Cache for 1 hour (concept projects change less frequently)
      tags: ["concept-projects"],
    },
  });
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  return fetchWithRetry<Testimonial>(`${API_BASE_URL}/testimonial/get`, {
    next: {
      revalidate: 1800, // Cache for 30 minutes
      tags: ["testimonials"],
    },
  });
}

// Static fallback data for better resilience
const FALLBACK_CONCEPTS: ConceptProject[] = [
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

const FALLBACK_TESTIMONIALS: Testimonial[] = [
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

// Loading component for better UX
function PortfolioSkeleton() {
  return (
    <div className="space-y-8 p-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-96 bg-neutral-900 animate-pulse rounded-lg" />
      ))}
    </div>
  );
}

// Separate client projects component for better code splitting
function ClientProjects({ projects }: { projects: ClientProject[] }) {
  if (projects.length === 0) return null;

  return (
    <>
      {projects.map((clientProject) => (
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

export default async function PortfolioPage() {
  // Fetch data with parallel requests and fallbacks
  const [clientProjects, conceptProjects, testimonials] =
    await Promise.allSettled([
      fetchClientProjects(),
      fetchConceptProjects(),
      fetchTestimonials(),
    ]);

  // Extract successful results with fallbacks
  const clientProjectsData =
    clientProjects.status === "fulfilled" ? clientProjects.value : [];
  const conceptProjectsData =
    conceptProjects.status === "fulfilled"
      ? conceptProjects.value.length > 0
        ? conceptProjects.value
        : FALLBACK_CONCEPTS
      : FALLBACK_CONCEPTS;
  const testimonialsData =
    testimonials.status === "fulfilled"
      ? testimonials.value.length > 0
        ? testimonials.value
        : FALLBACK_TESTIMONIALS
      : FALLBACK_TESTIMONIALS;

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Critical above-the-fold content loads immediately */}
      <HeroSection />

      {/* Client projects with suspense boundary */}
      <Suspense fallback={<PortfolioSkeleton />}>
        <ClientProjects projects={clientProjectsData} />
      </Suspense>

      {/* Non-critical sections load dynamically */}
      <Suspense
        fallback={
          <div className="h-96 bg-neutral-900 animate-pulse rounded-lg mx-8" />
        }
      >
        <ConceptProjectSection concepts={conceptProjectsData} />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-64 bg-neutral-900 animate-pulse rounded-lg mx-8" />
        }
      >
        <ClientTestimonialSection testimonials={testimonialsData} />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-48 bg-neutral-900 animate-pulse rounded-lg mx-8" />
        }
      >
        <CTASection
          title="Ready to engineer your success story?"
          description="Let's discuss your technical requirements and create a custom solution that delivers measurable results."
          buttonText="Contact Us"
          buttonLink="/contact"
          highlightWord="success story?"
          features="Custom solutions • No templates • Guaranteed performance"
        />
      </Suspense>
    </div>
  );
}
