"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import FadeIn from "@/components/common/fade-in";
import Link from "next/link";

interface BenefitItemProps {
  children: React.ReactNode;
  delay?: number;
}

// BenefitItem component with animation inside
const BenefitItem: React.FC<BenefitItemProps> = ({ children, delay = 0 }) => {
  return (
    <li className="flex items-center text-neutral-300 text-sm">
      <FadeIn direction="left" distance={16} duration={0.4} delay={delay}>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-red-600 mr-3 flex-shrink-0" />
          {children}
        </div>
      </FadeIn>
    </li>
  );
};

const CTASection: React.FC = () => {
  const benefits: string[] = [
    "Free initial consultation",
    "Custom project proposal",
    "Clear timeline & process",
  ];

  return (
    <section className="bg-black py-20 lg:py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main layout: Stacks on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-24">
          {/* Left Column: Main content */}
          <div className="flex-1">
            <div className="space-y-8">
              {/* Main headline with staggered lines */}
              <div className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                <FadeIn direction="up" distance={24} duration={0.6}>
                  <span className="block">Ready to transform</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block">your digital</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block text-red-600">presence?</span>
                </FadeIn>
              </div>

              {/* Description paragraph */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Start with a free consultation. We'll analyze your needs and
                  create a custom solution that drives results for your
                  Singapore business.
                </p>
              </FadeIn>

              {/* CTA button group */}
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.4}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-orange-700 text-white px-6 py-6 font-semibold text-base">
                      Contact Us
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <span className="text-sm text-neutral-400 text-center sm:text-left">
                    No commitment • 24h response guaranteed
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Benefits list */}
          <div className="w-full lg:w-72 flex-shrink-0 mt-16 lg:mt-4">
            <div className="space-y-5 border border-neutral-800 rounded-lg p-6">
              <FadeIn
                direction="right"
                distance={24}
                duration={0.5}
                delay={0.2}
              >
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  What you get
                </h3>
              </FadeIn>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} delay={0.3 + index * 0.1}>
                    {benefit}
                  </BenefitItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
