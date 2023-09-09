"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useScrollLock } from "@hooks/useScrollLock";
import { email, phone, socials } from "@lib/constants";
import type { Dictionnary } from "@lib/getDictionnary";
import { cn } from "@lib/utils";
import { ActiveLink } from "@ui/ActiveLink";
import { FadeIn } from "@ui/FadeIn";
import { LanguageSwitcher } from "@ui/LanguageSwitcher";

export type NavigationProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  dictionnary: Dictionnary;
  iconColor?: string;
  borderColor?: string;
};

export const Navigation: React.FC<NavigationProps> = ({ dictionnary, iconColor, borderColor }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const mainVariants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const toggleOpen = () => {
    if (open) unlockScroll();
    else lockScroll();
    setOpen(!open);
  };

  // Unlock scroll on page change
  const pathname = usePathname();
  useEffect(() => {
    unlockScroll();
  }, [pathname, unlockScroll]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden w-full md:block">
        <ol className="grid grid-cols-7 text-lg font-thin uppercase">
          {dictionnary.Navigation.items.map((item, i) => (
            <motion.li
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              key={i}
              className={cn(
                i === 1 ? "col-start-3" : i === 2 ? "col-start-5" : i === 3 && "col-start-7 justify-self-end",
              )}
              transition={{ delay: i * 0.2 }}
            >
              <ActiveLink href={item.href} title={item.name} className={cn(borderColor ?? "border-black")}>
                {item.name}
              </ActiveLink>
            </motion.li>
          ))}
        </ol>
      </nav>

      {/* Mobile navigation */}
      <button className="relative z-50 self-start outline-none md:hidden" aria-label="Navigation" onClick={toggleOpen}>
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <motion.path
            initial="closed"
            animate={open ? "open" : "closed"}
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 7 L 22 7", stroke: iconColor ?? "hsl(0, 0%, 0%)" },
              open: { d: "M 5 19 L 19 5", stroke: "hsl(0, 0%, 100%)" },
            }}
            transition={{ stroke: { delay: open ? 0 : 1 } }}
          />
          <motion.path
            initial="closed"
            animate={open ? "open" : "closed"}
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 14 L 22 14", stroke: iconColor ?? "hsl(0, 0%, 0%)" },
              open: { d: "M 5 5 L 19 19", stroke: "hsl(0, 0%, 100%)" },
            }}
            transition={{ stroke: { delay: open ? 0 : 1 } }}
          />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={mainVariants}
        className="absolute left-0 top-0 z-40 grid min-h-screen w-full grid-cols-2 grid-rows-[auto_1fr_auto_auto] gap-x-4 gap-y-7 bg-black px-4 pb-8 pt-6 text-primary md:hidden"
      >
        <figure className="text-xl uppercase">Léo Mercier</figure>

        <motion.ul
          initial={false}
          animate={open ? "open" : "closed"}
          className="col-span-2 flex flex-col self-center text-2xl font-thin uppercase"
        >
          {dictionnary.Navigation.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ width: 0 }}
              animate={{ width: open ? "100%" : 0 }}
              transition={{ duration: 0.5, delay: open ? i * 0.2 : 0.3 - i * 0.1 }}
              className={cn("py-4", i !== dictionnary.Navigation.items.length - 1 && "border-x-0 border-b-[1px]")}
            >
              <FadeIn trigger={open}>
                <Link href={item.href} className="block w-full outline-none" title={item.name}>
                  {item.name}
                </Link>
              </FadeIn>
            </motion.li>
          ))}
        </motion.ul>

        <FadeIn as="aside" trigger={open} className="flex flex-col">
          <p className="mb-2 grow font-thin">{dictionnary.Navigation.random}</p>
          <p className="mb-2 font-thin">{email}</p>
          <p className="font-thin">{phone}</p>
        </FadeIn>
        <FadeIn
          as="ul"
          trigger={open}
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

        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: open ? "100%" : 0 }}
          transition={{ duration: 0.5, delay: open ? 0.3 : 0, repeatType: "reverse" }}
          className="col-span-2"
        />

        <FadeIn as="ul" trigger={open} duration={0.1} className="col-span-2 flex justify-between">
          <li>
            <LanguageSwitcher lang="fr" className="uppercase disabled:text-zinc-800" disable />
          </li>
          <li>
            <LanguageSwitcher lang="en" className="uppercase disabled:text-zinc-800" disable />
          </li>
        </FadeIn>
      </motion.div>
    </>
  );
};
