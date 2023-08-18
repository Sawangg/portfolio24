import Link from "next/link";
import { navItems, phone, socials } from "@lib/constants";
import { ActiveLink } from "@ui/ActiveLink";
import { FadeIn } from "@ui/FadeIn";
import { MailTo } from "./contact/MailTo";

export default function Footer() {
  const randomSentences = [
    "Created with ❤️ in Tours",
    "Working remotely 💫 since the new normal",
    "Is it sunny ☀️ outside?",
  ];
  const randomIndex = Math.floor(Math.random() * randomSentences.length);

  return (
    <footer className="grid grid-cols-2 grid-rows-3 overflow-hidden bg-black px-4 py-10 text-primary md:grid-cols-8 md:grid-rows-2 md:gap-y-32 md:pb-14 lg:px-16 2xl:px-24">
      <FadeIn as="ol" className="col-span-8 hidden uppercase md:grid">
        <li className="col-start-1 3xl:text-lg">
          <ActiveLink href={navItems[0].href}>{navItems[0].name}</ActiveLink>
        </li>
        <li className="col-start-3 3xl:text-lg">
          <ActiveLink href={navItems[1].href}>{navItems[1].name}</ActiveLink>
        </li>
        <li className="col-start-6 3xl:text-lg">
          <ActiveLink href={navItems[2].href}>{navItems[2].name}</ActiveLink>
        </li>
        <li className="col-start-8 justify-self-end 3xl:text-lg">
          <ActiveLink href={navItems[3].href}>{navItems[3].name}</ActiveLink>
        </li>
      </FadeIn>

      <FadeIn
        as="ul"
        delay={0.2}
        className="col-span-2 flex flex-row justify-between uppercase md:col-span-1 md:col-start-5 md:row-start-2 md:grid md:justify-self-center 3xl:col-start-6"
      >
        <li>
          <Link href="/fr">FR</Link>
        </li>
        <li className="justify-self-end md:self-end">
          <Link href="/en">EN</Link>
        </li>
      </FadeIn>

      <FadeIn
        delay={0.2}
        className="col-span-2 mb-12 text-5xl font-light md:col-span-4 md:col-start-1 md:row-start-2 md:mb-0 md:self-center md:text-6xl md:uppercase 2xl:text-8xl min-[1730px]:text-9xl 3xl:col-span-5 min-[2070px]:text-[190px]"
        startY={0}
      >
        <Link href="/" className="outline-none">
          Léo Mercier
        </Link>
      </FadeIn>

      <aside className="flex flex-col gap-4 self-end text-sm md:col-span-2 md:col-start-6 md:row-start-2 md:self-start 3xl:col-span-1">
        <FadeIn as="p" delay={0.2}>
          {randomSentences[randomIndex]}
        </FadeIn>

        <FadeIn delay={0.2} className="font-light">
          <MailTo />
          <p>{phone}</p>
        </FadeIn>
      </aside>

      <FadeIn
        as="ul"
        delay={0.2}
        className="flex flex-col items-end gap-2 self-center justify-self-end text-sm md:col-start-8 md:row-start-2"
      >
        {socials.map((item, i) => (
          <li key={i} className="uppercase">
            <Link rel="noopener noreferrer" target="_blank" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </FadeIn>
    </footer>
  );
}
