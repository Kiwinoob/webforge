"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import FadeInUp from "./fade-in-up"; // Assuming this component exists

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
      url: "https://www.belmacs.com.sg/", // Placeholder, replace if needed
      previewImage: "/preview3.jpg",
      description: "Professional e-commerce template",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iframeErrors, setIframeErrors] = useState({});
  const [iframeLoaded, setIframeLoaded] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop"); // 'mobile', 'tablet', 'desktop'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveValues = useMemo(() => {
    if (screenSize === "mobile") {
      return {
        viewerHeight: "480px",
        cardWidthCenter: "280px", // Ensure this fits within your mobile container padding
        cardHeightCenter: "480px",
        cardWidthSide: "220px",
        cardHeightSide: "380px",
        translateX: 160, // Horizontal shift for side cards
        arrowOffset: "left-2 right-2", // Tailwind classes for arrow horizontal position
      };
    } else if (screenSize === "tablet") {
      return {
        viewerHeight: "700px",
        cardWidthCenter: "480px", // Adjusted for tablet
        cardHeightCenter: "700px",
        cardWidthSide: "380px",
        cardHeightSide: "600px",
        translateX: 250,
        arrowOffset: "md:left-4 md:right-4",
      };
    } else {
      // Desktop
      return {
        viewerHeight: "850px",
        cardWidthCenter: "600px",
        cardHeightCenter: "850px",
        cardWidthSide: "500px",
        cardHeightSide: "750px",
        translateX: 320,
        arrowOffset: "lg:left-8 lg:right-8",
      };
    }
  }, [screenSize]);

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
    return designTemplates.map((template, i) => ({ ...template, index: i }));
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
    cardActualIndex: number // Renamed from index to avoid conflict with template.index
  ) => {
    const position = cardActualIndex - currentIndex;
    const isCenter = position === 0;
    const isPrev =
      position === -1 ||
      (currentIndex === 0 && cardActualIndex === designTemplates.length - 1);
    const isNext =
      position === 1 ||
      (currentIndex === designTemplates.length - 1 && cardActualIndex === 0);

    const {
      cardWidthCenter,
      cardHeightCenter,
      cardWidthSide,
      cardHeightSide,
      translateX: baseTranslateX,
    } = responsiveValues;

    let currentCardWidth = isCenter ? cardWidthCenter : cardWidthSide;
    let currentCardHeight = isCenter ? cardHeightCenter : cardHeightSide;
    let cardTranslateX = 0;
    let scale = 0.75;
    let opacity = 0.6;
    let zIndex = 10;

    if (isCenter) {
      cardTranslateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 20;
    } else if (isPrev) {
      cardTranslateX = -baseTranslateX;
    } else if (isNext) {
      cardTranslateX = baseTranslateX;
    } else {
      // Hidden templates
      cardTranslateX =
        position > 0 ? baseTranslateX * 1.8 : -baseTranslateX * 1.8; // Adjusted multiplier
      scale = 0.5;
      opacity = 0;
      zIndex = 5;
    }

    return (
      <div
        key={`template-${template.id}-${cardActualIndex}`} // Ensure unique key if getAllTemplates can produce duplicates in future
        className="absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out"
        style={{
          width: currentCardWidth,
          height: currentCardHeight,
          transform: `translate(-50%, -50%) translateX(${cardTranslateX}px) scale(${scale})`,
          opacity,
          zIndex,
        }}
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
          <div className="relative h-full">
            {!iframeErrors[cardActualIndex as keyof typeof iframeErrors] ? (
              <>
                <iframe
                  src={template.url}
                  className="w-full h-full border-0"
                  title={template.name}
                  loading="lazy"
                  onLoad={() => handleIframeLoad(cardActualIndex)}
                  onError={() => handleIframeError(cardActualIndex)}
                  sandbox="allow-scripts allow-same-origin"
                />
                {isCenter &&
                  !iframeLoaded[
                    cardActualIndex as keyof typeof iframeLoaded
                  ] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                        <p className="text-gray-600">
                          {isAnimating ? "Sliding..." : "Loading template..."}
                        </p>
                      </div>
                    </div>
                  )}
              </>
            ) : (
              <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
                {isCenter ? (
                  <div className="text-center p-4 md:p-8">
                    <ExternalLink
                      size={screenSize === "mobile" ? 32 : 48}
                      className="mx-auto text-gray-400 mb-4"
                    />
                    <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                      Preview Not Available
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      Cannot display in frame due to security policy.
                    </p>
                    <button
                      onClick={() => openInNewTab(template.url)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 text-sm md:text-base"
                    >
                      <ExternalLink size={16} />
                      View in New Tab
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <ExternalLink
                      size={screenSize === "mobile" ? 18 : 24}
                      className="mx-auto text-gray-400 mb-1 md:mb-2"
                    />
                    <p className="text-xs md:text-sm text-gray-600 truncate w-full px-2">
                      {template.name}
                    </p>
                  </div>
                )}
              </div>
            )}
            {!isCenter && !isAnimating && (isPrev || isNext) && (
              <div
                className="absolute inset-0 bg-black bg-opacity-20 cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-opacity-30"
                onClick={() => {
                  if (isPrev) goToPrevious();
                  else if (isNext) goToNext();
                }}
              >
                {/* Optional: Show template name on hover for side cards if desired */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="design"
      className="w-full pt-12 md:pt-20 pb-12 bg-webforge-background"
    >
      {/*
        IMPORTANT: Adjust the padding on FadeInUp's className prop for different screen sizes.
        Example for better mobile spacing: className="container px-4 sm:px-6 md:px-12 lg:px-8"
        The current px-16 on smallest screens might be too large for the mobile card widths.
      */}
      <FadeInUp className="container px-4 sm:px-6 md:px-12 lg:px-8">
        {" "}
        {/* Example padding */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Designs
            </span>
          </h3>
        </div>
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: responsiveValues.viewerHeight }} // Ensure Carousel container also respects min height
        >
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className={`absolute z-30 bg-black hover:bg-gray-800 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 
                        ${
                          isAnimating
                            ? "opacity-50 cursor-not-allowed scale-95"
                            : ""
                        }
                        ${
                          screenSize === "mobile"
                            ? "left-1"
                            : screenSize === "tablet"
                            ? "left-2"
                            : "left-[-1rem] xl:left-[-2rem]"
                        }`} // Adjusted arrow positions
            aria-label="Previous template"
          >
            <ChevronLeft size={screenSize === "mobile" ? 20 : 24} />
          </button>

          <div
            className="relative w-full overflow-hidden"
            style={{ height: responsiveValues.viewerHeight }}
          >
            {getAllTemplates().map(
              (template) => renderTemplateCard(template, template.index) // pass template.index as cardActualIndex
            )}
          </div>

          <button
            onClick={goToNext}
            disabled={isAnimating}
            className={`absolute z-30 bg-black hover:bg-gray-800 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 
                        ${
                          isAnimating
                            ? "opacity-50 cursor-not-allowed scale-95"
                            : ""
                        }
                        ${
                          screenSize === "mobile"
                            ? "right-1"
                            : screenSize === "tablet"
                            ? "right-2"
                            : "right-[-1rem] xl:right-[-2rem]"
                        }`} // Adjusted arrow positions
            aria-label="Next template"
          >
            <ChevronRight size={screenSize === "mobile" ? 20 : 24} />
          </button>
        </div>
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={() => openInNewTab(designTemplates[currentIndex].url)}
            disabled={
              isAnimating ||
              iframeErrors[currentIndex as keyof typeof iframeErrors]
            }
            className={`bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white px-5 py-2 md:px-6 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2
                        ${
                          isAnimating ||
                          iframeErrors[
                            currentIndex as keyof typeof iframeErrors
                          ]
                            ? "opacity-50 cursor-not-allowed"
                            : ""
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
