"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import FadeIn from "../common/fade-in";

interface ConceptCard {
  id: number;
  title: string;
  description: string;
  defaultImage: string;
  hoverImage: string;
  imageAlt: string;
  tags: string;
  url: string;
}

interface ConceptProjectProps {
  concepts: ConceptCard[]; // ✅ Accept concepts as a list
}

export default function ConceptProjectSection({
  concepts,
}: ConceptProjectProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const pillRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Fixed values from original
  const accentColor = "#C1440E";
  const DELAY_FACTOR = 0.05;

  const animateToTarget = useCallback(() => {
    if (!pillRef.current || hoveredCard === null) return;

    const dx = targetPosition.x - currentPosition.current.x;
    const dy = targetPosition.y - currentPosition.current.y;

    currentPosition.current.x += dx * DELAY_FACTOR;
    currentPosition.current.y += dy * DELAY_FACTOR;

    pillRef.current.style.transform = `translate(${
      currentPosition.current.x + 20
    }px, ${currentPosition.current.y - 15}px)`;

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      animationRef.current = requestAnimationFrame(animateToTarget);
    }
  }, [targetPosition, hoveredCard, DELAY_FACTOR]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const newTarget = { x: e.clientX, y: e.clientY };
      setTargetPosition(newTarget);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animateToTarget);
    },
    [animateToTarget]
  );

  const handleCardEnter = useCallback((index: number, e: React.MouseEvent) => {
    setHoveredCard(index);

    const initialPosition = { x: e.clientX, y: e.clientY };
    setTargetPosition(initialPosition);
    currentPosition.current = { ...initialPosition };

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

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <FadeIn direction="up" distance={16} duration={0.5}>
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  Concept Archive
                </div>
              </FadeIn>

              <div className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block leading-tight">Concepts across</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span
                    className="block leading-tight"
                    style={{ color: accentColor }}
                  >
                    industries
                  </span>
                </FadeIn>
              </div>

              <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Design studies across different industries demonstrating our
                  versatility and creative approach.
                </p>
              </FadeIn>
            </div>

            {/* Concept Cards - Mobile 2-Column Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {concepts.map((concept, index) => (
                <FadeIn
                  key={concept.id}
                  direction="up"
                  distance={20}
                  duration={0.5}
                  delay={0.4 + index * 0.05}
                >
                  <div
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
                      concept.url && window.open(concept.url, "_blank")
                    }
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {/* Placeholder grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-12 gap-1 sm:gap-2 h-full p-2 sm:p-4">
                          {Array.from({ length: 144 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-white/20 rounded-sm"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Default image */}
                      <Image
                        alt={concept.imageAlt}
                        src={concept.defaultImage}
                        fill
                        className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-0"
                      />

                      {/* Hover image */}
                      <Image
                        src={concept.hoverImage}
                        alt={concept.imageAlt}
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-sm sm:text-lg font-bold text-white group-hover:opacity-80 transition-opacity leading-tight">
                          {concept.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                          {concept.description}
                        </p>
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {concept.tags}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="space-y-4">
                <FadeIn direction="left" distance={24} duration={0.5}>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Concept Archive
                  </div>
                </FadeIn>

                <div className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  <FadeIn
                    direction="left"
                    distance={24}
                    duration={0.6}
                    delay={0.1}
                  >
                    <span className="block leading-tight">Concepts across</span>
                  </FadeIn>
                  <FadeIn
                    direction="left"
                    distance={24}
                    duration={0.6}
                    delay={0.2}
                  >
                    <span
                      className="block leading-tight"
                      style={{ color: accentColor }}
                    >
                      industries
                    </span>
                  </FadeIn>
                </div>

                <FadeIn
                  direction="left"
                  distance={20}
                  duration={0.5}
                  delay={0.3}
                >
                  <p className="text-neutral-400 leading-relaxed">
                    Design studies across different industries demonstrating our
                    versatility and creative approach.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-6 xl:gap-8">
                {concepts.map((concept, index) => (
                  <FadeIn
                    key={concept.id}
                    direction="up"
                    distance={24}
                    duration={0.6}
                    delay={0.2 + index * 0.08}
                  >
                    <div
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
                        concept.url && window.open(concept.url, "_blank")
                      }
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        {/* Placeholder grid pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-12 gap-2 h-full p-4">
                            {Array.from({ length: 144 }).map((_, i) => (
                              <div
                                key={i}
                                className="bg-white/20 rounded-sm"
                              ></div>
                            ))}
                          </div>
                        </div>

                        {/* Default image */}
                        <Image
                          src={concept.defaultImage}
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
                          <p className="text-neutral-400">
                            {concept.description}
                          </p>
                        </div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wider">
                          {concept.tags}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
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
        ${
          hoveredCard !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
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
