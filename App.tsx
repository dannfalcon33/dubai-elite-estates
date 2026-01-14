import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Scale,
  Play,
  X,
  ArrowRight,
  ShieldCheck,
  Globe,
  TrendingUp,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";
import {
  HERO_IMAGES,
  PROPERTIES,
  REALTORS,
  HERO_CONTENT,
  ABOUT_CONTENT,
  PROPERTIES_CONTENT,
  REALTORS_CONTENT,
  FOOTER_CONTENT,
} from "./constants";
import LeadModal from "./components/LeadModal";
import PropertyCarousel from "./components/PropertyCarousel";
import ComparisonTool from "./components/ComparisonTool";
import PropertyDetailsModal from "./components/PropertyDetailsModal";
import { Property } from "./types";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleCompare = (id: string) => {
    setSelectedForCompare((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const removeCompare = (id: string) => {
    setSelectedForCompare((prev) => prev.filter((p) => p !== id));
  };

  const openDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailsOpen(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openLeadModal = () => setIsModalOpen(true);

  return (
    <div
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-black text-white"
      ref={scrollRef}
    >
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none mix-blend-difference text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-serif tracking-widest pointer-events-auto cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {HERO_CONTENT.navigation.brand.main}{" "}
          <span className="font-light opacity-70">
            {HERO_CONTENT.navigation.brand.sub}
          </span>
        </motion.div>
        <div className="flex gap-4 pointer-events-auto">
          {selectedForCompare.length > 0 && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setIsComparisonOpen(true)}
              className="bg-white text-black px-6 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
            >
              {HERO_CONTENT.navigation.compare} ({selectedForCompare.length})
            </motion.button>
          )}
          <button
            onClick={openLeadModal}
            className="border border-white/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 px-8 py-2 text-xs uppercase tracking-widest font-medium"
          >
            {HERO_CONTENT.navigation.cta}
          </button>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className="h-screen w-full snap-start relative flex flex-col items-start justify-center overflow-hidden px-6 md:px-24">
        {HERO_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: i === heroIdx ? 1 : 0,
              scale: i === heroIdx ? 1 : 1.05,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-3xl pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 uppercase tracking-[0.3em] text-xs font-medium">
              {HERO_CONTENT.label}
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[0.95] text-white"
          >
            {HERO_CONTENT.title.main} <br />
            <span className="italic font-light text-zinc-300">
              {HERO_CONTENT.title.sub}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-zinc-300 mb-12 max-w-xl font-light leading-relaxed border-l border-zinc-700 pl-6"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <button
              onClick={openLeadModal}
              className="group relative px-10 py-4 bg-transparent border border-amber-500/50 text-white overflow-hidden transition-all hover:border-amber-500"
            >
              <span className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
              <span className="relative flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-semibold">
                {HERO_CONTENT.buttons.primary}{" "}
                <ArrowRight
                  size={16}
                  className="text-amber-500 group-hover:text-white transition-colors"
                />
              </span>
            </button>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-4 group text-zinc-400 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
                <Play size={14} fill="currentColor" />
              </div>
              <span className="text-xs uppercase tracking-widest font-medium">
                {HERO_CONTENT.buttons.secondary}
              </span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-zinc-500 text-[10px] uppercase tracking-widest font-light">
          <span>01 / 04</span>
          <div className="w-12 h-[1px] bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Section 2: About / Philosophy */}
      <section className="h-screen w-full snap-start bg-zinc-950 flex flex-col md:flex-row overflow-hidden relative">
        <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1920&auto=format&fit=crop"
            alt="Dubai Architecture"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-start md:justify-center px-8 md:px-24 py-12 md:py-0 bg-zinc-950 overflow-y-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-amber-600 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              {ABOUT_CONTENT.label}
            </div>

            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white leading-tight">
              {ABOUT_CONTENT.title.main} <br />
              <span className="text-zinc-500">{ABOUT_CONTENT.title.sub}</span>
            </h2>

            <p className="text-zinc-400 font-light leading-relaxed mb-10 text-sm md:text-base max-w-lg">
              {ABOUT_CONTENT.description.p1}
              <br />
              <br />
              {ABOUT_CONTENT.description.p2}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-2">
                <ShieldCheck size={24} className="text-amber-600 mb-1" />
                <h4 className="text-white font-serif text-lg">
                  {ABOUT_CONTENT.features.security.title}
                </h4>
                <p className="text-xs text-zinc-500">
                  {ABOUT_CONTENT.features.security.desc}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <TrendingUp size={24} className="text-amber-600 mb-1" />
                <h4 className="text-white font-serif text-lg">
                  {ABOUT_CONTENT.features.yields.title}
                </h4>
                <p className="text-xs text-zinc-500">
                  {ABOUT_CONTENT.features.yields.desc}
                </p>
              </div>
            </div>

            <button
              onClick={openLeadModal}
              className="text-white border-b border-zinc-700 pb-1 hover:border-amber-500 hover:text-amber-500 transition-all text-xs uppercase tracking-widest w-max"
            >
              {ABOUT_CONTENT.button}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Properties */}
      <section className="h-screen w-full snap-start relative flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col justify-center h-full py-8 md:py-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 flex-shrink-0">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-amber-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold"
              >
                {PROPERTIES_CONTENT.label}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-serif mt-2"
              >
                {PROPERTIES_CONTENT.title}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-zinc-400 max-w-md mt-4 md:mt-0 font-light text-sm"
            >
              {PROPERTIES_CONTENT.description}
            </motion.p>
          </div>

          {/* Grid Container */}
          <div className="overflow-y-auto no-scrollbar -mx-4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 md:pb-0">
              {PROPERTIES.map((property, idx) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-zinc-900/30 backdrop-blur-md border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 flex flex-col shrink-0"
                >
                  <div className="h-64 md:h-56 relative overflow-hidden">
                    <PropertyCarousel images={property.images} />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-serif truncate pr-2">
                        {property.name}
                      </h3>
                      <button
                        onClick={() => toggleCompare(property.id)}
                        className={`p-1.5 transition-all border ${
                          selectedForCompare.includes(property.id)
                            ? "border-amber-500 text-amber-500"
                            : "border-zinc-700 text-zinc-600 hover:text-amber-500 hover:border-amber-500"
                        }`}
                      >
                        <Scale size={12} />
                      </button>
                    </div>

                    <div className="flex items-center gap-1 text-zinc-500 text-[10px] mb-3 uppercase tracking-wider">
                      <MapPin size={10} className="text-amber-600" />
                      {property.location}
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800/50 mb-4 text-center text-[10px] text-zinc-400">
                      <div>
                        <span className="block text-white font-semibold text-sm">
                          {property.details.beds}
                        </span>
                        Beds
                      </div>
                      <div>
                        <span className="block text-white font-semibold text-sm">
                          {property.details.baths}
                        </span>
                        Baths
                      </div>
                      <div>
                        <span className="block text-white font-semibold text-sm">
                          {property.details.sqft.toLocaleString()}
                        </span>
                        Sqft
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xl font-medium text-amber-500">
                        ${(property.price / 1000000).toFixed(1)}M
                      </span>
                      <button
                        onClick={() => openDetails(property)}
                        className="text-[10px] uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-0.5"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 md:mt-10 flex justify-center flex-shrink-0 pb-6 md:pb-0">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={openLeadModal}
              className="group relative px-8 py-3 bg-transparent border border-amber-500/50 text-white overflow-hidden transition-all hover:border-amber-500"
            >
              <span className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
              <span className="relative flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold">
                {PROPERTIES_CONTENT.cta}{" "}
                <ArrowRight
                  size={14}
                  className="text-amber-500 group-hover:text-white transition-colors"
                />
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Section 4: Realtor & Footer */}
      <section className="h-screen w-full snap-start relative bg-black flex flex-col justify-between overflow-hidden">
        {/* Main Content Centered */}
        <div className="flex-grow w-full max-w-5xl mx-auto px-8 md:px-24 flex flex-col justify-center h-full overflow-hidden">
          <div className="flex flex-col h-full py-8 md:py-0">
            <div className="text-center mb-6 md:mb-8 flex-shrink-0 pt-6">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-amber-500 text-[10px] md:text-xs uppercase tracking-[0.4em]"
              >
                {REALTORS_CONTENT.label}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-serif mt-2"
              >
                {REALTORS_CONTENT.title}
              </motion.h2>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar -mx-4 px-4 flex flex-col md:block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 md:pb-0 h-full max-h-[60vh] md:max-h-none">
                {REALTORS.map((realtor, idx) => (
                  <motion.div
                    key={realtor.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative border border-zinc-800 bg-zinc-900/20 hover:border-amber-500/50 transition-colors flex flex-col h-[400px] md:h-full shrink-0"
                  >
                    {/* Image Section - Taller (70%) */}
                    <div className="h-[70%] w-full relative overflow-hidden">
                      <img
                        src={realtor.image}
                        alt={realtor.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Text Block - Smaller (30%) */}
                    <div className="p-4 border-t border-zinc-800 bg-zinc-900/40 h-[30%] flex flex-col justify-center text-center">
                      <p className="text-amber-500 font-bold uppercase tracking-widest text-[8px] mb-1">
                        {realtor.role}
                      </p>
                      <h3 className="text-lg font-serif text-white mb-2">
                        {realtor.name}
                      </h3>
                      <p className="text-zinc-500 font-light text-[10px] leading-relaxed line-clamp-2">
                        {realtor.bio}
                      </p>
                      <div className="flex justify-center gap-4 mt-2 pt-2 border-t border-zinc-800/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <Mail
                          size={12}
                          className="text-zinc-400 hover:text-white cursor-pointer"
                        />
                        <Phone
                          size={12}
                          className="text-zinc-400 hover:text-white cursor-pointer"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-8 text-center flex-shrink-0 pb-6 md:pb-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={openLeadModal}
                className="group relative px-6 py-3 bg-transparent border border-amber-500/50 text-white overflow-hidden transition-all hover:border-amber-500 inline-block"
              >
                <span className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
                <span className="relative flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  {REALTORS_CONTENT.cta}{" "}
                  <ArrowRight
                    size={14}
                    className="text-amber-500 group-hover:text-white transition-colors"
                  />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full snap-start bg-zinc-950 border-t border-zinc-900 py-6 md:py-8 px-6 md:px-8 flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-lg md:text-xl font-serif tracking-tighter text-amber-500 mb-1">
              {FOOTER_CONTENT.brand.main}
              <span className="text-white">{FOOTER_CONTENT.brand.sub}</span>
            </div>
            <p className="text-zinc-500 text-[10px] font-light">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-zinc-500 hover:text-amber-500 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-amber-500 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-amber-500 transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>

          <div className="text-zinc-700 text-[8px] uppercase tracking-[0.2em]">
            {FOOTER_CONTENT.copyright}
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <ComparisonTool
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        selectedProperties={PROPERTIES.filter((p) =>
          selectedForCompare.includes(p.id)
        )}
        onRemove={removeCompare}
      />

      <PropertyDetailsModal
        isOpen={isDetailsOpen}
        property={selectedProperty}
        onClose={() => setIsDetailsOpen(false)}
        onInquire={openLeadModal}
      />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0"
              onClick={() => setIsVideoOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl z-10 border border-zinc-800"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white z-20 transition-colors bg-black/20 rounded-full p-2 backdrop-blur-md"
              >
                <X size={24} />
              </button>
              {/* Simulated Local Video Player */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920')",
                  }}
                ></div>
                <div className="z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm">
                    <Play
                      size={32}
                      className="ml-1 text-white"
                      fill="currentColor"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white tracking-widest">
                    DUBAI ELITE CINEMATIC
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 uppercase tracking-widest">
                    [ Local Video Placeholder ]
                  </p>
                </div>
                {/* In a real app, this would be: <video src="/assets/video.mp4" controls className="w-full h-full" /> */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
