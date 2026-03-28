import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Leaf } from 'lucide-react';
import { CactusLogo } from './components/CactusLogo';
import Home from './pages/Home';
import Gear from './pages/Gear';
import Reviews from './pages/Reviews';
import Journal from './pages/Journal';
import About from './pages/About';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cactus-green selection:text-white">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-cactus-bg/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 cursor-pointer">
              <CactusLogo className="w-12 h-12" />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-2xl tracking-tight text-cactus-dark leading-none">
                  CACTUS APPARATUS
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-cactus-orange mt-1 uppercase">
                  Curiosities • Tech • Design
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/gear" className={`font-medium transition-colors ${location.pathname === '/gear' ? 'text-cactus-green' : 'text-cactus-dark hover:text-cactus-green'}`}>Curated Gear</Link>
              <Link to="/reviews" className={`font-medium transition-colors ${location.pathname === '/reviews' ? 'text-cactus-green' : 'text-cactus-dark hover:text-cactus-green'}`}>Reviews</Link>
              <Link to="/journal" className={`font-medium transition-colors ${location.pathname === '/journal' ? 'text-cactus-green' : 'text-cactus-dark hover:text-cactus-green'}`}>Journal</Link>
              <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-cactus-green' : 'text-cactus-dark hover:text-cactus-green'}`}>About</Link>
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
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
            <Link to="/gear" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Curated Gear</Link>
            <Link to="/reviews" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Reviews</Link>
            <Link to="/journal" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">Journal</Link>
            <Link to="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cactus-dark hover:bg-stone-50">About</Link>
          </div>
        )}
      </nav>

      {children}

      {/* --- FOOTER --- */}
      <footer className="bg-white text-stone-500 py-16 border-t border-stone-200 mt-auto">
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
                <li><Link to="/reviews" className="hover:text-cactus-orange transition-colors">Latest Reviews</Link></li>
                <li><Link to="/gear" className="hover:text-cactus-orange transition-colors">Buying Guides</Link></li>
                <li><Link to="/gear" className="hover:text-cactus-orange transition-colors">Top 10 Desk Accessories</Link></li>
                <li><Link to="/gear" className="hover:text-cactus-orange transition-colors">Gift Guides</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-cactus-dark font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cactus-orange transition-colors">Terms of Service</a></li>
                <li><Link to="/about" className="hover:text-cactus-orange transition-colors">Contact Us</Link></li>
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
                <a href="https://www.pinterest.com/cactusapparatusshop/" target="_blank" rel="noreferrer" className="hover:text-cactus-dark transition-colors">Pinterest</a>
                <a href="#" className="hover:text-cactus-dark transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
