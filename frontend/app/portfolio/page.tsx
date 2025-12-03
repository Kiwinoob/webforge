import HeroSection from "../../components/portfolio/hero-section";
import ClientProjectSection from "../../components/portfolio/client-project-section";
import ConceptProjectSection from "../../components/portfolio/concept-project-section";
import ClientTestimonialSection from "../../components/portfolio/client-testimonial-section";
import CTASection from "../../components/common/cta-section";
import PortfolioSchema from "../../components/portfolio/portfolio-schema";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

// Import datatypes
import { ClientProject } from "../../types/client-project";
import { ConceptProject } from "../../types/concept-project";
import { Testimonial } from "../../types/testimonial";

// Remove the fetch functions and replace with static data
const clientProjects: ClientProject[] = [
  {
    id: 1,
    badge: "Engineering",
    title: "Belmacs Engineering",
    subtitle: "Website Revamp",
    description:
      "Our team updated the visual layout, improved usability, and optimized performance across devices. The result is a clean, responsive site that feels current, intuitive, and aligned with the client's goals — giving their online presence new life and a stronger impact.",
    challenge:
      "Legacy static site with 8s load times and 12% mobile conversion rate",
    solution:
      "Custom React application with integrated CRM and admin authentication",
    defaultImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/client-project%2Fbelmacs%2FBelmacs_DefaultImage.webp?alt=media&token=49e82eb1-361d-4df5-9021-858c680af045",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/client-project%2Fbelmacs%2FBelmacs_HoverImage.webp?alt=media&token=17259463-4346-412b-9dbb-6a3150d405fd",
    imageAlt: "Belmacs Engineering website preview",
    imagePosition: "right",
    url: "https://www.belmacs.com.sg/",
  },
  {
    id: 2,
    badge: "Interior Design",
    title: "Perform Industries",
    subtitle: "Website Overhaul (WIP)",
    description:
      "We are in the midst of re-designing Perform Industries' website to better reflect their professionalism and industry expertise. From a re-designed interface to improved navigation and mobile optimization, every element was built with clarity, performance, and purpose in mind",
    challenge: "Legacy static site with long load times and low-quality images",
    solution:
      "Custom Next.js application with integrated CMS and project portal",
    defaultImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/client-project%2Fperform-industries%2FPerformIndustriesPlaceholder.png?alt=media&token=22d5cdd9-5abe-43af-a075-1e2b08fe52bf",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/client-project%2Fperform-industries%2FPerformIndustriesPlaceholder.png?alt=media&token=22d5cdd9-5abe-43af-a075-1e2b08fe52bf",
    imageAlt: "Image for Perform Industries",
    imagePosition: "left",
    url: "https://webforge-perform.vercel.app/",
  },
];

const conceptProjects: ConceptProject[] = [
  {
    id: 1,
    title: "Dragon's Den",
    description:
      "Modern restaurant website concept with elegant design and menu display.",
    tags: "Restaurant • Chinese • Elegant",
    defaultImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Fdragons-den%2FDragonsDen_DefaultImage.webp?alt=media&token=26f5ac06-da1e-4006-89df-451cb3e09d06",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Fdragons-den%2FDragonsDen_Hover.webp?alt=media&token=044ccdfd-4ab7-4f2c-bf58-14f9b97bedba",
    imageAlt: "Chinese restaurant website concept",
    url: "https://dragons-den-sg.vercel.app",
  },
  {
    id: 2,
    title: "Furry Friends",
    description:
      "Clean, modern design for Singapore pet care startup with service booking and team profiles.",
    tags: "Healthcare • Pet Care • Team Profiles",
    defaultImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Ffurry-friends%2FFurryFriends_DefaultImage.webp?alt=media&token=22fa0caf-bcdf-4f3f-ae63-98c17853938a",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Ffurry-friends%2FFurryFriends_Hover.webp?alt=media&token=da930e27-cf1f-44d3-9874-f00972d69908",
    imageAlt: "Veterinary clinic website concept",
    url: "https://furry-friends-webforge.vercel.app/",
  },
  {
    id: 3,
    title: "Crochet & Co",
    description:
      "Elegant ecommerce website for crochet products with online store and customer reviews.",
    tags: "E-commerce • Retail • Payment Integration",
    defaultImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Fcrochet-and-co%2FCrochetCo_DefaultImage.webp?alt=media&token=2dc3a506-acd9-4a96-a6df-100285544c8b",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/concept-project%2Fcrochet-and-co%2FCrochetCo_Hover.webp?alt=media&token=e91015af-e62c-4b38-ab6e-5af54b206174",
    imageAlt: "Veterinary clinic website concept",
    url: "https://furry-friends-webforge.vercel.app/",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Benny Wong",
    company: "Belmacs Engineering",
    title: "Managing Director",
    quote:
      "WebForge's technical approach transformed our digital presence. They were a pleasure to work with",
  },
];

export const metadata: Metadata = constructMetadata({
  title: "WebForge | Portfolio",
  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "Webforge, WebforgeSG, Web Design, Web Development, UI/UX Design, Graphic Design, Digital Marketing, SEO, Content Writing, Photo Editing, Custom web design, small business websites,",
  ogType: "website",
  pathname: "/portfolio",
});

// // Function to fetch Client Projects
// async function fetchClientProjects(): Promise<ClientProject[]> {
//   try {
//     const res = await fetch("http://54.251.165.197:8080/clientproject/get", {
//       next: { revalidate: 3600 },
//       signal: AbortSignal.timeout(5000),
//     });

//     if (!res.ok) throw new Error("Failed to fetch client projects");
//     const data = await res.json();
//     console.log("Successfully fetched projects at", new Date().toISOString());
//     return data;
//   } catch (error) {
//     console.log("Backend server error: ", error);
//     return []; // return empty array
//   }
// }

// // Function to fetch concept projects
// async function fetchConceptProjects(): Promise<ConceptProject[]> {
//   try {
//     const res = await fetch("http://54.251.165.197:8080/conceptproject/get", {
//       next: { revalidate: 3600 },
//       signal: AbortSignal.timeout(5000),
//     });

//     if (!res.ok) throw new Error("Failed to fetch client projects");
//     const data = await res.json();
//     console.log("Successfully fetched projects at", new Date().toISOString());
//     return data;
//   } catch (error) {
//     console.log("Backend server error: ", error);
//     return []; // return empty array
//   }
// }

// // Function to fetch testimonials
// async function fetchTestimonials(): Promise<Testimonial[]> {
//   try {
//     const res = await fetch("http://54.251.165.197:8080/testimonial/get", {
//       next: { revalidate: 3600 },
//       signal: AbortSignal.timeout(5000),
//     });

//     if (!res.ok) throw new Error("Failed to fetch client projects");
//     const data = await res.json();
//     console.log("Successfully fetched projects at", new Date().toISOString());
//     return data;
//   } catch (error) {
//     console.log("Backend server error: ", error );
//     return []; // return empty array
//   }
// }

export default async function PortfolioPage() {
  // const [clientProjects, conceptProjects, testimonials] = await Promise.all([
  //   fetchClientProjects(),
  //   fetchConceptProjects(),
  //   fetchTestimonials(),
  // ]);

  return (
    <div className="min-h-screen bg-neutral-950">
      <PortfolioSchema />
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
