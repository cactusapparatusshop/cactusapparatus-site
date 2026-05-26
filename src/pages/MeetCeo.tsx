import React from 'react';
import ceoPortrait from '../assets/images/regenerated_image_1779835053436.jpg';
import { Award, ShieldCheck, Heart, ArrowRight, Quote } from 'lucide-react';

export default function MeetCeo() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20 selection:bg-cactus-green selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Grid */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Image & Quick Stats (40% width on desktop) */}
            <div className="lg:col-span-5 bg-stone-50 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
              <div className="space-y-8">
                {/* Image Frame */}
                <div className="relative group rounded-2xl overflow-hidden border border-stone-200 shadow-lg aspect-[4/5] bg-stone-200">
                  <img 
                    src={ceoPortrait} 
                    alt="Cactus Jack - CEO" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest leading-none">
                    Executive Profile
                  </h3>
                  <div className="space-y-3 font-medium text-stone-700">
                    <p className="flex justify-between text-sm">
                      <span className="text-stone-400">Name:</span>
                      <span className="text-cactus-dark font-bold">Cactus Jack</span>
                    </p>
                    <p className="flex justify-between text-sm col">
                      <span className="text-stone-400">Position:</span>
                      <span className="text-cactus-green font-bold">Co-Founder & CEO</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Humorous warning note */}
              <p className="text-[0.7rem] text-stone-400 mt-8 text-center italic font-medium">
                *Does not like vacuum cleaners. Do not bring vacuums to virtual board meetings.*
              </p>
            </div>

            {/* Right Column: Bio & Achievements (60% width on desktop) */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-10">
              
              {/* Header Title */}
              <div>
                <span className="text-xs font-bold text-cactus-orange uppercase tracking-[0.25em] bg-cactus-orange/10 px-4 py-1.5 rounded-full">
                  Meet Our Leadership
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-cactus-dark mt-6 tracking-tight">
                  Cactus Jack
                </h1>
                <p className="text-xl font-semibold text-cactus-green mt-2">
                  Chief Executive Officer & Chief Bark Officer
                </p>
              </div>

              {/* Quote Block */}
              <div className="bg-stone-50 border-l-4 border-cactus-green p-6 rounded-r-2xl shadow-sm relative overflow-hidden">
                <Quote size={48} className="absolute right-4 bottom-2 text-stone-100/80 -z-0 pointer-events-none" />
                <p className="text-lg text-stone-700 font-medium italic relative z-10">
                  "Bark less, build with steel, curate what endures. If a gadget can't survive a tumble into a canyon or an energetic chew-test, it has no business being on our outpost."
                </p>
              </div>

              {/* Bio Text */}
              <div className="text-stone-600 space-y-6 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  With a keen sense of smell for quality and a legendary level of determination, Cactus Jack has led <strong>Cactus Apparatus</strong> from a dusty garage start-up into the internet's premier outpost for resilient curiosities. 
                </p>
                <p>
                  A native of the high desert wilderness, Cactus Jack's management style is characterized by alert decision-making (evidenced by his signature multi-directional radar ears), prompt morning huddles, and an unwavering commitment to operational durability. 
                </p>
                <p>
                  When he is not reviewing mechanical timepieces or durable full-tower PC setups, Cactus Jack enjoys patrolling the perimeter of the Cactus Apparatus headquarters, doing vigorous field testing on biodegradable tennis balls, and taking power-naps in golden-hour sunlight.
                </p>
              </div>

              {/* Core Executive Values Accordion/Blocks */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h3 className="text-xl font-extrabold text-cactus-dark">Core Executive Values</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Value 1 */}
                  <div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                    <div className="p-3 bg-cactus-green/10 text-cactus-green rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-cactus-dark">Tenacity</h4>
                      <p className="text-stone-500 text-sm mt-1">
                        Relentless pursuit of quality. We chew on problems until they dissolve.
                      </p>
                    </div>
                  </div>

                  {/* Value 2 */}
                  <div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                    <div className="p-3 bg-cactus-orange/10 text-cactus-orange rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-cactus-dark">Field-Proven</h4>
                      <p className="text-stone-500 text-sm mt-1">
                        If we can't stamp our paw of approval on durability, we don't list it.
                      </p>
                    </div>
                  </div>

                  {/* Value 3 */}
                  <div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                    <div className="p-3 bg-cactus-green/10 text-cactus-green rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-cactus-dark">Absolute Loyalty</h4>
                      <p className="text-stone-500 text-sm mt-1">
                        We remain fiercely loyal to our community, keeping reviews honest and clean.
                      </p>
                    </div>
                  </div>

                  {/* Value 4 */}
                  <div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                    <div className="p-2.5 bg-cactus-orange/10 text-cactus-orange rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                      <span className="text-xl">🐾</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-cactus-dark">Alert Design</h4>
                      <p className="text-stone-500 text-sm mt-1">
                        Always scanning the horizon for the next resilient, tactile curiosity.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
