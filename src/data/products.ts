/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, SportDefinition, SportType } from "../types";

export type { Product };

export const SPORTS_LIST: SportDefinition[] = [
  {
    id: "cricket",
    name: "Cricket",
    iconSymbol: "🏏",
    brands: ["SG", "SS", "MRF"],
    highlight: "English & Kashmir Willow Bats, Gloves, Pads & Helmets",
    itemCount: "Bats • Gloves • Pads • Helmets",
    description: "Professional match gear for club cricketers, academies, and tournament players in Coimbatore."
  },
  {
    id: "badminton",
    name: "Badminton",
    iconSymbol: "🏸",
    brands: ["Yonex", "Li-Ning"],
    highlight: "Carbon Rackets, Shuttles, Grip Tape, Shoes & Bags",
    itemCount: "Rackets • Shuttles • Grips • Bags",
    description: "Head-heavy and head-light graphite frames, computerized live stringing, and match-grade nylon/feather shuttles."
  },
  {
    id: "football",
    name: "Football",
    iconSymbol: "⚽",
    brands: ["Nivia", "Cosco"],
    highlight: "FIFA Match Balls, Studs, Goalkeeper Gloves & Shin Guards",
    itemCount: "Match Balls • Studs • Guards • Gloves",
    description: "Turf and grass match balls, high-traction moulded studs, and protective accessories."
  },
  {
    id: "basketball",
    name: "Basketball",
    iconSymbol: "🏀",
    brands: ["Cosco", "Nivia"],
    highlight: "Composite Leather Balls, Street Rubber & Steel Rims",
    itemCount: "Composite Balls • Rubber • Rims",
    description: "FIBA-compliant composite indoor balls and high-durability outdoor concrete court balls."
  },
  {
    id: "volleyball",
    name: "Volleyball",
    iconSymbol: "🏐",
    brands: ["Nivia", "Cosco"],
    highlight: "Laminated Microfiber Balls, Steel Wire Match Nets & Whistles",
    itemCount: "Laminated Balls • Match Nets • Whistles",
    description: "No-sting cushioned competition volleyballs and heavy cotton/nylon tournament nets."
  },
  {
    id: "fitness",
    name: "Fitness",
    iconSymbol: "💪",
    brands: ["Vector X", "Cosco"],
    highlight: "Chrome Dumbbells, Kettlebells, Pushup Bars & Power Bands",
    itemCount: "Dumbbells • Kettlebells • Pushup Bars",
    description: "Home gym weight sets, resistance workout gear, gym gloves, and high-density workout mats."
  },
  {
    id: "athletics-running",
    name: "Athletics & Running",
    iconSymbol: "🏃",
    brands: ["Nike", "Adidas", "Vector X"],
    highlight: "Road Racers, Track Flats, Spikes, Running Shoes & Apparel",
    itemCount: "Running Shoes • Track Spikes • Apparel",
    description: "Lightweight running shoes with impact absorption, athletic spikes, running wear, and track accessories."
  },
  {
    id: "school-sports",
    name: "School Sports",
    iconSymbol: "🏆",
    brands: ["Vector X", "Cosco"],
    highlight: "Agility Ladders, Training Cones, Whistles & Team Bibs",
    itemCount: "Agility Ladders • Cones • Whistles • Bibs",
    description: "Academy coaching equipment, physical education packages, measuring tapes, and relay batons."
  }
];

