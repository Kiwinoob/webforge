import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the type for portfolio items
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

// Portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Belmacs Website Re-design",
    description:
      "We revamped Belmacs Engineering's website with a fresh, modern design tailored to the client's evolving brand and user expectations. Our team updated the visual layout, improved usability, and optimized performance across devices. The result is a clean, responsive site that feels current, intuitive, and aligned with the client's goals—giving their online presence new life and a stronger impact.",
    imageUrl: "/belmacs.png",
    projectUrl: "https://www.belmacs.com.sg/",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-8 md:py-16 lg:py-20 bg-webforge-background"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Portfolio
            </span>
          </h3>
        </div>

        <div className="space-y-20">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-webforge-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-webforge-dark/80 mb-6">{item.description}</p>
                <div className="flex justify-end">
                  <Link href={item.projectUrl}>
                    <Button className="bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white">
                      Visit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
