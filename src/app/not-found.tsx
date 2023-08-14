import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@modules/Navigation";
import { AnimatedArrow } from "@modules/notfound/AnimatedArrow";
import { RotatingCharacter } from "@modules/notfound/RotatingCharacter";
import { FadeIn } from "@ui/FadeIn";

export const metadata: Metadata = {
  title: "Léo MERCIER — Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen border border-x-0 border-t-0 border-primary bg-black p-4 pb-24 text-primary lg:px-16 2xl:px-24">
      <section>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-xs">
              Léo MERCIER
            </Link>
            <p className="text-[0.625rem] font-light uppercase">
              Personal
              <br />
              portfolio (2024)
            </p>
          </div>

          <Navigation />
        </div>
      </section>

      <section className="my-16 sm:my-32">
        <div className="block lg:flex lg:flex-row lg:gap-28">
          <FadeIn as="p" startY={50} delay={1} className="2x:mt-16 mb-2 font-thin lg:mb-0 lg:mt-4 lg:text-2xl xl:mt-8">
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
            Found
          </FadeIn>
        </div>
        <FadeIn as="p" startY={0} className="mt-14 font-thin uppercase sm:mt-28 sm:text-2xl">
          Where are we? Who am I?
        </FadeIn>
        <FadeIn startY={0} delay={0.3} className="mt-4 flex flex-row items-center gap-3 sm:gap-6 sm:text-xl">
          <AnimatedArrow />
          <Link href="/">Back Home</Link>
        </FadeIn>
      </section>
    </main>
  );
}
