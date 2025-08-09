"use client";

import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/common/fade-in";

export default function HeroSection() {
  const stats = [
    { number: "2", label: "Projects" },
    { number: "3", label: "Concepts" }
  ];

  const industries = [
    "Engineering",
    "Professional Services", 
    "Food & Beverages",
    "Healthcare"
  ];

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Badge and Title */}
            <div className="space-y-6">
              <FadeIn direction="up" distance={20} duration={0.5}>
                <Badge
                  variant="outline"
                  className="border-[#C1440E] text-[#C1440E] bg-transparent"
                >
                  DESIGNS & CONCEPTS
                </Badge>
              </FadeIn>

              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block">Our</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block text-[#C1440E]"> Portfolio</span>
                </FadeIn>
              </div>

              <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                <div className="w-16 sm:w-24 h-1 bg-[#C1440E]"></div>
              </FadeIn>
            </div>

            {/* Description */}
            <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed">
                From concept to completion - see how we transform businesses
                through strategic design and development.
              </p>
            </FadeIn>

            {/* Mobile Info Cards - Only Projects and Concepts (No Background) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} direction="up" distance={16} duration={0.4} delay={0.5 + (index * 0.1)}>
                  <div className="p-4 sm:p-6">
                    <div className="space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C1440E]">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                        {stat.label}
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
            {/* Left Column - Stats */}
            <div className="col-span-2">
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <FadeIn key={stat.label} direction="left" distance={24} duration={0.5} delay={0.2 + (index * 0.1)}>
                    <div className="space-y-2">
                      <div className="text-3xl xl:text-4xl font-bold text-[#C1440E]">{stat.number}</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Center Column - Main Content */}
            <div className="col-span-8">
              <div className="space-y-8">
                <div className="space-y-6">
                  <FadeIn direction="up" distance={20} duration={0.5}>
                    <Badge
                      variant="outline"
                      className="border-[#C1440E] text-[#C1440E] bg-transparent"
                    >
                      DESIGNS & CONCEPTS
                    </Badge>
                  </FadeIn>

                  <div className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-none tracking-tight">
                    <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                      <span className="block">Our</span>
                    </FadeIn>
                    <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                      <span className="block text-[#C1440E]"> Portfolio</span>
                    </FadeIn>
                  </div>

                  <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                    <div className="w-24 h-1 bg-[#C1440E]"></div>
                  </FadeIn>
                </div>

                <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
                  <p className="text-xl xl:text-2xl text-neutral-300 leading-relaxed max-w-3xl">
                    From concept to completion - see how we transform businesses
                    through strategic design and development.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column - Industries */}
            <div className="col-span-2 flex flex-col justify-end">
              <div className="space-y-4">
                <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Industries
                  </div>
                </FadeIn>
                
                <div className="space-y-2 text-neutral-300">
                  {industries.map((industry, index) => (
                    <FadeIn key={industry} direction="right" distance={16} duration={0.4} delay={0.4 + (index * 0.08)}>
                      <div>{industry}</div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
