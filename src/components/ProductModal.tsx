import React, { useEffect } from 'react';
import { X, ExternalLink, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  affiliateLink: string;
  badge?: string;
  details: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-cactus-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md hover:bg-white text-cactus-dark p-2 rounded-full shadow-sm transition-colors"
        >
          <X size={20} />
        </button>

        {/* Media Section (Left) */}
        <div className="w-full md:w-1/2 bg-stone-100 relative h-64 md:h-auto flex-shrink-0">
          <div className="w-full h-full relative">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.videoUrl && (
              <video 
                src={product.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
                onLoadedData={(e) => (e.currentTarget.style.opacity = '1')}
                style={{ opacity: 0 }}
              />
            )}
          </div>
          {product.badge && (
            <div className="absolute top-4 left-4 z-10 bg-cactus-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              {product.badge}
            </div>
          )}
        </div>

        {/* Details Section (Right) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-cactus-green uppercase tracking-widest">{product.category}</span>
            <div className="flex items-center gap-1 text-cactus-orange">
              <Star size={16} className="fill-current" />
              <span className="text-sm font-bold text-cactus-dark">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-cactus-dark mb-4 leading-tight">{product.name}</h2>
          
          <div className="text-2xl font-extrabold text-cactus-dark mb-6">{product.price}</div>
          
          <p className="text-stone-600 text-base sm:text-lg mb-8 leading-relaxed">
            {product.description}
          </p>
          
          <div className="mb-8 flex-grow">
            <h4 className="font-bold text-cactus-dark mb-4 uppercase tracking-wider text-sm">Key Details</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-cactus-green flex-shrink-0"></div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-6 border-t border-stone-100 mt-auto">
            <a 
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-cactus-dark hover:bg-cactus-green text-white px-6 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md text-lg"
            >
              View on Amazon <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
