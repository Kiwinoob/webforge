"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the type for portfolio items
type PortfolioItem = {
  id: string
  title: string
  description: string
  client: string
  category: string
  imageUrl: string
  projectUrl: string
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce website with product filtering and secure checkout.",
    client: "FashionHub",
    category: "E-commerce",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
  {
    id: "2",
    title: "Corporate Business Site",
    description: "Professional website with service listings, team profiles, and contact integration.",
    client: "TechCorp Inc.",
    category: "Business",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
  {
    id: "3",
    title: "Restaurant Ordering System",
    description: "Online menu and ordering system with reservation capabilities.",
    client: "Gourmet Bistro",
    category: "Food & Beverage",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
  {
    id: "4",
    title: "Photography Portfolio",
    description: "Elegant portfolio site with image galleries and booking functionality.",
    client: "Lens Masters",
    category: "Portfolio",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
  {
    id: "5",
    title: "Real Estate Listings",
    description: "Property listing website with advanced search and filtering options.",
    client: "Prime Properties",
    category: "Real Estate",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
  {
    id: "6",
    title: "Fitness Studio Platform",
    description: "Class scheduling, membership management, and online payment system.",
    client: "FitLife Studio",
    category: "Health & Fitness",
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
  },
]

// Portfolio item card component
function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="inline-block rounded-full bg-muted px-2 py-1 text-xs font-medium">{item.category}</span>
          <span className="text-sm text-muted-foreground">Client: {item.client}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-4">
          <Link
            href={item.projectUrl}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Filter buttons for portfolio categories
function CategoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      <Button
        variant={activeCategory === "All" ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange("All")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

export function PortfolioSection() {
  // In a real application, you would use React state here
  // For simplicity in this example, we're showing all items
  const activeCategory = "All"

  // Extract unique categories from portfolio items
  const categories = Array.from(new Set(portfolioItems.map((item) => item.category)))

  // Filter items based on active category
  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse through our collection of successful website projects we've delivered for our clients.
            </p>
          </div>
        </div>

        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={() => {}} // This would be a state setter in a real app
        />

        <div className="mx-auto grid max-w-5xl gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
