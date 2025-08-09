"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="nav-container">
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-6 px-6 py-6">
              <div className="col-span-3">
                <div className="flex items-center space-x-3 ">
                  <Image
                    src="/webforge-logo.png"
                    alt="logo"
                    width={150}
                    height={50}
                    onClick={handleLogoClick}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="col-span-6 flex items-center justify-center space-x-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors relative ${
                      pathname === item.href
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></div>
                    )}
                  </Link>
                ))}
              </div>
             
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 py-4">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/webforge-logo.png"
                  alt="logo"
                  width={120}
                  height={40}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="text-white hover:text-neutral-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 shadow-lg">
                <div className="px-4 py-6 space-y-6">
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block font-medium transition-colors relative py-2 ${
                          pathname === item.href
                            ? "text-white"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-600"></div>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-neutral-800">
                    <Button
                      asChild
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium"
                      onClick={closeMenu}
                    >
                      <Link href="/contact">
                        Start Project Brief{" "}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
