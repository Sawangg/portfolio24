"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@lib/utils";

export type LanguageSwitcherProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  lang: string;
  disable?: boolean;
};

export const LanguageSwitcher = ({ lang, disable, className }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = () => {
    const newPathname = pathname.replace(/^\/\w+/, `/${lang.toLowerCase()}`);
    if (pathname !== newPathname) router.replace(newPathname);
  };

  return (
    <button className={cn(className)} onClick={handleSwitch} disabled={disable && pathname.split("/")[1] === lang}>
      {lang}
    </button>
  );
};
