import React, { useState } from 'react';
import { ExternalLink, Star, ArrowRight } from 'lucide-react';
import { PINTEREST_PRODUCTS } from '../data';
import { ProductModal } from '../components/ProductModal';

export default function Gear() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PINTEREST_PRODUCTS[0] | null>(null);

  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl font-extrabold text-cactus-dark mb-6">Curated Gear</h1>
          <p className="text-xl text-stone-600">
            A hand-picked collection of high-performance tech and timeless analog precision. 
            Directly from our <a href="https://www.pinterest.com/cactusapparatusshop/" target="_blank" rel="noreferrer" className="text-cactus-green hover:underline">Pinterest</a> board.
          </p>
        </div>

        <div className="space-y-12">
          {PINTEREST_PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button 
                onClick={() => setSelectedProduct(product)}
                className="md:w-1/3 relative aspect-square md:aspect-auto block group overflow-hidden text-left"
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-cactus-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {product.badge}
                  </div>
                )}
              </button>
              
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-cactus-green uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center gap-1 text-cactus-orange">
                    <Star size={14} className="fill-current" />
                    <span className="text-sm font-bold text-cactus-dark">{product.rating}</span>
                  </div>
                </div>
                
                <h2 
                  className="text-3xl font-bold text-cactus-dark mb-4 cursor-pointer hover:text-cactus-green transition-colors"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.name}
                </h2>
                <p className="text-stone-600 text-lg mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-cactus-dark mb-3 uppercase tracking-wider text-sm">Key Details</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cactus-green"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100">
                  <span className="text-2xl font-extrabold text-cactus-dark">{product.price}</span>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-cactus-dark hover:bg-cactus-green text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-sm"
                  >
                    View Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-12 animate-in fade-in slide-in-from-bottom-8 fill-mode-both" style={{ animationDelay: `${PINTEREST_PRODUCTS.length * 100}ms` }}>
            <a 
              href="https://www.pinterest.com/cactusapparatusshop/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cactus-green hover:bg-cactus-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-cactus-green/20"
            >
              View More on Pinterest <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
