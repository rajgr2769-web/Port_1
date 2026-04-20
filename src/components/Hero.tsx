"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left relative z-20"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[0.9]">
              PRANAV <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                SUNIL DEORE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-tight">
              AI-ML Engineer • Data Analyst
              <span className="block text-lg mt-4 font-normal text-zinc-500 dark:text-zinc-500">
                Transforming complex data into intelligent solutions.
              </span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-zinc-600 dark:text-zinc-400 mb-12">
              <a href="mailto:rajgr2769@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                <Mail size={20} /> rajgr2769@gmail.com
              </a>
              <a href="tel:+919730656364" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                <Phone size={20} /> +91 9730656364
              </a>
              <span className="flex items-center gap-2 font-medium">
                <MapPin size={20} /> Delhi, India
              </span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/pranav-deore-3b558524b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-2xl shadow-zinc-500/20 flex items-center gap-3 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-100"
              >
                <Linkedin size={24} /> Let's Connect
              </motion.a>
              
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Merged Profile Image - Seamless No Box */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-1 w-full h-[500px] md:h-[600px] lg:h-[800px] relative"
            style={{
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Pranav Sunil Deore"
              fill
              className="object-cover object-top brightness-135 contrast-110 saturate-110"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Scroll</span>
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
