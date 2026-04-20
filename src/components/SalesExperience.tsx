"use client";

import Section from "./Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp, Camera } from "lucide-react";

const salesExperienceData = [
  {
    role: "Strategic Partnerships Lead",
    company: "Arista Vault",
    location: "Delhi, India",
    period: "August 2025 – Present",
    points: [
      "Maharashtra Education Board – Rs. 165 Crore MOU: Leading a state-level partnership for Child Safety Smart School Bags with live GPS tracking.",
      "Times of India Group – 5,000 Unit MOU: Built a co-branded engagement partnership by aligning product positioning with HR and marketing teams.",
      "Gujarat Titans (IPL Franchise) – 50 Exclusive Travel Kits: Led sports partnership and branded merchandise deal by pitching value to commercial teams.",
      "Abbott Healthcare – 1,000 Unit MOU: Delivered a corporate gifting and employee engagement program by customizing premium product solutions.",
      "Singapore Airlines – Krisp Loyalty Points Partnership: Structured premium loyalty partnership aligned with airline brand standards (1 point = Rs. 2.3).",
      "Arista Vault GO – Smart Locker Platform: Built a premium smart-locker platform for high-footfall locations; designed hybrid business model.",
      "B2B Pitching & Deal Conversion: Independently create CXO-level pitch decks and proposals that drive deal closures across industries."
    ],
    images: [
      { src: "/gt-1.jpeg", alt: "Gujarat Titans Partnership - Champion Poster" },
      { src: "/gt-2.jpeg", alt: "Gujarat Titans Partnership - Logo Engagement" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
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

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export default function SalesExperience() {
  return (
    <Section id="sales-experience" title="Sales & Strategic Partnerships">
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
          {salesExperienceData.map((item, index) => (
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
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                        <TrendingUp className="text-blue-600 dark:text-blue-500" size={20} />
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

                  <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-zinc-700 dark:text-zinc-300 mb-8">
                    {item.points.map((point, pIndex) => (
                      <motion.li 
                        key={pIndex} 
                        className="leading-relaxed pl-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + pIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="relative left-[-8px]">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Authenticity Gallery */}
                {item.images && (
                  <motion.div 
                    className="w-full lg:w-80 flex flex-col gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 text-zinc-400 mb-2 justify-center lg:justify-start">
                      <Camera size={18} />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Partnership Highlights</span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                      {item.images.map((img, iIndex) => (
                        <motion.div 
                          key={iIndex} 
                          className="relative aspect-square opacity-90 dark:opacity-80 brightness-110 contrast-105"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{
                            maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
