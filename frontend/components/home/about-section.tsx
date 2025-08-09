"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/common/fade-in";

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

interface StatDisplayProps {
  number: string;
  label: string;
  delay?: number;
}

interface Feature {
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

// FeatureCard component with animation inside
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <div className="space-y-4">
      <FadeIn direction="up" distance={20} duration={0.5} delay={delay}>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </FadeIn>
    </div>
  );
};

// StatDisplay component with animation inside
const StatDisplay: React.FC<StatDisplayProps> = ({ number, label, delay = 0 }) => {
  return (
    <div className="text-center">
      <FadeIn direction="up" distance={16} duration={0.4} delay={delay}>
        <div className="text-3xl font-bold text-[#D85D25]">{number}</div>
        <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">
          {label}
        </div>
      </FadeIn>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Quality Over Quantity",
      description:
        "We focus on crafting exceptional websites, not churning out templates. Every project receives our full attention and expertise.",
    },
    {
      title: "Partnership Approach",
      description:
        "We believe in long-term partnerships. Your success is our success, and we're committed to supporting your growth.",
    },
    {
      title: "Technical Excellence",
      description:
        "Hand-coded, performance-optimized, built to last. We use cutting-edge technology to ensure your website performs flawlessly.",
    },
    {
      title: "Transparent Process",
      description:
        "Clear communication, detailed methodology, and quality assurance processes ensure you're always informed.",
    },
  ];

  const stats: Stat[] = [
    { number: "24h", label: "Response Time" },
    { number: "100%", label: "Custom Code" },
    { number: "4-12", label: "Weeks Delivery" },
    { number: "SG", label: "Based Team" },
  ];

  return (
    <section className="bg-black py-20 lg:py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main layout: stacks on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Left Column (Title): Full-width on mobile, fixed on large screens */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="space-y-4">
              <FadeIn direction="right" distance={24} duration={0.5}>
                <Badge className="bg-[#D85D25]/10 text-[#D85D25] text-xs px-3 py-1 border border-[#D85D25]/30 font-semibold">
                  SINGAPORE EXPERTISE
                </Badge>
              </FadeIn>
              
              <div className="text-4xl font-bold text-white leading-tight">
                <FadeIn direction="right" distance={24} duration={0.5} delay={0.1}>
                  <span className="block">We're not just</span>
                </FadeIn>
                <FadeIn direction="right" distance={24} duration={0.5} delay={0.16}>
                  <span className="block">developers,</span>
                </FadeIn>
                <FadeIn direction="right" distance={24} duration={0.5} delay={0.22}>
                  <span className="block">we're your digital</span>
                </FadeIn>
                <FadeIn direction="right" distance={24} duration={0.5} delay={0.28}>
                  <span className="block text-[#D85D25]">partners</span>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Right Column (Content): Margin-top for mobile stacking, removed for large screens */}
          <div className="flex-1 mt-16 lg:mt-0">
            <div className="space-y-16">
              {/* Features Grid: 1 col on mobile, 2 cols on tablet (md) and up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    delay={0.1 + (index * 0.08)} // Staggered delay
                  />
                ))}
              </div>

              {/* Stats Row: 2 cols on mobile, 4 cols on tablet (md) and up */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-800">
                {stats.map((stat, index) => (
                  <StatDisplay
                    key={index}
                    number={stat.number}
                    label={stat.label}
                    delay={0.4 + (index * 0.06)} // Staggered delay for stats
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
