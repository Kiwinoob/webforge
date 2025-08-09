"use client";

import React from "react";
import { type UseFormReturn, type SubmitHandler } from "react-hook-form";
import { type MultiStepFormData } from "@/lib/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import FadeIn from "../common/fade-in";

interface MultiStepFormProps {
  currentStep: number;
  totalSteps: number;
  form: UseFormReturn<MultiStepFormData>;
  handleNext: () => void;
  handlePrevious: () => void;
  processForm: SubmitHandler<MultiStepFormData>; // Changed: no longer wrapped with handleSubmit
  isSubmitting: boolean;
}

export default function MultiStepForm({
  currentStep,
  totalSteps,
  form,
  handleNext,
  handlePrevious,
  processForm,
  isSubmitting,
}: MultiStepFormProps) {
  const { handleSubmit } = form;

  // Create a function that only calls processForm when we're on the final step
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Always prevent default form submission

    if (currentStep === totalSteps) {
      // Only process the form submission if we're on the final step
      handleSubmit(processForm)(e);
    }
    // Otherwise, do nothing - navigation is handled by button onClick
  };

  return (
    <section className="py-16 md:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn direction="up" distance={24} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Progress Tracker - (No changes) */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="bg-neutral-900 border border-neutral-800 p-6">
                <div className="space-y-4">
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Progress
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-red-600">
                      {currentStep}/4
                    </div>
                    <div className="w-full bg-neutral-800 h-2">
                      <div
                        className="bg-red-600 h-2 transition-all duration-300"
                        style={{
                          width: `${(currentStep / 4) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Estimated
                    </div>
                    <div className="text-base text-neutral-300">3-4 min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Content */}
            <div className="lg:col-span-3 lg:order-1">
              <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-12">
                <Form {...form}>
                  <form
                    onSubmit={handleFormSubmit} // Use our conditional submit handler
                    className="space-y-12"
                  >
                    {/* Header - (No changes) */}
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {currentStep === 1 && "Contact Information"}
                        {currentStep === 2 && "Business Information"}
                        {currentStep === 3 && "Project Type"}
                        {currentStep === 4 && "Project Goals"}
                      </h2>
                      <p className="text-neutral-400">
                        {currentStep === 1 &&
                          "Let's start with your contact details"}
                        {currentStep === 2 &&
                          "Tell us about your business and industry"}
                        {currentStep === 3 &&
                          "What type of website do you need?"}
                        {currentStep === 4 &&
                          "Share your project goals and vision"}
                      </p>
                    </div>

                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                      <div className="space-y-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-medium text-white">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-neutral-800 border-neutral-700 text-white focus:border-orange-500"
                                  placeholder="John Doe"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-medium text-white">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  className="bg-neutral-800 border-neutral-700 text-white focus:border-orange-500"
                                  placeholder="john@company.com"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-medium text-white">
                                Company Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-neutral-800 border-neutral-700 text-white focus:border-orange-500"
                                  placeholder="Your Company Pte Ltd"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Step 2: Business Information */}
                    {currentStep === 2 && (
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium text-white">
                              What's your business/industry? *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 text-white">
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-neutral-800 border-neutral-700">
                                <SelectItem value="engineering">
                                  Engineering & Construction
                                </SelectItem>
                                <SelectItem value="professional">
                                  Professional Services (Legal, Consulting)
                                </SelectItem>
                                <SelectItem value="healthcare">
                                  Healthcare & Medical
                                </SelectItem>
                                <SelectItem value="fintech">
                                  Financial Technology
                                </SelectItem>
                                <SelectItem value="education">
                                  Education & Training
                                </SelectItem>
                                <SelectItem value="hospitality">
                                  Hospitality & Food
                                </SelectItem>
                                <SelectItem value="technology">
                                  Technology & Software
                                </SelectItem>
                                <SelectItem value="manufacturing">
                                  Manufacturing
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Step 3: Project Type */}
                    {currentStep === 3 && (
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem className="space-y-6">
                            <FormLabel className="text-lg font-medium text-white">
                              What type of website do you need? *
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-4"
                              >
                                <FormItem className="flex items-start md:items-center space-x-4 p-4 md:p-6 border border-neutral-700 hover:border-orange-500 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="starter"
                                      id="starter"
                                      className="border-neutral-600 mt-1 md:mt-0"
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor="starter"
                                    className="flex-1 space-y-1 font-normal"
                                  >
                                    <span className="text-white font-medium cursor-pointer">
                                      Starter ($500+ SGD)
                                    </span>
                                    <p className="text-neutral-400">
                                      Entry-level package for new businesses
                                    </p>
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-start md:items-center space-x-4 p-4 md:p-6 border border-neutral-700 hover:border-orange-500 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="professional"
                                      id="professional"
                                      className="border-neutral-600 mt-1 md:mt-0"
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor="professional"
                                    className="flex-1 space-y-1 font-normal"
                                  >
                                    <span className="text-white font-medium cursor-pointer">
                                      Professional ($2.2K+ SGD) ⭐ Most Popular
                                    </span>
                                    <p className="text-neutral-400">
                                      Mid-tier for established companies
                                    </p>
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-start md:items-center space-x-4 p-4 md:p-6 border border-neutral-700 hover:border-orange-500 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="enterprise"
                                      id="enterprise"
                                      className="border-neutral-600 mt-1 md:mt-0"
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor="enterprise"
                                    className="flex-1 space-y-1 font-normal"
                                  >
                                    <span className="text-white font-medium cursor-pointer">
                                      Enterprise ($5K+ SGD)
                                    </span>
                                    <p className="text-neutral-400">
                                      Full-scale solutions for larger
                                      organizations
                                    </p>
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Step 4: Project Goals */}
                    {currentStep === 4 && (
                      <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium text-white">
                              Tell us about your goals (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="bg-neutral-800 border-neutral-700 text-white focus:border-orange-500 min-h-[100px]"
                                placeholder="What do you want to achieve with your new website? (e.g., generate more leads, showcase services, sell products online)"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Navigation */}
                    <div className="flex flex-col gap-4 pt-8 border-t border-neutral-800">
                      <div className="flex items-center justify-between">
                        <div>
                          {currentStep > 1 && (
                            <Button
                              type="button"
                              onClick={handlePrevious}
                              variant="outline"
                              className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                              disabled={isSubmitting} // Disable when submitting
                            >
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Previous
                            </Button>
                          )}
                        </div>

                        <div>
                          {currentStep === totalSteps ? (
                            <Button
                              type="button"
                              onClick={handleSubmit(processForm)}
                              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 disabled:opacity-50 disabled:cursor-wait"
                              disabled={isSubmitting} // Disable when submitting
                            >
                              {isSubmitting
                                ? "Submitting..."
                                : "Submit Project Brief"}
                              {!isSubmitting && (
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                              )}
                            </Button>
                          ) : (
                            <Button
                              type="button"
                              onClick={handleNext}
                              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8"
                            >
                              Continue
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* reCAPTCHA Disclaimer */}
                      {currentStep === totalSteps && (
                        <p className="text-xs text-neutral-500 text-right">
                          This site is protected by reCAPTCHA and the Google{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            className="underline hover:text-neutral-300"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://policies.google.com/terms"
                            className="underline hover:text-neutral-300"
                          >
                            Terms of Service
                          </a>{" "}
                          apply.
                        </p>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
