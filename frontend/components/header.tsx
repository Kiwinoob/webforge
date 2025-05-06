"use client";

import { useState, useEffect } from "react";
import { Anvil, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import WebForgeLogoBlack from "@/public/WebForgeLogoBlack.png";
import WebForgeLogoWhite from "@/public/WebForgeLogoWhite.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Approach", href: "#approach", sectionId: "approach" },
    { label: "Portfolio", href: "#portfolio", sectionId: "portfolio" },
    { label: "Contact Us", href: "#contact", sectionId: "contact" },
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
      // For navbar background
      setScrolled(window.scrollY > 0);

      // For active section
      const sections = ["home", ...navItems.map((item) => item.sectionId)];
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
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex h-24 items-center justify-between w-full px-0">
        {/* Left: Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 "
          onClick={(e) => scrollToSection(e, "/")}
        >
          <img
            src={scrolled ? WebForgeLogoBlack.src : WebForgeLogoWhite.src}
            alt="WebForge Logo"
            className="h-48 w-auto md:h-48 lg:h-64"
            style={{ display: "block" }}
          />
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex gap-8 ml-auto mr-12">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.sectionId)}
              className={`flex items-center text-sm font-medium transition-colors ${
                activeSection === item.sectionId
                  ? "text-orange-500" // Orange for active item (both states)
                  : scrolled
                  ? "text-muted-foreground" // Gray when scrolled
                  : "text-white/80" // Semi-transparent white when transparent
              } hover:text-orange-500`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Mobile Menu Button */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden mr-4 [&_svg]:size-6 ${
              !scrolled ? "text-white" : "text-foreground"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
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
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    activeSection === item.sectionId
                      ? "text-orange-500" // Orange for active item (both states)
                      : scrolled
                      ? "text-muted-foreground" // Gray when scrolled
                      : "text-white/80" // Semi-transparent white when transparent
                  } hover:text-orange-500`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
