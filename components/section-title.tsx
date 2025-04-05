"use client";

import type React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      className={`mx-auto flex max-w-[58rem] flex-col items-start justify-center gap-1 md:gap-1 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl">
        {children}
      </h2>
      <div className="h-1 w-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </motion.div>
  );
}
