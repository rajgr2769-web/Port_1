"use client";

import Section from "./Section";
import { Award, Trophy, Medal } from "lucide-react";

const awardsData = [
  {
    title: "IGSO Gold Medalist",
    description: "International General Science Olympiad",
    icon: <Medal size={32} />
  },
  {
    title: "Outstanding Student Leader (2021)",
    description: "Recognized for exceptional leadership skills",
    icon: <Trophy size={32} />
  },
  {
    title: "Best Innovation (2019 – Robotic Garbage Arm)",
    description: "Awarded for the most innovative robotic project",
    icon: <Award size={32} />
  },
  {
    title: "6x Olympiad Medalist",
    description: "Multi-year recognition across various subjects",
    icon: <Medal size={32} />
  }
];

export default function Awards() {
  return (
    <Section id="awards" title="Honors & Recognition">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awardsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
