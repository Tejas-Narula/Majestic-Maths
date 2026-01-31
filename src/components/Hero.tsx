import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase border-b-2 border-amber-200 pb-1">
              Admissions Open {COMPANY_INFO.admissionYear}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-6 leading-tight">
             Unique Minds,<br />
             <span className="text-amber-600">Unique Needs.</span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto font-light">
            Specialized offline coaching for <strong>{COMPANY_INFO.grades}</strong>.
            <br />
            <span className="text-gray-400 text-sm mt-2 block">{COMPANY_INFO.boards}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button fullWidth className="px-8 py-3">
                Enquire Now
              </Button>
            </a>
            <a href="#results" className="w-full sm:w-auto">
              <Button variant="outline" fullWidth className="px-8 py-3 border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-600">
                View Results
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};