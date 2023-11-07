"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@ui/AspectRatio";

export const AnimatedArrow: React.FC = () => {
  return (
    <motion.div
      initial={{ x: "-10%" }}
      animate={{ x: "20%" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "linear",
      }}
      className="relative w-6 md:w-10"
    >
      <AspectRatio ratio={42 / 11}>
        <svg viewBox="0 0 84 22" fill="none">
          <path d="M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5" stroke="currentColor"></path>
        </svg>
      </AspectRatio>
    </motion.div>
  );
};
