"use client";

import { useRef } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";

type MotionComponentProps = {
  as?: keyof JSX.IntrinsicElements;
} & HTMLMotionProps<"div">;

export type FadeInProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  repeat?: boolean;
  startY?: number;
  duration?: number;
  delay?: number;
  trigger?: boolean;
  children: React.ReactNode;
} & MotionComponentProps;

export const FadeIn: React.FC<FadeInProps> = ({
  as = "div",
  repeat,
  startY,
  duration,
  delay,
  trigger,
  children,
  className,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: !repeat });

  // @ts-expect-error: "as" is not a valid prop for motion[as]
  const MotionComponent = motion[as] as React.FC<MotionComponentProps>;

  return (
    <MotionComponent
      ref={ref}
      initial={{ y: startY ?? 10, opacity: 0 }}
      animate={{
        y: isInView && (trigger ?? true) ? 0 : startY ?? 10,
        opacity: isInView && (trigger ?? true) ? 1 : 0,
      }}
      transition={{ duration: duration ?? 0.3, delay: delay ?? 0, type: "spring", damping: 7, stiffness: 20 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
