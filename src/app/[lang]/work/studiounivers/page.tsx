import type { Metadata } from "next";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";

export const metadata: Metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default async function WorkStudioUnivers({ params }: { params: { lang: string } }) {
  const dictionnary = await getDictionnary(params.lang as Locale);

  return (
    <>
      <Header dictionnary={dictionnary} className="bg-slate-200" />

      <main className="min-h-screen bg-slate-200 p-4 pb-24 md:pb-24 md:pt-8 lg:px-16 2xl:px-24" role="main"></main>

      <Footer dictionnary={dictionnary} />
    </>
  );
}
