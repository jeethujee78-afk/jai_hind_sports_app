/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LogoFull, LogoIcon } from "../components/BrandLogo";
import SearchModal from "../components/SearchModal";
import { 
  Home,
  ShoppingBag,
  Trophy,
  Sparkles,
  MapPin,
  Phone, 
  MessageSquare, 
  Search, 
  Navigation,
  Clock, 
  ArrowUp,
  Instagram,
  Facebook
} from "lucide-react";
import { STORE_DETAILS, NAV_ITEMS } from "../constants";

export default function RootLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll event listeners
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home, desc: "Storefront & Highlights" },
    { name: "Shop", path: "/products", icon: ShoppingBag, desc: "Universal Catalogue" },
    { name: "Sports", path: "/categories", icon: Trophy, desc: "Shop by Sport" },
    { name: "Showcase", path: "/showcase", icon: Sparkles, desc: "Services & New Arrivals" },
    { name: "About", path: "/about", icon: MapPin, desc: "Visit Us & Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-gray-100 selection:bg-[#FF9933]/30 selection:text-white flex flex-col font-sans">
      
      {/* ============================================================ */}
      {/* 1. DESKTOP PERSISTENT NAVIGATION SIDEBAR RAIL (lg:flex)     */}
      {/* ============================================================ */}
      <aside 
        id="desktop-navigation-rail"
        className="hidden lg:flex flex-col justify-between w-64 fixed inset-y-0 left-0 bg-[#090909] border-r border-white/10 z-40 py-6 px-4 select-none"
      >
        {/* Top: Brand Identity & Location */}
        <div className="space-y-6">
          <Link to="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9933] rounded-xl group" aria-label="Jai Hind Sports Home">
            <LogoFull iconSize="lg" />
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
              <span>Vilankurichi, Coimbatore</span>
            </div>
          </Link>

          {/* Search Trigger Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer text-xs group"
            title="Search products & sports gear (Ctrl+K)"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#FF9933]" />
              <span className="text-gray-400 group-hover:text-gray-200">Search gear...</span>
            </div>
            <kbd className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded border border-white/10 text-gray-400 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Primary Navigation Destinations */}
          <nav className="space-y-1.5 pt-1">
            <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">
              EXPLORE STORE
            </div>

            {navLinks.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.path === "/" 
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative group ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF9933]/15 to-transparent text-white border-l-2 border-[#FF9933] font-bold shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <IconComponent 
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-[#FF9933]" : "text-gray-400 group-hover:text-gray-200"
                    }`} 
                  />
                  <div className="flex flex-col">
                    <span className="leading-tight">{item.name}</span>
                    <span className="text-[10px] text-gray-400 font-normal leading-none mt-0.5">
                      {item.desc}
                    </span>
                  </div>

                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Direct Actions, Hours & Contact */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          
          <div className="px-3 text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">
            DIRECT ASSISTANCE
          </div>

          <div className="space-y-2">
            {/* Direct Call */}
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#FF9933] hover:text-black text-gray-200 text-xs font-semibold transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF9933] group-hover:text-black transition-colors" />
              <span>Call: {STORE_DETAILS.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp */}
            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#138808]/15 hover:bg-[#138808] text-emerald-400 hover:text-white text-xs font-semibold border border-[#138808]/30 transition-all group"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Google Maps Directions */}
            <a
              href={STORE_DETAILS.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-all group"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-400" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Operating Hours Info */}
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-gray-400 space-y-1">
            <div className="flex items-center gap-1.5 text-gray-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>Open: 9:30 AM – 9:00 PM</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Monday – Saturday (Sun 10:30–8:30)
            </div>
          </div>

        </div>
      </aside>

      {/* ============================================================ */}
      {/* 2. MOBILE TOP HEADER (lg:hidden)                             */}
      {/* ============================================================ */}
      <header 
        id="mobile-top-header"
        className="lg:hidden sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between gap-3 shadow-md"
      >
        <Link to="/" className="flex items-center gap-2.5 select-none flex-shrink-0" aria-label="Jai Hind Sports">
          <LogoIcon iconSize={40} className="w-10 h-10 hover:scale-105 transition-transform" />
          <span className="hidden sm:inline-block font-black text-sm tracking-wide text-white font-sans">
            JAI HIND
          </span>
        </Link>

        {/* Right Quick Actions: Search, Call, WhatsApp */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white active:scale-95 transition-all"
            aria-label="Search items"
            title="Search products"
          >
            <Search className="w-4 h-4 text-[#FF9933]" />
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${STORE_DETAILS.phone}`}
            className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-all"
            title="Call Jai Hind Sports"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
            <span className="text-[11px]">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={STORE_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="text-[11px]">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 3. MAIN CONTENT CONTAINER (RESPONSIVE SHELL)                 */}
      {/* ============================================================ */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0 bg-[#070707]">
        
        {/* Desktop Top Sub-Bar (Compact Information Strip) */}
        <div className="hidden lg:flex items-center justify-between px-8 py-2.5 bg-[#090909] border-b border-white/5 text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span className="text-gray-300 font-medium">JAI HIND SPORTS STOREFRONT</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#138808]" />
              2/17, VRS Nagar, Vilankurichi, Coimbatore - 641035
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>Today: <strong className="text-white">9:30 AM – 9:00 PM</strong></span>
            </span>
            <span className="text-white/20">•</span>
            <a 
              href={`tel:${STORE_DETAILS.phone}`}
              className="text-[#FF9933] hover:underline font-bold"
            >
              {STORE_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Viewport Outlet with Smooth Transition */}
        <main className="flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>

        {/* ============================================================ */}
        {/* 4. FOOTER (INTEGRATED INTO UNIFIED SHELL)                    */}
        {/* ============================================================ */}
        <footer className="relative bg-[#090909] border-t border-white/10 text-gray-400 overflow-hidden">
          
          {/* Subtle Tricolour Top Accent */}
          <div className="h-[2px] w-full flex">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Brand & Origin (ColSpan 4) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-block" aria-label="Jai Hind Sports Home">
                <LogoFull iconSize="lg" />
              </Link>
              <p className="text-xs text-gray-400 font-normal leading-relaxed">
                Coimbatore's premier sports showroom. Authorized sourcing, certified brand gear, live computerized badminton stringing, and match equipment for athletes who dream big.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                <span>ESTD. 2012</span>
                <span>•</span>
                <span className="text-[#138808] font-bold">100% ORIGINAL GEAR</span>
              </div>
              <div className="pt-1 flex items-center gap-2.5">
                <a 
                  href={STORE_DETAILS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-[#FF9933] hover:text-black transition-all"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={STORE_DETAILS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-[#FF9933] hover:text-black transition-all"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Directory (ColSpan 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                STORE DIRECTORY
              </h4>
              <ul className="space-y-2 text-xs">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-gray-600">•</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location & Hours (ColSpan 2) */}
            <div className="lg:col-span-2 space-y-4 text-xs">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                VILANKURICHI HUB
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {STORE_DETAILS.address.street},<br />
                {STORE_DETAILS.address.area},<br />
                {STORE_DETAILS.address.city}, {STORE_DETAILS.address.pin}
              </p>
              <div className="space-y-1 pt-1">
                <span className="text-gray-300 font-semibold block">Hours:</span>
                <span className="text-gray-400 block font-mono text-[11px]">Mon - Sat: 9:30 AM – 9:00 PM</span>
                <span className="text-gray-400 block font-mono text-[11px]">Sun: 10:30 AM – 8:30 PM</span>
              </div>
            </div>

            {/* Column 4: Maps & Hotline (ColSpan 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                SHOWROOM LOCATION
              </h4>
              
              <div className="relative w-full h-28 rounded-xl overflow-hidden border border-white/10 bg-black">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.932857037748!2d77.015312!3d11.0425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f7df802193%3A0xea2df2da72566ecb!2sJai%20Hind%20Sports!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-70"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Jai Hind Sports Location"
                />
                <a 
                  href={STORE_DETAILS.googleMapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/90 border border-white/10 px-2 py-1 rounded text-[10px] text-white hover:text-[#FF9933]"
                >
                  <Navigation className="w-3 h-3 text-[#FF9933]" />
                  <span>Open in Maps</span>
                </a>
              </div>

              <div className="space-y-1 text-xs">
                <span className="text-gray-400 block text-[10px] font-mono uppercase">Direct Helpline</span>
                <a 
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="text-[#FF9933] font-mono font-bold text-sm hover:underline block"
                >
                  {STORE_DETAILS.phoneDisplay}
                </a>
              </div>
            </div>

          </div>

          {/* Copyright bar */}
          <div className="border-t border-white/5 py-5 px-6 bg-[#060606]">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono tracking-wider text-gray-400 uppercase text-center sm:text-left">
              <p>© {new Date().getFullYear()} JAI HIND SPORTS. COIMBATORE, TAMIL NADU.</p>
              <p className="text-gray-400">PREMIUM SINGLE-DASHBOARD STOREFRONT</p>
            </div>
          </div>

        </footer>

      </div>

      {/* ============================================================ */}
      {/* 5. MOBILE FIXED BOTTOM NAVIGATION (lg:hidden)               */}
      {/* ============================================================ */}
      <nav 
        id="mobile-bottom-navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 flex items-center justify-around shadow-2xl"
      >
        {navLinks.map((item) => {
          const IconComponent = item.icon;
          const isActive = item.path === "/" 
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-xl transition-all select-none ${
                isActive 
                  ? "text-[#FF9933] font-bold" 
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <IconComponent className={`w-5 h-5 ${isActive ? "text-[#FF9933]" : "text-gray-400"}`} />
                {isActive && (
                  <motion.span 
                    layoutId="mobileActiveDot"
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#FF9933]" 
                  />
                )}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? "font-bold text-[#FF9933]" : "font-medium"}`}>
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* ============================================================ */}
      {/* 6. FLOATING UTILITIES (DESKTOP SCROLL TO TOP)                 */}
      {/* ============================================================ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="hidden lg:flex fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#121212] hover:bg-[#1a1a1a] text-white border border-white/10 shadow-xl cursor-pointer active:scale-95 transition-all items-center justify-center"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#FF9933]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* SEARCH MODAL */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

    </div>
  );
}

