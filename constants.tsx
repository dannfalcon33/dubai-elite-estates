import { Property, Realtor } from "./types";

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1549918830-59cf9a2442e9?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1526495124232-a02e0a8a4871?auto=format&fit=crop&q=80&w=1920",
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687940-472f6b6957e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    ],
  },
];

export const REALTORS: Realtor[] = [
  {
    id: "1",
    name: "Alexander Sterling",
    role: "Senior Partner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Over 15 years specializing in Ultra-High-Net-Worth offshore investments in Dubai.",
  },
  {
    id: "2",
    name: "Elena Petrova",
    role: "Luxury Portfolio Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "The go-to expert for Palm Jumeirah and waterfront developments.",
  },
  {
    id: "3",
    name: "Marcus Vane",
    role: "Head of Acquisitions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
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
