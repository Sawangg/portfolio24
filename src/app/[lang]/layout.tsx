import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@modules/Footer";

const poppins = Poppins({ weight: ["300", "500"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Léo MERCIER — 2024",
  description: "Léo MERCIER's 2024 portfolio",
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} className="overflow-x-hidden">
      <body className={`overflow-x-hidden bg-primary text-[color:var(--text)] ${poppins.className}`}>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
