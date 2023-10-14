import type { Metadata } from "next";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";
import { BackToTop } from "@modules/landing/BackToTop";
import { Carousel, type CarouselItem } from "@modules/landing/Carousel";
import { LandingScene } from "@modules/landing/LandingScene";

// import { FadeIn } from "@ui/FadeIn";

export const metadata: Metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default async function Home({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  const carouselItems: CarouselItem[] = [
    {
      imgSrc: "/assets/studiounivers.webp",
      backgroundColor: "bg-slate-200",
      href: "/work/studiounivers",
    },
    {
      imgSrc:
        "https://mill3.studio/wp-content/uploads/2023/07/MOOSEHEAD_CASE_STUDY_DESKTOP_1920X1200_HOME-1024x639.jpg",
      backgroundColor: "bg-[#142a1f]",
      href: "/work/sg",
    },
  ];

  return (
    <>
      <Header dictionnary={dictionnary} />

      <main className="min-h-screen bg-primary p-4 pb-24 md:pb-24 md:pt-8 lg:px-16 2xl:px-24" role="main">
        <section className="min-h-screen">
          <Carousel carouselItems={carouselItems} dictionnary={dictionnary} />
          {/* <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mb-2 text-xl tracking-wide 2xl:mb-4 2xl:text-2xl">Léo Mercier</p>
            <h1 className="text-center text-6xl font-bold uppercase 2xl:text-9xl">
              Crafting
              <br />
              Excellence since
              <br />
              2012
            </h1>
          </div> */}

          <LandingScene />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(30 50 50)"
            ></line>
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(60 50 50)"
            ></line>
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(90 50 50)"
            ></line>
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(120 50 50)"
            ></line>
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(150 50 50)"
            ></line>
            <line
              y1="50"
              x2="100"
              y2="50"
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
              transform="rotate(180 50 50)"
            ></line>
          </svg>
        </section>

        {/* About */}
        {/* <section className="flex flex-col gap-6">
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
        </section> */}

        <section>
          <Link href="/contact" className="text-xl uppercase">
            Contact
          </Link>
        </section>

        <BackToTop />
      </main>

      <Footer dictionnary={dictionnary} />
    </>
  );
}
