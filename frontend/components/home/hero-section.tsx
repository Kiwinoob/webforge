"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "../common/fade-in";
import Link from "next/link";
import ForgeAnimation from "../common/forge-animation";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white font-sans min-h-screen pt-16 sm:pt-20 lg:pt-0 overflow-hidden">
      {/* --- 2. USE the new component --- */}
      <ForgeAnimation />

      {/* Clean accent gradient - top right */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-[#C1440E]/20 via-[#D85D25]/10 to-transparent rounded-full blur-3xl" />

      {/* Clean accent gradient - bottom left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#C1440E]/15 via-[#FF5733]/8 to-transparent rounded-full blur-3xl" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-24 h-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 lg:items-end lg:min-h-[70vh]">
          {/* Middle Column: Main Content */}
          <div className="flex-1 mt-8 sm:mt-10 md:mt-16 lg:mt-16 lg:self-start lg:pt-8">
            {/* Headline with subtle stagger on each line */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
              <FadeIn direction="up" distance={20} duration={0.5}>
                <span className="block">Crafting Digital</span>
              </FadeIn>
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.06}>
                <span className="block">Excellence for</span>
              </FadeIn>
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.12}>
                <span className="block">Singapore&apos;s Growing</span>
              </FadeIn>
              <FadeIn direction="up" distance={20} duration={0.5} delay={0.18}>
                <span className="block text-[#C1440E]">Businesses</span>
              </FadeIn>
            </h1>

            {/* Underline bar */}
            <FadeIn direction="right" distance={24} duration={0.5} delay={0.22}>
              <div className="mt-4 sm:mt-6 w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-[#D85D25]" />
            </FadeIn>

            {/* Subtext */}
            <FadeIn direction="up" distance={16} duration={0.5} delay={0.28}>
              <p className="mt-4 sm:mt-6 lg:mt-8 max-w-lg xl:max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
                Turning your vision into powerful, handcrafted web solutions
              </p>
            </FadeIn>

            {/* CTA row */}
            <FadeIn direction="up" distance={20} duration={0.5} delay={0.36}>
              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                <Link href="/contact">
                  <Button className="bg-[#C1440E] hover:bg-red-800 text-white px-6 sm:px-5 py-3 sm:py-6 font-semibold text-sm sm:text-base w-full sm:w-auto">
                    Contact Us
                    <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <span className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
                  Free initial consultation • 24h response guaranteed
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Founder Info - Positioned at bottom */}
          <div className="w-full lg:w-56 xl:w-64 flex-shrink-0 mt-10 sm:mt-12 lg:mt-0 lg:self-end lg:pb-4">
            <FadeIn direction="left" distance={24} duration={0.5} delay={0.18}>
              <div className="text-left lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  FOUNDED BY
                </p>
                <div className="mt-3 lg:mt-4">
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Singaporean Students
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Building for local businesses
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
