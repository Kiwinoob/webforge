"use client";

import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/common/fade-in";

interface HeroSectionProps {
  currentStep: number;
  totalSteps: number;
}

export default function HeroSection({
  currentStep,
  totalSteps,
}: HeroSectionProps) {
  return (
    // Adjust vertical padding for smaller screens
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/*
          Mobile & Tablet: Use flex-col to stack elements.
          Desktop (lg): Switch to a 12-column grid.
        */}
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-6">
          {/* 
            Left column for the progress tracker.
            Hidden on mobile/tablet, visible on desktop.
          */}
          <div className="hidden lg:block lg:col-span-2">
            {/* This space is intentionally left empty. 
                The StickyProgressTracker component will occupy this area visually on desktop. */}
          </div>

          {/* 
            Main content area.
            Takes full width on mobile, spans 8 columns on desktop.
          */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <FadeIn direction="up" distance={20} duration={0.5}>
                  <Badge
                    variant="outline"
                    className="border-red-600 text-red-600 bg-transparent"
                  >
                    PROJECT BRIEF QUESTIONNAIRE
                  </Badge>
                </FadeIn>

                {/* Responsive heading font sizes with staggered animations */}
                <div className="text-5xl font-bold text-white leading-tight tracking-tight md:text-6xl lg:text-7xl">
                  <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                    <span className="block">Let's discuss</span>
                  </FadeIn>
                  <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                    <span className="block">your project</span>
                  </FadeIn>
                  <FadeIn direction="up" distance={24} duration={0.6} delay={0.3}>
                    <span className="block text-red-600">requirements</span>
                  </FadeIn>
                </div>

                <FadeIn direction="right" distance={24} duration={0.5} delay={0.4}>
                  <div className="w-24 h-1 bg-red-600"></div>
                </FadeIn>
              </div>

              {/* Responsive paragraph font sizes */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.5}>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl md:text-xl lg:text-2xl">
                  Help us understand your business and project needs so we can
                  create the perfect solution for your Singapore business.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* 
            SLA info column.
            Stacks at the bottom on mobile, aligns to the side on desktop.
          */}
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:justify-end">
            <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
              <div className="space-y-2">
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  RESPONSE SLA
                </div>
                {/* Adjusted font size for better consistency */}
                <div className="text-4xl font-bold text-red-600">24h</div>
                <div className="text-neutral-400">Guaranteed response time</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
