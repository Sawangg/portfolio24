import Link from "next/link";
import type { Dictionnary } from "@lib/getDictionnary";
import { cn } from "@lib/utils";
import { Navigation } from "@modules/Navigation";

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  dictionnary: Dictionnary;
  navIconColor?: string;
};

export const Header: React.FC<HeaderProps> = ({ dictionnary, navIconColor, className }) => {
  return (
    <header
      className={cn(
        "flex justify-between bg-primary px-4 pt-4 md:gap-x-8 lg:gap-x-20 lg:px-16 2xl:gap-x-24 2xl:px-24",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <Link href="/" className="max-w-max whitespace-nowrap text-xs">
          Léo MERCIER
        </Link>
        <p className="text-xxs font-light uppercase">
          Personal
          <br />
          portfolio (2024)
        </p>
      </div>
      <Navigation iconColor={navIconColor} dictionnary={dictionnary} />
    </header>
  );
};
