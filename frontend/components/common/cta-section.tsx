"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/common/fade-in";

export default function CTASection({
  title = "Ready to start your project?",
  description = "Get a custom proposal with fixed pricing and clear timeline. No hidden costs, no surprises.",
  buttonText = "Start Your Project Brief",
  buttonLink = "/contact",
  highlightWord = "project?", // The word that becomes orange-coloured
  features = "Free consultation • Fixed pricing • 24h response",
}) {
  // Function to highlight specific word in title
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-red-600">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <FadeIn direction="up" distance={24} duration={0.6}>
            <div className="space-y-8">
              {/* Title */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {renderTitle()}
                </h2>
              </FadeIn>

              {/* Description */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.2}>
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed">
                  {description}
                </p>
              </FadeIn>

              {/* Available Capacity - Mobile */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
                <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      Available Capacity
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-red-600">
                      2 Projects
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* CTA Button and Features */}
              <div className="space-y-6">
                <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4"
                  >
                    <Link href={buttonLink}>
                      {buttonText} <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                </FadeIn>
                
                <FadeIn direction="up" distance={16} duration={0.4} delay={0.5}>
                  <div className="text-sm sm:text-base text-neutral-400 font-medium text-center sm:text-left">
                    {features}
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <FadeIn direction="up" distance={24} duration={0.6}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="space-y-8">
                  <FadeIn direction="up" distance={20} duration={0.5} delay={0.1}>
                    <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                      {renderTitle()}
                    </h2>
                  </FadeIn>

                  <FadeIn direction="up" distance={20} duration={0.5} delay={0.2}>
                    <p className="text-xl xl:text-2xl text-neutral-300 leading-relaxed max-w-3xl">
                      {description}
                    </p>
                  </FadeIn>

                  <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
                    <div className="flex items-center space-x-6 xl:space-x-8">
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 xl:px-8 py-3 xl:py-4"
                      >
                        <Link href={buttonLink}>
                          {buttonText} <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <div className="text-neutral-400 font-medium">{features}</div>
                    </div>
                  </FadeIn>
                </div>
              </div>
              
              <div className="col-span-4 flex flex-col justify-end">
                <FadeIn direction="up" distance={20} duration={0.5} delay={0.25}>
                  <div className="space-y-4">
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Available Capacity
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      2 Projects
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
