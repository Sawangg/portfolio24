"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { ZodFormattedError } from "zod";
import type { Dictionnary } from "@lib/getDictionnary";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";
import { TextArea } from "@ui/TextArea";
import { TextInput } from "@ui/TextInput";
import { sendMessage, type SendMessage } from "../../app/_actions/sendMessage";

export type ContactFormProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  dictionnary: Dictionnary;
};

export const ContactForm: React.FC<ContactFormProps> = ({ dictionnary }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [validationError, setValidationError] = useState<ZodFormattedError<SendMessage> | null>(null);
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);

  async function sendMessageAction(data: FormData) {
    const result = await sendMessage(data);
    if (result?.success) {
      setValidationError(null);
      setValidationSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setValidationSuccess(false), 5000);
    } else if (result?.error) {
      setValidationError(result.error);
      setValidationSuccess(false);
    }
  }

  return (
    <form
      ref={formRef}
      action={sendMessageAction}
      className="flex flex-col gap-4 pt-6 lg:gap-10 2xl:w-2/3 2xl:justify-end"
      noValidate
    >
      <TextInput
        type="text"
        id="name"
        name="name"
        placeholder={`${dictionnary.Contact.form.name}*`}
        label="1"
        delay={1}
        autoComplete="off"
        resetTrigger={validationSuccess}
      />
      {validationError?.name?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.name._errors[0]}</p>
      )}
      <TextInput
        type="text"
        id="email"
        name="email"
        placeholder={`${dictionnary.Contact.form.email}*`}
        label="2"
        delay={1.1}
        autoComplete="off"
        resetTrigger={validationSuccess}
      />
      {validationError?.email?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.email._errors.join(", ")}</p>
      )}
      <TextInput
        type="text"
        id="company"
        name="company"
        placeholder={dictionnary.Contact.form.company}
        label="3"
        delay={1.2}
        autoComplete="off"
        resetTrigger={validationSuccess}
      />
      <TextArea
        id="message"
        name="message"
        placeholder={`${dictionnary.Contact.form.message}*`}
        label="4"
        delay={1.3}
        resetTrigger={validationSuccess}
      />
      {validationError?.message?._errors && (
        <p className="text-xs uppercase text-red-400 lg:text-sm">{validationError.message._errors[0]}</p>
      )}
      {validationSuccess && <p className="text-xs uppercase text-green-400">{dictionnary.Contact.form.success}</p>}
      <FadeIn delay={1.4} className="flex items-center gap-x-6">
        <label htmlFor="submit">5</label>
        <input
          id="submit"
          type="submit"
          className="cursor-pointer uppercase lg:text-lg"
          value={dictionnary.Contact.form.submit}
        />
        <div className="relative w-5">
          <AspectRatio ratio={42 / 11}>
            <Image src="/assets/arrow-right.svg" sizes="16px" alt="" fill />
          </AspectRatio>
        </div>
      </FadeIn>
    </form>
  );
};
