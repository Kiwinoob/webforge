import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInUp from "./fade-in-up";
import { useState, useEffect } from "react";

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

// Helper function to detect if the URL is for a video  
const isVideo = (url: string) => {
  return url?.match(/\.(mp4|webm|ogg|mov)(?=\?|$)/i) !== null;
};

// Fallback portfolio data in the case of backend failure
const fallbackPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Belmacs Engineering Website Revamp",
    description:
      "We revamped Belmacs Engineering's website with a fresh, modern design tailored to the client's evolving brand and user expectations. Our team updated the visual layout, improved usability, and optimized performance across devices. The result is a clean, responsive site that feels current, intuitive, and aligned with the client's goals-giving their online presence new life and a stronger impact.",
    client: "Belmacs Pte Ltd",
    category: "Business",
    imageUrl: "/belmacs.png",
    projectUrl: "https://www.belmacs.com.sg/",
  },
];

async function fetchProjects(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch("https://webforge-backend.onrender.com/project", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    console.log("Successfully fetched projects at", new Date().toISOString());
    return data;
  } catch (error) {
    console.log("Backend server error, using fallback data:", error);
    return fallbackPortfolioItems;
  }
}

export function PortfolioSection() {
  const [projects, setProjects] = useState<PortfolioItem[]>(
    fallbackPortfolioItems
  );

  useEffect(() => {
    // Initial fetch
    fetchProjects().then(setProjects);

    // Set up interval for periodic fetching every 30 seconds
    const intervalId = setInterval(async () => {
      const updatedProjects = await fetchProjects();
      setProjects(updatedProjects);
    }, 30000); // 30000 milliseconds = 30 seconds

    // Cleanup interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this runs once on mount

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
              <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                {isVideo(project.imageUrl) ? (
                  <video
                    src={project.imageUrl}
                    autoPlay
                    loop
                    muted // Important for autoplay to work in most browsers
                    playsInline // Important for iOS
                    className="w-full h-full object-cover"
                    // Optional: Add a poster image that shows while the video loads
                    // poster="/path/to/your/video-poster.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title || "Project image"}
                    width={600} // Intrinsic width
                    height={400} // Intrinsic height
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                    className="w-full h-full object-cover" // Ensure image covers the container
                    priority={projects.indexOf(project) < 2} // Prioritize loading for the first few images
                  />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-webforge-dark mb-4">
                  {project.title}
                </h3>
                <p className="text-webforge-dark/80 mb-6">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white">
                      Visit
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
}
