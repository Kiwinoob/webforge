"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video plays when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

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
    <section
      id="/"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero.png" // Fallback image while video loads
        >
          <source src="/webforge-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 -mt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none mb-4">
            Crafting Digital Excellence
          </h1>
          <p className="max-w-[600px] text-xl text-white/90 mb-8">
            Turning your vision into powerful, handcrafted web solutions
          </p>
        </div>
      </div>
    </section>
  );
}
