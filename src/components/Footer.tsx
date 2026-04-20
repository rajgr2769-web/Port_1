"use client";

import { Heart, Linkedin, Mail, Phone, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950/50 backdrop-blur-3xl border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Beyond the Profession */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">Beyond the Profession</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                <Heart className="text-red-500 shrink-0" size={18} /> Passionate about weightlifting
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                <Heart className="text-red-500 shrink-0" size={18} /> Former state-level basketball player
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                <Heart className="text-red-500 shrink-0" size={18} /> Interested in AI, cloud, and tech discussions
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">Certifications</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">• Azure Cloud Practitioner – Score 931/1000</li>
              <li className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">• Quantum Machine Learning – Self-study</li>
              <li className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">• Advanced SQL & Data Engineering</li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">Get In Touch</h3>
            <div className="space-y-3 md:space-y-4 mb-8">
              <a href="mailto:rajgr2769@gmail.com" className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                <Mail size={18} /> rajgr2769@gmail.com
              </a>
              <a href="tel:+919730656364" className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                <Phone size={18} /> +91 9730656364
              </a>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/pranav-deore-3b558524b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 dark:text-zinc-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pranav Sunil Deore. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-xs md:text-sm text-center md:text-right">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
