"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FadeInUp from './fade-in-up';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "Get a Quote",
    currentWebsite: "",
    projectDescription: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      enquiryType: "Get a Quote",
      currentWebsite: "",
      projectDescription: "",
      consent: false,
    });
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section
      id="contact"
      className="w-full py-8 md:py-16 lg:py-20 bg-webforge-background"
    >
      <FadeInUp className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h3 className="text-3xl font-bold tracking-tighter text-webforge-dark sm:text-4xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-webforge-accent to-amber-600 text-transparent bg-clip-text font-bold">
              Us
            </span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 px-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 px-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="enquiryType" className="text-sm">
              Enquiry Type
            </label>
            <div className="relative">
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full h-10 px-3 border border-gray-300 rounded appearance-none pr-10"
                required
              >
                <option value="General">General</option>
                <option value="Get a Quote">Get a Quote</option>
                <option value="Pricing">Pricing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 5L11 1"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {formData.enquiryType === "Get a Quote" && (
            <div className="space-y-2">
              <label htmlFor="currentWebsite" className="text-sm">
                Current Website (if any)
              </label>
              <input
                id="currentWebsite"
                name="currentWebsite"
                type="url"
                value={formData.currentWebsite}
                onChange={handleChange}
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="projectDescription" className="text-sm">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={handleCheckboxChange}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-xs text-gray-600">
              By checking this box, you consent to the processing and sharing of
              your personal data for the purpose of addressing your specified
              queries
            </label>
          </div>

          <div className="flex justify-center">
            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key">
              {/* This is a placeholder for the reCAPTCHA. In a real implementation, you would need to include the reCAPTCHA script */}
              <div className="border border-gray-300 rounded p-2 text-xs text-gray-500 flex items-center justify-center h-[78px] w-[300px]">
                reCAPTCHA placeholder
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white"
          >
            Send
          </Button>
        </form>
      </FadeInUp>
    </section>
  );
}
