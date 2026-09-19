/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Copy, 
  Check, 
  Sparkles, 
  Layout, 
  Tv, 
  Award, 
  Palette, 
  Type, 
  FileText, 
  Shirt, 
  Smartphone, 
  ShoppingBag, 
  Building,
  ExternalLink,
  ChevronRight,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LogoIcon, LogoFull, LogoVertical } from "../components/BrandLogo";
import SEO from "../components/SEO";

// Business details constant matching standard shop profile
const BRAND_DETAILS = {
  name: "JAI HIND SPORTS",
  tagline: "Unleashing Athletic Potential",
  city: "Coimbatore",
  state: "Tamil Nadu",
  address: "VRS Nagar, Villankurichi Road, Coimbatore, Tamil Nadu - 641035",
  phone: "+91 99945 55505",
  email: "connect@jaihindsports.com"
};

// Tricolour & brand premium palettes
const COLOR_SWATCHES = [
  {
    name: "Saffron Energy",
    variable: "--color-brand-saffron",
    hex: "#FF9933",
    rgb: "255, 153, 51",
    useCase: "Primary dynamic highlights, active indicators, and high-energy touchpoints.",
    tricolorRole: "Saffron (Kesari) - Symbolizes courage, sacrifice, and athletic passion."
  },
  {
    name: "Platinum White",
    variable: "--color-brand-white",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    useCase: "Crisp typography, premium content backgrounds, and core contrast lines.",
    tricolorRole: "White - Symbolizes purity, peace, sportsmanship, and fair play."
  },
  {
    name: "Emerald Green",
    variable: "--color-brand-green",
    hex: "#138808",
    rgb: "19, 136, 8",
    useCase: "Stamina trackers, success states, and grass-field sports highlights.",
    tricolorRole: "Indian Green - Symbolizes vitality, growth, field-ground, and victory."
  },
  {
    name: "Showroom Obsidian",
    variable: "--color-brand-obsidian",
    hex: "#050505",
    rgb: "5, 5, 5",
    useCase: "The primary dark workspace canvas. Gives a modern high-end showroom vibe.",
    tricolorRole: "Neutral Dark - Replaces flat blacks with deep premium dark textures."
  },
  {
    name: "Sartorial Charcoal",
    variable: "--color-brand-charcoal",
    hex: "#121212",
    rgb: "18, 18, 18",
    useCase: "Card backdrops, premium glass containment containers, and subtle layout divisions.",
    tricolorRole: "Neutral Surface - Ensures crisp elevation levels on high-density displays."
  }
];

export default function BrandIdentity() {
  const [activeTab, setActiveTab] = useState<"logo" | "colors" | "typography" | "mockups">("logo");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedMockup, setSelectedMockup] = useState<"sign" | "card" | "shirt" | "bag" | "invoice">("sign");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Raw SVG codes for users to download/copy
  const rawLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <!-- Official JAI HIND SPORTS Logo Emblem -->
  <circle cx="500" cy="500" r="475" fill="#FFFFFF" />
  <!-- Victory hand with Tricolour drips, Ashoka Chakra, and Jai Hind sports shop wordmark -->
