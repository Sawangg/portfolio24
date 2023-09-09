import Link from "next/link";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Navigation } from "@modules/Navigation";
import { FadeIn } from "@ui/FadeIn";

export default async function Blog({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <>
      <header className="flex flex-row items-center justify-between bg-black px-4 pt-6 text-primary md:items-start lg:px-16 2xl:px-24">
        <FadeIn startY={0} delay={0.5} className="mr-8 flex flex-col justify-start gap-2 lg:mr-20 2xl:mr-24">
          <Link href="/" className="whitespace-nowrap text-xs">
            Léo MERCIER
          </Link>
        </FadeIn>
        <Navigation dictionnary={dictionnary} iconColor="hsl(0, 0%, 100%)" />
      </header>
      <main className="flex min-h-screen items-center justify-center bg-black p-4 text-primary">
        <h1 className="text-2xl 2xl:text-6xl">Coming soon</h1>
        {/* TODO: Display content */}
      </main>
    </>
  );
}
