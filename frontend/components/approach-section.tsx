import Image from "next/image";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="w-full py-12 md:py-24 lg:py-32 bg-webforge-background"
    >
      <div className="container px-4 md:px-6 ">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1: Discovery */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent text-xl font-bold text-white mb-4">
              1
            </div>
            <h4 className="text-xl font-bold text-webforge-dark mb-2">
              Discovery
            </h4>
            <p className="text-webforge-dark/80">
              We learn about your business, goals, and target audience to create
              a tailored strategy.
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
              We build your website using modern technologies that ensure speed,
              security, and scalability.
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

        {/* Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/approach.png"
              alt="Blacksmith forging metal - representing our craft"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-webforge-dark mb-2 md:mb-4">
              We build your website from scratch—tailored to your brand, your
              audience, and your goals.
            </h3>
            <p className="text-sm md:text-base text-webforge-dark/80 mb-2 md:mb-4">
              Whether you're a freelancer, small business owner, or enterprise
              organization, we create websites that align with your unique
              needs. We don't use templates or cookie-cutter designs—each site
              we build is custom-crafted to reflect your brand identity and
              business objectives.
            </p>
            <p className="text-sm md:text-base text-webforge-dark/80">
              Our focus on strategy, performance, and design ensures that your
              website not only looks great but also drives real business results
              and keeps up with modern web standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
