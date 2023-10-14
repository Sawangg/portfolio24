"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export type PageTransitionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  href: string;
};

export const PageTransition: React.FC<PageTransitionProps> = ({ href, className }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => router.push(href)}
      className={cn("fixed inset-0 z-50", className)}
    ></motion.div>
  );
};
