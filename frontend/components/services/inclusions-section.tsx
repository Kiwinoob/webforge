import { Clock, Code, Users, Zap } from "lucide-react";

export default function InclusionsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm text-neutral-400 uppercase tracking-wider">
                Standard Inclusions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What's included
                <br />
                in every
                <br />
                <span className="text-red-600">project</span>
              </h2>
            </div>

            {/* Inclusion Cards - Mobile */}
            <div className="space-y-6">
              <div className="space-y-6 p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Initial Consultation
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Strategy session to understand your business goals, target
                    audience, and project requirements.
                  </p>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Custom Design Mockups
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    No templates—every design is crafted specifically for your
                    brand and business needs.
                  </p>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Hand-coded Development
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Performance-optimized, clean code that loads fast and scales
                    with your business growth.
                  </p>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Training & Documentation
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Complete training on managing your website plus detailed
                    documentation for future reference.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Benefits - Mobile */}
            <div className="p-6 sm:p-8 bg-neutral-900 border border-neutral-800">
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Plus: Mobile Optimization, Basic SEO Setup, Launch Support
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-red-600">100%</div>
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      Mobile Responsive
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-red-600">SEO</div>
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      Foundation Setup
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      Launch Support
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-red-600">SG</div>
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      Based Team
                    </div>
                  </div>
                </div>
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
                  Standard Inclusions
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  What's included
                  <br />
                  in every
                  <br />
                  <span className="text-red-600">project</span>
                </h2>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-6 xl:gap-8">
                <div className="space-y-6 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-bold text-white">
                        Initial Consultation
                      </h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Strategy session to understand your business goals, target
                      audience, and project requirements.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Code className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-bold text-white">
                        Custom Design Mockups
                      </h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      No templates—every design is crafted specifically for your
                      brand and business needs.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-bold text-white">
                        Hand-coded Development
                      </h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Performance-optimized, clean code that loads fast and scales
                      with your business growth.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-bold text-white">
                        Training & Documentation
                      </h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Complete training on managing your website plus detailed
                      documentation for future reference.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 xl:mt-12 p-6 xl:p-8 bg-neutral-900 border border-neutral-800">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    Plus: Mobile Optimization, Basic SEO Setup, Launch Support
                  </h3>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">100%</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        Mobile Responsive
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">SEO</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        Foundation Setup
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">24/7</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        Launch Support
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">SG</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        Based Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
