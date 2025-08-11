import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import CanonicalUrl from "@/components/common/canonical-url";
import StructuredData from "@/components/common/structured-data";
import BreadcrumbSchema from "@/components/common/breadcrumb-schema";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" color="dark">
      <CanonicalUrl />
      <StructuredData />
      <BreadcrumbSchema />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
