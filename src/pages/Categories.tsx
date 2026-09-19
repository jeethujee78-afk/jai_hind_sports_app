/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  MessageSquare,
  ShoppingBag,
  CheckCircle2,
  Filter,
  X,
  Sparkles,
  ChevronRight,
  Trophy
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import { SPORTS_LIST, PRODUCTS_LIST } from "../data/products";
import { Product, SportDefinition } from "../types";
import SEO from "../components/SEO";

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlSport = searchParams.get("sport");
  const urlBrand = searchParams.get("brand");
  const urlCategory = searchParams.get("category");

  // Default to first sport (Cricket) or url param
  const [selectedSportName, setSelectedSportName] = useState<string>(() => {
    if (urlSport) {
      const match = SPORTS_LIST.find(s => s.name.toLowerCase() === urlSport.toLowerCase());
      if (match) return match.name;
    }
    return "Cricket";
  });

  const [selectedBrand, setSelectedBrand] = useState<string | null>(urlBrand || null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(urlCategory || null);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Sync state if URL changes externally
  useEffect(() => {
    if (urlSport) {
      const match = SPORTS_LIST.find(s => s.name.toLowerCase() === urlSport.toLowerCase());
      if (match) setSelectedSportName(match.name);
    }
    if (urlBrand !== undefined) setSelectedBrand(urlBrand || null);
    if (urlCategory !== undefined) setSelectedCategory(urlCategory || null);
  }, [urlSport, urlBrand, urlCategory]);

  const currentSportDef = useMemo(() => {
    return SPORTS_LIST.find(s => s.name.toLowerCase() === selectedSportName.toLowerCase()) || SPORTS_LIST[0];
  }, [selectedSportName]);

  // Dynamically derive categories ONLY present in this sport
  const availableCategories = useMemo(() => {
    const sportProds = PRODUCTS_LIST.filter(
      p => p.sport.toLowerCase() === selectedSportName.toLowerCase()
    );
    const set = new Set<string>();
    sportProds.forEach(p => set.add(p.category));
    return Array.from(set).sort();
  }, [selectedSportName]);

  // Dynamically derive brands ONLY present in this sport from actual products
  const availableBrands = useMemo(() => {
    const sportProds = PRODUCTS_LIST.filter(
      p => p.sport.toLowerCase() === selectedSportName.toLowerCase()
    );
    const set = new Set<string>();
    sportProds.forEach(p => set.add(p.brand));
    return Array.from(set).sort();
  }, [selectedSportName]);

  // Reset or validate brand and category when switching sports
  const handleSportChange = (sportName: string) => {
    setSelectedSportName(sportName);
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSearchParams({ sport: sportName });
  };

  const handleBrandChange = (brand: string | null) => {
    setSelectedBrand(brand);
    const params: Record<string, string> = { sport: selectedSportName };
    if (brand) params.brand = brand;
    if (selectedCategory) params.category = selectedCategory;
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    const params: Record<string, string> = { sport: selectedSportName };
    if (selectedBrand) params.brand = selectedBrand;
    if (category) params.category = category;
    setSearchParams(params);
  };

  // Filter products for this sport using strict AND logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter(product => {
      if (product.sport.toLowerCase() !== selectedSportName.toLowerCase()) {
        return false;
      }
      if (selectedBrand && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      if (selectedCategory && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [selectedSportName, selectedBrand, selectedCategory]);

  const getProductWhatsAppUrl = (product: Product) => {
    const text = `Hi Jai Hind Sports, I am checking availability for: ${product.brand} ${product.name} (${product.category}) in Coimbatore. Can you share current stock and pricing?`;
    return `${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${selectedSportName} Sports Equipment | JAI HIND SPORTS Coimbatore`,
    "description": `Browse genuine ${selectedSportName} gear, certified brands, and equipment at Jai Hind Sports, Coimbatore.`
  };

  return (
    <div className="min-h-screen bg-[#070707] text-gray-100 selection:bg-[#FF9933]/30 selection:text-white py-8 sm:py-12 px-4 sm:px-8">
      <SEO 
        title={`${selectedSportName} Equipment & Authorized Brands | JAI HIND SPORTS`}
        description={`Explore genuine ${selectedSportName} equipment in Coimbatore. Authorized brands: ${availableBrands.join(", ")}. In-store testing and WhatsApp consultations.`}
        keywords={`${selectedSportName} Coimbatore, Jai Hind Sports, ${availableBrands.join(", ")}, sports equipment Vilankurichi`}
        canonicalUrl="https://jaihindsports.in/categories"
        jsonLd={JSON_LD_DATA}
      />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ============================================================ */}
        {/* 1. TOP HEADER & SPORT PICKER TABS                            */}
        {/* ============================================================ */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF9933] uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                <span>SPORTS DISCOVERY LAYER</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white uppercase font-display mt-0.5">
                DISCOVER BY SPORT
              </h1>
            </div>

            <Link
              to="/products"
              className="text-xs font-bold text-gray-400 hover:text-[#FF9933] transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Go to Universal Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 8 Sports Selector Bar (Single-tap discovery) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {SPORTS_LIST.map((sport) => {
              const isSelected = sport.name.toLowerCase() === selectedSportName.toLowerCase();
              return (
                <button
                  key={sport.id}
                  onClick={() => handleSportChange(sport.name)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold text-xs whitespace-nowrap transition-all cursor-pointer flex-shrink-0 border ${
                    isSelected
                      ? "bg-[#FF9933] text-black font-bold border-[#FF9933] shadow-md shadow-[#FF9933]/20 scale-102"
                      : "bg-[#121212] text-gray-300 hover:text-white hover:bg-[#1a1a1a] border-white/10"
                  }`}
                >
                  <span className="text-base">{sport.iconSymbol}</span>
                  <span className="uppercase tracking-wide">{sport.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. SELECTED SPORT DETAIL & CONTEXTUAL DISCOVERY CARD         */}
        {/* ============================================================ */}
        <div className="rounded-3xl bg-[#0e0e0e] border border-white/10 p-5 sm:p-8 space-y-6 shadow-xl">
          
          {/* Sport Title & Gear Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{currentSportDef.iconSymbol}</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
                    {currentSportDef.name}
                  </h2>
                  <p className="text-xs font-mono text-[#FF9933] font-semibold">
                    {currentSportDef.highlight}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl pt-1">
                {currentSportDef.description}
              </p>
            </div>

            {/* Quick Action to open in Shop */}
            <button
              onClick={() => {
                navigate(`/products?sport=${encodeURIComponent(selectedSportName)}${
                  selectedBrand ? `&brand=${encodeURIComponent(selectedBrand)}` : ""
                }${selectedCategory ? `&subcategory=${encodeURIComponent(selectedCategory)}` : ""}`);
              }}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 self-start md:self-auto transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#FF9933]" />
              <span>Open in Shop with Filters</span>
            </button>
          </div>

          {/* SECTION A: SHOP BY CATEGORY */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                SHOP BY CATEGORY IN {selectedSportName.toUpperCase()}
              </span>
              {selectedCategory && (
                <button
                  onClick={() => handleCategoryChange(null)}
                  className="text-[11px] text-[#FF9933] hover:underline font-mono"
                >
                  Clear Category
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  !selectedCategory
                    ? "bg-white text-black font-bold"
                    : "bg-white/5 text-gray-300 hover:text-white border border-white/5"
                }`}
              >
                All {selectedSportName} Categories
              </button>

              {availableCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(isSelected ? null : cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[#138808] text-white border-emerald-500 font-bold shadow-sm"
                        : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION B: BRANDS AVAILABLE (DERIVED STRICTLY FROM SPORT'S PRODUCTS) */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                BRANDS AVAILABLE FOR {selectedSportName.toUpperCase()}
              </span>
              {selectedBrand && (
                <button
                  onClick={() => handleBrandChange(null)}
                  className="text-[11px] text-[#FF9933] hover:underline font-mono"
                >
                  Clear Brand Filter
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => handleBrandChange(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  !selectedBrand
                    ? "bg-[#FF9933] text-black font-bold"
                    : "bg-white/5 text-gray-300 hover:text-white border border-white/5"
                }`}
              >
                All Brands ({availableBrands.join(", ")})
              </button>

              {availableBrands.map((brand) => {
                const isSelected = selectedBrand === brand;
                return (
                  <button
                    key={brand}
                    onClick={() => handleBrandChange(isSelected ? null : brand)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[#FF9933] text-black border-[#FF9933] shadow-md shadow-[#FF9933]/20"
                        : "bg-[#161616] text-white hover:border-[#FF9933]/40 border-white/10"
                    }`}
                  >
                    {brand}
                  </button>
                );
              })}
            </div>
            
            <p className="text-[11px] text-gray-400 italic">
              Showing only authorized manufacturers that have certified products for {selectedSportName}.
            </p>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. FILTERED SPORT PRODUCTS GRID                              */}
        {/* ============================================================ */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-white uppercase font-display">
                {selectedSportName} Products
              </h3>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-white/10 text-gray-300">
                {filteredProducts.length} items
              </span>
            </div>

            {/* Active filters summary */}
            {(selectedBrand || selectedCategory) && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400">Filters:</span>
                {selectedBrand && (
                  <span className="px-2 py-0.5 rounded bg-[#FF9933]/20 text-[#FF9933] font-semibold flex items-center gap-1">
                    {selectedBrand}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => handleBrandChange(null)} />
                  </span>
                )}
                {selectedCategory && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1">
                    {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange(null)} />
                  </span>
                )}
              </div>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-12 rounded-2xl bg-[#111111] border border-white/10 text-center space-y-4">
              <p className="text-gray-300 text-sm">
                No products found matching both <strong className="text-white">{selectedBrand}</strong> and <strong className="text-white">{selectedCategory}</strong> in {selectedSportName}.
              </p>
              <button
                onClick={() => {
                  setSelectedBrand(null);
                  setSelectedCategory(null);
                }}
                className="px-4 py-2 rounded-xl bg-[#FF9933] text-black font-bold text-xs uppercase"
              >
                Reset Filters for {selectedSportName}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FF9933]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
                >
                  {/* Visual Header / Canvas */}
                  <div 
                    onClick={() => setActiveModalProduct(product)}
                    className={`relative h-36 w-full bg-gradient-to-br ${product.visualGradient} flex items-center justify-center p-4 cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                    {/* Sport/Item Icon */}
                    <span className="relative text-5xl select-none group-hover:scale-110 transition-transform duration-300">
                      {product.iconSymbol}
                    </span>

                    {/* Brand Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-black/80 text-white border border-white/10">
                        {product.brand}
                      </span>
                    </div>

                    {/* Status Tag */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-[#FF9933]/90 text-black">
                        {product.status}
                      </span>
                    </div>

                    {/* Availability Pill */}
                    <div className="absolute bottom-2 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {product.availability}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 mb-1">
                        <span className="text-[#FF9933] font-semibold">{product.sport}</span>
                        <span>•</span>
                        <span>{product.category}</span>
                      </div>

                      <h4 
                        onClick={() => setActiveModalProduct(product)}
                        className="text-base font-bold text-white group-hover:text-[#FF9933] transition-colors leading-snug cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h4>

                      <p className="text-xs text-gray-300 mt-1 line-clamp-2 font-normal leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-semibold border border-white/10 transition-colors text-center"
                      >
                        Specs
                      </button>

                      <a
                        href={getProductWhatsAppUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2.5 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 text-center"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

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
                <h4 className="text-xs font-mono uppercase text-gray-400 font-semibold">Key Features</h4>
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
                  const brand = activeModalProduct.brand;
                  setActiveModalProduct(null);
                  navigate(`/products?sport=${encodeURIComponent(sport)}&brand=${encodeURIComponent(brand)}`);
                }}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
              >
                View in Shop
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
