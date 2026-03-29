import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

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

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // For now, just close and navigate to gear as a simple demo
      onClose();
      navigate('/gear');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32 px-4">
      <div 
        className="absolute inset-0 bg-cactus-dark/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-8 fade-in duration-300">
        <form onSubmit={handleSearch} className="relative flex items-center p-4 border-b border-stone-100">
          <Search className="absolute left-6 text-stone-400" size={24} />
          <input
            type="text"
            placeholder="Search reviews, gear, and journal..."
            className="w-full pl-14 pr-12 py-4 text-lg bg-transparent border-none outline-none text-cactus-dark placeholder:text-stone-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button 
            type="button"
            onClick={onClose}
            className="absolute right-6 p-2 text-stone-400 hover:text-cactus-dark transition-colors rounded-full hover:bg-stone-100"
          >
            <X size={20} />
          </button>
        </form>
        
        <div className="p-6 bg-stone-50">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {['Smartwatches', 'Mechanical Keyboards', 'Noise Cancelling', 'Desk Setup', 'EDC'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                }}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-600 hover:border-cactus-green hover:text-cactus-green transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
