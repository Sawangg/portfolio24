import Image from "next/image";
import Link from "next/link";
import { AnimatedTextCharacter } from "@modules/landing/AnimatedTextCharacter";
import { Scene } from "@modules/landing/Scene";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";

export default function Home() {
  return (
    <main className="m-4 min-h-screen">
      <section className="min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs">Paris, France</p>
            <p className="text-[0.625rem] font-light uppercase">
              Personal
              <br />
              portfolio (2024)
            </p>
          </div>
        </div>

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

      {/* Projets */}
      <section className="flex flex-col" id="work">
        <div className="w-96 overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image src="https://placehold.co/400x600" alt="" fill />
          </AspectRatio>
        </div>
      </section>

      {/* Contact */}
      <section className="flex flex-col" id="contact">
        <Link href="/contact">Contact</Link>
        <p></p>
      </section>
    </main>
  );
}
