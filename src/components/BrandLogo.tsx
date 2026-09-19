/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import logoAsset from "../assets/logo.svg";

interface LogoProps {
  className?: string;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  textColor?: string;
}

/**
 * Official JAI HIND SPORTS logo mark.
 * Utilizes the official provided logo asset with white circular badge,
 * victory hand with Tricolour drips (Saffron, White, Green), Ashoka Chakra,
 * and "Jai Hind sports shop" typography.
 */
export function LogoIcon({ className = "", iconSize = "md" }: LogoProps) {
  const sizeMap: Record<string, number> = {
    xs: 16,
    sm: 24,
    md: 36,
    lg: 52,
    xl: 68,
  };
  const size = typeof iconSize === "number" ? iconSize : sizeMap[iconSize] || 36;

  return (
    <img
      src={logoAsset || "/logo.svg"}
      alt="Jai Hind Sports"
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`inline-block aspect-square object-contain select-none flex-shrink-0 ${className}`}
      onError={(e) => {
        if (!e.currentTarget.src.endsWith("/logo.svg") && !e.currentTarget.src.endsWith("/favicon.svg")) {
          e.currentTarget.src = "/logo.svg";
        }
      }}
    />
  );
}

/**
 * Full Brand Logo lockup for Desktop Navigation & Headers.
 * Renders the official provided circular logo with high clarity.
 */
export function LogoFull({ className = "", iconSize = "md", textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoIcon iconSize={iconSize} className="hover:scale-105 transition-transform duration-300" />
      <div className="flex flex-col">
        <span className={`text-base md:text-lg font-black tracking-wide ${textColor} font-sans leading-tight`}>
          JAI HIND
        </span>
        <span className="text-[9px] md:text-[10px] font-mono tracking-[0.22em] text-[#FF9933] uppercase leading-tight mt-0.5">
          SPORTS SHOP
        </span>
      </div>
    </div>
  );
}

/**
 * Centered Vertical Stack Logo.
 * Used on promotional mockups, cards, and presentation areas.
 */
export function LogoVertical({ className = "", iconSize = "lg", textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center text-center gap-3.5 ${className}`}>
      <LogoIcon iconSize={iconSize} className="hover:scale-105 transition-transform duration-300" />
      <div className="flex flex-col items-center">
        <span className={`text-lg md:text-xl font-black tracking-wide ${textColor} font-sans leading-tight`}>
          JAI HIND
        </span>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <div className="w-2 h-[2px] bg-[#FF5700]" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-gray-300 uppercase pl-[0.3em]">
            SPORTS SHOP
          </span>
          <div className="w-2 h-[2px] bg-[#00A544]" />
        </div>
      </div>
    </div>
  );
}

