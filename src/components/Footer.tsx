import React from 'react';
import { COMPANY_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </p>
        <p>
          Designed for Excellence in Education.
        </p>
      </div>
    </footer>
  );
};