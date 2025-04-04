import { z } from "zod";

const highlightSchema = z
  .string()
  .min(10, "Highlight should be at least 10 characters");

export const meetingSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3, "Name must be at least 3 characters"),
  date: z.date(),
  cost: z.number().min(0, "Cost cannot be negative"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  fullDescription: z
    .string()
    .min(50, "Full description must be at least 50 characters"),
  place: z.string().min(5, "Place must be at least 5 characters"),
  duration: z.string().min(3, "Duration must be specified (e.g., '2 hours')"),
  capacity: z.number().positive("Capacity must be positive"),
  organizer: z.string().min(3, "Organizer name must be at least 3 characters"),
  requirements: z.string().min(5, "Requirements must be specified"),
  img: z
    .string()
    .regex(/\.(jpg|jpeg|png|webp)$/i, "Image must be a valid file path"),
  highlights: z
    .array(highlightSchema)
    .min(1, "At least one highlight required"),
});

export type Meeting = z.infer<typeof meetingSchema>;
