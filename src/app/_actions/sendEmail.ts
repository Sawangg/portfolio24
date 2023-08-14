"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const SendEmail = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email({ message: "invalid email" }).min(1, { message: "email is required" }),
  company: z.string(),
  message: z.string().min(1, { message: "message is required" }),
});
export type SendEmail = z.infer<typeof SendEmail>;

export const sendEmail = async (data: FormData) => {
  const { name, email, company, message } = Object.fromEntries(data);
  const result = SendEmail.safeParse({ name, email, company, message });
  if (!result.success) return { error: result.error.format() };

  // TODO send email
  revalidatePath("/contact");
  return { success: "ok" };
};
