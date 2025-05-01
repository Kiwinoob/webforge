import {
  ArrowRight,
  Code,
  Globe,
  Layers,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      id: "website-design",
      title: "Website Design & Development",
      description:
        "Custom websites designed to reflect your brand and engage your audience.",
      icon: <Code className="h-6 w-6" />,
      benefits: [
        "Unique, professional design tailored to your brand",
        "User-friendly interface that enhances user experience",
        "Mobile-responsive layouts that work on all devices",
        "Clean, efficient code that loads quickly",
      ],
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      description:
        "Online stores that make selling products easy and profitable.",
      icon: <ShoppingCart className="h-6 w-6" />,
      benefits: [
        "Intuitive product browsing and filtering",
        "Streamlined checkout process to reduce cart abandonment",
        "Integrated payment gateways for secure transactions",
        "Inventory management and order tracking",
      ],
    },
    {
      id: "seo-optimization",
      title: "SEO & Performance",
      description: "Optimize your website to rank higher and load faster.",
      icon: <Search className="h-6 w-6" />,
      benefits: [
        "Higher search engine rankings for relevant keywords",
        "Increased organic traffic to your website",
        "Faster loading times for better user experience",
        "Reduced bounce rates and higher engagement",
      ],
    },
    {
      id: "website-maintenance",
      title: "Website Maintenance",
      description:
        "Keep your website secure, up-to-date, and performing at its best.",
      icon: <Settings className="h-6 w-6" />,
      benefits: [
        "Regular updates to ensure security and compatibility",
        "Backup management to protect your data",
        "Performance monitoring and optimization",
        "Technical support when you need it",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Attract more visitors and convert them into customers.",
      icon: <Globe className="h-6 w-6" />,
      benefits: [
        "Strategic social media management",
        "Email marketing campaigns",
        "Content creation and marketing",
        "Analytics and reporting",
      ],
    },
    {
      id: "custom-web-apps",
      title: "Custom Web Applications",
      description: "Tailored solutions to solve specific business challenges.",
      icon: <Layers className="h-6 w-6" />,
      benefits: [
        "Streamlined business processes and workflows",
        "Reduced manual work and human error",
        "Improved efficiency and productivity",
        "Custom solutions for unique business needs",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-webforge-background"
    >
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark">
            Our <span className="text-webforge-accent">Services</span>
          </h3>
          <p className="mt-4 text-webforge-dark/80 md:text-lg">
            We offer a comprehensive range of web services to help your business
            succeed online.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="flex flex-col rounded-lg border border-webforge-dark/10 bg-webforge-light p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-webforge-accent/10 text-webforge-accent">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-webforge-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-webforge-dark/80">
                {service.description}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-webforge-dark">
                  Benefits:
                </h4>
                <ul className="mt-2 space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-webforge-accent"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-webforge-dark/80">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <Button
                  variant="link"
                  className="inline-flex items-center p-0 text-webforge-accent hover:text-webforge-accent/80"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tighter text-webforge-dark">
              Our Process
            </h3>
            <p className="mt-4 text-webforge-dark/80 md:text-lg">
              We follow a structured approach to ensure your project is
              completed on time, within budget, and to your satisfaction.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-webforge-dark/10"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-webforge-dark/10 bg-webforge-background text-sm font-bold text-webforge-dark">
                      1
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-bold text-webforge-dark">
                      Initial Consultation
                    </h4>
                    <p className="mt-2 text-webforge-dark/80">
                      We start by understanding your business, goals, target
                      audience, and project requirements.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-webforge-dark/10 bg-webforge-background text-sm font-bold text-webforge-dark">
                      2
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-bold text-webforge-dark">
                      Proposal & Planning
                    </h4>
                    <p className="mt-2 text-webforge-dark/80">
                      We create a detailed proposal outlining the scope,
                      timeline, and cost of your project.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-webforge-dark/10 bg-webforge-background text-sm font-bold text-webforge-dark">
                      3
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-bold text-webforge-dark">
                      Design & Development
                    </h4>
                    <p className="mt-2 text-webforge-dark/80">
                      We create wireframes, mockups, and then build your website
                      or application.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-webforge-dark/10 bg-webforge-background text-sm font-bold text-webforge-dark">
                      4
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-bold text-webforge-dark">
                      Testing & Review
                    </h4>
                    <p className="mt-2 text-webforge-dark/80">
                      We thoroughly test your website and make revisions based
                      on your feedback.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-webforge-dark/10 bg-webforge-background text-sm font-bold text-webforge-dark">
                      5
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-bold text-webforge-dark">
                      Launch & Support
                    </h4>
                    <p className="mt-2 text-webforge-dark/80">
                      We deploy your website and provide ongoing support and
                      maintenance.
                    </p>
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
