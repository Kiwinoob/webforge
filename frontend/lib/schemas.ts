// lib/schemas.ts
import { z } from "zod";

export const multiStepFormSchema = z.object({
  // Step 1
  name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),

  // Step 2
  industry: z.string().min(1, "Please select an industry."),

  // Step 3
  projectType: z.enum(["starter", "professional", "enterprise"], {
    errorMap: () => ({ message: "Please select a project type." }),
  }),

  // Step 4
  goals: z.string().optional(),

  // We'll add 'features' here even if it's not in the current form,
  // in case you want to add it back. It's good practice.
  features: z.array(z.string()).optional(),
});

export type MultiStepFormData = z.infer<typeof multiStepFormSchema>;
