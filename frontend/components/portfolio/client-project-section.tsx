"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface ClientProjectProps {
  badge: {
    text: string;
    color?: string;
  };
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  defaultImage: string;
  hoverImage: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  siteUrl: string;
}

export default function ClientProjectSection({
  badge,
  title,
  subtitle,
  description,
  challenge,
  solution,
  defaultImage,
  hoverImage,
  imageAlt,
  imagePosition = "right",
  siteUrl,
}: ClientProjectProps) {
  const badgeColor = badge.color || "#C1440E";

  // State for image hover
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Refs for animation
  const pillRef = useRef<HTMLDivElement>(null);
  const currentPosition = useRef({ x: 0, y: 0 });
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const DELAY_FACTOR = 0.05;

  const animateToTarget = useCallback(() => {
    if (!pillRef.current || !isImageHovered) return;

    const dx = mouseTargetRef.current.x - currentPosition.current.x;
    const dy = mouseTargetRef.current.y - currentPosition.current.y;

    currentPosition.current.x += dx * DELAY_FACTOR;
    currentPosition.current.y += dy * DELAY_FACTOR;

    pillRef.current.style.transform = `translate(${
      currentPosition.current.x + 20
    }px, ${currentPosition.current.y - 15}px)`;

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      animationRef.current = requestAnimationFrame(animateToTarget);
    }
  }, [isImageHovered, DELAY_FACTOR]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseTargetRef.current = { x: e.clientX, y: e.clientY };

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animateToTarget);
    },
    [animateToTarget]
  );

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    setIsImageHovered(true);

    const initialPosition = { x: e.clientX, y: e.clientY };
    mouseTargetRef.current = initialPosition;
    currentPosition.current = { ...initialPosition };

    if (pillRef.current) {
      pillRef.current.style.visibility = "visible";
      pillRef.current.style.transform = `translate(${
        initialPosition.x + 20
      }px, ${initialPosition.y - 15}px)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsImageHovered(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    // Allow fade transition before fully hiding
    if (pillRef.current) {
      setTimeout(() => {
        if (pillRef.current && !isImageHovered) {
          pillRef.current.style.visibility = "hidden";
        }
      }, 300);
    }
  }, []);

  const handleImageClick = useCallback(() => {
    if (siteUrl) {
      window.open(siteUrl, '_blank', 'noopener,noreferrer');
    }
  }, [siteUrl]);

  useEffect(() => {
    if (pillRef.current) {
      pillRef.current.style.backgroundColor = badgeColor;
      pillRef.current.style.left = "0px";
      pillRef.current.style.top = "0px";
      pillRef.current.style.visibility = "hidden"; // Initial state
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [badgeColor]);

  const ContentSection = ({ isMobile = false }) => (
    <div className={isMobile ? "" : "col-span-5"}>
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          <Badge
            className="text-white rounded-none text-xs"
            style={{ backgroundColor: badgeColor }}
          >
            {badge.text}
          </Badge>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{title}</h2>
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-2 sm:pb-4"
              style={{ color: badgeColor }}
            >
              {subtitle}
            </h3>
            <div
              className="w-16 sm:w-24 h-1"
              style={{ backgroundColor: badgeColor }}
            ></div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-wider">
              CHALLENGE
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {challenge}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-wider">
              SOLUTION
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ImageSection = ({ isMobile = false }) => (
    <div className={isMobile ? "" : "col-span-7 relative"}>
      <div
        className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden cursor-pointer transition-all duration-300 group"
        style={{
          borderColor: isImageHovered ? badgeColor : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
      >
        {/* Placeholder grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white/20 rounded-sm"></div>
            ))}
          </div>
        </div>

        {/* Default image */}
        <img
          src={defaultImage}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Hover image */}
        <img
          src={hoverImage}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </div>
  );

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-8">
              {/* Image always on top for mobile */}
              <ImageSection isMobile={true} />
              {/* Content always below for mobile */}
              <ContentSection isMobile={true} />
            </div>
          </div>

          {/* Desktop Layout (Large screens and up) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-6 xl:gap-8">
              {imagePosition === "left" ? (
                <>
                  <ImageSection />
                  <ContentSection />
                </>
              ) : (
                <>
                  <ContentSection />
                  <ImageSection />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cursor following pill - Only show on desktop */}
      <div
        ref={pillRef}
        className={`hidden lg:block fixed pointer-events-none z-50 px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg will-change-transform transition-all duration-300 ease-out ${
          isImageHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        View Site →
      </div>
    </>
  );
}
