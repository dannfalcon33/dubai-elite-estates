import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay after 100% before unmounting
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 2 seconds to load

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-8">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-widest mb-2">
            DUBAI <span className="font-light text-zinc-400">ELITE</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500">
            Estates & Investments
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-[1px] bg-zinc-800 relative overflow-hidden">
          {/* Progress Bar */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-amber-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.02 }} // Smooth update matching interval
          />
        </div>

        {/* Percentage or Status (Optional) */}
        <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
          {progress < 100 ? "Loading Assets..." : "Welcome"}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
