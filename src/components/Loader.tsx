/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { LogoIcon } from "./BrandLogo";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060606] select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-saffron/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated Brand Logo Icon with pulse and scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative flex items-center justify-center"
        >
          <LogoIcon iconSize={64} className="w-16 h-16" />
        </motion.div>

        {/* Brand Text */}
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-black tracking-[0.2em] text-white uppercase font-sans"
          >
            JAI HIND
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[9px] font-mono tracking-[0.5em] text-brand-saffron uppercase mt-1"
          >
            SPORTS
          </motion.span>
        </div>

        {/* Animated Tricolour Line Loader */}
        <div className="w-40 h-[3px] rounded-full overflow-hidden bg-white/10 relative mt-4">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 bottom-0 w-2/3 flex"
          >
            <div className="w-1/3 bg-brand-saffron h-full" />
            <div className="w-1/3 bg-white h-full" />
            <div className="w-1/3 bg-brand-green h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
