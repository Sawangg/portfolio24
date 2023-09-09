"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export type ActiveLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
};

export const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-fit cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>{children}</Link>
      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: pathname === href || isHovered ? "100%" : 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn("mt-4", className)}
      />
    </div>
  );
};
