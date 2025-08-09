import Image from "next/image";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 py-12 sm:py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content - Single Column Layout */}
        <div className="space-y-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/webforge-logo.png"
                alt="logo"
                width={200}
                height={30}
              />
            </div>

            <div className="max-w-md">
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                Crafting digital excellence for Singapore's growing businesses.
                Founded by students, built for success.
              </p>
            </div>

            <div className="space-y-2 text-sm text-neutral-500">
              <div>Singapore-based team</div>
              <div className="hover:text-neutral-300 transition-colors">
                webforgesg@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col space-y-4 sm:space-y-2">
            <div className="text-neutral-500 text-sm">
              © {currentYear} WebForge. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
