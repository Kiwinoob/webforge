// components/contact/ContactFormWrapper.tsx

"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { multiStepFormSchema, type MultiStepFormData } from "@/lib/schemas";
// STEP 1: Comment out reCAPTCHA-related imports
// import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

// Import your custom toast instead of regular toast
import { customToast } from "@/components/common/custom-toast";

import emailjs from "@emailjs/browser";

import HeroSection from "@/components/contact/hero-section";
import MultiStepForm from "@/components/contact/multi-step-form";

const stepFields: (keyof MultiStepFormData)[][] = [
  ["name", "email", "company"],
  ["industry"],
  ["projectType"],
  ["goals"],
];

export default function ContactFormWrapper() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // STEP 2: Comment out the useReCaptcha hook call
  // const { executeRecaptcha } = useReCaptcha();

  const form = useForm<MultiStepFormData>({
    resolver: zodResolver(multiStepFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      projectType: undefined,
      goals: "",
      features: [],
    },
  });

  const { trigger, handleSubmit, formState, reset } = form;

  const handleNext = async () => {
    const fieldsToValidate = stepFields[currentStep - 1];
    const isValid = await trigger(fieldsToValidate, { shouldFocus: true });
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const processForm: SubmitHandler<MultiStepFormData> = async (data) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      customToast.themed.error({
        message: "Configuration Error",
        description:
          "EmailJS configuration is missing. Please contact support.",
      });
      console.error("Missing EmailJS environment variables.");
      return;
    }

    try {
      // const token = await executeRecaptcha("form_submit"); // Commented out
      const templateParams = { ...data };

      // Show loading toast
      customToast.themed.info({
        message: "Sending your project brief...",
        description: "This may take a few moments.",
      });

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Show success toast with your theme
      customToast.themed.success({
        message: "Project brief submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setTimeout(() => {
        reset();
        setCurrentStep(1);
      }, 3000);
    } catch (error: any) {
      console.error("Failed to send email via EmailJS:", error);

      // Show error toast with your theme
      customToast.themed.error({
        message: "Failed to submit project brief",
        description:
          error?.text || "Please check your connection and try again.",
      });
    }
  };

  return (
    <>
      <HeroSection currentStep={currentStep} totalSteps={totalSteps} />
      <MultiStepForm
        currentStep={currentStep}
        totalSteps={totalSteps}
        form={form}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        processForm={processForm}
        isSubmitting={formState.isSubmitting}
      />
    </>
  );
}
