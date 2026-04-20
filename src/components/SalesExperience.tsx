"use client";

import Section from "./Section";
import Image from "next/image";
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

export default function SalesExperience() {
  return (
    <Section id="sales-experience" title="Sales & Strategic Partnerships">
      <div className="space-y-12">
        {salesExperienceData.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 pb-12 last:pb-0">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-black" />
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <TrendingUp className="text-blue-600 dark:text-blue-500" size={24} />
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

                <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300 mb-8">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="leading-relaxed pl-2">
                      <span className="relative left-[-8px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authenticity Gallery */}
              {item.images && (
                <div className="lg:w-80 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <Camera size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Partnership Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {item.images.map((img, iIndex) => (
                      <div 
                        key={iIndex} 
                        className="relative aspect-square opacity-90 dark:opacity-80 brightness-110 contrast-105"
                        style={{
                          maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
