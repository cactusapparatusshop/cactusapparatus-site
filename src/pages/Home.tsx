import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Cpu, PenTool, Star, ExternalLink } from 'lucide-react';
import { CactusLogo } from '../components/CactusLogo';
import { CATEGORIES, PINTEREST_PRODUCTS } from '../data';
import { ProductModal } from '../components/ProductModal';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof PINTEREST_PRODUCTS[0] | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? PINTEREST_PRODUCTS 
    : PINTEREST_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="flex-grow">
      {/* HERO SECTION */}
      <section className="relative bg-cactus-bg overflow-hidden border-b border-stone-200">
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
              <Link to="/gear" className="bg-cactus-dark hover:bg-cactus-green text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cactus-dark/20">
                Shop Top Picks <ArrowRight size={20} />
              </Link>
              <Link to="/journal" className="bg-white hover:bg-stone-50 text-cactus-dark border border-stone-200 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center shadow-sm">
                Read the Journal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
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

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-cactus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-cactus-dark mb-4 tracking-tight">Trending Apparatus</h2>
              <p className="text-stone-600 max-w-2xl text-lg">Discover our highest-rated gear from our Pinterest collection. Click through to check current prices.</p>
            </div>
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
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="relative aspect-[4/3] overflow-hidden bg-stone-100 block w-full text-left"
                >
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
                </button>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-cactus-green uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-cactus-orange">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-bold text-cactus-dark">{product.rating}</span>
                    </div>
                  </div>
                  <h3 
                    className="text-2xl font-bold text-cactus-dark mb-3 line-clamp-1 cursor-pointer hover:text-cactus-green transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-8 line-clamp-2 flex-grow leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100">
                    <span className="text-xl font-extrabold text-cactus-dark">{product.price}</span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-cactus-dark hover:bg-cactus-green text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-sm"
                    >
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/gear" className="inline-flex items-center gap-2 text-cactus-dark font-bold text-lg hover:text-cactus-orange transition-colors group">
              View All Curated Gear <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
}
