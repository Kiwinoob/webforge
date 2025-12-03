// app/contact/page.tsx

import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import ContactFormWrapper from "@/components/contact/contact-form-wrapper";
import ContactSchema from "@/components/contact/contact-schema";

// 1. Export your metadata from the Server Component
export const metadata: Metadata = constructMetadata({
  title: "WebForge | Contact", // Title is more specific to the page
  description:
    "Get in touch with Webforge for professional website creation services. Let's discuss your project from design to deployment.",
  keywords:
    "Contact Webforge, WebforgeSG, Web Design Quote, Web Development Project, UI/UX Design, Custom web design, small business websites",
  ogType: "website",
  pathname: "/contact",
});

// 2. This is now a Server Component
export default function ContactPage() {
  // 3. Render the Client Component inside the Server Component
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      <ContactSchema />
      <ContactFormWrapper />
    </div>
  );
}
