import type { Metadata } from "next";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Header } from "@modules/Header";
import { BackToTop } from "@modules/landing/BackToTop";
import { Carousel } from "@modules/landing/Carousel";
import { LandingScene } from "@modules/landing/LandingScene";
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
      <Header dictionnary={dictionnary} />

      <main className="min-h-screen bg-primary p-4 pb-24 md:pb-24 md:pt-8 lg:px-16 2xl:px-24" role="main">
        <section className="min-h-screen">
          <Carousel dictionnary={dictionnary} />

          <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mb-2 text-xl tracking-wide 2xl:mb-4 2xl:text-2xl">Léo Mercier</p>
            <h1 className="text-center text-6xl font-bold uppercase 2xl:text-9xl">
              Crafting
              <br />
              Excellence since
              <br />
              2012
            </h1>
          </div>

          <LandingScene />
        </section>

        {/* About */}
        <section className="flex flex-col gap-6">
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
        <section className="flex flex-col">
          <div className="relative w-40 overflow-hidden"></div>
        </section>

        {/* Contact */}
        <section className="flex flex-col">
          <Link href="/contact">Contact</Link>
        </section>

        <BackToTop />
      </main>
    </>
  );
}
