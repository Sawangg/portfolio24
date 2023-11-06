"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDrag } from "@use-gesture/react";
import { motion, useAnimation } from "framer-motion";
import type { Dictionnary } from "@lib/getDictionnary";
import { cn } from "@lib/utils";
import { AspectRatio } from "@ui/AspectRatio";
import { FadeIn } from "@ui/FadeIn";
import { PageTransition } from "@ui/PageTransition";

export type CarouselItem = {
  imgSrc: string;
  backgroundColor: string;
  href: string;
};

export type CarouselProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  dictionnary: Dictionnary;
  carouselItems: CarouselItem[];
};

export const Carousel: React.FC<CarouselProps> = ({ dictionnary, carouselItems }: CarouselProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [swipeWidth, setSwipeWidth] = useState<number>(0);
  const [clickedCarouselItem, setClickedCarouselItem] = useState<CarouselItem | null>(null);
  const controls = useAnimation();

  const bind = useDrag(({ active, direction: [xDir], velocity: [xVel] }) => {
    if (active && Math.abs(xVel) * 1000 > 500 && window.innerWidth < 1024) {
      if (xDir > 0) void swipeLeft();
      else if (xDir < 0) void swipeRight();
    }
  });

  const variants = {
    start: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    end: {
      x: -swipeWidth * (currentPage - 1) + (16 - 1) * (currentPage - 1), // 16 is the body padding
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const swipeRight = async () => {
    await controls.start("end");
    setCurrentPage(Math.min(currentPage + 1, carouselItems.length));
  };

  const swipeLeft = async () => {
    await controls.start("start");
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  useEffect(() => {
    setSwipeWidth(window.innerWidth);
    window.addEventListener("resize", () => setSwipeWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setSwipeWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3 font-light">
        <motion.ol
          className="flex gap-4 lg:min-w-full lg:justify-around lg:gap-8"
          animate={controls}
          variants={variants}
        >
          {carouselItems.map((item, i) => (
            <li key={i} className="flex min-w-full touch-none flex-col gap-y-4 lg:min-w-[50%]" {...bind()}>
              <div
                className={cn("flex cursor-pointer items-center px-4 py-24 lg:px-10 lg:py-16", item.backgroundColor)}
                onClick={() => setClickedCarouselItem(item)}
                onKeyDown={() => setClickedCarouselItem(item)}
                role="button"
                tabIndex={-1}
                aria-label={dictionnary.Carousel.view}
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={item.imgSrc}
                    alt=""
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    aria-hidden
                    fill
                    priority={i === 0}
                  />
                </AspectRatio>
              </div>
              <FadeIn className="hidden w-full items-center justify-end gap-4 lg:flex">
                <figure className="w-4">
                  <AspectRatio ratio={42 / 11}>
                    <Image src="/assets/arrow-right.svg" sizes="16px" alt="" fill />
                  </AspectRatio>
                </figure>
                <button className="uppercase" onClick={() => setClickedCarouselItem(item)}>
                  {dictionnary.Carousel.view}
                </button>
              </FadeIn>
            </li>
          ))}
        </motion.ol>
        <div className="flex justify-between text-sm lg:hidden">
          <aside className="flex items-center gap-4">
            <p>
              {String(currentPage).padStart(2, "0")}/
              <span className="text-xs text-gray-600">{String(carouselItems.length).padStart(2, "0")}</span>
            </p>
            <figure className="w-4">
              <AspectRatio ratio={42 / 11}>
                <Image src="/assets/arrow-right.svg" sizes="16px" alt="" fill />
              </AspectRatio>
            </figure>
          </aside>
          <FadeIn
            as="button"
            className="uppercase"
            onClick={() => setClickedCarouselItem(carouselItems[currentPage - 1])}
          >
            {dictionnary.Carousel.view}
          </FadeIn>
        </div>
      </div>

      {clickedCarouselItem && (
        <PageTransition href={clickedCarouselItem.href} className={clickedCarouselItem.backgroundColor} />
      )}
    </>
  );
};
