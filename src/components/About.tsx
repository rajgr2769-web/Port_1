"use client";

import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="Professional Summary">
      <div className="max-w-4xl space-y-6">
        <p className="text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
          AI/ML Engineer with a strong foundation in cloud technologies and enterprise systems, driven by a passion for solving real-world business problems through intelligent, data-driven solutions.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          With certifications as an <span className="text-blue-600 dark:text-blue-400 font-bold">AWS Certified Cloud Practitioner</span> and an <span className="text-blue-600 dark:text-blue-400 font-bold">Oracle Certified Cloud Practitioner</span>, I bring expertise in leveraging cloud platforms to deploy scalable and secure machine learning models across business environments.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          My professional experience spans across <span className="font-bold">ERP (Enterprise Resource Planning)</span> and <span className="font-bold">HCM (Human Capital Management)</span> systems, helping organizations optimize operations and accelerate digital transformation initiatives.
        </p>

        <div className="py-6">
          <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">Core Competencies:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-zinc-600 dark:text-zinc-400 font-semibold">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> AI/ML Model Development & Deployment
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> Cloud Computing (AWS & Oracle)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> Data Analytics & Visualization
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> ERP & HCM Implementation and Integration
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> Prompt Engineering & Automation
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
