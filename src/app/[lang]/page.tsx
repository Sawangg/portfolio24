import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { AnimatedTextCharacter } from "@modules/landing/AnimatedTextCharacter";
import { BackToTop } from "@modules/landing/BackToTop";
import { Scene } from "@modules/landing/Scene";
import { Navigation } from "@modules/Navigation";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";

export const metadata: Metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default async function Home({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <>
      <header className="flex flex-row justify-between bg-primary px-4 pt-6 lg:px-16 2xl:px-24">
        <div className="mr-8 flex flex-col gap-2 lg:mr-20 2xl:mr-24">
          <p className="whitespace-nowrap text-xs">Léo MERCIER</p>
          <p className="text-[0.625rem] font-light uppercase">
            Personal
            <br />
            portfolio (2024)
          </p>
        </div>
        <Navigation dictionnary={dictionnary} />
      </header>

      <main className="min-h-screen bg-primary p-4 pb-24 md:flex md:flex-col md:py-24 lg:px-16 2xl:px-24" role="main">
        <section className="min-h-screen">
          <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mb-2 text-xl tracking-wide 2xl:mb-4 2xl:text-2xl">Léo Mercier</p>
            <h1 className="text-center text-6xl font-bold uppercase 2xl:text-9xl">
              Crafting
              <br />
              <AnimatedTextCharacter text="excellence" />
              since
              <br />
              2012
            </h1>
          </div>

          <Scene />
        </section>

        {/* About */}
        <section className="flex flex-col gap-6" id="about">
          <FadeIn>
            <p className="text-2xl text-secondary">( 01 ).</p>
            <p className="text-2xl">
              I&apos;m a dynamic senior developper with a master&apos;s degree in computer science that can bring any of
              your ideas to life.
            </p>
          </FadeIn>

          <FadeIn className="ml-16">
            <p>( ABOUT )</p>
            <p>
              Born in Tours ( France ), the city of castles <br />
              <br />
              I&apos;m specialized in the NodeJS ecosystem, mainly React & TypeScript
            </p>
          </FadeIn>
        </section>

        {/* Work */}
        <section className="flex flex-col" id="work">
          <div className="relative w-40 overflow-hidden">
            <AspectRatio ratio={2 / 3}>
              <Image src="https://placehold.co/2000x3000" sizes="10rem" alt="" priority fill />
            </AspectRatio>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col" id="contact">
          <Link href="/contact">Contact</Link>
          <p></p>
        </section>

        <BackToTop />
      </main>
    </>
  );
}
