"use client";

import Section from "./Section";
import TiltCard from "./TiltCard";
import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const workSamples = [
  {
    title: "Project Strategy & Proposal",
    link: "https://drive.google.com/file/d/1iG6Q35pywxTmRwf0q9TqEahIAW07Rhvz/view",
    type: "PDF",
    description: "Detailed CXO-level pitch deck covering ROI, rollout plans, and strategic branding."
  },
  {
    title: "Technical Documentation",
    link: "https://drive.google.com/file/d/1zyewkJ8sdvD3PYX2Oqh0zoewHzfs848i/view",
    type: "PDF",
    description: "Technology initiatives and data-driven commercial strategy samples."
  }
];

export default function WorkSamples() {
  return (
    <Section id="work-samples" title="Work Samples">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workSamples.map((sample, index) => (
          <motion.a
            key={index}
            href={sample.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="block"
          >
            <TiltCard className="p-8 group h-full bg-zinc-50/50 dark:bg-zinc-900/30 border-dashed border-2 border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FileText size={32} />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-400 group-hover:text-blue-500 transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                {sample.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {sample.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                View {sample.type}
              </div>
            </TiltCard>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
