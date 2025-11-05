import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(9, "Teléfono no válido").optional().or(z.literal("")),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
