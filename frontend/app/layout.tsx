import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const pathname = usePathname();
const baseUrl = "https://webforge.sg";
const canonical = pathname === "/" ? baseUrl : `${baseUrl}${pathname}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" color="dark">
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
