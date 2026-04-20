"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left relative z-20 order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white mb-4 lg:mb-6 leading-[1.2] lg:leading-[0.9]">
              <Typewriter 
                texts={["Hi, it's"]}
                className="text-lg md:text-2xl lg:text-3xl italic text-zinc-500 dark:text-zinc-400 font-medium"
                loop={false}
                duration={1}
                showCursor={false}
              />
              <br />
              <Typewriter 
                texts={["Pranav!"]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
                loop={false}
                delay={1}
                duration={1}
              />
              <br />
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 mt-4">
                <span className="text-xl md:text-3xl lg:text-5xl font-medium text-zinc-500 dark:text-zinc-500">
                  I am a
                </span>
                <Typewriter 
                  texts={["AI-ML Engineer", "Data Analyst", "Problem Solver"]}
                  className="text-xl md:text-3xl lg:text-5xl text-blue-600 dark:text-blue-400 font-bold"
                  delay={2.5}
                />
              </div>
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-snug lg:leading-tight">
              Transforming complex data into intelligent solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 text-zinc-600 dark:text-zinc-400 mb-8 lg:mb-12">
              <a href="mailto:rajgr2769@gmail.com" className="flex items-center justify-center lg:justify-start gap-2 hover:text-blue-600 transition-colors font-medium text-sm md:text-base">
                <Mail size={18} /> rajgr2769@gmail.com
              </a>
              <a href="tel:+919730656364" className="flex items-center justify-center lg:justify-start gap-2 hover:text-blue-600 transition-colors font-medium text-sm md:text-base">
                <Phone size={18} /> +91 9730656364
              </a>
              <span className="flex items-center justify-center lg:justify-start gap-2 font-medium text-sm md:text-base">
                <MapPin size={18} /> Delhi, India
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/pranav-deore-3b558524b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-2xl shadow-zinc-500/20 flex items-center justify-center gap-3 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-100"
              >
                <Linkedin size={20} /> Let's Connect
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold shadow-2xl shadow-zinc-500/10 flex items-center justify-center gap-3 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Github size={20} /> Github
              </motion.a>
            </div>
          </motion.div>

          {/* Merged Profile Image - Seamless No Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-1 w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[800px] relative order-1 lg:order-2"
            style={{
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Pranav Sunil Deore"
              fill
              className="object-cover object-top brightness-125 contrast-110 saturate-110"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
