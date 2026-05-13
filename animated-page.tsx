"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedPageProps = {
  children: ReactNode;
};

export function AnimatedPage({
  children,
}: AnimatedPageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}