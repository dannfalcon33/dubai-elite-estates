
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bed, Bath, Maximize, Home, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import PropertyCarousel from './PropertyCarousel';

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: () => void;
}

const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({ property, isOpen, onClose, onInquire }) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-800 shadow-2xl max-h-[100vh] md:max-h-[90vh] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-0 z-20 p-4 bg-black/50 text-white hover:bg-amber-600 transition-all duration-300 border-l border-b border-zinc-800"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto no-scrollbar flex flex-col h-full">
              {/* Image Section */}
              <div className="h-[40vh] md:h-[50vh] w-full relative flex-shrink-0 border-b border-zinc-800">
                <PropertyCarousel images={property.images} />
              </div>

              {/* Content Section */}
              <div className="flex-grow p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                    <div className="flex-1">
                      <div className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                        Premium Listing
                      </div>
                      <h2 className="text-3xl md:text-5xl font-serif text-white mb-3 tracking-tight leading-none">
                        {property.name}
                      </h2>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <MapPin size={16} className="text-amber-600" />
                        <span className="text-sm uppercase tracking-wider">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-light text-white whitespace-nowrap border-l border-amber-600/50 pl-6">
                      <span className="text-amber-600">$</span>{(property.price / 1000000).toFixed(2)}M
                    </div>
                  </div>

                  {/* Stats Grid - Square & Stylized */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 mb-10">
                    <div className="bg-zinc-900/50 p-6 flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
                      <Bed className="text-zinc-500" size={20} />
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest">Bedrooms</span>
                      <span className="text-white font-serif text-2xl">{property.details.beds}</span>
                    </div>
                    <div className="bg-zinc-900/50 p-6 flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
                      <Bath className="text-zinc-500" size={20} />
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest">Bathrooms</span>
                      <span className="text-white font-serif text-2xl">{property.details.baths}</span>
                    </div>
                    <div className="bg-zinc-900/50 p-6 flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
                      <Maximize className="text-zinc-500" size={20} />
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest">Sqft</span>
                      <span className="text-white font-serif text-2xl">{property.details.sqft.toLocaleString()}</span>
                    </div>
                    <div className="bg-zinc-900/50 p-6 flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
                      <Home className="text-zinc-500" size={20} />
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest">Type</span>
                      <span className="text-white font-serif text-xl">{property.details.type}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-light max-w-4xl border-l-2 border-zinc-800 pl-6">
                      {property.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-zinc-900">
                  <button
                    onClick={() => {
                      onClose();
                      onInquire();
                    }}
                    className="flex-grow group relative px-8 py-4 bg-transparent border border-amber-600/50 text-white overflow-hidden transition-all hover:border-amber-600"
                  >
                    <span className="absolute inset-0 w-0 bg-amber-700 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></span>
                    <span className="relative flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] font-semibold">
                      Register Interest <ArrowRight size={16} className="text-amber-500 group-hover:text-white transition-colors" />
                    </span>
                  </button>
                  
                  <button
                    onClick={onClose}
                    className="md:w-auto px-10 py-4 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-all text-xs uppercase tracking-[0.2em] font-medium"
                  >
                    Close View
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PropertyDetailsModal;
