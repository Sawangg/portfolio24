"use client";

import { useEffect, useRef, useState } from "react";
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
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  const mobileNavigationVariants = {
    open: {
      y: 0,
      borderRadius: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        borderBottomLeftRadius: { duration: 1 },
        borderBottomRightRadius: { duration: 1 },
      },
    },
    closed: {
      y: "-100%",
      borderRadius: "0px 0px 250px 250px / 0px 0px 25px 25px",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.35,
      },
    },
  };

  const toggleOpen = () => {
    if (!open) {
      if (mobileContainerRef.current) mobileContainerRef.current.style.display = "grid";
      lockScroll();
    } else {
      unlockScroll();
    }
    setOpen(!open);
  };

  const pathname = usePathname();

  const setMobileContainerSize = () => {
    if (mobileContainerRef.current) {
      const newHeight = `calc(${window.innerHeight}px - ${
        window.visualViewport ? window.visualViewport.height - window.innerHeight : 0
      }px)`;
      mobileContainerRef.current.style.minHeight = newHeight;
      mobileContainerRef.current.style.maxHeight = newHeight;
      mobileContainerRef.current.style.minWidth = `${window.innerWidth}px`;
    }
  };

  useEffect(() => {
    unlockScroll();
    setMobileContainerSize();
    window.addEventListener("resize", setMobileContainerSize);
    return () => window.removeEventListener("resize", setMobileContainerSize);
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
      <button className="relative z-40 self-start outline-none md:hidden" aria-label="Navigation" onClick={toggleOpen}>
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
        ref={mobileContainerRef}
        initial={"closed"}
        animate={open ? "open" : "closed"}
        variants={mobileNavigationVariants}
        onAnimationComplete={(def) => !open && def === "closed" && (mobileContainerRef.current!.style.display = "none")}
        className="absolute left-0 top-0 z-30 hidden grid-cols-2 grid-rows-[auto_1fr_auto_auto] gap-x-4 gap-y-7 bg-black px-4 pb-8 pt-4 text-primary"
      >
        <Link href="/" className="max-w-max text-xl uppercase">
          Léo Mercier
        </Link>

        <motion.ul
          initial={"closed"}
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
              <FadeIn trigger={open} startY={20}>
                <Link href={item.href} className="block w-full outline-none" title={item.name}>
                  {item.name}
                </Link>
              </FadeIn>
            </motion.li>
          ))}
        </motion.ul>

        <FadeIn as="aside" trigger={open} startY={30} className="flex flex-col">
          <p className="grow pb-2 font-thin">{dictionnary.Navigation.random}</p>
          <p className="pb-2 font-thin">{email}</p>
          <p className="font-thin">{phone}</p>
        </FadeIn>
        <FadeIn
          as="ul"
          trigger={open}
          startY={30}
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

        <ul className="col-span-2 flex justify-between">
          <FadeIn as="li" trigger={open} startY={30} duration={0.1}>
            <LanguageSwitcher lang="fr" className="uppercase disabled:text-zinc-800" disable />
          </FadeIn>
          <FadeIn as="li" trigger={open} startY={30} duration={0.1}>
            <LanguageSwitcher lang="en" className="uppercase disabled:text-zinc-800" disable />
          </FadeIn>
        </ul>
      </motion.div>
    </>
  );
};
