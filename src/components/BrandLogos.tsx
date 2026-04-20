"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Times of India", logo: `/brands/toi.png?v=${Date.now()}` },
  { name: "Singapore Airlines", logo: `/brands/singapore-airlines.jpg?v=${Date.now()}` },
  { name: "Gujarat Titans", logo: `/brands/gt.webp?v=${Date.now()}` },
  { name: "Abbott", logo: `/brands/abbott.png?v=${Date.now()}` },
  { name: "Maharashtra Education Board", logo: `/brands/meb.webp?v=${Date.now()}` },
];

export default function BrandLogos() {
  return (
    <div className="w-full py-12 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-y border-zinc-200 dark:border-zinc-800/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
          Strategic Partnerships & Brand Collaborations
        </p>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center whitespace-nowrap"
        >
          {/* Tripled set for a truly infinite feel without gaps */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="relative w-48 md:w-64 h-24 flex-shrink-0 flex items-center justify-center px-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
