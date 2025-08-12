"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function CanonicalUrl() {
  const pathname = usePathname();
  const baseUrl = "https://webforge.sg";
  const canonical = pathname === "/" ? baseUrl : `${baseUrl}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonical} />
    </Head>
  );
}
