import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PackageSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm text-neutral-400 uppercase tracking-wider">
                Choose Your Package
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Three tiers
                <br />
                for every business
                <br />
                <span className="text-red-600">stage</span>
              </h2>
            </div>

            {/* Package Cards - Mobile Stack */}
            <div className="space-y-6">
              {/* Starter */}
              <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-red-600 transition-colors">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-2 h-12 bg-blue-500"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Starter</h3>
                    <p className="text-sm sm:text-base text-neutral-400">
                      Entry-level package for new businesses
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-white">$500+</div>
                    <div className="text-sm sm:text-base text-neutral-400">SGD • Starting from</div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      What's Included
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">1 to 4 pages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Custom static pages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Works across devices</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Contact form w/ email integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">SEO setup</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Web hosting</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Content management system</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700">
                    Choose Starter
                  </Button>

                  <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                    4-6 Weeks Delivery
                  </div>
                </div>
              </div>

              {/* Professional */}
              <div className="bg-neutral-900 border-2 border-red-600 p-6 sm:p-8 relative">
                <div className="absolute -top-3 left-4 sm:left-8">
                  <Badge className="bg-red-600 text-white text-xs">Most Popular</Badge>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-2 h-12 bg-red-600"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Professional</h3>
                    <p className="text-sm sm:text-base text-neutral-400">
                      Mid-tier for established companies
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-white">$2.2K+</div>
                    <div className="text-sm sm:text-base text-neutral-400">SGD • Starting from</div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      What's Included
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Multi-page</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Custom static pages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Works across devices</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Contact form w/ email integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">SEO setup</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Web hosting</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Content management system</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Choose Professional
                  </Button>

                  <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                    6-8 Weeks Delivery
                  </div>
                </div>
              </div>

              {/* Enterprise */}
              <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-red-600 transition-colors">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-2 h-12 bg-purple-500"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Enterprise</h3>
                    <p className="text-sm sm:text-base text-neutral-400">
                      Full-scale solutions for larger organizations
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-white">$5K+</div>
                    <div className="text-sm sm:text-base text-neutral-400">SGD • Starting from</div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                      What's Included
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Multi-page</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Custom dynamic pages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Works across devices</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Contact form w/ email integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">SEO setup</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Web hosting</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Content management system</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-300">Google Analytics dashboard</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700">
                    Choose Enterprise
                  </Button>

                  <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                    8-12 Weeks Delivery
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
                  Choose Your Package
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  Three tiers
                  <br />
                  for every business
                  <br />
                  <span className="text-red-600">stage</span>
                </h2>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-3 gap-6 xl:gap-8">
                {/* Starter */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 xl:p-8 hover:border-red-600 transition-colors">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="w-2 h-12 bg-blue-500"></div>
                      <h3 className="text-2xl font-bold text-white">Starter</h3>
                      <p className="text-neutral-400">
                        Entry-level package for new businesses
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-white">$500+</div>
                      <div className="text-neutral-400">SGD • Starting from</div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        What's Included
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">1 to 4 pages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Custom static pages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Works across devices</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Contact form w/ email integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">SEO setup</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Web hosting</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-neutral-300">Content management system</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700">
                      Choose Starter
                    </Button>

                    <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                      4-6 Weeks Delivery
                    </div>
                  </div>
                </div>

                {/* Professional */}
                <div className="bg-neutral-900 border-2 border-red-600 p-6 xl:p-8 relative">
                  <div className="absolute -top-3 left-8">
                    <Badge className="bg-red-600 text-white">Most Popular</Badge>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="w-2 h-12 bg-red-600"></div>
                      <h3 className="text-2xl font-bold text-white">Professional</h3>
                      <p className="text-neutral-400">
                        Mid-tier for established companies
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-white">$2.2K+</div>
                      <div className="text-neutral-400">SGD • Starting from</div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        What's Included
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Multi-page</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Custom static pages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Works across devices</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Contact form w/ email integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">SEO setup</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Web hosting</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-neutral-300">Content management system</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Choose Professional
                    </Button>

                    <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                      6-8 Weeks Delivery
                    </div>
                  </div>
                </div>

                {/* Enterprise */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 xl:p-8 hover:border-red-600 transition-colors">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="w-2 h-12 bg-purple-500"></div>
                      <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                      <p className="text-neutral-400">
                        Full-scale solutions for larger organizations
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-white">$5K+</div>
                      <div className="text-neutral-400">SGD • Starting from</div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">
                        What's Included
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Multi-page</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Custom dynamic pages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Works across devices</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Contact form w/ email integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">SEO setup</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Web hosting</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Content management system</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-300">Google Analytics dashboard</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700">
                      Choose Enterprise
                    </Button>

                    <div className="text-xs text-neutral-500 uppercase tracking-wider text-center">
                      8-12 Weeks Delivery
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
