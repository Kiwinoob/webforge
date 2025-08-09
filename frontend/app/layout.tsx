import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" color="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
