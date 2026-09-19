/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  name: string;
  path: string;
  description?: string;
}

export interface StoreDetails {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pin: string;
    landmark: string;
  };
  googleMapLink: string;
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
}

export const STORE_DETAILS = {
  name: "JAI HIND SPORTS",
  tagline: "YOUR GAME • OUR PASSION • Coimbatore's Premier Sports Showroom",
  phone: "+919629024175",
  phoneDisplay: "+91 96290 24175",
  secondaryPhone: "+918754739973",
  secondaryPhoneDisplay: "+91 87547 39973",
  whatsapp: "https://wa.me/919629024175",
  whatsappDisplay: "WhatsApp Consultation",
  email: "jaihindsports1@gmail.com",
  instagram: "https://instagram.com/jai_hind_sports_shop",
  facebook: "https://facebook.com/jai_hind_sports_shop",
  address: {
    street: "2/17, 17A, VRS Nagar, Near Cheran Maa Nagar",
    area: "Vilankurichi",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pin: "641035",
    landmark: "Near Cheran Maa Nagar",
  },
  googleMapLink: "https://maps.google.com/?q=Jai+Hind+Sports+Vilankurichi+Coimbatore",
  operatingHours: {
    weekdays: "09:30 AM - 09:00 PM (Monday - Saturday)",
    sunday: "10:30 AM - 08:30 PM (Sunday)",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/products", description: "Browse all sports gear & equipment" },
  { name: "Sports", path: "/categories", description: "Browse items organized by sport" },
  { name: "Showcase", path: "/showcase", description: "Spotlight arrivals & showroom highlights" },
  { name: "About", path: "/about", description: "Store story, timings & visit information" },
];

export const POPULAR_CATEGORIES = [
  { id: "cricket", name: "Cricket Equipment", icon: "cricket", count: "Bats • Gloves • Pads • Balls", desc: "Bats, leather & tennis balls, pads, gloves & kit bags" },
  { id: "badminton", name: "Badminton", icon: "badminton", count: "Rackets • Shuttles • Gutting", desc: "Rackets, nylon & feather shuttles, grips & computer stringing" },
  { id: "fitness", name: "Gym & Fitness", icon: "fitness", count: "Dumbbells • Weights • Bars", desc: "Dumbbells, weights, Olympic rods, benches & gym accessories" },
  { id: "football", name: "Football Equipment", icon: "football", count: "Match Balls • Studs • Guards", desc: "Footballs, studs, shin guards, gloves & jerseys" },
  { id: "volleyball", name: "Volleyball & Nets", icon: "volleyball", count: "Balls • Competition Nets", desc: "Match volleyballs, competition nets & referee whistles" },
  { id: "basketball", name: "Basketball", icon: "basketball", count: "Composite Balls • Rims", desc: "Outdoor & indoor basketballs, rings & nets" },
  { id: "athletics", name: "Athletics & Running", icon: "athletics", count: "Shoes • Spikes • Apparel", desc: "Running shoes, spikes, tracksuits, cones & supports" },
  { id: "school", name: "School Sports", icon: "school", count: "Agility Kits • Cones • Bibs", desc: "Agility ladders, cones, bibs, whistles & bulk tournament kits" },
];

export interface PartnerBrand {
  name: string;
  fullName?: string;
  origin: string;
  discipline: string;
  sports: string[];
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  { name: "SG", fullName: "Sanspareils Greenlands", origin: "India", discipline: "Cricket Gear", sports: ["Cricket"] },
  { name: "SS", fullName: "Sareen Sports", origin: "India", discipline: "Cricket Gear", sports: ["Cricket"] },
  { name: "MRF", fullName: "MRF Pace & Cricket", origin: "India", discipline: "Cricket Gear", sports: ["Cricket"] },
  { name: "YONEX", fullName: "Yonex Japan", origin: "Japan", discipline: "Badminton & Court Gear", sports: ["Badminton"] },
  { name: "LI-NING", fullName: "Li-Ning Pro", origin: "China", discipline: "Badminton Elite", sports: ["Badminton"] },
  { name: "NIVIA", fullName: "Nivia Sports India", origin: "India", discipline: "Football, Basketball & Volleyball", sports: ["Football", "Basketball", "Volleyball"] },
  { name: "COSCO", fullName: "Cosco Multi-Sports", origin: "India", discipline: "Balls & Fitness Equipment", sports: ["Football", "Basketball", "Volleyball", "Fitness", "School Sports"] },
  { name: "VECTOR X", fullName: "Vector X Fitness", origin: "India", discipline: "Gym & School Training", sports: ["Fitness", "School Sports", "Athletics & Running"] },
  { name: "NIKE", fullName: "Nike Athletics", origin: "USA", discipline: "Athletics, Shoes & Apparel", sports: ["Athletics & Running"] },
  { name: "ADIDAS", fullName: "Adidas Performance", origin: "Germany", discipline: "Court & Running Footwear", sports: ["Badminton", "Athletics & Running"] },
  { name: "PUMA", fullName: "Puma Sport", origin: "Germany", discipline: "Football Boots & Performance Gear", sports: ["Football"] },
];

export function normalizeBrand(brand: string): string {
  if (!brand) return "";
  const clean = brand.trim().toLowerCase();
  if (clean.includes("yonex")) return "Yonex";
  if (clean.includes("sanspareils") || clean === "sg") return "SG";
  if (clean.includes("sareen") || clean === "ss") return "SS";
  if (clean === "mrf") return "MRF";
  if (clean === "cosco") return "Cosco";
  if (clean === "nivia") return "Nivia";
  if (clean.includes("vector")) return "Vector X";
  if (clean === "nike") return "Nike";
  if (clean === "adidas") return "Adidas";
  if (clean === "puma") return "Puma";
  if (clean.includes("lining") || clean.includes("li-ning")) return "Li-Ning";
  
  return brand.trim();
}

