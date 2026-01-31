import React, { useState } from 'react';
import { MapPin, Phone, Send, Check } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tejasnarula@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json' 
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        alert('Something went wrong. Please call us directly.');
        setFormStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please call us directly.');
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 mt-1" size={24} />
                <div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {COMPANY_INFO.address}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-600 text-sm mt-2 inline-block font-medium hover:underline"
                  >
                    View Map
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 mt-1" size={24} />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">{COMPANY_INFO.owner}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Quick Enquiry</h3>
            {formStatus === 'success' ? (
              <div className="bg-green-50 p-6 text-center">
                <Check className="text-green-600 mx-auto mb-2" size={24} />
                <p className="text-green-800 font-medium">Sent Successfully</p>
                <p className="text-green-700 text-sm mt-2">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="New Enquiry from Majestic Maths Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <input 
                  required 
                  name="name"
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border-0 focus:ring-1 focus:ring-amber-500 outline-none text-gray-900 placeholder-gray-500"
                  placeholder="Student Name"
                />
                <input 
                  required 
                  name="phone"
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-50 border-0 focus:ring-1 focus:ring-amber-500 outline-none text-gray-900 placeholder-gray-500"
                  placeholder="Phone Number"
                />
                <div className="grid grid-cols-2 gap-4">
                    <select name="grade" className="w-full px-4 py-3 bg-gray-50 border-0 focus:ring-1 focus:ring-amber-500 outline-none text-gray-900">
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                    </select>
                    <select name="board" className="w-full px-4 py-3 bg-gray-50 border-0 focus:ring-1 focus:ring-amber-500 outline-none text-gray-900">
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={formStatus === 'submitting'}
                  className="mt-2"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};