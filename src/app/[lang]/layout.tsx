import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["300", "500"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Léo MERCIER — 2024",
  description: "Léo MERCIER's 2024 portfolio",
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} className="overflow-x-hidden scroll-smooth">
      <body className={`min-w-screen overflow-x-hidden text-[color:var(--text)] ${poppins.className}`}>{children}</body>
    </html>
  );
}
