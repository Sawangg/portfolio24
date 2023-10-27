import type { Metadata } from "next";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";
import { BackToTop } from "@modules/landing/BackToTop";
import { Carousel, type CarouselItem } from "@modules/landing/Carousel";
import { Star } from "@ui/Star";

// import { LandingScene } from "@modules/landing/LandingScene";
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

          {/* <LandingScene /> */}

          <h1 className="flex flex-row items-center text-9xl font-thin uppercase">
            Lé
            <span className="w-24">
              <Star />
            </span>
          </h1>
          <p className="font-thin uppercase">
            Senior software engineer based in Paris — Master&apos;s degree in computer science
          </p>
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
