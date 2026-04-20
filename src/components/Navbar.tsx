"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Tech", href: "#tech-experience" },
  { name: "Sales", href: "#sales-experience" },
  { name: "Work", href: "#work-samples" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/40 dark:bg-black/40 backdrop-blur-2xl border-b border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-end">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-zinc-600 dark:text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-8 gap-8 font-bold text-zinc-800 dark:text-zinc-200">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors block text-2xl tracking-tight" 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
