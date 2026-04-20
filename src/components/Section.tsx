"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export default function Section({ children, id, className = "", title }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 perspective-1000 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white border-b-2 border-zinc-200 dark:border-zinc-800 pb-2 inline-block">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}
