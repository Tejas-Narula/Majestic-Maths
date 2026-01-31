import React from 'react';
import { RESULTS_GRADE_10 } from '../constants';

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Academic Excellence</h2>
          <p className="text-gray-500 font-light">Grade 10 Hall of Fame</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_GRADE_10.map((student, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:border-amber-500 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">{student.name}</h3>
              <div className="w-8 h-0.5 bg-amber-500 my-3"></div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-800">{student.score}</span>
                <span className="text-gray-400 text-sm">/ {student.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};