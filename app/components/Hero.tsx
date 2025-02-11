"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Overlay for the radial gradient */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Boxes */}
      <Boxes />

      {/* Content */}
      <div className="relative z-20 text-center">
        <motion.h1
          className={cn("md:text-6xl text-4xl text-white font-bold mb-6 relative")}
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.5 }} // Transition settings
        >
          Welcome to{" "}
          <span className="relative inline-block">
            {/* Crown SVG above 'C' */}
            <span className="relative">
              <motion.svg
                className="absolute -top-8 left-0 w-10 h-10"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <path
                  d="M4 48L12 20L24 32L32 12L40 32L52 20L60 48H4Z"
                  fill="url(#yellowGradient)"
                  stroke="#FBBF24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="16" r="4" fill="#FDE047" />
                <circle cx="32" cy="8" r="4" fill="#FDE047" />
                <circle cx="52" cy="16" r="4" fill="#FDE047" />
                <rect x="8" y="50" width="48" height="6" rx="3" fill="#F59E0B" />
                <defs>
                  <linearGradient id="yellowGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDE047" />
                    <stop offset="1" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </motion.svg>
              C
            </span>
            -Tek
            {/* Wavy Animated Underline */}
            <motion.svg
              className="absolute left-0 -bottom-2 w-full h-3"
              viewBox="0 0 100 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <path
                d="M0 5 C 20 10, 40 0, 60 5 S 80 10, 100 5"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="transparent"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f79920" />
                  <stop offset="50%" stopColor="#e0891c" />
                  <stop offset="100%" stopColor="#f79920" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>{" "}
          Learning
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-neutral-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master Frontend, Backend, and Fullstack Development with personalized tutoring sessions.
        </motion.p>

        <Link
          href="/sign-up"
          className="bg-[#f79920] text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-[#e0891c] transition-colors"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
