"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { type ZodFormattedError } from "zod";
import { type Dictionnary } from "@lib/getDictionnary";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";
import { Input } from "@ui/Input";
import { TextArea } from "@ui/TextArea";
import { sendMessage, type SendMessage } from "../../app/_actions/sendMessage";

export type ContactFormProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  dictionnary: Dictionnary;
};

export const ContactForm = ({ dictionnary }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [validationError, setValidationError] = useState<ZodFormattedError<SendMessage> | null>(null);
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);

  async function sendMessageAction(data: FormData) {
    const result = await sendMessage(data);
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
      action={sendMessageAction}
      className="mt-6 flex flex-col gap-4 lg:gap-10 2xl:w-2/3 2xl:justify-end"
      noValidate
    >
      <Input
        type="text"
        id="name"
        name="name"
        placeholder={`${dictionnary.Contact.form.name}*`}
        label="1"
        delay={1}
        autoComplete="off"
      />
      {validationError?.name?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.name._errors[0]}</p>
      )}
      <Input
        type="text"
        id="email"
        name="email"
        placeholder={`${dictionnary.Contact.form.email}*`}
        label="2"
        delay={1.1}
        autoComplete="off"
      />
      {validationError?.email?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.email._errors.join(", ")}</p>
      )}
      <Input
        type="text"
        id="company"
        name="company"
        placeholder={dictionnary.Contact.form.company}
        label="3"
        delay={1.2}
        autoComplete="off"
      />
      <TextArea
        id="message"
        name="message"
        placeholder={`${dictionnary.Contact.form.message}*`}
        label="4"
        delay={1.3}
      />
      {validationError?.message?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.message._errors[0]}</p>
      )}
      {validationSuccess && <p className="text-xs uppercase text-green-400">{dictionnary.Contact.form.success}</p>}
      <FadeIn delay={1.4} className="flex flex-row items-center">
        <label htmlFor="submit">5</label>
        <input
          id="submit"
          type="submit"
          className="ml-6 cursor-pointer uppercase lg:text-lg"
          value={dictionnary.Contact.form.submit}
        />
        <div className="relative ml-2 w-4">
          <AspectRatio ratio={1 / 1}>
            <Image src="/assets/arrow.svg" alt="" sizes="16px" role="img" fill />
          </AspectRatio>
        </div>
      </FadeIn>
    </form>
  );
};
