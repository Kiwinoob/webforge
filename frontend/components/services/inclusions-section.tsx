"use client";

import { Clock, Code, Users, Zap } from "lucide-react";
import FadeIn from "@/components/common/fade-in";

export default function InclusionsSection() {
  const inclusions = [
    {
      icon: Users,
      title: "Initial Consultation",
      description: "Strategy session to understand your business goals, target audience, and project requirements."
    },
    {
      icon: Code,
      title: "Custom Design Mockups", 
      description: "No templates—every design is crafted specifically for your brand and business needs."
    },
    {
      icon: Zap,
      title: "Hand-coded Development",
      description: "Performance-optimized, clean code that loads fast and scales with your business growth."
    },
    {
      icon: Clock,
      title: "Training & Documentation",
      description: "Complete training on managing your website plus detailed documentation for future reference."
    }
  ];

  const stats = [
    { number: "100%", label: "Mobile Responsive" },
    { number: "SEO", label: "Foundation Setup" },
    { number: "24/7", label: "Launch Support" },
    { number: "SG", label: "Based Team" }
  ];

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
                  Standard Inclusions
                </div>
              </FadeIn>

              <div className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tighter">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block">What's included</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block">in every</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.3}>
                  <span className="block text-red-600">project</span>
                </FadeIn>
              </div>
            </div>

            {/* Inclusion Cards - Mobile */}
            <div className="space-y-6">
              {inclusions.map((inclusion, index) => {
                const IconComponent = inclusion.icon;
                return (
                  <FadeIn key={inclusion.title} direction="up" distance={20} duration={0.5} delay={0.4 + (index * 0.1)}>
                    <div className="space-y-6 p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-6 w-6 text-red-600" />
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {inclusion.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                          {inclusion.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Additional Benefits - Mobile */}
            <FadeIn direction="up" distance={20} duration={0.5} delay={0.8}>
              <div className="p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Plus: Mobile Optimization, Basic SEO Setup, Launch Support
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                      <FadeIn key={stat.label} direction="up" distance={16} duration={0.4} delay={0.9 + (index * 0.05)}>
                        <div className="space-y-2">
                          <div className="text-xl sm:text-2xl font-bold text-red-600">{stat.number}</div>
                          <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="space-y-4">
                <FadeIn direction="left" distance={24} duration={0.5}>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Standard Inclusions
                  </div>
                </FadeIn>

                <div className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tighter">
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.1}>
                    <span className="block">What's included</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.2}>
                    <span className="block">in every</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.3}>
                    <span className="block text-red-600">project</span>
                  </FadeIn>
                </div>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-6 xl:gap-8">
                {inclusions.map((inclusion, index) => {
                  const IconComponent = inclusion.icon;
                  return (
                    <FadeIn key={inclusion.title} direction="up" distance={20} duration={0.5} delay={0.2 + (index * 0.08)}>
                      <div className="space-y-6 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-6 w-6 text-red-600" />
                            <h3 className="text-xl font-bold text-white">
                              {inclusion.title}
                            </h3>
                          </div>
                          <p className="text-neutral-300 leading-relaxed">
                            {inclusion.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>

              <FadeIn direction="up" distance={20} duration={0.5} delay={0.5}>
                <div className="mt-8 xl:mt-12 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white">
                      Plus: Mobile Optimization, Basic SEO Setup, Launch Support
                    </h3>
                    <div className="grid grid-cols-4 gap-6">
                      {stats.map((stat, index) => (
                        <FadeIn key={stat.label} direction="up" distance={16} duration={0.4} delay={0.6 + (index * 0.05)}>
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-red-600">{stat.number}</div>
                            <div className="text-sm text-neutral-400 uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
