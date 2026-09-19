/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Mail, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Wrench,
  Users,
  ShoppingBag
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

const FAQS = [
  {
    q: "Is all the sports equipment 100% genuine?",
    a: "Yes, 100%. We source directly from official authorized brand distributors for Yonex, SS, SG, Cosco, Nivia, MRF, and more. Every piece has manufacturer tags, hologram seals, and original warranties."
  },
  {
    q: "Do you offer badminton racket gutting / stringing?",
    a: "Yes! We have an in-store computerized electronic stringing machine in Vilankurichi. We stock original Yonex strings (BG65, BG65Ti, BG80, Nanogy, etc.) and string up to 30+ lbs tension with quick turnaround."
  },
  {
    q: "Can I try bats or check shoe sizes in person before buying?",
    a: "Absolutely! We encourage you to hold bats to test balance, pick-up, and handle thickness, and try on badminton or running shoes for exact sizing at our Coimbatore showroom."
  },
  {
    q: "Do you provide bulk discounts for schools, colleges, and sports academies?",
    a: "Yes, we regularly supply schools, PE departments, college teams, and local sports clubs with institutional pricing on balls, training cones, agility kits, and team jerseys."
  },
  {
    q: "What are your showroom hours?",
    a: "We are open 7 days a week. Monday to Saturday: 9:30 AM to 9:00 PM. Sunday: 10:30 AM to 8:30 PM."
  }
];

