"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/common/fade-in";

// Add these interface definitions at the top
interface PackageFeature {
  text: string;
  included: boolean;
}

interface Package {
  name: string;
  description: string;
  price: string;
  colorBar: string;
  border: string;
  buttonStyle: string;
  buttonText: string;
  delivery: string;
  popular: boolean;
  features: PackageFeature[];
}

interface PackageCardProps {
  pkg: Package;
  index: number;
  isMobile?: boolean;
}

export default function PackageSection() {
  const packages: Package[] = [
    {
      name: "Starter",
      description: "Entry-level package for new businesses",
      price: "$500+",
      colorBar: "bg-blue-500",
      border: "border-neutral-800",
      buttonStyle: "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
      buttonText: "Choose Starter",
      delivery: "4-6 Weeks Delivery",
      popular: false,
      features: [
        { text: "1 to 4 pages", included: true },
        { text: "Custom static pages", included: true },
        { text: "Works across devices", included: true },
        { text: "Contact form w/ email integration", included: true },
        { text: "SEO setup", included: true },
        { text: "Web hosting", included: true },
        { text: "Content management system", included: false },
      ]
    },
    {
      name: "Professional",
      description: "Mid-tier for established companies",
      price: "$2.2K+",
      colorBar: "bg-red-600",
      border: "border-2 border-red-600",
      buttonStyle: "bg-red-600 hover:bg-red-700 text-white",
      buttonText: "Choose Professional",
      delivery: "6-8 Weeks Delivery",
      popular: true,
      features: [
        { text: "Multi-page", included: true },
        { text: "Custom static pages", included: true },
        { text: "Works across devices", included: true },
        { text: "Contact form w/ email integration", included: true },
        { text: "SEO setup", included: true },
        { text: "Web hosting", included: true },
        { text: "Content management system", included: false },
      ]
    },
    {
      name: "Enterprise",
      description: "Full-scale solutions for larger organizations",
      price: "$5K+",
      colorBar: "bg-purple-500",
      border: "border-neutral-800",
      buttonStyle: "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
      buttonText: "Choose Enterprise",
      delivery: "8-12 Weeks Delivery",
      popular: false,
      features: [
        { text: "Multi-page", included: true },
        { text: "Custom dynamic pages", included: true },
        { text: "Works across devices", included: true },
        { text: "Contact form w/ email integration", included: true },
        { text: "SEO setup", included: true },
        { text: "Web hosting", included: true },
        { text: "Content management system", included: true },
        { text: "Google Analytics dashboard", included: true },
      ]
    }
  ];

  // Updated PackageCard with height standardization
  const PackageCard: React.FC<PackageCardProps> = ({ pkg, index, isMobile = false }) => (
    <FadeIn direction="up" distance={24} duration={0.6} delay={0.4 + (index * 0.1)} className="h-full">
      <div className={`h-full bg-neutral-900 ${pkg.border} ${isMobile ? 'p-6 sm:p-8' : 'p-6 xl:p-8'} ${pkg.popular ? 'relative' : 'hover:border-red-600 transition-colors'} flex flex-col`}>
        {pkg.popular && (
          <div className={`absolute -top-3 ${isMobile ? 'left-4 sm:left-8' : 'left-8'}`}>
            <Badge className="bg-red-600 text-white text-xs">Most Popular</Badge>
          </div>
        )}
        
        {/* Header Section */}
        <div className="space-y-4">
          <div className={`w-2 h-12 ${pkg.colorBar}`}></div>
          <h3 className={`${isMobile ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold text-white`}>{pkg.name}</h3>
          <p className={`${isMobile ? 'text-sm sm:text-base' : ''} text-neutral-400`}>
            {pkg.description}
          </p>
        </div>

        {/* Price Section */}
        <div className={`space-y-2 ${isMobile ? 'mt-6' : 'mt-8'}`}>
          <div className={`${isMobile ? 'text-3xl sm:text-4xl' : 'text-4xl'} font-bold text-white`}>{pkg.price}</div>
          <div className={`${isMobile ? 'text-sm sm:text-base' : ''} text-neutral-400`}>SGD • Starting from</div>
        </div>

        {/* Features Section - This will grow to fill available space */}
        <div className={`flex-1 ${isMobile ? 'mt-6' : 'mt-8'} flex flex-col`}>
          <div className={`${isMobile ? 'text-xs sm:text-sm' : 'text-sm'} text-neutral-400 uppercase tracking-wider mb-4`}>
            What's Included
          </div>
          <div className="space-y-3 flex-1">
            {pkg.features.map((feature: PackageFeature, featureIndex: number) => (
              <div key={featureIndex} className="flex items-center space-x-3">
                {feature.included ? (
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                ) : (
                  <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                )}
                <span className={`${isMobile ? 'text-sm sm:text-base' : ''} text-neutral-300`}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button and Delivery Info - Always at bottom */}
        <div className={`${isMobile ? 'mt-6' : 'mt-8'} space-y-4`}>
          <Button className={`w-full ${pkg.buttonStyle}`}>
            {pkg.buttonText}
          </Button>
          <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
            {pkg.delivery}
          </div>
        </div>
      </div>
    </FadeIn>
  );

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
                  Choose Your Package
                </div>
              </FadeIn>

              <div className="text-3xl sm:text-4xl font-bold text-white">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block leading-tight">Three tiers</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block leading-tight">for every business</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.3}>
                  <span className="block leading-tight text-red-600">stage</span>
                </FadeIn>
              </div>
            </div>

            {/* Package Cards - Mobile Stack */}
            <div className="space-y-6">
              {packages.map((pkg: Package, index: number) => (
                <PackageCard key={pkg.name} pkg={pkg} index={index} isMobile={true} />
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
                    Choose Your Package
                  </div>
                </FadeIn>

                <div className="text-3xl xl:text-4xl font-bold text-white">
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.1}>
                    <span className="block leading-tight">Three tiers</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.2}>
                    <span className="block leading-tight">for every business</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.3}>
                    <span className="block leading-tight text-red-600">stage</span>
                  </FadeIn>
                </div>
              </div>
            </div>

            <div className="col-span-9">
              {/* Added items-stretch to make grid items equal height */}
              <div className="grid grid-cols-3 gap-6 xl:gap-8 items-stretch">
                {packages.map((pkg: Package, index: number) => (
                  <PackageCard key={pkg.name} pkg={pkg} index={index} isMobile={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
