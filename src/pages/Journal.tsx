import React from 'react';
import { ArrowRight } from 'lucide-react';

const JOURNAL_ENTRIES = [
  {
    id: 1,
    title: "The Resurgence of Analog in a Digital World",
    excerpt: "Why mechanical watches and physical tools are seeing a massive revival among tech enthusiasts.",
    date: "March 15, 2026",
    category: "Design",
    imageUrl: "https://picsum.photos/seed/analog/800/500"
  },
  {
    id: 2,
    title: "Survival Tech: Gadgets That Actually Work Off-Grid",
    excerpt: "We tested five solar-powered devices in the Mojave Desert. Here's what survived.",
    date: "February 28, 2026",
    category: "Tech",
    imageUrl: "https://picsum.photos/seed/survival/800/500"
  },
  {
    id: 3,
    title: "Everyday Carry: The Minimalist's Guide",
    excerpt: "How to pare down your pocket dump to the absolute essentials without sacrificing utility.",
    date: "February 10, 2026",
    category: "Curiosities",
    imageUrl: "https://picsum.photos/seed/edc/800/500"
  }
];

export default function Journal() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl font-extrabold text-cactus-dark mb-6">The Dispatch Journal</h1>
          <p className="text-xl text-stone-600">
            Thoughts, field notes, and deep dives into the world of high-performance tech and timeless analog precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <article 
              key={entry.id} 
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={entry.imageUrl} 
                  alt={entry.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-cactus-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {entry.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-sm font-bold text-cactus-orange mb-3">{entry.date}</span>
                <h2 className="text-2xl font-bold text-cactus-dark mb-4 leading-tight">{entry.title}</h2>
                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">{entry.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-cactus-green font-bold hover:text-cactus-dark transition-colors group mt-auto">
                  Read Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
