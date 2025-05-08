"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FadeInUp from "./fade-in-up";
import emailjs from "@emailjs/browser";
import { useReCaptcha } from "next-recaptcha-v3";

export function ContactSection() {
  const { executeRecaptcha } = useReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (emailJsPublicKey) {
      emailjs.init(emailJsPublicKey);
    } else {
      console.error(
        "EmailJS Public Key is not defined. Please check your .env.local file."
      );
    }
    if (!siteKey) {
      console.error(
        "reCAPTCHA Site Key is not defined. Please check your .env.local file."
      );
    }
  }, [emailJsPublicKey, siteKey]);

  const handleReCaptchaVerify = useCallback(async () => {
    try {
      if (!executeRecaptcha) {
        console.error("reCAPTCHA verification not available");
        return null;
      }
      return await executeRecaptcha("contact_form");
    } catch (error) {
      console.error("reCAPTCHA verification failed:", error);
      return null;
    }
  }, [executeRecaptcha]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "",
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    if (
      !siteKey ||
      !emailJsServiceId ||
      !emailJsTemplateId ||
      !emailJsPublicKey
    ) {
      console.error(
        "One or more environment variables are not set for EmailJS or reCAPTCHA."
      );
      alert("Configuration error. Please contact support.");
      return;
    }

    setIsSubmitting(true);

    const recaptchaToken = await handleReCaptchaVerify();

    if (!recaptchaToken) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "reCAPTCHA verification failed. Please try again.",
      }));
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      ...formData,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams);
      console.log("Form submitted successfully:", formData);
      setFormData({
        name: "",
        email: "",
        enquiryType: "General",
        currentWebsite: "",
        projectDescription: "",
        consent: false,
      });
      setErrors({});
      setSubmitStatus("success");
      alert("Thank you for your message. We'll get back to you soon!");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-8 md:py-16 lg:py-20 bg-webforge-background"
    >
      <FadeInUp className="container px-16 md:px-12 max-w-3xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
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
              Name *
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full h-10 px-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-10 px-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="enquiryType" className="text-sm">
              Enquiry Type *
            </label>
            <div className="relative">
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={`w-full h-10 px-3 border ${
                  errors.enquiryType ? "border-red-500" : "border-gray-300"
                } rounded appearance-none pr-10`}
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
                value={formData.currentWebsite}
                onChange={handleChange}
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="projectDescription" className="text-sm">
              Project Description *
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className={`w-full h-32 px-3 py-2 border ${
                errors.projectDescription ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            ></textarea>
            {errors.projectDescription && (
              <span className="text-red-500 text-xs">
                {errors.projectDescription}
              </span>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={handleCheckboxChange}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-xs text-gray-600">
              * By checking this box, you consent to the processing and sharing
              of your personal data for the purpose of addressing your specified
              queries
            </label>
          </div>

          {errors.recaptcha && (
            <div className="text-center">
              <span className="text-red-500 text-xs">{errors.recaptcha}</span>
            </div>
          )}

          {submitStatus === "success" && (
            <p className="text-green-600 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 text-center">
              Failed to send message. Please try again.
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </FadeInUp>
    </section>
  );
}
