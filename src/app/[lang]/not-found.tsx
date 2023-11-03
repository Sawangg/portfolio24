import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";
import { AnimatedArrow } from "@modules/notfound/AnimatedArrow";
import { RotatingCharacter } from "@modules/notfound/RotatingCharacter";
import { FadeIn } from "@ui/FadeIn";
import { Star } from "@ui/Star";

export const metadata: Metadata = {
  title: "Léo MERCIER — Not Found",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function NotFound() {
  const dictionnary = await getDictionnary("en" as Locale);

  return (
    <body className="min-w-screen overflow-x-hidden bg-black">
      <Header dictionnary={dictionnary} navIconColor="hsl(0, 0%, 100%)" className="bg-black text-primary" />
      <main className="min-h-screen bg-black p-4 pb-24 pt-16 text-primary sm:py-32 lg:px-16 2xl:px-24">
        <div className="mb-14 block sm:mb-28 lg:flex lg:flex-row lg:gap-28">
          <FadeIn as="p" startY={20} delay={1} className="2x:mt-16 mb-2 font-thin lg:mb-0 lg:mt-4 lg:text-2xl xl:mt-8">
            404
          </FadeIn>
          <FadeIn
            as="h1"
            startY={0}
            delay={1}
            className="text-[clamp(100px,calc(.6rem_+_12vw),250px)] font-light uppercase leading-none"
          >
            Page <br /> No
            <RotatingCharacter char="t" />
            <br />
            <span className="flex">
              F
              <Star className="w-16" />
              und
            </span>
          </FadeIn>
        </div>
        <FadeIn as="q" startY={0} className="font-thin uppercase sm:text-2xl">
          Where are we? Who am I?
        </FadeIn>
        <FadeIn startY={0} delay={0.3} className="mt-4 flex flex-row items-center gap-3 sm:gap-6 sm:text-xl">
          <AnimatedArrow />
          <Link href="/">Back Home</Link>
        </FadeIn>
      </main>
      <Footer dictionnary={dictionnary} className="bg-primary text-black after:bg-primary" />
    </body>
  );
}
