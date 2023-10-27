"use client";

import { motion } from "framer-motion";

export type StarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {};

export const Star: React.FC<StarProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className={className}>
      <motion.line
        animate={{ rotate: 30 }}
        transition={{ repeat: Infinity, repeatType: "mirror", type: "spring", stiffness: 100, damping: 10 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
      />
      <motion.line
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(60 50 50)"
      />
      <motion.line
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(90 50 50)"
      />
      <motion.line
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(120 50 50)"
      />
      <motion.line
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(150 50 50)"
      ></motion.line>
      <motion.line
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(180 50 50)"
      />
    </svg>
  );
};
