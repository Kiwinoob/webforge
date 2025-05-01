import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Client"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">CEO, TechStart</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              "Webforge transformed our online presence. Their team was professional, responsive, and delivered a
              website that exceeded our expectations."
            </p>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Client"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Founder, GreenLeaf</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              "Working with Webforge was a game-changer for our business. Our new website has significantly increased
              our leads and customer engagement."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
