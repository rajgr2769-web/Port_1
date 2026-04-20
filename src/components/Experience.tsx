"use client";

import Section from "./Section";
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

export default function Experience() {
  return (
    <Section id="tech-experience" title="Tech & Data Experience">
      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 pb-12 last:pb-0">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-black" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Terminal className="text-blue-600 dark:text-blue-500" size={24} />
                  {item.role}
                </h3>
                <p className="text-xl font-semibold text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>
              </div>
              <div className="flex flex-col text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {item.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {item.location}
                </span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
              {item.points.map((point, pIndex) => (
                <li key={pIndex} className="leading-relaxed pl-2">
                  <span className="relative left-[-8px]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
