"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";

interface ConceptCard {
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  imageAlt: string;
  tags: string;
  siteUrl: string;
}

interface ConceptProjectProps {
  title: string;
  subtitle: string;
  description: string;
  concepts: ConceptCard[];
  className?: string;
  accentColor?: string;
}

export default function ConceptProjectSection({
  title,
  subtitle,
  description,
  concepts,
  className = "",
  accentColor = "#C1440E",
}: ConceptProjectProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const pillRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Delay factor: 0.1 = slow follow, 0.3 = medium, 0.5 = fast follow
  const DELAY_FACTOR = 0.05;

  const animateToTarget = useCallback(() => {
    if (!pillRef.current || hoveredCard === null) return;

    // Linear interpolation (lerp) towards target position
    const dx = targetPosition.x - currentPosition.current.x;
    const dy = targetPosition.y - currentPosition.current.y;

    // Move current position towards target by delay factor
    currentPosition.current.x += dx * DELAY_FACTOR;
    currentPosition.current.y += dy * DELAY_FACTOR;

    // Update pill position
    pillRef.current.style.transform = `translate(${
      currentPosition.current.x + 20
    }px, ${currentPosition.current.y - 15}px)`;

    // Continue animation if we haven't reached target (with small tolerance)
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      animationRef.current = requestAnimationFrame(animateToTarget);
    }
  }, [targetPosition, hoveredCard, DELAY_FACTOR]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const newTarget = { x: e.clientX, y: e.clientY };
      setTargetPosition(newTarget);

      // Cancel existing animation and start new one
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animateToTarget);
    },
    [animateToTarget]
  );

  const handleCardEnter = useCallback((index: number, e: React.MouseEvent) => {
    setHoveredCard(index);

    // Set both current and target to mouse position for immediate appearance
    const initialPosition = { x: e.clientX, y: e.clientY };
    setTargetPosition(initialPosition);
    currentPosition.current = { ...initialPosition };

    // Set initial position immediately
    if (pillRef.current) {
      pillRef.current.style.transform = `translate(${
        initialPosition.x + 20
      }px, ${initialPosition.y - 15}px)`;
    }
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className={`py-12 sm:py-16 lg:py-24 border-t border-neutral-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm text-neutral-400 uppercase tracking-wider">
                Concept Archive
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {title}
                <br />
                <span style={{ color: accentColor }}>{subtitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{description}</p>
            </div>

            {/* Concept Cards - Mobile 2-Column Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {concepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 overflow-hidden group transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1"
                  style={
                    {
                      "--hover-border-color": accentColor,
                    } as React.CSSProperties & {
                      "--hover-border-color": string;
                    }
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor;
                    handleCardEnter(index, e);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    handleCardLeave();
                  }}
                  onMouseMove={handleMouseMove}
                  onClick={() =>
                    concept.siteUrl && window.open(concept.siteUrl, "_blank")
                  }
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {/* Placeholder grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-12 gap-1 sm:gap-2 h-full p-2 sm:p-4">
                        {Array.from({ length: 144 }).map((_, i) => (
                          <div key={i} className="bg-white/20 rounded-sm"></div>
                        ))}
                      </div>
                    </div>

                    {/* Default image */}
                    <Image
                      src={concept.image}
                      alt={concept.imageAlt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* Hover image */}
                    <Image
                      src={concept.hoverImage}
                      alt={concept.imageAlt}
                      width={400}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-sm sm:text-lg font-bold text-white group-hover:opacity-80 transition-opacity leading-tight">
                        {concept.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{concept.description}</p>
                    </div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">
                      {concept.tags}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="space-y-4">
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  Concept Archive
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  {title}
                  <br />
                  <span style={{ color: accentColor }}>{subtitle}</span>
                </h2>
                <p className="text-neutral-400 leading-relaxed">{description}</p>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-6 xl:gap-8">
                {concepts.map((concept, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 border border-neutral-800 overflow-hidden group transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1"
                    style={
                      {
                        "--hover-border-color": accentColor,
                      } as React.CSSProperties & {
                        "--hover-border-color": string;
                      }
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accentColor;
                      handleCardEnter(index, e);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                      handleCardLeave();
                    }}
                    onMouseMove={handleMouseMove}
                    onClick={() =>
                      concept.siteUrl && window.open(concept.siteUrl, "_blank")
                    }
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {/* Placeholder grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-12 gap-2 h-full p-4">
                          {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="bg-white/20 rounded-sm"></div>
                          ))}
                        </div>
                      </div>

                      {/* Default image */}
                      <Image
                        src={concept.image}
                        alt={concept.imageAlt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-0"
                      />

                      {/* Hover image */}
                      <Image
                        src={concept.hoverImage}
                        alt={concept.imageAlt}
                        width={400}
                        height={300}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:opacity-80 transition-opacity">
                          {concept.title}
                        </h3>
                        <p className="text-neutral-400">{concept.description}</p>
                      </div>
                      <div className="text-sm text-neutral-500 uppercase tracking-wider">
                        {concept.tags}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delayed cursor-following pill - Only show on desktop */}
      <div
        ref={pillRef}
        className={`hidden lg:block fixed pointer-events-none z-50 px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg will-change-transform transform transition-all duration-300 ease-out
        ${hoveredCard !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{
          backgroundColor: accentColor,
          left: 0,
          top: 0,
          transform: "translate(0px, 0px)",
          visibility: hoveredCard !== null ? "visible" : "hidden",
        }}
      >
        Visit Site →
      </div>
    </section>
  );
}
