"use client";

import Section from "./Section";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <Section id="about" title="Professional Summary">
      <motion.div 
        className="max-w-4xl space-y-4 md:space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p 
          className="text-base md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium"
          variants={itemVariants}
        >
          AI/ML Engineer with a strong foundation in cloud technologies and enterprise systems, driven by a passion for solving real-world business problems through intelligent, data-driven solutions.
        </motion.p>
        
        <motion.p 
          className="text-base md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300"
          variants={itemVariants}
        >
          With certifications as an <span className="text-blue-600 dark:text-blue-400 font-bold">AWS Certified Cloud Practitioner</span> and an <span className="text-blue-600 dark:text-blue-400 font-bold">Oracle Certified Cloud Practitioner</span>, I bring expertise in leveraging cloud platforms to deploy scalable and secure machine learning models across business environments.
        </motion.p>

        <motion.p 
          className="text-base md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300"
          variants={itemVariants}
        >
          My professional experience spans across <span className="font-bold">ERP (Enterprise Resource Planning)</span> and <span className="font-bold">HCM (Human Capital Management)</span> systems, helping organizations optimize operations and accelerate digital transformation initiatives.
        </motion.p>

        <motion.div className="py-4 md:py-6" variants={itemVariants}>
          <h3 className="text-lg md:text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">Core Competencies:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-semibold">
            {[
              "AI/ML Model Development & Deployment",
              "Cloud Computing (AWS & Oracle)",
              "Data Analytics & Visualization",
              "ERP & HCM Implementation and Integration",
              "Prompt Engineering & Automation"
            ].map((skill, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-500" /> {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
