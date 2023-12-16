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
      <main className="flex min-h-screen flex-col bg-black p-4 pb-24 pt-16 text-primary sm:py-32 lg:px-16 2xl:px-24">
        <div className="block pb-14 sm:pb-28 lg:flex lg:gap-28">
          <FadeIn as="p" startY={20} delay={1} className="pb-2 font-thin lg:pb-0 lg:pt-4 lg:text-2xl xl:pt-8 2xl:pt-16">
            404
          </FadeIn>
          <FadeIn
            as="h1"
            delay={1}
            className="text-[clamp(100px,calc(.6rem_+_12vw),250px)] font-light uppercase leading-none"
          >
            Page <br /> No
            <RotatingCharacter char="t" />
            <br />
            <span className="flex">
              F
              <Star className="w-16 md:w-20 lg:w-28 xl:w-36 2xl:w-40 3xl:w-48" />
              und
            </span>
          </FadeIn>
        </div>
        <FadeIn as="q" className="font-thin uppercase sm:text-2xl">
          Where are we? Who am I?
        </FadeIn>
        <FadeIn delay={0.3} className="flex items-center gap-3 pt-4 sm:gap-6 sm:text-xl">
          <AnimatedArrow />
          <Link href="/">Back Home</Link>
        </FadeIn>
      </main>
      <Footer dictionnary={dictionnary} className="bg-primary text-black after:bg-primary" />
    </body>
  );
}
