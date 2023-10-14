import type { Metadata } from "next";
import Link from "next/link";
import { socials } from "@lib/constants";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { cn } from "@lib/utils";
import { ContactForm } from "@modules/contact/ContactForm";
import { ContactScene } from "@modules/contact/ContactScene";
import { MailTo } from "@modules/contact/MailTo";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";
import { FadeIn } from "@ui/FadeIn";

export const metadata: Metadata = {
  title: "Léo MERCIER — Contact",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default async function Contact({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <>
      <Header dictionnary={dictionnary} className="bg-lime-200" />

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
            {dictionnary.Contact.main}
          </FadeIn>
        </FadeIn>

        <FadeIn
          as="h3"
          startY={0}
          delay={1}
          className="my-6 text-lg font-thin md:mt-24 xl:text-3xl 2xl:mt-24 3xl:mt-28"
        >
          {dictionnary.Contact.formTitle}
        </FadeIn>

        <ContactForm dictionnary={dictionnary} />

        <section className="mt-12 flex w-full flex-col md:mt-20 md:flex-row">
          <ul className="flex h-24 w-full text-center font-light uppercase md:h-56">
            {socials.map((item, i) => (
              <li
                key={i}
                className={cn("flex grow border border-x-0 border-y-black", i % 2 === 0 && "border-r border-r-black")}
              >
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.href}
                  className="flex h-full w-full items-center justify-center"
                >
                  <FadeIn as="p" startY={0} className="md:text-2xl">
                    {item.name}
                  </FadeIn>
                </Link>
              </li>
            ))}
          </ul>
          <aside className="border border-x-0 border-t-0 border-b-black md:min-w-[50%] md:border-l md:border-t md:border-l-black md:border-t-black">
            <ContactScene />
          </aside>
        </section>
      </main>

      <Footer dictionnary={dictionnary} />
    </>
  );
}
