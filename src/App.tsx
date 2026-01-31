import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Results } from './components/Results';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Results />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button for Mobile */}
      <a 
        href={`tel:${COMPANY_INFO.phone}`}
        className="fixed bottom-6 right-6 md:hidden z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Call Now"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
}

export default App;