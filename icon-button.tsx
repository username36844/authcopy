"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type IconButtonProps = HTMLMotionProps<"button">;

export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className={clsx(
        "inline-flex size-9 items-center justify-center rounded-full text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-100",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}