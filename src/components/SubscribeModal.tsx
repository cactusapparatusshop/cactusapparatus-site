import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Mail } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSuccess(false);
      setEmail('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-cactus-dark/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-cactus-dark transition-colors rounded-full hover:bg-stone-100 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-10 text-center">
          {isSuccess ? (
            <div className="animate-in zoom-in-50 duration-500">
              <div className="w-20 h-20 bg-cactus-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-cactus-green" />
              </div>
              <h3 className="text-3xl font-extrabold text-cactus-dark mb-4">You're In!</h3>
              <p className="text-stone-600 text-lg mb-8">
                Thanks for subscribing to Cactus Apparatus. Keep an eye on your inbox for the latest gear drops and reviews.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-cactus-dark hover:bg-cactus-green text-white py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-cactus-dark" />
              </div>
              <h3 className="text-3xl font-extrabold text-cactus-dark mb-4">Stay Sharp</h3>
              <p className="text-stone-600 mb-8">
                Join our newsletter for weekly updates on the best gear, deep-dive reviews, and exclusive finds.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-cactus-dark placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-cactus-green focus:border-transparent transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cactus-dark hover:bg-cactus-green text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Subscribing...</span>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>
              <p className="text-xs text-stone-400 mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
