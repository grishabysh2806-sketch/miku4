'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
  onFinished?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading, onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShow(false);
        if (onFinished) onFinished();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-md">
            {/* Terminal Style Header */}
            <div className="flex items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span>Initializing Core Systems</span>
            </div>

            {/* Logo/Brand in Preloader */}
            <div className="mb-12 overflow-hidden">
              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter"
              >
                INTERPHASE<span className="text-neon">.</span>
              </motion.h1>
            </div>

            {/* Progress Bar Container */}
            <div className="relative">
              <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                <motion.div 
                  className="h-full bg-neon"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Progress Percentage */}
              <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                <span>Loading Assets</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Terminal Logs */}
            <div className="mt-12 space-y-2 font-mono text-[9px] uppercase tracking-wider text-white/20">
              <p>{`> [SYSTEM] LOADING NEURAL_ENGINE.EXE`}</p>
              {progress > 30 && <p>{`> [SYSTEM] ESTABLISHING TON_NETWORK_BRIDGE`}</p>}
              {progress > 60 && <p>{`> [SYSTEM] CALIBRATING VISUAL_AESTHETICS`}</p>}
              {progress > 90 && <p>{`> [SYSTEM] READY_FOR_DEPLOYMENT`}</p>}
            </div>
          </div>

          {/* Background Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 overflow-hidden">
             <div className="absolute inset-0" style={{ 
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px' 
             }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
