"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { type ZodFormattedError } from "zod";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";
import { Input } from "@ui/Input";
import { TextArea } from "@ui/TextArea";
import { sendEmail, type SendEmail } from "../../app/_actions/sendEmail";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [validationError, setValidationError] = useState<ZodFormattedError<SendEmail> | null>(null);
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);

  async function sendEmailAction(data: FormData) {
    const result = await sendEmail(data);
    if (result?.error) {
      setValidationError(result.error);
      setValidationSuccess(false);
    } else if (result?.success) {
      setValidationError(null);
      setValidationSuccess(true);
      formRef.current?.reset();
    }
  }

  return (
    <form
      ref={formRef}
      action={sendEmailAction}
      className="mt-6 flex flex-col gap-4 lg:gap-10 2xl:w-2/3 2xl:justify-end"
    >
      <Input type="text" id="name" name="name" placeholder="name*" label="1" delay={1} autoComplete="off" />
      {validationError?.name?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.name._errors[0]}</p>
      )}
      <Input type="text" id="email" name="email" placeholder="email*" label="2" delay={1.1} autoComplete="off" />
      {validationError?.email?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.email._errors.join(", ")}</p>
      )}
      <Input type="text" id="company" name="company" placeholder="company" label="3" delay={1.2} autoComplete="off" />
      <TextArea id="message" name="message" placeholder="message*" label="4" delay={1.3} />
      {validationError?.message?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.message._errors[0]}</p>
      )}
      {validationSuccess && <p className="text-xs uppercase text-green-400">Your message has been sent</p>}
      <FadeIn delay={1.4} className="flex flex-row gap-6">
        <label htmlFor="submit">5</label>
        <input id="submit" type="submit" className="lg:text-lg" />
        <div className="w-6 overflow-hidden">
          <AspectRatio ratio={1 / 1}>
            <Image src="/assets/arrow-dark.svg" alt="" sizes="(min-width: 640px) 24px, 100vw" fill />
          </AspectRatio>
        </div>
      </FadeIn>
    </form>
  );
};
