import React from 'react';
import { Check, X, ShieldAlert, Trophy } from 'lucide-react';

const COMPARISONS = [
  {
    category: "Premium Smartwatches",
    features: ["Price", "Battery Life", "Display", "GPS", "Health Tracking"],
    products: [
      {
        name: "Garmin vívoactive 5",
        isCurated: true,
        specs: ["$299.99", "Up to 11 days", "1.2\" AMOLED", "Built-in", "Advanced Body Battery, Sleep Coach"],
        image: "https://i.ebayimg.com/images/g/UQsAAeSwMCZn0df7/s-l1600.jpg"
      },
      {
        name: "Apple Watch SE (Gen 2)",
        isCurated: false,
        specs: ["$249.00", "Up to 18 hours", "Retina OLED", "Built-in", "Heart Rate, Crash Detection"],
        image: "https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SL1500_.jpg"
      },
      {
        name: "Fitbit Versa 4",
        isCurated: false,
        specs: ["$199.95", "Up to 6 days", "AMOLED", "Built-in", "Active Zone Minutes, SpO2"],
        image: "https://m.media-amazon.com/images/I/61H5G-yD6xL._AC_SL1500_.jpg"
      }
    ]
  },
  {
    category: "Over-Ear ANC Headphones",
    features: ["Price", "ANC Type", "Battery Life", "Connectivity", "Design"],
    products: [
      {
        name: "Soundcore by Anker Q20i",
        isCurated: true,
        specs: ["$49.99", "Hybrid ANC", "40 Hours (ANC On)", "Bluetooth 5.0", "Over-Ear"],
        image: "https://i.ebayimg.com/images/g/ZwUAAOSwlU5mRW6f/s-l1600.jpg"
      },
      {
        name: "Sony WH-CH720N",
        isCurated: false,
        specs: ["$148.00", "Dual Noise Sensor", "35 Hours (ANC On)", "Bluetooth 5.2", "Over-Ear"],
        image: "https://m.media-amazon.com/images/I/41lA0o+0tPL._AC_SL1500_.jpg"
      },
      {
        name: "JBL Tune 760NC",
        isCurated: false,
        specs: ["$129.95", "Active Noise Cancelling", "35 Hours (ANC On)", "Bluetooth 5.0", "Over-Ear"],
        image: "https://m.media-amazon.com/images/I/61QGzHMAf4L._AC_SL1500_.jpg"
      }
    ]
  },
  {
    category: "Open-Ear Headphones",
    features: ["Price", "Design", "Battery Life", "Water Resistance", "Audio Tech"],
    products: [
      {
        name: "SHOKZ OpenFit 2+",
        isCurated: true,
        specs: ["$179.95", "Open-Ear", "48 Hours (with case)", "IP55", "Dolby Audio"],
        image: "https://i.ebayimg.com/images/g/pXgAAeSwuAxpvOqW/s-l1600.jpg"
      },
      {
        name: "Bose Ultra Open Earbuds",
        isCurated: false,
        specs: ["$299.00", "OpenAudio", "48 Hours (with case)", "IPX4", "Immersive Audio"],
        image: "https://m.media-amazon.com/images/I/51uIu2+30jL._AC_SL1500_.jpg"
      },
      {
        name: "Oladance OWS Pro",
        isCurated: false,
        specs: ["$229.99", "Open-Ear", "58 Hours (with case)", "IPX4", "Multipoint Connection"],
        image: "https://m.media-amazon.com/images/I/61iV8X-uV1L._AC_SL1500_.jpg"
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
        specs: ["$119.99", "Full Tower", "4x 120mm ARGB", "Tempered Glass Door", "400mm"],
        image: "https://i.ebayimg.com/images/g/k7AAAOSwHEtmvxpd/s-l1600.jpg"
      },
      {
        name: "NZXT H510 Flow",
        isCurated: false,
        specs: ["$89.99", "Mid Tower", "2x 120mm", "Perforated Mesh", "360mm"],
        image: "https://m.media-amazon.com/images/I/71O1X-B+D7L._AC_SL1500_.jpg"
      },
      {
        name: "Corsair 4000D Airflow",
        isCurated: false,
        specs: ["$104.99", "Mid Tower", "2x 120mm", "Steel Mesh", "360mm"],
        image: "https://m.media-amazon.com/images/I/81hLUh-zP-L._AC_SL1500_.jpg"
      }
    ]
  },
  {
    category: "Budget Smartwatches",
    features: ["Price", "Battery Life", "Display", "GPS", "Health Tracking"],
    products: [
      {
        name: "Fitpolo Smart Watch",
        isCurated: true,
        specs: ["$39.99", "Up to 7 days", "1.3\" AMOLED", "Connected via Phone", "Heart Rate, SpO2, Sleep"],
        image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_SL1500_.jpg"
      },
      {
        name: "Amazfit Bip 3 Pro",
        isCurated: false,
        specs: ["$69.99", "Up to 14 days", "1.69\" TFT", "Built-in 4 Satellite", "Heart Rate, SpO2, Sleep"],
        image: "https://m.media-amazon.com/images/I/61llOWJjA0L._AC_SL1500_.jpg"
      },
      {
        name: "TOZO S2",
        isCurated: false,
        specs: ["$39.99", "Up to 10 days", "1.69\" LCD", "Connected via Phone", "Heart Rate, Sleep, Activity"],
        image: "https://m.media-amazon.com/images/I/61w+D2+L61L._AC_SL1500_.jpg"
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