export const PRODUCTS_LIST: Product[] = [
  // =================================================================
  // 1. CRICKET - SG
  // =================================================================
  {
    id: "cri-sg-players-edition",
    name: "SG Player's Edition Cricket Bat",
    brand: "SG",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "Authentic match-spec Grade-1 English Willow blade tuned to international standards.",
    features: [
      "Select Grade-1 English Willow cleft",
      "Massive 38-40mm edge profile",
      "9 to 12 straight grains",
      "Multi-piece imported cane handle for shock absorption",
      "Pre-knocked with toe guard installed"
    ],
    sizes: ["Short Handle (SH)"],
    colors: ["Natural Willow with Traditional White/Blue SG Chevron"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Willow Type": "Grade 1 English Willow",
      "Weight Range": "1160 - 1210 grams",
      "Handle": "9-piece Sarawak cane handle",
      "Sweet Spot": "Mid-to-Low for Indian pitches"
    },
    iconSymbol: "🏏",
    visualGradient: "from-amber-600/20 via-amber-950/40 to-zinc-900"
  },
  {
    id: "cri-sg-savage-kw",
    name: "SG Savage Edition Kashmir Willow Bat",
    brand: "SG",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "High-power profile Kashmir willow bat built for hard tennis and heavy leather balls.",
    features: [
      "Handcrafted seasoned Kashmir Willow",
      "Full spine profile with minimal concaving",
      "Chevrons textured rubber grip",
      "Reinforced toe guard protection"
    ],
    sizes: ["Short Handle (SH)", "Size 6"],
    colors: ["Natural Willow / Neon Orange Decals"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Willow": "Seasoned Kashmir Willow",
      "Weight": "1200 - 1240 grams",
      "Target Ball": "Leather & Hard Tennis Balls"
    },
    iconSymbol: "🏏",
    visualGradient: "from-orange-600/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-test-gloves",
    name: "SG Test Professional Batting Gloves",
    brand: "SG",
    sport: "Cricket",
    category: "Batting Gloves",
    description: "Multi-layered high-density foam protection with genuine premium Pittards sheepskin leather palm.",
    features: [
      "Pittards leather palm for exceptional feel and sweat resistance",
      "Thermoplastic polyurethane inserts on leading finger joints",
      "Segmented split-finger styling for maximum flexibility",
      "Two-piece square thumb guard"
    ],
    sizes: ["Men (Adult)", "Youth"],
    colors: ["Traditional White / SG Green Emblems"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Protection Standard": "Test & First-Class Standard",
      "Palm Material": "Top-Grain Pittards Leather",
      "Ventilation": "Airflow gussets inside fingers"
    },
    iconSymbol: "🧤",
    visualGradient: "from-slate-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-test-pads",
    name: "SG Test White Batting Legguards",
    brand: "SG",
    sport: "Cricket",
    category: "Batting Pads",
    description: "Ultra-lightweight cane and high-density foam construction tested against 140+ km/h pace bowling.",
    features: [
      "Traditional cane front rods with lightweight HDF filling",
      "Contoured knee bolster with moisture-absorbing mesh lining",
      "Extra wide padded calf and ankle straps",
      "Instep wear patch with reinforced piping"
    ],
    sizes: ["Adult Men (Standard)", "Youth"],
    colors: ["Classic Test White"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Construction": "Traditional 7-cane split face",
      "Knee Cup": "Plastic moulded knee cap with fiber shield",
      "Weight": "Approx. 950g per pad"
    },
    iconSymbol: "🛡️",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-super-test-helmet",
    name: "SG Super Test Cricket Helmet",
    brand: "SG",
    sport: "Cricket",
    category: "Helmets",
    description: "High-impact ABS shell with powder-coated steel face grille and quick-dial size adjustor.",
    features: [
      "High-impact resistant polypropylene outer shell",
      "Adjustable hardened steel grille with wide visibility line",
      "Inner EPS liner with breathable sweat-wicking padding",
      "Rotary dial fit system at the back"
    ],
    sizes: ["Medium (56-58 cm)", "Large (59-62 cm)"],
    colors: ["Navy Blue", "Dark Green", "Classic Black"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Shell Material": "High Impact Engineering Polymer",
      "Grille Material": "Powder Coated Carbon Steel",
      "Certification": "BSI Compliant Safety Standard"
    },
    iconSymbol: "🪖",
    visualGradient: "from-blue-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-club-ball",
    name: "SG Club 4-Piece Leather Cricket Ball",
    brand: "SG",
    sport: "Cricket",
    category: "Cricket Balls",
    description: "Official match-quality alum-tanned leather ball with wool wound center for club tournaments.",
    features: [
      "First-grade alum tanned steer hide leather",
      "Hand-stitched with 75-80 stitches for pronounced seam",
      "High-durability cork and worsted wool core",
      "Waterproof wax finish for all weather conditions"
    ],
    sizes: ["Standard Match Weight (156g)"],
    colors: ["Tournament Red", "Day-Night White", "Pink"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Pieces": "4-Piece Construction",
      "Seam": "Raised seam with high rotation bite",
      "Origin": "Manufactured at SG Meerut Factory"
    },
    iconSymbol: "🔴",
    visualGradient: "from-red-900/25 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-inner-gloves",
    name: "SG Padded Cotton Wicket Keeping & Batting Inners",
    brand: "SG",
    sport: "Cricket",
    category: "Cricket Accessories",
    description: "Soft unbleached cotton inner gloves with padded palms to reduce ball shock and sweat accumulation.",
    features: [
      "100% fine cotton jersey material",
      "Padded palm layer for vibration dampening",
      "Elasticated wrist cuffs with secure fit",
      "Machine washable and sweat-absorbing"
    ],
    sizes: ["Adult", "Youth"],
    colors: ["Natural Off-White"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "100% Cotton with Foam Cushioning",
      "Suitability": "Under batting and wicket-keeping gloves"
    },
    iconSymbol: "🧤",
    visualGradient: "from-zinc-600/10 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-sg-ezeepak-bag",
    name: "SG Ezeepak Pro Wheelie Cricket Kit Bag",
    brand: "SG",
    sport: "Cricket",
    category: "Kit Bags",
    description: "Spacious heavy-duty nylon kit bag with all-terrain tractor wheels and dedicated bat compartments.",
    features: [
      "Premium waterproof 1680D nylon construction",
      "Heavy-duty tractor wheels with scuff protection rails",
      "Separate external padded bat sleeve fits 2 bats",
      "Separate ventilated footwear section"
    ],
    sizes: ["Full Senior Size (89 x 33 x 33 cm)"],
    colors: ["Black / Cyan / Grey Accents"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Heavy-Duty Coated 1680D Fabric",
      "Wheels": "Twin bearing heavy wheels",
      "Capacity": "Full senior player kit + pads + helmet"
    },
    iconSymbol: "🎒",
    visualGradient: "from-cyan-900/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 2. CRICKET - SS (Sareen Sports)
  // =================================================================
  {
    id: "cri-ss-ton-gladiator",
    name: "SS TON Gladiator English Willow Bat",
    brand: "SS",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "Premium Grade-1 hand-selected English Willow bat with immense sweet spot and thick contour edges.",
    features: [
      "Grade 1 air-dried English Willow cleft",
      "10 to 13 straight, clear grains with zero blemishes",
      "Massive edge thickness of 39-40mm",
      "Round Sarawak cane handle for supreme whipping power",
      "Supplied with padded SS full bat case"
    ],
    sizes: ["Short Handle (SH)"],
    colors: ["Classic Saffron / Carbon Black TON Decal"],
    availability: "Check Availability",
    status: "Premium",
    specifications: {
      "Willow Type": "Grade-1 English Willow",
      "Weight": "1170 - 1220 grams",
      "Handle": "12-piece cane handle with rubber dampening inserts"
    },
    iconSymbol: "🏏",
    visualGradient: "from-amber-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-ss-master-5000",
    name: "SS Master 5000 Kashmir Willow Bat",
    brand: "SS",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "Durable power-bat crafted from seasoned Kashmir willow clefts with protective face covering.",
    features: [
      "Hand-shaped thick edges and deep spine",
      "Fitted with SS aqua grip for tight control",
      "Toe guard protection against damp turf",
      "Excellent ping and pickup balance"
    ],
    sizes: ["Short Handle (SH)", "Size 5", "Size 6"],
    colors: ["Natural Wood / Red Chrome Badge"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Willow": "Seasoned Kashmir Willow",
      "Weight": "1190 - 1230 grams"
    },
    iconSymbol: "🏏",
    visualGradient: "from-red-800/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-ss-platino-gloves",
    name: "SS Platino Batting Gloves",
    brand: "SS",
    sport: "Cricket",
    category: "Batting Gloves",
    description: "Top-tier test batting gloves with multi-flex finger cut and high-impact plastazote inserts.",
    features: [
      "Selected sheep leather palm with reinforcement patch",
      "Plastazote finger rolls with reinforced fiber shields",
      "Double-sided sweat band wrist closure",
      "Airflow mesh side-panels"
    ],
    sizes: ["Men Adult", "Youth"],
    colors: ["White with Metallic Silver and Black SS Logo"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Protection": "High Impact Plastazote Padding",
      "Palm": "Premium Sheep Leather"
    },
    iconSymbol: "🧤",
    visualGradient: "from-zinc-500/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-ss-millennium-pads",
    name: "SS Millennium Batting Legguards",
    brand: "SS",
    sport: "Cricket",
    category: "Batting Pads",
    description: "Traditional cane legguards with low-rebound foam and ergonomic knee contouring.",
    features: [
      "Lightweight cane front construction",
      "Side wing protection against edge deflects",
      "Padded buckle protectors for ankle comfort",
      "Durable polyurethane facing"
    ],
    sizes: ["Senior Men"],
    colors: ["White"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Construction": "Traditional 7 Cane Structure",
      "Facing Material": "Imported PU"
    },
    iconSymbol: "🛡️",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-ss-matrix-helmet",
    name: "SS Matrix Pro Cricket Helmet",
    brand: "SS",
    sport: "Cricket",
    category: "Helmets",
    description: "Moulded outer shell with high-density EPS inner core and adjustable steel face guard.",
    features: [
      "Rigid thermoplastic protective shell",
      "Adjustable steel grille with chin strap buckle",
      "Air ventilation ports for Coimbatore summer humidity",
      "Washable comfort inner lining"
    ],
    sizes: ["Medium", "Large"],
    colors: ["Navy Blue", "Black"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Shell": "Moulded High Impact ABS",
      "Safety": "Club Match Approved"
    },
    iconSymbol: "🪖",
    visualGradient: "from-blue-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-ss-pro-guard-box",
    name: "SS Pro Guard Abdominal Protector",
    brand: "SS",
    sport: "Cricket",
    category: "Cricket Accessories",
    description: "Anatomically shaped high-impact polycarbonate cup with soft elastomer outer edge.",
    features: [
      "Tough polycarbonate core for maximum groin protection",
      "Soft silicone rubber perimeter eliminates chafing",
      "Curved shape matches natural athletic stance",
      "Fits standard athletic briefs and cricket jockstraps"
    ],
    sizes: ["Men", "Youth", "Boys"],
    colors: ["White / Blue Cushion Edge"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Reinforced Polycarbonate with TPE Cushion"
    },
    iconSymbol: "🛡️",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 3. CRICKET - MRF
  // =================================================================
  {
    id: "cri-mrf-grand-edition",
    name: "MRF Genius Grand Edition English Willow Bat",
    brand: "MRF",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "The official signature profile bat of Indian cricket masters with exquisite balance and ping.",
    features: [
      "Grade-1 English Willow cleft hand-pressed in India",
      "Mid sweet-spot with substantial profile and steep spine",
      "Slightly bowed blade for smooth pickup and dynamic strokeplay",
      "Chevron dynamic traction grip on cane handle"
    ],
    sizes: ["Short Handle (SH)"],
    colors: ["Master Red / Reflective Silver Hologram"],
    availability: "Check Availability",
    status: "Premium",
    specifications: {
      "Willow": "Grade 1 English Willow",
      "Edge Thickness": "38-40 mm",
      "Weight": "1175 - 1210 grams"
    },
    iconSymbol: "🏏",
    visualGradient: "from-red-900/25 via-red-950/40 to-zinc-900"
  },
  {
    id: "cri-mrf-legend-kw",
    name: "MRF Legend Kashmir Willow Bat",
    brand: "MRF",
    sport: "Cricket",
    category: "Cricket Bats",
    description: "Club-favorite Kashmir willow bat with high power punch and protective grain-faced coating.",
    features: [
      "Solid selected Kashmir Willow cleft",
      "Full back profile for heavy hitting",
      "Protective toe guard pre-installed",
      "Short handle suitable for leather or heavy tennis balls"
    ],
    sizes: ["Short Handle (SH)", "Size 6"],
    colors: ["Red / White MRF Decals"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Willow": "Seasoned Kashmir Willow",
      "Weight": "1210 - 1240 grams"
    },
    iconSymbol: "🏏",
    visualGradient: "from-red-800/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-mrf-genius-gloves",
    name: "MRF Genius Batting Gloves",
    brand: "MRF",
    sport: "Cricket",
    category: "Batting Gloves",
    description: "Modern styled multi-split batting gloves with premium leather palm and plastic inserts.",
    features: [
      "Soft sheep leather palm with grip reinforcement",
      "High density foam with fiber finger shields",
      "Two piece thumb protection",
      "Sweat-absorbing towelling wristband with velcro lock"
    ],
    sizes: ["Adult Men"],
    colors: ["Red / White / Black"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Level": "Club & Academy Match Level",
      "Palm": "Natural Leather"
    },
    iconSymbol: "🧤",
    visualGradient: "from-red-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "cri-mrf-pace-ball",
    name: "MRF Pace Red Leather Cricket Ball",
    brand: "MRF",
    sport: "Cricket",
    category: "Cricket Balls",
    description: "Match-tested 4-piece leather cricket ball with durable wool winding for fast bowlers.",
    features: [
      "Top grade tanned leather casing",
      "Finely hand-stitched pronounced seam",
      "Resistant to shape distortion over 40+ overs",
      "Excellent swing and seam retention"
    ],
    sizes: ["Senior Weight 156g"],
    colors: ["Cherry Red"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Pieces": "4-Piece Match Ball",
      "Center": "Cork and Wool Blend"
    },
    iconSymbol: "🔴",
    visualGradient: "from-red-900/25 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 4. BADMINTON - YONEX
  // =================================================================
  {
    id: "bad-yonex-astrox-100zz",
    name: "Yonex Astrox 100 ZZ Badminton Racket",
    brand: "Yonex",
    sport: "Badminton",
    category: "Badminton Rackets",
    description: "Decisive head-heavy power frame with hyper-slim shaft engineered for steep smash dominance.",
    features: [
      "Rotational Generator System distributes weight for continuous power",
      "Namd graphite in frame and shaft snaps back instantaneously",
      "Hyper Slim Solid Shaft slices through air friction",
      "Energy Boost Cap Plus maximizes shaft flex",
      "Made in Japan under stringent standards"
    ],
    sizes: ["3U/G5", "4U/G5"],
    colors: ["Kurenai (Dark Red / Teal Accents)"],
    availability: "Check Availability",
    status: "Premium",
    specifications: {
      "Frame Material": "HM Graphite + Namd + Tungsten + Black Micro Core",
      "Flex": "Extra Stiff",
      "Balance": "Head Heavy",
      "Recommended String Tension": "20 - 28 lbs"
    },
    iconSymbol: "🏸",
    visualGradient: "from-red-800/20 via-teal-900/30 to-zinc-900"
  },
  {
    id: "bad-yonex-nanoflare-800",
    name: "Yonex Nanoflare 800 Pro Racket",
    brand: "Yonex",
    sport: "Badminton",
    category: "Badminton Rackets",
    description: "Head-light speed racket designed for rapid defensive drives, net interceptions, and fast counters.",
    features: [
      "Sonic Flare System utilizes high elastic Torayca carbon",
      "Razor Frame profile reduces drag by 11%",
      "Wide profile sweet spot for forgiving off-center contacts",
      "Engineered for lightning fast counter-attacking doubles"
    ],
    sizes: ["4U/G5"],
    colors: ["Deep Matte Black / Green Flash"],
    availability: "Check Availability",
    status: "New Arrival",
    specifications: {
      "Weight": "4U (Avg. 83g)",
      "Flex": "Stiff",
      "Balance": "Head Light",
      "Max Tension": "28 lbs"
    },
    iconSymbol: "🏸",
    visualGradient: "from-cyan-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-arcsaber-11",
    name: "Yonex Arcsaber 11 Pro Racket",
    brand: "Yonex",
    sport: "Badminton",
    category: "Badminton Rackets",
    description: "Even-balance control frame offering prolonged shuttle hold on string bed for laser precision shots.",
    features: [
      "Control-Assist Bumper at top of frame locks strings",
      "Pocketing Booster carbon elastomer increases shuttle contact dwell time",
      "Super slim shaft with T-Anchor joint stability",
      "The definitive racket for pinpoint placement players"
    ],
    sizes: ["3U/G5", "4U/G5"],
    colors: ["Grayish Pearl / Crimson Accents"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Balance": "Even Balance",
      "Flex": "Stiff",
      "Made In": "Japan"
    },
    iconSymbol: "🏸",
    visualGradient: "from-rose-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-mavis-350",
    name: "Yonex Mavis 350 Nylon Shuttlecocks",
    brand: "Yonex",
    sport: "Badminton",
    category: "Shuttlecocks",
    description: "The world's most trusted nylon shuttlecock with Portuguese natural cork base and flight recovery.",
    features: [
      "Precision wing rib structure with near-feather flight trajectory",
      "Natural wood cork base gives crisp sound on racket impact",
      "Outlasts traditional shuttles by 3x in training sessions",
      "Tube of 6 shuttles sealed for fresh humidity"
    ],
    sizes: ["Tube of 6 Shuttles"],
    colors: ["Yellow (Slow Speed)", "Yellow (Medium Speed)", "White (Medium)"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Skirt": "Precision Nylon Composite",
      "Base": "Natural Portuguese Wood Cork",
      "Quantity": "6 pieces / Tube"
    },
    iconSymbol: "🏸",
    visualGradient: "from-yellow-700/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-aerosensa-2",
    name: "Yonex Aerosensa 2 Feather Shuttlecocks",
    brand: "Yonex",
    sport: "Badminton",
    category: "Shuttlecocks",
    description: "Tournament-grade duck feather shuttlecocks precision manufactured for uniform speed and spin.",
    features: [
      "Selected dense duck feathers with uniform quill curvature",
      "Composite cork base for standard tournament rebound",
      "Strict flight and velocity inspection before packaging",
      "Tube of 12 shuttles"
    ],
    sizes: ["Tube of 12 Feathers"],
    colors: ["Pure Natural White"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Natural Duck Feather + Composite Cork",
      "Speed": "Speed 77 (Ideal for Coimbatore climate)",
      "Quantity": "12 pieces / Tube"
    },
    iconSymbol: "🏸",
    visualGradient: "from-zinc-400/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-supergrap",
    name: "Yonex AC102EX Supergrap Overgrip",
    brand: "Yonex",
    sport: "Badminton",
    category: "Accessories",
    description: "The benchmark polyurethane overgrip offering tacky feel, sweat absorbency, and vibration control.",
    features: [
      "High tackiness gives instant slip-proof grip on handle",
      "Absorbs perspiration effectively during intense matches",
      "Tapered end with adhesive backing and finishing tape",
      "Pack of 3 individual grips"
    ],
    sizes: ["Pack of 3 Grips"],
    colors: ["White", "Black", "Yellow", "Teal", "Red"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Width": "25 mm",
      "Length": "1200 mm",
      "Thickness": "0.6 mm"
    },
    iconSymbol: "🩹",
    visualGradient: "from-yellow-600/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-pro-bag",
    name: "Yonex Pro Tournament 6-Racket Thermal Bag",
    brand: "Yonex",
    sport: "Badminton",
    category: "Racket Bags",
    description: "Pro-series double compartment thermal racket bag with padded backpack straps and shoe pocket.",
    features: [
      "Thermo-Guard lining protects racket strings and frame tension from heat",
      "Spacious main compartment holds up to 6 rackets comfortably",
      "Ventilated underside compartment for court shoes",
      "Ergonomic dual padded shoulder backpack straps"
    ],
    sizes: ["Senior 6 Racket Bag (78 x 28 x 33 cm)"],
    colors: ["Flame Red / Black", "Fine Blue / Navy"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Capacity": "Up to 6 rackets + apparel + shoes",
      "Material": "Heavy-duty waterproof polyester"
    },
    iconSymbol: "🎒",
    visualGradient: "from-blue-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-yonex-cushion-65z",
    name: "Yonex Power Cushion 65 Z3 Court Shoes",
    brand: "Yonex",
    sport: "Sports Shoes",
    category: "Badminton Shoes",
    description: "Elite non-marking badminton shoes with Power Cushion+ technology for effortless footwork and zero shock.",
    features: [
      "Power Cushion+ converts landing impact into forward propulsion",
      "Radial Blade Sole increases traction by 3% for sudden court lunges",
      "Seamless upper fits like a glove with zero pressure hotspots",
      "Non-marking natural gum rubber outsole for synthetic and wooden courts"
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["White / Ocean Blue Accent", "Black / Red"],
    availability: "Check Availability",
    status: "Premium",
    specifications: {
      "Sole Type": "Non-Marking Radial Blade Gum Rubber",
      "Cushioning": "Power Cushion+ Heel and Forefoot",
      "Weight": "Approx. 310g per shoe"
    },
    iconSymbol: "👟",
    visualGradient: "from-blue-700/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 5. BADMINTON - LI-NING
  // =================================================================
  {
    id: "bad-lining-gforce-superlite",
    name: "Li-Ning G-Force Superlite Carbon Racket",
    brand: "Li-Ning",
    sport: "Badminton",
    category: "Badminton Rackets",
    description: "Ultra-light 78g high modulus graphite racket built for blistering swing speed and smash whip.",
    features: [
      "Military-grade high-tensile carbon fiber construction",
      "Dynamic Optimum Frame enlarges the sweet spot area",
      "Aerotec-Beam System reduces air turbulence around the head",
      "Super-lightweight 78g frame allows effortless wrist snaps"
    ],
    sizes: ["78g (Superlite)"],
    colors: ["Matte Black / Electric Lime"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Weight": "78 grams (W1)",
      "Balance": "Head Heavy",
      "Max Tension": "30 lbs",
      "Shaft": "Flexible 7.0mm high-elastic shaft"
    },
    iconSymbol: "🏸",
    visualGradient: "from-lime-800/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "bad-lining-attack-pro-shoes",
    name: "Li-Ning Attack Pro Non-Marking Badminton Shoes",
    brand: "Li-Ning",
    sport: "Sports Shoes",
    category: "Badminton Shoes",
    description: "High-traction non-marking court shoes with TPU lateral stabilizer and breathable air mesh.",
    features: [
      "Multi-directional anti-slip hexagonal gum rubber tread",
      "Cushion-3 midsole provides triple density heel impact protection",
      "TPU shank plate prevents midfoot torsion during lunges",
      "Synthetic leather toe cap resistant to court scuffing"
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Classic White / Gold / Navy"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Outsole": "Non-marking gum rubber",
      "Upper": "PU synthetic leather + breathable mesh"
    },
    iconSymbol: "👟",
    visualGradient: "from-yellow-800/15 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 6. FOOTBALL - NIVIA
  // =================================================================
  {
    id: "ft-nivia-shining-star",
    name: "Nivia Shining Star FIFA Pro Match Football",
    brand: "Nivia",
    sport: "Football",
    category: "Football",
    description: "Official FIFA Quality Pro certified match ball with hand-stitched polyurethane composite skin.",
    features: [
      "FIFA Quality Pro certified for top-level tournament play",
      "32-panel classical geometric hand-stitched pattern",
      "Microfiber PU composite leather with soft touch feel",
      "Reinforced multi-ply backing maintains true spherical shape",
      "Air-lock latex bladder for reliable air pressure retention"
    ],
    sizes: ["Size 5 (Official Senior Match)"],
    colors: ["White / Black Geometric", "High-Vis Neon Yellow"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Standard": "FIFA Quality Pro",
      "Material": "PU Microfiber Composite",
      "Weight": "420 - 445 grams",
      "Circumference": "68.5 - 69.5 cm"
    },
    iconSymbol: "⚽",
    visualGradient: "from-blue-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-nivia-storm-ball",
    name: "Nivia Storm Turf & Hard Ground Football",
    brand: "Nivia",
    sport: "Football",
    category: "Football",
    description: "India's highest selling training ball engineered for gravel, rough grass, and artificial turfs.",
    features: [
      "Rubberized abrasion-resistant outer cover",
      "Moulded 32 panel seamless design prevents water intake",
      "High air-retention butyl bladder",
      "Extremely durable on rough concrete and school playgrounds"
    ],
    sizes: ["Size 5", "Size 4"],
    colors: ["White / Blue Star", "Yellow / Black"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Construction": "Rubber Moulded",
      "Ground": "Hard ground, concrete, mud, and grass"
    },
    iconSymbol: "⚽",
    visualGradient: "from-slate-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-nivia-dominator-studs",
    name: "Nivia Dominator Pro Football Studs",
    brand: "Nivia",
    sport: "Sports Shoes",
    category: "Football Shoes",
    description: "Multi-stud TPU soleplate boot with textured synthetic upper for instant ball curl and traction.",
    features: [
      "Pre-moulded round and triangular stud configuration for rapid acceleration",
      "Water-resistant lightweight synthetic upper",
      "Die-cut cushioned EVA sockliner for arch comfort",
      "Reinforced heel counter locks foot firmly during sharp cuts"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Cyan Blue / Solar Yellow", "Stealth Black / White"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Soleplate": "High Tensile TPU Sole",
      "Ground Profile": "FG/AG (Firm Ground & Artificial Grass Turf)"
    },
    iconSymbol: "👟",
    visualGradient: "from-blue-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-nivia-spider-gloves",
    name: "Nivia Spider Pro Goalkeeper Gloves",
    brand: "Nivia",
    sport: "Football",
    category: "Goalkeeper Gloves",
    description: "German latex palm gloves with removable finger spine supports for safe parrying.",
    features: [
      "3.5mm German latex palm delivers exceptional grip in wet and dry conditions",
      "Removable finger spines protect joints from hyper-extension",
      "Breathable air mesh body dissipates hand perspiration",
      "Full wrap-around latex wrist bandage with velcro lock"
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10"],
    colors: ["Fluo Orange / Black Spider Web Pattern"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Palm": "3.5mm German Contact Latex",
      "Finger Protection": "4-Finger Spines included"
    },
    iconSymbol: "🧤",
    visualGradient: "from-orange-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-nivia-armour-shinguard",
    name: "Nivia Armour Shin Guards with Ankle Protection",
    brand: "Nivia",
    sport: "Football",
    category: "Shin Guards",
    description: "Rigid PP front shield with shock-absorbing EVA foam backing and fixed elastic ankle wrap.",
    features: [
      "Anatomically shaped left/right contoured hard shields",
      "Attached padded ankle guard protects achilles and malleolus bones",
      "Air ventilation slits promote cooling",
      "Wide adjustable calf strap keeps guard firmly in place"
    ],
    sizes: ["Medium (Youth)", "Large (Adult)"],
    colors: ["Black / Neon Yellow Trim"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Shield": "High-Density Polypropylene",
      "Backing": "EVA Shock Cushion"
    },
    iconSymbol: "🛡️",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-nivia-rapid-pump",
    name: "Nivia Rapid Double Action Ball Pump",
    brand: "Nivia",
    sport: "Football",
    category: "Sports Accessories",
    description: "Dual-action ball inflator pumping air on both push and pull strokes with steel needle included.",
    features: [
      "Pumps air on both forward push and backward pull",
      "Flexible extension hose prevents needle breakage inside valve",
      "Includes 2 stainless steel inflation pins and plastic toy nozzle",
      "Lightweight compact body fits easily in any sports kit bag"
    ],
    sizes: ["Standard Compact (8 inch)"],
    colors: ["High-Gloss Black / Red Accents"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Action": "Double Action Dual Stroke",
      "Included": "Hose + 2 Steel Needles"
    },
    iconSymbol: "🧰",
    visualGradient: "from-red-800/15 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 7. FOOTBALL - COSCO
  // =================================================================
  {
    id: "ft-cosco-platina",
    name: "Cosco Platina FIFA-Spec Match Football",
    brand: "Cosco",
    sport: "Football",
    category: "Football",
    description: "Micro-textured hybrid PU ball with zero water-seepage seams and balanced aerodynamics.",
    features: [
      "Micro-dimple surface stabilizes air-flight trajectory",
      "Thermally compressed seamless panel technology",
      "High-rebound elastomeric foam backing gives explosive strikes",
      "Retains true roundness after thousands of heavy kick cycles"
    ],
    sizes: ["Size 5"],
    colors: ["Pristine White / Crimson / Silver Flashes"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Construction": "Hybrid Thermal Bonded",
      "Bladder": "Air-Retention Butyl Bladder"
    },
    iconSymbol: "⚽",
    visualGradient: "from-slate-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "ft-cosco-delta",
    name: "Cosco Delta Football",
    brand: "Cosco",
    sport: "Football",
    category: "Football",
    description: "Hand-stitched synthetic leather football designed for school and club training grounds.",
    features: [
      "Durable PVC outer skin resistant to abrasion",
      "Multi-layered polyester and cotton lining",
      "Latex bladder provides uniform rebound and bounce",
      "Vibrant high-contrast graphics for easy visibility under floodlights"
    ],
    sizes: ["Size 5"],
    colors: ["White / Black / Gold Lines"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Stitching": "Hand Stitched 32 Panels",
      "Weight": "410 - 430 grams"
    },
    iconSymbol: "⚽",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 8. BASKETBALL - COSCO & NIVIA
  // =================================================================
  {
    id: "bb-cosco-tournament-9",
    name: "Cosco Tournament-9 Composite Leather Basketball",
    brand: "Cosco",
    sport: "Basketball",
    category: "Basketball",
    description: "FIBA-compliant composite leather basketball with deep wide channels and moisture-wicking surface.",
    features: [
      "Premium microfiber composite leather outer skin",
      "Wide channel concave geometry gives superb fingertip control",
      "Nylon wound yarn carcass maintains spherical balance forever",
      "Ideal for both polished hardwood indoor and smooth outdoor courts"
    ],
    sizes: ["Size 7 (Official Senior Men)", "Size 6 (Official Women)"],
    colors: ["Burnt Amber Orange / Black Channels"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Compliance": "FIBA Specification Size & Weight",
      "Circumference": "75 - 77 cm (Size 7)",
      "Surface": "Indoor / Outdoor Hybrid"
    },
    iconSymbol: "🏀",
    visualGradient: "from-amber-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "bb-cosco-rim-net",
    name: "Cosco Heavy Duty Steel Basketball Rim with Net",
    brand: "Cosco",
    sport: "Basketball",
    category: "Basketball Accessories",
    description: "Solid 16mm steel tournament basketball hoop with all-weather braided nylon net.",
    features: [
      "Heavy-duty solid steel ring with durable powder coating",
      "Reinforced steel mounting plate with standard hole spacing",
      "Includes heavy weather-proof 12-loop braided tri-color nylon net",
      "Mounts easily to backboards or wall structures"
    ],
    sizes: ["Official 45cm Diameter Rim"],
    colors: ["Safety Orange Rim / Red-White-Blue Net"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Diameter": "45 cm Official Standard",
      "Steel Thickness": "16mm Solid Gauge"
    },
    iconSymbol: "🏀",
    visualGradient: "from-orange-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "bb-nivia-graffiti",
    name: "Nivia Graffiti Street Outdoor Basketball",
    brand: "Nivia",
    sport: "Basketball",
    category: "Basketball",
    description: "Ultra-durable vulcanized rubber basketball engineered for rough outdoor asphalt and concrete.",
    features: [
      "High-grip pebble-grain rubber cover resistant to dust slip",
      "Deep recessed channel lines for secure finger placement",
      "Heavy vulcanized bladder holds steady air pressure for weeks",
      "Urban graffiti street artwork"
    ],
    sizes: ["Size 7"],
    colors: ["Graffiti Street Multi-Color", "Black / Neon Orange"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Heavy-Duty Vulcanized Rubber",
      "Court": "Outdoor Concrete & Asphalt Courts"
    },
    iconSymbol: "🏀",
    visualGradient: "from-purple-900/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 9. VOLLEYBALL - NIVIA & COSCO
  // =================================================================
  {
    id: "vb-nivia-g-2020",
    name: "Nivia G-2020 Professional Microfiber Volleyball",
    brand: "Nivia",
    sport: "Volleyball",
    category: "Volleyball",
    description: "Official match volleyball with ultra-soft laminated microfiber panels for sting-free bumps and spikes.",
    features: [
      "18-panel laminated composite microfiber leather",
      "Microfiber cushioning layer prevents forearm sting and bruises",
      "High-spin aerodynamic panel geometry",
      "Approved for collegiate, district, and state tournament games"
    ],
    sizes: ["Official Size 4", "Official Size 5"],
    colors: ["Blue / Yellow Wave Pattern"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Construction": "Laminated Microfiber",
      "Weight": "260 - 280 grams",
      "Pressure": "4.25 - 4.61 PSI"
    },
    iconSymbol: "🏐",
    visualGradient: "from-blue-800/20 via-yellow-950/20 to-zinc-900"
  },
  {
    id: "vb-nivia-super-volley-net",
    name: "Nivia Competition Steel Cable Volleyball Net",
    brand: "Nivia",
    sport: "Volleyball",
    category: "Volleyball Accessories",
    description: "Tournament specification braided volleyball net with top aircraft steel wire and heavy vinyl headband.",
    features: [
      "Heavy-duty knotted twisted nylon twine (3.0mm)",
      "Top steel cable line prevents center netting sagging",
      "Heavy-gauge white vinyl upper and bottom edge binding",
      "Includes tie cords for standard pole attachment"
    ],
    sizes: ["Official Match Size (9.5 x 1 Meter)"],
    colors: ["Black Netting / White Headband"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Length": "9.5 Meters",
      "Cable": "Sheathed Aircraft Steel Wire"
    },
    iconSymbol: "🏐",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "vb-cosco-super-volley",
    name: "Cosco Super Volley Match Ball",
    brand: "Cosco",
    sport: "Volleyball",
    category: "Volleyball",
    description: "True-spherical moulded volleyball with soft rubberized touch for all-weather outdoor court games.",
    features: [
      "Soft polyurethane surface minimizes arm impact",
      "Moulded 18-panel seamless construction",
      "High air-retention butyl bladder",
      "Waterproof and weather-proof for outdoor school play"
    ],
    sizes: ["Size 4"],
    colors: ["White / Royal Blue / Golden Yellow"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Soft Rubberized PU",
      "Circumference": "65 - 67 cm"
    },
    iconSymbol: "🏐",
    visualGradient: "from-blue-700/20 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 10. FITNESS - VECTOR X & COSCO
  // =================================================================
  {
    id: "gym-vector-adjustable-dumbbells",
    name: "Vector X Chrome Adjustable Dumbbell Set (20 KG)",
    brand: "Vector X",
    sport: "Fitness",
    category: "Fitness Equipment",
    description: "Solid high-gloss electroplated chrome plates with non-slip knurled handles and spinlock collars.",
    features: [
      "Electroplated chrome plates resist rust, sweat, and chipping",
      "Knurled ergonomic steel handles for confident grip",
      "Spinlock star collars with rubber gaskets lock weights tightly",
      "Comes in a heavy-duty portable carrying storage case"
    ],
    sizes: ["20 KG Box Set", "30 KG Box Set"],
    colors: ["Polished Chrome Silver"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Configurations": "4x 2.5kg, 4x 1.25kg, 4x 0.5kg plates + 2 rods",
      "Case": "Impact-resistant moulded carry case"
    },
    iconSymbol: "💪",
    visualGradient: "from-rose-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "gym-vector-kettlebell",
    name: "Vector X Cast Iron Solid Kettlebell",
    brand: "Vector X",
    sport: "Fitness",
    category: "Fitness Equipment",
    description: "Single-piece solid cast iron kettlebell with wide textured handle for two-handed swings and cleans.",
    features: [
      "Single-piece gravity casting with zero welding seams",
      "Flat machined base prevents wobbling when placed on floor",
      "Textured matte black powder coating holds chalk securely",
      "Color-coded weight band ring for quick identification"
    ],
    sizes: ["8 KG", "12 KG", "16 KG", "20 KG"],
    colors: ["Matte Black with Color Identifier Ring"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Material": "Solid Heavy Cast Iron",
      "Handle Finish": "Powder Coated Grip"
    },
    iconSymbol: "💪",
    visualGradient: "from-zinc-700/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "gym-vector-pushup-bars",
    name: "Vector X Heavy Duty Ergo Pushup Bars",
    brand: "Vector X",
    sport: "Fitness",
    category: "Fitness Equipment",
    description: "Tilted ergonomic push-up stands with thick sweat-proof foam grips and non-skid rubber feet.",
    features: [
      "Tilted incline angle relieves carpal wrist strain",
      "Enables deeper chest drop and greater muscle recruitment",
      "High-density sweat-absorbing foam handles",
      "Non-slip TPR rubber footpads protect tiles and wooden floors"
    ],
    sizes: ["Pair (One Size)"],
    colors: ["Matte Black / Red Cushion"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Weight Capacity": "Tested up to 150 KG user weight",
      "Material": "Reinforced structural polymer"
    },
    iconSymbol: "💪",
    visualGradient: "from-red-900/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "gym-vector-power-bands",
    name: "Vector X Resistance Power Loop Bands (Set of 5)",
    brand: "Vector X",
    sport: "Fitness",
    category: "Fitness Equipment",
    description: "100% natural Malaysian latex exercise loop bands across 5 progressive resistance levels.",
    features: [
      "5 progressive resistance levels (X-Light, Light, Medium, Heavy, X-Heavy)",
      "High elasticity with zero snapback snapping",
      "Ideal for warm-ups, glute activation, physical therapy, and pull-up assist",
      "Includes breathable mesh carry pouch"
    ],
    sizes: ["Set of 5 Bands with Pouch"],
    colors: ["Green, Blue, Yellow, Red, Black"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Material": "100% Natural Latex",
      "Resistance": "5 lbs to 40 lbs tension range"
    },
    iconSymbol: "💪",
    visualGradient: "from-emerald-800/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "gym-cosco-jump-rope",
    name: "Cosco High Speed Ball-Bearing Jump Rope",
    brand: "Cosco",
    sport: "Fitness",
    category: "Fitness Equipment",
    description: "Fast-spinning coated steel wire skipping rope with 360-degree dual ball bearings for speed cardio.",
    features: [
      "360-degree dual ball-bearing system prevents wire tangling",
      "Tough PVC coated steel cable for smooth high-speed revolutions",
      "Easily adjustable cable length with quick-tighten thumb screws",
      "Lightweight grooved non-slip aluminum alloy handles"
    ],
    sizes: ["3-Meter Adjustable Cable"],
    colors: ["Metallic Blue", "Anodized Red", "Black"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Cable": "Coated 2.5mm High-Tensile Steel Wire",
      "Bearings": "Dual Precision High-Speed Bearings"
    },
    iconSymbol: "💪",
    visualGradient: "from-blue-800/15 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 11. ATHLETICS, RUNNING & SPORTS SHOES - NIKE, ADIDAS, PUMA
  // =================================================================
  {
    id: "sh-nike-air-zoom-rival",
    name: "Nike Air Zoom Rival Fly Running Shoes",
    brand: "Nike",
    sport: "Athletics & Running",
    category: "Sports Shoes",
    description: "Speed-focused road racer with forefoot Zoom Air unit and breathable engineered mesh upper.",
    features: [
      "Forefoot Zoom Air unit delivers explosive responsive energy return",
      "Lightweight foam midsole absorbs hard road impact effortlessly",
      "Midfoot fit band integrates with laces for locked-in containment",
      "High-abrasion crash pad rubber on heel for extended road durability"
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Platinum White / Volt Green / Black", "Triple Black"],
    availability: "Check Availability",
    status: "Premium",
    specifications: {
      "Drop": "8mm heel-to-toe pitch",
      "Weight": "Approx. 240g",
      "Arch Support": "Neutral Athletic Support"
    },
    iconSymbol: "👟",
    visualGradient: "from-lime-800/15 via-zinc-800 to-zinc-900"
  },
  {
    id: "sh-adidas-barricade",
    name: "Adidas Barricade Non-Marking Court Shoes",
    brand: "Adidas",
    sport: "Badminton",
    category: "Sports Shoes",
    description: "Legendary non-marking court shoes with Torsion system stability for badminton, squash, and indoor courts.",
    features: [
      "Adiwear non-marking rubber outsole gives instant stopping bite on indoor courts",
      "Torsion System stabilizes midfoot against rolling during hard lateral lunges",
      "Adiprene+ cushioning under forefoot maintains propulsion",
      "Reinforced Adituff material on inner toe prevents drag abrasion"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Royal Blue / White 3-Stripes", "Matte Carbon / Solar Red"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Floor Compatibility": "Indoor Synthetic, Wood, and Asphalt",
      "Sole": "Non-Marking Adiwear Compound"
    },
    iconSymbol: "👟",
    visualGradient: "from-blue-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "sh-puma-future-match",
    name: "Puma Future Match FG/AG Football Boots",
    brand: "Puma",
    sport: "Football",
    category: "Sports Shoes",
    description: "Adaptive Fuzionfit midfoot compression band boot with dynamic multi-stud agility plate.",
    features: [
      "FUZIONFIT upper adapts to foot shape with or without laces",
      "Engineered 3D textures in key contact zones enhance ball grip and curve",
      "Dynamic Motion System dual-density outsole for sharp direction cuts",
      "FG/AG stud layout suitable for natural firm grass and artificial turfs"
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Electric Lime / Deep Navy / White"],
    availability: "Check Availability",
    status: "New Arrival",
    specifications: {
      "Outsole": "Dynamic Motion FG/AG Plate",
      "Collar": "Mid-Cut Knit Adaptive Collar"
    },
    iconSymbol: "👟",
    visualGradient: "from-teal-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "wr-nike-dri-fit",
    name: "Nike Academy Dri-FIT Training Tee",
    brand: "Nike",
    sport: "Athletics & Running",
    category: "Sports Wear",
    description: "High-performance moisture-wicking athletic tee with back mesh ventilation for extreme heat.",
    features: [
      "Dri-FIT technology moves perspiration quickly from skin to surface",
      "Lightweight double-knit fabric feels smooth and silky",
      "Mesh strip across back and chest promotes constant airflow",
      "Raglan shoulder design allows full shoulder rotation during sprints"
    ],
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    colors: ["Midnight Navy / White Swoosh", "Classic Black / Crimson"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Fabric": "100% Recycled Polyester",
      "Fit": "Standard athletic fit"
    },
    iconSymbol: "👕",
    visualGradient: "from-blue-900/15 via-zinc-800 to-zinc-900"
  },

  // =================================================================
  // 12. SCHOOL SPORTS - VECTOR X & COSCO
  // =================================================================
  {
    id: "sch-vector-agility-ladder",
    name: "Vector X 4-Meter Speed Agility Ladder",
    brand: "Vector X",
    sport: "School Sports",
    category: "Training Equipment",
    description: "Heavy-duty 4-meter footwork coordination ladder with adjustable flat rungs and turf anchor pegs.",
    features: [
      "High-impact flat polymer rungs resist snapping even when stepped on",
      "Adjustable rung spacing allows modulated sprint and footwork drills",
      "Includes 4 metal ground stakes for outdoor turf anchoring",
      "Drawstring weather-proof carrying bag included"
    ],
    sizes: ["4 Meters (8 Rungs)", "6 Meters (12 Rungs)"],
    colors: ["Safety Neon Yellow / Heavy Duty Black Webbing"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Length": "4 Meters standard",
      "Rungs": "8 adjustable flat shatterproof rungs"
    },
    iconSymbol: "🏆",
    visualGradient: "from-cyan-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "sch-vector-marker-cones",
    name: "Vector X Space Saucer Marker Cones (Set of 50)",
    brand: "Vector X",
    sport: "School Sports",
    category: "Training Equipment",
    description: "Pack of 50 flexible saucer marker cones on a steel transport rack for school field boundaries.",
    features: [
      "Flexible PVC bounces back immediately when stepped on",
      "UV-resistant bright neon colors visible from across the field",
      "Hollow center with chrome steel carry stand included",
      "Indispensable for dribbling circuits, agility drills, and field marking"
    ],
    sizes: ["Set of 50 with Steel Stand"],
    colors: ["Assorted (Fluo Yellow, Orange, Green, Blue, White)"],
    availability: "Check Availability",
    status: "Popular",
    specifications: {
      "Quantity": "50 cones (10 of each color)",
      "Stand": "Steel rod carry rack included"
    },
    iconSymbol: "🏆",
    visualGradient: "from-orange-800/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "sch-vector-whistle",
    name: "Vector X Stainless Steel Referee Whistle with Lanyard",
    brand: "Vector X",
    sport: "School Sports",
    category: "Sports Accessories",
    description: "High-decibel pea-less metal referee whistle with soft silicone mouth-grip and nylon lanyard.",
    features: [
      "Produces piercing 115+ decibel tone heard across noisy stadiums",
      "Corrosion-resistant electroplated stainless steel body",
      "Cushioned silicone mouth-guard prevents tooth impact",
      "Heavy braided neck lanyard with safety quick-release clip"
    ],
    sizes: ["Standard Match Referee"],
    colors: ["Polished Chrome Silver"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Sound Output": "115+ Decibels",
      "Material": "Stainless Steel"
    },
    iconSymbol: "🏆",
    visualGradient: "from-zinc-600/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "sch-vector-team-bibs",
    name: "Vector X Reversible Mesh Team Bibs (Set of 10)",
    brand: "Vector X",
    sport: "School Sports",
    category: "Sports Wear",
    description: "Breathable open-hole mesh training bibs with reinforced necklines for school practice matches.",
    features: [
      "Lightweight 100% polyester mesh permits fast heat dissipation",
      "Reinforced double stitching along neck and arm openings",
      "Loose non-restrictive cut fits easily over jerseys or school uniforms",
      "Machine washable and quick drying"
    ],
    sizes: ["Senior (Adult)", "Junior (School)"],
    colors: ["Fluorescent Neon Green", "Vibrant Orange", "Royal Blue"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Pack": "Set of 10 Bibs",
      "Fabric": "Breathable Micro-Mesh Polyester"
    },
    iconSymbol: "🎽",
    visualGradient: "from-lime-900/20 via-zinc-800 to-zinc-900"
  },
  {
    id: "sch-cosco-relay-batons",
    name: "Cosco Aluminum Anodized Relay Batons (Set of 8)",
    brand: "Cosco",
    sport: "School Sports",
    category: "Training Equipment",
    description: "Official IAAF track and field hollow aluminum relay batons with rolled smooth safety edges.",
    features: [
      "Lightweight anodized hollow aluminum tubing",
      "Smooth rolled safety edges prevent cuts during frantic handoffs",
      "Non-slip satin finish gives secure grip in sweaty hands",
      "Set of 8 distinct vibrant metallic colors"
    ],
    sizes: ["Official IAAF Standard (30 cm length, 38 mm dia)"],
    colors: ["Set of 8 Assorted Anodized Colors"],
    availability: "Check Availability",
    status: "Available",
    specifications: {
      "Standard": "IAAF Track & Field Specification",
      "Weight": "Approx. 50g each"
    },
    iconSymbol: "🏆",
    visualGradient: "from-amber-800/15 via-zinc-800 to-zinc-900"
  }
];

export interface CollectionBanner {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  bgGradient: string;
  imageAccent: string;
  tagline: string;
}

export const FEATURED_COLLECTIONS: CollectionBanner[] = [
  {
    id: "col-cricket",
    title: "Professional Cricket Collection",
    subtitle: "English & Kashmir Willow Blades, Premium Guards & Kit Bags",
    category: "Cricket",
    bgGradient: "from-amber-600/35 via-amber-950/20 to-black/90",
    imageAccent: "🏏 WILLOW EDGE",
    tagline: "Hand-selected, double-knocked profile bats for power-hitting."
  },
  {
    id: "col-badminton",
    title: "Badminton Essentials",
    subtitle: "High Tension Carbon Rackets, Shuttles & Computerized Stringing",
    category: "Badminton",
    bgGradient: "from-emerald-600/35 via-emerald-950/20 to-black/90",
    imageAccent: "🏸 CARBON FLEX",
    tagline: "Ultra-light frame series with nanotech high-flex shafts."
  },
  {
    id: "col-football",
    title: "Football Zone",
    subtitle: "FIFA-Spec Match Balls, Elite High-Traction Studs & Guards",
    category: "Football",
    bgGradient: "from-blue-600/35 via-blue-950/20 to-black/90",
    imageAccent: "⚽ ACTIVE TREAD",
    tagline: "Perfect aerodynamic panels paired with carbon outer TPU plates."
  },
  {
    id: "col-fitness",
    title: "Fitness & Gym Equipment",
    subtitle: "Cast Iron Weights, Olympic Bars, Dumbbells & Tech Gear",
    category: "Fitness",
    bgGradient: "from-rose-600/35 via-rose-950/20 to-black/90",
    imageAccent: "💪 HEAVY DUTY",
    tagline: "Industrial-grade home-gym plates and dynamic balance benches."
  }
];
