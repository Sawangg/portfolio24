import type { Dictionnary } from "@lib/getDictionnary";
import { Navigation } from "@modules/Navigation";

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  dictionnary: Dictionnary;
};

export const Header: React.FC<HeaderProps> = ({ dictionnary }) => {
  return (
    <header className="flex flex-row justify-between bg-primary px-4 pt-6 lg:px-16 2xl:px-24">
      <div className="flex flex-col gap-2 md:mr-8 lg:mr-20 2xl:mr-24">
        <p className="whitespace-nowrap text-xs">Léo MERCIER</p>
        <p className="text-xxs font-light uppercase">
          Personal
          <br />
          portfolio (2024)
        </p>
      </div>
      <Navigation dictionnary={dictionnary} />
    </header>
  );
};
