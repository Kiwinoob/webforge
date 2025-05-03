import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-webforge-background"
    >
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            About{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              WebForge
            </span>
          </h2>
          <p className="mt-4 text-webforge-dark/80 md:text-xl">
            Learn about our mission, and how we help businesses succeed online.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr] items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter text-webforge-dark">
              Our Story
            </h3>
            <p className="text-webforge-dark/80 md:text-lg">
              WebForge was founded in 2025 by a group of Singaporean students to
              meet the demands of small businesses seeking to grow their online
              presence. Since then, we have dedicated ourselves to forging
              powerful, user-friendly websites that help brands stand out in the
              digital landscape.
            </p>
            <p className="text-webforge-dark/80 md:text-lg">
              Our team combines technical expertise with creative vision,
              ensuring each project is tailored to our clients' unique goals. At
              WebForge, we believe in building lasting partnerships and
              delivering digital solutions that drive real results for small
              businesses.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/WebForgeLogoBlack.png"
              alt="WebForge Logo"
              width={400}
              height={400}
              className="h-auto w-auto max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[400px]"
            />
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark">
              Our{" "}
              <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
                Approach
              </span>
            </h3>
            <p className="mt-4 text-webforge-dark/80 md:text-lg">
              We believe in a collaborative, transparent process that puts your
              business goals first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Discovery */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent text-xl font-bold text-white mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-webforge-dark mb-2">
                Discovery
              </h4>
              <p className="text-webforge-dark/80">
                We learn about your business, goals, and target audience to
                create a tailored strategy.
              </p>
            </div>

            {/* Step 2: Design */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent text-xl font-bold text-white mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-webforge-dark mb-2">
                Design
              </h4>
              <p className="text-webforge-dark/80">
                We create wireframes and mockups that align with your brand and
                business objectives.
              </p>
            </div>

            {/* Step 3: Development */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent text-xl font-bold text-white mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-webforge-dark mb-2">
                Development
              </h4>
              <p className="text-webforge-dark/80">
                We build your website using modern technologies that ensure
                speed, security, and scalability.
              </p>
            </div>

            {/* Step 4: Deployment */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent text-xl font-bold text-white mb-4">
                4
              </div>
              <h4 className="text-xl font-bold text-webforge-dark mb-2">
                Deployment
              </h4>
              <p className="text-webforge-dark/80">
                We launch your site and provide ongoing support to ensure
                continued success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
