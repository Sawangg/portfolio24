import type { Viewport } from "next";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function Blog({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <body className="min-w-screen overflow-x-hidden bg-black">
      <Header dictionnary={dictionnary} navIconColor="hsl(0, 0%, 100%)" className="bg-black text-primary" />
      <main className="flex min-h-screen items-center justify-center bg-black p-4 text-primary">
        <h1 className="text-2xl 2xl:text-6xl">Coming soon</h1>
        {/* TODO: Display content */}
      </main>
      <Footer dictionnary={dictionnary} />
    </body>
  );
}
