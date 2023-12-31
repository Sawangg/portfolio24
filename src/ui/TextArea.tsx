"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export type TextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  resetTrigger: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  delay?: number;
};

export const TextArea: React.FC<TextAreaProps> = ({ resetTrigger, placeholder, label, delay, className, ...props }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hasBeenFocusedOnce, setHasBeenFocusedOnce] = useState<boolean>(false);
  const [hasInputText, setHasInputText] = useState<boolean>(false);

  useEffect(() => {
    if (resetTrigger) {
      setIsFocused(false);
      setHasInputText(false);
    }
  }, [resetTrigger]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 0.5,
        delay: delay ?? 0,
      }}
      className="flex items-start gap-6 border border-x-0 border-t-0 border-b-black py-2"
    >
      {label && (
        <motion.label
          htmlFor={props.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: delay ?? 0,
          }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative flex w-full">
        <textarea
          id={props.id}
          onFocus={() => {
            setIsFocused(true);
            setHasBeenFocusedOnce(true);
          }}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => (e.target.value.length > 0 ? setHasInputText(true) : setHasInputText(false))}
          className={cn(`w-full resize-none bg-transparent outline-none ${className}`)}
          {...props}
        />
        {!hasInputText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 0 : 1, x: isFocused ? 30 : 0 }}
            transition={{
              duration: 0.2,
              delay: isFocused ? 0 : hasBeenFocusedOnce ? 0 : delay ?? 0,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className="pointer-events-none absolute left-0 top-0 uppercase text-black lg:text-lg "
          >
            {placeholder}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};
