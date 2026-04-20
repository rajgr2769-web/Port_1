"use client";

import Section from "./Section";
import { GraduationCap, Calendar, Star } from "lucide-react";

const educationData = [
  {
    degree: "M.Tech Integrated – Computer Science & Engineering",
    institution: "VIT Vellore",
    period: "Expected May 2026",
    grade: "CGPA: 8.21",
    highlights: ["DBMS", "Machine Learning", "Wireless Networks", "Big Data", "Software Engineering"]
  },
  {
    degree: "12th Standard",
    institution: "Higher Secondary Education",
    period: "2021",
    grade: "84.50%",
    highlights: []
  },
  {
    degree: "10th Standard",
    institution: "Secondary Education",
    period: "2019",
    grade: "87.20%",
    highlights: []
  }
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center self-start">
              <GraduationCap className="text-blue-600 dark:text-blue-500" size={32} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {item.degree}
                </h3>
                <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold">
                  <Calendar size={18} /> {item.period}
                </span>
              </div>
              <p className="text-xl font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                {item.institution}
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold mb-4">
                <Star size={18} /> {item.grade}
              </div>
              {item.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <span key={hIndex} className="px-3 py-1 bg-white dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
