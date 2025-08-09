import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {/* Badge and Title */}
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-[#C1440E] text-[#C1440E] bg-transparent"
              >
                DESIGNS & CONCEPTS
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
                Our
                <span className="text-[#C1440E]"> Portfolio</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-[#C1440E]"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed">
              From concept to completion - see how we transform businesses
              through strategic design and development.
            </p>

            {/* Mobile Info Cards - Only Projects and Concepts (No Background) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              {/* Projects */}
              <div className="p-4 sm:p-6">
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C1440E]">2</div>
                  <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
              </div>

              {/* Concepts */}
              <div className="p-4 sm:p-6">
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C1440E]">3</div>
                  <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                    Concepts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Stats */}
            <div className="col-span-2">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-3xl xl:text-4xl font-bold text-[#C1440E]">2</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl xl:text-4xl font-bold text-[#C1440E]">3</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Concepts
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Main Content */}
            <div className="col-span-8">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge
                    variant="outline"
                    className="border-[#C1440E] text-[#C1440E] bg-transparent"
                  >
                    DESIGNS & CONCEPTS
                  </Badge>
                  <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-none tracking-tight">
                    Our
                    <span className="text-[#C1440E]"> Portfolio</span>
                  </h1>
                  <div className="w-24 h-1 bg-[#C1440E]"></div>
                </div>
                <p className="text-xl xl:text-2xl text-neutral-300 leading-relaxed max-w-3xl">
                  From concept to completion - see how we transform businesses
                  through strategic design and development.
                </p>
              </div>
            </div>

            {/* Right Column - Industries */}
            <div className="col-span-2 flex flex-col justify-end">
              <div className="space-y-4">
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  Industries
                </div>
                <div className="space-y-2 text-neutral-300">
                  <div>Engineering</div>
                  <div>Professional Services</div>
                  <div>Food & Beverages</div>
                  <div>Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
