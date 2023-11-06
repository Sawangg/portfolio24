import type { Viewport } from "next";
import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";
import { BackToTop } from "@modules/landing/BackToTop";
import { Carousel, type CarouselItem } from "@modules/landing/Carousel";
import { FadeIn } from "@ui/FadeIn";
import { FadeWithScroll } from "@ui/FadeWithScroll";
import { Star } from "@ui/Star";

export const viewport: Viewport = {
  themeColor: "var(--primary)",
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
    <body className="min-w-screen overflow-x-hidden bg-primary">
      <Header dictionnary={dictionnary} />
      <main className="bg-primary p-4 pb-24 md:pb-24 md:pt-8 lg:px-16 2xl:px-24">
        <section className="flex h-[90vh] grow flex-col justify-between pb-2">
          <Carousel carouselItems={carouselItems} dictionnary={dictionnary} />
          <div className="flex flex-col gap-y-4 md:flex-row">
            <h1 className="flex items-center text-10xl font-thin uppercase">
              Lé
              <Star className="w-32" />
            </h1>
            <FadeIn as="aside">
              <FadeWithScroll as="p" className="font-thin uppercase">
                Senior software engineer based in Paris — &emsp;&emsp;Master&apos;s degree in computer science
              </FadeWithScroll>
            </FadeIn>
          </div>
        </section>

        <section>
          <Link href="/contact" className="text-xl uppercase">
            Contact
          </Link>
        </section>

        <BackToTop />
      </main>
      <Footer dictionnary={dictionnary} />
    </body>
  );
}
