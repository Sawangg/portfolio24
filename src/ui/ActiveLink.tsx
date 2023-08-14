"use client";

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

export const ActiveLink = ({ href, children, className }: ActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ borderWidth: 0 }}
      animate={{ borderWidth: "100%" }}
      whileHover="hover"
      transition={{
        duration: 0.5,
        delay: 0,
      }}
      className="border border-x-0 border-t-0"
    >
      <Link href={href} className={cn(pathname === href ? `border border-x-0 border-t-0 ${className}` : "")}>
        {children}
      </Link>
    </motion.div>
  );
};
