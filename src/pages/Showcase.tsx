/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  ExternalLink,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  X,
  Maximize2,
  CheckCircle2,
  Filter
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

interface ShowcaseItem {
  id: string;
  title: string;
  tag: "Spotlight" | "New Arrival" | "In-Store Service" | "Bulk & Academy" | "Showroom Floor";
  sport: string;
  image: string;
  fallbackImage?: string;
  description: string;
  specs: string[];
  shopFilter?: { sport?: string; brand?: string; category?: string };
  whatsappMessage: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "sc-cricket-willow",
    title: "Handpicked English & Kashmir Willow Cricket Bats",
    tag: "Spotlight",
    sport: "Cricket",
    image: "/images/sports/cricket.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=900&auto=format&fit=crop",
    description: "Grade 1 and seasoned Kashmir willow blades from SG, SS, and MRF with massive 38-40mm edges. Test pick-up balance and handle thickness in our Vilankurichi showroom.",
    specs: ["Bat weight test in store", "Pre-knocked willow", "Adult Short Handle & junior sizes"],
    shopFilter: { sport: "Cricket", category: "Cricket Bats" },
    whatsappMessage: "Hi Jai Hind Sports, I am interested in your English/Kashmir Willow cricket bats. Can you share current available weights and prices?"
  },
  {
    id: "sc-badminton-stringing",
    title: "Live Computerized Badminton Racket Stringing",
    tag: "In-Store Service",
    sport: "Badminton",
    image: "/images/sports/badminton.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=900&auto=format&fit=crop",
    description: "In-house computerized electronic tension stringing machine up to 30+ lbs with genuine Yonex BG65, BG65Ti, BG80, and Nanogy strings. Quick same-day or next-day turnaround in Coimbatore.",
    specs: ["Precision electronic tensioning", "Original Yonex strings stocked", "Tension customization based on playstyle"],
    shopFilter: { sport: "Badminton" },
    whatsappMessage: "Hi Jai Hind Sports, I would like to get my badminton racket strung. What are your stringing options and turnaround time today?"
  },
  {
    id: "sc-football-studs",
    title: "Firm-Ground & Multi-Stud Turf Boots",
    tag: "New Arrival",
    sport: "Football",
    image: "/images/sports/football.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=900&auto=format&fit=crop",
    description: "Latest arrival of Puma Future Match FG/AG boots and Nivia match footballs. Adaptive compression collars, multi-stud agility outsoles, and durable match-grade TPU plates.",
    specs: ["Sizes UK 6 to UK 11 available", "Firm grass and artificial turf compatible", "FIFA approved match balls in stock"],
    shopFilter: { sport: "Football" },
    whatsappMessage: "Hi Jai Hind Sports, do you have football boots in size UK 8/9 currently available in the showroom?"
  },
  {
    id: "sc-fitness-plates",
    title: "Cast Iron Dumbbells & Home Gym Stations",
    tag: "Spotlight",
    sport: "Fitness",
    image: "/images/sports/fitness.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop",
    description: "Solid cast iron and rubber-encased dumbbell pairs from 2kg to 30kg, Olympic 2-inch barbells, spring collars, and heavy-duty adjustable incline/flat workout benches.",
    specs: ["Gravity-cast solid weights", "Chrome 5ft and 7ft Olympic bars", "Commercial & home gym packages"],
    shopFilter: { sport: "Fitness" },
    whatsappMessage: "Hi Jai Hind Sports, I am looking to set up a home workout gym. Can you provide weight plate and dumbbell package prices?"
  },
  {
    id: "sc-school-academy-bulk",
    title: "School Sports Day & Academy Equipment Bundles",
    tag: "Bulk & Academy",
    sport: "School Sports",
    image: "/images/sports/school.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=900&auto=format&fit=crop",
    description: "Complete institutional sports supply for schools, PE colleges, and sports academies across Coimbatore. Packaged agility ladders, saucer cones, relay batons, whistles, and team bibs.",
    specs: ["Institutional bulk discounts", "Official IAAF track batons", "Assorted team bib sets with numbers"],
    shopFilter: { sport: "School Sports" },
    whatsappMessage: "Hi Jai Hind Sports, our school/academy needs a quotation for sports day training equipment and tournament supplies."
  },
  {
    id: "sc-badminton-court-shoes",
    title: "Non-Marking Badminton Court Shoes",
    tag: "New Arrival",
    sport: "Badminton",
    image: "/images/sports/running.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop",
    description: "High-grip non-marking gum rubber court shoes with anti-torsion midfoot stabilizers. Essential for wooden and synthetic indoor courts to prevent slipping and ankle roll.",
    specs: ["True non-marking gum rubber", "Shock-absorbing heel cushioning", "Trial sizes available in store"],
    shopFilter: { sport: "Badminton" },
    whatsappMessage: "Hi Jai Hind Sports, I need non-marking court shoes for badminton. What models and sizes do you have in stock?"
  },
  {
    id: "sc-team-jerseys",
    title: "Custom Sublimation Team Jerseys & Match Kits",
    tag: "Bulk & Academy",
    sport: "Multi-Sport",
    image: "/images/sports/jerseys.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=900&auto=format&fit=crop",
    description: "Breathable polyester micro-mesh customized team jerseys for cricket teams, football clubs, and corporate tournaments. Customized player names, jersey numbers, and team logos.",
    specs: ["Dri-fit moisture management", "Fade-proof full sublimation printing", "Fast turnarounds for weekend tournaments"],
    shopFilter: { sport: "School Sports" },
    whatsappMessage: "Hi Jai Hind Sports, we want to print custom jerseys for our 15-player team. Can you share design templates and bulk rates?"
  },
  {
    id: "sc-showroom-floor",
    title: "Physical Vilankurichi Showroom & Gear Aisles",
    tag: "Showroom Floor",
    sport: "Showroom",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=900&auto=format&fit=crop",
    fallbackImage: "/images/sports/cricket.jpg",
    description: "Convenient showroom on Vilankurichi Road near Cheran Maa Nagar. Friendly player staff ready to assist with sizing, balance checks, and honest gear recommendations 7 days a week.",
    specs: ["Open 7 days a week", "Two & four-wheeler parking", "Cash, UPI & card payments accepted"],
    whatsappMessage: "Hi Jai Hind Sports, what is the best route to reach your Vilankurichi showroom today?"
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Showcase" },
  { id: "Spotlight", label: "Spotlight Gear" },
  { id: "New Arrival", label: "New Arrivals" },
  { id: "In-Store Service", label: "Services & Stringing" },
  { id: "Bulk & Academy", label: "Team & School Orders" },
  { id: "Showroom Floor", label: "Store Floor" }
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return SHOWCASE_ITEMS;
    return SHOWCASE_ITEMS.filter((item) => item.tag === activeTab);
  }, [activeTab]);

  const handleShopNavigation = (item: ShowcaseItem) => {
    if (item.shopFilter) {
      const params = new URLSearchParams();
      if (item.shopFilter.sport) params.set("sport", item.shopFilter.sport);
      if (item.shopFilter.brand) params.set("brand", item.shopFilter.brand);
      if (item.shopFilter.category) params.set("subcategory", item.shopFilter.category);
      navigate(`/products?${params.toString()}`);
    } else {
      navigate("/products");
    }
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/919629024175?text=${encodeURIComponent(message)}`;
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Showcase & In-Store Highlights | JAI HIND SPORTS Coimbatore",
    "description": "Spotlight cricket bats, live badminton computerized stringing, new arrival football studs, gym weights, and team order supplies at Jai Hind Sports Vilankurichi, Coimbatore.",
    "url": "https://jaihindsports.in/showcase"
  };

  return (
    <div className="relative min-h-screen bg-[#070707] pt-12 sm:pt-16 pb-24 px-4 sm:px-6 overflow-hidden font-sans text-white">
      <SEO 
        title="Showcase & In-Store Highlights | JAI HIND SPORTS Coimbatore"
        description="Explore spotlight gear, new arrivals, computerized badminton stringing in action, team orders, and showroom highlights at Jai Hind Sports Vilankurichi, Coimbatore."
        keywords="Sports Showcase Coimbatore, Badminton Stringing Coimbatore, Cricket Bats Coimbatore, Team Jerseys Coimbatore, Jai Hind Sports Vilankurichi"
        canonicalUrl="https://jaihindsports.in/showcase"
        jsonLd={JSON_LD_DATA}
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#138808]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FF9933]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF9933]">
            <Sparkles className="w-3.5 h-3.5 text-[#138808]" />
            <span>REAL PRODUCTS & SERVICES IN ACTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display leading-tight">
            STORE SHOWCASE
          </h1>
          
          <div className="h-[3px] w-28 mx-auto rounded-full flex overflow-hidden">
            <div className="w-1/3 bg-[#FF9933] h-full" />
            <div className="w-1/3 bg-white h-full" />
            <div className="w-1/3 bg-[#138808] h-full" />
          </div>
          
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base font-normal leading-relaxed pt-1">
            Discover spotlight cricket bats, live badminton computerized stringing, new arrivals, team kits, and what Jai Hind Sports looks like in real life.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#138808]" />
              Vilankurichi Road, Coimbatore
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
              Open Daily 9:30 AM - 9:00 PM
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                  isActive
                    ? "bg-[#FF9933] text-black border-[#FF9933] shadow-lg shadow-[#FF9933]/20"
                    : "bg-white/5 text-gray-300 hover:text-white border-white/10 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#111111] hover:bg-[#151515] border border-white/10 hover:border-[#FF9933]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group"
            >
              {/* Photo Card with Click to Zoom */}
              <div 
                onClick={() => setActiveItem(item)}
                className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden cursor-pointer bg-black/60"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                      e.currentTarget.src = item.fallbackImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-black/70 text-[#FF9933] border border-[#FF9933]/30 backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-black/70 text-gray-200 border border-white/10 backdrop-blur-sm">
                    {item.sport}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/70 text-white border border-white/10 backdrop-blur-sm group-hover:bg-[#FF9933] group-hover:text-black transition-colors" title="Zoom photo">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white uppercase font-display leading-snug group-hover:text-[#FF9933] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Specs */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#138808] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Dual Action CTAs */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppLink(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-colors text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>

                  {item.shopFilter ? (
                    <button
                      onClick={() => handleShopNavigation(item)}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#FF9933] text-gray-200 hover:text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#FF9933] transition-all text-center cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>In Shop</span>
                    </button>
                  ) : (
                    <Link
                      to="/about"
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#FF9933] text-gray-200 hover:text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#FF9933] transition-all text-center"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Visit Store</span>
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Visit Showroom / Consultation Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-[#138808] uppercase tracking-wider">
              VISIT IN VILANKURICHI, COIMBATORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Want to See Equipment in Person Before Buying?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Visit our showroom on Vilankurichi Road to feel bat pick-ups, check shoe sizing, get live racket stringing, or discuss academy bulk orders with our friendly team.
            </p>
            <div className="text-xs text-gray-400 space-y-1 font-mono">
              <div><strong>Address:</strong> 2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi, Coimbatore - 641035</div>
              <div><strong>Helplines:</strong> +91 96290 24175 / +91 87547 39973</div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={STORE_DETAILS.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#138808] hover:to-[#22C55E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              to="/products"
              className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors text-center"
            >
              <ShoppingBag className="w-4 h-4 text-[#FF9933]" />
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="fixed inset-0" onClick={() => setActiveItem(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-[#121212] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 text-gray-300 hover:text-white border border-white/10 transition-colors z-20 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (activeItem.fallbackImage && e.currentTarget.src !== activeItem.fallbackImage) {
                      e.currentTarget.src = activeItem.fallbackImage;
                    }
                  }}
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#FF9933] uppercase font-bold bg-[#FF9933]/15 px-2.5 py-1 rounded">
                    {activeItem.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {activeItem.sport} • Jai Hind Sports Coimbatore
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase font-display">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="space-y-2 py-2">
                  <div className="text-xs font-mono uppercase text-gray-400 font-bold">Key Specifications:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeItem.specs.map((s, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#138808] flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppLink(activeItem.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ask About This on WhatsApp</span>
                  </a>

                  {activeItem.shopFilter && (
                    <button
                      onClick={() => {
                        const itm = activeItem;
                        setActiveItem(null);
                        handleShopNavigation(itm);
                      }}
                      className="py-3.5 px-6 rounded-xl bg-[#FF9933] hover:bg-[#FF8000] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>View in Shop</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
