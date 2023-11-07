"use client";

import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export type StarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Star: React.FC<StarProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className={cn(className)}>
      <motion.line
        animate={{ rotate: 30 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      />
      <motion.line
        animate={{ rotate: 60 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      />
      <motion.line
        animate={{ rotate: 90 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      />
      <motion.line
        animate={{ rotate: 120 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      />
      <motion.line
        animate={{ rotate: 150 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      ></motion.line>
      <motion.line
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        stroke="currentColor"
      />
    </svg>
  );
};
