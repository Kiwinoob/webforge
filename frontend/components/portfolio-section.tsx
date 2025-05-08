import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInUp from './fade-in-up';

// Define the type for portfolio items
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
};

// Fallback portfolio data in the case of backend failure
const fallbackPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Belmacs Engineering Website Revamp",
    description:
      "We revamped Belmacs Engineering's website with a fresh, modern design tailored to the client's evolving brand and user expectations. Our team updated the visual layout, improved usability, and optimized performance across devices. The result is a clean, responsive site that feels current, intuitive, and aligned with the client's goals—giving their online presence new life and a stronger impact.",
    client: "Belmacs Pte Ltd",
    category: "Business",
      imageUrl: "/belmacs.png",
    projectUrl: "https://www.belmacs.com.sg/",
  },
];

async function getProjects(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch('http://localhost:8080/project', { 
      cache: 'no-store',
      // Add a reasonable timeout to prevent hanging if server is down
      signal: AbortSignal.timeout(5000) 
    });
    
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  } catch (error) {
    console.log("Backend server error, using fallback data:", error);
    return fallbackPortfolioItems;
  }
}

export async function PortfolioSection() {
  const projects = await getProjects();
  
  return (
    <section
      id="portfolio"
      className="w-full py-8 md:py-16 lg:py-20 bg-webforge-background"
    >
      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Portfolio
            </span>
          </h3>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-webforge-dark mb-4">
                  {project.title}
                </h3>
                <p className="text-webforge-dark/80 mb-6">{project.description}</p>
                <div className="flex justify-end">
                  <Link href={project.projectUrl}>
                    <Button className="bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white">
                      Visit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
}
