"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, type MotionProps } from "framer-motion";
import { cn } from "@lib/utils";

export type FadeWithScrollProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  coefficient?: number;
};

export const FadeWithScroll: React.FC<FadeWithScrollProps> = ({ as = "div", coefficient = 1, children, className }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const MotionComponent = motion(as) as React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & MotionProps, HTMLElement>
  >;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const element = ref.current;
    if (!element) return;
    const opacity = 1 - (latest * coefficient) / window.innerHeight;
    element.style.opacity = opacity.toString();
  });

  return (
    <MotionComponent ref={ref} className={cn(className)}>
      {children}
    </MotionComponent>
  );
};
