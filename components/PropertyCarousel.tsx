
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyCarouselProps {
  images: string[];
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <img src={img} alt="Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}
      
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-amber-500 w-8' : 'bg-white/30 w-2'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
