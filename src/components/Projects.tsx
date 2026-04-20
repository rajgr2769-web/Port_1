"use client";

import Section from "./Section";
import { ExternalLink, Code } from "lucide-react";
import TiltCard from "./TiltCard";

const projectData = [
  {
    title: "SCM Optimization using Quantum ML",
    description: "Identified optimal warehouse locations using quantum machine learning techniques to optimize supply chain management.",
    tags: ["Quantum ML", "Qiskit", "Supply Chain"]
  },
  {
    title: "Founder-Centric Revenue Dashboard",
    description: "Automated ETL pipeline with daily reports to provide comprehensive revenue insights for founders.",
    tags: ["ETL", "Dashboard", "Automation"]
  },
  {
    title: "InstaScrapper Platform",
    description: "Social media analytics platform with predictive insights based on scraped data with 85% accuracy.",
    tags: ["MongoDB", "Python", "Predictive Analytics"]
  },
  {
    title: "Azure NLP Chatbot",
    description: "Conversational AI using Azure Cognitive Services for natural language processing and chatbot design.",
    tags: ["Azure", "NLP", "Conversational AI"]
  },
  {
    title: "Furniture Placement AR App",
    description: "AR-based visualization using Unity & ARCore for virtual furniture placement in real environments.",
    tags: ["Unity", "ARCore", "AR"]
  }
];

export default function Projects() {
  return (
    <Section id="projects" title="Research & Key Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projectData.map((item, index) => (
          <TiltCard key={index} className="group p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <div className="flex gap-2">
                <Code size={18} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tIndex) => (
                <span key={tIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
