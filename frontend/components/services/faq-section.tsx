export default function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm text-neutral-400 uppercase tracking-wider">
                Common Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Frequently
                <br />
                asked
                <br />
                <span className="text-red-600">questions</span>
              </h2>
            </div>

            {/* FAQ Items - Mobile Stack */}
            <div className="space-y-6">
              <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Do you work with small businesses?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Yes, we specialize in growing Singapore businesses of all
                  sizes. Our Starter is perfect for new
                  businesses, freelancers, and professionals.
                </p>
              </div>

              <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  How long does a project take?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Typically 4-12 weeks depending on complexity. Starter
                  projects usually take 4-6 weeks, while Professional and Enterprise
                  projects may take 6-12 weeks.
                </p>
              </div>

              <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Do you provide ongoing support?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Yes, all projects include support periods. We also offer ongoing maintenance and
                  development partnerships.
                </p>
              </div>

              <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Can you help with SEO?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Basic SEO is included in all packages. For advanced SEO
                  strategies and ongoing optimization, we can discuss additional
                  services.
                </p>
              </div>

              <div className="space-y-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Do you work remotely?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Yes, we're a remote-first team serving all of Singapore. We
                  use modern collaboration tools and maintain regular
                  communication throughout the project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="space-y-4">
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  Common Questions
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  Frequently
                  <br />
                  asked
                  <br />
                  <span className="text-red-600">questions</span>
                </h2>
              </div>
            </div>

            <div className="col-span-9">
              <div className="space-y-6 xl:space-y-8">
                <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                  <h3 className="text-xl font-bold text-white">
                    Do you work with small businesses?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Yes, we specialize in growing Singapore businesses of all
                    sizes. Our Starter is perfect for new
                    businesses, freelancers, and professionals.
                  </p>
                </div>

                <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                  <h3 className="text-xl font-bold text-white">
                    How long does a project take?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Typically 4-12 weeks depending on complexity. Starter
                    projects usually take 4-6 weeks, while Professional and Enterprise
                    projects may take 6-12 weeks.
                  </p>
                </div>

                <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                  <h3 className="text-xl font-bold text-white">
                    Do you provide ongoing support?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Yes, all projects include support periods. We also offer ongoing maintenance and
                    development partnerships.
                  </p>
                </div>

                <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                  <h3 className="text-xl font-bold text-white">
                    Can you help with SEO?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Basic SEO is included in all packages. For advanced SEO
                    strategies and ongoing optimization, we can discuss additional
                    services.
                  </p>
                </div>

                <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-800">
                  <h3 className="text-xl font-bold text-white">
                    Do you work remotely?
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Yes, we're a remote-first team serving all of Singapore. We
                    use modern collaboration tools and maintain regular
                    communication throughout the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
