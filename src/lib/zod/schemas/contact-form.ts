import z from "@/lib/zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  message: z.string(),
});
