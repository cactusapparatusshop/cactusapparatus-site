/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  ExternalLink,
  Compass,
  Cpu,
  PenTool
} from 'lucide-react';

// --- CUSTOM LOGO COMPONENT ---
const CactusLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gear Outline */}
    <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z" stroke="#d48b41" strokeWidth="6" strokeDasharray="12 8" />
    
    {/* Atom/Tech symbol rings */}
    <ellipse cx="70" cy="55" rx="8" ry="3" transform="rotate(45 70 55)" stroke="#d48b41" strokeWidth="2" />
    <ellipse cx="70" cy="55" rx="8" ry="3" transform="rotate(-45 70 55)" stroke="#d48b41" strokeWidth="2" />
    <circle cx="70" cy="55" r="1.5" fill="#d48b41" />
    
    {/* Wrench */}
    <path d="M32 65 L32 80 M29 65 C 29 60, 35 60, 35 65" stroke="#d48b41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Main Cactus Body */}
    <rect x="42" y="25" width="16" height="60" rx="8" fill="#4caf50" />
    <rect x="46" y="25" width="8" height="60" fill="#a5d6a7" opacity="0.3" /> {/* Highlight */}
    
    {/* Left Arm */}
    <path d="M42 55 L30 55 A 6 6 0 0 1 24 49 L24 38 A 6 6 0 0 1 36 38 L36 45" stroke="#4caf50" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Right Arm */}
    <path d="M58 65 L70 65 A 6 6 0 0 0 76 59 L76 45 A 6 6 0 0 0 64 45 L64 55" stroke="#4caf50" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Base Line */}
    <line x1="25" y1="85" x2="75" y2="85" stroke="#123f2b" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// --- MOCK DATA ---
