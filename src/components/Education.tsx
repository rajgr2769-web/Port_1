"use client";

import Section from "./Section";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Calendar, Star } from "lucide-react";

const educationData = [
  {
    degree: "10th Standard",
    institution: "Secondary Education",
    period: "2019",
    grade: "87.20%",
    highlights: []
  },
  {
    degree: "12th Standard",
    institution: "Higher Secondary Education",
    period: "2021",
    grade: "84.50%",
    highlights: []
  },
  {
    degree: "M.Tech Integrated – Computer Science & Engineering",
    institution: "VIT Vellore",
    period: "Expected May 2026",
    grade: "CGPA: 8.21",
    highlights: ["DBMS", "Machine Learning", "Wireless Networks", "Big Data", "Software Engineering"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative space-y-8 md:space-y-12">
        {/* Journey Line */}
        <motion.div 
          className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 origin-top"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 md:pl-10 pb-8 md:pb-12 last:pb-0"
              variants={itemVariants}
            >
              {/* Journey Point */}
              <motion.div 
                className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-black z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              />

              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center self-start">
                  <GraduationCap className="text-blue-600 dark:text-blue-500" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm md:text-base">
                      <Calendar size={18} /> {item.period}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold mb-4">
                    <Star size={18} /> {item.grade}
                  </div>
                  {item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <motion.span 
                          key={hIndex} 
                          className="px-3 py-1 bg-white dark:bg-zinc-800 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + hIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
