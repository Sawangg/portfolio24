import Link from "next/link";
import { phone, socials } from "@lib/constants";
import { getDictionnary, type Locale } from "@lib/getDictionnary";
import { MailTo } from "@modules/contact/MailTo";
import { ActiveLink } from "@ui/ActiveLink";
import { FadeIn } from "@ui/FadeIn";
import { LanguageSwitcher } from "@ui/LanguageSwitcher";

export type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  lang: string;
};

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const dictionnary = await getDictionnary(lang as Locale);
  const randomIndex = Math.floor(Math.random() * dictionnary.Footer.random.length);

  return (
    <footer className="grid grid-cols-2 grid-rows-3 overflow-hidden bg-black px-4 py-10 text-primary md:grid-cols-8 md:grid-rows-2 md:gap-y-32 md:pb-14 lg:px-16 2xl:px-24">
      <FadeIn as="ol" className="col-span-8 hidden uppercase md:grid">
        <li className="col-start-1 3xl:text-lg">
          <ActiveLink href={dictionnary.Navigation.items[0].href}>{dictionnary.Navigation.items[0].name}</ActiveLink>
        </li>
        <li className="col-start-3 3xl:text-lg">
          <ActiveLink href={dictionnary.Navigation.items[1].href}>{dictionnary.Navigation.items[1].name}</ActiveLink>
        </li>
        <li className="col-start-6 3xl:text-lg">
          <ActiveLink href={dictionnary.Navigation.items[2].href}>{dictionnary.Navigation.items[2].name}</ActiveLink>
        </li>
        <li className="col-start-8 justify-self-end 3xl:text-lg">
          <ActiveLink href={dictionnary.Navigation.items[3].href}>{dictionnary.Navigation.items[3].name}</ActiveLink>
        </li>
      </FadeIn>

      <FadeIn
        as="ul"
        delay={0.2}
        className="col-span-2 flex flex-row justify-between md:col-span-1 md:col-start-5 md:row-start-2 md:grid md:justify-self-center 3xl:col-start-6"
      >
        <li>
          <LanguageSwitcher lang="fr" className="uppercase" />
        </li>
        <li className="justify-self-end md:self-end">
          <LanguageSwitcher lang="en" className="uppercase" />
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
          {dictionnary.Footer.random[randomIndex]}
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
};
