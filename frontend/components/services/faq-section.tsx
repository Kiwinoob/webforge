"use client";

import FadeIn from "@/components/common/fade-in";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we specialize in growing Singapore businesses of all sizes. Our Starter is perfect for new businesses, freelancers, and professionals."
    },
    {
      question: "How long does a project take?",
      answer: "Typically 4-12 weeks depending on complexity. Starter projects usually take 4-6 weeks, while Professional and Enterprise projects may take 6-12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, all projects include support periods. We also offer ongoing maintenance and development partnerships."
    },
    {
      question: "Can you help with SEO?",
      answer: "Basic SEO is included in all packages. For advanced SEO strategies and ongoing optimization, we can discuss additional services."
    },
    {
      question: "Do you work remotely?",
      answer: "Yes, we're a remote-first team serving all of Singapore. We use modern collaboration tools and maintain regular communication throughout the project."
    }
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
                  Common Questions
                </div>
              </FadeIn>

              <div className="text-3xl sm:text-4xl font-bold text-white">
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
                  <span className="block leading-tight">Frequently</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.2}>
                  <span className="block leading-tight">asked</span>
                </FadeIn>
                <FadeIn direction="up" distance={24} duration={0.6} delay={0.3}>
                  <span className="block leading-tight text-red-600">questions</span>
                </FadeIn>
              </div>
            </div>

            {/* FAQ Items - Mobile Stack */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} direction="up" distance={20} duration={0.5} delay={0.4 + (index * 0.1)}>
                  <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
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
                    Common Questions
                  </div>
                </FadeIn>

                <div className="text-3xl xl:text-4xl font-bold text-white">
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.1}>
                    <span className="block leading-tight">Frequently</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.2}>
                    <span className="block leading-tight">asked</span>
                  </FadeIn>
                  <FadeIn direction="left" distance={24} duration={0.6} delay={0.3}>
                    <span className="block leading-tight text-red-600">questions</span>
                  </FadeIn>
                </div>
              </div>
            </div>

            <div className="col-span-9">
              <div className="space-y-6 xl:space-y-8">
                {faqs.map((faq, index) => (
                  <FadeIn key={index} direction="up" distance={20} duration={0.5} delay={0.2 + (index * 0.08)}>
                    <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                      <h3 className="text-xl font-bold text-white">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
