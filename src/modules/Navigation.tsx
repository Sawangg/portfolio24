"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollLock } from "@lib/useScrollLock";
import { FadeIn } from "@ui/FadeIn";

export function Navigation() {
  const [open, setOpen] = useState<boolean>(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const openClosedVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleOpen = () => {
    if (open) {
      unlockScroll();
    } else {
      lockScroll();
    }
    setOpen(!open);
  };

  return (
    <>
      <nav className="hidden md:flex"></nav>
      <div className="max-h-min md:hidden">
        <button className="relative z-50" onClick={() => handleOpen()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <motion.path
              fill="#000000"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              fill="#000000"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>

        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={openClosedVariants}
          className="absolute left-0 top-0 z-40 grid min-h-screen w-full grid-cols-2 grid-rows-[auto_1fr_auto_auto] gap-x-4 gap-y-7 bg-black p-4 pb-8 text-primary"
        >
          <figure className="text-xl uppercase">Léo Mercier</figure>

          <ul className="col-span-2 flex flex-col self-center text-2xl font-thin uppercase">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative py-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary"
            >
              <Link href="/" className="block w-full" title="About">
                About
              </Link>
            </motion.li>
            <li className="relative py-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary">
              <Link href="/" className="block w-full" title="Work">
                Work
              </Link>
            </li>
            <li className="relative py-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary">
              <Link href="/blog" className="block w-full" title="Blog">
                Blog
              </Link>
            </li>
            <li className="py-4">
              <Link href="/contact" className="block w-full" title="Contact">
                Contact
              </Link>
            </li>
          </ul>

          <aside className="flex flex-col">
            <p className="mb-2 grow font-thin">Created with ❤️ in Tours</p>
            <p className="mb-2 font-thin">leo.mercier@efrei.net</p>
            <p className="font-thin">+33 7 68 89 79 69</p>
          </aside>
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

          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: open ? "100%" : 0 }}
            transition={{ duration: 0.5, delay: 0.3, repeatType: "reverse" }}
            className="col-span-2"
          />

          <ul className="col-span-2 flex justify-between">
            <li>FR</li>
            <li>EN</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