export default function About() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Real-time store status calculation
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const timeVal = now.getHours() + now.getMinutes() / 60;
      if (day === 0) {
        setIsOpenNow(timeVal >= 10.5 && timeVal <= 20.5);
      } else {
        setIsOpenNow(timeVal >= 9.5 && timeVal <= 21);
      }
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Please enter your name";
    if (!formState.phone.trim()) {
      errs.phone = "Please enter your mobile number";
    } else if (formState.phone.replace(/[^0-9]/g, "").length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formState.message.trim()) {
      errs.message = "Please enter your message or question";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newEnquiry: Enquiry = {
      id: "ENQ-" + Date.now(),
      name: formState.name,
      phone: formState.phone,
      email: formState.email,
      message: formState.message,
      timestamp: new Date().toLocaleString("en-IN")
    };

    try {
      const existing = JSON.parse(localStorage.getItem("jai_hind_contact_enquiries") || "[]");
      localStorage.setItem("jai_hind_contact_enquiries", JSON.stringify([newEnquiry, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
    setFormState({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": "JAI HIND SPORTS",
    "description": "Coimbatore's trusted sports showroom since 2012 in Vilankurichi. Dedicated to genuine equipment, live racket stringing, academy supplies, and honest guidance.",
    "telephone": "+919629024175",
    "email": "jaihindsports1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641035",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070707] pt-12 sm:pt-16 pb-24 px-4 sm:px-6 overflow-hidden font-sans text-white">
      <SEO 
        title="About Us & Store Visit | JAI HIND SPORTS Coimbatore"
        description="Learn about Jai Hind Sports, established in 2012 in Vilankurichi, Coimbatore. Showroom address, timings, live racket stringing, genuine sports gear, and direct contact details."
        keywords="About Jai Hind Sports, Sports Store Coimbatore, Vilankurichi Sports Shop, Badminton Stringing Coimbatore, Contact Jai Hind Sports"
        canonicalUrl="https://jaihindsports.in/about"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[#FF9933]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[500px] bg-[#138808]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. HEADER SECTION                                            */}
        {/* ============================================================ */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF9933]">
            <Trophy className="w-3.5 h-3.5 text-[#138808]" />
            <span>SERVING COIMBATORE SINCE 2012</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display leading-tight">
            ABOUT JAI HIND SPORTS
          </h1>
          
          <div className="h-[3px] w-28 mx-auto rounded-full flex overflow-hidden">
            <div className="w-1/3 bg-[#FF9933] h-full" />
            <div className="w-1/3 bg-white h-full" />
            <div className="w-1/3 bg-[#138808] h-full" />
          </div>
          
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base font-normal leading-relaxed pt-1">
            A friendly, dependable sports destination in Vilankurichi, dedicated to genuine brands, expert player advice, and honest pricing for all athletes.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. STORE STORY & OFFERINGS GRID                              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-gray-300 text-sm sm:text-base font-normal leading-relaxed">
            <p>
              At <strong className="text-white font-semibold">Jai Hind Sports</strong>, our aim has always been simple: to provide sports lovers in Coimbatore with 100% genuine equipment at fair, honest prices.
            </p>
            <p>
              We established our showroom in <strong className="text-white font-semibold">VRS Nagar, Vilankurichi</strong> in 2012. We noticed that students, parents, and local club players frequently faced gray-market duplicates, uncertain bat weights, and misleading advice when purchasing equipment.
            </p>
            <p>
              We decided to do things differently. We partner directly with authorized distributors of trusted brands like <strong className="text-white">Yonex, SS, SG, Nivia, Cosco, MRF, and Vector X</strong>. When you walk into our store or message us on WhatsApp, you get clear recommendations tailored to your playing level and budget.
            </p>
            <p>
              Whether you are a parent buying your child’s first cricket kit, a competitive athlete seeking high-tension racket stringing, or a physical education teacher organizing school sports day — our doors are always open to support your game.
            </p>
          </div>

          {/* Highlights Box */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-5 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF9933] uppercase">
              <Sparkles className="w-4 h-4 text-[#138808]" />
              <span>WHAT WE OFFER AT JAI HIND SPORTS</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#138808]" />
                  <span>100% Genuine Authorized Gear</span>
                </div>
                <div className="text-gray-400 text-xs pl-6">
                  Sourced straight from certified brand distributors with original hologram seals.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#FF9933]" />
                  <span>Live Computerized Racket Stringing</span>
                </div>
                <div className="text-gray-400 text-xs pl-6">
                  Accurate electronic tensioning up to 30+ lbs with original Yonex strings.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>School & Academy PE Supplies</span>
                </div>
                <div className="text-gray-400 text-xs pl-6">
                  Institutional packages for cones, agility ladders, bibs, and tournament balls.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Honest Player Guidance</span>
                </div>
                <div className="text-gray-400 text-xs pl-6">
                  No pushy sales. We help you choose the right bat weight, grip, or shoe size.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. FOUR TRUST PILLARS                                        */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-[#138808] w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white uppercase text-base font-display">100% Genuine</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Every bat, racket, ball, and stud carries verified manufacturer tags and warranties.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2.5">
            <div className="p-2.5 rounded-xl bg-[#FF9933]/10 text-[#FF9933] w-fit">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white uppercase text-base font-display">Friendly Advice</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Personalized guidance on bat balance, string tension, or shoe sizes for your playing level.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white uppercase text-base font-display">School & Clubs</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Special customized bulk rates and equipment bundles for schools, colleges, and academies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2.5">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white uppercase text-base font-display">Local & Open 7 Days</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Physical showroom in Vilankurichi with prompt telephone and WhatsApp assistance.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. FAST CONTACT & STORE DETAILS CARDS                        */}
        {/* ============================================================ */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">
              REACH OUR TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Visit or Contact the Showroom
            </h2>
            <p className="text-gray-300 text-sm font-normal">
              Call us directly, message on WhatsApp, or stop by our store in Vilankurichi, Coimbatore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#FF9933]/10 text-[#FF9933] w-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-display">Call Store</h3>
                <p className="text-xs text-gray-400">Direct helpline for stock & questions</p>
                <div className="text-xs font-bold text-white font-mono pt-1">
                  +91 96290 24175
                  <br />
                  +91 87547 39973
                </div>
              </div>
              <a
                href={`tel:${STORE_DETAILS.phone}`}
                className="mt-3 w-full py-2 rounded-xl bg-white/5 hover:bg-[#FF9933] hover:text-black text-gray-200 text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#138808]/10 text-[#138808] w-fit">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-display">WhatsApp Chat</h3>
                <p className="text-xs text-gray-400">Instant answers, photos & quotes</p>
                <div className="text-xs font-bold text-emerald-400 font-mono pt-1">
                  Active Staff Assistance
                </div>
              </div>
              <a
                href={STORE_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2 rounded-xl bg-[#138808] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Message WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-display">Store Hours</h3>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono bg-white/5">
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
                  <span>{isOpenNow ? "Open Now" : "Closed"}</span>
                </div>
                <div className="text-xs text-gray-300 space-y-0.5 pt-1">
                  <div>Mon-Sat: 9:30 AM - 9:00 PM</div>
                  <div>Sunday: 10:30 AM - 8:30 PM</div>
                </div>
              </div>
              <div className="mt-3 text-[11px] text-gray-400 text-center py-1.5">
                Open 7 Days a Week
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-display">Showroom</h3>
                <p className="text-xs text-gray-300 leading-snug">
                  2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi Road, Coimbatore - 641035
                </p>
              </div>
              <a
                href={STORE_DETAILS.googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#FF9933] text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. CONTACT FORM & LOCATION DETAILS                           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Send Us a Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#111111] border border-white/10 space-y-5 shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF9933] uppercase">DIRECT ENQUIRY</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display mt-0.5">
                Send a Message to Jai Hind Sports
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Looking for specific equipment, bat weights, string tensions, or bulk academy quotes? Write to us below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#138808]/15 border border-[#138808]/30 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#138808] mx-auto" />
                <h4 className="text-lg font-bold text-white">Thank You! Your Enquiry Was Received</h4>
                <p className="text-xs text-gray-300">
                  Our team in Coimbatore will review your message and reach back to you via phone or WhatsApp.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF9933] hover:underline uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF9933]"
                    />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-300">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF9933]"
                    />
                    {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-300">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. ramesh@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF9933]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-300">
                    What are you looking for? *
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about the sports gear, bat weight, racket string tension, or school requirement you need..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF9933] resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#138808] hover:to-[#22C55E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Directions Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-white uppercase font-display">
                Visiting Our Coimbatore Store
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-normal">
                <div className="flex gap-2.5">
                  <MapPin className="w-4 h-4 text-[#138808] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Store Address:</strong>
                    <br />
                    2/17, 17A, VRS Nagar, Near Cheran Maa Nagar,
                    <br />
                    Vilankurichi Road, Coimbatore - 641035,
                    <br />
                    Tamil Nadu, India.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Landmark:</strong>
                    <br />
                    Near Cheran Maa Nagar Bus Stop, on main Vilankurichi Road.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Helplines:</strong>
                    <br />
                    +91 96290 24175 / +91 87547 39973
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Email:</strong>
                    <br />
                    jaihindsports1@gmail.com
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_DETAILS.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#FF9933] hover:text-black text-gray-200 border border-white/10 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#138808]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Help */}
            <div className="p-6 rounded-2xl bg-[#138808]/15 border border-[#138808]/30 space-y-2.5">
              <div className="font-bold text-white text-sm">Need a quick answer right now?</div>
              <p className="text-xs text-gray-300">
                Our staff answers inquiries on WhatsApp within minutes during store working hours.
              </p>
              <a
                href={STORE_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat Now →</span>
              </a>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 6. FREQUENTLY ASKED QUESTIONS                                */}
        {/* ============================================================ */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#FF9933] uppercase">HELP & FAQS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#111111] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-[#FF9933] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#FF9933] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 font-normal leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 7. BOTTOM CTA TO PRODUCTS                                    */}
        {/* ============================================================ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase font-display">
            Ready to Explore Our Sports Gear?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-normal leading-relaxed">
            Browse our complete catalogue of genuine bats, rackets, balls, gym equipment, and school sports gear.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/products"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#FFB366] hover:to-[#FF9933] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Products Catalogue</span>
            </Link>
            <Link
              to="/categories"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <Trophy className="w-4 h-4 text-[#FF9933]" />
              <span>Choose by Sport</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
