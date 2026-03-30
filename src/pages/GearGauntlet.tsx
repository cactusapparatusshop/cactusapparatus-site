import React from 'react';
import { Check, X, ShieldAlert, Trophy } from 'lucide-react';

const COMPARISONS = [
  {
    category: "Smartwatches",
    features: ["Price", "Battery Life", "Display", "GPS", "Health Tracking"],
    products: [
      {
        name: "Garmin vívoactive 5",
        isCurated: true,
        specs: ["$299.99", "Up to 11 days", "1.2\" AMOLED", "Built-in", "Advanced Body Battery, Sleep Coach"],
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Apple Watch SE (Gen 2)",
        isCurated: false,
        specs: ["$249.00", "Up to 18 hours", "Retina OLED", "Built-in", "Heart Rate, Crash Detection"],
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Fitbit Versa 4",
        isCurated: false,
        specs: ["$199.95", "Up to 6 days", "AMOLED", "Built-in", "Active Zone Minutes, SpO2"],
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    category: "PC Cases",
    features: ["Price", "Form Factor", "Included Fans", "Front Panel", "Max GPU Length"],
    products: [
      {
        name: "VETROO AL800",
        isCurated: true,
        specs: ["$119.99", "Mid Tower", "None (Showcase)", "Tempered Glass", "400mm"],
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "NZXT H510 Flow",
        isCurated: false,
        specs: ["$89.99", "Mid Tower", "2x 120mm", "Perforated Mesh", "360mm"],
        image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Corsair 4000D Airflow",
        isCurated: false,
        specs: ["$104.99", "Mid Tower", "2x 120mm", "Steel Mesh", "360mm"],
        image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    category: "Mechanical Keyboards",
    features: ["Price", "Layout", "Connectivity", "Switches", "Hot-Swappable"],
    products: [
      {
        name: "Keychron K2",
        isCurated: true,
        specs: ["$79.00", "75% (84 Keys)", "Bluetooth 5.1 / Wired", "Gateron G Pro", "Yes (Optional)"],
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "NuPhy Air75",
        isCurated: false,
        specs: ["$109.95", "75% Low-Profile", "2.4G / BT 5.0 / Wired", "Gateron Low-Profile", "Yes"],
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Logitech MX Mechanical Mini",
        isCurated: false,
        specs: ["$149.99", "75% Low-Profile", "Logi Bolt / BT", "Tactile Quiet", "No"],
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    category: "Productivity Mice",
    features: ["Price", "Sensor", "Scroll Wheel", "Buttons", "Multi-Device"],
    products: [
      {
        name: "Logitech MX Master 3S",
        isCurated: true,
        specs: ["$99.99", "8000 DPI Darkfield", "MagSpeed Electromagnetic", "7 Custom Buttons", "Up to 3 Devices"],
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Razer Pro Click",
        isCurated: false,
        specs: ["$99.99", "16000 DPI Optical", "Standard Scroll", "8 Programmable", "Up to 4 Devices"],
        image: "https://images.unsplash.com/photo-1615663245857-ac1eeb536fcb?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Apple Magic Mouse",
        isCurated: false,
        specs: ["$79.00", "Standard Optical", "Multi-Touch Surface", "Touch Surface", "1 Device (Mac)"],
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    category: "Noise-Cancelling Headphones",
    features: ["Price", "ANC Quality", "Battery Life", "Weight", "Multipoint"],
    products: [
      {
        name: "Sony WH-1000XM5",
        isCurated: true,
        specs: ["$398.00", "Industry Leading", "30 Hours", "250g", "Yes"],
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Bose QuietComfort Ultra",
        isCurated: false,
        specs: ["$429.00", "World-Class", "24 Hours", "252g", "Yes"],
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Sennheiser Momentum 4",
        isCurated: false,
        specs: ["$379.95", "Excellent", "60 Hours", "293g", "Yes"],
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400"
      }
    ]
  }
];

export default function GearGauntlet() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-white p-4 rounded-full inline-block mb-6 shadow-sm border border-stone-200">
            <ShieldAlert size={48} className="text-cactus-orange" />
          </div>
          <h1 className="text-5xl font-extrabold text-cactus-dark mb-6">Gear Gauntlet</h1>
          <p className="text-xl text-stone-600">
            We put our curated gear head-to-head against the competition. See how they stack up in our comprehensive comparison tables.
          </p>
        </div>

        <div className="space-y-24">
          {COMPARISONS.map((category, catIdx) => (
            <div 
              key={category.category} 
              className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              <h2 className="text-3xl font-extrabold text-cactus-dark mb-8 flex items-center gap-3">
                {category.category}
              </h2>
              
              <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden overflow-x-auto">
                <table className="w-full min-w-[800px] text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-6 border-b border-stone-200 bg-stone-50 w-1/4">
                        <span className="text-sm font-bold text-stone-500 uppercase tracking-wider">Features</span>
                      </th>
                      {category.products.map((product) => (
                        <th key={product.name} className={`p-6 border-b border-stone-200 w-1/4 ${product.isCurated ? 'bg-cactus-green/5' : 'bg-white'}`}>
                          <div className="flex flex-col items-center text-center">
                            {product.isCurated && (
                              <div className="flex items-center gap-1 text-cactus-green text-xs font-bold uppercase tracking-wider mb-3 bg-cactus-green/10 px-3 py-1 rounded-full">
                                <Trophy size={14} /> Top Pick
                              </div>
                            )}
                            <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-white border border-stone-100 p-2">
                              <img src={product.image} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                            </div>
                            <span className={`text-lg font-bold ${product.isCurated ? 'text-cactus-green' : 'text-cactus-dark'}`}>
                              {product.name}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature, featureIdx) => (
                      <tr key={feature} className="hover:bg-stone-50/50 transition-colors">
                        <td className="p-6 border-b border-stone-100 font-medium text-stone-600">
                          {feature}
                        </td>
                        {category.products.map((product) => (
                          <td key={`${product.name}-${feature}`} className={`p-6 border-b border-stone-100 ${product.isCurated ? 'bg-cactus-green/5 font-medium text-cactus-dark' : 'text-stone-600'}`}>
                            {product.specs[featureIdx]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
