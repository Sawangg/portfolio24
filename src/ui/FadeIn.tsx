"use client";

import { useRef, type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";

type MotionComponentProps = {
  as?: keyof JSX.IntrinsicElements;
} & HTMLMotionProps<"div">;

export type FadeInProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  repeat?: boolean;
  startY?: number;
  duration?: number;
  delay?: number;
  children: ReactNode;
} & MotionComponentProps;

export const FadeIn = ({ as = "div", repeat, startY, duration, delay, children, className, ...rest }: FadeInProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: !repeat ?? true });

  // @ts-expect-error: property center could not be found
  const MotionComponent = motion[as] as React.ComponentType<MotionComponentProps>;

  return (
    <MotionComponent
      ref={ref}
      initial={{ y: startY ?? 10, opacity: 0 }}
      animate={{
        y: isInView ? 0 : startY ?? 10,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ duration: duration ?? 0.3, delay: delay ?? 0, type: "spring", damping: 7, stiffness: 20 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
