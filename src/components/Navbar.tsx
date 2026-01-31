import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-3xl tracking-tight text-amber-600 hover:text-amber-700 transition-colors">
              {COMPANY_INFO.name}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-all text-sm"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="block w-full text-center mt-4 bg-amber-500 text-white px-3 py-3 rounded-lg font-bold"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};