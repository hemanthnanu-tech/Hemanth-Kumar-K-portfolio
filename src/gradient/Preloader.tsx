import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const FONTS = [
  "Arial, sans-serif",
  "Georgia, serif",
  "'Courier New', monospace",
  "Impact, sans-serif",
  "'Times New Roman', serif",
  "'Trebuchet MS', sans-serif",
  "'Palatino Linotype', serif",
  "'Lucida Console', monospace",
  "'Garamond', serif",
  "'Courier', monospace",
  "'Outfit', sans-serif" // Final premium font
];

export const Preloader = ({ loading, onComplete }: { loading: boolean, onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep the ref up to date so we don't need it in dependency arrays
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!loading) return;

    let timer: number;
    let completeTimer: number;

    if (index < FONTS.length - 1) {
      timer = window.setTimeout(() => {
        setIndex((prev) => Math.min(prev + 1, FONTS.length - 1));
      }, 180);
    } else {
      completeTimer = window.setTimeout(() => {
        onCompleteRef.current();
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [index, loading]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-color)] pointer-events-none"
      initial={{ y: 0 }}
      animate={{ y: loading ? 0 : "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative w-full h-32 flex items-center justify-center">
        {FONTS.map((font, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="absolute text-4xl md:text-6xl text-[var(--text-main)] tracking-tight whitespace-nowrap"
            style={{ fontFamily: font }}
          >
            Hemanth Kumar K
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