</svg>`;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20">
      <SEO 
        title="Official Brand Identity Guide | JAI HIND SPORTS" 
        description="Explore the official visual identity, colors, design tokens, and luxury brand mockups of JAI HIND SPORTS Coimbatore, Tamil Nadu."
        keywords="Jai Hind Sports, Brand Identity, Brand Manual, Sports Shop Coimbatore, Villankurichi Sports Shop, Indian Sports Brand, Tricolour Identity, Coimbatore Sports Showroom"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        {/* Soft Tricolour Backing Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-saffron/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-brand-saffron mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Brand Specification Manual v1.0
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-display max-w-4xl mx-auto leading-none">
            REDEFINING <span className="text-[#FF9933] drop-shadow-[0_4px_16px_rgba(255,153,51,0.3)]">ATHLETIC</span> EXCELLENCE
          </h1>
          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to the official visual assets showcase and design tokens guide for{" "}
            <span className="text-white font-medium">JAI HIND SPORTS</span>. This manual translates athletic motion and modern Indian identity into a premium global sports identity system.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-[73px] z-30 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 no-scrollbar">
            {[
              { id: "logo", name: "Redesigned Logo", icon: Award },
              { id: "colors", name: "Tricolour Palette", icon: Palette },
              { id: "typography", name: "Typographic Scale", icon: Type },
              { id: "mockups", name: "Premium Mockups", icon: Layout }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all whitespace-nowrap border ${
                    isActive
                      ? "bg-white text-black border-white shadow-lg shadow-white/5"
                      : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tab View */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* TAB 1: THE REDESIGNED LOGO */}
            {activeTab === "logo" && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <h3 className="text-2xl font-bold tracking-tight uppercase">
                      Official JAI HIND SPORTS Emblem
                    </h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      The official mark celebrates athletic triumph with the iconic victory hand gesture, Indian flag Tricolour drips (Saffron and Green), the navy Ashoka Chakra, and flowing brush typography within a clean circular emblem.
                    </p>
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-1.5 h-auto bg-[#FF9933] rounded-full" />
                        <div>
                          <h4 className="text-xs font-bold font-mono text-gray-300">NO SILHOUETTES, NO CLIPART</h4>
                          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                            Avoids predictable cricket and football cliparts. Achieves global authority through pure geometric abstractions.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-1.5 h-auto bg-white rounded-full" />
                        <div>
                          <h4 className="text-xs font-bold font-mono text-gray-300">SCALABLE & FAITHFUL</h4>
                          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                            Maintains readability and aesthetic proportion down to 16px. Engineered for embroidery on clothing, signage, favicons, and packaging boxes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => copyToClipboard(rawLogoSvg, "svg")}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF9933] hover:bg-[#FF9933]/90 text-white font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-95"
                      >
                        {copiedColor === "svg" ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>SVG Code Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy SVG Source Code</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Logo Presentations Container */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Horizontal Presentation Card */}
                    <div className="bg-[#121212]/80 border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-[#FF9933]/25 transition-all duration-300">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        Horizontal Lockup (Primary Header)
                      </div>
                      <div className="py-6 flex justify-start">
                        <LogoFull iconSize="md" />
                      </div>
                      <div className="text-[10px] font-mono text-gray-400">
                        Fits perfectly on navigational bars and stationery.
                      </div>
                    </div>

                    {/* Vertical Presentation Card */}
                    <div className="bg-[#121212]/80 border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-[#138808]/25 transition-all duration-300">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        Vertical Lockup (Embroidery & Bags)
                      </div>
                      <div className="py-2 flex justify-center">
                        <LogoVertical iconSize="lg" />
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 text-center">
                        Perfect for t-shirts, caps, and packaging bags.
                      </div>
                    </div>

                    {/* App Icon Mark */}
                    <div className="bg-[#121212]/80 border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        Micro Standalone Icon (Favicon & Mobile app)
                      </div>
                      <div className="py-6 flex justify-center items-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-all">
                          <LogoIcon iconSize="lg" />
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 text-center">
                        Readable down to 16x16px. Sharp and unforgettable.
                      </div>
                    </div>

                    {/* Colorway on Light Canvas */}
                    <div className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-black/20 transition-all duration-300 text-black">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        Horizontal Lockup on White Canvas
                      </div>
                      <div className="py-6 flex justify-start">
                        <LogoFull iconSize="md" textColor="text-black" />
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500">
                        Used on paper print, invoices, and light letterheads.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TRICOLOUR SYSTEM */}
            {activeTab === "colors" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">
                    The Sophisticated Tricolour Palette
                  </h3>
                  <p className="text-gray-400 font-light text-sm max-w-3xl mt-2 leading-relaxed">
                    A premium tribute to the Indian Flag. Saffron, Platinum, and Green do not shout—they whisper. 
                    They are applied exclusively as precious design tokens and active states against a clean showroom slate.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-4">
                  {COLOR_SWATCHES.map((swatch) => (
                    <div 
                      key={swatch.hex} 
                      className="bg-[#121212]/80 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all group"
                    >
                      {/* Interactive Color Box */}
                      <div 
                        className="h-32 w-full relative transition-transform duration-500 group-hover:scale-[1.02] flex items-end justify-end p-4"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        <button
                          onClick={() => copyToClipboard(swatch.hex, swatch.name)}
                          className="p-2.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white border border-white/10 transition-all active:scale-95"
                          title={`Copy ${swatch.hex}`}
                        >
                          {copiedColor === swatch.name ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Swatch details */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-brand-saffron transition-colors">
                            {swatch.name}
                          </h4>
                          <p className="text-xs text-gray-500 font-mono mt-1">
                            {swatch.hex} • {swatch.variable}
                          </p>
                        </div>
                        <div className="space-y-1 text-xs">
                          <p className="text-gray-400 leading-relaxed font-light">
                            {swatch.useCase}
                          </p>
                          <p className="text-[10px] text-gray-500 font-mono pt-2 border-t border-white/5 italic">
                            {swatch.tricolorRole}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TYPOGRAPHY */}
            {activeTab === "typography" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight uppercase">
                    Sartorial Typography Hierarchy
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Typography defines athletic posture. We use <span className="text-white font-medium">Inter</span> for general body readability, paired with extreme tracking and capitalized mono subheads for high-tech premium aesthetics.
                  </p>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-400">Heading Typeface</span>
                      <span className="text-white">Inter (Sans-Serif)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-400">Body Typeface</span>
                      <span className="text-white">Inter (Light/Medium)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-400">Micro Labels</span>
                      <span className="text-white">JetBrains Mono</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 bg-[#121212]/80 border border-white/5 rounded-3xl p-8 space-y-8">
                  {/* Type 1: Display H1 */}
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                      <span>Display Heading 1 • 40px • Bold 900</span>
                      <span>tracking-tight</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                      UNLEASH ATHLETIC POTENTIAL
                    </h1>
                  </div>

                  {/* Type 2: Section Title */}
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                      <span>Section Heading 2 • 24px • Bold 800</span>
                      <span>tracking-tight</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white leading-none">
                      PREMIUM SPORTING EXPERIENCE
                    </h2>
                  </div>

                  {/* Type 3: Subtitle / Cards */}
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                      <span>Card Subtitle • 14px • Medium 500</span>
                      <span>tracking-normal</span>
                    </div>
                    <p className="text-sm md:text-base font-medium text-gray-200">
                      Coimbatore's premium boutique sports showroom.
                    </p>
                  </div>

                  {/* Type 4: Body text */}
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                      <span>Body copy • 13px • Light 300</span>
                      <span>leading-relaxed text-gray-400</span>
                    </div>
                    <p className="text-xs md:text-sm font-light leading-relaxed text-gray-400">
                      Coimbatore's premium boutique sports showroom. We stringently source, inspect, and certify 100% genuine elite-grade athletic equipment.
                    </p>
                  </div>

                  {/* Type 5: Micro Technical Mono Label */}
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                      <span>Micro Mono Label • 10px • Bold 700</span>
                      <span>tracking-[0.45em] text-gray-400</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.45em] text-gray-400 uppercase leading-none">
                      JAI HIND SPORTS
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: BRAND MOCKUPS */}
            {activeTab === "mockups" && (
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Mockup Selector List */}
                  <div className="w-full md:w-64 space-y-2">
                    {[
                      { id: "sign", name: "Shop Board", icon: Building },
                      { id: "card", name: "Business Card", icon: FileText },
                      { id: "shirt", name: "Staff T-Shirt", icon: Shirt },
                      { id: "bag", name: "Shopping Bag", icon: ShoppingBag },
                      { id: "invoice", name: "Invoice Layout", icon: FileText }
                    ].map((m) => {
                      const Icon = m.icon;
                      const isSelected = selectedMockup === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setSelectedMockup(m.id as any)}
                          className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all border ${
                            isSelected
                              ? "bg-brand-saffron/10 text-brand-saffron border-brand-saffron/30"
                              : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="w-4 h-4" />
                            <span>{m.name}</span>
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      );
                    })}
                  </div>

                  {/* Mockup Visualizer Display Box */}
                  <div className="flex-grow bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center min-h-[480px] relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-radial-gradient from-white/3 via-transparent to-transparent pointer-events-none" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedMockup}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-2xl flex items-center justify-center relative z-10"
                      >
                        {/* 1. SHOP BOARD MOCKUP */}
                        {selectedMockup === "sign" && (
                          <div className="w-full flex flex-col items-center gap-6">
                            <div className="w-full bg-[#121212] border-4 border-neutral-800 rounded-3xl p-8 relative shadow-2xl overflow-hidden shadow-black/80">
                              {/* Facade brick backing */}
                              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                              
                              {/* Saffron and Green Neon backglow effects */}
                              <div className="absolute -top-12 left-1/4 w-48 h-24 bg-[#FF9933]/15 rounded-full blur-2xl" />
                              <div className="absolute -bottom-12 right-1/4 w-48 h-24 bg-[#138808]/15 rounded-full blur-2xl" />
                              
                              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                {/* Logo & Name */}
                                <div className="flex items-center gap-4">
                                  <div className="p-3 bg-[#080808]/90 border border-white/10 rounded-2xl shadow-lg ring-4 ring-[#FF9933]/10">
                                    <LogoIcon iconSize={48} />
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <h1 className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white uppercase font-sans leading-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
                                      JAI HIND
                                    </h1>
                                    <span className="text-[10px] font-mono tracking-[0.55em] text-brand-saffron uppercase font-bold leading-none mt-2">
                                      SPORTS
                                    </span>
                                  </div>
                                </div>

                                {/* Store Details Badge on sign */}
                                <div className="text-right flex flex-col items-end border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 text-gray-400 font-mono uppercase">
                                  <span className="text-[9px] tracking-widest text-white/90">ELITE EQUIPMENT HUBS</span>
                                  <span className="text-[8px] tracking-wider text-gray-500 mt-1">VILLANKURICHI, CBE</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono text-center">
                              Acrylic back-lit signage. Standard 12'x4' board concept featuring saffron highlight backing glow.
                            </p>
                          </div>
                        )}

                        {/* 2. BUSINESS CARD MOCKUP */}
                        {selectedMockup === "card" && (
                          <div className="w-full flex flex-col items-center gap-8">
                            {/* Front and back of Business Card */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
                              {/* Front */}
                              <div className="h-52 bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/5 rounded-full blur-xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#138808]/5 rounded-full blur-xl" />
                                <LogoFull iconSize="sm" />
                                <div className="space-y-1">
                                  <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                                    ELITE STORE SHOWROOM
                                  </p>
                                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                                    Villankurichi, Coimbatore
                                  </p>
                                </div>
                              </div>

                              {/* Back */}
                              <div className="h-52 bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                                <div className="flex justify-between items-start">
                                  <div className="flex flex-col">
                                    <span className="text-[10px] font-mono font-bold text-white tracking-widest">STORE REPRESENTATIVE</span>
                                    <span className="text-[8px] font-mono text-brand-saffron uppercase mt-0.5">Showroom Specialist</span>
                                  </div>
                                  <LogoIcon iconSize="sm" />
                                </div>
                                <div className="space-y-1.5 font-mono text-[9px] text-gray-400 uppercase">
                                  <p className="flex items-center gap-1.5">
                                    <span className="text-[#FF9933]">•</span> {BRAND_DETAILS.phone}
                                  </p>
                                  <p className="flex items-center gap-1.5">
                                    <span className="text-white">•</span> {BRAND_DETAILS.email}
                                  </p>
                                  <p className="text-gray-500 leading-tight leading-relaxed text-[8px] mt-2 border-t border-white/5 pt-1.5">
                                    VRS Nagar, Villankurichi Rd, CBE - 35
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono text-center">
                              Premium 400GSM matte black cardstock with gold-stamped chevron foils.
                            </p>
                          </div>
                        )}

                        {/* 3. STAFF T-SHIRT MOCKUP */}
                        {selectedMockup === "shirt" && (
                          <div className="w-full flex flex-col items-center gap-6">
                            <div className="relative w-72 h-80 bg-neutral-900 border border-white/5 rounded-3xl flex flex-col items-center justify-center p-6 shadow-2xl">
                              {/* Polo Neck collar decoration */}
                              <div className="absolute top-0 w-32 h-10 border-b-2 border-brand-saffron/80 bg-black rounded-b-xl flex items-center justify-center">
                                <div className="w-full h-1 bg-white absolute top-1" />
                                <div className="w-full h-1 bg-brand-green absolute bottom-1" />
                              </div>

                              {/* T-Shirt illustration mockup */}
                              <div className="text-center space-y-4">
                                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">LEFT BREAST EMBROIDERY</span>
                                <div className="inline-block p-4 bg-black/60 rounded-full border border-white/10 shadow-lg">
                                  <LogoIcon iconSize="lg" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-white">JAI HIND</span>
                                  <span className="text-[8px] font-mono tracking-[0.3em] text-gray-500 mt-1 uppercase">CREW STAFF</span>
                                </div>
                              </div>

                              <div className="absolute bottom-4 flex gap-1 items-center">
                                <span className="w-2 h-2 bg-[#FF9933] rounded-full" />
                                <span className="w-2 h-2 bg-white rounded-full" />
                                <span className="w-2 h-2 bg-[#138808] rounded-full" />
                                <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest pl-1">Embroidery Spec</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono text-center">
                              100% combed cotton high-performance athletic athletic wear. Tricolour trim cuff/collar.
                            </p>
                          </div>
                        )}

                        {/* 4. SHOPPING BAG MOCKUP */}
                        {selectedMockup === "bag" && (
                          <div className="w-full flex flex-col items-center gap-6">
                            <div className="relative w-64 h-80 bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                              {/* String bag handle decoration */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 border-t-4 border-l-4 border-r-4 border-[#FF9933]/50 rounded-t-full -mt-4" />
                              
                              <div className="text-center pt-8">
                                <LogoVertical iconSize="xl" />
                              </div>

                              <div className="flex justify-between items-center border-t border-white/5 pt-4 font-mono text-[8px] text-gray-500 uppercase">
                                <span>COIMBATORE HUB</span>
                                <span>100% RECYCLABLE</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono text-center">
                              Matte black premium shopping bag. Dynamic Logo embossed in gold foil. Saffron handle strap.
                            </p>
                          </div>
                        )}

                        {/* 5. INVOICE LAYOUT MOCKUP */}
                        {selectedMockup === "invoice" && (
                          <div className="w-full flex flex-col items-center gap-6">
                            <div className="w-full bg-white border border-neutral-300 rounded-2xl p-6 text-black flex flex-col justify-between shadow-2xl aspect-[3/4] max-w-sm">
                              {/* Header */}
                              <div className="flex justify-between items-start border-b border-neutral-200 pb-4">
                                <div className="flex flex-col text-left">
                                  <h2 className="text-sm font-black tracking-widest font-sans uppercase leading-none">JAI HIND</h2>
                                  <span className="text-[7px] font-mono tracking-[0.3em] text-neutral-500 uppercase mt-1 leading-none">SPORTS</span>
                                  <p className="text-[7px] text-neutral-400 mt-2 font-mono leading-tight max-w-[150px]">
                                    {BRAND_DETAILS.address}
                                  </p>
                                </div>
                                <LogoIcon iconSize="sm" />
                              </div>

                              {/* Bill info */}
                              <div className="py-4 flex justify-between text-[7px] font-mono border-b border-neutral-100 uppercase">
                                <div className="space-y-1">
                                  <p className="text-neutral-500">BILLED TO:</p>
                                  <p className="font-bold text-neutral-800">CASH BILL / ATHLETE</p>
                                  <p className="text-neutral-400">Coimbatore, Tamil Nadu</p>
                                </div>
                                <div className="text-right space-y-1">
                                  <p><span className="text-neutral-500">INVOICE NO:</span> JHS-2026-9811</p>
                                  <p><span className="text-neutral-500">DATE:</span> {new Date().toLocaleDateString('en-IN')}</p>
                                </div>
                              </div>

                              {/* Items Table */}
                              <div className="flex-grow py-4">
                                <table className="w-full text-left text-[7px] font-mono uppercase">
                                  <thead>
                                    <tr className="border-b border-neutral-200 text-neutral-500 font-bold">
                                      <th className="py-1">DESCRIPTION</th>
                                      <th className="py-1 text-right">QTY</th>
                                      <th className="py-1 text-right">RATE</th>
                                      <th className="py-1 text-right">AMOUNT</th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-neutral-800">
                                    <tr className="border-b border-neutral-100">
                                      <td className="py-1.5 font-bold">CRICKET BAT ELITE ENGLISH WILLOW</td>
                                      <td className="py-1.5 text-right">1</td>
                                      <td className="py-1.5 text-right">₹18,500.00</td>
                                      <td className="py-1.5 text-right font-bold">₹18,500.00</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                      <td className="py-1.5 font-bold">YONEX ASTROX 99 PRO BADMINTON RACQUET</td>
                                      <td className="py-1.5 text-right">2</td>
                                      <td className="py-1.5 text-right">₹12,200.00</td>
                                      <td className="py-1.5 text-right font-bold">₹24,400.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Total summary */}
                              <div className="border-t border-neutral-200 pt-3 flex justify-between items-center text-[8px] font-mono">
                                <span className="font-bold text-neutral-500 uppercase">Grand Total:</span>
                                <span className="text-[10px] font-black text-black">₹42,900.00</span>
                              </div>

                              {/* Footer signoff */}
                              <div className="border-t border-neutral-100 pt-3 flex justify-between items-end text-[6px] text-neutral-400 font-mono">
                                <div>
                                  <p className="font-bold text-neutral-500">MADE WITH PASSION IN CBE</p>
                                  <p className="mt-0.5">THANK YOU FOR YOUR PATRONAGE!</p>
                                </div>
                                <div className="text-right border-t border-neutral-300 w-20 pt-1 uppercase">
                                  AUTHORIZED SIG
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono text-center">
                              Official GST-registered billing layout with clean grid alignment and header integration.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Unified design tokens section */}
      <section className="bg-[#0b0b0b] border-t border-white/5 py-16 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brand-green/2 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase flex items-center gap-2">
              <Info className="w-5 h-5 text-[#FF9933]" />
              Visual Design Token Architecture
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-2">
              To guarantee that any future web view, mobile application, or landing page maintains absolute brand alignment, use the following standardized design tokens:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Token 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-brand-saffron uppercase">SPACING SYSTEM</h4>
              <ul className="text-xs text-gray-400 space-y-1.5 font-mono">
                <li>• Section Padding: py-16 md:py-24</li>
                <li>• Container Max-Width: max-w-7xl</li>
                <li>• Grid Gap Standard: gap-6 md:gap-12</li>
                <li>• Vertical Rhythm: space-y-8</li>
              </ul>
            </div>

            {/* Token 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">SHADOWS & GLOWS</h4>
              <ul className="text-xs text-gray-400 space-y-1.5 font-mono">
                <li>• Card Shadow: shadow-xl shadow-black/40</li>
                <li>• Glow Color: rgba(255,153,51,0.15)</li>
                <li>• Saffron Glow: shadow-[0_0_25px_rgba(255,153,51,0.15)]</li>
                <li>• Border Style: border-white/10</li>
              </ul>
            </div>

            {/* Token 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-brand-green uppercase">TRANSITIONS</h4>
              <ul className="text-xs text-gray-400 space-y-1.5 font-mono">
                <li>• Hover Scaling: scale-105 hover:bg-white/5</li>
                <li>• Standard timing: duration-300</li>
                <li>• Premium Easing: ease-in-out</li>
                <li>• Route animation: motion transition</li>
              </ul>
            </div>

            {/* Token 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">INTERACTION BEHAVIOR</h4>
              <ul className="text-xs text-gray-400 space-y-1.5 font-mono">
                <li>• Buttons height: h-12 (48px targets)</li>
                <li>• WhatsApp touch: h-14 w-14 (56px targets)</li>
                <li>• Corner radius: rounded-2xl (16px)</li>
                <li>• Active link indicator: Tricolour bar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
