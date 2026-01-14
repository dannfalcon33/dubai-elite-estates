
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, ArrowRight, Trash2 } from 'lucide-react';
import { Property } from '../types';

interface ComparisonToolProps {
  selectedProperties: Property[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({ selectedProperties, isOpen, onClose, onRemove }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col max-h-[100vh] md:max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-zinc-800 flex justify-between items-center bg-zinc-950 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 border border-amber-500/30 text-amber-500">
                  <Scale size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-1">Analysis</div>
                  <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight">Portfolio Comparison</h2>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto overflow-y-auto p-0 flex-grow no-scrollbar bg-zinc-950">
              {selectedProperties.length === 0 ? (
                <div className="text-center py-32 flex flex-col items-center justify-center text-zinc-500">
                  <Scale size={48} className="mb-6 opacity-20" />
                  <p className="uppercase tracking-widest text-xs">No properties selected</p>
                </div>
              ) : (
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="py-6 px-8 border-b border-zinc-800 bg-zinc-950/50 text-zinc-500 font-normal uppercase text-[10px] tracking-[0.2em] w-48 sticky left-0 z-10 backdrop-blur-md border-r border-zinc-800/50">
                        Specifications
                      </th>
                      {selectedProperties.map(p => (
                        <th key={p.id} className="py-6 px-8 border-b border-zinc-800 text-left min-w-[250px] align-top bg-zinc-950/20">
                          <div className="flex justify-between items-start mb-4">
                             <button 
                              onClick={() => onRemove(p.id)}
                              className="group flex items-center gap-2 text-[10px] text-zinc-600 hover:text-red-500 transition-colors uppercase tracking-widest"
                            >
                              <Trash2 size={12} className="group-hover:text-red-500 transition-colors" />
                              Remove
                            </button>
                          </div>
                          <div className="font-serif text-2xl text-white leading-none mb-2">{p.name}</div>
                          <div className="text-amber-600 text-sm font-light">${p.price.toLocaleString()}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-6 px-8 text-zinc-400 text-xs uppercase tracking-widest font-medium sticky left-0 bg-zinc-950 z-10 border-r border-zinc-800/50">Visual</td>
                      {selectedProperties.map(p => (
                        <td key={p.id} className="py-6 px-8">
                          <img src={p.images[0]} alt={p.name} className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-6 px-8 text-zinc-400 text-xs uppercase tracking-widest font-medium sticky left-0 bg-zinc-950 z-10 border-r border-zinc-800/50">Type</td>
                      {selectedProperties.map(p => (
                        <td key={p.id} className="py-6 px-8 text-white font-light">{p.details.type}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-6 px-8 text-zinc-400 text-xs uppercase tracking-widest font-medium sticky left-0 bg-zinc-950 z-10 border-r border-zinc-800/50">Composition</td>
                      {selectedProperties.map(p => (
                        <td key={p.id} className="py-6 px-8 text-white font-light">
                           <span className="block mb-1">{p.details.beds} Bedrooms</span>
                           <span className="text-zinc-500">{p.details.baths} Bathrooms</span>
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-6 px-8 text-zinc-400 text-xs uppercase tracking-widest font-medium sticky left-0 bg-zinc-950 z-10 border-r border-zinc-800/50">Dimensions</td>
                      {selectedProperties.map(p => (
                        <td key={p.id} className="py-6 px-8 text-white font-light">{p.details.sqft.toLocaleString()} <span className="text-zinc-600 text-xs">FT²</span></td>
                      ))}
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-6 px-8 text-zinc-400 text-xs uppercase tracking-widest font-medium sticky left-0 bg-zinc-950 z-10 border-r border-zinc-800/50">Location</td>
                      {selectedProperties.map(p => (
                        <td key={p.id} className="py-6 px-8 text-zinc-300 font-light text-sm leading-relaxed">{p.location}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
            
            {/* Footer Button */}
            <div className="p-6 md:p-8 border-t border-zinc-800 bg-zinc-950">
               <button 
                onClick={onClose}
                className="w-full md:w-auto md:float-right group relative px-10 py-4 bg-transparent border border-zinc-700 text-white overflow-hidden transition-all hover:border-amber-500"
               >
                 <span className="absolute inset-0 w-0 bg-zinc-800 transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></span>
                 <span className="relative flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold">
                   Close Analysis <ArrowRight size={14} className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
                 </span>
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComparisonTool;
