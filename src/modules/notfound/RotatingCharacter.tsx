"use client";

import { motion } from "framer-motion";

export function RotatingCharacter({ char }: { char: string }) {
  return (
    <motion.span
      initial={{ rotate: 0, x: 0 }}
      animate={{ rotate: 100, x: 30 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  );
}
