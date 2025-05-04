import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-12 lg:py-32 bg-webforge-background"
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
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-center mb-20">
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
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/WebForgeLogoBlack.png"
              alt="WebForge Logo"
              width={400}
              height={400}
              className="h-auto w-auto max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
