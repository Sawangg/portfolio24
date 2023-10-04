"use client";

import { motion } from "framer-motion";

export type RotatingCharacterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  char: string;
};

export const RotatingCharacter: React.FC<RotatingCharacterProps> = ({ char }) => {
  return (
    <motion.span
      initial={{ rotate: 0, x: 0 }}
      animate={{ rotate: 100, x: 30 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block"
    >
      {char}
    </motion.span>
  );
};
