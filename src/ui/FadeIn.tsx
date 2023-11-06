"use client";

import { useRef } from "react";
import { motion, useInView, type MotionProps } from "framer-motion";
import { cn } from "@lib/utils";

export type FadeInProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  repeat?: boolean;
  startY?: number;
  duration?: number;
  delay?: number;
  trigger?: boolean;
  children: React.ReactNode;
};

export const FadeIn: React.FC<FadeInProps> = ({
  as = "div",
  repeat,
  startY = 0,
  duration = 0.3,
  delay = 0,
  trigger = true,
  children,
  className,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: !repeat });

  // @ts-expect-error: should be motion(as) but not working in the navigation for some reason
  const MotionComponent = motion[as] as React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & MotionProps, HTMLElement>
  >;

  return (
    <MotionComponent
      ref={ref}
      initial={{ y: startY, opacity: 0 }}
      animate={isInView && trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: startY }}
      transition={{ duration, delay, type: "spring", damping: 7, stiffness: 20 }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
};
