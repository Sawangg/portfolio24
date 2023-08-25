"use client";

import { motion } from "framer-motion";

export const AnimatedArrow: React.FC = () => {
  return (
    <motion.div
      initial={{ x: "-10%" }}
      animate={{ x: "40%" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "linear",
      }}
      className="relative w-6 md:w-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="text-primary">
        <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="currentColor" />
      </svg>
    </motion.div>
  );
};
