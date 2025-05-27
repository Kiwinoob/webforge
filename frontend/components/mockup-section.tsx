"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInUp from "./fade-in-up";

type PageItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
};

type PaginatedResponse = {
  pages: PageItem[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
};

// Fallback data extracted from your Firebase structure
const fallbackPages: PageItem[] = [
  {
    id: "1",
    title: "Home",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/CrochetAndCo%2FHome.jpeg?alt=media&token=fc786deb-65cd-40ec-b894-021c540f68bd",
    category: "UI Design"
  },
  {
    id: "2",
    title: "Catalog",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/CrochetAndCo%2FEmptyCart.jpeg?alt=media&token=c63329cb-67aa-48bf-8e22-9f6890114b37",
    category: "UI Design"
  },
  {
    id: "3",
    title: "Contact",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0831.firebasestorage.app/o/CrochetAndCo%2FProductPage.jpeg?alt=media&token=e7091b4b-10bb-406e-a831-9eda1282c73f",
    category: "UI Design"
  },
    {
    id: "4",
    title: "Home",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0631.firebasestorage.app/o/CrochetAndCo%2FHome.jpeg?alt=media&token=fc786deb-65cd-4bec-b894-021c540f68bd",
    category: "UI Design"
  },
  {
    id: "5",
    title: "Catalog",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0631.firebasestorage.app/o/CrochetAndCo%2FCatalog.jpeg?alt=media&token=bc676852-35a8-4d33-9e91-c731870c91c1",
    category: "UI Design"
  },
  {
    id: "6",
    title: "Contact",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/webforge-d0631.firebasestorage.app/o/CrochetAndCo%2FContact.jpeg?alt=media&token=f271cafa-4b07-4193-b869-d59ea4ba4f0a",
    category: "UI Design"
  }
];

async function fetchPages(page: number = 1, pageSize: number = 6): Promise<PaginatedResponse> {
  try {
    const res = await fetch(
      `https://webforge-backend.onrender.com/pages?page=${page}&size=${pageSize}`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!res.ok) throw new Error("Failed to fetch pages");
    const data = await res.json();
    console.log("Successfully fetched pages at", new Date().toISOString());
    return data;
  } catch (error) {
    console.log("Backend server error, using fallback data:", error);
    return {
      pages: fallbackPages,
      totalPages: 1,
      currentPage: 1,
      totalItems: fallbackPages.length
    };
  }
}

export function MockupSection() {
  const [pagesData, setPagesData] = useState<PaginatedResponse>({
    pages: fallbackPages,
    totalPages: 1,
    currentPage: 1,
    totalItems: fallbackPages.length
  });
  const [loading, setLoading] = useState(false);

  const fetchPageData = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchPages(page, 6);
      setPagesData(data);
    } catch (error) {
      console.error("Error fetching page data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData(1);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagesData.totalPages && !loading) {
      fetchPageData(newPage);
    }
  };

const get3DTransform = (index: number) => {
  // Add progressive depth spacing
  const depthSpacing = index * 25; // Adjust this value to increase/decrease spacing
  
  const transforms = [
    `rotateY(-15deg) rotateX(5deg) translateZ(${0 + depthSpacing}px)`,
    `rotateY(10deg) rotateX(-3deg) translateZ(${40 + depthSpacing}px)`,
    `rotateY(-8deg) rotateX(8deg) translateZ(${80 + depthSpacing}px)`,
    `rotateY(12deg) rotateX(-5deg) translateZ(${20 + depthSpacing}px)`,
    `rotateY(-20deg) rotateX(3deg) translateZ(${60 + depthSpacing}px)`,
    `rotateY(8deg) rotateX(-8deg) translateZ(${100 + depthSpacing}px)`
  ];
  return transforms[index % transforms.length];
};

// Use these in your DraggableCard component
const getPositionClass = (index: number) => {
  // Increased spacing values
  const positions = [
    "top-0 right-0",
    "top-36 right-[300px]",
    "top-12 left-[1050px]", 
    "top-36 right-[1050px]",
    "top-0 left-[450px]",
    "top-12 right-[1550px]"
  ];
  return positions[index % positions.length];
};

  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <FadeInUp className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-16">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Design{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Showcase
            </span>
          </h3>
          <p className="text-webforge-dark/70 mt-4">
            Explore our UI/UX design work in an immersive 3D perspective
          </p>
        </div>

        {/* 3D Perspective Container */}
        <div 
          className="relative h-[600px] md:h-[700px] lg:h-[800px] mx-auto max-w-8xl mb-12"
          style={{ 
            perspective: '1800px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div 
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {pagesData.pages.slice(0, 6).map((project, index) => (
              <div
                key={project.id}
                className={`absolute w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] ${getPositionClass(index)} group cursor-pointer`}
                style={{
                  transform: get3DTransform(index),
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
                }}
              >
                {/* Mockup Frame */}
                <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  
                  {/* Enhanced Browser Header */}
                  <div className="h-8 bg-gray-200 flex items-center px-3 space-x-2 border-b border-gray-300">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                    </div>
                    <div className="flex-1 bg-white h-5 rounded-sm mx-4 flex items-center px-3 border border-gray-200">
                      <div className="text-xs text-gray-500 truncate">
                        https://webforge.com/{project.title.toLowerCase()}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-3 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-3 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="relative h-[calc(100%-2rem)] overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title || "Project image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white w-full">
                        <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                        {project.category && (
                          <span className="inline-block px-2 py-1 bg-webforge-accent rounded text-xs">
                            {project.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3D Border Effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-lg"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 60px rgba(0,0,0,0.3)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Background Elements for Depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-webforge-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-webforge-accent"></div>
          </div>
        )}

        {/* Pagination Controls */}
        {pagesData.totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagesData.currentPage - 1)}
              disabled={pagesData.currentPage <= 1 || loading}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: Math.min(5, pagesData.totalPages) }, (_, i) => {
                let pageNum;
                if (pagesData.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (pagesData.currentPage <= 3) {
                  pageNum = i + 1;
                } else if (pagesData.currentPage >= pagesData.totalPages - 2) {
                  pageNum = pagesData.totalPages - 4 + i;
                } else {
                  pageNum = pagesData.currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={pageNum === pagesData.currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    disabled={loading}
                    className={`w-10 h-10 p-0 ${
                      pageNum === pagesData.currentPage
                        ? "bg-webforge-accent hover:bg-webforge-accent/90"
                        : "bg-white/80 backdrop-blur-sm"
                    }`}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagesData.currentPage + 1)}
              disabled={pagesData.currentPage >= pagesData.totalPages || loading}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="text-center text-sm text-webforge-dark/60 mt-4">
          Showing {Math.min(6, pagesData.pages.length)} designs from page {pagesData.currentPage} of {pagesData.totalPages}
        </div>
      </FadeInUp>
    </section>
  );
}
