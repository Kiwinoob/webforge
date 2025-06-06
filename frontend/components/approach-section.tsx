import Image from "next/image";
import FadeInUp from "./fade-in-up";

export function ApproachSection() {
  return (
    <section id="approach" className="w-full pt-20  bg-webforge-background">
      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Approach
            </span>
          </h3>
        </div>

        {/* First Section - We build your website from scratch */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <Image
              src="/approach1.png"
              alt="Blacksmith forging metal - representing our craft"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-webforge-dark mb-4">
              We build your website from scratch—tailored to your brand, your
              audience, and your goals.
            </h3>
            <p className="text-webforge-dark/80 mb-4 ">
              Whether you're a freelancer, small business owner, or professional
              service provider, we design clean, fast, and responsive sites that
              your visitors will love. Our websites are built to match you. Our
              focus on simplicity, performance, and styling gives your business
              a polished online presence that leaves a lasting impression.
            </p>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        {/* Second Section - A Collaborative Process */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-webforge-dark mb-4">
              A Collaborative Process from Start to Finish
            </h3>
            <p className="text-webforge-dark/80 mb-4">
              We believe great websites are built through partnership. That's
              why we involve you at every stage — from discovery and planning to
              design and development. We take time to understand your goals,
              share progress through mockups and working versions, and
              incorporate your feedback along the way. The result is a site that
              not only looks great but truly represents your business and helps
              you achieve your goals.
            </p>
          </div>
          <div>
            <Image
              src="/approach2.png"
              alt="Molten metal being poured - representing our collaborative process"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </FadeInUp>

      {/* Third Section - Ongoing Support */}
      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <Image
              src="/approach3.png"
              alt="Metal being shaped - representing our ongoing support"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-webforge-dark mb-4">
              Our work doesn't stop once your website goes live.
            </h3>
            <p className="text-webforge-dark/80 mb-4">
              We offer ongoing support to keep your site up-to-date, secure, and
              performing at its best. Whether you need regular maintenance or
              occasional updates, we're always here to support your online
              presence. With flexible support options, you can focus on what you
              do best, knowing your online presence is in good hands.
            </p>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
