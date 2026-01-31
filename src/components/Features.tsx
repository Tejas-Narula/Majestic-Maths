import React from 'react';
import { FEATURES } from '../constants';
import { Check } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Why Majestic?
            </h2>

            <div className="space-y-4">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-2">
                  <div className="h-2 w-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Card */}
          <div className="relative order-1 md:order-2">
            <div className="relative bg-white p-8 rounded-none shadow-xl border-l-4 border-amber-500">
               <h4 className="text-xl font-bold mb-6 text-gray-900 font-display">Our Methodology</h4>
               <ul className="space-y-6">
                 <li className="flex gap-4 items-center">
                   <span className="text-amber-500 font-bold text-xl">01</span>
                   <span className="text-gray-600">Concept Clarity</span>
                 </li>
                 <li className="flex gap-4 items-center">
                   <span className="text-amber-500 font-bold text-xl">02</span>
                   <span className="text-gray-600">Consistent Practice</span>
                 </li>
                 <li className="flex gap-4 items-center">
                   <span className="text-amber-500 font-bold text-xl">03</span>
                   <span className="text-gray-600">Confidence Building</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};