"use client";

import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/common/fade-in";

export default function HeroSection() {
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
                  className="border-red-600 text-red-600 bg-transparent"
                >
                  SERVICES + PRICING
                </Badge>
              </FadeIn>

              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block">Our</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block text-red-600"> Services</span>
                </FadeIn>
              </div>

              <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                <div className="w-16 sm:w-24 h-1 bg-red-600"></div>
              </FadeIn>
            </div>

            {/* Description */}
            <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed">
                View our service offerings, and the different project tiers we offer to businesses
              </p>
            </FadeIn>

            {/* Mobile Info Cards - Only Tiers */}
            <div className="mt-8">
              <div className="space-y-4">
                <FadeIn direction="up" distance={16} duration={0.4} delay={0.5}>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Tiers
                  </div>
                </FadeIn>
                <div className="space-y-3">
                  <FadeIn direction="left" distance={16} duration={0.4} delay={0.6}>
                    <div className="flex justify-between items-center sm:block">
                      <span className="text-neutral-300">Starter</span>
                    </div>
                  </FadeIn>
                  <FadeIn direction="left" distance={16} duration={0.4} delay={0.7}>
                    <div className="flex justify-between items-center sm:block">
                      <span className="text-neutral-300">Professional</span>
                    </div>
                  </FadeIn>
                  <FadeIn direction="left" distance={16} duration={0.4} delay={0.8}>
                    <div className="flex justify-between items-center sm:block">
                      <span className="text-neutral-300">Enterprise</span>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Tiers & Timeline */}
            <div className="col-span-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <FadeIn direction="left" distance={24} duration={0.5} delay={0.2}>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Tiers
                    </div>
                  </FadeIn>
                  <div className="space-y-3">
                    <FadeIn direction="left" distance={20} duration={0.4} delay={0.3}>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-300">Starter</span>
                      </div>
                    </FadeIn>
                    <FadeIn direction="left" distance={20} duration={0.4} delay={0.4}>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-300">Professional</span>
                      </div>
                    </FadeIn>
                    <FadeIn direction="left" distance={20} duration={0.4} delay={0.5}>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-300">Enterprise</span>
                      </div>
                    </FadeIn>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <FadeIn direction="left" distance={24} duration={0.5} delay={0.6}>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Timeline
                    </div>
                    <div className="text-neutral-300">4-12 weeks</div>
                  </FadeIn>
                </div>
              </div>
            </div>

            {/* Center Column - Main Content */}
            <div className="col-span-8">
              <div className="space-y-8">
                <div className="space-y-6">
                  <FadeIn direction="up" distance={20} duration={0.5}>
                    <Badge
                      variant="outline"
                      className="border-red-600 text-red-600 bg-transparent"
                    >
                      SERVICES + PRICING
                    </Badge>
                  </FadeIn>

                  <div className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-none tracking-tight">
                    <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                      <span className="block">Our</span>
                    </FadeIn>
                    <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                      <span className="block text-red-600"> Services</span>
                    </FadeIn>
                  </div>

                  <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                    <div className="w-24 h-1 bg-red-600"></div>
                  </FadeIn>
                </div>

                <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
                  <p className="text-xl xl:text-2xl text-neutral-300 leading-relaxed max-w-3xl">
                    View our service offerings, and the different project tiers we offer to businesses
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column - Response Time */}
            <div className="col-span-2 flex flex-col justify-end">
              <FadeIn direction="right" distance={24} duration={0.5} delay={0.3}>
                <div className="space-y-4">
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Response Time
                  </div>
                  <div className="text-3xl font-bold text-red-600">24h</div>
                  <div className="text-neutral-400">Guaranteed response</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
