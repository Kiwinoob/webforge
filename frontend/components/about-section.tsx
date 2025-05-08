import Image from "next/image";
import FadeInUp from "./fade-in-up";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-20  bg-webforge-background"
    >
      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-0">
          <h2 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            About{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              WebForge
            </span>
          </h2>
        </div>

        {/* Our Story */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr] items-center -mt-8 lg:-mt-12">
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
          <div className="hidden lg:flex justify-center lg:justify-end">
            <Image
              src="/WebForgeLogoBlack.png"
              alt="WebForge Logo"
              width={450}
              height={450}
              className="h-auto w-auto max-w-[450px]"
            />
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
