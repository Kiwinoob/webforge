import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for your business needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-muted-foreground">Perfect for small businesses just getting started.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">$499</span>
              <span className="ml-1 text-muted-foreground">one-time</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                5 Pages
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Responsive Design
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Contact Form
              </li>
            </ul>
            <Button className="mt-8">Get Started</Button>
          </div>
          <div className="flex flex-col rounded-lg border border-primary p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-muted-foreground">For growing businesses with more needs.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">$999</span>
              <span className="ml-1 text-muted-foreground">one-time</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                10 Pages
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Responsive Design
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Advanced Contact Forms
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                SEO Optimization
              </li>
            </ul>
            <Button className="mt-8">Get Started</Button>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">For large businesses with complex requirements.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Unlimited Pages
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Custom Functionality
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                E-commerce Integration
              </li>
              <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Advanced Analytics
              </li>
            </ul>
            <Button className="mt-8">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
