"use client";

import Section from "./Section";
import TiltCard from "./TiltCard";
import { Briefcase, BarChart, Code, Layout, Settings } from "lucide-react";

const skillsData = [
  {
    category: "Technology",
    icon: <Code className="text-purple-500" size={20} />,
    skills: ["Python", "SQL", "TensorFlow", "Scikit-learn", "Generative AI", "LLMs", "Data Science", "ML Modelling"]
  },
  {
    category: "Business",
    icon: <Briefcase className="text-blue-500" size={20} />,
    skills: ["B2B Sales", "Strategic Partnerships", "Business Development", "GTM Strategies", "Pitch Deck Creation", "CXO Presentations"]
  },
  {
    category: "Marketing & Analytics",
    icon: <BarChart className="text-cyan-500" size={20} />,
    skills: ["SEO", "Google Analytics", "Google Ads", "GTM", "Data Dashboards", "Business Intelligence"]
  },
  {
    category: "Tools",
    icon: <Settings className="text-zinc-500" size={20} />,
    skills: ["Excel", "Canva", "Oracle", "Java", "HTML", "CSS", "Unreal Engine"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((item, index) => (
          <TiltCard key={index} className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {item.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {item.skills.map((skill, sIndex) => (
                <li key={sIndex} className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 text-xs font-semibold text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                  {skill}
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
