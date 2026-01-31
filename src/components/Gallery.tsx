import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Classroom Glimpses</h2>
           <div className="h-1 w-20 bg-amber-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Large Image */}
          <div className="md:col-span-1 md:row-span-2 relative h-64 md:h-auto rounded-2xl overflow-hidden group shadow-lg">
            <img 
              src={GALLERY_IMAGES[0]} 
              alt="Classroom Environment" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-4 left-4 text-white font-medium bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
              Interactive Learning
            </div>
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {GALLERY_IMAGES.slice(1).map((img, idx) => (
              <div key={idx} className="relative h-48 rounded-xl overflow-hidden group shadow-md">
                 <img 
                  src={img} 
                  alt={`Gallery ${idx + 2}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};