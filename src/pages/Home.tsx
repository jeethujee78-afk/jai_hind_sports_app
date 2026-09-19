/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShoppingBag, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Wrench,
  Users,
  X,
  ExternalLink
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import { SPORTS_LIST, PRODUCTS_LIST } from "../data/products";
import { Product } from "../types";
import SEO from "../components/SEO";

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Jai Hind Sports",
  "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2/17, VRS Nagar, Vilankurichi",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641035",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0425",
    "longitude": "77.0153"
  },
  "url": "https://jaihindsports.in",
  "telephone": "+919842212345",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:30",
      "closes": "20:30"
    }
  ],
  "priceRange": "₹₹"
};

// Curated 6 real featured products from the catalogue
const FEATURED_PRODUCT_IDS = [
  "cri-sg-players-edition",     // SG Grade 1 English Willow
  "bad-yonex-astrox-99-pro",    // Yonex Astrox 99 Pro
  "cri-ss-ton-gladiator",       // SS TON Gladiator Bat
  "bad-yonex-nanoflare-800",    // Yonex Nanoflare 800
  "ftb-nivia-shining-star",     // Nivia Football
  "fit-vx-cast-iron-dumbbell"   // Vector X Dumbbell Set
];

const SPORT_IMAGES: Record<string, string> = {
  Cricket: "/images/sports/cricket.jpg",
  Badminton: "/images/sports/badminton.jpg",
  Football: "/images/sports/football.jpg",
  Basketball: "/images/sports/basketball.jpg",
  Volleyball: "/images/sports/volleyball.jpg",
  Fitness: "/images/sports/fitness.jpg",
  "Athletics & Running": "/images/sports/running.jpg",
  "School Sports": "/images/sports/school.jpg"
};

const SPORT_REMOTE_FALLBACKS: Record<string, string> = {
  Cricket: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
  Badminton: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=600&auto=format&fit=crop",
  Football: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
  Basketball: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
  Volleyball: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop",
  Fitness: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  "Athletics & Running": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
  "School Sports": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop"
};

