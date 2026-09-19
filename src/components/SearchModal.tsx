/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, MessageSquare, ShoppingBag } from "lucide-react";
import { PRODUCTS_LIST, Product } from "../data/products";
import { STORE_DETAILS } from "../constants";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_SUGGESTIONS = [
  "Cricket Bat",
  "Yonex Racket",
  "Football Studs",
  "Dumbbells",
  "Shuttlecock",
  "Volleyball",
  "Running Shoes",
  "School Sports"
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter products
  const searchResults = React.useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return [];

    return PRODUCTS_LIST.filter((product) => {
      const matchName = product.name.toLowerCase().includes(cleanQuery);
      const matchBrand = product.brand.toLowerCase().includes(cleanQuery);
      const matchCategory = product.category.toLowerCase().includes(cleanQuery);
      const matchDesc = product.description.toLowerCase().includes(cleanQuery);
      const matchFeatures = product.features.some((f) => f.toLowerCase().includes(cleanQuery));

      return matchName || matchBrand || matchCategory || matchDesc || matchFeatures;
    }).slice(0, 8);
  }, [query]);

  const handleSelectProduct = (product: Product) => {
    onClose();
    navigate("/products", { state: { selectedProduct: product.id, category: product.category } });
  };

  const handleViewAll = () => {
    onClose();
    navigate("/products", { state: { searchQuery: query } });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
        {/* Click outside to close */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#161616]">
            <Search className="w-5 h-5 text-[#FF9933] flex-shrink-0 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by sport, brand or product (e.g., cricket bat, Yonex, football)..."
              className="w-full bg-transparent text-white text-base sm:text-lg focus:outline-none placeholder-gray-500 font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors mr-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
            >
              ESC
            </button>
          </div>

          {/* Quick Suggestions */}
          {!query && (
            <div className="p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Popular Searches in Coimbatore
              </div>
              <div className="flex flex-wrap gap-2">
                {QUICK_SUGGESTIONS.map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#FF9933]/15 hover:text-[#FF9933] border border-white/5 hover:border-[#FF9933]/30 text-xs text-gray-300 font-medium transition-all"
                  >
                    {sug}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                <span>Looking for something specific? Contact us directly:</span>
                <a
                  href={STORE_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#138808] hover:text-emerald-400 font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="max-h-[60vh] overflow-y-auto divide-y divide-white/5">
              {searchResults.length > 0 ? (
                <>
                  <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-gray-400 bg-white/[0.02]">
                    Found {searchResults.length} relevant products
                  </div>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className="p-4 hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                          {product.iconSymbol || "🏆"}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#FF9933] uppercase">
                              {product.brand}
                            </span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-400 font-medium">
                              {product.category}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#FF9933] transition-colors line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-400 font-light line-clamp-1 mt-0.5">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {product.status}
                        </span>
                        <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-[#FF9933] transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* View All Button */}
                  <div className="p-4 bg-[#141414] text-center border-t border-white/5">
                    <button
                      onClick={handleViewAll}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#FFB366] text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>View All Results in Shop</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center space-y-3">
                  <p className="text-gray-300 text-sm">
                    No products found for "<span className="text-white font-semibold">{query}</span>"
                  </p>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    We may carry this item in our physical showroom in Coimbatore even if not listed online.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(
                        `Hi Jai Hind Sports, do you have "${query}" in stock at your Coimbatore store?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#138808] text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ask Availability on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
