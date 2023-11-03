import type { Viewport } from "next";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";

export const viewport: Viewport = {
  themeColor: "rgb(226 232 240)",
};

export default async function WorkStudioUnivers({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <body className="min-w-screen overflow-x-hidden bg-slate-200">
      <Header dictionnary={dictionnary} className="bg-slate-200" />
      <main className="min-h-screen bg-slate-200 p-4 pb-24 md:pb-24 md:pt-8 lg:px-16 2xl:px-24" role="main"></main>
      <Footer dictionnary={dictionnary} />
    </body>
  );
}
