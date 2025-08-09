"use client";

import FadeIn from "@/components/common/fade-in";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface ClientTestimonialSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function ClientTestimonialSection({
  testimonials,
  className = ''
}: ClientTestimonialSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-24 border-t border-neutral-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <FadeIn direction="up" distance={16} duration={0.5}>
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  Our Impact
                </div>
              </FadeIn>

              <div className="text-3xl sm:text-4xl font-bold text-white">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block leading-tight">Our client's</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block leading-tight text-[#C1440E]">testimonials</span>
                </FadeIn>
              </div>

              <FadeIn direction="up" distance={20} duration={0.5} delay={0.3}>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Testimonials from our past clients.
                </p>
              </FadeIn>
            </div>

            {/* Testimonials - Mobile Stack - GROUPED ANIMATION */}
            <FadeIn direction="up" distance={24} duration={0.6} delay={0.4}>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="p-4 sm:p-6 border-l-4 border-[#C1440E] bg-neutral-900"
                  >
                    <blockquote className="space-y-4">
                      <p className="text-base sm:text-lg text-neutral-300 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <footer className="text-sm sm:text-base text-neutral-400">
                        <strong className="text-white">{testimonial.author}</strong>, {testimonial.title}, {testimonial.company}
                      </footer>
                    </blockquote>
                  </div>
                ))}
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
                    Our Impact
                  </div>
                </FadeIn>

                <div className="text-3xl xl:text-4xl font-bold text-white">
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.1}>
                    <span className="block leading-tight">Our client's</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.2}>
                    <span className="block leading-tight text-[#C1440E]">testimonials</span>
                  </FadeIn>
                </div>

                <FadeIn direction="left" distance={20} duration={0.5} delay={0.3}>
                  <p className="text-neutral-400 leading-relaxed">
                    Testimonials from our past clients.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="col-span-9">
              {/* Desktop Testimonials - GROUPED ANIMATION */}
              <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="p-6 xl:p-8 border-l-4 border-[#C1440E] bg-neutral-900"
                    >
                      <blockquote className="space-y-4">
                        <p className="text-lg xl:text-xl text-neutral-300 italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <footer className="text-neutral-400">
                          <strong className="text-white">{testimonial.author}</strong>, {testimonial.title}, {testimonial.company}
                        </footer>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
