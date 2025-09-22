'use client';

import { motion } from 'framer-motion';

export const FloatingMehandiPattern = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`absolute opacity-5 ${className}`}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10ZM50 80C35 80 20 65 20 50C20 35 35 20 50 20C65 20 80 35 80 50C80 65 65 80 50 80Z"
          fill="currentColor"
        />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        <circle cx="50" cy="30" r="3" fill="currentColor" />
        <circle cx="50" cy="70" r="3" fill="currentColor" />
        <circle cx="30" cy="50" r="3" fill="currentColor" />
        <circle cx="70" cy="50" r="3" fill="currentColor" />
        <path
          d="M35 35L65 65M65 35L35 65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export const MehandiFlower = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, -360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute opacity-10 ${className}`}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 20C45 25 45 35 40 40C35 35 35 25 40 20Z"
          fill="currentColor"
        />
        <path
          d="M60 40C55 45 45 45 40 40C45 35 55 35 60 40Z"
          fill="currentColor"
        />
        <path
          d="M40 60C35 55 35 45 40 40C45 45 45 55 40 60Z"
          fill="currentColor"
        />
        <path
          d="M20 40C25 35 35 35 40 40C35 45 25 45 20 40Z"
          fill="currentColor"
        />
        <circle cx="40" cy="40" r="8" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

export const MehandiLeaf = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute opacity-8 ${className}`}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 10C35 15 40 25 35 35C30 40 25 35 20 30C15 25 20 15 30 10Z"
          fill="currentColor"
        />
        <path
          d="M30 10L30 35"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M25 20C27 22 30 25 32 22"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export const MehandiPaisley = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute opacity-6 ${className}`}
    >
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M35 10C45 10 55 20 55 30C55 40 50 45 45 50C40 55 35 60 25 55C15 50 10 40 15 30C20 20 25 15 35 10Z"
          fill="currentColor"
        />
        <path
          d="M35 20C40 20 45 25 45 30C45 35 42 38 38 40C35 42 30 45 25 42C20 39 18 35 20 30C22 25 28 22 35 20Z"
          fill="white"
          fillOpacity="0.3"
        />
        <circle cx="35" cy="30" r="3" fill="white" fillOpacity="0.5" />
      </svg>
    </motion.div>
  );
};

export const BackgroundPatterns = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingMehandiPattern className="top-20 left-10 text-traditional-gold" />
      <MehandiFlower className="top-40 right-20 text-warm-green" />
      <MehandiLeaf className="bottom-40 left-20 text-accent-maroon" />
      <MehandiPaisley className="top-60 left-1/3 text-traditional-gold" />
      <FloatingMehandiPattern className="bottom-20 right-10 text-warm-green" />
      <MehandiFlower className="top-1/4 left-1/2 text-accent-maroon" />
      <MehandiLeaf className="bottom-1/3 right-1/3 text-traditional-gold" />
      <MehandiPaisley className="top-10 right-1/4 text-warm-green" />
    </div>
  );
};
