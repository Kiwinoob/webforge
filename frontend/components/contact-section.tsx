"use client";

import type React from "react";
import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import FadeInUp from "./fade-in-up";
import emailjs from "@emailjs/browser";
import { useReCaptcha } from "next-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schema/contact-form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function ContactSection() {
  const { executeRecaptcha } = useReCaptcha();
  const { toast } = useToast();

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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      enquiryType: "General",
      currentWebsite: "",
      projectDescription: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (
      !siteKey ||
      !emailJsServiceId ||
      !emailJsTemplateId ||
      !emailJsPublicKey
    ) {
      console.error(
        "One or more environment variables are not set for EmailJS or reCAPTCHA."
      );
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Please contact support.",
      });
      return;
    }

    const recaptchaToken = await handleReCaptchaVerify();

    if (!recaptchaToken) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "reCAPTCHA verification failed. Please try again.",
      });
      return;
    }

    const templateParams = {
      ...data,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams);
      form.reset();
      toast({
        variant: "success",
        title: "Success!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm">Name *</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Your Name"
                      {...field}
                      className={`w-full h-10 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-webforge-accent ${
                        form.formState.errors[field.name]
                          ? "border-destructive"
                          : "border-gray-300"
                      }`}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm">Email *</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Your Email"
                      {...field}
                      type="email"
                      className={`w-full h-10 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-webforge-accent ${
                        form.formState.errors[field.name]
                          ? "border-destructive"
                          : "border-gray-300"
                      }`}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="enquiryType"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm">Enquiry Type *</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <select
                        {...field}
                        className={`w-full h-10 px-3 border rounded appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-webforge-accent ${
                          form.formState.errors[field.name]
                            ? "border-destructive"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="General">General</option>
                        <option value="Get a Quote">Get a Quote</option>
                        <option value="Pricing">Pricing</option>
                      </select>
                    </FormControl>
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
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {form.watch("enquiryType") === "Get a Quote" && (
              <FormField
                control={form.control}
                name="currentWebsite"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm">
                      Current Website (if any)
                    </FormLabel>
                    <FormControl>
                      <input
                        placeholder="Your Website URL"
                        {...field}
                        className={`w-full h-10 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-webforge-accent ${
                          form.formState.errors[field.name]
                            ? "border-destructive"
                            : "border-gray-300"
                        }`}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm">
                    Project Description *
                  </FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Your Project Description"
                      {...field}
                      className={`w-full h-32 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-webforge-accent ${
                        form.formState.errors[field.name]
                          ? "border-destructive"
                          : "border-gray-300"
                      }`}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormLabel className="text-xs text-gray-600">
                      * By checking this box, you consent to the processing and
                      sharing of your personal data for the purpose of
                      addressing your specified queries
                    </FormLabel>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-webforge-accent to-orange-500 hover:from-webforge-accent/90 hover:to-orange-600 text-white disabled:opacity-50"
            >
              {form.formState.isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </Form>
      </FadeInUp>
    </section>
  );
}