const CATEGORIES = ['All', 'Curiosities', 'Tech', 'Design', 'Everyday Carry'];

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Mechanical Gear Clock',
    description: 'An exposed-gear wall clock crafted from brass and walnut. A mesmerizing piece of functional design.',
    price: '$89.00',
    rating: 4.9,
    reviews: 128,
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/gearclock/600/600',
    affiliateLink: '#',
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Desktop Terrarium Kit',
    description: 'A self-sustaining micro-ecosystem housed in geometric glass. Brings a touch of nature to any workspace.',
    price: '$45.00',
    rating: 4.8,
    reviews: 84,
    category: 'Curiosities',
    imageUrl: 'https://picsum.photos/seed/terrarium/600/600',
    affiliateLink: '#',
    badge: 'New'
  },
  {
    id: '3',
    name: 'Brass Pocket Compass',
    description: 'A beautifully machined, liquid-filled compass with a solid brass casing. Essential everyday carry.',
    price: '$34.50',
    rating: 4.7,
    reviews: 256,
    category: 'Everyday Carry',
    imageUrl: 'https://picsum.photos/seed/compass/600/600',
    affiliateLink: '#'
  },
  {
    id: '4',
    name: 'Nixie Tube Thermometer',
    description: 'Vintage Soviet-era Nixie tubes repurposed into a highly accurate, Wi-Fi enabled smart thermometer.',
    price: '$129.00',
    rating: 4.9,
    reviews: 42,
    category: 'Tech',
    imageUrl: 'https://picsum.photos/seed/nixie/600/600',
    affiliateLink: '#'
  },
  {
    id: '5',
    name: 'Geometric Desk Organizer',
    description: 'Machined aluminum organizer with modular magnetic compartments for your pens, tools, and tech.',
    price: '$55.00',
    rating: 4.6,
    reviews: 310,
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/organizer/600/600',
    affiliateLink: '#'
  },
  {
    id: '6',
    name: 'Solar Kinetic Sculpture',
    description: 'A delicate brass sculpture that continuously rotates when exposed to direct sunlight.',
    price: '$79.99',
    rating: 4.8,
    reviews: 89,
    category: 'Curiosities',
    imageUrl: 'https://picsum.photos/seed/kinetic/600/600',
    affiliateLink: '#'
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cactus-green selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-cactus-bg/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <CactusLogo className="w-12 h-12" />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-2xl tracking-tight text-cactus-dark leading-none">
                  CACTUS APPARATUS
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-cactus-orange mt-1 uppercase">
                  Curiosities • Tech • Design
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-cactus-dark hover:text-cactus-green font-medium transition-colors">Curated Gear</a>
              <a href="#" className="text-cactus-dark hover:text-cactus-green font-medium transition-colors">Reviews</a>
              <a href="#" className="text-cactus-dark hover:text-cactus-green font-medium transition-colors">Journal</a>
              <a href="#" className="text-cactus-dark hover:text-cactus-green font-medium transition-colors">About</a>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-cactus-dark hover:text-cactus-green transition-colors">
                <Search size={20} />
              </button>
              <button className="bg-cactus-dark hover:bg-cactus-green text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2">
                Subscribe
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-cactus-dark"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-200"
          >
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Curated Gear</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Reviews</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Journal</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">About</a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="relative bg-cactus-bg overflow-hidden border-b border-stone-200">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#123f2b 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <CactusLogo className="w-24 h-24 mx-auto mb-8 opacity-90" />
              
              <span className="inline-block py-1.5 px-4 rounded-full bg-cactus-orange/10 text-cactus-orange text-sm font-bold tracking-widest uppercase mb-6 border border-cactus-orange/20">
                Curated Curiosities & Tech
              </span>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-cactus-dark leading-tight">
                Where brilliant design meets <span className="text-cactus-green">everyday utility.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Explore our hand-picked selection of unique gadgets, mechanical wonders, and beautifully designed apparatus for your workspace and life.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-cactus-dark hover:bg-cactus-green text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cactus-dark/20">
                  Shop Top Picks <ArrowRight size={20} />
                </button>
                <button className="bg-white hover:bg-stone-50 text-cactus-dark border border-stone-200 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center shadow-sm">
                  Read the Journal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUE PROPS --- */}
        <section className="py-16 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-cactus-bg p-4 rounded-2xl text-cactus-orange border border-stone-100 shadow-sm">
                  <Compass size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-cactus-dark mb-2">Curiosities</h3>
                  <p className="text-stone-600 leading-relaxed">Fascinating objects and mechanical wonders that inspire creativity and wonder.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-cactus-bg p-4 rounded-2xl text-cactus-green border border-stone-100 shadow-sm">
                  <Cpu size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-cactus-dark mb-2">Tech</h3>
                  <p className="text-stone-600 leading-relaxed">Cutting-edge gadgets and smart tools that seamlessly integrate into your workflow.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-cactus-bg p-4 rounded-2xl text-cactus-dark border border-stone-100 shadow-sm">
                  <PenTool size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-cactus-dark mb-2">Design</h3>
                  <p className="text-stone-600 leading-relaxed">Beautifully crafted everyday carry items where form perfectly follows function.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURED PRODUCTS --- */}
        <section className="py-24 bg-cactus-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-cactus-dark mb-4 tracking-tight">Trending Apparatus</h2>
                <p className="text-stone-600 max-w-2xl text-lg">Discover our highest-rated gear for this month. Click through to check current prices and availability.</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                      activeCategory === category 
                        ? 'bg-cactus-dark text-white shadow-md' 
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-cactus-orange hover:text-cactus-orange'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-cactus-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        {product.badge}
                      </div>
                    )}
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-cactus-green uppercase tracking-widest">{product.category}</span>
                      <div className="flex items-center gap-1 text-cactus-orange">
                        <Star size={14} className="fill-current" />
                        <span className="text-sm font-bold text-cactus-dark">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cactus-dark mb-3 line-clamp-1">{product.name}</h3>
                    <p className="text-stone-600 text-sm mb-8 line-clamp-2 flex-grow leading-relaxed">{product.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100">
                      <span className="text-xl font-extrabold text-cactus-dark">{product.price}</span>
                      <a 
                        href={product.affiliateLink}
                        className="bg-cactus-dark hover:bg-cactus-green text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-sm"
                      >
                        Check Price <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 text-cactus-dark font-bold text-lg hover:text-cactus-orange transition-colors group">
                View All Apparatus <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <section className="py-24 bg-cactus-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 text-cactus-green">
            <CactusLogo className="w-[500px] h-[500px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Join the Apparatus Dispatch</h2>
            <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get weekly reviews of the most fascinating gear, exclusive discount codes, and design inspiration delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-2xl text-cactus-dark font-medium focus:outline-none focus:ring-4 focus:ring-cactus-green/50"
                required
              />
              <button 
                type="submit"
                className="bg-cactus-green hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-colors whitespace-nowrap shadow-lg shadow-cactus-green/20"
              >
                Subscribe
              </button>
            </form>
            <p className="text-stone-400 text-sm mt-6">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white text-stone-500 py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <CactusLogo className="w-10 h-10" />
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-xl tracking-tight text-cactus-dark leading-none">
                    CACTUS APPARATUS
                  </span>
                  <span className="text-[0.55rem] font-bold tracking-[0.2em] text-cactus-orange mt-1 uppercase">
                    Curiosities • Tech • Design
                  </span>
                </div>
              </div>
              <p className="text-sm text-stone-500 max-w-md mb-6 leading-relaxed">
                Your trusted source for reviews on unique gadgets, mechanical wonders, and beautifully designed apparatus for your workspace and life.
              </p>
            </div>
            
            <div>
              <h4 className="text-cactus-dark font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Latest Reviews</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Buying Guides</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Top 10 Desk Accessories</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Gift Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-cactus-dark font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-200 text-xs text-stone-500 space-y-6">
            <p className="font-medium leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-100">
              <strong className="text-cactus-dark">Affiliate Disclosure:</strong> Cactus Apparatus is a participant in the Amazon Services LLC Associates Program and other affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to partner websites. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
              <p>&copy; {new Date().getFullYear()} Cactus Apparatus. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-cactus-dark transition-colors">Twitter</a>
                <a href="#" className="hover:text-cactus-dark transition-colors">Instagram</a>
                <a href="#" className="hover:text-cactus-dark transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
