"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import FadeInUp from "./fade-in-up";

const DesignSection = () => {
  const designTemplates = [
    {
      id: 1,
      name: "Modern Business Template",
      url: "https://dragons-den-sg.vercel.app/",
      previewImage: "/preview1.jpg",
      description: "A modern business template with clean design",
    },
    {
      id: 2,
      name: "Portfolio Template",
      url: "https://furry-friends-webforge.vercel.app/",
      previewImage: "/preview2.jpg",
      description: "Creative portfolio template for showcasing work",
    },
    {
      id: 3,
      name: "E-commerce Template",
      url: "https://example-ecommerce.vercel.app/",
      previewImage: "/preview3.jpg",
      description: "Professional e-commerce template",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iframeErrors, setIframeErrors] = useState({});
  const [iframeLoaded, setIframeLoaded] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? designTemplates.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === designTemplates.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const handleIframeLoad = (index: number) => {
    setIframeLoaded((prev) => ({ ...prev, [index]: true }));
    setIframeErrors((prev) => ({ ...prev, [index]: false }));
  };

  const handleIframeError = (index: number) => {
    setIframeErrors((prev) => ({ ...prev, [index]: true }));
    setIframeLoaded((prev) => ({ ...prev, [index]: false }));
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getAllTemplates = () => {
    const templates = [];
    const totalTemplates = designTemplates.length;

    // Create a continuous array for smooth infinite scrolling
    for (let i = 0; i < totalTemplates; i++) {
      templates.push({ ...designTemplates[i], index: i });
    }

    return templates;
  };

  const renderTemplateCard = (
    template: {
      id: number;
      name: string;
      url: string;
      previewImage: string;
      description: string;
      index: number;
    },
    index: number
  ) => {
    const position = index - currentIndex;
    const isCenter = position === 0;
    const isPrev =
      position === -1 ||
      (currentIndex === 0 && index === designTemplates.length - 1);
    const isNext =
      position === 1 ||
      (currentIndex === designTemplates.length - 1 && index === 0);

    // Calculate the transform for smooth sliding
    let translateX = 0;
    let scale = 0.75;
    let opacity = 0.6;
    let zIndex = 10;

    if (isCenter) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 20;
    } else if (isPrev) {
      translateX = -320; // Move left
      scale = 0.75;
      opacity = 0.6;
      zIndex = 10;
    } else if (isNext) {
      translateX = 320; // Move right
      scale = 0.75;
      opacity = 0.6;
      zIndex = 10;
    } else {
      // Hidden templates
      translateX = position > 0 ? 640 : -640;
      scale = 0.5;
      opacity = 0;
      zIndex = 5;
    }

    return (
      <div
        key={`template-${template.id}`}
        className="absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out"
        style={{
          width: isCenter ? "600px" : "500px",
          height: isCenter ? "850px" : "750px",
          transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
          opacity,
          zIndex,
        }}
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
          {/* Template Content */}
          <div className="relative h-full">
            {!iframeErrors[index as keyof typeof iframeErrors] ? (
              <>
                <iframe
                  src={template.url}
                  className="w-full h-full border-0"
                  title={template.name}
                  loading="lazy"
                  onLoad={() => handleIframeLoad(index)}
                  onError={() => handleIframeError(index)}
                  sandbox="allow-scripts allow-same-origin"
                />

                {/* Loading overlay for center card only */}
                {isCenter &&
                  !iframeLoaded[index as keyof typeof iframeLoaded] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                        <p className="text-gray-600">
                          {isAnimating
                            ? "Sliding to template..."
                            : "Loading template..."}
                        </p>
                      </div>
                    </div>
                  )}
              </>
            ) : (
              // Fallback when iframe fails to load
              <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {isCenter ? (
                  <div className="text-center p-8">
                    <ExternalLink
                      size={48}
                      className="mx-auto text-gray-400 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">
                      Preview Not Available
                    </h4>
                    <p className="text-gray-600 mb-4">
                      This template cannot be displayed in a frame due to
                      security restrictions.
                    </p>
                    <button
                      onClick={() => openInNewTab(template.url)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View in New Tab
                    </button>
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <ExternalLink
                      size={24}
                      className="mx-auto text-gray-400 mb-2"
                    />
                    <p className="text-sm text-gray-600">{template.name}</p>
                  </div>
                )}
              </div>
            )}

            {/* Click overlay for side cards */}
            {!isCenter && !isAnimating && (isPrev || isNext) && (
              <div
                className="absolute inset-0 bg-black bg-opacity-20 cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-opacity-30"
                onClick={() => {
                  if (isPrev) {
                    goToPrevious();
                  } else if (isNext) {
                    goToNext();
                  }
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="design" className="w-full pt-20  bg-webforge-background">
      <FadeInUp className="container px-16 sm:px-12 md:px-12 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Designs
            </span>
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className={`absolute left-8 z-30 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              isAnimating ? "opacity-50 cursor-not-allowed scale-95" : ""
            }`}
            aria-label="Previous template"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Template Viewer Container */}
          <div className="relative w-full h-[850px] overflow-hidden">
            {getAllTemplates().map((template) =>
              renderTemplateCard(template, template.index)
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className={`absolute right-8 z-30 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              isAnimating ? "opacity-50 cursor-not-allowed scale-95" : ""
            }`}
            aria-label="Next template"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Template Info */}
        <div className="text-center mt-6">
          <button
            onClick={() => openInNewTab(designTemplates[currentIndex].url)}
            disabled={isAnimating}
            className={`bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 ${
              isAnimating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ExternalLink size={16} />
            View Template
          </button>
        </div>
      </FadeInUp>
    </section>
  );
};

export default DesignSection;
