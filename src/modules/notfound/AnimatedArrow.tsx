"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AspectRatio } from "@ui/AspectRatio";

export function AnimatedArrow() {
  return (
    <motion.div
      initial={{ x: "-10%" }}
      animate={{ x: "40%" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "linear",
      }}
      className="relative h-6 w-6 md:h-10 md:w-10"
    >
      <AspectRatio ratio={1 / 1}>
        <Image src="/assets/arrow.svg" alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
      </AspectRatio>
    </motion.div>
  );
}
