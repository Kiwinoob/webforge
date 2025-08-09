"use client";

import React from "react";
import FadeIn from "@/components/common/fade-in";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ProcessCard: grid item IS the card; animation is inside
const ProcessCard: React.FC<ProcessCardProps> = ({
  number,
  title,
  description,
  color = "bg-red-600",
  delay = 0,
}) => {
  return (
    <div className="h-full bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-colors">
      <FadeIn direction="up" distance={24} duration={0.5} delay={delay} className="h-full">
        <div className="h-full p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 ${color} rounded flex items-center justify-center text-white font-bold text-sm`}
            >
              {number}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
        </div>
      </FadeIn>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, and competitive landscape to create the perfect digital strategy.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "Tailored to your brand identity with modern aesthetics that resonate with Singapore's business culture.",
    },
    {
      number: "3",
      title: "Development",
      description:
        "Hand-coded for performance with cutting-edge technology. No templates, just precision engineering.",
    },
    {
      number: "4",
      title: "Launch & Support",
      description:
        "Going live with comprehensive support and training. We're your ongoing digital partners.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Always at top on mobile/tablet */}
        <div className="mb-8 sm:mb-12 lg:hidden">
          <FadeIn direction="up" distance={24} duration={0.6}>
            <h2 className="text-sm text-neutral-400 uppercase tracking-wider mb-4">
              Our Proven Method
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1} distance={24} duration={0.6}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              From concept to launch in <span className="text-red-600">4-12 weeks</span>
            </h3>
          </FadeIn>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <div className="w-64">
            <div className="space-y-4">
              <FadeIn direction="left" distance={24} duration={0.6}>
                <h2 className="text-sm text-neutral-400 uppercase tracking-wider">
                  Our Proven Method
                </h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.1} distance={24} duration={0.6}>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  From concept
                  <br />
                  to launch in
                  <br />
                  <span className="text-red-600">4-12 weeks</span>
                </h3>
              </FadeIn>
            </div>
          </div>

          <div className="flex-1 ml-12">
            <div className="grid grid-cols-2 gap-6 items-stretch">
              {processSteps.map((step, idx) => (
                <ProcessCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={idx * 0.08} // Staggered animation delay
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {processSteps.map((step, idx) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={idx * 0.08} // Staggered animation delay
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;