"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@db/index";
import { messages } from "@db/schemas/messages";

const SentMessage = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email({ message: "invalid email" }).min(1, { message: "email is required" }),
  company: z.string(),
  message: z.string().min(1, { message: "message is required" }),
});
export type SendMessage = z.infer<typeof SentMessage>;

export const sendMessage = async (data: FormData) => {
  const { name, email, company, message } = Object.fromEntries(data);
  const result = SentMessage.safeParse({ name, email, company, message });
  if (!result.success) return { error: result.error.format() };
  await db
    .insert(messages)
    .values({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      message: result.data.message,
    })
    .execute();

  revalidatePath("/contact");
  return { success: "ok" };
};
