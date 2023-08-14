import Link from "next/link";
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
      <FadeIn as="ul" className="col-[1/span_8] hidden uppercase md:grid">
        <li className="col-[1/span_2] 3xl:text-lg">
          <ActiveLink href="/work">Work</ActiveLink>
        </li>
        <li className="col-[3/span_2] 3xl:text-lg">
          <ActiveLink href="/contact">Contact</ActiveLink>
        </li>
        <li className="col-[6/span_1] 3xl:text-lg">
          <ActiveLink href="/">About</ActiveLink>
        </li>
        <li className="col-[7/span_2] justify-self-end 3xl:text-lg">
          <ActiveLink href="/blog">Blog</ActiveLink>
        </li>
      </FadeIn>

      <FadeIn
        delay={0.2}
        className="self-start justify-self-start md:col-start-5 md:row-start-2 md:justify-self-center 3xl:col-start-6"
      >
        <Link href="/fr" className="uppercase">
          FR
        </Link>
      </FadeIn>
      <FadeIn
        delay={0.2}
        className="self-start justify-self-end md:col-start-5 md:row-start-2 md:self-end md:justify-self-center 3xl:col-start-6"
      >
        <Link href="/en" className="uppercase">
          EN
        </Link>
      </FadeIn>

      <div className="col-span-2 mb-12 md:col-span-4 md:col-start-1 md:row-start-2 md:mb-0 md:self-center 3xl:col-span-5">
        <FadeIn
          delay={0.2}
          className="text-5xl font-light md:text-6xl md:uppercase 2xl:text-8xl min-[1730px]:text-9xl min-[2070px]:text-[190px]"
          startY={0}
        >
          <Link href="/">Léo Mercier</Link>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4 self-end text-sm md:col-span-2 md:col-start-6 md:row-start-2 md:self-start 3xl:col-span-1">
        <FadeIn as="p" delay={0.2}>
          {randomSentences[randomIndex]}
        </FadeIn>

        <FadeIn delay={0.2} className="font-light">
          <MailTo />
          <p>+33768897969</p>
        </FadeIn>
      </div>

      <FadeIn
        as="ul"
        delay={0.2}
        className="flex flex-col items-end gap-2 self-center justify-self-end text-sm md:col-start-8 md:row-start-2"
      >
        <li>
          <Link
            className="uppercase"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/leomercier/"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className="uppercase" rel="noopener noreferrer" target="_blank" href="https://github.com/Sawangg">
            Github
          </Link>
        </li>
      </FadeIn>
    </footer>
  );
}
