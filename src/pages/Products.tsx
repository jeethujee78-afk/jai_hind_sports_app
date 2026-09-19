/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { 
  Search, 
  MessageSquare, 
  Phone, 
  X, 
  RotateCcw, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  Info,
  Filter,
  ArrowRight,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { STORE_DETAILS, normalizeBrand } from "../constants";
import { PRODUCTS_LIST, SPORTS_LIST, Product } from "../data/products";
import SEO from "../components/SEO";

// Core sport filters (8 core sports)
const SPORT_OPTIONS = [
  { id: "all", name: "All Sports", icon: "🏅" },
  { id: "Cricket", name: "Cricket", icon: "🏏" },
  { id: "Badminton", name: "Badminton", icon: "🏸" },
  { id: "Football", name: "Football", icon: "⚽" },
  { id: "Basketball", name: "Basketball", icon: "🏀" },
  { id: "Volleyball", name: "Volleyball", icon: "🏐" },
  { id: "Fitness", name: "Fitness", icon: "💪" },
  { id: "Athletics & Running", name: "Athletics & Running", icon: "🏃" },
  { id: "School Sports", name: "School Sports", icon: "🏆" },
];

const BRAND_OPTIONS = [
  "SG",
  "SS",
  "MRF",
  "Yonex",
  "Li-Ning",
  "Nivia",
  "Cosco",
  "Vector X",
  "Nike",
  "Adidas",
  "Puma"
];

function resolveBrand(input: string | null | undefined): string | null {
  if (!input || !input.trim()) return null;
  const norm = normalizeBrand(input).toLowerCase();
  const matched = BRAND_OPTIONS.find((b) => b.toLowerCase() === norm);
  return matched || null;
}

function resolveSport(input: string | null | undefined): string | null {
  if (!input || !input.trim()) return null;
  const clean = input.trim().toLowerCase();
  if (clean === "all" || clean === "all sports") return null;
  const matched = SPORT_OPTIONS.find(
    (s) => s.id.toLowerCase() === clean || s.name.toLowerCase() === clean
  );
  if (matched && matched.id !== "all") return matched.id;
  // Fallbacks for legacy mappings
  if (clean.includes("cricket")) return "Cricket";
  if (clean.includes("badminton")) return "Badminton";
  if (clean.includes("football")) return "Football";
  if (clean.includes("basketball")) return "Basketball";
  if (clean.includes("volleyball")) return "Volleyball";
  if (clean.includes("gym") || clean.includes("fitness")) return "Fitness";
  if (clean.includes("running") || clean.includes("athletic") || clean.includes("track")) return "Athletics & Running";
  if (clean.includes("school")) return "School Sports";
  return null;
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const catalogRef = useRef<HTMLDivElement>(null);

  // Initialize filters from URL query parameters or location state
  const initialSport = useMemo(() => {
    const fromUrl = searchParams.get("sport") || searchParams.get("category");
    const fromState = (location.state as any)?.sport || (location.state as any)?.category;
    return resolveSport(fromUrl || fromState);
  }, []);

  const initialBrand = useMemo(() => {
    const fromUrl = searchParams.get("brand");
    const fromState = (location.state as any)?.brand;
    return resolveBrand(fromUrl || fromState);
  }, []);

  const initialSubcategory = useMemo(() => {
    const fromUrl = searchParams.get("subcategory");
    const fromState = (location.state as any)?.subcategory;
    return (fromUrl || fromState || "").trim() || null;
  }, []);

  const initialSearch = useMemo(() => {
    const fromUrl = searchParams.get("q") || searchParams.get("search");
    const fromState = (location.state as any)?.searchQuery;
    return (fromUrl || fromState || "").trim();
  }, []);

  // Filter States
  const [selectedSport, setSelectedSport] = useState<string | null>(initialSport);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(initialBrand);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(initialSubcategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(() => {
    const prodId = searchParams.get("product") || (location.state as any)?.selectedProduct;
    if (prodId) {
      return PRODUCTS_LIST.find((p) => p.id === prodId) || null;
    }
    return null;
  });

  // Keep state in sync with URL updates or back/forward navigation
  useEffect(() => {
    const urlSport = searchParams.get("sport") || searchParams.get("category");
    const stateSport = (location.state as any)?.sport || (location.state as any)?.category;
    const resolvedS = resolveSport(urlSport || stateSport);
    if (resolvedS !== undefined) setSelectedSport(resolvedS);

    const urlBrand = searchParams.get("brand");
    const stateBrand = (location.state as any)?.brand;
    const resolvedB = resolveBrand(urlBrand || stateBrand);
    if (resolvedB !== undefined) setSelectedBrand(resolvedB);

    const urlSub = searchParams.get("subcategory") || (location.state as any)?.subcategory;
    if (urlSub !== undefined) setSelectedSubcategory(urlSub ? urlSub.trim() : null);

    const urlQ = searchParams.get("q") || searchParams.get("search") || (location.state as any)?.searchQuery;
    if (urlQ !== undefined) setSearchQuery(urlQ ? urlQ.trim() : "");

    const urlProd = searchParams.get("product") || (location.state as any)?.selectedProduct;
    if (urlProd) {
      const prod = PRODUCTS_LIST.find((p) => p.id === urlProd);
      if (prod) setActiveModalProduct(prod);
    }
  }, [searchParams, location.state]);

  // Dynamically compute subcategories available for the currently selected sport
  const availableSubcategories = useMemo(() => {
    let pool = PRODUCTS_LIST;
    if (selectedSport) {
      pool = pool.filter((p) => p.sport.toLowerCase() === selectedSport.toLowerCase());
    }
    if (selectedBrand) {
      pool = pool.filter(
        (p) => normalizeBrand(p.brand).toLowerCase() === normalizeBrand(selectedBrand).toLowerCase()
      );
    }
    const set = new Set<string>();
    pool.forEach((p) => set.add(p.category));
    return Array.from(set).sort();
  }, [selectedSport, selectedBrand]);

  // Contextual brands available for the currently selected sport
  const sportRelevantBrands = useMemo(() => {
    if (!selectedSport) return BRAND_OPTIONS;
    const set = new Set<string>();
    PRODUCTS_LIST.forEach((p) => {
      if (p.sport.toLowerCase() === selectedSport.toLowerCase()) {
        const norm = resolveBrand(p.brand);
        if (norm) set.add(norm);
      }
    });
    return Array.from(set);
  }, [selectedSport]);

  // Check if current subcategory is still valid for this pool; if not, clear it
  useEffect(() => {
    if (selectedSubcategory && availableSubcategories.length > 0) {
      if (!availableSubcategories.includes(selectedSubcategory)) {
        setSelectedSubcategory(null);
      }
    }
  }, [availableSubcategories, selectedSubcategory]);

  // Main Filtering Logic
  const filteredProducts = useMemo(() => {
    const cleanSearch = searchQuery.trim().toLowerCase();

    return PRODUCTS_LIST.filter((product) => {
      // 1. Search Query Filter
      if (cleanSearch) {
        const inName = product.name.toLowerCase().includes(cleanSearch);
        const inBrand = product.brand.toLowerCase().includes(cleanSearch);
        const inSport = product.sport.toLowerCase().includes(cleanSearch);
        const inCategory = product.category.toLowerCase().includes(cleanSearch);
        const inDesc = product.description.toLowerCase().includes(cleanSearch);
        const inFeatures = product.features.some((f) => f.toLowerCase().includes(cleanSearch));
        if (!inName && !inBrand && !inSport && !inCategory && !inDesc && !inFeatures) {
          return false;
        }
      }

      // 2. Sport Filter
      if (selectedSport) {
        if (product.sport.toLowerCase() !== selectedSport.toLowerCase()) {
          return false;
        }
      }

      // 3. Brand Filter
      if (selectedBrand) {
        if (normalizeBrand(product.brand).toLowerCase() !== normalizeBrand(selectedBrand).toLowerCase()) {
          return false;
        }
      }

      // 4. Subcategory Filter
      if (selectedSubcategory) {
        if (product.category.toLowerCase() !== selectedSubcategory.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedSport, selectedBrand, selectedSubcategory]);

  // Synchronize state with URL search params without page reload
  const updateUrlParams = (newSport: string | null, newBrand: string | null, newSub: string | null, newQ: string) => {
    const params = new URLSearchParams();
    if (newSport) params.set("sport", newSport);
    if (newBrand) params.set("brand", newBrand);
    if (newSub) params.set("subcategory", newSub);
    if (newQ.trim()) params.set("q", newQ.trim());
    setSearchParams(params, { replace: true });
  };

  const handleSelectSport = (sportId: string | null) => {
    const next = sportId === "all" ? null : sportId;
    setSelectedSport(next);
    setSelectedSubcategory(null); // Reset subcategory when sport changes
    updateUrlParams(next, selectedBrand, null, searchQuery);
  };

  const handleSelectBrand = (brand: string | null) => {
    const next = brand;
    setSelectedBrand(next);
    updateUrlParams(selectedSport, next, selectedSubcategory, searchQuery);
  };

  const handleSelectSubcategory = (subcategory: string | null) => {
    const next = selectedSubcategory === subcategory ? null : subcategory;
    setSelectedSubcategory(next);
    updateUrlParams(selectedSport, selectedBrand, next, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateUrlParams(selectedSport, selectedBrand, selectedSubcategory, query);
  };

  const resetAllFilters = () => {
    setSelectedSport(null);
    setSelectedBrand(null);
    setSelectedSubcategory(null);
    setSearchQuery("");
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const hasActiveFilters = Boolean(
    selectedSport || selectedBrand || selectedSubcategory || searchQuery.trim()
  );

  // Helper for WhatsApp enquiry link
  const getProductWhatsAppLink = (product: Product) => {
    const msg = `Hello JAI HIND SPORTS! I would like to check availability and pricing for *${product.name}* (${product.brand} - ${product.category}). Showroom in Coimbatore.`;
    return `${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-white selection:bg-[#FF9933]/30 selection:text-white font-sans">
      
      <SEO 
        title="Shop Sports Equipment | JAI HIND SPORTS Coimbatore"
        description="Browse genuine Cricket bats (SG, SS, MRF), Yonex Badminton rackets, Nivia football gear, Cosco fitness equipment, and school sports kits at Jai Hind Sports."
        keywords="Sports Shop Coimbatore, Cricket Bat Coimbatore, Yonex Badminton Racket, Football Studs Coimbatore, Gym Equipment Coimbatore"
        canonicalUrl="https://jaihindsports.in/products"
      />

      {/* ============================================================ */}
      {/* 1. COMPACT PAGE HEADER                                       */}
      {/* ============================================================ */}
      <div className="pt-8 pb-6 px-4 sm:px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="max-w-3xl space-y-2">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF9933]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#138808]" />
            <span>100% Genuine Authorized Sports Equipment</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight">
            SPORTS CATALOGUE
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Filter by Sport, Brand, or Category. Click <strong className="text-[#138808] font-bold">"Ask on WhatsApp"</strong> on any item for quick availability and pricing at our Vilankurichi showroom.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#138808]" />
              Vilankurichi, Coimbatore
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
              Open 7 Days (9:30 AM – 9:00 PM)
            </span>
          </div>

        </div>
      </div>


      {/* ============================================================ */}
      {/* 2. STICKY FILTER BAR (Search + Sport + Brand + Active Pills)  */}
      {/* ============================================================ */}
      <div ref={catalogRef} className="sticky top-[60px] sm:top-[68px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 px-4 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-3">
          
          {/* Top Row: Search Input & Clear All */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-grow max-w-2xl">
              <Search className="w-5 h-5 text-[#FF9933] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search products, brands, or sports (e.g., SG bat, Yonex racket, studs, dumbbells)..."
                className="w-full pl-12 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
                  aria-label="Clear search text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-[#FF9933] uppercase tracking-wider transition-colors flex-shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            )}
          </div>

          {/* Row 1: Sport Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs sm:text-sm font-semibold">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider flex-shrink-0 mr-1 hidden sm:inline">
              Sport:
            </span>

            {SPORT_OPTIONS.map((sport) => {
              const isActive = (sport.id === "all" && !selectedSport) || (selectedSport === sport.id);
              return (
                <button
                  key={sport.id}
                  onClick={() => handleSelectSport(sport.id)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm ${
                    isActive
                      ? "bg-[#FF9933] text-white font-bold shadow-md shadow-[#FF9933]/20"
                      : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span>{sport.icon}</span>
                  <span>{sport.name}</span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Brand Filter Chips (Contextual to selected sport) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-medium text-gray-400">
            <span className="text-[11px] uppercase tracking-wider font-mono text-gray-400 flex-shrink-0 mr-1">
              {selectedSport ? `${selectedSport} Brands:` : "Brand:"}
            </span>

            {/* All Brands */}
            <button
              onClick={() => handleSelectBrand(null)}
              className={`px-3 py-1 rounded-lg transition-all whitespace-nowrap flex-shrink-0 text-xs cursor-pointer ${
                !selectedBrand
                  ? "bg-[#FF9933]/20 text-[#FF9933] font-bold border border-[#FF9933]/40"
                  : "bg-white/[0.03] text-gray-400 hover:text-gray-200 border border-transparent"
              }`}
            >
              All Brands
            </button>

            {/* If sport is selected, show sport-relevant brands first */}
            {selectedSport ? (
              <>
                {sportRelevantBrands.map((brand) => {
                  const isSelected = selectedBrand?.toLowerCase() === brand.toLowerCase();
                  return (
                    <button
                      key={brand}
                      onClick={() => handleSelectBrand(isSelected ? null : brand)}
                      className={`px-3 py-1 rounded-lg transition-all whitespace-nowrap flex-shrink-0 text-xs cursor-pointer border ${
                        isSelected
                          ? "bg-[#FF9933] text-white font-bold border-[#FF9933] shadow-sm shadow-[#FF9933]/20"
                          : "bg-white/5 text-white hover:bg-white/10 border-white/15"
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}

                {/* Show any remaining brands muted */}
                {BRAND_OPTIONS.filter((b) => !sportRelevantBrands.includes(b)).map((brand) => {
                  const isSelected = selectedBrand?.toLowerCase() === brand.toLowerCase();
                  return (
                    <button
                      key={brand}
                      onClick={() => handleSelectBrand(isSelected ? null : brand)}
                      className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap flex-shrink-0 text-xs cursor-pointer opacity-60 hover:opacity-100 ${
                        isSelected
                          ? "bg-[#FF9933] text-white font-bold shadow-sm"
                          : "bg-white/[0.02] text-gray-400 hover:text-gray-200 border border-transparent"
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}
              </>
            ) : (
              BRAND_OPTIONS.map((brand) => {
                const isSelected = selectedBrand?.toLowerCase() === brand.toLowerCase();
                return (
                  <button
                    key={brand}
                    onClick={() => handleSelectBrand(isSelected ? null : brand)}
                    className={`px-3 py-1 rounded-lg transition-all whitespace-nowrap flex-shrink-0 text-xs cursor-pointer ${
                      isSelected
                        ? "bg-[#FF9933] text-white font-bold shadow-sm shadow-[#FF9933]/20"
                        : "bg-white/[0.03] text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                  >
                    {brand}
                  </button>
                );
              })
            )}
          </div>

          {/* Row 3: Subcategory Pills (Appears when specific categories exist) */}
          {availableSubcategories.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
              <span className="text-[11px] uppercase tracking-wider font-mono text-gray-400 flex-shrink-0 mr-1">
                Category:
              </span>

              <button
                onClick={() => handleSelectSubcategory(null)}
                className={`px-2.5 py-0.5 rounded-md text-[11px] transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
                  !selectedSubcategory
                    ? "bg-white/20 text-white font-bold"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                All
              </button>

              {availableSubcategories.map((sub) => {
                const isSubActive = selectedSubcategory === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => handleSelectSubcategory(sub)}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      isSubActive
                        ? "bg-[#138808] text-white font-bold"
                        : "bg-white/5 text-gray-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          )}

          {/* Row 4: Active Filter Badges & Count */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/10 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#FF9933]" />
                Filters:
              </span>

              {selectedSport && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF9933]/15 border border-[#FF9933]/40 text-[#FF9933] text-xs font-semibold">
                  <span>Sport: {selectedSport}</span>
                  <button
                    onClick={() => handleSelectSport("all")}
                    className="hover:text-white p-0.5 cursor-pointer"
                    aria-label="Remove sport filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedBrand && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF9933]/15 border border-[#FF9933]/40 text-[#FF9933] text-xs font-semibold">
                  <span>Brand: {selectedBrand}</span>
                  <button
                    onClick={() => handleSelectBrand(null)}
                    className="hover:text-white p-0.5 cursor-pointer"
                    aria-label="Remove brand filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedSubcategory && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#138808]/15 border border-[#138808]/40 text-emerald-400 text-xs font-semibold">
                  <span>Category: {selectedSubcategory}</span>
                  <button
                    onClick={() => handleSelectSubcategory(null)}
                    className="hover:text-white p-0.5 cursor-pointer"
                    aria-label="Remove subcategory filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-xs font-semibold">
                  <span>Search: "{searchQuery}"</span>
                  <button
                    onClick={() => handleSearchChange("")}
                    className="hover:text-white p-0.5 cursor-pointer"
                    aria-label="Remove search filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {!hasActiveFilters && (
                <span className="text-gray-500 text-[11px]">All sports and authorized brands shown</span>
              )}
            </div>

            {/* Product Count */}
            <div className="text-xs font-mono font-bold text-gray-300">
              Showing <span className="text-[#FF9933]">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "product" : "products"}
            </div>
          </div>

        </div>
      </div>


      {/* ============================================================ */}
      {/* 3. PRODUCT CATALOGUE GRID                                    */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        
        {filteredProducts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 px-4 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            
            <h3 className="text-xl font-bold text-white uppercase font-display">
              No Matching Products Found
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              We couldn't find items matching your combination {selectedBrand ? `of brand "${selectedBrand}"` : ""} {selectedSport ? `for sport "${selectedSport}"` : ""}.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                onClick={resetAllFilters}
                className="px-5 py-2.5 rounded-xl bg-[#FF9933] hover:bg-[#FF8000] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>

              <a
                href={`${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(
                  `Hello JAI HIND SPORTS! I am looking for ${selectedBrand || ""} ${selectedSport || ""} equipment in Coimbatore. Can you help?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FF9933]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[#FF9933]/5"
              >
                {/* Visual Header / Gradient Canvas */}
                <div 
                  onClick={() => setActiveModalProduct(product)}
                  className={`relative h-36 sm:h-40 w-full bg-gradient-to-br ${product.visualGradient} flex items-center justify-center p-4 cursor-pointer overflow-hidden`}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                  {/* Sport/Item Icon Symbol */}
                  <span className="relative text-5xl sm:text-6xl select-none group-hover:scale-110 transition-transform duration-300">
                    {product.iconSymbol}
                  </span>

                  {/* Brand Tag Top-Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-black bg-black/80 text-white border border-white/10">
                      {product.brand}
                    </span>
                  </div>

                  {/* Status Tag Top-Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                      product.status === "Popular"
                        ? "bg-[#FF9933]/90 text-black"
                        : product.status === "Premium"
                        ? "bg-amber-400 text-black"
                        : product.status === "New Arrival"
                        ? "bg-cyan-400 text-black"
                        : "bg-white/20 text-white"
                    }`}>
                      {product.status}
                    </span>
                  </div>

                  {/* Availability Pill Bottom-Left */}
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
                    {/* Sport & Category Breadcrumb */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-1">
                      <span className="text-[#FF9933] font-semibold">{product.sport}</span>
                      <span>•</span>
                      <span>{product.category}</span>
                    </div>

                    {/* Product Name */}
                    <h3 
                      onClick={() => setActiveModalProduct(product)}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF9933] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 font-normal leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Bullet Points */}
                    {product.features.length > 0 && (
                      <ul className="mt-2.5 space-y-1 text-[11px] text-gray-400 border-t border-white/5 pt-2">
                        {product.features.slice(0, 2).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                            <span className="text-[#FF9933]">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    
                    {/* 1. Direct WhatsApp Enquiry (Primary) */}
                    <a
                      href={getProductWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask on WhatsApp</span>
                    </a>

                    {/* 2. View Details / Specs */}
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/5"
                    >
                      <Info className="w-3.5 h-3.5 text-[#FF9933]" />
                      <span>View Specifications</span>
                    </button>

                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>


      {/* ============================================================ */}
      {/* 4. PRODUCT DETAILS MODAL (Specifications & Inquiry)           */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#121212] border border-white/20 p-6 sm:p-8 shadow-2xl space-y-5 my-8 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 pr-8">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#FF9933]/20 text-[#FF9933] font-bold">
                    {activeModalProduct.brand}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">{activeModalProduct.sport}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{activeModalProduct.category}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white uppercase font-display leading-tight">
                  {activeModalProduct.name}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9933] font-bold">
                  Key Features:
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {activeModalProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#138808] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              {activeModalProduct.specifications && Object.keys(activeModalProduct.specifications).length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#138808] font-bold">
                    Specifications:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    {Object.entries(activeModalProduct.specifications).map(([key, val]) => (
                      <div key={key}>
                        <span className="text-gray-400 block text-[11px] font-mono">{key}:</span>
                        <span className="text-white font-semibold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes / Options */}
              {activeModalProduct.sizes && activeModalProduct.sizes.length > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-400 font-mono">Available Sizes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProduct.sizes.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Policy Notice */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 text-[#FF9933] font-bold">
                  <Info className="w-4 h-4" />
                  <span>Physical Store Stock Policy</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug">
                  To ensure exact size and weight match for bats or shoes, please verify current availability with our showroom team before traveling.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getProductWhatsAppLink(activeModalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check Availability on WhatsApp</span>
                </a>

                <a
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#FF9933]" />
                  <span>Call Store</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
