"use client";

import { motion } from "framer-motion";

export type StarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Star: React.FC<StarProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className={className}>
      <motion.line
        animate={{ rotate: 30 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
      />
      <motion.line
        animate={{ rotate: 60 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(60 50 50)"
      />
      <motion.line
        animate={{ rotate: 90 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(90 50 50)"
      />
      <motion.line
        animate={{ rotate: 120 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(120 50 50)"
      />
      <motion.line
        animate={{ rotate: 150 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
        y1="50"
        x2="100"
        y2="50"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        transform="rotate(150 50 50)"
      ></motion.line>
      <motion.line
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 2, duration: 1 }}
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
