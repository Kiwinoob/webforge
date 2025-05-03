"use client";

import { useState, useEffect } from "react";
import { Anvil, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Approach", href: "#approach", sectionId: "approach" },
    // { label: "Services", href: "#services", sectionId: "services" },
    { label: "Portfolio", href: "#portfolio", sectionId: "portfolio" },
    // { label: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
    // { label: "FAQ", href: "#faq", sectionId: "faq" },
  ];

  // Handle smooth scrolling for anchor links
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        ...navItems.map((item) => item.sectionId),
        "quote",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <a
            href="/"
            className="flex items-center space-x-2"
            onClick={(e) => scrollToSection(e, "/")}
          >
            <div className="flex items-center justify-center rounded-md bg-primary p-1">
              <Anvil className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="inline-block font-bold">WebForge</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.sectionId)}
                className={`flex items-center text-sm font-medium transition-colors hover:text-foreground ${
                  activeSection === item.sectionId
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <a href="#quote">
              {/* <Button size="sm" onClick={(e) => scrollToSection(e, "quote")}>
                Get a Quote
              </Button> */}
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.sectionId}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#quote"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={(e) => scrollToSection(e, "quote")}
              >
                Get a Quote
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
