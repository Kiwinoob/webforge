"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none mb-4">
            Crafting Digital Excellence
          </h1>
          <p className="max-w-[600px] text-xl text-white/90 mb-8">
            Turning your vision into powerful, handcrafted web solutions
          </p>
          {/* <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="inline-flex items-center gap-2 bg-webforge-accent hover:bg-webforge-accent/90 text-white"
              onClick={() => scrollToSection("quote")}
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => scrollToSection("portfolio")}
            >
              View Our Work
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
