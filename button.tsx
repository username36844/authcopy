"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type ButtonProps = HTMLMotionProps<"button"> & {
  loading?: boolean;
};

export function Button({
  children,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-[15px] font-medium text-white transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-100",
        className
      )}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </motion.button>
  );
}