"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  duration?: number;
  className?: string;
  loop?: boolean;
  waitDuration?: number;
  showCursor?: boolean;
}

export default function Typewriter({ 
  texts, 
  delay = 0, 
  duration = 2, 
  className = "", 
  loop = true,
  waitDuration = 2000,
  showCursor = true
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[index].slice(0, latest));
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const controls = animate(count, texts[index].length, {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: "linear",
      onComplete: () => {
        setIsDone(true);
        if (loop || index < texts.length - 1) {
          timeout = setTimeout(() => {
            setIsDone(false);
            animate(count, 0, {
              type: "tween",
              duration: duration / 2,
              ease: "linear",
              onComplete: () => {
                setIndex((prev) => (prev + 1) % texts.length);
              }
            });
          }, waitDuration);
        }
      },
    });
    return () => {
      controls.stop();
      clearTimeout(timeout);
    };
  }, [index, count, texts, delay, duration, loop, waitDuration]);

  return (
    <span className={`${className} font-mono inline-flex items-center`}>
      <motion.span className="whitespace-nowrap">{displayText}</motion.span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="ml-1 inline-block w-[3px] h-[0.8em] bg-current"
        />
      )}
    </span>
  );
}
