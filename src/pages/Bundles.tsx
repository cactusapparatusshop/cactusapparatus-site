import React from 'react';
import { Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bundles() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cactus-bg py-20 px-4">
      <div className="text-center max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-white p-6 rounded-full inline-block mb-8 shadow-sm border border-stone-200">
          <Wrench size={64} className="text-cactus-orange" />
        </div>
        <h1 className="text-5xl font-extrabold text-cactus-dark mb-6">Under Construction</h1>
        <p className="text-xl text-stone-600 mb-10 leading-relaxed">
          We are currently curating the perfect bundles and kits for your setup. 
          Our exclusive collections will be available soon.
        </p>
        <Link 
          to="/"
          className="bg-cactus-dark hover:bg-cactus-green text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center shadow-lg shadow-cactus-dark/20"
        >
          Return to Basecamp
        </Link>
      </div>
    </div>
  );
}