export default function Home() {
  const navigate = useNavigate();
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Derive real featured products from PRODUCTS_LIST
  const featuredProducts = React.useMemo(() => {
    return FEATURED_PRODUCT_IDS.map(id => PRODUCTS_LIST.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);
  }, []);

  const handleSportSelect = (sportName: string) => {
    navigate(`/categories?sport=${encodeURIComponent(sportName)}`);
  };

  const getProductWhatsAppUrl = (product: Product) => {
    const text = `Hi Jai Hind Sports, I am checking availability for: ${product.brand} ${product.name} (${product.category}) in Coimbatore. Can you share current stock and pricing?`;
    return `${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#070707] text-gray-100 selection:bg-[#FF9933]/30 selection:text-white">
      <SEO 
        title="JAI HIND SPORTS | Coimbatore's Sports Destination"
        description="Coimbatore's trusted sports showroom since 2012. Genuine cricket bats, Yonex badminton gear with electronic stringing, football studs, gym equipment & school sports."
        keywords="Sports Shop Coimbatore, Jai Hind Sports, Cricket Bats Coimbatore, Yonex Badminton Coimbatore, Vilankurichi, Sports Equipment Coimbatore"
        canonicalUrl="https://jaihindsports.in/"
        jsonLd={JSON_LD_DATA}
      />

      {/* ============================================================ */}
      {/* 1. HERO — SIMPLE, FOCUSED, SUBTLE TRICOLOUR ACCENT           */}
      {/* ============================================================ */}
      <section className="relative px-4 sm:px-8 pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-white/5 bg-gradient-to-b from-[#0f0f0f] via-[#090909] to-[#070707] overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#FF9933]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#138808]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Focused Messaging */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
                <span className="text-[#FF9933] font-bold">100% Genuine Gear</span>
                <span className="text-gray-400">• Coimbatore, Tamil Nadu</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.1]">
                  JAI HIND SPORTS
                </h1>
                
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
                  Everything you need for your game.
                </p>
              </div>

              {/* Sub-copy */}
              <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
                Coimbatore's trusted sports showroom since 2012. Genuine cricket, badminton, football, gym, and school athletic equipment sourced directly from certified brand distributors.
              </p>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0" />
                  <span>Authorized Brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF9933] flex-shrink-0" />
                  <span>Computer Gutting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0" />
                  <span>Open 7 Days</span>
                </div>
              </div>

              {/* Primary Call-to-Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                {/* Primary: Shop Products */}
                <Link
                  to="/products"
                  className="min-h-[46px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#FF8000] hover:from-[#FF8000] hover:to-[#FF9933] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF9933]/20 transition-all text-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>SHOP PRODUCTS</span>
                </Link>

                {/* Secondary: WhatsApp Us */}
                <a
                  href={STORE_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-6 py-3 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP US</span>
                </a>

                {/* Location Quick Link */}
                <Link
                  to="/about"
                  className="min-h-[46px] px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-all text-center"
                >
                  <MapPin className="w-4 h-4 text-[#FF9933]" />
                  <span>VISIT SHOWROOM</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Collage with Real Store Focus */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111111] p-3 shadow-2xl">
                <div className="grid grid-cols-2 gap-2.5">
                  <div 
                    onClick={() => handleSportSelect("Cricket")}
                    className="group relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                  >
                    <img 
                      src={SPORT_IMAGES["Cricket"]} 
                      alt="Cricket Gear" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== SPORT_REMOTE_FALLBACKS["Cricket"]) {
                          e.currentTarget.src = SPORT_REMOTE_FALLBACKS["Cricket"];
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">CRICKET</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => handleSportSelect("Badminton")}
                    className="group relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                  >
                    <img 
                      src={SPORT_IMAGES["Badminton"]} 
                      alt="Badminton Gear" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== SPORT_REMOTE_FALLBACKS["Badminton"]) {
                          e.currentTarget.src = SPORT_REMOTE_FALLBACKS["Badminton"];
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">BADMINTON</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => handleSportSelect("Football")}
                    className="group relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                  >
                    <img 
                      src={SPORT_IMAGES["Football"]} 
                      alt="Football Gear" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== SPORT_REMOTE_FALLBACKS["Football"]) {
                          e.currentTarget.src = SPORT_REMOTE_FALLBACKS["Football"];
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">FOOTBALL</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => handleSportSelect("Fitness")}
                    className="group relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                  >
                    <img 
                      src={SPORT_IMAGES["Fitness"]} 
                      alt="Fitness Gear" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== SPORT_REMOTE_FALLBACKS["Fitness"]) {
                          e.currentTarget.src = SPORT_REMOTE_FALLBACKS["Fitness"];
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">FITNESS</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 px-3 py-2 bg-white/[0.03] rounded-xl flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#138808]" />
                    Vilankurichi, Coimbatore
                  </span>
                  <span className="text-[#FF9933] font-semibold">Test In Showroom</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================ */}
      {/* 2. SHOP BY SPORT (PRIMARY DISCOVERY SYSTEM)                   */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#FF9933] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
              <span>SPORT FIRST DISCOVERY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display mt-1">
              SHOP BY SPORT
            </h2>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              Choose your sport to view matching match gear, authorized brands, and equipment.
            </p>
          </div>

          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF9933] hover:text-[#FFB366] transition-colors self-start sm:self-auto py-1"
          >
            <span>EXPLORE ALL SPORTS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Core Sports Grid: Clean visual cards with descriptive highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {SPORTS_LIST.map((sport) => (
            <div
              key={sport.id}
              onClick={() => handleSportSelect(sport.name)}
              className="group rounded-2xl bg-[#121212] hover:bg-[#181818] border border-white/10 hover:border-[#FF9933]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md cursor-pointer active:scale-98"
            >
              {/* Image Header */}
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-black/60">
                <img 
                  src={SPORT_IMAGES[sport.name] || SPORT_IMAGES["Cricket"]} 
                  alt={sport.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const fallback = SPORT_REMOTE_FALLBACKS[sport.name] || SPORT_REMOTE_FALLBACKS["Cricket"];
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                
                {/* Brand list pill */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/80 text-[#FF9933] border border-[#FF9933]/30">
                    {sport.brands.join(" • ")}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white font-display uppercase group-hover:text-[#FF9933] transition-colors leading-tight">
                    {sport.name}
                  </h3>
                  
                  {/* Descriptive gear summary (NO fake counts) */}
                  <p className="text-xs text-gray-300 font-medium mt-1 leading-snug">
                    {sport.itemCount}
                  </p>
                  <p className="text-[11px] text-gray-400 font-normal mt-1 line-clamp-2 leading-relaxed">
                    {sport.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FF9933] group-hover:text-white transition-colors">
                  <span className="uppercase text-[11px] tracking-wider">Browse {sport.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED PRODUCTS (REAL PRODUCTS FROM CATALOGUE)          */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#138808] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
                <span>IN-STORE HIGHLIGHTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display mt-1">
                FEATURED PRODUCTS
              </h2>
              <p className="text-gray-300 text-sm mt-1 max-w-xl">
                Real player favorites available at our Vilankurichi showroom. Hold, test, and consult before you purchase.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF9933] hover:text-[#FFB366] transition-colors self-start sm:self-auto py-1"
            >
              <span>VIEW FULL CATALOGUE</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Real Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FF9933]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                {/* Visual Header / Canvas */}
                <div 
                  onClick={() => setActiveModalProduct(product)}
                  className={`relative h-40 w-full bg-gradient-to-br ${product.visualGradient} flex items-center justify-center p-4 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                  {/* Sport/Item Icon */}
                  <span className="relative text-6xl select-none group-hover:scale-110 transition-transform duration-300">
                    {product.iconSymbol}
                  </span>

                  {/* Brand Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-black bg-black/80 text-white border border-white/10">
                      {product.brand}
                    </span>
                  </div>

                  {/* Status Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF9933]/90 text-black">
                      {product.status}
                    </span>
                  </div>

                  {/* Availability Pill */}
                  <div className="absolute bottom-2.5 left-3 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {product.availability}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-1">
                      <span className="text-[#FF9933] font-semibold">{product.sport}</span>
                      <span>•</span>
                      <span>{product.category}</span>
                    </div>

                    <h3 
                      onClick={() => setActiveModalProduct(product)}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF9933] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 font-normal leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-semibold border border-white/10 transition-colors text-center"
                    >
                      View Details
                    </button>

                    <a
                      href={getProductWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Check Stock</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHAT'S NEW / SHOWCASE PREVIEW                            */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#FF9933] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>SHOWROOM SERVICES & ARRIVALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display mt-1">
              WHAT'S NEW AT JAI HIND SPORTS
            </h2>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              Professional services and curated equipment highlights directly from our Vilankurichi showroom.
            </p>
          </div>

          <Link
            to="/showcase"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF9933] hover:text-[#FFB366] transition-colors self-start sm:self-auto py-1"
          >
            <span>VIEW ALL SHOWCASE</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Computer Stringing */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#138808]/20 text-[#138808] border border-[#138808]/30">
                  In-Store Service
                </span>
                <span className="text-xs text-gray-400">Badminton</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                Live Computerized Racket Stringing
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Electronic constant pull tensioning up to 30+ lbs with original Yonex BG65, BG65Ti, BG80, and Nanogy strings. Fast turnaround in Coimbatore.
              </p>
            </div>
            <Link
              to="/showcase"
              className="text-xs font-bold text-[#FF9933] hover:underline flex items-center gap-1"
            >
              <span>Learn about stringing options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Willow Bats */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF9933]/20 text-[#FF9933] border border-[#FF9933]/30">
                  Willow Spotlight
                </span>
                <span className="text-xs text-gray-400">Cricket</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                Handpicked English & Kashmir Willow Bats
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Handcrafted blades from SG, SS, and MRF with massive 38-40mm edges. Test pick-up balance and handle thickness in person before taking to the crease.
              </p>
            </div>
            <Link
              to="/categories?sport=Cricket"
              className="text-xs font-bold text-[#FF9933] hover:underline flex items-center gap-1"
            >
              <span>Explore Cricket Bats</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: School & Academy Bulk Supply */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Bulk & Academy
                </span>
                <span className="text-xs text-gray-400">School Sports</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                School Sports Day & Academy Kits
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Direct institutional sports supply for schools, PE departments, and local tournament organizers: agility ladders, saucer cones, relay batons, and team bibs.
              </p>
            </div>
            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Request Institutional Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY CHOOSE JAI HIND SPORTS                                */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-[#FF9933] uppercase">
              LOCAL RELIABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              WHY JAI HIND SPORTS
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto my-2" />
            <p className="text-gray-300 text-sm font-normal">
              Serving players, coaches, and sports parents across Coimbatore since 2012.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#FF9933] border border-white/10 w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white uppercase font-display">
                100% Genuine Gear
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Direct authorized sourcing from Yonex, SS, SG, Cosco, Nivia, and MRF with original tags and warranties.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#138808] border border-white/10 w-fit">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white uppercase font-display">
                Electronic Gutting
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Precision electronic badminton stringing machine in Vilankurichi with genuine Yonex strings and custom tensions.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#FF9933] border border-white/10 w-fit">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white uppercase font-display">
                Player-First Advice
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Hold bats to verify grain balance and weight distribution, try on shoes, and consult with experienced local sports staff.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#138808] border border-white/10 w-fit">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white uppercase font-display">
                Open 7 Days a Week
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Convenient morning and evening showroom hours to support early training and post-work shopping throughout the week.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. VISIT / CONTACT CTA                                       */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-18 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#141414] via-[#101010] to-[#141414] border border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#FF9933] uppercase tracking-widest">
              VISIT OR CONNECT
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase font-display leading-tight">
              READY TO PLAY YOUR BEST?
            </h2>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Check product availability online, consult on WhatsApp, or visit our Vilankurichi showroom to test grips, bats, and gear in person.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/products"
              className="min-h-[46px] px-6 py-3 rounded-xl bg-[#FF9933] hover:bg-[#FF8000] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>SHOP PRODUCTS</span>
            </Link>

            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-6 py-3 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>

            <Link
              to="/about"
              className="min-h-[46px] px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#FF9933]" />
              <span>SHOWROOM & TIMINGS</span>
            </Link>
          </div>

          <div className="pt-2 text-xs text-gray-400 flex flex-wrap items-center justify-center gap-4">
            <span>📍 Vilankurichi, Coimbatore</span>
            <span>•</span>
            <span>⏱️ Open Mon–Sat 9:30 AM–9:00 PM, Sun 10:30 AM–8:30 PM</span>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT SPECIFICATION MODAL                                  */}
      {/* ============================================================ */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModalProduct(null)}
        >
          <div 
            className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-lg p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="text-[#FF9933] font-bold">{activeModalProduct.brand}</span>
                  <span>•</span>
                  <span>{activeModalProduct.sport}</span>
                  <span>•</span>
                  <span>{activeModalProduct.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalProduct(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              {activeModalProduct.description}
            </p>

            {/* Features list */}
            {activeModalProduct.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-gray-400 font-semibold">Key Highlights</h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {activeModalProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF9933] mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Table */}
            {Object.keys(activeModalProduct.specifications).length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-gray-400 font-semibold">Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs bg-black/40 p-3 rounded-xl border border-white/5">
                  {Object.entries(activeModalProduct.specifications).map(([key, val]) => (
                    <div key={key} className="space-y-0.5">
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">{key}</span>
                      <span className="text-gray-200 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getProductWhatsAppUrl(activeModalProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  const sport = activeModalProduct.sport;
                  setActiveModalProduct(null);
                  navigate(`/products?sport=${encodeURIComponent(sport)}`);
                }}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
              >
                View More in {activeModalProduct.sport}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
