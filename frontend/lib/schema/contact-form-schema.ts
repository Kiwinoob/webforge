import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  enquiryType: z.enum(["General", "Get a Quote", "Pricing"], {
    required_error: "Please select an enquiry type",
  }),
  currentWebsite: z.string().optional(),
  projectDescription: z.string().min(1, "Project description is required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
