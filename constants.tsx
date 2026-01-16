import { Property, Realtor } from "./types";

export const HERO_IMAGES = [
  "/images/hero/hero_dubai_day_1768574083924.png",
  "/images/hero/hero_dubai_night_1768574101149.png",
  "/images/hero/hero_marina_sunset_1768574132468.png",
  "/images/hero/hero_palm_aerial_1768574118391.png",
];

export const PROPERTIES: Property[] = [
  {
    id: "1",
    name: "The Royal Atlantis Sky Villa",
    location: "Palm Jumeirah, Dubai",
    price: 12500000,
    description:
      "An architectural masterpiece offering 360-degree views of the Arabian Gulf and the Dubai skyline.",
    details: { beds: 5, baths: 6, sqft: 8500, type: "Penthouse" },
    images: [
      "/images/properties/p1/p1_living_room_1768574166837.png",
      "/images/properties/p1/p1_bedroom_1768574182570.png",
      "/images/properties/p1/p1_terrace_pool_1768574195537.png",
      "/images/properties/p1/p1_exterior_building_1768574211442.png",
    ],
  },
  {
    id: "2",
    name: "Emirates Hills Mansion",
    location: "Emirates Hills, Dubai",
    price: 28000000,
    description:
      "Traditional elegance meets modern luxury in the 'Beverly Hills' of Dubai. Private cinema and spa included.",
    details: { beds: 7, baths: 9, sqft: 15000, type: "Mansion" },
    images: [
      "/images/properties/p2/p2_exterior_mansion_1768574257581.png",
      "/images/properties/p2/p2_cinema_room_1768574271940.png",
      "/images/properties/p2/p2_spa_pool_1768574286431.png",
      "/images/properties/p2/p2_garden_pool_1768574301827.png",
    ],
  },
  {
    id: "3",
    name: "Bulgari Resort Residence",
    location: "Jumeirah Bay Island, Dubai",
    price: 18700000,
    description:
      "Exclusive island living with world-class amenities and a private marina at your doorstep.",
    details: { beds: 4, baths: 5, sqft: 6200, type: "Apartment" },
    images: [
      "/images/properties/p3/p3_living_room_1768574352721.png",
      "/images/properties/p3/p3_balcony_view_1768574338584.png",
      "/images/properties/p3/p3_bathroom_1768574368049.png",
      "/images/properties/p3/p3_exterior_resort_1768574383540.png",
    ],
  },
];

export const REALTORS: Realtor[] = [
  {
    id: "1",
    name: "Alexander Sterling",
    role: "Senior Partner",
    image: "/images/experts/expert_alexander_1768574397254.png",
    bio: "Over 15 years specializing in Ultra-High-Net-Worth offshore investments in Dubai.",
  },
  {
    id: "2",
    name: "Elena Petrova",
    role: "Luxury Portfolio Director",
    image: "/images/experts/expert_elena_1768574410485.png",
    bio: "The go-to expert for Palm Jumeirah and waterfront developments.",
  },
  {
    id: "3",
    name: "Marcus Vane",
    role: "Head of Acquisitions",
    image: "/images/experts/expert_marcus_1768574423450.png",
    bio: "Dedicated to finding off-market opportunities for discerning international buyers.",
  },
];

export const HERO_CONTENT = {
  label: "Real Estate Investment",
  title: {
    main: "The Art of",
    sub: "Enduring Wealth",
  },
  description:
    "Securing legacy through prime real estate acquisition. We provide bespoke advisory for the discerning investor looking to capitalize on Dubai's exponential growth.",
  buttons: {
    primary: "Get Started",
    secondary: "Watch The Film",
  },
  navigation: {
    brand: {
      main: "DUBAI",
      sub: "ELITE",
    },
    cta: "Inquire",
    compare: "Compare",
  },
};

export const ABOUT_CONTENT = {
  label: "Heritage & Capital",
  title: {
    main: "Curating Value Beyond",
    sub: "The Blueprint.",
  },
  description: {
    p1: "Dubai Elite Estates was founded on a singular principle: real estate is not just about property; it is about the preservation and expansion of legacy.",
    p2: "We operate at the intersection of luxury lifestyle and high-yield investment finance, offering an insider's gateway to the UAE's most coveted assets before they reach the open market.",
  },
  features: {
    security: {
      title: "Asset Security",
      desc: "Rigorous due diligence for every acquisition.",
    },
    yields: {
      title: "High Yields",
      desc: "Strategies optimized for maximum ROI.",
    },
  },
  button: "Read Our 2024 Market Report",
};

export const PROPERTIES_CONTENT = {
  label: "Exclusive Portfolio",
  title: "Curated Collections",
  description:
    "Discover architectural marvels that redefine the boundaries of engineering and design excellence.",
  cta: "Consult Agents",
};

export const REALTORS_CONTENT = {
  label: "Our Experts",
  title: "The Guardians of Elegance",
  cta: "Speak with a Consultant",
};

export const FOOTER_CONTENT = {
  brand: {
    main: "DUBAI",
    sub: "ELITE",
  },
  tagline: "Global Real Estate & Investment Advisory",
  copyright: "© 2024 DUBAI ELITE. ALL RIGHTS RESERVED.",
};

export const MODAL_CONTENT = {
  form: {
    title: "Exclusive Inquiry",
    subtitle:
      "Connect with our specialized agents for a private viewing or market analysis.",
    submit: "Submit Inquiry",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone",
      investment: "Investment Range (USD)",
      message: "Message",
    },
  },
  success: {
    title: "Request Received",
    message:
      "Thank you for your interest in our portfolio. A specialist representative will reach out to you within the next 24 hours to schedule a consultation.",
    button: "Close Window",
  },
};
