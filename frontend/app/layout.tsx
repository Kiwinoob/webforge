import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webforge - Professional Website Creation Services",
  description:
    "Webforge provides professional website creation services tailored to your business needs. From design to deployment, we handle it all.",
  keywords:
    "custom web design, small business websites, responsive web design, SEO-friendly websites, professional web development",
};

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
          >
            {children}
          </ReCaptchaProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
