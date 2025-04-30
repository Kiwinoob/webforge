import { Layers, Zap, Globe } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive website creation services cover all aspects of building your online presence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3">
              <Layers className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Custom Design</h3>
            <p className="text-center text-muted-foreground">
              Unique designs tailored to your brand identity and business goals.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Fast Performance</h3>
            <p className="text-center text-muted-foreground">
              Optimized websites that load quickly and provide excellent user experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3">
              <Globe className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">SEO Ready</h3>
            <p className="text-center text-muted-foreground">
              Built with search engine optimization in mind to help you rank higher.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
