import { type Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@modules/contact/ContactForm";
import { MailTo } from "@modules/contact/MailTo";
import { Navigation } from "@modules/Navigation";
import { FadeIn } from "@ui/FadeIn";

export const metadata: Metadata = {
  title: "Léo MERCIER — Contact",
};

export default function Contact() {
  return (
    <>
      <header className="flex flex-row justify-between bg-lime-200 px-4 pt-6 lg:px-16 2xl:px-24">
        <FadeIn startY={0} delay={0.5} className="mr-8 flex flex-col gap-2 md:mr-12 lg:mr-20 2xl:mr-24">
          <Link href="/" className="text-xs">
            Léo MERCIER
          </Link>
          <p className="text-[0.625rem] font-light uppercase">
            Personal
            <br />
            portfolio (2024)
          </p>
        </FadeIn>
        <Navigation />
      </header>

      <main className="min-h-screen bg-lime-200 p-4 pb-24 md:flex md:flex-col md:py-24 lg:px-16 2xl:px-24" role="main">
        <FadeIn as="h1" className="my-8 text-3xl md:text-6xl 2xl:text-6xl">
          Contact
        </FadeIn>

        <FadeIn
          startY={30}
          duration={1}
          delay={0.5}
          className="flex-row md:flex md:justify-between md:gap-20 md:text-justify"
        >
          <div className="flex flex-col items-start md:justify-end ">
            <p className="font-thin uppercase md:text-2xl">
              Paris <br />
              France
            </p>
            <MailTo className="mb-2 font-thin italic md:mt-6 md:text-2xl" />
          </div>
          <FadeIn
            as="h2"
            startY={0}
            duration={1.5}
            delay={1}
            className="my-6 text-2xl uppercase md:my-0 md:mt-auto md:w-1/2 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            Got a project idea or a job offer? Let&apos;s talk.
          </FadeIn>
        </FadeIn>

        <FadeIn
          as="h3"
          startY={0}
          delay={1}
          className="my-6 text-lg font-thin md:mt-24 xl:text-3xl 2xl:mt-24 3xl:mt-28"
        >
          Get in touch here 📬 This form is open 24/7
        </FadeIn>

        <ContactForm />

        {/* TODO: socials */}
      </main>
    </>
  );
}
