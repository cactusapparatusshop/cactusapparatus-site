import React from 'react';
import { CactusLogo } from '../components/CactusLogo';

export default function About() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-stone-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
          <CactusLogo className="w-32 h-32 mx-auto mb-10" />
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-cactus-dark mb-10 leading-tight">
            Cactus Apparatus: <br/>
            <span className="text-cactus-green">Cultivating a resilient fusion of high-performance tech and timeless analog precision.</span>
          </h1>
          
          <div className="w-24 h-1 bg-cactus-orange mx-auto mb-10 rounded-full"></div>
          
          <div className="text-lg text-stone-600 space-y-6 text-left max-w-2xl mx-auto leading-relaxed">
            <p>
              We believe that the best tools are the ones that survive the test of time and the harshest environments. Whether it's a mechanical watch that never needs a battery or a solar-powered drone that maps the desert, we are obsessed with gear that works.
            </p>
            <p>
              Our mission is to sift through the noise of modern consumerism and curate a collection of apparatus that you can rely on. We value durability, thoughtful design, and the seamless integration of analog mechanics with digital innovation.
            </p>
            <p>
              Welcome to the outpost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
