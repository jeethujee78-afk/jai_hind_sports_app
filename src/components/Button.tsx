/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle = "relative overflow-hidden font-mono font-black uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-saffron via-brand-saffron-light to-brand-saffron text-white shadow-lg shadow-brand-saffron/20 hover:shadow-[0_0_25px_rgba(4,110,56,0.65)] hover:border-brand-green-light/30 border border-transparent",
    secondary: "bg-gradient-to-r from-brand-green to-brand-green-light text-white shadow-lg shadow-brand-green/20 hover:shadow-[0_0_25px_rgba(255,103,31,0.5)] border border-transparent",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-brand-saffron hover:shadow-[0_0_15px_rgba(255,103,31,0.25)]",
    glow: "bg-[#111111] text-brand-saffron border border-brand-saffron/20 hover:border-brand-saffron shadow-lg hover:shadow-[0_0_20px_rgba(4,110,56,0.45)]"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Decorative premium hover shine line */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
