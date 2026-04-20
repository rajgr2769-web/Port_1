"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Terminal, Cpu } from "lucide-react";
import TiltCard from "./TiltCard";

const experienceData = [
  {
    role: "AI-ML Data Analysis Engineer",
    company: "Arista Vault",
    location: "Delhi, India",
    period: "August 2025 – Present",
    points: [
      "Designed and deployed machine learning models (Scikit-learn, TensorFlow) for risk assessment and demand forecasting.",
      "Optimized SQL queries and automated pipelines, reducing manual effort by ~40%.",
      "Performed data validation and quality checks.",
      "Built dashboards and KPI visualizations.",
      "Collaborated with stakeholders to define business rules and data models.",
      "Integrated REST APIs and monitored endpoints using Python."
    ]
  },
  {
    role: "Cloud Practitioner Intern",
    company: "Microsoft eTrain",
    location: "Vellore",
    period: "June 2024 – July 2025",
    points: [
      "Worked on Azure services, chatbot design, IAM, and security.",
      "Built NLP-based chatbot using Azure Cognitive Services.",
      "Achieved 931/1000 score and ‘S’ grade."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export default function Experience() {
  return (
    <Section id="tech-experience" title="Tech & Data Experience">
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
          {experienceData.map((item, index) => (
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
                transition={{ delay: 0.2 + index * 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <Terminal className="text-blue-600 dark:text-blue-500" size={20} />
                    {item.role}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-zinc-600 dark:text-zinc-400">
                    {item.company}
                  </p>
                </div>
                <div className="flex flex-col text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex} className="leading-relaxed pl-2">
                    <span className="relative left-[-8px]">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
